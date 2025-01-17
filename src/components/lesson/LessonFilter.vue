<template>
    <v-card>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-select v-model="selectedFilters" :items="LESSON_FILTERS" return-object :item-props="itemProps"
                        label="Filtri" multiple chips>
                        <template v-slot:chip="{ item }">
                            <v-icon :color="item.props.color">
                                {{ item.props.icon }}
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
import { LESSON_FILTERS, type LessonFilterObj } from '@/models/model';
import { computed, onMounted, ref, type Ref } from 'vue';


const model = defineModel<LessonFilterObj[]>({ default: [] });
const emit = defineEmits(['close']);
const selectedFilters: Ref<LessonFilterObj[]> = ref([]);

const likesAllFruit = computed(() => selectedFilters.value.length === LESSON_FILTERS.length);
const likesSomeFruit = computed(() => selectedFilters.value.length > 0);

function itemProps(item: LessonFilterObj) {
    return {
        title: item.name,
        value: item.type,
        color: item.color,
        icon: item.icon
    }
}

function toggle() {
    if (likesAllFruit.value) {
        selectedFilters.value = []
    } else {
        selectedFilters.value = LESSON_FILTERS.slice()
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