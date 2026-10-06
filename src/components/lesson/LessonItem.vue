<template>
  <v-card variant="flat" :loading="loading" v-if="item.student" class="student-lesson-card"
    :class="{ 'hidden-lesson': item.lesson.hiddenForDate, 'student-lesson-card--panel': panel }">
    <div class="student-card-header">
      <span v-if="panel" class="student-panel-avatar"><v-icon icon="mdi-account-outline" size="28" /></span>
      <div v-if="panel" class="student-card-identity student-panel-name">
        <strong>{{ item.student.name }} {{ item.student.surname }}</strong><small>{{
          Time.fromITime(item.lesson.startTime).format() }} – {{ Time.fromITime(item.lesson.endTime).format() }}</small>
      </div>
      <v-checkbox v-else-if="!item.lesson.hiddenForDate" v-model="select" :value="item.student.id" multiple
        density="compact" hide-details>
        <template v-slot:label>
          <span class="student-card-identity"><strong>{{ item.student.name }} {{ item.student.surname }}</strong>
            <small>{{ Time.fromITime(item.lesson.startTime).format() }} – {{
              Time.fromITime(item.lesson.endTime).format() }}</small></span>
        </template>
      </v-checkbox>
      <span v-else class="student-card-identity"> {{ item.student.name }} {{ item.student.surname }} </span>
      <span v-if="currentStatus" class="status-badge" :class="'status-' + currentStatus"
        :title="statusColors[currentStatus].label">{{ statusColors[currentStatus].short }}</span>
      <v-dialog fullscreen>
        <template #activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps" icon="mdi-card-account-details-outline" size="small" variant="text"
            aria-label="Apri anagrafica allievo" />
        </template>
        <template #default="{ isActive }">
          <StudentEditor edit :school="school" :initialStudent="item.student" @close="isActive.value = false"
            @save="isActive.value = false" />
        </template>
      </v-dialog>
    </div>
    <div v-if="item.lesson.hiddenForDate" class="student-hidden-status">
      <v-chip size="small" color="secondary" variant="tonal" prepend-icon="mdi-eye-off-outline">Nascosto oggi</v-chip>
    </div>
    <div v-if="panel" class="student-panel-facts">
      <div>
        <span>Giorno</span><strong>{{ yyyyMMdd.fromIyyyyMMdd(date).format() }}</strong>
      </div>
      <div>
        <span>Orario</span><strong>{{ Time.fromITime(item.lesson.startTime).format() }} – {{
          Time.fromITime(item.lesson.endTime).format() }}</strong>
      </div>
      <div>
        <span>Durata</span><strong>{{ item.student.minutesLessonDuration }} minuti</strong>
      </div>
      <div v-if="item.student.contact">
        <span>Contatto</span><strong>{{ item.student.contact }}</strong>
      </div>
      <div>
        <span>Livello</span><strong>{{ item.student.level }}</strong>
      </div>
    </div>
    <v-card-text v-if="item.lesson.hiddenForDate" class="student-card-body">
      <div class="student-card-quick-actions">
        <v-btn :disabled="loading" variant="tonal" color="primary" prepend-icon="mdi-eye"
          @click="emit('showForDate')">Rendi visibile</v-btn>
      </div>
    </v-card-text>
    <v-card-text v-else class="student-card-body">
      <div class="student-card-quick-actions">
        <v-btn :disabled="loading" color="success" variant="tonal" prepend-icon="mdi-check"
          v-if="presentVisible && !item.lesson.hiddenForDate" @click="emit('present')">Presente</v-btn>
        <v-dialog v-if="item.student.isBand" fullscreen>
          <template #activator="{ props: activatorProps }">
            <v-btn :disabled="loading" variant="tonal" prepend-icon="mdi-account-group-outline"
              v-bind="activatorProps">Presenze band</v-btn>
          </template>
          <template #default="{ isActive }">
            <v-card title="Presenze componenti della band">
              <v-list>
                <v-list-item v-for="member in item.student.bandMembers ?? []" :key="member.id"
                  :title="`${member.name} ${member.surname}`" :subtitle="member.instrument">
                  <template #append>
                    <v-btn-toggle mandatory :model-value="memberAttendance(member.id)"
                      @update:model-value="setMemberAttendance(member.id, $event as LessonStatus)">
                      <v-btn value="PRESENT" size="small">Presente</v-btn>
                      <v-btn value="ABSENT" size="small">Assente</v-btn>
                    </v-btn-toggle>
                  </template>
                </v-list-item>
              </v-list>
              <v-card-actions><v-spacer /><v-btn text="Chiudi" @click="isActive.value = false" /></v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        <v-btn :disabled="loading" color="warning" variant="tonal" prepend-icon="mdi-account-off-outline"
          v-if="absentVisible && !item.lesson.hiddenForDate" @click="emit('absent', false)">Assente</v-btn>
        <v-dialog transition="dialog-bottom-transition"
          v-else-if="!item.lesson.hiddenForDate && (recoverableAbsentVisible || unjustifiedAbsentVisible)">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn :disabled="loading" color="warning" variant="tonal" prepend-icon="mdi-account-off-outline"
              v-bind="activatorProps">Assente</v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Assenza"
              text="Lo studente avrà modo di recuperare la lezione oppure è un'assenza ingiustificata?">
              <v-card-actions>
                <v-row class="justify-end">
                  <v-col cols="auto">
                    <v-btn text="Assenza Recuperabile" @click="isActive.value = false; emit('absent', true)"></v-btn>
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

        <v-btn :disabled="loading" variant="tonal" v-if="trialVisible && !item.lesson.hiddenForDate"
          @click="emit('trial')">Prova</v-btn>
      </div>
      <v-expansion-panels variant="accordion" class="student-more-actions">
        <v-expansion-panel title="Altre azioni">
          <v-expansion-panel-text>
            <div class="student-more-action-buttons">
              <div class="student-actions-group">
                <h3>Lezione</h3>
                <v-btn :disabled="loading" class="student-action-button" color="secondary" variant="tonal"
                  prepend-icon="mdi-restore" v-if="resetVisible && !item.lesson.hiddenForDate"
                  @click="emit('reset')">Ripristina stato</v-btn>

                <v-dialog v-model="dateDialog" transition="dialog-bottom-transition" fullscreen
                  v-if="!item.lesson.moved">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="student-action-button" color="secondary" variant="tonal"
                      prepend-icon="mdi-calendar-arrow-right" v-bind="activatorProps" v-if="moveVisible">Sposta
                      lezione</v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-card-text>
                        <v-date-picker class="w-100" v-model="newLessonDate"></v-date-picker>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Annulla" @click="isActive.value = false; newLessonDate = undefined
                          "></v-btn>
                        <v-btn color="primary" text="Sposta" @click="_moveLesson" :loading="movingLesson"
                          :disabled="!newLessonDate"></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <template v-else-if="item.lesson.moved.ref == 'moved'">
                  <v-btn :disabled="loading" class="student-action-button" color="secondary" variant="tonal"
                    :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend> <v-icon>mdi-eye-arrow-right-outline</v-icon> </template>Vai alla lezione
                    spostata</v-btn>
                </template>
                <template v-else>
                  <v-btn :disabled="loading" class="student-action-button" color="secondary" variant="tonal"
                    :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                      <v-icon>mdi-eye-arrow-left-outline</v-icon>
                    </template>
                    Vai alla lezione originale</v-btn>
                </template>

                <v-dialog v-model="timeDialog" transition="dialog-bottom-transition" fullscreen>
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="student-action-button" color="secondary" variant="tonal"
                      prepend-icon="mdi-clock-edit-outline" v-bind="activatorProps">Modifica orario</v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <EditLessonTime @close="isActive.value = false" @save="_updateLessonTime"
                      :startTime="Time.fromITime(item.lesson.startTime).format()"
                      :endTime="Time.fromITime(item.lesson.endTime).format()"
                      :minutesOfLesson="item.student.minutesLessonDuration">
                    </EditLessonTime>
                  </template>
                </v-dialog>
              </div>

              <div v-if="isRecoveryLesson || isOriginalRecoverableLesson" class="student-actions-group">
                <h3>Collegamenti</h3>
                <v-btn :disabled="loading" v-if="isRecoveryLesson" class="student-action-button" color="secondary"
                  variant="tonal" :to="`/lesson/${item.lesson.recovery?.lessonRef.dailyLessonId}`">
                  <template v-slot:prepend>
                    <v-icon>mdi-eye-arrow-left-outline</v-icon>
                  </template>
                  Vai alla lezione originale</v-btn>
                <v-btn :disabled="loading" v-if="isOriginalRecoverableLesson" class="student-action-button"
                  color="secondary" variant="tonal" :to="`/lesson/${item.lesson.recovery?.lessonRef.dailyLessonId}`">
                  <template v-slot:prepend> <v-icon>mdi-eye-arrow-right-outline</v-icon> </template>Vai al
                  recupero</v-btn>
              </div>

              <div class="student-actions-group">
                <h3>Note e visibilità</h3>
                <v-dialog v-model="dailyNoteDialog" max-width="600">
                  <template #activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="student-action-button" color="secondary" variant="tonal"
                      v-bind="activatorProps" prepend-icon="mdi-note-edit-outline">
                      {{ item.lesson.dailyNote ? 'Modifica nota' : 'Aggiungi nota' }}
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
                      <div v-else class="text-body-2 text-medium-emphasis mb-4">Nessuna nota precedente per questo
                        allievo.
                      </div>
                      <v-textarea v-model="dailyNote" label="Nota" counter="500" autofocus />
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn @click="dailyNoteDialog = false">Annulla</v-btn>
                      <v-btn color="primary" @click="saveDailyNote">Salva</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-if="!item.lesson.hiddenForDate">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="student-action-button" color="secondary" variant="tonal"
                      prepend-icon="mdi-eye-off-outline" v-bind="activatorProps">Nascondi oggi</v-btn>
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
              </div>
              <div class="student-actions-group student-actions-group--danger">
                <DeleteDialog :name="`${item.student.name} ${item.student.surname}`" objName="Studente"
                  :onDelete="onDeleteLessonItem">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :disabled="loading" class="student-action-button" color="error" variant="tonal"
                      prepend-icon="mdi-delete-outline" v-bind="activatorProps">Rimuovi dalla lezione</v-btn>
                  </template>
                </DeleteDialog>
              </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import EditLessonTime from '@/components/lesson/EditLessonTime.vue';
import { LessonStatus, Time, yyyyMMdd, type EventTime, type IyyyyMMdd, type School, type StudentLesson } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { lessonStatusColor, statusColors } from '@/models/statusColors';
import { computed, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import DeleteDialog from '../DeleteDialog.vue';
import StudentEditor from '../student/StudentEditor.vue';

const props = defineProps<{
  school: School;
  date: IyyyyMMdd;
  panel?: boolean;
  loading?: boolean;
  onDeleteLessonItem: () => Promise<boolean>;
  updateLessonTime: (newTime: EventTime) => Promise<boolean>;
  moveLesson: (newLessonDate: Date) => Promise<boolean>
}>()
const item = defineModel<StudentLesson>('item', { required: true });
const currentStatus = computed(() => lessonStatusColor(item.value.lesson));
const select = defineModel<string[]>('select');
const emit = defineEmits(['present', 'absent', 'reset', 'trial', 'updateLessonTime', 'deleteStudent', 'hideForDate', 'showForDate', 'saveDailyNote', 'bandAttendanceChanged'])
const timeDialog = ref(false)
const dateDialog = ref(false)
const newLessonDate = ref();
const movingLesson = ref(false);

function memberAttendance(memberId: string): string | undefined {
  return item.value.lesson.bandAttendance?.[memberId];
}

function setMemberAttendance(memberId: string, status: LessonStatus): void {
  item.value.lesson.bandAttendance ??= {};
  item.value.lesson.bandAttendance[memberId] = status;
  emit('bandAttendanceChanged');
}
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
.student-lesson-card {
  min-width: 0;
}

.student-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 68px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--app-border);
}

.student-card-header :deep(.v-checkbox) {
  flex: 1;
  min-width: 0;
}

.student-card-header :deep(.v-label) {
  width: 100%;
  opacity: 1;
}

.student-panel-avatar {
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--app-primary);
  background: var(--app-accent-surface);
}

.student-panel-name {
  flex: 1;
}

.student-panel-facts {
  padding: 4px 16px 8px;
}

.student-panel-facts>div {
  display: grid;
  grid-template-columns: minmax(68px, 38%) minmax(0, 1fr);
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid var(--app-border);
  font-size: 0.84rem;
}

.student-panel-facts span {
  color: var(--app-muted);
}

.student-panel-facts strong {
  min-width: 0;
  overflow-wrap: anywhere;
  color: var(--app-text);
  font-weight: 600;
}

.student-lesson-card--panel {
  border: 0 !important;
  box-shadow: none !important;
}

.student-lesson-card--panel .student-card-header {
  padding: 16px;
}

.student-card-identity {
  display: flex;
  flex-direction: column;
  min-width: 0;
  color: var(--app-text);
  font-size: 0.98rem;
  font-weight: 650;
  font-style: normal;
}

.student-card-identity strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.student-card-identity small {
  margin-top: 2px;
  color: var(--app-muted);
  font-size: 0.8rem;
  font-weight: 500;
}

.student-card-body {
  padding: 12px 16px 8px;
}

.student-hidden-status {
  padding: 10px 16px 0;
}

.student-card-quick-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.student-card-quick-actions .v-btn {
  min-height: 36px;
}

.student-more-actions {
  margin-top: 14px;
}

.student-more-actions :deep(.v-expansion-panel) {
  border: 0 !important;
  box-shadow: none !important;
}

.student-more-actions :deep(.v-expansion-panel-title) {
  min-height: 38px;
  padding: 10px 12px;
  color: var(--app-muted);
  font-size: 0.82rem;
}

.student-more-actions :deep(.v-expansion-panel-text__wrapper) {
  padding: 12px 12px 16px;
}

.student-more-action-buttons {
  display: grid;
  gap: 18px;
  width: 100%;
}

.student-actions-group {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.student-actions-group h3 {
  margin: 0 0 3px 2px;
  color: var(--app-muted);
  font-size: 0.78rem;
  font-weight: 700;
}

.student-actions-group--danger {
  padding-top: 12px;
  border-top: 1px solid var(--app-border);
}

.student-actions-group .student-action-button {
  width: 100%;
  min-width: 0;
  min-height: 44px;
  margin: 0 !important;
  padding: 8px 12px;
  justify-content: flex-start;
  font-size: 0.875rem;
  text-align: left;
  white-space: normal;
  border-radius: 2px !important;
}

.student-actions-group .student-action-button :deep(.v-btn__content) {
  justify-content: flex-start;
  text-align: left;
  white-space: normal;
}

.hidden-lesson {
  background: var(--app-background);
}

@media (max-width: 600px) {
  .student-card-header {
    padding: 10px 12px;
  }

  .student-card-body {
    padding: 10px 12px 6px;
  }
}
</style>
