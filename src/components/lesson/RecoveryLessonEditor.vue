<template>
    <v-card :title="`Lezione di Recupero per ${lessonToRecover.name} ${lessonToRecover.surname}`"
        :loading="loadingDailyLesson">
        <v-card-text>
            <v-row class="my-1 justify-center">
                <v-col class="px-2" cols="12" md="6">
                    <v-date-input v-model="date" v-bind="dateProps" label="Data della Lezione di Recupero"
                        inputmode="none"></v-date-input>
                </v-col>
                <v-col class="px-2" cols="12" md="6">
                    <v-text-field v-model="time" v-bind="timeProps" :active="modalTimePicker" :focused="modalTimePicker"
                        inputmode="none" label="Orario della Lezione di Recupero"
                        prepend-icon="mdi-clock-time-four-outline" readonly>
                        <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                            <v-time-picker v-if="modalTimePicker" v-model="time" format="24hr"></v-time-picker>
                        </v-dialog>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row v-if="dailyLesson" class="my-1">
                <DailyLessonStudentList :allStudents="[lessonToRecover]" v-model="dailyLesson.lessons"
                    :startingTime="dailyLesson.lessons![0].startTime" />
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
            <v-btn text="Salva" color="primary" @click="onSave" :loading="saving"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { LessonStatus, Time, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type Lesson, type Student, type WeeklyLesson } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { WeeklyLessonService } from '@/models/services/weely-lesson-service';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useForm, type GenericObject } from 'vee-validate';
import { ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';
import DailyLessonStudentList from './DailyLessonStudentList.vue';

interface WeekLessonEditorProps {
    schoolId: string;
    lessonToRecover: Student & Lesson;
    edit?: boolean;
}

const emit = defineEmits(['close', 'save'])
const props = defineProps<WeekLessonEditorProps>()

const modalTimePicker = ref(false);
const dailyLesson: Ref<Partial<DailyLesson> | undefined> = ref();
const saving = ref(false);
const loadingDailyLesson = ref(false);

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

watch(date, async () => loadDailyLesson());
watch(time, async () => updateDailyLesson());

const onSave = handleSubmit(
    async (values: GenericObject) => {
        save(values);
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

async function loadDailyLesson() {
    if (date.value === undefined) return;

    const currentDate = yyyyMMdd.fromDate(date.value).toIyyyyMMdd();
    if (dailyLesson.value?.date == currentDate) return;

    // load dailyLesson
    loadingDailyLesson.value = true;
    try {
        dailyLesson.value = (await DailyLessonService.instance.getDailyLessonOfSchoolByDate(props.schoolId, currentDate))?.[0];
        if (dailyLesson.value == undefined) {
            const wl = await loadWeeklyLesson(currentDate);
            let dl: Partial<DailyLesson>;
            if (wl != undefined) {
                dl = {
                    date: currentDate,
                    schoolId: props.schoolId,
                    lessons: wl.schedule.map(l => ({
                        lessonId: uuidv4(),
                        status: LessonStatus.NONE,
                        studentId: l.studentId,
                        startTime: l.startTime,
                        endTime: l.endTime,
                        createdAt: Timestamp.now(),
                        updatedAt: Timestamp.now()
                    }))
                };
            } else {
                dl = {
                    date: currentDate,
                    schoolId: props.schoolId,
                    lessons: []
                }
            }
            dailyLesson.value = dl;
        }

        updateDailyLesson();
    } catch (error) {
        console.log(error)
    } finally {
        loadingDailyLesson.value = false;
    }
}

async function loadWeeklyLesson(currentDate: IyyyyMMdd): Promise<WeeklyLesson | undefined> {
    if (date.value === undefined) return;

    const _date = date.value as Date;
    const dayOfWeek = _date.getDay();

    const data = await WeeklyLessonService.instance.getWeeklyLessonOfSchoolByDayBetweenDate(props.schoolId, dayOfWeek, currentDate)
    console.log("Current data: ", data);
    return data?.[0];
}

let lesson: Lesson;
function updateDailyLesson() {
    if (dailyLesson.value === undefined) return;
    if (time.value == undefined) return;

    const index = dailyLesson.value.lessons!.findIndex(l => l.lessonId == lesson?.lessonId)
    if (index != -1) {
        dailyLesson.value.lessons!.splice(index, 1);
    }
    const t = Time.fromHHMM(time.value);
    if (!t) return;

    lesson = {
        lessonId: uuidv4(),
        status: LessonStatus.NONE,
        studentId: props.lessonToRecover.studentId,
        startTime: t.toITime(),
        endTime: t.add({ minutes: props.lessonToRecover.minutesLessonDuration }).toITime(),
        recovery: {
            ref: "original",
            lessonRef: {
                lessonId: props.lessonToRecover.lessonId,
                dailyLessonId: dailyLesson.value.id!,
            }
        },
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
    }
    dailyLesson.value.lessons!.push(lesson)
    dailyLesson.value.lessons!.sort((a, b) => a.startTime - b.startTime);
}


async function save(values: GenericObject) {
    if (!dailyLesson.value) return;

    saving.value = true;
    try {
        if (dailyLesson.value.id != undefined) {
            await DailyLessonRepository.instance.save(dailyLesson.value, dailyLesson.value.id)
            console.log("Document (dailyLesson) update with ID: ", dailyLesson.value.id);
        } else {
            const dailyLessonId = await DailyLessonRepository.instance.save(dailyLesson.value)
            console.log("Document (daily lesson) created with ID: ", dailyLessonId);
        }
        emit('save', dailyLesson.value);
    } catch (e) {
        emit('save');
        toast.error("Errore durante il salvataggio")
        console.error("Error updating document (dailyLesson): ", e);
    } finally {
        saving.value = false;
    }
}
</script>