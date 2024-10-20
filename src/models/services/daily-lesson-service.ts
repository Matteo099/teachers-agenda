import { orderBy, where, type OrderByDirection } from "firebase/firestore";
import type { DailyLesson, IyyyyMMdd } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { nameof } from "../utils";

export class DailyLessonService {


    private static _instance: DailyLessonService | null = null;

    public static get instance(): DailyLessonService {
        if (!this._instance) this._instance = new DailyLessonService();
        return this._instance;
    }

    public async getDailyLessonOfSchoolInDate(schoolId: ID, date: IyyyyMMdd): Promise<DailyLesson[]> {
        const _query1 = where(nameof<DailyLesson>('schoolId'), '==', schoolId);
        const _query2 = where(nameof<DailyLesson>('date'), '==', date);
        return DailyLessonRepository.instance.getAll(_query1, _query2);
    }

    public async getDailyLessonOfSchoolFromDate(schoolId: ID, from: IyyyyMMdd, orderByDirection?: OrderByDirection): Promise<DailyLesson[]> {
        const queries = [];
        const _query1 = where(nameof<DailyLesson>('schoolId'), '==', schoolId);
        const _query2 = where(nameof<DailyLesson>('date'), '>=', from);
        queries.push(_query1, _query2);
        if (orderByDirection) queries.push(orderBy(nameof<DailyLesson>('date'), orderByDirection))
        return DailyLessonRepository.instance.getAll(...queries);
    }
}