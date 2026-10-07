<template>
    <v-dialog v-model="scheduleRecoveryDialog" max-width="520" scrollable persistent>
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn color="primary" variant="flat" size="small" prepend-icon="mdi-calendar-plus" v-bind="activatorProps">Programma recupero</v-btn>
        </template>

        <template v-slot:default>
            <v-card class="recovery-dialog" variant="flat" :loading="loadingSchedulingRecovery">
                <div class="recovery-dialog-header"><span class="school-panel-icon"><v-icon icon="mdi-calendar-plus-outline" size="23" /></span><div><span>Nuova data</span><h2>Programma recupero</h2><p>Definisci quando recuperare la lezione.</p></div><v-btn icon="mdi-close" variant="text" size="small" aria-label="Chiudi" @click="close" /></div>
                <v-card-text class="recovery-dialog-content">
                    <div class="recovery-origin"><v-icon icon="mdi-account-outline" size="20" /><div><strong>{{ recovery.student.name }} {{ recovery.student.surname }}</strong><span>Lezione originale · {{ yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }}</span></div></div>
                    <div class="recovery-dialog-fields">
                        <v-date-input v-model="date" v-bind="dateProps" label="Data del recupero" variant="outlined" density="comfortable" inputmode="none" prepend-inner-icon="mdi-calendar-outline" prepend-icon="" hide-details="auto" />
                        <v-text-field v-model="time" v-bind="timeProps" :active="modalTimePicker" :focused="modalTimePicker" inputmode="none" label="Ora di inizio" variant="outlined" density="comfortable" prepend-inner-icon="mdi-clock-outline" hide-details="auto" readonly>
                            <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                                <v-time-picker v-if="modalTimePicker" v-model="time" format="24hr" />
                            </v-dialog>
                        </v-text-field>
                        <v-number-input v-model="minutes" label="Durata del recupero" variant="outlined" density="comfortable" :min="1" :max="recovery.student.minutesLessonDuration" suffix="min" hint="Lascia vuoto per recuperare l'intera lezione" persistent-hint />
                    </div>
                </v-card-text>
                <v-card-actions class="recovery-dialog-actions">
                    <v-btn text="Annulla" variant="text" @click="close" />
                    <v-btn color="primary" text="Programma recupero" variant="flat" prepend-icon="mdi-check" :loading="loadingSchedulingRecovery" :disabled="loadingSchedulingRecovery" @click="save($event)" />
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup lang="ts">
import { withCache } from '@/models/decorators/cache-decorator';
import { Time, yyyyMMdd, type RecoverySchedule, type School } from '@/models/model';
import { SchoolRecoveryLessonService, type StudentLessonWithRecovery } from '@/models/services/school-recovery-lesson-service';
import { useForm, type GenericObject } from 'vee-validate';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

export interface ScheduleRecoveryLessonButtonProps {
    school: School
}

const props = defineProps<ScheduleRecoveryLessonButtonProps>();
const recovery = defineModel<StudentLessonWithRecovery>({ required: true });

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
const [minutes] = defineField('minutes', vuetifyConfig);

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


const scheduleRecovery = withCache(async () => {
    if (!date.value || !time.value || !recovery.value) return;
    loadingSchedulingRecovery.value = true;
    const startTime = Time.fromHHMM(time.value)!;
    const schedule: RecoverySchedule = {
        studentId: recovery.value.student.id,
        schoolId: props.school.id,
        originalDailyLessonId: recovery.value.recoveryReference.originalDailyLesson.id,
        originalLessonId: recovery.value.lesson.lessonId,
        date: date.value,
        startTime: startTime.toITime(),
        endTime: startTime.add({ minutes: Number(minutes.value ?? recovery.value.student.minutesLessonDuration) }).toITime(),
        minutes: Number(minutes.value ?? recovery.value.student.minutesLessonDuration)
    }
    await SchoolRecoveryLessonService.instance.scheduleRecovery(recovery.value, schedule);
    scheduleRecoveryDialog.value = false
    toast.success('Recupero programmato');
}, (error) => {
    toast.error("Impossibile schedulare la lezione di recupero")
    console.error("Unable to cancel recovery lesson", error);
}, async () => {
    loadingSchedulingRecovery.value = false;
});
</script>

<style scoped>
.recovery-dialog { overflow: hidden; border: 1px solid var(--app-border); border-radius: 16px !important; background: var(--app-surface); }
.recovery-dialog-header { display: flex; align-items: center; gap: 12px; padding: 20px 22px 18px; border-bottom: 1px solid var(--app-border); }
.recovery-dialog-header > div { flex: 1; min-width: 0; }
.recovery-dialog-header > div > span { color: var(--app-primary); font-size: .74rem; font-weight: 650; }
.recovery-dialog-header h2 { margin: 2px 0; color: var(--app-text); font-size: 1.1rem; font-weight: 700; }
.recovery-dialog-header p { margin: 0; color: var(--app-muted); font-size: .79rem; }
.recovery-dialog-content { padding: 20px 22px !important; }
.recovery-origin { display: flex; align-items: center; gap: 11px; padding: 13px 14px; margin-bottom: 20px; border: 1px solid var(--app-border); border-radius: 11px; background: var(--app-hover-surface); }
.recovery-origin > .v-icon { color: var(--app-primary); }
.recovery-origin strong, .recovery-origin span { display: block; }
.recovery-origin strong { color: var(--app-text); font-size: .86rem; }
.recovery-origin span { margin-top: 2px; color: var(--app-muted); font-size: .77rem; }
.recovery-dialog-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; }
.recovery-dialog-fields > :last-child { grid-column: 1 / -1; }
.recovery-dialog-actions { justify-content: flex-end; gap: 8px; padding: 14px 22px 18px !important; border-top: 1px solid var(--app-border); }
@media (max-width: 600px) {
    .recovery-dialog-header { padding: 16px; }
    .recovery-dialog-content { padding: 16px !important; }
    .recovery-dialog-fields { grid-template-columns: 1fr; }
    .recovery-dialog-actions { flex-wrap: wrap; padding: 12px 16px 16px !important; }
}
</style>
