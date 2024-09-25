<template>
    <v-container fluid>
        <p class="text-h5 text-center mb-6">{{ schoolName }}</p>

        <v-row>
            <v-col class="pa-2" cols="12" md="6">
                <v-card title="Lezioni" class="mx-5">
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
                <v-card title="Recuperi" class="mx-5">
                    <v-list lines="three" :items="recoveries2" item-props
                        @click:select="goTo('/recoveries/' + $event.id)">
                        <template v-slot:subtitle="{ subtitle }">
                            {{ subtitle }}
                        </template>
                    </v-list>
                </v-card>

                <v-expansion-panels>
                    <v-expansion-panel v-for="r in recoveries" :key="r.id">
                        <v-expansion-panel-title v-slot="{ expanded }">
                            <v-row no-gutters>
                                <v-col class="d-flex justify-start" cols="4">
                                    {{ r.name }}
                                </v-col>
                                <v-col class="text--secondary" cols="8">
                                    Da recuperare la lezione del {{ r.date }}
                                    <!-- <v-fade-transition leave-absolute>
                                        <span v-if="expanded">When do you want to travel?</span>
                                        <v-row v-else style="width: 100%" no-gutters>
                                            <v-col class="d-flex justify-start" cols="6">
                                                Start date: {{ trip.start || 'Not set' }}
                                            </v-col>
                                            <v-col class="d-flex justify-start" cols="6">
                                                End date: {{ trip.end || 'Not set' }}
                                            </v-col>
                                        </v-row>
                                    </v-fade-transition> -->
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-btn>programma lezione di recupero</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useDate } from 'vuetify';


const date = useDate()

const today = ref(new Date());
const lessons: Ref<any[]> = ref([]);
const recoveries2 = [
    {
        title: 'Luca Verdi',
        subtitle: 'Da recuperare la lezione del 10/09/2024',

        value: 1,
    },
    {
        title: 'Alessio Rossi',
        subtitle: 'Da recuperare la lezione del 10/09/2024',
        value: 2,
    }
]
const recoveries = [
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
]
const schoolName = "La Fenice"

function goTo(e: any) {
    console.log(e)
}

async function loadLessons() {
    const res: { date: Date, alert?: boolean, next?: boolean }[] = [
        {
            date: new Date(2024, 8, 23),
            alert: true,
        },
        {
            date: new Date(2024, 8, 30),
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

onMounted(async () => {
    await loadLessons();
})
</script>