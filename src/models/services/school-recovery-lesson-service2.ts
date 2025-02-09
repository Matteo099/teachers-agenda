import { LessonStatus, RecoveryStatus, type DailyLesson, type Lesson, type LessonRef, type RecoveryLessonInfo, type SchoolRecoveryLesson, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/recovery-lesson-repository";
import { DailyLessonService2 } from "./daily-lesson-service2";

export type ExpandedLesson = { lesson: Lesson, dailyLessonId: ID }
export type DailyLessonOrIDs = DailyLesson | { dailyLessonId: ID, schoolId: ID };
export type RecoveryReference = { originalDailyLesson: DailyLesson, recoveryDailyLesson?: DailyLesson, recoveryStatus?: LessonStatus };
export type ExtendedStudentLesson = StudentLesson & RecoveryReference;
export interface ExtendedSchoolRecoveryLesson {
    recoveryMap: { type: 'unset' | 'pending' | 'done'; recoveries: ExtendedStudentLesson[] }[]

    schoolId: string;
}

export enum LessonStatusAction {
    SET_PRESENT, SET_ABSENT, RESET
}

export class SchoolRecoveryLessonService2 {

    private static _instance: SchoolRecoveryLessonService2 | null = null;

    public static get instance(): SchoolRecoveryLessonService2 {
        if (!this._instance) this._instance = new SchoolRecoveryLessonService2();
        return this._instance;
    }

    public async getOrCreate(schoolId: ID): Promise<SchoolRecoveryLesson> {
        const doc = await SchoolRecoveryLessonRepository.instance.getDoc(schoolId)
        if (doc.exists()) return doc.data();

        const newRecovery: SchoolRecoveryLesson = { recoveries: [], schoolId }
        await SchoolRecoveryLessonRepository.instance.save(newRecovery, schoolId);
        return newRecovery;
    }

    private updateRecovery(recovery: SchoolRecoveryLesson, lessonRef: LessonRef, status?: RecoveryStatus, info?: LessonRef): boolean {
        const index = recovery.recoveries.findIndex(l => l.originalLesson.dailyLessonId === lessonRef.dailyLessonId && l.originalLesson.lessonId === lessonRef.lessonId);

        if (status == undefined) {
            if (index !== -1) recovery.recoveries.splice(index, 1);
            return true;
        }

        if (index === -1) {
            recovery.recoveries.push({ originalLesson: lessonRef });
        }

        const recoveryEntry = recovery.recoveries[index !== -1 ? index : recovery.recoveries.length - 1];
        recoveryEntry.status = status;

        if (status === RecoveryStatus.PENDING) {
            recoveryEntry.recoveryLesson = info!;
        }
        return true;
    }

    private async setRecoveryRef(dailyLesson: DailyLesson, lessonId: ID, recovery: RecoveryLessonInfo) {
        const l = dailyLesson.lessons.find(l => l.lessonId == lessonId);
        if (l) {
            l.recovery = recovery;
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id)
        }
    }

    private async removeRecoveryRef(dailyLesson: DailyLesson, lessonId: ID) {
        const l = dailyLesson.lessons.find(l => l.lessonId == lessonId);
        if (l && l.recovery) {
            delete l.recovery;
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id)
        }
    }

    private getLessonRefs(lesson: Lesson, dailyLessonId: ID) {
        const isRecoveryLesson = lesson.recovery?.ref === 'original';
        const originalLessonRef: LessonRef = isRecoveryLesson
            ? { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
            : { dailyLessonId, lessonId: lesson.lessonId };
        const recoveryLessonRef: LessonRef | undefined = isRecoveryLesson
            ? { dailyLessonId, lessonId: lesson.lessonId }
            : lesson.recovery ? { dailyLessonId: lesson.recovery.lessonRef.dailyLessonId, lessonId: lesson.recovery.lessonRef.lessonId } : undefined;
        return {
            isRecoveryLesson,
            originalLessonRef,
            recoveryLessonRef
        };
    }

    public async updateRecoveries(schoolId: ID, dailyLessonId: ID, lesson: Lesson) {
        const recovery = await this.getOrCreate(schoolId);

        const { isRecoveryLesson, originalLessonRef } = this.getLessonRefs(lesson, dailyLessonId);

        if (lesson.status === LessonStatus.PRESENT) {
            if (!isRecoveryLesson) {
                this.updateRecovery(recovery, originalLessonRef);
            } else {
                this.updateRecovery(recovery, originalLessonRef, RecoveryStatus.DONE);
            }
        } else if (lesson.status === LessonStatus.ABSENT) {
            if (!isRecoveryLesson) {
                this.updateRecovery(recovery, originalLessonRef, RecoveryStatus.UNSET);
            } else {
                this.updateRecovery(recovery, originalLessonRef, RecoveryStatus.DONE);
            }
        } else {
            console.warn("updateRecoveries() - nothing to update...");
        }

        await SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
    }

    public async resetRecoveries(dailyLesson: DailyLesson, lesson: Lesson) {
        const schoolId: ID = dailyLesson.schoolId;
        const dailyLessonId: ID = dailyLesson.id;
        const recovery = await this.getOrCreate(schoolId);

        const { isRecoveryLesson, originalLessonRef, recoveryLessonRef } = this.getLessonRefs(lesson, dailyLessonId);

        if (!isRecoveryLesson) {
            this.updateRecovery(recovery, originalLessonRef);
            await SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
            
            // if has recovery, delete the recovery lesson
            if(lesson.recovery) {
                // delete lesson
                await DailyLessonService2.instance.deleteLessons(dailyLesson, true, [lesson]);
            }
        } else {
            this.updateRecovery(recovery, originalLessonRef, RecoveryStatus.PENDING, recoveryLessonRef);

            const originalDailyLesson = await DailyLessonRepository.instance.get(originalLessonRef.dailyLessonId);
            const recoveryDailyLesson = await DailyLessonRepository.instance.get(dailyLessonId);

            if (originalDailyLesson && recoveryDailyLesson) {
                const originalRef: RecoveryLessonInfo = { lessonRef: { ...originalLessonRef }, ref: 'original' };
                const recoveryRef: RecoveryLessonInfo = { lessonRef: { ...recoveryLessonRef! }, ref: 'recovery' };

                await this.setRecoveryRef(originalDailyLesson, originalLessonRef.lessonId, recoveryRef);
                await this.setRecoveryRef(recoveryDailyLesson, recoveryLessonRef!.lessonId, originalRef);
            }

            await SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
        }
    }
}