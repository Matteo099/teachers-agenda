<template>
    <v-card class="monthly-compensation" variant="flat" :loading="loading">
        <span class="monthly-compensation-icon"><v-icon icon="mdi-cash-multiple" size="25" /></span>
        <div><span>{{ isFullMonthPeriod({ from, to }) ? 'Compenso del mese' : 'Compenso del periodo' }}</span><strong>{{ currency(total) }}</strong><p>{{ schools?.length ? `${schools.length} ${schools.length === 1 ? 'scuola inclusa' : 'scuole incluse'}` : 'Seleziona almeno una scuola' }}</p></div>
    </v-card>
</template>

<script setup lang="ts">
import type { IyyyyMMdd, School } from '@/models/model';
import { isFullMonthPeriod } from '@/models/month-period';
import { MonthlySalaryService } from '@/models/services/monthly-salary-service';
import { ref, watch } from 'vue';

const props = defineProps<{ schools?: School[]; from?: IyyyyMMdd; to?: IyyyyMMdd }>();
const total = ref(0);
const loading = ref(false);
let request = 0;

watch(() => [props.from, props.to, props.schools], async () => {
    const current = ++request;
    if (!props.from || !props.to || !props.schools?.length) { total.value = 0; loading.value = false; return; }
    loading.value = true;
    try {
        const reports = await Promise.all(props.schools.map(school => MonthlySalaryService.instance.compute(school, props.from!, props.to!)));
        if (current === request) total.value = reports.reduce((sum, report) => sum + report.netTotal, 0);
    } finally {
        if (current === request) loading.value = false;
    }
}, { immediate: true, deep: true });

function currency(value: number): string {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
}
</script>

<style scoped>
.monthly-compensation { display: flex; align-items: center; gap: 18px; padding: 24px; border: 1px solid var(--app-hover-border); border-radius: 16px; background: var(--app-accent-surface); }
.monthly-compensation-icon { display: grid; place-items: center; width: 52px; height: 52px; flex: none; border-radius: 14px; background: var(--app-surface); color: var(--app-primary); }
.monthly-compensation > div { display: grid; gap: 2px; }
.monthly-compensation > div > span { color: var(--app-muted); font-size: .85rem; }
.monthly-compensation strong { color: var(--app-text); font-size: clamp(1.6rem, 4vw, 2.2rem); line-height: 1.2; font-weight: 700; }
.monthly-compensation p { margin: 0; color: var(--app-muted); font-size: .77rem; }
@media (max-width: 600px) { .monthly-compensation { gap: 12px; padding: 18px; } .monthly-compensation-icon { width: 42px; height: 42px; } }
</style>
