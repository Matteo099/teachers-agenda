<template>
    <v-card class="school-panel recovery-panel" variant="flat" :loading="loadingExtendedRecoveries">
        <div class="school-panel-header recovery-header"><span class="school-panel-icon"><v-icon icon="mdi-calendar-refresh-outline" size="22" /></span><div><h2>Recuperi</h2></div><CopyDebugJsonButton :data="{ school, recoveries, extendedRecoveries }" label="Copia i recuperi in JSON" /></div>

        <v-tabs v-model="activeStatus" class="recovery-tabs" color="primary" grow show-arrows aria-label="Stato dei recuperi">
            <v-tab v-for="status in recoveryTabs" :key="status.value" :value="status.value"><v-icon :icon="status.icon" size="18" /><span>{{ status.label }}</span><span class="recovery-tab-count">{{ recoveryCount(status.value) }}</span></v-tab>
        </v-tabs>

        <div class="recovery-content">
            <div class="recovery-section-heading"><div><h3>{{ activeTab.title }}</h3></div><v-chip size="small" variant="tonal" color="primary">{{ activeRecoveries.length }}</v-chip></div>

            <div v-if="activeRecoveries.length" class="recovery-entries">
                <article v-for="recovery in visibleRecoveries" :key="`${recovery.lesson.lessonId}_${recovery.recoveryReference.originalDailyLesson.id}`" class="recovery-entry">
                    <div class="recovery-entry-heading">
                        <span class="recovery-student-avatar"><v-icon icon="mdi-account-outline" size="20" /></span>
                        <div class="recovery-student-name"><strong>{{ recovery.student.name }} {{ recovery.student.surname }}</strong><small>Lezione di {{ Math.round((recovery.lesson.endTime - recovery.lesson.startTime) / 60) }} minuti</small></div>
                        <span class="recovery-state" :class="`recovery-state-${activeStatus}`"><v-icon :icon="activeTab.icon" size="15" />{{ activeTab.label }}</span>
                    </div>
                    <div class="recovery-date-list">
                        <div><v-icon icon="mdi-calendar-remove-outline" size="18" /><span>Lezione originale</span><strong>{{ yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }}</strong></div>
                        <div v-if="recovery.recoveryReference.recoveryDailyLesson"><v-icon icon="mdi-calendar-check-outline" size="18" /><span>{{ activeStatus === RecoveryStatus.DONE ? 'Recuperata il' : 'Programmata per' }}</span><strong>{{ yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.recoveryDailyLesson.date).format() }}</strong></div>
                    </div>
                    <div v-if="activeStatus !== RecoveryStatus.DONE" class="recovery-entry-actions">
                        <ScheduleRecoveryLessonButton v-if="activeStatus === RecoveryStatus.UNSET" :model-value="recovery" :school="school" />
                        <v-btn v-else color="error" variant="tonal" size="small" prepend-icon="mdi-calendar-remove-outline" :loading="cancellingScheduleRecovery" :disabled="cancellingScheduleRecovery" @click="cancelScheduleRecovery(recovery)">Annulla recupero</v-btn>
                    </div>
                </article>
                <v-btn v-if="activeRecoveries.length > previewCount" class="recovery-expand" variant="tonal" color="primary"
                    :append-icon="expandedStatuses[activeStatus] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    :aria-expanded="expandedStatuses[activeStatus]" @click="expandedStatuses[activeStatus] = !expandedStatuses[activeStatus]">
                    {{ expandedStatuses[activeStatus] ? 'Mostra meno' : `Mostra altre ${activeRecoveries.length - previewCount} lezioni` }}
                </v-btn>
            </div>

            <div v-else-if="!loadingExtendedRecoveries" class="recovery-empty-state"><span class="recovery-empty-icon"><v-icon :icon="activeTab.emptyIcon" size="25" /></span><strong>{{ activeTab.emptyTitle }}</strong></div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import ScheduleRecoveryLessonButton from '@/components/lesson/ScheduleRecoveryLessonButton.vue';
import CopyDebugJsonButton from '@/components/debugger/CopyDebugJsonButton.vue';
import { withCache } from '@/models/decorators/cache-decorator';
import { RecoveryStatus, yyyyMMdd, type School } from '@/models/model';
import { SchoolRecoveryLessonRepository } from '@/models/repositories/recovery-lesson-repository';
import { SchoolRecoveryLessonExtService, type SchoolRecoveryLessonMap } from '@/models/services/school-recovery-lesson-ext-service';
import { SchoolRecoveryLessonService, type StudentLessonWithRecovery } from '@/models/services/school-recovery-lesson-service';
import { computed, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useDocument } from 'vuefire';

export interface RecoveryLessonViewProps {
    school: School
}

const props = defineProps<RecoveryLessonViewProps>();

const id = computed(() => props.school.id);
const schoolRecoveryLessonsSource = SchoolRecoveryLessonRepository.instance.observe(id);
const recoveries = useDocument(schoolRecoveryLessonsSource);

const extendedRecoveries: Ref<SchoolRecoveryLessonMap | undefined> = ref();
const loadingExtendedRecoveries = ref(false);
const cancellingScheduleRecovery = ref(false);
const activeStatus = ref(RecoveryStatus.UNSET);
const previewCount = 2;
const expandedStatuses = ref<Record<RecoveryStatus, boolean>>({
    [RecoveryStatus.UNSET]: false,
    [RecoveryStatus.PENDING]: false,
    [RecoveryStatus.DONE]: false,
});
let initialStatusSelected = false;

const recoveryTabs = [
    { value: RecoveryStatus.UNSET, label: 'Da fare', title: 'Da programmare', icon: 'mdi-calendar-clock-outline', emptyIcon: 'mdi-calendar-check-outline', emptyTitle: 'Tutto programmato' },
    { value: RecoveryStatus.PENDING, label: 'Programmati', title: 'Recuperi programmati', icon: 'mdi-calendar-arrow-right', emptyIcon: 'mdi-calendar-blank-outline', emptyTitle: 'Nessun recupero programmato' },
    { value: RecoveryStatus.DONE, label: 'Completati', title: 'Recuperi completati', icon: 'mdi-check-circle-outline', emptyIcon: 'mdi-check-all', emptyTitle: 'Nessun recupero completato' },
] as const;
const activeTab = computed(() => recoveryTabs.find(tab => tab.value === activeStatus.value) ?? recoveryTabs[0]!);
const activeRecoveries = computed(() => extendedRecoveries.value?.recoveryMap.get(activeStatus.value) ?? []);
const visibleRecoveries = computed(() => expandedStatuses.value[activeStatus.value]
    ? activeRecoveries.value : activeRecoveries.value.slice(0, previewCount));
function recoveryCount(status: RecoveryStatus): number {
    return extendedRecoveries.value?.recoveryMap.get(status)?.length ?? 0;
}

watch(recoveries, async () => computeDailyLessons());

const cancelScheduleRecovery = withCache(async (recovery: StudentLessonWithRecovery) => {
    cancellingScheduleRecovery.value = true;
    const recoveryLesson = recovery.recoveryReference.recoveryDailyLesson?.lessons.find(l =>
        l.recovery?.ref === 'original' &&
        l.recovery.lessonRef.dailyLessonId === recovery.recoveryReference.originalDailyLesson.id &&
        l.recovery.lessonRef.lessonId === recovery.lesson.lessonId);
    if (recoveryLesson?.recovery) {
        await SchoolRecoveryLessonService.instance.cancelRecoveryFraction(
            recovery.lesson.recovery?.lessonRef ?? { dailyLessonId: recovery.recoveryReference.originalDailyLesson.id, lessonId: recovery.lesson.lessonId },
            { dailyLessonId: recovery.recoveryReference.recoveryDailyLesson!.id, lessonId: recoveryLesson.lessonId },
            Math.round((recoveryLesson.endTime - recoveryLesson.startTime) / 60)
        );
    } else {
        await SchoolRecoveryLessonService.instance.cancelRecovery(recovery);
    }
    toast.success('Recupero annullato');
}, (error) => {
    toast.warn("Impossibile annullare la lezione di recupero")
    console.error("Unable to cancel recovery lesson", error);
}, async () => {
    cancellingScheduleRecovery.value = false;
});

async function computeDailyLessons() {
    if (!recoveries.value) return;

    try {
        loadingExtendedRecoveries.value = true;
        extendedRecoveries.value = await SchoolRecoveryLessonExtService.instance.computeDailyLessons(recoveries.value);
        if (!initialStatusSelected) {
            activeStatus.value = recoveryTabs.find(tab => recoveryCount(tab.value) > 0)?.value ?? RecoveryStatus.UNSET;
            initialStatusSelected = true;
        }
    } catch (error) {
        toast.warning("Impossibile caricare le Lezioni di Recupero");
        console.error("Unable to load recovery lessons", error);
    } finally {
        loadingExtendedRecoveries.value = false;
    }
}
</script>

<style scoped>
.recovery-panel { height: 100%; }
.recovery-header { padding-bottom: 18px; }
.recovery-tabs { margin: 0 20px; border-bottom: 1px solid var(--app-border); }
.recovery-tabs :deep(.v-tab) { min-width: 0; gap: 5px; padding: 0 8px; font-size: .76rem; font-weight: 650; text-transform: none; }
.recovery-tab-count { display: inline-flex; align-items: center; justify-content: center; min-width: 22px; height: 22px; padding: 0 5px; border-radius: 7px; background: var(--app-hover-surface); color: var(--app-muted); font-size: .72rem; }
.recovery-tabs :deep(.v-tab--selected) .recovery-tab-count { background: var(--app-accent-surface); color: var(--app-primary); }
.recovery-content { padding: 20px 24px 24px; }
.recovery-section-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.recovery-section-heading > div { flex: 1; min-width: 0; }
.recovery-section-heading h3 { margin: 0; color: var(--app-text); font-size: .98rem; font-weight: 700; }
.recovery-section-heading p { margin: 2px 0 0; color: var(--app-muted); font-size: .79rem; }
.recovery-entries { display: grid; gap: 12px; }
.recovery-expand { width: 100%; min-height: 42px; margin-top: 2px; border-radius: 10px; font-size: .82rem; font-weight: 650; text-transform: none; }
.recovery-entry { overflow: hidden; padding: 16px; border: 1px solid var(--app-border); border-radius: 13px; background: var(--app-surface); box-shadow: var(--app-shadow); }
.recovery-entry-heading { display: flex; align-items: center; gap: 10px; }
.recovery-student-avatar { display: grid; place-items: center; width: 38px; height: 38px; flex: none; border-radius: 10px; background: var(--app-accent-surface); color: var(--app-primary); }
.recovery-student-name { flex: 1; min-width: 0; }
.recovery-student-name strong { display: block; overflow: hidden; color: var(--app-text); font-size: .88rem; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.recovery-student-name small { display: block; margin-top: 2px; color: var(--app-muted); font-size: .74rem; }
.recovery-state { display: inline-flex; align-items: center; gap: 4px; flex: none; padding: 5px 7px; border-radius: 8px; background: var(--status-bg); color: var(--status-fg); font-size: .71rem; font-weight: 700; }
.recovery-state-UNSET { --status-bg: var(--status-due-bg); --status-fg: var(--status-due-fg); }
.recovery-state-PENDING { --status-bg: var(--status-recovery-bg); --status-fg: var(--status-recovery-fg); }
.recovery-state-DONE { --status-bg: var(--status-present-bg); --status-fg: var(--status-present-fg); }
.recovery-date-list { display: grid; gap: 9px; padding: 14px 0; margin-top: 14px; border-top: 1px solid var(--app-border); }
.recovery-date-list > div { display: flex; align-items: center; gap: 8px; color: var(--app-muted); font-size: .78rem; }
.recovery-date-list .v-icon { color: var(--app-primary); }
.recovery-date-list strong { margin-left: auto; color: var(--app-text); font-weight: 650; text-align: right; }
.recovery-entry-actions { display: flex; justify-content: flex-end; padding-top: 12px; border-top: 1px solid var(--app-border); }
.recovery-empty-state { display: grid; justify-items: center; gap: 8px; padding: 30px 18px; border: 1px dashed var(--app-border); border-radius: 13px; text-align: center; }
.recovery-empty-icon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 12px; background: var(--app-accent-surface); color: var(--app-primary); }
.recovery-empty-state strong { color: var(--app-text); font-size: .9rem; }
.recovery-empty-state p { max-width: 260px; margin: 0; color: var(--app-muted); font-size: .79rem; }
@media (max-width: 600px) {
    .recovery-tabs { margin: 0 12px; }
    .recovery-tabs :deep(.v-tab) { gap: 4px; padding: 0 5px; font-size: .7rem; }
    .recovery-tabs :deep(.v-tab .v-icon) { display: none; }
    .recovery-content { padding: 18px 16px; }
    .recovery-entry { padding: 14px; }
    .recovery-state { font-size: .68rem; }
    .recovery-date-list > div { flex-wrap: wrap; }
    .recovery-date-list strong { width: 100%; margin-left: 26px; text-align: left; }
}
</style>
