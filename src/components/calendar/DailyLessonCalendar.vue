<template>
    <v-container>
        <ScheduleXCalendar :calendar-app="calendarApp">
            <template #eventModal="{ calendarEvent }">
                <v-card elevation="3" :title="calendarEvent.title" :subtitle="calendarEvent.start"
                    :text="calendarEvent.description">
                    {{ calendarEvent }}
                </v-card>
            </template>
        </ScheduleXCalendar>
    </v-container>
</template>

<script setup lang="ts">
import { yyyyMMdd } from '@/models/model';
import {
    createCalendar,
    createViewDay,
    type CalendarEvent
} from '@schedule-x/calendar';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { ScheduleXCalendar } from '@schedule-x/vue';
import { onMounted, watch } from 'vue';

type CalendarEventExt = CalendarEvent & { data?: any };

interface CalendarProps {
    events: CalendarEventExt[];
    date?: yyyyMMdd;
    editable?: boolean;
}

const props = withDefaults(defineProps<CalendarProps>(), {
    events: () => [],
    date: () => yyyyMMdd.today(),
    editable: false
})

watch(() => props.events, () => updateEvents());

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
    plugins: [dndPlugin, eventsServicePlugin, eventModal]
})

function updateEvents() {
    console.log("updateEvents", props.events)
    props.events.forEach(event => {
        if (!event._options) event._options = {};
        event._options.disableDND = !props.editable;

        if (eventsServicePlugin.get(event.id)) {
            eventsServicePlugin.update(event);
        } else eventsServicePlugin.add(event);
    })
}

function toggleCalendarHeader() {
    const calendarHeader = document.getElementsByClassName("sx__calendar-header")[0] as HTMLDivElement;
    calendarHeader.style.display = calendarHeader.style.display == "none" ? "" : "none";
}

onMounted(() => {
    toggleCalendarHeader();
    updateEvents();
})
</script>