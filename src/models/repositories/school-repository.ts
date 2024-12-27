import { DatabaseRef, useDB } from "../firestore-utils";
import type { School } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class SchoolRepository extends AbstractRepository<School> {
    private static _instance: SchoolRepository | null = null;

    constructor() {
        super(useDB<School>(DatabaseRef.SCHOOLS), true)
    }

    public static get instance(): SchoolRepository {
        if (!this._instance) this._instance = new SchoolRepository();
        return this._instance;
    }
}