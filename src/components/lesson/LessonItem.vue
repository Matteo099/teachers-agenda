<template>
    <v-card elevation=3>
        <v-card-title>
            <v-checkbox v-model="select" :value="item.student.id" multiple>
                <template v-slot:label>
                    <span><b>{{ Time.fromITime(item.lesson.startTime).format() }} - {{
                        Time.fromITime(item.lesson.endTime).format() }}</b> &nbsp; <i>{{
                                item.student.name }} {{ item.student.surname }}</i></span>
                </template>
            </v-checkbox>
        </v-card-title>
        <v-card-text>
            <template v-if="!item.lesson.recovery || item.lesson.recovery.ref == 'original'">
                <v-btn class="ma-1"
                    v-if="item.lesson.status != LessonStatus.TRIAL && item.lesson.status != LessonStatus.PRESENT && !(item.lesson.moved?.ref == 'moved')"
                    @click="emit('present')">presente</v-btn>

                <v-dialog transition="dialog-bottom-transition">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn class="ma-1" v-bind="activatorProps"
                            v-if="item.lesson.status != LessonStatus.TRIAL && item.lesson.status != LessonStatus.ABSENT && item.lesson.status != LessonStatus.UNJUSTIFIED_ABSENCE && !(item.lesson.moved?.ref == 'moved')">assente</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Assenza"
                            text="Lo studente avrà modo di recuperare la lezione oppure è un'assenza ingiustificata?">
                            <v-card-actions>
                                <v-row class="justify-end">
                                    <v-col cols="auto">
                                        <v-btn text="Assenza Recuperabile"
                                            @click="isActive.value = false; emit('absent', true)"></v-btn>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-btn text="Assenza Ingiustificata" color="primary"
                                            @click="isActive.value = false; emit('absent', false)"></v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <v-btn class="ma-1" v-if="item.lesson.status == LessonStatus.NONE && !item.student.trial?.done"
                    @click="emit('trial')">prova</v-btn>
                <v-btn class="ma-1" v-if="item.lesson.status != LessonStatus.NONE || (item.lesson.moved?.ref == 'moved')"
                    @click="emit('reset')">reset</v-btn>

                <v-dialog v-model="dateDialog" transition="dialog-bottom-transition" fullscreen v-if="!item.lesson.moved">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn class="ma-1" v-bind="activatorProps"
                            v-if="!item.lesson.recovery && item.lesson.status == LessonStatus.NONE">sposta</v-btn>
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
                                <v-btn color="primary" text="Sposta" @click="_moveLesson" :loading="movingLesson"
                                    :disabled="!newLessonDate"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <template v-else-if="item.lesson.moved.ref == 'moved'">
                    <v-btn class="ma-1" :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                        <template v-slot:prepend>
                            <v-icon>mdi-eye-arrow-right-outline</v-icon>
                        </template>spostata</v-btn>
                </template>
                <template v-else>
                    <v-btn class="ma-1" :to="`/lesson/${item.lesson.moved.lessonRef.dailyLessonId}`">
                        <template v-slot:prepend>
                            <v-icon>mdi-eye-arrow-left-outline</v-icon>
                        </template>
                        origine</v-btn>
                </template>

                <v-dialog v-model="timeDialog" transition="dialog-bottom-transition" fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn class="ma-1" v-bind="activatorProps">modifica orario</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <EditLessonTime @close="isActive.value = false" @save="_updateLessonTime"
                            :startTime="Time.fromITime(item.lesson.startTime).format()"
                            :endTime="Time.fromITime(item.lesson.endTime).format()"
                            :minutesOfLesson="item.student.minutesLessonDuration">
                        </EditLessonTime>
                    </template>
                </v-dialog>

                <v-btn v-if="item.lesson.recovery?.ref == 'original'" class="ma-1"
                    :to="`/lesson/${item.lesson.recovery.lessonRef.dailyLessonId}`">
                    <template v-slot:prepend>
                        <v-icon>mdi-eye-arrow-left-outline</v-icon>
                    </template>
                    origine</v-btn>
            </template>
            <template v-else>
                <v-btn class="ma-1" :to="`/lesson/${item.lesson.recovery.lessonRef.dailyLessonId}`">
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
                    <StudentEditor edit :school="school" :initialStudent="item.student" focus="note"
                        :disableFields="['name', 'surname', 'contact', 'lessonDay', 'level', 'minutesLessonDuration']"
                        @close="isActive.value = false" @save="item.student.note = $event.note; isActive.value = false">
                    </StudentEditor>
                </template>
            </v-dialog>

            <DeleteDialog :name="`${item.student.name} ${item.student.surname}`" objName="Studente" :onDelete="onDeleteLessonItem">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn color="error" v-bind="activatorProps">elimina</v-btn>
                </template>
            </DeleteDialog>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import EditLessonTime from '@/components/lesson/EditLessonTime.vue';
import { LessonStatus, Time, type EventTime, type School, type StudentLesson2 } from '@/models/model';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import DeleteDialog from '../DeleteDialog.vue';
import StudentEditor from '../student/StudentEditor.vue';

const props = defineProps<{
    school: School;
    onDeleteLessonItem: () => Promise<boolean>;
    updateLessonTime: (newTime: EventTime) => Promise<boolean>;
    moveLesson: (newLessonDate: Date) => Promise<boolean>
}>()
const item = defineModel<StudentLesson2>('item', { required: true });
const select = defineModel<string[]>('select');
const emit = defineEmits(['present', 'absent', 'reset', 'trial', 'updateLessonTime', 'deleteStudent'])
const timeDialog = ref(false)
const dateDialog = ref(false)
const newLessonDate = ref();
const movingLesson = ref(false);


async function _updateLessonTime(newTime: EventTime) {
    const res = await props.updateLessonTime(newTime);
    if (res) timeDialog.value = false;
}

async function _moveLesson() {
    movingLesson.value = true;
    if (newLessonDate.value) {
        const res = await props.moveLesson(newLessonDate.value);
        if (res) {
            dateDialog.value = false;
            newLessonDate.value = undefined;
        } else toast.warn("Impossibile spostare la lezione...")
    }
    movingLesson.value = false;
}

</script>