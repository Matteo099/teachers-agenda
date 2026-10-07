<template>
    <div class="calendar-page">
        <header class="calendar-page-heading">
            <BackButton :delta="deltaHistory" />
            <span class="calendar-page-icon"><v-icon icon="mdi-calendar-month-outline" size="27" /></span>
            <div><span>Agenda</span><h1>Calendario delle lezioni</h1><p>Consulta gli appuntamenti di tutte le scuole.</p></div>
            <div class="calendar-view-choice">
                <v-btn-toggle :model-value="activeView" mandatory color="primary" @update:model-value="setCalendarView">
                    <v-btn :value="viewWeek.name">Settimana</v-btn>
                    <v-btn :value="viewMonthGrid.name">Mese</v-btn>
                    <v-btn :value="viewMonthAgenda.name">Agenda</v-btn>
                </v-btn-toggle>
                <v-menu>
                    <template #activator="{ props: activatorProps }"><v-btn icon="mdi-dots-horizontal" variant="text" aria-label="Altre viste" v-bind="activatorProps" /></template>
                    <v-list><v-list-item title="Giorno" prepend-icon="mdi-calendar-today" @click="setCalendarView('day')" /></v-list>
                </v-menu>
            </div>
        </header>
        <section class="calendar-workspace">
            <div class="calendar-toolbar">
                <div class="calendar-period-navigation">
                    <v-btn icon="mdi-chevron-left" variant="text" aria-label="Periodo precedente" @click="changePeriod(-1)" />
                    <v-dialog max-width="380">
                        <template #activator="{ props: activatorProps }"><v-btn class="calendar-period-label" variant="text" v-bind="activatorProps">{{ calendarPeriodLabel }} <v-icon icon="mdi-chevron-down" size="18" /></v-btn></template>
                        <template #default="{ isActive }"><v-card variant="flat"><v-date-picker v-model="pickerDate" width="100%" @update:model-value="goToPickedDate(); isActive.value = false" /></v-card></template>
                    </v-dialog>
                    <v-btn icon="mdi-chevron-right" variant="text" aria-label="Periodo successivo" @click="changePeriod(1)" />
                    <v-btn class="calendar-today" variant="outlined" @click="goToToday">Oggi</v-btn>
                </div>
                <div class="calendar-toolbar-actions">
                    <v-menu :close-on-content-click="false">
                        <template #activator="{ props: activatorProps }"><v-btn prepend-icon="mdi-school-outline" variant="tonal" color="primary" v-bind="activatorProps">Scuole <span class="calendar-filter-count">{{ selectedSchools.length }}</span></v-btn></template>
                        <v-card class="calendar-school-menu" variant="flat"><v-card-text><v-select variant="outlined" chips label="Scuole visualizzate" v-model="selectedSchools" :items="schools"
                            multiple :item-title="schoolTitle" item-value="id" :loading="loadingSchools" hide-details density="comfortable" /></v-card-text></v-card>
                    </v-menu>
                    <v-btn :icon="trimmed ? 'mdi-arrow-expand-vertical' : 'mdi-content-cut'" variant="text"
                        :aria-label="trimmed ? 'Mostra tutte le ore' : 'Mostra solo le ore di lezione'"
                        :title="trimmed ? 'Tutte le ore' : 'Ore di lezione'" @click="toggleTrim" />
                </div>
            </div>
            <v-progress-linear :active="loading" color="primary" indeterminate />
            <AppCalendar :calendar-app="calendarApp" hide-header />
            <v-dialog v-model="eventDetailsOpen" max-width="440">
                <v-card v-if="selectedEvent" class="lesson-event-modal" variant="flat">
                    <div class="lesson-event-heading">
                        <span class="lesson-event-avatar"><v-icon icon="mdi-account-music-outline" size="25" /></span>
                        <div class="lesson-event-heading-text"><span class="lesson-event-eyebrow">Dettagli lezione</span><h3>{{ selectedEvent.title }}</h3></div>
                        <v-btn icon="mdi-close" variant="text" size="small" aria-label="Chiudi dettagli" @click="eventDetailsOpen = false" />
                    </div>
                    <div class="lesson-event-details">
                        <div class="lesson-event-detail"><v-icon icon="mdi-school-outline" size="19" /><div><span>Scuola</span><strong>{{ selectedEvent.description || 'Scuola' }}</strong></div></div>
                        <div class="lesson-event-detail"><v-icon icon="mdi-calendar-outline" size="19" /><div><span>Data</span><strong>{{ dateFormat(selectedEvent.start.split(' ')[0]!) }}</strong></div></div>
                        <div class="lesson-event-detail"><v-icon icon="mdi-clock-outline" size="19" /><div><span>Orario</span><strong>{{ selectedEvent.start.split(' ')[1] }}–{{ selectedEvent.end.split(' ')[1] }}</strong></div></div>
                        <div v-if="selectedEvent.data?.statusColor && statusColors[selectedEvent.data.statusColor as StatusColorKey]" class="lesson-event-detail"><v-icon icon="mdi-check-circle-outline" size="19" /><div><span>Stato</span><strong><span class="lesson-event-status" :class="`status-${selectedEvent.data.statusColor}`">{{ statusColors[selectedEvent.data.statusColor as StatusColorKey].short }} · {{ statusColors[selectedEvent.data.statusColor as StatusColorKey].label }}</span></strong></div></div>
                    </div>
                    <v-card-actions class="lesson-event-actions"><v-btn variant="text" @click="eventDetailsOpen = false">Chiudi</v-btn><v-btn color="primary" variant="flat" append-icon="mdi-arrow-right" @click="goto(selectedEvent.data)">Apri lezione</v-btn></v-card-actions>
                </v-card>
            </v-dialog>
            <div class="calendar-legend"><span v-for="state in stateLegend" :key="state.short"><i :style="{ backgroundColor: state.background, borderColor: state.foreground }"></i>{{ state.label }} ({{ state.short }})</span></div>
        </section>
    </div>
</template>

<script setup lang="ts">
import BackButton from '@/components/inputs/BackButton.vue';
import AppCalendar from '@/components/calendar/AppCalendar.vue';
import { calendarEventContent } from '@/components/calendar/calendarEventContent';
import { Time, yyyyMMdd, type CalendarEventExt, type School } from '@/models/model';
import type { ID } from '@/models/repositories/abstract-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { LessonGroupService } from '@/models/services/lesson-group-service';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { StudentService } from '@/models/services/student-service';
import { dateFormat, getCalendarsColor } from '@/models/utils';
import { statusColors, type StatusColorKey } from '@/models/statusColors';
import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
    viewWeek,
    viewMonthGrid,
    viewMonthAgenda
} from '@schedule-x/calendar';
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
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
const eventDetailsOpen = ref(false);
const selectedEvent = ref<CalendarEventExt | null>(null);
const deltaHistory = ref(1);
const selectedSchools: Ref<string[]> = ref([]);
const start = ref("00:00");
const end = ref("24:00");
const activeView = ref(viewWeek.name);
const currentDate = ref(yyyyMMdd.today().toScheduleX());
const pickerDate = ref(new Date());
const stateLegend = Object.values(statusColors);
let lessonsLoadRequest = 0;
let weekDaysUpdate: ReturnType<typeof setTimeout> | undefined;

const eventsServicePlugin = createEventsServicePlugin();
const calendarControls = createCalendarControlsPlugin()
const calendarApp = createCalendar({
    locale: 'it-IT',
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    defaultView: viewWeek.name,
    events: [],
    weekOptions: { nDays: 6 },
    plugins: [eventsServicePlugin, calendarControls],
    callbacks: {
        onEventClick(event) {
            selectedEvent.value = event as CalendarEventExt;
            eventDetailsOpen.value = true;
        },
        beforeRender($app) {
            const range = $app.calendarState.range.value
            loadLessons(range);
        },
        onRangeUpdate(range) {
            currentDate.value = calendarControls.getDate();
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
const calendarPeriodLabel = computed(() => {
    const date = new Date(currentDate.value + 'T12:00:00');
    if (activeView.value === viewMonthGrid.name || activeView.value === viewMonthAgenda.name) {
        return new Intl.DateTimeFormat('it-IT', { month: 'long', year: 'numeric' }).format(date);
    }
    if (activeView.value === 'day') return new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
    const monday = new Date(date);
    monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const sameMonth = monday.getMonth() === sunday.getMonth() && monday.getFullYear() === sunday.getFullYear();
    const startText = new Intl.DateTimeFormat('it-IT', { day: 'numeric', ...(sameMonth ? {} : { month: 'short' }) }).format(monday);
    const endText = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(sunday);
    return `${startText} – ${endText}`;
});

function setCalendarView(view: string) {
    activeView.value = view;
    calendarControls.setView(view);
}

function goToPickedDate() {
    const date = yyyyMMdd.fromDate(pickerDate.value).toScheduleX();
    currentDate.value = date;
    calendarControls.setDate(date);
}

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
    const navigationDate = new Date(calendarControls.getDate() + "T12:00:00");
    const view = calendarControls.getView();

    if (view === 'day') {
        navigationDate.setDate(navigationDate.getDate() + delta);
    } else if (view === viewWeek.name) {
        navigationDate.setDate(navigationDate.getDate() + delta * 7);
    } else {
        navigationDate.setMonth(navigationDate.getMonth() + delta);
    }
    const date = yyyyMMdd.fromDate(navigationDate).toScheduleX();
    currentDate.value = date;
    calendarControls.setDate(date);
}

function goToToday() {
    const date = yyyyMMdd.today().toScheduleX();
    currentDate.value = date;
    calendarControls.setDate(date);
}

function updateQueryRoute() {
    if (selectedSchools.value.length == 0)
        router.push("/calendar")
    else
        router.push("/calendar?filters=" + selectedSchools.value.join(","))
}

async function goto(data: { dailyLessonId?: ID, schoolId?: ID, date?: string }) {
    eventDetailsOpen.value = false;
    let dailyLessonId = data.dailyLessonId;
    if (!dailyLessonId && data.schoolId && data.date) {
        dailyLessonId = await DailyLessonService.instance.getOrCreateDailyLessonId(
            data.schoolId, yyyyMMdd.fromScheduleX(data.date).toDate());
    }
    if (!dailyLessonId) return;
    router.push(`/lesson/${dailyLessonId}`);
}

function updateCalendarEvents() {
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

    if (weekDaysUpdate) {
        clearTimeout(weekDaysUpdate);
        weekDaysUpdate = undefined;
    }
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
            l.description = schools.value.find(s => s.id === schoolId)?.name;
            l._customContent = {
                ...l._customContent,
                ...calendarEventContent(l.title ?? '', l.description ?? '', l.data?.statusColor as StatusColorKey | undefined)
            };
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
    updateCalendarEvents();
    // Schedule-X invokes onRangeUpdate from its own reactive range update.
    // Changing weekOptions inside that callback creates a signal cycle.
    if (weekDaysUpdate) clearTimeout(weekDaysUpdate);
    if (calendarControls.getView() === viewWeek.name) {
        const nDays = lessons.some(event => {
            const date = event.start.split(' ')[0]!;
            return yyyyMMdd.fromScheduleX(date).toDate().getDay() === 0;
        }) ? 7 : 6;
        if (calendarControls.getWeekOptions().nDays !== nDays) {
            weekDaysUpdate = setTimeout(() => {
                weekDaysUpdate = undefined;
                if (calendarControls.getView() !== viewWeek.name) return;
                const options = calendarControls.getWeekOptions();
                if (options.nDays !== nDays) calendarControls.setWeekOptions({ ...options, nDays });
            }, 0);
        }
    }
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
onUnmounted(() => {
    lessonsLoadRequest++;
    if (weekDaysUpdate) clearTimeout(weekDaysUpdate);
});
</script>

<style scoped>
.calendar-page { display: grid; gap: 16px; padding-bottom: 24px; }
.calendar-page-heading { display: flex; align-items: center; gap: 13px; }
.calendar-page-icon { display: grid; place-items: center; width: 52px; height: 52px; flex: none; border-radius: 14px; background: var(--app-accent-surface); color: var(--app-primary); }
.calendar-page-heading > div { min-width: 0; }
.calendar-page-heading > div > span { color: var(--app-primary); font-size: .75rem; font-weight: 650; }
.calendar-page-heading h1 { margin: 1px 0; color: var(--app-text); font-size: 1.45rem; font-weight: 700; }
.calendar-page-heading p { margin: 0; color: var(--app-muted); font-size: .83rem; }
.calendar-view-choice { display: flex; align-items: center; gap: 6px; margin-left: auto; }
.calendar-view-choice :deep(.v-btn-toggle) { padding: 4px; border: 1px solid var(--app-border); border-radius: 11px; background: var(--app-surface); }
.calendar-view-choice :deep(.v-btn-toggle .v-btn) { min-width: 84px; border-radius: 8px; font-size: .8rem; }
.calendar-view-choice :deep(.v-btn--active) { background: var(--app-accent-surface); color: var(--app-primary); }
.calendar-workspace { overflow: hidden; padding: 16px; border: 1px solid var(--app-border); border-radius: 16px; background: var(--app-surface); box-shadow: var(--app-shadow); }
.calendar-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 0 14px; }
.calendar-period-navigation, .calendar-toolbar-actions { display: flex; align-items: center; gap: 3px; min-width: 0; }
.calendar-period-label { min-width: 0; color: var(--app-text); font-size: .93rem; font-weight: 700; text-transform: none; }
.calendar-period-label :deep(.v-btn__content) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.calendar-today { margin-left: 8px; border-color: var(--app-border); }
.calendar-filter-count { padding: 1px 6px; margin-left: 5px; border-radius: 7px; background: var(--app-surface); color: var(--app-primary); font-size: .73rem; }
.calendar-school-menu { width: min(360px, 90vw); padding: 8px; }
.calendar-legend { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 10px 18px; padding: 16px 8px 2px; border-top: 1px solid var(--app-border); margin-top: 12px; }
.calendar-legend span { display: inline-flex; align-items: center; gap: 6px; color: var(--app-muted); font-size: .73rem; white-space: nowrap; }
.calendar-legend i { width: 12px; height: 12px; border: 1px solid; border-radius: 50%; }
.lesson-event-modal { overflow: hidden; border: 1px solid var(--app-border); border-radius: 16px !important; background: var(--app-surface); }
.lesson-event-heading { display: flex; align-items: center; gap: 14px; padding: 22px 22px 18px; border-bottom: 1px solid var(--app-border); }
.lesson-event-avatar { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 12px; background: var(--app-hover-surface); color: var(--app-primary); }
.lesson-event-heading-text { flex: 1; min-width: 0; }
.lesson-event-eyebrow, .lesson-event-detail span { display: block; color: var(--app-muted); font-size: .76rem; }
.lesson-event-heading h3 { overflow: hidden; margin: 3px 0 0; color: var(--app-text); font-size: 1.15rem; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.lesson-event-details { display: grid; gap: 0; padding: 8px 22px; }
.lesson-event-detail { display: flex; align-items: center; gap: 14px; min-height: 62px; border-bottom: 1px solid var(--app-border); }
.lesson-event-detail:last-child { border-bottom: 0; }
.lesson-event-detail > .v-icon { color: var(--app-muted); }
.lesson-event-detail strong { display: block; margin-top: 2px; color: var(--app-text); font-size: .9rem; font-weight: 600; }
.lesson-event-status { display: inline-flex !important; align-items: center; padding: 4px 8px; border-radius: 7px; background: var(--status-bg); color: var(--status-fg) !important; font-size: .8rem !important; font-weight: 700; }
.lesson-event-actions { display: flex; justify-content: flex-end; gap: 8px; padding: 16px 22px 20px !important; border-top: 1px solid var(--app-border); }
@media (max-width: 900px) { .calendar-page-heading { flex-wrap: wrap; } .calendar-view-choice { width: 100%; justify-content: flex-end; } .calendar-toolbar { flex-wrap: wrap; } }
@media (max-width: 600px) { .calendar-page-heading { gap: 9px; } .calendar-page-icon { width: 42px; height: 42px; } .calendar-page-heading h1 { font-size: 1.12rem; } .calendar-page-heading p { display: none; } .calendar-view-choice :deep(.v-btn-toggle) { flex: 1; } .calendar-view-choice :deep(.v-btn-toggle .v-btn) { flex: 1; min-width: 0; padding: 0 6px; font-size: .72rem; } .calendar-workspace { padding: 10px; } .calendar-toolbar { gap: 8px; } .calendar-period-navigation { width: 100%; } .calendar-period-label { flex: 1; font-size: .78rem; padding: 0 4px; } .calendar-today { margin-left: 0; } .calendar-toolbar-actions { width: 100%; justify-content: flex-end; } .calendar-legend { justify-content: flex-start; } .lesson-event-modal { max-height: calc(100vh - 32px); overflow-y: auto; } .lesson-event-actions { flex-wrap: wrap; } }
</style>
