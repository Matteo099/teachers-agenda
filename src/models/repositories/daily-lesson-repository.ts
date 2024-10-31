import { DatabaseRef, useDB } from "../firestore-utils";
import type { DailyLesson } from "../model";
import type { RecoveryReference } from "../services/school-recovery-lesson-service";
import { AbstractRepository } from "./abstract-repository";

export class DailyLessonRepository extends AbstractRepository<DailyLesson> {
    private static _instance: DailyLessonRepository | null = null;

    constructor() {
        super(useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS))
    }

    public static get instance(): DailyLessonRepository {
        if (!this._instance) this._instance = new DailyLessonRepository();
        return this._instance;
    }
}