<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-select variant="outlined" density="compact" v-model="selectedType" :items="selectTypes" label="Tempo"
                hide-details></v-select>
        </v-col>
        <v-col cols="12" md="6" v-if="selectedType == selectTypes[0]">
            <v-date-input variant="outlined" density="compact" v-model="range" multiple="range" inputmode="none"
                label="Intervallo" hide-details></v-date-input>
        </v-col>
        <v-col cols="12" md="6" v-else-if="selectedType == selectTypes[1]">
            <v-select variant="outlined" density="compact" v-model="selectedPeriod" :items="periods" label="Periodo"
                hide-details></v-select>
        </v-col>
        <v-col cols="12" md="6" v-else>
            <v-select class="text-capitalize" variant="outlined" density="compact" v-model="selectedMonth"
                :label="`Mese ${new Date().getFullYear()}`" :items="months" hide-details></v-select>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { yyyyMMdd, type DateSelectModel } from '@/models/model';
import { capitalize, ref, watch } from 'vue';
import { useDate } from 'vuetify';

const date = useDate();
const selectTypes = ["Assoluto", "Relativo", "Per mese"];
const periods = ["Oggi", "Ieri", "Ultima settimana", "Ultimo mese", "Ultimi 3 mesi", "Ultimi 6 mesi", "Ultimo anno"];
const months = [...Array(12).keys()].map(key => capitalize(new Date(0, key).toLocaleString('it', { month: 'long' })))
const selectedType = ref(selectTypes[1]);
const selectedPeriod = ref(periods[2]);
const selectedMonth = ref(months[0]);
const range = ref();
let updatingInternalModel = false;

const model = defineModel<DateSelectModel>({
    default: {
        from: undefined,
        to: undefined
    }
});

watch(selectedType, updateModel, { immediate: true });
watch(selectedPeriod, updateModel, { immediate: true });
watch(selectedMonth, updateModel, { immediate: true });
watch(range, updateModel, { immediate: true });
watch(model, updateValues, { immediate: true });

function updateModel() {
    updatingInternalModel = true;

    // by month
    if (selectedType.value == selectTypes[2]) {
        let month = months.indexOf(selectedMonth.value);
        month = month == -1 ? 0 : month;
        const year = new Date().getFullYear();
        const start = new Date(year, month, 1);
        const end = new Date(year, month + 1, 0);
        model.value = {
            from: yyyyMMdd.fromDate(start).toIyyyyMMdd(),
            to: yyyyMMdd.fromDate(end).toIyyyyMMdd()
        }
    }
    // relative
    else if (selectedType.value == selectTypes[1]) {
        console.log(selectedPeriod.value);
        let res: Date;
        // yesterday
        if (selectedPeriod.value == periods[1]) {
            res = date.addDays(new Date(), -1) as Date;
        }
        // last week
        else if (selectedPeriod.value == periods[2]) {
            res = date.addDays(new Date(), -7) as Date;
        }
        // last month
        else if (selectedPeriod.value == periods[3]) {
            res = date.addMonths(new Date(), -1) as Date;
        }
        // last 3 months
        else if (selectedPeriod.value == periods[4]) {
            res = date.addMonths(new Date(), -3) as Date;
        }
        // last 6 months
        else if (selectedPeriod.value == periods[5]) {
            res = date.addMonths(new Date(), -6) as Date;
        }

        // last year
        else if (selectedPeriod.value == periods[6]) {
            res = date.addMonths(new Date(), -12) as Date;
        }
        // today
        else {
            res = new Date();
        }
        model.value = {
            from: yyyyMMdd.fromDate(res).toIyyyyMMdd()
        }
    }
    // absolute
    else if (selectedType.value == selectTypes[0]) {
        const from = range.value?.[0];
        const to = range.value?.[range.value.length - 1] ?? range.value?.[0];
        if (from && to) {
            model.value = {
                from: yyyyMMdd.fromDate(from).toIyyyyMMdd(),
                to: yyyyMMdd.fromDate(to).toIyyyyMMdd(),
            }
        }
    }
}

function updateValues() {
    if (updatingInternalModel) {
        updatingInternalModel = false;
        return;
    }

    const from = model.value?.from
    const to = model.value?.to

    // relative
    if (from && !to) {
        selectedType.value = selectTypes[1];
        const today = new Date();
        const delta = getDeltaDates(today, yyyyMMdd.fromIyyyyMMdd(from).toDate());
        console.log(delta);
        if (delta.days == 0 && delta.months == 0 && delta.years == 0) selectedPeriod.value = periods[0];
        else if (delta.days == 1 && delta.months == 0 && delta.years == 0) selectedPeriod.value = periods[1];
        else if (delta.days == 7 && delta.months == 0 && delta.years == 0) selectedPeriod.value = periods[2];
        else if ((delta.days == 30 || delta.months == 1) && delta.years == 0) selectedPeriod.value = periods[3];
        else if ((delta.days == 90 || delta.months == 3) && delta.years == 0) selectedPeriod.value = periods[4];
        else if ((delta.days == 180 || delta.months == 6) && delta.years == 0) selectedPeriod.value = periods[5];
        else if (delta.days == 365 || delta.months == 12 || delta.years == 1) selectedPeriod.value = periods[6];
        else {
            console.warn("Selected period not recognized, falling to last week");
            selectedPeriod.value = periods[2];
        }
    }
    // absolute or by month
    else if (from && to) {
        const _from = yyyyMMdd.fromIyyyyMMdd(from).toDate();
        const _to = yyyyMMdd.fromIyyyyMMdd(to).toDate();

        console.log(_from, _to, _from.getDate(), _to.getDate(), new Date(_from.getFullYear(), _from.getMonth() + 1, 0).getDate())

        // by month
        if (_from.getDate() == 1
            && _to.getMonth() == _from.getMonth()
            && _to.getFullYear() == _from.getFullYear()
            && _to.getDate() == new Date(_from.getFullYear(), _from.getMonth() + 1, 0).getDate()) {
            selectedType.value = selectTypes[2];
            selectedMonth.value = months[_from.getMonth()];
        }
        // absolute
        else {
            selectedType.value = selectTypes[0];
            range.value = [];
            for (const dt = _from; dt <= _to; dt.setDate(dt.getDate() + 1)) {
                range.value.push(new Date(dt));
            }
        }

    }
}

function getDeltaDates(a: Date, b: Date) {
    const diff = new Date(Math.abs(a.getTime() - b.getTime()));
    const years = diff.getUTCFullYear() - 1970;
    const months = diff.getUTCMonth();
    const days = diff.getUTCDate() - 1;
    return { years, months, days };
}
</script>