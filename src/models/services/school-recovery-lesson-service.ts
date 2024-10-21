import { writeBatch } from "firebase/firestore";
import type { DailyLesson, SchoolRecoveryLesson } from "../model";
import { useFirestore } from "vuefire";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import type { ID } from "../repositories/abstract-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";

export interface ExtendedSchoolRecoveryLesson {
    /**
     * List of dailyLessonIds containing lesson with ABSENT status and no recovery object
     */
    unsetRecoveries: DailyLesson[];

    /**
     * List of dailyLessonIds containing lesson with ABSENT status and recovery lesson defined, but lesson is not yet done (status = NONE)
     */
    pendingRecoveries: DailyLesson[];

    /**
     * List of dailyLessonIds containing lesson with a recovery object (origin = 'original') and status = PRESENT
     */
    doneRecoveries: DailyLesson[];

    schoolId: string;
}

export class SchoolRecoveryLessonService {

    private static _instance: SchoolRecoveryLessonService | null = null;

    public static get instance(): SchoolRecoveryLessonService {
        if (!this._instance) this._instance = new SchoolRecoveryLessonService();
        return this._instance;
    }

    public async computeDailyLessons(recoveries: SchoolRecoveryLesson): Promise<ExtendedSchoolRecoveryLesson> {

        const unsetRecoveries = await Promise.all(recoveries.unsetRecoveries.map(id => DailyLessonRepository.instance.get(id.dailyLessonId)));
        const pendingRecoveries = await Promise.all(recoveries.pendingRecoveries.map(id => DailyLessonRepository.instance.get(id.dailyLessonId)));
        const doneRecoveries = await Promise.all(recoveries.doneRecoveries.map(id => DailyLessonRepository.instance.get(id.dailyLessonId)));

        return {
            unsetRecoveries: unsetRecoveries.filter(l => !!l),
            pendingRecoveries: pendingRecoveries.filter(l => !!l),
            doneRecoveries: doneRecoveries.filter(l => !!l),
            schoolId: recoveries.schoolId
        }
    }

    public async getOrCreate(schoolId: ID): Promise<SchoolRecoveryLesson> {
        const doc = await SchoolRecoveryLessonRepository.instance.getDoc(schoolId)
        if (doc.exists()) return doc.data();

        const srl: SchoolRecoveryLesson = {
            unsetRecoveries: [],
            pendingRecoveries: [],
            doneRecoveries: [],
            schoolId
        }
        await SchoolRecoveryLessonRepository.instance.create(srl);
        return srl;
    }

    public async setUnsetRecovery(lessonId: ID, dailyLessonId: ID, schoolId: ID) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);
        const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
        const pendingI = recovery.pendingRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
        const doneI = recovery.doneRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
        if (unsetI == -1) recovery.unsetRecoveries.push({ lessonId, dailyLessonId });
        if (pendingI != -1) recovery.pendingRecoveries.splice(pendingI, 1);
        if (doneI != -1) recovery.doneRecoveries.splice(doneI, 1);
        SchoolRecoveryLessonRepository.instance.update(recovery, schoolId);
    }
}