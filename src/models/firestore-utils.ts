import { collection, CollectionReference, type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot } from "firebase/firestore";
import { useFirestore } from "vuefire";

export enum DatabaseRef {
    SCHOOLS = "schools",
    STUDENTS = "students",
    WEEKLY_LESSONS = "weeklyLessons",
    DAILY_LESSONS = "dailyLessons",
    RECOVERY_LESSONS = "recoveryLessons",
}

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

export function useDB<T>(ref: DatabaseRef, userId: string): CollectionReference<T, DocumentData> {
    const subcollectionPath = `${ref}/${userId}/user${ref.charAt(0).toUpperCase() + ref.slice(1)}`;
    return dataPoint<T>(subcollectionPath);
}