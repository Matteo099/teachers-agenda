import { DatabaseRef, useDB } from "../firestore-utils";
import type { School } from "../model";
import { AbstractRepository } from "./abstract-repository";

export class SchoolRepository extends AbstractRepository<School> {
    public static readonly instance = new SchoolRepository();

    constructor() {
        super(useDB<School>(DatabaseRef.SCHOOLS))
    }
}