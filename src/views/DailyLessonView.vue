<template>
    <v-container fluid v-if="dailyLesson && school && !loading">
        <v-row class="justify-center align-center mb-6">
            <v-col cols="auto">
                <BackButton></BackButton>
            </v-col>
            <v-col>
                <v-row>
                    <v-col>
                        <p class="text-h5 text-center">Lezione del <b>{{
                            yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).format()
                                }}</b>
                        </p>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col cols="auto">
                        <span class="text-subtitle">
                            Totale: <b> {{ total }} €</b>
                        </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
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
                                <SelectStudents v-model="selectedStudents" :all-students="availableStudents" />
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
                        <v-btn color="error" v-bind="activatorProps" ref="deleteDailyLessonBtn">elimina lezione</v-btn>
                    </template>
                </DeleteDialog>
            </v-col>

            <v-col>
                <v-btn-toggle v-model="visualization" mandatory shaped>
                    <v-btn>
                        <v-icon>mdi-format-list-bulleted</v-icon>
                    </v-btn>

                    <v-btn>
                        <v-icon>mdi-calendar-week-begin-outline</v-icon>
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>


        <v-container fluid>
            <v-slide-x-transition leave-absolute>
                <DailyLessonCalendar v-if="visualization == 1" :date="yyyyMMdd.fromIyyyyMMdd(dailyLesson.date)"
                    :school="school" v-model="studentLessons" editable sort @edit="save">
                </DailyLessonCalendar>

                <v-timeline v-else side="end" truncate-line="both">
                    <v-timeline-item v-for="(item, index) in studentLessons" :key="item.id + dailyLesson.id"
                        :dot-color="getColor(item)" size="small">
                        <LessonItem :school="school" :key="item.id + dailyLesson.id"
                            v-model:item="studentLessons[index]" v-model:select="selectedLessons"
                            @present="present(item)" @absent="absent(item, $event)"
                            :moveLesson="async ($event) => await moveLesson(item, $event)" @trial="trial(item)"
                            @reset="reset(item)"
                            :updateLessonTime="async ($event) => await updateLessonTime(item, $event)"
                            :onDeleteLessonItem="async () => await deleteStudentLesson(item)">
                        </LessonItem>
                    </v-timeline-item>
                </v-timeline>
            </v-slide-x-transition>
        </v-container>

        <v-overlay :model-value="saving" class="align-center justify-center">
            <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
        </v-overlay>
    </v-container>

    <v-container fluid v-else>
        <v-skeleton-loader class="mx-auto" type="heading"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto justify-center"
            type="chip, chip, chip, chip, chip, chip, chip"></v-skeleton-loader>
        <v-skeleton-loader v-for="i in 3" :key="i" class="mx-auto justify-center mt-4" max-width="75%" elevation=3
            type="sentences, chip, chip, chip, chip"></v-skeleton-loader>
    </v-container>
</template>

<script setup lang="ts">
import DailyLessonCalendar from '@/components/calendar/DailyLessonCalendar.vue';
import DeleteDialog from '@/components/DeleteDialog.vue';
import BackButton from '@/components/inputs/BackButton.vue';
import SelectStudents from '@/components/inputs/SelectStudents.vue';
import LessonItem from '@/components/lesson/LessonItem.vue';
import { LessonStatus, Time, yyyyMMdd, type DailyLesson, type EventTime, type Lesson, type School, type Student, type StudentLesson } from '@/models/model';
import type { ID } from '@/models/repositories/abstract-repository';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { SalaryService } from '@/models/services/salary-service';
import { LessonStatusAction, SchoolRecoveryLessonService } from '@/models/services/school-recovery-lesson-service';
import { StudentLessonService } from '@/models/services/student-lesson-service';
import { StudentService } from '@/models/services/student-service';
import { WeeklyLessonService } from '@/models/services/weely-lesson-service';
import { arraysHaveSameElements } from '@/models/utils';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useDocument } from 'vuefire';

const route = useRoute();
const router = useRouter();

const id = computed(() => route.params.id as string);
const dailyLessonSource = DailyLessonRepository.instance.observe(id);
const dailyLesson = useDocument(dailyLessonSource);
const school: Ref<School | undefined> = ref();

const selectedLessons: Ref<string[]> = ref([])
const selectAllLessons: Ref<boolean> = ref(false)
const studentLessons: Ref<StudentLesson[]> = ref([])
const availableStudents: Ref<Student[]> = ref([]);
const selectedStudents: Ref<Student[]> = ref([]);
const loadingStudents = ref(false);
const loadingSchool = ref(false);
const loadingAllStudents = ref(false);
const saving = ref(false);
const savingSelectedStudents = ref(false);
const studentsDialog = ref(false);
const routeChanged = ref(true);
const visualization = ref(0);

const total = computed(() => isNaN(dailyLesson.value?.salary ?? 0) ? 0 : dailyLesson.value?.salary)
const areLessonSelected = computed(() => selectedLessons.value.length != 0)
const loading = computed(() => loadingStudents.value || loadingSchool.value || !school.value || !dailyLesson.value || routeChanged.value);
let currentDailyLessonId: ID | undefined = undefined;

watch(dailyLesson, () => updateStudentLesson())
watch(dailyLessonSource, () => routeChanged.value = true)
watch(selectedLessons, () => {
    if (selectedLessons.value.length == 0)
        selectAllLessons.value = false
})

function getColor(event: StudentLesson): string {
    if (event.recovery && event.recovery.ref == 'recovery') return "#5193FC";
    // if (event.moved && event.moved.ref == 'moved') return "#D5AC4E";
    if (event.status == LessonStatus.NONE) return "#46494C";
    if (event.status == LessonStatus.PRESENT) return "#00D138";
    if (event.status == LessonStatus.ABSENT || event.status == LessonStatus.UNJUSTIFIED_ABSENCE) return "#B3001B";
    if (event.status == LessonStatus.TRIAL) return "#57C282";

    return "#808080";
}

async function present(event: StudentLesson) {
    doBackup();
    const _studentLessons = selectedLessons.value.map(id => studentLessons.value.find(st => st.id == id)).filter(s => !!s);
    _studentLessons.push(event);
    //@ts-ignore
    _studentLessons.forEach(s => s.status = LessonStatus.PRESENT)
    selectedLessons.value = []
    await save();
    //@ts-ignore
    await SchoolRecoveryLessonService.instance.updateRecovery(LessonStatusAction.SET_PRESENT, dailyLesson.value!.schoolId, ..._studentLessons.map(s => ({ ...s, dailyLessonId: dailyLesson.value!.id })));
}
async function absent(event: StudentLesson, canRecover = true) {
    doBackup();
    const _studentLessons = selectedLessons.value.map(id => studentLessons.value.find(st => st.id == id)).filter(s => !!s);
    _studentLessons.push(event);
    //@ts-ignore
    _studentLessons.forEach(s => s.status = canRecover ? LessonStatus.ABSENT : LessonStatus.UNJUSTIFIED_ABSENCE)
    selectedLessons.value = []
    await save();
    //@ts-ignore
    if (canRecover) await SchoolRecoveryLessonService.instance.updateRecovery(LessonStatusAction.SET_ABSENT, dailyLesson.value!.schoolId, ..._studentLessons.map(s => ({ ...s, dailyLessonId: dailyLesson.value!.id })));
}
async function trial(event: StudentLesson) {
    if (event) {
        doBackup();
        event.status = LessonStatus.TRIAL
        await save();
        await StudentService.instance.setTrialDone(event, dailyLesson.value?.date, dailyLesson.value?.id);
    }
}
async function reset(event: StudentLesson) {
    if (event) {
        doBackup();
        const wasTrial = event.status == LessonStatus.TRIAL;
        event.status = LessonStatus.NONE
        if (event.moved) await DailyLessonService.instance.undoMoveDailyLesson(event);
        await save();
        await SchoolRecoveryLessonService.instance.updateRecovery(LessonStatusAction.RESET, dailyLesson.value!.schoolId, { ...event, dailyLessonId: dailyLesson.value!.id });
        if (wasTrial) await StudentService.instance.unsetTrial(event);
    }
}

async function moveLesson(event: StudentLesson, lessonDate: Date) {
    if (!event || !school.value || !lessonDate) {
        console.warn("Unable to move the lesson because the event/school/date is undefined!");
        return false;
    }

    try {
        await DailyLessonService.instance.moveDailyLesson(school.value.id, dailyLesson.value!.id, event, lessonDate);
        await save();
        return true;
    } catch (error) {
        console.warn(error);
        return false;
    }
}

async function updateLessonTime(event: StudentLesson, newDataEvent: EventTime) {
    const startTime = Time.fromHHMM(newDataEvent.startTime)?.toITime();
    const endTime = Time.fromHHMM(newDataEvent.endTime)?.toITime();
    if (startTime == undefined || endTime == undefined) {
        return false;
    }
    doBackup();
    event.startTime = startTime;
    event.endTime = endTime;
    studentLessons.value.sort((a, b) => a.startTime - b.startTime);
    await save();
    return true;
}

function toggleAll() {
    if (!selectAllLessons.value) {
        selectedLessons.value = [...studentLessons.value.map(s => s.id)]
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
        // 08:00 => 28800 seconds
        const lastLessonEndTime = newDailyLesson.lessons?.length == 0 ? 28800 : newDailyLesson.lessons![newDailyLesson.lessons!.length - 1].endTime;
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
        await DailyLessonRepository.instance.save(newDailyLesson, newDailyLesson.id!);
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
        const excludedDate = await DailyLessonService.instance.delete(dailyLesson.value);
        if (excludedDate) toast.info("La data è stata aggiunta ai giorni da escludere della lezione settimanale")
        router.push(`/school/${school.value!.id}`);
        return true;
    } catch (error) {
        return false;
    }
}

async function deleteStudentLesson(student: StudentLesson, deleteDailyLessonWhenNoLessons = true) {
    if (!dailyLesson.value) return false;

    try {
        const res = await DailyLessonService.instance.deleteLessonAndRecoveryReferences(student, dailyLesson.value, deleteDailyLessonWhenNoLessons);
        if (res) {
            if (!dailyLesson.value || dailyLesson.value.lessons.length == 0) {
                router.push(`/school/${school.value!.id}`);
            }
        }
        return res;
    } catch (error) {
        console.warn("Unable to delete the student lesson...", error)
        return false;
    }
}

async function updateStudentLesson() {
    routeChanged.value = false;

    if (!dailyLesson.value) return;
    if (!school.value) {
        loadingSchool.value = true;
        school.value = await SchoolRepository.instance.get(dailyLesson.value.schoolId);
        loadingSchool.value = false;
    }
    const currentStudentsId: string[] = studentLessons.value.map(s => s.studentId);
    const newStudentsId: string[] = dailyLesson.value.lessons.map(l => l.studentId);

    const differentStudents = !arraysHaveSameElements(currentStudentsId, newStudentsId);
    if (!differentStudents && currentDailyLessonId == dailyLesson.value.id) return;

    loadingStudents.value = true;

    currentDailyLessonId = dailyLesson.value.id;
    studentLessons.value = await StudentLessonService.instance.getStudentLesson(dailyLesson.value, newStudentsId);
    computeSalaryAndSave();

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
        await DailyLessonRepository.instance.save(dl, dl.id);
        toast.success("Modifiche salvate", { autoClose: 1000 });
        saving.value = false;
    } catch (e) {
        console.error("Error adding document (dailyLesson): ", e);
        saving.value = false;
        doRestore();
    }
}

function computeSalaryAndSave() {
    if (dailyLesson.value?.salaryStrategy != school.value?.salaryStrategy) {
        toast.info("Aggiornamento dello stipendio giornaliero in corso...");
        save();
    }
}

function extractDailyLesson(): DailyLesson | undefined {
    const dl = dailyLesson.value;
    if (dl === undefined) return;
    const lessons: Lesson[] = [];
    let salary = 0;
    dl.lessons.forEach(l => {
        const less = studentLessons.value.find(sl => sl.id == l.studentId);
        if (less === undefined) return;
        const newLesson: Lesson = {
            // lessonId: uuidv4(),
            lessonId: l.lessonId,
            createdAt: l.createdAt,
            studentId: l.studentId,
            startTime: less.startTime,
            endTime: less.endTime,
            status: less.status,
            updatedAt: Timestamp.now()
        }
        if (l.recovery) newLesson.recovery = l.recovery;
        lessons.push(newLesson);

        salary += SalaryService.instance.computeSalaryByStudentLesson(school.value, less);
    })
    const newDailyLesson: DailyLesson = {
        date: dl.date,
        id: dl.id,
        lessons: lessons.sort((a, b) => a.startTime - b.startTime),
        schoolId: dl.schoolId,
        lastSalaryUpdate: Timestamp.now(),
        salary
    };
    if (school.value?.salaryStrategy != undefined) newDailyLesson.salaryStrategy = school.value?.salaryStrategy;
    return newDailyLesson;
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
    window.scrollTo(0, 0);
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