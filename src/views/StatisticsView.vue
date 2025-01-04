<template>
    <div class="d-flex flex-row">
        <v-tabs v-model="tab" color="primary" direction="vertical">
            <v-tab prepend-icon="mdi-cash" text="Stipendio" value="salary"></v-tab>
            <v-tab prepend-icon="mdi-town-hall" text="Scuole" value="schools"></v-tab>
            <v-tab prepend-icon="mdi-calendar-blank" text="Lezioni" value="lessons"></v-tab>
            <v-tab prepend-icon="mdi-account-school" text="Studenti" value="students"></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab" class="w-100">
            <v-tabs-window-item value="salary">
                <v-card flat>
                    <v-card-text>
                        <SalaryTrend />
                        <SalaryCount />
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="schools">
                <v-card flat>
                    <v-card-text>
                        <p>schools chart A</p>
                        <p>schools chart B</p>
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="lessons">
                <v-card flat>
                    <v-card-text>
                        <p>lessons chart A</p>
                        <p>lessons chart B</p>
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="students">
                <v-card flat>
                    <v-card-text>
                        <p>students chart A</p>
                        <p>students chart B</p>
                    </v-card-text>
                </v-card>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>

<script setup lang="ts">
import SalaryCount from '@/components/statistics/SalaryCount.vue';
import SalaryTrend from '@/components/statistics/SalaryTrend.vue';
import { ref } from 'vue';


const items = [
    { title: "Stipendio", value: 1 },
    { title: "Scuola", value: 2 }
]
const tab = ref('option-1');
</script>