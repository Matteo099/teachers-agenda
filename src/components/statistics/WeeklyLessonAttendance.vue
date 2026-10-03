<template>
  <v-card class="mb-6" variant="outlined" title="Presenze per giorno della settimana" :loading="loading">
    <v-card-text>
      <v-select v-model="selectedDay" :items="weekDays" label="Giorno della settimana" />
      <div v-if="rows.length" class="attendance-table"><v-table>
          <thead>
            <tr>
              <th>Data</th>
              <th v-for="s in students" :key="s.id">{{ s.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in rows" :key="r.date">
              <td>{{ yyyyMMdd.fromIyyyyMMdd(r.date).format() }}</td>
              <td v-for="s in students" :key="s.id" class="text-center">{{ r.lessons[s.id] ?
                statusLabel(r.lessons[s.id]) : '—' }}</td>
            </tr>
          </tbody>
        </v-table></div><span v-else>Nessuna lezione per il giorno selezionato nel periodo.</span>
      <div class="text-caption mt-2">P presente · A assente · R recupero · I ingiustificata</div>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { LessonStatus, yyyyMMdd, type IyyyyMMdd, type School } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { StudentService } from '@/models/services/student-service';
import { defineProps, ref, watch } from 'vue';

const props = defineProps<{ from?: IyyyyMMdd; to?: IyyyyMMdd; schools?: School[] }>();
const selectedDay = ref(5);
const loading = ref(false);
const students = ref<{ id: string; name: string }[]>([]);
const rows = ref<any[]>([]);
const weekDays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
  .map((title, value) => ({ title, value }));

async function load() {
  if (!props.from || !props.to) return;
  loading.value = true;
  const map = new Map<string, any>();
  const ids = new Set<string>();

  for (const school of props.schools ?? []) {
    const days = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(school.id, props.from, props.to);
    for (const day of days) {
      if (yyyyMMdd.fromIyyyyMMdd(day.date).toDate().getDay() !== selectedDay.value) continue;
      const row = map.get(day.date) ?? { date: day.date, lessons: {} };
      for (const lesson of day.lessons) {
        ids.add(lesson.studentId);
        row.lessons[lesson.studentId] = lesson;
      }
      map.set(day.date, row);
    }
  }
  const names = new Map<string, string>();
  for (const school of props.schools ?? [])
    for (const student of await StudentService.instance.getStudentsOfSchool(school.id))
      names.set(student.id, `${student.name} ${student.surname}`);

  students.value = [...ids]
    .map(id => ({ id, name: names.get(id) ?? id }))
    .sort((a, b) => a.name.localeCompare(b.name));

  rows.value = [...map.values()].sort((a, b) => a.date.localeCompare(b.date));
  loading.value = false;
}

function statusLabel(l: any) {
  if (l.recovery?.ref === 'original') return 'R';
  if (l.status === LessonStatus.PRESENT) return 'P';
  if (l.status === LessonStatus.UNJUSTIFIED_ABSENCE) return 'I';
  if (l.status === LessonStatus.ABSENT) return 'A'; return '·';
}

watch(() => [props.from, props.to, props.schools, selectedDay.value], load, { immediate: true, deep: true });
</script>

<style scoped>
.attendance-table {
  overflow-x: auto;
}
</style>
