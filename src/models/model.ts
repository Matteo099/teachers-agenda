import type { Timestamp } from "firebase/firestore";

export const days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

export interface Student {
    id: string;
    schoolId: string; // relation with the school
    name: string;
    surname: string;
    contact: string;
    lessonDay: number;
    level: string;
    notes: string[];
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
    calendarLesson: WeeklyLesson[];

    // Instead of embedding arrays of students, store students in a separate collection and use schoolId for filtering
    // students: Student[];
    // lessonsHistory: Lesson[];
    // salaryHistory: Salary[];

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
    minutes: number;
}

export interface WeeklyLesson {
    id: string;
    schoolId: string;  // Relation with School (if needed)
    dayOfWeek: number;  // 0 = Sunday, 1 = Monday, etc.
    from: Timestamp;  // Using Timestamp for better Firestore compatibility
    to: Timestamp;  // Same as above
    exclude: Timestamp[];  // Consider using Timestamps instead of Date
    schedule: ScheduledLesson[];  // Keep this but consider limiting nesting depth

    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface ScheduledLesson {
    studentId: string; // relation with the user
    time: { hour: number, minutes: number }; // Could be simplified into one field for easier querying (optional)
}

export interface DailyLesson {
    id: string;
    date: Timestamp;
    schoolId: string;
    lessons: Lesson[];
}

export interface Lesson extends ScheduledLesson {
    // schoolId: string; // relation with the school
    status: 'NONE' | 'PRESENT' | 'ABSENT' | 'CANCELLED' | 'RESCHEDULED';
    trial?: boolean;
    recoveryDate?: Timestamp;
    originalScheduledLessonId?: string;  // Link to the original scheduled lesson if rescheduled

    createdAt: Timestamp;
    updatedAt: Timestamp;
}

/*

## Alunni (Student)
{
    id: string; A1
    name: string; Maria
    surname: string; Sole
    level: string; 1
    notes: string; []
},
{   
    id: string; A2
    name: string; Mario
    surname: string; Rossi
    level: string; 1
    notes: string; []
},
{   
    id: string; A5
    name: string; Giacomo
    surname: string; Leopardi
    level: string; 2
    notes: string; []
}


## Scuole (School)
{
    id: string = S1
    name: string = La Fenice
    students: Student[] = [ A1, A2 ]
    programmedLessons: WeekLesson[] = [ LS0 ]
    lessonsHistory: { [date: Date]: Lesson[] } = {
        10/10/2024: [ 
            { studentId: A1, time: 14:40, status: PRESENT },
            { studentId: A2, time: 15:40, status: PRESENT },
            { studentId: A3, time: 16:40, status: ABSENT, recoveryDate: 15/11/2024 11:40  },
            { studentId: A4, time: 17:40, status: PRESENT, trial: true },
        ]
        ...
    }
},
{
    id: string = S2
    name: string = Lizard
    students: Student[] = [ A5 ]
    programmedLessons: WeekLesson[] = [ ]
    lessonsHistory: [ date: Lesson[] ] = [ ]
}


## Lezioni Settimanali (WeekLesson)
{
    id: string = LS0
    dayOfWeek: number = 0 (Lunedi)
    from: Date = 10/9/2024
    to: Date = 10/6/2025
    exclude: Date[] = [ 25/12/2024, 1/4/2025 ]
    schedule: ScheduledLesson[] = [ 
        {
            studentId: string = A1
            time: { hour: number, minutes: number } = 14:00
        },
        {
            studentId: string = A2
            time: { hour: number, minutes: number } = 14:40
        }
    ]
}



*/