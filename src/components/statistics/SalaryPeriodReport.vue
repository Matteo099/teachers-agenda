<template>
    <StatisticsPanel title="Resoconto del compenso" icon="mdi-cash-multiple" :loading="loading">
        <div class="salary-report-totals">
            <div class="salary-report-total"><span>Totale netto lezioni</span><strong>{{ currency(lessonsTotal) }}</strong></div>
            <div class="salary-report-total"><span>Totale rimborsi</span><strong>{{ currency(reimbursementsTotal) }}</strong></div>
            <div class="salary-report-total salary-report-total--overall">
                <span>Totale globale</span><strong>{{ currency(globalTotal) }}</strong>
                <small v-if="managementTotal">Include {{ currency(managementTotal) }} di quota gestione</small>
            </div>
        </div>
        <div class="salary-report-heading">
            <h3>Giorni di lezione</h3>
            <span>{{ days.length }} {{ days.length === 1 ? 'giorno' : 'giorni' }}</span>
        </div>
        <div class="salary-report-table">
            <v-data-table :headers="headers" :items="days" item-value="id" density="comfortable" :items-per-page="10">
                <template #item.date="{ item }">{{ yyyyMMdd.fromIyyyyMMdd(item.date).format() }}</template>
                <template #item.salary="{ item }"><strong>{{ currency(item.salary) }}</strong></template>
                <template #no-data>Nessuna lezione nel periodo selezionato.</template>
            </v-data-table>
        </div>
    </StatisticsPanel>
</template>

<script setup lang="ts">
import { yyyyMMdd, type IyyyyMMdd, type School } from '@/models/model';
import { MonthlySalaryService } from '@/models/services/monthly-salary-service';
import { SalaryService } from '@/models/services/salary-service';
import { ref, watch } from 'vue';
import StatisticsPanel from './StatisticsPanel.vue';

const props = defineProps<{ schools: School[]; from?: IyyyyMMdd; to?: IyyyyMMdd }>();
const headers = [
    { title: 'Data', key: 'date' },
    { title: 'Scuola', key: 'school' },
    { title: 'Compenso giornaliero', key: 'salary', align: 'end' as const },
];
const days = ref<{ id: string; date: IyyyyMMdd; school: string; salary: number }[]>([]);
const lessonsTotal = ref(0);
const reimbursementsTotal = ref(0);
const managementTotal = ref(0);
const globalTotal = ref(0);
const loading = ref(false);
let request = 0;

const currency = (value: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);

watch(() => [props.from, props.to, props.schools], async () => {
    const current = ++request;
    if (!props.from || !props.to || !props.schools.length) {
        days.value = [];
        lessonsTotal.value = 0;
        reimbursementsTotal.value = 0;
        managementTotal.value = 0;
        globalTotal.value = 0;
        loading.value = false;
        return;
    }

    loading.value = true;
    try {
        const results = await Promise.all(props.schools.map(async school => {
            const [salaries, report] = await Promise.all([
                SalaryService.instance.computeSalary(school, props.from!, props.to!),
                MonthlySalaryService.instance.compute(school, props.from!, props.to!),
            ]);
            return { school, salaries, report };
        }));
        if (current !== request) return;

        days.value = results.flatMap(({ school, salaries }) => salaries.map(salary => ({
            id: `${school.id}-${salary.dailyLessonId}`,
            date: salary.date,
            school: school.name,
            salary: Number.isFinite(salary.salary) ? salary.salary : 0,
        }))).sort((a, b) => b.date.localeCompare(a.date) || a.school.localeCompare(b.school));
        lessonsTotal.value = days.value.reduce((sum, day) => sum + day.salary, 0);
        reimbursementsTotal.value = results.reduce((sum, { report }) => sum + report.reimbursementTotal, 0);
        managementTotal.value = results.reduce((sum, { report }) => sum + report.managementTotal, 0);
        globalTotal.value = lessonsTotal.value + reimbursementsTotal.value + managementTotal.value;
    } finally {
        if (current === request) loading.value = false;
    }
}, { immediate: true, deep: true });
</script>

<style scoped>
.salary-report-totals { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.salary-report-total { display: grid; align-content: center; gap: 6px; min-height: 112px; padding: 18px; border: 1px solid var(--app-border); border-radius: 13px; background: var(--app-hover-surface); }
.salary-report-total span { color: var(--app-muted); font-size: .82rem; }
.salary-report-total strong { color: var(--app-text); font-size: clamp(1.2rem, 2.5vw, 1.65rem); line-height: 1.2; }
.salary-report-total--overall { border-color: var(--app-hover-border); background: var(--app-accent-surface); }
.salary-report-total--overall strong { color: var(--app-primary); }
.salary-report-total small { color: var(--app-muted); font-size: .74rem; }
.salary-report-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin: 24px 0 10px; }
.salary-report-heading h3 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 700; }
.salary-report-heading span { color: var(--app-muted); font-size: .82rem; }
.salary-report-table { overflow-x: auto; border: 1px solid var(--app-border); border-radius: 12px; }
.salary-report-table :deep(.v-data-table) { min-width: 520px; }
@media (max-width: 760px) { .salary-report-totals { grid-template-columns: repeat(2, minmax(0, 1fr)); } .salary-report-total--overall { grid-column: 1 / -1; } }
@media (max-width: 420px) { .salary-report-totals { grid-template-columns: 1fr; } .salary-report-total--overall { grid-column: auto; } }
</style>
