<template>
    <v-card title="Band">
        <v-card-text>
            <v-text-field v-model="name" label="Nome della band" required />
            <v-row>
                <v-col cols="12" md="6">
                    <v-select v-model="level" :items="levels" label="Livello" />
                </v-col>
                <v-col cols="12" md="6">
                    <v-number-input v-model="minutes" label="Minuti di prova" :min="1" suffix="min" />
                </v-col>
            </v-row>
            <v-divider class="my-4" />
            <div class="text-subtitle-1 mb-2">Componenti</div>
            <v-card v-for="(member, index) in members" :key="member.id" class="mb-4 pa-3" variant="outlined">
                <v-card-title class="px-0 d-flex align-center">
                    Componente {{ index + 1 }}
                    <v-spacer />
                    <v-btn icon="mdi-delete" variant="text" color="error" size="small"
                        @click="members.splice(index, 1)" />
                </v-card-title>
                <v-card-text class="px-0 pb-0">
                    <v-row>
                        <v-col cols="12">
                            <v-select :model-value="member.studentId" :items="schoolStudents" item-title="fullName"
                                item-value="id" label="Studente della scuola" clearable
                                @update:model-value="selectStudent(member, $event)" />
                        </v-col>
                        <v-col cols="12" sm="4"><v-text-field v-model="member.name" label="Nome" /></v-col>
                        <v-col cols="12" sm="4"><v-text-field v-model="member.surname" label="Cognome" /></v-col>
                        <v-col cols="12" sm="4"><v-text-field v-model="member.instrument" label="Strumento" /></v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-btn prepend-icon="mdi-account-plus" variant="tonal" @click="addMember">Aggiungi componente</v-btn>
        </v-card-text>
        <v-card-actions>
            <v-spacer /><v-btn text="Chiudi" variant="plain" @click="emit('close')" />
            <v-btn color="primary" text="Salva" :loading="saving" @click="save" />
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { BandMember, School, Student } from '@/models/model';
import { StudentRepository } from '@/models/repositories/student-repository';
import { StudentService } from '@/models/services/student-service';
import { Timestamp } from 'firebase/firestore';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps<{ school: School; initialBand?: Student }>();
const emit = defineEmits(['close', 'save']);
const name = ref(props.initialBand?.name ?? '');
const levels = props.school.levelRanges.flatMap(range => range.levels).filter((level, index, all) => all.indexOf(level) === index);
const level = ref(props.initialBand?.level ?? levels[0] ?? '');
const minutes = ref(props.initialBand?.minutesLessonDuration ?? 60);
const members = ref<BandMember[]>(structuredClone(props.initialBand?.bandMembers ?? []));
const schoolStudents = ref<Array<Student & { fullName: string }>>([]);
const saving = ref(false);

StudentService.instance.getStudentsOfSchool(props.school.id).then(students => {
    schoolStudents.value = students
        .filter(student => !student.isBand)
        .map(student => ({ ...student, fullName: `${student.name} ${student.surname}` }));
});

function addMember() { members.value.push({ id: uuidv4(), name: '', surname: '', instrument: '' }); }

function selectStudent(member: BandMember, studentId?: string): void {
    member.studentId = studentId;
    const student = schoolStudents.value.find(item => item.id === studentId);
    if (student) {
        member.name = student.name;
        member.surname = student.surname;
    }
}

async function save() {
    if (!name.value.trim() || !level.value) return;
    saving.value = true;
    const band: Partial<Student> = {
        ...(props.initialBand ?? {}),
        name: name.value.trim(), surname: '', schoolId: props.school.id, isBand: true,
        bandMembers: members.value, level: level.value, minutesLessonDuration: Number(minutes.value),
        createdAt: props.initialBand?.createdAt ?? Timestamp.now(), updatedAt: Timestamp.now(),
    } as Partial<Student>;
    const id = await StudentRepository.instance.save(band, props.initialBand?.id);
    emit('save', { ...band, id });
    saving.value = false;
}
</script>
