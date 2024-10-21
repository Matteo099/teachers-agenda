<template>
    <v-dialog v-if="dailyLesson && item" v-model="recoveryLessonDialog" transition="dialog-bottom-transition" fullscreen persistent>
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn class="ma-1" v-if="item.status == LessonStatus.ABSENT" v-bind="activatorProps">schedula
                recupero</v-btn>
        </template>

        <template v-slot:default>
            <RecoveryLessonEditor :schoolId="dailyLesson.schoolId" :lessonToRecover="item"
                @close="recoveryLessonDialog = false" @save="saveRecoveryLesson($event, item)" />
        </template>
    </v-dialog>
</template>

<script setup lang="ts">
import RecoveryLessonEditor from '@/components/lesson/RecoveryLessonEditor.vue';
import { LessonStatus, type DailyLesson, type StudentLesson } from '@/models/model';
import { ref, type Ref } from 'vue';

const dailyLesson: Ref<DailyLesson | undefined> = ref();
const item: Ref<StudentLesson | undefined> = ref();
const recoveryLessonDialog = ref(false);

function saveRecoveryLesson(event: DailyLesson, sl: StudentLesson) {
    recoveryLessonDialog.value = false;
    // doBackup();
    sl.status = LessonStatus.RECOVERY;
    sl.recoveryDate = event.date;
    // save();
}

</script>