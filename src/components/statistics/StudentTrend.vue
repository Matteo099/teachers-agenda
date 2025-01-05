<template>
    <BaseChart :schools="schools" :from="from" :to="to" :create-chart="createChart" :after-chart-created="afterChartCreated"
        :are-update-condition-satistied="areUpdateConditionSatistied" :update-chart-data="updateChartData"
        title="Andamento degli Studenti" subtitle="Andamento della presenza in un periodo di tempo per studente" />
</template>

<script setup lang="ts">
import { type IyyyyMMdd, type School } from "@/models/model";
import { StatisticsService } from "@/models/services/statistics-service";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import BaseChart from "./BaseChart.vue";

interface Props {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
    schools?: School[];
}

withDefaults(defineProps<Props>(), { schools: () => [] })
let root: am5.Root;
let chart: am5xy.XYChart;
let xAxis: am5xy.CategoryAxis<am5xy.AxisRenderer>;
let yAxis: am5xy.ValueAxis<am5xy.AxisRenderer>;
let legend: am5.Legend;

const series: any[] = [];

function createChart(_root: am5.Root) {
    root = _root;
    chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
        layout: root.verticalLayout
    }));
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
    }));
    const xRenderer = am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true
    });
    xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "student",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
        location: 1
    })

    // xAxis.data.setAll(data);
    series.push(xAxis.data);

    yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        })
    }));
    legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
    }));

    series.push(makeSeries("Presente", "present").data);
    series.push(makeSeries("Assente", "absent").data);
    series.push(makeSeries("Recupero", "recovery").data);
}

function afterChartCreated() {
    chart.appear(1000, 100);
}

function areUpdateConditionSatistied(): boolean {
    // return !!series;
    return true;
}

async function updateChartData(from: IyyyyMMdd, to: IyyyyMMdd, ...schools: School[]) {
    const data = await StatisticsService.instance.getStudentTrend(from, to, ...schools);
    series.forEach(d => {
        d.setAll(data);
    });
}

function makeSeries(name: string, fieldName: string) {
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "student"
    }));

    series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        tooltipY: am5.percent(10)
    });
    // series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    series.bullets.push(function () {
        return am5.Bullet.new(root, {
            sprite: am5.Label.new(root, {
                text: "{valueY}",
                fill: root.interfaceColors.get("alternativeText"),
                centerY: am5.p50,
                centerX: am5.p50,
                populateText: true
            })
        });
    });

    legend.data.push(series);

    return series;
}
</script>