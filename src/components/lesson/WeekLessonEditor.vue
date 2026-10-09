<template>
    <v-card class="week-lesson-editor" variant="flat">
        <div class="editor-page-header"><span class="school-panel-icon"><v-icon icon="mdi-calendar-edit" size="24" /></span><div><span>{{ school.name }}</span><h2>{{ edit ? 'Modifica orario settimanale' : 'Nuovo orario settimanale' }}</h2></div><v-btn icon="mdi-close" variant="text" aria-label="Chiudi" @click="emit('close')" /></div>
        <v-card-text class="weekly-editor-content">
            <div class="weekly-editor-intro"><h3>Componi la giornata</h3></div>
            <div class="weekly-editor-layout">
                <v-form class="weekly-editor-form">
                    <section class="editor-page-section">
                        <div class="weekly-section-heading"><span class="weekly-step">1</span><div><h3>Ricorrenza</h3></div></div>
                        <v-select v-model="dayOfWeek" v-bind="dayOfWeekProps" :items="days" label="Giorno della settimana"
                            variant="outlined" required />
                        <div class="weekly-date-grid">
                            <v-date-input :max="to" v-model="from" v-bind="fromProps" label="Dal" variant="outlined" inputmode="none" />
                            <v-date-input :min="from" v-model="to" v-bind="toProps" label="Al" variant="outlined" inputmode="none" />
                        </div>
                        <v-select v-model="excludeDates" v-bind="excludeDatesProps" :items="allDates"
                            label="Date da escludere" variant="outlined" multiple item-title="name" item-value="value"
                            no-data-text="Nessuna data disponibile" clearable>
                            <template #selection="{ item, index }">
                                <v-chip v-if="index < 2" size="small" color="primary" variant="tonal">{{ item.name }}</v-chip>
                                <span v-if="index === 2" class="weekly-more-dates">+{{ excludeDates.length - 2 }} altre</span>
                            </template>
                        </v-select>
                    </section>

                    <section class="editor-page-section">
                        <div class="weekly-section-heading"><span class="weekly-step">2</span><div><h3>Inizio delle lezioni</h3><p>L'orario delle altre lezioni si compone in base agli allievi scelti</p></div></div>
                        <v-text-field v-model="startingTime" v-bind="startingTimeProps" :active="modalTimePicker"
                            :focused="modalTimePicker" inputmode="none" label="Orario della prima lezione"
                            variant="outlined" prepend-inner-icon="mdi-clock-time-four-outline" readonly>
                            <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                                <v-time-picker v-if="modalTimePicker" v-model="startingTime" format="24hr" />
                            </v-dialog>
                        </v-text-field>
                    </section>

                    <section class="editor-page-section">
                        <div class="weekly-section-heading"><span class="weekly-step">3</span><div><h3>Allievi e band</h3></div></div>
                        <SelectStudents v-model="selectedStudents" :all-students="studentsForSelectedDay" mode="list" />
                        <v-btn class="weekly-other-students" color="primary" variant="text" size="small"
                            :prepend-icon="showOtherStudents ? 'mdi-filter-check-outline' : 'mdi-account-search-outline'"
                            @click="showOtherStudents = !showOtherStudents">
                            {{ showOtherStudents ? 'Mostra solo gli allievi del giorno' : 'Visualizza altri allievi' }}
                        </v-btn>
                    </section>
                </v-form>

                <aside class="weekly-preview editor-page-section">
                    <div class="weekly-preview-heading"><div><span class="weekly-preview-kicker">Anteprima</span><h3>Giornata delle lezioni</h3><p>Trascina le lezioni per regolare gli orari.</p></div>
                        <v-chip size="small" color="primary" variant="tonal">{{ selectedStudents.length }} allievi</v-chip>
                    </div>
                    <div class="weekly-calendar"><DailyLessonCalendar v-model="events" editable :school="school" /></div>
                </aside>
            </div>
        </v-card-text>
        <v-card-actions class="editor-page-actions">
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" variant="text" @click="emit('close')"></v-btn>
            <v-btn text="Salva" color="primary" variant="flat" @click="onSave" :loading="saving"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, Time, yyyyMMdd, type ScheduledLesson, type School, type Student, type WeeklyLesson } from '@/models/model';
import { WeeklyLessonRepository } from '@/models/repositories/weekly-lesson-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { StudentService } from '@/models/services/student-service';
import { dateFormat } from '@/models/utils';
import type { EventSubscription } from '@/models/utils/event';
import { type CalendarEvent } from '@schedule-x/calendar';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useForm, type GenericObject } from 'vee-validate';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';
import DailyLessonCalendar from '../calendar/DailyLessonCalendar.vue';
import { calendarEventContent } from '../calendar/calendarEventContent';
import SelectStudents from '../inputs/SelectStudents.vue';

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
const showOtherStudents = ref(false);
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
let initializingStartingTime: boolean = false;

const events: Ref<CalendarEvent[]> = ref([]);

const studentsForSelectedDay = computed(() => {
    if (showOtherStudents.value || dayOfWeek.value === undefined) return allStudents.value;

    const dayIndex = days.indexOf(dayOfWeek.value);
    const selectedIds = new Set(selectedStudents.value.map(student => student.id));
    return allStudents.value.filter(student => student.isBand || student.lessonDay === dayIndex || selectedIds.has(student.id));
});

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
watch(startingTime, () => { updateScheduledLessonsTime(); initializingStartingTime = false; })
watch(dayOfWeek, async () => await loadStudents())
watch(dayOfWeek, () => { showOtherStudents.value = false; })
watch(events, () => updateScheduledLessonsByEvents(), { deep: true })

function updateScheduledLessons() {
    // add new selected students at the end of the list
    for (const student of selectedStudents.value) {
        // Check if the student is already in the scheduled lessons
        const existingLessonIndex = scheduledLessons.value.findIndex(
            lesson => lesson.studentId === student.id
        );

        if (existingLessonIndex === -1) {
            // Find the latest endTime among scheduled lessons
            const startTime = scheduledLessons.value.reduce(
                (latest, current) => (current.endTime > latest ? current.endTime : latest),
                Time.fromHHMM(startingTime.value)?.getTotalMinutes() ?? 0
            );

            // Find the lesson duration for the student
            const lessonDuration = student.minutesLessonDuration || 0;
            const endTime = startTime + lessonDuration * 60;

            // Add the new lesson for the student
            scheduledLessons.value.push({
                lessonId: uuidv4(),
                studentId: student.id,
                startTime: startTime,
                endTime: endTime
            });
        }
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
    // // update timeslots based on startingTime, without modifing the "position" of the lessons (empty hours...)
    if (!initializingStartingTime && scheduledLessons.value.length > 0) {
        scheduledLessons.value.sort((a, b) => {
            return a.startTime - b.startTime;
        });
        const time = Time.fromHHMM(startingTime.value)?.getTotalMinutes() ?? 0;
        const deltaTime = time * 60 - scheduledLessons.value[0]!.startTime;
        scheduledLessons.value.forEach(sl => {
            sl.startTime += deltaTime;
            sl.endTime += deltaTime;
        });
    }

    // updateDailyLessonTime(time, { scheduledLessons: scheduledLessons.value, students: selectedStudents.value });

    const today = yyyyMMdd.today();
    events.value = scheduledLessons.value.map(sl => {
        const st = getStudent(sl.studentId);
        const studentName = getCompleteStudentName(sl.studentId);
        const lessonDay = getStudentLessonDay(sl.studentId);
        return {
            id: sl.lessonId,
            start: today.toScheduleX() + " " + Time.fromITime(sl.startTime).format(),
            end: today.toScheduleX() + " " + Time.fromITime(sl.endTime).format(),
            title: `${studentName} - ${lessonDay}`,
            calendarId: props.school.id.toLowerCase(),
            _customContent: calendarEventContent(studentName, lessonDay),
            data: { ...sl, ...st }
        };
    });
}

function updateScheduledLessonsByEvents() {
    scheduledLessons.value = events.value.map(e => {
        const start = e.start.split(" ")[1]!
        const end = e.end.split(" ")[1]!
        return {
            lessonId: e.data.lessonId,
            startTime: Time.fromHHMM(start)!.toITime(),
            endTime: Time.fromHHMM(end)!.toITime(),
            studentId: e.data.studentId
        }
    });
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
            initializingStartingTime = true;
            const minTime = scheduledLessons.value[0]!.startTime;
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
        schedule: scheduledLessons.value.sort((a, b) => a.startTime - b.startTime),
        createdAt: props.edit ? props.initialWeekLesson?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
    };

    try {
        let savedWeeklyLesson: WeeklyLesson;
        if (props.edit && props.initialWeekLesson?.id != undefined) {
            await WeeklyLessonRepository.instance.save(weekLesson, props.initialWeekLesson.id);
            savedWeeklyLesson = { ...weekLesson, id: props.initialWeekLesson.id } as WeeklyLesson;
            toast.success("Lezione Settimanale Aggiornata")
        } else {
            const id = await WeeklyLessonRepository.instance.save(weekLesson);
            savedWeeklyLesson = { ...weekLesson, id } as WeeklyLesson;
            toast.success("Lezione Settimanale Creata")
        }
        await DailyLessonService.instance.syncTodayWithWeeklyLesson(savedWeeklyLesson);
        emit('save', weekLesson);
    } catch (e) {
        emit('save');
        toast.error("Errore durante il salvataggio")
        console.error("Error adding document (schools): ", e);
    } finally {
        saving.value = false;
    }
}

function getStudent(studentId: string): Student | undefined {
    return allStudents.value.find(s => s.id == studentId);
}

function getCompleteStudentName(studentId: string | Student): string {
    let student: Student | undefined;
    if (typeof studentId === "string") {
        student = getStudent(studentId);
    } else {
        student = studentId;
    }
    return `${student?.name} ${student?.surname}`;
}

function getStudentLessonDay(studentId: string | Student): string {
    let student: Student | undefined;
    if (typeof studentId === "string") {
        student = getStudent(studentId);
    } else {
        student = studentId;
    }
    return days[student?.lessonDay ?? 0]!;
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
<style scoped>
.week-lesson-editor { min-height: 100%; background: var(--app-background); }
.weekly-editor-content { width: min(100%, 1440px); margin: 0 auto; padding: 24px !important; }
.weekly-editor-intro { margin: 2px 0 22px; }
.weekly-editor-intro h3 { margin: 0 0 4px; color: var(--app-text); font-size: 1.2rem; font-weight: 700; }
.weekly-editor-intro p { margin: 0; color: var(--app-muted); font-size: .86rem; }
.weekly-editor-layout { display: grid; grid-template-columns: minmax(340px, .9fr) minmax(0, 1.1fr); gap: 16px; align-items: start; }
.weekly-editor-form, .weekly-preview { min-width: 0; }
.weekly-section-heading { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; }
.weekly-step { display: grid; place-items: center; width: 32px; height: 32px; flex: none; border-radius: 10px; background: var(--app-accent-surface); color: var(--app-primary); font-size: .85rem; font-weight: 700; }
.weekly-section-heading h3, .weekly-preview-heading h3 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 700; }
.weekly-section-heading p, .weekly-preview-heading p { margin: 3px 0 0; color: var(--app-muted); font-size: .8rem; }
.weekly-date-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.weekly-more-dates { margin-left: 4px; color: var(--app-muted); font-size: .75rem; }
.weekly-other-students { margin-top: 12px; }
.weekly-preview { position: sticky; top: 104px; padding: 20px; }
.weekly-preview-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
.weekly-preview-kicker { color: var(--app-primary); font-size: .75rem; font-weight: 650; }
.weekly-calendar { min-width: 0; }
.weekly-calendar :deep(.daily-calendar-container) { padding: 0; }
.week-lesson-editor :deep(.v-card-actions) { padding: 16px 24px; border-top: 1px solid var(--app-border); }
@media (max-width: 1050px) { .weekly-editor-layout { grid-template-columns: 1fr; } .weekly-preview { position: static; } }
@media (max-width: 600px) { .weekly-editor-content { padding: 16px !important; } .weekly-date-grid { grid-template-columns: 1fr; gap: 0; } .weekly-preview { padding: 16px; } }
</style>
