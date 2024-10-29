import { type DailyLesson, type Lesson, type LessonRef, type RecoveryInfo, type RecoveryLessonInfo, type SchoolRecoveryLesson, type Student, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";
import { StudentService } from "./student-service";

export enum RecoveryType { UNSET, PENDING, DONE }
export type ExpandedLesson = Lesson & { dailyLessonId: ID; schoolId: ID }
export type DailyLessonOrIDs = DailyLesson | { dailyLessonId: ID, schoolId: ID };
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

    /**
     * Lesson is UNSET when !done && !recoveryLesson
     * Lesson is PENDING when !done && !!recoveryLesson
     * Lesson is DONE when done && !!recoveryLesson
     */

    private getRecoveryType(ri: RecoveryInfo): RecoveryType {
        if (!ri.done && !ri.recoveryLesson) return RecoveryType.UNSET;
        if (!ri.done && !!ri.recoveryLesson) return RecoveryType.PENDING;
        return RecoveryType.DONE;
    }

    private addRecoveryByType(recovery: SchoolRecoveryLesson, originalLessonRef: LessonRef, type: RecoveryType, info: LessonRef | boolean) {
        let index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == type && l.originalLesson.dailyLessonId == originalLessonRef.dailyLessonId && l.originalLesson.lessonId == originalLessonRef.lessonId);
        if (index == -1) {
            recovery.recoveries.push({ originalLesson: originalLessonRef })
            index = recovery.recoveries.length - 1;
        }

        const ri = recovery.recoveries[index];
        if (type == RecoveryType.UNSET) {
            ri.originalLesson = info as LessonRef;
        }
        else if (type == RecoveryType.PENDING) {
            ri.recoveryLesson = info as LessonRef;
        }
        else {
            ri.done = info as boolean;
        }
    }

    private removeRecoveryByType(recovery: SchoolRecoveryLesson, lessonRef: LessonRef, type: RecoveryType) {
        const index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == type && l.originalLesson.dailyLessonId == lessonRef.dailyLessonId && l.originalLesson.lessonId == lessonRef.lessonId);
        if (index != -1) {
            if (type == RecoveryType.UNSET) {
                recovery.recoveries.splice(index, 1);
                return true;
            }
            else if (type == RecoveryType.PENDING) {
                if (recovery.recoveries[index].recoveryLesson) {
                    delete recovery.recoveries[index].recoveryLesson;
                    return true;
                }
            }
            else {
                if (recovery.recoveries[index].done) {
                    delete recovery.recoveries[index].done;
                    return true;
                }
            }
        }
        return false;
    }

    async updateRecovery(action: LessonStatusAction, lesson: ExpandedLesson) {
        const schoolId = lesson.schoolId;
        const isRecoveryLesson = lesson.recovery?.ref == 'original';
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);

        if (action == LessonStatusAction.SET_PRESENT) {
            if (!isRecoveryLesson) {
                const ref: LessonRef = { ...lesson };
                this.removeRecoveryByType(recovery, ref, RecoveryType.UNSET);
            } else {
                const ref: LessonRef = { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
                const info = true;
                // this.removeRecoveryByType(recovery, ref, RecoveryType.PENDING);
                this.addRecoveryByType(recovery, ref, RecoveryType.DONE, info);
            }
        }
        else if (action == LessonStatusAction.SET_ABSENT) {
            if (!isRecoveryLesson) {
                const ref: LessonRef = { ...lesson };
                const info = { ...ref };
                this.addRecoveryByType(recovery, ref, RecoveryType.UNSET, info);
            } else {
                console.warn("Trying to set absent a recovery lesson. A recovery lesson can be only CANCELLED!");
            }
        }
        else if (action == LessonStatusAction.CANCEL) {
            if (!isRecoveryLesson) {
                const ref = { ...lesson };
                this.removeRecoveryByType(recovery, ref, RecoveryType.UNSET);
            } else {
                const ref: LessonRef = { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
                const info = { ...ref };
                this.removeRecoveryByType(recovery, ref, RecoveryType.PENDING);
                this.addRecoveryByType(recovery, ref, RecoveryType.UNSET, info);

                const originalLessonId = ref.lessonId;
                const recoveryLessonId = lesson.lessonId;

                const O: DailyLesson = (await DailyLessonRepository.instance.get(ref.dailyLessonId))!;
                const R: DailyLesson = (await DailyLessonRepository.instance.get(lesson.dailyLessonId))!;
                await DailyLessonService.instance.removeRecoveryRef(O, originalLessonId);
                await DailyLessonService.instance.removeRecoveryRef(R, recoveryLessonId);
            }
        } else if (action == LessonStatusAction.RESET) {
            if (!isRecoveryLesson) {
                const ref = { ...lesson };
                this.removeRecoveryByType(recovery, ref, RecoveryType.UNSET);
            } else {
                const ref: LessonRef = { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
                const removed = this.removeRecoveryByType(recovery, ref, RecoveryType.DONE);

                // if the lesson was not in done state, but was cancelled, then restore recoveryRef in the originalDailyLesson
                if (!removed) {
                    const info = { ...ref };
                    this.addRecoveryByType(recovery, ref, RecoveryType.PENDING, info);

                    const originalLessonId = ref.lessonId;
                    const recoveryLessonId = lesson.lessonId;
                    const originalRef: RecoveryLessonInfo = { lessonRef: { ...ref }, ref: 'original' };
                    const recoveryRef: RecoveryLessonInfo = { lessonRef: { ...lesson }, ref: 'recovery' };

                    const O: DailyLesson = (await DailyLessonRepository.instance.get(ref.dailyLessonId))!;
                    const R: DailyLesson = (await DailyLessonRepository.instance.get(lesson.dailyLessonId))!;
                    await DailyLessonService.instance.addRecoveryRef(O, originalLessonId, recoveryRef);
                    await DailyLessonService.instance.addRecoveryRef(R, recoveryLessonId, originalRef);
                }
            }
        }
        SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
    }
}