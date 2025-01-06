<template>
  <v-container fluid>
    <v-expand-transition mode="out-in">
      <template v-if="loadingSchools">
        <v-row>
          <v-col v-for="fo in 3" :key="fo" cols="12" sm="4">
            <v-skeleton-loader class="pa-2" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
      </template>
    </v-expand-transition>
    <v-row>
      <v-col v-for="fo in schools" :key="fo.name" cols="12" sm="4">
        <v-card append-icon="mdi-open-in-new" class="pa-2" :to="'/school/' + fo.id" prepend-icon="mdi-town-hall"
          :subtitle="'Visualizza tutti gli aggiornamenti della scuola ' + fo.name" :title="getSchoolName(fo)"
          color="primary">
          <!-- target="_blank" -->
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-dialog v-model="dialog" fullscreen>
          <template v-slot:activator="{ props: activatorProps }">
            <v-card class="pa-2" color="secondary" v-bind="activatorProps">
              <div class="text-center ma-4">
                <p class="text-h6 font-weight">Aggiungi una scuola</p>
                <v-icon size="x-large">mdi-plus</v-icon>
              </div>
            </v-card>
          </template>

          <SchoolEditor @close="dialog = false" @save="onSaveSchool($event)"></SchoolEditor>
        </v-dialog>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <v-row class="justify-center">
      <v-col cols="auto">
        <v-btn @click="loadTodayLessons" :loading="loadingTodayLessons">Carica le lezioni di oggi ({{ dateFormat(new
          Date())
          }})</v-btn>
      </v-col>
    </v-row>
    <v-slide-y-transition mode="out-in">
      <v-row v-if="!loadingTodayLessons">
        <v-col v-if="todayLessons.length == 0 && loadAtLeastOnceTodayLessons" cols="12">
          <p>Nessuna lezione in programma per oggi!</p>
        </v-col>
        <v-col v-for="tl in todayLessons" :key="tl.lesson.id" cols="12" sm="4">
          <v-card append-icon="mdi-open-in-new" class="pa-2" :to="'/lesson/' + tl.lesson.id"
            prepend-icon="mdi-book-clock" subtitle="Visualizza la lezione del giorno" :title="tl.school.name" color="info">
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="fo in 3" :key="fo" cols="12" sm="4">
          <v-skeleton-loader class="pa-2" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-slide-y-transition>
  </v-container>
</template>


<script setup lang="ts">
import SchoolEditor from '@/components/school/SchoolEditor.vue';
import type { School, TodayLesson } from '@/models/model';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { SchoolService } from '@/models/services/school-service';
import { LocalStorageHandler } from '@/models/storage/local-storage-handler';
import { dateFormat } from '@/models/utils';
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import { toast } from 'vue3-toastify';

let schoolSubscription: EventSubscription;

const schools: Ref<School[]> = ref([]);
const todayLessons: Ref<TodayLesson[]> = ref([]);
const loadingSchools = ref(false);
const dialog = ref(false)
const loadTodayLesson = ref(false);
const loadingTodayLessons = ref(false);
const loadAtLeastOnceTodayLessons = ref(false);

function onSaveSchool(school?: School) {
  if (school)
    dialog.value = false;
}

function getSchoolName(school: School): string {
  if (school.city)
    return `${school.name} (${school.city})`;
  return school.name;
}

async function loadTodayLessons() {
  loadingTodayLessons.value = true;
  todayLessons.value = await SchoolService.instance.getTodayLessons();
  loadingTodayLessons.value = false;
  loadAtLeastOnceTodayLessons.value = true;
}

async function loadSchools() {
  loadingSchools.value = true;
  schoolSubscription = SchoolRepository.instance.observeAll().subscribe({
    next: data => {
      schools.value = data
      loadingSchools.value = false;
    },
    error: err => {
      toast.warning('Impossibile caricare le scuole...');
      console.error(err);
      loadingSchools.value = false
    }
  });
}

onMounted(async () => {
  loadTodayLesson.value = LocalStorageHandler.getItem('loadTodayLesson') ?? false;
  if (loadTodayLesson.value) loadTodayLessons();
  await loadSchools();
});

onUnmounted(() => {
  schoolSubscription?.unsubscribe();
})
</script>