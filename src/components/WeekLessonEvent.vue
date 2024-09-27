<template>
    <v-card title="Lezione Settimanale">
        <v-card-text>
            <v-form>
                <v-select :items="['Lunedì', 'Martedì', 'Mercoledì', '...']" label="Giorno"></v-select>
                <v-date-input label="Da"></v-date-input>
                <v-date-input label="A"></v-date-input>
                <v-select :items="['10/09/2024', new Date().toISOString()]" label="Giorni da Escludere"
                    multiple></v-select>
                <v-select v-model="students" :items="['A1', 'A2']" label="Studenti" multiple></v-select>
            </v-form>
            <v-list title="Studenti" :items="students"></v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Salva" @click="save"></v-btn>
            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDate } from 'vuetify';

interface WeekLessonEventProps {
    edit?: boolean;
}

const date = useDate();
const emit = defineEmits(['close', 'save'])
const props = defineProps<WeekLessonEventProps>()

const students = ref();

function save() {
    // save to db
    emit('save')
}
</script>