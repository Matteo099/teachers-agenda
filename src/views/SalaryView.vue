<template>
    <v-card class="school-panel salary-panel" variant="flat" :loading="loadingSalary">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-cash-multiple" size="22" /></span><div><h2>Compensi</h2><p>Riepilogo delle lezioni e dei rimborsi</p></div></div>
        <div class="school-panel-toolbar"><DateSelect v-model="selectedRange" :show-advanced="false" /></div>
        <v-card-text class="school-panel-content">
            <v-row v-if="report" density="comfortable" class="mb-3">
                <v-col cols="6" md="4"><div class="school-stat-card"><span class="label">Lezioni regolari</span><strong class="value">{{ currency(report.regularLessonsTotal) }}</strong></div></v-col>
                <v-col v-if="school.salaryStrategy === SalaryStrategy.ONLY_PRESENT" cols="6" md="3">
                    <div class="school-stat-card"><span class="label">Recuperi extra</span><strong class="value">{{ currency(report.recoveryTotal) }}</strong></div>
                </v-col>
                <v-col cols="6" md="4"><div class="school-stat-card"><span class="label">Rimborsi ({{ report.officialCalendarDays }} giorni)</span><strong class="value">{{ currency(report.reimbursementTotal) }}</strong></div></v-col>
                <v-col v-if="school.managed" cols="6" md="4"><div class="school-stat-card"><span class="label">Quota gestione</span><strong class="value">{{ currency(report.managementTotal) }}</strong></div></v-col>
                <v-col cols="6" md="4"><div class="school-stat-card primary"><span class="label">Totale</span><strong class="value">{{ currency(report.netTotal) }}</strong></div></v-col>
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
        </v-card-text>
    </v-card>
</template>


<script setup lang="ts">
import DateSelect from '@/components/inputs/DateSelect.vue';
import { SalaryStrategy, yyyyMMdd, type IyyyyMMdd, type MonthlySalaryReport, type Salary, type School } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { SalaryService } from '@/models/services/salary-service';
import { MonthlySalaryService } from '@/models/services/monthly-salary-service';
import { timestampFormat, toDate } from '@/models/utils';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';

interface SalaryViewProps {
    school: School
}

const props = defineProps<SalaryViewProps>();

const salaries: Ref<Salary[]> = ref([]);
const report: Ref<MonthlySalaryReport | undefined> = ref();
const loadingSalary = ref(false);
const computingSalary: Ref<{ [key: string]: boolean }> = ref({});
const selectedRange: Ref<{ from?: IyyyyMMdd, to?: IyyyyMMdd }> = ref({});
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

const total = computed(() => {
    const t = salaries.value.reduce((total, obj) => total + obj.salary, 0);
    return isNaN(t) ? 0 : t;
});

watch(selectedRange, loadSalary);

async function loadSalary() {
    if (!selectedRange.value || !selectedRange.value.from) return;

    const to = selectedRange.value.to ?? yyyyMMdd.today().toIyyyyMMdd();

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
            const to = selectedRange.value.to ?? yyyyMMdd.today().toIyyyyMMdd();
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
