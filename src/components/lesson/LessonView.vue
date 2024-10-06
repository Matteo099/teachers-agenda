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
import type { Lesson, School, WeekLesson } from '@/models/model';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useDate } from 'vuetify';
import WeekLessonEditor from './CalendarLessonEditor.vue';
import { onSnapshot, query, where, type Unsubscribe } from 'firebase/firestore';
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
const lessonsRef = useDB<Lesson>(DatabaseRef.LESSONS);
const weekLessonsRef = useDB<WeekLesson>(DatabaseRef.WEEK_LESSONS);
const subscriptions: Unsubscribe[] = [];

const programmedLessons: Ref<WeekLesson[]> = ref([]);
const lessons: Ref<Lesson[]> = ref([]);
const lessonGroups: Ref<LessonGroup[]> = ref([]);
const loadingLessons = ref(false);
const loadingCalendar = ref(false);

const loading = computed(() => props.school == undefined || loadingLessons.value || loadingCalendar.value);
watch(props.school, () => loadLessonGroup())

async function loadLessonGroup() {
    await loadLessons();
    await loadCalendar();

    programmedLessons.value.forEach(pl => {
        // pl.
    })
}

async function loadLessons() {
    // load done lessons
    // compute weeklessons

    loadingLessons.value = true;
    const unsubscribeStudents = onSnapshot(query(lessonsRef, where(nameof<Lesson>('schoolId'), '==', props.school.id)), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        lessons.value = data;
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
    const unsub = onSnapshot(query(weekLessonsRef, where(nameof<WeekLesson>('schoolId'), '==', props.school.id)), (snapshot) => {
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