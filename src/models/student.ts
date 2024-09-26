export interface Student {
    id: string;
    name: string;
    surname: string;
    level: string;
    notes: string[];
}

export interface School {
    id: string;
    name: string;
    students: Student[];
    programmedLesson: WeekLesson[];
    lessonsHistory: Lesson[];
}

export interface WeekLesson {
    id: string;
    dayOfWeek: number;
    from: Date;
    to: Date;
    exclude: Date[];
    schedule: ScheduledLesson[];
}

export interface ScheduledLesson {
    id: string;
    studentId: string;
    time: { hour: number, minutes: number };
}

export interface Lesson extends ScheduledLesson {
    status: 'NONE' | 'PRESENT' | 'ABSENT';
    trial?: boolean;
    recoveryDate?: Date;
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