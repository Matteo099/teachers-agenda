<template>
    <v-card title="Lezioni" elevation="3" :loading="loading">

        <template v-slot:append>
            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-pencil" variant="text" v-bind="activatorProps" :disabled="!school"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <WeekLessonEditor :school="school" @close="isActive.value = false"></WeekLessonEditor>
                </template>
            </v-dialog>
        </template>

        <v-list lines="two">
            <template v-for="lg of lessonGroups" :key="lg.month">
                <v-list-subheader inset>{{ lg.month }}</v-list-subheader>

                <v-list-item v-for="lesson in lg.lessons" :key="lesson.createdAt"
                    :title="date.format(lesson.date, 'keyboardDate')" :to="'/lesson/' + lesson.date"
                    :baseColor="lesson.next ? 'primary' : ''">
                    <template v-slot:prepend>
                        <v-avatar :color="lesson.next ? 'primary' : lesson.alert ? 'warning' : 'grey-lighten-1'">
                            <v-icon color="white">mdi-calendar</v-icon>
                        </v-avatar>
                    </template>

                    <template v-slot:append v-if="lesson.alert">
                        <v-icon color="warning">mdi-alert</v-icon>
                    </template>
                </v-list-item>
            </template>

            <!-- <v-divider inset></v-divider>

            <v-list-subheader inset>Files</v-list-subheader>

            <v-list-item v-for="file in files" :key="file.title" :subtitle="file.subtitle"
                :title="file.title">
                <template v-slot:prepend>
                    <v-avatar :color="file.color">
                        <v-icon color="white">{{ file.icon }}</v-icon>
                    </v-avatar>
                </template>

                <template v-slot:append>
                    <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
                </template>
            </v-list-item> -->
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
import type { DailyLesson, Lesson, School, WeeklyLesson } from '@/models/model';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useDate } from 'vuetify';
import WeekLessonEditor from './CalendarLessonEditor.vue';
import { onSnapshot, orderBy, query, where, type Unsubscribe } from 'firebase/firestore';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { nameof } from '@/models/utils';

interface LessonViewProps {
    school: School
}

interface LessonGroup {
    month: string;
    lessons: LessonProjection[];
}

interface LessonProjection {
    lessonId: string;
    date: Date;
    absent: boolean;
}

const date = useDate()
const props = defineProps<LessonViewProps>();
const dailyLessonsRef = useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS);
const weekLessonsRef = useDB<WeeklyLesson>(DatabaseRef.WEEK_LESSONS);
const subscriptions: Unsubscribe[] = [];

const programmedLessons: Ref<WeeklyLesson[]> = ref([]);
const dailyLessons: Ref<DailyLesson[]> = ref([]);
const lessonGroups: Ref<LessonGroup[]> = ref([]);
const loadingLessons = ref(false);
const loadingCalendar = ref(false);

const loading = computed(() => props.school == undefined || loadingLessons.value || loadingCalendar.value);
watch(props.school, () => loadLessonGroup())

async function loadLessonGroup() {
    // 1. Load all the existing lessons and the calendar.
    await loadDailyLessons();
    await loadCalendar();

    // 2. Find the last done lesson and all lessons that have at least one 'ABSENT' status.
    const doneLessons = dailyLessons.value.filter((lesson) => {
        return lesson.status === 'PRESENT' || lesson.status === 'ABSENT' || lesson.status === 'CANCELLED';
    });

    // Get the last done lesson by finding the most recent 'PRESENT' or 'ABSENT' lesson.
    const lastDoneLesson = doneLessons.reduce((lastLesson, currentLesson) => {
        return (lastLesson.createdAt.seconds > currentLesson.createdAt.seconds) ? lastLesson : currentLesson;
    }, doneLessons[0]);

    // Find all lessons that contain at least one 'ABSENT' status.
    const absentLessons = dailyLessons.value.filter((lesson) => lesson.status === 'ABSENT');

    // Create a list of lessons that includes the last done lesson and all absent lessons.
    const selectedLessons: Lesson[] = [];
    if (lastDoneLesson) {
        selectedLessons.push(lastDoneLesson);
    }
    selectedLessons.push(...absentLessons);

    // 3. Now, let's add the upcoming n lessons from the calendar (week lessons).
    const upcomingLessons: Lesson[] = [];
    const n = 5;  // Number of upcoming lessons to fetch
    programmedLessons.value.forEach((weekLesson) => {
        if (upcomingLessons.length < n) {
            weekLesson.schedule.forEach((scheduledLesson) => {
                const newLesson: Lesson = {
                    studentId: scheduledLesson.studentId,
                    time: scheduledLesson.time,
                    schoolId: weekLesson.schoolId,
                    status: 'NONE',  // Set as default; real status can be assigned later
                    createdAt: weekLesson.createdAt,
                    updatedAt: weekLesson.updatedAt,
                };
                upcomingLessons.push(newLesson);
            });
        }
    });

    // Add the next 'n' upcoming lessons to the selected list.
    selectedLessons.push(...upcomingLessons.slice(0, n));

    // 4. Now, group the lessons by month.
    const groupedLessons: { [key: string]: Lesson[] } = {}; // Object to group lessons by month
    selectedLessons.forEach((lesson) => {
        const lessonMonth = new Date(lesson.createdAt.seconds * 1000).toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!groupedLessons[lessonMonth]) {
            groupedLessons[lessonMonth] = [];
        }
        groupedLessons[lessonMonth].push(lesson);
    });

    // Convert the groupedLessons object into an array of LessonGroup.
    lessonGroups.value = Object.keys(groupedLessons).map((month) => {
        return {
            month,
            lessons: groupedLessons[month]
        };
    });
}

async function loadDailyLessons() {
    loadingLessons.value = true;

    const start = date.addMonths(new Date(), -12);

    // 1. Query to get DailyLesson documents by schoolId from a year ago untill now and order them by date (descending)
    const dailyLessonsQuery = query(
        dailyLessonsRef,
        where(nameof<DailyLesson>('schoolId'), '==', props.school.id),
        where(nameof<DailyLesson>('date'), '>=', start),
        orderBy(nameof<DailyLesson>('date'), 'desc')  // Sort by the lesson date in descending order
    );

    const unsubscribeStudents = onSnapshot(dailyLessonsQuery, (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        dailyLessons.value = data;
        loadingLessons.value = false;
        console.log("Current data: ", snapshot, data);
    }, (error) => {
        loadingLessons.value = false;
        console.error(error);
    }, () => {
        console.log("loadStudents completitions")
    });
    subscriptions.push(unsubscribeStudents);
}


async function loadCalendar() {

    loadingCalendar.value = true;
    const unsub = onSnapshot(query(weekLessonsRef, where(nameof<WeeklyLesson>('schoolId'), '==', props.school.id)), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        programmedLessons.value = data;
        loadingCalendar.value = false;
        console.log("Current data: ", snapshot, data);
    }, (error) => {
        loadingCalendar.value = false;
        console.error(error);
    });

    subscriptions.push(unsub);
}

onMounted(async () => {
    await loadLessonGroup();
})

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
}) 
</script>