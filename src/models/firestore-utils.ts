import { collection, CollectionReference, type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot } from "firebase/firestore"
import { useFirestore } from "vuefire"
import type { School } from "./model"

interface Database {
    schools: CollectionReference<School, DocumentData>
}

const db: Partial<Database> = {}

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
    db.schools = dataPoint<School>('schools')
}

export function useDB<T extends keyof typeof db>(name: T) {
    if (Object.keys(db).length == 0) init();
    return db[name]!;
}