<template>
    <v-card v-if="school" class="pa-3" :title="school.name" elevation="0">
        <!-- <p class="text-h5 text-center mb-6">{{ school.name }}</p> -->
        <template v-slot:append>
            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-list-item title="Modifica" @click="edit"></v-list-item>
                    <v-list-item title="Elimina" @click="remove"></v-list-item>
                </v-list>
            </v-menu>
        </template>

        <v-row class="mt-5">
            <v-col class="pa-2" cols="12" md="6">
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

                        <!-- <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                            </template>

                            <v-list>
                                <v-dialog max-width="500">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-list-item title="Aggiungi" v-bind="activatorProps"></v-list-item>
                                    </template>

                                    <template v-slot:default="{ isActive }">
                                        <WeekLesson @close="isActive.value = false"></WeekLesson>
                                    </template>
                                </v-dialog>

                                <v-dialog max-width="500">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-list-item title="Modifica" v-bind="activatorProps"></v-list-item>
                                    </template>

                                    <template v-slot:default="{ isActive }">
                                        <WeekLesson edit @close="isActive.value = false"></WeekLesson>
                                    </template>
                                </v-dialog>
                            </v-list>
                        </v-menu> -->
                    </template>

                    <v-list lines="two">
                        <v-list-subheader inset>Settembre</v-list-subheader>

                        <v-list-item v-for="lesson in lessons" :key="lesson.date"
                            :title="date.format(lesson.date, 'keyboardDate')" :to="'/lesson/' + lesson.date"
                            :baseColor="lesson.next ? 'primary' : ''">
                            <template v-slot:prepend>
                                <v-avatar
                                    :color="lesson.next ? 'primary' : lesson.alert ? 'warning' : 'grey-lighten-1'">
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
            </v-col>
            <v-col class="pa-2" cols="12" md="6">
                <v-card title="Recuperi" elevation="3">
                    <v-list lines="three" :items="recoveries" item-props>
                        <template v-slot:title="{ item }">
                            {{ item.name }}
                        </template>
                        <template v-slot:subtitle="{ item }">
                            <div v-if="item.status == 'NOT_RECOVERED'">
                                Da recuperare la lezione del {{ date.format(item.date, 'keyboardDate') }}
                            </div>
                            <div v-else-if="item.status == 'RECOVERY_SCHEDULED'">
                                Recupero programmato per il {{ date.format(item.recoveryDate, 'keyboardDate') }}
                            </div>
                            <div v-else>
                                Recupero della lezione del {{ date.format(item.date, 'keyboardDate') }} effettuato il {{
                                    date.format(item.recoveryDate, 'keyboardDate') }}
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
                <Students schoolName="La Fenice">
                </Students>
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
import Students from '@/components/Students.vue';
import WeekLesson from '@/components/WeekLesson.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';
import { doc, type Unsubscribe } from 'firebase/firestore';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDocument } from 'vuefire';
import { useDate } from 'vuetify';

const route = useRoute()
const date = useDate()
const schoolsRef = useDB(DatabaseRef.SCHOOLS);

const subscriptions: Unsubscribe[] = [];

const today = ref(new Date());
const datePicker: Ref<Date | undefined> = ref();
const lessons: Ref<any[]> = ref([]);
const recoveries: Ref<any[]> = ref([]);
const notes: Ref<any[]> = ref([]);

const schoolSource = computed(() =>
    doc(schoolsRef, route.params.id as string)
)
const school = useDocument(schoolSource)

function edit() {}
function remove() {}
// function addWeekLesson() { }
// function editWeekLesson() { }

function cancelScheduleRecovery(event: any) {
    event.recoveryDate = undefined;
    event.status = 'NOT_RECOVERED';
}

function scheduleRecovery(event: any) {
    if (!datePicker.value) return;

    event.recoveryDate = datePicker.value;
    event.status = 'RECOVERY_SCHEDULED';
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

async function loadLessons() {
    const res: { date: Date, alert?: boolean, next?: boolean }[] = [
        {
            date: new Date(2024, 8, 23),
            alert: true,
        },
        {
            date: new Date(2024, 8, 26),
        },
        {
            date: new Date(2024, 9, 7),
        },
        {
            date: new Date(2024, 9, 14),
        }
    ];

    let nextLesson = { date: Infinity, index: -1 }
    res.forEach((lesson, index) => {
        lesson.next = false;
        if (date.isAfter(lesson.date, today.value)) {
            const diff = date.getDiff(lesson.date, today.value);
            if (diff < nextLesson.date) {
                nextLesson = {
                    date: diff,
                    index
                };
            }
        }
    });

    if (nextLesson.index !== -1)
        res[nextLesson.index].next = true

    lessons.value = res;
}

async function loadNotes() {
    const res = [
        { id: 0, title: "Questa è una nota molto carina e paffutella", description: "", student: "Matteo Rossi" },
        { id: 1, title: "Questa è una nota con descrizione", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra tincidunt risus sit amet interdum. Nam sed leo id ipsum efficitur congue nec ut est. Nullam in metus leo. In commodo, leo eu vulputate euismod, urna lacus efficitur nibh, ut maximus felis metus eu odio. Duis cursus commodo auctor. Suspendisse condimentum lorem dui, id tristique lectus commodo nec.", student: "Luca Verdi" }
    ]

    notes.value = res;
}

onMounted(async () => {
    await loadLessons();
    await loadRecoveryLessons();
    await loadNotes();
})

onUnmounted(() => {
    subscriptions.forEach(u => u());
})
</script>