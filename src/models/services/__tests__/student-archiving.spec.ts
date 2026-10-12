import { StudentRepository } from '@/models/repositories/student-repository';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { WeeklyLessonRepository } from '@/models/repositories/weekly-lesson-repository';
import { StudentService } from '@/models/services/student-service';
import { LessonStatus, yyyyMMdd, type DailyLesson, type Student, type WeeklyLesson } from '@/models/model';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => vi.restoreAllMocks());

describe('archiviazione degli studenti', () => {
    it('rimuove gli eventi programmati e le lezioni future da svolgere, conservando la storia', async () => {
        const student = {
            id: 'student-1', schoolId: 'school-1', name: 'Anna', surname: 'Rossi',
            level: '1', minutesLessonDuration: 40, bandMembers: [{ id: 'member-1', name: 'Anna', surname: 'Rossi', instrument: 'Piano' }]
        } as Student;
        const get = vi.spyOn(StudentRepository.instance, 'get').mockResolvedValue(student);
        const save = vi.spyOn(StudentRepository.instance, 'save').mockResolvedValue(student.id);
        const remove = vi.spyOn(StudentRepository.instance, 'delete');
        const scheduled = {
            id: 'weekly-1', schoolId: student.schoolId,
            schedule: [
                { lessonId: 'scheduled-1', studentId: student.id, startTime: 36000, endTime: 38400 },
                { lessonId: 'scheduled-2', studentId: 'student-2', startTime: 38400, endTime: 40800 }
            ]
        } as WeeklyLesson;
        const weeklyGet = vi.spyOn(WeeklyLessonRepository.instance, 'getAll').mockResolvedValue([scheduled]);
        const weeklySave = vi.spyOn(WeeklyLessonRepository.instance, 'save').mockResolvedValue(scheduled.id);
        const weeklyDelete = vi.spyOn(WeeklyLessonRepository.instance, 'delete');
        const day = {
            id: 'day-1', schoolId: student.schoolId, date: yyyyMMdd.today().toIyyyyMMdd(),
            lessons: [
                { lessonId: 'future', studentId: student.id, status: LessonStatus.NONE },
                { lessonId: 'completed', studentId: student.id, status: LessonStatus.PRESENT },
                { lessonId: 'other', studentId: 'student-2', status: LessonStatus.NONE }
            ]
        } as DailyLesson;
        const dailyGet = vi.spyOn(DailyLessonRepository.instance, 'getAll').mockResolvedValue([day]);
        const dailySave = vi.spyOn(DailyLessonRepository.instance, 'save').mockResolvedValue(day.id);

        await StudentService.instance.setArchived(student.id, true);
        expect(weeklyGet).toHaveBeenCalledOnce();
        expect(weeklySave).toHaveBeenCalledWith(expect.objectContaining({
            schedule: [scheduled.schedule[1]]
        }), scheduled.id);
        expect(weeklyDelete).not.toHaveBeenCalled();
        expect(dailyGet).toHaveBeenCalledOnce();
        expect(dailySave).toHaveBeenCalledWith(expect.objectContaining({
            lessons: [day.lessons[1], day.lessons[2]]
        }), day.id);
        expect(get).toHaveBeenCalledWith(student.id);
        expect(save).toHaveBeenCalledWith(expect.objectContaining({
            id: student.id, schoolId: student.schoolId, bandMembers: student.bandMembers, removed: true
        }), student.id);
        expect(remove).not.toHaveBeenCalled();

        await StudentService.instance.setArchived(student.id, false);
        expect(save).toHaveBeenLastCalledWith(expect.objectContaining({ removed: false }), student.id);
        expect(weeklyGet).toHaveBeenCalledOnce();
        expect(dailyGet).toHaveBeenCalledOnce();
    });

    it('rimuove un orario settimanale rimasto senza allievi', async () => {
        const student = { id: 'student-1', schoolId: 'school-1' } as Student;
        vi.spyOn(StudentRepository.instance, 'get').mockResolvedValue(student);
        vi.spyOn(StudentRepository.instance, 'save').mockResolvedValue(student.id);
        vi.spyOn(DailyLessonRepository.instance, 'getAll').mockResolvedValue([]);
        const weekly = { id: 'weekly-1', schedule: [{ studentId: student.id }] } as WeeklyLesson;
        vi.spyOn(WeeklyLessonRepository.instance, 'getAll').mockResolvedValue([weekly]);
        const remove = vi.spyOn(WeeklyLessonRepository.instance, 'delete').mockResolvedValue();

        await StudentService.instance.setArchived(student.id, true);
        expect(remove).toHaveBeenCalledWith(weekly.id);
    });
});
