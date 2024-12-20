<template>
    <v-container>
        <ScheduleXCalendar :calendar-app="calendarApp">
            <!-- <template #timeGridEvent="{ calendarEvent }">
                <v-card class="border" elevation="2">
                    <v-card-text class="pa-1">
                        <p>{{ calendarEvent.title }}</p>
                        <p>
                            <v-icon>mdi-clock</v-icon>
                            {{ calendarEvent.start.split(" ")[1] }} - {{ calendarEvent.end.split(" ")[1] }}
                        </p>
                    </v-card-text>
                </v-card>
               
            </template> -->
            <template #eventModal="{ calendarEvent }">
                <v-card elevation="3" :title="calendarEvent.title"
                    :subtitle="calendarEvent.start.split(' ')[1] + ' - ' + calendarEvent.end.split(' ')[1]"
                    :text="calendarEvent.description">

                    <!-- {{ calendarEvent }} -->
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <v-btn text="Chiudi" @click="emit('close')"></v-btn> -->

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
import { days, Time, yyyyMMdd, type EventTime, type StudentLesson } from '@/models/model';
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

type CalendarEventExt = CalendarEvent & { data?: any };

interface CalendarProps {
    date?: yyyyMMdd;
    editable?: boolean;
    showDay?: boolean;
}

const props = withDefaults(defineProps<CalendarProps>(), {
    date: () => yyyyMMdd.today(),
    editable: false,
    showDay: false
})
const model = defineModel<(CalendarEventExt | StudentLesson)[]>({ default: [] });
const _events = ref<CalendarEventExt[]>([]);

const editTimeModal = ref(false);

watch(model, () => updateInternalEvents(), { deep: true });

const eventsServicePlugin = createEventsServicePlugin();
const eventModal = createEventModalPlugin();
const dndPlugin = createDragAndDropPlugin(15);
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
    locale: 'it-IT',
    selectedDate: props.date.toIyyyyMMdd("-"),
    views: [createViewDay()],
    events: [],
    plugins: props.editable ? [dndPlugin, eventsServicePlugin, eventModal] : [dndPlugin, eventsServicePlugin],
    callbacks: {
        onEventUpdate(calendarEvent: CalendarEvent) {
            const event = _events.value.find(e => e.id == calendarEvent.id);
            if (!event) return;
            event.start = calendarEvent.start;
            event.end = calendarEvent.end;
            updateModelEvent(calendarEvent);
        },
    }
})

function updateInternalEvents() {
    _events.value = transformModel();
    _events.value.forEach(event => {
        if (!event._options) event._options = {};
        event._options.disableDND = !props.editable;

        if (eventsServicePlugin.get(event.id)) {
            eventsServicePlugin.update(event);
        } else eventsServicePlugin.add(event);
    });

    eventsServicePlugin.getAll().forEach(e => {
        const toDelete = _events.value.findIndex(ie => ie.id == e.id) == -1;
        if (toDelete) eventsServicePlugin.remove(e.id);
    });
}

function transformModel(): CalendarEventExt[] {
    const today = yyyyMMdd.today();
    return model.value.map(sl => {
        if ("lessonId" in sl) {
            return {
                id: sl.lessonId,
                start: today.toIyyyyMMdd("-") + " " + Time.fromITime(sl.startTime).format(),
                end: today.toIyyyyMMdd("-") + " " + Time.fromITime(sl.endTime).format(),
                title: `${sl.name} ${sl.surname} - ${days[sl.lessonDay ?? 0]}`,
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
        event.startTime = Time.fromHHMM(calendarEvent.start)?.toITime() ?? event.startTime;
        event.endTime = Time.fromHHMM(calendarEvent.end)?.toITime() ?? event.endTime;
    } else {
        event.start = calendarEvent.start;
        event.end = calendarEvent.end;
    }

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

<style scoped>
.border {
    border: 1px solid black !important;
    border-left: 5px solid red !important;
}
</style>