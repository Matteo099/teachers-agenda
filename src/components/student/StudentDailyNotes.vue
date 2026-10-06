<template>
  <v-card class="student-notes" variant="flat" :loading="loading">
    <div class="notes-heading"><span class="notes-icon"><v-icon icon="mdi-note-text-outline" size="20" /></span><div><h3>Note delle lezioni</h3><p>Annotazioni registrate nelle lezioni</p></div></div>
    <v-card-text v-if="notes.length">
      <div class="notes-list"><div v-for="note in notes" :key="note.date" class="note-item">
        <time>{{ yyyyMMdd.fromIyyyyMMdd(note.date).format() }}</time><p>{{ note.text }}</p>
      </div></div>
    </v-card-text>
    <v-card-text v-else class="text-medium-emphasis">
      {{ student ?
        'Nessuna nota registrata nelle lezioni.' :
        'Salva prima lo studente per visualizzare le note.'
      }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { yyyyMMdd, type IyyyyMMdd, type School, type Student } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { ref, watch } from 'vue';

const props = defineProps<{ school: School; student?: Student }>();
const loading = ref(false);
const notes = ref<{ date: IyyyyMMdd; text: string }[]>([]);

watch(() => [props.school.id, props.student?.id], async ([schoolId, studentId]) => {
  notes.value = [];
  if (!studentId) return;
  loading.value = true;
  try {
    if (!schoolId) return;
    const days = await DailyLessonService.instance.getDailyLessonsOfSchool(schoolId);
    notes.value = days.flatMap(day => {
      const note = day.lessons.find(lesson => lesson.studentId === studentId && !!lesson.dailyNote)?.dailyNote;
      return note ? [{ date: day.date, text: note }] : [];
    }).sort((a, b) => b.date.localeCompare(a.date));
  } finally {
    loading.value = false;
  }
}, { immediate: true });
</script>

<style scoped>
.student-notes { border: 0 !important; box-shadow: none !important; }
.notes-heading { display: flex; align-items: center; gap: 12px; padding: 0 0 12px; }
.notes-icon { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: var(--app-accent-surface); color: var(--app-primary); }
.notes-heading h3 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 650; }
.notes-heading p { margin: 0; color: var(--app-muted); font-size: .8rem; }
.student-notes :deep(.v-card-text) { padding: 8px 0 0; }
.notes-list { display: grid; gap: 10px; }
.note-item { padding: 14px 16px; border: 1px solid var(--app-border); border-radius: 12px; background: var(--app-hover-surface); }
.note-item time { color: var(--app-muted); font-size: .75rem; font-weight: 600; }
.note-item p { margin: 4px 0 0; color: var(--app-text); white-space: pre-wrap; }
</style>
