import type { TAXYData } from "../charts/chart-helper";
import { yyyyMMdd, type IyyyyMMdd } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { SchoolRepository } from "../repositories/school-repository";
import { DailyLessonService } from "./daily-lesson-service";

export class StatisticsService {
    private static _instance: StatisticsService | null = null;

    public static get instance(): StatisticsService {
        if (!this._instance) this._instance = new StatisticsService();
        return this._instance;
    }

    public async getSalaryTrend(from: IyyyyMMdd, to: IyyyyMMdd, ...schoolIds: ID[]): Promise<TAXYData[]> {

        const data: TAXYData[] = [];
        if (!schoolIds || schoolIds.length == 0) {
            const schools = await SchoolRepository.instance.getAll();
            schoolIds = schools.map(s => s.id);
        }

        for await (const schoolId of schoolIds) {
            const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(schoolId, from, to);
            const seriesData: TAXYData[] = dailyLessons.filter(d => !isNaN(d.salary))
                .map(d => ({ date: yyyyMMdd.fromIyyyyMMdd(d.date).toDate().getTime(), value: d.salary }))
            data.push(...seriesData);
        }

        return data;
    }
}