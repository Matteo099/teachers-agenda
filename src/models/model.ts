import type { Timestamp } from "firebase/firestore";
import { dateFormat, timeFormat } from "./utils";

export const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
export const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

export enum DayOfWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
}

/**
 * Represent the time in seconds (like 12:00:00 ==> 12h + 0min + 0sec = 43200)
 */
export type ITime = number;
export class Time {
    constructor(private hour: number = 0, private minutes: number = 0, private seconds: number = 0) { }

    static fromITime(t: ITime): Time {
        const h = Math.trunc(t / 3600)
        const m = Math.trunc((t - (h * 3600)) / 60);
        const s = t - (h * 3600 + m * 60);
        return new Time(h, m, s)
    }

    toITime(): ITime {
        return this.hour * 3600 + this.minutes * 60 + this.seconds;
    }

    format(): string {
        const hours = this.hour.toString().padStart(2, '0') || "00";
        const minutes = this.minutes.toString().padStart(2, '0') || "00";
        const seconds = this.seconds.toString().padStart(2, '0');
        return this.seconds != 0 ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
    }
}

/**
 * Represent the date in string format yyyyMMdd (like 09/10/2024 ==> 20241009) 
 */
export type IyyyyMMdd = string;
export class yyyyMMdd {

    constructor(private day: number, private month: number, private year: number) { }

    static fromIyyyyMMdd(date: IyyyyMMdd): yyyyMMdd {
        if (date.length != 8) throw new Error("Unable to parse date, format not correct (yyyyMMdd): " + date);

        const y = parseInt(date.substring(0, 4));
        const m = parseInt(date.substring(4, 6));
        const d = parseInt(date.substring(6, 8));
        return new yyyyMMdd(d, m, y)
    }

    toIyyyyMMdd(): IyyyyMMdd {
        return `${this.year.toString().padStart(4, '0')}${this.month.toString().padStart(2, '0')}${this.day.toString().padStart(2, '0')}`
    }

    static fromDate(date: Date): yyyyMMdd {
        const y = date.getFullYear();
        const m = date.getMonth();
        const d = date.getDate();
        return new yyyyMMdd(d, m, y)
    }

    toDate(): Date {
        return new Date(this.year, this.month, this.day);
    }

    format(): string {
        return dateFormat(this.toDate());
    }

    equals(date: yyyyMMdd): boolean {
        return this.day == date.day && this.month == date.month && this.year == date.year;
    }

    getYear() {
        return this.year;
    }

    getMonth() {
        return this.month;
    }

    getDay() {
        return this.day;
    }
}

export interface Student {
    id: string;
    schoolId: string; // relation with the school
    name: string;
    surname: string;
    contact: string;
    lessonDay: number;
    level: string;
    notes: string[];
    minutesLessonDuration: number;

    removed?: boolean;

    createdAt: Timestamp;  // Timestamp instead of Date for better Firestore querying
    updatedAt: Timestamp;
}

export interface School {
    id: string;
    name: string;
    city?: string;
    email?: string;
    phoneNumber?: string;

    managed: boolean;
    levelRanges: LevelRange[];
    managerOptions?: ManagerOptions;

    // Instead of embedding arrays of students, store students in a separate collection and use schoolId for filtering
    // students: Student[];
    // lessonsHistory: Lesson[];
    // salaryHistory: Salary[];
    // calendarLesson: WeeklyLesson[];

    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface Salary {
    schoolId: string; // relation with the school
    date: Timestamp;
    total: number;
    // todo...
}

export interface ManagerOptions {
    totalStudents: number;
    quotePerStudent: number;
    cashFund: number;
}

export interface LevelRange {
    levels: string[];
    price: number;
}

export interface WeeklyLesson {
    id: string;
    schoolId: string;  // Relation with School (if needed)
    dayOfWeek: DayOfWeek;  // 0 = Sunday, 1 = Monday, etc.
    from: IyyyyMMdd;  // Using Timestamp for better Firestore compatibility
    to: IyyyyMMdd;  // Same as above
    exclude: IyyyyMMdd[];  // Consider using Timestamps instead of Date
    schedule: ScheduledLesson[];  // Keep this but consider limiting nesting depth

    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface ScheduledLesson {
    studentId: string; // relation with the user
    time: ITime; // Could be simplified into one field for easier querying (optional)
}

export interface DailyLesson {
    id: string;
    date: IyyyyMMdd;
    schoolId: string;
    lessons: Lesson[];
}

export const lessonStatusName = ["", "presente", "assente", "cancellata", "recuperata"]
export const lessonStatusColor = ["gray", "green", "red", "orange", "blue"]
export enum LessonStatus {
    NONE,
    PRESENT,
    ABSENT,
    CANCELLED,
    RESCHEDULED
}

export interface Lesson extends ScheduledLesson {
    // schoolId: string; // relation with the school
    status: LessonStatus;
    trial?: boolean;
    recoveryDate?: IyyyyMMdd;
    originalScheduledLessonId?: string;  // Link to the original scheduled lesson if rescheduled

    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export const updateDailyLessonTime = function (startingTime: number | string | undefined, studentLessons: (Student & Lesson)[] | { scheduledLessons: ScheduledLesson[], students: Student[] }) {
    let startingMinutes = 0;
    try {
        const time = startingTime;
        if (time == undefined) return;

        if (typeof time == "string") {
            const hhmm = time.split(":");
            if (hhmm.length != 2) return;

            const h = parseInt(hhmm[0]);
            const m = parseInt(hhmm[1]);

            startingMinutes = h * 60 + m;
        } else {
            startingMinutes = time;
        }

        console.log(startingMinutes)
    } catch (error) {
        console.log(error)
        return;
    }

    if (Array.isArray(studentLessons)) {
        studentLessons.forEach(sl => {
            sl.time = startingMinutes * 60;
            startingMinutes += sl.minutesLessonDuration;
        })
    } else {
        studentLessons.scheduledLessons.forEach(sl => {
            sl.time = startingMinutes * 60;
            // sl.time = { hour: Math.trunc(startingMinutes / 60), minutes: startingMinutes % 60 }
            const student = studentLessons.students.find(s => s.id == sl.studentId);
            if (!student) return;
            startingMinutes += student.minutesLessonDuration;
        });
    }
}