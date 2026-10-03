import { DatabaseRef, useDB } from '../firestore-utils';
import type { SchoolNote } from '../model';
import { AbstractRepository } from './abstract-repository';

export class SchoolNoteRepository extends AbstractRepository<SchoolNote> {
    private static _instance: SchoolNoteRepository | null = null;

    constructor() {
        super((userId: string) => useDB<SchoolNote>(DatabaseRef.SCHOOL_NOTES, userId));
    }

    public static get instance(): SchoolNoteRepository {
        if (!this._instance) this._instance = new SchoolNoteRepository();
        return this._instance;
    }
}
