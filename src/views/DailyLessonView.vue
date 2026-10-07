<template>
    <v-container fluid v-if="dailyLesson && school && !loading" class="daily-lesson-view">
        <div class="lesson-workspace" :class="{ 'has-detail': studentLessons.length > 0 }">
            <aside class="school-sidebar">
                <div class="school-sidebar-heading">
                    <span class="school-sidebar-icon" :style="{ color: school.color || 'var(--app-primary)' }"><v-icon
                            icon="mdi-town-hall" size="25" /></span>
                    <div><strong>{{ school.name }}</strong><small>{{ school.city || 'Scuola di musica' }}</small></div>
                </div>
                <nav class="school-sidebar-nav" aria-label="Sezioni lezione">
                    <v-btn :class="{ 'is-active': visualization === 0 }" variant="text" prepend-icon="mdi-table-large"
                        @click="visualization = 0">Orario</v-btn>
                    <v-btn :class="{ 'is-active': visualization === 1 }" variant="text"
                        prepend-icon="mdi-calendar-week-outline" @click="visualization = 1">Calendario</v-btn>
                </nav>
                <div class="school-sidebar-actions">
                    <v-dialog v-model="studentsDialog" transition="dialog-bottom-transition" max-width="500" persistent>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn color="primary" variant="tonal" prepend-icon="mdi-account-plus-outline"
                                @click="loadSchoolStudents" v-bind="activatorProps">Aggiungi allievo</v-btn>
                        </template>
                        <template v-slot:default>
                            <v-card title="Tutti gli studenti della scuola" :loading="loadingAllStudents">
                                <v-card-text>
                                    <SelectStudents v-model="selectedStudents" :all-students="availableStudents" />
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn text="Annulla" @click="studentsDialog = false" />
                                    <v-spacer />
                                    <v-btn color="primary" text="Salva" @click="saveSelectedStudents"
                                        :loading="savingSelectedStudents" />
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                    <v-expansion-panels variant="accordion" class="day-options">
                        <v-expansion-panel title="Gestione giornata">
                            <v-expansion-panel-text>
                                <div class="day-options-actions">
                                    <v-btn variant="text" prepend-icon="mdi-calendar-check-outline"
                                        @click="toggleOfficialCalendarDate">
                                        {{ dailyLesson.isOfficialCalendarDate ? 'Rimuovi data ufficiale' :
                                            'Segna data ufficiale' }}
                                    </v-btn>
                                    <DeleteDialog :name="yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).format()"
                                        objName="Lezione Giornaliera" :onDelete="async () => await deleteDailyLesson()">
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn color="error" variant="text" prepend-icon="mdi-delete-outline"
                                                v-bind="activatorProps" ref="deleteDailyLessonBtn">Elimina
                                                lezione</v-btn>
                                        </template>
                                    </DeleteDialog>
                                </div>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="school-sidebar-summary">
                    <h2>Questa lezione</h2>
                    <span><v-icon icon="mdi-account-multiple-outline" size="17" /> {{ studentLessons.length }}
                        allievi</span>
                    <span><v-icon icon="mdi-cash" size="17" /> Totale {{ numberFormat(total) }} €</span>
                    <span v-if="dailyLesson.isOfficialCalendarDate"><v-icon icon="mdi-check-circle-outline" size="17" />
                        Data
                        ufficiale</span>
                </div>
            </aside>

            <main class="lesson-main">
                <header class="lesson-main-header">
                    <div class="lesson-main-title">
                        <BackButton />
                        <div><small>Lezione del giorno</small>
                            <h1>{{ yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).format() }}</h1>
                        </div>
                    </div>
                    <div class="lesson-week-nav">
                        <v-btn icon="mdi-chevron-left" variant="outlined"
                            aria-label="Lezione della settimana precedente" :disabled="loading"
                            @click="goToWeekLesson(-1)" />
                        <span>Settimana</span>
                        <v-btn icon="mdi-chevron-right" variant="outlined"
                            aria-label="Lezione della settimana successiva" :disabled="loading"
                            @click="goToWeekLesson(1)" />
                    </div>
                </header>

                <v-card v-if="areLessonSelected" variant="flat" class="bulk-attendance mb-3">
                    <strong>{{ selectedLessons.length }} selezionati</strong>
                    <div class="bulk-attendance-actions">
                        <v-btn color="success" variant="tonal" prepend-icon="mdi-check-circle-outline" @click="present"
                            :disabled="!areLessonSelected">Presenti</v-btn>
                        <v-btn color="warning" variant="tonal" prepend-icon="mdi-account-off-outline" @click="absent"
                            :disabled="!areLessonSelected">Assenti</v-btn>
                    </div>
                </v-card>

                <v-card variant="flat" class="lesson-schedule-card">
                    <div class="lesson-schedule-heading">
                        <div>
                            <h2>{{ visualization === 0 ? 'Orario e presenze' : 'Calendario' }}</h2><span>{{
                                studentLessons.length }}
                                allievi · {{ school.name }}<span class="mobile-open-hint"> · Tocca una riga per i
                                    dettagli</span></span>
                        </div>
                        <v-chip v-if="dailyLesson.isOfficialCalendarDate" color="primary" variant="tonal"
                            size="small">Data
                            ufficiale</v-chip>
                    </div>
                    <v-slide-x-transition leave-absolute>
                        <DailyLessonCalendar v-if="visualization === 1" :date="yyyyMMdd.fromIyyyyMMdd(dailyLesson.date)"
                            :school="school" v-model="studentLessons" editable sort @edit="save" />
                        <div v-else class="lesson-table-wrap">
                            <table class="lesson-table">
                                <thead>
                                    <tr>
                                        <th class="select-col"><v-checkbox v-model="selectAllLessons" hide-details
                                                density="compact" aria-label="Seleziona tutti gli allievi"
                                                :indeterminate="selectedLessons.length != 0 && selectedLessons.length != studentLessons.filter(item => !item.lesson.hiddenForDate).length"
                                                @click="toggleAll" /></th>
                                        <th>Orario</th>
                                        <th>Allievo</th>
                                        <th class="status-col">Stato</th>
                                        <th class="arrow-col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in studentLessons" :key="item.lesson.lessonId"
                                        :class="{ 'is-selected': item.lesson.lessonId === studentLessons[selectedLessonIndex]?.lesson.lessonId }"
                                        tabindex="0"
                                        @click="selectedStudentId = item.lesson.lessonId; detailOpen = true"
                                        @keydown.enter="selectedStudentId = item.lesson.lessonId; detailOpen = true"
                                        @keydown.space.prevent="selectedStudentId = item.lesson.lessonId; detailOpen = true">
                                        <td class="select-col" @click.stop><v-checkbox v-model="selectedLessons"
                                                :value="item.student.id" :disabled="item.lesson.hiddenForDate" multiple
                                                hide-details density="compact"
                                                :aria-label="`Seleziona ${item.student.name} ${item.student.surname}`" />
                                        </td>
                                        <td class="lesson-table-time">{{ Time.fromITime(item.lesson.startTime).format()
                                        }}</td>
                                        <td class="lesson-table-student"><span class="student-mini-avatar"><v-icon
                                                    icon="mdi-account-outline" size="16" /></span><strong>{{
                                                        item.student.name }} {{
                                                    item.student.surname }}</strong><v-icon v-if="item.lesson.dailyNote"
                                                icon="mdi-note-text-outline" size="16" color="secondary" /></td>
                                        <td class="status-col"><span v-if="lessonStatusColor(item.lesson)"
                                                class="status-badge" :class="'status-' + lessonStatusColor(item.lesson)"
                                                :title="statusColors[lessonStatusColor(item.lesson)!].label">{{
                                                    statusColors[lessonStatusColor(item.lesson)!].short }}</span><span
                                                v-else class="unset-status">{{ item.lesson.status === LessonStatus.TRIAL
                                                    ? 'Prova' :
                                                    item.lesson.hiddenForDate ? 'Nascosto' : '—' }}</span></td>
                                        <td class="arrow-col"><v-icon icon="mdi-chevron-right" size="18" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div v-if="studentLessons.length === 0" class="empty-lessons">Nessun allievo in questa
                                lezione.</div>
                        </div>
                    </v-slide-x-transition>
                </v-card>

                <v-card v-if="studentLessons.some(item => item.lesson.dailyNote)" variant="flat"
                    class="lesson-notes-card mt-3" title="Note della giornata">
                    <v-list density="compact"><v-list-item
                            v-for="item in studentLessons.filter(item => item.lesson.dailyNote)"
                            :key="`note-${item.lesson.lessonId}`"
                            :title="`${item.student.name} ${item.student.surname}`"
                            :subtitle="`${yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).format()} — ${item.lesson.dailyNote}`"
                            prepend-icon="mdi-note-text-outline" /></v-list>
                </v-card>
            </main>

            <div v-if="detailOpen && studentLessons.length" class="detail-backdrop" aria-hidden="true"
                @click="detailOpen = false" />
            <aside v-if="studentLessons[selectedLessonIndex]" class="detail-panel" :class="{ 'is-open': detailOpen }"
                @keydown.esc="detailOpen = false">
                <div class="mobile-detail-top"><span>Dettaglio allievo</span><v-btn icon="mdi-close" variant="text"
                        aria-label="Chiudi dettaglio" @click="detailOpen = false" /></div>
                <LessonItem panel :school="school" :date="dailyLesson.date"
                    :key="dailyLesson.id + studentLessons[selectedLessonIndex]!.lesson.lessonId"
                    :loading="performingOperation[studentLessons[selectedLessonIndex]!.lesson.lessonId]?.value"
                    v-model:item="studentLessons[selectedLessonIndex]!" v-model:select="selectedLessons"
                    @present="present(studentLessons[selectedLessonIndex]!)"
                    @absent="absent(studentLessons[selectedLessonIndex]!, $event)"
                    :moveLesson="async ($event) => await moveLesson(studentLessons[selectedLessonIndex]!, $event)"
                    @trial="trial(studentLessons[selectedLessonIndex]!)"
                    @reset="reset(studentLessons[selectedLessonIndex]!)"
                    @hideForDate="async () => await hideStudentForDate(studentLessons[selectedLessonIndex]!)"
                    @showForDate="async () => await showStudentForDate(studentLessons[selectedLessonIndex]!)"
                    @bandAttendanceChanged="save" @saveDailyNote="save"
                    :updateLessonTime="async ($event) => await updateLessonTime(studentLessons[selectedLessonIndex]!, $event)"
                    :onDeleteLessonItem="async () => await deleteStudentLesson(studentLessons[selectedLessonIndex]!)" />
                <div class="detail-status-legend">
                    <h3>Legenda presenze</h3>
                    <div><span v-for="(status, key) in statusColors" :key="key"><span class="status-badge"
                                :class="'status-' + key">{{ status.short }}</span>{{ status.label }}</span></div>
                </div>
            </aside>
        </div>
        <v-overlay :model-value="saving" class="align-center justify-center"><v-progress-circular color="primary"
                size="64" indeterminate /></v-overlay>
    </v-container>
    <v-container fluid v-else><v-skeleton-loader class="mx-auto" type="heading" /><v-skeleton-loader v-for="i in 3"
            :key="i" class="mx-auto mt-4" type="card" /></v-container>
</template>

<script setup lang="ts">
import DailyLessonCalendar from '@/components/calendar/DailyLessonCalendar.vue';
import DeleteDialog from '@/components/DeleteDialog.vue';
import BackButton from '@/components/inputs/BackButton.vue';
import SelectStudents from '@/components/inputs/SelectStudents.vue';
import LessonItem from '@/components/lesson/LessonItem.vue';
import { withCache } from '@/models/decorators/cache-decorator';
import { LessonStatus, Time, yyyyMMdd, type EventTime, type Lesson, type School, type Student, type StudentLesson } from '@/models/model';
import { DailyLessonRepository } from '@/models/repositories/daily-lesson-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { StudentLessonService } from '@/models/services/student-lesson-service';
import { StudentService } from '@/models/services/student-service';
import { lessonStatusColor, statusColors } from '@/models/statusColors';
import { numberFormat } from '@/models/utils';
import { computed, onMounted, onUnmounted, ref, shallowRef, watch, type Ref } from 'vue';
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
const performingOperation = shallowRef<Record<string, Ref<boolean>>>({});
const saving = ref(false);
const savingSelectedStudents = ref(false);
const studentsDialog = ref(false);
const routeChanged = ref(true);
const visualization = ref(0);
const selectedStudentId = ref<string>();
const detailOpen = ref(false);
const selectedLessonIndex = computed(() => Math.max(0, studentLessons.value.findIndex(item => item.lesson.lessonId === selectedStudentId.value)));

async function goToWeekLesson(delta: number): Promise<void> {
    if (!dailyLesson.value || !school.value) return;

    const date = yyyyMMdd.fromIyyyyMMdd(dailyLesson.value.date).toDate();
    date.setDate(date.getDate() + delta * 7);
    const nextId = await DailyLessonService.instance.getOrCreateDailyLessonId(school.value.id, date);
    await router.push(`/lesson/${nextId}`);
}

const total = computed(() => isNaN(dailyLesson.value?.salary ?? 0) ? 0 : dailyLesson.value?.salary)
const areLessonSelected = computed(() => selectedLessons.value.length != 0)
const loading = computed(() => loadingStudents.value || loadingSchool.value || !school.value || !dailyLesson.value || routeChanged.value);

watch(dailyLesson, dailyLessonUpdate)
watch(dailyLesson, () => { selectedStudentId.value = undefined; detailOpen.value = false; })
watch(dailyLessonSource, () => routeChanged.value = true)
watch(selectedLessons, () => {
    if (selectedLessons.value.length == 0)
        selectAllLessons.value = false
})

function getColor(event: Lesson): string {
    const status = lessonStatusColor(event);
    return status ? statusColors[status].foreground : '#8B97AD';
}

function getSelectedStudentLessons(event: StudentLesson): StudentLesson[] {
    const _studentLessons = selectedLessons.value.map(id => studentLessons.value.find(st => st.student.id == id && !st.lesson.hiddenForDate)).filter(s => !!s);
    if (event && "student" in event && "lesson" in event) _studentLessons.push(event);
    //@ts-ignore
    return _studentLessons;
}

function updateOperationStatus(event: StudentLesson | Lesson, status: boolean) {
    const id = "lesson" in event ? event.lesson.lessonId : event.lessonId;

    if (!(id in performingOperation.value)) {
        performingOperation.value[id] = ref(status);
    } else {
        performingOperation.value[id]!.value = status;
    }
}


const present = withCache(async (event: StudentLesson) => {
    updateOperationStatus(event, true);
    const lessons = getSelectedStudentLessons(event).map(l => l.lesson);
    await DailyLessonService.instance.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson.value!, lessons, school.value);
    selectedLessons.value = []
}, (error) => {
    toast.warn("Impossibile impostare le presenze...")
    console.error(error)
}, async (event: StudentLesson) => {
    updateOperationStatus(event, false);
});

const absent = withCache(async (event: StudentLesson, canRecover = true) => {
    updateOperationStatus(event, true);
    const lessons = getSelectedStudentLessons(event).map(l => l.lesson);
    const status = canRecover ? LessonStatus.ABSENT : LessonStatus.UNJUSTIFIED_ABSENCE
    await DailyLessonService.instance.updateLessonsStatus(status, dailyLesson.value!, lessons, school.value);
    selectedLessons.value = []
    return true;
}, (error) => {
    toast.warn("Impossibile impostare le assenze...")
    console.error(error)
}, async (event: StudentLesson) => {
    updateOperationStatus(event, false);
    // return false;
});

const trial = withCache(async (event: StudentLesson) => {
    updateOperationStatus(event, true);
    await DailyLessonService.instance.updateLessonsStatus(LessonStatus.TRIAL, dailyLesson.value!, [event.lesson], school.value);
    return true;
}, (error) => {
    toast.warn("Impossibile impostare la lezione di prova...")
    console.error(error)
}, async (event: StudentLesson) => {
    updateOperationStatus(event, false);
    // return false;
});

const reset = withCache(async (event: StudentLesson) => {
    updateOperationStatus(event, true);
    await DailyLessonService.instance.resetLessons(dailyLesson.value!, [event.lesson], school.value);
    return true;
}, (error) => {
    toast.warn("Impossibile ripristinare la lezione")
    console.error(error)
}, async (event: StudentLesson) => {
    updateOperationStatus(event, false);
    // return false;
});

const moveLesson = withCache(async (event: StudentLesson, lessonDate: Date) => {
    updateOperationStatus(event, true);
    await DailyLessonService.instance.moveLessons(dailyLesson.value!, lessonDate, [event.lesson], school.value ?? undefined);
    return true;
}, (error) => {
    console.error(error)
    return false
}, async (event: StudentLesson) => {
    updateOperationStatus(event, false);
    // return false;
});

const updateLessonTime = withCache(async (event: StudentLesson, newDataEvent: EventTime) => {
    updateOperationStatus(event, true);
    await DailyLessonService.instance.updateLessonTime(dailyLesson.value!, newDataEvent, event.lesson, newDataEvent.applyFromDate);
    // Rebuild the displayed list from the persisted daily lesson. The
    // propagation also writes the current date again, and the Firestore
    // snapshot can otherwise replace the locally edited lesson with its old
    // object reference.
    await updateStudentLesson();
    studentLessons.value.sort((a, b) => a.lesson.startTime - b.lesson.startTime);
    return true;
}, (error) => {
    console.error(error)
    return false
}, async (event: StudentLesson) => {
    updateOperationStatus(event, false);
    // return false;
});

function toggleAll() {
    if (!selectAllLessons.value) {
        selectedLessons.value = [...studentLessons.value.filter(s => !s.lesson.hiddenForDate).map(s => s.student.id)]
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

        await DailyLessonService.instance.addStudents(dailyLesson.value!, selectedStudents.value);

        toast.success("Studenti aggiunti!");
        studentsDialog.value = false;
    } catch (error) {
        toast.warning("Impossibile aggiungere gli studenti alla lezione giornaliera")
    } finally {
        savingSelectedStudents.value = false;
    }
}

const deleteDailyLesson = withCache(async () => {
    if (!dailyLesson.value) return false;

    const excludedDate = await DailyLessonService.instance.delete(dailyLesson.value);
    if (excludedDate) toast.info("La data è stata aggiunta ai giorni da escludere della lezione settimanale")
    router.push(`/school/${school.value!.id}`);
    return true;
}, (error) => {
    console.warn("Unable to delete the lesson...", error)
    return false;
});

const deleteStudentLesson = withCache(async (_studentLesson: StudentLesson, deleteDailyLessonWhenNoLessons = true) => {
    if (!dailyLesson.value) return false;
    updateOperationStatus(_studentLesson, true);
    await DailyLessonService.instance.deleteLessons(dailyLesson.value!, deleteDailyLessonWhenNoLessons, [_studentLesson.lesson]);
    if (!dailyLesson.value || dailyLesson.value.lessons.length == 0) {
        router.push(`/school/${school.value!.id}`);
    }
    return true;
}, (error) => {
    console.warn("Unable to delete the student lesson...", error)
    return false;
}, async (event: StudentLesson) => {
    updateOperationStatus(event, false);
    // return false;
});

const hideStudentForDate = withCache(async (_studentLesson: StudentLesson) => {
    if (!dailyLesson.value) return false;
    await StudentLessonService.instance.hideStudentForDate(dailyLesson.value, _studentLesson.lesson.studentId, school.value);
    await updateStudentLesson();
    return true;
});

const showStudentForDate = withCache(async (_studentLesson: StudentLesson) => {
    if (!dailyLesson.value) return false;
    await StudentLessonService.instance.showStudentForDate(dailyLesson.value, _studentLesson.lesson.studentId, school.value);
    await updateStudentLesson();
    return true;
});

const toggleOfficialCalendarDate = withCache(async () => {
    if (!dailyLesson.value) return false;
    await DailyLessonService.instance.setOfficialCalendarDate(dailyLesson.value, !dailyLesson.value.isOfficialCalendarDate);
    toast.info(dailyLesson.value.isOfficialCalendarDate ? 'Data inclusa nei rimborsi' : 'Data esclusa dai rimborsi');
    return true;
});

async function dailyLessonUpdate() {
    await updateStudentLesson();
    await computeSalaryAndSave();
}

async function updateStudentLesson() {
    routeChanged.value = false;
    if (!dailyLesson.value) return;
    if (!school.value) {
        loadingSchool.value = true;
        school.value = await SchoolRepository.instance.get(dailyLesson.value.schoolId);
        loadingSchool.value = false;
    }
    await DailyLessonService.instance.ensureOfficialCalendarDate(dailyLesson.value);
    await StudentLessonService.instance.updateStudentLesson(dailyLesson.value, studentLessons.value, loadingStudents);
}

async function computeSalaryAndSave() {
    if (dailyLesson.value && dailyLesson.value?.salaryStrategy != school.value?.salaryStrategy) {
        toast.info("Aggiornamento dello stipendio giornaliero in corso...");
        await save();
    }
}

async function save() {
    if (!dailyLesson.value || !school.value) return;

    saving.value = true;
    try {
        await DailyLessonService.instance.save(dailyLesson.value, { school: school.value, studentLessons: studentLessons.value });
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

<style scoped>
.daily-lesson-view {
    max-width: 1620px;
    margin: 0 auto;
}

.lesson-workspace {
    display: grid;
    grid-template-columns: 205px minmax(0, 1fr) 295px;
    align-items: start;
    gap: 14px;
}

.lesson-workspace:not(.has-detail) {
    grid-template-columns: 205px minmax(0, 1fr);
}

.school-sidebar,
.detail-panel {
    min-width: 0;
    padding: 14px;
    border: 1px solid var(--app-border);
    border-radius: 16px;
    background: var(--app-surface);
    box-shadow: var(--app-shadow);
}

.school-sidebar {
    position: sticky;
    top: 80px;
}

.school-sidebar-heading {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    padding: 4px 2px 14px;
}

.school-sidebar-heading>div {
    min-width: 0;
}

.school-sidebar-heading strong,
.school-sidebar-heading small {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.school-sidebar-heading strong {
    color: var(--app-text);
    font-size: .92rem;
    line-height: 1.25;
}

.school-sidebar-heading small {
    margin-top: 3px;
    color: var(--app-muted);
    font-size: .75rem;
}

.school-sidebar-icon {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: var(--app-accent-surface);
}

.school-sidebar-nav {
    display: grid;
    gap: 3px;
    padding: 8px 0;
    border-top: 1px solid var(--app-border);
}

.school-sidebar-nav .v-btn {
    justify-content: flex-start;
    width: 100%;
    color: var(--app-muted);
}

.school-sidebar-nav .v-btn.is-active {
    color: var(--app-primary);
    background: var(--app-accent-surface);
}

.school-sidebar-actions {
    display: grid;
    gap: 5px;
    padding: 8px 0;
    border-top: 1px solid var(--app-border);
}

.school-sidebar-actions>.v-btn {
    width: 100%;
    justify-content: flex-start;
}

.day-options :deep(.v-expansion-panel) {
    border: 0 !important;
    box-shadow: none !important;
}

.day-options :deep(.v-expansion-panel-title) {
    min-height: 38px;
    padding: 7px 8px;
    color: var(--app-muted);
    font-size: .8rem;
}

.day-options :deep(.v-expansion-panel-text__wrapper) {
    padding: 6px 0;
}

.day-options-actions {
    display: grid;
    gap: 4px;
}

.day-options-actions .v-btn {
    justify-content: flex-start;
    width: 100%;
    min-height: 40px;
    font-size: .77rem;
    white-space: normal;
}

.school-sidebar-summary {
    display: grid;
    gap: 10px;
    margin-top: 18px;
    padding: 14px 12px;
    border: 1px solid var(--app-border);
    border-radius: 12px;
}

.school-sidebar-summary h2 {
    margin: 0;
    font-size: .84rem;
    font-weight: 700;
}

.school-sidebar-summary span {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--app-muted);
    font-size: .78rem;
}

.lesson-main {
    min-width: 0;
}

.lesson-main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    min-height: 66px;
    padding: 3px 2px 12px;
}

.lesson-main-title {
    display: flex;
    align-items: center;
    min-width: 0;
    gap: 5px;
}

.lesson-main-title small {
    color: var(--app-muted);
    font-size: .75rem;
    font-weight: 600;
}

.lesson-main-title h1 {
    margin: 1px 0 0;
    color: var(--app-text);
    font-size: clamp(1.16rem, 2vw, 1.38rem);
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -.02em;
}

.lesson-week-nav {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--app-muted);
    font-size: .81rem;
    font-weight: 600;
}

.lesson-week-nav .v-btn {
    width: 38px;
    height: 38px;
}

.bulk-attendance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding: 11px 14px;
}

.bulk-attendance strong {
    color: var(--app-text);
    font-size: .85rem;
}

.bulk-attendance-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}

.lesson-schedule-card {
    overflow: hidden;
}

.lesson-schedule-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 62px;
    padding: 12px 16px;
}

.lesson-schedule-heading h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
}

.lesson-schedule-heading span {
    color: var(--app-muted);
    font-size: .78rem;
}

.mobile-open-hint {
    display: none;
}

.lesson-table-wrap {
    width: 100%;
    overflow-x: auto;
}

.lesson-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    table-layout: fixed;
}

.lesson-table th,
.lesson-table td {
    padding: 8px 11px;
    border-top: 1px solid var(--app-border);
}

.lesson-table th {
    height: 43px;
    color: var(--app-muted);
    background: var(--app-background);
    font-size: .76rem;
    font-weight: 650;
}

.lesson-table tbody tr {
    height: 54px;
    cursor: pointer;
    transition: background-color .15s ease;
}

.lesson-table tbody tr:hover {
    background: var(--app-hover-surface);
}

.lesson-table tbody tr.is-selected {
    background: var(--app-accent-surface);
}

.lesson-table tbody tr:focus-visible {
    outline: 2px solid var(--app-primary);
    outline-offset: -2px;
}

.lesson-table .select-col {
    width: 42px;
    padding-left: 10px;
    padding-right: 0;
}

.lesson-table th:nth-child(2),
.lesson-table-time {
    width: 72px;
}

.lesson-table-time {
    color: var(--app-text);
    font-size: .84rem;
    font-weight: 600;
    white-space: nowrap;
}

.lesson-table-student {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.lesson-table-student strong {
    color: var(--app-text);
    font-size: .84rem;
    font-weight: 600;
}

.student-mini-avatar {
    display: inline-grid;
    place-items: center;
    width: 25px;
    height: 25px;
    margin-right: 6px;
    border-radius: 50%;
    color: var(--app-primary);
    background: var(--app-accent-surface);
    vertical-align: middle;
}

.lesson-table .status-col {
    width: 62px;
    text-align: center;
}

.lesson-table .arrow-col {
    width: 28px;
    padding: 0 4px;
    color: var(--app-muted);
}

.lesson-table .status-badge {
    min-width: 31px;
    height: 27px;
}

.unset-status {
    color: var(--app-muted);
    font-size: .73rem;
}

.empty-lessons {
    padding: 36px 14px;
    color: var(--app-muted);
    text-align: center;
}

.lesson-notes-card :deep(.v-card-title) {
    padding: 15px 16px 8px;
}

.detail-panel {
    position: sticky;
    top: 80px;
    max-height: calc(100dvh - 104px);
    overflow-y: auto;
    padding: 0;
}

.detail-backdrop {
    display: none;
}

.detail-status-legend {
    padding: 12px 14px 16px;
    border-top: 1px solid var(--app-border);
}

.detail-status-legend h3 {
    margin: 0 0 10px;
    font-size: .84rem;
    font-weight: 700;
}

.detail-status-legend>div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 10px;
}

.detail-status-legend>div>span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--app-muted);
    font-size: .7rem;
}

.detail-status-legend .status-badge {
    min-width: 26px;
    height: 25px;
    padding: 0 5px;
    border-radius: 7px;
}

.mobile-detail-top {
    display: none;
}

@media (max-width: 1100px) {
    .mobile-open-hint {
        display: inline;
    }

    .detail-backdrop {
        display: block;
        position: fixed;
        inset: 0;
        z-index: 1099;
        background: rgba(23, 32, 51, .28);
    }

    .lesson-workspace,
    .lesson-workspace:not(.has-detail) {
        grid-template-columns: 195px minmax(0, 1fr);
    }

    .detail-panel {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 1100;
        width: min(420px, 100vw);
        max-height: 100dvh;
        height: 100dvh;
        margin-left: auto;
        border-radius: 16px 0 0 16px;
        box-shadow: -10px 0 30px rgba(30, 50, 100, .12);
    }

    .detail-panel.is-open {
        display: block;
    }

    .mobile-detail-top {
        position: sticky;
        top: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-bottom: 1px solid var(--app-border);
        background: var(--app-surface);
        color: var(--app-text);
        font-weight: 700;
    }
}

@media (max-width: 750px) {

    .lesson-workspace,
    .lesson-workspace:not(.has-detail) {
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
    }

    .school-sidebar {
        position: static;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 7px 12px;
        padding: 10px 12px;
    }

    .school-sidebar-heading {
        flex: 1 1 220px;
        padding: 0;
    }

    .school-sidebar-nav {
        display: flex;
        flex: 0 0 auto;
        padding: 0;
        border: 0;
    }

    .school-sidebar-nav .v-btn {
        width: auto;
    }

    .school-sidebar-actions {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 7px 0 0;
    }

    .school-sidebar-actions>.v-btn {
        width: auto;
    }

    .day-options {
        max-width: 190px;
        margin-left: auto;
    }

    .school-sidebar-summary {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 8px 16px;
        margin-top: 0;
        padding: 8px 0 0;
        border: 0;
        border-top: 1px solid var(--app-border);
        border-radius: 0;
    }

    .school-sidebar-summary h2 {
        display: none;
    }

    .lesson-main-header {
        min-height: 0;
    }

    .detail-panel {
        width: 100vw;
        border-radius: 0;
    }
}

@media (max-width: 440px) {
    .school-sidebar-nav {
        width: 100%;
    }

    .school-sidebar-nav .v-btn {
        flex: 1;
    }

    .lesson-table th,
    .lesson-table td {
        padding: 7px 5px;
    }

    .lesson-table .select-col {
        width: 35px;
        padding-left: 4px;
    }

    .lesson-table th:nth-child(2),
    .lesson-table-time {
        width: 52px;
    }

    .lesson-table .status-col {
        width: 52px;
    }

    .lesson-table .arrow-col {
        width: 20px;
    }

    .student-mini-avatar {
        display: none;
    }

    .lesson-table-student strong {
        font-size: .78rem;
    }

    .lesson-week-nav {
        margin-left: auto;
    }
}
</style>
