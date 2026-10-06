<template>
    <v-card class="band-editor" variant="flat">
        <div class="editor-page-header"><span class="school-panel-icon"><v-icon icon="mdi-account-music-outline" size="24" /></span><div><span>{{ school.name }}</span><h2>{{ initialBand ? 'Modifica band' : 'Nuova band' }}</h2></div><v-btn icon="mdi-close" variant="text" aria-label="Chiudi" @click="emit('close')" /></div>
        <v-card-text class="editor-page-content">
            <section class="editor-page-section">
            <div class="editor-section-title"><v-icon icon="mdi-information-outline" size="20" /><h3>Informazioni della band</h3></div>
            <v-text-field v-model="name" label="Nome della band" variant="outlined" required />
            <v-row>
                <v-col cols="12" md="6">
                    <v-select v-model="level" :items="levels" label="Livello" variant="outlined" />
                </v-col>
                <v-col cols="12" md="6">
                    <v-number-input v-model="minutes" label="Minuti di prova" variant="outlined" :min="1" suffix="min" />
                </v-col>
            </v-row>
            </section>
            <section class="editor-page-section">
            <div class="editor-section-title"><v-icon icon="mdi-account-group-outline" size="20" /><h3>Componenti</h3></div>
            <v-card v-for="(member, index) in members" :key="member.id" class="member-card mb-4 pa-3" variant="flat">
                <v-card-title class="px-0 d-flex align-center">
                    Componente {{ index + 1 }}
                    <v-spacer />
                    <v-btn icon="mdi-delete" variant="text" color="error" size="small"
                                    aria-label="Rimuovi componente" @click="members.splice(index, 1)" />
                </v-card-title>
                <v-card-text class="px-0 pb-0">
                    <v-row>
                        <v-col cols="12">
                            <v-select :model-value="member.studentId" :items="availableStudents(member)" item-title="fullName"
                                item-value="id" label="Studente della scuola" variant="outlined" clearable
                                @update:model-value="selectStudent(member, $event)" />
                        </v-col>
                        <v-col cols="12" sm="4"><v-text-field v-model="member.name" label="Nome" variant="outlined" /></v-col>
                        <v-col cols="12" sm="4"><v-text-field v-model="member.surname" label="Cognome" variant="outlined" /></v-col>
                        <v-col cols="12" sm="4"><v-text-field v-model="member.instrument" label="Strumento" variant="outlined" /></v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-btn prepend-icon="mdi-account-plus" color="primary" variant="tonal" @click="addMember">Aggiungi componente</v-btn>
            </section>
        </v-card-text>
        <v-card-actions class="editor-page-actions">
            <v-spacer /><v-btn text="Chiudi" variant="text" @click="emit('close')" />
            <v-btn color="primary" text="Salva" variant="flat" :loading="saving" @click="save" />
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import type { BandMember, School, Student } from '@/models/model';
import { StudentRepository } from '@/models/repositories/student-repository';
import { StudentService } from '@/models/services/student-service';
import { Timestamp } from 'firebase/firestore';
import { ref, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps<{ school: School; initialBand?: Student }>();
const emit = defineEmits(['close', 'save']);
const name = ref(props.initialBand?.name ?? '');
const levels = props.school.levelRanges.flatMap(range => range.levels).filter((level, index, all) => all.indexOf(level) === index);
const level = ref(props.initialBand?.level ?? levels[0] ?? '');
const minutes = ref(props.initialBand?.minutesLessonDuration ?? 60);
const members = ref<BandMember[]>(copyMembers(props.initialBand));
const schoolStudents = ref<Array<Student & { fullName: string }>>([]);
const saving = ref(false);

function loadBand(band?: Student): void {
    name.value = band?.name ?? '';
    level.value = band?.level ?? levels[0] ?? '';
    minutes.value = band?.minutesLessonDuration ?? 60;
    members.value = copyMembers(band);
}

function copyMembers(band?: Student): BandMember[] {
    return (band?.bandMembers ?? []).map(member => ({ ...member }));
}

watch(() => props.initialBand, loadBand, { deep: true });

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

function availableStudents(member: BandMember): Array<Student & { fullName: string }> {
    const assignedToOtherMember = new Set(
        members.value
            .filter(otherMember => otherMember.id !== member.id)
            .map(otherMember => otherMember.studentId)
            .filter(Boolean),
    );
    return schoolStudents.value.filter(student => !assignedToOtherMember.has(student.id));
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
