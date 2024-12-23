<template>
    <v-card v-if="school" class="pa-3" :title="school.name" elevation="0">
        <template v-slot:prepend>
            <BackButton></BackButton>
        </template>

        <v-container>
            <ScheduleXCalendar :calendar-app="calendarApp">
            </ScheduleXCalendar>
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
import BackButton from '@/components/inputs/BackButton.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { Time, yyyyMMdd, type CalendarEventExt, type DailyLesson, type School } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { nameof } from '@/models/utils';
import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar';

import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { ScheduleXCalendar } from '@schedule-x/vue';
import { doc, where } from 'firebase/firestore';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDocument } from 'vuefire';

interface DateRange {
    start: string,
    end: string
}

const route = useRoute()
const schoolsRef = useDB<School>(DatabaseRef.SCHOOLS);

const schoolSource = computed(() =>
    doc(schoolsRef, route.params.id as string)
)
const school = useDocument(schoolSource)
const lessons: Ref<CalendarEventExt[]> = ref([]);

const eventsServicePlugin = createEventsServicePlugin();
const eventModal = createEventModalPlugin();
const calendarControls = createCalendarControlsPlugin()
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
    locale: 'it-IT',
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [],
    plugins: [eventsServicePlugin, eventModal, calendarControls],
    callbacks: {
        onRangeUpdate(range) {
            loadLessons(range);
        }
    }
})

watch(() => lessons, () => updateCalendarEvents(), { deep: true });

function updateCalendarEvents() {
    console.log("updateCalendarEvents")

    lessons.value.forEach(event => {
        if (!event._options) event._options = {};

        if (eventsServicePlugin.get(event.id)) {
            eventsServicePlugin.update(event);
        } else eventsServicePlugin.add(event);
    });

    eventsServicePlugin.getAll().forEach(e => {
        const toDelete = lessons.value.findIndex(ie => ie.id == e.id) == -1;
        if (toDelete) eventsServicePlugin.remove(e.id);
    });
}

async function loadLessons(range?: DateRange | null) {
    range ??= calendarControls.getRange();
    if (!range || !school.value) return;

    const from = {
        date: yyyyMMdd.fromDate(new Date(range.start)),
        time: Time.fromHHMM(range.start.split(" ")[1])
    }
    const to = {
        date: yyyyMMdd.fromDate(new Date(range.end)),
        time: Time.fromHHMM(range.end.split(" ")[1])
    }

    // retireve all the dailyLesson between from and to
    const _query1 = where(nameof<DailyLesson>('schoolId'), '==', school.value.id);
    const _query2 = where(nameof<DailyLesson>('date'), '>=', from.date.toIyyyyMMdd());
    const _query3 = where(nameof<DailyLesson>('date'), '<=', to.date.toIyyyyMMdd());
    const dailyLessons = await DailyLessonRepository.instance.getAll(_query1, _query2, _query3);
    lessons.value = dailyLessons.flatMap(dl => {
        const date = yyyyMMdd.fromIyyyyMMdd(dl.date).toIyyyyMMdd("-", 1);
        return dl.lessons.map(l => {
            return {
                id: l.lessonId,
                title: l.studentId,
                start: date + " " + Time.fromITime(l.startTime).format(),
                end: date + " " + Time.fromITime(l.endTime).format(),
            }
        });
    });

    console.log("loadLessons", range, dailyLessons, lessons.value);

    // compute the weekly lesson according to from and to
    // more...?
}

onMounted(async () => {
    loadLessons();
})
</script>