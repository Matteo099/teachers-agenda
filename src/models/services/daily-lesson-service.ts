import { orderBy, Timestamp, where, type OrderByDirection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { LessonStatus, yyyyMMdd, type DailyLesson, type IyyyyMMdd } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { nameof } from "../utils";
import type { LessonProjection, SchoolLessons } from "./lesson-group-service";

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

    public async getOrCreateDailyLessonId(
        schoolLessons: SchoolLessons,
        lesson: LessonProjection | Date
    ): Promise<ID> {
        // If lesson is a Date, call the helper to create a daily lesson based on the date
        if (lesson instanceof Date) {
            return this.createDailyLessonByDate(schoolLessons, lesson);
        }

        // If lesson is a LessonProjection, handle it
        return this.handleLessonProjection(schoolLessons, lesson);
    }

    private async handleLessonProjection(
        schoolLessons: SchoolLessons,
        lessonGroup: LessonProjection
    ): Promise<ID> {
        if (!lessonGroup.lessonId) {
            // If lessonId is undefined, create a new daily lesson
            const newDailyLesson = this.buildDailyLessonFromProjection(schoolLessons.schoolId, lessonGroup);
            return DailyLessonRepository.instance.create(newDailyLesson);
        }

        // If lessonId exists, return it directly
        return lessonGroup.lessonId;
    }

    public buildDailyLessonFromProjection(
        schoolId: string,
        lessonGroup: LessonProjection
    ): Partial<DailyLesson> {
        return {
            date: lessonGroup.date.toIyyyyMMdd(),
            schoolId,
            lessons: lessonGroup.lessons.map(l => ({
                lessonId: uuidv4(),
                status: LessonStatus.NONE,
                studentId: l.studentId,
                startTime: l.startTime,
                endTime: l.endTime,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
            })),
        };
    }

    public async createDailyLessonByDate(
        schoolLessons: SchoolLessons,
        lessonDate: Date
    ): Promise<ID> {
        const parseDate = yyyyMMdd.fromDate(lessonDate).toIyyyyMMdd();

        // Try to retrieve the daily lesson for the given date
        const existingData = await DailyLessonService.instance.getDailyLessonOfSchoolInDate(schoolLessons.schoolId, parseDate);

        if (existingData?.[0]?.id) {
            return existingData[0].id; // If found, return the existing ID
        }

        // If no daily lesson found, create a new one from weekly lessons
        const newDailyLesson = this.buildDailyLessonFromWeeklyOrEmpty(schoolLessons, lessonDate, parseDate);
        return DailyLessonRepository.instance.create(newDailyLesson);
    }

    public buildDailyLessonFromWeeklyOrEmpty(
        schoolLessons: SchoolLessons,
        lessonDate: Date,
        formattedDate: string
    ): Partial<DailyLesson> {
        const weeklyLesson = schoolLessons.weeklyLessons.find(l => l.dayOfWeek === lessonDate.getDay());

        if (weeklyLesson) {
            // Create daily lesson from weekly lesson schedule
            return {
                date: formattedDate,
                schoolId: schoolLessons.schoolId,
                lessons: weeklyLesson.schedule.map(l => ({
                    lessonId: uuidv4(),
                    status: LessonStatus.NONE,
                    studentId: l.studentId,
                    startTime: l.startTime,
                    endTime: l.endTime,
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now(),
                })),
            };
        }

        // Create an empty daily lesson if no weekly lesson is found
        return {
            date: formattedDate,
            schoolId: schoolLessons.schoolId,
            lessons: [],
        };
    }
}