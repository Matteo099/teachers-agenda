<template>
    <v-card class="student-editor" variant="flat">
        <div class="editor-header">
            <div class="editor-header-icon"><v-icon icon="mdi-account-school-outline" size="26" /></div>
            <div class="editor-heading"><div class="editor-eyebrow">{{ school.name }}</div><h2>{{ edit ? 'Modifica studente' : 'Nuovo studente' }}</h2><p>Informazioni e organizzazione delle lezioni</p></div>
            <v-btn icon="mdi-close" variant="text" aria-label="Chiudi" @click="emit('close')" />
        </div>
        <v-card-text class="editor-content">
            <section class="editor-section">
                <div class="section-heading"><div class="section-icon"><v-icon icon="mdi-account-outline" size="20" /></div><div><h3>Dati personali</h3><p>Nome e recapito dello studente</p></div></div>
                <v-row density="comfortable">
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

                </v-row>
            </section>
            <section class="editor-section">
                <div class="section-heading"><div class="section-icon"><v-icon icon="mdi-calendar-clock-outline" size="20" /></div><div><h3>Lezioni</h3><p>Livello, orario e tipologia</p></div></div>
                <v-row density="comfortable">
                <v-col cols="12" md="6">
                    <v-select id="std_level" :disabled="isDisabled('level')" :focused="isFocussed('level')"
                        v-model="level" v-bind="levelProps" :items="_levels" label="Livello">
                        <template v-slot:append>
                            <v-fab-transition>
                                <v-btn v-if="levelHistoryVisible" icon="mdi-chevron-up"
                                    @click="toggleLevelHistory"></v-btn>
                                <v-btn v-else icon="mdi-chevron-down" @click="toggleLevelHistory"></v-btn>
                            </v-fab-transition>
                        </template>
                    </v-select>
                </v-col>

                <v-expand-transition mode="out-in">
                    <v-col style="padding:0px!important" cols="12" md="12" v-if="levelHistoryVisible">
                        <v-row class="mb-4 mx-2 justify-center">
                            <v-col cols="12" md="6">
                                <v-date-input v-model="from" v-bind="fromProps" label="Da" :disabled="!canUpdateDate"
                                    inputmode="none"></v-date-input>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-date-input v-model="to" v-bind="toProps" label="A" :disabled="!canUpdateDate"
                                    hint="Il campo è opzionale" inputmode="none" persistent-hint></v-date-input>
                            </v-col>
                        </v-row>
                        <v-row class="mx-2 my-2" v-if="initialStudent?.levelHistory">
                            <v-col>
                                <v-table density="compact">
                                    <thead>
                                        <tr>
                                            <th class="text-left font-weight-bold">
                                                Livello
                                            </th>
                                            <th class="text-left font-weight-bold">
                                                Da
                                            </th>
                                            <th class="text-left font-weight-bold">
                                                A
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in initialStudent?.levelHistory" :key="item.level">
                                            <td>{{ item.level }}</td>
                                            <td>{{ item.from ? yyyyMMdd.fromIyyyyMMdd(item.from).format() :
                                                dateFormat(toDate(initialStudent?.createdAt)) }}</td>
                                            <td>{{ item.to ? yyyyMMdd.fromIyyyyMMdd(item.to).format() : "In corso" }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-expand-transition>

                <v-col cols="12" md="6">
                    <v-select id="std_lessonDay" :disabled="isDisabled('lessonDay')" :focused="isFocussed('lessonDay')"
                        v-model="lessonDay" v-bind="lessonDayProps" :items="days" label="Giorno della Lezione"
                        clearable></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select id="std_minutesLessonDuration" :disabled="isDisabled('minutesLessonDuration')"
                        :focused="isFocussed('minutesLessonDuration')" v-model="durationOption"
                        :items="durationOptions" label="Durata della Lezione" v-bind="minutesLessonDurationProps">
                    </v-select>
                    <v-dialog v-model="customDurationDialog" max-width="420">
                        <v-card title="Durata personalizzata">
                            <v-card-text>
                                <v-number-input v-model="minutesLessonDuration" label="Minuti"
                                    suffix="min" :min="1" autofocus></v-number-input>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text="Conferma" color="primary" @click="customDurationDialog = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-col>

                <v-col cols="12" md="6">
                    <v-switch :label="trialLabel" v-model="trial" v-bind="trialProps" color="primary"
                        hide-details></v-switch>
                </v-col>

                <v-col cols="12" md="6">
                    <v-switch label="Supplenza" v-model="isSubstitution" v-bind="isSubstitutionProps" color="primary"
                        hide-details></v-switch>
                </v-col>

                </v-row>
            </section>
            <section class="editor-section">
                <div class="section-heading"><div class="section-icon"><v-icon icon="mdi-music-note-outline" size="20" /></div><div><h3>Saggio</h3><p>Brano e autore</p></div></div>
                <v-row density="comfortable">
                <v-col cols="12">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="recitalPiece" label="Brano" />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="recitalAuthor" label="Autore" />
                        </v-col>
                    </v-row>
                </v-col>
                </v-row>
            </section>
            <section v-if="edit && initialStudent?.id" class="editor-section">
                <StudentDailyNotes :school="school" :student="initialStudent" />
            </section>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="editor-actions">
            <v-spacer></v-spacer>

            <v-btn text="Random" variant="plain" @click="randomData" v-if="development"></v-btn>
            <v-btn text="Chiudi" variant="text" @click="emit('close')"></v-btn>
            <v-btn color="primary" :loading="saving" :disabled="saving" :text="edit ? 'Salva Modifiche' : 'Crea'"
                variant="flat" @click="onSave"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, yyyyMMdd, type LevelHistory, type School, type Student } from '@/models/model';
import { development, Random } from '@/models/random-utils';
import { StudentRepository } from '@/models/repositories/student-repository';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import StudentDailyNotes from './StudentDailyNotes.vue';
import { dateFormat, toDate } from '@/models/utils';
import { Timestamp } from 'firebase/firestore';
import { useForm, type GenericObject } from 'vee-validate';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

type StudentEditorField = "name" | "surname" | "contact" | "lessonDay" | "level" | "minutesLessonDuration";
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
const levelHistoryVisible = ref(false);
const customDurationDialog = ref(false);
const durationOptions = ['30', '40', '60', 'altro'];
const durationOption = ref('40');
let initializing = false;

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
    from: yup.date().label('Da').nullable().optional().test({
        test: (value: Date | null | undefined, context: any) => {
            console.log(canUpdateDate.value, value)
            if (canUpdateDate.value && !!value) return true;
            return false;
        },
        message: 'La data di inizio è obbligatoria',
        exclusive: false,
        skipAbsent: true,
        name: 'conditionalFrom'
    }),
    to: yup.date().label('A'),
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
const [recitalPiece] = defineField('recitalPiece', vuetifyConfig);
const [recitalAuthor] = defineField('recitalAuthor', vuetifyConfig);
const [from, fromProps] = defineField('from', vuetifyConfig);
const [to, toProps] = defineField('to', vuetifyConfig);

watch(durationOption, (option) => {
    if (option === 'altro') {
        if (!initializing) customDurationDialog.value = true;
        return;
    }
    minutesLessonDuration.value = Number(option);
});

const trialLabel = computed(() => {
    return trial.value ? (props.initialStudent?.trial?.dailyLessonDate ?
        `Lezione di prova: fatta in data ${yyyyMMdd.fromIyyyyMMdd(props.initialStudent?.trial?.dailyLessonDate).format()}` :
        'Lezione di prova: fatta') :
        'Lezione di prova: da fare';
})
const canUpdateDate = computed(() => level.value != props.initialStudent?.level);
watch(level, updateLevelDateRange)


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

function toggleLevelHistory() {
    levelHistoryVisible.value = !levelHistoryVisible.value;
}

function updateLevelDateRange() {
    if (initializing) {
        initializing = false;
        return;
    }

    if (!levelHistoryVisible.value) toggleLevelHistory();

    if (!from.value) {
        let fromDate = new Date();
        if (props.initialStudent) {
            const levelHistory = props.initialStudent?.levelHistory;
            if (levelHistory && levelHistory.length >= 1)
                fromDate = levelHistory[0]!.to ? yyyyMMdd.fromIyyyyMMdd(levelHistory[0]!.to).toDate() : new Date();
            else fromDate = toDate(props.initialStudent.createdAt);
        }
        from.value = fromDate;
    }
}

function updateStudent() {
    if (props.initialStudent) {
        const studentClone = JSON.parse(JSON.stringify(props.initialStudent)) as Student;
        initializing = true;
        name.value = studentClone.name;
        surname.value = studentClone.surname;
        level.value = studentClone.level;
        minutesLessonDuration.value = studentClone.minutesLessonDuration;
        durationOption.value = [30, 40, 60].includes(studentClone.minutesLessonDuration)
            ? String(studentClone.minutesLessonDuration) : 'altro';
        contact.value = studentClone.contact ?? "";
        recitalPiece.value = studentClone.recitalPiece ?? "";
        recitalAuthor.value = studentClone.recitalAuthor ?? "";
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
}

async function save(values: GenericObject) {
    saving.value = true;

    const levelHistory = computeLevelHistory();

    const student: Partial<Student> = {
        name: values.name,
        surname: values.surname,
        schoolId: _school.value!.id,
        createdAt: props.edit ? props.initialStudent!.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
        minutesLessonDuration: values.minutesLessonDuration,
        isSubstitution: values.isSubstitution ?? false,
        level: values.level,
        levelHistory
    }

    if (contact.value && contact.value.trim().length != 0) student.contact = contact.value.trim();
    if (lessonDay.value) student.lessonDay = days.indexOf(lessonDay.value);
    if (recitalPiece.value?.trim()) student.recitalPiece = recitalPiece.value.trim();
    if (recitalAuthor.value?.trim()) student.recitalAuthor = recitalAuthor.value.trim();
    if (trial.value) {
        student.trial = { done: true }
        if (props.initialStudent?.trial?.dailyLessonDate) student.trial.dailyLessonDate = props.initialStudent?.trial?.dailyLessonDate;
        if (props.initialStudent?.trial?.dailyLessonId) student.trial.dailyLessonId = props.initialStudent?.trial?.dailyLessonId;
    } else delete student.trial;

    try {
        if (props.edit && props.initialStudent?.id != undefined) {
            await StudentRepository.instance.save(student, props.initialStudent.id);
            if (Number(props.initialStudent.minutesLessonDuration) !== Number(values.minutesLessonDuration)) {
                await DailyLessonService.instance.rescheduleStudentDuration(
                    _school.value!.id,
                    props.initialStudent.id,
                    Number(values.minutesLessonDuration)
                );
            }
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

function computeLevelHistory(): LevelHistory[] {
    const levelHistory: LevelHistory[] = props.initialStudent?.levelHistory ?? [];
    if (canUpdateDate.value) {
        if (levelHistory?.[0] && !levelHistory[0].to) {
            levelHistory[0].to = yyyyMMdd.fromDate(from.value).toIyyyyMMdd();
        }
        const history: LevelHistory = {
            level: level.value,
            from: yyyyMMdd.fromDate(from.value).toIyyyyMMdd()
        }
        if (to.value) history.to = yyyyMMdd.fromDate(to.value).toIyyyyMMdd();
        levelHistory.push(history);
        levelHistory.sort((a, b) => {
            if (!a.to && b.to) return -1;  // `a` has no `to`, so it should come first
            if (a.to && !b.to) return 1;   // `b` has no `to`, so it should come first
            // 2. If both have `to`, sort by `to` (ascending order)
            if (a.to && b.to) {
                if (a.to !== b.to) return -a.to.localeCompare(b.to);
                // 3. If `to` values are the same, sort by `from` (descending order)
                if (a.from && b.from) return b.from.localeCompare(a.from);
            }
            return 0;
        });
    }
    return levelHistory;
}

function scrollToFocus() {
    if (!props.focus) return;

    const el = document.getElementById("std_" + props.focus);
    el?.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

onMounted(() => {
    scrollToFocus();
    updateStudent();
    if (!props.initialStudent) minutesLessonDuration.value = 40;
    updateSchool();
})
</script>

<style scoped>
.student-editor { min-height: 100%; background: var(--app-background); }
.editor-header { position: sticky; top: 0; z-index: 3; display: flex; align-items: center; gap: 16px; padding: 18px 32px; background: var(--app-surface); border-bottom: 1px solid var(--app-border); }
.editor-header-icon, .section-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; color: var(--app-primary); background: var(--app-accent-surface); border-radius: 12px; }
.editor-header-icon { width: 48px; height: 48px; }
.editor-heading { flex: 1; min-width: 0; }
.editor-eyebrow { color: var(--app-primary); font-size: .75rem; font-weight: 650; }
.editor-heading h2 { margin: 1px 0; color: var(--app-text); font-size: 1.35rem; font-weight: 700; }
.editor-heading p, .section-heading p { margin: 0; color: var(--app-muted); font-size: .85rem; }
.editor-content { width: min(100%, 960px); margin: 0 auto; padding: 24px !important; }
.editor-section { padding: 24px; margin-bottom: 16px; border: 1px solid var(--app-border); border-radius: 16px; background: var(--app-surface); }
.section-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.section-icon { width: 40px; height: 40px; }
.section-heading h3 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 650; }
.editor-actions { position: sticky; bottom: 0; z-index: 3; gap: 8px; padding: 16px 32px; border-top: 1px solid var(--app-border); background: var(--app-surface); }
@media (max-width: 600px) {
    .editor-header { gap: 10px; padding: 14px 16px; }
    .editor-header-icon { width: 40px; height: 40px; }
    .editor-heading h2 { font-size: 1.1rem; }
    .editor-heading p { display: none; }
    .editor-content { padding: 16px !important; }
    .editor-section { padding: 18px 16px; }
    .editor-actions { padding: 12px 16px; }
}
</style>
