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
                        Nessuna lezione da recuperaro effettuata
                    </div>
                </v-list-item>

                <v-list-item v-for="recovery in extRecovery.recoveries"
                    :key="`${recovery.lessonId}_${recovery.dailyLessonId}`">
                    <template v-slot:title>
                        {{ recovery.name }} {{ recovery.surname }}
                    </template>
                    <template v-slot:subtitle>
                        <div v-if="extRecovery.type == 'unset'">
                            Da recuperare la lezione del {{ recovery.date.format() }}
                        </div>
                        <div v-else-if="extRecovery.type == 'pending'">
                            Recupero programmato per il {{ recovery.date.format() }}
                        </div>
                        <div v-else-if="recovery.originalDailyLesson?.date">
                            Recupero della lezione del {{
                                yyyyMMdd.fromIyyyyMMdd(recovery.originalDailyLesson.date).format() }} effettuato il {{
                                recovery.date.format() }}
                        </div>
                        <div v-else>
                            Recupero della lezione del {{ recovery.recovery?.dailyLessonId }} effettuato il {{
                                recovery.date.format() }}
                        </div>
                    </template>

                    <template v-slot:append>
                        <v-dialog width="auto" scrollable v-if="extRecovery.type == 'unset'" persistent>
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps">programma</v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card>
                                    <v-card-text class="pa-6">
                                        <v-date-picker :min="new Date()" v-model="datePicker"></v-date-picker>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text="Annulla" @click="isActive.value = false"></v-btn>
                                        <v-btn color="primary" text="Salva"
                                            @click="isActive.value = false; scheduleRecovery(recovery)"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>

                        <v-btn v-if="extRecovery.type == 'pending'"
                            @click="cancelScheduleRecovery(recovery)">annulla</v-btn>
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
import { recoveryTypes, yyyyMMdd, type School, type SchoolRecoveryLesson, type StudentLesson } from '@/models/model';
import { SchoolRecoveryLessonService, type ExtendedSchoolRecoveryLesson, type ExtendedStudentLesson } from '@/models/services/school-recovery-lesson-service';
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

function scheduleRecovery(recovery: ExtendedStudentLesson) {
    if (!datePicker.value) return;

    // cconst recoveryLesson = createOrGetDailyLesson(datePicker.value).addLesson().setRecovery({'original': recovery.value}).save()
    // createOrGetDailyLesson(recovery.value).getLesson().setRecovery({'recovery': recoveryLesson}).save()
    // setPendingRecovery(recovery)

    event.recoveryDate = datePicker.value;
    event.status = 'RECOVERY_SCHEDULED';
}

async function computeDailyLessons() {
    if (!recoveries.value) return;
    console.log("computeDailyLessons")
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