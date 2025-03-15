<template>
    <v-card elevation=3>
        <v-card-title>
            <v-checkbox v-model="select" :value="item.student.id" multiple>
                <template v-slot:label>
                    <span><b>{{ Time.fromITime(item.lesson.startTime).format() }} - {{
                        Time.fromITime(item.lesson.endTime).format() }}</b> &nbsp; <i>{{
                                item.student.name }} {{ item.student.surname }}</i></span>
                </template>
            </v-checkbox>
        </v-card-title>
        <v-card-text>
            <v-btn class="ma-1" v-if="presentVisible" @click="emit('present')">presente</v-btn>
            <v-btn class="ma-1" v-if="absentVisible" @click="emit('absent', false)">assente</v-btn>
            <v-dialog transition="dialog-bottom-transition" v-else-if="recoverableAbsentVisible || unjustifiedAbsentVisible">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn class="ma-1" v-bind="activatorProps">assente (R/I)</v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card title="Assenza"
                        text="Lo studente avrà modo di recuperare la lezione oppure è un'assenza ingiustificata?">
                        <v-card-actions>
                            <v-row class="justify-end">
                                <v-col cols="auto">
                                    <v-btn text="Assenza Recuperabile"
                                        @click="isActive.value = false; emit('absent', true)"></v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn text="Assenza Ingiustificata" color="primary"
                                        @click="isActive.value = false; emit('absent', false)"></v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

            <v-btn class="ma-1" v-if="trialVisible" @click="emit('trial')">prova</v-btn>
            <v-btn class="ma-1" v-if="resetVisible" @click="emit('reset')">reset</v-btn>

            <v-dialog v-model="dateDialog" transition="dialog-bottom-transition" fullscreen v-if="!item.lesson.moved">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn class="ma-1" v-bind="activatorProps" v-if="moveVisible">sposta</v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-card-text>
                            <v-date-picker class="w-100" v-model="newLessonDate"></v-date-picker>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text="Annulla" @click="isActive.value = false; newLessonDate = undefined;"></v-btn>
                            <v-btn color="primary" text="Sposta" @click="_moveLesson" :loading="movingLesson"
                                :disabled="!newLessonDate"></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
            <template v-else-if="item.lesson.moved.ref == 'moved'">
                <v-btn class="ma-1" :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                        <v-icon>mdi-eye-arrow-right-outline</v-icon>
                    </template>spostata</v-btn>
            </template>
            <template v-else>
                <v-btn class="ma-1" :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                        <v-icon>mdi-eye-arrow-left-outline</v-icon>
                    </template>
                    origine</v-btn>
            </template>

            <v-dialog v-model="timeDialog" transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn class="ma-1" v-bind="activatorProps">modifica orario</v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <EditLessonTime @close="isActive.value = false" @save="_updateLessonTime"
                        :startTime="Time.fromITime(item.lesson.startTime).format()"
                        :endTime="Time.fromITime(item.lesson.endTime).format()"
                        :minutesOfLesson="item.student.minutesLessonDuration">
                    </EditLessonTime>
                </template>
            </v-dialog>

            <v-btn v-if="isRecoveryLesson" class="ma-1"
                :to="`/lesson/${item.lesson.recovery?.lessonRef.dailyLessonId}`">
                <template v-slot:prepend>
                    <v-icon>mdi-eye-arrow-left-outline</v-icon>
                </template>
                origine</v-btn>
            <v-btn v-if="isOriginalRecoverableLesson" class="ma-1" :to="`/lesson/${item.lesson.recovery?.lessonRef.dailyLessonId}`">
                <template v-slot:prepend>
                    <v-icon>mdi-eye-arrow-right-outline</v-icon>
                </template>recupero</v-btn>

            <v-dialog fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn class="ma-1" v-bind="activatorProps">
                        note
                    </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <StudentEditor edit :school="school" :initialStudent="item.student" focus="note"
                        :disableFields="['name', 'surname', 'contact', 'lessonDay', 'level', 'minutesLessonDuration']"
                        @close="isActive.value = false" @save="item.student.note = $event.note; isActive.value = false">
                    </StudentEditor>
                </template>
            </v-dialog>

            <DeleteDialog :name="`${item.student.name} ${item.student.surname}`" objName="Studente"
                :onDelete="onDeleteLessonItem">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn color="error" v-bind="activatorProps">elimina</v-btn>
                </template>
            </DeleteDialog>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import EditLessonTime from '@/components/lesson/EditLessonTime.vue';
import { LessonStatus, Time, type EventTime, type School, type StudentLesson } from '@/models/model';
import { computed, ref } from 'vue';
import { toast } from 'vue3-toastify';
import DeleteDialog from '../DeleteDialog.vue';
import StudentEditor from '../student/StudentEditor.vue';

const props = defineProps<{
    school: School;
    onDeleteLessonItem: () => Promise<boolean>;
    updateLessonTime: (newTime: EventTime) => Promise<boolean>;
    moveLesson: (newLessonDate: Date) => Promise<boolean>
}>()
const item = defineModel<StudentLesson>('item', { required: true });
const select = defineModel<string[]>('select');
const emit = defineEmits(['present', 'absent', 'reset', 'trial', 'updateLessonTime', 'deleteStudent'])
const timeDialog = ref(false)
const dateDialog = ref(false)
const newLessonDate = ref();
const movingLesson = ref(false);

const isUnset = computed(() => item.value.lesson.status == LessonStatus.NONE);
const isPresent = computed(() => item.value.lesson.status == LessonStatus.PRESENT);
const isAbsent = computed(() => item.value.lesson.status == LessonStatus.ABSENT);
const isUnjustifiedAbsent = computed(() => item.value.lesson.status == LessonStatus.UNJUSTIFIED_ABSENCE);
const isTrial = computed(() => item.value.lesson.status == LessonStatus.TRIAL);
const isTrialDone = computed(() => item.value.student.trial?.done);
const isRecoveryLesson = computed(() => item.value.lesson.recovery?.ref == 'original');
const isOriginalRecoverableLesson = computed(() => item.value.lesson.recovery?.ref == 'recovery');
const originalLessonHasRecovery = computed(() => !item.value.lesson.recovery);
const isOriginalMovedLesson = computed(() => item.value.lesson.moved?.ref == 'moved');
const originalLessonHasMoved = computed(() => !item.value.lesson.moved);
const presentVisible = computed(() => (originalLessonHasRecovery.value || isRecoveryLesson.value) && (!isTrial.value && !isPresent.value && !isOriginalMovedLesson.value));
const absentVisible = computed(() => (isRecoveryLesson.value) && (!isTrial.value && !isAbsent.value && !isUnjustifiedAbsent.value && !isOriginalMovedLesson.value));
const recoverableAbsentVisible = computed(() => (originalLessonHasRecovery.value || isRecoveryLesson.value) && (!isTrial.value && !isAbsent.value && !isUnjustifiedAbsent.value && !isOriginalMovedLesson.value));
const unjustifiedAbsentVisible = computed(() => (originalLessonHasRecovery.value || isRecoveryLesson.value) && (!isTrial.value && !isAbsent.value && !isUnjustifiedAbsent.value && !isOriginalMovedLesson.value));
const trialVisible = computed(() => (originalLessonHasRecovery.value || isRecoveryLesson.value) && (isUnset.value && !isTrialDone.value && !isOriginalMovedLesson.value));
const resetVisible = computed(() => (originalLessonHasRecovery.value || isRecoveryLesson.value) && (!isUnset.value || isOriginalMovedLesson.value));
const moveVisible = computed(() => originalLessonHasMoved.value && originalLessonHasRecovery.value && isUnset.value)


async function _updateLessonTime(newTime: EventTime) {
    const res = await props.updateLessonTime(newTime);
    if (res) timeDialog.value = false;
}

async function _moveLesson() {
    movingLesson.value = true;
    if (newLessonDate.value) {
        const res = await props.moveLesson(newLessonDate.value);
        if (res) {
            dateDialog.value = false;
            newLessonDate.value = undefined;
        } else toast.warn("Impossibile spostare la lezione...")
    }
    movingLesson.value = false;
}

</script>