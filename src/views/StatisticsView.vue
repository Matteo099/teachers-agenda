<template>
    <div>
        <v-tabs v-model="tab" color="primary" align-tabs="center">
            <v-tab prepend-icon="mdi-cash" text="Stipendio" value="salary"></v-tab>
            <v-tab prepend-icon="mdi-town-hall" text="Scuole" value="schools"></v-tab>
            <v-tab prepend-icon="mdi-calendar-blank" text="Lezioni" value="lessons"></v-tab>
            <v-tab prepend-icon="mdi-account-school" text="Studenti" value="students"></v-tab>
        </v-tabs>

        <v-row class="align-end">
            <v-col cols="12" md="8">
                <DateSelect v-model="dateRange" class="mt-2"></DateSelect>
            </v-col>
            <v-col cols=12 md="4">
                <v-select v-model="selectedSchoolsID" :items="schools" :loading="loadingSchools" item-value="id"
                    label="Scuole" item-title="name" variant="outlined" density="compact" hide-details chips
                    multiple></v-select>
            </v-col>
        </v-row>

        <v-tabs-window v-model="tab" class="w-100">
            <v-tabs-window-item value="salary">
                <v-card flat>
                    <v-card-text>
                        <SalaryDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                        <SalaryTrend :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="schools">
                <v-card flat>
                    <v-card-text>
                        <SchoolDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                        <SchoolStudentDistribution :schools="selectedSchools" :from="dateRange?.from"
                            :to="dateRange?.to" />
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="lessons">
                <v-card flat>
                    <v-card-text>
                        <LessonDistribution :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="students">
                <v-card flat>
                    <v-card-text>
                        <StudentTrend :schools="selectedSchools" :from="dateRange?.from" :to="dateRange?.to" />
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>

<script setup lang="ts">
import DateSelect from '@/components/inputs/DateSelect.vue';
import LessonDistribution from '@/components/statistics/LessonDistribution.vue';
import SalaryDistribution from '@/components/statistics/SalaryDistribution.vue';
import SalaryTrend from '@/components/statistics/SalaryTrend.vue';
import SchoolDistribution from '@/components/statistics/SchoolDistribution.vue';
import SchoolStudentDistribution from '@/components/statistics/SchoolStudentDistribution.vue';
import StudentTrend from '@/components/statistics/StudentTrend.vue';
import type { DateSelectModel, School } from '@/models/model';
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
const loadingSchools = ref(false);
const schools: Ref<School[]> = ref([]);
const selectedSchoolsID: Ref<ID[]> = ref([]);

const tabQuery = computed(() => route.query.tab as string);
const filtersQuery = computed(() => route.query.filters as string);
const from = computed(() => route.query.from as string);
const to = computed(() => route.query.to as string);
const selectedSchools = computed(() => schools.value.filter(s => selectedSchoolsID.value.includes(s.id)));
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