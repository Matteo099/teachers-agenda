<template>
    <v-card title="Band di musica d'insieme" elevation="3" :loading="loading">
        <v-card-text>
            <v-btn class="mb-3" prepend-icon="mdi-plus" color="success" @click="editing = undefined; dialog = true">band</v-btn>
            <v-list v-if="bands.length">
                <v-list-item v-for="band in bands" :key="band.id" :title="band.name"
                    :subtitle="`${band.bandMembers?.length ?? 0} componenti · ${band.minutesLessonDuration} minuti`">
                    <template #append>
                        <v-btn icon="mdi-pencil" variant="text" @click="editing = band; dialog = true" />
                        <DeleteDialog :name="band.name" objName="Band" :onDelete="() => deleteBand(band)">
                            <template #activator="{ props: activatorProps }"><v-btn icon="mdi-delete" variant="text" v-bind="activatorProps" /></template>
                        </DeleteDialog>
                    </template>
                </v-list-item>
            </v-list>
            <div v-else>Nessuna band configurata.</div>
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
