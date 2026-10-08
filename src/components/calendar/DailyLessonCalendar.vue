<template>
    <v-container fluid class="daily-calendar-container">
        <AppCalendar :calendar-app="calendarApp" compact hide-header :hide-day-header="!showDay">
            <template #eventModal="{ calendarEvent }">
                <v-card class="daily-calendar-event-modal" variant="flat">
                    <div class="daily-calendar-event-heading"><span class="school-panel-icon"><v-icon
                                icon="mdi-calendar-clock-outline" size="20" /></span>
                        <div>
                            <h3>{{ calendarEvent.title }}</h3>
                            <p>{{ calendarEvent.start.split(' ')[1] }}–{{ calendarEvent.end.split(' ')[1] }}</p>
                        </div>
                    </div>
                    <v-card-text v-if="calendarEvent.description">{{ calendarEvent.description }}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="editTimeModal" transition="dialog-bottom-transition">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn text="Chiudi" variant="text" @click="eventModal.close()"></v-btn>
                                <v-btn text="Modifica orario" color="primary" variant="flat"
                                    prepend-icon="mdi-pencil-outline" v-bind="activatorProps" @click.stop></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <EditLessonTime @close="isActive.value = false"
                                    @save="updateEventTime(calendarEvent, $event)"
                                    :startTime="calendarEvent.start?.split(' ')[1]"
                                    :endTime="calendarEvent.end?.split(' ')[1]"
                                    :minutesOfLesson="calendarEvent.data.minutesLessonDuration">
                                </EditLessonTime>
                            </template>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </template>
        </AppCalendar>
    </v-container>
</template>

<script setup lang="ts">
import { days, Time, yyyyMMdd, type CalendarEventExt, type EventTime, type School, type StudentLesson } from '@/models/model';
import { lessonStatusColor } from '@/models/statusColors';
import { getCalendarsColor } from '@/models/utils';
import {
    createCalendar,
    createViewDay,
    type CalendarEvent
} from '@schedule-x/calendar';
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { onMounted, ref, watch } from 'vue';
import { useTheme } from 'vuetify';
import EditLessonTime from '../lesson/EditLessonTime.vue';
import AppCalendar from './AppCalendar.vue';
import { calendarEventContent } from './calendarEventContent';

interface CalendarProps {
    date?: yyyyMMdd;
    editable?: boolean;
    showDay?: boolean;
    sort?: boolean;
    school?: School;
    trimTime?: boolean;
}

const props = withDefaults(defineProps<CalendarProps>(), {
    date: () => yyyyMMdd.today(),
    editable: false,
    showDay: false,
    sort: false,
    trimTime: true
})
const theme = useTheme();
const emit = defineEmits(['edit']);
const model = defineModel<(CalendarEventExt | StudentLesson)[]>({ default: [] });
const _events = ref<CalendarEventExt[]>([]);

const editTimeModal = ref(false);
let start = "24:00";
let end = "00:00";

watch(model, () => updateInternalEvents(), { deep: true });
watch(() => props.trimTime, updateCalendarBoundaries);

const eventsServicePlugin = createEventsServicePlugin();
const eventModal = createEventModalPlugin();
const dndPlugin = createDragAndDropPlugin(15);
const calendarControls = createCalendarControlsPlugin()
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
    locale: 'it-IT',
    selectedDate: props.date.toScheduleX(),
    views: [createViewDay()],
    events: [],
    plugins: props.editable ? [dndPlugin, eventsServicePlugin, eventModal, calendarControls] : [dndPlugin, eventsServicePlugin, calendarControls],
    callbacks: {
        onEventUpdate(calendarEvent: CalendarEvent) {
            const event = _events.value.find(e => e.id == calendarEvent.id);
            if (!event) return;
            event.start = calendarEvent.start;
            event.end = calendarEvent.end;
            updateModelEvent(calendarEvent);
        },
    },
    calendars: getCalendarsColor(props.school)
})
watch(theme.global.name, updateCalendarTheme, { immediate: true });

function updateCalendarTheme() {
    if (!calendarApp) return;

    if (theme.global.name.value == 'myCustomDarkTheme') {
        calendarApp.setTheme("dark");
    } else {
        calendarApp.setTheme("light");
    }
}

function updateInternalEvents() {
    start = "24:00";
    end = "00:00";
    _events.value = transformModel();
    _events.value.forEach(event => {
        if (!event._options) event._options = {};
        event._options.disableDND = !props.editable;

        if (eventsServicePlugin.get(event.id)) {
            eventsServicePlugin.update(event);
        } else eventsServicePlugin.add(event);

        let startTime = event.start.split(" ")[1]!;
        let endTime = event.end.split(" ")[1]!;
        if (startTime < start) start = startTime;
        if (endTime > end) end = endTime;
    });

    eventsServicePlugin.getAll().forEach(e => {
        const toDelete = _events.value.findIndex(ie => ie.id == e.id) == -1;
        if (toDelete) eventsServicePlugin.remove(e.id);
    });

    updateCalendarBoundaries();
}

function updateCalendarBoundaries() {
    if (props.trimTime) {
        if (start >= "01:00") start = Time.fromHHMM(start)!.add({ hour: -1 }).format();
        else start = "00:00";
        if (end <= "23:00") end = Time.fromHHMM(end)!.add({ hour: 1 }).format();
        else end = "24:00";
        calendarControls.setDayBoundaries({ start, end })
        const opt = calendarControls.getWeekOptions();
        const range = parseInt(end.split(":")[0]!) - parseInt(start.split(":")[0]!);
        calendarControls.setWeekOptions({ ...opt, gridHeight: Math.max(1000 * range / 24, 400) });
    } else {
        calendarControls.setDayBoundaries({ start: "00:00", end: "24:00" })
    }
}

function transformModel(): CalendarEventExt[] {
    const date = props.date.toScheduleX();
    return model.value.filter(sl => !('lesson' in sl) || !sl.lesson.hiddenForDate).map(sl => {
        if ("lesson" in sl) {
            return {
                id: sl.lesson.lessonId,
                start: date + " " + Time.fromITime(sl.lesson.startTime).format(),
                end: date + " " + Time.fromITime(sl.lesson.endTime).format(),
                title: `${sl.student.name} ${sl.student.surname} - ${days[sl.student.lessonDay ?? 0]}`,
                calendarId: (props.school?.id ?? sl.student.schoolId).toLowerCase(),
                _customContent: calendarEventContent(
                    `${sl.student.name} ${sl.student.surname}`,
                    days[sl.student.lessonDay ?? 0] ?? '',
                    lessonStatusColor(sl.lesson)
                ),
                data: { ...sl }
            };
        } else {
            return sl;
        }
    });
}

function updateEventTime(calendarEvent: CalendarEvent, newEventTime: EventTime) {
    if (!calendarEvent) return;

    const event = _events.value.find(e => e.id == calendarEvent.id);
    if (!event) return;
    const ce = { ...calendarEvent }
    const start = ce.start?.split(" ");
    const end = ce.end?.split(" ");
    event.start = start[0] + " " + newEventTime.startTime;
    event.end = end[0] + " " + newEventTime.endTime;

    updateModelEvent(event);

    editTimeModal.value = false;
}

function updateModelEvent(calendarEvent: CalendarEvent) {
    const event = model.value.find(e => {
        if ("lesson" in e) {
            return e.lesson.lessonId == calendarEvent.id
        } else {
            return e.id == calendarEvent.id
        }
    });

    if (!event) return;

    if ("lesson" in event) {
        event.lesson.startTime = Time.fromHHMM(calendarEvent.start.split(' ')[1]!)?.toITime() ?? event.lesson.startTime;
        event.lesson.endTime = Time.fromHHMM(calendarEvent.end.split(' ')[1]!)?.toITime() ?? event.lesson.endTime;
    } else {
        event.start = calendarEvent.start;
        event.end = calendarEvent.end;
    }

    if (props.sort) {
        model.value.sort((a, b) => a.lesson.startTime - b.lesson.startTime);
    }
    emit('edit');
}

onMounted(() => {
    updateInternalEvents();
})
</script>
<style scoped>
.daily-calendar-container {
    padding: 0;
}

.daily-calendar-event-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 18px 20px 8px;
}

.daily-calendar-event-heading h3 {
    margin: 0;
    color: var(--app-text);
    font-size: 1rem;
    font-weight: 700;
}

.daily-calendar-event-heading p {
    margin: 4px 0 0;
    color: var(--app-muted);
    font-size: .82rem;
}

.daily-calendar-event-modal :deep(.v-card-actions) {
    padding: 12px 20px 18px;
}
</style>
