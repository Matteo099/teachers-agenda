<template>
    <v-card title="Lezioni" elevation="3" :loading="!calendarLesson">

        <template v-slot:append>
            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-pencil" variant="text" v-bind="activatorProps" :disabled="!calendarLesson"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <WeekLessonEditor v-if="calendarLesson" :schoolId="schoolId" :calendarLesson="calendarLesson"
                        @close="isActive.value = false"></WeekLessonEditor>
                </template>
            </v-dialog>
        </template>

        <v-list lines="two">
            <v-list-subheader inset>Settembre</v-list-subheader>

            <v-list-item v-for="lesson in lessons" :key="lesson.date" :title="date.format(lesson.date, 'keyboardDate')"
                :to="'/lesson/' + lesson.date" :baseColor="lesson.next ? 'primary' : ''">
                <template v-slot:prepend>
                    <v-avatar :color="lesson.next ? 'primary' : lesson.alert ? 'warning' : 'grey-lighten-1'">
                        <v-icon color="white">mdi-calendar</v-icon>
                    </v-avatar>
                </template>

                <template v-slot:append v-if="lesson.alert">
                    <v-icon color="warning">mdi-alert</v-icon>
                </template>
            </v-list-item>

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
import { onMounted, ref, watch, type Ref } from 'vue';
import { useDate } from 'vuetify';
import type { WeekLesson } from '@/models/model';
import WeekLessonEditor from './CalendarLessonEditor.vue';

interface LessonsProps {
    schoolId: string,
    calendarLesson?: WeekLesson[]
}

const date = useDate()
const props = withDefaults(defineProps<LessonsProps>(), {
    calendarLesson(props) {
        return [];
    },
})

const lessons: Ref<any[]> = ref([]);

watch(props.calendarLesson ?? [], () => loadLessons())

async function loadCalendarLesson() {
    // ...
}

async function loadLessons() {
    if (props.calendarLesson == undefined) await loadCalendarLesson();

    const today = new Date();
    const res: { date: Date, alert?: boolean, next?: boolean }[] = [
        {
            date: new Date(2024, 8, 23),
            alert: true,
        },
        {
            date: new Date(2024, 8, 26),
        },
        {
            date: new Date(2024, 9, 7),
        },
        {
            date: new Date(2024, 9, 14),
        }
    ];

    let nextLesson = { date: Infinity, index: -1 }
    res.forEach((lesson, index) => {
        lesson.next = false;
        if (date.isAfter(lesson.date, today)) {
            const diff = date.getDiff(lesson.date, today);
            if (diff < nextLesson.date) {
                nextLesson = {
                    date: diff,
                    index
                };
            }
        }
    });

    if (nextLesson.index !== -1)
        res[nextLesson.index].next = true

    lessons.value = res;
}

onMounted(async () => {
    await loadLessons();
})
</script>