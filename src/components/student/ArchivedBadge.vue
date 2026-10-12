<template>
    <v-chip v-if="archived" class="archived-badge" size="small" variant="flat"
        prepend-icon="mdi-archive-outline">Archiviato</v-chip>
</template>

<script setup lang="ts">
defineProps<{ archived?: boolean }>();
</script>
