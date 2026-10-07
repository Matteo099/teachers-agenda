import { LessonStatus, type IyyyyMMdd, type Lesson, type Student } from './model';

function utcDay(date: IyyyyMMdd): number {
    return Date.UTC(Number(date.slice(0, 4)), Number(date.slice(4, 6)) - 1, Number(date.slice(6, 8))) / 86400000;
}

/** Dates before the chosen first lesson keep their existing schedule. */
export function isBiweeklyHidden(student: Pick<Student, 'biweeklyStartDate'>, date: IyyyyMMdd): boolean {
    const first = student.biweeklyStartDate;
    if (!first || date < first) return false;
    const weeks = Math.floor((utcDay(date) - utcDay(first)) / 7);
    return weeks % 2 === 1;
}

/** Return whether an existing lesson changed, preserving manual decisions. */
export function applyBiweeklyVisibility(lesson: Lesson, student: Pick<Student, 'biweeklyStartDate'>, date: IyyyyMMdd): boolean {
    if (lesson.status !== LessonStatus.NONE || lesson.moved || lesson.recovery) return false;
    const shouldHide = isBiweeklyHidden(student, date);
    if (shouldHide && !lesson.hiddenForDate && !lesson.biweeklyVisibilityOverride) {
        lesson.hiddenForDate = true;
        lesson.biweeklyAutoHidden = true;
        return true;
    }
    if (!shouldHide && lesson.biweeklyAutoHidden) {
        lesson.hiddenForDate = false;
        delete lesson.biweeklyAutoHidden;
        delete lesson.biweeklyVisibilityOverride;
        return true;
    }
    if (!shouldHide && lesson.biweeklyVisibilityOverride) {
        delete lesson.biweeklyVisibilityOverride;
        return true;
    }
    return false;
}
