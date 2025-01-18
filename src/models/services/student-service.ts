import { documentId, where } from "firebase/firestore";
import type { IyyyyMMdd, Student } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { StudentRepository } from "../repositories/student-repository";
import { nameof } from "../utils";
import type { IQueryEvent } from "../utils/event";

export class StudentService {
    private static _instance: StudentService | null = null;

    public static get instance(): StudentService {
        if (!this._instance) this._instance = new StudentService();
        return this._instance;
    }

    public async getStudentsOfSchool(id: ID): Promise<Student[]> {
        const _query = where(nameof<Student>('schoolId'), '==', id);
        return StudentRepository.instance.getAll(_query);
    }

    public observeStudentsOfSchool(id: ID): IQueryEvent<Student[]> {
        const _query = where(nameof<Student>('schoolId'), '==', id);
        return StudentRepository.instance.observeAll(_query);
    }

    public async getStudentsOfSchoolWithIds(schoolId: ID, studentIds: string[]): Promise<Student[]> {
        if (studentIds.length == 0) return [];
        const _query1 = where(nameof<Student>('schoolId'), '==', schoolId);
        const _query2 = where(documentId(), 'in', studentIds);
        return StudentRepository.instance.getAll(_query1, _query2);
    }

    public async setTrialDone(student: Student, dailyLessonDate?: IyyyyMMdd, dailyLessonId?: ID) {
        if (student.trial?.done) return;

        student.trial = { done: true }
        if(dailyLessonDate) student.trial.dailyLessonDate = dailyLessonDate;
        if(dailyLessonId) student.trial.dailyLessonId = dailyLessonId;
        await StudentRepository.instance.save(student, student.id);
    }

    public async unsetTrial(student: Student) {
        delete student.trial;
        await StudentRepository.instance.save(student, student.id);
    }
}