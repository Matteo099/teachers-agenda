<template>
    <StatisticsPanel title="Assenze per studente" icon="mdi-account-clock-outline" :loading="loading">
        <v-data-table :headers="headers" :items="items" item-value="student">
            <template #item.unjustified="{ item }">
                {{ item.unjustified }} (A)
            </template>
            <template #item.recoverable="{ item }">
                {{ item.recoverable }} (D)
            </template>
        </v-data-table>
    </StatisticsPanel>
</template>

<script setup lang="ts">
import type { IyyyyMMdd, School } from '@/models/model';
import { StatisticsService, type StudentAbsenceSummary } from '@/models/services/statistics-service';
import { ref, watch } from 'vue';
import StatisticsPanel from './StatisticsPanel.vue';

const props = defineProps<{ from?: IyyyyMMdd; to?: IyyyyMMdd; schools?: School[] }>();
const items = ref<StudentAbsenceSummary[]>([]);
const loading = ref(false);
const headers = [
    { title: 'Studente', key: 'student' },
    { title: 'Totale', key: 'total' },
    { title: 'A - Ingiustificate', key: 'unjustified' },
    { title: 'D - Da recuperare', key: 'recoverable' },
    { title: 'Recuperate', key: 'recovered' },
];

async function load() {
    if (!props.from || !props.to) return;
    loading.value = true;
    items.value = await StatisticsService.instance.getStudentAbsenceSummary(
        props.from,
        props.to,
        ...(props.schools ?? []),
    );
    loading.value = false;
}

watch(() => [props.from, props.to, props.schools], load, { immediate: true, deep: true });
</script>
