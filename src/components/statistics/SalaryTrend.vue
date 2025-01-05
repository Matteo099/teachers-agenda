<template>
    <BaseChart :from="from" :to="to" :create-chart="createChart" :after-chart-created="afterChartCreated"
        :are-update-condition-satistied="areUpdateConditionSatistied" :update-chart-data="updateChartData" 
        title="Andamento dello Stipendio" subtitle="Andamento dello stipendio in un periodo di tempo per scuola"/>
</template>

<script setup lang="ts">
import { type IyyyyMMdd } from "@/models/model";
import { StatisticsService } from "@/models/services/statistics-service";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import BaseChart from "./BaseChart.vue";

interface SalaryTrendProps {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
}

defineProps<SalaryTrendProps>()
let chart: am5xy.XYChart;
let series: am5xy.LineSeries;


function createChart(root: am5.Root) {
    chart = root.container.children.push(am5xy.XYChart.new(root, {
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
}

function afterChartCreated() {
    series.appear(1000);
    chart.appear(1000, 100);
}

function areUpdateConditionSatistied(): boolean {
    return !!series;
}

async function updateChartData(from: IyyyyMMdd, to: IyyyyMMdd) {
    const data = await StatisticsService.instance.getSalaryTrend(from, to);
    series.data.setAll(data);
}
</script>