export class Transaction {
    private static _current?: Transaction;

    private functions: Map<number, Function[]> = new Map();

    public static get current(): Transaction {
        return Transaction._current ?? Transaction.begin();
    }

    public static begin(): Transaction {
        if(Transaction._current) throw new Error("A transaction is already initialized, close it!");
        Transaction._current = new Transaction();
        return Transaction._current;
    }

    public registerTransaction(fnc: Function, priority: number = 0) {
        if (!this.functions.has(priority)) this.functions.set(priority, []);

        this.functions.get(priority)?.push(fnc);
    }

    public async commit() {
        const functions = [...this.functions.entries()].sort().flatMap(e => e[1]);
        for await (const fnc of functions) {
            await fnc?.();
        }
    }

    public rollback() {
    }

    public close() {
        Transaction._current = undefined;
    }
}