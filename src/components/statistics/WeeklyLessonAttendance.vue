<template>
  <v-card class="mb-6" variant="outlined" title="Presenze per giorno della settimana" :loading="loading">
    <v-card-text>
      <div class="d-flex align-center ga-3 mb-3">
        <v-select v-model="selectedDay" :items="weekDays" label="Giorno della settimana" hide-details />
        <v-btn prepend-icon="mdi-file-pdf-box" color="primary" @click="exportPdf">Esporta PDF</v-btn>
        <v-btn prepend-icon="mdi-file-delimited" variant="outlined" @click="exportCsv">Esporta CSV</v-btn>
      </div>
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
              <td v-for="s in students" :key="s.id" class="text-center" :class="r.lessons[s.id] ? statusClass(r.lessons[s.id]) : ''">{{ r.lessons[s.id] ?
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
import { WeeklyLessonService } from '@/models/services/weely-lesson-service';
import { ref, watch } from 'vue';

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
    const weekly = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(school.id);
    for (const wl of weekly) {
      if (wl.dayOfWeek !== selectedDay.value) continue;
      for (const scheduled of wl.schedule) ids.add(scheduled.studentId);
    }
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
    for (let date = yyyyMMdd.fromIyyyyMMdd(props.from).toDate(); date <= yyyyMMdd.fromIyyyyMMdd(props.to).toDate(); date.setDate(date.getDate() + 1)) {
      const dateValue = yyyyMMdd.fromDate(date).toIyyyyMMdd();
      if (date.getDay() !== selectedDay.value || !weekly.some(wl => WeeklyLessonService.instance.isValid(wl, dateValue))) continue;
      if (!map.has(dateValue)) map.set(dateValue, { date: dateValue, lessons: {} });
    }
  }
  const names = new Map<string, string>();
  for (const school of props.schools ?? [])
    for (const student of await StudentService.instance.getStudentsOfSchool(school.id))
      names.set(student.id, `${student.name} ${student.surname}`);

  const uniqueStudents = new Map<string, string>();
  [...ids]
    .map(id => ({ id, name: names.get(id) ?? id }))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(student => {
      const key = student.name.trim().toLocaleLowerCase();
      if (!uniqueStudents.has(key)) uniqueStudents.set(key, student.id);
    });
  students.value = [...uniqueStudents.values()].map(id => ({ id, name: names.get(id) ?? id }));

  rows.value = [...map.values()].sort((a, b) => a.date.localeCompare(b.date));
  loading.value = false;
}

function statusLabel(l: any) {
  if (l.moved) return 'S';
  if (l.recovery?.ref === 'original') return 'R';
  if (l.status === LessonStatus.PRESENT) return 'P';
  if (l.status === LessonStatus.UNJUSTIFIED_ABSENCE) return 'A';
  if (l.status === LessonStatus.ABSENT) return 'D'; return '·';
}

function exportPdf() {
  const printWindow = window.open('', '_blank', 'width=1200,height=800');
  if (!printWindow) return;
  const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]!));
  const day = weekDays.find(item => item.value === selectedDay.value)?.title ?? '';
  const header = students.value.map(student => `<th>${escapeHtml(student.name)}</th>`).join('');
  const body = rows.value.map(row => {
    const cells = students.value.map(student => {
      const lesson = row.lessons[student.id];
      const label = lesson ? statusLabel(lesson) : '—';
      return `<td class="${lesson ? statusClass(lesson) : ''}">${label}</td>`;
    }).join('');
    return `<tr><td>${escapeHtml(yyyyMMdd.fromIyyyyMMdd(row.date).format())}</td>${cells}</tr>`;
  }).join('');
  printWindow.document.write(`<!doctype html><html><head><title>Presenze - ${escapeHtml(day)}</title><style>
    @page { size: A3 landscape; margin: 8mm; }
    * { box-sizing: border-box; } body { font-family: Arial, sans-serif; color: #222; font-size: 10px; }
    h1 { font-size: 18px; margin: 0 0 4px; } p { margin: 0 0 12px; color: #555; }
    table { border-collapse: collapse; width: 100%; table-layout: auto; } th, td { border: 1px solid #999; padding: 5px 6px; text-align: center; white-space: nowrap; }
    th { background: #eeeeee; font-weight: bold; } th:first-child, td:first-child { text-align: left; font-weight: bold; width: 90px; }
    thead { display: table-header-group; } tr { break-inside: avoid; } .status-red { color: #d32f2f; font-weight: bold; } .status-orange { color: #ef6c00; font-weight: bold; } .status-blue { color: #1976d2; font-weight: bold; } .status-green { color: #2e7d32; font-weight: bold; }
    .legend { margin-top: 10px; color: #555; }
  </style></head><body><h1>Presenze - ${escapeHtml(day)}</h1><p>Periodo: ${props.from ? yyyyMMdd.fromIyyyyMMdd(props.from).format() : ''} - ${props.to ? yyyyMMdd.fromIyyyyMMdd(props.to).format() : ''}</p><table><thead><tr><th>Data</th>${header}</tr></thead><tbody>${body}</tbody></table><div class="legend">P presente · A ingiustificata · D da recuperare · R recuperata · S spostata</div></body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.onafterprint = () => printWindow.close();
  setTimeout(() => printWindow.print(), 250);
}

function exportCsv() {
  const header = ['Data', ...students.value.map(student => student.name)];
  const lines = [header, ...rows.value.map(row => [
    yyyyMMdd.fromIyyyyMMdd(row.date).format(),
    ...students.value.map(student => row.lessons[student.id] ? statusLabel(row.lessons[student.id]) : ''),
  ])].map(line => line.map(value => `"${String(value).replace(/"/g, '""')}"`).join(';'));
  const blob = new Blob([`\uFEFF${lines.join('\r\n')}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `presenze-${weekDays.find(day => day.value === selectedDay.value)?.title ?? 'giorno'}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function statusClass(l: any) {
  if (l.moved || l.status === LessonStatus.ABSENT) return 'status-orange';
  if (l.status === LessonStatus.UNJUSTIFIED_ABSENCE) return 'status-red';
  if (l.recovery?.ref === 'original') return 'status-blue';
  return 'status-green';
}

watch(() => [props.from, props.to, props.schools, selectedDay.value], load, { immediate: true, deep: true });
</script>

<style scoped>
.attendance-table {
  overflow-x: auto;
}
.status-red, .status-orange, .status-blue, .status-green { font-weight: 700; }
.status-red { color: #d32f2f; }
.status-orange { color: #ef6c00; }
.status-blue { color: #1976d2; }
.status-green { color: #2e7d32; }
@media print { .v-btn, .v-select { display: none !important; } .attendance-table { overflow: visible; } }
</style>
