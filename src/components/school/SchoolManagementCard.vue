<template>
  <v-card class="school-panel mb-3" variant="flat" :loading="saving">
    <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-chart-box-outline" size="22" /></span><div><h2>Gestione economica</h2><p>Quote mensili e fondo cassa</p></div></div>
    <v-card-text class="school-panel-content">
      <v-row>
        <v-col cols="12" md="4"><div class="school-stat-card primary"><span class="label">Fondo cassa</span><strong class="value">{{ currency(cashBalance) }}</strong></div></v-col>
        <v-col cols="6" md="4"><div class="school-stat-card"><span class="label">Studenti nel mese</span><strong class="value">{{ editValues.totalStudents }}</strong></div></v-col>
        <v-col cols="6" md="4"><div class="school-stat-card"><span class="label">Quota per studente</span><strong class="value">{{ currency(editValues.quotePerStudent) }}</strong></div></v-col>
      </v-row>

      <v-card class="management-section my-4" variant="flat">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-calendar-month-outline" size="22" /></span><div><h2>Storico quota mensile</h2><p>Valori del mese selezionato</p></div></div>
        <v-card-text>
          <v-row class="mb-4 justify-center">
            <v-col cols="12" md="6"><v-select v-model="selectedMonthNumber" :items="monthOptions"
                label="Mese" /></v-col>
            <v-col cols="12" md="6"><v-select v-model="selectedYear" :items="yearOptions" label="Anno" /></v-col>
            <v-col cols="12" md="6"><v-number-input v-model="editValues.totalStudents" :min="0"
                label="Studenti totali" /></v-col>
            <v-col cols="12" md="6"><v-number-input v-model="editValues.quotePerStudent" :min="0" :precision="2"
                prefix="€" label="Quota per studente" /></v-col>
            <v-col cols="12" md="4"><v-btn color="primary" variant="flat" block :loading="saving" @click="saveSnapshot">Salva
                mese</v-btn></v-col>
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
          <div v-else class="text-medium-emphasis">Non ci sono ancora snapshot mensili. I valori configurati nella
            scuola vengono
            usati come base.</div>
        </v-card-text>
      </v-card>

      <v-card class="management-section my-4" variant="flat">
        <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-swap-horizontal" size="22" /></span><div><h2>Movimenti del fondo cassa</h2><p>Entrate e uscite registrate</p></div><v-btn color="primary" prepend-icon="mdi-plus" variant="flat" @click="openNewMovement">Registra movimento</v-btn></div>
        <v-card-text>
          <v-data-table :headers="headers" :items="movementRows" item-value="id" density="comfortable">
            <template #item.date="{ item }">{{ yyyyMMdd.fromIyyyyMMdd(item.date).format() }}</template>
            <template #item.type="{ item }"><v-chip size="small" variant="tonal" :color="item.type === 'INCOME' ? 'success' : 'warning'">{{
              item.type === 'INCOME' ? 'Entrata' : 'Uscita' }}</v-chip></template>
            <template #item.amount="{ item }"><span :class="item.type === 'INCOME' ? 'text-success' : 'text-warning'">{{
              item.type === 'INCOME' ? '+' : '−' }} {{ currency(item.amount) }}</span></template>
            <template #item.balance="{ item }">{{ currency(item.balance) }}</template>
            <template #item.actions="{ item }"><v-btn icon="mdi-pencil" size="small" variant="text"
                aria-label="Modifica movimento" @click="editMovement(item)" /></template>
            <template #no-data>Nessun movimento registrato.</template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>

  <v-dialog v-model="movementDialog" max-width="560">
    <v-card variant="flat">
      <div class="school-panel-header"><span class="school-panel-icon"><v-icon icon="mdi-cash-edit" size="22" /></span><div><h2>{{ editingMovementId ? 'Modifica movimento' : 'Registra movimento' }}</h2><p>Fondo cassa della scuola</p></div></div>
      <v-card-text>
        <v-select v-model="movement.type" :items="movementTypes" label="Tipo movimento" />
        <v-text-field v-model="movement.date" type="date" label="Data" />
        <v-text-field v-model="movement.description" label="Motivazione" />
        <v-number-input v-model="movement.amount" :min="0.01" :precision="2" prefix="€" label="Importo" />
      </v-card-text>
      <v-card-actions><v-spacer /><v-btn variant="text" @click="closeMovementDialog">Annulla</v-btn><v-btn color="primary" variant="flat"
          :loading="saving" @click="saveMovement">{{ editingMovementId ? 'Salva modifiche' : 'Salva movimento'
          }}</v-btn></v-card-actions>
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
  await persist({
    managerOptions: {
      ...managerOptions,
      baseline: managerOptions.baseline ?? { totalStudents: managerOptions.totalStudents, quotePerStudent: managerOptions.quotePerStudent },
      monthlyHistory: history,
    }
  });
  toast.success(`Valori salvati per ${formatMonth(month)}`);
}
function editSnapshot(month: string) {
  selectedYear.value = Number(month.slice(0, 4));
  selectedMonthNumber.value = Number(month.slice(4, 6));
}
async function saveMovement() {
  const amount = Number(movement.amount);
  if (!movement.description.trim() || !Number.isFinite(amount) || amount <= 0 || !movement.date) { toast.warning('Inserisci data, motivazione e un importo valido'); return; }
  const date = movement.date.replace(/-/g, '');
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
