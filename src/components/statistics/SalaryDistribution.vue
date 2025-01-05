<template>
    <BaseChart :from="from" :to="to" :create-chart="createChart" :after-chart-created="afterChartCreated"
        :are-update-condition-satistied="areUpdateConditionSatistied" :update-chart-data="updateChartData"
        title="Distribuzione dello Stipendio" subtitle="Divisione dello stipendio per Scuola" />
</template>

<script setup lang="ts">
import { type IyyyyMMdd, type School } from '@/models/model';
import { StatisticsService } from '@/models/services/statistics-service';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import BaseChart from './BaseChart.vue';

interface Props {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
    schools?: School[];
}

withDefaults(defineProps<Props>(), { schools: () => [] })
let series: am5percent.PieSeries;
let label: am5.Label;
let _root: am5.Root;

function createChart(root: am5.Root) {
    _root = root;

    // Create container to hold charts
    let chartContainer = root.container.children.push(am5.Container.new(root, {
        layout: root.verticalLayout,
        width: am5.p100,
        height: am5.p100
    }));

    // Create the 1st chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = chartContainer.children.push(
        am5percent.PieChart.new(root, {
            endAngle: 270,
            innerRadius: am5.percent(60)
        })
    );

    series = chart.series.push(
        am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            endAngle: 270,
            alignLabels: false
        })
    );

    updateLabel();

    series.slices.template.setAll({
        cornerRadius: 8
    })

    series.states.create("hidden", {
        endAngle: -90
    });

    series.labels.template.setAll({
        textType: "circular"
    });
}

function afterChartCreated() {
    series.appear(1000, 100);
}

function areUpdateConditionSatistied(): boolean {
    return !!series;
}

async function updateChartData(from: IyyyyMMdd, to: IyyyyMMdd, ...schools: School[]) {
    const data = await StatisticsService.instance.getSalaryDistribution(from, to, ...schools);
    series.data.setAll(data);

    // The text does not update...
    updateLabel();
}

function updateLabel() {
    label?.dispose();
    label = am5.Label.new(_root, {
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        text: "Totale: {valueSum}€",
        populateText: true,
        fontSize: "1.5em"
    })
    series.children.push(label);
}
</script>