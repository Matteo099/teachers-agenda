<template>
    <v-card elevation=3 :loading="loading" v-if="item.student" :class="{ 'hidden-lesson': item.lesson.hiddenForDate }">
        <v-card-title>
            <v-checkbox v-if="!item.lesson.hiddenForDate" v-model="select" :value="item.student.id" multiple>
                <template v-slot:label>
                    <span><b>{{ Time.fromITime(item.lesson.startTime).format() }} - {{
                        Time.fromITime(item.lesson.endTime).format() }}</b> &nbsp; <i>{{
                                item.student.name }} {{ item.student.surname }}</i></span>
                </template>
            </v-checkbox>
            <span v-else class="text-body-1 font-italic">
                {{ item.student.name }} {{ item.student.surname }}
            </span>
            <v-dialog fullscreen>
                <template #activator="{ props: activatorProps }">
                    <v-btn v-bind="activatorProps" class="ml-2" size="small" variant="text"
                        prepend-icon="mdi-card-account-details-outline">
                        anagrafica
                    </v-btn>
                </template>
                <template #default="{ isActive }">
                    <StudentEditor edit :school="school" :initialStudent="item.student"
                        @close="isActive.value = false" @save="isActive.value = false" />
                </template>
            </v-dialog>
        </v-card-title>
        <v-card-text v-if="item.lesson.hiddenForDate" class="d-flex align-center ga-2">
            <v-btn :disabled="loading" variant="text" color="primary" prepend-icon="mdi-eye"
                @click="emit('showForDate')">rendi visibile</v-btn>
        </v-card-text>
        <v-card-text v-else>
            <v-chip v-if="item.lesson.hiddenForDate" class="ma-1" color="grey" size="small" prepend-icon="mdi-eye-off">
                Nascosto oggi
            </v-chip>
            <v-btn :disabled="loading" class="ma-1" v-if="presentVisible && !item.lesson.hiddenForDate" @click="emit('present')">presente</v-btn>
            <v-btn :disabled="loading" class="ma-1" v-if="absentVisible && !item.lesson.hiddenForDate" @click="emit('absent', false)">assente</v-btn>
            <v-dialog transition="dialog-bottom-transition"
                v-else-if="!item.lesson.hiddenForDate && (recoverableAbsentVisible || unjustifiedAbsentVisible)">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="ma-1" v-bind="activatorProps">assente (R/I)</v-btn>
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

            <v-btn :disabled="loading" class="ma-1" v-if="trialVisible && !item.lesson.hiddenForDate" @click="emit('trial')">prova</v-btn>
            <v-btn :disabled="loading" class="ma-1" v-if="resetVisible && !item.lesson.hiddenForDate" @click="emit('reset')">reset</v-btn>

            <v-dialog v-model="dateDialog" transition="dialog-bottom-transition" fullscreen v-if="!item.lesson.moved">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="ma-1" v-bind="activatorProps" v-if="moveVisible">sposta</v-btn>
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
                <v-btn :disabled="loading" class="ma-1" :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                        <v-icon>mdi-eye-arrow-right-outline</v-icon>
                    </template>spostata</v-btn>
            </template>
            <template v-else>
                <v-btn :disabled="loading" class="ma-1" :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                        <v-icon>mdi-eye-arrow-left-outline</v-icon>
                    </template>
                    origine</v-btn>
            </template>

            <v-dialog v-model="timeDialog" transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="ma-1" v-bind="activatorProps">modifica orario</v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <EditLessonTime @close="isActive.value = false" @save="_updateLessonTime"
                        :startTime="Time.fromITime(item.lesson.startTime).format()"
                        :endTime="Time.fromITime(item.lesson.endTime).format()"
                        :minutesOfLesson="item.student.minutesLessonDuration">
                    </EditLessonTime>
                </template>
            </v-dialog>

            <v-btn :disabled="loading" v-if="isRecoveryLesson" class="ma-1"
                :to="`/lesson/${item.lesson.recovery?.lessonRef.dailyLessonId}`">
                <template v-slot:prepend>
                    <v-icon>mdi-eye-arrow-left-outline</v-icon>
                </template>
                origine</v-btn>
            <v-btn :disabled="loading" v-if="isOriginalRecoverableLesson" class="ma-1"
                :to="`/lesson/${item.lesson.recovery?.lessonRef.dailyLessonId}`">
                <template v-slot:prepend>
                    <v-icon>mdi-eye-arrow-right-outline</v-icon>
                </template>recupero</v-btn>

            <v-dialog fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="ma-1" v-bind="activatorProps">
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

            <v-dialog v-model="dailyNoteDialog" max-width="600">
                <template #activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="ma-1" v-bind="activatorProps" prepend-icon="mdi-note-edit-outline">
                        {{ item.lesson.dailyNote ? 'modifica nota' : 'nota' }}
                    </v-btn>
                </template>
                <v-card title="Nota della giornata">
                    <v-card-text>
                        <div class="text-subtitle-2 mb-2">Note precedenti</div>
                        <v-progress-linear v-if="loadingDailyNotes" indeterminate color="primary" class="mb-2" />
                        <v-list v-else-if="dailyNotes.length" density="compact" class="mb-4" max-height="220">
                            <v-list-item v-for="note in dailyNotes" :key="note.date"
                                :title="yyyyMMdd.fromIyyyyMMdd(note.date).format()" :subtitle="note.text"
                                prepend-icon="mdi-note-text-outline" />
                        </v-list>
                        <div v-else class="text-body-2 text-medium-emphasis mb-4">Nessuna nota precedente per questo allievo.</div>
                        <v-textarea v-model="dailyNote" label="Nota" counter="500" autofocus />
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn @click="dailyNoteDialog = false">Annulla</v-btn>
                        <v-btn color="primary" @click="saveDailyNote">Salva</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-chip v-if="item.lesson.dailyNote" class="ma-1" size="small" prepend-icon="mdi-note-text-outline">Nota presente</v-chip>

            <DeleteDialog :name="`${item.student.name} ${item.student.surname}`" objName="Studente"
                :onDelete="onDeleteLessonItem">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" color="error" v-bind="activatorProps">elimina</v-btn>
                </template>
            </DeleteDialog>
            <v-dialog v-if="!item.lesson.hiddenForDate">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="ma-1" variant="text" v-bind="activatorProps">nascondi oggi</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card title="Nascondi studente" text="Lo studente sarà nascosto solo da questa data.">
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text="Annulla" @click="isActive.value = false" />
                            <v-btn color="primary" text="Nascondi" @click="isActive.value = false; emit('hideForDate')" />
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import EditLessonTime from '@/components/lesson/EditLessonTime.vue';
import { LessonStatus, Time, yyyyMMdd, type EventTime, type IyyyyMMdd, type School, type StudentLesson } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { computed, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import DeleteDialog from '../DeleteDialog.vue';
import StudentEditor from '../student/StudentEditor.vue';

const props = defineProps<{
    school: School;
    date: IyyyyMMdd;
    loading?: boolean;
    onDeleteLessonItem: () => Promise<boolean>;
    updateLessonTime: (newTime: EventTime) => Promise<boolean>;
    moveLesson: (newLessonDate: Date) => Promise<boolean>
}>()
const item = defineModel<StudentLesson>('item', { required: true });
const select = defineModel<string[]>('select');
const emit = defineEmits(['present', 'absent', 'reset', 'trial', 'updateLessonTime', 'deleteStudent', 'hideForDate', 'showForDate', 'saveDailyNote'])
const timeDialog = ref(false)
const dateDialog = ref(false)
const newLessonDate = ref();
const movingLesson = ref(false);
const dailyNoteDialog = ref(false);
const dailyNote = ref('');
const dailyNotes = ref<{ date: IyyyyMMdd; text: string }[]>([]);
const loadingDailyNotes = ref(false);
watch(dailyNoteDialog, async (open) => {
    if (!open) return;
    dailyNote.value = item.value.lesson.dailyNote ?? '';
    loadingDailyNotes.value = true;
    try {
        const lessons = await DailyLessonService.instance.getDailyLessonsOfSchool(props.school.id);
        dailyNotes.value = lessons
            .flatMap(day => {
                const note = day.lessons.find(lesson => lesson.studentId === item.value.student.id && !!lesson.dailyNote)?.dailyNote;
                return note ? [{ date: day.date, text: note }] : [];
            })
            .sort((a, b) => b.date.localeCompare(a.date));
    } catch (error) {
        console.error('Impossibile caricare le note dello studente', error);
        toast.error('Impossibile caricare le note precedenti');
    } finally {
        loadingDailyNotes.value = false;
    }
});

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

function saveDailyNote() {
    item.value.lesson.dailyNote = dailyNote.value.trim() || undefined;
    emit('saveDailyNote');
    dailyNoteDialog.value = false;
}


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

<style scoped>
.hidden-lesson {
    opacity: 0.5;
}
</style>
