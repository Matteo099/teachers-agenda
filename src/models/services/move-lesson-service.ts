import { LessonStatus, type Lesson } from "../model";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";

export class MoveLessonService {

    private static _instance: MoveLessonService | null = null;

    public static get instance(): MoveLessonService {
        if (!this._instance) this._instance = new MoveLessonService();
        return this._instance;
    }

    public async moveLesson() {

    }

    public async cancelMovedLesson(schoolId: string, dailyLessonId: string, lesson: Lesson) {

    }
}