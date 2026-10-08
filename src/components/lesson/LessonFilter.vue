<template>
    <v-card class="lesson-filter-card" variant="flat">
        <div class="lesson-filter-heading">
            <span class="lesson-filter-icon"><v-icon icon="mdi-filter-variant" size="22" /></span>
            <div><h2>Filtra lezioni</h2></div>
            <v-btn icon="mdi-close" variant="text" size="small" aria-label="Chiudi filtri" @click="emit('close')" />
        </div>
        <v-card-text class="lesson-filter-content">
            <div class="lesson-filter-options">
                <button v-for="filter in LESSON_FILTERS" :key="filter.type" type="button" class="lesson-filter-option"
                    :class="{ 'is-selected': selectedFilters.some(selected => selected.type === filter.type) }"
                    :aria-pressed="selectedFilters.some(selected => selected.type === filter.type)" @click="toggleFilter(filter)">
                    <span class="lesson-filter-option-icon"><v-icon :icon="filter.icon" size="20" /></span>
                    <span>{{ filter.name }}</span>
                    <v-icon :icon="selectedFilters.some(selected => selected.type === filter.type) ? 'mdi-check-circle' : 'mdi-circle-outline'" size="20" />
                </button>
            </div>
            <v-btn class="lesson-filter-all" variant="text" color="primary" size="small" @click="toggle">{{ allLesson ? 'Deseleziona tutte' : 'Seleziona tutte' }}</v-btn>
        </v-card-text>
        <v-card-actions class="lesson-filter-actions">
            <v-btn variant="outlined" @click="reset">Ripristina</v-btn>
            <v-btn color="primary" variant="flat" @click="apply">Applica filtri</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { LESSON_FILTERS, type LessonFilterObj } from '@/models/model';
import { computed, onMounted, ref, type Ref } from 'vue';

const model = defineModel<LessonFilterObj[]>({ default: [] });
const emit = defineEmits(['close']);
const selectedFilters: Ref<LessonFilterObj[]> = ref([]);
const allLesson = computed(() => selectedFilters.value.length === LESSON_FILTERS.length);

function toggleFilter(filter: LessonFilterObj) {
    selectedFilters.value = selectedFilters.value.some(selected => selected.type === filter.type)
        ? selectedFilters.value.filter(selected => selected.type !== filter.type)
        : [...selectedFilters.value, filter];
}

function toggle() {
    selectedFilters.value = allLesson.value ? [] : [...LESSON_FILTERS];
}

function reset() {
    selectedFilters.value = [...model.value];
}

function apply() {
    model.value = [...selectedFilters.value];
    emit('close');
}

onMounted(reset);
</script>

<style scoped>
.lesson-filter-card { width: 100%; overflow: hidden; border: 1px solid var(--app-border); border-radius: 16px !important; background: var(--app-surface); }
.lesson-filter-heading { display: flex; align-items: center; gap: 12px; padding: 20px 22px 18px; border-bottom: 1px solid var(--app-border); }
.lesson-filter-icon, .lesson-filter-option-icon { display: grid; place-items: center; flex: none; border-radius: 11px; background: var(--app-accent-surface); color: var(--app-primary); }
.lesson-filter-icon { width: 42px; height: 42px; }
.lesson-filter-heading > div { flex: 1; min-width: 0; }
.lesson-filter-heading h2 { margin: 0; color: var(--app-text); font-size: 1.1rem; font-weight: 700; }
.lesson-filter-heading p { margin: 2px 0 0; color: var(--app-muted); font-size: .8rem; }
.lesson-filter-content { padding: 20px 22px 12px !important; }
.lesson-filter-options { display: grid; gap: 9px; }
.lesson-filter-option { display: flex; align-items: center; gap: 12px; width: 100%; min-height: 56px; padding: 8px 12px; border: 1px solid var(--app-border); border-radius: 12px; background: var(--app-surface); color: var(--app-text); text-align: left; font: inherit; font-size: .87rem; font-weight: 600; cursor: pointer; }
.lesson-filter-option:hover { background: var(--app-hover-surface); }
.lesson-filter-option.is-selected { border-color: var(--app-hover-border); background: var(--app-accent-surface); }
.lesson-filter-option-icon { width: 36px; height: 36px; }
.lesson-filter-option > span:nth-child(2) { flex: 1; }
.lesson-filter-option > .v-icon { color: var(--app-muted); }
.lesson-filter-option.is-selected > .v-icon { color: var(--app-primary); }
.lesson-filter-option:focus-visible { outline: 2px solid var(--app-primary); outline-offset: 2px; }
.lesson-filter-all { margin-top: 10px; }
.lesson-filter-actions { justify-content: flex-end; gap: 8px; padding: 14px 22px 18px !important; border-top: 1px solid var(--app-border); }
@media (max-width: 600px) { .lesson-filter-heading { padding: 16px; } .lesson-filter-content { padding: 16px 16px 10px !important; } .lesson-filter-actions { padding: 12px 16px 16px !important; } }
</style>
