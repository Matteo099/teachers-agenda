<template>
    <v-card class="school-panel recovery-panel" variant="flat" :loading="loadingExtendedRecoveries">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-calendar-refresh-outline" size="22" /></span><div><h2>Recuperi</h2><p>Lezioni da recuperare, programmate e svolte</p></div></div>
        <v-list class="recovery-list" lines="three">
            <template v-for="[key, value] in extendedRecoveries?.recoveryMap" :key="key">
                <v-list-subheader class="recovery-group-title"><b>{{ recoveryTypes[key] }}</b><v-chip size="x-small" variant="tonal" color="primary">{{ value.length }}</v-chip></v-list-subheader>

                <v-list-item v-if="value.length == 0" class="recovery-empty">
                    <div v-if="key == RecoveryStatus.UNSET">
                        Nessuna lezione da recuperare
                    </div>
                    <div v-else-if="key == RecoveryStatus.PENDING">
                        Nessuna lezione di recupero programmata
                    </div>
                    <div v-else>
                        Nessuna lezione di recupero effettuata
                    </div>
                </v-list-item>

                <v-list-item class="recovery-item" v-if="key != RecoveryStatus.DONE" v-for="(recovery, index) in value"
                    :key="`${recovery.lesson.lessonId}_${recovery.recoveryReference.originalDailyLesson.id}`">
                    <template v-slot:title>
                        {{ recovery.student.name }} {{ recovery.student.surname }}
                    </template>
                    <template v-slot:subtitle>
                        <div v-if="key == RecoveryStatus.UNSET">
                            Da recuperare la lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }}
                        </div>
                        <div v-else-if="key == RecoveryStatus.PENDING">
                            Recupero della lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }}
                            programmato
                            <span v-if="recovery.recoveryReference.recoveryDailyLesson"> per il {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.recoveryDailyLesson.date).format()
                            }}</span>
                        </div>
                        <div v-else>
                            Recupero della lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }}
                            effettuato
                            <span v-if="recovery.recoveryReference.recoveryDailyLesson"> il {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.recoveryDailyLesson.date).format()
                            }}</span>
                        </div>
                    </template>

                    <template v-slot:append>
                        <ScheduleRecoveryLessonButton v-if="key == RecoveryStatus.UNSET" v-model="value[index]!"
                            :school="school"></ScheduleRecoveryLessonButton>
                        <v-btn v-else-if="key == RecoveryStatus.PENDING" color="error" variant="tonal" size="small" @click="cancelScheduleRecovery(recovery)"
                            :loading="cancellingScheduleRecovery" :disabled="cancellingScheduleRecovery">Annulla</v-btn>
                        <v-icon v-else color="success">
                            mdi-check-all
                        </v-icon>
                    </template>
                </v-list-item>

                <v-expansion-panels v-if="key == RecoveryStatus.DONE && value.length > 0" variant="accordion" class="mb-2">
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            Visualizza recuperi effettuati ({{ value.length }})
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-list-item v-for="recovery in value"
                                :key="`${recovery.lesson.lessonId}_${recovery.recoveryReference.originalDailyLesson.id}`">
                                <template v-slot:title>
                                    {{ recovery.student.name }} {{ recovery.student.surname }}
                                </template>
                                <template v-slot:subtitle>
                                    Recupero della lezione del {{
                                        yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }} effettuato
                                    <span v-if="recovery.recoveryReference.recoveryDailyLesson"> il {{
                                        yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.recoveryDailyLesson.date).format() }}</span>
                                </template>
                                <template v-slot:append>
                                    <v-icon color="success">mdi-check-all</v-icon>
                                </template>
                            </v-list-item>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

            </template>
        </v-list>
        <v-card-text v-if="!extendedRecoveries">
            Nessun recupero in programma
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import ScheduleRecoveryLessonButton from '@/components/lesson/ScheduleRecoveryLessonButton.vue';
import { withCache } from '@/models/decorators/cache-decorator';
import { RecoveryStatus, recoveryTypes, yyyyMMdd, type School } from '@/models/model';
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
        console.log(extendedRecoveries.value);
    } catch (error) {
        toast.warning("Impossibile caricare le Lezioni di Recupero");
        console.error("Unable to load recovery lessons", error);
    } finally {
        loadingExtendedRecoveries.value = false;
    }
}
</script>
