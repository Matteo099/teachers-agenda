<template>
    <v-card title="Lezione Settimanale">
        <v-card-text>
            <v-form class="ma-2">
                <v-row class="my-1 justify-center">
                    <v-col class="px-2">
                        <v-select v-model="dayOfWeek" v-bind="dayOfWeekProps" :items="days" label="Giorno"
                            required></v-select>
                    </v-col>
                </v-row>
                <v-row class="my-1 justify-center">
                    <v-col class="px-2" cols="12" md="4">
                        <v-date-input :max="to" v-model="from" v-bind="fromProps" label="Dal"
                            inputmode="none"></v-date-input>
                    </v-col>
                    <v-col class="px-2" cols="12" md="4">
                        <v-date-input :min="from" v-model="to" v-bind="toProps" label="Al"
                            inputmode="none"></v-date-input>
                    </v-col>
                    <v-col class="px-2" cols="12" md="4">
                        <v-select v-model="excludeDates" v-bind="excludeDatesProps" :items="allDates"
                            label="Giorni da Escludere" multiple item-title="name" item-value="value"
                            no-data-text="Nessuna Data Disponibile" clearable>
                            <template v-slot:selection="{ item, index }">
                                <v-chip v-if="index < 2">
                                    <span>{{ item.title }}</span>
                                </v-chip>
                                <span v-if="index === 2" class="text-grey text-caption align-self-center">
                                    (+{{ excludeDates.length - 2 }} others)
                                </span>
                            </template>
                        </v-select>
                    </v-col>
                </v-row>
                <v-row class="my-1 justify-center">
                    <v-col class="px-2" cols="12" md="6">
                        <v-text-field v-model="startingTime" v-bind="startingTimeProps" :active="modalTimePicker"
                            :focused="modalTimePicker" inputmode="none" label="Orario della prima Lezione"
                            prepend-icon="mdi-clock-time-four-outline" readonly>
                            <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                                <v-time-picker v-if="modalTimePicker" v-model="startingTime"
                                    format="24hr"></v-time-picker>
                            </v-dialog>
                        </v-text-field>
                    </v-col>
                    <v-col class="px-2" cols="12" md="6">
                        <v-select v-model="selectedStudents" :items="allStudents" label="Studenti" item-title="name"
                            item-value="id" :return-object="true" multiple
                            no-data-text="Nessuno studente disponibile per questa scuola">
                            <!-- <template v-slot:item="{ item }">
                                <v-list-item :value="item.raw" :key="item.raw.id" role="option">
                                    <template v-slot:prepend="{ isSelected }">
                                        <v-list-item-action start>
                                            <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                                        </v-list-item-action>
                                    </template>

                                    <v-list-item-title>{{ item.raw.name }} {{ item.raw.surname }}</v-list-item-title>
                                </v-list-item>
                            </template> -->
                            <template v-slot:prepend-item v-if="allStudents.length > 1">
                                <v-list-item title="Seleziona tutti" @click="toggle">
                                    <template v-slot:prepend>
                                        <v-checkbox-btn :color="selectSomeStudents ? 'indigo-darken-4' : undefined"
                                            :indeterminate="selectSomeStudents && !selectAllStudents"
                                            :model-value="selectAllStudents"></v-checkbox-btn>
                                    </template>
                                </v-list-item>

                                <v-divider class="mt-2"></v-divider>
                            </template>

                            <!-- <template v-slot:append-item>
                                <v-divider class="mt-2"></v-divider>

                                <v-dialog v-model="dialogCreateStudent" fullscreen>
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-list-item prepend-icon="mdi-plus" title="Crea Studente" color="success"
                                            v-bind="activatorProps">
                                        </v-list-item>
                                    </template>

                                    <StudentEditor :schoolId="schoolId" @close="dialogCreateStudent = false"
                                        @save="dialogCreateStudent = false">
                                    </StudentEditor>
                                </v-dialog>
                            </template> -->
                        </v-select>
                    </v-col>
                </v-row>

            </v-form>

            <DailyLessonCalendar :events="events"></DailyLessonCalendar>
            <!-- <v-list>
                <v-list-subheader>STUDENTI</v-list-subheader>
                <draggableComponent v-if="startingTime" :list="scheduledLessons" item-key="studentId"
                    @end="updateScheduledLessonsTime">
                    <template v-slot:item="{ element }">
                        <v-list-item :key="element.studentId" :value="element" color="primary">
                            <template v-slot:prepend>
                                <p>
                                    <b>
                                        {{ Time.fromITime(element.startTime).format() }} -
                                        {{ Time.fromITime(element.endTime).format() }}
                                    </b>
                                    <span> - </span>
                                    <i>{{ getCompleteStudentName(element.studentId) }}</i>
                                    <span> ({{ getStudentLessonDay(element.studentId) }})</span>
                                </p>
                            </template>
                        </v-list-item>
                    </template>

                </draggableComponent>
            </v-list> -->
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
            <v-btn text="Salva" color="primary" @click="onSave" :loading="saving"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, Time, updateDailyLessonTime, yyyyMMdd, type ScheduledLesson, type School, type Student, type WeeklyLesson } from '@/models/model';
import { WeeklyLessonRepository } from '@/models/repositories/weekly-lesson-repository';
import { StudentService } from '@/models/services/student-service';
import { dateFormat } from '@/models/utils';
import type { EventSubscription } from '@/models/utils/event';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useForm, type GenericObject } from 'vee-validate';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import draggableComponent from 'vuedraggable';
import * as yup from 'yup';
import DailyLessonCalendar from '../calendar/DailyLessonCalendar.vue';
import { type CalendarEvent } from '@schedule-x/calendar';

interface WeekLessonEditorProps {
    school: School;
    edit?: boolean;
    initialWeekLesson?: WeeklyLesson
}

const emit = defineEmits(['close', 'save'])
const props = withDefaults(defineProps<WeekLessonEditorProps>(),
    {
        school: () => ({
            id: "1"
        } as School)
    }
);
const subscriptions: EventSubscription[] = [];
let studentSubscription: EventSubscription;

const scheduledLessons: Ref<ScheduledLesson[]> = ref([]);
const allDates: Ref<{ name: string, value: Date }[]> = ref([]);
const allStudents: Ref<Student[]> = ref([]);
const selectedStudents: Ref<Student[]> = ref([]);
const modalTimePicker = ref(false);
const saving = ref(false);
const loadingStudents = ref(false);

const schema = yup.object({
    dayOfWeek: yup.string().required('Il Giorno è obbligatorio').label('Giorno'),
    from: yup.date().required('La Data di Inizio delle lezioni settimanali è obbligatoria').label('Dal'),
    to: yup.date().required('La Data di Fine delle lezioni settimanali è obbligatoria').label('Al'),
    excludeDates: yup.array().of(yup.date()).label('Giorni da Escludere').nullable().optional(),
    startingTime: yup.string().required(`L'Orario della prima Lezione è obbligatorio`).label('Orario della prima Lezione'),
})

const { defineField, handleSubmit } = useForm({
    validationSchema: schema
})

const vuetifyConfig = (state: any) => ({
    props: {
        'error-messages': state.errors
    }
})

const [dayOfWeek, dayOfWeekProps] = defineField('dayOfWeek', vuetifyConfig);
const [from, fromProps] = defineField('from', vuetifyConfig);
const [to, toProps] = defineField('to', vuetifyConfig);
const [excludeDates, excludeDatesProps] = defineField('excludeDates', vuetifyConfig);
const [startingTime, startingTimeProps] = defineField('startingTime', vuetifyConfig);

const events: Ref<CalendarEvent[]> = ref([
    { start: "2024-12-8 15:00", end: "2024-12-8 16:00", id: "q", title: "test", data: "2024-12-8" }
])

const onSave = handleSubmit(
    async (values: GenericObject) => {
        save(values);
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

watch(() => props.initialWeekLesson, () => updateWeekLesson())
watch(dayOfWeek, () => updateExcludeDates())
watch(from, () => updateExcludeDates())
watch(to, () => updateExcludeDates())
watch(selectedStudents, () => updateScheduledLessons())
watch(startingTime, () => updateScheduledLessonsTime())
watch(dayOfWeek, async () => await loadStudents())

const selectAllStudents = computed(() => {
    return selectedStudents.value.length === allStudents.value.length
});
const selectSomeStudents = computed(() => {
    return selectedStudents.value.length > 0;
});

function toggle() {
    if (selectAllStudents.value) {
        selectedStudents.value = []
    } else {
        selectedStudents.value = allStudents.value.slice();
    }
}

function updateScheduledLessons() {
    // add new selected students at the end of the list
    for (const student of selectedStudents.value) {
        const index = scheduledLessons.value.findIndex(s => s.studentId == student.id)
        if (index == -1) scheduledLessons.value.push({ lessonId: uuidv4(), studentId: student.id, startTime: 0, endTime: 0 });
    }

    // remove de-selected students from the list
    for (const element of [...scheduledLessons.value]) {
        const si = selectedStudents.value.findIndex(s => s.id == element.studentId)
        if (si == -1) {
            const index = scheduledLessons.value.indexOf(element);
            scheduledLessons.value.splice(index, 1);
        }
    }

    updateScheduledLessonsTime();
}

function updateScheduledLessonsTime() {
    const time = startingTime.value;
    updateDailyLessonTime(time, { scheduledLessons: scheduledLessons.value, students: selectedStudents.value });
    //     let startingMinutes = 0;
    //     try {
    //         const time = startingTime.value;
    //         if (!time) return;

    //         const hhmm = time.split(":");
    //         if (hhmm.length != 2) return;

    //         const h = parseInt(hhmm[0]);
    //         const m = parseInt(hhmm[1]);

    //         startingMinutes = h * 60 + m;
    //         console.log(startingMinutes)
    //     } catch (error) {
    //         console.log(error)
    //         return;
    //     }

    //     scheduledLessons.value.forEach(sl => {
    //         sl.time = startingMinutes * 60;
    //         // sl.time = { hour: Math.trunc(startingMinutes / 60), minutes: startingMinutes % 60 }
    //         const student = selectedStudents.value.find(s => s.id == sl.studentId);
    //         if (!student) return;
    //         startingMinutes += student.minutesLessonDuration;
    //     });
}

function updateWeekLesson() {
    if (props.initialWeekLesson) {
        const weekLessonClone = JSON.parse(JSON.stringify(props.initialWeekLesson)) as WeeklyLesson;
        dayOfWeek.value = days[weekLessonClone.dayOfWeek];
        from.value = yyyyMMdd.fromIyyyyMMdd(weekLessonClone.from).toDate();
        to.value = yyyyMMdd.fromIyyyyMMdd(weekLessonClone.to).toDate();
        excludeDates.value = weekLessonClone.exclude.map(d => yyyyMMdd.fromIyyyyMMdd(d).toDate());
        scheduledLessons.value = weekLessonClone.schedule;
        const studentsId = scheduledLessons.value.map(s => s.studentId);
        selectedStudents.value = allStudents.value.filter(s => studentsId.includes(s.id));

        if (scheduledLessons.value.length > 0) {
            const minTime = scheduledLessons.value[0].startTime;
            startingTime.value = Time.fromITime(minTime).format();
        }
    }
}

function updateExcludeDates() {
    if (dayOfWeek.value === undefined || from.value === undefined || to.value === undefined) return;

    // Clear the previous allDates array
    allDates.value = [];

    const targetDayOfWeek = days.indexOf(dayOfWeek.value);

    // Create a new date instance to avoid mutating the original `from` date
    let currentDate = new Date(from.value);

    // Loop through the dates between `from` and `to`
    while (currentDate <= to.value) {
        // Check if the day of the week matches
        if (currentDate.getDay() === targetDayOfWeek) {
            // Push the date to the allDates array
            const d = new Date(currentDate);
            allDates.value.push({
                name: dateFormat(d),
                value: d
            }); // Store a copy of the date
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
}



async function save(values: GenericObject) {
    saving.value = true;

    const weekLesson: Partial<WeeklyLesson> = {
        schoolId: props.school.id,
        dayOfWeek: days.indexOf(dayOfWeek.value!),
        from: yyyyMMdd.fromDate(from.value!).toIyyyyMMdd(),
        to: yyyyMMdd.fromDate(to.value!).toIyyyyMMdd(),
        exclude: excludeDates.value?.map((d: Date) => yyyyMMdd.fromDate(d).toIyyyyMMdd()) ?? [],
        schedule: scheduledLessons.value,
        createdAt: props.edit ? props.initialWeekLesson?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
    };

    try {
        if (props.edit && props.initialWeekLesson?.id != undefined) {
            await WeeklyLessonRepository.instance.save(weekLesson, props.initialWeekLesson.id);
            toast.success("Lezione Settimanale Aggiornata")
        } else {
            await WeeklyLessonRepository.instance.save(weekLesson);
            toast.success("Lezione Settimanale Creata")
        }
        emit('save', weekLesson);
    } catch (e) {
        emit('save');
        toast.error("Errore durante il salvataggio")
        console.error("Error adding document (schools): ", e);
    } finally {
        saving.value = false;
    }
}

function getCompleteStudentName(studentId: string): string {
    const student = allStudents.value.find(s => s.id == studentId);
    return `${student?.name} ${student?.surname}`;
}

function getStudentLessonDay(studentId: string): string {
    const student = allStudents.value.find(s => s.id == studentId);
    return days[student?.lessonDay ?? 0];
}

async function loadStudents() {
    studentSubscription?.unsubscribe();

    loadingStudents.value = true;
    const firstSnapshot = new Promise<void>((resolve, reject) => {
        studentSubscription = StudentService.instance.observeStudentsOfSchool(props.school.id).subscribe({
            next: data => {
                allStudents.value = data;
                loadingStudents.value = false;
                resolve();
            },
            error: err => {
                loadingStudents.value = false;
                reject(err); // Reject the promise on error
            }
        })
    });

    // Ensure to add the unsubscribe function for cleanup
    subscriptions.push(studentSubscription);

    // Wait for the first snapshot to be loaded
    await firstSnapshot;
}

onUnmounted(() => {
    subscriptions.forEach(s => s.unsubscribe());
})

onMounted(async () => {
    await loadStudents();
    updateWeekLesson();
})
</script>