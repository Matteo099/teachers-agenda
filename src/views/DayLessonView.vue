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

        <v-row>
            <v-btn @click="present" :disabled="!areLessonSelected">presenti</v-btn>
            <v-btn @click="absent" :disabled="!areLessonSelected">assenti</v-btn>

            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn @click="loadStudents" v-bind="activatorProps">Aggiugni studente</v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-list :items="allStudents" @click:select="addStudent($event)">
                            <template v-slot:title="{ item }">
                                {{ item }}
                            </template>
                        </v-list>
                    </v-card>
                </template>
            </v-dialog>

            <v-checkbox v-model="selectAllLessons"
                :indeterminate="selectedLessons.length != 0 && selectedLessons.length != events.length"
                @click="toggleAll"></v-checkbox>
        </v-row>


        <v-timeline side="end" truncate-line="both">

            <v-timeline-item class="event-item" :dot-color="getColor(e)" size="small" v-for="(e, index) in events">
                <div class="d-flex">
                    <v-checkbox v-model="selectedLessons" :value="index" multiple></v-checkbox>

                    <v-expansion-panels :id="'time' + index">
                        <v-expansion-panel :text="e.note">
                            <template v-slot:title>
                                <div class="d-flex justify-space-between w-100">
                                    <strong class="ml-4">{{ e.title }} </strong>
                                    <v-icon v-if="e.note?.trim().length != 0" color="primary">mdi-note</v-icon>
                                    <span class="mr-4">{{ date.format(e.start, 'fullTime24h') }}
                                        -
                                        {{ date.format(e.end, 'fullTime24h') }}
                                    </span>
                                </div>
                            </template>

                            <template v-slot:text>
                                <v-btn @click="present(e)">presente</v-btn>
                                <v-btn @click="absent(e)">assente</v-btn>
                                <v-btn @click="cancel(e)" v-if="e.status != 'UNKNOWN'">annulla</v-btn>
                                <v-btn @click="notes(e)">note</v-btn>
                                <v-btn v-if="e.status == 'ABSENT'" @click="scheduleRecoveryLesson(e)">schedula
                                    recupero</v-btn>
                                {{ e.note }}
                            </template>

                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script setup lang="ts">
import type { Student } from '@/models/model';
import { Timestamp } from 'firebase/firestore';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { useDate } from 'vuetify'

const date = useDate()

const menu = ref(false)
const selectedLessons: Ref<number[]> = ref([])
const selectAllLessons: Ref<boolean> = ref(false)
const events: Ref<any[]> = ref([])
const today = ref(new Date());

const allStudents: Ref<any[]> = ref([]);

const areLessonSelected = computed(() => selectedLessons.value.length != 0)

watch(selectedLessons, () => {
    if (selectedLessons.value.length == 0)
        selectAllLessons.value = false
})

function getColor(event: any): string {

    switch (event.status) {
        case 'UNKONWN':
            return 'gray';
        case 'PRESENT':
            return 'green';
        case 'ABSENT':
            return 'red'
        case 'RECOVERED':
            return 'blue';
        case 'TRIAL':
            return 'yellow';
        default:
            return 'gray';
    }
}

function present(event: any) {
    if (event) event.status = 'PRESENT';

    selectedLessons.value.forEach(s => {
        events.value[s].status = 'PRESENT'
    });
    selectedLessons.value = []
}
function absent(event: any) {
    selectedLessons.value.forEach(s => {
        events.value[s].status = 'ABSENT'
    });
    selectedLessons.value = []
    if (event) event.status = 'ABSENT';
}
function cancel(event: any) {
    if (event) event.status = 'UNKNOWN'
}
function scheduleRecoveryLesson(event: any) {
    event.status = 'RECOVERED'
}
function notes(event: any) { }

function toggleAll() {
    if (!selectAllLessons.value) {
        selectedLessons.value = [...Array(events.value.length).keys()]
    } else {
        selectedLessons.value = [];
    }
}

function addStudent(student: any) {
    events.value.push(student);
}

async function loadStudents() {
    const res: Student[] = [
        { id: "1", schoolId: "prova", level: "1", name: "Mario", surname: "Rossi", notes: [], contact: "2378542365", lessonDay: 0, createdAt: Timestamp.now(), updatedAt: Timestamp.now() }
    ];
    allStudents.value = res;
}

async function loadLessons() {
    const yyyyMMdd = date.format(today.value, 'keyboardDate')

    events.value = [
        { title: "Cristina Sole", start: new Date(`${yyyyMMdd} 06:00`), end: new Date(`${yyyyMMdd} 06:40`), note: "", status: 'UNKNOWN' },
        { title: "Angelica Verdi", start: new Date(`${yyyyMMdd} 07:00`), end: new Date(`${yyyyMMdd} 07:40`), note: "", status: 'UNKNOWN' },
        { title: "Francesca Giallo", start: new Date(`${yyyyMMdd} 07:40`), end: new Date(`${yyyyMMdd} 09:00`), note: "", status: 'UNKNOWN' },
        { title: "Luca Prezzi", start: new Date(`${yyyyMMdd} 09:00`), end: new Date(`${yyyyMMdd} 09:40`), note: "", status: 'UNKNOWN' },
        { title: "Giorgio Forlì", start: new Date(`${yyyyMMdd} 10:00`), end: new Date(`${yyyyMMdd} 10:40`), note: "", status: 'UNKNOWN' },
        { title: "Alessio Palla", start: new Date(`${yyyyMMdd} 10:40`), end: new Date(`${yyyyMMdd} 12:00`), note: "", status: 'UNKNOWN' },
        { title: "Matteo Romagnoli", start: new Date(`${yyyyMMdd} 14:00`), end: new Date(`${yyyyMMdd} 14:40`), note: "", status: 'UNKNOWN' },
        { title: "Lorenzo Bianchi", start: new Date(`${yyyyMMdd} 14:40`), end: new Date(`${yyyyMMdd} 15:20`), note: "", status: 'UNKNOWN' },
        { title: "Francesco Rossi", start: new Date(`${yyyyMMdd} 15:20`), end: new Date(`${yyyyMMdd} 16:00`), note: "qualche nota...", status: 'UNKNOWN' },
        { title: "Giovanni Colori", start: new Date(`${yyyyMMdd} 16:00`), end: new Date(`${yyyyMMdd} 16:40`), note: "", status: 'UNKNOWN' },
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

div.v-input__details {
    display: none;
}
</style>