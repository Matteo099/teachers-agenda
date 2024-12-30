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
            <v-col>
                <LogConsole></LogConsole>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import LogConsole from '@/components/debugger/LogConsole.vue';
import BackButton from '@/components/inputs/BackButton.vue';

</script>