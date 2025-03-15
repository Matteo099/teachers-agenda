import { DatabaseCache } from "./database-cache";

export function withCache<T extends (...args: any[]) => Promise<any>>(fn: T, errHandler?: (error: any) => void, finalBlock?: (...args: any[]) => void): T {
    return (async (...args: Parameters<T>) => {
        try {
            DatabaseCache.instance.active();
            const result = await fn(...args);
            await DatabaseCache.instance.flush();
            console.log("In try");
            return result;
        } catch (error) {
            DatabaseCache.instance.clear();
            return errHandler?.(error);
        } finally {
            console.log("In finally");
            finalBlock?.(...args);
        }
    }) as T;
}
