<template>
    <v-card class="school-panel salary-panel" variant="flat" :loading="loadingSalary">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-cash-multiple" size="22" /></span><div><h2>Compenso</h2><p>{{ school.name }}</p></div></div>
        <div class="school-panel-toolbar salary-period-toolbar"><MonthPeriodControls v-model="selectedRange" v-model:expanded="detailsExpanded" /></div>
        <v-card-text class="school-panel-content">
            <div class="salary-month-total"><span>{{ isFullMonthPeriod(selectedRange) ? 'Compenso del mese' : 'Compenso del periodo' }}</span><strong>{{ currency(report?.netTotal ?? 0) }}</strong><small>Lezioni, recuperi, rimborsi e quota gestione inclusi quando previsti</small></div>
            <v-expand-transition><div v-if="detailsExpanded" class="salary-details">
            <v-row v-if="report" density="comfortable" class="mb-3">
                <v-col cols="6" md="4"><div class="school-stat-card"><span class="label">Lezioni regolari</span><strong class="value">{{ currency(report.regularLessonsTotal) }}</strong></div></v-col>
                <v-col v-if="school.salaryStrategy === SalaryStrategy.ONLY_PRESENT" cols="6" md="3">
                    <div class="school-stat-card"><span class="label">Recuperi extra</span><strong class="value">{{ currency(report.recoveryTotal) }}</strong></div>
                </v-col>
                <v-col cols="6" md="4"><div class="school-stat-card"><span class="label">Rimborsi ({{ report.officialCalendarDays }} giorni)</span><strong class="value">{{ currency(report.reimbursementTotal) }}</strong></div></v-col>
                <v-col v-if="school.managed" cols="6" md="4"><div class="school-stat-card"><span class="label">Quota gestione</span><strong class="value">{{ currency(report.managementTotal) }}</strong></div></v-col>
            </v-row>
            <v-data-table :headers="salaryHeaders" :items="salaries" item-value="id">
                <template v-slot:item.salary="{ item }">
                    {{ currency(item.salary) }}
                </template>
                <template v-slot:item.date="{ item }">
                    {{ yyyyMMdd.fromIyyyyMMdd(item.date).format() }}
                </template>
                <template v-slot:item.lastUpdate="{ item }">
                    {{ item.lastUpdate ? timestampFormat(toDate(item.lastUpdate)) : "" }}
                </template>
                <template v-slot:item.actions="{ item, index }">
                    <div class="d-flex justify-center">
                        <v-btn icon="mdi-refresh" variant="text" size="small" aria-label="Ricalcola compenso" title="Ricalcola compenso" @click="computeSalaryOfDailyLesson(item, index)"
                            :loading="computingSalary[item.dailyLessonId]"></v-btn>
                    </div>
                </template>
            </v-data-table>
            </div></v-expand-transition>
        </v-card-text>
    </v-card>
</template>


<script setup lang="ts">
import MonthPeriodControls from '@/components/inputs/MonthPeriodControls.vue';
import { SalaryStrategy, yyyyMMdd, type DateSelectModel, type MonthlySalaryReport, type Salary, type School } from '@/models/model';
import { isFullMonthPeriod, monthPeriod } from '@/models/month-period';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { SalaryService } from '@/models/services/salary-service';
import { MonthlySalaryService } from '@/models/services/monthly-salary-service';
import { timestampFormat, toDate } from '@/models/utils';
import { onMounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';

interface SalaryViewProps {
    school: School
}

const props = defineProps<SalaryViewProps>();

const salaries: Ref<Salary[]> = ref([]);
const report: Ref<MonthlySalaryReport | undefined> = ref();
const loadingSalary = ref(false);
const computingSalary: Ref<{ [key: string]: boolean }> = ref({});
const selectedRange: Ref<DateSelectModel> = ref(monthPeriod(new Date()));
const detailsExpanded = ref(false);
const salaryHeaders: any = [
    {
        title: 'Data',
        align: 'start',
        sortable: true,
        key: 'date',
    },
    { title: 'Presenti', key: 'presents' },
    { title: 'Assenti', key: 'absents' },
    { title: 'Stipendio giornaliero', key: 'salary' },
    { title: 'Aggiornato il', key: 'lastUpdate' },
    { title: 'Operazioni', key: 'actions', sortable: false },
];

watch(selectedRange, loadSalary);
watch(() => props.school, loadSalary);

async function loadSalary() {
    if (!selectedRange.value || !selectedRange.value.from) return;

    const to = selectedRange.value.to ?? selectedRange.value.from;

    loadingSalary.value = true;
    salaries.value = await SalaryService.instance.computeSalary(props.school, selectedRange.value.from, to);
    report.value = await MonthlySalaryService.instance.compute(props.school, selectedRange.value.from, to);
    loadingSalary.value = false;
}

function currency(value: number) {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
}

async function computeSalaryOfDailyLesson(salary: Salary, index: number) {
    computingSalary.value[salary.dailyLessonId] = true;

    const updatedDailyLesson = await DailyLessonService.instance.computeSalaryOfDailyLesson(props.school, salary.dailyLessonId);
    if (updatedDailyLesson) {
        salaries.value[index]!.salary = updatedDailyLesson.salary;
        salaries.value[index]!.lastUpdate = updatedDailyLesson.lastSalaryUpdate;
        if (selectedRange.value.from) {
            const to = selectedRange.value.to ?? selectedRange.value.from;
            report.value = await MonthlySalaryService.instance.compute(props.school, selectedRange.value.from, to);
        }
    } else {
        toast.info(`Lo stipendio della lezione del ${yyyyMMdd.fromIyyyyMMdd(salary.date).format()} è già aggiornato!`)
    }

    computingSalary.value[salary.dailyLessonId] = false;
}

onMounted(async () => {
    await loadSalary();
})
</script>

<style scoped>
.salary-period-toolbar { display: block; padding: 14px 24px; }
.salary-month-total { display: grid; gap: 4px; padding: 18px 20px; border: 1px solid var(--app-hover-border); border-radius: 14px; background: var(--app-accent-surface); }
.salary-month-total span { color: var(--app-muted); font-size: .82rem; }
.salary-month-total strong { color: var(--app-text); font-size: 1.8rem; line-height: 1.2; font-weight: 700; }
.salary-month-total small { color: var(--app-muted); font-size: .75rem; }
.salary-details { padding-top: 18px; }
@media (max-width: 600px) { .salary-period-toolbar { padding: 12px 16px; } .salary-month-total { padding: 16px; } }
</style>
