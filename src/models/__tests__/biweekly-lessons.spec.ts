import { describe, expect, it } from 'vitest';
import { applyBiweeklyVisibility, isBiweeklyHidden } from '../biweekly-lessons';
import { LessonStatus, type Lesson } from '../model';

describe('lezioni a settimane alterne', () => {
    const student = { biweeklyStartDate: '20261007' };

    it('mantiene visibile la prima settimana e nasconde solo quelle alternate', () => {
        expect(isBiweeklyHidden(student, '20261007')).toBe(false);
        expect(isBiweeklyHidden(student, '20261014')).toBe(true);
        expect(isBiweeklyHidden(student, '20261021')).toBe(false);
        expect(isBiweeklyHidden(student, '20261028')).toBe(true);
    });

    it('non cambia le date precedenti e mantiene la cadenza attraverso il cambio d’ora', () => {
        expect(isBiweeklyHidden(student, '20260930')).toBe(false);
        expect(isBiweeklyHidden(student, '20261104')).toBe(false);
        expect(isBiweeklyHidden(student, '20261111')).toBe(true);
        expect(isBiweeklyHidden({}, '20261014')).toBe(false);
    });

    it('mantiene visibili le lezioni ripristinate manualmente e libera quelle nascoste automaticamente', () => {
        const lesson = { status: LessonStatus.NONE, hiddenForDate: false } as Lesson;
        expect(applyBiweeklyVisibility(lesson, student, '20261014')).toBe(true);
        expect(lesson.biweeklyAutoHidden).toBe(true);
        lesson.hiddenForDate = false;
        delete lesson.biweeklyAutoHidden;
        lesson.biweeklyVisibilityOverride = true;
        expect(applyBiweeklyVisibility(lesson, student, '20261014')).toBe(false);
        expect(lesson.hiddenForDate).toBe(false);
        expect(applyBiweeklyVisibility(lesson, {}, '20261014')).toBe(true);
        expect(lesson.biweeklyVisibilityOverride).toBeUndefined();

        const another = { status: LessonStatus.NONE, hiddenForDate: true, biweeklyAutoHidden: true } as Lesson;
        expect(applyBiweeklyVisibility(another, {}, '20261014')).toBe(true);
        expect(another.hiddenForDate).toBe(false);
    });
});
