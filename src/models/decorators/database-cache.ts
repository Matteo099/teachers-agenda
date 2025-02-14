import type { AbstractRepository, ID } from "../repositories/abstract-repository";

enum OperationType {
    SAVE = "SAVE", DELETE = "DELETE", GET = "GET"
}

enum OperationCacheType {
    SAVE_CACHED = "SAVE_CACHED", DELETE_CACHED = "DELETE_CACHED", GET_CACHED = "GET_CACHED"
}

type MetricType = OperationType | OperationCacheType;

interface Operation {
    id: ID;
    type: OperationType;
    repository: AbstractRepository<any>;
}

export class DatabaseCache {
    private static _instance: DatabaseCache | null = null;

    private readonly metrics: Map<MetricType, number> = new Map([
        [OperationType.GET as MetricType, 0],
        [OperationCacheType.GET_CACHED, 0],
        [OperationType.SAVE, 0],
        [OperationCacheType.SAVE_CACHED, 0],
        [OperationType.DELETE, 0],
        [OperationCacheType.DELETE_CACHED, 0],
    ]);

    private readonly cache: Map<ID, any> = new Map();
    private operations: Operation[] = [];

    private _active = false;

    public static get instance(): DatabaseCache {
        if (!this._instance) this._instance = new DatabaseCache();
        return this._instance;
    }

    public get isActive(): boolean {
        return this._active;
    }

    public async get<R extends AbstractRepository<any>>(repository: R, id: ID) {
        let metricType;
        if (!this.cache.has(id)) {
            this._active = false;
            const data = await repository.get(id);
            this._active = true;
            this.cache.set(id, data);
            metricType = OperationType.GET;
        } else {
            metricType = OperationCacheType.GET_CACHED;
        }
        this.metrics.set(metricType, (this.metrics.get(metricType) ?? 0) + 1);
        return this.cache.get(id);
    }

    public async save<R extends AbstractRepository<any>>(repository: R, obj: any, id?: ID): Promise<ID> {
        // console.log("save");
        let saveRequired = true;
        if (id == undefined) {
            id = await repository.save(obj);
            saveRequired = false;
        } else {
            this.metrics.set(OperationCacheType.SAVE_CACHED, (this.metrics.get(OperationCacheType.SAVE_CACHED) ?? 0) + 1);
        }
        this.cache.set(id, obj);
        if (saveRequired) {
            this.operations.push({ id, repository, type: OperationType.SAVE });
        }
        return id;
    }

    public delete<R extends AbstractRepository<any>>(repository: R, id: ID) {
        const operationIndex = this.operations.findIndex(o => o.id == id);
        if (operationIndex != -1) {
            this.operations.splice(operationIndex, 1);
        }
        this.metrics.set(OperationCacheType.DELETE_CACHED, (this.metrics.get(OperationCacheType.DELETE_CACHED) ?? 0) + 1);
        this.operations.push({ id, repository, type: OperationType.DELETE });
        this.cache.delete(id);
    }

    public active() {
        if (this._active) {
            // console.log("cache already active");
            return;
        }
        // console.log("active");
        this._active = true;
    }

    public async flush() {
        // console.log("flush");
        this._active = false;
        const promises: Promise<any>[] = [];
        for await (const operation of this.operations) {
            let promise: Promise<any>;
            if (operation.type == OperationType.SAVE) {
                const data = this.cache.get(operation.id);
                promise = operation.repository.save(data, operation.id);
                this.metrics.set(OperationType.SAVE, (this.metrics.get(OperationType.SAVE) ?? 0) + 1);
            } else {
                promise = operation.repository.delete(operation.id);
                this.metrics.set(OperationType.DELETE, (this.metrics.get(OperationType.DELETE) ?? 0) + 1);
            }
            promises.push(promise);
        }
        await Promise.all(promises);
        this.printMetrics();
        this.clear();
    }

    private printMetrics() {
        console.log(`=== Cache Metrics ===`);
        for (const entry of this.metrics.entries()) {
            console.log(`${entry[0]} - ${entry[1]}`);
        }
        const getCacheUsage = 100 * (this.metrics.get(OperationCacheType.GET_CACHED) ?? 0) / (this.metrics.get(OperationType.GET) || 1);
        const saveCacheUsage = 100 * (this.metrics.get(OperationCacheType.SAVE_CACHED) ?? 0) / (this.metrics.get(OperationType.SAVE) || 1);
        const deleteCacheUsage = 100 * (this.metrics.get(OperationCacheType.DELETE_CACHED) ?? 0) / (this.metrics.get(OperationType.DELETE) || 1);
        console.log(`pGET: ${getCacheUsage}%, pSAVE: ${saveCacheUsage}%, pDELETE: ${deleteCacheUsage}%`)
        console.log(`=== ============= ===`);
    }

    public clear() {
        // console.log("clear");
        this.cache.clear();
        for (const key of this.metrics.keys()) {
            this.metrics.set(key, 0);
        }
        this.operations = [];
        this._active = false;
    }
}