import { DeleteMode, LessonStatus, RecoveryStatus, type DailyLesson, type Lesson, type LessonRef, type RecoveryLessonInfo, type RecoverySchedule, type SchoolRecoveryLesson, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/recovery-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";

export type ExpandedLesson = { lesson: Lesson, dailyLessonId: ID }
export type RecoveryReference = { originalDailyLesson: DailyLesson, recoveryDailyLesson?: DailyLesson, recoveryStatus?: LessonStatus };
export interface StudentLessonWithRecovery extends StudentLesson { recoveryReference: RecoveryReference };

export class SchoolRecoveryLessonService {

    private static _instance: SchoolRecoveryLessonService | null = null;

    public static get instance(): SchoolRecoveryLessonService {
        if (!this._instance) this._instance = new SchoolRecoveryLessonService();
        return this._instance;
    }

    public async getOrCreate(schoolId: ID): Promise<SchoolRecoveryLesson> {
        const srl = await SchoolRecoveryLessonRepository.instance.get(schoolId)
        if (srl) return srl;

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
            recovery.recoveries.push({ originalLesson: lessonRef, status });
        }

        const recoveryEntry = recovery.recoveries[index !== -1 ? index : recovery.recoveries.length - 1]!;
        recoveryEntry.status = status;

        if (status === RecoveryStatus.PENDING) {
            recoveryEntry.recoveryLesson = info!;
            if (!(recoveryEntry.recoveryLessons ?? []).some(r => r.dailyLessonId === info!.dailyLessonId && r.lessonId === info!.lessonId))
                recoveryEntry.recoveryLessons = [...(recoveryEntry.recoveryLessons ?? []), info!];
        }
        if (status === RecoveryStatus.UNSET) {
            delete recoveryEntry.recoveryLesson;
            delete recoveryEntry.recoveryLessons;
            recoveryEntry.recoveredMinutes = 0;
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

        const { isRecoveryLesson, originalLessonRef, recoveryLessonRef } = this.getLessonRefs(lesson, dailyLessonId);

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
        } else if (lesson.status === LessonStatus.NONE) {
            if (!isRecoveryLesson) {
                this.updateRecovery(recovery, originalLessonRef);
            } else {
                this.updateRecovery(recovery, originalLessonRef, RecoveryStatus.PENDING, recoveryLessonRef);
            }
        } else {
            console.warn("updateRecoveries() - nothing to update...");
        }

        await SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
    }

    public async resetRecoveries(dailyLesson: DailyLesson, lesson: Lesson, deleteMode?: DeleteMode) {
        const schoolId: ID = dailyLesson.schoolId;
        const dailyLessonId: ID = dailyLesson.id;
        const recovery = await this.getOrCreate(schoolId);

        const { isRecoveryLesson, originalLessonRef, recoveryLessonRef } = this.getLessonRefs(lesson, dailyLessonId);

        if (!isRecoveryLesson) {
            const entry = recovery.recoveries.find(r => r.originalLesson.dailyLessonId === originalLessonRef.dailyLessonId && r.originalLesson.lessonId === originalLessonRef.lessonId);
            const linkedRecoveries = [...(entry?.recoveryLessons ?? []), ...(lesson.recovery ? [lesson.recovery.lessonRef] : [])]
                .filter((ref, index, refs) => refs.findIndex(other => other.dailyLessonId === ref.dailyLessonId && other.lessonId === ref.lessonId) === index);
            this.updateRecovery(recovery, originalLessonRef);
            await SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);

            for (const ref of linkedRecoveries) {
                const recoveryDailyLesson = await DailyLessonRepository.instance.get(ref.dailyLessonId);
                const recoveryLesson = recoveryDailyLesson?.lessons.find(l => l.lessonId === ref.lessonId);
                if (recoveryDailyLesson && recoveryLesson)
                    await DailyLessonService.instance.deleteLessons(recoveryDailyLesson, true, [recoveryLesson], deleteMode);
            }
            // Deleting a linked recovery may recreate an UNSET entry; the original
            // is being reset, so neither the reference nor that entry should remain.
            delete lesson.recovery;
            const latestRecovery = await this.getOrCreate(schoolId);
            this.updateRecovery(latestRecovery, originalLessonRef);
            await SchoolRecoveryLessonRepository.instance.save(latestRecovery, schoolId);
        } else {
            if (deleteMode == DeleteMode.DELETING_ORIGINAL_LESSON) this.updateRecovery(recovery, originalLessonRef);
            else if (deleteMode == DeleteMode.DELETING_RECOVERY_LESSON) this.updateRecovery(recovery, originalLessonRef, RecoveryStatus.UNSET);
            else {
                this.updateRecovery(recovery, originalLessonRef, RecoveryStatus.PENDING, recoveryLessonRef);

                const originalDailyLesson = await DailyLessonRepository.instance.get(originalLessonRef.dailyLessonId);
                const recoveryDailyLesson = await DailyLessonRepository.instance.get(dailyLessonId);

                if (originalDailyLesson && recoveryDailyLesson) {
                    const originalRef: RecoveryLessonInfo = { lessonRef: { ...originalLessonRef }, ref: 'original' };
                    const recoveryRef: RecoveryLessonInfo = { lessonRef: { ...recoveryLessonRef! }, ref: 'recovery' };

                    await this.setRecoveryRef(originalDailyLesson, originalLessonRef.lessonId, recoveryRef);
                    await this.setRecoveryRef(recoveryDailyLesson, recoveryLessonRef!.lessonId, originalRef);
                }
            }

            await SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
        }
    }

    public async scheduleRecovery(extStudentLesson: StudentLessonWithRecovery, schedule: RecoverySchedule): Promise<LessonRef> {
        const schoolId = extStudentLesson.recoveryReference.originalDailyLesson.schoolId;
        const recovery = await this.getOrCreate(schoolId);

        // Step 1: create a new lesson R with recoveryReference to Original Lesson
        const recoveryDailyLesson = await DailyLessonService.instance.createRecoveryLesson(schedule);
        // Step 2: update original lesson O with recoveryReference to R Lesson
        await DailyLessonService.instance.updateOriginalRecoveryLesson(extStudentLesson, recoveryDailyLesson);
        // Step 3: update school recovery lesson status
        const ref: LessonRef = {
            dailyLessonId: extStudentLesson.recoveryReference.originalDailyLesson.id,
            lessonId: extStudentLesson.lesson.lessonId
        }
        const info: LessonRef = {
            dailyLessonId: recoveryDailyLesson.dailyLessonId,
            lessonId: recoveryDailyLesson.lesson.lessonId
        }
        const fractionMinutes = schedule.minutes ?? Math.round((schedule.endTime - schedule.startTime) / 60);
        this.updateRecovery(recovery, ref, RecoveryStatus.PENDING, info)
        const entry = recovery.recoveries.find(r => r.originalLesson.dailyLessonId === ref.dailyLessonId && r.originalLesson.lessonId === ref.lessonId);
        if (entry) {
            entry.totalMinutes ??= extStudentLesson.lesson.endTime - extStudentLesson.lesson.startTime > 0
                ? Math.round((extStudentLesson.lesson.endTime - extStudentLesson.lesson.startTime) / 60) : fractionMinutes;
            entry.recoveredMinutes = (entry.recoveredMinutes ?? 0) + fractionMinutes;
        }

        await SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);

        return info;
    }

    public async cancelRecovery(extStudentLesson: StudentLessonWithRecovery) {
        const originalDailyLesson = extStudentLesson.recoveryReference.originalDailyLesson;
        const recoveryDailyLesson = extStudentLesson.recoveryReference.recoveryDailyLesson!;
        const schoolId = originalDailyLesson.schoolId;
        const { originalLessonRef, recoveryLessonRef } = this.getLessonRefs(extStudentLesson.lesson, originalDailyLesson.id);
        const originalLesson = originalDailyLesson.lessons.find(l => l.lessonId == originalLessonRef.lessonId);
        const recoveryLesson = recoveryDailyLesson.lessons.find(l => l.lessonId == recoveryLessonRef?.lessonId);

        if (!originalLesson) {
            console.warn("Unable to cancel recovery because original lesson is undefined")
            return;
        }

        if (!recoveryLesson) {
            console.warn("Unable to cancel recovery because recovery lesson is undefined")
            return;
        }

        // delete recovery lesson
        await DailyLessonService.instance.deleteLessons(recoveryDailyLesson, true, [recoveryLesson]);
        // remove recovery ref
        await this.removeRecoveryRef(originalDailyLesson, originalLessonRef.lessonId);
        // update original lesson status => UNSET
        await this.updateRecoveries(schoolId, originalDailyLesson.id, originalLesson);
    }

    /** Cancel the latest scheduled recovery, including entries whose lesson was already removed. */
    public async cancelScheduledRecovery(originalLesson: LessonRef): Promise<void> {
        const originalDailyLesson = await DailyLessonRepository.instance.get(originalLesson.dailyLessonId);
        if (!originalDailyLesson) throw new Error("Original daily lesson not found");
        const original = originalDailyLesson.lessons.find(lesson => lesson.lessonId === originalLesson.lessonId);
        if (!original) throw new Error("Original lesson not found");

        const recovery = await this.getOrCreate(originalDailyLesson.schoolId);
        const entry = recovery.recoveries.find(item => item.originalLesson.dailyLessonId === originalLesson.dailyLessonId && item.originalLesson.lessonId === originalLesson.lessonId);
        const recoveryLesson = entry?.recoveryLesson ?? entry?.recoveryLessons?.[entry.recoveryLessons.length - 1] ?? original.recovery?.lessonRef;
        if (!entry || !recoveryLesson) throw new Error("Scheduled recovery not found");

        await this.cancelRecoveryFraction(originalLesson, recoveryLesson);
    }

    /** Remove one scheduled fraction without cancelling other fractions. */
    public async cancelRecoveryFraction(originalLesson: LessonRef, recoveryLesson: LessonRef): Promise<void> {
        const originalDailyLesson = await DailyLessonRepository.instance.get(originalLesson.dailyLessonId);
        if (!originalDailyLesson) throw new Error("Original daily lesson not found");
        const original = originalDailyLesson.lessons.find(lesson => lesson.lessonId === originalLesson.lessonId);
        if (!original) throw new Error("Original lesson not found");

        const recovery = await this.getOrCreate(originalDailyLesson.schoolId);
        const entry = recovery.recoveries.find(r => r.originalLesson.dailyLessonId === originalLesson.dailyLessonId && r.originalLesson.lessonId === originalLesson.lessonId);
        if (!entry) throw new Error("Scheduled recovery not found");

        const recoveryDailyLesson = recoveryLesson.dailyLessonId === originalDailyLesson.id
            ? originalDailyLesson : await DailyLessonRepository.instance.get(recoveryLesson.dailyLessonId);
        if (recoveryDailyLesson) {
            const index = recoveryDailyLesson.lessons.findIndex(l => l.lessonId === recoveryLesson.lessonId);
            if (index !== -1) {
                const removedLesson = recoveryDailyLesson.lessons[index]!;
                recoveryDailyLesson.salary = Math.max(0, (recoveryDailyLesson.salary ?? 0) - (removedLesson.compensation?.amount ?? 0));
                recoveryDailyLesson.lessons.splice(index, 1);
                if (recoveryDailyLesson !== originalDailyLesson)
                    await DailyLessonRepository.instance.save(recoveryDailyLesson, recoveryDailyLesson.id);
            }
        }

        const refs = [...(entry.recoveryLessons ?? []), ...(entry.recoveryLesson ? [entry.recoveryLesson] : [])]
            .filter((ref, index, all) => all.findIndex(other => other.dailyLessonId === ref.dailyLessonId && other.lessonId === ref.lessonId) === index)
            .filter(ref => ref.dailyLessonId !== recoveryLesson.dailyLessonId || ref.lessonId !== recoveryLesson.lessonId);
        const remainingRefs: LessonRef[] = [];
        let recoveredMinutes = 0;
        for (const ref of refs) {
            const day = await DailyLessonRepository.instance.get(ref.dailyLessonId);
            const lesson = day?.lessons.find(item => item.lessonId === ref.lessonId);
            if (!lesson) continue;
            remainingRefs.push(ref);
            recoveredMinutes += lesson.recovery?.fractionMinutes ?? Math.round((lesson.endTime - lesson.startTime) / 60);
        }
        entry.recoveredMinutes = recoveredMinutes;
        if (remainingRefs.length) {
            entry.recoveryLessons = remainingRefs;
            entry.recoveryLesson = remainingRefs[remainingRefs.length - 1]!;
            entry.status = RecoveryStatus.PENDING;
            original.recovery = { ref: 'recovery', lessonRef: entry.recoveryLesson };
        } else {
            delete entry.recoveryLessons;
            delete entry.recoveryLesson;
            entry.status = RecoveryStatus.UNSET;
            delete original.recovery;
        }

        await DailyLessonRepository.instance.save(originalDailyLesson, originalDailyLesson.id);
        await SchoolRecoveryLessonRepository.instance.save(recovery, recovery.schoolId);
    }
}
