import type { CashMovement, IyyyyMMdd, School } from './model';

export interface SchoolCashRow extends CashMovement {
    balance: number;
}

export interface SchoolCashLedger {
    openingBalance: number;
    balance: number;
    rows: SchoolCashRow[];
}

export function schoolYearStartYear(date: IyyyyMMdd): number {
    const year = Number(date.slice(0, 4));
    return Number(date.slice(4, 6)) >= 9 ? year : year - 1;
}

/** The cash fund is independent of monthly student quotas and salary. */
export function schoolCashLedger(school: School, startYear: number, today: IyyyyMMdd): SchoolCashLedger {
    const from = `${startYear}0901`;
    const yearEnd = `${startYear + 1}0831`;
    const through = today < yearEnd ? today : yearEnd;
    const entries = (school.cashMovements ?? []).filter(item => item.date <= through);
    const openingBalance = (school.managerOptions?.cashFund ?? 0) + entries
        .filter(item => item.date < from)
        .reduce((total, item) => total + (item.type === 'INCOME' ? item.amount : -item.amount), 0);

    let balance = openingBalance;
    const rows = entries.filter(item => item.date >= from)
        .sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id))
        .map(item => {
            balance += item.type === 'INCOME' ? item.amount : -item.amount;
            return { ...item, balance };
        });

    return { openingBalance, balance, rows: rows.reverse() };
}
