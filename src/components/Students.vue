<template>
    <v-card>
        <!-- <p class="text-h5 text-center mb-6">Studenti della scuola {{ schoolName }}</p> -->

        <v-card-text>
            <v-row class="mr-4 mb-1 align-center">
                <v-text-field class="ma-2" prepend-inner-icon="mdi-magnify" density="comfortable"
                    placeholder="Ricerca..." theme="light" variant="solo" hide-details></v-text-field>
                <v-btn prepend-icon="mdi-plus" color="success" @click="newStudent">nuovo studente</v-btn>
            </v-row>
            <v-data-table :headers="studentHeaders" :items="students" item-value="id">
            </v-data-table>
        </v-card-text>
    </v-card>
</template>


<script setup lang="ts">
import type { Student } from '@/models/model';
import { onMounted, ref, type Ref } from 'vue';

interface StudentsProps {
    schoolName: string
}

const studentHeaders: any = [
    {
        title: 'Nome',
        align: 'start',
        sortable: true,
        key: 'name',
    },
    { title: 'Cognome', key: 'surname' },
    { title: 'Indirizzo', key: 'address' },
    { title: '€ / minuto', key: 'paymentCriteria' }
];
const students: Ref<Student[]> = ref([]);
const props = defineProps<StudentsProps>();

function newStudent() { }
function edit(student: Student) { }
function remove(student: Student) { }

onMounted(() => {
    for (let i = 0; i < 10; i++) {
        students.value.push(
            {
                id: i.toString(),
                name: 'La Fenice',
                surname: "Servigliano",
                level: Math.random().toFixed(2).toString(),
                notes: []
            }
        );
    }
})
</script>

<style>
div.v-table__wrapper>table>thead>tr {
    font-weight: bold !important;
}
</style>