<template>
    <div v-if="school" class="school-page">
        <header class="school-page-header">
            <BackButton />
            <span class="school-page-icon"><v-icon icon="mdi-school-outline" size="27" /></span>
            <div class="school-page-title"><span>Scuola</span><h1>{{ school.name }}</h1><p v-if="school.city"><v-icon icon="mdi-map-marker-outline" size="16" /> {{ school.city }}</p></div>
            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" aria-label="Azioni scuola" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-dialog fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-list-item title="Modifica scuola" prepend-icon="mdi-pencil-outline" v-bind="activatorProps"></v-list-item>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <SchoolEditor edit :initialSchool="school" @close="isActive.value = false"
                                @save="isActive.value = false">
                            </SchoolEditor>
                        </template>
                    </v-dialog>

                    <DeleteDialog :name="school.name" objName="Scuola" :onDelete="deleteSchool">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-list-item title="Elimina scuola" prepend-icon="mdi-delete-outline" v-bind="activatorProps"></v-list-item>
                        </template>
                    </DeleteDialog>

                    <v-list-item title="Clona scuola" prepend-icon="mdi-content-copy" :disabled="cloning" @click="cloneSchool"></v-list-item>
                </v-list>
            </v-menu>
        </header>
        <main class="school-page-content">
        <v-row>
            <v-col class="pa-2" cols="12" md="6">
                <LessonView :school="school"></LessonView>
            </v-col>
            <v-col class="pa-2" cols="12" md="6">
                <RecoveryLessonView :school="school"></RecoveryLessonView>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-2" cols="12" md="12">
                <StudentView :school="school"></StudentView>
            </v-col>
            <v-col v-if="school.ensembleMusic" class="pa-2" cols="12" md="6">
                <BandView :school="school" />
            </v-col>
            <v-col class="pa-2" cols="12" md="6">
                <SalaryView :school="school"></SalaryView>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-2" cols="12">
                <SchoolNotesView :school="school"></SchoolNotesView>
            </v-col>
        </v-row>
        <v-row v-if="school.managed">
            <v-col class="pa-2" cols="12">
                <SchoolManagementCard :school="school" />
            </v-col>
        </v-row>
        </main>
    </div>

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
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useRoute, useRouter } from 'vue-router';
import { useDocument } from 'vuefire';
import LessonView from './LessonView.vue';
import RecoveryLessonView from './RecoveryLessonView.vue';
import SalaryView from './SalaryView.vue';
import SchoolNotesView from './SchoolNotesView.vue';
import StudentView from './StudentView.vue';
import BandView from '@/components/band/BandView.vue';
import SchoolManagementCard from '@/components/school/SchoolManagementCard.vue';

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id as string);
const schoolSource = SchoolRepository.instance.observe(id);
const school = useDocument(schoolSource)
const cloning = ref(false);

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

async function cloneSchool(): Promise<void> {
    if (!school.value || cloning.value) return;
    cloning.value = true;
    try {
        const clonedId = await SchoolService.instance.clone(school.value);
        toast.success('Scuola clonata');
        await router.push(`/school/${clonedId}`);
    } catch (error) {
        toast.error('Errore durante la clonazione della scuola');
        console.error('Error cloning school:', error);
    } finally {
        cloning.value = false;
    }
}

onUnmounted(() => {
    subscriptions.forEach(u => u());
})
</script>

<style scoped>
.school-page { padding-bottom: 24px; }
.school-page-header { display: flex; align-items: center; gap: 14px; padding: 20px 24px; margin-bottom: 14px; border: 1px solid var(--app-border); border-radius: 16px; background: var(--app-surface); box-shadow: var(--app-shadow); }
.school-page-icon { display: grid; place-items: center; width: 52px; height: 52px; flex: none; border-radius: 14px; color: var(--app-primary); background: var(--app-accent-surface); }
.school-page-title { min-width: 0; flex: 1; }
.school-page-title > span { color: var(--app-primary); font-size: .75rem; font-weight: 650; }
.school-page-title h1 { overflow: hidden; margin: 1px 0; color: var(--app-text); font-size: 1.45rem; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.school-page-title p { margin: 0; color: var(--app-muted); font-size: .83rem; }
.school-page-content :deep(.v-row) { margin-top: 0; }
@media (max-width: 600px) { .school-page-header { gap: 9px; padding: 14px; } .school-page-icon { width: 40px; height: 40px; } .school-page-title h1 { font-size: 1.1rem; } }
</style>
