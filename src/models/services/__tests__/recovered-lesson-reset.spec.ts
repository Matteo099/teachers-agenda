import { Timestamp } from 'firebase/firestore';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { LessonStatus, RecoveryStatus, type DailyLesson, type SchoolRecoveryLesson } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { SchoolRecoveryLessonRepository } from '@/models/repositories/recovery-lesson-repository';
import { LessonService } from '../lesson-service';
import { SchoolRecoveryLessonService } from '../school-recovery-lesson-service';

afterEach(() => vi.restoreAllMocks());

describe('ripristino di una lezione già recuperata', () => {
    it('elimina il recupero completato e libera la lezione originale', async () => {
        const stamp = Timestamp.fromMillis(0);
        const originalRef = { dailyLessonId: 'original-day', lessonId: 'original-lesson' };
        const recoveryRef = { dailyLessonId: 'recovery-day', lessonId: 'recovery-lesson' };
        const original: DailyLesson = {
            id: originalRef.dailyLessonId, schoolId: 'school', date: '20261007', salary: 0,
            lessons: [{ lessonId: originalRef.lessonId, studentId: 'student', startTime: 36000,
                endTime: 37800, status: LessonStatus.ABSENT, createdAt: stamp, updatedAt: stamp,
                recovery: { ref: 'recovery', lessonRef: recoveryRef } }],
        };
        const recoveryDay: DailyLesson = {
            id: recoveryRef.dailyLessonId, schoolId: 'school', date: '20261014', salary: 10,
            lessons: [{ lessonId: recoveryRef.lessonId, studentId: 'student', startTime: 36000,
                endTime: 37800, status: LessonStatus.PRESENT, createdAt: stamp, updatedAt: stamp,
                recovery: { ref: 'original', lessonRef: originalRef },
                compensation: { amount: 10, minutes: 30, hourlyRate: 20, level: 'A', type: 'RECOVERY' } }],
        };
        const days = new Map([[original.id, original], [recoveryDay.id, recoveryDay]]);
        let recoveryIndex: SchoolRecoveryLesson = { schoolId: 'school', recoveries: [{
            originalLesson: originalRef, recoveryLesson: recoveryRef,
            recoveryLessons: [recoveryRef], status: RecoveryStatus.DONE,
        }] };

        vi.spyOn(DailyLessonRepository.instance, 'get').mockImplementation(async id => days.get(id));
        vi.spyOn(DailyLessonRepository.instance, 'save').mockImplementation(async (day, id) => {
            days.set(id!, day as DailyLesson);
            return id!;
        });
        vi.spyOn(DailyLessonRepository.instance, 'delete').mockImplementation(async id => { days.delete(id); });
        vi.spyOn(SchoolRecoveryLessonRepository.instance, 'get').mockImplementation(async () => structuredClone(recoveryIndex));
        vi.spyOn(SchoolRecoveryLessonRepository.instance, 'save').mockImplementation(async index => {
            recoveryIndex = structuredClone(index as SchoolRecoveryLesson);
            return 'school';
        });

        await new LessonService().resetLesson(original, original.lessons[0]!);

        expect(original.lessons[0]).toMatchObject({ status: LessonStatus.NONE });
        expect(original.lessons[0]!.recovery).toBeUndefined();
        expect(days.has(recoveryRef.dailyLessonId)).toBe(false);
        expect(recoveryIndex.recoveries).toEqual([]);
    });
});

describe('annullamento di un recupero programmato', () => {
    function setup(recoveryLessonPresent: boolean, sameDay = false) {
        const stamp = Timestamp.fromMillis(0);
        const originalRef = { dailyLessonId: 'original-day', lessonId: 'original-lesson' };
        const recoveryRef = { dailyLessonId: sameDay ? 'original-day' : 'recovery-day', lessonId: 'recovery-lesson' };
        const original: DailyLesson = {
            id: originalRef.dailyLessonId, schoolId: 'school', date: '20261007', salary: 0,
            lessons: [{ lessonId: originalRef.lessonId, studentId: 'student', startTime: 36000,
                endTime: 37800, status: LessonStatus.ABSENT, createdAt: stamp, updatedAt: stamp,
                recovery: { ref: 'recovery', lessonRef: recoveryRef } }],
        };
        const scheduledLessons: DailyLesson['lessons'] = recoveryLessonPresent ? [{ lessonId: recoveryRef.lessonId, studentId: 'student',
                startTime: 36000, endTime: 37800, status: LessonStatus.NONE,
                recovery: { ref: 'original', lessonRef: originalRef, fractionMinutes: 30 },
                createdAt: stamp, updatedAt: stamp }] : [];
        const recoveryDay: DailyLesson = sameDay ? original : {
            id: recoveryRef.dailyLessonId, schoolId: 'school', date: '20261014', salary: 0,
            lessons: scheduledLessons,
        };
        if (sameDay) original.lessons.push(...scheduledLessons);
        const days = new Map([[original.id, original], [recoveryDay.id, recoveryDay]]);
        let index: SchoolRecoveryLesson = { schoolId: 'school', recoveries: [{ originalLesson: originalRef,
            recoveryLesson: recoveryRef, recoveryLessons: [recoveryRef], recoveredMinutes: 30,
            totalMinutes: 30, status: RecoveryStatus.PENDING }] };

        vi.spyOn(DailyLessonRepository.instance, 'get').mockImplementation(async id => days.get(id));
        vi.spyOn(DailyLessonRepository.instance, 'save').mockImplementation(async (day, id) => {
            days.set(id!, day as DailyLesson);
            return id!;
        });
        vi.spyOn(SchoolRecoveryLessonRepository.instance, 'get').mockImplementation(async () => structuredClone(index));
        vi.spyOn(SchoolRecoveryLessonRepository.instance, 'save').mockImplementation(async value => {
            const entry = (value as SchoolRecoveryLesson).recoveries[0]!;
            if (entry.status === RecoveryStatus.UNSET)
                expect(Object.prototype.hasOwnProperty.call(entry, 'recoveryLesson')).toBe(false);
            index = structuredClone(value as SchoolRecoveryLesson);
            return 'school';
        });
        return { originalRef, original, recoveryDay, getIndex: () => index };
    }

    it.each([true, false])('riporta il recupero tra quelli da fare quando la lezione di destinazione esiste: %s', async present => {
        const { originalRef, original, recoveryDay, getIndex } = setup(present);

        await SchoolRecoveryLessonService.instance.cancelScheduledRecovery(originalRef);

        expect(recoveryDay.lessons).toHaveLength(0);
        expect(original.lessons[0]!.recovery).toBeUndefined();
        expect(getIndex().recoveries[0]).toMatchObject({ status: RecoveryStatus.UNSET, recoveredMinutes: 0 });
        expect(getIndex().recoveries[0]!.recoveryLessons).toBeUndefined();
    });

    it('annulla un recupero programmato nello stesso giorno senza ricreare la lezione rimossa', async () => {
        const { originalRef, original, getIndex } = setup(true, true);

        await SchoolRecoveryLessonService.instance.cancelScheduledRecovery(originalRef);

        expect(original.lessons.map(lesson => lesson.lessonId)).toEqual([originalRef.lessonId]);
        expect(original.lessons[0]!.recovery).toBeUndefined();
        expect(getIndex().recoveries[0]!.status).toBe(RecoveryStatus.UNSET);
    });

    it('mantiene programmata la frazione precedente quando ne annulla solo una', async () => {
        const { originalRef, original, recoveryDay, getIndex } = setup(true);
        const previousRef = { dailyLessonId: recoveryDay.id, lessonId: 'previous-fraction' };
        recoveryDay.lessons.unshift({ ...recoveryDay.lessons[0]!, lessonId: previousRef.lessonId });
        const entry = getIndex().recoveries[0]!;
        entry.recoveryLessons = [previousRef, entry.recoveryLesson!];
        entry.recoveredMinutes = 60;

        await SchoolRecoveryLessonService.instance.cancelScheduledRecovery(originalRef);

        expect(recoveryDay.lessons.map(lesson => lesson.lessonId)).toEqual([previousRef.lessonId]);
        expect(original.lessons[0]!.recovery?.lessonRef).toEqual(previousRef);
        expect(getIndex().recoveries[0]).toMatchObject({ status: RecoveryStatus.PENDING,
            recoveryLesson: previousRef, recoveredMinutes: 30 });
    });
});
