import type { TAPieData, TAStudentTrendData, TAXYData } from "../charts/chart-helper";
import { LessonStatus, yyyyMMdd, type IyyyyMMdd, type School, type Student } from "../model";
import { SchoolRepository } from "../repositories/school-repository";
import { StudentRepository } from "../repositories/student-repository";
import { DailyLessonService } from "./daily-lesson-service";

class StatisticsCache {
    private schools: School[] = [];
    private students: Student[] = [];

    public async getSchools(): Promise<School[]> {
        if (this.schools.length == 0) this.schools = await SchoolRepository.instance.getAll();
        return this.schools;
    }

    public async getStudents(): Promise<Student[]> {
        if (this.students.length == 0) this.students = await StudentRepository.instance.getAll();
        return this.students;
    }

    public clear() {
        this.schools = [];
        this.students = [];
    }
}

export class StatisticsService {
    public readonly cache = new StatisticsCache();
    private static _instance: StatisticsService | null = null;

    public static get instance(): StatisticsService {
        if (!this._instance) this._instance = new StatisticsService();
        return this._instance;
    }


    public async getSalaryTrend(from: IyyyyMMdd, to: IyyyyMMdd, ...schools: School[]): Promise<TAXYData[]> {

        const data: TAXYData[] = [];
        if (!schools || schools.length == 0) {
            schools = await this.cache.getSchools();
        }

        for await (const school of schools) {
            const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);
            const seriesData: TAXYData[] = dailyLessons.filter(d => !isNaN(d.salary))
                .map(d => ({ date: yyyyMMdd.fromIyyyyMMdd(d.date).toDate().getTime(), value: d.salary }))
            data.push(...seriesData);
        }

        return data.sort((a, b) => a.date - b.date);
    }

    public async getSalaryDistribution(from: string, to: string, ...schools: School[]): Promise<TAPieData[]> {

        const data: TAPieData[] = [];
        if (!schools || schools.length == 0) {
            schools = await this.cache.getSchools();
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

    public async getSchoolDistribution(...schools: School[]): Promise<TAPieData[]> {
        if (!schools || schools.length == 0) {
            schools = await this.cache.getSchools();
        }
        return schools.map(s => ({
            category: s.name,
            value: 1
        }));
    }

    public async getSchoolStudentDistribution(...schools: School[]): Promise<TAPieData[]> {
        const data: TAPieData[] = [];
        if (!schools || schools.length == 0) {
            schools = await this.cache.getSchools();
        }
        const students = await this.cache.getStudents();
        for (const school of schools) {
            const total = students.filter(s => s.schoolId == school.id).length;
            if (total)
                data.push({
                    category: school.name,
                    value: total
                })
        }
        return data;
    }

    public async getStudentTrend(from: string, to: string, ...schools: School[]): Promise<TAStudentTrendData[]> {
        const data: TAStudentTrendData[] = [];

        if (!schools || schools.length == 0) {
            schools = await this.cache.getSchools();
        }

        for await (const school of schools) {
            const students = (await this.cache.getStudents()).filter(s => s.schoolId == school.id);
            const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);

            students.forEach(student => {
                const item: TAStudentTrendData = {
                    student: student.name + " " + student.surname,
                    present: 0,
                    absent: 0,
                    recovery: 0
                };
                for (const dl of dailyLessons) {
                    const lesson = dl.lessons.find(l => l.studentId == student.id)
                    if (lesson) {
                        if (lesson.recovery?.ref == 'original') item.recovery++;
                        if (lesson.status == LessonStatus.PRESENT) item.present++;
                        else if (lesson.status == LessonStatus.ABSENT) item.absent++;
                    }
                }
                if (!item.present && !item.absent && !item.recovery) return;
                data.push(item);
            })
        }
        return data;
    }

    public async getLessonTrend(from: string, to: string, ...schools: School[]): Promise<TAPieData[]> {
        const present: TAPieData = {
            category: "Presenze",
            value: 0
        };
        const absent: TAPieData = {
            category: "Assenze",
            value: 0
        };
        const recovery: TAPieData = {
            category: "Recuperi",
            value: 0
        };

        if (!schools || schools.length == 0) {
            schools = await this.cache.getSchools();
        }

        for await (const school of schools) {
            const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);
            for (const dl of dailyLessons) {
                present.value += dl.lessons.filter(l => l.status == LessonStatus.PRESENT).length;
                absent.value += dl.lessons.filter(l => l.status == LessonStatus.ABSENT).length;
                recovery.value += dl.lessons.filter(l => l.recovery?.ref == 'original').length;
            }
        }

        return [present, absent, recovery];
    }
}