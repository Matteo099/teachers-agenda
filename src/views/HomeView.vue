<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col v-for="fo in schools" :key="fo.name" cols="12" sm="4">
        <v-card append-icon="mdi-open-in-new" class="ma-2 pa-2" :to="'/school/' + fo.id" prepend-icon="mdi-town-hall"
          :subtitle="'Visualizza tutti gli aggiornamenti della scuola ' + fo.name" :title="fo.name" color="primary">
          <!-- target="_blank" -->
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-dialog v-model="dialog" max-width="600">
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
import { useDB } from '@/models/firestore-utils';
import type { School } from '@/models/model';
import { addDoc, onSnapshot, type Unsubscribe } from "firebase/firestore";
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

const schoolsRef = useDB('schools');
let unsubscribeSchool: Unsubscribe;
const schools: Ref<School[]> = ref([]);
const dialog = ref(false)

const name = ref("");
const city = ref("");
const email = ref("");
const phoneNumber = ref("");

async function addSchool() {

  const school: Partial<School> = {
    name: name.value,
    city: city.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
  };

  try {
    const docRef = await addDoc(schoolsRef, school);
    dialog.value = false;
    name.value = "";
    city.value = "";
    email.value = "";
    phoneNumber.value = "";
    console.log("Document (schools) written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document (schools): ", e);
  }
}

async function loadSchools() {
  unsubscribeSchool = onSnapshot(schoolsRef, (snapshot) => {
    const data = snapshot.docs.map(doc => doc.data())
    schools.value = data;
    console.log("Current data: ", snapshot, data);
  });
}

onMounted(async () => {
  await loadSchools();
});

onUnmounted(() => {
  unsubscribeSchool();
})
</script>