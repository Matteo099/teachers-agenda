<template>
  <v-app>
    <v-navigation-drawer v-if="!loginPage && !mobile" permanent v-model="drawer">
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
      </v-list>

      <template v-slot:append>
        <v-footer height="45" class="px-0">
          <div class="d-flex justify-center w-100">
            <v-icon start>mdi-alpha-v-circle</v-icon>
            <span>{{ appVersion }}</span>
          </div>
        </v-footer>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="grey-darken-4">
      <v-app-bar-nav-icon v-if="!loginPage && !mobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title style="margin-left: -10px">
        <!-- <router-link to="/">
          <v-img contain :src="companyLogo" height="90" width="150"></v-img>
        </router-link> -->
      </v-app-bar-title>

      <v-btn v-if="mobile" icon class="mr-2" v-tooltip="tooltip">
        <v-icon right>mdi-information</v-icon>
      </v-btn>

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

      <v-menu min-width="200px" class="mr-2" rounded>
        <template v-slot:activator="{ props }">
          <v-btn class="mr-2" icon v-bind="props">
            <v-avatar :color="avatarColor">
              <v-img v-if="userImage" :src="userImage"></v-img>
              <span v-else class="text-h7">{{ userInitials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <div v-if="user">
                <v-avatar :color="avatarColor">
                  <v-img v-if="userImage" :src="userImage"></v-img>
                  <span v-else class="text-h7">{{ userInitials }}</span>
                </v-avatar>
                <h3>{{ user.displayName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn variant="text" rounded to="/settings">
                  <v-icon right class="mr-2">mdi-cog</v-icon>
                  Impostazioni
                </v-btn>
                <v-divider class="my-3"></v-divider>
              </div>
              <v-fab-transition>
                <v-btn class="mx-5" variant="outlined" v-if="!user" to="/login">
                  Accedi
                  <v-icon right class="ml-2">mdi-login</v-icon></v-btn>

                <v-btn class="mx-5" variant="text" v-else @click="signOut(auth)">
                  Esci
                  <v-icon right class="ml-2">mdi-logout</v-icon></v-btn>
              </v-fab-transition>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
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

    <v-layout v-if="!loginPage && mobile" class="overflow-visible position-relative" style="height: 56px;">
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
import { signOut } from 'firebase/auth';
import { computed, onMounted, ref, watch, type ComputedRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { useDisplay, useTheme } from 'vuetify';
import { LocalStorageHandler } from './models/storage/local-storage-handler';
import { stringToHslColor } from './models/utils';

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

const notifications: any[] = [];

const auth = useFirebaseAuth()!;
const theme = useTheme()
const appLogo = new URL('@/assets/images/logor.png', import.meta.url).href
const drawer = ref(false)
const loginPage = ref(true)
const appVersion = import.meta.env.VITE_APP_VERSION

const tooltip = {
  text: `Versione ${appVersion}`,
  scrollStrategy: 'close',
  location: "bottom",
  scrim: true,
  persistent: false,
  openOnClick: true,
  openOnHover: false,
};

const user = useCurrentUser()
const router = useRouter()
const route = useRoute()
const userInitials: ComputedRef<string> = computed(() => user.value?.displayName?.split(" ").map(s => s.charAt(0)).join("") ?? "TA");
const userImage = computed(() => user.value?.photoURL ?? appLogo);
const avatarColor = computed(() => stringToHslColor(userInitials.value));

watch(user, async (currentUser, previousUser) => {
  // redirect to login if they logout and the current
  // route is only for authenticated users
  if (
    !currentUser &&
    previousUser &&
    route.meta.requiresAuth
  ) {
    return router.push({ name: 'login' })
  }

  // redirect the user if they are logged in but were
  // rejected because the user wasn't ready yet, logged in
  // then got back to this page
  if (currentUser) {
    if (typeof route.query.redirect === 'string')
      return router.push(route.query.redirect);
    else if (route.name == "login")
      return router.push("/");
  }
})

watch(() => route.name, () => loginPage.value = route.name == "login")

function toggleTheme() {
  const currentTheme = LocalStorageHandler.getItem('theme') ?? 'myCustomLightTheme';
  theme.global.name.value = currentTheme == 'myCustomDarkTheme' ? 'myCustomLightTheme' : 'myCustomDarkTheme';
  LocalStorageHandler.setItem('theme', theme.global.name.value);
}

onMounted(() => {
  theme.global.name.value = LocalStorageHandler.getItem('theme') ?? 'myCustomLightTheme';
})
</script>
