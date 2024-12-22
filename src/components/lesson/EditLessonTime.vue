<template>
    <v-card title="Modifica orario lezione" elevation="2">
        <v-card-text>
            <v-row justify="space-around">
                <v-col cols="11" md="6">
                    <v-checkbox v-model="alignEndTime"
                        label="Allinea la data di fine lezione in base alla durata della lezione definita dallo studente"></v-checkbox>
                </v-col>

                <v-col cols="11" sm="5">
                    <v-text-field v-model="_startTime" :active="startModal" :focus="startModal" label="Data di inizio"
                        v-bind="startTimeProps" prepend-icon="mdi-clock-time-four-outline" readonly>
                        <v-dialog v-model="startModal" activator="parent" width="auto">
                            <v-time-picker v-if="startModal" format="24hr" v-model="_startTime"></v-time-picker>
                        </v-dialog>
                    </v-text-field>
                </v-col>

                <v-col cols="11" sm="5">
                    <v-text-field v-model="_endTime" :active="endModal" :focused="endModal" label="Data di fine"
                        v-bind="endTimeProps" prepend-icon="mdi-clock-time-four-outline" :disabled="alignEndTime"
                        readonly>
                        <v-dialog v-model="endModal" activator="parent" width="auto">
                            <v-time-picker v-if="endModal" format="24hr" v-model="_endTime"></v-time-picker>
                        </v-dialog>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Annulla" variant="plain" @click.stop="emit('close')"></v-btn>

            <v-btn color="primary" text="Modifica" variant="tonal" @click.stop="onSave"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { Time } from '@/models/model';
import { useForm, type GenericObject } from 'vee-validate';
import { ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

interface EditTimeLessonProps {
    startTime?: string | Date;
    endTime?: string | Date;
    minutesOfLesson?: number;
}

const props = withDefaults(defineProps<EditTimeLessonProps>(), {
    minutesOfLesson: 60
});

const emit = defineEmits(['close', 'save'])

const startModal = ref(false);
const endModal = ref(false);
const alignEndTime = ref(true);

const schema = yup.object({
    startTime: yup.string().required(`L'Orario di inizio Lezione è obbligatorio`).label('Orario di inizio Lezione'),
    endTime: yup.string().required(`L'Orario di fine Lezione è obbligatorio`).label('Orario di fine Lezione'),
})

const { defineField, handleSubmit } = useForm({
    validationSchema: schema
})

const vuetifyConfig = (state: any) => ({
    props: {
        'error-messages': state.errors
    }
})

const [_startTime, startTimeProps] = defineField('startTime', vuetifyConfig);
const [_endTime, endTimeProps] = defineField('endTime', vuetifyConfig);

const onSave = handleSubmit(
    async (values: GenericObject) => {
        if ((Time.fromHHMM(_startTime.value)?.getTotalMinutes() ?? 0) > (Time.fromHHMM(_endTime.value)?.getTotalMinutes() ?? 0)) {
            toast.warning("L'orario di inizio lezione deve essere antecedente all'orario di fine lezione");
            return;
        }

        emit('save', { ...values })
    },
    (err) => {
        toast.warn('Ci sono alcuni errori! Inserisci correttamente i dati')
        console.log(err)
    }
)

watch(props, () => updateValues(), { immediate: true })
watch(_startTime, () => updateEndTime())
watch(alignEndTime, () => updateEndTime())

function updateValues() {
    if (props.startTime) _startTime.value = props.startTime
    if (props.endTime) _endTime.value = props.endTime
    updateEndTime();
}

function updateEndTime() {
    if (alignEndTime.value && props.minutesOfLesson != undefined) {
        const start = Time.fromHHMM(_startTime.value);
        if (!start) return;
        _endTime.value = Time.fromITime((start.getTotalMinutes() + props.minutesOfLesson) * 60).format();
    }
}
</script>