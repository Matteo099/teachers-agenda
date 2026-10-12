import { LessonStatus, type DailyLesson, type Student } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { StudentRepository } from '@/models/repositories/student-repository';
import { WeeklyLessonRepository } from '@/models/repositories/weekly-lesson-repository';
import { StudentService } from '@/models/services/student-service';
import { isStudentArchivedOnDate, reconcileStudentArchive, scheduledLessonsForDate } from '@/models/student-archive';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => vi.restoreAllMocks());

describe('storico archivio studenti', () => {
    const student = { id: 'A', schoolId: 'school', name: 'A', archiveHistory: [
        { date: '20261030', archived: true },
        { date: '20261120', archived: false },
        { date: '20261215', archived: true }
    ] } as Student;

    it('mantiene A nelle lezioni precedenti e applica ogni cambio dal giorno successivo', () => {
        expect(isStudentArchivedOnDate(student, '20261030')).toBe(false);
        expect(isStudentArchivedOnDate(student, '20261031')).toBe(true);
        expect(isStudentArchivedOnDate(student, '20261120')).toBe(true);
        expect(isStudentArchivedOnDate(student, '20261121')).toBe(false);
        expect(isStudentArchivedOnDate(student, '20261216')).toBe(true);
        const students = new Map([[student.id, student]]);
        const schedule = [{ lessonId: 'scheduled-A', studentId: student.id, startTime: 36000, endTime: 38400 }];
        expect(scheduledLessonsForDate(schedule, students, '20261005')).toHaveLength(1);
        expect(scheduledLessonsForDate(schedule, students, '20261108')).toHaveLength(0);
        expect(scheduledLessonsForDate(schedule, students, '20261123')).toHaveLength(1);
    });

    it('conserva la lezione già creata in uno storico reversibile e aggiorna il compenso', () => {
        const day = { id: 'day', date: '20261108', schoolId: 'school', salary: 9,
            lessons: [{ lessonId: 'lesson-A', studentId: 'A', status: LessonStatus.PRESENT, startTime: 36000,
                compensation: { amount: 9 } }]
        } as DailyLesson;
        const archived = reconcileStudentArchive(day, student);
        expect(archived.lessons).toHaveLength(0);
        expect(archived.archivedLessons?.map(lesson => lesson.lessonId)).toEqual(['lesson-A']);
        expect(archived.salary).toBe(0);
        const correctedStudent = { ...student, archiveHistory: [{ date: '20261215', archived: true }] } as Student;
        const restored = reconcileStudentArchive(archived, correctedStudent);
        expect(restored.lessons.map(lesson => lesson.lessonId)).toEqual(['lesson-A']);
        expect(restored.archivedLessons).toHaveLength(0);
        expect(restored.salary).toBe(9);
    });

    it('salva la data scelta e aggiorna le giornate nel periodo interessato', async () => {
        const original = { id: 'A', schoolId: 'school', name: 'A' } as Student;
        vi.spyOn(StudentRepository.instance, 'get').mockResolvedValue(original);
        const saveStudent = vi.spyOn(StudentRepository.instance, 'save').mockResolvedValue(original.id);
        const day = { id: 'november', schoolId: 'school', date: '20261108', salary: 0,
            lessons: [{ lessonId: 'A-lesson', studentId: 'A', status: LessonStatus.NONE, startTime: 36000 }] } as DailyLesson;
        vi.spyOn(DailyLessonRepository.instance, 'getAll').mockResolvedValue([day]);
        const saveDay = vi.spyOn(DailyLessonRepository.instance, 'save').mockResolvedValue(day.id);
        await StudentService.instance.setArchived('A', true, '20261030');
        expect(saveStudent).toHaveBeenCalledWith(expect.objectContaining({
            archiveHistory: [{ date: '20261030', archived: true }], removed: true
        }), 'A');
        expect(saveDay).toHaveBeenCalledWith(expect.objectContaining({
            lessons: [], archivedLessons: day.lessons
        }), day.id);
    });

    it('ripristina in una giornata già creata durante il periodo di archivio la lezione settimanale', async () => {
        const original = { id: 'A', schoolId: 'school', name: 'A', removed: true,
            archiveHistory: [{ date: '20261030', archived: true }] } as Student;
        vi.spyOn(StudentRepository.instance, 'get').mockResolvedValue(original);
        vi.spyOn(StudentRepository.instance, 'save').mockResolvedValue(original.id);
        const day = { id: 'november', schoolId: 'school', date: '20261123', salary: 0, lessons: [] } as unknown as DailyLesson;
        vi.spyOn(DailyLessonRepository.instance, 'getAll').mockResolvedValue([day]);
        const saveDay = vi.spyOn(DailyLessonRepository.instance, 'save').mockResolvedValue(day.id);
        vi.spyOn(WeeklyLessonRepository.instance, 'getAll').mockResolvedValue([{
            id: 'weekly', schoolId: 'school', dayOfWeek: 1, from: '20260901', to: '20261231', exclude: [],
            schedule: [{ studentId: 'A', startTime: 36000, endTime: 38400 }]
        } as any]);
        await StudentService.instance.setArchived('A', false, '20261120');
        expect(saveDay).toHaveBeenCalledWith(expect.objectContaining({
            lessons: [expect.objectContaining({ studentId: 'A', status: LessonStatus.NONE })]
        }), day.id);
    });
});
