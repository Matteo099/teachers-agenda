import { LessonStatus, SalaryStrategy, TrialLessonPaymentStrategy, type DailyLesson, type IyyyyMMdd, type Lesson, type LessonCompensation, type Salary, type School, type Student } from "../model";
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
        const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);

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

    public async getSalaryOfStudentLesson(school: School | undefined, lesson: Lesson, student: Student | undefined, lessonDate: IyyyyMMdd): Promise<number> {
        if (!school) return 0;

        // A recovery is accounted for separately, on the date it is physically performed.
        if (lesson.recovery?.ref === 'original') return 0;

        const computeSalary =
            (school.salaryStrategy == SalaryStrategy.ABSENT_AND_PRESENT && (lesson.status == LessonStatus.PRESENT || lesson.status == LessonStatus.ABSENT || lesson.status == LessonStatus.UNJUSTIFIED_ABSENCE || lesson.moved?.ref == 'moved') && !lesson.moved?.ref?.includes('original')) ||
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
        if (!school) return;
        student ??= await StudentRepository.instance.get(lesson.studentId);
        if (!student) return;

        const minutes = (lesson.endTime - lesson.startTime) / 60;
        const level = StudentService.instance.getLevelByDate(student, lessonDate);
        const hourlyRate = student.hourlyRate ?? school.levelRanges.find(l => l.levels.includes(level))?.price;
        if (hourlyRate == undefined) return;

        const recovery = lesson.recovery?.ref === 'original';
        const paidRecovery = recovery && school.salaryStrategy === SalaryStrategy.ONLY_PRESENT && lesson.status === LessonStatus.PRESENT;
        const regularPaid = !recovery && (
            (school.salaryStrategy === SalaryStrategy.ABSENT_AND_PRESENT && [LessonStatus.PRESENT, LessonStatus.ABSENT, LessonStatus.UNJUSTIFIED_ABSENCE].includes(lesson.status)) ||
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
