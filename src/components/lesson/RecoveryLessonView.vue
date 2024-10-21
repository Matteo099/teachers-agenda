<template>
    <v-card title="Recuperi" elevation="3" :loading="!extendedRecoveries">
        <v-list lines="three" :items="extendedRecoveries?.pendingRecoveries" item-props>
            <template v-slot:title="{ item }">
                {{ item.name }}
            </template>
            <template v-slot:subtitle="{ item }">
                <div v-if="item.status == 'NOT_RECOVERED'">
                    Da recuperare la lezione del {{ dateFormat(item.date) }}
                </div>
                <div v-else-if="item.status == 'RECOVERY_SCHEDULED'">
                    Recupero programmato per il {{ dateFormat(item.recoveryDate) }}
                </div>
                <div v-else>
                    Recupero della lezione del {{ dateFormat(item.date) }} effettuato il {{
                        dateFormat(item.recoveryDate) }}
                </div>
            </template>
            <template v-slot:append="{ item }">
                <!-- <v-dialog v-if="dailyLesson && item" v-model="recoveryLessonDialog"
                    transition="dialog-bottom-transition" fullscreen persistent>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn class="ma-1" v-if="item.status == LessonStatus.ABSENT" v-bind="activatorProps">schedula
                            recupero</v-btn>
                    </template>

<template v-slot:default>
                        <RecoveryLessonEditor :schoolId="dailyLesson.schoolId" :lessonToRecover="item"
                            @close="recoveryLessonDialog = false" @save="saveRecoveryLesson($event, item)" />
                    </template>
</v-dialog> -->
                <v-dialog width="auto" scrollable v-if="item.status == 'NOT_RECOVERED'" persistent>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps">programma</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-card-text class="pa-6">
                                <v-date-picker :min="new Date()" v-model="datePicker"></v-date-picker>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn text="Annulla" @click="isActive.value = false"></v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="surface-variant" text="Salva" variant="flat"
                                    @click="isActive.value = false; scheduleRecovery(item)"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>

                <v-btn v-if="item.status == 'RECOVERY_SCHEDULED'" @click="cancelScheduleRecovery(item)">annulla</v-btn>
            </template>
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { LessonStatus, type DailyLesson, type School, type SchoolRecoveryLesson, type StudentLesson } from '@/models/model';
import { SchoolRecoveryLessonRepository } from '@/models/repositories/school-recovery-lesson-repository';
import { SchoolRecoveryLessonService, type ExtendedSchoolRecoveryLesson } from '@/models/services/school-recovery-lesson-service';
import { doc } from 'firebase/firestore';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { useDocument } from 'vuefire';

export interface RecoveryLessonViewProps {
    school: School
}

const props = defineProps<RecoveryLessonViewProps>();
const schoolRecoveryLessonsRef = useDB<SchoolRecoveryLesson>(DatabaseRef.SCHOOL_RECOVERY_LESSONS);

const extendedRecoveries: Ref<ExtendedSchoolRecoveryLesson | undefined> = ref();
const datePicker: Ref<Date | undefined> = ref();
const item: Ref<StudentLesson | undefined> = ref();
const recoveryLessonDialog = ref(false);

const schoolRecoveryLessonsSource = computed(() =>
    doc(schoolRecoveryLessonsRef, props.school.id as string)
)
const recoveries = useDocument(schoolRecoveryLessonsSource)

watch(recoveries, async () => computeDailyLessons());

// function saveRecoveryLesson(event: DailyLesson, sl: StudentLesson) {
//     recoveryLessonDialog.value = false;
//     // doBackup();
//     sl.status = LessonStatus.RECOVERY;
//     sl.recoveryDate = event.date;
//     // save();
// }

function cancelScheduleRecovery(event: any) {
    event.recoveryDate = undefined;
    event.status = 'NOT_RECOVERED';
}

function scheduleRecovery(event: any) {
    if (!datePicker.value) return;

    event.recoveryDate = datePicker.value;
    event.status = 'RECOVERY_SCHEDULED';
}


async function computeDailyLessons() {
    if (!recoveries.value) return;

    extendedRecoveries.value = await SchoolRecoveryLessonService.instance.computeDailyLessons(recoveries.value);
    // const res = [
    //     {
    //         name: 'Luca Verdi',
    //         date: new Date('10/09/2024 14:00'),
    //         status: 'NOT_RECOVERED',
    //         id: 1,
    //     },
    //     {
    //         name: 'Alessio Rossi',
    //         date: new Date('10/09/2024 18:00'),
    //         status: 'NOT_RECOVERED',
    //         id: 2,
    //     }
    // ];

    // recoveries.value = res;
}
</script>