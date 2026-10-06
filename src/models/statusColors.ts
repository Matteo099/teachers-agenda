import { LessonStatus, type Lesson } from './model';

export const statusColors = {
    present: { label: 'Presente', short: 'P', background: '#DDF3E4', foreground: '#2E9E5B' },
    due: { label: 'Da recuperare', short: 'D', background: '#FFF1C9', foreground: '#C98A00' },
    absent: { label: 'Assenza ingiustificata', short: 'A', background: '#FDDADA', foreground: '#D64545' },
    recovery: { label: 'Recupero', short: 'R', background: '#D9EAFE', foreground: '#2F6FED' },
    moved: { label: 'Spostata', short: 'S', background: '#FFE0C7', foreground: '#E67A1F' },
} as const;

export type StatusColorKey = keyof typeof statusColors;

export function lessonStatusColor(lesson: Lesson): StatusColorKey | undefined {
    if (lesson.moved?.ref === 'moved') return 'moved';
    if (lesson.recovery?.ref === 'recovery') return 'recovery';
    switch (lesson.status) {
        case LessonStatus.PRESENT: return 'present';
        case LessonStatus.ABSENT: return 'due';
        case LessonStatus.UNJUSTIFIED_ABSENCE: return 'absent';
        default: return undefined;
    }
}
