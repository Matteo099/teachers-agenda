<template>
    <v-row class="px-2 mb-2">
        <v-col cols="12" md="6">
            <v-select variant="outlined" density="compact" v-model="selectedType" :items="selectTypes" hide-details></v-select>
        </v-col>
        <v-col cols="12" md="6" v-if="selectedType == selectTypes[0]">
            <v-date-input variant="outlined" density="compact" v-model="range" multiple="range" inputmode="none" hide-details></v-date-input>
        </v-col>
        <v-col cols="12" md="6" v-else>
            <v-select variant="outlined" density="compact" v-model="selectedPeriod" :items="periods" hide-details></v-select>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { yyyyMMdd, type IyyyyMMdd } from '@/models/model';
import { ref, watch } from 'vue';
import { useDate } from 'vuetify';

interface DateSelectModel {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
}

const date = useDate();
const selectTypes = ["Assoluto", "Relativo"];
const periods = ["Ultima settimana", "Ultimo mese", "Ultimi 3 mesi", "Ultimi 6 mesi", "Ultimo anno"];
const selectedType = ref(selectTypes[1]);
const selectedPeriod = ref(periods[0]);
const range = ref();
let updatingInternalModel = false;

const model = defineModel<DateSelectModel>({
    default: {
        from: undefined,
        to: undefined
    }
});

watch(selectedType, updateModel);
watch(selectedPeriod, updateModel);
watch(range, updateModel);
watch(model, updateValues, { immediate: true });

function updateModel() {

    updatingInternalModel = true;

    // relative
    if (selectedType.value == selectTypes[1]) {
        let res: Date;
        // last month
        if (selectedPeriod.value == periods[1]) {
            res = date.addMonths(new Date(), -1) as Date;
        }
        // last 3 months
        else if (selectedPeriod.value == periods[2]) {
            res = date.addMonths(new Date(), -3) as Date;
        }
        // last 6 months
        else if (selectedPeriod.value == periods[3]) {
            res = date.addMonths(new Date(), -6) as Date;
        }

        // last year
        else if (selectedPeriod.value == periods[4]) {
            res = date.addMonths(new Date(), -12) as Date;
        }
        // last week
        else {
            res = date.addDays(new Date(), -7) as Date;
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
        const diff = new Date(today.getTime() - yyyyMMdd.fromIyyyyMMdd(from).toDate().getTime());
        const deltaYears = diff.getUTCFullYear() - 1970;
        const deltaMonths = diff.getUTCMonth();
        const deltaDays = diff.getUTCDate() - 1;
        if (deltaDays == 7 && deltaMonths == 0 && deltaYears == 0) selectedPeriod.value = periods[0];
        else if ((deltaDays == 30 || deltaMonths == 1) && deltaYears == 0) selectedPeriod.value = periods[1];
        else if ((deltaDays == 90 || deltaMonths == 3) && deltaYears == 0) selectedPeriod.value = periods[2];
        else if ((deltaDays == 180 || deltaMonths == 6) && deltaYears == 0) selectedPeriod.value = periods[3];
        else if (deltaDays == 365 || deltaMonths == 12 || deltaYears == 1) selectedPeriod.value = periods[4];
        else {
            console.warn("Selected period not recognized, falling to last week");
            selectedPeriod.value = periods[0];
        }
    }
    // absolute
    else if (from && to) {
        selectedType.value = selectTypes[0];
        range.value = [];
        const _from = yyyyMMdd.fromIyyyyMMdd(from).toDate();
        const _to = yyyyMMdd.fromIyyyyMMdd(to).toDate();
        for (const dt = _from; dt <= _to; dt.setDate(dt.getDate() + 1)) {
            range.value.push(new Date(dt));
        }
    }
}
</script>