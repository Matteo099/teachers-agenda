import { DatabaseRef, useDB } from "../firestore-utils";
import type { SchoolRecoveryLesson } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class SchoolRecoveryLessonRepository extends AbstractRepository<SchoolRecoveryLesson> {
    private static _instance: SchoolRecoveryLessonRepository | null = null;

    constructor() {
        super(useDB<SchoolRecoveryLesson>(DatabaseRef.SCHOOL_RECOVERY_LESSONS), true)
    }

    public static get instance(): SchoolRecoveryLessonRepository {
        if (!this._instance) this._instance = new SchoolRecoveryLessonRepository();
        return this._instance;
    }
}