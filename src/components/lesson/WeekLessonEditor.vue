<template>
    <v-card title="Lezione Settimanale">
        <v-card-text>
            <v-form>
                <v-row class="my-1 justify-center">
                    <v-col class="mx-2">
                        <v-select v-model="dayOfWeek" :items="days" label="Giorno" required></v-select>
                    </v-col>
                </v-row>
                <v-row class="my-1 justify-center">
                    <v-col class="mx-2">
                        <v-date-input :max="to" v-model="from" label="Dal" inputmode="none"></v-date-input>
                    </v-col>
                    <v-col class="mx-2">
                        <v-date-input :min="from" v-model="to" label="Al" inputmode="none"></v-date-input>
                    </v-col>
                    <v-col class="mx-2">
                        <v-select v-model="excludeDates" :items="allDates" label="Giorni da Escludere" multiple
                            item-title="name" item-value="value" no-data-text="Nessuna Data Disponibile" clearable>
                            <template v-slot:selection="{ item, index }">
                                <v-chip v-if="index < 2">
                                    <span>{{ date.format(item.title, 'keyboard24') }}</span>
                                </v-chip>
                                <span v-if="index === 2" class="text-grey text-caption align-self-center">
                                    (+{{ excludeDates.length - 2 }} others)
                                </span>
                            </template>
                        </v-select>
                    </v-col>
                </v-row>
                <v-row class="my-1 justify-center">
                    <v-col class="mx-2">
                        <v-text-field v-model="startingTime" :active="modalTimePicker" :focused="modalTimePicker"
                            inputmode="none" label="Orario della prima Lezione"
                            prepend-icon="mdi-clock-time-four-outline" readonly>
                            <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                                <v-time-picker v-if="modalTimePicker" v-model="startingTime"
                                    format="24hr"></v-time-picker>
                            </v-dialog>
                        </v-text-field>
                    </v-col>
                    <v-col class="mx-2">
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

            <v-list>
                <v-list-subheader>STUDENTI</v-list-subheader>
                <draggableComponent v-if="startingTime" :list="scheduledLessons" item-key="studentId"
                    @end="updateScheduledLessonsTime">
                    <template v-slot:item="{ element }">
                        <v-list-item :key="element.studentId" :value="element" color="primary">
                            <template v-slot:prepend>
                                <p>
                                    <b>
                                        {{ element.time.hour.toString().padStart(2, '0') }}:{{
                                            element.time.minutes.toString().padStart(2,
                                                '0') }}
                                    </b>
                                    <span> - </span>
                                    <i>{{ getCompleteStudentName(element.studentId) }}</i>
                                    <span> ({{ getStudentLessonDay(element.studentId) }})</span>
                                </p>
                            </template>
                        </v-list-item>
                    </template>

                </draggableComponent>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
            <v-btn text="Salva" color="primary" @click="save" :loading="saving"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { days, type ScheduledLesson, type School, type Student, type WeekLesson } from '@/models/model';
import { formatDate, nameof } from '@/models/utils';
import { addDoc, doc, onSnapshot, orderBy, query, setDoc, Timestamp, where, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import draggableComponent from 'vuedraggable';
import { useDate } from 'vuetify';

interface WeekLessonEventProps {
    school: School;
    edit?: boolean;
    initialWeekLesson?: WeekLesson
}

const date = useDate();
const emit = defineEmits(['close', 'save'])
const props = defineProps<WeekLessonEventProps>()
const weekLessonsRef = useDB<WeekLesson>(DatabaseRef.WEEK_LESSONS);
const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const subscriptions: Unsubscribe[] = [];

const dayOfWeek: Ref<string | undefined> = ref();
const from: Ref<Date | undefined> = ref();
const to: Ref<Date | undefined> = ref();
const excludeDates: Ref<Date[]> = ref([]);
const allDates: Ref<{ name: string, value: Date }[]> = ref([]);
const startingTime: Ref<string | undefined> = ref();
const allStudents: Ref<Student[]> = ref([]);
const selectedStudents: Ref<Student[]> = ref([]);
const scheduledLessons: Ref<ScheduledLesson[]> = ref([]);
const modalTimePicker = ref(false);
const saving = ref(false);
const loadingStudents = ref(false);
// const dialogCreateStudent = ref(false);

let unsubscribeStudents: Unsubscribe;

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
        if (index == -1) scheduledLessons.value.push({ studentId: student.id, time: { hour: 0, minutes: 0 } });
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
    let startingMinutes = 0;
    try {
        const time = startingTime.value;
        if (!time) return;

        const hhmm = time.split(":");
        if (hhmm.length != 2) return;

        const h = parseInt(hhmm[0]);
        const m = parseInt(hhmm[1]);

        startingMinutes = h * 60 + m;
    } catch (error) {
        return;
    }

    scheduledLessons.value.forEach(sl => {
        sl.time = { hour: Math.trunc(startingMinutes / 60), minutes: startingMinutes % 60 }
        const student = selectedStudents.value.find(s => s.id == sl.studentId)!;
        const levelTime = props.school.levelRanges.find(lr => lr.levels.includes(student.level))!;
        startingMinutes += levelTime.minutes;
    });
}

function updateWeekLesson() {
    if (props.initialWeekLesson) {
        const weekLessonClone = JSON.parse(JSON.stringify(props.initialWeekLesson)) as WeekLesson;
        dayOfWeek.value = days[weekLessonClone.dayOfWeek];
        from.value = weekLessonClone.from.toDate();
        to.value = weekLessonClone.to.toDate();
        excludeDates.value = weekLessonClone.exclude.map(d => d.toDate());
        scheduledLessons.value = weekLessonClone.schedule;

        const firstScheduledLesson = scheduledLessons.value.reduce((prev, curr) => prev.time.hour * 60 + prev.time.minutes < curr.time.hour * 60 + prev.time.minutes ? prev : curr);
        if (firstScheduledLesson) startingTime.value = `${firstScheduledLesson.time.hour}:${firstScheduledLesson.time.minutes}`
        const studentsId = scheduledLessons.value.map(s => s.studentId);
        selectedStudents.value.push(...allStudents.value.filter(s => studentsId.includes(s.id)));
    }
}

function updateExcludeDates() {
    if (dayOfWeek.value === undefined || from.value === undefined || to.value === undefined) return;

    // Clear the previous allDates array
    allDates.value = [];

    const dayNumber = days.indexOf(dayOfWeek.value);

    // Convert dayOfWeek to match Date.getDay() format
    // Days are 0 (Sunday) to 6 (Saturday) in JavaScript, so we map it to our custom array `days` where 0 is Monday
    const targetDayOfWeek = dayNumber === 6 ? 0 : dayNumber + 1;

    // Create a new date instance to avoid mutating the original `from` date
    let currentDate = new Date(from.value);

    // Loop through the dates between `from` and `to`
    while (currentDate <= to.value) {
        // Check if the day of the week matches
        if (currentDate.getDay() === targetDayOfWeek) {
            // Push the date to the allDates array
            const d = new Date(currentDate);
            allDates.value.push({
                name: formatDate(d),//date.format(d.toUTCString(), 'keyboard24'),
                value: d
            }); // Store a copy of the date
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
}



async function save() {
    saving.value = true;

    const weekLesson: Partial<WeekLesson> = {
        dayOfWeek: days.indexOf(dayOfWeek.value!),
        from: Timestamp.fromDate(from.value!),
        to: Timestamp.fromDate(to.value!),
        exclude: excludeDates.value.map(d => Timestamp.fromDate(d)),
        schedule: scheduledLessons.value,
        createdAt: props.edit ? props.initialWeekLesson?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
    };

    dayOfWeek.value = undefined;
    from.value = undefined;
    to.value = undefined;
    excludeDates.value = [];
    scheduledLessons.value = [];
    startingTime.value = undefined;
    selectedStudents.value = [];
    allStudents.value = [];

    try {
        if (props.edit && props.initialWeekLesson?.id != undefined) {
            const docRef = await setDoc(doc(weekLessonsRef, props.initialWeekLesson.id), weekLesson);
            console.log("Document (week lessons) update with ID: ", weekLesson.id, docRef);
        } else {
            const docRef = await addDoc(weekLessonsRef, weekLesson);
            console.log("Document (week lessons) written with ID: ", docRef.id);
        }
        emit('save', weekLesson);
    } catch (e) {
        emit('save');
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
    unsubscribeStudents?.();

    loadingStudents.value = true;
    unsubscribeStudents = onSnapshot(query(studentsRef, where(nameof<Student>('schoolId'), '==', props.school.id), orderBy(nameof<Student>('lessonDay'))), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        allStudents.value = data;
        loadingStudents.value = false;
        console.log("Current data: ", snapshot, data);
    }, (error) => {
        loadingStudents.value = false;
        console.error(error);
    }, () => {
        console.log("loadStudents completitions")
    });
    subscriptions.push(unsubscribeStudents);
}

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
})

onMounted(async () => {
    updateWeekLesson();
    await loadStudents();
})
</script>