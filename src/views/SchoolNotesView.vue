<template>
  <v-card class="school-panel" variant="flat" :loading="loading">
    <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-note-text-outline" size="22" /></span><div><h2>Note della scuola</h2></div><v-btn color="primary" prepend-icon="mdi-plus" variant="flat" @click="startNewNote">Aggiungi nota</v-btn></div>
    <v-card-text class="school-panel-content">
      <v-data-table :headers="headers" :items="notes" item-value="id" :items-per-page="5" items-per-page-text="Righe per pagina">
        <template #item.date="{ item }">{{ yyyyMMdd.fromIyyyyMMdd(item.date).format() }}</template>
        <template #item.actions="{ item }">
          <v-btn icon="mdi-pencil" size="small" variant="text" aria-label="Modifica nota scuola" @click="editNote(item)" />
          <DeleteDialog :name="`${yyyyMMdd.fromIyyyyMMdd(item.date).format()} - ${item.description}`" obj-name="nota della scuola"
            :on-delete="() => deleteNote(item)">
            <template #activator="{ props: activatorProps }">
              <v-btn v-bind="activatorProps" icon="mdi-delete" size="small" variant="text" color="error" aria-label="Elimina nota scuola" />
            </template>
          </DeleteDialog>
        </template>
        <template #no-data>Nessuna nota della scuola registrata.</template>
      </v-data-table>
    </v-card-text>
  </v-card>

  <v-dialog v-model="dialog" max-width="640">
    <v-card class="school-note-dialog" variant="flat">
      <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-note-edit-outline" size="22" /></span><div><h2>{{ editingId ? 'Modifica nota' : 'Aggiungi nota' }}</h2></div></div>
      <v-card-text>
        <v-date-input v-model="noteDate" label="Data" variant="outlined" inputmode="none" />
        <v-textarea v-model="description" label="Nota" variant="outlined" rows="4" counter="1000" autofocus />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="dialog = false">Annulla</v-btn>
        <v-btn color="primary" variant="flat" :loading="saving" @click="saveNote">Salva</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Timestamp, where } from 'firebase/firestore';
import { toast } from 'vue3-toastify';
import DeleteDialog from '@/components/DeleteDialog.vue';
import { yyyyMMdd, type School, type SchoolNote } from '@/models/model';
import { SchoolNoteRepository } from '@/models/repositories/school-note-repository';
import { nameof } from '@/models/utils';

const props = defineProps<{ school: School }>();
const notes = ref<SchoolNote[]>([]);
const loading = ref(false);
const saving = ref(false);
const dialog = ref(false);
const editingId = ref<string>();
const noteDate = ref<Date>(new Date());
const description = ref('');
const headers = [
  { title: 'Data', key: 'date' },
  { title: 'Nota', key: 'description' },
  { title: 'Operazioni', key: 'actions', sortable: false, align: 'center' as const },
];

async function loadNotes() {
  loading.value = true;
  try {
    notes.value = (await SchoolNoteRepository.instance.getAll(where(nameof<SchoolNote>('schoolId'), '==', props.school.id)))
      .sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    toast.error('Impossibile caricare le note della scuola');
    console.error(error);
  } finally { loading.value = false; }
}

function startNewNote() {
  editingId.value = undefined;
  noteDate.value = new Date();
  description.value = '';
  dialog.value = true;
}
function editNote(note: SchoolNote) {
  editingId.value = note.id;
  noteDate.value = yyyyMMdd.fromIyyyyMMdd(note.date).toDate();
  description.value = note.description;
  dialog.value = true;
}
async function saveNote() {
  if (!description.value.trim() || !noteDate.value) { toast.warning('Inserisci una data e il testo della nota'); return; }
  saving.value = true;
  try {
    const old = editingId.value ? notes.value.find(note => note.id === editingId.value) : undefined;
    const note: SchoolNote = {
      id: editingId.value ?? crypto.randomUUID(),
      schoolId: props.school.id,
      date: yyyyMMdd.fromDate(noteDate.value).toIyyyyMMdd(),
      description: description.value.trim(),
      createdAt: old?.createdAt ?? Timestamp.now(),
      updatedAt: Timestamp.now(),
    };
    await SchoolNoteRepository.instance.save(note, note.id);
    dialog.value = false;
    toast.success(editingId.value ? 'Nota aggiornata' : 'Nota aggiunta');
    await loadNotes();
  } catch (error) {
    toast.error('Impossibile salvare la nota');
    console.error(error);
  } finally { saving.value = false; }
}
async function deleteNote(note: SchoolNote): Promise<boolean> {
  try {
    await SchoolNoteRepository.instance.delete(note.id);
    await loadNotes();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

onMounted(loadNotes);
</script>
