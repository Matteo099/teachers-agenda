<template>
    <v-card variant="flat" class="lesson-overview" :loading="loading">
        <div class="lesson-overview-header">
            <div class="lesson-overview-heading">
                <span class="overview-icon"><v-icon icon="mdi-calendar-week-outline" size="23" /></span>
                <div>
                    <h2>Lezioni</h2>
                    <p>Calendario e giornate della scuola</p>
                </div>
            </div>
            <div class="lesson-overview-actions">
                <v-dialog transition="dialog-bottom-transition" class="justify-center">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn color="primary" prepend-icon="mdi-plus" :disabled="!school" v-bind="activatorProps">Nuova data</v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card class="mx-auto" min-width="min(400px, 95vw)" title="Apri una lezione">
                            <v-card-text class="d-flex justify-center"><v-date-picker v-model="dailyLessonDate" /></v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn text="Chiudi" @click="isActive.value = false" />
                                <v-btn text="Apri" color="primary" @click="routeToDailyLesson(dailyLessonDate!)"
                                    :disabled="!dailyLessonDate" :loading="routingToDailyLesson" />
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <v-dialog transition="dialog-bottom-transition" fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn variant="tonal" color="primary" prepend-icon="mdi-calendar-edit" v-bind="activatorProps" :disabled="!school">Orario</v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <CalendarLessonEditor :school="school" @close="isActive.value = false; loadLessonGroup()" />
                    </template>
                </v-dialog>
            </div>
        </div>

        <div class="lesson-overview-toolbar">
            <v-btn variant="text" prepend-icon="mdi-calendar-month-outline" :to="'/calendar?filters=' + school.id">Calendario completo</v-btn>
            <div class="lesson-overview-tools">
                <v-dialog transition="dialog-bottom-transition">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn prepend-icon="mdi-filter-variant" variant="text" v-bind="activatorProps">Filtri</v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <LessonFilter v-model="filters" @close="isActive.value = false" />
                    </template>
                </v-dialog>
                <v-btn icon="mdi-refresh" variant="text" aria-label="Aggiorna lezioni" :disabled="!school || computingLessonGroups"
                    @click="loadLessonGroup" />
            </div>
        </div>

        <v-card-text class="lesson-overview-content">
            <v-btn class="load-lessons-button" variant="text" prepend-icon="mdi-chevron-up"
                :disabled="loading || computingLessonGroups" @click="showPreviousLessons">Mostra lezioni precedenti</v-btn>
            <div v-if="lessonGroups.length" class="lesson-groups">
                <section v-for="lg of lessonGroups" :key="lg.month" class="lesson-month">
                    <h3>{{ lg.month }}</h3>
                    <v-list class="lesson-month-list" lines="two">
                        <v-list-item v-for="lesson in lg.lessons" :key="lesson.date.toString()"
                            class="lesson-overview-item" :class="{ 'lesson-overview-item-next': lesson.next }"
                            @click="routeToDailyLesson(lesson)">
                            <template v-slot:prepend>
                                <span class="lesson-date-icon"><v-icon icon="mdi-calendar-blank-outline" :color="getColor(lesson)" size="21" /></span>
                            </template>
                            <template v-slot:title>
                                <span class="lesson-overview-date"><strong>{{ lesson.date.getDayString(2) }}</strong> {{ lesson.date.format() }}</span>
                            </template>
                            <template v-slot:subtitle>
                                <span>{{ lesson.next ? 'Prossima lezione' : lesson.pending ? 'Da svolgere' : 'Apri il dettaglio' }}</span>
                            </template>
                            <template v-slot:append>
                                <div class="lesson-overview-badges">
                                    <v-chip v-if="lesson.next" size="small" color="primary" variant="tonal">Prossima</v-chip>
                                    <v-chip v-if="lesson.pending" size="small" color="warning" variant="tonal">Da svolgere</v-chip>
                                    <v-chip v-if="lesson.recovery" class="lesson-kind-chip status-recovery" size="small" variant="outlined" title="Lezione di recupero" aria-label="Lezione di recupero">R</v-chip>
                                    <v-chip v-if="lesson.moved" class="lesson-kind-chip status-moved" size="small" variant="outlined" title="Lezione spostata" aria-label="Lezione spostata">S</v-chip>
                                    <v-icon icon="mdi-chevron-right" color="secondary" size="20" />
                                </div>
                            </template>
                        </v-list-item>
                    </v-list>
                </section>
            </div>
            <p v-else-if="!loading" class="lesson-overview-empty">Nessuna lezione nel periodo selezionato.</p>
            <v-btn class="load-lessons-button" variant="text" append-icon="mdi-chevron-down"
                :disabled="loading || computingLessonGroups" @click="showUpcomingLessons">Mostra lezioni successive</v-btn>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import CalendarLessonEditor from '@/components/lesson/CalendarLessonEditor.vue';
import LessonFilter from '@/components/lesson/LessonFilter.vue';
import { LESSON_FILTERS, type School } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { LessonGroupService, type LessonGroup, type LessonProjection, type SchoolLessons } from '@/models/services/lesson-group-service';
import { SchoolService } from '@/models/services/school-service';
import { type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';

export interface LessonViewProps {
    school: School
}

const router = useRouter();
const date = useDate();
const props = defineProps<LessonViewProps>();
const subscriptions: Unsubscribe[] = [];

const lessonGroups: Ref<LessonGroup[]> = ref([]);
const dailyLessonDate: Ref<Date | undefined> = ref();
const loadingLessons = ref(false);
const loadingCalendar = ref(false);
const computingLessonGroups = ref(false);
const previousLessonsCount = ref(2);
const upcomingLessonsCount = ref(3);
const routingToDailyLesson = ref(false);
const filters = ref([
    // weekly lessons only
    LESSON_FILTERS[2]!
]);

let schoolLessons: SchoolLessons;

const loading = computed(() => props.school == undefined || loadingLessons.value || loadingCalendar.value || computingLessonGroups.value);
watch(props.school, () => loadLessonGroup())
watch(filters, () => loadLessonGroup(false));

function getColor(lesson: LessonProjection) {
    if (lesson.next) return "primary";
    if (lesson.pending) return "warning";
    if (lesson.recovery) return "info";

    return 'grey-lighten-1';
}

async function routeToDailyLesson(lessonGroup: LessonProjection | Date) {
    await loadLessonGroup(true);
    routingToDailyLesson.value = true;
    const dailyLessonId = await DailyLessonService.instance.getOrCreateDailyLessonId(props.school.id, lessonGroup);
    routingToDailyLesson.value = false;
    router.push(`/lesson/${dailyLessonId}`);
}

async function loadLessonGroup(forceReload = true) {
    computingLessonGroups.value = true;

    const today = new Date(new Date().toDateString());
    const startingDate = date.addMonths(today, -12) as Date;

    if (!schoolLessons || forceReload)
        schoolLessons = await SchoolService.instance.getSchoolLessons(props.school.id, startingDate);
    lessonGroups.value = await LessonGroupService.instance.getGroupedLessons(
        schoolLessons, filters.value, previousLessonsCount.value, upcomingLessonsCount.value);

    computingLessonGroups.value = false;
}

async function showPreviousLessons() {
    previousLessonsCount.value += 3;
    await loadLessonGroup(false);
}

async function showUpcomingLessons() {
    upcomingLessonsCount.value += 3;
    await loadLessonGroup(false);
}

onMounted(async () => {
    await loadLessonGroup();
})

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
}) 
</script>

<style scoped>
.lesson-overview { overflow: hidden; }
.lesson-overview-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 20px 20px 16px; }
.lesson-overview-heading { display: flex; align-items: center; gap: 12px; }
.overview-icon { width: 44px; height: 44px; display: grid; place-items: center; flex: 0 0 auto; color: var(--app-primary); background: var(--app-accent-surface); border-radius: 12px; }
.lesson-overview-heading h2 { margin: 0; font-size: 1.12rem; font-weight: 700; }
.lesson-overview-heading p { margin: 2px 0 0; color: var(--app-muted); font-size: .83rem; }
.lesson-overview-actions, .lesson-overview-tools { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.lesson-overview-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 8px 12px; border-top: 1px solid var(--app-border); border-bottom: 1px solid var(--app-border); }
.lesson-overview-content { padding: 8px 20px 16px; }
.load-lessons-button { display: flex; margin: 4px auto; font-size: .82rem; color: var(--app-muted); }
.lesson-month { padding: 8px 0 10px; }
.lesson-month h3 { margin: 8px 0; color: var(--app-muted); font-size: .85rem; font-weight: 700; }
.lesson-month-list { padding: 0; background: transparent; }
.lesson-overview-item { min-height: 64px; margin-bottom: 7px; border: 1px solid var(--app-border); border-radius: 12px; background: var(--app-surface); transition: background-color .18s ease, border-color .18s ease; }
.lesson-overview-item:hover { background: var(--app-hover-surface); border-color: var(--app-hover-border); }
.lesson-overview-item-next { border-color: var(--app-hover-border); background: var(--app-accent-surface); }
.lesson-date-icon { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 10px; background: var(--app-background); }
.lesson-overview-date { color: var(--app-text); font-size: .92rem; }
.lesson-overview-date strong { font-weight: 700; }
.lesson-overview-badges { display: flex; align-items: center; gap: 5px; }
.lesson-kind-chip { min-width: 27px; height: 27px; padding-inline: 0 !important; border: 1px solid var(--status-fg) !important; border-radius: 8px !important; background: var(--app-surface) !important; color: var(--status-fg) !important; font-weight: 700; }
.lesson-kind-chip :deep(.v-chip__content) { justify-content: center; width: 100%; }
.lesson-overview-empty { padding: 24px 0; color: var(--app-muted); text-align: center; }
@media (max-width: 650px) {
    .lesson-overview-header { flex-direction: column; padding: 16px; }
    .lesson-overview-actions { width: 100%; }
    .lesson-overview-actions :deep(.v-btn) { flex: 1; }
    .lesson-overview-toolbar { flex-wrap: wrap; }
    .lesson-overview-content { padding: 8px 12px 12px; }
    .lesson-overview-badges .v-chip:not(:first-child):not(.lesson-kind-chip) { display: none; }
}
</style>
