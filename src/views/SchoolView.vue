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
                <v-card title="Recuperi" elevation="3">
                    <v-list lines="three" :items="recoveries" item-props>
                        <template v-slot:title="{ item }">
                            {{ item.name }}
                        </template>
                        <template v-slot:subtitle="{ item }">
                            <div v-if="item.status == 'NOT_RECOVERED'">
                                Da recuperare la lezione del {{ dateFormat(item.date) }}
                            </div>
                            <div v-else-if="item.status == 'RECOVERY_SCHEDULED'">
                                Recupero programmato per il {{ dateFormat(item.recoveryDate) }}
                            </div>
                            <div v-else>
                                Recupero della lezione del {{ dateFormat(item.date) }} effettuato il {{
                                    dateFormat(item.recoveryDate) }}
                            </div>
                        </template>
                        <template v-slot:append="{ item }">

                            <v-dialog width="auto" scrollable v-if="item.status == 'NOT_RECOVERED'" persistent>
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn v-bind="activatorProps">programma</v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card>
                                        <v-card-text class="pa-6">
                                            <v-date-picker :min="new Date()" v-model="datePicker"></v-date-picker>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn text="Annulla" @click="isActive.value = false"></v-btn>
                                            <v-spacer></v-spacer>
                                            <v-btn color="surface-variant" text="Salva" variant="flat"
                                                @click="isActive.value = false; scheduleRecovery(item)"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>

                            <v-btn v-if="item.status == 'RECOVERY_SCHEDULED'"
                                @click="cancelScheduleRecovery(item)">annulla</v-btn>
                        </template>
                    </v-list>
                </v-card>
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
import SchoolEditor from '@/components/school/SchoolEditor.vue';
import StudentView from '@/components/student/StudentView.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import type { School } from '@/models/model';
import { dateFormat } from '@/models/utils';
import { deleteDoc, doc, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useDocument } from 'vuefire';
import { useDate } from 'vuetify';

const route = useRoute()
const router = useRouter()
const date = useDate()
const schoolsRef = useDB<School>(DatabaseRef.SCHOOLS);

const subscriptions: Unsubscribe[] = [];

const today = ref(new Date());
const datePicker: Ref<Date | undefined> = ref();
const recoveries: Ref<any[]> = ref([]);
const notes: Ref<any[]> = ref([]);
const schoolDialog = ref(false);

const schoolSource = computed(() =>
    doc(schoolsRef, route.params.id as string)
)
const school = useDocument(schoolSource)


function cancelScheduleRecovery(event: any) {
    event.recoveryDate = undefined;
    event.status = 'NOT_RECOVERED';
}

function scheduleRecovery(event: any) {
    if (!datePicker.value) return;

    event.recoveryDate = datePicker.value;
    event.status = 'RECOVERY_SCHEDULED';
}

async function deleteSchool(): Promise<boolean> {
    try {
        await deleteDoc(schoolSource.value);
        router.push('/')
        return true;
    } catch (error) {
        return false;
    }
}

async function loadRecoveryLessons() {
    const res = [
        {
            name: 'Luca Verdi',
            date: new Date('10/09/2024 14:00'),
            status: 'NOT_RECOVERED',
            id: 1,
        },
        {
            name: 'Alessio Rossi',
            date: new Date('10/09/2024 18:00'),
            status: 'NOT_RECOVERED',
            id: 2,
        }
    ];

    recoveries.value = res;
}


async function loadNotes() {
    const res = [
        { id: 0, title: "Questa è una nota molto carina e paffutella", description: "", student: "Matteo Rossi" },
        { id: 1, title: "Questa è una nota con descrizione", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra tincidunt risus sit amet interdum. Nam sed leo id ipsum efficitur congue nec ut est. Nullam in metus leo. In commodo, leo eu vulputate euismod, urna lacus efficitur nibh, ut maximus felis metus eu odio. Duis cursus commodo auctor. Suspendisse condimentum lorem dui, id tristique lectus commodo nec.", student: "Luca Verdi" }
    ]

    notes.value = res;
}

onMounted(async () => {
    await loadRecoveryLessons();
    await loadNotes();
})

onUnmounted(() => {
    subscriptions.forEach(u => u());
})
</script>