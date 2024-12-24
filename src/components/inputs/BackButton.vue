<template>
    <v-btn icon="mdi-arrow-left" @click="back" variant="text"></v-btn>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter();

function back() {
    router.go(-1);
}
</script>