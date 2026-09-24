import { LessonStatus, ReimbursementDayStrategy, SalaryStrategy, type DailyLesson, type IyyyyMMdd, type MonthlySalaryReport, type School } from '../model';
import { DailyLessonService } from './daily-lesson-service';
import { SalaryService } from './salary-service';
import { StudentLessonService } from './student-lesson-service';

export class MonthlySalaryService {
    private static _instance: MonthlySalaryService | null = null;

    public static get instance(): MonthlySalaryService {
        if (!this._instance) this._instance = new MonthlySalaryService();
        return this._instance;
    }

    public async compute(school: School, from: IyyyyMMdd, to: IyyyyMMdd): Promise<MonthlySalaryReport> {
        const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);
        const regularLessonsTotal = await this.computeRegularLessons(school, dailyLessons);
        const recoveryTotal = await this.computeRecoveries(school, dailyLessons);
        const activityDays = this.countActivityDays(dailyLessons, school.reimbursementDayStrategy ?? ReimbursementDayStrategy.COMPLETED);
        const reimbursementTotal = activityDays * (school.dailyExpenseReimbursement ?? 0);

        return { schoolId: school.id, from, to, regularLessonsTotal, recoveryTotal, reimbursementTotal, activityDays,
            netTotal: regularLessonsTotal + recoveryTotal + reimbursementTotal };
    }

    private async computeRecoveries(school: School, dailyLessons: DailyLesson[]): Promise<number> {
        if (school.salaryStrategy !== SalaryStrategy.ONLY_PRESENT) return 0;
        const rate = school.recoveryHourlyRate ?? 0;
        if (!rate) return 0;
        let total = 0;
        for (const dailyLesson of dailyLessons) {
            const completedRecoveries = dailyLesson.lessons.filter(lesson => lesson.recovery?.ref === 'original' && lesson.status === LessonStatus.PRESENT);
            for (const lesson of completedRecoveries) {
                total += rate * ((lesson.endTime - lesson.startTime) / 3600);
            }
        }
        return total;
    }

    private async computeRegularLessons(school: School, dailyLessons: DailyLesson[]): Promise<number> {
        let total = 0;
        for (const dailyLesson of dailyLessons) {
            const studentLessons = await StudentLessonService.instance.getStudentLesson(dailyLesson);
            for (const { lesson, student } of studentLessons) {
                total += await SalaryService.instance.getSalaryOfStudentLesson(school, lesson, student, dailyLesson.date);
            }
        }
        return total;
    }

    private countActivityDays(dailyLessons: DailyLesson[], strategy: ReimbursementDayStrategy): number {
        return dailyLessons.filter(dailyLesson => {
            if (strategy === ReimbursementDayStrategy.SCHEDULED) return dailyLesson.lessons.length > 0;
            return dailyLesson.lessons.some(lesson => lesson.status === LessonStatus.PRESENT || lesson.status === LessonStatus.TRIAL);
        }).length;
    }
}
