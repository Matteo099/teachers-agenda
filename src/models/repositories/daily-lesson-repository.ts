import { DatabaseRef, useDB } from "../firestore-utils";
import type { DailyLesson, IyyyyMMdd } from "../model";
import { AbstractRepository, type ID } from "./abstract-repository";

export class DailyLessonRepository extends AbstractRepository<DailyLesson> {
    private static _instance: DailyLessonRepository | null = null;

    constructor() {
        super((userId: string) => useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS, userId))
    }

    public static get instance(): DailyLessonRepository {
        if (!this._instance) this._instance = new DailyLessonRepository();
        return this._instance;
    }

    public override async save(obj: Partial<DailyLesson> | any, id?: ID): Promise<ID> {
        if (id == undefined) {
            id = DailyLessonRepository.generateId(obj);
        }
        return super.save(obj, id);
    }

    public static generateId(obj: Partial<DailyLesson> | { date: IyyyyMMdd; schoolId: ID }): ID {
        return obj.date + "_" + obj.schoolId;
    }

    public static extract(id: ID): { date: IyyyyMMdd; schoolId: ID } {
        const s = id.split("_");
        return {
            date: s[0],
            schoolId: s[1],
        }
    }
}