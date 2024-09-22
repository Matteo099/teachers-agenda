<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col v-for="fo in shortlinks" :key="fo.title" cols="12" sm="4">
        <v-card append-icon="mdi-open-in-new" class="ma-2 pa-2" :to="fo.to" :prepend-icon="fo.icon"
          :subtitle="fo.subtitle" :title="fo.title" :color="fo.color">
          <!-- target="_blank" -->
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="ma-2 pa-2" @click="addShortlink" color="secondary">
          <div class="text-center ma-4">
            <p class="text-h6 font-weight">Aggiungi una scorciatoia</p>
            <v-icon size="x-large">mdi-plus</v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
const shortlinks = [
  { title: "Scuole", subtitle: "Visualizza tutte le scuole in cui fai lezione", icon: "mdi-town-hall", to: "/schools", color: "primary" },
  { title: "Lezioni", subtitle: "Visualizza tutte le lezioni", icon: "mdi-book-account", to: "/lessons", color: "primary" },
  { title: "Recuperi", subtitle: "Visualizza tutti i recuperi", icon: "mdi-repeat", to: "/recoveries", color: "primary" },
];

function addShortlink() { }
</script>