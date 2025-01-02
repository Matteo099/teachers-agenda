import { LocalStorageHandler } from "@/models/storage/local-storage-handler";
import { QueryEvent, type IQueryEvent } from "@/models/utils/event";

export const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};

export enum LogLevel {
    ERROR, WARNING, INFO, EXCEPTION, PROMISE_REJECTION, ALL
}
export interface Log {
    level: LogLevel,
    message: string,
    timestamp: Date
}

export class Debugger {

    private static _instance: Debugger | null = null;
    private logs: Log[] = [];
    public logs2: any[] = [];
    private _subscription = new QueryEvent<Log[]>();

    public static get instance(): Debugger {
        if (!this._instance) this._instance = new Debugger();
        return this._instance;
    }

    public get subscription(): IQueryEvent<Log[]> {
        return this._subscription;
    }

    public get enabled(): boolean {
        return LocalStorageHandler.getItem("debugEnabled") ?? true;
    }

    public push(level: LogLevel, ...args: any[]) {
        if (!this.enabled) return;
        const message = JSON.stringify(args, getCircularReplacer());
        const timestamp = new Date();
        this.logs.push({ level, message, timestamp });
        this._subscription.next(this.logs);
    }

    public clear() {
        this.logs.length = 0;
        this._subscription.next(this.logs);
    }
}