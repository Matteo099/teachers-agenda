import { LocalStorageHandler } from "@/models/storage/local-storage-handler";
import { QueryEvent, type IQueryEvent } from "@/models/utils/event";

export enum LogLevel {
    ERROR, WARNING, INFO, ALL
}
export interface Log {
    level: LogLevel,
    message: string,
    timestamp: Date
}

export class Debugger {

    private static _instance: Debugger | null = null;
    private logs: Log[] = [];
    private _subscription = new QueryEvent<Log[]>();

    public static get instance(): Debugger {
        if (!this._instance) this._instance = new Debugger();
        return this._instance;
    }

    public get subscription(): IQueryEvent<Log[]> {
        return this._subscription;
    }

    public get enabled(): boolean {
        return LocalStorageHandler.getItem("userSettings")?.debuggerEnabled ?? true;
    }

    public push(level: LogLevel, ...args: any[]) {
        if (!this.enabled) return;
        const message = JSON.stringify(args);
        const timestamp = new Date();
        this.logs.push({ level, message, timestamp });
        this._subscription.next(this.logs);
    }

    public clear() {
        this.logs.length = 0;
        this._subscription.next(this.logs);
    }
}