import type { FirebaseError } from "firebase/app";
import type { Unsubscribe } from "firebase/firestore";

export type EventHandler<T> = {
    next: (data: T) => void,
    error?: (err: FirebaseError) => void
};

export interface IQueryEvent<T> {
    subscribe(handler: EventHandler<T>): EventSubscription;
    unsubscribe(handler: EventHandler<T>): void;
}

export class QueryEvent<T> implements IQueryEvent<T> {
    private handlers: EventHandler<T>[] = [];
    private unsubscription?: Unsubscribe;

    public subscribe(handler: EventHandler<T>): EventSubscription {
        this.handlers.push(handler);
        return new EventSubscription(this, handler);
    }

    public unsubscribe(handler: EventHandler<T>): void {
        const index = this.handlers.indexOf(handler);
        if (index !== -1) {
            this.handlers.splice(index, 1);
        }
        if (this.handlers.length == 0) {
            this.unsubscription?.();
        }
    }

    public unsubscribeAll() {
        this.clear();
    }

    public setUnsubscription(unsubscibe: Unsubscribe) {
        this.unsubscription = unsubscibe;
    }

    public next(data: T) {
        [...this.handlers].forEach(h => h.next(data))
    }

    public error(err: FirebaseError) {
        [...this.handlers].forEach(h => h.error?.(err))
        console.log(err);
    }

    public clear() {
        this.handlers = [];
    }

    public expose(): IQueryEvent<T> {
        return this;
    }
}

export class EventSubscription {

    constructor(
        private readonly liteEvent: QueryEvent<any>,
        private readonly handler: EventHandler<any>
    ) { }

    public unsubscribe(): void {
        this.liteEvent.unsubscribe(this.handler);
    }
}