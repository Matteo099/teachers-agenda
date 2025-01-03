import { DocumentReference, where, WriteBatch, writeBatch } from "firebase/firestore";
import { SchoolRepository } from "../repositories/school-repository";
import { StudentRepository } from "../repositories/student-repository";
import { useFirestore } from "vuefire";
import type { ID } from "../repositories/abstract-repository";
import { nameof } from "../utils";
import { yyyyMMdd, type DailyLesson, type IyyyyMMdd, type SchoolRecoveryLesson, type Student, type WeeklyLesson } from "../model";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import type { SchoolLessons } from "./lesson-group-service";
import { DailyLessonService } from "./daily-lesson-service";
import { WeeklyLessonService } from "./weely-lesson-service";
import { SchoolRecoveryLessonRepository } from "../repositories/recovery-lesson-repository";

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

    async getSchoolLessons(schoolId: ID, from: Date | IyyyyMMdd): Promise<SchoolLessons> {
        const start = from instanceof Date ? yyyyMMdd.fromDate(from).toIyyyyMMdd() : from;
        const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolFromDate(schoolId, start, 'desc');
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(schoolId);

        return {
            dailyLessons,
            weeklyLessons,
            schoolId
        }
    }
}