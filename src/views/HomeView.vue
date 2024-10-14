<template>
  <v-container fluid>
    <v-expand-transition mode="out-in">
      <template v-if="loadingSchools">
        <v-row no-gutters>
          <v-col v-for="fo in 3" :key="fo" cols="12" sm="4">
            <v-skeleton-loader class="ma-2 pa-2" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
      </template>
    </v-expand-transition>
    <v-row no-gutters>
      <v-col v-for="fo in schools" :key="fo.name" cols="12" sm="4">
        <v-card append-icon="mdi-open-in-new" class="ma-2 pa-2" :to="'/school/' + fo.id" prepend-icon="mdi-town-hall"
          :subtitle="'Visualizza tutti gli aggiornamenti della scuola ' + fo.name" :title="getSchoolName(fo)"
          color="primary">
          <!-- target="_blank" -->
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-dialog v-model="dialog" fullscreen>
          <template v-slot:activator="{ props: activatorProps }">
            <v-card class="ma-2 pa-2" color="secondary" v-bind="activatorProps">
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
  </v-container>
</template>


<script setup lang="ts">
import SchoolEditor from '@/components/school/SchoolEditor.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import type { School } from '@/models/model';
import { onSnapshot, type Unsubscribe } from "firebase/firestore";
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import { toast } from 'vue3-toastify';

const schoolsRef = useDB<School>(DatabaseRef.SCHOOLS);
let unsubscribeSchool: Unsubscribe;

const schools: Ref<School[]> = ref([]);
const loadingSchools = ref(false);
const dialog = ref(false)


function onSaveSchool(school?: School) {
  if (school)
    dialog.value = false;
}

function getSchoolName(school: School): string {
  if (school.city)
    return `${school.name} (${school.city})`;
  return school.name;
}

async function loadSchools() {
  loadingSchools.value = true;
  unsubscribeSchool = onSnapshot(schoolsRef, (snapshot) => {
    const data = snapshot.docs.map(doc => doc.data())
    schools.value = data;
    loadingSchools.value = false;
    console.log("Current data: ", snapshot, data);
  }, (error) => {
    toast.warning('Impossibile caricare le scuole...');
    loadingSchools.value = false;
    console.error("Impossibile caricare le scuole", error);
  });
}

onMounted(async () => {
  await loadSchools();
});

onUnmounted(() => {
  unsubscribeSchool?.();
})
</script>