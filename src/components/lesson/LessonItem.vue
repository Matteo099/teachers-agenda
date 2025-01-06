<template>
    <v-card elevation=3>
        <v-card-title>
            <v-checkbox v-model="select" :value="item.id" multiple>
                <template v-slot:label>
                    <span><b>{{ Time.fromITime(item.startTime).format() }} - {{
                        Time.fromITime(item.endTime).format() }}</b> &nbsp; <i>{{
                                item.name }} {{ item.surname }}</i></span>
                </template>
            </v-checkbox>
        </v-card-title>
        <v-card-text>
            <template v-if="!item.recovery || item.recovery.ref == 'original'">
                <v-btn class="ma-1" v-if="item.status != LessonStatus.PRESENT && item.status != LessonStatus.CANCELLED"
                    @click="emit('present')">presente</v-btn>
                <v-btn class="ma-1" v-if="item.status != LessonStatus.ABSENT && item.status != LessonStatus.CANCELLED"
                    @click="emit('absent')">assente</v-btn>
                <v-btn class="ma-1" v-if="item.status != LessonStatus.CANCELLED"
                    @click="emit('cancel')">cancella</v-btn>
                <v-btn class="ma-1" v-if="item.status != LessonStatus.NONE" @click="emit('reset')">reset</v-btn>

                <v-dialog v-model="dateDialog" transition="dialog-bottom-transition" fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn class="ma-1" v-bind="activatorProps"
                            v-if="!item.recovery && item.status == LessonStatus.NONE">sposta</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-card-text>
                                <v-date-picker class="w-100" v-model="newLessonDate"></v-date-picker>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text="Annulla"
                                    @click="isActive.value = false; newLessonDate = undefined;"></v-btn>
                                <v-btn color="primary" text="Sposta" @click="_moveLesson"
                                    :disabled="!newLessonDate"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>

                <v-dialog v-model="timeDialog" transition="dialog-bottom-transition" fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn class="ma-1" v-bind="activatorProps">modifica orario</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <EditLessonTime @close="isActive.value = false" @save="_updateLessonTime"
                            :startTime="Time.fromITime(item.startTime).format()"
                            :endTime="Time.fromITime(item.endTime).format()"
                            :minutesOfLesson="item.minutesLessonDuration">
                        </EditLessonTime>
                    </template>
                </v-dialog>

                <v-btn v-if="item.recovery?.ref == 'original'" class="ma-1"
                    :to="`/lesson/${item.recovery.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                        <v-icon>mdi-eye-arrow-left-outline</v-icon>
                    </template>
                    origine</v-btn>
            </template>
            <template v-else>
                <v-btn class="ma-1" :to="`/lesson/${item.recovery.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                        <v-icon>mdi-eye-arrow-right-outline</v-icon>
                    </template>recupero</v-btn>
            </template>

            <v-dialog fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn class="ma-1" v-bind="activatorProps">
                        note
                    </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <StudentEditor edit :school="school" :initialStudent="item" focus="note"
                        :disableFields="['name', 'surname', 'contact', 'lessonDay', 'level', 'minutesLessonDuration']"
                        @close="isActive.value = false" @save="item.note = $event.note; isActive.value = false">
                    </StudentEditor>
                </template>
            </v-dialog>

            <!-- DeleteDialog v-if="!item.recovery || item.recovery.ref == 'original'" -->
            <DeleteDialog :name="`${item.name} ${item.surname}`" objName="Studente" :onDelete="onDeleteLessonItem">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn color="error" v-bind="activatorProps">elimina</v-btn>
                </template>
            </DeleteDialog>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import EditLessonTime from '@/components/lesson/EditLessonTime.vue';
import { LessonStatus, Time, type EventTime, type School, type StudentLesson } from '@/models/model';
import { ref } from 'vue';
import DeleteDialog from '../DeleteDialog.vue';
import { toast } from 'vue3-toastify';
import StudentEditor from '../student/StudentEditor.vue';

const props = defineProps<{
    school: School;
    onDeleteLessonItem: () => Promise<boolean>;
    updateLessonTime: (newTime: EventTime) => Promise<boolean>;
    moveLesson: (newLessonDate: Date) => Promise<boolean>
}>()
const item = defineModel<StudentLesson>('item', { required: true });
const select = defineModel<string[]>('select');
const emit = defineEmits(['present', 'absent', 'reset', 'cancel', 'updateLessonTime', 'notes', 'deleteStudent'])
const timeDialog = ref(false)
const dateDialog = ref(false)
const newLessonDate = ref();


async function _updateLessonTime(newTime: EventTime) {
    const res = await props.updateLessonTime(newTime);
    if (res) timeDialog.value = false;
}

async function _moveLesson() {
    if (newLessonDate.value) {
        const res = await props.moveLesson(newLessonDate.value);
        if (res) {
            dateDialog.value = false;
            newLessonDate.value = undefined;
        } else toast.warn("Impossibile spostare la lezione...")
    }
}


</script>