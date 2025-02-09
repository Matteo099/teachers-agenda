<template>
    <v-card title="Recuperi" elevation="3" :loading="loadingExtendedRecoveries">
        <v-list lines="three">
            <template v-for="[key, value] in extendedRecoveries?.recoveryMap" :key="key">
                <v-list-subheader inset><b>{{ recoveryTypes[key] }}</b></v-list-subheader>

                <v-list-item v-if="value.length == 0">
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

                <v-list-item v-for="(recovery, index) in value"
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
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }} programmato
                            <span v-if="recovery.recoveryReference.recoveryDailyLesson"> per il {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.recoveryDailyLesson.date).format() }}</span>
                        </div>
                        <div v-else>
                            Recupero della lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.originalDailyLesson.date).format() }} effettuato
                            <span v-if="recovery.recoveryReference.recoveryDailyLesson"> il {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryReference.recoveryDailyLesson.date).format() }}</span>
                        </div>
                    </template>

                    <template v-slot:append>
                        <ScheduleRecoveryLessonButton v-if="key == RecoveryStatus.UNSET"
                            v-model="value[index]" :school="school"></ScheduleRecoveryLessonButton>
                        <v-btn v-else-if="key == RecoveryStatus.PENDING" @click="cancelScheduleRecovery(recovery)"
                            :loading="cancellingScheduleRecovery" :disabled="cancellingScheduleRecovery">annulla</v-btn>
                        <v-icon v-else color="success">
                            mdi-check-all
                        </v-icon>
                    </template>
                </v-list-item>

                <v-divider v-if="key != RecoveryStatus.DONE"></v-divider>
            </template>
        </v-list>
        <v-card-text v-if="!extendedRecoveries">
            Nessun recupero in programma
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import ScheduleRecoveryLessonButton from '@/components/lesson/ScheduleRecoveryLessonButton.vue';
import { RecoveryStatus, recoveryTypes, yyyyMMdd, type School } from '@/models/model';
import { SchoolRecoveryLessonRepository } from '@/models/repositories/recovery-lesson-repository';
import { SchoolRecoveryLessonExtService, type SchoolRecoveryLessonMap } from '@/models/services/school-recovery-lesson-ext-service';
import { SchoolRecoveryLessonService2, type StudentLessonWithRecovery } from '@/models/services/school-recovery-lesson-service2';
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

async function cancelScheduleRecovery(recovery: StudentLessonWithRecovery) {
    try {
        cancellingScheduleRecovery.value = true;
        await SchoolRecoveryLessonService2.instance.cancelRecovery(recovery);
    } catch (error) {
        toast.warn("Impossibile annullare la lezione di recupero")
        console.error("Unable to cancel recovery lesson", error);
    } finally {
        cancellingScheduleRecovery.value = false;
    }
}

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