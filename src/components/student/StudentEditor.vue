<template>
    <v-card prepend-icon="mdi-school" :title="`Studente (${school.name})`">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-text-field v-model="name" v-bind="nameProps" label="Nome"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="surname" v-bind="surnameProps" label="Cognome"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="contact" v-bind="contactProps" label="Contatto"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select v-model="level" v-bind="levelProps" :items="_levels" label="Livello"></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select v-model="lessonDay" v-bind="lessonDayProps" :items="days"
                        label="Giorno della Lezione"></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-number-input v-model="minutesLessonDuration" v-bind="minutesLessonDurationProps" :reverse="false"
                        controlVariant="default" label="Durata della Lezione" suffix="min" :hideInput="false"
                        :inset="false" :min="1">
                    </v-number-input>
                </v-col>

                <!-- <v-col cols="12" md="6">
                    <v-text-field v-model="_schoolId" label="Scuola" required></v-text-field>
                </v-col> -->
            </v-row>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" variant="plain" @click="emit('close')"></v-btn>

            <v-btn color="primary" :loading="saving" :disabled="saving" :text="edit ? 'Salva Modifiche' : 'Crea'"
                variant="tonal" @click="onSave"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, type School, type Student } from '@/models/model';
import { StudentRepository } from '@/models/repositories/student-repository';
import { Timestamp } from 'firebase/firestore';
import { useForm, type GenericObject } from 'vee-validate';
import { onMounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

// const studentsRef = useDB<Student>(DatabaseRef.STUDENTS);
const props = defineProps<{ school: School, initialStudent?: Student, edit?: boolean }>()
const emit = defineEmits(['close', 'save'])

const _school: Ref<School | undefined> = ref();
const _levels: Ref<string[]> = ref([]);
const saving = ref(false);

watch(() => props.initialStudent, () => updateStudent());
watch(() => props.school, () => updateSchool());

const schema = yup.object({
    name: yup.string().required('Il Nome è obbligatorio').min(1).label('Nome'),
    surname: yup.string().required('Il Cognome è obbligatorio').min(1).label('Cognome'),
    contact: yup.string().label('Contatto').nullable().optional(),
    lessonDay: yup.string().label('Giono di Lezione').nullable().optional(),
    level: yup.string().required('Il Livello è obbligatorio').label('Livello'),
    minutesLessonDuration: yup.number().required('La Durata della Lezione è obbligatoria').min(1).label('Durata della Lezione'),
    notes: yup.array().of(yup.string()).label('Note'),
})

const { defineField, handleSubmit } = useForm({
    validationSchema: schema
})

const vuetifyConfig = (state: any) => ({
    props: {
        'error-messages': state.errors
    }
})

const [name, nameProps] = defineField('name', vuetifyConfig);
const [surname, surnameProps] = defineField('surname', vuetifyConfig);
const [contact, contactProps] = defineField('contact', vuetifyConfig);
const [lessonDay, lessonDayProps] = defineField('lessonDay', vuetifyConfig);
const [level, levelProps] = defineField('level', vuetifyConfig);
const [minutesLessonDuration, minutesLessonDurationProps] = defineField('minutesLessonDuration', vuetifyConfig);
const [notes, notesProps] = defineField('notes', vuetifyConfig);

const onSave = handleSubmit(
    async (values: GenericObject) => {
        save(values);
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

function updateStudent() {
    if (props.initialStudent) {
        const studentClone = JSON.parse(JSON.stringify(props.initialStudent)) as Student;
        name.value = studentClone.name;
        surname.value = studentClone.surname ?? "";
        contact.value = studentClone.contact ?? "";
        lessonDay.value = days[studentClone.lessonDay];
        level.value = studentClone.level;
        notes.value = studentClone.notes ?? [];
        minutesLessonDuration.value = studentClone.minutesLessonDuration;
    }
}

function updateSchool() {
    _school.value = props.school
    _levels.value = _school.value.levelRanges.flatMap(l => l.levels);
}

async function save(values: GenericObject) {
    saving.value = true;

    const student: Partial<Student> = { ...values }
    student.schoolId = _school.value!.id;
    student.createdAt = props.edit ? props.initialStudent?.createdAt : Timestamp.now();
    student.updatedAt = Timestamp.now();
    if (lessonDay.value) student.lessonDay = days.indexOf(lessonDay.value);

    try {
        if (props.edit && props.initialStudent?.id != undefined) {
            await StudentRepository.instance.update(student, props.initialStudent.id);
            toast.success("Studente Aggiornato")
        } else {
            await StudentRepository.instance.create(student);
            toast.success("Studente Creato")
        }
        emit('save', student);
    } catch (e) {
        emit('save');
        toast.error("Errore durante il salvataggio")
        console.error("Error adding document (schools): ", e);
    } finally {
        saving.value = false;
    }
}

onMounted(() => {
    updateStudent();
    updateSchool();
})
</script>