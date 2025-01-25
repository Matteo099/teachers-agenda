import { DocumentReference, where, writeBatch } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { yyyyMMdd, type DailyLesson, type IyyyyMMdd, type SchoolRecoveryLesson, type Student, type TodayLesson, type WeeklyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/recovery-lesson-repository";
import { SchoolRepository } from "../repositories/school-repository";
import { StudentRepository } from "../repositories/student-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof } from "../utils";
import { DailyLessonService } from "./daily-lesson-service";
import { type SchoolLessons } from "./lesson-group-service";
import { WeeklyLessonService } from "./weely-lesson-service";

export class SchoolService {

    private static _instance: SchoolService | null = null;

    public static get instance(): SchoolService {
        if (!this._instance) this._instance = new SchoolService();
        return this._instance;
    }

    public async deleteById(id: ID): Promise<void> {
        const batches = writeBatch(useFirestore());

        // delete school and all relations
        const school = await SchoolRepository.instance.getDoc(id)
        batches.delete(school.ref);

        // delete relations
        (await this.getSchoolRelations(id)).forEach(ref => batches.delete(ref));

        await batches.commit();
    }

    public async delete(school: DocumentReference): Promise<void> {
        const batches = writeBatch(useFirestore());
        const id = school.id;

        // delete school and all relations
        batches.delete(school);

        // delete relations
        (await this.getSchoolRelations(id)).forEach(ref => batches.delete(ref));

        await batches.commit();
    }

    private async getSchoolRelations(id: ID): Promise<DocumentReference[]> {
        const relations: DocumentReference[] = [];
        // delete students
        const students = await StudentRepository.instance.getAllDocs(where(nameof<Student>('schoolId'), '==', id))
        students.forEach(s => relations.push(s.ref));

        // delete weeklyLessons
        const weeklyLessons = await WeeklyLessonRepository.instance.getAllDocs(where(nameof<WeeklyLesson>('schoolId'), '==', id))
        weeklyLessons.forEach(s => relations.push(s.ref));

        // delete dailyLessons
        const dailyLessons = await DailyLessonRepository.instance.getAllDocs(where(nameof<DailyLesson>('schoolId'), '==', id))
        dailyLessons.forEach(s => relations.push(s.ref));

        // delete recoveryLessons
        const recoveryLessons = await SchoolRecoveryLessonRepository.instance.getAllDocs(where(nameof<SchoolRecoveryLesson>('schoolId'), '==', id))
        recoveryLessons.forEach(s => relations.push(s.ref));

        return relations;
    }

    public async getSchoolLessons(schoolId: ID, from: Date | IyyyyMMdd): Promise<SchoolLessons> {
        const start = from instanceof Date ? yyyyMMdd.fromDate(from).toIyyyyMMdd() : from;
        const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolFromDate(schoolId, start, 'desc');
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(schoolId);

        console.log("getSchoolLessons(from) {dailyLessons, weeklyLessons, schoolId}",
            from,
            JSON.parse(JSON.stringify(dailyLessons)),
            JSON.parse(JSON.stringify(weeklyLessons)),
            schoolId)

        return {
            dailyLessons,
            weeklyLessons,
            schoolId
        }
    }

    public async getTodayLessons(): Promise<TodayLesson[]> {
        const lessons: TodayLesson[] = [];
        const dateObj = yyyyMMdd.today();
        const dateString = dateObj.toIyyyyMMdd();
        const date = dateObj.toDate();
        const schools = await SchoolRepository.instance.getAll();
        for await (const school of schools) {
            const schoolLessons = await this.getSchoolLessons(school.id, date);
            const todayLesson = schoolLessons.dailyLessons.find(dl => dl.date == dateString) ?? schoolLessons.weeklyLessons.find(wl => wl.dayOfWeek == date.getDay());
            if (todayLesson) lessons.push({
                school,
                lesson: todayLesson
            })
        }
        return lessons;
    }
}