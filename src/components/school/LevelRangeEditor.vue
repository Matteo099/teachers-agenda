<template>
    <v-card class="level-range-editor" variant="flat">
        <div class="level-editor-header">
            <span class="school-panel-icon"><v-icon icon="mdi-format-list-numbered" size="24" /></span>
            <div><h2>Livelli e compensi</h2></div>
            <v-btn icon="mdi-close" variant="text" aria-label="Chiudi" @click="emit('close')" />
        </div>

        <v-card-text class="level-editor-body">
            <div class="level-workspace">
                <section class="level-ranges">
                    <div class="level-section-heading"><h3>Fasce orarie</h3><span>{{ levelRanges.length }}</span></div>
                    <div class="level-add-row">
                        <v-number-input v-model="levelRangePrice" label="Compenso orario" prefix="€" :precision="3"
                            :min="0" control-variant="default" variant="outlined" hide-details />
                        <v-btn color="primary" icon="mdi-plus" variant="flat" aria-label="Aggiungi fascia" title="Aggiungi fascia"
                            @click="addLevelRange" />
                    </div>
                    <div v-if="levelRanges.length" class="range-list">
                        <button v-for="range in levelRanges" :key="range.price" type="button" class="range-item"
                            :class="{ 'range-item-active': tab?.price === range.price }" @click="tab = range">
                            <span class="range-icon"><v-icon icon="mdi-cash" size="19" /></span>
                            <span class="range-details"><strong>{{ numberFormat(range.price) }} € / ora</strong><small>{{ range.levels.length }} livelli</small></span>
                            <v-icon icon="mdi-chevron-right" size="18" />
                        </button>
                    </div>
                    <div v-else class="level-empty">Aggiungi la prima fascia per configurare i livelli.</div>
                </section>

                <section class="level-details">
                    <template v-if="tab">
                        <div class="level-details-header">
                            <div><span class="level-kicker">Fascia selezionata</span><h3>{{ numberFormat(tab.price) }} € / ora</h3></div>
                            <v-btn color="error" variant="text" size="small" prepend-icon="mdi-delete-outline"
                                @click="deleteLevelRange">Elimina fascia</v-btn>
                        </div>
                        <div class="level-add-row">
                            <v-text-field v-model="levelName" label="Nome del livello" variant="outlined" hide-details
                                @keyup.enter="addLevelName(tab)" />
                            <v-btn color="primary" variant="tonal" prepend-icon="mdi-plus" @click="addLevelName(tab)">Aggiungi</v-btn>
                        </div>
                        <div v-if="tab.levels.length" class="level-chip-list">
                            <div v-for="item in tab.levels" :key="item" class="level-chip">
                                <span>{{ item }}</span>
                                <v-btn icon="mdi-close" size="x-small" variant="text" :aria-label="'Rimuovi livello ' + item"
                                    @click="deleteItem(tab, item)" />
                            </div>
                        </div>
                        <div v-else class="level-empty">Questa fascia non ha ancora livelli.</div>
                    </template>
                    <div v-else class="level-placeholder"><v-icon icon="mdi-format-list-bulleted" size="32" /><h3>Seleziona una fascia</h3></div>
                </section>
            </div>
        </v-card-text>

        <v-card-actions class="level-editor-actions">
            <v-spacer />
            <v-btn text="Annulla" variant="text" @click="emit('close')" />
            <v-btn color="primary" text="Salva livelli" variant="flat" @click="emit('save', levelRanges)" />
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { LevelRange } from '@/models/model';
import { numberFormat } from '@/models/utils';
import { onMounted, ref, watch, type Ref } from 'vue';

const props = defineProps<{ initialLevelRanges?: LevelRange[] }>()
const emit = defineEmits(['close', 'save'])

const levelRangePrice = ref(0);
const levelName = ref("");
const tab: Ref<LevelRange | undefined> = ref()
const levelRanges: Ref<LevelRange[]> = ref([])

watch(() => props.initialLevelRanges, () => updateLevelRanges())

function updateLevelRanges() {
    if (props.initialLevelRanges) {
        levelRanges.value = JSON.parse(JSON.stringify(props.initialLevelRanges));
        if (levelRanges.value.length > 0) tab.value = levelRanges.value[0];
    }
}

function deleteItem(levelRange: LevelRange, item: string) {
    const editedIndex = levelRange.levels.indexOf(item)
    levelRange.levels.splice(editedIndex, 1)
}

function deleteLevelRange() {
    const lr = tab.value;
    if (lr) {
        const index = levelRanges.value.findIndex(t => t.price == lr.price)
        levelRanges.value.splice(index, 1);
        tab.value = levelRanges.value[0];
    }
}

function addLevelRange() {
    const price = +levelRangePrice.value;
    if (price == undefined || price == null || isNaN(price) || price == 0) return;
    levelRangePrice.value = 0;
    if (levelRanges.value.findIndex(lr => lr.price == price) != -1) return;
    const levelRange = tab.value = { price, levels: [] };
    levelRanges.value.push(levelRange);
    levelRanges.value.sort((a, b) => a.price - b.price)
}

function addLevelName(levelRange: LevelRange) {
    const name = levelName.value.trim();
    if (name.length == 0) return;
    levelName.value = "";

    if (levelRange.levels.includes(name)) return;
    levelRange.levels.push(name);
}

onMounted(() => updateLevelRanges())
</script>

<style scoped>
.level-range-editor { display: flex; flex-direction: column; max-height: min(850px, 94vh); overflow: hidden; }
.level-editor-header { display: flex; align-items: center; gap: 14px; padding: 20px 24px; border-bottom: 1px solid var(--app-border); }
.level-editor-header > div { flex: 1; min-width: 0; }
.level-editor-header span:not(.school-panel-icon), .level-kicker { color: var(--app-primary); font-size: .75rem; font-weight: 650; }
.level-editor-header h2 { margin: 2px 0; color: var(--app-text); font-size: 1.25rem; font-weight: 700; }
.level-editor-header p, .level-help { margin: 0; color: var(--app-muted); font-size: .84rem; }
.level-editor-body { overflow-y: auto; padding: 24px !important; }
.level-workspace { display: grid; grid-template-columns: minmax(245px, .8fr) minmax(0, 1.2fr); gap: 16px; }
.level-ranges, .level-details { min-height: 340px; padding: 20px; border: 1px solid var(--app-border); border-radius: 14px; background: var(--app-surface); }
.level-section-heading, .level-details-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.level-section-heading h3, .level-details-header h3 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 700; }
.level-section-heading > span { padding: 2px 9px; border-radius: 8px; background: var(--app-accent-surface); color: var(--app-primary); font-size: .8rem; font-weight: 700; }
.level-help { margin: 6px 0 16px; }
.level-add-row { display: flex; align-items: center; gap: 8px; }
.level-add-row > .v-input { min-width: 0; flex: 1; }
.range-list { display: grid; gap: 8px; margin-top: 20px; }
.range-item { width: 100%; display: flex; align-items: center; gap: 10px; padding: 11px; border: 1px solid var(--app-border); border-radius: 11px; background: var(--app-surface); color: var(--app-muted); text-align: left; cursor: pointer; }
.range-item:hover, .range-item-active { border-color: var(--app-hover-border); background: var(--app-accent-surface); }
.range-icon { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 10px; background: var(--app-accent-surface); color: var(--app-primary); }
.range-details { flex: 1; display: grid; gap: 2px; }
.range-details strong { color: var(--app-text); font-size: .88rem; }
.range-details small { color: var(--app-muted); font-size: .75rem; }
.level-details-header { margin-bottom: 16px; }
.level-details-header h3 { margin-top: 4px; font-size: 1.2rem; }
.level-chip-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.level-chip { display: flex; align-items: center; gap: 6px; padding: 4px 5px 4px 12px; border: 1px solid var(--app-hover-border); border-radius: 10px; background: var(--app-accent-surface); color: var(--app-text); font-size: .85rem; font-weight: 600; }
.level-empty { margin-top: 20px; padding: 20px; border: 1px dashed var(--app-border); border-radius: 10px; color: var(--app-muted); font-size: .83rem; text-align: center; }
.level-placeholder { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--app-muted); text-align: center; }
.level-placeholder h3 { margin: 12px 0 4px; color: var(--app-text); font-size: 1rem; }
.level-placeholder p { margin: 0; font-size: .83rem; }
.level-editor-actions { padding: 16px 24px; border-top: 1px solid var(--app-border); background: var(--app-surface); }
@media (max-width: 700px) { .level-workspace { grid-template-columns: 1fr; } .level-ranges, .level-details { min-height: auto; } .level-editor-body { padding: 16px !important; } .level-editor-header { padding: 16px; } .level-editor-header p { display: none; } }
</style>
