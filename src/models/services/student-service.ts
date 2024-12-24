import { documentId, where } from "firebase/firestore";
import type { Student } from "../model";
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
        const _query1 = where(nameof<Student>('schoolId'), '==', schoolId);
        const _query2 = where(documentId(), 'in', studentIds);
        return StudentRepository.instance.getAll(_query1, _query2);
    }
}