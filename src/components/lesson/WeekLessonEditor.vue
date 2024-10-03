<template>
    <v-card title="Lezione Settimanale">
        <v-card-text>
            <v-form>
                <v-select v-model="dayOfWeek" :items="days" label="Giorno" required></v-select>
                <v-date-input :max="to" v-model="from" label="Dal"></v-date-input>
                <v-date-input :min="from" v-model="to" label="Al"></v-date-input>
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
                <v-text-field v-model="startingTime" :active="modalTimePicker" :focused="modalTimePicker"
                    label="Orario della prima Lezione" prepend-icon="mdi-clock-time-four-outline" readonly>
                    <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                        <v-time-picker v-if="modalTimePicker" v-model="startingTime"></v-time-picker>
                    </v-dialog>
                </v-text-field>
                <v-select v-model="selectedStudents" :items="allStudents" label="Studenti" :loading="loadingStudents"
                    item-title="name" item-value="id" multiple>
                    <template v-slot:prepend-item>
                        <v-list-item title="Seleziona tutti" @click="toggle">
                            <template v-slot:prepend>
                                <v-checkbox-btn :color="selectSomeStudents ? 'indigo-darken-4' : undefined"
                                    :indeterminate="selectSomeStudents && !selectAllStudents"
                                    :model-value="selectAllStudents"></v-checkbox-btn>
                            </template>
                        </v-list-item>

                        <v-divider class="mt-2"></v-divider>
                    </template>
                </v-select>
            </v-form>
            <v-list>
                <v-list-subheader>STUDENTI</v-list-subheader>

                <v-list-item v-for="(item, i) in scheduledLessons" :key="i" :value="item" color="primary">
                    <template v-slot:prepend>
                        <b>
                            {{ item.time.hour }}:{{ item.time.minutes }}
                        </b>
                    </template>

                    <v-list-item-title v-text="item.studentId"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
            <v-btn text="Salva" @click="save" :loading="saving"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { days, type LevelRange, type ScheduledLesson, type Student, type WeekLesson } from '@/models/model';
import { nameof } from '@/models/utils';
import { addDoc, doc, onSnapshot, query, setDoc, Timestamp, where, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useDate } from 'vuetify';

interface WeekLessonEventProps {
    edit?: boolean;
    schoolId?: string
    initialWeekLesson?: WeekLesson
    levelRanges: LevelRange[]
}

const date = useDate();
const emit = defineEmits(['close', 'save'])
const props = defineProps<WeekLessonEventProps>()
const weekLessonsRef = useDB<WeekLesson>(DatabaseRef.WEEK_LESSONS);
const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const subscriptions: Unsubscribe[] = [];

const _schoolId: Ref<string | undefined> = ref();
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

let unsubscribeStudents: Unsubscribe;

watch(() => props.schoolId, () => updateSchoolId())
watch(() => props.initialWeekLesson, () => updateWeekLesson())
watch(dayOfWeek, () => updateExcludeDates())
watch(from, () => updateExcludeDates())
watch(to, () => updateExcludeDates())
watch(selectedStudents, () => updateScheduledLessons())
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
        selectedStudents.value = allStudents.value.slice()
    }
}

function updateScheduledLessons() {
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

    // TODO: 
    // const scheduledLessonClone = JSON.parse(JSON.stringify(scheduledLessons.value)) as ScheduledLesson[];
    scheduledLessons.value = [];
    selectedStudents.value.forEach((student, index) => {
        scheduledLessons.value.push({
            studentId: student.id,
            time: { hour: Math.trunc(startingMinutes / 60), minutes: startingMinutes % 60 }
        })

        props.levelRanges.forEach(lr => {
            if (lr.levels.includes(student.level)) {
                startingMinutes += lr.minutes;
                return;
            }
        })
    })
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

function updateSchoolId() {
    if (props.schoolId) {
        _schoolId.value = props.schoolId;
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
                name: date.format(d, 'keyboard24'),
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
        // TODO
        // schedule: ...
        createdAt: props.edit ? props.initialWeekLesson?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
    };

    dayOfWeek.value = undefined;
    from.value = undefined;
    to.value = undefined;
    excludeDates.value = [];

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


async function loadStudents() {
    unsubscribeStudents?.();

    loadingStudents.value = true;
    unsubscribeStudents = onSnapshot(query(studentsRef, where(nameof<Student>('lessonDay'), '==', dayOfWeek.value)), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        allStudents.value = data;
        loadingStudents.value = false;
        console.log("Current data: ", snapshot, data);
    }, (error) => {
        loadingStudents.value = false;
        console.error(error);
    });
    subscriptions.push(unsubscribeStudents);
}

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
})

onMounted(async () => {
    updateSchoolId();
    updateWeekLesson();
    await loadStudents();
})
</script>