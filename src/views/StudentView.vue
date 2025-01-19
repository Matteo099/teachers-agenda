<template>
    <v-card title="Studenti" elevation="3" :loading="loadingStudents">
        <v-card-text>
            <v-row class="mr-4 mb-1 align-center">
                <v-col cols="12" md="8">
                    <v-text-field class="ma-2" density="compact" label="Ricerca" variant="outlined" hide-details>
                        <template v-slot:append>
                            <v-dialog transition="dialog-bottom-transition">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn icon="mdi-filter" variant="text" v-bind="activatorProps"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <StudentFilter v-model="filters" @close="isActive.value = false"></StudentFilter>
                                </template>
                            </v-dialog>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-dialog v-model="dialog" fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn prepend-icon="mdi-plus" color="success" v-bind="activatorProps">
                                studente
                            </v-btn>
                        </template>

                        <StudentEditor :school="school" @close="dialog = false" @save="onSaveStudent($event)">
                        </StudentEditor>
                    </v-dialog>
                </v-col>
            </v-row>
            <v-data-table :headers="studentHeaders" :items="filteredStudents" item-value="id">
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
import StudentFilter from '@/components/student/StudentFilter.vue';
import { days, STUDENT_FILTERS, yyyyMMdd, type School, type Student, type StudentFilterObj } from '@/models/model';
import { StudentRepository } from '@/models/repositories/student-repository';
import { StudentService } from '@/models/services/student-service';
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue';

interface StudentViewProps {
    school: School
}

const props = defineProps<StudentViewProps>();
const subscriptions: EventSubscription[] = [];

const students: Ref<Student[]> = ref([]);
const filteredStudents: Ref<Student[]> = ref([]);
const loadingStudents = ref(false);
const dialog = ref(false);
const studentHeaders: any = [
    { title: 'Nome', key: 'name', align: 'start' },
    { title: 'Cognome', key: 'surname' },
    { title: 'Giorno della Lezione', key: 'lessonDay' },
    { title: 'Operazioni', key: 'actions', sortable: false },
    { title: 'Contatto', key: 'contact' },
    { title: 'Lezione di prova', key: 'trial' },
];
const filters: Ref<StudentFilterObj[]> = ref(STUDENT_FILTERS);

watch(filters, filterStudent);


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
            filterStudent();
            loadingStudents.value = false;
        },
        error: _err => loadingStudents.value = false
    })
    subscriptions.push(studentSubscription);
}

function filterStudent() {
    filteredStudents.value = students.value.filter(s => {
        if(filters.value.length == 2) return true;
        if (filters.value.map(f => f.type).includes("substistution"))
            return !!s.isSubstitution;
        if (filters.value.map(f => f.type).includes("normal"))
            return !s.isSubstitution;
    });
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