<template>
    <v-card title="Lezione Settimanale">
        <v-card-text>
            <v-form>
                <v-select v-model="dayOfWeek" :items="days" label="Giorno"></v-select>
                <v-date-input :max="to" v-model="from" label="Dal"></v-date-input>
                <v-date-input :min="from" v-model="to" label="Al"></v-date-input>
                <v-select v-model="excludeDates" :items="allDates" label="Giorni da Escludere" multiple
                    item-title="name" item-value="value" no-data-text="Nessuna Data Disponibile" clearable>
                    <template v-slot:selection="{ item, index }">
                        <v-chip v-if="index < 2">
                            <span>{{ date.format(item.title, 'keyboard24') }}</span>
                        </v-chip>
                        <span v-if="index === 2" class="text-grey text-caption align-self-center">
                            (+{{ excludeDates.length - 2 }} others)
                        </span>
                    </template>
                </v-select>
                <v-text-field v-model="startingTime" :active="modalTimePicker" :focused="modalTimePicker"
                    label="Orario della prima Lezione" prepend-icon="mdi-clock-time-four-outline" readonly>
                    <v-dialog v-model="modalTimePicker" activator="parent" width="auto">
                        <v-time-picker v-if="modalTimePicker" v-model="startingTime"></v-time-picker>
                    </v-dialog>
                </v-text-field>
                <v-select v-model="selectedStudents" :items="allStudents" label="Studenti" multiple></v-select>
            </v-form>
            <v-list title="Studenti" :items="selectedStudents"></v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Salva" @click="save" :loading="saving"></v-btn>
            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, type WeekLesson } from '@/models/model';
import { Timestamp } from 'firebase/firestore';
import { ref, watch, type Ref } from 'vue';
import { useDate } from 'vuetify';

interface WeekLessonEventProps {
    edit?: boolean;
    initialWeekLesson?: WeekLesson
}

const date = useDate();
const emit = defineEmits(['close', 'save'])
const props = defineProps<WeekLessonEventProps>()

const dayOfWeek: Ref<string | undefined> = ref();
const from: Ref<Date | undefined> = ref();
const to: Ref<Date | undefined> = ref();
const excludeDates: Ref<Date[]> = ref([]);
const allDates: Ref<{ name: string, value: Date }[]> = ref([]);
const startingTime = ref();
const allStudents = ref();
const selectedStudents = ref();
const modalTimePicker = ref(false);
const saving = ref(false);

watch(() => props.initialWeekLesson, () => updateWeekLesson())
watch(dayOfWeek, () => updateExcludeDates())
watch(from, () => updateExcludeDates())
watch(to, () => updateExcludeDates())

function updateWeekLesson() {
    if (props.initialWeekLesson) {
        const weekLessonClone = JSON.parse(JSON.stringify(props.initialWeekLesson)) as WeekLesson;
        dayOfWeek.value = days[weekLessonClone.dayOfWeek];
        from.value = weekLessonClone.from.toDate();
        to.value = weekLessonClone.to.toDate();
        excludeDates.value = weekLessonClone.exclude.map(d => d.toDate());
        // startingTime.value = weekLessonClone.students.min(d => d.time)
        // TODO...
    }
}

function updateExcludeDates() {
    if (dayOfWeek.value === undefined || from.value === undefined || to.value === undefined) return;

    // Clear the previous allDates array
    allDates.value = [];

    const dayNumber = days.indexOf(dayOfWeek.value);

    // Convert dayOfWeek to match Date.getDay() format
    // Days are 0 (Sunday) to 6 (Saturday) in JavaScript, so we map it to our custom array `days` where 0 is Monday
    const targetDayOfWeek = dayNumber === 6 ? 0 : dayNumber + 1;

    // Create a new date instance to avoid mutating the original `from` date
    let currentDate = new Date(from.value);

    // Loop through the dates between `from` and `to`
    while (currentDate <= to.value) {
        // Check if the day of the week matches
        if (currentDate.getDay() === targetDayOfWeek) {
            // Push the date to the allDates array
            const d = new Date(currentDate);
            allDates.value.push({
                name: date.format(d, 'keyboard24'),
                value: d
            }); // Store a copy of the date
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
}



function save() {
    // save to db
    emit('save')
}
</script>