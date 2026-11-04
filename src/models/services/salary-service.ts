import { Timestamp } from "firebase/firestore";
import { LessonStatus, SalaryStrategy, TrialLessonPaymentStrategy, type DailyLesson, type IyyyyMMdd, type Lesson, type LessonCompensation, type Salary, type School, type Student } from "../model";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { StudentRepository } from "../repositories/student-repository";
import { DailyLessonService } from "./daily-lesson-service";
import { StudentService } from "./student-service";

export class SalaryService {
    private static _instance: SalaryService | null = null;

    public static get instance(): SalaryService {
        if (!this._instance) this._instance = new SalaryService();
        return this._instance;
    }

    public async computeSalary(school: School, from: IyyyyMMdd, to: IyyyyMMdd): Promise<Salary[]> {
        const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to, school);

        return this.computeSalaryOfDailyLessons(dailyLessons);
    }

    public async computeSalaryOfDailyLessons(dailyLessons: DailyLesson[]): Promise<Salary[]> {
        const salaries: Salary[] = []
        dailyLessons.forEach(dl => {
            const presents = dl.lessons.filter(l => l.status == LessonStatus.PRESENT).length;
            const absents = dl.lessons.filter(l => l.status == LessonStatus.ABSENT).length;
            salaries.push({
                dailyLessonId: dl.id,
                date: dl.date,
                lastUpdate: dl.lastSalaryUpdate,
                salary: dl.salary,
                presents,
                absents,
            })
        })
        return salaries;
    }

    /** Correct legacy totals only on days affected by a move, keeping other saved salaries intact. */
    public async reconcileMovedDailyLessons(school: School, dailyLessons: DailyLesson[]): Promise<void> {
        const movedDays = dailyLessons.filter(day => day.lessons.some(lesson => lesson.moved));
        if (!movedDays.length) return;
        const students = await StudentService.instance.getStudentsOfSchool(school.id);
        const studentsById = new Map(students.map(student => [student.id, student]));

        for (const day of movedDays) {
            const schoolForDay = day.salaryStrategy ? { ...school, salaryStrategy: day.salaryStrategy } : school;
            let salary = 0;
            for (const lesson of day.lessons) {
                if (lesson.hiddenForDate || lesson.moved?.ref === 'moved') continue;
                const student = studentsById.get(lesson.studentId);
                if (!student) continue;
                const compensation = await this.getLessonCompensation(schoolForDay, lesson, student, day.date);
                if (!compensation) continue;
                salary += lesson.compensation?.amount ?? compensation.amount;
                if (!lesson.compensation) lesson.compensation = compensation;
            }
            if (Math.abs(salary - (day.salary ?? 0)) < 0.001) continue;
            day.salary = salary;
            day.lastSalaryUpdate = Timestamp.now();
            await DailyLessonRepository.instance.save(day, day.id);
        }
    }

    public async getSalaryOfStudentLesson(school: School | undefined, lesson: Lesson, student: Student | undefined, lessonDate: IyyyyMMdd): Promise<number> {
        if (!school) return 0;

        // A recovery is accounted for separately, on the date it is physically performed.
        if (lesson.recovery?.ref === 'original' || lesson.moved?.ref === 'moved') return 0;

        const computeSalary =
            (school.salaryStrategy == SalaryStrategy.ABSENT_AND_PRESENT && (lesson.status == LessonStatus.PRESENT || lesson.status == LessonStatus.ABSENT || lesson.status == LessonStatus.UNJUSTIFIED_ABSENCE || lesson.moved?.ref == 'original')) ||
            (school.salaryStrategy == SalaryStrategy.ONLY_PRESENT && lesson.status == LessonStatus.PRESENT) ||
            (school.trialLessonPaymentStrategy != TrialLessonPaymentStrategy.NOTHING && lesson.status == LessonStatus.TRIAL);

        if (computeSalary) {
            student ??= await StudentRepository.instance.get(lesson.studentId);
            if (!student) return 0;
            const studentLevel = StudentService.instance.getLevelByDate(student!, lessonDate);
            const hourlyRate = student.hourlyRate ?? school.levelRanges.find(l => l.levels.includes(studentLevel))?.price;
            if (hourlyRate != undefined) {
                const tot = hourlyRate * ((lesson.endTime - lesson.startTime) / 3600);
                if (lesson.status == LessonStatus.TRIAL && school.trialLessonPaymentStrategy == TrialLessonPaymentStrategy.HALF)
                    return tot / 2;
                return tot;
            }
        }

        return 0;
    }

    /** Salary of a completed recovery in pay-per-performance schools. */
    public async getSalaryOfRecoveryLesson(school: School | undefined, lesson: Lesson, student: Student | undefined, lessonDate: IyyyyMMdd): Promise<number> {
        if (!school || school.salaryStrategy !== SalaryStrategy.ONLY_PRESENT || lesson.recovery?.ref !== 'original' || lesson.status !== LessonStatus.PRESENT)
            return 0;

        student ??= await StudentRepository.instance.get(lesson.studentId);
        if (!student) return 0;

        const studentLevel = StudentService.instance.getLevelByDate(student, lessonDate);
        const hourlyRate = student.hourlyRate ?? school.levelRanges.find(l => l.levels.includes(studentLevel))?.price;
        if (hourlyRate == undefined) return 0;

        return hourlyRate * ((lesson.endTime - lesson.startTime) / 3600);
    }

    public async getLessonCompensation(school: School | undefined, lesson: Lesson, student: Student | undefined, lessonDate: IyyyyMMdd): Promise<LessonCompensation | undefined> {
        if (!school || lesson.moved?.ref === 'moved') return;
        student ??= await StudentRepository.instance.get(lesson.studentId);
        if (!student) return;

        const minutes = (lesson.endTime - lesson.startTime) / 60;
        const level = StudentService.instance.getLevelByDate(student, lessonDate);
        const hourlyRate = student.hourlyRate ?? school.levelRanges.find(l => l.levels.includes(level))?.price;
        if (hourlyRate == undefined) return;

        const recovery = lesson.recovery?.ref === 'original';
        const paidRecovery = recovery && school.salaryStrategy === SalaryStrategy.ONLY_PRESENT && lesson.status === LessonStatus.PRESENT;
        const regularPaid = !recovery && (
            (school.salaryStrategy === SalaryStrategy.ABSENT_AND_PRESENT && (lesson.moved?.ref === 'original' || [LessonStatus.PRESENT, LessonStatus.ABSENT, LessonStatus.UNJUSTIFIED_ABSENCE].includes(lesson.status))) ||
            (school.salaryStrategy === SalaryStrategy.ONLY_PRESENT && lesson.status === LessonStatus.PRESENT)
        );
        const trialPaid = !recovery && lesson.status === LessonStatus.TRIAL && school.trialLessonPaymentStrategy !== TrialLessonPaymentStrategy.NOTHING;
        if (!paidRecovery && !regularPaid && !trialPaid) return;

        let amount = hourlyRate * (minutes / 60);
        let type: LessonCompensation['type'] = 'REGULAR';
        if (paidRecovery) type = 'RECOVERY';
        else if (trialPaid) {
            type = 'TRIAL';
            if (school.trialLessonPaymentStrategy === TrialLessonPaymentStrategy.HALF) amount /= 2;
        } else if (lesson.status === LessonStatus.ABSENT || lesson.status === LessonStatus.UNJUSTIFIED_ABSENCE) type = 'ABSENCE';

        return { level, hourlyRate, minutes, amount, type };
    }
}
