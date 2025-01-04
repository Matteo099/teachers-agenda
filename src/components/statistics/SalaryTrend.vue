<template>
    <v-row>
        <v-col>
            <div class="chart-container" ref="chartdiv"></div>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { TaIndicator } from "@/models/charts/ta-indicator";
import { yyyyMMdd, type IyyyyMMdd } from "@/models/model";
import { SalaryService } from "@/models/services/salary-service";
import { StatisticsService } from "@/models/services/statistics-service";
import StatisticsView from "@/views/StatisticsView.vue";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";
import { onMounted, shallowRef, watch } from "vue";

interface SalaryTrendProps {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
}

const props = defineProps<SalaryTrendProps>()
const chartdiv = shallowRef(null);
let root: am5.Root;
let series: am5xy.LineSeries;
let indicator: TaIndicator;

watch(props, () => updateChartData())

async function updateChartData() {
    if (!series) return;
    if (!props.from) return;

    indicator.show();
    const data = await StatisticsService.instance.getSalaryTrend(props.from, props.to ?? yyyyMMdd.today().toIyyyyMMdd());
    series.data.setAll(data);
    indicator.hide();
}

function createChart() {
    root = am5.Root.new(chartdiv.value!);
    root.setThemes([am5themes_Animated.new(root)]);
    indicator = new TaIndicator(root);

    const chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0
    }));

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
            timeUnit: "day",
            count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
            minorGridEnabled: true
        }),
        tooltip: am5.Tooltip.new(root, {})
    }));

    const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
            pan: "zoom"
        })
    }));

    series = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
    }));

    chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
    }));

    updateChartData();

    series.appear(1000);
    chart.appear(1000, 100);
}

onMounted(() => createChart())
</script>

<style>
.chart-container {
    width: 100% !important;
    height: 500px;
}
</style>