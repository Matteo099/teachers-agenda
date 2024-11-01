<template>
    <v-card v-if="school" class="pa-3" :title="school.name" elevation="0">
        <!-- <p class="text-h5 text-center mb-6">{{ school.name }}</p> -->
        <template v-slot:append>
            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-dialog v-model="schoolDialog" fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-list-item title="Modifica" v-bind="activatorProps"></v-list-item>
                        </template>

                        <SchoolEditor edit :initialSchool="school" @close="schoolDialog = false"
                            @save="schoolDialog = false">
                        </SchoolEditor>
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
        </v-row>
        <v-row>
            <v-col class="pa-2" cols="12">
                <v-card title="Note" elevation="3">
                    <v-expansion-panels>
                        <v-expansion-panel v-for="note in notes" :key="note.id">
                            <v-expansion-panel-title>
                                <template v-slot:default> <!--="{ expanded }"-->
                                    <v-row no-gutters>
                                        <v-col class="d-flex justify-start" cols="8">
                                            {{ note.title }}
                                        </v-col>
                                        <v-col class="text-grey" cols="4">
                                            <span>
                                                {{ note.student }}
                                            </span>
                                        </v-col>
                                    </v-row>
                                </template>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                {{ note.description }}
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import LessonView from '@/components/lesson/LessonView.vue';
import RecoveryLessonView from '@/components/lesson/RecoveryLessonView.vue';
import SchoolEditor from '@/components/school/SchoolEditor.vue';
import StudentView from '@/components/student/StudentView.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import type { School } from '@/models/model';
import { SchoolService } from '@/models/services/school-service';
import { dateFormat } from '@/models/utils';
import { doc, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDocument } from 'vuefire';

const route = useRoute()
const router = useRouter()
const schoolsRef = useDB<School>(DatabaseRef.SCHOOLS);

const subscriptions: Unsubscribe[] = [];

const notes: Ref<any[]> = ref([]);
const schoolDialog = ref(false);

const schoolSource = computed(() =>
    doc(schoolsRef, route.params.id as string)
)
const school = useDocument(schoolSource)

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

async function loadNotes() {
    const res = [
        { id: 0, title: "Questa è una nota molto carina e paffutella", description: "", student: "Matteo Rossi" },
        { id: 1, title: "Questa è una nota con descrizione", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra tincidunt risus sit amet interdum. Nam sed leo id ipsum efficitur congue nec ut est. Nullam in metus leo. In commodo, leo eu vulputate euismod, urna lacus efficitur nibh, ut maximus felis metus eu odio. Duis cursus commodo auctor. Suspendisse condimentum lorem dui, id tristique lectus commodo nec.", student: "Luca Verdi" }
    ]

    notes.value = res;
}

onMounted(async () => {
    await loadNotes();
})

onUnmounted(() => {
    subscriptions.forEach(u => u());
})
</script>