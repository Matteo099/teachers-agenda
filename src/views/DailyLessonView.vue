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

                    <template v-slot:default>
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
            <v-col>

                <DeleteDialog :name="yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).format()" objName="Lezione Giornaliera"
                    :onDelete="async () => await deleteDailyLesson()">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn color="error" v-bind="activatorProps">elimina lezione</v-btn>
                    </template>
                </DeleteDialog>
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
                                    <span><b>{{ Time.fromITime(item.startTime).format() }} - {{
                                        Time.fromITime(item.endTime).format() }}</b> &nbsp; <i>{{
                                                item.name }} {{ item.surname }}</i></span>
                                </template>
                            </v-checkbox>
                        </v-card-title>
                        <v-card-text>
                            <v-btn class="ma-1" v-if="item.status != LessonStatus.PRESENT"
                                @click="present(item)">presente</v-btn>
                            <v-btn class="ma-1"
                                v-if="item.status != LessonStatus.ABSENT && item.recovery?.origin != 'original'"
                                @click="absent(item)">assente</v-btn>
                            <v-btn class="ma-1" v-if="item.status != LessonStatus.CANCELLED"
                                @click="cancel(item)">cancella</v-btn>
                            <v-btn class="ma-1" v-if="item.status != LessonStatus.NONE"
                                @click="reset(item)">reset</v-btn>

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
import { LessonStatus, lessonStatusColor, Time, updateDailyLessonTime, yyyyMMdd, type DailyLesson, type Lesson, type Student, type StudentLesson } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { StudentService } from '@/models/services/student-service';
import { arraysHaveSameElements } from '@/models/utils';
import { doc, Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useDocument } from 'vuefire';

const route = useRoute();
const router = useRouter();
const dailyLessonsRef = useDB<DailyLesson>(DatabaseRef.DAILY_LESSONS);

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
        event.status = LessonStatus.CANCELLED
        save();
    }
}
function reset(event: StudentLesson) {
    if (event) {
        doBackup();
        event.status = LessonStatus.NONE
        save();
    }
}

function notes(event: StudentLesson) { }

function toggleAll() {
    if (!selectAllLessons.value) {
        selectedLessons.value = [...Array(studentLessons.value.length).keys()]
    } else {
        selectedLessons.value = [];
    }
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

    try {
        loadingAllStudents.value = true;
        const studentIds = dailyLesson.value.lessons.map(l => l.studentId)
        const students = await StudentService.instance.getStudentsOfSchool(dailyLesson.value.schoolId);
        availableStudents.value = students.filter(s => !studentIds.includes(s.id))
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
        const lastLessonEndTime = newDailyLesson.lessons?.length == 0 ? 0 : newDailyLesson.lessons![newDailyLesson.lessons!.length - 1].endTime;
        newDailyLesson.lessons?.push({
            lessonId: uuidv4(),
            status: LessonStatus.NONE,
            studentId: s.id,
            startTime: lastLessonEndTime,
            endTime: lastLessonEndTime + s.minutesLessonDuration * 60,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
        });
    })
    try {
        // save it
        await DailyLessonRepository.instance.update(newDailyLesson, newDailyLesson.id!);
        toast.success("Studenti aggiunti!");
        studentsDialog.value = false;
        console.log("Document (daily lessons) update with ID: ", newDailyLesson.id);
    } catch (error) {
        toast.warning("Impossibile aggiungere gli studenti alla lezione giornaliera")
    } finally {
        savingSelectedStudents.value = false;
    }
}

async function deleteDailyLesson() {
    if (!dailyLesson.value) return false;

    try {
        await DailyLessonRepository.instance.delete(dailyLesson.value.id);
        router.go(-1)
        return true;
    } catch (error) {
        return false;
    }
}

async function deleteStudent(student: StudentLesson) {
    const newDailyLesson = { ...dailyLesson.value };

    const index = newDailyLesson.lessons?.findIndex(s => s.studentId == student.id) ?? -1;
    if (index == -1)
        return false;
    const startingTime = index == 0 ? newDailyLesson.lessons![index].startTime : newDailyLesson.lessons![index - 1].startTime;
    newDailyLesson.lessons?.splice(index, 1);
    updateDailyLessonTime(startingTime, { scheduledLessons: newDailyLesson.lessons!, students: studentLessons.value });

    try {
        await DailyLessonRepository.instance.update(newDailyLesson, newDailyLesson.id!);
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

    const data = await StudentService.instance.getStudentsOfSchoolWithIds(dailyLesson.value.schoolId, newStudentsId);
    studentLessons.value = dailyLesson.value.lessons.map(l => {
        const s = data.find(st => st.id == l.studentId)!;
        return { ...l, ...s };
    });

    loadingStudents.value = false;
}

async function save() {
    saving.value = true;
    const dl = extractDailyLesson();
    if (dl === undefined) {
        saving.value = false;
        return;
    }
    try {
        await DailyLessonRepository.instance.update(dl, dl.id);
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
            lessonId: uuidv4(),
            createdAt: l.createdAt,
            studentId: l.studentId,
            startTime: l.startTime,
            endTime: l.endTime,
            status: less.status,
            updatedAt: Timestamp.now()
        }
        if (l.recovery) newLesson.recovery = l.recovery;
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