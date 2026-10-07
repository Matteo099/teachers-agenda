import { describe, expect, it } from 'vitest';
import { isFullMonthPeriod, monthPeriod, shiftMonthPeriod } from '../month-period';

describe('monthly salary period', () => {
    it('covers every day of the current month, including leap February', () => {
        const period = monthPeriod(new Date(2024, 1, 15));
        expect(period).toEqual({ from: '20240201', to: '20240229' });
        expect(isFullMonthPeriod(period)).toBe(true);
    });

    it('moves between complete months across a year boundary', () => {
        const december = monthPeriod(new Date(2025, 11, 31));
        expect(shiftMonthPeriod(december, 1)).toEqual({ from: '20260101', to: '20260131' });
        expect(shiftMonthPeriod(december, -1)).toEqual({ from: '20251101', to: '20251130' });
    });

    it('recognizes a custom interval as distinct from a calendar month', () => {
        expect(isFullMonthPeriod({ from: '20260502', to: '20260531' })).toBe(false);
    });
});
