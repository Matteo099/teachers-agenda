<template>
    <v-container fluid>
        <p class="text-h5 text-center mb-6">Lezioni del {{ date.format(today, 'keyboardDate') }}

            <v-menu :close-on-content-click="false" :model-value="menu">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" icon="mdi-calendar"></v-btn>
                </template>

                <v-card>
                    <v-card-text class="pa-6">
                        <v-date-picker :model-value="today"></v-date-picker>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn variant="text" @click="menu = false">
                            Cancel
                        </v-btn>
                        <v-btn color="primary" variant="text" @click="menu = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
        </p>

        <v-timeline side="end" truncate-line="both">
            <v-timeline-item class="event-item" :dot-color="getColor(e)" size="small" v-for="(e, index) in events">
                <v-expansion-panels :id="'time' + index">
                    <v-expansion-panel :text="e.note">
                        <template v-slot:title>
                            <div class="d-flex justify-space-between w-100">
                                <strong class="ml-4">{{ e.title }} </strong>
                                <span class="mr-4">{{ date.format(e.start, 'fullTime24h') }}
                                    -
                                    {{ date.format(e.end, 'fullTime24h') }}
                                </span>
                            </div>
                        </template>

                        <template v-slot:text>
                            <v-btn @click="present(e)">presente</v-btn>
                            <v-btn @click="absent(e)">assente</v-btn>
                            <v-btn v-if="!e.present" @click="scheduleRecoveryLesson(e)">schedula recupero</v-btn>
                        </template>

                    </v-expansion-panel>
                </v-expansion-panels>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDate } from 'vuetify'

const date = useDate()

const menu = ref(false)
const events = ref([])
const today = ref(new Date());

function getColor(event: any): string {
    const now = new Date();
    if (date.isAfter(now, event.start)) {
        if (date.isBefore(now, event.end)) {
            return "blue"
        }
        if (event.present)
            return "green";
        return "red";
    }
    return "gray"
}

function present(event: any) { event.present = true; }
function absent(event: any) { event.present = false; }
function scheduleRecoveryLesson(event: any) { }

async function loadLessons() {
    events.value = [
        { title: "Luca Prezzi", start: new Date('2024-09-23 09:00'), end: new Date('2024-09-23 09:40'), note: "", present: true },
        { title: "Giorgio Forlì", start: new Date('2024-09-23 10:00'), end: new Date('2024-09-23 10:40'), note: "", present: false },
        { title: "Alessio Palla", start: new Date('2024-09-23 10:40'), end: new Date('2024-09-23 12:00'), note: "", present: true },
        { title: "Matteo Romagnoli", start: new Date('2024-09-23 14:00'), end: new Date('2024-09-23 14:40'), note: "", present: true },
        { title: "Lorenzo Bianchi", start: new Date('2024-09-23 14:40'), end: new Date('2024-09-23 15:20'), note: "", present: true },
        { title: "Francesco Rossi", start: new Date('2024-09-23 15:20'), end: new Date('2024-09-23 16:00'), note: "qualche nota...", present: true },
        { title: "Giovanni Colori", start: new Date('2024-09-23 16:00'), end: new Date('2024-09-23 16:40'), note: "", present: true },
    ]
}

function scrollToCurrentLesson() {
    const now = new Date();
    let i = 0;
    for (i = 0; i < events.value.length; i++) {
        const e = events.value[i];
        if (date.isAfter(now, e.start) && date.isBefore(now, e.end)) {
            break;
        }
    }
    const el = document.getElementById('time' + i);
    el?.scrollIntoView({ block: 'start', behavior: 'smooth' });
}


onMounted(async () => {
    await loadLessons();
    scrollToCurrentLesson();

})

</script>

<style>
div.v-timeline-item__body {
    width: 100%
}
</style>