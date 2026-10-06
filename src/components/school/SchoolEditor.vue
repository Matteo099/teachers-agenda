<template>
    <v-card class="school-editor" variant="flat">
        <div class="editor-page-header"><span class="school-panel-icon"><v-icon icon="mdi-school-outline" size="24" /></span><div><span>Scuole</span><h2>{{ edit ? 'Modifica scuola' : 'Nuova scuola' }}</h2></div><v-btn icon="mdi-close" variant="text" aria-label="Chiudi" @click="emit('close')" /></div>
        <v-card-text class="editor-page-content school-form-content">
            <div class="school-form-intro"><h3>Dettagli della scuola</h3><p>Completa i dati principali, organizza i livelli e configura il compenso delle lezioni.</p></div>
            <div class="school-form-layout"><div class="school-form-main">
            <section class="editor-page-section">
            <div class="form-section-heading"><span class="form-step">1</span><div><h3>Informazioni e contatti</h3><p>Dati visibili nell'anagrafica della scuola</p></div></div>
            <v-row density="comfortable">
                <v-col cols="12" md="6">
                    <v-text-field v-model="name" v-bind="nameProps" label="Nome della scuola" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="city" v-bind="cityProps" label="Città" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="email" v-bind="emailProps" label="Email" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="phoneNumber" v-bind="phoneNumberProps"
                        label="Numero di telefono" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">

                    <v-dialog v-model="dialogColor">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn class="school-color-trigger" variant="outlined" v-bind="activatorProps">
                                <span class="school-color-swatch" :style="{ backgroundColor: color || DEFAULT_SCHOOL_COLOR }"></span>
                                <span><strong>Colore scuola</strong><small>{{ color || DEFAULT_SCHOOL_COLOR }}</small></span>
                                <v-icon icon="mdi-chevron-right" size="18" />
                            </v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="mx-auto" max-width="400" variant="flat">
                                <v-card-text>
                                    <v-color-picker v-model="color" elevation="0"></v-color-picker>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="primary" variant="flat" @click="isActive.value = false">Conferma</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>

                    </v-dialog>
                </v-col>

            </v-row>
            </section>
            <section class="editor-page-section">
            <div class="form-section-heading"><span class="form-step">2</span><div><h3>Compensi e rimborsi</h3><p>Regole applicate alle lezioni della scuola</p></div></div>
            <v-row density="comfortable">
                <v-col cols="12" md="6">
                    <v-select v-model="salaryStrategy" v-bind="salaryStrategyProps" :items="salaryStrategys"
                        item-title="value" item-value="key" label="Pagamento lezioni" variant="outlined" required></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select v-model="trialLessonPaymentStrategy" v-bind="trialLessonPaymentStrategyProps"
                        :items="trialLessonPaymentStrategies" item-title="value" item-value="key"
                        label="Pagamento lezione di prova" variant="outlined" required></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-number-input v-model="dailyExpenseReimbursement" v-bind="dailyExpenseReimbursementProps" :min="0" :precision="3"
                        label="Rimborso spese giornaliero" variant="outlined" prefix="€"></v-number-input>
                </v-col>

            </v-row>
            </section>
            <section class="editor-page-section">
            <div class="form-section-heading"><span class="form-step">3</span><div><h3>Funzioni della scuola</h3><p>Attiva le aree che utilizzi</p></div></div>
            <v-row density="comfortable">
                <v-col cols="12" md="12">
                    <v-row justify-center>
                        <v-col class="align-self-center">
                            <v-checkbox v-model="managed" v-bind="managedProps" label="Gestione"></v-checkbox>
                        </v-col>
                        <v-col class="align-self-center">
                            <v-checkbox v-model="ensembleMusic" v-bind="ensembleMusicProps" label="Musica d'insieme"></v-checkbox>
                        </v-col>
                        <v-col v-if="managed" cols="12">
                            <v-alert type="info" variant="tonal" density="comfortable">
                                Puoi configurare quote mensili e movimenti del fondo cassa dalla visualizzazione della scuola.
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
            </section>
            </div>
            <aside class="school-form-side">
                <section class="editor-page-section levels-summary">
                    <div class="form-section-heading"><span class="form-step">4</span><div><h3>Livelli e compensi</h3><p>Fasce orarie e livelli associati</p></div></div>
                    <div v-if="levelRanges?.length" class="levels-summary-list">
                        <div v-for="range in levelRanges" :key="range.price" class="levels-summary-row">
                            <span class="levels-summary-price">{{ numberFormat(range.price) }} € / ora</span>
                            <span class="levels-summary-count">{{ range.levels.length }} livelli</span>
                            <div class="levels-summary-names">{{ range.levels.join(', ') || 'Nessun livello associato' }}</div>
                        </div>
                    </div>
                    <div v-else class="levels-summary-empty"><v-icon icon="mdi-format-list-numbered" size="28" /><p>Nessuna fascia configurata.</p><small>Aggiungi almeno una fascia e i suoi livelli.</small></div>
                    <v-dialog v-model="dialogLevels" max-width="980" scrollable>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn class="levels-summary-button" color="primary" variant="tonal" prepend-icon="mdi-pencil-outline" v-bind="activatorProps">{{ levelRanges?.length ? 'Modifica livelli' : 'Configura livelli' }}</v-btn>
                        </template>
                        <LevelRangeEditor :initialLevelRanges="levelRanges" @close="dialogLevels = false" @save="saveLevelRanges($event)" />
                    </v-dialog>
                    <span v-if="levelRangesProps['error-messages']?.[0]" class="level-editor-error" role="alert">{{ levelRangesProps['error-messages']?.[0] }}</span>
                </section>
            </aside></div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="editor-page-actions">
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" variant="text" @click="emit('close')"></v-btn>

            <v-btn color="primary" :loading="saving" :disabled="saving" :text="edit ? 'Salva Modifiche' : 'Crea'"
                variant="flat" @click="onSave"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { SalaryStrategy, TrialLessonPaymentStrategy, type LevelRange, type School } from '@/models/model';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { Timestamp } from 'firebase/firestore';
import { useForm, type GenericObject } from 'vee-validate';
import { onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';
import LevelRangeEditor from './LevelRangeEditor.vue';
import { DEFAULT_SCHOOL_COLOR } from '@/models/constants';
import { numberFormat } from '@/models/utils';

const props = defineProps<{ initialSchool?: School, edit?: boolean }>()
const emit = defineEmits(['close', 'save'])

const dialogLevels = ref(false)
const dialogColor = ref(false);
const saving = ref(false);
const salaryStrategys = [
    { key: SalaryStrategy.ABSENT_AND_PRESENT, value: "Pagamento automatico" },
    { key: SalaryStrategy.ONLY_PRESENT, value: "Pagamento a presenza" }
];
const trialLessonPaymentStrategies = [
    { key: TrialLessonPaymentStrategy.WHOLE, value: "Prezzo intero" },
    { key: TrialLessonPaymentStrategy.HALF, value: "Metà prezzo" },
    { key: TrialLessonPaymentStrategy.NOTHING, value: "Nessun pagamento" },
]

const schema = yup.object({
    name: yup.string().required('Il Nome è obbligatorio').min(1).label('Nome'),
    city: yup.string().label('Città').nullable().optional(),
    email: yup.string().label('Email').nullable().optional(),
    phoneNumber: yup.string().label('Numero di Telefono').nullable().optional(),
    managed: yup.bool().label('Gestione'),
    salaryStrategy: yup.string().required("L'Opzione di pagamento lezioni è obbligatorio").label('Opzione di Pagamento'),
    trialLessonPaymentStrategy: yup.string().required("L'Opzione di pagamento della lezione di prova è obbligatorio").label('Opzione di pagamento della Lezione di Prova'),
    dailyExpenseReimbursement: yup.number().min(0).nullable().optional(),
    levelRanges: yup.array().of(yup.object()).test({
        test: (v: any | LevelRange[]) => !!v && v.length != 0,
        message: 'I livelli sono obbligatori; configurare correttamente i Livelli',
        exclusive: false,
        name: 'level'
    }).label('Livelli'),
    color: yup.string().label('Color').nullable().optional(),
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
const [city, cityProps] = defineField('city', vuetifyConfig);
const [email, emailProps] = defineField('email', vuetifyConfig);
const [phoneNumber, phoneNumberProps] = defineField('phoneNumber', vuetifyConfig);
const [color] = defineField('color', vuetifyConfig);
const [managed, managedProps] = defineField('managed', vuetifyConfig);
const [ensembleMusic, ensembleMusicProps] = defineField('ensembleMusic', vuetifyConfig);
const [salaryStrategy, salaryStrategyProps] = defineField('salaryStrategy', vuetifyConfig);
const [trialLessonPaymentStrategy, trialLessonPaymentStrategyProps] = defineField('trialLessonPaymentStrategy', vuetifyConfig);
const [managerOptions] = defineField('managerOptions', vuetifyConfig);
const [levelRanges, levelRangesProps] = defineField('levelRanges', vuetifyConfig);
const [dailyExpenseReimbursement, dailyExpenseReimbursementProps] = defineField('dailyExpenseReimbursement', vuetifyConfig);

const onSave = handleSubmit(
    async (values: GenericObject) => {
        save(values);
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)


watch(() => props.initialSchool, () => updateSchool())

function updateSchool() {
    if (props.initialSchool) {
        const schoolClone = JSON.parse(JSON.stringify(props.initialSchool)) as School;
        name.value = schoolClone.name;
        city.value = schoolClone.city ?? "";
        email.value = schoolClone.email ?? "";
        phoneNumber.value = schoolClone.phoneNumber ?? "";
        color.value = schoolClone.color ?? DEFAULT_SCHOOL_COLOR;
        salaryStrategy.value = schoolClone.salaryStrategy;
        trialLessonPaymentStrategy.value = schoolClone.trialLessonPaymentStrategy;
        managed.value = schoolClone.managed;
        ensembleMusic.value = schoolClone.ensembleMusic ?? false;
        managerOptions.value = schoolClone.managerOptions;
        levelRanges.value = schoolClone.levelRanges;
        dailyExpenseReimbursement.value = schoolClone.dailyExpenseReimbursement ?? 0;
    }
}

function saveLevelRanges(lr: LevelRange[]) {
    console.log(lr, JSON.stringify(lr));
    levelRanges.value = lr;
    dialogLevels.value = false;
}

async function save(values: GenericObject) {
    saving.value = true;

    const school: Partial<School> = {
        name: values.name,
        salaryStrategy: values.salaryStrategy,
        trialLessonPaymentStrategy: values.trialLessonPaymentStrategy,
        managed: managed.value ?? false,
        ensembleMusic: ensembleMusic.value ?? false,
        levelRanges: values.levelRanges,
        dailyExpenseReimbursement: Number(values.dailyExpenseReimbursement ?? 0),
        createdAt: props.edit ? props.initialSchool?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now()
    };
    if (values.city) school.city = values.city;
    if (values.email) school.email = values.email;
    if (values.phoneNumber) school.phoneNumber = values.phoneNumber;
    if (values.color && values.color.trim().length != 0) school.color = values.color;
    if (managed.value) school.managerOptions = managerOptions.value ?? { totalStudents: 0, quotePerStudent: 0, cashFund: 0 };

    try {
        if (props.edit && props.initialSchool?.id != undefined) {
            await SchoolRepository.instance.save(school, props.initialSchool.id);
            toast.success("Scuola Aggiornata")
            if (props.initialSchool.salaryStrategy != undefined && props.initialSchool.salaryStrategy != school.salaryStrategy) {
                toast.warning("E' stata aggiornata l'opzione di pagamento, tuttavia TUTTE le lezioni giornaliere create fino ad ora non saranno aggiornate in automatico!", { autoClose: 10000 });
            }
        } else {
            await SchoolRepository.instance.save(school);
            toast.success("Scuola Creata")
        }
        emit('save', school);
    } catch (e) {
        emit('save');
        toast.error("Errore durante il salvataggio")
        console.error("Error adding document (schools): ", e);
    } finally {
        saving.value = false;
    }
}

onMounted(() => updateSchool())
</script>

<style scoped>
.school-form-content { width: min(100%, 1160px); }
.school-form-intro { margin: 4px 0 24px; }
.school-form-intro h3 { margin: 0 0 4px; color: var(--app-text); font-size: 1.2rem; font-weight: 700; }
.school-form-intro p { margin: 0; color: var(--app-muted); font-size: .88rem; }
.school-form-layout { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(300px, .9fr); gap: 16px; align-items: start; }
.school-form-main, .school-form-side { min-width: 0; }
.school-form-side { position: sticky; top: 104px; }
.form-section-heading { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 22px; }
.form-step { display: grid; place-items: center; width: 32px; height: 32px; flex: none; border-radius: 10px; background: var(--app-accent-surface); color: var(--app-primary); font-size: .85rem; font-weight: 700; }
.form-section-heading h3 { margin: 0; color: var(--app-text); font-size: 1rem; font-weight: 700; }
.form-section-heading p { margin: 3px 0 0; color: var(--app-muted); font-size: .8rem; }
.school-color-trigger { display: flex; align-items: center; gap: 12px; min-height: 55px; padding: 8px 12px; border: 1px solid var(--app-border); border-radius: 12px; background: var(--app-surface); cursor: pointer; }
.school-color-trigger:hover { border-color: var(--app-hover-border); background: var(--app-hover-surface); }
.school-color-swatch { width: 32px; height: 32px; flex: none; border: 1px solid var(--app-border); border-radius: 9px; }
.school-color-trigger > span:nth-child(2) { display: grid; flex: 1; }
.school-color-trigger strong { color: var(--app-text); font-size: .82rem; }
.school-color-trigger small { color: var(--app-muted); font-size: .73rem; }
.levels-summary-list { display: grid; gap: 8px; max-height: 330px; overflow-y: auto; margin-bottom: 16px; }
.levels-summary-row { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; padding: 12px; border: 1px solid var(--app-border); border-radius: 11px; background: var(--app-hover-surface); }
.levels-summary-price { color: var(--app-text); font-size: .85rem; font-weight: 700; }
.levels-summary-count { color: var(--app-primary); font-size: .75rem; font-weight: 650; }
.levels-summary-names { width: 100%; overflow: hidden; color: var(--app-muted); font-size: .77rem; text-overflow: ellipsis; white-space: nowrap; }
.levels-summary-empty { display: flex; flex-direction: column; align-items: center; padding: 24px 12px; margin-bottom: 16px; border: 1px dashed var(--app-border); border-radius: 12px; color: var(--app-muted); text-align: center; }
.levels-summary-empty p { margin: 10px 0 2px; color: var(--app-text); font-size: .85rem; font-weight: 650; }
.levels-summary-empty small { font-size: .75rem; }
.levels-summary-button { width: 100%; }
.level-editor-error { display: block; margin-top: 8px; }
@media (max-width: 850px) { .school-form-layout { grid-template-columns: 1fr; } .school-form-side { position: static; } }
</style>
