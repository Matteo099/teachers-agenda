<template>
    <v-card title="Lezioni" elevation="3">

        <template v-slot:append>
            <v-dialog transition="dialog-bottom-transition" fullscreen>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn icon="mdi-pencil" variant="text" v-bind="activatorProps"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <WeekLesson @close="isActive.value = false"></WeekLesson>
                </template>
            </v-dialog>
        </template>

        <v-list lines="two">
            <v-list-subheader inset>Settembre</v-list-subheader>

            <v-list-item v-for="lesson in lessons" :key="lesson.date" :title="date.format(lesson.date, 'keyboardDate')"
                :to="'/lesson/' + lesson.date" :baseColor="lesson.next ? 'primary' : ''">
                <template v-slot:prepend>
                    <v-avatar :color="lesson.next ? 'primary' : lesson.alert ? 'warning' : 'grey-lighten-1'">
                        <v-icon color="white">mdi-calendar</v-icon>
                    </v-avatar>
                </template>

                <template v-slot:append v-if="lesson.alert">
                    <v-icon color="warning">mdi-alert</v-icon>
                </template>
            </v-list-item>

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
import { ref, type Ref } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const lessons: Ref<any[]> = ref([]);
</script>