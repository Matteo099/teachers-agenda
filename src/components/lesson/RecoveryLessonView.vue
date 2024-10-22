<template>
    <v-card title="Recuperi" elevation="3" :loading="!loadingExtendedRecoveries">
        <v-list lines="two">
            <template v-for="extRecovery of extendedRecoveries?.recoveryMap" :key="extRecovery.type">
                <v-list-subheader inset>{{ extRecovery.type }}</v-list-subheader>

                <v-list-item v-for="recovery in extRecovery.recoveries" :key="recovery.lessonId"
                    :title="`${recovery.name} ${recovery.surname}`" :baseColor="lesson.next ? 'primary' : ''">
                    <template v-slot:prepend>
                        <v-avatar :color="getColor(lesson)">
                            <v-icon color="white">mdi-calendar</v-icon>
                        </v-avatar>
                    </template>

                    <template v-slot:append v-if="lesson.pending || lesson.recovery">
                        <v-icon v-if="lesson.pending" color="warning">mdi-alert</v-icon>
                        <v-icon v-if="lesson.recovery" color="info">mdi-alpha-r-circle</v-icon>
                    </template>
                </v-list-item>
            </template>
        </v-list>
        <!-- <v-list lines="three" :items="extendedRecoveries?.pendingRecoveries" item-props>
            <template v-slot:title="{ item }">
                {{ item.name }} {{ item.surname }}
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
        </v-list> -->
    </v-card>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { type School, type SchoolRecoveryLesson, type StudentLesson } from '@/models/model';
import { SchoolRecoveryLessonService, type ExtendedSchoolRecoveryLesson } from '@/models/services/school-recovery-lesson-service';
import { doc } from 'firebase/firestore';
import { computed, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
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
const loadingExtendedRecoveries = ref(false);

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

    try {
        loadingExtendedRecoveries.value = true;
        extendedRecoveries.value = await SchoolRecoveryLessonService.instance.computeDailyLessons(recoveries.value);
    } catch (error) {
        toast.warning("Impossibile caricare le Lezioni di Recupero");
    } finally {
        loadingExtendedRecoveries.value = false;
    }
}
</script>