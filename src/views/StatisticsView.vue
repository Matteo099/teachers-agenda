<template>
    <div class="statistics-view">
        <header class="statistics-heading"><span class="statistics-heading-icon"><v-icon icon="mdi-chart-box-outline" size="27" /></span><div><span>Panoramica</span><h1>Statistiche</h1><p>Analizza lezioni, scuole, studenti e compensi.</p></div></header>
        <v-tabs v-model="tab" class="statistics-tabs" color="primary" show-arrows>
            <v-tab prepend-icon="mdi-cash" text="Stipendio" value="salary"></v-tab>
            <v-tab prepend-icon="mdi-town-hall" text="Scuole" value="schools"></v-tab>
            <v-tab prepend-icon="mdi-calendar-blank" text="Lezioni" value="lessons"></v-tab>
            <v-tab prepend-icon="mdi-account-school" text="Studenti" value="students"></v-tab>
        </v-tabs>

        <section class="statistics-filters">
            <div class="statistics-filters-heading"><span class="statistics-filter-icon"><v-icon icon="mdi-tune-variant" size="20" /></span><div><h2>Filtri e periodo</h2><p>{{ filtersExpanded ? "Seleziona l'intervallo e le scuole da includere" : 'Filtri applicati alle statistiche' }}</p></div>
                <v-btn color="primary" variant="tonal" size="small" :prepend-icon="filtersExpanded ? 'mdi-chevron-up' : 'mdi-tune-variant'"
                    :aria-expanded="filtersExpanded" aria-controls="statistics-filter-controls"
                    @click="filtersExpanded = !filtersExpanded">{{ filtersExpanded ? 'Chiudi filtri' : 'Modifica filtri' }}</v-btn>
            </div>
            <div v-if="!filtersExpanded" class="statistics-filter-overview">
                <div class="statistics-filter-overview-item"><v-icon icon="mdi-calendar-range" size="19" /><div><span>Periodo</span><strong>{{ periodLabel }}</strong></div></div>
                <div class="statistics-filter-overview-item"><v-icon icon="mdi-school-outline" size="19" /><div><span>Scuole</span><strong>{{ schoolSummary }}</strong></div></div>
            </div>
            <v-expand-transition><div v-show="filtersExpanded" id="statistics-filter-controls" class="statistics-filter-grid">
                <div class="statistics-period-controls">
                    <div class="statistics-filter-label">Periodo</div>
                    <DateSelect v-model="dateRange" :show-advanced="true" />
                    <div class="statistics-period-summary"><span>{{ periodLabel }}</span><div class="statistics-period-navigation">
                        <v-btn icon="mdi-chevron-left" variant="text" size="small" aria-label="Periodo precedente" @click="changePeriod(-1)" />
                        <v-btn icon="mdi-chevron-right" variant="text" size="small" aria-label="Periodo successivo" @click="changePeriod(1)" />
                    </div></div>
                </div>
                <div class="statistics-school-filter"><div class="statistics-filter-label">Scuole incluse</div>
                    <v-select v-model="selectedSchoolsID" :items="schools" :loading="loadingSchools" item-value="id"
                        label="Seleziona scuole" :item-title="schoolTitle" variant="outlined" density="comfortable" hide-details chips multiple />
                    <p>{{ selectedSchools.length }} {{ selectedSchools.length === 1 ? 'scuola selezionata' : 'scuole selezionate' }}</p>
                </div>
            </div></v-expand-transition>
        </section>

        <v-tabs-window v-model="tab" class="w-100">
            <v-tabs-window-item value="salary">
                <div class="statistics-content statistics-content-three">
                        <MonthlySalaryList :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                        <OfficialSalaryLessons :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                        <SalaryDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="schools">
                <div class="statistics-content">
                        <SchoolDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                        <SchoolStudentDistribution :schools="selectedSchools" :from="dateRange?.from"
                            :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="lessons">
                <div class="statistics-content">
                        <LessonDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                        <WeeklyLessonAttendance :schools="selectedSchools" :from="dateRange?.from"
                            :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="students">
                <div class="statistics-content statistics-content-three">
                        <StudentAbsenceList :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                        <StudentRecitalList :schools="selectedSchools" />
                        <StudentTrend :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>

<script setup lang="ts">
import DateSelect from '@/components/inputs/DateSelect.vue';
import LessonDistribution from '@/components/statistics/LessonDistribution.vue';
import WeeklyLessonAttendance from '@/components/statistics/WeeklyLessonAttendance.vue';
import SalaryDistribution from '@/components/statistics/SalaryDistribution.vue';
import SalaryTrend from '@/components/statistics/SalaryTrend.vue';
import SchoolDistribution from '@/components/statistics/SchoolDistribution.vue';
import SchoolStudentDistribution from '@/components/statistics/SchoolStudentDistribution.vue';
import StudentTrend from '@/components/statistics/StudentTrend.vue';
import MonthlySalaryList from '@/components/statistics/MonthlySalaryList.vue';
import OfficialSalaryLessons from '@/components/statistics/OfficialSalaryLessons.vue';
import StudentAbsenceList from '@/components/statistics/StudentAbsenceList.vue';
import StudentRecitalList from '@/components/statistics/StudentRecitalList.vue';
import { yyyyMMdd, type DateSelectModel, type School } from '@/models/model';
import type { ID } from '@/models/repositories/abstract-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { StatisticsService } from '@/models/services/statistics-service';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const tabs = ["salary", "schools", "lessons", "students"];
const route = useRoute();
const router = useRouter();
const tab = ref(tabs[0]);
const dateRange: Ref<DateSelectModel | undefined> = ref();
const filtersExpanded = ref(false);
const loadingSchools = ref(false);
const schools: Ref<School[]> = ref([]);
const selectedSchoolsID: Ref<ID[]> = ref([]);

const tabQuery = computed(() => route.query.tab as string);
const filtersQuery = computed(() => route.query.filters as string);
const from = computed(() => route.query.from as string);
const to = computed(() => route.query.to as string);
const selectedSchools = computed(() => schools.value.filter(s => selectedSchoolsID.value.includes(s.id)));
const schoolSummary = computed(() => {
    if (!selectedSchools.value.length) return 'Nessuna scuola selezionata';
    if (selectedSchools.value.length === schools.value.length) return `Tutte le scuole (${schools.value.length})`;
    return selectedSchools.value.map(school => school.name).join(', ');
});
const periodLabel = computed(() => {
    if (!dateRange.value?.from) return 'Periodo non selezionato';
    const fromDate = yyyyMMdd.fromIyyyyMMdd(dateRange.value.from);
    const toDate = dateRange.value.to ? yyyyMMdd.fromIyyyyMMdd(dateRange.value.to) : fromDate;
    const formatLongDate = (date: typeof fromDate) => new Intl.DateTimeFormat('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(date.toDate());
    return dateRange.value.to && dateRange.value.from !== dateRange.value.to
        ? `${formatLongDate(fromDate)} – ${formatLongDate(toDate)}`
        : formatLongDate(fromDate);
});

function schoolTitle(school: School): string {
    return school.city ? `${school.name} - ${school.city}` : school.name;
}

function shiftDate(value: string, amount: number, byWeek: boolean): string {
    const date = yyyyMMdd.fromIyyyyMMdd(value).toDate();
    if (byWeek) date.setDate(date.getDate() + amount * 7);
    else date.setMonth(date.getMonth() + amount);
    return yyyyMMdd.fromDate(date).toIyyyyMMdd();
}

function isWeeklyRange(): boolean {
    if (!dateRange.value?.from || !dateRange.value?.to) return false;
    const fromDate = yyyyMMdd.fromIyyyyMMdd(dateRange.value.from).toDate();
    const toDate = yyyyMMdd.fromIyyyyMMdd(dateRange.value.to).toDate();
    return Math.round((toDate.getTime() - fromDate.getTime()) / 86400000) + 1 <= 7;
}

function changePeriod(delta: number) {
    if (!dateRange.value?.from) return;
    const byWeek = isWeeklyRange();
    const to = dateRange.value.to ?? dateRange.value.from;
    dateRange.value = {
        from: shiftDate(dateRange.value.from, delta, byWeek),
        to: shiftDate(to, delta, byWeek),
    };
}

watch(tabQuery, updateTab, { immediate: true });
watch(filtersQuery, updateFilters, { immediate: true });
watch(from, updateFilters, { immediate: true });
watch(to, updateFilters, { immediate: true });
watch(schools, updateFilters);
watch(tab, updateQueryRoute);
watch(selectedSchoolsID, updateQueryRoute);
watch(dateRange, updateQueryRoute);

function updateTab() {
    if (tabQuery.value && tabs.includes(tabQuery.value.toLowerCase())) {
        tab.value = tabQuery.value;
    }
}

function updateFilters() {
    selectedSchoolsID.value = filtersQuery.value?.split(",") ?? schools.value.map(s => s.id);
    if (from.value) dateRange.value = { from: from.value, to: dateRange.value?.to };
    if (to.value) dateRange.value = { from: dateRange.value?.from, to: to.value };
    if (filtersQuery.value && tabs.includes(tabQuery.value.toLowerCase())) {
        tab.value = tabQuery.value;
    }
}

function updateQueryRoute() {
    let route = `/statistics?tab=${tab.value}`;

    const filters = selectedSchoolsID.value.join(",");
    if (filters && filters.length != 0) route += "&filters=" + filters;
    if (dateRange.value?.from) route += `&from=${dateRange.value.from}`;
    if (dateRange.value?.to) route += `&to=${dateRange.value.to}`;

    router.push(route)
}

async function loadSchools() {
    loadingSchools.value = true;
    schools.value = await SchoolRepository.instance.getAll();
    loadingSchools.value = false;
}

onMounted(() => {
    StatisticsService.instance.cache.clear();
    loadSchools();
})
</script>
<style scoped>
.statistics-view { display: grid; gap: 20px; padding-bottom: 24px; }
.statistics-heading { display: flex; align-items: center; gap: 15px; }
.statistics-heading-icon { display: grid; place-items: center; width: 54px; height: 54px; flex: none; border-radius: 15px; background: var(--app-accent-surface); color: var(--app-primary); }
.statistics-heading > div > span { color: var(--app-primary); font-size: .76rem; font-weight: 650; }
.statistics-heading h1 { margin: 1px 0; color: var(--app-text); font-size: 1.5rem; font-weight: 700; letter-spacing: -.025em; }
.statistics-heading p { margin: 0; color: var(--app-muted); font-size: .88rem; }
.statistics-tabs { width: fit-content; max-width: 100%; padding: 4px; border: 1px solid var(--app-border); border-radius: 12px; box-shadow: var(--app-shadow); }
.statistics-tabs :deep(.v-tab--selected) { background: var(--app-accent-surface); color: var(--app-primary); }
.statistics-filters { overflow: hidden; border: 1px solid var(--app-border); border-radius: 16px; background: var(--app-surface); box-shadow: var(--app-shadow); }
.statistics-filters-heading { display: flex; align-items: center; gap: 12px; padding: 18px 22px; border-bottom: 1px solid var(--app-border); }
.statistics-filters-heading > div { flex: 1; min-width: 0; }
.statistics-filter-icon { display: grid; place-items: center; width: 40px; height: 40px; flex: none; border-radius: 11px; background: var(--app-accent-surface); color: var(--app-primary); }
.statistics-filters-heading h2 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 700; }
.statistics-filters-heading p { margin: 2px 0 0; color: var(--app-muted); font-size: .8rem; }
.statistics-filter-overview { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr); gap: 18px; padding: 16px 22px; }
.statistics-filter-overview-item { display: flex; align-items: center; gap: 10px; min-width: 0; color: var(--app-primary); }
.statistics-filter-overview-item > div { display: grid; gap: 2px; min-width: 0; }
.statistics-filter-overview-item span { color: var(--app-muted); font-size: .73rem; }
.statistics-filter-overview-item strong { overflow: hidden; color: var(--app-text); font-size: .85rem; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
.statistics-filter-grid { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(270px, .7fr); gap: 22px; padding: 20px 22px; }
.statistics-school-filter { padding-left: 22px; border-left: 1px solid var(--app-border); }
.statistics-filter-label { margin-bottom: 10px; color: var(--app-text); font-size: .82rem; font-weight: 700; }
.statistics-school-filter p { margin: 10px 0 0; color: var(--app-muted); font-size: .76rem; }
.statistics-period-summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 45px; padding: 4px 5px 4px 14px; margin-top: 12px; border: 1px solid var(--app-border); border-radius: 11px; background: var(--app-hover-surface); }
.statistics-period-summary > span { color: var(--app-text); font-size: .84rem; font-weight: 600; }
.statistics-period-navigation { display: flex; align-items: center; gap: 2px; flex: none; }
.statistics-content { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; align-items: start; }
.statistics-content-three > :last-child { grid-column: 1 / -1; }
.statistics-content :deep(.statistics-panel) { min-width: 0; }
@media (max-width: 960px) { .statistics-filter-grid { grid-template-columns: 1fr; } .statistics-school-filter { padding: 16px 0 0; border-left: 0; border-top: 1px solid var(--app-border); } .statistics-content { grid-template-columns: 1fr; } .statistics-content-three > :last-child { grid-column: auto; } }
@media (max-width: 600px) { .statistics-view { gap: 16px; } .statistics-heading-icon { width: 44px; height: 44px; } .statistics-heading h1 { font-size: 1.3rem; } .statistics-tabs { width: 100%; } .statistics-tabs :deep(.v-tab) { min-width: 90px; } .statistics-filters-heading { flex-wrap: wrap; padding: 16px; } .statistics-filters-heading > .v-btn { width: 100%; } .statistics-filter-overview { grid-template-columns: 1fr; gap: 12px; padding: 16px; } .statistics-filter-grid { padding: 16px; } .statistics-period-summary { align-items: flex-start; } }
</style>
