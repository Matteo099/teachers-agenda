import { LessonStatus, type DailyLesson, type IyyyyMMdd, type Lesson } from './model';
import type { StatusColorKey } from './statusColors';

export interface StudentLessonHistoryEntry {
    id: string;
    date: IyyyyMMdd;
    startTime: number;
    statuses: StatusColorKey[];
}

function statusesForLesson(lesson: Lesson): StatusColorKey[] {
    if (lesson.moved?.ref === 'moved' || lesson.status === LessonStatus.MOVED) return ['moved'];

    const statuses: StatusColorKey[] = [];
    if (lesson.recovery?.ref === 'original') statuses.push('recovery');
    if (lesson.moved?.ref === 'original') statuses.push('moved');

    switch (lesson.status) {
        case LessonStatus.PRESENT:
        case LessonStatus.TRIAL:
            statuses.push('present');
            break;
        case LessonStatus.ABSENT:
            statuses.push('due');
            break;
        case LessonStatus.UNJUSTIFIED_ABSENCE:
            statuses.push('absent');
            break;
    }
    return statuses.length && lesson.status !== LessonStatus.NONE ? statuses : [];
}

export function getStudentLessonHistory(days: DailyLesson[], studentId: string, through: IyyyyMMdd): StudentLessonHistoryEntry[] {
    const seen = new Set<string>();
    return days.filter(day => day.date <= through).flatMap(day =>
        [...day.lessons, ...(day.archivedLessons ?? [])].flatMap(lesson => {
            if (lesson.studentId !== studentId || seen.has(lesson.lessonId)) return [];
            const statuses = statusesForLesson(lesson);
            if (!statuses.length) return [];
            seen.add(lesson.lessonId);
            return [{ id: lesson.lessonId, date: day.date, startTime: lesson.startTime, statuses }];
        })
    ).sort((a, b) => b.date.localeCompare(a.date) || b.startTime - a.startTime);
}
