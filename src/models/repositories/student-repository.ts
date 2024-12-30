import { DatabaseRef, useDB } from "../firestore-utils";
import type { Student } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class StudentRepository extends AbstractRepository<Student> {
    private static _instance: StudentRepository | null = null;

    constructor() {
        super((userId: string) => useDB<Student>(DatabaseRef.STUDENTS, userId))
    }

    public static get instance(): StudentRepository {
        if (!this._instance) this._instance = new StudentRepository();
        return this._instance;
    }
}