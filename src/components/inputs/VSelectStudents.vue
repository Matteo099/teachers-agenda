<template>
    <v-select v-model="selectedStudents" :items="allStudents" label="Studenti" :item-props="itemProps"
        :return-object="true" multiple no-data-text="Nessuno studente disponibile per questa scuola">
        <!-- <template v-slot:item="{ item }">
                <v-list-item :value="item.raw" :key="item.raw.id" role="option">
                    <template v-slot:prepend="{ isSelected }">
                        <v-list-item-action start>
                            <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                        </v-list-item-action>
                    </template>

<v-list-item-title>{{ item.raw.name }} {{ item.raw.surname }}</v-list-item-title>
</v-list-item>
</template> -->
        <template v-slot:prepend-item v-if="allStudents.length > 1">
            <v-list-item title="Seleziona tutti" @click="toggle">
                <template v-slot:prepend>
                    <v-checkbox-btn :color="selectSomeStudents ? 'indigo-darken-4' : undefined"
                        :indeterminate="selectSomeStudents && !selectAllStudents"
                        :model-value="selectAllStudents"></v-checkbox-btn>
                </template>
            </v-list-item>

            <v-divider class="mt-2"></v-divider>
        </template>

        <!-- <template v-slot:append-item>
            <v-divider class="mt-2"></v-divider>

            <v-dialog v-model="dialogCreateStudent" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-list-item prepend-icon="mdi-plus" title="Crea Studente" color="success"
                        v-bind="activatorProps">
                    </v-list-item>
                </template>

                <StudentEditor :schoolId="schoolId" @close="dialogCreateStudent = false"
                    @save="dialogCreateStudent = false">
                </StudentEditor>
            </v-dialog>
        </template> -->
    </v-select>
</template>

<script setup lang="ts">
import type { Student } from '@/models/model';
import { computed, ref, type Ref } from 'vue';

interface VSelectStudentsProps {
    allStudents: Student[];
}

const props = withDefaults(defineProps<VSelectStudentsProps>(), { allStudents: () => [] as Student[] });
const selectedStudents = defineModel<Student[]>({ default: [] });

const selectAllStudents = computed(() => {
    return selectedStudents.value.length === props.allStudents.length
});
const selectSomeStudents = computed(() => {
    return selectedStudents.value.length > 0;
});

function itemProps(item: Student) {
    return {
        title: item.name + " " + item.surname,
        id: item.id
    }
}

function toggle() {
    if (selectAllStudents.value) {
        selectedStudents.value = []
    } else {
        selectedStudents.value = props.allStudents.slice();
    }
}
</script>