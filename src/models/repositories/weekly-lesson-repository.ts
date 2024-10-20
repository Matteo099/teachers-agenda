import { DatabaseRef, useDB } from "../firestore-utils";
import type { WeeklyLesson } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class WeeklyLessonRepository extends AbstractRepository<WeeklyLesson> {
    private static _instance: WeeklyLessonRepository | null = null;

    constructor() {
        super(useDB<WeeklyLesson>(DatabaseRef.WEEKLY_LESSONS))
    }

    public static get instance(): WeeklyLessonRepository {
        if (!this._instance) this._instance = new WeeklyLessonRepository();
        return this._instance;
    }
}