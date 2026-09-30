import { DocumentReference, Timestamp, where, writeBatch } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { yyyyMMdd, type DailyLesson, type IyyyyMMdd, type School, type SchoolRecoveryLesson, type Student, type TodayLesson, type WeeklyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/recovery-lesson-repository";
import { SchoolRepository } from "../repositories/school-repository";
import { StudentRepository } from "../repositories/student-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof } from "../utils";
import { type SchoolLessons } from "./lesson-group-service";
import { WeeklyLessonService } from "./weely-lesson-service";
import { DailyLessonService } from "./daily-lesson-service";
import { v4 as uuidv4 } from "uuid";

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

    /** Creates a fully independent copy of a school and all its related data. */
    public async clone(school: School): Promise<ID> {
        const oldSchoolId = school.id;
        const now = Timestamp.now();
        const newSchoolId = await SchoolRepository.instance.save({
            ...school,
            name: `${school.name} (copia)`,
            createdAt: now,
            updatedAt: now,
        } as Partial<School>);

        const students = await StudentRepository.instance.getAll(where(nameof<Student>('schoolId'), '==', oldSchoolId));
        const studentIds = new Map<string, string>();
        const studentCopies: Student[] = [];
        for (const student of students) {
            const newId = uuidv4();
            studentIds.set(student.id, newId);
            const copy = structuredClone(student) as Student;
            copy.id = newId;
            copy.schoolId = newSchoolId;
            studentCopies.push(copy);
            await StudentRepository.instance.save(copy, newId);
        }

        const weeklyLessons = await WeeklyLessonRepository.instance.getAll(where(nameof<WeeklyLesson>('schoolId'), '==', oldSchoolId));
        for (const weekly of weeklyLessons) {
            const newId = uuidv4();
            const copy = structuredClone(weekly) as WeeklyLesson;
            copy.id = newId;
            copy.schoolId = newSchoolId;
            copy.schedule = copy.schedule.map(lesson => ({
                ...lesson,
                lessonId: uuidv4(),
                studentId: studentIds.get(lesson.studentId) ?? lesson.studentId,
            }));
            await WeeklyLessonRepository.instance.save(copy, newId);
        }

        const dailyLessons = await DailyLessonRepository.instance.getAll(where(nameof<DailyLesson>('schoolId'), '==', oldSchoolId));
        const dailyIds = new Map<string, string>();
        const lessonIds = new Map<string, string>();
        const dailyCopies: DailyLesson[] = [];
        for (const daily of dailyLessons) {
            const newId = DailyLessonRepository.generateId({ date: daily.date, schoolId: newSchoolId });
            dailyIds.set(daily.id, newId);
            const copy = structuredClone(daily) as DailyLesson;
            copy.id = newId;
            copy.schoolId = newSchoolId;
            copy.lessons = copy.lessons.map(lesson => {
                const newLessonId = uuidv4();
                lessonIds.set(`${daily.id}:${lesson.lessonId}`, newLessonId);
                return {
                    ...lesson,
                    lessonId: newLessonId,
                    studentId: studentIds.get(lesson.studentId) ?? lesson.studentId,
                };
            });
            dailyCopies.push(copy);
        }
        const remapRef = (ref: { dailyLessonId: string; lessonId: string }) => ({
            dailyLessonId: dailyIds.get(ref.dailyLessonId) ?? ref.dailyLessonId,
            lessonId: lessonIds.get(`${ref.dailyLessonId}:${ref.lessonId}`) ?? ref.lessonId,
        });
        for (const copy of dailyCopies) {
            copy.lessons = copy.lessons.map(lesson => ({
                ...lesson,
                recovery: lesson.recovery ? { ...lesson.recovery, lessonRef: remapRef(lesson.recovery.lessonRef) } : undefined,
                moved: lesson.moved ? { ...lesson.moved, lessonRef: remapRef(lesson.moved.lessonRef) } : undefined,
            }));
            await DailyLessonRepository.instance.save(copy, copy.id);
        }
        for (const copy of studentCopies) {
            if (copy.trial?.dailyLessonId) {
                copy.trial.dailyLessonId = dailyIds.get(copy.trial.dailyLessonId) ?? copy.trial.dailyLessonId;
                await StudentRepository.instance.save(copy, copy.id);
            }
        }

        const recovery = await SchoolRecoveryLessonRepository.instance.get(oldSchoolId);
        if (recovery) {
            const copy = structuredClone(recovery) as SchoolRecoveryLesson;
            copy.schoolId = newSchoolId;
            copy.recoveries = copy.recoveries.map(item => ({
                ...item,
                originalLesson: remapRef(item.originalLesson),
                recoveryLesson: item.recoveryLesson ? remapRef(item.recoveryLesson) : undefined,
                recoveryLessons: item.recoveryLessons?.map(remapRef),
            }));
            await SchoolRecoveryLessonRepository.instance.save(copy, newSchoolId);
        }

        return newSchoolId;
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
            let todayLesson = schoolLessons.dailyLessons.find(dl => dl.date == dateString);
            // The daily-detail route requires a DailyLesson ID. Materialize today's
            // recurring schedule before exposing it from the dashboard.
            if (!todayLesson && schoolLessons.weeklyLessons.some(wl => WeeklyLessonService.instance.isValid(wl, dateString))) {
                const dailyLessonId = await DailyLessonService.instance.createDailyLessonByDate(school.id, date);
                todayLesson = await DailyLessonRepository.instance.get(dailyLessonId);
            }
            if (todayLesson) lessons.push({
                school,
                lesson: todayLesson
            })
        }
        return lessons;
    }
}
