import { DatabaseRef, useDB } from "../firestore-utils";
import type { DailyLesson } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class DailyLessonRepository extends AbstractRepository<DailyLesson> {
    public static readonly instance = new DailyLessonRepository();

    constructor() {
        super(useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS))
    }
}