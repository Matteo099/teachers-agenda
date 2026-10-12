<template>
    <StatisticsPanel title="Saggi" icon="mdi-music-note-outline" :loading="loading">
        <v-data-table :headers="headers" :items="items" item-value="id">
            <template #item.student="{ item }"><span class="d-inline-flex align-center flex-wrap ga-2">{{ item.student }}<v-chip v-if="item.archiveDate" size="x-small" color="warning" variant="tonal">Archiviato dal {{ yyyyMMdd.fromIyyyyMMdd(item.archiveDate).format() }}</v-chip></span></template>
            <template #no-data>Nessun saggio registrato.</template>
        </v-data-table>
    </StatisticsPanel>
</template>

<script setup lang="ts">
import { yyyyMMdd, type IyyyyMMdd, type School } from '@/models/model';
import { StatisticsService, type RecitalStudent } from '@/models/services/statistics-service';
import { ref, watch } from 'vue';
import StatisticsPanel from './StatisticsPanel.vue';

const props = defineProps<{ schools?: School[]; from?: IyyyyMMdd; to?: IyyyyMMdd }>();
const items = ref<RecitalStudent[]>([]);
const loading = ref(false);
const headers = [
    { title: 'Allievo', key: 'student' },
    { title: 'Scuola', key: 'school' },
    { title: 'Brano', key: 'piece' },
    { title: 'Autore', key: 'author' },
];

async function load() {
    if (!props.from || !props.to) return;
    loading.value = true;
    items.value = await StatisticsService.instance.getRecitalStudents(props.from, props.to, ...(props.schools ?? []));
    loading.value = false;
}

watch(() => [props.from, props.to, props.schools], load, { immediate: true, deep: true });
</script>
