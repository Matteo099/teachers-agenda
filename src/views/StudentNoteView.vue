<template>
    <v-card title="Note" elevation="3" :loading="loadingNotes">
        <v-card-text>
            <v-expansion-panels v-if="studentsNote.length != 0">
                <v-expansion-panel v-for="student in studentsNote" :key="student.id">
                    <v-expansion-panel-title>
                        <template v-slot:default> <!--="{ expanded }"-->
                            <v-row class="justify-between">
                                <v-col>
                                    <span>
                                        {{ student.name }} {{ student.surname }}
                                    </span>
                                </v-col>
                                <v-col class="text-grey" cols="auto">
                                    <span class="d-inline-block text-truncate" style="max-width: 120px;">
                                        {{ student.note!.text }}
                                    </span>
                                </v-col>
                            </v-row>
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row>
                            <v-col>
                                {{ student.note!.text }}
                            </v-col>
                        </v-row>
                        <v-row class="justify-end align-center">

                            <v-col cols="auto">
                                <span class="font-weight-bold text-caption">Aggiornata il {{
                                    timestampFormat(toDate(student.note!.updatedAt)) }}</span>
                            </v-col>
                            <v-col cols="auto">
                                <v-dialog fullscreen>
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-icon class="me-2" size="small" v-bind="activatorProps">
                                            mdi-pencil
                                        </v-icon>
                                    </template>

                                    <template v-slot:default="{ isActive }">
                                        <StudentEditor edit :school="school" :initialStudent="student" focus="note"
                                            :disableFields="['name', 'surname', 'contact', 'lessonDay', 'level', 'minutesLessonDuration']"
                                            @close="isActive.value = false" @save="isActive.value = false">
                                        </StudentEditor>
                                    </template>
                                </v-dialog>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <p v-else>
                Nessuna nota presente
            </p>
        </v-card-text>
    </v-card>
</template>


<script setup lang="ts">
import StudentEditor from '@/components/student/StudentEditor.vue';
import { type School, type Student } from '@/models/model';
import { StudentService } from '@/models/services/student-service';
import { timestampFormat, toDate } from '@/models/utils';
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

interface StudentNoteViewProps {
    school: School
}

const props = defineProps<StudentNoteViewProps>();
const subscriptions: EventSubscription[] = [];

const studentsNote: Ref<Student[]> = ref([]);
const loadingNotes = ref(false);

async function loadStudents() {
    loadingNotes.value = true;
    const studentSubscription = StudentService.instance.observeStudentsOfSchool(props.school.id).subscribe({
        next: data => {
            studentsNote.value = data.filter(s => !!s.note);
            loadingNotes.value = false;
        },
        error: _err => {
            loadingNotes.value = false
            console.error(_err);
        }
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