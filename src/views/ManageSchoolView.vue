<template>
    <v-container fluid>
        <p class="text-h5 text-center mb-6">Le mie scuole</p>

        <v-row class="mr-4 mb-1 align-center">
            <v-text-field class="ma-2" prepend-inner-icon="mdi-magnify" density="comfortable" placeholder="Ricerca..."
                theme="light" variant="solo" hide-details></v-text-field>
            <v-btn prepend-icon="mdi-plus" color="success" @click="newSchool">nuova scuola</v-btn>
        </v-row>
        <v-data-table v-model:expanded="expanded" :headers="schoolsHeaders" :items="schools" item-value="id"
            show-expand>
            <template v-slot:expanded-row="{ columns, item }">
                <tr>
                    <td :colspan="columns.length">
                        <v-container class="ma-3">
                            <v-row>
                                <v-col cols="12" md="9">
                                    More info about {{ item.name }}
                                    <p>...</p>
                                    <p>...</p>
                                    <p>...</p>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-row class="my-2">
                                        <v-btn prepend-icon="mdi-eye" :to="'/school/' + item.id">Visualizza</v-btn>
                                    </v-row>
                                    <v-row class="my-2">
                                        <v-btn prepend-icon="mdi-pencil" @click="edit(item)">Modifica</v-btn>
                                    </v-row>
                                    <v-row class="my-2">
                                        <v-btn prepend-icon="mdi-delete-outline" color="error"
                                            @click="remove(item)">Elimina</v-btn>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


const expanded = ref([]);
const schoolsHeaders: any = [
    { key: 'data-table-expand' },
    {
        title: 'Nome',
        align: 'start',
        sortable: true,
        key: 'name',
    },
    { title: 'Città', key: 'city' },
    { title: 'Indirizzo', key: 'address' },
    { title: '€ / minuto', key: 'paymentCriteria' }
];
const schools: any = ref([]);

function newSchool() { }
function edit(school: any) { }
function remove(school: any) { }

onMounted(() => {
    for (let i = 0; i < 10; i++) {
        schools.value.push(
            {
                id: i,
                name: 'La Fenice',
                city: "Servigliano",
                address: "Commenda n° 8/bis",
                paymentCriteria: 0.5
            }
        );
    }
})
</script>

<style>
div.v-table__wrapper>table>thead>tr {
    font-weight: bold !important;
}
</style>