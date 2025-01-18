<template>
    <v-card title="Studenti" elevation="3" :loading="loadingStudents">
        <v-card-text>
            <v-row class="mr-4 mb-1 align-center">
                <v-text-field class="ma-2" prepend-inner-icon="mdi-magnify" density="comfortable"
                    placeholder="Ricerca..." theme="light" variant="solo" hide-details></v-text-field>

                <v-dialog v-model="dialog" fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn prepend-icon="mdi-plus" color="success" v-bind="activatorProps">nuovo studente</v-btn>
                    </template>

                    <StudentEditor :school="school" @close="dialog = false" @save="onSaveStudent($event)">
                    </StudentEditor>
                </v-dialog>
            </v-row>
            <v-data-table :headers="studentHeaders" :items="students" item-value="id">
                <template v-slot:item.lessonDay="{ item }">
                    {{ item.lessonDay ? days[item.lessonDay] : "" }}
                </template>
                <template v-slot:item.trial="{ item }">
                    {{ getTrialLesson(item) }}
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-dialog fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-icon class="me-2" size="small" v-bind="activatorProps">
                                mdi-pencil
                            </v-icon>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <StudentEditor edit :school="school" :initialStudent="item" @close="isActive.value = false"
                                @save="isActive.value = false">
                            </StudentEditor>
                        </template>
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
import DeleteDialog from '@/components/DeleteDialog.vue';
import StudentEditor from '@/components/student/StudentEditor.vue';
import { days, yyyyMMdd, type School, type Student } from '@/models/model';
import { StudentRepository } from '@/models/repositories/student-repository';
import { StudentService } from '@/models/services/student-service';
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

interface StudentViewProps {
    school: School
}

const props = defineProps<StudentViewProps>();
const subscriptions: EventSubscription[] = [];

const students: Ref<Student[]> = ref([]);
const loadingStudents = ref(false);
const dialog = ref(false);
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
    { title: 'Lezione di prova', key: 'trial' },
    { title: 'Operazioni', key: 'actions', sortable: false },
];

function getTrialLesson(student: Student) {
    if (student.trial?.done) {
        return student.trial.dailyLessonDate ? yyyyMMdd.fromIyyyyMMdd(student.trial.dailyLessonDate).format() : "Fatta";
    } else {
        return "";
    }
}

function onSaveStudent(student?: Student) {
    if (student)
        dialog.value = false;
}

async function deleteStudent(student?: Student): Promise<boolean> {
    if (!student) return false;

    try {
        await StudentRepository.instance.delete(student.id)
        return true;
    } catch (error) {
        return false;
    }
}

async function loadStudents() {
    loadingStudents.value = true;
    const studentSubscription = StudentService.instance.observeStudentsOfSchool(props.school.id).subscribe({
        next: data => {
            students.value = data;
            loadingStudents.value = false;
        },
        error: _err => loadingStudents.value = false
    })
    subscriptions.push(studentSubscription);
}

onMounted(async () => {
    await loadStudents();
})

onUnmounted(() => {
    subscriptions.forEach(u => u.unsubscribe());
}) 
</script>

<style>
div.v-table__wrapper>table>thead>tr {
    font-weight: bold !important;
}
</style>