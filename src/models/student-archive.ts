import type { DailyLesson, IyyyyMMdd, Student, ScheduledLesson } from './model';

/** The chosen date is the last day of the previous state. */
export function isStudentArchivedOnDate(student: Student, date: IyyyyMMdd): boolean {
    const history = [...(student.archiveHistory ?? [])].sort((a, b) => a.date.localeCompare(b.date));
    if (history.length === 0) return !!student.removed && date > todayKey();
    let archived = false;
    for (const change of history) {
        if (change.date >= date) break;
        archived = change.archived;
    }
    return archived;
}

export function scheduledLessonsForDate(schedule: ScheduledLesson[], students: Map<string, Student>, date: IyyyyMMdd): ScheduledLesson[] {
    return schedule.filter(lesson => {
        const student = students.get(lesson.studentId);
        return !!student && !isStudentArchivedOnDate(student, date);
    });
}

export function reconcileStudentArchive(daily: DailyLesson, student: Student): DailyLesson {
    const archivedLessons = daily.archivedLessons ?? [];
    if (isStudentArchivedOnDate(student, daily.date)) {
        const moved = daily.lessons.filter(lesson => lesson.studentId === student.id);
        if (!moved.length) return daily;
        const removedPay = moved.reduce((sum, lesson) => sum + (lesson.compensation?.amount ?? 0), 0);
        return { ...daily,
            lessons: daily.lessons.filter(lesson => lesson.studentId !== student.id),
            archivedLessons: [...archivedLessons, ...moved],
            salary: Math.max(0, (daily.salary ?? 0) - removedPay)
        };
    }
    const restored = archivedLessons.filter(lesson => lesson.studentId === student.id);
    if (!restored.length) return daily;
    const restoredPay = restored.reduce((sum, lesson) => sum + (lesson.compensation?.amount ?? 0), 0);
    return { ...daily,
        lessons: [...daily.lessons, ...restored].sort((a, b) => a.startTime - b.startTime),
        archivedLessons: archivedLessons.filter(lesson => lesson.studentId !== student.id),
        salary: (daily.salary ?? 0) + restoredPay
    };
}

function todayKey(): IyyyyMMdd {
    const now = new Date();
    return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
}
