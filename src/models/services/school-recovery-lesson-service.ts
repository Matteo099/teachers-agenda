import { yyyyMMdd, type DailyLesson, type Lesson, type SchoolRecoveryLesson, type Student, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";
import { StudentService } from "./student-service";

export type RecoveryReference = { originalDailyLesson: DailyLesson, recoveryDailyLesson?: DailyLesson };
export type ExtendedStudentLesson = StudentLesson & RecoveryReference;
export interface ExtendedSchoolRecoveryLesson {
    recoveryMap: { type: 'unset' | 'pending' | 'done'; recoveries: ExtendedStudentLesson[] }[]

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
        // Collect all unique daily lesson IDs from recoveries
        const dailyLessonIds = Array.from(new Set(recoveries.recoveries.flatMap(r => [r.originalLesson.dailyLessonId, r.recoveryLesson?.dailyLessonId]).filter(Boolean)));

        // Retrieve all required daily lessons and students
        const dailyLessons = await Promise.all(dailyLessonIds.map(id => DailyLessonRepository.instance.get(id!)));
        const validDailyLessons = dailyLessons.filter(Boolean);
        const students = await StudentService.instance.getStudentsOfSchool(recoveries.schoolId);

        // Initialize categorized recovery arrays
        const unsetRecoveries: ExtendedStudentLesson[] = [];
        const pendingRecoveries: ExtendedStudentLesson[] = [];
        const doneRecoveries: ExtendedStudentLesson[] = [];

        // Helper function to add recovery to the respective category
        const addRecovery = (lesson: Lesson, student: Student, statusArray: ExtendedStudentLesson[], recoveryLessons: RecoveryReference) => {
            statusArray.push({ ...lesson, ...student, ...recoveryLessons });
        };

        // Process each recovery
        recoveries.recoveries.forEach(recovery => {
            const { originalLesson, recoveryLesson, done } = recovery;

            const originalDailyLesson = validDailyLessons.find(d => d!.id === originalLesson.dailyLessonId);
            const recoveryDailyLesson = recoveryLesson ? validDailyLessons.find(d => d!.id === recoveryLesson.dailyLessonId) : undefined;

            if (!originalDailyLesson) {
                console.warn("Unable to load original daily lesson of a recovery...");
                return;
            }

            const recoveryReferences = { originalDailyLesson, recoveryDailyLesson };

            originalDailyLesson.lessons.forEach(lesson => {
                if (lesson.lessonId !== originalLesson.lessonId) return;

                const student = students.find(st => st.id === lesson.studentId);
                if (!student) return;

                if (recoveryDailyLesson) {
                    done ? addRecovery(lesson, student, doneRecoveries, recoveryReferences)
                        : addRecovery(lesson, student, pendingRecoveries, recoveryReferences);
                } else {
                    addRecovery(lesson, student, unsetRecoveries, recoveryReferences);
                }
            });
        });

        return {
            recoveryMap: [
                { type: 'unset', recoveries: unsetRecoveries },
                { type: 'pending', recoveries: pendingRecoveries },
                { type: 'done', recoveries: doneRecoveries },
            ],
            schoolId: recoveries.schoolId
        };
    }

    public async getOrCreate(schoolId: ID): Promise<SchoolRecoveryLesson> {
        const doc = await SchoolRecoveryLessonRepository.instance.getDoc(schoolId)
        if (doc.exists()) return doc.data();

        const srl: SchoolRecoveryLesson = {
            recoveries: [],
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
            const unsetI = recovery.recoveries.findIndex(l => !l.done && !l.recoveryLesson && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
            if (unsetI == -1) recovery.recoveries.push({ originalLesson: { lessonId, dailyLessonId } });
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
            const unsetI = recovery.recoveries.findIndex(l => !l.done && !l.recoveryLesson && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
            if (unsetI != -1) recovery.recoveries.splice(unsetI, 1)[0];
            else console.warn("Set pending recovery but not found in unset recovery list...");
            const pendingI = recovery.recoveries.findIndex(l => !l.done && !!l.recoveryLesson && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
            if (pendingI == -1) {
                recovery.recoveries.push({ originalLesson: { lessonId, dailyLessonId } });
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
                console.log(lesson);

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