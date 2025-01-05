import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";

export interface TAXYData {
    date: number;
    value: number;
}

export interface TAPieData {
    category: string;
    value: number;
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