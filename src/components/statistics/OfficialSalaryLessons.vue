<template>
    <v-card class="mb-6" variant="outlined" title="Lezioni incluse nei rimborsi" :loading="loading">
        <v-data-table v-if="items.length" :headers="headers" :items="items" item-value="id" density="comfortable">
            <template #item.date="{ item }">{{ yyyyMMdd.fromIyyyyMMdd(item.date).format() }}</template>
            <template #item.salary="{ item }">{{ currency(item.salary) }}</template>
        </v-data-table>
        <v-card-text v-else>Nessuna lezione in una data ufficiale nel periodo selezionato.</v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { LessonStatus, yyyyMMdd, type IyyyyMMdd, type School } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { MonthlySalaryService } from '@/models/services/monthly-salary-service';
import { ref, watch } from 'vue';

const props = defineProps<{ from?: IyyyyMMdd; to?: IyyyyMMdd; schools?: School[] }>();
const items = ref<any[]>([]);
const loading = ref(false);
const headers = [
    { title: 'Scuola', key: 'school' }, { title: 'Data', key: 'date' },
    { title: 'Lezioni', key: 'lessons' }, { title: 'Presenti', key: 'presents' },
    { title: 'Stipendio giornaliero', key: 'salary' },
];
const currency = (value: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);

async function load() {
    if (!props.from || !props.to) return;
    loading.value = true;
    const result: any[] = [];
    for (const school of props.schools ?? []) {
        const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, props.from, props.to);
        const officialDates = await MonthlySalaryService.instance.getOfficialCalendarDates(school.id, props.from, props.to, dailyLessons);
        dailyLessons.filter(d => officialDates.has(d.date)).forEach(d => result.push({
            id: `${school.id}-${d.id}`, school: school.name, date: d.date, lessons: d.lessons.length,
            presents: d.lessons.filter(l => l.status === LessonStatus.PRESENT).length, salary: d.salary,
        }));
    }
    items.value = result.sort((a, b) => a.date.localeCompare(b.date));
    loading.value = false;
}
watch(() => [props.from, props.to, props.schools], load, { immediate: true, deep: true });
</script>
