<template>
  <v-container fluid class="home-view">
    <div class="d-flex flex-wrap align-center justify-space-between ga-3 mb-3">
      <h2 class="section-title">Lezioni di oggi</h2>
      <v-btn variant="tonal" color="primary" @click="loadTodayLessons" :loading="loadingTodayLessons">Aggiorna {{ dateFormat(new Date()) }}</v-btn>
    </div>
    <v-slide-y-transition mode="out-in">
      <v-row v-if="!loadingTodayLessons">
        <v-col v-if="todayLessons.length == 0 && loadAtLeastOnceTodayLessons" cols="12">
          <p>Nessuna lezione in programma per oggi!</p>
        </v-col>
        <v-col v-for="tl in todayLessons" :key="tl.lesson.id" cols="12" sm="4">
          <v-card append-icon="mdi-chevron-right" class="pa-4" variant="flat" :to="'/lesson/' + tl.lesson.id"
            prepend-icon="mdi-music-note" :title="tl.school.name">
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="fo in 3" :key="fo" cols="12" sm="4">
          <v-skeleton-loader class="pa-2" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-slide-y-transition>

    <div class="page-heading mt-8 mb-5">
      <div>
        <h1>Le mie scuole</h1>
      </div>
    </div>
    <v-expand-transition mode="out-in">
      <template v-if="loadingSchools">
        <v-row>
          <v-col v-for="fo in 3" :key="fo" cols="12" lg="6">
            <v-skeleton-loader class="pa-2" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
      </template>
    </v-expand-transition>
    <v-row>
      <v-col v-for="school in schools" :key="school.id" cols="12" lg="6">
        <v-card variant="flat" class="school-card" :to="'/school/' + school.id">
          <div class="school-card-layout">
            <div class="school-icon" :style="{ color: school.color ?? DEFAULT_SCHOOL_COLOR }"><v-icon icon="mdi-town-hall" size="27" /></div>
            <div class="school-card-content">
              <div class="school-card-heading">
                <div>
                  <h2>{{ getSchoolName(school) }}</h2>
                  <p class="school-address">{{ school.city || 'Scuola di musica' }}</p>
                </div>
                <v-icon class="school-chevron" icon="mdi-chevron-right" size="22" />
              </div>
              <div v-if="schoolSummaries[school.id]" class="school-summary">
                <div class="school-metrics">
                  <span class="school-metric"><v-icon icon="mdi-account-multiple-outline" size="17" /><strong>{{ schoolSummaries[school.id]!.students }}</strong> allievi</span>
                  <span class="school-metric"><v-icon icon="mdi-calendar-week-outline" size="17" /><strong>{{ schoolSummaries[school.id]!.weeklyLessons }}</strong> lezioni/settimana</span>
                </div>
                <div class="next-lesson">
                  <span class="next-lesson-icon"><v-icon icon="mdi-music-note" size="19" /></span>
                  <span><small>Prossima lezione</small><strong>{{ schoolSummaries[school.id]!.nextWhen || 'Nessuna nei prossimi 30 giorni' }}</strong><span v-if="schoolSummaries[school.id]!.nextStudent">{{ schoolSummaries[school.id]!.nextStudent }}</span></span>
                </div>
              </div>
              <div v-else-if="loadingSummaries" class="school-summary-loading" aria-label="Caricamento riepilogo"><v-progress-linear indeterminate color="primary" rounded /></div>
              <p v-else class="summary-unavailable">Riepilogo non disponibile</p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6">
        <v-dialog v-model="dialog" fullscreen>
          <template v-slot:activator="{ props: activatorProps }">
            <v-card class="school-card add-school-card" variant="flat" v-bind="activatorProps">
              <div class="d-flex align-center ga-4">
                <div class="school-icon add-icon"><v-icon size="28">mdi-plus</v-icon></div>
                <div><h2>Aggiungi una scuola</h2></div>
              </div>
            </v-card>
          </template>

          <SchoolEditor @close="dialog = false" @save="onSaveSchool($event)"></SchoolEditor>
        </v-dialog>
      </v-col>
    </v-row>

  </v-container>
</template>


<script setup lang="ts">
import SchoolEditor from '@/components/school/SchoolEditor.vue';
import { DEFAULT_SCHOOL_COLOR } from '@/models/constants';
import { Time, yyyyMMdd, type School, type TodayLesson } from '@/models/model';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { LessonGroupService } from '@/models/services/lesson-group-service';
import { SchoolService } from '@/models/services/school-service';
import { StudentService } from '@/models/services/student-service';
import { WeeklyLessonService } from '@/models/services/weely-lesson-service';
import { LocalStorageHandler } from '@/models/storage/local-storage-handler';
import { dateFormat } from '@/models/utils';
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import { toast } from 'vue3-toastify';

let schoolSubscription: EventSubscription;

const schools: Ref<School[]> = ref([]);
const todayLessons: Ref<TodayLesson[]> = ref([]);
const loadingSchools = ref(false);
const dialog = ref(false)
const loadTodayLesson = ref(false);
const loadingTodayLessons = ref(false);
const loadAtLeastOnceTodayLessons = ref(false);
interface SchoolSummary {
  students: number;
  weeklyLessons: number;
  nextWhen?: string;
  nextStudent?: string;
}
const schoolSummaries = ref<Record<string, SchoolSummary>>({});
const loadingSummaries = ref(false);
let summaryRequest = 0;

function onSaveSchool(school?: School) {
  if (school)
    dialog.value = false;
}

function getSchoolName(school: School): string {
  return school.name;
}

async function loadSchoolSummaries(currentSchools: School[]) {
  const request = ++summaryRequest;
  loadingSummaries.value = true;
  const now = new Date();
  const today = yyyyMMdd.fromDate(now);
  const through = new Date(now);
  through.setDate(through.getDate() + 30);
  const rangeStart = { date: today, time: Time.fromHHMM('00:00')! };
  const rangeEnd = { date: yyyyMMdd.fromDate(through), time: Time.fromHHMM('23:59')! };
  const currentDateTime = `${today.toScheduleX()} ${now.toTimeString().slice(0, 5)}`;

  const results = await Promise.allSettled(currentSchools.map(async school => {
    const [students, weeklyLessons, calendarLessons] = await Promise.all([
      StudentService.instance.getStudentsOfSchool(school.id),
      WeeklyLessonService.instance.getWeeklyLessonOfSchool(school.id),
      LessonGroupService.instance.getCalendarLessons(school.id, rangeStart, rangeEnd),
    ]);
    const activeStudents = students.filter(student => !student.removed);
    const studentNames = new Map(activeStudents.map(student => [student.id, `${student.name} ${student.surname}`]));
    const next = calendarLessons
      .filter(lesson => lesson.start >= currentDateTime && studentNames.has(lesson.data?.studentId))
      .sort((a, b) => a.start.localeCompare(b.start))[0];
    const nextDate = next ? new Date(`${next.start.slice(0, 10)}T${next.start.slice(11, 16)}:00`) : undefined;
    const when = next && nextDate ? `${new Intl.DateTimeFormat('it-IT', { weekday: 'short', day: 'numeric', month: 'short' }).format(nextDate)} · ${next.start.slice(11, 16)}` : undefined;
    return [school.id, {
      students: activeStudents.length,
      weeklyLessons: weeklyLessons.filter(lesson => lesson.from <= today.toIyyyyMMdd() && lesson.to >= today.toIyyyyMMdd()).reduce((total, lesson) => total + lesson.schedule.length, 0),
      nextWhen: when,
      nextStudent: next ? studentNames.get(next.data?.studentId) : undefined,
    }] as const;
  }));
  if (request !== summaryRequest) return;
  schoolSummaries.value = Object.fromEntries(results.filter(result => result.status === 'fulfilled').map(result => result.value));
  loadingSummaries.value = false;
}

async function loadTodayLessons() {
  loadingTodayLessons.value = true;
  todayLessons.value = await SchoolService.instance.getTodayLessons();
  loadingTodayLessons.value = false;
  loadAtLeastOnceTodayLessons.value = true;
}

async function loadSchools() {
  loadingSchools.value = true;
  schoolSubscription = SchoolRepository.instance.observeAll().subscribe({
    next: data => {
      schools.value = data;
      loadingSchools.value = false;
      void loadSchoolSummaries(data);
    },
    error: err => {
      toast.warning('Impossibile caricare le scuole...');
      console.error(err);
      loadingSchools.value = false
    }
  });
}

onMounted(async () => {
  loadTodayLesson.value = LocalStorageHandler.getItem('loadTodayLesson') ?? false;
  if (loadTodayLesson.value) loadTodayLessons();
  await loadSchools();
});

onUnmounted(() => {
  summaryRequest++;
  schoolSubscription?.unsubscribe();
})
</script>
<style scoped>
.page-heading h1 { margin: 2px 0 4px; font-size: clamp(1.55rem, 3vw, 1.9rem); font-weight: 700; letter-spacing: -.03em; }
.page-heading p, .school-address { margin: 0; color: var(--app-muted); font-size: .9rem; }
.page-eyebrow { font-size: .85rem; color: var(--app-muted); font-weight: 600; }
.school-card { min-height: 176px; padding: 20px; transition: background-color .18s ease, border-color .18s ease, box-shadow .18s ease; }
.school-card:hover { background: var(--app-hover-surface); border-color: var(--app-hover-border) !important; box-shadow: var(--app-hover-shadow) !important; }
.school-card h2 { font-size: 1.1rem; line-height: 1.35; font-weight: 650; margin: 2px 0 4px; }
.school-card-layout { display: flex; align-items: flex-start; gap: 16px; min-width: 0; }
.school-card-content { flex: 1; min-width: 0; }
.school-card-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.school-chevron { color: var(--app-muted); flex: 0 0 auto; }
.school-icon { width: 52px; height: 52px; flex: 0 0 52px; display: grid; place-items: center; border-radius: 13px; background: var(--app-accent-surface); }
.school-summary { display: flex; justify-content: space-between; gap: 12px; align-items: flex-end; flex-wrap: wrap; margin-top: 22px; }
.school-metrics { display: flex; align-items: center; gap: 8px 16px; flex-wrap: wrap; color: var(--app-muted); font-size: .85rem; }
.school-metric { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
.school-metric strong { color: var(--app-text); font-weight: 700; }
.next-lesson { display: flex; align-items: center; gap: 9px; font-size: .85rem; }
.next-lesson > span:last-child { display: flex; flex-direction: column; line-height: 1.35; }
.next-lesson small { color: var(--app-muted); font-size: .75rem; }
.next-lesson strong { color: var(--app-text); font-weight: 650; }
.next-lesson span span { color: var(--app-muted); }
.next-lesson-icon { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 10px; color: var(--app-primary); background: var(--app-accent-surface); }
.school-summary-loading { margin-top: 24px; max-width: 160px; }
.summary-unavailable { color: var(--app-muted); font-size: .85rem; margin-top: 20px; }
.add-school-card { display: flex; align-items: center; cursor: pointer; border-style: dashed !important; }
.add-icon { color: var(--app-primary); background: var(--app-accent-surface); }
.section-title { font-size: 1.14rem; font-weight: 650; }
@media (max-width: 600px) {
  .school-card { min-height: 0; padding: 16px; }
  .school-card-layout { gap: 12px; }
  .school-icon { width: 46px; height: 46px; flex-basis: 46px; }
  .school-summary { margin-top: 16px; }
  .next-lesson { width: 100%; }
}
</style>
