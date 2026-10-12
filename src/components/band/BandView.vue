<template>
    <v-card class="school-panel" variant="flat" :loading="loading">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-account-music-outline" size="22" /></span><div><h2>Band di musica d'insieme</h2></div><v-btn prepend-icon="mdi-plus" color="primary" variant="flat" @click="editing = undefined; dialog = true">Nuova band</v-btn></div>
        <v-card-text class="school-panel-content">
            <v-list v-if="bands.length" class="band-list">
                <v-list-item v-for="band in bands" :key="band.id" :title="band.name"
                    :subtitle="`${band.bandMembers?.length ?? 0} componenti · ${band.minutesLessonDuration} minuti${band.removed ? ' · Archiviata' : ''}`">
                    <template #prepend><span class="band-avatar"><v-icon icon="mdi-music-note" size="20" /></span></template>
                    <template #append>
                        <v-btn icon="mdi-pencil-outline" variant="text" size="small" aria-label="Modifica band" @click="editing = band; dialog = true" />
                        <v-btn v-if="band.removed" icon="mdi-archive-arrow-up-outline" color="primary" variant="text" size="small" aria-label="Ripristina band" @click="setBandArchived(band, false)" />
                        <DeleteDialog v-else :name="band.name" objName="Band" title="Archivia band"
                            description="La band resterà nelle lezioni già registrate. Sarà rimossa dagli orari programmati e dalle lezioni future ancora da svolgere."
                            warning="Potrai ripristinarla, ma gli orari rimossi non saranno ricreati automaticamente." confirm-text="Archivia" icon="mdi-archive-outline"
                            success-text="Band archiviata" error-text="Impossibile archiviare la band" :onDelete="() => setBandArchived(band, true)">
                            <template #activator="{ props: activatorProps }"><v-btn icon="mdi-archive-outline" color="secondary" variant="text" size="small" aria-label="Archivia band" v-bind="activatorProps" /></template>
                        </DeleteDialog>
                    </template>
                </v-list-item>
            </v-list>
            <div v-else class="school-panel-empty">Nessuna band configurata.</div>
        </v-card-text>
        <v-dialog v-model="dialog" fullscreen>
            <BandEditor :school="school" :initial-band="editing" @close="dialog = false" @save="dialog = false" />
        </v-dialog>
    </v-card>
</template>

<script setup lang="ts">
import type { School, Student } from '@/models/model';
import { onMounted, onUnmounted, ref } from 'vue';
import type { EventSubscription } from '@/models/utils/event';
import BandEditor from './BandEditor.vue';
import DeleteDialog from '../DeleteDialog.vue';
import { StudentService } from '@/models/services/student-service';
import { toast } from 'vue3-toastify';

const props = defineProps<{ school: School }>();
const bands = ref<Student[]>([]); const loading = ref(false); const dialog = ref(false); const editing = ref<Student>();
let subscription: EventSubscription;
async function load() {
    loading.value = true;
    subscription?.unsubscribe();
    subscription = StudentService.instance.observeStudentsOfSchool(props.school.id).subscribe({ next: data => { bands.value = data.filter(student => student.isBand); loading.value = false; } });
}
async function setBandArchived(band: Student, archived: boolean): Promise<boolean> {
    try {
        await StudentService.instance.setArchived(band.id, archived);
        if (!archived) toast.success('Band ripristinata');
        return true;
    } catch {
        if (!archived) toast.error('Impossibile ripristinare la band');
        return false;
    }
}
onMounted(load); onUnmounted(() => subscription?.unsubscribe());
</script>

<style scoped>
.band-list { padding: 0; background: transparent; }
.band-list :deep(.v-list-item) { margin-bottom: 8px; border: 1px solid var(--app-border); border-radius: 12px; }
.band-list :deep(.v-list-item:hover) { background: var(--app-hover-surface); border-color: var(--app-hover-border); }
.band-avatar { display: grid; place-items: center; width: 38px; height: 38px; margin-right: 12px; border-radius: 11px; color: var(--app-primary); background: var(--app-accent-surface); }
</style>
