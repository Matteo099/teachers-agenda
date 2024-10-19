<template>
    <v-card title="Calendario" :loading="loadingCalendar || loadingStudents">
        <template v-slot:append>

            <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-plus" v-bind="activatorProps" variant="text"></v-btn>
                </template>

                <WeekLessonEditor :school="school" @close="dialog = false" @save="$event ? dialog = false : null">
                </WeekLessonEditor>
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
                                    <span>Tutti i <b>{{ days[pl.dayOfWeek] }}</b></span>
                                </v-col>
                                <v-col class="text-grey" cols="5">
                                    Dal {{ yyyyMMdd.fromIyyyyMMdd(pl.from).format() }}
                                    al {{ yyyyMMdd.fromIyyyyMMdd(pl.to).format() }}
                                </v-col>
                                <v-col cols="1">
                                    <v-dialog transition="dialog-bottom-transition" fullscreen>
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn icon="mdi-pencil" variant="text" @click.stop="console.log('edit')"
                                                v-bind="activatorProps"></v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                            <WeekLessonEditor :school="school" :initialWeekLesson="pl" edit
                                                @close="isActive.value = false"
                                                @save="$event ? isActive.value = false : null"></WeekLessonEditor>
                                        </template>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="1">
                                    <DeleteDialog :name="'Tutti i ' + days[pl.dayOfWeek]" objName="Lezione Programmata"
                                        :onDelete="async () => await deleteWeeklyLesson(pl)">
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn icon="mdi-delete" variant="text" v-bind="activatorProps"></v-btn>
                                        </template>
                                    </DeleteDialog>
                                </v-col>
                            </v-row>
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list v-if="pl.schedule.length > 0">
                            <v-list-item v-for="element of pl.schedule" :key="element.studentId" :value="element"
                                color="primary">
                                <template v-slot:prepend>
                                    <p>
                                        <b>
                                            {{ Time.fromITime(element.startTime).format() }} - 
                                            {{ Time.fromITime(element.endTime).format() }}
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
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { days, Time, yyyyMMdd, type School, type Student, type WeeklyLesson } from '@/models/model';
import { nameof } from '@/models/utils';
import { deleteDoc, doc, onSnapshot, orderBy, query, where, type Unsubscribe } from 'firebase/firestore';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import DeleteDialog from '../DeleteDialog.vue';
import WeekLessonEditor from './WeekLessonEditor.vue';

interface CalendarLessonEditorProps {
    school: School;
}

const props = defineProps<CalendarLessonEditorProps>()
const emit = defineEmits(['close'])
const weekLessonsRef = useDB<WeeklyLesson>(DatabaseRef.WEEKLY_LESSONS);
const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const subscriptions: Unsubscribe[] = [];

const programmedLessons: Ref<WeeklyLesson[]> = ref([]);
const loadingCalendar = ref(false);
const loadingStudents = ref(false);
const allStudents: Ref<Student[]> = ref([]);
const dialog = ref(false);

async function deleteWeeklyLesson(weekLesson?: WeeklyLesson): Promise<boolean> {
    try {
        await deleteDoc(doc(weekLessonsRef, weekLesson?.id));
        return true;
    } catch (error) {
        return false;
    }
}

async function loadCalendar() {

    loadingCalendar.value = true;
    const unsub = onSnapshot(query(weekLessonsRef, where(nameof<WeeklyLesson>('schoolId'), '==', props.school.id), orderBy(nameof<WeeklyLesson>('dayOfWeek'))), (snapshot) => {
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