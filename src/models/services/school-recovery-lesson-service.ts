import { yyyyMMdd, type DailyLesson, type SchoolRecoveryLesson, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";
import { StudentService } from "./student-service";

export type ExtendedStudentLesson = StudentLesson & { date: yyyyMMdd; dailyLessonId: ID, originalDailyLesson?: DailyLesson };
export interface ExtendedSchoolRecoveryLesson {
    recoveryMap: { type: 'unset' | 'pending' | 'done'; recoveries: ExtendedStudentLesson[] }[]
    // /**
    //  * List of dailyLessonIds containing lesson with ABSENT status and no recovery object
    //  */
    // unsetRecoveries: StudentLesson[];

    // /**
    //  * List of dailyLessonIds containing lesson with ABSENT status and recovery lesson defined, but lesson is not yet done (status = NONE)
    //  */
    // pendingRecoveries: StudentLesson[];

    // /**
    //  * List of dailyLessonIds containing lesson with a recovery object (origin = 'original') and status = PRESENT
    //  */
    // doneRecoveries: StudentLesson[];

    schoolId: string;
}

export enum LessonStatusAction {
    SET_PRESENT, SET_ABSENT, CANCEL, RESET
}

export class SchoolRecoveryLessonService {

    private static _instance: SchoolRecoveryLessonService | null = null;

    public static get instance(): SchoolRecoveryLessonService {
        if (!this._instance) this._instance = new SchoolRecoveryLessonService();
        return this._instance;
    }

    public async computeDailyLessons(recoveries: SchoolRecoveryLesson): Promise<ExtendedSchoolRecoveryLesson> {
        const unsetRecoveryLessons = await Promise.all(
            recoveries.unsetRecoveries.map(async (ref) => {
                const dailyLesson = await DailyLessonRepository.instance.get(ref.dailyLessonId);
                return { ref, dailyLesson };
            })
        );
        const pendingRecoveryLessons = await Promise.all(
            recoveries.pendingRecoveries.map(async (ref) => {
                const dailyLesson = await DailyLessonRepository.instance.get(ref.dailyLessonId);
                return { ref, dailyLesson };
            })
        );
        const doneRecoveryLessons = await Promise.all(
            recoveries.doneRecoveries.map(async (ref) => {
                const dailyLesson = await DailyLessonRepository.instance.get(ref.dailyLessonId);
                return { ref, dailyLesson };
            })
        );
        const students = await StudentService.instance.getStudentsOfSchool(recoveries.schoolId);

        const unsetRecoveries: ExtendedStudentLesson[] = [];
        const pendingRecoveries: ExtendedStudentLesson[] = [];
        const doneRecoveries: ExtendedStudentLesson[] = [];
        for (const unsetLesson of unsetRecoveryLessons) {
            const dailyLesson = unsetLesson.dailyLesson;
            if (!dailyLesson) continue;
            dailyLesson.lessons.forEach(l => {
                if (l.lessonId != unsetLesson.ref.lessonId) return;
                const s = students.find(st => st.id == l.studentId);
                if (!s) return;
                unsetRecoveries.push({ ...l, ...s, date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date), dailyLessonId: dailyLesson.id });
            })
        }
        for (const pendingLesson of pendingRecoveryLessons) {
            const dailyLesson = pendingLesson.dailyLesson;
            if (!dailyLesson) continue;
            dailyLesson.lessons.forEach(l => {
                if (l.lessonId != pendingLesson.ref.lessonId) return;
                const s = students.find(st => st.id == l.studentId);
                if (!s) return;
                pendingRecoveries.push({ ...l, ...s, date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date), dailyLessonId: dailyLesson.id });
            })
        }
        for (const doneLesson of doneRecoveryLessons.filter(l => !!l)) {
            const dailyLesson = doneLesson.dailyLesson;
            if (!dailyLesson) continue;
            dailyLesson.lessons.forEach(l => {
                if (l.lessonId != doneLesson.ref.lessonId) return;
                const s = students.find(st => st.id == l.studentId);
                if (!s) return;
                doneRecoveries.push({ ...l, ...s, date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date), dailyLessonId: dailyLesson.id });
            })
        }

        return {
            recoveryMap: [
                { type: 'unset', recoveries: unsetRecoveries },
                { type: 'pending', recoveries: pendingRecoveries },
                { type: 'done', recoveries: doneRecoveries },
            ],
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
        await SchoolRecoveryLessonRepository.instance.save(srl, schoolId);
        return srl;
    }

    public async setUnsetRecovery(recoveryOrSchoolId: ID | SchoolRecoveryLesson, dailyLessonId: ID, ...lessonIds: ID[]) {
        const update = typeof recoveryOrSchoolId === 'string';
        let recovery;
        if (update)
            recovery = await SchoolRecoveryLessonService.instance.getOrCreate(recoveryOrSchoolId);
        else recovery = recoveryOrSchoolId;

        lessonIds.forEach(lessonId => {
            const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            if (unsetI == -1) recovery.unsetRecoveries.push({ lessonId, dailyLessonId });
        })

        if (update) SchoolRecoveryLessonRepository.instance.save(recovery, recoveryOrSchoolId);
    }

    public async setPendingRecovery(recoveryOrSchoolId: ID | SchoolRecoveryLesson, dailyLessonId: ID, ...lessonIds: ID[]) {
        const update = typeof recoveryOrSchoolId === 'string';
        let recovery;
        if (update)
            recovery = await SchoolRecoveryLessonService.instance.getOrCreate(recoveryOrSchoolId);
        else recovery = recoveryOrSchoolId;

        lessonIds.forEach(lessonId => {
            const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const pendingI = recovery.pendingRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            if (unsetI != -1) recovery.unsetRecoveries.splice(unsetI, 1)[0];
            else console.warn("Set pending recovery but not found in unset recovery list...");
            if (pendingI == -1) {
                recovery.pendingRecoveries.push({ lessonId, dailyLessonId });
            }
        })

        if (update) SchoolRecoveryLessonRepository.instance.save(recovery, recoveryOrSchoolId);
    }

    public async setDoneRecovery(recoveryOrSchoolId: ID | SchoolRecoveryLesson, dailyLessonId: ID, ...lessonIds: ID[]) {
        const update = typeof recoveryOrSchoolId === 'string';
        let recovery;
        if (update)
            recovery = await SchoolRecoveryLessonService.instance.getOrCreate(recoveryOrSchoolId);
        else recovery = recoveryOrSchoolId;

        lessonIds.forEach(lessonId => {
            const pendingI = recovery.pendingRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const doneI = recovery.doneRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            if (pendingI != -1) recovery.pendingRecoveries.splice(pendingI, 1)[0];
            else console.warn("Set done recovery but not found in pending recovery list...");
            if (doneI == -1) {
                recovery.doneRecoveries.push({ lessonId, dailyLessonId });
            }
        })

        if (update) SchoolRecoveryLessonRepository.instance.save(recovery, recoveryOrSchoolId);
    }

    async updateRecovery(action: LessonStatusAction, dailyLessonId: ID, schoolId: ID, ...lessons: StudentLesson[]) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);
        for await (const lesson of lessons) {
            if (action == LessonStatusAction.SET_PRESENT) {
                if (lesson.recovery) {
                    this.setDoneRecovery(recovery, dailyLessonId, lesson.lessonId);
                } else {
                    const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lesson.lessonId);
                    if (unsetI != -1) recovery.unsetRecoveries.splice(unsetI, 1);
                }
            }
            else if (action == LessonStatusAction.SET_ABSENT) {
                if (!lesson.recovery) {
                    this.setUnsetRecovery(recovery, dailyLessonId, lesson.lessonId);
                } else console.warn("Trying to set absent a recovery lesson. A recovery lesson can be only CANCELLED!");
            }
            else if (action == LessonStatusAction.CANCEL) {
                if (lesson.recovery) {
                    // remove recoveryRef from originalDailyLesson
                    const originalDailyLessonDoc = await DailyLessonRepository.instance.getDoc(lesson.recovery.dailyLessonId);
                    if (originalDailyLessonDoc.exists()) {
                        const originalDailyLesson = originalDailyLessonDoc.data();
                        const l = originalDailyLesson.lessons.find(l => l.lessonId == lesson.recovery!.lessonId);
                        if (l && l.recovery) {
                            delete l.recovery;
                            await DailyLessonRepository.instance.save(originalDailyLesson, lesson.recovery.dailyLessonId)
                        }
                    } else console.warn("Trying to cancel recovery lesson but original lesson does not present recovery reference")
                } else {
                    const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lesson.lessonId);
                    if (unsetI != -1) recovery.unsetRecoveries.splice(unsetI, 1);
                }
            } else if (action == LessonStatusAction.RESET) {
                if (lesson.recovery) {
                    // if lesson is in done status remove from done and add to pending state
                    const doneI = recovery.doneRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lesson.lessonId);
                    if (doneI != -1) {
                        recovery.doneRecoveries.splice(doneI, 1);
                        this.setPendingRecovery(recovery, dailyLessonId, lesson.lessonId);
                    }
                    // otherwise, if the lesson was cancelled restore recoveryRef in the originalDailyLesson
                    else {
                        const originalDailyLessonDoc = await DailyLessonRepository.instance.getDoc(dailyLessonId);
                        if (originalDailyLessonDoc.exists()) {
                            const originalDailyLesson = originalDailyLessonDoc.data();
                            const l = originalDailyLesson.lessons.find(l => l.lessonId == lesson.recovery!.lessonId);
                            if (l) {
                                l.recovery = {
                                    lessonId: lesson.lessonId,
                                    dailyLessonId: dailyLessonId,
                                    ref: 'recovery'
                                };
                                await DailyLessonRepository.instance.save(originalDailyLesson, dailyLessonId)
                            }
                        }
                    }
                } else {
                    // remove from unset
                    const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lesson.lessonId);
                    if (unsetI != -1) recovery.unsetRecoveries.splice(unsetI, 1);
                }
            }
        }
        SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
    }
}