import { DatabaseRef, useDB } from "../firestore-utils";
import type { Student } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class StudentRepository extends AbstractRepository<Student> {
    public static readonly instance = new StudentRepository();
      
    constructor() {
        super(useDB<Student>(DatabaseRef.STUDENTS))
    }
}