<template>
  <v-card variant="outlined" title="Note delle lezioni" :loading="loading">
    <v-card-text v-if="notes.length">
      <v-list density="compact">
        <v-list-item v-for="note in notes" :key="note.date" :title="yyyyMMdd.fromIyyyyMMdd(note.date).format()"
          :subtitle="note.text" prepend-icon="mdi-note-text-outline" />
      </v-list>
    </v-card-text>
    <v-card-text v-else class="text-medium-emphasis">{{ student ? 'Nessuna nota registrata nelle lezioni.' : 'Salva prima lo studente per visualizzare le note.' }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { yyyyMMdd, type IyyyyMMdd, type School, type Student } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';

const props = defineProps<{ school: School; student?: Student }>();
const loading = ref(false);
const notes = ref<{ date: IyyyyMMdd; text: string }[]>([]);

watch(() => [props.school.id, props.student?.id], async ([schoolId, studentId]) => {
  notes.value = [];
  if (!studentId) return;
  loading.value = true;
  try {
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
