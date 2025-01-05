import type { TAPieData, TAXYData } from "../charts/chart-helper";
import { yyyyMMdd, type IyyyyMMdd, type School } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { SchoolRepository } from "../repositories/school-repository";
import { StudentRepository } from "../repositories/student-repository";
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

    public async getSalaryDistribution(from: string, to: string, ...schools: School[]): Promise<TAPieData[]> {

        const data: TAPieData[] = [];
        if (!schools || schools.length == 0) {
            schools = await SchoolRepository.instance.getAll();
        }

        for await (const school of schools) {
            const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);
            const total = dailyLessons.filter(d => !isNaN(d.salary)).map(d => d.salary).reduce((a, b) => a + b, 0);
            data.push({
                category: school.name,
                value: total
            });
        }

        return data;
    }

    public async getSchoolDistribution(): Promise<TAPieData[]> {
        const schools = await SchoolRepository.instance.getAll();
        return schools.map(s => ({
            category: s.name,
            value: 1
        }));
    }

    public async getSchoolStudentDistribution(): Promise<TAPieData[]> {
        const data: TAPieData[] = [];
        const schools = await SchoolRepository.instance.getAll();
        const students = await StudentRepository.instance.getAll();
        for (const school of schools) {
            const total = students.filter(s => s.schoolId == school.id).length;
            data.push({
                category: school.name,
                value: total
            })
        }
        return data;
    }
}