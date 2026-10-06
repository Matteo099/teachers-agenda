<template>
    <StatisticsPanel title="Riepilogo stipendi mensile" subtitle="Compensi per mese nel periodo selezionato" icon="mdi-cash-multiple" :loading="loading">
        <v-list v-if="items.length" class="statistics-list">
            <v-list-item v-for="item in items" :key="item.month" :title="item.month">
                <template #append>{{ item.salary.toFixed(2) }} €</template>
            </v-list-item>
        </v-list>
        <div v-else class="statistics-empty">Nessun dato nel periodo selezionato.</div>
    </StatisticsPanel>
</template>

<script setup lang="ts">
import type { IyyyyMMdd, School } from '@/models/model';
import { StatisticsService, type MonthlySalarySummary } from '@/models/services/statistics-service';
import { ref, watch } from 'vue';
import StatisticsPanel from './StatisticsPanel.vue';

const props = defineProps<{ from?: IyyyyMMdd; to?: IyyyyMMdd; schools?: School[] }>();
const items = ref<MonthlySalarySummary[]>([]);
const loading = ref(false);

async function load() {
    if (!props.from || !props.to) return;
    loading.value = true;
    items.value = await StatisticsService.instance.getMonthlySalarySummary(
        props.from,
        props.to,
        ...(props.schools ?? []),
    );
    loading.value = false;
}

watch(() => [props.from, props.to, props.schools], load, { immediate: true, deep: true });
</script>
