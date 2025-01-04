<template>
    <v-row>
        <v-col>
            SalaryCount
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import type { IyyyyMMdd } from '@/models/model';


interface SalaryTrendProps {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
}

const props = defineProps<SalaryTrendProps>()

</script>