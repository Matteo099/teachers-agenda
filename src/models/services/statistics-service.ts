import type { TAPieData, TAStudentTrendData, TAXYData } from "../charts/chart-helper";
import { LessonStatus, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type School, type Student } from "../model";
import { getStudentRecitalPieces } from "../recital-pieces";
import { SchoolRepository } from "../repositories/school-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { StudentRepository } from "../repositories/student-repository";
import { DailyLessonService } from "./daily-lesson-service";
import { MonthlySalaryService } from "./monthly-salary-service";

export interface MonthlySalarySummary {
    month: string;
    salary: number;
}

export interface StudentAbsenceSummary {
    student: string;
    total: number;
    unjustified: number;
    recoverable: number;
    recovered: number;
}

export interface RecitalStudent {
    id: string;
    student: string;
    school: string;
    piece: string;
    author: string;
}

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

    public async getMonthlySalarySummary(from: string, to: string, ...schools: School[]): Promise<MonthlySalarySummary[]> {
        if (!schools || schools.length === 0) schools = await this.cache.getSchools();
        const totals = new Map<string, number>();

        for (const school of schools) {
            const lessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);
            for (const lesson of lessons) {
                const month = lesson.date.substring(0, 6);
                const salary = Number.isNaN(lesson.salary) ? 0 : lesson.salary;
                totals.set(month, (totals.get(month) ?? 0) + salary);
            }
            if (school.managed && school.managerOptions) {
                const start = yyyyMMdd.fromIyyyyMMdd(from).toDate();
                const end = yyyyMMdd.fromIyyyyMMdd(to).toDate();
                let monthDate = new Date(start.getFullYear(), start.getMonth(), 1);
                while (monthDate <= new Date(end.getFullYear(), end.getMonth(), 1)) {
                    const month = `${monthDate.getFullYear()}${String(monthDate.getMonth() + 1).padStart(2, '0')}`;
                    const monthFrom = `${month}01`;
                    const monthTo = yyyyMMdd.fromDate(new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0)).toIyyyyMMdd();
                    totals.set(month, (totals.get(month) ?? 0) + MonthlySalaryService.instance.computeManagementTotal(school, monthFrom, monthTo));
                    monthDate = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1);
                }
            }
        }

        return [...totals.entries()]
            .sort(([first], [second]) => first.localeCompare(second))
            .map(([month, salary]) => ({
                month: `${month.substring(4, 6)}/${month.substring(0, 4)}`,
                salary,
            }));
    }

    public async getStudentAbsenceSummary(from: string, to: string, ...schools: School[]): Promise<StudentAbsenceSummary[]> {
        if (!schools || schools.length === 0) schools = await this.cache.getSchools();

        const schoolIds = new Set(schools.map(school => school.id));
        const students = (await this.cache.getStudents()).filter(student => schoolIds.has(student.schoolId));
        const result = new Map<string, StudentAbsenceSummary>();

        for (const student of students) {
            result.set(student.id, {
                student: `${student.name} ${student.surname}`,
                total: 0,
                unjustified: 0,
                recoverable: 0,
                recovered: 0,
            });
        }

        for (const school of schools) {
            const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, from, to);
            const dailyLessonsById = new Map<string, DailyLesson | undefined>(dailyLessons.map(day => [day.id, day]));
            for (const dailyLesson of dailyLessons) {
                for (const lesson of dailyLesson.lessons) {
                    const summary = result.get(lesson.studentId);
                    if (!summary || ![LessonStatus.ABSENT, LessonStatus.UNJUSTIFIED_ABSENCE].includes(lesson.status)) continue;

                    summary.total++;
                    let recovered = false;
                    if (lesson.recovery?.ref === 'recovery') {
                        const { dailyLessonId, lessonId } = lesson.recovery.lessonRef;
                        if (!dailyLessonsById.has(dailyLessonId)) {
                            dailyLessonsById.set(dailyLessonId, await DailyLessonRepository.instance.get(dailyLessonId));
                        }
                        const recoveryLesson = dailyLessonsById.get(dailyLessonId)?.lessons.find(candidate => candidate.lessonId === lessonId);
                        recovered = recoveryLesson?.studentId === lesson.studentId && recoveryLesson.status === LessonStatus.PRESENT;
                    }

                    if (recovered) summary.recovered++;
                    else if (lesson.status === LessonStatus.UNJUSTIFIED_ABSENCE) summary.unjustified++;
                    else summary.recoverable++;
                }
            }
        }

        return [...result.values()]
            .filter(summary => summary.total > 0)
            .sort((first, second) => second.total - first.total || first.student.localeCompare(second.student));
    }

    public async getRecitalStudents(...schools: School[]): Promise<RecitalStudent[]> {
        if (!schools || schools.length === 0) schools = await this.cache.getSchools();
        const schoolNames = new Map(schools.map(school => [school.id, school.name]));
        return (await this.cache.getStudents())
            .filter(student => schoolNames.has(student.schoolId))
            .flatMap(student => getStudentRecitalPieces(student).map((recital, index) => ({
                id: `${student.id}-${index}`,
                student: `${student.name} ${student.surname}`,
                school: schoolNames.get(student.schoolId)!,
                piece: recital.piece,
                author: recital.author,
            })))
            .sort((first, second) => first.student.localeCompare(second.student));
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
