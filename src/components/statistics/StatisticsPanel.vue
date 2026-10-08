<template>
  <v-card class="statistics-panel" variant="flat" :loading="loading">
    <div class="statistics-panel-header">
      <span class="statistics-panel-icon"><v-icon :icon="icon" size="21" /></span>
      <div class="statistics-panel-heading"><h2>{{ title }}</h2></div>
      <slot name="actions" />
    </div>
    <v-card-text class="statistics-panel-body"><slot /></v-card-text>
  </v-card>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string; icon?: string; loading?: boolean }>(), {
  icon: 'mdi-chart-box-outline',
  loading: false
});
</script>

<style scoped>
.statistics-panel { height: 100%; overflow: hidden; }
.statistics-panel-header { display: flex; align-items: center; gap: 12px; padding: 20px 22px 16px; }
.statistics-panel-icon { display: grid; place-items: center; width: 42px; height: 42px; flex: none; border-radius: 12px; background: var(--app-accent-surface); color: var(--app-primary); }
.statistics-panel-heading { flex: 1; min-width: 0; }
.statistics-panel-heading h2 { margin: 0; color: var(--app-text); font-size: 1.02rem; line-height: 1.3; font-weight: 700; }
.statistics-panel-body { padding: 0 22px 22px !important; }
@media (max-width: 600px) { .statistics-panel-header { padding: 16px; } .statistics-panel-body { padding: 0 16px 16px !important; } }
</style>
