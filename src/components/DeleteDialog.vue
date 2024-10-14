<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ props: activatorProps }">
            <slot name="activator" v-bind="{ props: activatorProps }"></slot>
        </template>

        <v-card prepend-icon="mdi-alert" class="mx-auto" max-width="500" :title="'Elimina ' + objName">
            <v-card-text>
                <p>Sei sicuro di voler eliminare <b>{{ name }}</b>?</p>
                <br>
                <p>Dopo avere eliminato la risorsa <b>NON</b> è più possibile recuperare i dati!</p>
            </v-card-text>

            <v-card-actions>
                <v-btn text="Annulla" @click="dialog = false"></v-btn>
                <v-spacer></v-spacer>
                <v-btn color="surface-variant" text="Elimina" variant="flat" @click="remove"
                    :loading="removing"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toast } from 'vue3-toastify';


interface DeleteDialogProps {
    objName?: string,
    useToast?: boolean,
    name: string,
    onDelete: () => Promise<boolean>
}

const props = withDefaults(defineProps<DeleteDialogProps>(), {
    objName: "Oggetto",
    useToast: true
});
const emit = defineEmits(['delete']);
const dialog = ref(false);
const removing = ref(false);


async function remove() {
    removing.value = true;
    const res = await props.onDelete?.() ?? false;
    if (props.useToast) {
        if (res) toast.success(`${props.objName} eliminato/a`)
        else toast.warning("Errore durante l'eliminazione")
    }
    removing.value = false;
    dialog.value = res;
}
</script>