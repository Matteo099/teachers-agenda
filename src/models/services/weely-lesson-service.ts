import { orderBy, where } from "firebase/firestore";
import type { WeeklyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof } from "../utils";
import type { IQueryEvent } from "../utils/event";

export class WeeklyLessonService {
    private static _instance: WeeklyLessonService | null = null;

    public static get instance(): WeeklyLessonService {
        if (!this._instance) this._instance = new WeeklyLessonService();
        return this._instance;
    }

    public async getWeeklyLessonOfSchool(schoolId: ID): Promise<WeeklyLesson[]> {
        const _query1 = where(nameof<WeeklyLesson>('schoolId'), '==', schoolId);
        return WeeklyLessonRepository.instance.getAll(_query1);
    }

    public async getWeeklyLessonOfSchoolByDayBetweenDate(schoolId: string, dayOfWeek: number, currentDate: string): Promise<WeeklyLesson[]> {
        const _query1 = where(nameof<WeeklyLesson>('schoolId'), '==', schoolId);
        const _query2 = where(nameof<WeeklyLesson>('dayOfWeek'), '==', dayOfWeek);
        const _query3 = where(nameof<WeeklyLesson>('from'), '<=', currentDate);
        const _query4 = where(nameof<WeeklyLesson>('to'), '>=', currentDate);
        return WeeklyLessonRepository.instance.getAll(_query1, _query2, _query3, _query4);
    }

    public observeWeekLessonOfSchool(schoolId: ID): IQueryEvent<WeeklyLesson[]> {
        const _query1 = where(nameof<WeeklyLesson>('schoolId'), '==', schoolId);
        const _query2 = orderBy(nameof<WeeklyLesson>('dayOfWeek'));
        return WeeklyLessonRepository.instance.observeAll(_query1, _query2);
    }
}