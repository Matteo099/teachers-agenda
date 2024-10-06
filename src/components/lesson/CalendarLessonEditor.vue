<template>
    <v-card title="Calendario" :loading="loadingCalendar || loadingStudents">
        <template v-slot:append>

            <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-plus" v-bind="activatorProps" variant="text"></v-btn>
                </template>

                <WeekLessonEvent :school="school" @close="dialog = false" @save="onSaveWeekLessonEvent($event)">
                </WeekLessonEvent>
            </v-dialog>
        </template>

        <v-card-text>
            <v-expansion-panels>
                <v-expansion-panel v-for="pl in programmedLessons" :key="pl.id">
                    <v-expansion-panel-title>
                        <template v-slot:default>
                            <!-- v-slot:default="{ expanded }" -->
                            <v-row no-gutters>
                                <v-col class="d-flex justify-start" cols="5">
                                    Tutti i {{ getDayName(pl.dayOfWeek) }}
                                </v-col>
                                <v-col class="text-grey" cols="5">
                                    Dal {{ formatDate(pl.from.toDate(), 'keyboard24') }} 
                                    al {{ formatDate(pl.to.toDate(), 'keyboard24') }}
                                </v-col>
                                <v-col>
                                    <v-dialog transition="dialog-bottom-transition" fullscreen>
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn icon="mdi-pencil" variant="text" @click.stop="console.log('edit')"
                                                v-bind="activatorProps"></v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                            <WeekLessonEvent :school="school" :initialWeekLesson="pl" edit
                                                @close="isActive.value = false"></WeekLessonEvent>
                                        </template>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list v-if="pl.schedule.length > 0">
                            <v-list-item v-for="element of pl.schedule" :key="element.studentId" :value="element" color="primary">
                                <template v-slot:prepend>
                                    <p>
                                        <b>
                                            {{ element.time.hour.toString().padStart(2, '0') }}:{{
                                                element.time.minutes.toString().padStart(2,
                                                    '0') }}
                                        </b>
                                        <span> - </span>
                                        <i>{{ getCompleteStudentName(element.studentId) }}</i>
                                    </p>
                                </template>
                            </v-list-item>
                        </v-list>
                        <!-- <v-list :items="pl.schedule" item-props v-if="pl.schedule.length > 0">
                            <template v-slot:title="{ item }">
                                {{ item.studentId }} - {{ item.time.hour.toString().padStart(2, '0') }}:{{
                                    item.time.minutes.toString().padStart(2, '0') }}
                            </template>
                        </v-list> -->
                        <span v-else>Nessuna lezione programmata</span>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, type ScheduledLesson, type School, type Student, type WeekLesson } from '@/models/model';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useDate } from 'vuetify';
import WeekLessonEvent from './WeekLessonEditor.vue';
import { onSnapshot, orderBy, query, Timestamp, where, type Unsubscribe } from 'firebase/firestore';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { formatDate, nameof } from '@/models/utils';

interface CalendarLessonEditorProps {
    school: School;
}

const date = useDate()
const props = defineProps<CalendarLessonEditorProps>()
const emit = defineEmits(['close'])
const weekLessonsRef = useDB<WeekLesson>(DatabaseRef.WEEK_LESSONS);
const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const subscriptions: Unsubscribe[] = [];

const programmedLessons: Ref<WeekLesson[]> = ref([]);
const loadingCalendar = ref(false);
const loadingStudents = ref(false);
const allStudents: Ref<Student[]> = ref([]);
const dialog = ref(false);

function onSaveWeekLessonEvent(weekLesson?: WeekLesson) {
    if (weekLesson)
        dialog.value = false;
}

function getDayName(day: number): string {
    switch (day) {
        case 0:
            return "Lunedì"
        default:
            return "None";
    }
}

async function loadCalendar() {

    loadingCalendar.value = true;
    const unsub = onSnapshot(query(weekLessonsRef, where(nameof<WeekLesson>('schoolId'), '==', props.school.id), orderBy(nameof<WeekLesson>('dayOfWeek'))), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        programmedLessons.value = data;
        loadingCalendar.value = false;
        console.log("Current data: ", snapshot, data);
    }, (error) => {
        loadingCalendar.value = false;
        console.error(error);
    });

    subscriptions.push(unsub);
}

async function loadStudents() {
    loadingStudents.value = true;
    const unsubscribeStudents = onSnapshot(query(studentsRef, where(nameof<Student>('schoolId'), '==', props.school.id), orderBy(nameof<Student>('lessonDay'))), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        allStudents.value = data;
        loadingStudents.value = false;
        console.log("Current data: ", snapshot, data);
    }, (error) => {
        loadingStudents.value = false;
        console.error(error);
    }, () => {
        console.log("loadStudents completitions")
    });
    subscriptions.push(unsubscribeStudents);
}

function getCompleteStudentName(studentId: string): string {
    const student = allStudents.value.find(s => s.id == studentId);
    return `${student?.name} ${student?.surname}`;
}

onMounted(async () => {
    await loadStudents();
    await loadCalendar();
})

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
}) 
</script>