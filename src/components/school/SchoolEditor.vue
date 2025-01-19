<template>
    <v-card prepend-icon="mdi-school" title="Scuola">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-text-field v-model="name" v-bind="nameProps" label="Nome" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="city" v-bind="cityProps" label="Città"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="email" v-bind="emailProps" label="Email"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="phoneNumber" v-bind="phoneNumberProps"
                        label="Numero di Telefono"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">

                    <v-dialog v-model="dialogColor">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-text-field label="Colore" v-bind="activatorProps" :bg-color="color"
                                v-model="color"></v-text-field>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="mx-auto" max-width="400" rounded="lg" border>
                                <v-card-text>
                                    <v-color-picker v-model="color" elevation="0"></v-color-picker>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn @click="isActive.value = false">Chiudi</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>

                    </v-dialog>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select v-model="salaryStrategy" v-bind="salaryStrategyProps" :items="salaryStrategys"
                        item-title="value" item-value="key" label="Opzione di Pagamento" required></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <v-select v-model="trialLessonPaymentStrategy" v-bind="trialLessonPaymentStrategyProps"
                        :items="trialLessonPaymentStrategies" item-title="value" item-value="key"
                        label="Opzione di pagamento della Lezione di Prova" required></v-select>
                </v-col>

                <v-col cols="12" md="12">
                    <v-row justify-center>
                        <v-col class="align-self-center">
                            <v-checkbox v-model="managed" v-bind="managedProps" label="Gestione"></v-checkbox>
                        </v-col>
                        <v-col class="align-self-center">
                            <v-dialog v-if="managed" v-model="dialogManager" fullscreen>
                                <template v-slot:activator="{ props: activatorProps }">
                                    <div class="v-input--center-affix v-input--error">
                                        <v-btn text="Gestione" v-bind="activatorProps"></v-btn>
                                        <div class="v-input__details">
                                            <div class="v-messages__message v-messages" role="alert">
                                                <span>{{ managerOptionsProps['error-messages']?.[0] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <ManagerEditor :initialManagerOptions="managerOptions" @close="dialogManager = false"
                                    @save="saveManagerOptions($event)">
                                </ManagerEditor>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- <v-divider class="my-5"></v-divider> -->

                <v-col cols="12" md="6">
                    <v-dialog v-model="dialogLevels" fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <div class="v-input--center-affix v-input--error">
                                <v-btn text="Gestisci Livelli" v-bind="activatorProps"></v-btn>
                                <div class="v-input__details">
                                    <div class="v-messages__message v-messages" role="alert">
                                        <span>{{ levelRangesProps['error-messages']?.[0] }}</span>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <LevelRangeEditor :initialLevelRanges="levelRanges" @close="dialogLevels = false"
                            @save="saveLevelRanges($event)"></LevelRangeEditor>

                    </v-dialog>
                </v-col>
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
import { SalaryStrategy, TrialLessonPaymentStrategy, type LevelRange, type ManagerOptions, type School } from '@/models/model';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { Timestamp } from 'firebase/firestore';
import { useForm, type GenericObject } from 'vee-validate';
import { onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';
import LevelRangeEditor from './LevelRangeEditor.vue';
import ManagerEditor from './ManagerEditor.vue';
import { DEFAULT_SCHOOL_COLOR } from '@/models/constants';

const props = defineProps<{ initialSchool?: School, edit?: boolean }>()
const emit = defineEmits(['close', 'save'])

const dialogLevels = ref(false)
const dialogManager = ref(false)
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
    managerOptions: yup.object().test({
        test: (v: any | ManagerOptions) => {
            if (managed.value)
                return v !== undefined;
            return true;
        },
        message: 'Configurare la Gestione della Scuola correttamente',
        exclusive: false,
        name: 'managedProp'
    }).label('Opzioni Gestione'),
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
const [salaryStrategy, salaryStrategyProps] = defineField('salaryStrategy', vuetifyConfig);
const [trialLessonPaymentStrategy, trialLessonPaymentStrategyProps] = defineField('trialLessonPaymentStrategy', vuetifyConfig);
const [managerOptions, managerOptionsProps] = defineField('managerOptions', vuetifyConfig);
const [levelRanges, levelRangesProps] = defineField('levelRanges', vuetifyConfig);

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
        managerOptions.value = schoolClone.managerOptions;
        levelRanges.value = schoolClone.levelRanges;
    }
}

function saveManagerOptions(mo: ManagerOptions) {
    console.log(mo, JSON.stringify(mo));
    managerOptions.value = mo;
    dialogManager.value = false
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
        levelRanges: values.levelRanges,
        createdAt: props.edit ? props.initialSchool?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now()
    };
    if (values.city) school.city = values.city;
    if (values.email) school.email = values.email;
    if (values.phoneNumber) school.phoneNumber = values.phoneNumber;
    if (values.color && values.color.trim().length != 0) school.color = values.color;
    if (managed.value) school.managerOptions = managerOptions.value;

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