import { Debugger, LogLevel } from "@/components/debugger/debugger";

export const interceptConsole = () => {

    window.onerror = function (error, url, line) {
        Debugger.instance.push(LogLevel.EXCEPTION, { error, url, line });
        return false;
    }
    window.onunhandledrejection = function (e) {
        try {
            const reason = {
                message: e.reason.message,
                stack: e.reason.stack,
            }
            Debugger.instance.push(LogLevel.PROMISE_REJECTION, reason)
        } catch (error) {
            Debugger.instance.push(LogLevel.PROMISE_REJECTION, e)
        }
    }

    function hookLogType(logType: any) {
        // @ts-ignore
        const original = console[logType].bind(console)
        return function (...args: any) {
            let level = LogLevel.INFO;
            if (logType == "error") level = LogLevel.ERROR;
            else if (logType == "warn") level = LogLevel.WARNING;
            Debugger.instance.push(level, ...Array.from(args))
            original.apply(console, args)
        }
    }

    ['log', 'error', 'warn'].forEach(logType => {
        // @ts-ignore
        console[logType] = hookLogType(logType)
    })
}