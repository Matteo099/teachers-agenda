<template>
    <div v-if="mode === 'list'" class="student-picker">
        <div class="student-picker-toolbar">
            <v-text-field v-model="search" label="Cerca allievo o band" prepend-inner-icon="mdi-magnify"
                variant="outlined" density="compact" hide-details clearable />
            <v-btn v-if="allStudents.length > 1" color="primary" variant="text" size="small" @click="toggle">
                {{ selectAllStudents ? 'Deseleziona tutti' : 'Seleziona tutti' }}
            </v-btn>
        </div>
        <div class="student-picker-count">{{ selectedStudents.length }} selezionati · {{ allStudents.length }} disponibili</div>
        <div v-if="filteredStudents.length" class="student-picker-list">
            <button v-for="student in filteredStudents" :key="student.id" type="button" class="student-picker-item"
                :class="{ 'student-picker-item-selected': selectedStudents.some(item => item.id === student.id) }"
                :aria-pressed="selectedStudents.some(item => item.id === student.id)"
                @click="toggleStudent(student)">
                <span class="student-picker-avatar"><v-icon :icon="student.isBand ? 'mdi-account-music-outline' : 'mdi-account-outline'" size="18" /></span>
                <span class="student-picker-name">{{ student.name }} {{ student.surname }}</span>
                <span v-if="student.isBand" class="student-picker-band">Band</span>
                <span class="student-picker-duration">{{ student.minutesLessonDuration }} min</span>
                <v-icon :icon="selectedStudents.some(item => item.id === student.id) ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle-outline'"
                    :color="selectedStudents.some(item => item.id === student.id) ? 'primary' : 'secondary'" size="22" />
            </button>
        </div>
        <div v-else class="student-picker-empty">{{ allStudents.length ? 'Nessun risultato per la ricerca.' : 'Nessuno studente disponibile per questa scuola.' }}</div>
    </div>
    <v-select v-else v-model="selectedStudents" :items="allStudents" label="Studenti" :item-props="itemProps"
        :return-object="true" multiple no-data-text="Nessuno studente disponibile per questa scuola">
        <template #prepend-item v-if="allStudents.length > 1">
            <v-list-item title="Seleziona tutti" @click="toggle">
                <template #prepend>
                    <v-checkbox-btn color="primary" :indeterminate="selectSomeStudents && !selectAllStudents"
                        :model-value="selectAllStudents" />
                </template>
            </v-list-item>
            <v-divider class="mt-2" />
        </template>
    </v-select>
</template>

<script setup lang="ts">
import type { Student } from '@/models/model';
import { computed, ref } from 'vue';

interface VSelectStudentsProps {
    allStudents: Student[];
    mode?: 'select' | 'list';
}

const props = withDefaults(defineProps<VSelectStudentsProps>(), {
    allStudents: () => [] as Student[],
    mode: 'select'
});
const selectedStudents = defineModel<Student[]>({ default: [] });
const search = ref('');
const filteredStudents = computed(() => props.allStudents.filter(student =>
    `${student.name} ${student.surname}`.toLocaleLowerCase('it').includes((search.value ?? '').trim().toLocaleLowerCase('it'))
));
const selectAllStudents = computed(() => selectedStudents.value.length === props.allStudents.length);
const selectSomeStudents = computed(() => selectedStudents.value.length > 0);

function itemProps(item: Student) {
    return { title: item.name + ' ' + item.surname, id: item.id };
}
function toggle() {
    if (selectAllStudents.value) selectedStudents.value = [];
    else selectedStudents.value = props.allStudents.slice();
}
function toggleStudent(student: Student) {
    const exists = selectedStudents.value.some(item => item.id === student.id);
    selectedStudents.value = exists
        ? selectedStudents.value.filter(item => item.id !== student.id)
        : [...selectedStudents.value, student];
}
</script>

<style scoped>
.student-picker-toolbar { display: flex; align-items: center; gap: 8px; }
.student-picker-toolbar > .v-input { min-width: 0; flex: 1; }
.student-picker-count { padding: 12px 2px 8px; color: var(--app-muted); font-size: .78rem; }
.student-picker-list { display: grid; gap: 7px; max-height: 380px; overflow-y: auto; padding: 2px; }
.student-picker-item { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 58px; padding: 9px 11px; border: 1px solid var(--app-border); border-radius: 11px; background: var(--app-surface); text-align: left; cursor: pointer; }
.student-picker-item:hover, .student-picker-item-selected { border-color: var(--app-hover-border); background: var(--app-accent-surface); }
.student-picker-avatar { display: grid; place-items: center; width: 34px; height: 34px; flex: none; border-radius: 10px; background: var(--app-accent-surface); color: var(--app-primary); }
.student-picker-name { flex: 1; min-width: 0; overflow: hidden; color: var(--app-text); font-size: .86rem; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
.student-picker-band { color: var(--app-primary); font-size: .7rem; font-weight: 700; }
.student-picker-duration { color: var(--app-muted); font-size: .76rem; white-space: nowrap; }
.student-picker-empty { padding: 24px 12px; border: 1px dashed var(--app-border); border-radius: 11px; color: var(--app-muted); font-size: .84rem; text-align: center; }
@media (max-width: 600px) { .student-picker-toolbar { flex-wrap: wrap; } .student-picker-toolbar > .v-input { flex-basis: 100%; } .student-picker-duration { display: none; } }
</style>
