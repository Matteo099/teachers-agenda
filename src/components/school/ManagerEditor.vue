<template>
    <v-card prepend-icon="mdi-account" title="Gestione Scuola">
        <v-card-text>
            <v-row class="my-3 mb-10 justify-center">
                <v-col cols="12" md="6">
                    <v-number-input v-model="totalStudents" v-bind="totalStudentsProps" :reverse="false"
                        controlVariant="default" label="Numero Totale Studenti" :hideInput="false" :inset="false"
                        :min="0">
                    </v-number-input>
                </v-col>
                <v-col cols="12" md="6">
                    <v-number-input v-model="quotePerStudent" v-bind="quotePerStudentProps" :reverse="false"
                        controlVariant="default" label="Quota per Studente" prefix="€" :hideInput="false" :inset="false"
                        :min="0">
                    </v-number-input>
                </v-col>
                <v-col cols="12" md="6">
                    <v-number-input v-model="cashFund" v-bind="cashFundProps" :reverse="false" controlVariant="default"
                        label="Fondo Cassa" :hideInput="false" prefix="€" :inset="false" :min="0">
                    </v-number-input>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Annulla" variant="plain" @click="emit('close')"></v-btn>

            <v-btn color="primary" text="Salva Gestione" variant="tonal" @click="onSave"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { ManagerOptions } from '@/models/model';
import { useForm, type GenericObject } from 'vee-validate';
import { watch } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

interface ManagerEditorProps {
    initialManagerOptions?: ManagerOptions;
}

const props = defineProps<ManagerEditorProps>()
const emit = defineEmits(['close', 'save'])

const schema = yup.object({
    totalStudents: yup.number().required('Il Numero Totale degli Studenti è obbligatorio').positive().label('Numero Totale Studenti'),
    quotePerStudent: yup.number().required('La Quota per Studente è obbligatoria').positive().label('Quota per Studente'),
    cashFund: yup.number().positive().label('Fondo Cassa').nullable().optional(),
})

const { defineField, handleSubmit } = useForm({
    validationSchema: schema
})

const vuetifyConfig = (state: any) => ({
    props: {
        'error-messages': state.errors
    }
})

const [totalStudents, totalStudentsProps] = defineField('totalStudents', vuetifyConfig);
const [quotePerStudent, quotePerStudentProps] = defineField('quotePerStudent', vuetifyConfig);
const [cashFund, cashFundProps] = defineField('cashFund', vuetifyConfig);

const onSave = handleSubmit(
    async (values: GenericObject) => {
        emit('save', { ...values })
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

watch(() => props.initialManagerOptions, () => updateManagerOptions(), { immediate: true })

function updateManagerOptions() {
    if (props.initialManagerOptions) {
        totalStudents.value = props.initialManagerOptions.totalStudents;
        quotePerStudent.value = props.initialManagerOptions.quotePerStudent;
        cashFund.value = props.initialManagerOptions.cashFund;
    }
}
</script>