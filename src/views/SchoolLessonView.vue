<template>
    <v-card v-if="school" class="pa-3" :title="school.name" elevation="0">
        <template v-slot:prepend>
            <BackButton></BackButton>
        </template>

        <v-container>
            <v-progress-linear :active="loading" color="primary" indeterminate></v-progress-linear>
            <ScheduleXCalendar :calendar-app="calendarApp">
                <template #eventModal="{ calendarEvent }">
                    <v-card elevation="3" :title="calendarEvent.title" :text="calendarEvent.description">
                        <template v-slot:subtitle>
                            <v-icon>mdi-clock-outline</v-icon>
                            {{ dateFormat(calendarEvent.start.split(' ')[0]) + ' ⋅ ' + calendarEvent.start.split(' ')[1]
                                + ' - ' + calendarEvent.end.split(' ')[1]}}
                        </template>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text="vai" @click="goto(calendarEvent.data.dailyLessonId)"></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </ScheduleXCalendar>
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
import BackButton from '@/components/inputs/BackButton.vue';
import { Time, yyyyMMdd, type CalendarEventExt } from '@/models/model';
import type { ID } from '@/models/repositories/abstract-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { LessonGroupService } from '@/models/services/lesson-group-service';
import { StudentService } from '@/models/services/student-service';
import { dateFormat } from '@/models/utils';
import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
    viewWeek,
} from '@schedule-x/calendar';
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { ScheduleXCalendar } from '@schedule-x/vue';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDocument } from 'vuefire';

interface DateRange {
    start: string,
    end: string
}

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id as string);
const schoolSource = SchoolRepository.instance.observe(id);
const school = useDocument(schoolSource)

const lessons: CalendarEventExt[] = [];
const loading = ref(false);

const eventsServicePlugin = createEventsServicePlugin();
const eventModal = createEventModalPlugin();
const calendarControls = createCalendarControlsPlugin()
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
    locale: 'it-IT',
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    defaultView: viewWeek.name,
    events: [],
    plugins: [eventsServicePlugin, eventModal, calendarControls],
    callbacks: {
        beforeRender($app) {
            const range = $app.calendarState.range.value
            loadLessons(range);
        },
        onRangeUpdate(range) {
            loadLessons(range);
        }
    }
})

watch(school, () => loadLessons());

async function goto(dailyLessonId: ID) {
    eventModal.close()
    router.push(`/lesson/${dailyLessonId}`);
}

function updateCalendarEvents() {
    lessons.forEach(event => {
        if (!event._options) event._options = {};

        if (eventsServicePlugin.get(event.id)) {
            eventsServicePlugin.update(event);
        } else eventsServicePlugin.add(event);
    });

    eventsServicePlugin.getAll().forEach(e => {
        const toDelete = lessons.findIndex(ie => ie.id == e.id) == -1;
        if (toDelete) eventsServicePlugin.remove(e.id);
    });
}

async function loadLessons(range?: DateRange | null) {
    range ??= calendarControls.getRange();
    if (!range || !school.value) return;

    lessons.length = 0;
    loading.value = true;

    const from = {
        date: yyyyMMdd.fromDate(new Date(range.start)),
        time: Time.fromHHMM(range.start.split(" ")[1])
    }
    const to = {
        date: yyyyMMdd.fromDate(new Date(range.end)),
        time: Time.fromHHMM(range.end.split(" ")[1])
    }

    const _lessons = await LessonGroupService.instance.getCalendarLessons(school.value.id, from, to);
    //@ts-ignore
    const studentIds: string[] = Array.from(new Set(_lessons.map(l => l.title).filter(Boolean)));
    const students = await StudentService.instance.getStudentsOfSchoolWithIds(school.value.id, studentIds);
    _lessons.forEach(l => {
        const st = students.find(s => s.id == l.title);
        if (st) {
            l.title = st.name + " " + st.surname;
        }
    });
    lessons.push(..._lessons);
    console.log(_lessons);

    updateCalendarEvents();
    loading.value = false;
}
</script>