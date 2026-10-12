<template>
    <v-dialog v-model="open" max-width="460">
        <template #activator="{ props: activatorProps }"><slot name="activator" :props="activatorProps" /></template>
        <v-card variant="flat" class="pa-5">
            <v-card-title class="px-0 d-flex align-center ga-3"><v-icon :icon="archived ? 'mdi-archive-outline' : 'mdi-archive-arrow-up-outline'" color="warning" />{{ archived ? 'Archivia' : 'Ripristina' }} {{ entityLabel }}</v-card-title>
            <v-card-text class="px-0">
                <p class="mb-4">{{ name }}</p>
                <v-date-input v-model="actionDate" label="Data del cambio" variant="outlined" :max="new Date()" />
                <p class="text-body-2 text-medium-emphasis">Il cambio si applica alle lezioni dal giorno successivo. Le lezioni precedenti restano nello storico.</p>
            </v-card-text>
            <v-card-actions class="px-0"><v-spacer /><v-btn variant="text" :disabled="saving" @click="open = false">Annulla</v-btn><v-btn color="primary" variant="flat" :loading="saving" :disabled="!actionDate" @click="confirm">{{ archived ? 'Archivia' : 'Ripristina' }}</v-btn></v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { yyyyMMdd, type IyyyyMMdd } from '@/models/model';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

const props = defineProps<{
    name: string;
    entityLabel: string;
    archived: boolean;
    onConfirm: (date: IyyyyMMdd) => Promise<void>;
}>();
const open = ref(false);
const saving = ref(false);
const actionDate = ref<Date | null>(new Date());

async function confirm() {
    if (!actionDate.value) return;
    saving.value = true;
    try {
        await props.onConfirm(yyyyMMdd.fromDate(actionDate.value).toIyyyyMMdd());
        toast.success(props.archived ? 'Archiviato' : 'Ripristinato');
        open.value = false;
    } catch (error) {
        console.error('Impossibile aggiornare lo stato di archivio', error);
        toast.error('Impossibile aggiornare lo stato di archivio');
    } finally {
        saving.value = false;
    }
}
</script>
