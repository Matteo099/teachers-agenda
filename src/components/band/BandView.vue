<template>
    <v-card class="school-panel" variant="flat" :loading="loading">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-account-music-outline" size="22" /></span><div><h2>Band di musica d'insieme</h2><p>Gruppi e componenti</p></div><v-btn prepend-icon="mdi-plus" color="primary" variant="flat" @click="editing = undefined; dialog = true">Nuova band</v-btn></div>
        <v-card-text class="school-panel-content">
            <v-list v-if="bands.length" class="band-list">
                <v-list-item v-for="band in bands" :key="band.id" :title="band.name"
                    :subtitle="`${band.bandMembers?.length ?? 0} componenti · ${band.minutesLessonDuration} minuti`">
                    <template #prepend><span class="band-avatar"><v-icon icon="mdi-music-note" size="20" /></span></template>
                    <template #append>
                        <v-btn icon="mdi-pencil-outline" variant="text" size="small" aria-label="Modifica band" @click="editing = band; dialog = true" />
                        <DeleteDialog :name="band.name" objName="Band" :onDelete="() => deleteBand(band)">
                            <template #activator="{ props: activatorProps }"><v-btn icon="mdi-delete-outline" color="error" variant="text" size="small" aria-label="Elimina band" v-bind="activatorProps" /></template>
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
import { StudentRepository } from '@/models/repositories/student-repository';
import { onMounted, onUnmounted, ref } from 'vue';
import type { EventSubscription } from '@/models/utils/event';
import BandEditor from './BandEditor.vue';
import DeleteDialog from '../DeleteDialog.vue';
import { StudentService } from '@/models/services/student-service';

const props = defineProps<{ school: School }>();
const bands = ref<Student[]>([]); const loading = ref(false); const dialog = ref(false); const editing = ref<Student>();
let subscription: EventSubscription;
async function load() {
    loading.value = true;
    subscription?.unsubscribe();
    subscription = StudentService.instance.observeStudentsOfSchool(props.school.id).subscribe({ next: data => { bands.value = data.filter(student => student.isBand); loading.value = false; } });
}
async function deleteBand(band: Student): Promise<boolean> { await StudentRepository.instance.delete(band.id); return true; }
onMounted(load); onUnmounted(() => subscription?.unsubscribe());
</script>

<style scoped>
.band-list { padding: 0; background: transparent; }
.band-list :deep(.v-list-item) { margin-bottom: 8px; border: 1px solid var(--app-border); border-radius: 12px; }
.band-list :deep(.v-list-item:hover) { background: var(--app-hover-surface); border-color: var(--app-hover-border); }
.band-avatar { display: grid; place-items: center; width: 38px; height: 38px; margin-right: 12px; border-radius: 11px; color: var(--app-primary); background: var(--app-accent-surface); }
</style>
