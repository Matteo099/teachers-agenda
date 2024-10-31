<template>
    <v-card title="Lezioni" elevation="3" :loading="loading">

        <template v-slot:append>
            <v-dialog transition="dialog-bottom-transition" class="justify-center">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-calendar" variant="text" :disabled="!school" v-bind="activatorProps"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card maxWidth="400px">
                        <v-card-text>
                            <v-row class="justify-center">
                                <v-col cols="auto">
                                    <v-date-picker v-model="dailyLessonDate"></v-date-picker>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text="Chiudi" @click="isActive.value = false"></v-btn>
                            <v-btn text="Ok" color="primary" @click="routeToDailyLesson(dailyLessonDate!)"
                                :disabled="!dailyLessonDate"></v-btn>
                        </v-card-actions>
                    </v-card>

                </template>
            </v-dialog>


            <v-btn icon="mdi-refresh" variant="text" :disabled="!school || computingLessonGroups"
                @click="loadLessonGroup"></v-btn>

            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-pencil" variant="text" v-bind="activatorProps" :disabled="!school"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <WeekLessonEditor :school="school" @close="isActive.value = false; loadLessonGroup()">
                    </WeekLessonEditor>
                </template>
            </v-dialog>
        </template>

        <v-list lines="two">
            <template v-for="lg of lessonGroups" :key="lg.month">
                <v-list-subheader inset>{{ lg.month }}</v-list-subheader>

                <v-list-item v-for="lesson in lg.lessons" :key="lesson.date.toString()" :title="lesson.date.format()"
                    @click="routeToDailyLesson(lesson)" :baseColor="lesson.next ? 'primary' : ''">
                    <template v-slot:prepend>
                        <v-avatar :color="getColor(lesson)">
                            <v-icon color="white">mdi-calendar</v-icon>
                        </v-avatar>
                    </template>

                    <template v-slot:append v-if="lesson.pending || lesson.recovery">
                        <v-icon v-if="lesson.pending" color="warning">mdi-alert</v-icon>
                        <v-icon v-if="lesson.recovery" color="info">mdi-alpha-r-circle</v-icon>
                    </template>
                </v-list-item>
            </template>

            <!-- <v-divider inset></v-divider>

            <v-list-subheader inset>Files</v-list-subheader>

            <v-list-item v-for="file in files" :key="file.title" :subtitle="file.subtitle"
                :title="file.title">
                <template v-slot:prepend>
                    <v-avatar :color="file.color">
                        <v-icon color="white">{{ file.icon }}</v-icon>
                    </v-avatar>
                </template>

                <template v-slot:append>
                    <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
                </template>
            </v-list-item> -->
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
import { yyyyMMdd, type School } from '@/models/model';
import { DailyLessonService } from '@/models/services/daily-lesson-service';
import { LessonGroupService, type LessonGroup, type LessonProjection, type SchoolLessons } from '@/models/services/lesson-group-service';
import { WeeklyLessonService } from '@/models/services/weely-lesson-service';
import { type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';
import WeekLessonEditor from './CalendarLessonEditor.vue';
import { SchoolService } from '@/models/services/school-service';

export interface LessonViewProps {
    school: School
}

const router = useRouter();
const date = useDate();
const props = defineProps<LessonViewProps>();
const subscriptions: Unsubscribe[] = [];

const lessonGroups: Ref<LessonGroup[]> = ref([]);
const dailyLessonDate: Ref<Date | undefined> = ref();
const loadingLessons = ref(false);
const loadingCalendar = ref(false);
const computingLessonGroups = ref(false);

const schoolLessons: SchoolLessons = {
    dailyLessons: [],
    weeklyLessons: [],
    schoolId: props.school.id
};

const loading = computed(() => props.school == undefined || loadingLessons.value || loadingCalendar.value);
watch(props.school, () => loadLessonGroup())

function getColor(lesson: LessonProjection) {
    if (lesson.next) return "primary";
    if (lesson.pending) return "warning";
    if (lesson.recovery) return "info";

    return 'grey-lighten-1';
}

async function routeToDailyLesson(lessonGroup: LessonProjection | Date) {
    const dailyLessonId = await DailyLessonService.instance.getOrCreateDailyLessonId(schoolLessons, lessonGroup);
    router.push(`/lesson/${dailyLessonId}`);
}

async function loadLessonGroup() {
    computingLessonGroups.value = true;

    const today = new Date(new Date().toDateString());
    const startingDate = date.addMonths(today, -12) as Date;

    const _schoolLessons = await SchoolService.instance.getSchoolLessons(props.school.id, startingDate);
    lessonGroups.value = await LessonGroupService.instance.getGroupedLessons(_schoolLessons);

    console.log(_schoolLessons, lessonGroups);

    computingLessonGroups.value = false;
}

onMounted(async () => {
    await loadLessonGroup();
})

onUnmounted(() => {
    subscriptions.forEach(u => u?.());
}) 
</script>

<style scoped>
.v-dialog>.v-overlay__content {
    width: unset !important;
}
</style>