<template>
  <v-card class="school-panel student-directory" variant="flat" :loading="loadingStudents">
    <div class="school-panel-header">
      <span class="school-panel-icon"><v-icon icon="mdi-account-group-outline" size="22" /></span>
      <div><h2>Anagrafica studenti</h2><p>Allievi e dettagli delle lezioni</p></div>
      <v-dialog v-model="dialog" fullscreen>
        <template #activator="{ props: activatorProps }"><v-btn class="student-add-button" color="primary" prepend-icon="mdi-plus" variant="flat" v-bind="activatorProps">Nuovo studente</v-btn></template>
        <StudentEditor :school="school" @close="dialog = false" @save="onSaveStudent($event)" />
      </v-dialog>
    </div>
    <div class="school-panel-toolbar directory-toolbar">
      <v-text-field v-model="search" class="directory-search" label="Cerca studente" prepend-inner-icon="mdi-magnify" variant="outlined" density="comfortable" hide-details clearable />
      <v-dialog max-width="420" transition="dialog-bottom-transition">
        <template #activator="{ props: activatorProps }"><v-btn prepend-icon="mdi-filter-variant" variant="outlined" v-bind="activatorProps">Filtri</v-btn></template>
        <template #default="{ isActive }"><StudentFilter v-model="filters" @close="isActive.value = false" /></template>
      </v-dialog>
    </div>
    <v-card-text class="school-panel-content"><v-data-table class="student-table" :headers="studentHeaders" :items="filteredStudents" item-value="id" :items-per-page="10" no-data-text="Nessuno studente trovato">
      <template #item.name="{ item }"><div class="student-identity"><span class="student-avatar"><v-icon icon="mdi-account-outline" size="18" /></span><span class="student-name">{{ item.name }} {{ item.surname }}</span></div></template>
      <template #item.lessonDay="{ item }">{{ item.lessonDay !== undefined && item.lessonDay !== null ? days[item.lessonDay] : '—' }}</template>
      <template #item.level="{ item }"><v-chip v-if="item.level" size="small" color="primary" variant="tonal">{{ item.level }}</v-chip><span v-else>—</span></template>
      <template #item.minutesLessonDuration="{ item }">{{ item.minutesLessonDuration }} min</template>
      <template #item.actions="{ item }">
        <div class="student-actions">
          <v-dialog fullscreen>
            <template #activator="{ props: activatorProps }"><v-btn icon="mdi-pencil-outline" aria-label="Modifica studente" title="Modifica studente" size="small" variant="text" v-bind="activatorProps" /></template>
            <template #default="{ isActive }"><StudentEditor edit :school="school" :initialStudent="item" @close="isActive.value = false" @save="isActive.value = false" /></template>
          </v-dialog>
          <DeleteDialog :name="item.name + ' ' + item.surname" objName="Studente" :onDelete="async () => await deleteStudent(item)">
            <template #activator="{ props: activatorProps }"><v-btn icon="mdi-delete-outline" aria-label="Elimina studente" title="Elimina studente" size="small" variant="text" color="error" v-bind="activatorProps" /></template>
          </DeleteDialog>
        </div>
      </template>
    </v-data-table></v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import StudentEditor from '@/components/student/StudentEditor.vue';
import StudentFilter from '@/components/student/StudentFilter.vue';
import { days, STUDENT_FILTERS, type School, type Student, type StudentFilterObj } from '@/models/model';
import { StudentRepository } from '@/models/repositories/student-repository';
import { StudentService } from '@/models/services/student-service';
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue';

const props = defineProps<{ school: School }>();
const subscriptions: EventSubscription[] = [];
const students: Ref<Student[]> = ref([]);
const filteredStudents: Ref<Student[]> = ref([]);
const loadingStudents = ref(false);
const dialog = ref(false);
const search = ref('');
const studentHeaders: any = [
  { title: 'Studente', key: 'name', align: 'start' },
  { title: 'Giorno di lezione', key: 'lessonDay' },
  { title: 'Livello', key: 'level' },
  { title: 'Durata', key: 'minutesLessonDuration' },
  { title: 'Azioni', key: 'actions', sortable: false, align: 'end' },
];
const filters: Ref<StudentFilterObj[]> = ref(STUDENT_FILTERS);
watch(filters, filterStudent);
watch(search, filterStudent);
function onSaveStudent(student?: Student) { if (student) dialog.value = false; }
async function deleteStudent(student?: Student): Promise<boolean> {
  if (!student) return false;
  try { await StudentRepository.instance.delete(student.id); return true; }
  catch { return false; }
}
async function loadStudents() {
  loadingStudents.value = true;
  const studentSubscription = StudentService.instance.observeStudentsOfSchool(props.school.id).subscribe({
    next: data => {
      students.value = data.filter(student => !student.isBand);
      filterStudent();
      loadingStudents.value = false;
    },
    error: _err => loadingStudents.value = false
  });
  subscriptions.push(studentSubscription);
}
function filterStudent() {
  filteredStudents.value = students.value.filter(s => {
    if (filters.value.length == 2) return true;
    if (filters.value.map(f => f.type).includes('substistution')) return !!s.isSubstitution;
    if (filters.value.map(f => f.type).includes('normal')) return !s.isSubstitution;
  }).filter(s => `${s.name} ${s.surname}`.toLocaleLowerCase('it').includes((search.value ?? '').trim().toLocaleLowerCase('it')))
    .sort((a, b) => a.surname.localeCompare(b.surname, 'it', { sensitivity: 'base' })
    || a.name.localeCompare(b.name, 'it', { sensitivity: 'base' }));
}
onMounted(async () => { await loadStudents(); });
onUnmounted(() => { subscriptions.forEach(u => u.unsubscribe()); });
</script>

<style scoped>
.student-directory { overflow: hidden; }
.directory-toolbar { justify-content: flex-start; }
.directory-search { max-width: 440px; }
.student-table { border: 1px solid var(--app-border); border-radius: 12px; }
.student-identity { display: flex; align-items: center; gap: 10px; min-height: 44px; }
.student-avatar { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; flex: none; border-radius: 10px; background: var(--app-accent-surface); color: var(--app-primary); }
.student-name { color: var(--app-text); font-weight: 600; white-space: nowrap; }
.student-actions { display: flex; justify-content: flex-end; gap: 2px; }
@media (max-width: 600px) {
  .student-add-button { width: 100%; }
  .directory-toolbar { flex-wrap: nowrap; }
  .directory-search { min-width: 0; }
  .student-table :deep(th:nth-child(2)), .student-table :deep(td:nth-child(2)),
  .student-table :deep(th:nth-child(3)), .student-table :deep(td:nth-child(3)),
  .student-table :deep(th:nth-child(4)), .student-table :deep(td:nth-child(4)) { display: none; }
}
</style>
