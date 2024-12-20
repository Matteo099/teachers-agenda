<template>
    <v-card title="Recuperi" elevation="3" :loading="loadingExtendedRecoveries">
        <v-list lines="three">
            <template v-for="(extRecovery, index) of extendedRecoveries?.recoveryMap" :key="extRecovery.type">
                <v-list-subheader inset>{{ recoveryTypes[extRecovery.type] }}</v-list-subheader>

                <v-list-item v-if="extRecovery.recoveries.length == 0">
                    <div v-if="extRecovery.type == 'unset'">
                        Nessuna lezione da recuperare
                    </div>
                    <div v-else-if="extRecovery.type == 'pending'">
                        Nessuna lezione di recupero programmata
                    </div>
                    <div v-else>
                        Nessuna lezione di recupero effettuata
                    </div>
                </v-list-item>

                <v-list-item v-for="(recovery, index) in extRecovery.recoveries"
                    :key="`${recovery.lessonId}_${recovery.originalDailyLesson.id}`">
                    <template v-slot:title>
                        {{ recovery.name }} {{ recovery.surname }}
                    </template>
                    <template v-slot:subtitle>
                        <div v-if="extRecovery.type == 'unset'">
                            Da recuperare la lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.originalDailyLesson.date).format() }}
                        </div>
                        <div v-else-if="extRecovery.type == 'pending'">
                            Recupero programmato
                            <span v-if="recovery.recoveryDailyLesson"> per il {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryDailyLesson.date).format() }}</span>
                        </div>
                        <div v-else>
                            Recupero della lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.originalDailyLesson.date).format() }} effettuato
                            <span v-if="recovery.recoveryDailyLesson"> il {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.recoveryDailyLesson.date).format() }}</span>
                        </div>
                    </template>

                    <template v-slot:append>
                        <ScheduleRecoveryLessonButton v-if="extRecovery.type == 'unset'"
                            v-model="extRecovery.recoveries[index]" :school="school"></ScheduleRecoveryLessonButton>
                        <v-btn v-else-if="extRecovery.type == 'pending'" @click="cancelScheduleRecovery(recovery)"
                            :loading="cancellingScheduleRecovery" :disabled="cancellingScheduleRecovery">annulla</v-btn>
                        <v-icon v-else-if="recovery.recoveryStatus == LessonStatus.CANCELLED" color="warning">
                            mdi-cancel
                        </v-icon>
                        <v-icon v-else color="success">
                            mdi-check-all
                        </v-icon>
                    </template>
                </v-list-item>

                <v-divider v-if="index != 2"></v-divider>
            </template>
        </v-list>
        <v-card-text v-if="!extendedRecoveries">
            Nessun recupero in programma
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { LessonStatus, recoveryTypes, yyyyMMdd, type School, type SchoolRecoveryLesson } from '@/models/model';
import { LessonStatusAction, SchoolRecoveryLessonService, type ExtendedSchoolRecoveryLesson, type ExtendedStudentLesson } from '@/models/services/school-recovery-lesson-service';
import { doc } from 'firebase/firestore';
import { computed, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useDocument } from 'vuefire';
import ScheduleRecoveryLessonButton from './ScheduleRecoveryLessonButton.vue';

export interface RecoveryLessonViewProps {
    school: School
}

const props = defineProps<RecoveryLessonViewProps>();
const schoolRecoveryLessonsRef = useDB<SchoolRecoveryLesson>(DatabaseRef.SCHOOL_RECOVERY_LESSONS);

const extendedRecoveries: Ref<ExtendedSchoolRecoveryLesson | undefined> = ref();
const loadingExtendedRecoveries = ref(false);
const cancellingScheduleRecovery = ref(false);

const schoolRecoveryLessonsSource = computed(() =>
    doc(schoolRecoveryLessonsRef, props.school.id as string)
)
const recoveries = useDocument(schoolRecoveryLessonsSource)


watch(recoveries, async () => computeDailyLessons());

async function cancelScheduleRecovery(recovery: ExtendedStudentLesson) {
    try {
        cancellingScheduleRecovery.value = true;
        await SchoolRecoveryLessonService.instance.updateRecovery(LessonStatusAction.CANCEL, recovery.schoolId, { ...recovery, dailyLessonId: recovery.originalDailyLesson.id });
    } catch (error) {
        toast.warn("Impossibile annullare la lezione di recupero")
    } finally {
        cancellingScheduleRecovery.value = false;
    }
}

async function computeDailyLessons() {
    if (!recoveries.value) return;

    try {
        loadingExtendedRecoveries.value = true;
        extendedRecoveries.value = await SchoolRecoveryLessonService.instance.computeDailyLessons(recoveries.value);
        console.log(extendedRecoveries);
    } catch (error) {
        toast.warning("Impossibile caricare le Lezioni di Recupero");
    } finally {
        loadingExtendedRecoveries.value = false;
    }
}
</script>