import { addDoc, deleteDoc, doc, getDocs, onSnapshot, query, QueryConstraint, type CollectionReference, type DocumentData } from "firebase/firestore";
import type { Ref } from "vue";
import { useDocument } from "vuefire";
import { QueryEvent, type IQueryEvent } from "../utils/event";

export type ID = string;

export abstract class AbstractRepository<T> {
    protected constructor(public readonly collectionReference: CollectionReference<T, DocumentData>) {}

    public get(id: ID): Ref<T | undefined> {
        return useDocument(doc(this.collectionReference, id))
    }

    public async getAll(...queries: QueryConstraint[]): Promise<T[]> {
        const _query = query(this.collectionReference, ...queries);
        const snapshot = await getDocs(_query);
        return snapshot.docs.map(doc => doc.data());
    }

    public async create(obj: T): Promise<ID> {
        const docRef = await addDoc(this.collectionReference, obj);
        return docRef.id;
    }

    public observe(id: ID): T {
        throw new Error("Method not implemented.");
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