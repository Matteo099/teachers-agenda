<template>
    <div class="statistics-view">
        <header class="statistics-heading"><span class="statistics-heading-icon"><v-icon icon="mdi-chart-box-outline"
                    size="27" /></span>
            <div>
                <h1>Statistiche</h1>
            </div>
        </header>
        <v-tabs v-model="tab" class="statistics-tabs" color="primary" show-arrows>
            <v-tab prepend-icon="mdi-cash" text="Stipendio" value="salary"></v-tab>
            <v-tab prepend-icon="mdi-town-hall" text="Scuole" value="schools"></v-tab>
            <v-tab prepend-icon="mdi-calendar-blank" text="Lezioni" value="lessons"></v-tab>
            <v-tab prepend-icon="mdi-account-school" text="Studenti" value="students"></v-tab>
        </v-tabs>

        <section class="statistics-filters">
            <MonthPeriodControls v-model="dateRange" v-model:expanded="filtersExpanded" />
            <v-select v-model="selectedSchoolsID" class="statistics-school-select" :items="schools"
                :loading="loadingSchools" item-value="id" label="Scuole incluse" :item-title="schoolTitle"
                variant="outlined" density="comfortable" hide-details chips multiple />
        </section>

        <v-tabs-window v-model="tab" class="w-100">
            <v-tabs-window-item value="salary">
                <SalaryPeriodReport :schools="selectedSchools" :from="dateRange.from" :to="dateRange.to" />
                <div v-if="selectedSchools.length" class="statistics-content statistics-salary-details">
                    <SalaryDistribution :schools="selectedSchools" :from="dateRange.from" :to="dateRange.to" />
                    <!-- <SalaryTrend :schools="selectedSchools" :from="dateRange.from" :to="dateRange.to" /> -->
                    <MonthlySalaryList :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                    <OfficialSalaryLessons :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="schools">
                <div v-if="selectedSchools.length" class="statistics-content">
                    <SchoolDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                    <SchoolStudentDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="lessons">
                <div v-if="selectedSchools.length" class="statistics-content">
                    <LessonDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                    <WeeklyLessonAttendance :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="students">
                <div v-if="selectedSchools.length" class="statistics-content statistics-content-three">
                    <StudentAbsenceList :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                    <StudentRecitalList :schools="selectedSchools" />
                    <StudentTrend :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                </div>
            </v-tabs-window-item>
        </v-tabs-window>
        <div v-if="!selectedSchools.length && !loadingSchools" class="statistics-select-school">Seleziona almeno una
            scuola per vedere le statistiche.</div>
    </div>
</template>

<script setup lang="ts">
import MonthPeriodControls from '@/components/inputs/MonthPeriodControls.vue';
import SalaryPeriodReport from '@/components/statistics/SalaryPeriodReport.vue';
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
import { type DateSelectModel, type School } from '@/models/model';
import { monthPeriod } from '@/models/month-period';
import type { ID } from '@/models/repositories/abstract-repository';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { StatisticsService } from '@/models/services/statistics-service';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const tabs = ["salary", "schools", "lessons", "students"];
const route = useRoute();
const router = useRouter();
const tab = ref(tabs[0]);
const dateRange: Ref<DateSelectModel> = ref(monthPeriod(new Date()));
const filtersExpanded = ref(false);
const loadingSchools = ref(false);
const schools: Ref<School[]> = ref([]);
const selectedSchoolsID: Ref<ID[]> = ref([]);
let filtersReady = false;

const tabQuery = computed(() => route.query.tab as string);
const filtersQuery = computed(() => route.query.filters as string);
const from = computed(() => route.query.from as string);
const to = computed(() => route.query.to as string);
const selectedSchools = computed(() => schools.value.filter(s => selectedSchoolsID.value.includes(s.id)));

function schoolTitle(school: School): string {
    return school.city ? `${school.name} - ${school.city}` : school.name;
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
    selectedSchoolsID.value = filtersQuery.value?.split(",").filter(Boolean) ?? schools.value.map(s => s.id);
    if (from.value) dateRange.value = { from: from.value, to: to.value ?? from.value };
    if (tabQuery.value && tabs.includes(tabQuery.value.toLowerCase())) {
        tab.value = tabQuery.value;
    }
}

function updateQueryRoute() {
    if (!filtersReady) return;
    let route = `/statistics?tab=${tab.value}`;

    route += "&filters=" + selectedSchoolsID.value.join(",");
    if (dateRange.value?.from) route += `&from=${dateRange.value.from}`;
    if (dateRange.value?.to) route += `&to=${dateRange.value.to}`;

    if (router.currentRoute.value.fullPath !== route) router.push(route)
}

async function loadSchools() {
    loadingSchools.value = true;
    schools.value = await SchoolRepository.instance.getAll();
    loadingSchools.value = false;
    updateFilters();
    filtersReady = true;
}

onMounted(() => {
    StatisticsService.instance.cache.clear();
    loadSchools();
})
</script>
<style scoped>
.statistics-view {
    display: grid;
    gap: 20px;
    padding-bottom: 24px;
}

.statistics-heading {
    display: flex;
    align-items: center;
    gap: 15px;
}

.statistics-heading-icon {
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    flex: none;
    border-radius: 15px;
    background: var(--app-accent-surface);
    color: var(--app-primary);
}

.statistics-heading>div>span {
    color: var(--app-primary);
    font-size: .76rem;
    font-weight: 650;
}

.statistics-heading h1 {
    margin: 1px 0;
    color: var(--app-text);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -.025em;
}

.statistics-heading p {
    margin: 0;
    color: var(--app-muted);
    font-size: .88rem;
}

.statistics-tabs {
    width: fit-content;
    max-width: 100%;
    padding: 4px;
    border: 1px solid var(--app-border);
    border-radius: 12px;
    box-shadow: var(--app-shadow);
}

.statistics-tabs :deep(.v-tab--selected) {
    background: var(--app-accent-surface);
    color: var(--app-primary);
}

.statistics-filters {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);
    align-items: start;
    gap: 16px 24px;
    padding: 18px 22px;
    border: 1px solid var(--app-border);
    border-radius: 16px;
    background: var(--app-surface);
    box-shadow: var(--app-shadow);
}

.statistics-school-select {
    min-width: 0;
}

.statistics-salary-details {
    margin-top: 16px;
}

.statistics-select-school {
    padding: 24px;
    border: 1px dashed var(--app-border);
    border-radius: 14px;
    color: var(--app-muted);
    text-align: center;
}

.statistics-content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    align-items: start;
}

.statistics-content-three> :last-child {
    grid-column: 1 / -1;
}

.statistics-content :deep(.statistics-panel) {
    min-width: 0;
}

@media (max-width: 960px) {
    .statistics-filters {
        grid-template-columns: 1fr;
    }

    .statistics-content {
        grid-template-columns: 1fr;
    }

    .statistics-content-three> :last-child {
        grid-column: auto;
    }
}

@media (max-width: 600px) {
    .statistics-view {
        gap: 16px;
    }

    .statistics-heading-icon {
        width: 44px;
        height: 44px;
    }

    .statistics-heading h1 {
        font-size: 1.3rem;
    }

    .statistics-tabs {
        width: 100%;
    }

    .statistics-tabs :deep(.v-tab) {
        min-width: 90px;
    }

    .statistics-filters {
        padding: 16px;
    }
}
</style>
