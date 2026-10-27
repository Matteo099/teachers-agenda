import { Timestamp } from 'firebase/firestore';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DayOfWeek, LessonStatus, yyyyMMdd, type DailyLesson, type Student, type WeeklyLesson } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { WeeklyLessonRepository } from '@/models/repositories/weekly-lesson-repository';
import { DailyLessonService } from '../daily-lesson-service';
import { LessonGroupService } from '../lesson-group-service';
import { LessonService } from '../lesson-service';
import { StudentService } from '../student-service';
import { WeeklyLessonService } from '../weely-lesson-service';

const stamp = Timestamp.fromMillis(0);
const date = '20261026';
const student = { id: 'student', schoolId: 'school', name: 'Ada', surname: 'Rossi', minutesLessonDuration: 30 } as Student;
const weekly: WeeklyLesson = {
    id: 'weekly', schoolId: 'school', dayOfWeek: DayOfWeek.MONDAY,
    from: '20261001', to: '20261031', exclude: [date],
    schedule: [{ lessonId: 'scheduled', studentId: student.id, startTime: 36000, endTime: 37800 }],
    createdAt: stamp, updatedAt: stamp,
};
const day = (official = true): DailyLesson => ({
    id: `${date}_school`, schoolId: 'school', date, salary: 0, isOfficialCalendarDate: official,
    lessons: [{ lessonId: 'daily', studentId: student.id, startTime: 36000, endTime: 37800,
        status: LessonStatus.NONE, createdAt: stamp, updatedAt: stamp }],
});

afterEach(() => vi.restoreAllMocks());

describe('giorni esclusi dal calendario scolastico', () => {
    it('non proietta la ricorrenza e non ricrea la giornata esclusa', async () => {
        vi.spyOn(StudentService.instance, 'getStudentsOfSchool').mockResolvedValue([student]);
        vi.spyOn(WeeklyLessonRepository.instance, 'getAll').mockResolvedValue([weekly]);
        vi.spyOn(WeeklyLessonService.instance, 'getWeeklyLessonOfSchoolByDayBetweenDate').mockResolvedValue([weekly]);
        vi.spyOn(DailyLessonService.instance, 'getDailyLessonOfSchoolBetweenDate').mockResolvedValue([]);

        const events = await LessonGroupService.instance.getCalendarLessons('school',
            { date: yyyyMMdd.fromIyyyyMMdd(date) }, { date: yyyyMMdd.fromIyyyyMMdd(date) });
        const created = await DailyLessonService.instance.buildDailyLessonFromWeeklyOrEmpty('school', new Date(2026, 9, 26), date);

        expect(events).toEqual([]);
        expect(created).toMatchObject({ lessons: [], isOfficialCalendarDate: false });
    });

    it('nasconde le vecchie lezioni materializzate, ma mostra quelle aggiunte manualmente', async () => {
        vi.spyOn(StudentService.instance, 'getStudentsOfSchool').mockResolvedValue([student]);
        vi.spyOn(WeeklyLessonRepository.instance, 'getAll').mockResolvedValue([weekly]);
        const days = vi.spyOn(DailyLessonService.instance, 'getDailyLessonOfSchoolBetweenDate');
        const range = { date: yyyyMMdd.fromIyyyyMMdd(date) };

        days.mockResolvedValueOnce([day()]);
        expect(await LessonGroupService.instance.getCalendarLessons('school', range, range)).toEqual([]);

        days.mockResolvedValueOnce([day(false)]);
        expect(await LessonGroupService.instance.getCalendarLessons('school', range, range)).toHaveLength(1);
    });

    it('svuota una giornata già salvata quando viene esclusa', async () => {
        const existing = day();
        vi.spyOn(DailyLessonService.instance, 'getDailyLessonOfSchoolByDate').mockResolvedValue(existing);
        vi.spyOn(LessonService.prototype, 'resetLesson').mockResolvedValue(undefined);
        const deleteDay = vi.spyOn(DailyLessonRepository.instance, 'delete').mockResolvedValue(undefined);
        await DailyLessonService.instance.clearExcludedDates(weekly, [date]);
        expect(existing.lessons).toEqual([]);
        expect(deleteDay).toHaveBeenCalledWith(existing.id);
    });
});
