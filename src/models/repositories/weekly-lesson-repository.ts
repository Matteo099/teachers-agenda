import { DatabaseRef, useDB } from "../firestore-utils";
import type { WeeklyLesson } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class WeeklyLessonRepository extends AbstractRepository<WeeklyLesson> {
    private static _instance: WeeklyLessonRepository | null = null;

    constructor() {
        super((userId: string) => useDB<WeeklyLesson>(DatabaseRef.WEEKLY_LESSONS, userId))
    }

    public static get instance(): WeeklyLessonRepository {
        if (!this._instance) this._instance = new WeeklyLessonRepository();
        return this._instance;
    }
}