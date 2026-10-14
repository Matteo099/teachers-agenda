import { LessonStatus, type DailyLesson, type Lesson } from '@/models/model';
import { getStudentLessonHistory } from '@/models/student-lesson-history';
import { describe, expect, it } from 'vitest';

const lesson = (id: string, status: LessonStatus, extra: Partial<Lesson> = {}) => ({
    lessonId: id, studentId: 'student', status, startTime: 57600, endTime: 60000, ...extra
}) as Lesson;
const day = (date: string, lessons: Lesson[], archivedLessons: Lesson[] = []) => ({
    id: date, date, schoolId: 'school', salary: 0, lessons, archivedLessons
}) as DailyLesson;

describe('storico lezioni dello studente', () => {
    it('ordina le lezioni svolte e mostra insieme tipo ed esito di recuperi e spostamenti', () => {
        const days = [
            day('20261006', [lesson('present', LessonStatus.PRESENT)]),
            day('20261007', [lesson('due', LessonStatus.ABSENT), lesson('absent', LessonStatus.UNJUSTIFIED_ABSENCE)]),
            day('20261008', [lesson('recovery', LessonStatus.PRESENT, { recovery: { ref: 'original', lessonRef: { dailyLessonId: 'old', lessonId: 'due' } } })]),
            day('20261009', [lesson('moved', LessonStatus.MOVED, { moved: { ref: 'moved', lessonRef: { dailyLessonId: 'new', lessonId: 'destination' } } })]),
            day('20261010', [lesson('destination', LessonStatus.PRESENT, { moved: { ref: 'original', lessonRef: { dailyLessonId: 'old', lessonId: 'moved' } } })]),
            day('20261011', [lesson('trial', LessonStatus.TRIAL)]),
        ];
        const entries = getStudentLessonHistory(days, 'student', '20261011');

        expect(entries.map(entry => [entry.id, entry.statuses])).toEqual([
            ['present', ['present']],
            ['due', ['due']], ['absent', ['absent']],
            ['recovery', ['recovery', 'present']],
            ['moved', ['moved']],
            ['destination', ['moved', 'present']],
            ['trial', ['present']],
        ]);
    });

    it('non mostra lezioni future o senza esito e conserva quelle svolte nello storico archivio', () => {
        const days = [
            day('20261012', [lesson('pending', LessonStatus.NONE), lesson('other', LessonStatus.PRESENT, { studentId: 'other' })],
                [lesson('archived', LessonStatus.PRESENT)]),
            day('20261020', [lesson('future', LessonStatus.PRESENT)]),
        ];
        expect(getStudentLessonHistory(days, 'student', '20261013').map(entry => entry.id)).toEqual(['archived']);
    });
});
