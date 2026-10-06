<template>
  <v-app>
    <v-navigation-drawer v-if="!loginPage && !mobile" permanent v-model="drawer" width="252">
      <v-list-item height="64">
        <template v-slot:prepend>
          <v-img contain :src="appLogo" height="45" width="45"></v-img>
        </template>
        <v-list-item-title class="text-h6 ml-3">Agenda</v-list-item-title>
        <v-list-item-subtitle class="text-h6 ml-3 pb-1">Del Maestro</v-list-item-subtitle>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/" color="primary">
          <template v-slot:prepend>
            <v-icon icon="mdi-home"></v-icon>
          </template>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/calendar" color="primary">
          <template v-slot:prepend>
            <v-icon icon="mdi-calendar"></v-icon>
          </template>
          <v-list-item-title>Calendario</v-list-item-title>
        </v-list-item>

        <v-list-item to="/statistics" color="primary">
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

    <v-app-bar color="surface" elevation="0" class="app-top-bar">
      <v-app-bar-nav-icon v-if="!loginPage && !mobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="app-top-title">
        {{ route.name === 'calendar' ? 'Calendario' : route.name === 'statistics' ? 'Statistiche' : route.name === 'home' ? 'Home' : 'Agenda del Maestro' }}
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
          <v-btn icon class="mr-2 text-none" v-bind="props">
            <v-badge v-if="notifications.length > 0" color="error" :content="notifications.length">
              <v-icon>mdi-bell</v-icon>
            </v-badge>
            <v-icon v-else>mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in notifications" :key="i">
            <v-list-item-subtitle>{{ item }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="notifications.length == 0">
            <v-list-item-subtitle>Nessuna notifica</v-list-item-subtitle>
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
                <br>
                <v-btn variant="text" rounded to="/debugger">
                  <v-icon right class="mr-2">mdi-bug</v-icon>
                  Debugger
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

    <v-main :class="{ 'mobile-main': !loginPage && mobile }">
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

    <v-bottom-navigation v-if="!loginPage && mobile" class="mobile-bottom-navigation" bg-color="surface" grow>
        <v-btn to="/">
          <v-icon>mdi-home-outline</v-icon>
          <span>Home</span>
        </v-btn>

        <v-btn to="/calendar">
          <v-icon>mdi-calendar-month-outline</v-icon>
          <span>Calendario</span>
        </v-btn>

        <v-btn to="/statistics">
          <v-icon>mdi-chart-bar</v-icon>
          <span>Statistiche</span>
        </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { computed, onMounted, ref, watch, type ComputedRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { useDisplay, useTheme } from 'vuetify';
import { LocalStorageHandler } from './models/storage/local-storage-handler';
import { stringToHslColor } from './models/utils';
import { checkForNewVersion } from './models/utils/version';

const { mobile } = useDisplay({ mobileBreakpoint: 'lg' })

const notifications: any[] = [];

const auth = useFirebaseAuth()!;
const theme = useTheme()
const appLogo = new URL('@/assets/images/logo.jpeg', import.meta.url).href
const drawer = ref(false)
const appVersion = import.meta.env.VITE_APP_VERSION
const loginPage = computed(() => route.name == "login")
const hasNewVersion = ref(false);

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

watch(hasNewVersion, () => {
  if (hasNewVersion.value) {
    notifications.push("Scarica la nuova versione dell'applicazione")
    toast.info("Scarica la nuova versione dell'applicazione", {
      // Keeps the notification open until the user interacts
      autoClose: false,
      closeOnClick: true,
      // onClick: () => {
      //   // Reload the page to fetch the new version
      //   window.location.reload(true);
      // },
    });
  }
})

watch(user, async (currentUser, previousUser) => {
  // redirect to login if they logout and the current
  // route is only for authenticated users
  if (
    !currentUser &&
    route.meta.requiresAuth
  ) {
    if (route.name != "login")
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

function toggleTheme() {
  const currentTheme = LocalStorageHandler.getItem('theme') ?? 'myCustomLightTheme';
  const nextTheme = currentTheme == 'myCustomDarkTheme' ? 'myCustomLightTheme' : 'myCustomDarkTheme';
  theme.change(nextTheme);
  LocalStorageHandler.setItem('theme', nextTheme);
}

async function checkForUpdates() {
  hasNewVersion.value = await checkForNewVersion()
}

onMounted(async () => {
  theme.change(LocalStorageHandler.getItem('theme') ?? 'myCustomLightTheme');
  checkForUpdates();
})
</script>

<style>
.app-top-bar { border-bottom: 1px solid var(--app-border); }
.app-top-title { font-size: 1.18rem; font-weight: 700; color: var(--app-text); }
.mobile-bottom-navigation {
  position: fixed !important;
  inset: auto 0 0;
  z-index: 1006;
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  border-top: 1px solid var(--app-border);
  box-shadow: 0 -2px 14px rgba(30, 50, 100, .05) !important;
}
.mobile-bottom-navigation .v-btn--active { color: var(--app-primary); }

.mobile-main {
  padding-bottom: calc(56px + env(safe-area-inset-bottom)) !important;
}
</style>
