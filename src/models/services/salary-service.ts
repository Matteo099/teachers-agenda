import { LessonStatus, SalaryStrategy, TrialLessonPaymentStrategy, type DailyLesson, type IyyyyMMdd, type Lesson, type Salary, type School, type Student, type StudentLesson, type StudentLesson2 } from "../model";
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

        const computeSalary =
            (school.salaryStrategy == SalaryStrategy.ABSENT_AND_PRESENT && (lesson.status == LessonStatus.PRESENT || lesson.status == LessonStatus.ABSENT || lesson.status == LessonStatus.UNJUSTIFIED_ABSENCE || lesson.moved?.ref == 'moved') && !(lesson.recovery?.ref == 'original' || lesson.moved?.ref == 'original')) ||
            (school.salaryStrategy == SalaryStrategy.ONLY_PRESENT && lesson.status == LessonStatus.PRESENT) ||
            (school.trialLessonPaymentStrategy != TrialLessonPaymentStrategy.NOTHING && lesson.status == LessonStatus.TRIAL);

        if (computeSalary) {
            student ??= await StudentRepository.instance.get(lesson.studentId);
            const studentLevel = StudentService.instance.getLevelByDate(student!, lessonDate);
            const priceAtMinute = school.levelRanges.find(l => l.levels.includes(studentLevel))?.price;
            if (priceAtMinute != undefined) {
                const tot = priceAtMinute * ((lesson.endTime - lesson.startTime) / 60);
                if (lesson.status == LessonStatus.TRIAL && school.trialLessonPaymentStrategy == TrialLessonPaymentStrategy.HALF)
                    return tot / 2;
                return tot;
            }
        }

        return 0;
    }
}