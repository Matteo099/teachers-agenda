<template>
    <v-card class="student-filter mx-auto" min-width="300px" variant="flat">
        <div class="filter-heading"><div class="filter-icon"><v-icon icon="mdi-filter-variant" size="20" /></div><div><h3>Filtra studenti</h3></div></div>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-select v-model="selectedFilters" :items="STUDENT_FILTERS" return-object :item-props="itemProps"
                        label="Tipologia studente" variant="outlined" multiple chips>
                        <template v-slot:chip="{ item }">
                            <v-icon :color="item.color">
                                {{ item.icon }}
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
            <v-btn @click="reset" variant="text">Ripristina</v-btn>
            <v-btn @click="apply" color="primary" variant="flat">Applica filtri</v-btn>
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

<style scoped>
.student-filter { padding: 8px; }
.filter-heading { display: flex; align-items: center; gap: 12px; padding: 16px 16px 4px; }
.filter-icon { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; color: var(--app-primary); background: var(--app-accent-surface); }
.filter-heading h3 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 650; }
.filter-heading p { margin: 0; color: var(--app-muted); font-size: .8rem; }
</style>
