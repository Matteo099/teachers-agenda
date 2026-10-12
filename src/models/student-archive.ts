import { yyyyMMdd, type DailyLesson, type IyyyyMMdd, type Student, type ScheduledLesson } from './model';

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

export function isStudentVisibleInPeriod(student: Student, from: IyyyyMMdd, to: IyyyyMMdd): boolean {
    if (!isStudentArchivedOnDate(student, from)) return true;
    return (student.archiveHistory ?? []).some(change => !change.archived && change.date >= from && change.date < to);
}

/** First archive transition inside the selected period, expressed as its effective date. */
export function studentArchiveDateInPeriod(student: Student, from: IyyyyMMdd, to: IyyyyMMdd): IyyyyMMdd | undefined {
    const transition = [...(student.archiveHistory ?? [])]
        .filter(change => change.archived && change.date >= from && change.date < to)
        .sort((a, b) => a.date.localeCompare(b.date))[0];
    if (!transition) return;
    const nextDay = yyyyMMdd.fromIyyyyMMdd(transition.date).toDate();
    nextDay.setDate(nextDay.getDate() + 1);
    return yyyyMMdd.fromDate(nextDay).toIyyyyMMdd();
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
