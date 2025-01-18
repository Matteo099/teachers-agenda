<template>
    <v-container fluid class="mb-5">
        <v-row class="justify-center align-center mb-6">
            <v-col cols="auto">
                <BackButton></BackButton>
            </v-col>
            <v-col>
                <p class="text-h5 text-center">Impostazioni Utente</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-form class="ma-2">
                    <v-row class="justify-center">
                        <v-col class="px-2" cols="12" md="6">
                            <v-switch v-model="debugEnabled" color="primary" :label="debugEnabledLabel"></v-switch>
                        </v-col>
                        <v-col class="px-2" cols="12" md="6">
                            <v-switch v-model="loadTodayLesson" color="primary"
                                :label="loadTodayLessonLabel"></v-switch>
                        </v-col>
                        <v-col>
                            <v-btn v-if="notificationsSupported" @click="askPermission">abilita notifiche</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import BackButton from '@/components/inputs/BackButton.vue';
import { LocalStorageHandler } from '@/models/storage/local-storage-handler';
import { computed, onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';

const debugEnabled = ref(false);
const debugEnabledLabel = computed(() => `Abilitare console debug: ${(debugEnabled.value ? 'on' : 'off')}`)
const loadTodayLesson = ref(false);
const loadTodayLessonLabel = computed(() => `Abilitare il caricamento automatico delle lezioni del giorno sulla Homepage: ${(loadTodayLesson.value ? 'on' : 'off')}`)
const notificationsSupported = ref(false);

watch(debugEnabled, () => LocalStorageHandler.setItem('debugEnabled', debugEnabled.value));
watch(loadTodayLesson, () => LocalStorageHandler.setItem('loadTodayLesson', loadTodayLesson.value));

function loadSettings() {
    debugEnabled.value = LocalStorageHandler.getItem('debugEnabled') ?? false;
    loadTodayLesson.value = LocalStorageHandler.getItem('loadTodayLesson') ?? false;
    if ('Notification' in window && 'serviceWorker' in navigator) {
        notificationsSupported.value = true
    }
}


function askPermission() {
    if (notificationsSupported.value) {
        Notification.requestPermission(result => {
            console.log('result from permission question', result);
            if (result !== 'granted') {
                toast.info("Autorizzazione notifiche negata")
            } else {
                toast.info("Autorizzazione notifiche consentita! Ti sarà inviata una notifica di prova")
                console.log('A notification will be send from the service worker => This only works in production');
                showNotification()
            }
        })
    }
}

function showNotification() {
    if ('serviceWorker' in navigator) {
        console.log(navigator.serviceWorker)
        navigator.serviceWorker.ready // returns a Promise, the active SW registration
            .then(swreg => {
                console.log(swreg);
                swreg.showNotification('Notifica di prova', {
                    body: 'Questa è una notifica di prova',
                    // icon: '/img/icons/android-chrome-192x192.png',
                    // image: '/img/autumn-forest.png',
                    // vibrate: [300, 200, 300],
                    // badge: '/img/icons/plint-badge-96x96.png',
                    // actions: [
                    //     { action: 'confirm', title: 'Okay', icon: '/img/icons/android-chrome-192x192.png'},
                    //     { action: 'cancel', title: 'Cancel', icon: '/img/icons/android-chrome-192x192.png'}
                    // ],
                })
            })
    }
}

onMounted(() => loadSettings());
</script>