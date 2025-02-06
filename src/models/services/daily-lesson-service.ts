import { orderBy, Timestamp, where, type OrderByDirection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { LessonStatus, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type Lesson, type LessonRef, type RecoveryLessonInfo, type RecoverySchedule, type School, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof } from "../utils";
import { type LessonProjection } from "./lesson-group-service";
import { SalaryService } from "./salary-service";
import { SchoolRecoveryLessonService, type ExpandedLesson, type ExtendedStudentLesson } from "./school-recovery-lesson-service";
import { StudentLessonService } from "./student-lesson-service";
import { WeeklyLessonService } from "./weely-lesson-service";

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

    public async getDailyLessonOfSchoolBetweenDate(schoolId: ID, from: IyyyyMMdd, to: IyyyyMMdd): Promise<DailyLesson[]> {
        // retireve all the dailyLesson between from and to
        const _query1 = where(nameof<DailyLesson>('schoolId'), '==', schoolId);
        const _query2 = where(nameof<DailyLesson>('date'), '>=', from);
        const _query3 = where(nameof<DailyLesson>('date'), '<=', to);
        return await DailyLessonRepository.instance.getAll(_query1, _query2, _query3);
    }

    public async delete(dailyLesson: DailyLesson) {
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(dailyLesson.schoolId);
        const wl = weeklyLessons.find(wl => WeeklyLessonService.instance.isValid(wl, dailyLesson.date));
        if (wl) {
            wl.exclude.push(dailyLesson.date);
            await WeeklyLessonRepository.instance.save(wl, wl.id);
            return true;
        }
        await DailyLessonRepository.instance.delete(dailyLesson.id);
        return false;
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
        // const schoolLessons = await SchoolService.instance.getSchoolLessons(schedule.schoolId, schedule.date)
        const recoveryDailyLessonId = await this.getOrCreateDailyLessonId(schedule.schoolId, schedule.date);
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

    public async deleteLessonAndReferences(studentLesson: StudentLesson, dailyLesson: DailyLesson, deleteDailyLessonWhenNoLessons: boolean, deleteFromRecoveries?: boolean) {
        const index = dailyLesson.lessons.findIndex(s => s.studentId == studentLesson.id) ?? -1;
        if (index == -1)
            return false;

        try {
            const lessonToDelete = dailyLesson.lessons[index];

            debugger;

            if (lessonToDelete.recovery?.ref == 'original') {
                // update original daily lesson, by cancelling scheduled recovery
                const originalDailyLesson = await DailyLessonRepository.instance.get(lessonToDelete.recovery.lessonRef.dailyLessonId);
                const recoveryDailyLesson = dailyLesson;
                if (!originalDailyLesson) {
                    console.warn("Unable to cancel recovery because original daily lesson does not exist");
                    return false;
                }

                const recoveryLesson: ExtendedStudentLesson = { ...studentLesson, originalDailyLesson, recoveryDailyLesson };
                await SchoolRecoveryLessonService.instance.cancelRecovery(recoveryLesson, deleteFromRecoveries);
            } else if (lessonToDelete.recovery?.ref == 'recovery') {
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

                await this.deleteLessonAndReferences(recoveryStudentLesson, recoveryDailyLesson, deleteDailyLessonWhenNoLessons, true);
                dailyLesson.lessons.splice(index, 1);
                await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id!);
            } else if (lessonToDelete.moved?.ref == 'original') {
                // update original daily lesson, by resetting moved lesson
                const originalDailyLesson = await DailyLessonRepository.instance.get(lessonToDelete.moved.lessonRef.dailyLessonId);
                const lesson = originalDailyLesson?.lessons.find(l => l.lessonId == lessonToDelete.moved?.lessonRef.lessonId);
                if (!lesson) {
                    console.warn("Unable to cancel moved lesson because original lesson does not exist");
                    return false;
                }

                await this.undoMoveDailyLesson(lesson);
                dailyLesson.lessons.splice(index, 1);
                await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id!);
            } else if (lessonToDelete.moved?.ref == 'moved') {
                await this.undoMoveDailyLesson(lessonToDelete);
                dailyLesson.lessons.splice(index, 1);
                await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id!);
            }
            else {
                // lessonToDelete.recovery is undefined
                await this.deleteLesson(dailyLesson, index, deleteDailyLessonWhenNoLessons);
            }

            return true;
        } catch (error) {
            return false;
        }
    }

    public async deleteLesson(dailyLesson?: DailyLesson, index?: number, deleteDailyLessonWhenNoLessons?: boolean) {
        if (dailyLesson && index != undefined && index != -1) {
            dailyLesson.lessons.splice(index, 1);
            // if the recovery daily lesson has no more lessons, delete it
            if (dailyLesson.lessons.length == 0 && deleteDailyLessonWhenNoLessons) {
                await DailyLessonRepository.instance.delete(dailyLesson.id);
            } else {
                await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
            }
        }
    }

    public async computeSalaryOfDailyLesson(school: School, dailyLessonId: ID): Promise<DailyLesson | undefined> {
        const dailyLesson = await DailyLessonRepository.instance.get(dailyLessonId);
        if (!dailyLesson) return;
        const studentIds = dailyLesson.lessons.map(l => l.studentId);
        const studentLessons = await StudentLessonService.instance.getStudentLesson(dailyLesson, studentIds);

        let salary = 0;
        dailyLesson.lessons.forEach(l => {
            const less = studentLessons.find(sl => sl.id == l.studentId);
            if (less === undefined) return;
            salary += SalaryService.instance.computeSalaryByStudentLesson(school, less, dailyLesson.date);
        })
        if (salary != dailyLesson.salary) {
            dailyLesson.salary = salary;
            dailyLesson.lastSalaryUpdate = Timestamp.now();
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
            return dailyLesson;
        }
        return;
    }

    public async moveDailyLesson(schoolId: ID, originalDailyLessonId: ID, lessonToMove: Lesson, newLessonDate: Date) {
        // Step 1: get (or create) the new dailyLesson
        const newDailyLessonId = await DailyLessonService.instance.getOrCreateDailyLessonId(schoolId, newLessonDate);
        // Step 2: add the lesson to the new dailyLesson
        const newDailyLesson = await DailyLessonRepository.instance.get(newDailyLessonId);
        if (newDailyLesson) {
            newDailyLesson.lessons.push({
                lessonId: uuidv4(),
                studentId: lessonToMove.studentId,
                endTime: lessonToMove.endTime,
                startTime: lessonToMove.startTime,
                moved: {
                    ref: 'original',
                    lessonRef: {
                        dailyLessonId: originalDailyLessonId,
                        lessonId: lessonToMove.lessonId
                    }
                },
                status: LessonStatus.NONE,
                updatedAt: Timestamp.now(),
                createdAt: Timestamp.now()
            });
            newDailyLesson.lessons.sort((a, b) => a.startTime - b.startTime);
            await DailyLessonRepository.instance.save(newDailyLesson, newDailyLesson.id);

            lessonToMove.moved = {
                ref: 'moved',
                lessonRef: {
                    dailyLessonId: newDailyLesson.id,
                    lessonId: lessonToMove.lessonId
                }
            }
        } else throw new Error("Unable to move the lesson because the new daily lesson is undefined!");
    }

    public async undoMoveDailyLesson(lesson: Lesson) {
        if (!lesson.moved) return;

        if (lesson.moved.ref == 'moved') {
            const movedDailyLesson = await DailyLessonRepository.instance.get(lesson.moved.lessonRef.dailyLessonId);
            const index = movedDailyLesson?.lessons.findIndex(l => l.lessonId == lesson.moved?.lessonRef.lessonId);
            if (index != undefined && index != -1) {
                movedDailyLesson?.lessons.splice(index, 1);
                await DailyLessonRepository.instance.save(movedDailyLesson, movedDailyLesson?.id);
                delete lesson.moved;
            }
        }
    }
}