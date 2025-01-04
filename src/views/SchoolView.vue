<template>
    <v-card v-if="school" class="pa-3 mb-3" :title="school.name" elevation="0">
        <template v-slot:prepend>
            <BackButton></BackButton>
        </template>
        <!-- <p class="text-h5 text-center mb-6">{{ school.name }}</p> -->
        <template v-slot:append>
            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-dialog fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-list-item title="Modifica" v-bind="activatorProps"></v-list-item>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <SchoolEditor edit :initialSchool="school" @close="isActive.value = false"
                                @save="isActive.value = false">
                            </SchoolEditor>
                        </template>
                    </v-dialog>

                    <DeleteDialog :name="school.name" objName="Scuola" :onDelete="deleteSchool">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-list-item title="Elimina" v-bind="activatorProps"></v-list-item>
                        </template>
                    </DeleteDialog>
                </v-list>
            </v-menu>
        </template>

        <v-row class="mt-5">
            <v-col class="pa-2" cols="12" md="6">
                <LessonView :school="school"></LessonView>
            </v-col>
            <v-col class="pa-2" cols="12" md="6">
                <RecoveryLessonView :school="school"></RecoveryLessonView>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-2" cols="12" md="6">
                <StudentView :school="school"></StudentView>
            </v-col>
            <v-col class="pa-2" cols="12" md="6">
                <SalaryView :school="school"></SalaryView>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-2" cols="12">
                <StudentNoteView :school="school"></StudentNoteView>
            </v-col>
        </v-row>
    </v-card>

    <v-container fluid v-else>
        <v-skeleton-loader class="mx-auto" type="heading"></v-skeleton-loader>
        <v-row class="justify-center mt-4">
            <v-col v-for="i in 5" :key="i" cols="12" md="6">
                <v-skeleton-loader elevation=3 type="card"></v-skeleton-loader>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import BackButton from '@/components/inputs/BackButton.vue';
import SchoolEditor from '@/components/school/SchoolEditor.vue';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { SchoolService } from '@/models/services/school-service';
import { type Unsubscribe } from 'firebase/firestore';
import { computed, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDocument } from 'vuefire';
import LessonView from './LessonView.vue';
import RecoveryLessonView from './RecoveryLessonView.vue';
import SalaryView from './SalaryView.vue';
import StudentNoteView from './StudentNoteView.vue';
import StudentView from './StudentView.vue';

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id as string);
const schoolSource = SchoolRepository.instance.observe(id);
const school = useDocument(schoolSource)

const subscriptions: Unsubscribe[] = [];

async function deleteSchool(): Promise<boolean> {
    if (!school.value) return false;

    try {
        SchoolService.instance.delete(schoolSource.value);
        router.push('/')
        return true;
    } catch (error) {
        return false;
    }
}

onUnmounted(() => {
    subscriptions.forEach(u => u());
})
</script>