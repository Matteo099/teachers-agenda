import { addDoc, deleteDoc, doc, DocumentSnapshot, getDoc, getDocs, onSnapshot, query, QueryConstraint, QuerySnapshot, setDoc, type CollectionReference, type DocumentData } from "firebase/firestore";
import { QueryEvent, type IQueryEvent } from "../utils/event";

export type ID = string;

export abstract class AbstractRepository<T> {
    protected constructor(public readonly collectionReference: CollectionReference<T, DocumentData>) { }

    public async get(id: ID): Promise<T | undefined> {
        return (await this.getDoc(id)).data();
    }

    public async getDoc(id: ID): Promise<DocumentSnapshot<T, DocumentData>> {
        return await getDoc(doc(this.collectionReference, id));
    }

    public async getAll(...queries: QueryConstraint[]): Promise<T[]> {
        const _query = query(this.collectionReference, ...queries);
        const snapshot = await getDocs(_query);
        return snapshot.docs.map(doc => doc.data());
    }

    public async getAllDocs(...queries: QueryConstraint[]): Promise<QuerySnapshot<T, DocumentData>> {
        const _query = query(this.collectionReference, ...queries);
        return await getDocs(_query);
    }

    public async save(obj: Partial<T> | any, id?: ID): Promise<ID> {
        if (id != undefined) {
            setDoc(doc(this.collectionReference, id), obj);
            return id;
        }
        const docRef = await addDoc(this.collectionReference, obj);
        return docRef.id;
    }

    public observeAll(...queries: QueryConstraint[]): IQueryEvent<T[]> {
        const subscription = new QueryEvent<T[]>();
        const _query = query(this.collectionReference, ...queries);
        const unsubscibe = onSnapshot(_query, (snapshot) => {
            const data = snapshot.docs.map(doc => doc.data())
            subscription.next(data);
        }, (error) => {
            subscription.error(error)
        });
        subscription.setUnsubscription(unsubscibe);
        return subscription;
    }

    public async delete(id: ID): Promise<void> {
        await deleteDoc(doc(this.collectionReference, id));
    }

    public deleteAll(): T {
        throw new Error("Method not implemented.");
    }
}