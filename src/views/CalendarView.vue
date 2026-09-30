<template>
    <v-card class="pa-3" title="Calendario delle lezioni" elevation="0">
        <template v-slot:prepend>
            <BackButton :delta="deltaHistory"></BackButton>
        </template>
        <v-card-text>
            <v-row class="mt-1 mb-3 justify-center align-center">
                <v-col cols="12" md="8">
                    <v-select variant="outlined" chips label="Scuole" v-model="selectedSchools" :items="schools"
                        multiple :item-title="schoolTitle" item-value="id" :loading="loadingSchools"
                        hide-details></v-select>
                </v-col>
                <v-col cols="auto">
                    <v-btn @click="toggleTrim" hide-details>
                        <v-fab-transition>
                            <v-icon v-if="!trimmed">mdi-content-cut</v-icon>
                            <v-icon v-else>mdi-arrow-expand-vertical</v-icon>
                        </v-fab-transition>
                    </v-btn>
                </v-col>
                <v-col cols="auto" class="calendar-mobile-navigation d-flex ga-1">
                    <v-btn icon="mdi-chevron-left" variant="text" aria-label="Periodo precedente"
                        @click="changePeriod(-1)"></v-btn>
                    <v-btn icon="mdi-calendar-today" variant="text" aria-label="Torna a oggi"
                        @click="goToToday"></v-btn>
                    <v-btn icon="mdi-chevron-right" variant="text" aria-label="Periodo successivo"
                        @click="changePeriod(1)"></v-btn>
                </v-col>
            </v-row>
            <v-progress-linear :active="loading" color="primary" indeterminate></v-progress-linear>
            <ScheduleXCalendar :calendar-app="calendarApp">
                <template #eventModal="{ calendarEvent }">
                    <v-card class="lesson-event-modal" elevation="3" :title="calendarEvent.title"
                        :text="calendarEvent.description">
                        <template v-slot:subtitle>
                            <v-icon>mdi-clock-outline</v-icon>
                            {{ dateFormat(calendarEvent.start.split(' ')[0]) + ' ⋅ ' + calendarEvent.start.split(' ')[1]
                                + ' - ' + calendarEvent.end.split(' ')[1] }}
                        </template>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text="vai" @click="goto(calendarEvent.data)"></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </ScheduleXCalendar>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import BackButton from '@/components/inputs/BackButton.vue';
import { Time, yyyyMMdd, type CalendarEventExt, type School } from '@/models/model';
import type { ID } from '@/models/repositories/abstract-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { LessonGroupService } from '@/models/services/lesson-group-service';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { StudentService } from '@/models/services/student-service';
import { dateFormat, getCalendarsColor } from '@/models/utils';
import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
    viewWeek
} from '@schedule-x/calendar';
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { ScheduleXCalendar } from '@schedule-x/vue';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTheme } from 'vuetify';

interface DateRange {
    start: string,
    end: string
}

const route = useRoute()
const router = useRouter()
const filters = computed(() => route.query.filters as string);
const theme = useTheme()

const schools: Ref<School[]> = ref([]);
const lessons: CalendarEventExt[] = [];
const loading = ref(false);
const loadingSchools = ref(false);
const deltaHistory = ref(1);
const selectedSchools: Ref<string[]> = ref([]);
const start = ref("00:00");
const end = ref("24:00");
let lessonsLoadRequest = 0;

const eventsServicePlugin = createEventsServicePlugin();
const eventModal = createEventModalPlugin();
const calendarControls = createCalendarControlsPlugin()
const calendarApp = createCalendar({
    locale: 'it-IT',
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    defaultView: viewWeek.name,
    events: [],
    weekOptions: { nDays: 6 },
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
});

watch(route, () => deltaHistory.value++);
watch(selectedSchools, () => updateQueryRoute());
watch(filters, () => updateFilters(), { immediate: true });
watch(schools, () => updateFilters());
watch(theme.global.name, updateCalendarTheme);
const trimmed = computed(() => start.value == "08:00");

function schoolTitle(school: School): string {
    return school.city ? `${school.name} - ${school.city}` : school.name;
}

function updateCalendarTheme() {
    if (!calendarApp) return;

    if (theme.global.name.value == 'myCustomDarkTheme') {
        calendarApp.setTheme("dark");
    } else {
        calendarApp.setTheme("light");
    }
}

function toggleTrim() {
    if (!trimmed.value) {
        start.value = "08:00";
        end.value = "22:00";
    } else {
        start.value = "00:00";
        end.value = "24:00";
    }
    calendarControls.setDayBoundaries({ start: start.value, end: end.value });
    const opt = calendarControls.getWeekOptions();
    const range = parseInt(end.value.split(":")[0]!) - parseInt(start.value.split(":")[0]!);
    calendarControls.setWeekOptions({ ...opt, gridHeight: Math.max(1000 * range / 24, 400) });
}

function changePeriod(delta: number) {
    const currentDate = new Date(calendarControls.getDate() + "T12:00:00");
    const view = calendarControls.getView();

    if (view === 'day') {
        currentDate.setDate(currentDate.getDate() + delta);
    } else {
        currentDate.setMonth(currentDate.getMonth() + delta);
    }

    calendarControls.setDate(currentDate.toISOString().slice(0, 10));
}

function goToToday() {
    calendarControls.setDate(new Date().toISOString().slice(0, 10));
}

function updateQueryRoute() {
    if (selectedSchools.value.length == 0)
        router.push("/calendar")
    else
        router.push("/calendar?filters=" + selectedSchools.value.join(","))
}

async function goto(data: { dailyLessonId?: ID, schoolId?: ID, date?: string }) {
    eventModal.close()
    let dailyLessonId = data.dailyLessonId;
    if (!dailyLessonId && data.schoolId && data.date) {
        dailyLessonId = await DailyLessonService.instance.getOrCreateDailyLessonId(
            data.schoolId, yyyyMMdd.fromScheduleX(data.date).toDate());
    }
    if (!dailyLessonId) return;
    router.push(`/lesson/${dailyLessonId}`);
}

function updateCalendarEvents() {
    if (!calendarApp) return;

    const uniqueLessons = Array.from(new Map(lessons.map(event => [event.id, event])).values());
    uniqueLessons.forEach(event => {
        if (!event._options) event._options = {};

        if (eventsServicePlugin.get(event.id)) {
            eventsServicePlugin.update(event);
        } else eventsServicePlugin.add(event);
    });

    eventsServicePlugin.getAll().forEach(e => {
        const toDelete = uniqueLessons.findIndex(ie => ie.id == e.id) == -1;
        if (toDelete) eventsServicePlugin.remove(e.id);
    });
}

function updateFilters() {
    selectedSchools.value = filters.value?.split(",") ?? schools.value.map(s => s.id);
    loadLessons();
}

async function loadLessons(range?: DateRange | null) {
    range ??= calendarControls.getRange();
    if (!range) return;

    const request = ++lessonsLoadRequest;
    const loadedLessons: CalendarEventExt[] = [];
    loading.value = true;

    const from = {
        date: yyyyMMdd.fromScheduleX(range.start),
        time: Time.fromHHMM(range.start.split(" ")[1]!)
    }
    const to = {
        date: yyyyMMdd.fromScheduleX(range.end),
        time: Time.fromHHMM(range.end.split(" ")[1]!)
    }
    // Keep Sunday out of the normal week view, but load one extra day so a
    // Sunday lesson can bring the column back when it actually exists.
    if (to.date.toDate().getDay() === 6) {
        const nextDate = to.date.toDate();
        nextDate.setDate(nextDate.getDate() + 1);
        to.date = yyyyMMdd.fromDate(nextDate);
    }

    for (const schoolId of selectedSchools.value) {
        const _lessons = await LessonGroupService.instance.getCalendarLessons(schoolId, from, to);
        //@ts-ignore
        const studentIds: string[] = Array.from(new Set(_lessons.map(l => l.title).filter(Boolean)));
        const students = await StudentService.instance.getStudentsOfSchoolWithIds(schoolId, studentIds);
        _lessons.forEach(l => {
            const st = students.find(s => s.id == l.title);
            if (st) {
                l.title = st.name + " " + st.surname;
            }
        });
        // Do not show historical lessons whose student was deleted.
        // Their records remain stored for historical consistency, but they
        // must not appear as anonymous events in the general calendar.
        loadedLessons.push(..._lessons.filter(l => students.some(s => s.id == l.data?.studentId || s.id == l.title)));
    }

    // A range/filter change can start another load while this one is waiting
    // on Firestore. Only the newest response may update the shared event list.
    if (request !== lessonsLoadRequest) return;
    lessons.length = 0;
    lessons.push(...Array.from(new Map(loadedLessons.map(event => [event.id, event])).values()));
    const options = calendarControls.getWeekOptions();
    calendarControls.setWeekOptions({
        ...options, nDays: lessons.some(event => {
            const date = event.start.split(' ')[0]!;
            return yyyyMMdd.fromScheduleX(date).toDate().getDay() === 0;
        }) ? 7 : 6
    });
    updateCalendarEvents();
    loading.value = false;
}

async function loadSchools() {
    loadingSchools.value = true;
    schools.value = await SchoolRepository.instance.getAll();
    const calendars = getCalendarsColor(...schools.value);
    calendarControls.setCalendars(calendars);
    loadingSchools.value = false;
}

onMounted(async () => {
    toggleTrim();
    await loadSchools();
})
</script>

<style>
.lesson-event-modal .v-card-actions {
    flex-wrap: wrap;
    gap: 8px;
}

.calendar-mobile-navigation {
    display: none !important;
}

/* Schedule-X hides its date navigation when the calendar area becomes narrow. */
@media (max-width: 900px) {
    .calendar-mobile-navigation {
        display: flex !important;
    }
}

@media (max-width: 600px) {
    .lesson-event-modal {
        max-width: calc(100vw - 32px) !important;
        max-height: calc(100vh - 32px);
        overflow-y: auto;
    }

    .lesson-event-modal .v-card-actions {
        justify-content: flex-end;
    }
}
</style>
