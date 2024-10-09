<template>
    <v-card prepend-icon="mdi-school" title="Scuola">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-text-field v-model="name" label="Nome" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="city" label="Città"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="email" label="Email"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="phoneNumber" label="Numero di Telefono"></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                    <v-row justify-center>
                        <v-col class="align-self-center">
                            <v-checkbox v-model="managed" label="Gestione"></v-checkbox>
                        </v-col>
                        <v-col class="align-self-center">
                            <v-dialog v-if="managed" v-model="dialogManager" fullscreen>
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn text="Gestione" v-bind="activatorProps"></v-btn>
                                </template>

                                <ManagerEditor :initialManagerOptions="managerOptions" @close="dialogManager = false"
                                    @save="saveManagerOptions($event)">
                                </ManagerEditor>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- <v-divider class="my-5"></v-divider> -->

                <v-col cols="12" md="6">
                    <v-dialog v-model="dialogLevels" fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn text="Gestisci Livelli" v-bind="activatorProps"></v-btn>
                        </template>

                        <LevelRangeEditor :initialLevelRanges="levelRanges" @close="dialogLevels = false"
                            @save="saveLevelRanges($event)"></LevelRangeEditor>

                    </v-dialog>
                </v-col>
            </v-row>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Chiudi" variant="plain" @click="emit('close')"></v-btn>

            <v-btn color="primary" :loading="saving" :disabled="saving" :text="edit ? 'Salva Modifiche' : 'Crea'"
                variant="tonal" @click="save"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { LevelRange, ManagerOptions, School } from '@/models/model';
import { addDoc, doc, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { onMounted, ref, watch, type Ref } from 'vue';
import LevelRangeEditor from './LevelRangeEditor.vue';
import ManagerEditor from './ManagerEditor.vue';
import { DatabaseRef, useDB } from '@/models/firestore-utils';

const schoolsRef = useDB<School>(DatabaseRef.SCHOOLS);
const props = defineProps<{ initialSchool?: School, edit?: boolean }>()
const emit = defineEmits(['close', 'save'])

const name = ref("");
const city = ref("");
const email = ref("");
const phoneNumber = ref("");
const managed = ref(false);
const managerOptions: Ref<ManagerOptions | undefined> = ref();
const levelRanges: Ref<LevelRange[]> = ref([]);

const dialogLevels = ref(false)
const dialogManager = ref(false)
const saving = ref(false);

watch(() => props.initialSchool, () => updateSchool())

function updateSchool() {
    if (props.initialSchool) {
        const schoolClone = JSON.parse(JSON.stringify(props.initialSchool)) as School;
        name.value = schoolClone.name;
        city.value = schoolClone.city ?? "";
        email.value = schoolClone.email ?? "";
        phoneNumber.value = schoolClone.phoneNumber ?? "";
        managed.value = schoolClone.managed;
        managerOptions.value = schoolClone.managerOptions;
        levelRanges.value = schoolClone.levelRanges;
    }
}

function saveManagerOptions(mo: ManagerOptions) {
    console.log(mo, JSON.stringify(mo));
    managerOptions.value = mo;
    dialogManager.value = false
}

function saveLevelRanges(lr: LevelRange[]) {
    console.log(lr, JSON.stringify(lr));
    levelRanges.value = lr;
    dialogLevels.value = false;
}

async function save() {
    saving.value = true;

    const school: Partial<School> = {
        name: name.value,
        managed: managed.value,
        levelRanges: levelRanges.value,
        city: city.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        createdAt: props.edit ? props.initialSchool?.createdAt : Timestamp.now(),
        updatedAt: Timestamp.now(),
    };
    if (managed.value) school.managerOptions = managerOptions.value;

    name.value = "";
    city.value = "";
    email.value = "";
    phoneNumber.value = "";
    managed.value = false;
    levelRanges.value = [];
    managerOptions.value = undefined;

    try {
        if (props.edit && props.initialSchool?.id != undefined) {
            const docRef = await setDoc(doc(schoolsRef, props.initialSchool.id), school);
            console.log("Document (schools) update with ID: ", school.id, docRef);
        } else {
            const docRef = await addDoc(schoolsRef, school);
            console.log("Document (schools) written with ID: ", docRef.id);
        }
        emit('save', school);
    } catch (e) {
        emit('save');
        console.error("Error adding document (schools): ", e);
    } finally {
        saving.value = false;
    }
}

onMounted(() => updateSchool())
</script>