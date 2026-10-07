import { yyyyMMdd, type DateSelectModel } from './model';

export function monthPeriod(date: Date): DateSelectModel {
    return {
        from: yyyyMMdd.fromDate(new Date(date.getFullYear(), date.getMonth(), 1)).toIyyyyMMdd(),
        to: yyyyMMdd.fromDate(new Date(date.getFullYear(), date.getMonth() + 1, 0)).toIyyyyMMdd(),
    };
}

export function shiftMonthPeriod(period: DateSelectModel | undefined, offset: number): DateSelectModel {
    const anchor = period?.from ? yyyyMMdd.fromIyyyyMMdd(period.from).toDate() : new Date();
    return monthPeriod(new Date(anchor.getFullYear(), anchor.getMonth() + offset, 1));
}

export function isFullMonthPeriod(period: DateSelectModel | undefined): boolean {
    if (!period?.from || !period.to) return false;
    const start = yyyyMMdd.fromIyyyyMMdd(period.from).toDate();
    const month = monthPeriod(start);
    return period.from === month.from && period.to === month.to;
}
