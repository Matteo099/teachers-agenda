<template>
    <v-container>
        <ScheduleXCalendar :calendar-app="calendarApp">
            <template #eventModal="{ calendarEvent }">
                <v-card elevation="3" :title="calendarEvent.title"
                    :subtitle="calendarEvent.start.split(' ')[1] + ' - ' + calendarEvent.end.split(' ')[1]"
                    :text="calendarEvent.description">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="editTimeModal" transition="dialog-bottom-transition">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn text="Chiudi" @click="eventModal.close()"></v-btn>
                                <v-btn text="Modifica" color="primary" v-bind="activatorProps" @click.stop></v-btn>
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
        </ScheduleXCalendar>
    </v-container>
</template>

<script setup lang="ts">
import { days, Time, yyyyMMdd, type CalendarEventExt, type EventTime, type School, type StudentLesson } from '@/models/model';
import {
    createCalendar,
    createViewDay,
    type CalendarEvent
} from '@schedule-x/calendar';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { ScheduleXCalendar } from '@schedule-x/vue';
import { onMounted, ref, watch } from 'vue';
import EditLessonTime from '../lesson/EditLessonTime.vue';
import { useTheme } from 'vuetify';
import { getCalendarsColor } from '@/models/utils';
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls';

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
watch(theme.global.name, updateCalendarTheme);
watch(() => props.trimTime, updateCalendarBoundaries);

const eventsServicePlugin = createEventsServicePlugin();
const eventModal = createEventModalPlugin();
const dndPlugin = createDragAndDropPlugin(15);
const calendarControls = createCalendarControlsPlugin()
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
    locale: 'it-IT',
    selectedDate: props.date.toIyyyyMMdd("-", 1),
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

        let startTime = event.start.split(" ")[1];
        let endTime = event.end.split(" ")[1];
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
        const range = parseInt(end.split(":")[0]) - parseInt(start.split(":")[0]);
        calendarControls.setWeekOptions({ ...opt, gridHeight: Math.max(1000 * range / 24, 400) });
    } else {
        calendarControls.setDayBoundaries({ start: "00:00", end: "24:00" })
    }
}

function transformModel(): CalendarEventExt[] {
    const date = props.date.toIyyyyMMdd("-", 1);
    return model.value.map(sl => {
        if ("lessonId" in sl) {
            console.log(sl);
            return {
                id: sl.lessonId,
                start: date + " " + Time.fromITime(sl.startTime).format(),
                end: date + " " + Time.fromITime(sl.endTime).format(),
                title: `${sl.name} ${sl.surname} - ${days[sl.lessonDay ?? 0]}`,
                calendarId: sl.schoolId.toLowerCase(),
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
        if ("lessonId" in e) {
            return e.lessonId == calendarEvent.id
        } else {
            return e.id == calendarEvent.id
        }
    });

    if (!event) return;

    if ("lessonId" in event) {
        event.startTime = Time.fromHHMM(calendarEvent.start.split(' ')[1])?.toITime() ?? event.startTime;
        event.endTime = Time.fromHHMM(calendarEvent.end.split(' ')[1])?.toITime() ?? event.endTime;
    } else {
        event.start = calendarEvent.start;
        event.end = calendarEvent.end;
    }

    if (props.sort) {
        model.value.sort((a, b) => a.startTime - b.startTime);
    }
    emit('edit');
}

function toggleCalendarHeader() {
    const calendarHeader = document.getElementsByClassName("sx__calendar-header")[0] as HTMLDivElement;
    calendarHeader.style.display = calendarHeader.style.display == "none" ? "" : "none";
    toggleInnerHeader();
}

function toggleInnerHeader(attempt: number = 0) {
    const innerHeader = document.getElementsByClassName("sx__week-header")[0] as HTMLDivElement;
    if (innerHeader) innerHeader.style.display = props.showDay ? "" : "none";
    else {
        if (attempt >= 10) console.error("Unable to hide day header");
        else setTimeout(() => toggleInnerHeader(attempt + 1), 10);
    }
}

onMounted(() => {
    toggleCalendarHeader();
    updateInternalEvents();
})
</script>