import { collection, CollectionReference, type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot } from "firebase/firestore";
import { useFirestore } from "vuefire";
import type { DailyLesson, Lesson, School, Student, WeeklyLesson } from "./model";

export enum DatabaseRef {
    SCHOOLS = "schools",
    STUDENTS = "students",
    WEEK_LESSONS = "weekLessons",
    DAILY_LESSONS = "dailyLessons"
}

interface Database {
    [DatabaseRef.SCHOOLS]: CollectionReference<School, DocumentData>;
    [DatabaseRef.STUDENTS]: CollectionReference<Student, DocumentData>;
    [DatabaseRef.WEEK_LESSONS]: CollectionReference<WeeklyLesson, DocumentData>;
    [DatabaseRef.DAILY_LESSONS]: CollectionReference<DailyLesson, DocumentData>;
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
    db[DatabaseRef.WEEK_LESSONS] = dataPoint<WeeklyLesson>(DatabaseRef.WEEK_LESSONS)
    db[DatabaseRef.DAILY_LESSONS] = dataPoint<DailyLesson>(DatabaseRef.DAILY_LESSONS)
}

export function useDB<T>(ref: DatabaseRef): CollectionReference<T, DocumentData> {
    if (Object.keys(db).length == 0) init();
    return db[ref]! as CollectionReference<T, DocumentData>;
}