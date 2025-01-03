<template>
    <v-container fluid class="mb-5">
        <v-row class="justify-center align-center mb-6">
            <v-col cols="auto">
                <BackButton></BackButton>
            </v-col>
            <v-col>
                <p class="text-h5 text-center">Log dell'applicazione</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="debugEnabled">
                <LogConsole></LogConsole>
            </v-col>
            <v-col class="text-center" v-else>
                <p>La console di debug non è abilitata. Abilitala tramite le <v-btn to="settings" variant="text"><v-icon>mdi-link</v-icon> impostazioni</v-btn></p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import LogConsole from '@/components/debugger/LogConsole.vue';
import BackButton from '@/components/inputs/BackButton.vue';
import { LocalStorageHandler } from '@/models/storage/local-storage-handler';
import { onMounted, ref } from 'vue';

const debugEnabled = ref(false);

onMounted(() => {
    debugEnabled.value = LocalStorageHandler.getItem('debugEnabled') ?? false;
});
</script>