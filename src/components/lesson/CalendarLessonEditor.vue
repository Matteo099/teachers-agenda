<template>
    <v-card title="Calendario">
        <template v-slot:append>

            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-plus" v-bind="activatorProps" variant="text"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <WeekLessonEvent :school="school" @close="isActive.value = false"></WeekLessonEvent>
                </template>
            </v-dialog>
        </template>
        <v-card-text>
            <v-expansion-panels>
                <v-expansion-panel v-for="pl in programmedLessons" :key="pl.id">
                    <v-expansion-panel-title>
                        <template v-slot:default>
                            <!-- v-slot:default="{ expanded }" -->
                            <v-row no-gutters>
                                <v-col class="d-flex justify-start" cols="5">
                                    Tutti i {{ getDayName(pl.dayOfWeek) }}
                                </v-col>
                                <v-col class="text-grey" cols="5">
                                    Dal {{ date.format(pl.from, 'keyboard24') }} al {{ date.format(pl.to,
                                        'keyboard24')
                                    }}
                                </v-col>
                                <v-col>
                                    <v-dialog transition="dialog-bottom-transition" fullscreen>
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn icon="mdi-pencil" variant="text" @click.stop="console.log('edit')"
                                                v-bind="activatorProps"></v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                            <WeekLessonEvent :school="school" :initialWeekLesson="pl" edit
                                                @close="isActive.value = false"></WeekLessonEvent>
                                        </template>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list :items="pl.schedule" item-props v-if="pl.schedule.length > 0">
                            <template v-slot:title="{ item }">
                                {{ item.studentId }} - {{ item.time.hour }}:{{ item.time.minutes }}
                            </template>
                        </v-list>
                        <span v-else>Nessuna lezione programmata</span>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" @click="emit('close')"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { ScheduledLesson, School, WeekLesson } from '@/models/model';
import { onMounted, ref, type Ref } from 'vue';
import { useDate } from 'vuetify';
import WeekLessonEvent from './WeekLessonEditor.vue';
import { Timestamp } from 'firebase/firestore';

interface CalendarLessonEditorProps {
    school: School;
}

const date = useDate()
const props = defineProps<CalendarLessonEditorProps>()
const emit = defineEmits(['close'])
const programmedLessons: Ref<WeekLesson[]> = ref([]);

function getDayName(day: number): string {
    switch (day) {
        case 0:
            return "Lunedì"
        default:
            return "None";
    }
}

async function loadCalendar() {
    const schedule: ScheduledLesson[] = [
        { studentId: "A1", time: { hour: 14, minutes: 0 } }
    ]
    const res: WeekLesson[] = [
        { id: "1", schoolId: "", dayOfWeek: 0, exclude: [] as Timestamp[], from: Timestamp.now(), to: Timestamp.now(), schedule, createdAt: Timestamp.now(), updatedAt: Timestamp.now() }
    ];
    programmedLessons.value = res;
}


onMounted(async () => {
    await loadCalendar();
})
</script>