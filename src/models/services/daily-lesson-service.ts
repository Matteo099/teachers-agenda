import { orderBy, Timestamp, where, type OrderByDirection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { LessonStatus, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type Lesson, type LessonRef, type RecoveryLessonInfo, type RecoverySchedule, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { nameof } from "../utils";
import type { LessonProjection, SchoolLessons } from "./lesson-group-service";
import { SchoolRecoveryLessonService, type ExpandedLesson, type ExtendedStudentLesson } from "./school-recovery-lesson-service";
import { SchoolService } from "./school-service";
import { StudentLessonService } from "./student-lesson-service";

export class DailyLessonService {

    private static _instance: DailyLessonService | null = null;

    public static get instance(): DailyLessonService {
        if (!this._instance) this._instance = new DailyLessonService();
        return this._instance;
    }

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
        if (!lessonGroup.dailyLessonId) {
            // If lessonId is undefined, create a new daily lesson
            const newDailyLesson = this.buildDailyLessonFromProjection(schoolLessons.schoolId, lessonGroup);
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
        schoolLessons: SchoolLessons,
        lessonDate: Date
    ): Promise<ID> {
        const parseDate = yyyyMMdd.fromDate(lessonDate).toIyyyyMMdd();

        // Try to retrieve the daily lesson for the given date
        const existingData = await DailyLessonService.instance.getDailyLessonOfSchoolByDate(schoolLessons.schoolId, parseDate);

        if (existingData?.[0]?.id) {
            return existingData[0].id; // If found, return the existing ID
        }

        // If no daily lesson found, create a new one from weekly lessons
        const newDailyLesson = this.buildDailyLessonFromWeeklyOrEmpty(schoolLessons, lessonDate, parseDate);
        return DailyLessonRepository.instance.save(newDailyLesson);
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

    async removeRecoveryLesson(recoveryRef: LessonRef) {
        const recoveryDailyLessonDoc = await DailyLessonRepository.instance.getDoc(recoveryRef.dailyLessonId);
        if (recoveryDailyLessonDoc.exists()) {
            const recoveryDailyLesson = recoveryDailyLessonDoc.data();
            const recoveryLessonIndex = recoveryDailyLesson.lessons.findIndex(l => l.lessonId == recoveryRef.lessonId);
            if (recoveryLessonIndex != -1) {
                const deleteLesson = recoveryDailyLesson.lessons.splice(recoveryLessonIndex, 1)[0];
                if (!deleteLesson.recovery) console.warn("Deleting a lesson not marked as recovery lesson!", deleteLesson);
                DailyLessonRepository.instance.save(recoveryDailyLesson, recoveryDailyLesson.id);
            }
        }
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
        const schoolLessons = await SchoolService.instance.getSchoolLessons(schedule.schoolId, schedule.date)
        const recoveryDailyLessonId = await this.getOrCreateDailyLessonId(schoolLessons, schedule.date);
        const recoveryDailyLesson = (await DailyLessonRepository.instance.get(recoveryDailyLessonId))!;
        recoveryDailyLesson.lessons.push(recoveryLesson)
        await DailyLessonRepository.instance.save(recoveryDailyLesson, recoveryDailyLesson.id);
        return { ...recoveryLesson, dailyLessonId: recoveryDailyLesson.id };
    }

    public async removeRecoveryRef(dailyLesson: DailyLesson, lessonId: ID) {
        // remove recoveryRef from originalDailyLesson
        const l = dailyLesson.lessons.find(l => l.lessonId == lessonId);
        if (l && l.recovery) {
            delete l.recovery;
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id)
        }
    }

    public async moveRecoveryRefToUndoneList(dailyLesson: DailyLesson, lessonId: ID) {
        // remove recoveryRef from originalDailyLesson
        const l = dailyLesson.lessons.find(l => l.lessonId == lessonId);
        if (l && l.recovery) {
            const toMove = { ...l.recovery.lessonRef }
            if (!l.undoneRecoveryRef) l.undoneRecoveryRef = [];
            l.undoneRecoveryRef.push(toMove);
            delete l.recovery;
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id)
        }
    }

    public async addRecoveryRef(dailyLesson: DailyLesson, lessonId: ID, recovery: RecoveryLessonInfo) {
        // const originalDailyLessonDoc = await DailyLessonRepository.instance.getDoc(dailyLessonId);
        // if (originalDailyLessonDoc.exists()) {
        //     const originalDailyLesson = originalDailyLessonDoc.data();
        const l = dailyLesson.lessons.find(l => l.lessonId == lessonId);
        if (l) {
            l.recovery = recovery;
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id)
        }
        // }
    }

    public async deleteStudentLesson(studentLesson: StudentLesson, dailyLesson: DailyLesson, deleteFromRecoveries?: boolean) {
        const index = dailyLesson.lessons.findIndex(s => s.studentId == studentLesson.id) ?? -1;
        if (index == -1)
            return false;

        try {
            const lessonToDelete = dailyLesson.lessons[index];
            if (lessonToDelete.recovery) {
                if (lessonToDelete.recovery.ref == 'original') {
                    // update original daily lesson, by cancelling scheduled recovery
                    const originalDailyLesson = await DailyLessonRepository.instance.get(lessonToDelete.recovery.lessonRef.dailyLessonId);
                    const recoveryDailyLesson = dailyLesson;
                    if (!originalDailyLesson) {
                        console.warn("Unable to cancel recovery because original daily lesson does not exist");
                        return false;
                    }

                    const recoveryLesson: ExtendedStudentLesson = { ...studentLesson, originalDailyLesson, recoveryDailyLesson };
                    await SchoolRecoveryLessonService.instance.cancelRecovery(recoveryLesson, deleteFromRecoveries);
                } else if (lessonToDelete.recovery.ref == 'recovery') {
                    // delete recovery lesson

                    const recoveryDailyLesson = await DailyLessonRepository.instance.get(lessonToDelete.recovery.lessonRef.dailyLessonId);
                    if (!recoveryDailyLesson) {
                        console.warn("Unable to cancel recovery because recovery daily lesson does not exist");
                        return false;
                    }
                    const recoveryStudentLessons = await StudentLessonService.instance.getStudentLesson(recoveryDailyLesson);
                    const recoveryStudentLesson = recoveryStudentLessons.find(l => l.lessonId == lessonToDelete.recovery!.lessonRef.lessonId)
                    if (!recoveryStudentLesson) {
                        console.warn("Unable to cancel recovery because recovery student lesson does not exist");
                        return false;
                    }

                    await this.deleteStudentLesson(recoveryStudentLesson, recoveryDailyLesson, true);
                    dailyLesson.lessons.splice(index, 1);
                    await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id!);
                }
            }


            return true;
        } catch (error) {
            return false;
        }
    }
}