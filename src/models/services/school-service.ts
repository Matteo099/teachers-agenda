import { DocumentReference, where, writeBatch } from "firebase/firestore";
import { SchoolRepository } from "../repositories/school-repository";
import { StudentRepository } from "../repositories/student-repository";
import { useFirestore } from "vuefire";
import type { ID } from "../repositories/abstract-repository";
import { nameof } from "../utils";
import type { DailyLesson, Student, WeeklyLesson } from "../model";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";

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

        // delete students
        const students = await StudentRepository.instance.getAllDocs(where(nameof<Student>('schoolId'), '==', id))
        students.forEach(s => batches.delete(s.ref));

        // delete weeklyLessons
        const weeklyLessons = await WeeklyLessonRepository.instance.getAllDocs(where(nameof<WeeklyLesson>('schoolId'), '==', id))
        weeklyLessons.forEach(s => batches.delete(s.ref));

        // delete dailyLessons
        const dailyLessons = await DailyLessonRepository.instance.getAllDocs(where(nameof<DailyLesson>('schoolId'), '==', id))
        dailyLessons.forEach(s => batches.delete(s.ref));

        await batches.commit();
    }

    public async delete(school: DocumentReference): Promise<void> {
        const batches = writeBatch(useFirestore());
        const id = school.id;

        // delete school and all relations
        batches.delete(school);

        // delete students
        const students = await StudentRepository.instance.getAllDocs(where(nameof<Student>('schoolId'), '==', id))
        students.forEach(s => batches.delete(s.ref));

        // delete weeklyLessons
        const weeklyLessons = await WeeklyLessonRepository.instance.getAllDocs(where(nameof<WeeklyLesson>('schoolId'), '==', id))
        weeklyLessons.forEach(s => batches.delete(s.ref));

        // delete dailyLessons
        const dailyLessons = await DailyLessonRepository.instance.getAllDocs(where(nameof<DailyLesson>('schoolId'), '==', id))
        dailyLessons.forEach(s => batches.delete(s.ref));

        await batches.commit();
    }
}