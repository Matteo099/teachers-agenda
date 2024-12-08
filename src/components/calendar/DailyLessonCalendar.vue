<template>
    <v-container>
        <ScheduleXCalendar :calendar-app="calendarApp">
            <template #timeGridEvent="{ calendarEvent }">
                <v-card color="primary" :title="calendarEvent.title">
                    <v-card-text>
                        <p>
                            <v-icon>mdi-clock</v-icon>
                            {{ calendarEvent.start.split(" ")[1] }} - {{ calendarEvent.end.split(" ")[1] }}
                        </p>
                        {{ calendarEvent }}
                    </v-card-text>
                </v-card>
                <!-- <div class="event">
                    {{ calendarEvent.title }}
                </div> -->
            </template>
            <template #eventModal="{ calendarEvent }">
                <v-card elevation="3" :title="calendarEvent.title"
                    :subtitle="calendarEvent.start.split(' ')[1] + ' - ' + calendarEvent.end.split(' ')[1]"
                    :text="calendarEvent.description">

                    <!-- {{ calendarEvent }} -->
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <v-btn text="Chiudi" @click="emit('close')"></v-btn> -->

                        <v-dialog transition="dialog-bottom-transition">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn text="Chiudi" @click="eventModal.close()"></v-btn>
                                <v-btn text="Modifica" color="primary" v-bind="activatorProps" @click.stop></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card>
                                    <p>
                                        questo è l'editor di un evento...
                                    </p>
                                    <p>
                                        dovrebbe contenere input-field per l'ora e bho..
                                    </p>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text="Chiudi" @click.stop="isActive.value = false"></v-btn>
                                        <v-btn text="Modifica" color="primary"
                                            @click.stop="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </v-card-actions>
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