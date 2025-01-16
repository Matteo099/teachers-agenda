import { Timestamp } from "firebase/firestore";
import { dateFormat } from "./utils";
import type { ID } from "./repositories/abstract-repository";
import { type CalendarEvent } from '@schedule-x/calendar';
export const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
export const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

export interface LessonFilterObj {
    name: string;
    icon: string;
    color: string;
    predicate?: (lesson: StudentLesson) => boolean;
}

export type CalendarEventExt = CalendarEvent & { data?: any };

export enum DayOfWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
}

export type HHMM = string;

export interface EventTime {
    startTime: HHMM;
    endTime: HHMM;
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

    static fromHHMM(t: HHMM): Time | undefined {
        try {
            const hhmm = t.split(":");
            if (hhmm.length != 2) return;
            const h = parseInt(hhmm[0]);
            const m = parseInt(hhmm[1]);

            return new Time(h, m);
        } catch (error) {
            return;
        }
    }

    getTotalMinutes(): number {
        return this.hour * 60 + this.minutes;
    }

    toITime(): ITime {
        return this.hour * 3600 + this.minutes * 60 + this.seconds;
    }

    setSeconds(sec: number) {
        this.seconds = sec;
    }

    add(p: { hour?: number; minutes?: number; seconds?: number; }): Time {
        this.hour += p.hour ?? 0;
        this.minutes += p.minutes ?? 0;
        this.seconds += p.seconds ?? 0;
        return this;
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

    static today() {
        return this.fromDate(new Date());
    }

    static fromIyyyyMMdd(date: IyyyyMMdd): yyyyMMdd {
        if (date.length != 8) throw new Error("Unable to parse date, format not correct (yyyyMMdd): " + date);

        const y = parseInt(date.substring(0, 4));
        const m = parseInt(date.substring(4, 6));
        const d = parseInt(date.substring(6, 8));
        return new yyyyMMdd(d, m, y)
    }

    toIyyyyMMdd(delimiter: string = "", startingMonthIndex = 0): IyyyyMMdd {
        return `${this.year.toString().padStart(4, '0')}${delimiter}${(this.month + startingMonthIndex).toString().padStart(2, '0')}${delimiter}${this.day.toString().padStart(2, '0')}`
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

export interface DateSelectModel {
    from?: IyyyyMMdd;
    to?: IyyyyMMdd;
}

export interface Student {
    id: string;
    schoolId: string; // relation with the school
    name: string;
    surname: string;
    contact?: string;
    lessonDay?: number;
    note?: Note;
    level: string;
    minutesLessonDuration: number;

    removed?: boolean;

    createdAt: Timestamp;  // Timestamp instead of Date for better Firestore querying
    updatedAt: Timestamp;
}

export interface Note {
    text: string;
    updatedAt: Timestamp;
}

export interface School {
    id: string;
    name: string;
    city?: string;
    email?: string;
    phoneNumber?: string;
    color?: string;

    managed: boolean;
    levelRanges: LevelRange[];
    managerOptions?: ManagerOptions;
    salaryStrategy: SalaryStrategy;

    // Instead of embedding arrays of students, store students in a separate collection and use schoolId for filtering
    // students: Student[];
    // lessonsHistory: Lesson[];
    // salaryHistory: Salary[];
    // calendarLesson: WeeklyLesson[];

    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export enum SalaryStrategy {
    ABSENT_AND_PRESENT,
    ONLY_PRESENT
}

export interface Salary {
    dailyLessonId: ID;
    date: IyyyyMMdd;
    lastUpdate?: Timestamp;
    salary: number;
    presents: number;
    absents: number;
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
    lessonId: string;
    studentId: string; // relation with the user
    startTime: ITime
    endTime: ITime;
}

export interface DailyLesson {
    id: string;
    date: IyyyyMMdd;
    schoolId: string;
    lessons: Lesson[];
    lastSalaryUpdate?: Timestamp;
    salary: number;
    /**
     * This field is used to verify if the school has changed its salary option over time.
     * If the strategy has changed, the salary must be recalculated accordingly.
     */
    salaryStrategy?: SalaryStrategy;
}

export interface TodayLesson { school: School; lesson: DailyLesson | WeeklyLesson }


export const lessonStatusName = ["", "presente", "assente", "cancellata"]
export const lessonStatusColor = ["gray", "green", "red", "orange"]
export enum LessonStatus {
    NONE,
    PRESENT,
    ABSENT,
    CANCELLED
}

export interface Lesson extends ScheduledLesson {
    status: LessonStatus;
    trial?: boolean;
    recovery?: RecoveryLessonInfo;
    undoneRecoveryRef?: LessonRef[];

    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface RecoveryLessonInfo {
    /**
     * Describes the context of the recovery lesson.
     * 
     * - 'original': Refers to the original lesson where the student was absent.
     * - 'recovery': Refers to the recovery lesson that has been scheduled to make up for the missed original lesson.
     */
    ref: 'original' | 'recovery';

    /**
     * The `lessonRef` refers to:
     * - The original daily lesson, if `ref` is 'original'.
     * - The recovery daily lesson, if `ref` is 'recovery'.
     */
    lessonRef: LessonRef;
}

export interface RecoverySchedule {
    studentId: ID;
    schoolId: ID;
    originalDailyLessonId: ID,
    originalLessonId: ID,
    date: Date;
    startTime: ITime;
    endTime: ITime;
}

export interface LessonRef {
    lessonId: string;
    dailyLessonId: string;
}

export interface SchoolRecoveryLesson {
    recoveries: RecoveryInfo[];
    schoolId: string;
}

/**
 * Lesson is UNSET when !done && !recoveryLesson
 * Lesson is PENDING when !done && !!recoveryLesson
 * Lesson is DONE when done && !!recoveryLesson
 */
export interface RecoveryInfo {
    originalLesson: LessonRef;
    recoveryLesson?: LessonRef;
    status?: LessonStatus;
}

export const recoveryTypes = {
    "unset": "Lezioni di Recupero da Programmare",
    "pending": "Lezioni di Recupero Programmate",
    "done": "Lezioni di Recupero Completate",
}

export type StudentLesson = Lesson & Student;


export const updateDailyLessonTime = function (startingTimeInSeconds: number | string | undefined, studentLessons: StudentLesson[] | { scheduledLessons: ScheduledLesson[], students: Student[] }) {
    let startingMinutes = 0;
    try {
        const time = startingTimeInSeconds;
        if (time == undefined) return;

        if (typeof time == "string") {
            const t = Time.fromHHMM(time);
            if (!t) return;
            startingMinutes = t.getTotalMinutes();
        } else {
            startingMinutes = time / 60;
        }

        console.log(startingMinutes)
    } catch (error) {
        console.log(error)
        return;
    }

    if (Array.isArray(studentLessons)) {
        studentLessons.forEach(sl => {
            sl.startTime = startingMinutes * 60;
            startingMinutes += sl.minutesLessonDuration;
            sl.endTime = startingMinutes * 60;
        })
    } else {
        studentLessons.scheduledLessons.forEach(sl => {
            sl.startTime = startingMinutes * 60;
            // sl.time = { hour: Math.trunc(startingMinutes / 60), minutes: startingMinutes % 60 }
            const student = studentLessons.students.find(s => s.id == sl.studentId);
            if (!student) return;
            startingMinutes += student.minutesLessonDuration;
            sl.endTime = startingMinutes * 60;
        });
    }
}