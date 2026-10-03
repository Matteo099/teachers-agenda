<template>
  <v-card class="mb-3" elevation="3" title="Gestione economica" :loading="saving">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="4"><v-card variant="tonal" title="Fondo cassa" :text="currency(cashBalance)" /></v-col>
        <v-col cols="12" md="4"><v-card variant="tonal" title="Studenti nel mese selezionato" :text="String(editValues.totalStudents)" /></v-col>
        <v-col cols="12" md="4"><v-card variant="tonal" title="Quota mensile per studente" :text="currency(editValues.quotePerStudent)" /></v-col>
      </v-row>

      <v-card class="my-4" variant="outlined" title="Storico quota mensile">
        <v-card-text>
          <v-row align="center">
            <v-col cols="7" sm="2"><v-select v-model="selectedMonthNumber" :items="monthOptions" label="Mese" /></v-col>
            <v-col cols="5" sm="2"><v-select v-model="selectedYear" :items="yearOptions" label="Anno" /></v-col>
            <v-col cols="6" sm="3"><v-number-input v-model="editValues.totalStudents" :min="0" label="Studenti totali" /></v-col>
            <v-col cols="6" sm="3"><v-number-input v-model="editValues.quotePerStudent" :min="0" :precision="2" prefix="€" label="Quota per studente" /></v-col>
            <v-col cols="12" sm="2"><v-btn color="primary" block :loading="saving" @click="saveSnapshot">Salva mese</v-btn></v-col>
          </v-row>
          <v-data-table v-if="snapshots.length" :headers="snapshotHeaders" :items="snapshots" item-value="month"
            density="compact" :items-per-page="5" items-per-page-text="Righe per pagina">
            <template #item.month="{ item }">{{ formatMonth(item.month) }}</template>
            <template #item.quotePerStudent="{ item }">{{ currency(item.quotePerStudent) }}</template>
            <template #item.monthlyTotal="{ item }">{{ currency(item.totalStudents * item.quotePerStudent) }}</template>
            <template #item.actions="{ item }">
              <v-btn icon="mdi-pencil" size="small" variant="text" aria-label="Modifica quota mensile"
                @click="editSnapshot(item.month)" />
            </template>
          </v-data-table>
          <div v-else class="text-medium-emphasis">Non ci sono ancora snapshot mensili. I valori configurati nella scuola vengono usati come base.</div>
        </v-card-text>
      </v-card>

      <v-card class="my-4" variant="outlined" title="Movimenti del fondo cassa">
        <template #append>
          <v-btn color="primary" prepend-icon="mdi-plus" @click="openNewMovement">Registra movimento</v-btn>
        </template>
        <v-card-text>
          <v-data-table :headers="headers" :items="movementRows" item-value="id" density="comfortable">
            <template #item.date="{ item }">{{ yyyyMMdd.fromIyyyyMMdd(item.date).format() }}</template>
            <template #item.type="{ item }"><v-chip size="small" :color="item.type === 'INCOME' ? 'green' : 'orange'">{{ item.type === 'INCOME' ? 'Entrata' : 'Uscita' }}</v-chip></template>
            <template #item.amount="{ item }"><span :class="item.type === 'INCOME' ? 'text-green' : 'text-orange'">{{ item.type === 'INCOME' ? '+' : '−' }} {{ currency(item.amount) }}</span></template>
            <template #item.balance="{ item }">{{ currency(item.balance) }}</template>
            <template #item.actions="{ item }"><v-btn icon="mdi-pencil" size="small" variant="text" aria-label="Modifica movimento" @click="editMovement(item)" /></template>
            <template #no-data>Nessun movimento registrato.</template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>

  <v-dialog v-model="movementDialog" max-width="560">
    <v-card :title="editingMovementId ? 'Modifica movimento cassa' : 'Registra movimento cassa'">
      <v-card-text>
        <v-select v-model="movement.type" :items="movementTypes" label="Tipo movimento" />
        <v-text-field v-model="movement.date" type="date" label="Data" />
        <v-text-field v-model="movement.description" label="Motivazione" />
        <v-number-input v-model="movement.amount" :min="0.01" :precision="2" prefix="€" label="Importo" />
      </v-card-text>
      <v-card-actions><v-spacer /><v-btn @click="closeMovementDialog">Annulla</v-btn><v-btn color="primary" :loading="saving" @click="saveMovement">{{ editingMovementId ? 'Salva modifiche' : 'Salva movimento' }}</v-btn></v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { Timestamp } from 'firebase/firestore';
import { yyyyMMdd, type CashMovement, type ManagerMonthlySnapshot, type School } from '@/models/model';
import { SchoolRepository } from '@/models/repositories/school-repository';
import { toast } from 'vue3-toastify';

const props = defineProps<{ school: School }>();
const saving = ref(false);
const movementDialog = ref(false);
const editingMovementId = ref<string>();
const now = new Date();
const selectedYear = ref(now.getFullYear());
const selectedMonthNumber = ref(now.getMonth() + 1);
const selectedMonth = computed(() => `${selectedYear.value}-${String(selectedMonthNumber.value).padStart(2, '0')}`);
const editValues = reactive({ totalStudents: props.school.managerOptions?.totalStudents ?? 0, quotePerStudent: props.school.managerOptions?.quotePerStudent ?? 0 });
const todayKey = yyyyMMdd.today().toIyyyyMMdd();
const movement = reactive<{ type: 'INCOME' | 'EXPENSE'; date: string; description: string; amount: number }>({ type: 'INCOME', date: `${todayKey.slice(0, 4)}-${todayKey.slice(4, 6)}-${todayKey.slice(6, 8)}`, description: '', amount: 0 });
const movementTypes = [{ title: 'Entrata', value: 'INCOME' }, { title: 'Uscita', value: 'EXPENSE' }];
const headers = [{ title: 'Data', key: 'date' }, { title: 'Tipo', key: 'type' }, { title: 'Motivazione', key: 'description' }, { title: 'Importo', key: 'amount', align: 'end' as const }, { title: 'Saldo dopo il movimento', key: 'balance', align: 'end' as const }, { title: 'Azioni', key: 'actions', sortable: false, align: 'center' as const }];
const snapshotHeaders = [
  { title: 'Mese', key: 'month' },
  { title: 'Studenti', key: 'totalStudents' },
  { title: 'Quota', key: 'quotePerStudent' },
  { title: 'Totale mensile', key: 'monthlyTotal' },
  { title: 'Azioni', key: 'actions', sortable: false, align: 'center' as const },
];
const snapshots = computed(() => [...(props.school.managerOptions?.monthlyHistory ?? [])].sort((a, b) => b.month.localeCompare(a.month)));
const monthOptions = Array.from({ length: 12 }, (_, index) => ({
  title: new Intl.DateTimeFormat('it-IT', { month: 'long' }).format(new Date(2020, index, 1)),
  value: index + 1,
}));
const yearOptions = computed(() => {
  const currentYear = now.getFullYear();
  const years = new Set(Array.from({ length: 7 }, (_, index) => currentYear - 5 + index));
  snapshots.value.forEach(snapshot => years.add(Number(snapshot.month.slice(0, 4))));
  return [...years].sort((a, b) => b - a);
});
const movementRows = computed(() => {
  let balance = props.school.managerOptions?.cashFund ?? 0;
  return [...(props.school.cashMovements ?? [])].sort((a, b) => a.date.localeCompare(b.date)).map(item => {
    balance += item.type === 'INCOME' ? item.amount : -item.amount;
    return { ...item, balance };
  }).reverse();
});
const cashBalance = computed(() => (props.school.managerOptions?.cashFund ?? 0) + (props.school.cashMovements ?? []).reduce((total, item) => total + (item.type === 'INCOME' ? item.amount : -item.amount), 0));

watch(() => [props.school.managerOptions?.totalStudents, props.school.managerOptions?.quotePerStudent, props.school.managerOptions?.monthlyHistory, selectedMonth.value], () => {
  const monthKey = selectedMonth.value.replace('-', '');
  const snapshot = [...(props.school.managerOptions?.monthlyHistory ?? [])]
    .filter(item => item.month <= monthKey).sort((a, b) => b.month.localeCompare(a.month))[0];
  editValues.totalStudents = snapshot?.totalStudents ?? props.school.managerOptions?.baseline?.totalStudents ?? props.school.managerOptions?.totalStudents ?? 0;
  editValues.quotePerStudent = snapshot?.quotePerStudent ?? props.school.managerOptions?.baseline?.quotePerStudent ?? props.school.managerOptions?.quotePerStudent ?? 0;
}, { immediate: true });

function currency(value: number) { return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value); }
function formatMonth(month: string) { return new Intl.DateTimeFormat('it-IT', { month: 'long', year: 'numeric' }).format(new Date(Number(month.slice(0, 4)), Number(month.slice(4, 6)) - 1, 1)); }
function openNewMovement() {
  editingMovementId.value = undefined;
  movement.type = 'INCOME';
  movement.date = `${todayKey.slice(0, 4)}-${todayKey.slice(4, 6)}-${todayKey.slice(6, 8)}`;
  movement.description = '';
  movement.amount = 0;
  movementDialog.value = true;
}
function editMovement(item: CashMovement) {
  editingMovementId.value = item.id;
  movement.type = item.type;
  movement.date = `${item.date.slice(0, 4)}-${item.date.slice(4, 6)}-${item.date.slice(6, 8)}`;
  movement.description = item.description;
  movement.amount = item.amount;
  movementDialog.value = true;
}
function closeMovementDialog() { movementDialog.value = false; editingMovementId.value = undefined; }
async function persist(patch: Partial<School>) {
  if (saving.value) return;
  saving.value = true;
  try {
    await SchoolRepository.instance.save({ ...props.school, ...patch, updatedAt: Timestamp.now() }, props.school.id);
  } catch (error) { toast.error('Impossibile salvare la gestione della scuola'); console.error(error); }
  finally { saving.value = false; }
}
async function saveSnapshot() {
  const month = selectedMonth.value.replace('-', '');
  if (!/^\d{6}$/.test(month) || editValues.totalStudents < 0 || editValues.quotePerStudent < 0) return;
  const managerOptions = props.school.managerOptions ?? { totalStudents: 0, quotePerStudent: 0, cashFund: 0 };
  const next: ManagerMonthlySnapshot = { month, totalStudents: Number(editValues.totalStudents), quotePerStudent: Number(editValues.quotePerStudent) };
  const history = [...(managerOptions.monthlyHistory ?? []).filter(item => item.month !== month), next].sort((a, b) => a.month.localeCompare(b.month));
  await persist({ managerOptions: {
    ...managerOptions,
    baseline: managerOptions.baseline ?? { totalStudents: managerOptions.totalStudents, quotePerStudent: managerOptions.quotePerStudent },
    monthlyHistory: history,
  } });
  toast.success(`Valori salvati per ${formatMonth(month)}`);
}
function editSnapshot(month: string) {
  selectedYear.value = Number(month.slice(0, 4));
  selectedMonthNumber.value = Number(month.slice(4, 6));
}
async function saveMovement() {
  const amount = Number(movement.amount);
  if (!movement.description.trim() || !Number.isFinite(amount) || amount <= 0 || !movement.date) { toast.warning('Inserisci data, motivazione e un importo valido'); return; }
  const date = movement.date.replaceAll('-', '');
  const existing = props.school.cashMovements ?? [];
  const entry: CashMovement = { id: editingMovementId.value ?? crypto.randomUUID(), date, type: movement.type, description: movement.description.trim(), amount };
  const cashMovements = editingMovementId.value
    ? existing.map(item => item.id === editingMovementId.value ? entry : item)
    : [...existing, entry];
  const wasEditing = !!editingMovementId.value;
  await persist({ cashMovements });
  movement.description = ''; movement.amount = 0; closeMovementDialog();
  toast.success(wasEditing ? 'Movimento aggiornato' : 'Movimento registrato');
}
</script>
