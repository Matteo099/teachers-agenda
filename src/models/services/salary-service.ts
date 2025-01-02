import { LessonStatus, SalaryStrategy, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type Salary, type School, type StudentLesson } from "../model";
import { DailyLessonService } from "./daily-lesson-service";

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

    public computeSalaryByStudentLesson(school: School | undefined, less: StudentLesson): number {
        if(!school) return 0;

        const computeSalary =
            (school.salaryStrategy == SalaryStrategy.ABSENT_AND_PRESENT && (less.status == LessonStatus.PRESENT || less.status == LessonStatus.ABSENT)) ||
            (school.salaryStrategy == SalaryStrategy.ONLY_PRESENT && less.status == LessonStatus.PRESENT);

        if (computeSalary) {
            const priceAtMinute = school.levelRanges.find(l => l.levels.includes(less.level))?.price;
            if (priceAtMinute != undefined) {
                return priceAtMinute * ((less.endTime - less.startTime) / 60);
            }
        }

        return 0;
    }

}