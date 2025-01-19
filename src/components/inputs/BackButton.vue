<template>
    <v-btn icon="mdi-arrow-left" @click="back" variant="text"></v-btn>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface BackButtonProps {
    delta?: number;
}

const props = withDefaults(defineProps<BackButtonProps>(), {
    delta: 1
});

const router = useRouter();

function back() {
    const delta = Math.abs(props.delta ?? 1);
    router.go(-delta);
}
</script>