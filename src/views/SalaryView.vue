<template>
    <v-card title="Stipendio" elevation="3" :loading="loadingSalary">
        <v-card-text>
            <DateSelect v-model="selectedRange" />
            <v-data-table :headers="salaryHeaders" :items="salaries" item-value="id">
                <template v-slot:item.date="{ item }">
                    {{ yyyyMMdd.fromIyyyyMMdd(item.date).format() }}
                </template>
                <template v-slot:item.lastUpdate="{ item }">
                    {{ item.lastUpdate ? timestampFormat(new Timestamp(item.lastUpdate.seconds,
                        item.lastUpdate.nanoseconds).toDate()) : "" }}
                </template>
                <template v-slot:item.actions="{ item, index }">
                    <div class="d-flex justify-center">
                        <v-btn icon="mdi-refresh" variant="text" @click="computeSalaryOfDailyLesson(item, index)"
                            :loading="computingSalary[item.dailyLessonId]"></v-btn>
                    </div>
                </template>
                <template v-slot:body.append>
                    <tr>
                        <td colspan="6" class="text-center font-weight-bold">Totale {{ total }} €</td>
                    </tr>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>


<script setup lang="ts">
import DateSelect from '@/components/DateSelect.vue';
import { yyyyMMdd, type IyyyyMMdd, type Salary, type School } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { SalaryService } from '@/models/services/salary-service';
import { timestampFormat } from '@/models/utils';
import { Timestamp } from 'firebase/firestore';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';

interface SalaryViewProps {
    school: School
}

const props = defineProps<SalaryViewProps>();

const salaries: Ref<Salary[]> = ref([]);
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
    loadingSalary.value = false;
}

async function computeSalaryOfDailyLesson(salary: Salary, index: number) {
    computingSalary.value[salary.dailyLessonId] = true;

    const updatedDailyLesson = await DailyLessonService.instance.computeSalaryOfDailyLesson(props.school, salary.dailyLessonId);
    if (updatedDailyLesson) {
        salaries.value[index].salary = updatedDailyLesson.salary;
        salaries.value[index].lastUpdate = updatedDailyLesson.lastSalaryUpdate;
    } else {
        toast.info(`Lo stipendio della lezione del ${yyyyMMdd.fromIyyyyMMdd(salary.date).format()} è già aggiornato!`)
    }

    computingSalary.value[salary.dailyLessonId] = false;
}

onMounted(async () => {
    await loadSalary();
})
</script>