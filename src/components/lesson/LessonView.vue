<template>
    <v-card title="Lezioni" elevation="3" :loading="loading">

        <template v-slot:append>
            <v-btn icon="mdi-refresh" variant="text" :disabled="!school || computingLessonGroups"
                @click="loadLessonGroup"></v-btn>
            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-pencil" variant="text" v-bind="activatorProps" :disabled="!school"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <WeekLessonEditor :school="school" @close="isActive.value = false; loadLessonGroup()">
                    </WeekLessonEditor>
                </template>
            </v-dialog>
        </template>

        <v-list lines="two">
            <template v-for="lg of lessonGroups" :key="lg.month">
                <v-list-subheader inset>{{ lg.month }}</v-list-subheader>

                <v-list-item v-for="lesson in lg.lessons" :key="lesson.date.toString()" :title="lesson.date.format()"
                    @click="routeToDailyLesson(lesson)" :baseColor="lesson.next ? 'primary' : ''">
                    <template v-slot:prepend>
                        <v-avatar :color="lesson.next ? 'primary' : lesson.absent ? 'warning' : 'grey-lighten-1'">
                            <v-icon color="white">mdi-calendar</v-icon>
                        </v-avatar>
                    </template>

                    <template v-slot:append v-if="lesson.absent">
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
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { months, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type ScheduledLesson, type School, type WeeklyLesson } from '@/models/model';
import { dateFormat, nameof, nextDay, toDate } from '@/models/utils';
import { addDoc, getDocs, orderBy, query, Timestamp, where, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useDate } from 'vuetify';
import WeekLessonEditor from './CalendarLessonEditor.vue';
import { useRouter } from 'vue-router';

interface LessonViewProps {
    school: School
}

interface LessonGroup {
    month: string;
    lessons: LessonProjection[];
}

interface LessonProjection {
    date: yyyyMMdd;
    next: boolean;
    lessonId?: string;
    absent?: boolean;
    lessons: ScheduledLesson[];
}

const router = useRouter();
const date = useDate()
const props = defineProps<LessonViewProps>();
const dailyLessonsRef = useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS);
const weekLessonsRef = useDB<WeeklyLesson>(DatabaseRef.WEEKLY_LESSONS);
const subscriptions: Unsubscribe[] = [];

const programmedLessons: Ref<WeeklyLesson[]> = ref([]);
const dailyLessons: Ref<DailyLesson[]> = ref([]);
const lessonGroups: Ref<LessonGroup[]> = ref([]);
const loadingLessons = ref(false);
const loadingCalendar = ref(false);
const computingLessonGroups = ref(false);

const loading = computed(() => props.school == undefined || loadingLessons.value || loadingCalendar.value);
watch(props.school, () => loadLessonGroup())

async function routeToDailyLesson(lessonGroup: LessonProjection) {
    let dailyLessonId;

    if (lessonGroup.lessonId == undefined) {
        // create new daily lesson
        const dailyLesson: Partial<DailyLesson> = {
            date: lessonGroup.date.toIyyyyMMdd(),
            schoolId: props.school.id,
            lessons: lessonGroup.lessons.map(l => ({
                status: 'NONE',
                studentId: l.studentId,
                time: l.time,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now()
            }))
        }
        // store it
        const docRef = await addDoc(dailyLessonsRef, dailyLesson);
        console.log("Document (week lessons) written with ID: ", docRef.id);
        dailyLessonId = docRef.id;
    } else {
        dailyLessonId = lessonGroup.lessonId;
    }
    router.push(`/lesson/${lessonGroup.lessonId}`);
}

async function loadLessonGroup() {
    computingLessonGroups.value = true;

    // 1. Load all the existing lessons and the calendar.
    await loadDailyLessons();
    await loadCalendar();

    const lessonProjections: LessonProjection[] = [];

    // 2. Filter the lessons within each DailyLesson to find those with 'ABSENT' status
    for (const dailyLesson of dailyLessons.value) {
        if (dailyLesson.lessons.findIndex(lesson => lesson.status === 'ABSENT') != -1) {
            lessonProjections.push({ lessonId: dailyLesson.id, date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date), absent: true, next: false, lessons: dailyLesson.lessons });
        }
    }

    // 3. If lessonProjections is Empty add the last done lesson (if there is)
    if (lessonProjections.length == 0) {
        const lastDailyLesson = dailyLessons.value?.[0];
        if (lastDailyLesson != undefined)
            lessonProjections.push({ lessonId: lastDailyLesson.id, date: yyyyMMdd.fromIyyyyMMdd(lastDailyLesson.date), absent: false, next: false, lessons: lastDailyLesson.lessons })
    }

    // 6. Now, let's add the upcoming n lessons from the calendar (week lessons).
    const n = lessonProjections.length + 4;  // Number of upcoming week lessons to add
    let startingDay = new Date();
    while (programmedLessons.value.length > 0 && lessonProjections.length < n) {
        programmedLessons.value.forEach((weekLesson) => {
            const d = nextDay(startingDay, weekLesson.dayOfWeek)
            lessonProjections.push({ date: yyyyMMdd.fromDate(d), next: false, lessons: weekLesson.schedule })
        });
        startingDay = date.addDays(startingDay, 7) as Date;
    }

    // 7. Now, group the lessons by month.
    const groupedLessons: { [key: number]: LessonProjection[] } = {}; // Object to group lessons by month
    let nextFound = false;
    const today = new Date(new Date().toDateString());
    lessonProjections.forEach((lesson) => {
        const lessonMonth = lesson.date.getMonth();
        if (!groupedLessons[lessonMonth]) {
            groupedLessons[lessonMonth] = [];
        }
        if (!nextFound && lesson.date.toDate() >= today) {
            nextFound = true;
            lesson.next = true;
        }
        groupedLessons[lessonMonth].push(lesson);
    });

    // Convert the groupedLessons object into an array of LessonGroup.
    lessonGroups.value = Object.keys(groupedLessons).map((month) => {
        const m = parseInt(month);
        return {
            month: months[m],
            lessons: groupedLessons[m]
        };
    });

    computingLessonGroups.value = false;
}

async function loadDailyLessons() {
    loadingLessons.value = true;

    const start = date.addMonths(new Date(), -12);
    const today = new Date(new Date().toDateString());
    // 1. Query to get DailyLesson documents by schoolId from a year ago untill now and order them by date (descending)
    const dailyLessonsQuery = query(
        dailyLessonsRef,
        where(nameof<DailyLesson>('schoolId'), '==', props.school.id),
        where(nameof<DailyLesson>('date'), '>=', start),
        where(nameof<DailyLesson>('date'), '<=', today),
        orderBy(nameof<DailyLesson>('date'), 'desc')  // Sort by the lesson date in descending order
    );

    const snapshot = await getDocs(dailyLessonsQuery)
    const data = snapshot.docs.map(doc => doc.data());
    dailyLessons.value = data;
    loadingLessons.value = false;
    console.log("Current data: ", snapshot, data);
}


async function loadCalendar() {
    loadingCalendar.value = true;

    const snapshot = await getDocs(query(weekLessonsRef, where(nameof<WeeklyLesson>('schoolId'), '==', props.school.id)));
    const data = snapshot.docs.map(doc => doc.data())
    programmedLessons.value = data;
    loadingCalendar.value = false;
    console.log("Current data: ", snapshot, data);
}

onMounted(async () => {
    await loadLessonGroup();
})

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
}) 
</script>