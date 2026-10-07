<template>
    <div class="month-period-controls">
        <div class="month-period-main">
            <div class="month-period-navigation">
                <v-btn icon="mdi-chevron-left" variant="text" size="small" aria-label="Mese precedente" @click="changeMonth(-1)" />
                <div><span>Periodo</span><strong>{{ periodLabel }}</strong></div>
                <v-btn icon="mdi-chevron-right" variant="text" size="small" aria-label="Mese successivo" @click="changeMonth(1)" />
            </div>
            <v-btn class="month-period-toggle" variant="text" color="primary" size="small" :prepend-icon="expanded ? 'mdi-chevron-up' : 'mdi-tune-variant'" :aria-expanded="expanded" @click="expanded = !expanded">{{ expanded ? 'Chiudi filtri' : 'Filtri avanzati' }}</v-btn>
        </div>
        <v-expand-transition>
            <div v-if="expanded" class="month-period-advanced">
                <v-select v-model="preset" :items="presets" label="Selezione rapida" variant="outlined" density="comfortable" hide-details @update:model-value="applyPreset" />
                <v-date-input v-if="preset === 'Intervallo personalizzato'" v-model="customRange" label="Intervallo personalizzato" multiple="range" variant="outlined" density="comfortable" inputmode="none" hide-details @update:model-value="applyCustomRange" />
                <span class="month-period-hint">{{ rangeLabel }}</span>
            </div>
        </v-expand-transition>
    </div>
</template>

<script setup lang="ts">
import { yyyyMMdd, type DateSelectModel } from '@/models/model';
import { isFullMonthPeriod, monthPeriod, shiftMonthPeriod } from '@/models/month-period';
import { computed, ref } from 'vue';

const model = defineModel<DateSelectModel>({ required: true });
const expanded = defineModel<boolean>('expanded', { default: false });
const preset = ref('Mese corrente');
const customRange = ref<Date[]>([]);
const presets = ['Mese corrente', 'Oggi', 'Ieri', 'Settimana corrente', 'Ultima settimana', 'Ultimo mese', 'Ultimi 3 mesi', 'Ultimi 6 mesi', 'Ultimo anno', 'Intervallo personalizzato'];

const periodLabel = computed(() => {
    if (!model.value?.from) return 'Mese corrente';
    const start = yyyyMMdd.fromIyyyyMMdd(model.value.from).toDate();
    if (isFullMonthPeriod(model.value)) {
        return new Intl.DateTimeFormat('it-IT', { month: 'long', year: 'numeric' }).format(start);
    }
    return 'Periodo personalizzato';
});
const rangeLabel = computed(() => {
    if (!model.value?.from) return '';
    const from = yyyyMMdd.fromIyyyyMMdd(model.value.from).format();
    const to = model.value.to ? yyyyMMdd.fromIyyyyMMdd(model.value.to).format() : from;
    return `${from} – ${to}`;
});

function changeMonth(offset: number) {
    model.value = shiftMonthPeriod(model.value, offset);
    preset.value = 'Intervallo personalizzato';
}

function applyPreset(value: string) {
    const today = new Date();
    const day = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (value === 'Intervallo personalizzato') return;
    if (value === 'Mese corrente') { model.value = monthPeriod(day); return; }
    if (value === 'Ultimo mese') { model.value = monthPeriod(new Date(day.getFullYear(), day.getMonth() - 1, 1)); return; }
    if (value === 'Oggi' || value === 'Ieri') {
        if (value === 'Ieri') day.setDate(day.getDate() - 1);
        const date = yyyyMMdd.fromDate(day).toIyyyyMMdd();
        model.value = { from: date, to: date };
        return;
    }
    if (value === 'Settimana corrente' || value === 'Ultima settimana') {
        day.setDate(day.getDate() - ((day.getDay() + 6) % 7) - (value === 'Ultima settimana' ? 7 : 0));
        const end = new Date(day); end.setDate(day.getDate() + 6);
        model.value = { from: yyyyMMdd.fromDate(day).toIyyyyMMdd(), to: yyyyMMdd.fromDate(end).toIyyyyMMdd() };
        return;
    }
    const months = value === 'Ultimi 3 mesi' ? 3 : value === 'Ultimi 6 mesi' ? 6 : 12;
    const from = new Date(day); from.setMonth(day.getMonth() - months);
    model.value = { from: yyyyMMdd.fromDate(from).toIyyyyMMdd(), to: yyyyMMdd.fromDate(day).toIyyyyMMdd() };
}

function applyCustomRange(value: Date[] | undefined) {
    if (!value || value.length < 2) return;
    const first = value[0];
    const last = value[value.length - 1];
    if (!first || !last) return;
    model.value = { from: yyyyMMdd.fromDate(first).toIyyyyMMdd(), to: yyyyMMdd.fromDate(last).toIyyyyMMdd() };
}
</script>

<style scoped>
.month-period-controls { min-width: 0; }
.month-period-main { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px 16px; }
.month-period-navigation { display: flex; align-items: center; gap: 7px; min-width: 0; }
.month-period-navigation > div { display: grid; min-width: 150px; text-align: center; }
.month-period-navigation span { color: var(--app-muted); font-size: .72rem; }
.month-period-navigation strong { overflow: hidden; color: var(--app-text); font-size: .93rem; font-weight: 700; text-overflow: ellipsis; text-transform: capitalize; white-space: nowrap; }
.month-period-advanced { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; padding-top: 16px; margin-top: 16px; border-top: 1px solid var(--app-border); }
.month-period-advanced > .v-input { flex: 1 1 210px; }
.month-period-hint { color: var(--app-muted); font-size: .78rem; }
@media (max-width: 600px) { .month-period-navigation { justify-content: space-between; width: 100%; } .month-period-toggle { margin-left: auto; } }
</style>
