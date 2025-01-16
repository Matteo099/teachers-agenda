<template>
    <v-card>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-select v-model="selectedFilters" :items="filters" return-object item-title="name" label="Filtri"
                        multiple chips>
                        <template v-slot:chip="{ index, item }">
                            <v-icon :color="filters[index].color">
                                {{ filters[index].icon }}
                            </v-icon>
                        </template>
                        <template v-slot:prepend-item>
                            <v-list-item title="Seleziona Tutti" @click="toggle">
                                <template v-slot:prepend>
                                    <v-checkbox-btn :color="likesSomeFruit ? 'indigo-darken-4' : undefined"
                                        :indeterminate="likesSomeFruit && !likesAllFruit"
                                        :model-value="likesAllFruit"></v-checkbox-btn>
                                </template>
                            </v-list-item>

                            <v-divider class="mt-2"></v-divider>
                        </template>
                    </v-select>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-divider></v-divider>
            <v-btn @click="reset">Reset</v-btn>
            <v-btn @click="apply" color="primary">Applica</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { LessonFilterObj } from '@/models/model';
import { computed, onMounted, ref, type Ref } from 'vue';


const model = defineModel<LessonFilterObj[]>({ default: [] });
const emit = defineEmits(['close']);
const selectedFilters: Ref<LessonFilterObj[]> = ref([]);
const filters: LessonFilterObj[] = [
    { name: "Recuperi", icon: "mdi-abacus", color: "blue" },
    { name: "Spostate", icon: "mdi-account-box", color: "green" },
    { name: "Settimanali", icon: "mdi-ab-testing", color: "purple" },
    { name: "Giornaliere", icon: "mdi-account", color: "yellow" },
]

const likesAllFruit = computed(() => selectedFilters.value.length === filters.length);
const likesSomeFruit = computed(() => selectedFilters.value.length > 0);


function toggle() {
    if (likesAllFruit.value) {
        selectedFilters.value = []
    } else {
        selectedFilters.value = filters.slice()
    }
}

function reset() {
    selectedFilters.value = [...model.value];
}

function apply() {
    model.value = [...selectedFilters.value];
    emit('close');
}

onMounted(() => reset());
</script>