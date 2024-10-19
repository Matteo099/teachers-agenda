<template>
    <v-list>
        <v-list-subheader>STUDENTI</v-list-subheader>
        <draggableComponent v-if="startingTime" :list="scheduledLessons" item-key="studentId"
            @end="updateScheduledLessonsTime">
            <template v-slot:item="{ element }">
                <v-list-item :key="element.studentId" :value="element" color="primary">
                    <template v-slot:prepend>
                        <p>
                            <b>
                                {{ Time.fromITime(element.time).format() }}
                            </b>
                            <span> - </span>
                            <i>{{ getCompleteStudentName(element.studentId) }}</i>
                            <span> ({{ getStudentLessonDay(element.studentId) }})</span>
                        </p>
                    </template>
                </v-list-item>
            </template>

        </draggableComponent>
    </v-list>
</template>

<script setup lang="ts">
import { days, Time, updateDailyLessonTime, type ScheduledLesson, type Student } from '@/models/model';
import draggableComponent from 'vuedraggable';


interface DailyLessonStudentListProps {
    startingTime: string | number;
    allStudents: Student[];
}

const props = defineProps<DailyLessonStudentListProps>()
const scheduledLessons = defineModel<ScheduledLesson[]>({ default: [] });


function updateScheduledLessonsTime() {
    const time = props.startingTime;
    updateDailyLessonTime(time, { scheduledLessons: scheduledLessons.value, students: props.allStudents });
}

function getCompleteStudentName(studentId: string): string {
    const student = props.allStudents.find(s => s.id == studentId);
    return `${student?.name ?? '???'} ${student?.surname ?? '???'}`;
}

function getStudentLessonDay(studentId: string): string {
    const student = props.allStudents.find(s => s.id == studentId);
    return days[student?.lessonDay ?? 0];
}
</script>