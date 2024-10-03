<template>
    <v-card prepend-icon="mdi-school" title="Studente">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-text-field v-model="name" label="Nome" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="surname" label="Cognome" required></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="contact" label="Contatto"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select v-model="lessonDay" :items="days" label="Giorno della Lezione"></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="_schoolId" label="Scuola" required></v-text-field>
                </v-col>
            </v-row>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" variant="plain" @click="emit('close')"></v-btn>

            <v-btn color="primary" :loading="saving" :disabled="saving" :text="edit ? 'Salva Modifiche' : 'Crea'"
                variant="tonal" @click="save"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { days, type Student } from '@/models/model';
import { addDoc, doc, setDoc, Timestamp } from 'firebase/firestore';
import { onMounted, ref, watch, type Ref } from 'vue';

const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const props = defineProps<{ initialStudent?: Student, schoolId?: string, edit?: boolean }>()
const emit = defineEmits(['close', 'save'])

const _schoolId: Ref<string | undefined> = ref();
const name = ref("");
const surname = ref("");
const contact = ref("");
const lessonDay: Ref<string | undefined> = ref();
const level = ref("");
const notes: Ref<string[]> = ref([]);

const saving = ref(false);

watch(() => props.initialStudent, () => updateStudent());
watch(() => props.schoolId, () => updateSchoolId());

function updateStudent() {
    if (props.initialStudent) {
        const studentClone = JSON.parse(JSON.stringify(props.initialStudent)) as Student;
        name.value = studentClone.name;
        surname.value = studentClone.surname ?? "";
        contact.value = studentClone.contact ?? "";
        lessonDay.value = days[studentClone.lessonDay];
        level.value = studentClone.level;
        notes.value = studentClone.notes ?? [];
    }
}

function updateSchoolId() {
    _schoolId.value = props.schoolId
}

async function save() {
    saving.value = true;

    const student: Partial<Student> = {
        schoolId: _schoolId.value,
        name: name.value,
        surname: surname.value,
        contact: contact.value,
        level: level.value,
        notes: notes.value,
        createdAt: props.edit ? props.initialStudent?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
    };
    if (lessonDay.value) student.lessonDay = days.indexOf(lessonDay.value);

    name.value = "";
    surname.value = "";
    contact.value = "";
    level.value = "";
    lessonDay.value = undefined;
    notes.value = [];

    try {
        if (props.edit && props.initialStudent?.id != undefined) {
            const docRef = await setDoc(doc(studentsRef, props.initialStudent.id), student);
            console.log("Document (schools) update with ID: ", student.id, docRef);
        } else {
            const docRef = await addDoc(studentsRef, student);
            console.log("Document (schools) written with ID: ", docRef.id);
        }
        emit('save', student);
    } catch (e) {
        emit('save');
        console.error("Error adding document (schools): ", e);
    } finally {
        saving.value = false;
    }
}

onMounted(() => {
    updateStudent();
    updateSchoolId();
})
</script>