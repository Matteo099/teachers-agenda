<template>
    <v-card class="mx-auto" min-width="300px">
        <v-card-text>
            <v-row>
                <v-col>
                    <v-select v-model="selectedFilters" :items="STUDENT_FILTERS" return-object :item-props="itemProps"
                        label="Filtri" multiple chips>
                        <template v-slot:chip="{ item }">
                            <v-icon :color="item.props.color">
                                {{ item.props.icon }}
                            </v-icon>
                        </template>
                        <template v-slot:prepend-item>
                            <v-list-item title="Seleziona Tutti" @click="toggle">
                                <template v-slot:prepend>
                                    <v-checkbox-btn :color="someStudents ? 'indigo-darken-4' : undefined"
                                        :indeterminate="someStudents && !allStudents"
                                        :model-value="allStudents"></v-checkbox-btn>
                                </template>
                            </v-list-item>

                            <v-divider class="mt-2"></v-divider>
                        </template>
                    </v-select>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="reset">Reset</v-btn>
            <v-btn @click="apply" color="primary">Applica</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { STUDENT_FILTERS, type StudentFilterObj } from '@/models/model';
import { computed, onMounted, ref, type Ref } from 'vue';

const model = defineModel<StudentFilterObj[]>({ default: [] });
const emit = defineEmits(['close']);
const selectedFilters: Ref<StudentFilterObj[]> = ref([]);

const allStudents = computed(() => selectedFilters.value.length === STUDENT_FILTERS.length);
const someStudents = computed(() => selectedFilters.value.length > 0);

function itemProps(item: StudentFilterObj) {
    return {
        title: item.name,
        value: item.type,
        color: item.color,
        icon: item.icon
    }
}

function toggle() {
    if (allStudents.value) {
        selectedFilters.value = []
    } else {
        selectedFilters.value = STUDENT_FILTERS.slice()
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