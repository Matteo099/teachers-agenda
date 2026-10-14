<template>
    <v-dialog v-model="open" max-width="560" scrollable>
        <template #activator="{ props: activatorProps }">
            <v-btn variant="tonal" color="primary" prepend-icon="mdi-history" v-bind="activatorProps">
                Storico lezioni
            </v-btn>
        </template>
        <v-card variant="flat" rounded="lg">
            <v-card-title class="d-flex align-center ga-3 pa-4">
                <v-icon icon="mdi-history" color="primary" />
                <span class="text-truncate">Lezioni di {{ student.name }} {{ student.surname }}</span>
                <v-spacer />
                <v-btn icon="mdi-close" variant="text" size="small" aria-label="Chiudi storico lezioni" @click="open = false" />
            </v-card-title>
            <v-divider />
            <v-card-text class="pa-4">
                <v-progress-linear v-if="loading" indeterminate color="primary" class="mb-4" />
                <v-alert v-if="error" type="error" variant="tonal" class="mb-4">Impossibile caricare lo storico delle lezioni.</v-alert>
                <template v-if="!loading && !error">
                    <div v-if="entries.length" class="d-flex flex-wrap ga-2 mb-4" aria-label="Legenda stati">
                        <span v-for="(status, key) in statusColors" :key="key" class="d-inline-flex align-center ga-1 text-caption">
                            <span class="status-badge" :class="`status-${key}`">{{ status.short }}</span>{{ status.label }}
                        </span>
                    </div>
                    <v-list v-if="entries.length" class="pa-0" lines="one" rounded="lg" border>
                        <template v-for="(entry, index) in entries" :key="entry.id">
                            <v-divider v-if="index" />
                            <v-list-item class="py-2">
                                <template #title>{{ yyyyMMdd.fromIyyyyMMdd(entry.date).format() }}</template>
                                <template #subtitle>{{ Time.fromITime(entry.startTime).format() }}</template>
                                <template #append>
                                    <span class="d-inline-flex align-center ga-1" :aria-label="entry.statuses.map(key => statusColors[key].label).join(', ')">
                                        <span v-for="key in entry.statuses" :key="key" class="status-badge" :class="`status-${key}`" :title="statusColors[key].label">{{ statusColors[key].short }}</span>
                                    </span>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list>
                    <v-alert v-else type="info" variant="tonal">Nessuna lezione svolta finora.</v-alert>
                </template>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { Time, yyyyMMdd, type School, type Student } from '@/models/model';
import { getStudentLessonHistory, type StudentLessonHistoryEntry } from '@/models/student-lesson-history';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { statusColors } from '@/models/statusColors';
import { ref, watch } from 'vue';

const props = defineProps<{ school: School; student: Student }>();
const open = ref(false);
const loading = ref(false);
const error = ref(false);
const entries = ref<StudentLessonHistoryEntry[]>([]);
let request = 0;

watch(() => [open.value, props.school.id, props.student.id], async () => {
    const current = ++request;
    if (!open.value) return;
    loading.value = true;
    error.value = false;
    try {
        const days = await DailyLessonService.instance.getDailyLessonsOfSchool(props.school.id);
        if (current === request) entries.value = getStudentLessonHistory(days, props.student.id, yyyyMMdd.today().toIyyyyMMdd());
    } catch {
        if (current === request) error.value = true;
    } finally {
        if (current === request) loading.value = false;
    }
}, { immediate: true });
</script>
