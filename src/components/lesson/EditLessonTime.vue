<template>
    <v-card class="lesson-time-dialog" variant="flat">
        <div class="lesson-time-heading"><span class="lesson-time-icon"><v-icon icon="mdi-clock-edit-outline" /></span><div><h2>Modifica orario</h2></div><v-btn icon="mdi-close" variant="text" size="small" aria-label="Chiudi" @click="emit('close')" /></div>
        <v-card-text class="lesson-time-content">
            <div class="lesson-time-fields">
                <v-text-field v-model="_startTime" :active="startModal" :focus="startModal" label="Inizio"
                        v-bind="startTimeProps" prepend-inner-icon="mdi-clock-time-four-outline" variant="outlined" readonly>
                        <v-dialog v-model="startModal" activator="parent" width="auto">
                            <v-time-picker v-if="startModal" format="24hr" v-model="_startTime"></v-time-picker>
                        </v-dialog>
                    </v-text-field>
                <v-text-field v-model="_endTime" :active="endModal" :focused="endModal" label="Fine"
                        v-bind="endTimeProps" prepend-inner-icon="mdi-clock-time-four-outline" variant="outlined" :disabled="alignEndTime"
                        readonly>
                        <v-dialog v-model="endModal" activator="parent" width="auto">
                            <v-time-picker v-if="endModal" format="24hr" v-model="_endTime"></v-time-picker>
                        </v-dialog>
                    </v-text-field>
            </div>
            <div class="lesson-time-options">
                <v-checkbox v-model="alignEndTime" label="Calcola la fine in base alla durata della lezione" hide-details density="comfortable" />
                <v-checkbox v-model="applyFromDate" label="Applica anche alle lezioni successive e al calendario" hide-details density="comfortable" />
            </div>
        </v-card-text>
        <v-card-actions class="lesson-time-actions">
            <v-btn text="Annulla" variant="outlined" @click.stop="emit('close')"></v-btn>
            <v-btn color="primary" text="Salva orario" prepend-icon="mdi-content-save-outline" variant="flat" @click.stop="onSave"></v-btn>
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
const applyFromDate = ref(false);

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

        emit('save', { ...values, applyFromDate: applyFromDate.value })
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

<style scoped>
.lesson-time-dialog { overflow: hidden; border: 1px solid var(--app-border); border-radius: 16px !important; background: var(--app-surface); }
.lesson-time-heading { display: flex; align-items: center; gap: 12px; padding: 20px 22px 18px; border-bottom: 1px solid var(--app-border); }
.lesson-time-icon { display: grid; place-items: center; width: 44px; height: 44px; flex: none; border-radius: 12px; background: var(--app-accent-surface); color: var(--app-primary); }
.lesson-time-heading > div { flex: 1; min-width: 0; }
.lesson-time-heading > div > span { color: var(--app-primary); font-size: .74rem; font-weight: 650; }
.lesson-time-heading h2 { margin: 2px 0; color: var(--app-text); font-size: 1.1rem; font-weight: 700; }
.lesson-time-heading p { margin: 0; color: var(--app-muted); font-size: .82rem; }
.lesson-time-content { padding: 22px !important; }
.lesson-time-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.lesson-time-options { display: grid; gap: 2px; padding: 8px 0 0; }
.lesson-time-options :deep(.v-label) { opacity: 1; color: var(--app-text); font-size: .86rem; }
.lesson-time-actions { justify-content: flex-end; gap: 8px; padding: 14px 22px 18px !important; border-top: 1px solid var(--app-border); }
@media (max-width: 600px) { .lesson-time-heading { padding: 16px; } .lesson-time-content { padding: 16px !important; } .lesson-time-fields { grid-template-columns: 1fr; gap: 2px; } .lesson-time-actions { padding: 12px 16px 16px !important; } }
</style>
