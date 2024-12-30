import { DatabaseRef, useDB } from "../firestore-utils";
import type { DailyLesson } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class DailyLessonRepository extends AbstractRepository<DailyLesson> {
    private static _instance: DailyLessonRepository | null = null;

    constructor() {
        super((userId: string) => useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS, userId))
    }

    public static get instance(): DailyLessonRepository {
        if (!this._instance) this._instance = new DailyLessonRepository();
        return this._instance;
    }
}