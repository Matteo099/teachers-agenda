<template>
    <StatisticsPanel title="Saggi" subtitle="Brani preparati dagli allievi" icon="mdi-music-note-outline" :loading="loading">
        <v-data-table :headers="headers" :items="items" item-value="id">
            <template #no-data>Nessun saggio registrato.</template>
        </v-data-table>
    </StatisticsPanel>
</template>

<script setup lang="ts">
import type { School } from '@/models/model';
import { StatisticsService, type RecitalStudent } from '@/models/services/statistics-service';
import { ref, watch } from 'vue';
import StatisticsPanel from './StatisticsPanel.vue';

const props = defineProps<{ schools?: School[] }>();
const items = ref<RecitalStudent[]>([]);
const loading = ref(false);
const headers = [
    { title: 'Allievo', key: 'student' },
    { title: 'Scuola', key: 'school' },
    { title: 'Brano', key: 'piece' },
    { title: 'Autore', key: 'author' },
];

async function load() {
    loading.value = true;
    items.value = await StatisticsService.instance.getRecitalStudents(...(props.schools ?? []));
    loading.value = false;
}

watch(() => props.schools, load, { immediate: true, deep: true });
</script>
