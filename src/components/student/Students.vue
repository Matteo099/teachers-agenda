<template>
    <v-card elevation="3">
        <v-card-text>
            <v-row class="mr-4 mb-1 align-center">
                <v-text-field class="ma-2" prepend-inner-icon="mdi-magnify" density="comfortable"
                    placeholder="Ricerca..." theme="light" variant="solo" hide-details></v-text-field>

                <v-dialog v-model="dialog" fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn prepend-icon="mdi-plus" color="success" v-bind="activatorProps">nuovo studente</v-btn>
                    </template>

                    <StudentEditor :schoolId="schoolId" @close="dialog = false" @save="onSaveStudent($event)">
                    </StudentEditor>
                </v-dialog>
            </v-row>
            <v-data-table :headers="studentHeaders" :items="students" item-value="id">
                <template v-slot:item.lessonDay="{ item }">
                    {{ days[item.lessonDay] }}
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-dialog v-model="dialog2" fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-icon class="me-2" size="small" v-bind="activatorProps">
                                mdi-pencil
                            </v-icon>
                        </template>

                        <StudentEditor edit :schoolId="schoolId" :initialStudent="item" @close="dialog2 = false"
                            @save="dialog2 = false">
                        </StudentEditor>
                    </v-dialog>
                    <DeleteDialog :name="item.name + ' ' + item.surname" objName="Studente"
                        :onDelete="async () => await deleteStudent(item)">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-icon size="small" v-bind="activatorProps">
                                mdi-delete
                            </v-icon>
                        </template>
                    </DeleteDialog>

                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>


<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { days, type Student } from '@/models/model';
import type { Unsubscribe } from 'firebase/database';
import { deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import StudentEditor from './StudentEditor.vue';
import DeleteDialog from '../DeleteDialog.vue';

interface StudentsProps {
    schoolId: string
}

const props = defineProps<StudentsProps>();
const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const subscriptions: Unsubscribe[] = [];

const students: Ref<Student[]> = ref([]);
const loadingStudents = ref(false);
const dialog = ref(false);
const dialog2 = ref(false);
const studentHeaders: any = [
    {
        title: 'Nome',
        align: 'start',
        sortable: true,
        key: 'name',
    },
    { title: 'Cognome', key: 'surname' },
    { title: 'Contatto', key: 'contact' },

    /// TODO: possibile problema!!! => uno studente può fare una lezione programmata più volte la stessa settimana? 
    // Esempio viene sia il lunedì che il venerdì. In tal caso bisogna gestire un'insieme di giorni e non un singolo giorno 
    { title: 'Giorno della Lezione', key: 'lessonDay' },
    { title: 'Operazioni', key: 'actions', sortable: false },
];

function onSaveStudent(student?: Student) {
    if (student)
        dialog.value = false;
}

async function deleteStudent(student?: Student): Promise<boolean> {
    try {
        await deleteDoc(doc(studentsRef, student?.id));
        return true;
    } catch (error) {
        return false;
    }
}

async function loadStudents() {
    loadingStudents.value = true;
    const uns = onSnapshot(studentsRef, (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data())
        students.value = data;
        loadingStudents.value = false;
        console.log("Current data: ", snapshot, data);
    }, (error) => {
        loadingStudents.value = false;
        console.error(error);
    });
    subscriptions.push(uns);
}

onMounted(async () => {
    await loadStudents();
})

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
}) 
</script>

<style>
div.v-table__wrapper>table>thead>tr {
    font-weight: bold !important;
}
</style>