import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import { Random } from "../random-utils";

export interface TAXYData {
    date: number;
    value: number;
}

export interface TAPieData {
    category: string;
    value: number;
}

export interface TAStudentTrendData {
    student: string;
    present: number;
    absent: number;
    recovery: number;
}

export interface TALessonTrendData {
    school: string;
    present: number;
    absent: number;
    recovery: number;
}

export function addTitle(root: am5.Root, chart: am5.Chart, title: string, subtitle?: string) {
    if (subtitle)
        chart.children.unshift(am5.Label.new(root, {
            text: subtitle,
            fontSize: 14,
            textAlign: "center",
            x: am5.percent(50),
            centerX: am5.percent(50)
        }));

    chart.children.unshift(am5.Label.new(root, {
        text: title,
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 0
    }));
}

export function createEmptyLineChartModal(root: am5.Root, series: am5xy.LineSeries) {
    const modal = am5.Modal.new(root, {
        content: "Il grafico non contiene dati"
    });

    series.events.on("datavalidated", function (ev) {
        const series = ev.target;
        if (ev.target.data.length < 1) {
            // Generate placeholder data
            const xField = series.get("valueXField")!;
            const yField = series.get("valueYField")!;
            const placeholder = [];
            const date = new Date();
            for (let i = 0; i < Random.int(30, 60); i++) {
                const item: any = {};
                am5.time.add(date, "day", 1);
                item[xField] = date.getTime();
                item[yField] = Random.int(5, 30);
                placeholder.push(item)
            }
            series.data.setAll(placeholder);

            // Show modal
            modal.open();
        }
        else {
            // Hide modal
            modal.close();
        }
    });

    return modal;
}

export function createEmptyPieChartModal(root: am5.Root, series: am5percent.PieSeries) {
    const modal = am5.Modal.new(root, {
        content: "Il grafico non contiene dati"
    });

    series.events.on("datavalidated", function (ev) {
        const series = ev.target;
        if (ev.target.data.length < 1) {
            // Generate placeholder data
            const categoryField = series.get("categoryField")!;
            const valueField = series.get("valueField")!;
            const placeholder = [];
            for (let i = 0; i < 3; i++) {
                const item: any = {};
                item[categoryField] = "";
                item[valueField] = 1;
                placeholder.push(item)
            }
            series.data.setAll(placeholder);

            // Disable ticks/labels
            series.labels.template.set("forceHidden", true);
            series.ticks.template.set("forceHidden", true);

            // Show modal
            modal.open();
        }
        else {
            // Re-enable ticks/labels
            series.labels.template.set("forceHidden", false);
            series.ticks.template.set("forceHidden", false);

            // Hide modal
            modal.close();
        }
    });

    return modal;
}

export function createEmptyBarChartModal(root: am5.Root, xAxis: am5xy.CategoryAxis<am5xy.AxisRenderer>, series: am5xy.ColumnSeries[]) {
    const modal = am5.Modal.new(root, {
        content: "Il grafico non contiene dati"
    });
    const xValues = [Random.word(6), Random.word(6), Random.word(6)];
    xAxis.events.on("datavalidated", function (ev) {
        const series = ev.target;
        if (ev.target.data.length < 1) {
            // Generate placeholder data
            const categoryField = series.get("categoryField")!;
            const placeholder = [];
            for (let i = 0; i < xValues.length; i++) {
                const item: any = {};
                item[categoryField] = xValues[i];
                placeholder.push(item)
            }
            series.data.setAll(placeholder);

            // Show modal
            modal.open();
        }
        else {
            // Hide modal
            modal.close();
        }
    });

    series.forEach(s => s.events.on("datavalidated", function (ev) {
        const series = ev.target;
        if (ev.target.data.length < 1) {
            // Generate placeholder data
            const categoryField = series.get("categoryXField")!;
            const valueField = series.get("valueYField")!;
            const placeholder = [];
            for (let i = 0; i < xValues.length; i++) {
                const item: any = {};
                item[categoryField] = xValues[i];
                item[valueField] = Random.int(3, 9);
                placeholder.push(item)
            }
            console.log(placeholder)
            series.data.setAll(placeholder);

            // Show modal
            modal.open();
        }
        else {
            // Hide modal
            modal.close();
        }
    }));

    return modal;
}