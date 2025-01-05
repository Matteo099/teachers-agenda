import { Time, type ITime } from "./model";

export const development = import.meta.env.MODE == "development";
export class Random {
    public static string(length = 8): string {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    public static word(length = 8): string {
        let text = ''
        const possible = 'bcdfghjklmnpqrstvwxyz'
        const possibleVowels = 'aeiou'

        for (let i = 0; i < length; i = i + 3) {
            text += possible[Math.floor(Math.random() * possible.length)]
            text += possibleVowels[Math.floor(Math.random() * possibleVowels.length)]
            text += possible[Math.floor(Math.random() * possible.length)]
        }
        return text;
    }

    public static int(min = 0, max = 10): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static bool(): boolean {
        return Math.random() >= 0.5;
    }

    public static item<T>(arr: T[],): T | undefined {
        if (arr.length == 0) return;
        return arr[this.int(0, arr.length - 1)];
    }

    public static items<T>(arr: T[], size?: number): T[] {
        if (arr.length == 0) return [];
        size ??= Random.int(1, arr.length - 1);
        const res: T[] = [];
        const cloneArr = [...arr];
        for (let i = 0; i < size; i++) {
            const index = this.int(0, cloneArr.length);
            res.push(cloneArr[index]);
            cloneArr.splice(index, 1);
        }
        return res;
    }

    public static date(from?: Date, to?: Date): Date {
        to ??= new Date();
        if (!from) {
            from = new Date();
            from.setMonth(to.getMonth() - 6);
        }
        const fromTime = from.getTime();
        const toTime = to.getTime();
        return new Date(fromTime + Math.random() * (toTime - fromTime));
    }

    public static time(min: ITime = 0, max: ITime = 86400, precision: "minute" | "second" = "minute"): string {
        const t = Time.fromITime(this.int(min, max))
        if(precision == "minute") t.setSeconds(0);
        return t.format();
    }

    public static text(paragraph = 4): string {
        let res = "";
        for (let index = 0; index < paragraph; index++) {
            for (let j = 0; j < this.int(5, 20); j++) {
                res += this.word(this.int(5, 10)) + " ";
            }
            res = res.slice(0, -1) + ".";
            if (this.bool()) res += "\n"
            else res += " ";
        }
        return res;
    }
}