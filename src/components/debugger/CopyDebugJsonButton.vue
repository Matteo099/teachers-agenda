<template>
    <v-tooltip v-if="debugEnabled && data != null" :text="label" location="bottom">
        <template #activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" icon="mdi-bug-outline" color="primary" variant="tonal" size="small"
                :aria-label="label" :loading="copying" @click="copyJson" />
        </template>
    </v-tooltip>
</template>

<script setup lang="ts">
import { LocalStorageHandler } from '@/models/storage/local-storage-handler';
import { onMounted, onUnmounted, ref } from 'vue';
import { toast } from 'vue3-toastify';

const props = withDefaults(defineProps<{ data: unknown; label?: string }>(), {
    label: 'Copia dati di debug in JSON',
});

const debugEnabled = ref(false);
const copying = ref(false);

function updateDebugEnabled() {
    debugEnabled.value = LocalStorageHandler.getItem('debugEnabled') === true;
}

function serialize(data: unknown): string {
    const ancestors: object[] = [];
    return JSON.stringify(data, function (_key, value: unknown) {
        if (typeof value === 'bigint') return value.toString();
        if (value instanceof Map) return Object.fromEntries(value);
        if (value instanceof Set) return [...value];
        if (value instanceof Error) return { name: value.name, message: value.message, stack: value.stack };
        if (typeof value === 'object' && value !== null) {
            while (ancestors.length && ancestors[ancestors.length - 1] !== this) ancestors.pop();
            if (ancestors.includes(value)) return '[Circular]';
            ancestors.push(value);
        }
        return value;
    }, 2) ?? 'null';
}

async function writeClipboard(text: string) {
    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return;
        } catch {
            // Some installed PWAs expose Clipboard API but deny writes.
        }
    }
    const input = document.createElement('textarea');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try {
        if (!document.execCommand('copy')) throw new Error('Copia non disponibile');
    } finally {
        input.remove();
    }
}

async function copyJson() {
    copying.value = true;
    try {
        await writeClipboard(serialize(props.data));
        toast.success('JSON copiato negli appunti');
    } catch (error) {
        console.error('Impossibile copiare i dati di debug', error);
        toast.error('Impossibile copiare il JSON');
    } finally {
        copying.value = false;
    }
}

onMounted(() => {
    updateDebugEnabled();
    window.addEventListener('storage', updateDebugEnabled);
});
onUnmounted(() => window.removeEventListener('storage', updateDebugEnabled));
</script>
