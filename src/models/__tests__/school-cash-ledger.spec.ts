import { Timestamp } from 'firebase/firestore';
import { describe, expect, it } from 'vitest';
import { SalaryStrategy, TrialLessonPaymentStrategy, type School } from '../model';
import { schoolCashLedger, schoolYearStartYear } from '../school-cash-ledger';

const school: School = {
    id: 'school', name: 'Scuola', managed: true, levelRanges: [],
    salaryStrategy: SalaryStrategy.ONLY_PRESENT, trialLessonPaymentStrategy: TrialLessonPaymentStrategy.NOTHING,
    createdAt: Timestamp.fromDate(new Date(2026, 8, 1)), updatedAt: Timestamp.fromDate(new Date(2026, 8, 1)),
    managerOptions: {
        cashFund: 0, totalStudents: 9, quotePerStudent: 10,
        monthlyHistory: [{ month: '202610', totalStudents: 9, quotePerStudent: 10 }],
    },
    cashMovements: [
        { id: 'income', date: '20261010', type: 'INCOME', description: 'Fondo cassa', amount: 90 },
        { id: 'expense', date: '20261120', type: 'EXPENSE', description: 'Spesa', amount: 20 },
        { id: 'future', date: '20261201', type: 'EXPENSE', description: 'Spesa futura', amount: 5 },
    ],
};

describe('fondo cassa dell\'anno scolastico', () => {
    it('porta l\'entrata di ottobre nel saldo di novembre, senza aggiungere le quote degli studenti', () => {
        const ledger = schoolCashLedger(school, 2026, '20261120');
        expect(ledger.openingBalance).toBe(0);
        expect(ledger.balance).toBe(70);
        expect(ledger.rows.map(row => [row.date, row.amount, row.balance])).toEqual([
            ['20261120', 20, 70], ['20261010', 90, 90],
        ]);
    });

    it('porta il saldo nell\'anno scolastico successivo', () => {
        expect(schoolYearStartYear('20270831')).toBe(2026);
        expect(schoolYearStartYear('20270901')).toBe(2027);
        const ledger = schoolCashLedger(school, 2027, '20270915');
        expect(ledger.openingBalance).toBe(65);
        expect(ledger.balance).toBe(65);
    });

    it('esclude i movimenti futuri dal saldo corrente e include il fondo iniziale', () => {
        const ledger = schoolCashLedger({ ...school, managerOptions: { ...school.managerOptions!, cashFund: 15 } }, 2026, '20261015');
        expect(ledger.balance).toBe(105);
        expect(ledger.rows).toHaveLength(1);
        expect(school.cashMovements![0]!.amount).toBe(90);
    });
});
