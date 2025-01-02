<template>
    <v-card class="console-card">
        <v-layout>
            <v-system-bar color="pink-darken-2" style="height: 35px">
                <v-btn class="ms-1" density="compact" variant="text" icon="mdi-dots-vertical"
                    @click="toggleMore"></v-btn>
                <v-btn class="ms-1" density="compact" variant="text" icon="mdi-format-vertical-align-bottom"
                    :color="follow ? 'yellow' : ''" @click="toggleFollow"></v-btn>
                <v-btn class="ms-1" density="compact" variant="text" icon="mdi-content-copy" @click="copy"></v-btn>
                <v-spacer></v-spacer>
                <v-btn class="ms-1" density="compact" variant="text" icon="mdi-delete" @click="clear"></v-btn>
            </v-system-bar>
            <v-main>
                <v-row class="pa-0 pt-3">
                    <v-slide-x-transition hide-on-leave>
                        <v-col class="my-4 border-e-thin" v-if="more">
                            <v-list :lines="false" density="compact" nav>
                                <v-list-item v-for="(item, i) in status" :key="i" :value="item" color="primary"
                                    @click="toggleFilter(item.type)">
                                    <template v-slot:prepend>
                                        <v-icon :icon="item.icon" :color="item.color"></v-icon>
                                    </template>

                                    <v-list-item-title>{{ item.text() }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-slide-x-transition>

                    <v-col :md="more ? 10 : 12">
                        <v-card-text class="console-output px-2" ref="consoleOutput">
                            <v-card v-for="(log, index) in logs" :key="index" class="log-entry my-1 pa-1">
                                <p class="text-caption"
                                    v-if="log.level == LogLevel.ERROR || log.level == LogLevel.EXCEPTION || log.level == LogLevel.PROMISE_REJECTION">
                                    <v-icon color="error" class="mr-2">mdi-close-octagon</v-icon>
                                    {{ log.message }}
                                </p>
                                <p class="text-caption" v-else-if="log.level == LogLevel.WARNING">
                                    <v-icon color="warning" class="mr-2">mdi-alert-outline</v-icon>
                                    {{ log.message }}
                                </p>
                                <p class="text-caption" v-else>
                                    <v-icon color="info" class="mr-2">mdi-information-outline</v-icon>
                                    {{ log.message }}
                                </p>
                            </v-card>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script setup lang="ts">
import type { EventSubscription } from '@/models/utils/event';
import { onMounted, onUnmounted, ref, useTemplateRef, watch, type Ref } from 'vue';
import { Debugger, LogLevel, type Log } from './debugger';

interface LogConsoleProps {
    bufferSize?: number
}

const props = withDefaults(defineProps<LogConsoleProps>(), {
    bufferSize: 250
});

const allLogs: Ref<Log[]> = ref([]);
const logs: Ref<Log[]> = ref([]);
const more = ref(true);
const follow = ref(true);
const consoleOutput = useTemplateRef("consoleOutput");
const status = [
    { text: () => `Totale ${allLogs.value.length}`, icon: 'mdi-format-list-bulleted', color: "", type: LogLevel.ALL },
    { text: () => `Errori ${allLogs.value.filter(l => l.level == LogLevel.ERROR || l.level == LogLevel.EXCEPTION || l.level == LogLevel.PROMISE_REJECTION).length}`, icon: 'mdi-close-octagon', color: "error", type: LogLevel.ERROR },
    { text: () => `Warning ${allLogs.value.filter(l => l.level == LogLevel.WARNING).length}`, icon: 'mdi-alert-outline', color: "warning", type: LogLevel.WARNING },
    { text: () => `Info ${allLogs.value.filter(l => l.level == LogLevel.INFO).length}`, icon: 'mdi-information-outline', color: "info", type: LogLevel.INFO },
];
const filter: Ref<LogLevel[]> = ref([]);
let subscription: EventSubscription | undefined = undefined;

watch(filter, () => {
    if (filter.value.length == 0 || filter.value.includes(LogLevel.ALL))
        logs.value = allLogs.value;
    else logs.value = allLogs.value.filter(l => filter.value.includes(l.level));
    updateConsoleCursor();
});

function clear() {
    Debugger.instance.clear();
}

async function copy() {
    const copyText = logs.value.map(l => l.timestamp.toJSON() + " - " + l.message).join("\n");
    navigator.clipboard.writeText(copyText);
}

function toggleMore() {
    more.value = !more.value;
}

function toggleFollow() {
    follow.value = !follow.value;
    updateConsoleCursor();
}

function toggleFilter(level: LogLevel) {
    if (filter.value.includes(level)) filter.value = [];
    else {
        const _level = [level];
        if (level == LogLevel.ERROR) {
            _level.push(LogLevel.EXCEPTION, LogLevel.PROMISE_REJECTION);
        }
        filter.value = _level;
    }
}

function updateLogs(l: Log[]) {
    logs.value = allLogs.value = [...l].splice(0, props.bufferSize)
    updateConsoleCursor();
}

function updateConsoleCursor() {
    if (!follow.value) return;

    setTimeout(() => {
        consoleOutput.value?.$el.scrollTo({ top: consoleOutput.value?.$el.scrollHeight, behavior: 'smooth' });
    }, 100);
}

onMounted(() => {
    subscription = Debugger.instance.subscription.subscribe({
        next: (l: Log[]) => updateLogs(l)
    }, true);
})

onUnmounted(() => {
    subscription?.unsubscribe();
})
</script>


<style scoped>
.console-card {
    max-height: 300px;
    min-height: 300px;
    overflow: hidden;
}

.console-output {
    max-height: 260px;
    min-height: 260px;
    overflow-y: auto;
    white-space: pre-wrap;
    /* Dark console background */
    color: #f8f8f2;
    /* Light text color */
    padding: 16px;
    font-family: monospace;
}
</style>