import { collection, CollectionReference, type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot } from "firebase/firestore";
import { useFirestore } from "vuefire";
import type { DailyLesson, Lesson, School, SchoolRecoveryLesson, Student, WeeklyLesson } from "./model";

export enum DatabaseRef {
    SCHOOLS = "schools",
    STUDENTS = "students",
    WEEKLY_LESSONS = "weeklyLessons",
    DAILY_LESSONS = "dailyLessons",
    SCHOOL_RECOVERY_LESSONS = "schoolRecoveryLessons",
}

interface Database {
    [DatabaseRef.SCHOOLS]: CollectionReference<School, DocumentData>;
    [DatabaseRef.STUDENTS]: CollectionReference<Student, DocumentData>;
    [DatabaseRef.WEEKLY_LESSONS]: CollectionReference<WeeklyLesson, DocumentData>;
    [DatabaseRef.DAILY_LESSONS]: CollectionReference<DailyLesson, DocumentData>;
    [DatabaseRef.SCHOOL_RECOVERY_LESSONS]: CollectionReference<SchoolRecoveryLesson, DocumentData>;
}

const db: Partial<Database> = {};

function init() {
    const converter = <T>(): FirestoreDataConverter<T> => ({
        toFirestore: (data: any) => data,
        // toFirestore: (data: Partial<T>) => data,
        fromFirestore: (snap: QueryDocumentSnapshot) => {
            const data = snap.data() as T;
            // @ts-ignore
            data.id = snap.id;
            return data;
        }
    })
    const dataPoint = <T>(collectionPath: string) => collection(useFirestore(), collectionPath).withConverter(converter<T>())

    db[DatabaseRef.SCHOOLS] = dataPoint<School>(DatabaseRef.SCHOOLS)
    db[DatabaseRef.STUDENTS] = dataPoint<Student>(DatabaseRef.STUDENTS)
    db[DatabaseRef.WEEKLY_LESSONS] = dataPoint<WeeklyLesson>(DatabaseRef.WEEKLY_LESSONS)
    db[DatabaseRef.DAILY_LESSONS] = dataPoint<DailyLesson>(DatabaseRef.DAILY_LESSONS)
    db[DatabaseRef.SCHOOL_RECOVERY_LESSONS] = dataPoint<SchoolRecoveryLesson>(DatabaseRef.SCHOOL_RECOVERY_LESSONS)
}

export function useDB<T>(ref: DatabaseRef): CollectionReference<T, DocumentData> {
    if (Object.keys(db).length == 0) init();
    return db[ref]! as CollectionReference<T, DocumentData>;
}