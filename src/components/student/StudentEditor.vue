<template>
    <v-card prepend-icon="mdi-school" :title="`Studente (${school.name})`">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-text-field id="std_name" :disabled="isDisabled('name')" :focused="isFocussed('name')"
                        v-model="name" v-bind="nameProps" label="Nome"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field id="std_surname" :disabled="isDisabled('surname')" :focused="isFocussed('surname')"
                        v-model="surname" v-bind="surnameProps" label="Cognome"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field id="std_contact" :disabled="isDisabled('contact')" :focused="isFocussed('contact')"
                        v-model="contact" v-bind="contactProps" label="Contatto"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select id="std_level" :disabled="isDisabled('level')" :focused="isFocussed('level')"
                        v-model="level" v-bind="levelProps" :items="_levels" label="Livello"></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select id="std_lessonDay" :disabled="isDisabled('lessonDay')" :focused="isFocussed('lessonDay')"
                        v-model="lessonDay" v-bind="lessonDayProps" :items="days" label="Giorno della Lezione"
                        clearable></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-number-input id="std_minutesLessonDuration" :disabled="isDisabled('minutesLessonDuration')"
                        :focused="isFocussed('minutesLessonDuration')" v-model="minutesLessonDuration"
                        v-bind="minutesLessonDurationProps" :reverse="false" controlVariant="default"
                        label="Durata della Lezione" suffix="min" :hideInput="false" :inset="false" :min="1">
                    </v-number-input>
                </v-col>

                <v-col cols="12" md="6">
                    <v-switch :label="trialLabel" v-model="trial" v-bind="trialProps" color="primary"
                        hide-details></v-switch>
                </v-col>

                <v-col cols="12" md="6">
                    <v-switch label="Supplenza" v-model="isSubstitution" v-bind="isSubstitutionProps" color="primary"
                        hide-details></v-switch>
                </v-col>

                <v-col cols="12" md="12">
                    <v-textarea id="std_note" :disabled="isDisabled('note')" :focused="isFocussed('note')"
                        v-model="note" v-bind="noteProps" label="Note" counter></v-textarea>
                </v-col>
            </v-row>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Random" variant="plain" @click="randomData" v-if="development"></v-btn>
            <v-btn text="Chiudi" variant="plain" @click="emit('close')"></v-btn>
            <v-btn color="primary" :loading="saving" :disabled="saving" :text="edit ? 'Salva Modifiche' : 'Crea'"
                variant="tonal" @click="onSave"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, yyyyMMdd, type School, type Student } from '@/models/model';
import { development, Random } from '@/models/random-utils';
import { StudentRepository } from '@/models/repositories/student-repository';
import { Timestamp } from 'firebase/firestore';
import { useForm, type GenericObject } from 'vee-validate';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

type StudentEditorField = "name" | "surname" | "contact" | "lessonDay" | "level" | "minutesLessonDuration" | "note";
interface StudentEditorProps {
    school: School;
    initialStudent?: Student;
    edit?: boolean;
    focus?: StudentEditorField;
    disableFields?: StudentEditorField[];
}

const props = defineProps<StudentEditorProps>()
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
    trial: yup.boolean().label('Lezione di Prova'),
    isSubstitution: yup.boolean().label('Supplenza'),
    note: yup.string().label('Note'),
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
const [trial, trialProps] = defineField('trial', vuetifyConfig);
const [isSubstitution, isSubstitutionProps] = defineField('isSubstitution', vuetifyConfig);
const [note, noteProps] = defineField('note', vuetifyConfig);

const trialLabel = computed(() => {
    return trial.value ? (props.initialStudent?.trial?.dailyLessonDate ?
        `Lezione di prova: fatta in data ${yyyyMMdd.fromIyyyyMMdd(props.initialStudent?.trial?.dailyLessonDate).format()}` :
        'Lezione di prova: fatta') :
        'Lezione di prova: da fare';
})

const onSave = handleSubmit(
    async (values: GenericObject) => {
        save(values);
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

function isDisabled(fieldName: StudentEditorField) {
    return props.disableFields?.includes(fieldName);
}

function isFocussed(fieldName: StudentEditorField) {
    return props.focus == fieldName;
}

function updateStudent() {
    if (props.initialStudent) {
        const studentClone = JSON.parse(JSON.stringify(props.initialStudent)) as Student;
        name.value = studentClone.name;
        surname.value = studentClone.surname;
        level.value = studentClone.level;
        minutesLessonDuration.value = studentClone.minutesLessonDuration;
        contact.value = studentClone.contact ?? "";
        note.value = studentClone.note?.text ?? "";
        trial.value = studentClone.trial?.done ?? false;
        isSubstitution.value = studentClone.isSubstitution ?? false;
        if (studentClone.lessonDay) lessonDay.value = days[studentClone.lessonDay];
    }
}

function updateSchool() {
    _school.value = props.school
    _levels.value = _school.value.levelRanges.flatMap(l => l.levels);
}

function randomData() {
    name.value = Random.word();
    surname.value = Random.word();
    level.value = Random.item(_levels.value);
    lessonDay.value = Random.item(days);
    isSubstitution.value = Random.bool();
    trial.value = Random.bool();
    minutesLessonDuration.value = Random.int(30, 150);
    contact.value = Random.word();
    note.value = Random.text();
}

async function save(values: GenericObject) {
    saving.value = true;

    const student: Partial<Student> = {
        name: values.name,
        surname: values.surname,
        schoolId: _school.value!.id,
        createdAt: props.edit ? props.initialStudent!.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
        minutesLessonDuration: values.minutesLessonDuration,
        isSubstitution: values.isSubstitution,
        level: values.level
    }

    if (contact.value && contact.value.trim().length != 0) student.contact = contact.value.trim();
    if (lessonDay.value) student.lessonDay = days.indexOf(lessonDay.value);
    if (note.value && note.value.trim().length != 0) student.note = { text: note.value.trim(), updatedAt: Timestamp.now() };
    else delete student.note;
    if (trial.value) {
        student.trial = { done: true }
        if (props.initialStudent?.trial?.dailyLessonDate) student.trial.dailyLessonDate = props.initialStudent?.trial?.dailyLessonDate;
        if (props.initialStudent?.trial?.dailyLessonId) student.trial.dailyLessonId = props.initialStudent?.trial?.dailyLessonId;
    } else delete student.trial;

    try {
        if (props.edit && props.initialStudent?.id != undefined) {
            await StudentRepository.instance.save(student, props.initialStudent.id);
            toast.success("Studente Aggiornato")
        } else {
            await StudentRepository.instance.save(student);
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

function scrollToFocus() {
    if (!props.focus) return;

    const el = document.getElementById("std_" + props.focus);
    el?.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

onMounted(() => {
    scrollToFocus();
    updateStudent();
    updateSchool();
})
</script>