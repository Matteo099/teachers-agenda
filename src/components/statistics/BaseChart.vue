<template>
    <v-row>
        <v-col>
            <v-card :title="title" :subtitle="subtitle">
                <v-card-text>
                    <div class="chart-container" ref="chartdiv"></div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { TaIndicator } from "@/models/charts/ta-indicator";
import { yyyyMMdd, type IyyyyMMdd, type School } from "@/models/model";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { onMounted, shallowRef, watch } from "vue";

interface BaseChartProps {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
    title?: string;
    subtitle?: string;
    schools?: School[];

    createChart: (root: am5.Root) => void;
    afterChartCreated: () => void;
    areUpdateConditionSatistied: () => boolean;
    updateChartData: (from: IyyyyMMdd, to: IyyyyMMdd, ...schools: School[]) => Promise<any>;
}

const props = withDefaults(defineProps<BaseChartProps>(), { schools: () => [] });
const chartdiv = shallowRef(null);
let indicator: TaIndicator;

watch(props, () => _updateChartData())

async function _updateChartData() {
    if (!props.areUpdateConditionSatistied()) return;
    if (!props.from) return;

    indicator.show();
    await props.updateChartData(props.from, props.to ?? yyyyMMdd.today().toIyyyyMMdd(), ...props.schools);
    indicator.hide();
}

function _createChart() {
    const root = am5.Root.new(chartdiv.value!);
    root.setThemes([am5themes_Animated.new(root)]);
    indicator = new TaIndicator(root);

    props.createChart(root);

    _updateChartData();

    props.afterChartCreated();
}

onMounted(() => _createChart())
</script>

<style>
.chart-container {
    width: 100% !important;
    height: 500px;
}
</style>