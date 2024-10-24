<template>
    <v-card title="Recuperi" elevation="3" :loading="loadingExtendedRecoveries">
        <v-list lines="three">
            <template v-for="(extRecovery, index) of extendedRecoveries?.recoveryMap" :key="extRecovery.type">
                <v-list-subheader inset>{{ recoveryTypes[extRecovery.type] }}</v-list-subheader>

                <v-list-item v-if="extRecovery.recoveries.length == 0">
                    <div v-if="extRecovery.type == 'unset'">
                        Nessuna lezione da recuperare
                    </div>
                    <div v-else-if="extRecovery.type == 'pending'">
                        Nessuna lezione di recupero programmata
                    </div>
                    <div v-else>
                        Nessuna lezione da recuperaro effettuata
                    </div>
                </v-list-item>

                <v-list-item v-for="recovery in extRecovery.recoveries"
                    :key="`${recovery.lessonId}_${recovery.dailyLessonId}`">
                    <template v-slot:title>
                        {{ recovery.name }} {{ recovery.surname }}
                    </template>
                    <template v-slot:subtitle>
                        <div v-if="extRecovery.type == 'unset'">
                            Da recuperare la lezione del {{ recovery.date.format() }}
                        </div>
                        <div v-else-if="extRecovery.type == 'pending'">
                            Recupero programmato per il {{ recovery.date.format() }}
                        </div>
                        <div v-else-if="recovery.originalDailyLesson?.date">
                            Recupero della lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.originalDailyLesson.date).format() }} effettuato il {{
                                recovery.date.format() }}
                        </div>
                        <div v-else>
                            Recupero della lezione del {{ recovery.recovery?.dailyLessonId }} effettuato il {{
                                recovery.date.format() }}
                        </div>
                    </template>

                    <template v-slot:append>
                        <v-dialog v-model="scheduleRecoveryDialog" width="auto" scrollable
                            v-if="extRecovery.type == 'unset'" persistent>
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps">programma</v-btn>
                            </template>

                            <template v-slot:default>
                                <v-card title="Programma Lezione di Recupero" :loading="loadingSchedulingRecovery">
                                    <v-card-text class="pa-6">
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <v-date-input v-model="date" v-bind="dateProps"
                                                    label="Data della Lezione di Recupero"
                                                    inputmode="none"></v-date-input>
                                            </v-col>
                                            <v-col cols="12" lg="12">
                                                <v-text-field v-model="time" v-bind="timeProps"
                                                    :active="modalTimePicker" :focused="modalTimePicker"
                                                    inputmode="none" label="Orario della prima Lezione"
                                                    prepend-icon="mdi-clock-time-four-outline" readonly>
                                                    <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                                                        <v-time-picker v-if="modalTimePicker" v-model="time"
                                                            format="24hr"></v-time-picker>
                                                    </v-dialog>
                                                </v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text="Annulla" @click="close"></v-btn>
                                        <v-btn color="primary" text="Salva"
                                            @click="saveTrigger($event, recovery)"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>

                        <v-btn v-if="extRecovery.type == 'pending'"
                            @click="cancelScheduleRecovery(recovery)">annulla</v-btn>
                    </template>
                </v-list-item>

                <v-divider v-if="index != 2"></v-divider>
            </template>
        </v-list>
        <v-card-text v-if="!extendedRecoveries">
            Nessun recupero in programma
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { recoveryTypes, Time, yyyyMMdd, type Lesson, type RecoverySchedule, type School, type SchoolRecoveryLesson } from '@/models/model';
import type { ID } from '@/models/repositories/abstract-repository';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { SchoolRecoveryLessonService, type ExtendedSchoolRecoveryLesson, type ExtendedStudentLesson } from '@/models/services/school-recovery-lesson-service';
import { doc } from 'firebase/firestore';
import { useForm, type GenericObject } from 'vee-validate';
import { computed, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useDocument } from 'vuefire';
import * as yup from 'yup';

export interface RecoveryLessonViewProps {
    school: School
}

const props = defineProps<RecoveryLessonViewProps>();
const schoolRecoveryLessonsRef = useDB<SchoolRecoveryLesson>(DatabaseRef.SCHOOL_RECOVERY_LESSONS);

const extendedRecoveries: Ref<ExtendedSchoolRecoveryLesson | undefined> = ref();
const loadingExtendedRecoveries = ref(false);
const loadingSchedulingRecovery = ref(false);
const modalTimePicker = ref(false);
const scheduleRecoveryDialog = ref(false);

const schoolRecoveryLessonsSource = computed(() =>
    doc(schoolRecoveryLessonsRef, props.school.id as string)
)
const recoveries = useDocument(schoolRecoveryLessonsSource)
const schema = yup.object({
    date: yup.date().required('La Data della Lezione di Recupero è obbligatoria').label('Data della Lezione di Recupero'),
    time: yup.string().required(`L'Orario della Lezione di Recupero è obbligatorio`).label('Orario della Lezione di Recupero'),
})

const { defineField, handleSubmit } = useForm({
    validationSchema: schema
})

const vuetifyConfig = (state: any) => ({
    props: {
        'error-messages': state.errors
    }
})

const [date, dateProps] = defineField('date', vuetifyConfig);
const [time, timeProps] = defineField('time', vuetifyConfig);

watch(recoveries, async () => computeDailyLessons());

function cancelScheduleRecovery(event: any) {
    event.recoveryDate = undefined;
    event.status = 'NOT_RECOVERED';
}

const onSave = handleSubmit(
    async (_: GenericObject) => {
        scheduleRecovery();
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

let currentRecovery: ExtendedStudentLesson;
function saveTrigger(event: any, recovery: ExtendedStudentLesson) {
    currentRecovery = recovery;
    onSave(event)
}

function close() {
    scheduleRecoveryDialog.value = false
    date.value = undefined;
    time.value = undefined;
}

async function scheduleRecovery() {
    if (!date.value || !time.value || !currentRecovery) return;

    const recovery: ExtendedStudentLesson = currentRecovery;
    try {
        loadingSchedulingRecovery.value = true;
        const startTime = Time.fromHHMM(time.value)!;
        const schedule: RecoverySchedule = {
            studentId: recovery.studentId,
            schoolId: props.school.id,
            originalDailyLessonId: recovery.dailyLessonId,
            originalLessonId: recovery.lessonId,
            date: date.value,
            startTime: startTime.toITime(),
            endTime: startTime.add({ minutes: recovery.minutesLessonDuration }).toITime()
        }
        // Step 1: create a new lesson R with recoveryReference to Original Lesson
        const recoveryDailyLesson: Lesson & { dailyLessonId: ID } = await DailyLessonService.instance.createRecoveryLesson(schedule);
        // Step 2: update original lesson O with recoveryReference to R Lesson
        const originalDaillyLessonDoc = await DailyLessonRepository.instance.getDoc(recovery.dailyLessonId);
        if (originalDaillyLessonDoc.exists()) {
            const originalDaillyLesson = originalDaillyLessonDoc.data();
            const lesson = originalDaillyLesson.lessons.find(l => l.lessonId == recovery.lessonId);
            if (lesson) {
                lesson.recovery = {
                    ref: 'recovery',
                    dailyLessonId: recoveryDailyLesson.dailyLessonId,
                    lessonId: recoveryDailyLesson.lessonId
                }
                await DailyLessonRepository.instance.save(originalDaillyLesson, originalDaillyLesson.id);
            }
        } else console.warn("")
        // Step 3: update school recovery lesson status
        await SchoolRecoveryLessonService.instance.setPendingRecovery(props.school.id, recovery.dailyLessonId, recovery.lessonId);
        scheduleRecoveryDialog.value = false
    } catch (error) {
        toast.error("Impossibile schedulare la lezione di recupero")
    } finally {
        loadingSchedulingRecovery.value = false;
    }
}

async function computeDailyLessons() {
    if (!recoveries.value) return;

    try {
        loadingExtendedRecoveries.value = true;
        extendedRecoveries.value = await SchoolRecoveryLessonService.instance.computeDailyLessons(recoveries.value);
    } catch (error) {
        toast.warning("Impossibile caricare le Lezioni di Recupero");
    } finally {
        loadingExtendedRecoveries.value = false;
    }
}
</script>