import { collection, CollectionReference, type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot } from "firebase/firestore";
import { useFirestore } from "vuefire";
import type { Lesson, School, Student, WeekLesson } from "./model";

export enum DatabaseRef {
    SCHOOLS = "schools",
    STUDENTS = "students",
    WEEK_LESSONS = "weekLessons",
    LESSONS = "lessons"
}

interface Database {
    [DatabaseRef.SCHOOLS]: CollectionReference<School, DocumentData>;
    [DatabaseRef.STUDENTS]: CollectionReference<Student, DocumentData>;
    [DatabaseRef.WEEK_LESSONS]: CollectionReference<WeekLesson, DocumentData>;
    [DatabaseRef.LESSONS]: CollectionReference<Lesson, DocumentData>;
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

    db[DatabaseRef.SCHOOLS] = dataPoint<School>('schools')
    db[DatabaseRef.STUDENTS] = dataPoint<Student>('students')
    db[DatabaseRef.WEEK_LESSONS] = dataPoint<WeekLesson>('weekLessons')
    db[DatabaseRef.LESSONS] = dataPoint<Lesson>('lessons')
}

export function useDB<T>(ref: DatabaseRef): CollectionReference<T, DocumentData> {
    if (Object.keys(db).length == 0) init();
    return db[ref]! as CollectionReference<T, DocumentData>;
}