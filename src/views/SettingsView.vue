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
                        <v-col class="px-2">
                            <v-switch v-model="debugEnabled" color="primary" :label="label"></v-switch>
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
const label = computed(() => `Abilitare console debug: ${(debugEnabled.value ? 'on' : 'off')}`)

watch(debugEnabled, () => LocalStorageHandler.setItem('debugEnabled', debugEnabled.value));

function loadSettings() {
    debugEnabled.value = LocalStorageHandler.getItem('debugEnabled') ?? false;
}

onMounted(() => loadSettings());
</script>