<template>
    <v-dialog v-model="dialog" max-width="460">
        <template v-slot:activator="{ props: activatorProps }">
            <slot name="activator" v-bind="{ props: activatorProps }"></slot>
        </template>

        <v-card class="delete-dialog" variant="flat">
            <div class="delete-dialog-heading">
                <span class="delete-dialog-icon"><v-icon icon="mdi-delete-outline" size="25" /></span>
                <h2>Elimina {{ objName }}</h2>
            </div>
            <p class="delete-dialog-description">Vuoi eliminare definitivamente questo elemento?</p>
            <div class="delete-dialog-item">{{ name }}</div>
            <p class="delete-dialog-warning"><v-icon icon="mdi-information-outline" size="18" /> L'operazione non può essere annullata.</p>
            <v-card-actions class="delete-dialog-actions">
                <v-btn text="Annulla" variant="outlined" :disabled="removing" @click="dialog = false" />
                <v-btn color="error" prepend-icon="mdi-delete-outline" text="Elimina" variant="flat"
                    :loading="removing" @click="remove" />
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

defineEmits(['delete']);

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
    dialog.value = !res;
}
</script>

<style scoped>
.delete-dialog { padding: 28px; }
.delete-dialog-heading { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.delete-dialog-icon { display: grid; place-items: center; width: 48px; height: 48px; flex: none; border-radius: 14px; background: rgba(var(--v-theme-error), .1); color: rgb(var(--v-theme-error)); }
.delete-dialog h2 { margin: 0; color: var(--app-text); font-size: 1.2rem; font-weight: 700; }
.delete-dialog-description { margin: 8px 0 16px; color: var(--app-muted); font-size: .9rem; }
.delete-dialog-item { overflow-wrap: anywhere; padding: 12px 14px; border: 1px solid var(--app-border); border-radius: 11px; background: var(--app-background); color: var(--app-text); font-size: .9rem; font-weight: 650; }
.delete-dialog-warning { display: flex; align-items: center; gap: 7px; margin: 16px 0 0; color: var(--app-muted); font-size: .8rem; }
.delete-dialog-actions { justify-content: flex-end; gap: 8px; padding: 24px 0 0; }
.delete-dialog-actions .v-btn:first-child { border-color: var(--app-border); }
@media (max-width: 480px) { .delete-dialog { padding: 22px; } .delete-dialog-actions { display: grid; grid-template-columns: 1fr 1fr; } .delete-dialog-actions .v-btn { min-width: 0; } }
</style>
