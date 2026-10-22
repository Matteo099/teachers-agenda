import { Timestamp } from 'firebase/firestore';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { LessonStatus, RecoveryStatus, type DailyLesson, type SchoolRecoveryLesson } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { SchoolRecoveryLessonRepository } from '@/models/repositories/recovery-lesson-repository';
import { LessonService } from '../lesson-service';

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
