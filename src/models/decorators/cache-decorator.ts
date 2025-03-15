import { DatabaseCache } from "./database-cache";

export function withCache<T extends (...args: any[]) => Promise<any>>(fn: T, errHandler?: (error: any) => void, finalBlock?: (...args: any[]) => Promise<void>): T {
    return (async (...args: Parameters<T>) => {
        try {
            console.log("In try");
            DatabaseCache.instance.active();
            const result = await fn(...args);
            await DatabaseCache.instance.flush();
            return result;
        } catch (error) {
            console.log("In catch");
            DatabaseCache.instance.clear();
            return errHandler?.(error);
        } finally {
            console.log("In finally");
            await finalBlock?.(...args);
        }
    }) as T;
}
