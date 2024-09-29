<template>
  <v-container fluid>
    <v-row no-gutters>
      <template v-if="loadingSchools">
        <v-col v-for="fo in 3" :key="fo" cols="12" sm="4">
          <v-skeleton-loader class="ma-2 pa-2" type="card"></v-skeleton-loader>
        </v-col>
      </template>

      <v-col v-for="fo in schools" :key="fo.name" cols="12" sm="4">
        <v-card append-icon="mdi-open-in-new" class="ma-2 pa-2" :to="'/school/' + fo.id" prepend-icon="mdi-town-hall"
          :subtitle="'Visualizza tutti gli aggiornamenti della scuola ' + fo.name" :title="fo.name" color="primary">
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


          <v-card prepend-icon="mdi-school" title="Scuola">
            <v-card-text>
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field v-model="name" label="Nome" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="city" label="Città"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="email" label="Email"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="phoneNumber" label="Numero di Telefono"></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row justify-center>
                    <v-col class="align-self-center">
                      <v-checkbox v-model="managed" label="Gestione"></v-checkbox>
                    </v-col>
                    <v-col class="align-self-center">
                      <v-dialog v-if="managed" v-model="dialogManager" fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                          <v-btn text="Gestione" v-bind="activatorProps"></v-btn>
                        </template>

                        <ManagerEditor :initialManagerOptions="managerOptions" @close="dialogManager = false"
                          @save="saveManagerOptions($event)">
                        </ManagerEditor>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-col>

                <!-- <v-divider class="my-5"></v-divider> -->

                <v-col cols="12" md="6">
                  <v-dialog v-model="dialogLevels" fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn text="Gestisci Livelli" v-bind="activatorProps"></v-btn>
                    </template>

                    <LevelRangeEditor :initialLevelRanges="levelRanges" @close="dialogLevels = false"
                      @save="saveLevelRanges($event)"></LevelRangeEditor>

                  </v-dialog>
                </v-col>
              </v-row>

            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Chiudi" variant="plain" @click="dialog = false"></v-btn>

              <v-btn color="primary" text="Salva" variant="tonal" @click="addSchool"></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
import LevelRangeEditor from '@/components/LevelRangeEditor.vue';
import ManagerEditor from '@/components/ManagerEditor.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import type { LevelRange, ManagerOptions, School } from '@/models/model';
import { addDoc, onSnapshot, query, Timestamp, type Unsubscribe } from "firebase/firestore";
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

const schoolsRef = useDB(DatabaseRef.SCHOOLS);
let unsubscribeSchool: Unsubscribe;
const schools: Ref<School[]> = ref([]);
const loadingSchools = ref(false);
const dialog = ref(false)
const dialogLevels = ref(false)
const dialogManager = ref(false)

const name = ref("");
const city = ref("");
const email = ref("");
const phoneNumber = ref("");
const managed = ref(false);
const managerOptions: Ref<ManagerOptions | undefined> = ref();
const levelRanges: Ref<LevelRange[]> = ref([]);

function saveManagerOptions(mo: ManagerOptions) {
  console.log(mo, JSON.stringify(mo));
  managerOptions.value = mo;
  dialogManager.value = false
}

function saveLevelRanges(lr: LevelRange[]) {
  console.log(lr, JSON.stringify(lr));
  levelRanges.value = lr;
  dialogLevels.value = false;
}

async function addSchool() {

  const school: Partial<School> = {
    name: name.value,
    managed: managed.value,
    levelRanges: levelRanges.value,
    city: city.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };
  if (managed.value) school.managerOptions = managerOptions.value;

  try {
    const docRef = await addDoc(schoolsRef, school);
    console.log("Document (schools) written with ID: ", docRef.id);
    dialog.value = false;
    name.value = "";
    city.value = "";
    email.value = "";
    phoneNumber.value = "";
    managed.value = false;
    levelRanges.value = [];
    managerOptions.value = undefined;
  } catch (e) {
    console.error("Error adding document (schools): ", e);
  }
}


async function loadSchools() {
  loadingSchools.value = true;
  unsubscribeSchool = onSnapshot(schoolsRef, (snapshot) => {
    const data = snapshot.docs.map(doc => doc.data())
    schools.value = data;
    loadingSchools.value = false;
    console.log("Current data: ", snapshot, data);
  }, (error) => {
    loadingSchools.value = false;
    console.error(error);
  });
}

onMounted(async () => {
  await loadSchools();
});

onUnmounted(() => {
  unsubscribeSchool?.();
})
</script>