<template>
    <v-card prepend-icon="mdi-format-list-numbered" title="Livelli">
        <v-card-text>
            <v-row class="my-3 mb-10 justify-center">
                <v-col class="px-2" cols="12" md="4">
                    <v-number-input max-width="500" v-model="levelRangePrice" :reverse="false" controlVariant="default"
                        label="Fascia di Prezzo" prefix="€" :hideInput="false" :inset="false" :min="0">
                    </v-number-input>
                </v-col>
                <v-col class="px-2" cols="12" md="1">
                    <v-btn @click="addLevelRange" icon="mdi-plus" color="success"></v-btn>
                    <v-btn @click="deleteLevelRange" icon="mdi-minus" color="error"></v-btn>
                </v-col>
            </v-row>

            <v-card class="mx-5 mt-5 pa-2" v-if="tab" elevation="3">
                <v-tabs v-model="tab" class="my-2" align-tabs="center" color="primary" show-arrows>
                    <v-tab v-for="i in levelRanges" :key="i.price" :text="i.price + ' €'" :value="i"></v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item class="mx-5 my-5" v-for="levelRange in levelRanges" :key="levelRange.price"
                        :value="levelRange">
                        <v-text-field v-model="levelName" label="Nome Livello" append-icon="mdi-plus" type="text"
                            @click:append="addLevelName(levelRange)"></v-text-field>
                        <v-list :items="levelRange.levels">
                            <template v-slot:append="{ item }">
                                <v-icon size="small" @click="deleteItem(levelRange, item)">
                                    mdi-delete
                                </v-icon>
                            </template>
                        </v-list>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Annulla" variant="plain" @click="emit('close')"></v-btn>

            <v-btn color="primary" text="Salva Livelli" variant="tonal" @click="emit('save', levelRanges)"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { LevelRange } from '@/models/model';
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