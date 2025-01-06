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
                            <v-switch v-model="loadTodayLesson" color="primary" :label="loadTodayLessonLabel"></v-switch>
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

const debugEnabled = ref(false);
const debugEnabledLabel = computed(() => `Abilitare console debug: ${(debugEnabled.value ? 'on' : 'off')}`)
const loadTodayLesson = ref(false);
const loadTodayLessonLabel = computed(() => `Abilitare il caricamento automatico delle lezioni del giorno sulla Homepage: ${(loadTodayLesson.value ? 'on' : 'off')}`)

watch(debugEnabled, () => LocalStorageHandler.setItem('debugEnabled', debugEnabled.value));
watch(loadTodayLesson, () => LocalStorageHandler.setItem('loadTodayLesson', loadTodayLesson.value));

function loadSettings() {
    debugEnabled.value = LocalStorageHandler.getItem('debugEnabled') ?? false;
    loadTodayLesson.value = LocalStorageHandler.getItem('loadTodayLesson') ?? false;
}

onMounted(() => loadSettings());
</script>