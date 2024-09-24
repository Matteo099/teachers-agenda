<template>
    <v-container fluid>
        <p class="text-h5 text-center mb-6">{{ schoolName }} - {{ date.format(today, 'keyboardDate') }}</p>

        <v-row>
            <v-col class="pa-2" cols="12" md="6">
                <v-card title="Lezioni" class="mx-5">
                    <v-list :items="lessons" @click:select="goTo('/lessons/' + $event.id)"></v-list>
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
import { ref } from 'vue';
import { useDate } from 'vuetify';


const date = useDate()

const today = ref(new Date());
const lessons = [
    { type: 'subheader', title: 'Settembre' },
    {
        title: '23/09/2024',
        value: 1,
    },
    {
        title: '30/09/2024',
        value: 2,
    },
    { type: 'divider' },
    { type: 'subheader', title: 'Ottobre' },
    {
        title: '07/10/2024',
        value: 3,
    },
    {
        title: '14/10/2024',
        value: 4,
    }
];
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
</script>