<template>
    <v-container fluid v-if="dailyLesson">
        <p class="text-h5 text-center mb-6">Lezioni del <b>{{ yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).format() }}</b>
        </p>
        <v-row>
            <v-col>
                <v-btn @click="present" :disabled="!areLessonSelected">presenti</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="absent" :disabled="!areLessonSelected">assenti</v-btn>
            </v-col>
            <v-col>
                <v-dialog v-model="studentsDialog" transition="dialog-bottom-transition" max-width="500" persistent>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn @click="loadSchoolStudents" v-bind="activatorProps">Aggiungi studente</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Tutti gli studenti della scuola" :loading="loadingAllStudents">
                            <v-card-text>
                                <VSelectStudents v-model="selectedStudents" :all-students="availableStudents" />
                            </v-card-text>
                            <v-card-actions>
                                <v-btn text="Annulla" @click="studentsDialog = false"></v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text="Salva" @click="saveSelectedStudents"
                                    :loading="savingSelectedStudents"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </v-col>
            <v-col>
                <v-checkbox v-model="selectAllLessons"
                    :indeterminate="selectedLessons.length != 0 && selectedLessons.length != studentLessons.length"
                    @click="toggleAll"></v-checkbox>
            </v-col>
        </v-row>

        <v-container fluid>
            <v-timeline side="end" truncate-line="both">
                <v-timeline-item v-for="(item, index) in studentLessons" :key="item.id" :dot-color="getColor(item)"
                    size="small">
                    <v-card elevation=3>
                        <v-card-title>
                            <v-checkbox v-model="selectedLessons" :value="index" multiple>
                                <template v-slot:label>
                                    <span><b>{{ Time.fromITime(item.time).format() }}</b> - <i>{{
                                        item.name }} {{ item.surname }}</i></span>
                                </template>
                            </v-checkbox>
                        </v-card-title>
                        <v-card-text>
                            <v-btn class="ma-1" v-if="item.status != LessonStatus.PRESENT"
                                @click="present(item)">presente</v-btn>
                            <v-btn class="ma-1" v-if="item.status != LessonStatus.ABSENT"
                                @click="absent(item)">assente</v-btn>
                            <v-btn class="ma-1" v-if="item.status != LessonStatus.NONE"
                                @click="cancel(item)">annulla</v-btn>
                            <v-btn class="ma-1" v-if="item.status == LessonStatus.ABSENT"
                                @click="scheduleRecoveryLesson(item)">schedula recupero</v-btn>
                            <v-btn class="ma-1" @click="notes(item)">note</v-btn>

                            <DeleteDialog :name="`${item.name} ${item.surname}`" objName="Studente"
                                :onDelete="async () => await deleteStudent(item)">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn color="error" v-bind="activatorProps">elimina</v-btn>
                                </template>
                            </DeleteDialog>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-container>

        <v-overlay :model-value="saving" class="align-center justify-center">
            <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import VSelectStudents from '@/components/inputs/VSelectStudents.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { LessonStatus, lessonStatusColor, Time, updateDailyLessonTime, yyyyMMdd, type DailyLesson, type Lesson, type Student } from '@/models/model';
import { nameof } from '@/models/utils';
import { doc, documentId, getDocs, query, setDoc, Timestamp, where, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useDocument } from 'vuefire';

type StudentLesson = Lesson & Student;

const route = useRoute()
const dailyLessonsRef = useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS);
const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const subscriptions: Unsubscribe[] = [];

const selectedLessons: Ref<number[]> = ref([])
const selectAllLessons: Ref<boolean> = ref(false)
const studentLessons: Ref<StudentLesson[]> = ref([])
const availableStudents: Ref<Student[]> = ref([]);
const selectedStudents: Ref<Student[]> = ref([]);
const loadingStudents = ref(false);
const loadingAllStudents = ref(false);
const saving = ref(false);
const savingSelectedStudents = ref(false);
const studentsDialog = ref(false);

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

async function present(event: StudentLesson) {
    doBackup();
    if (event) event.status = LessonStatus.PRESENT;
    selectedLessons.value.forEach(s => {
        studentLessons.value[s].status = LessonStatus.PRESENT
    });
    selectedLessons.value = []
    save();
}
function absent(event: StudentLesson) {
    doBackup();
    selectedLessons.value.forEach(s => {
        studentLessons.value[s].status = LessonStatus.ABSENT
    });
    selectedLessons.value = []
    if (event) event.status = LessonStatus.ABSENT;
    save();
}
function cancel(event: StudentLesson) {
    if (event) {
        doBackup();
        event.status = LessonStatus.NONE
        save();
    }
}
function scheduleRecoveryLesson(event: StudentLesson) {
    doBackup();
    event.status = LessonStatus.RESCHEDULED
    save();
}
function notes(event: StudentLesson) { }

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

let backup: string;
function doBackup() {
    backup = JSON.stringify(studentLessons.value);
}

function doRestore() {
    if (backup != undefined)
        studentLessons.value = JSON.parse(backup);
}

async function loadSchoolStudents() {
    if (!dailyLesson.value) return;

    loadingAllStudents.value = true;

    const studentIds = dailyLesson.value.lessons.map(l => l.studentId)
    console.log(studentIds, dailyLesson.value.schoolId)
    const q = query(
        studentsRef,
        where(nameof<Student>('schoolId'), '==', dailyLesson.value.schoolId));
    try {
        const snapshot = await getDocs(q);
        console.log(snapshot)
        availableStudents.value = snapshot.docs.map(doc => doc.data()).filter(s => !studentIds.includes(s.id))
        selectedStudents.value = [];
    } catch (error) {
        toast.warn("Impossibile caricare gli studenti...")
        console.log(error);
    } finally {
        loadingAllStudents.value = false;
    }
}

async function saveSelectedStudents() {
    savingSelectedStudents.value = true;

    const newDailyLesson = { ...dailyLesson.value };
    selectedStudents.value.forEach(s => {
        const lastLessonTime = newDailyLesson.lessons?.length == 0 ? 0 : newDailyLesson.lessons![newDailyLesson.lessons!.length - 1].time;
        newDailyLesson.lessons?.push({
            status: LessonStatus.NONE,
            studentId: s.id,
            time: lastLessonTime + s.minutesLessonDuration * 60,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
        });
    })
    try {
        // save it
        await setDoc(doc(dailyLessonsRef, newDailyLesson.id), newDailyLesson);
        toast.success("Studenti aggiunti!");
        studentsDialog.value = false;
        console.log("Document (daily lessons) update with ID: ", newDailyLesson.id);
    } catch (error) {
        toast.warning("Impossibile aggiungere gli studenti alla lezione giornaliera")
    } finally {
        savingSelectedStudents.value = false;
    }
}

async function deleteStudent(student: StudentLesson) {
    const newDailyLesson = { ...dailyLesson.value };
    newDailyLesson.lessons = newDailyLesson.lessons?.filter(s => s.studentId != student.id) ?? [];

    const startingTime = newDailyLesson.lessons?.length == 0 ? 0 : newDailyLesson.lessons![newDailyLesson.lessons!.length - 1].time;
    updateDailyLessonTime(startingTime, { scheduledLessons: newDailyLesson.lessons!, students: studentLessons.value });

    try {
        await setDoc(doc(dailyLessonsRef, newDailyLesson.id), newDailyLesson);
        return true;
    } catch (error) {
        return false;
    }
}

async function updateStudentLesson() {
    if (!dailyLesson.value) return;

    const currentStudentsId: string[] = studentLessons.value.map(s => s.studentId);
    const newStudentsId: string[] = dailyLesson.value.lessons.map(l => l.studentId);

    const differentStudents = !arraysHaveSameElements(currentStudentsId, newStudentsId);
    if (!differentStudents) return;

    loadingStudents.value = true;

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

async function save() {
    saving.value = true;
    const dl = extractDailyLesson();
    if (dl === undefined) {
        saving.value = false;
        return;
    }
    try {
        const docRef = await setDoc(doc(dailyLessonsRef, dl.id), dl);
        console.log("Document (dailyLesson) update with ID: ", dl.id, docRef);
        saving.value = false;
    } catch (e) {
        console.error("Error adding document (dailyLesson): ", e);
        saving.value = false;
        doRestore();
    }
}

function extractDailyLesson(): DailyLesson | undefined {
    const dl = dailyLesson.value;
    if (dl === undefined) return;
    const lessons: Lesson[] = [];
    dl.lessons.forEach(l => {
        const less = studentLessons.value.find(sl => sl.id == l.studentId);
        if (less === undefined) return;
        const newLesson: Lesson = {
            createdAt: l.createdAt,
            studentId: l.studentId,
            time: l.time,
            status: less.status,
            updatedAt: Timestamp.now()
        }
        if (l.originalScheduledLessonId) newLesson.originalScheduledLessonId = l.originalScheduledLessonId;
        if (l.recoveryDate) newLesson.recoveryDate = l.recoveryDate;
        if (l.trial) newLesson.trial = l.trial;
        lessons.push(newLesson);
    })
    return {
        date: dl.date,
        id: dl.id,
        lessons,
        schoolId: dl.schoolId
    } as DailyLesson;
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

<!-- <style scoped>
div.v-timeline-item__body {
    width: 100%
}

div.v-input__details {
    display: none;
}
</style> -->