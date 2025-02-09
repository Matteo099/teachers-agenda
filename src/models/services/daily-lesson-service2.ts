import { orderBy, Timestamp, where, type OrderByDirection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { LessonStatus, Time, yyyyMMdd, type DailyLesson, type EventTime, type IyyyyMMdd, type Lesson, type RecoverySchedule, type School, type Student, type StudentLesson2 } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof } from "../utils";
import { DailyLessonService } from "./daily-lesson-service";
import type { LessonProjection } from "./lesson-group-service";
import { LessonService } from "./lesson-service";
import { SalaryService } from "./salary-service";
import type { ExpandedLesson, StudentLessonWithRecovery } from "./school-recovery-lesson-service2";
import { WeeklyLessonService } from "./weely-lesson-service";

export interface SaveOptions {
    school: School;
    updatedLessons?: Lesson[];
    studentLessons?: StudentLesson2[];
}

export class DailyLessonService2 {

    private static _instance: DailyLessonService2 | null = null;

    public static get instance(): DailyLessonService2 {
        if (!this._instance) this._instance = new DailyLessonService2();
        return this._instance;
    }

    private lessonService: LessonService = new LessonService();

    public async getDailyLessonOfSchoolByDate(schoolId: ID, date: IyyyyMMdd): Promise<DailyLesson[]> {
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

    public async getDailyLessonOfSchoolBetweenDate(schoolId: ID, from: IyyyyMMdd, to: IyyyyMMdd): Promise<DailyLesson[]> {
        // retireve all the dailyLesson between from and to
        const _query1 = where(nameof<DailyLesson>('schoolId'), '==', schoolId);
        const _query2 = where(nameof<DailyLesson>('date'), '>=', from);
        const _query3 = where(nameof<DailyLesson>('date'), '<=', to);
        return await DailyLessonRepository.instance.getAll(_query1, _query2, _query3);
    }


    public async getOrCreateDailyLessonId(
        schoolId: ID,
        lesson: LessonProjection | Date
    ): Promise<ID> {
        // If lesson is a Date, call the helper to create a daily lesson based on the date
        if (lesson instanceof Date) {
            return this.createDailyLessonByDate(schoolId, lesson);
        }

        // If lesson is a LessonProjection, handle it
        return this.handleLessonProjection(schoolId, lesson);
    }

    private async handleLessonProjection(
        schoolId: ID,
        lessonGroup: LessonProjection
    ): Promise<ID> {
        if (!lessonGroup.dailyLessonId) {
            // If lessonId is undefined, create a new daily lesson
            const newDailyLesson = this.buildDailyLessonFromProjection(schoolId, lessonGroup);
            return DailyLessonRepository.instance.save(newDailyLesson);
        }

        // If lessonId exists, return it directly
        return lessonGroup.dailyLessonId;
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
        schoolId: ID,
        lessonDate: Date
    ): Promise<ID> {
        const parseDate = yyyyMMdd.fromDate(lessonDate).toIyyyyMMdd();

        // Try to retrieve the daily lesson for the given date
        const existingData = await DailyLessonService.instance.getDailyLessonOfSchoolByDate(schoolId, parseDate);

        if (existingData?.[0]?.id) {
            return existingData[0].id; // If found, return the existing ID
        }

        // If no daily lesson found, create a new one from weekly lessons
        const newDailyLesson = await this.buildDailyLessonFromWeeklyOrEmpty(schoolId, lessonDate, parseDate);
        return DailyLessonRepository.instance.save(newDailyLesson);
    }

    public async buildDailyLessonFromWeeklyOrEmpty(
        schoolId: ID,
        lessonDate: Date,
        formattedDate: string
    ): Promise<Partial<DailyLesson>> {
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchoolByDayBetweenDate(schoolId, lessonDate.getDay(), formattedDate);
        const weeklyLesson = weeklyLessons?.[0];
        // const weeklyLesson = schoolLessons.weeklyLessons.find(l => l.dayOfWeek === lessonDate.getDay());

        if (weeklyLesson) {
            // Create daily lesson from weekly lesson schedule
            return {
                date: formattedDate,
                schoolId: schoolId,
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
            schoolId: schoolId,
            lessons: [],
        };
    }

    public async delete(dailyLesson: DailyLesson) {
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(dailyLesson.schoolId);
        const wl = weeklyLessons.find(wl => WeeklyLessonService.instance.isValid(wl, dailyLesson.date));
        if (wl) {
            wl.exclude.push(dailyLesson.date);
            await WeeklyLessonRepository.instance.save(wl, wl.id);
            return true;
        }

        this.deleteLessons(dailyLesson, true, dailyLesson.lessons);
        return false;
    }

    public async deleteLessons(dailyLesson: DailyLesson, deleteDailyLessonWhenNoLessons: boolean, lessons: Lesson[]) {
        debugger;
        
        for await (const lesson of lessons) {
            await this.lessonService.resetLesson(dailyLesson, lesson);
            const index = dailyLesson.lessons.findIndex(l => l.lessonId == lesson.lessonId);
            dailyLesson.lessons.splice(index, 1);
        }

        // if the recovery daily lesson has no more lessons, delete it
        if (dailyLesson.lessons.length == 0 && deleteDailyLessonWhenNoLessons) {
            await DailyLessonRepository.instance.delete(dailyLesson.id);
        } else {
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
        }
    }

    public async updateLessonsStatus(status: LessonStatus, dailyLesson: DailyLesson, lessons: Lesson[]) {
        for await (const lesson of lessons) {
            const _lesson = dailyLesson.lessons.find(l => l.lessonId == lesson.lessonId);
            await this.lessonService.updateLessonStatus(status, dailyLesson, _lesson!);
        }
        await this.save(dailyLesson);
    }

    public async resetLessons(dailyLesson: DailyLesson, lessons: Lesson[]) {
        for await (const lesson of lessons) {
            await this.lessonService.resetLesson(dailyLesson, lesson);
        }
        await this.save(dailyLesson);
    }

    public async moveLessons(dailyLesson: DailyLesson, newLessonDate: Date, lessons: Lesson[]) {
        const schoolId = dailyLesson.schoolId;
        const originalDailyLessonId = dailyLesson.id;

        // Step 1: get (or create) the new dailyLesson
        const newDailyLessonId = await DailyLessonService.instance.getOrCreateDailyLessonId(schoolId, newLessonDate);
        // Step 2: add the lesson to the new dailyLesson
        const newDailyLesson = await DailyLessonRepository.instance.get(newDailyLessonId);
        if (newDailyLesson) {
            for await (const lessonToMove of lessons) {
                const newLesson = this.lessonService.moveLesson(lessonToMove, originalDailyLessonId, newDailyLessonId);
                newDailyLesson.lessons.push(newLesson);
                newDailyLesson.lessons.sort((a, b) => a.startTime - b.startTime);
                await DailyLessonRepository.instance.save(newDailyLesson, newDailyLessonId);
            }
        } else throw new Error("Unable to move the lesson because the new daily lesson is undefined!");
    }

    public async updateLessonTime(dailyLesson: DailyLesson, newDataEvent: EventTime, lesson: Lesson) {
        const startTime = Time.fromHHMM(newDataEvent.startTime)?.toITime();
        const endTime = Time.fromHHMM(newDataEvent.endTime)?.toITime();
        if (startTime == undefined || endTime == undefined) {
            return false;
        }

        lesson.startTime = startTime;
        lesson.endTime = endTime;

        await this.save(dailyLesson);
        return true;
    }

    public async addStudents(dailyLesson: DailyLesson, students: Student[]) {

        const newDailyLesson = { ...dailyLesson };
        students.forEach(s => {
            // 08:00 => 28800 seconds
            const lastLessonEndTime = newDailyLesson.lessons?.length == 0 ? 28800 : newDailyLesson.lessons![newDailyLesson.lessons!.length - 1].endTime;
            newDailyLesson.lessons?.push({
                lessonId: uuidv4(),
                status: LessonStatus.NONE,
                studentId: s.id,
                startTime: lastLessonEndTime,
                endTime: lastLessonEndTime + s.minutesLessonDuration * 60,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now()
            });
        })

        await this.save(newDailyLesson);
    }

    public async save(dailyLesson: DailyLesson, opts?: SaveOptions) {
        const dl = await this.extractDailyLesson(dailyLesson, opts);
        await DailyLessonRepository.instance.save(dl, dl.id);
    }

    private async extractDailyLesson(dailyLesson: DailyLesson, opts?: SaveOptions): Promise<DailyLesson> {
        const lessons: Lesson[] = [];
        let salary = 0;
        for await (const l of dailyLesson.lessons) {
            let lesson: Lesson = l;
            let student: Student | undefined;
            if (opts?.updatedLessons) {
                const studentLesson = opts.updatedLessons.find(sl => sl.lessonId == l.lessonId);
                if (studentLesson == undefined) continue;
                lesson = studentLesson;
            } else if (opts?.studentLessons) {
                const studentLesson = opts.studentLessons.find(sl => sl.lesson.lessonId == l.lessonId);
                if (studentLesson == undefined) continue;
                lesson = studentLesson.lesson;
                student = studentLesson.student;
            }
            const newLesson: Lesson = {
                lessonId: l.lessonId,
                createdAt: l.createdAt,
                studentId: l.studentId,
                startTime: lesson.startTime,
                endTime: lesson.endTime,
                status: lesson.status,
                updatedAt: Timestamp.now()
            }
            if (l.recovery) newLesson.recovery = l.recovery;
            if (l.moved) newLesson.moved = l.moved;
            lessons.push(newLesson);

            if (opts?.school) {
                salary += await SalaryService.instance.getSalaryOfStudentLesson(opts.school, lesson, student, dailyLesson.date);
            }
        }
        const newDailyLesson: DailyLesson = {
            id: dailyLesson.id,
            schoolId: dailyLesson.schoolId,
            date: dailyLesson.date,
            lessons: lessons.sort((a, b) => a.startTime - b.startTime),
            lastSalaryUpdate: Timestamp.now(),
            salary
        };
        if (opts?.school.salaryStrategy != undefined) newDailyLesson.salaryStrategy = opts.school.salaryStrategy;
        return newDailyLesson;
    }

    async createRecoveryLesson(schedule: RecoverySchedule): Promise<ExpandedLesson> {
        const recoveryLesson: Lesson = {
            lessonId: uuidv4(),
            status: LessonStatus.NONE,
            studentId: schedule.studentId,
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            recovery: {
                ref: 'original',
                lessonRef: {
                    dailyLessonId: schedule.originalDailyLessonId,
                    lessonId: schedule.originalLessonId,
                }
            },
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
        }

        const recoveryDailyLessonId = await this.getOrCreateDailyLessonId(schedule.schoolId, schedule.date);
        const recoveryDailyLesson = (await DailyLessonRepository.instance.get(recoveryDailyLessonId))!;
        recoveryDailyLesson.lessons.push(recoveryLesson)
        await DailyLessonRepository.instance.save(recoveryDailyLesson, recoveryDailyLesson.id);
        return {
            dailyLessonId: recoveryDailyLesson.id,
            lesson: recoveryLesson
        }
    }

    async updateOriginalRecoveryLesson(lesson: StudentLessonWithRecovery, recoveryDailyLesson: ExpandedLesson) {
        const originalDaillyLesson = await DailyLessonRepository.instance.get(lesson.recoveryReference.originalDailyLesson.id);
        const _lesson = originalDaillyLesson?.lessons.find(l => l.lessonId == lesson.lesson.lessonId);
        if (originalDaillyLesson && _lesson) {
            _lesson.recovery = {
                ref: 'recovery',
                lessonRef: {
                    dailyLessonId: recoveryDailyLesson.dailyLessonId,
                    lessonId: recoveryDailyLesson.lesson.lessonId
                }
            }
            await DailyLessonRepository.instance.save(originalDaillyLesson, originalDaillyLesson.id);
        } else throw new Error("Lesson not found")
    }
}