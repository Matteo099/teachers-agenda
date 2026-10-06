<template>
    <v-card class="weekly-calendar-editor" variant="flat" :loading="loadingCalendar || loadingStudents">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-calendar-week-outline" size="22" /></span><div><h2>Orario settimanale</h2><p>Le lezioni programmate della scuola</p></div>
            <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn prepend-icon="mdi-plus" color="primary" variant="flat" v-bind="activatorProps">Nuovo orario</v-btn>
                </template>
            
                <WeekLessonEditor :school="school" @close="dialog = false" @save="$event ? dialog = false : null">
                </WeekLessonEditor>
            </v-dialog>
        </div>

        <v-card-text>
            <v-expansion-panels class="weekly-schedules">
                <v-expansion-panel v-for="pl in programmedLessons" :key="pl.id" variant="flat">
                    <v-expansion-panel-title>
                        <template v-slot:default>
                            <div class="weekly-schedule-heading">
                                <span class="weekly-schedule-day">{{ days[pl.dayOfWeek] }}</span>
                                <span class="weekly-schedule-dates">{{ yyyyMMdd.fromIyyyyMMdd(pl.from).format() }} – {{ yyyyMMdd.fromIyyyyMMdd(pl.to).format() }}</span>
                                <span class="weekly-schedule-count">{{ pl.schedule.length }} allievi</span>
                                <span class="weekly-schedule-actions">
                                    <v-dialog transition="dialog-bottom-transition" fullscreen>
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn icon="mdi-pencil-outline" size="small" variant="text" aria-label="Modifica orario" @click.stop="console.log('edit')"
                                                v-bind="activatorProps"></v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                            <WeekLessonEditor :school="school" :initialWeekLesson="pl" edit
                                                @close="isActive.value = false"
                                                @save="$event ? isActive.value = false : null"></WeekLessonEditor>
                                        </template>
                                    </v-dialog>
                                    <DeleteDialog :name="'Tutti i ' + days[pl.dayOfWeek]" objName="Lezione Programmata"
                                        :onDelete="async () => await deleteWeeklyLesson(pl)">
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn icon="mdi-delete-outline" size="small" color="error" variant="text" aria-label="Elimina orario" v-bind="activatorProps"></v-btn>
                                        </template>
                                    </DeleteDialog>
                                </span>
                            </div>
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list v-if="pl.schedule.length > 0" class="weekly-schedule-list">
                            <v-list-item v-for="element of pl.schedule" :key="element.studentId" :value="element"
                                :title="getCompleteStudentName(element.studentId)"
                                :subtitle="`${Time.fromITime(element.startTime).format()} – ${Time.fromITime(element.endTime).format()}`"
                                prepend-icon="mdi-account-outline" color="primary" />
                        </v-list>
                        <!-- <v-list :items="pl.schedule" item-props v-if="pl.schedule.length > 0">
                            <template v-slot:title="{ item }">
                                {{ item.studentId }} - {{ item.time.hour.toString().padStart(2, '0') }}:{{
                                    item.time.minutes.toString().padStart(2, '0') }}
                            </template>
                        </v-list> -->
                        <span v-else>Nessuna lezione programmata</span>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" variant="text" @click="emit('close')"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { days, Time, yyyyMMdd, type School, type Student, type WeeklyLesson } from '@/models/model';
import { WeeklyLessonRepository } from '@/models/repositories/weekly-lesson-repository';
import { StudentService } from '@/models/services/student-service';
import { WeeklyLessonService } from '@/models/services/weely-lesson-service';
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import DeleteDialog from '../DeleteDialog.vue';
import WeekLessonEditor from './WeekLessonEditor.vue';

interface CalendarLessonEditorProps {
    school: School;
}

const props = defineProps<CalendarLessonEditorProps>()
const emit = defineEmits(['close'])
const subscriptions: EventSubscription[] = [];

const programmedLessons: Ref<WeeklyLesson[]> = ref([]);
const loadingCalendar = ref(false);
const loadingStudents = ref(false);
const allStudents: Ref<Student[]> = ref([]);
const dialog = ref(false);

async function deleteWeeklyLesson(weekLesson?: WeeklyLesson): Promise<boolean> {
    if (!weekLesson) return false;

    try {
        await WeeklyLessonRepository.instance.delete(weekLesson.id);
        return true;
    } catch (error) {
        return false;
    }
}

async function loadCalendar() {
    loadingCalendar.value = true;

    const suscription = WeeklyLessonService.instance.observeWeekLessonOfSchool(props.school.id).subscribe({
        next: data => {
            programmedLessons.value = data;
            loadingCalendar.value = false;
        },
        error: _err => loadingCalendar.value = false
    })

    subscriptions.push(suscription);
}

async function loadStudents() {
    loadingStudents.value = true;

    const subscription = StudentService.instance.observeStudentsOfSchool(props.school.id).subscribe({
        next: data => {
            allStudents.value = data;
            loadingStudents.value = false;
        },
        error: _err => loadingStudents.value = false
    })

    subscriptions.push(subscription);
}

function getCompleteStudentName(studentId: string): string {
    const student = allStudents.value.find(s => s.id == studentId);
    return `${student?.name} ${student?.surname}`;
}

onMounted(async () => {
    await loadStudents();
    await loadCalendar();
})

onUnmounted(() => {
    subscriptions.forEach(s => s.unsubscribe());
}) 
</script>
<style scoped>
.weekly-calendar-editor { max-width: 1000px; margin: auto; }
.weekly-schedules { display: flex; flex-direction: column; gap: 10px; }
.weekly-schedules :deep(.v-expansion-panel) { border: 1px solid var(--app-border) !important; border-radius: 12px !important; box-shadow: none !important; }
.weekly-schedule-heading { width: 100%; display: flex; align-items: center; flex-wrap: wrap; gap: 8px 14px; }
.weekly-schedule-day { min-width: 100px; color: var(--app-text); font-weight: 700; }
.weekly-schedule-dates, .weekly-schedule-count { color: var(--app-muted); font-size: .85rem; }
.weekly-schedule-actions { display: flex; align-items: center; margin-left: auto; }
.weekly-schedule-list { padding: 0; }
.weekly-schedule-list :deep(.v-list-item) { border-top: 1px solid var(--app-border); }
@media (max-width: 650px) { .weekly-schedule-day { width: 100%; } .weekly-schedule-actions { margin-left: 0; } }
</style>
