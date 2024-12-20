<template>
    <v-dialog v-model="scheduleRecoveryDialog" width="auto" scrollable persistent>
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps">programma</v-btn>
        </template>

        <template v-slot:default>
            <v-card title="Programma Lezione di Recupero"
                :subtitle="recovery.name + ' ' + recovery.surname + ' - ' + yyyyMMdd.fromIyyyyMMdd(recovery.originalDailyLesson.date).format()"
                :loading="loadingSchedulingRecovery">
                <v-card-text class="pa-6">
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-date-input v-model="date" v-bind="dateProps" label="Data della Lezione di Recupero"
                                inputmode="none"></v-date-input>
                        </v-col>
                        <v-col cols="12" lg="12">
                            <v-text-field v-model="time" v-bind="timeProps" :active="modalTimePicker"
                                :focused="modalTimePicker" inputmode="none" label="Orario della prima Lezione"
                                prepend-icon="mdi-clock-time-four-outline" readonly>
                                <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                                    <v-time-picker v-if="modalTimePicker" v-model="time" format="24hr"></v-time-picker>
                                </v-dialog>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Annulla" @click="close"></v-btn>
                    <v-btn color="primary" text="Salva" @click="save($event)"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup lang="ts">
import { Time, yyyyMMdd, type RecoverySchedule, type School } from '@/models/model';
import { SchoolRecoveryLessonService, type ExtendedStudentLesson } from '@/models/services/school-recovery-lesson-service';
import { useForm, type GenericObject } from 'vee-validate';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

export interface ScheduleRecoveryLessonButtonProps {
    school: School
}

const props = defineProps<ScheduleRecoveryLessonButtonProps>();
const recovery = defineModel<ExtendedStudentLesson>({ required: true });

const modalTimePicker = ref(false);
const scheduleRecoveryDialog = ref(false);
const loadingSchedulingRecovery = ref(false);

const schema = yup.object({
    date: yup.date().required('La Data della Lezione di Recupero è obbligatoria').label('Data della Lezione di Recupero'),
    time: yup.string().required(`L'Orario della Lezione di Recupero è obbligatorio`).label('Orario della Lezione di Recupero'),
})

const { defineField, handleSubmit, resetForm } = useForm({
    validationSchema: schema
})

const vuetifyConfig = (state: any) => ({
    props: {
        'error-messages': state.errors
    }
})

const [date, dateProps] = defineField('date', vuetifyConfig);
const [time, timeProps] = defineField('time', vuetifyConfig);

const save = handleSubmit(
    async (_: GenericObject) => {
        scheduleRecovery();
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

function close() {
    scheduleRecoveryDialog.value = false
    date.value = undefined;
    time.value = undefined;
    resetForm();
}

async function scheduleRecovery() {
    if (!date.value || !time.value || !recovery.value) return;

    try {
        loadingSchedulingRecovery.value = true;
        const startTime = Time.fromHHMM(time.value)!;
        const schedule: RecoverySchedule = {
            studentId: recovery.value.studentId,
            schoolId: props.school.id,
            originalDailyLessonId: recovery.value.originalDailyLesson.id,
            originalLessonId: recovery.value.lessonId,
            date: date.value,
            startTime: startTime.toITime(),
            endTime: startTime.add({ minutes: recovery.value.minutesLessonDuration }).toITime()
        }
        await SchoolRecoveryLessonService.instance.scheduleRecovery(recovery.value, schedule);
        scheduleRecoveryDialog.value = false
    } catch (error) {
        toast.error("Impossibile schedulare la lezione di recupero")
    } finally {
        loadingSchedulingRecovery.value = false;
    }
}
</script>