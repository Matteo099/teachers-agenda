import { LessonStatus, type DailyLesson, type Student } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { StudentService } from '@/models/services/student-service';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => vi.restoreAllMocks());

describe('lezioni senza anagrafica', () => {
    it('rimuove solo le lezioni prive di allievo e corregge il compenso', async () => {
        vi.spyOn(StudentService.instance, 'getStudentsOfSchool').mockResolvedValue([
            { id: 'present', removed: false },
            { id: 'archived', removed: true }
        ] as Student[]);
        const save = vi.spyOn(DailyLessonRepository.instance, 'save').mockResolvedValue('day-1');
        const daily = {
            id: 'day-1', schoolId: 'school-1', date: '20261005', salary: 19,
            lessons: [
                { lessonId: 'one', studentId: 'present', status: LessonStatus.PRESENT, compensation: { amount: 9 } },
                { lessonId: 'two', studentId: 'archived', status: LessonStatus.ABSENT },
                { lessonId: 'orphan', studentId: 'missing', status: LessonStatus.NONE, compensation: { amount: 10 } }
            ]
        } as DailyLesson;

        await DailyLessonService.instance.removeLessonsWithoutStudent('school-1', [daily]);

        expect(daily.lessons.map(lesson => lesson.studentId)).toEqual(['present', 'archived']);
        expect(daily.salary).toBe(9);
        expect(save).toHaveBeenCalledOnce();
        expect(save).toHaveBeenCalledWith(expect.objectContaining({ salary: 9, lessons: daily.lessons }), daily.id);
    });

    it('non riscrive le giornate quando tutti gli allievi esistono', async () => {
        vi.spyOn(StudentService.instance, 'getStudentsOfSchool').mockResolvedValue([{ id: 'archived', removed: true }] as Student[]);
        const save = vi.spyOn(DailyLessonRepository.instance, 'save');
        const daily = { id: 'day-1', schoolId: 'school-1', lessons: [
            { lessonId: 'one', studentId: 'archived', status: LessonStatus.PRESENT }
        ] } as DailyLesson;

        await DailyLessonService.instance.removeLessonsWithoutStudent('school-1', [daily]);
        expect(save).not.toHaveBeenCalled();
    });
});
