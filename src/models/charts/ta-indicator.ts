import * as am5 from "@amcharts/amcharts5";

export class TaIndicator {
    private indicator: any;
    private animation: any;

    public constructor(root: am5.Root, hideIndicator: boolean = true) {
        this.createIndicator(root);
        if (hideIndicator) this.hide();
    }

    private createIndicator(root: am5.Root) {
        this.indicator = root.container.children.push(am5.Container.new(root, {
            width: am5.p100,
            height: am5.p100,
            layer: 1000,
            background: am5.Rectangle.new(root, {
                fill: am5.color(0xffffff),
                fillOpacity: 0.7
            })
        }));
        this.indicator.children.push(am5.Label.new(root, {
            text: "Loading...",
            fontSize: 25,
            x: am5.p50,
            y: am5.p50,
            centerX: am5.p50,
            centerY: am5.p50
        }));

        const hourglass = this.indicator.children.push(am5.Graphics.new(root, {
            width: 32,
            height: 32,
            fill: am5.color(0x000000),
            x: am5.p50,
            y: am5.p50,
            centerX: am5.p50,
            centerY: am5.p50,
            dy: -45,
            svgPath: "M12 5v10l9 9-9 9v10h24V33l-9-9 9-9V5H12zm20 29v5H16v-5l8-8 8 8zm-8-12-8-8V9h16v5l-8 8z"
        }));

        this.animation = hourglass.animate({
            key: "rotation",
            to: 180,
            loops: Infinity,
            duration: 2000,
            easing: am5.ease.inOut(am5.ease.cubic)
        });
    }

    public show() {
        this.animation.play();
        this.indicator.show();
    }

    public hide() {
        this.animation.pause();
        this.indicator.hide();
    }

    public toggle() {
        if (this.indicator.isHidden()) {
            this.show();
        }
        else {
            this.hide();
        }
    }
}