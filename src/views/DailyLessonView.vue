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
                    <v-timeline-item v-for="(item, index) in studentLessons"
                        :key="item.id + dailyLesson.id + item.lessonId" :dot-color="getColor(item)" size="small">
                        {{ item }}
                        <LessonItem :school="school" :key="item.id + dailyLesson.id + item.lessonId"
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
import { LessonStatus, yyyyMMdd, type EventTime, type School, type Student, type StudentLesson } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { DailyLessonService2 } from '@/models/services/daily-lesson-service2';
import { StudentLessonService } from '@/models/services/student-lesson-service';
import { StudentService } from '@/models/services/student-service';
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

watch(dailyLesson, dailyLessonUpdate)
watch(dailyLessonSource, () => routeChanged.value = true)
watch(selectedLessons, () => {
    if (selectedLessons.value.length == 0)
        selectAllLessons.value = false
})

function getColor(event: StudentLesson): string {
    if (event.recovery && event.recovery.ref == 'recovery') return "#5093fc";
    if (event.moved && event.moved.ref == 'moved') return "#ffb135";
    if (event.status == LessonStatus.NONE) return "#46494C";
    if (event.status == LessonStatus.PRESENT) return "#45de62";
    if (event.status == LessonStatus.ABSENT) return "#df4a36";
    if (event.status == LessonStatus.UNJUSTIFIED_ABSENCE) return "#df4a36";
    if (event.status == LessonStatus.TRIAL) return "#2ecfc0";

    return "#808080";
}

async function present(event: StudentLesson) {
    try {
        const _studentLessons = selectedLessons.value.map(id => studentLessons.value.find(st => st.id == id)).filter(s => !!s);
        _studentLessons.push(event);

        await DailyLessonService2.instance.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson.value!, _studentLessons);

        selectedLessons.value = []
        return true;
    } catch (error) {
        return false;
    }
}
async function absent(event: StudentLesson, canRecover = true) {
    try {
        const _studentLessons = selectedLessons.value.map(id => studentLessons.value.find(st => st.id == id)).filter(s => !!s);
        _studentLessons.push(event);

        const status = canRecover ? LessonStatus.ABSENT : LessonStatus.UNJUSTIFIED_ABSENCE
        await DailyLessonService2.instance.updateLessonsStatus(status, dailyLesson.value!, _studentLessons);

        selectedLessons.value = []
        return true;
    } catch (error) {
        return false;
    }
}
async function trial(event: StudentLesson) {
    try {
        await DailyLessonService2.instance.updateLessonsStatus(LessonStatus.TRIAL, dailyLesson.value!, [event]);
        return true;
    } catch (error) {
        return false;
    }
}
async function reset(event: StudentLesson) {
    try {
        await DailyLessonService2.instance.resetLessons(dailyLesson.value!, [event]);
        return true;
    } catch (error) {
        return false;
    }
}

async function moveLesson(event: StudentLesson, lessonDate: Date) {
    try {
        await DailyLessonService2.instance.moveLessons(dailyLesson.value!, lessonDate, [event]);
        return true;
    } catch (error) {
        return false;
    }
}

async function updateLessonTime(event: StudentLesson, newDataEvent: EventTime) {
    try {
        await DailyLessonService2.instance.updateLessonTime(dailyLesson.value!, newDataEvent, event);
        studentLessons.value.sort((a, b) => a.startTime - b.startTime);
        return true;
    } catch (error) {
        return false;
    }
}

function toggleAll() {
    if (!selectAllLessons.value) {
        selectedLessons.value = [...studentLessons.value.map(s => s.id)]
    } else {
        selectedLessons.value = [];
    }
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
    try {
        savingSelectedStudents.value = true;

        await DailyLessonService2.instance.addStudents(dailyLesson.value!, selectedStudents.value);

        toast.success("Studenti aggiunti!");
        studentsDialog.value = false;
    } catch (error) {
        toast.warning("Impossibile aggiungere gli studenti alla lezione giornaliera")
    } finally {
        savingSelectedStudents.value = false;
    }
}

async function deleteDailyLesson() {
    if (!dailyLesson.value) return false;

    try {
        const excludedDate = await DailyLessonService2.instance.delete(dailyLesson.value);
        if (excludedDate) toast.info("La data è stata aggiunta ai giorni da escludere della lezione settimanale")
        router.push(`/school/${school.value!.id}`);
        return true;
    } catch (error) {
        return false;
    }
}

async function deleteStudentLesson(_studentLesson: StudentLesson, deleteDailyLessonWhenNoLessons = true) {
    if (!dailyLesson.value) return false;

    try {
        await DailyLessonService2.instance.deleteLessons(dailyLesson.value!, deleteDailyLessonWhenNoLessons, [_studentLesson]);
        if (!dailyLesson.value || dailyLesson.value.lessons.length == 0) {
            router.push(`/school/${school.value!.id}`);
        }
        return true;
    } catch (error) {
        console.warn("Unable to delete the student lesson...", error)
        return false;
    }
}

async function dailyLessonUpdate() {
    await updateStudentLesson();
    await computeSalaryAndSave();
}

async function updateStudentLesson() {
    console.log("updateStudentLesson")
    routeChanged.value = false;
    if (!dailyLesson.value) return;
    if (!school.value) {
        loadingSchool.value = true;
        school.value = await SchoolRepository.instance.get(dailyLesson.value.schoolId);
        loadingSchool.value = false;
    }
    loadingStudents.value = true;
    studentLessons.value = await StudentLessonService.instance.getStudentLesson2(dailyLesson.value, studentLessons.value);
    console.log(studentLessons.value);
    loadingStudents.value = false;
}

async function computeSalaryAndSave() {
    if (dailyLesson.value?.salaryStrategy != school.value?.salaryStrategy) {
        toast.info("Aggiornamento dello stipendio giornaliero in corso...");
        await save();
    }
}

async function save() {
    if (!dailyLesson.value || !school.value) return;

    saving.value = true;
    try {
        await DailyLessonService2.instance.save(dailyLesson.value, { school: school.value });
        toast.success("Modifiche salvate", { autoClose: 1000 });
    } catch (e) {
        toast.error("Impossibile aggiornare la lezione giornaliera", { autoClose: 1000 });
    } finally {

        saving.value = false;
    }
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