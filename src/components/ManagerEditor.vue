<template>
    <v-card prepend-icon="mdi-account" title="Gestione Scuola">
        <v-card-text>
            <v-row class="my-3 mb-10 justify-center">
                <v-col cols="12" md="6">
                    <v-number-input v-model="totalStudents" :reverse="false" controlVariant="default"
                        label="Numero Totale Studenti" :hideInput="false" :inset="false" :min="0">
                    </v-number-input>
                </v-col>
                <v-col cols="12" md="6">
                    <v-number-input v-model="quotePerStudent" :reverse="false" controlVariant="default"
                        label="Quota per Studente" :hideInput="false" :inset="false" :min="0">
                    </v-number-input>
                </v-col>
                <v-col cols="12" md="6">
                    <v-number-input v-model="cashFund" :reverse="false" controlVariant="default"
                        label="Fondo Cassa" :hideInput="false" :inset="false" :min="0">
                    </v-number-input>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Annulla" variant="plain" @click="emit('close')"></v-btn>

            <v-btn color="primary" text="Salva Gestione" variant="tonal"
                @click="emit('save', getManagerOptions())"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { LevelRange, ManagerOptions } from '@/models/model';
import { onMounted, ref, watch, type Ref } from 'vue';

const props = defineProps<{ initialManagerOptions?: ManagerOptions }>()
const emit = defineEmits(['close', 'save'])

const totalStudents: Ref<number> = ref(0);
const quotePerStudent: Ref<number> = ref(0);
const cashFund: Ref<number> = ref(0);

watch(() => props.initialManagerOptions, () => updateManagerOptions())

function updateManagerOptions() {
    if (props.initialManagerOptions) {
        totalStudents.value = props.initialManagerOptions.totalStudents;
        quotePerStudent.value = props.initialManagerOptions.quotePerStudent;
        cashFund.value = props.initialManagerOptions.cashFund;
    }
}

function getManagerOptions(): ManagerOptions {
    return {
        totalStudents: totalStudents.value,
        quotePerStudent: quotePerStudent.value,
        cashFund: cashFund.value,
    }
}

onMounted(() => updateManagerOptions())
</script>