<template>
    <v-card title="Lezioni" elevation="3" :loading="loading">

        <template v-slot:append>
            <v-dialog transition="dialog-bottom-transition" class="justify-center">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-calendar" variant="text" :disabled="!school" v-bind="activatorProps"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card maxWidth="400px">
                        <v-card-text>
                            <v-row class="justify-center">
                                <v-col cols="auto">
                                    <v-date-picker v-model="dailyLessonDate"></v-date-picker>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text="Chiudi" @click="isActive.value = false"></v-btn>
                            <v-btn text="Ok" color="primary" @click="routeToDailyLesson(dailyLessonDate!)"
                                :disabled="!dailyLessonDate"></v-btn>
                        </v-card-actions>
                    </v-card>

                </template>
            </v-dialog>


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
import { LessonStatus, months, yyyyMMdd, type DailyLesson, type ScheduledLesson, type School, type WeeklyLesson } from '@/models/model';
import { nameof, nextDay } from '@/models/utils';
import { addDoc, getDocs, orderBy, query, Timestamp, where, type Unsubscribe } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';
import WeekLessonEditor from './CalendarLessonEditor.vue';

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
const dailyLessonDate: Ref<Date | undefined> = ref();

const loading = computed(() => props.school == undefined || loadingLessons.value || loadingCalendar.value);
watch(props.school, () => loadLessonGroup())

async function routeToDailyLesson(lessonGroup: LessonProjection | Date) {
    if (lessonGroup instanceof Date) {
        createDailyLesson(lessonGroup);
    } else {
        let dailyLessonId: string;

        console.log(lessonGroup);

        if (lessonGroup.lessonId == undefined) {
            // create new daily lesson
            const dailyLesson: Partial<DailyLesson> = {
                date: lessonGroup.date.toIyyyyMMdd(),
                schoolId: props.school.id,
                lessons: lessonGroup.lessons.map(l => ({
                    lessonId: uuidv4(),
                    status: LessonStatus.NONE,
                    studentId: l.studentId,
                    startTime: l.startTime,
                    endTime: l.endTime,
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now()
                }))
            }
            // store it
            const docRef = await addDoc(dailyLessonsRef, dailyLesson);
            console.log("Document (daily lessons) written with ID: ", docRef.id);
            dailyLessonId = docRef.id;
        } else {
            dailyLessonId = lessonGroup.lessonId;
        }
        router.push(`/lesson/${dailyLessonId}`);
    }
}

async function createDailyLesson(d: Date) {
    const parseDate = yyyyMMdd.fromDate(d).toIyyyyMMdd();
    const dailyLessonsQuery = query(
        dailyLessonsRef,
        where(nameof<DailyLesson>('schoolId'), '==', props.school.id),
        where(nameof<DailyLesson>('date'), '==', parseDate),
    );

    const snapshot = await getDocs(dailyLessonsQuery)
    const data = snapshot.docs.map(doc => doc.data());
    console.log(data);
    let dailyLesson: Partial<DailyLesson> = data?.[0];
    if (dailyLesson?.id == undefined) {
        const weeklyLesson = programmedLessons.value.find(l => l.dayOfWeek == d.getDay())
        if (weeklyLesson) {
            // create new daily lesson
            dailyLesson = {
                date: parseDate,
                schoolId: props.school.id,
                lessons: weeklyLesson.schedule.map(l => ({
                    lessonId: uuidv4(),
                    status: LessonStatus.NONE,
                    studentId: l.studentId,
                    startTime: l.startTime,
                    endTime: l.endTime,
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now()
                }))
            }
        } else {
            dailyLesson = {
                date: parseDate,
                schoolId: props.school.id,
                lessons: []
            }
        }
        // store it
        const docRef = await addDoc(dailyLessonsRef, dailyLesson);
        dailyLesson.id = docRef.id;
        console.log("Document (daily lessons) written with ID: ", docRef.id);
    }
    router.push(`/lesson/${dailyLesson.id}`);
}

async function loadLessonGroup() {
    computingLessonGroups.value = true;

    // 1. Load all the existing lessons and the calendar.
    await loadDailyLessons();
    await loadCalendar();

    const lessonProjections: LessonProjection[] = [];

    // 2. Filter the lessons within each DailyLesson to find those with 'ABSENT' status
    for (const dailyLesson of dailyLessons.value) {
        if (dailyLesson.lessons.findIndex(lesson => lesson.status === LessonStatus.ABSENT) != -1) {
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
            const date = yyyyMMdd.fromDate(d);
            if (lessonProjections.find(l => l.date.equals(date)) == undefined)
                lessonProjections.push({ date, next: false, lessons: weekLesson.schedule })
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

    const today = new Date(new Date().toDateString());
    const startingdate = date.addMonths(today, -12) as Date;
    const start = yyyyMMdd.fromDate(startingdate).toIyyyyMMdd();
    // 1. Query to get DailyLesson documents by schoolId from a year ago untill now and order them by date (descending)
    const dailyLessonsQuery = query(
        dailyLessonsRef,
        where(nameof<DailyLesson>('schoolId'), '==', props.school.id),
        where(nameof<DailyLesson>('date'), '>=', start),
        // where(nameof<DailyLesson>('date'), '<=', today),
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

<style scoped>
.v-dialog>.v-overlay__content {
    width: unset !important;
}
</style>