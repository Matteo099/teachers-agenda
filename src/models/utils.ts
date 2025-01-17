import { Timestamp } from "firebase/firestore";
import { yyyyMMdd, type DayOfWeek, type IyyyyMMdd, type School } from "./model";
import tinycolor from 'tinycolor2';

export const nameof = <T>(name: keyof T) => name;

export const toDate = function (date: Timestamp): Date {
    return new Timestamp(date.seconds, date.nanoseconds).toDate();
}

export const fromDate = function (date: Date): Timestamp {
    return Timestamp.fromDate(new Date(date.toUTCString()));
}

export const isBefore = function (a: Timestamp, b: Timestamp): boolean {
    return a.seconds + a.nanoseconds < b.seconds + b.nanoseconds;
}

export const isAtfer = function (a: Timestamp, b: Timestamp): boolean {
    return a.seconds + a.nanoseconds > b.seconds + b.nanoseconds;
}

export const nextDay = function (startingDate: Date, targetDayOfWeek: DayOfWeek): Date {
    // Get the day of the week for the starting date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const startingDayOfWeek = startingDate.getDay();
    if (targetDayOfWeek == startingDayOfWeek) return startingDate;

    // Calculate the difference between the target day and the current day
    // We add 7 to ensure the result is non-negative, then take mod 7
    const daysToAdd = (targetDayOfWeek - startingDayOfWeek + 7) % 7 || 7;

    // Create a new date object based on the starting date
    const resultDate = new Date(startingDate);

    // Add the calculated number of days to the result date
    resultDate.setDate(startingDate.getDate() + daysToAdd);

    return resultDate;
}

export const pastDay = function (startingDate: Date, targetDayOfWeek: DayOfWeek): Date {
    // Get the day of the week for the starting date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const startingDayOfWeek = startingDate.getDay();
    if (targetDayOfWeek == startingDayOfWeek) return startingDate;

    // Calculate the difference between the target day and the current day
    // We add 7 to ensure the result is non-negative, then take mod 7
    const daysToAdd = (targetDayOfWeek - startingDayOfWeek + 7) % 7 || 7;

    // Create a new date object based on the starting date
    const resultDate = new Date(startingDate);

    // Add the calculated number of days to the result date
    resultDate.setDate(startingDate.getDate() - daysToAdd);

    return resultDate;
}

export const extractDayOfWeek = function (date: IyyyyMMdd): DayOfWeek {
    return yyyyMMdd.fromIyyyyMMdd(date).toDate().getDay();
}

export const dateFormatter = new Intl.DateTimeFormat('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Europe/Rome'
});

export const dateFormat = function (date?: Date | string): string {
    if (!date) return "";
    const d = new Date(date);
    return dateFormatter.format(d);
}

export const timestampFormatter = new Intl.DateTimeFormat('it-IT', {
    timeStyle: "medium",
    dateStyle: "short",
    timeZone: 'Europe/Rome'
});

export const timestampFormat = function (date?: Date | string): string {
    if (!date) return "";
    const d = new Date(date);
    return timestampFormatter.format(d);
}

export const timeFormatter = new Intl.DateTimeFormat('it-IT', {
    timeStyle: "medium",
    timeZone: 'Europe/Rome'
});

export const timeFormat = function (date?: Date | string | { hour?: number, minutes?: number, seconds?: number }): string {
    if (!date) return "";

    // Check if date is a Date or a string
    if (date instanceof Date || typeof date === 'string') {
        const d = new Date(date);
        return timeFormatter.format(d); // Assuming `timeFormatter` is defined
    }

    // Check if the date object contains hour, minutes, and seconds
    if ('hour' in date || 'minutes' in date || 'seconds' in date) {
        const hours = date.hour?.toString().padStart(2, '0') || "00";
        const minutes = date.minutes?.toString().padStart(2, '0') || "00";
        const seconds = date.seconds?.toString().padStart(2, '0') || "00";
        return `${hours}:${minutes}:${seconds}`;
    }

    return ""; // Fallback return in case no condition matches
}

export const arraysHaveSameElements = function (arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) return false;

    // Sort both arrays and compare them element by element
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();

    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}

export const stringToHslColor = function (str: string, saturation: number = 30, lightness: number = 80) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return 'hsl(' + h + ', ' + saturation + '%, ' + lightness + '%)';
}

export const delay = async function (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getCalendarsColor = function (...schools: (School | undefined)[]) {
    const calendars: any = {};
    schools.forEach(s => {
        if (s && s.color) {
            const sid = s.id.toLowerCase();
            const mainColor = tinycolor(s.color);

            // Generate lightColors
            const lightContainer = mainColor.lighten(20).toHexString();
            const lightOnContainer = mainColor.isDark() ? "#FFFFFF" : "#000000"; // Contrasting color

            // Generate darkColors
            const darkMain = mainColor.darken(15).toHexString();
            const darkContainer = mainColor.darken(25).toHexString();
            const darkOnContainer = mainColor.isDark() ? "#FFFFFF" : "#000000"; // Contrasting color

            calendars[sid] = {
                colorName: sid,
                lightColors: {
                    main: mainColor.toHexString(),
                    container: lightContainer,
                    onContainer: lightOnContainer,
                },
                darkColors: {
                    main: darkMain,
                    container: darkContainer,
                    onContainer: darkOnContainer,
                }
            }
        }
    });
    return calendars;
}