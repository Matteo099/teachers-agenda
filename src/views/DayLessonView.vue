<template>
    <v-container fluid v-if="dailyLesson">
        <p class="text-h5 text-center mb-6">Lezioni del <b>{{ yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).format() }}</b>
        </p>
        <v-row>
            <v-btn @click="present" :disabled="!areLessonSelected">presenti</v-btn>
            <v-btn @click="absent" :disabled="!areLessonSelected">assenti</v-btn>

            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn @click="loadSchoolStudents" v-bind="activatorProps">Aggiugni studente</v-btn>
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
                :indeterminate="selectedLessons.length != 0 && selectedLessons.length != studentLessons.length"
                @click="toggleAll"></v-checkbox>
        </v-row>

        <v-row>
            <v-col cols=4>
                Prova...
            </v-col>
            <v-col align-start cols=8>
                <!-- <v-timeline side="end" truncate-line="both">

                    <v-timeline-item class="event-item" :dot-color="getColor(e)" size="small" :key="e.id"
                        v-for="(e, index) in studentLessons">
                        <div class="d-flex">
                            <v-checkbox v-model="selectedLessons" :value="index" multiple></v-checkbox>

                            <v-expansion-panels :id="'time' + index">
                                <v-expansion-panel :text="e.notes?.toString()">
                                    <template v-slot:title>
                                        <div class="d-flex justify-space-between w-100">
                                            <strong class="ml-4">{{ e.name }} {{ e.surname }}</strong>
                                            <v-icon v-if="e.notes?.toString().trim().length != 0"
                                                color="primary">mdi-note</v-icon>
                                            <span class="mr-4">{{ Time.fromITime(e.time).format() }}</span>
                                        </div>
                                    </template>

                                    <template v-slot:text>
                                        <v-btn @click="present(e)">presente</v-btn>
                                        <v-btn @click="absent(e)">assente</v-btn>
                                        <v-btn @click="cancel(e)" v-if="e.status != LessonStatus.NONE">annulla</v-btn>
                                        <v-btn @click="notes(e)">note</v-btn>
                                        <v-btn v-if="e.status == LessonStatus.ABSENT"
                                            @click="scheduleRecoveryLesson(e)">schedula
                                            recupero</v-btn>
                                        {{ e.notes }}
                                    </template>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-timeline-item>
                </v-timeline> -->

                <v-timeline side="end" truncate-line="both">
                    <v-timeline-item v-for="(item, index) in studentLessons" :key="item.id" :dot-color="getColor(item)"
                        size="small">
                        <!-- <v-card elevation=3>
                            <template v-slot:prepend>
                                <v-checkbox v-model="selectedLessons" :value="index" multiple></v-checkbox>
                            </template>
                            <template v-slot:text>
                                <v-row class="align-center justify-space-between">
                                    <v-col cols="8">
                                        <span class="w-100"><b>{{ Time.fromITime(item.time).format() }}</b> - <i>{{
                                            item.name }} {{ item.surname }}</i></span>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-icon color="primary">mdi-note</v-icon>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-btn variant="text" icon="mdi-pencil"></v-btn>
                                    </v-col>
                                </v-row>
                                <div class="d-flex justify-space-between align-center">
                                </div>
                            </template>
                        </v-card> -->
                        <v-alert :value="true">
                            <template v-slot:prepend>
                                <v-checkbox v-model="selectedLessons" :value="index" multiple></v-checkbox>
                            </template>
                            <template v-slot:text>
                                <v-row class="align-center justify-space-between">
                                    <v-col cols="8">
                                        <span class="w-100"><b>{{ Time.fromITime(item.time).format() }}</b> - <i>{{
                                            item.name }} {{ item.surname }}</i></span>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-icon color="primary">mdi-note</v-icon>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-btn variant="text" icon="mdi-pencil"></v-btn>
                                    </v-col>
                                </v-row>
                                <div class="d-flex justify-space-between align-center">
                                </div>
                            </template>
                            <!-- <v-row>
                                <v-col>
                                    <v-btn @click="present(item)">presente</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn @click="absent(item)">assente</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn @click="cancel(item)" v-if="item.status != LessonStatus.NONE">annulla</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn @click="notes(item)">note</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn v-if="item.status == LessonStatus.ABSENT"
                                        @click="scheduleRecoveryLesson(item)">schedula
                                        recupero</v-btn>
                                </v-col>
                                {{ item.notes }} 
                            </v-row> -->
                        </v-alert>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>


    </v-container>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { LessonStatus, lessonStatusColor, Time, yyyyMMdd, type DailyLesson, type Lesson, type Student } from '@/models/model';
import { nameof } from '@/models/utils';
import { doc, documentId, getDocs, query, where, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDocument } from 'vuefire';

type StudentLesson = Lesson & Student;

const route = useRoute()
const dailyLessonsRef = useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS);
const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const subscriptions: Unsubscribe[] = [];

const selectedLessons: Ref<number[]> = ref([])
const selectAllLessons: Ref<boolean> = ref(false)
const studentLessons: Ref<StudentLesson[]> = ref([])
const allStudents: Ref<any[]> = ref([]);
const loadingStudents = ref(false);

const items = [
    {
        id: 1,
        color: 'info',
        icon: 'mdi-information',
    },
    {
        id: 2,
        color: 'error',
        icon: 'mdi-alert-circle',
    },
];

const dailyLessonSource = computed(() =>
    doc(dailyLessonsRef, route.params.id as string)
)
const dailyLesson = useDocument(dailyLessonSource)

const areLessonSelected = computed(() => selectedLessons.value.length != 0)

watch(dailyLesson, () => updateStudentLesson())
watch(selectedLessons, () => {
    if (selectedLessons.value.length == 0)
        selectAllLessons.value = false
})

function getColor(event: StudentLesson): string {
    if (event.trial) return 'yellow';
    return lessonStatusColor[event.status];
}

function present(event: any) {
    if (event) event.status = LessonStatus.PRESENT;

    selectedLessons.value.forEach(s => {
        studentLessons.value[s].status = LessonStatus.PRESENT
    });
    selectedLessons.value = []
}
function absent(event: any) {
    selectedLessons.value.forEach(s => {
        studentLessons.value[s].status = LessonStatus.ABSENT
    });
    selectedLessons.value = []
    if (event) event.status = LessonStatus.ABSENT;
}
function cancel(event: any) {
    if (event) event.status = LessonStatus.NONE
}
function scheduleRecoveryLesson(event: any) {
    event.status = LessonStatus.RESCHEDULED
}
function notes(event: any) { }

function toggleAll() {
    if (!selectAllLessons.value) {
        selectedLessons.value = [...Array(studentLessons.value.length).keys()]
    } else {
        selectedLessons.value = [];
    }
}

function addStudent(student: any) {
    studentLessons.value.push(student);
}

async function loadSchoolStudents() {

}

async function updateStudentLesson() {
    if (!dailyLesson.value) return;

    const currentStudentsId: string[] = studentLessons.value.map(s => s.studentId);
    const newStudentsId: string[] = dailyLesson.value.lessons.map(l => l.studentId);

    const differentStudents = !arraysHaveSameElements(currentStudentsId, newStudentsId);
    if (!differentStudents) return;

    loadingStudents.value = true;

    // fetch students TODO: d id always null on DB => query by path!!
    const q = query(
        studentsRef,
        where(nameof<Student>('schoolId'), '==', dailyLesson.value.schoolId),
        where(documentId(), 'in', newStudentsId));

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map(doc => doc.data())

    studentLessons.value = dailyLesson.value.lessons.map(l => {
        const s = data.find(st => st.id == l.studentId)!;
        return { ...l, ...s };
    });

    loadingStudents.value = false;
    console.log("Current data: ", snapshot, data);
}

function arraysHaveSameElements(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) return false;

    // Sort both arrays and compare them element by element
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();

    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}

// function scrollToCurrentLesson() {
//     const now = new Date();
//     let i = 0;
//     for (i = 0; i < events.value.length; i++) {
//         const e = events.value[i];
//         if (date.isAfter(now, e.start) && date.isBefore(now, e.end)) {
//             break;
//         }
//     }
//     const el = document.getElementById('time' + i);
//     el?.scrollIntoView({ block: 'start', behavior: 'smooth' });
// }


onUnmounted(() => {
    subscriptions.forEach(u => u?.());
})

onMounted(async () => {
    // scrollToCurrentLesson();
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