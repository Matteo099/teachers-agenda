import { LessonStatus, type DailyLesson, type School, type Student } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { StatisticsService } from '@/models/services/statistics-service';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => vi.restoreAllMocks());

describe('Assenze per studente', () => {
    it('conta come recuperate solo le assenze collegate a recuperi svolti, anche fuori periodo', async () => {
        const school = { id: 'school-1' } as School;
        const student = { id: 'student-1', schoolId: school.id, name: 'Marta', surname: 'Bianchi' } as Student;
        const original = {
            id: 'original-day', date: '20261001', lessons: [
                { lessonId: 'absence-in', studentId: student.id, status: LessonStatus.ABSENT,
                    recovery: { ref: 'recovery', lessonRef: { dailyLessonId: 'recovery-in', lessonId: 'done-in' } } },
                { lessonId: 'absence-out', studentId: student.id, status: LessonStatus.ABSENT,
                    recovery: { ref: 'recovery', lessonRef: { dailyLessonId: 'recovery-out', lessonId: 'done-out' } } },
                { lessonId: 'absence-pending', studentId: student.id, status: LessonStatus.ABSENT,
                    recovery: { ref: 'recovery', lessonRef: { dailyLessonId: 'pending-out', lessonId: 'pending' } } },
                { lessonId: 'absence-unlinked', studentId: student.id, status: LessonStatus.ABSENT },
                { lessonId: 'absence-unjustified', studentId: student.id, status: LessonStatus.UNJUSTIFIED_ABSENCE },
            ],
        } as DailyLesson;
        const recoveryIn = {
            id: 'recovery-in', date: '20261008', lessons: [
                { lessonId: 'done-in', studentId: student.id, status: LessonStatus.PRESENT },
            ],
        } as DailyLesson;
        const recoveryOut = {
            id: 'recovery-out', date: '20261105', lessons: [
                { lessonId: 'done-out', studentId: student.id, status: LessonStatus.PRESENT },
            ],
        } as DailyLesson;
        const pendingOut = {
            id: 'pending-out', date: '20261112', lessons: [
                { lessonId: 'pending', studentId: student.id, status: LessonStatus.NONE },
            ],
        } as DailyLesson;

        vi.spyOn(StatisticsService.instance.cache, 'getStudents').mockResolvedValue([student]);
        vi.spyOn(DailyLessonService.instance, 'getDailyLessonOfSchoolBetweenDate').mockResolvedValue([original, recoveryIn]);
        const getDay = vi.spyOn(DailyLessonRepository.instance, 'get').mockImplementation(async id =>
            id === recoveryOut.id ? recoveryOut : id === pendingOut.id ? pendingOut : undefined);

        const result = await StatisticsService.instance.getStudentAbsenceSummary('20261001', '20261031', school);

        expect(result).toEqual([{ student: 'Marta Bianchi', archived: false, total: 5, unjustified: 1, recoverable: 2, recovered: 2 }]);
        expect(getDay).toHaveBeenCalledTimes(2);
    });

    it('esclude gli archiviati dalle statistiche dedicate agli studenti', async () => {
        const school = { id: 'school-1', name: 'Scuola' } as School;
        const active = { id: 'active', schoolId: school.id, name: 'Marta', surname: 'Bianchi',
            recitalPieces: [{ piece: 'Brano attivo', author: 'Autore' }] } as Student;
        const archived = { id: 'archived', schoolId: school.id, name: 'Luca', surname: 'Rossi', removed: true,
            archiveHistory: [{ date: '20260930', archived: true }],
            recitalPieces: [{ piece: 'Brano archiviato', author: 'Autore' }] } as Student;
        vi.spyOn(StatisticsService.instance.cache, 'getStudents').mockResolvedValue([active, archived]);
        vi.spyOn(DailyLessonService.instance, 'getDailyLessonOfSchoolBetweenDate').mockResolvedValue([{
            id: 'day', date: '20261001', schoolId: school.id, lessons: [
                { lessonId: 'active-absence', studentId: active.id, status: LessonStatus.ABSENT },
                { lessonId: 'archived-absence', studentId: archived.id, status: LessonStatus.ABSENT },
            ]
        } as DailyLesson]);

        expect(await StatisticsService.instance.getSchoolStudentDistribution('20261001', '20261031', school)).toEqual([
            { category: 'Scuola', value: 1 }
        ]);
        expect((await StatisticsService.instance.getRecitalStudents('20261001', '20261031', school)).map(item => item.student)).toEqual(['Marta Bianchi']);
        expect((await StatisticsService.instance.getStudentAbsenceSummary('20261001', '20261031', school))
            .map(item => item.student)).toEqual(['Marta Bianchi']);
        expect((await StatisticsService.instance.getStudentTrend('20261001', '20261031', school))
            .map(item => item.student)).toEqual(['Marta Bianchi']);
    });

    it('mostra uno studente prima dell’archiviazione e segnala il cambio a metà periodo', async () => {
        const school = { id: 'school-1', name: 'Scuola' } as School;
        const student = { id: 'student', schoolId: school.id, name: 'Luca', surname: 'Rossi', removed: true,
            archiveHistory: [{ date: '20261015', archived: true }],
            recitalPieces: [{ piece: 'Brano', author: 'Autore' }] } as Student;
        vi.spyOn(StatisticsService.instance.cache, 'getStudents').mockResolvedValue([student]);
        vi.spyOn(DailyLessonService.instance, 'getDailyLessonOfSchoolBetweenDate').mockResolvedValue([{
            id: 'day', date: '20261005', schoolId: school.id, lessons: [
                { lessonId: 'absence', studentId: student.id, status: LessonStatus.ABSENT }
            ]
        }, {
            id: 'later-day', date: '20261020', schoolId: school.id, lessons: [
                { lessonId: 'stale-absence', studentId: student.id, status: LessonStatus.ABSENT }
            ]
        }] as DailyLesson[]);

        expect(await StatisticsService.instance.getSchoolStudentDistribution('20260901', '20260930', school))
            .toEqual([{ category: 'Scuola', value: 1 }]);
        expect((await StatisticsService.instance.getStudentAbsenceSummary('20261001', '20261031', school))[0])
            .toMatchObject({ student: 'Luca Rossi', archiveDate: '20261016', total: 1 });
        expect((await StatisticsService.instance.getRecitalStudents('20261001', '20261031', school))[0])
            .toMatchObject({ student: 'Luca Rossi', archiveDate: '20261016' });
        expect(await StatisticsService.instance.getSchoolStudentDistribution('20261101', '20261130', school)).toEqual([]);
        expect(await StatisticsService.instance.getRecitalStudents('20261101', '20261130', school)).toEqual([]);
        expect(await StatisticsService.instance.getStudentAbsenceSummary('20261101', '20261130', school)).toEqual([]);
    });
});
