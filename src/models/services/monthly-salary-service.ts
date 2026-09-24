import { LessonStatus, SalaryStrategy, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type MonthlySalaryReport, type School } from '../model';
import { DailyLessonService } from './daily-lesson-service';
import { SalaryService } from './salary-service';
import { StudentLessonService } from './student-lesson-service';
import { WeeklyLessonService } from './weely-lesson-service';

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
        const activityDays = await this.countOfficialCalendarDays(school.id, from, to, dailyLessons);
        const reimbursementTotal = activityDays * (school.dailyExpenseReimbursement ?? 0);

        return { schoolId: school.id, from, to, regularLessonsTotal, recoveryTotal, reimbursementTotal, activityDays,
            officialCalendarDays: activityDays,
            netTotal: regularLessonsTotal + recoveryTotal + reimbursementTotal };
    }

    private async computeRecoveries(school: School, dailyLessons: DailyLesson[]): Promise<number> {
        if (school.salaryStrategy !== SalaryStrategy.ONLY_PRESENT) return 0;
        let total = 0;
        for (const dailyLesson of dailyLessons) {
            const completedRecoveries = dailyLesson.lessons.filter(lesson => lesson.recovery?.ref === 'original' && lesson.status === LessonStatus.PRESENT);
            for (const lesson of completedRecoveries) {
                if (lesson.compensation?.type === 'RECOVERY') {
                    total += lesson.compensation.amount;
                    continue;
                }
                const student = (await StudentLessonService.instance.getStudentLesson(dailyLesson, [lesson.studentId]))
                    .find(sl => sl.lesson.lessonId === lesson.lessonId);
                total += await SalaryService.instance.getSalaryOfRecoveryLesson(school, lesson, student?.student, dailyLesson.date);
            }
        }
        return total;
    }

    private async computeRegularLessons(school: School, dailyLessons: DailyLesson[]): Promise<number> {
        let total = 0;
        for (const dailyLesson of dailyLessons) {
            const studentLessons = await StudentLessonService.instance.getStudentLesson(dailyLesson);
            for (const { lesson, student } of studentLessons) {
                // Moved origin is marker only; economic amount belongs to destination.
                if (lesson.moved?.ref === 'moved') continue;
                total += lesson.compensation?.type !== 'RECOVERY'
                    ? (lesson.compensation?.amount ?? await SalaryService.instance.getSalaryOfStudentLesson(school, lesson, student, dailyLesson.date))
                    : 0;
            }
        }
        return total;
    }

    private async countOfficialCalendarDays(schoolId: string, from: IyyyyMMdd, to: IyyyyMMdd, dailyLessons: DailyLesson[]): Promise<number> {
        const officialDates = new Set(dailyLessons.filter(d => d.isOfficialCalendarDate === true).map(d => d.date));
        const explicitlyExcludedDates = new Set(dailyLessons.filter(d => d.isOfficialCalendarDate === false).map(d => d.date));
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(schoolId);
        let date = yyyyMMdd.fromIyyyyMMdd(from).toDate();
        const end = yyyyMMdd.fromIyyyyMMdd(to).toDate();
        while (date <= end) {
            const dateString = yyyyMMdd.fromDate(date).toIyyyyMMdd();
            if (!explicitlyExcludedDates.has(dateString) && weeklyLessons.some(wl => WeeklyLessonService.instance.isValid(wl, dateString))) officialDates.add(dateString);
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return officialDates.size;
    }
}
