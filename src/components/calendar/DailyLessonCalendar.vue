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
                                <v-card title="Modifica orario lezione" elevation="2">
                                    <v-card-text>
                                        <v-row justify="space-around">
                                            <v-col cols="11" md="6">
                                                <v-checkbox v-model="alignEndTime"
                                                    label="Allinea la data di fine lezione in base alla durata della lezione definita dallo studente"></v-checkbox>
                                            </v-col>

                                            <v-col cols="11" sm="5">
                                                <v-text-field v-model="startTime" :active="startModal"
                                                    :focus="startModal" label="Data di inizio"
                                                    prepend-icon="mdi-clock-time-four-outline" readonly>
                                                    <v-dialog v-model="startModal" activator="parent" width="auto">
                                                        <v-time-picker v-if="startModal" format="24hr"
                                                            v-model="startTime"></v-time-picker>
                                                    </v-dialog>
                                                </v-text-field>
                                            </v-col>

                                            <v-col cols="11" sm="5">
                                                <v-text-field v-model="endTime" :active="endModal" :focused="endModal"
                                                    label="Data di fine" prepend-icon="mdi-clock-time-four-outline"
                                                    :disabled="alignEndTime" readonly>
                                                    <v-dialog v-model="endModal" activator="parent" width="auto">
                                                        <v-time-picker v-if="endModal" format="24hr"
                                                            v-model="endTime"></v-time-picker>
                                                    </v-dialog>
                                                </v-text-field>
                                            </v-col>


                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text="Annulla" @click.stop="isActive.value = false"></v-btn>
                                        <v-btn text="Modifica" color="primary"
                                            @click.stop="updateEventTime(calendarEvent)"></v-btn>
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
import { Time, yyyyMMdd, type Student } from '@/models/model';
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
import { toast } from 'vue3-toastify';

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
const events = defineModel<CalendarEventExt[]>({ default: [] });

const startTime = ref();
const endTime = ref();
const startModal = ref(false);
const endModal = ref(false);
const editTimeModal = ref(false);
const alignEndTime = ref(true);

let selectedCalendarEvent: CalendarEventExt | undefined;

watch(startTime, () => updateEndTime())
watch(events, () => updateEvents(), { deep: true });

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
        onEventClick(calendarEvent: CalendarEvent) {
            // console.log("onEventClick", event.start, event.end);
            selectedCalendarEvent = calendarEvent;
            startTime.value = calendarEvent.start?.split(" ")[1] ?? null;
            endTime.value = calendarEvent.end?.split(" ")[1] ?? null;
        },
        onEventUpdate(calendarEvent: CalendarEvent) {
            const event = events.value.find(e => e.id == calendarEvent.id);
            if (!event) return;
            event.start = calendarEvent.start;
            event.end = calendarEvent.end;
        },
    }
})

function updateEvents() {
    events.value.forEach(event => {
        if (!event._options) event._options = {};
        event._options.disableDND = !props.editable;

        if (eventsServicePlugin.get(event.id)) {
            eventsServicePlugin.update(event);
        } else eventsServicePlugin.add(event);
    });

    eventsServicePlugin.getAll().forEach(e => {
        const toDelete = events.value.findIndex(ie => ie.id == e.id) == -1;
        if (toDelete) eventsServicePlugin.remove(e.id);
    });
}

function updateEventTime(calendarEvent: CalendarEvent) {
    if (!calendarEvent || !startTime.value || !endTime.value) return;

    if ((Time.fromHHMM(startTime.value)?.getTotalMinutes() ?? 0) > (Time.fromHHMM(endTime.value)?.getTotalMinutes() ?? 0)) {
        toast.warning("L'orario di inizio lezione deve essere antecedente all'orario di fine lezione");
        return;
    }

    const event = events.value.find(e => e.id == calendarEvent.id);
    if (!event) return;
    const ce = { ...calendarEvent }
    const start = ce.start?.split(" ");
    const end = ce.end?.split(" ");
    event.start = start[0] + " " + startTime.value;
    event.end = end[0] + " " + endTime.value;

    editTimeModal.value = false;
}

function updateEndTime() {
    if (alignEndTime.value && selectedCalendarEvent) {
        const start = Time.fromHHMM(startTime.value);
        if (!start) return;
        const student: Student = selectedCalendarEvent.data.st;
        if (!student) return;
        const lessonMinutes = student.minutesLessonDuration;
        endTime.value = Time.fromITime((start.getTotalMinutes() + lessonMinutes) * 60).format();
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
    updateEvents();
})
</script>

<style scoped>
.border {
    border: 1px solid black !important;
    border-left: 5px solid red !important;
}
</style>