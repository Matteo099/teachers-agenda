import { DatabaseRef, useDB } from "../firestore-utils";
import type { WeeklyLesson } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class WeeklyLessonRepository extends AbstractRepository<WeeklyLesson> {
    public static readonly instance = new WeeklyLessonRepository();

    constructor() {
        super(useDB<WeeklyLesson>(DatabaseRef.WEEKLY_LESSONS))
    }
}