<template>
    <div>
        <v-tabs v-model="tab" color="primary" align-tabs="center">
            <v-tab prepend-icon="mdi-cash" text="Stipendio" value="salary"></v-tab>
            <v-tab prepend-icon="mdi-town-hall" text="Scuole" value="schools"></v-tab>
            <v-tab prepend-icon="mdi-calendar-blank" text="Lezioni" value="lessons"></v-tab>
            <v-tab prepend-icon="mdi-account-school" text="Studenti" value="students"></v-tab>
        </v-tabs>

        <DateSelect v-model="dateRange" class="mt-2"></DateSelect>

        <v-tabs-window v-model="tab" class="w-100">
            <v-tabs-window-item value="salary">
                <v-card flat>
                    <v-card-text>
                        <SalaryTrend :from="dateRange.from" :to="dateRange.to" />
                        <SalaryCount :from="dateRange.from" :to="dateRange.to" />
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
import DateSelect from '@/components/DateSelect.vue';
import SalaryCount from '@/components/statistics/SalaryCount.vue';
import SalaryTrend from '@/components/statistics/SalaryTrend.vue';
import { ref } from 'vue';

const tab = ref('option-1');
const dateRange = ref();


</script>