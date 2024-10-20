<template>
  <v-app>
    <v-navigation-drawer v-if="!mobile" permanent v-model="drawer">
      <v-list-item height="64">
        <template v-slot:prepend>
          <v-img contain :src="appLogo" height="45" width="45"></v-img>
        </template>
        <v-list-item-title class="text-h6 ml-3">Agenda</v-list-item-title>
        <v-list-item-subtitle class="text-h6 ml-3 pb-1">Del Maestro</v-list-item-subtitle>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/" color="lime-darken-4">
          <template v-slot:prepend>
            <v-icon icon="mdi-home"></v-icon>
          </template>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/schools" color="lime-darken-4">
          <template v-slot:prepend>
            <v-icon icon="mdi-town-hall"></v-icon>
          </template>
          <v-list-item-title>Gestisci Scuole</v-list-item-title>
        </v-list-item>

        <v-list-item to="/calendar" color="lime-darken-4">
          <template v-slot:prepend>
            <v-icon icon="mdi-calendar"></v-icon>
          </template>
          <v-list-item-title>Calendario</v-list-item-title>
        </v-list-item>

        <v-list-item :to="'/lesson/' + new Date()" color="lime-darken-4">
          <template v-slot:prepend>
            <v-icon icon="mdi-book-account"></v-icon>
          </template>
          <v-list-item-title>Lezioni</v-list-item-title>
        </v-list-item>

        <v-list-item to="/recoveries" color="lime-darken-4">
          <template v-slot:prepend>
            <v-icon icon="mdi-repeat"></v-icon>
          </template>
          <v-list-item-title>Recuperi</v-list-item-title>
        </v-list-item>

        <v-list-item to="/reports" color="lime-darken-4">
          <template v-slot:prepend>
            <v-icon icon="mdi-chart-bar"></v-icon>
          </template>
          <v-list-item-title>Statistiche</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="hasRole('HANDLE_DIE')" to="/settings" color="lime-darken-4">
          <template v-slot:prepend>
            <v-icon icon="mdi-cog"></v-icon>
          </template>
          <v-list-item-title>Impostazioni</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-footer height="45" class="px-0">
          <v-row align-content="center" no-gutters class="text-caption">
            <v-col align-self="center" cols="7">
              <v-img :src="companyLogo" height="45" />
            </v-col>
            <v-col align-self="center" cols="1"></v-col>
            <v-col align-self="center" class="d-flex" cols="3">
              <v-icon start>mdi-alpha-v-circle</v-icon>
              <span>{{ appVersion }}</span>
            </v-col>
          </v-row>
        </v-footer>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="grey-darken-4">
      <v-app-bar-nav-icon v-if="!mobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title style="margin-left: -10px">
        <!-- <router-link to="/">
          <v-img contain :src="companyLogo" height="90" width="150"></v-img>
        </router-link> -->
      </v-app-bar-title>

      <v-btn @click="toggleTheme" icon class="mr-2">
        <v-icon right>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn icon class="mr-2" v-bind="props">
            <v-icon right>mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in notifications" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div>
        <v-btn class="mx-5" variant="outlined" v-if="!user" @click="signIn">Accedi
          <v-icon right class="ml-2">mdi-login</v-icon></v-btn>
        <v-btn class="mx-5" variant="outlined" v-if="user" @click="signOut">Esci
          <v-icon right class="ml-2">mdi-logout</v-icon></v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view v-slot="{ Component, route }">
          <!-- <component :is="route.meta?.transition?.toString() || 'v-fade-transition'" leave-absolute>
            <component :is="Component" />
          </component> -->
          <v-slide-x-transition leave-absolute>
            <component :is="Component" />
          </v-slide-x-transition>
        </router-view>
      </v-container>
    </v-main>

    <v-layout v-if="mobile" class="overflow-visible position-relative" style="height: 56px;">
      <v-bottom-navigation class="position-fixed bottom-0" v-model="data" :bg-color="color" mode="shift">
        <v-btn to="/">
          <v-icon>mdi-home</v-icon>
          <span>Home</span>
        </v-btn>
        <!-- 
        <v-btn>
          <v-icon>mdi-music-note</v-icon>
          <span>Music</span>
        </v-btn>

        <v-btn>
          <v-icon>mdi-book</v-icon>
          <span>Book</span>
        </v-btn>

        <v-btn>
          <v-icon>mdi-image</v-icon>
          <span>Image</span>
        </v-btn> -->
      </v-bottom-navigation>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, ref } from 'vue'
import { useTheme } from 'vuetify'
import { useSettingsStore } from './stores/settings'
import { useDisplay } from 'vuetify'
import { toast } from 'vue3-toastify';

const { mobile } = useDisplay({ mobileBreakpoint: 'md' })
const data = ref(1);
const color = computed(() => {
  switch (data.value) {
    case 0: return 'blue-grey'
    case 1: return 'teal'
    case 2: return 'brown'
    case 3: return 'indigo'
    default: return 'blue-grey'
  }
})

const user = ref(false);
const notifications: any[] = [];

const settingsStore = useSettingsStore()
const theme = useTheme()
const appLogo = new URL('@/assets/images/logor.png', import.meta.url).href
const companyLogo = new URL('@/assets/images/logo.png', import.meta.url).href
const drawer = ref(true)
const userInitials = ref<string>()
const userRoles = ref<string[]>()
const appVersion = import.meta.env.VITE_APP_VERSION

function toggleTheme() {
  settingsStore.toggleDarkMode()
  theme.global.name.value =
    theme.global.name.value == 'myCustomDarkTheme' ? 'myCustomLightTheme' : 'myCustomDarkTheme'
}

function signIn() { }
function signOut() { }
function hasRole(role: string): boolean { return true; }

</script>
