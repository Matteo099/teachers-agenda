import { Debugger, LogLevel } from "@/components/debugger/debugger";

export const interceptConsole = () => {
    const error = console.error.bind(console)
    console.error = (...args) => {
        error(...args)
        Debugger.instance.push(LogLevel.ERROR, ...args);
    }

    const warn = console.warn.bind(console)
    console.warn = (...args) => {
        warn(...args)
        Debugger.instance.push(LogLevel.WARNING, ...args);
    }

    const log = console.log.bind(console)
    console.log = (...args) => {
        log(...args)
        Debugger.instance.push(LogLevel.INFO, ...args);
    }
}