import { LessonStatus, type DailyLesson, type Lesson, type LessonRef, type RecoveryInfo, type RecoveryLessonInfo, type RecoverySchedule, type SchoolRecoveryLesson, type Student, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";
import { StudentService } from "./student-service";

export enum RecoveryType { UNSET, PENDING, DONE }
export type ExpandedLesson = Lesson & { dailyLessonId: ID }
export type DailyLessonOrIDs = DailyLesson | { dailyLessonId: ID, schoolId: ID };
export type RecoveryReference = { originalDailyLesson: DailyLesson, recoveryDailyLesson?: DailyLesson, recoveryStatus?: LessonStatus };
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
        const addRecovery = (lesson: Lesson, student: Student, statusArray: ExtendedStudentLesson[], recoveryLessons: RecoveryReference, recoveryStatus?: LessonStatus) => {
            statusArray.push({ ...lesson, ...student, ...recoveryLessons, recoveryStatus });
        };

        // Process each recovery
        recoveries.recoveries.forEach(recovery => {
            const { originalLesson, recoveryLesson, status } = recovery;

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
                    status != undefined ? addRecovery(lesson, student, doneRecoveries, recoveryReferences, status)
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
        if (!ri.status && !ri.recoveryLesson) return RecoveryType.UNSET;
        if (!ri.status && !!ri.recoveryLesson) return RecoveryType.PENDING;
        return RecoveryType.DONE;
    }

    private addRecoveryByType(recovery: SchoolRecoveryLesson, originalLessonRef: LessonRef, type: RecoveryType, info: LessonRef | LessonStatus) {
        let index = recovery.recoveries.findIndex(l => l.originalLesson.dailyLessonId == originalLessonRef.dailyLessonId && l.originalLesson.lessonId == originalLessonRef.lessonId);
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
            ri.status = info as LessonStatus;
        }
    }

    private removeRecoveryByType(recovery: SchoolRecoveryLesson, lessonRef: LessonRef, type: RecoveryType) {
        const index = recovery.recoveries.findIndex(l => l.originalLesson.dailyLessonId == lessonRef.dailyLessonId && l.originalLesson.lessonId == lessonRef.lessonId);
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
                if (recovery.recoveries[index].status) {
                    delete recovery.recoveries[index].status;
                    return true;
                }
            }
        }
        return false;
    }

    async updateRecovery(action: LessonStatusAction, schoolId: ID, ...lessons: ExpandedLesson[]) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);

        for await (const lesson of lessons) {
            const isRecoveryLesson = lesson.recovery?.ref == 'original';
            const originalLessonRef: LessonRef = isRecoveryLesson ? { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId } : { dailyLessonId: lesson.dailyLessonId, lessonId: lesson.lessonId };

            if (action == LessonStatusAction.SET_PRESENT) {
                if (!isRecoveryLesson) {
                    // const ref: LessonRef = { ...lesson };
                    this.removeRecoveryByType(recovery, originalLessonRef, RecoveryType.UNSET);
                } else {
                    // const ref: LessonRef = { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
                    const info = LessonStatus.PRESENT;
                    // this.removeRecoveryByType(recovery, ref, RecoveryType.PENDING);
                    this.addRecoveryByType(recovery, originalLessonRef, RecoveryType.DONE, info);
                }
            }
            else if (action == LessonStatusAction.SET_ABSENT) {
                if (!isRecoveryLesson) {
                    // const ref: LessonRef = { ...lesson };
                    const info = { ...originalLessonRef };
                    this.addRecoveryByType(recovery, originalLessonRef, RecoveryType.UNSET, info);
                } else {
                    // const ref: LessonRef = { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
                    const info = { ...originalLessonRef };
                    this.removeRecoveryByType(recovery, originalLessonRef, RecoveryType.PENDING);
                    this.addRecoveryByType(recovery, originalLessonRef, RecoveryType.UNSET, info);

                    const originalLessonId = originalLessonRef.lessonId;
                    const O: DailyLesson = (await DailyLessonRepository.instance.get(originalLessonRef.dailyLessonId))!;
                    await DailyLessonService.instance.moveRecoveryRefToUndoneList(O, originalLessonId);
                }
            }
            else if (action == LessonStatusAction.CANCEL) {
                if (!isRecoveryLesson) {
                    // const ref = { ...lesson };
                    this.removeRecoveryByType(recovery, originalLessonRef, RecoveryType.UNSET);
                } else {
                    // const ref: LessonRef = { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
                    const info = LessonStatus.CANCELLED;
                    // this.removeRecoveryByType(recovery, ref, RecoveryType.PENDING);
                    this.addRecoveryByType(recovery, originalLessonRef, RecoveryType.DONE, info);
                }
            } else if (action == LessonStatusAction.RESET) {
                if (!isRecoveryLesson) {
                    // const ref = { ...lesson };
                    this.removeRecoveryByType(recovery, originalLessonRef, RecoveryType.UNSET);
                } else {
                    // const ref: LessonRef = { dailyLessonId: lesson.recovery!.lessonRef.dailyLessonId, lessonId: lesson.recovery!.lessonRef.lessonId }
                    const removed = this.removeRecoveryByType(recovery, originalLessonRef, RecoveryType.DONE);

                    // if the lesson was not in done state, but was cancelled, then restore recoveryRef in the originalDailyLesson
                    if (!removed) {
                        const info = { dailyLessonId: lesson.dailyLessonId, lessonId: lesson.lessonId };
                        this.addRecoveryByType(recovery, originalLessonRef, RecoveryType.PENDING, info);

                        const originalLessonId = originalLessonRef.lessonId;
                        const recoveryLessonId = lesson.lessonId;
                        const originalRef: RecoveryLessonInfo = { lessonRef: { ...originalLessonRef }, ref: 'original' };
                        const recoveryRef: RecoveryLessonInfo = { lessonRef: { ...info }, ref: 'recovery' };

                        const O: DailyLesson = (await DailyLessonRepository.instance.get(originalLessonRef.dailyLessonId))!;
                        const R: DailyLesson = (await DailyLessonRepository.instance.get(lesson.dailyLessonId))!;
                        await DailyLessonService.instance.addRecoveryRef(O, originalLessonId, recoveryRef);
                        await DailyLessonService.instance.addRecoveryRef(R, recoveryLessonId, originalRef);
                    }
                }
            }
        }
        SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
    }

    public async scheduleRecovery(lesson: ExtendedStudentLesson, schedule: RecoverySchedule) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(lesson.schoolId);

        // Step 1: create a new lesson R with recoveryReference to Original Lesson
        const recoveryDailyLesson: ExpandedLesson = await DailyLessonService.instance.createRecoveryLesson(schedule);
        // Step 2: update original lesson O with recoveryReference to R Lesson
        const originalDaillyLessonDoc = await DailyLessonRepository.instance.getDoc(lesson.originalDailyLesson.id);
        if (originalDaillyLessonDoc.exists()) {
            const originalDaillyLesson = originalDaillyLessonDoc.data();

            const _lesson = originalDaillyLesson.lessons.find(l => l.lessonId == lesson.lessonId);
            if (_lesson) {
                _lesson.recovery = {
                    ref: 'recovery',
                    lessonRef: {
                        dailyLessonId: recoveryDailyLesson.dailyLessonId,
                        lessonId: recoveryDailyLesson.lessonId
                    }
                }
                await DailyLessonRepository.instance.save(originalDaillyLesson, originalDaillyLesson.id);
            }
        } else console.warn("")
        // Step 3: update school recovery lesson status
        const ref: LessonRef = {
            dailyLessonId: lesson.originalDailyLesson.id,
            lessonId: lesson.lessonId
        }
        const info: LessonRef = {
            dailyLessonId: recoveryDailyLesson.dailyLessonId,
            lessonId: recoveryDailyLesson.lessonId
        }
        this.addRecoveryByType(recovery, ref, RecoveryType.PENDING, info);
        SchoolRecoveryLessonRepository.instance.save(recovery, lesson.schoolId);
    }

    public async cancelRecovery(lesson: ExtendedStudentLesson, deleteFromRecoveries?: boolean) {
        if (!lesson.recoveryDailyLesson) return;

        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(lesson.schoolId);
        let recoveryLessonRef: LessonRef | undefined;
        let originalLessonRef: LessonRef | undefined;
        const recoveryTypeDeletition: RecoveryType[] = [];

        if (lesson.recovery?.ref == "recovery") {
            recoveryLessonRef = lesson.recovery.lessonRef;
            originalLessonRef = lesson.recoveryDailyLesson.lessons.find(l => l.lessonId == recoveryLessonRef?.lessonId)?.recovery?.lessonRef;
        } else if (lesson.recovery?.ref == "original") {
            originalLessonRef = lesson.recovery.lessonRef;
            recoveryLessonRef = lesson.originalDailyLesson.lessons.find(l => l.lessonId == originalLessonRef?.lessonId)?.recovery?.lessonRef;
        }

        // Step 1: remove the recovery lesson from the recovery daily lesson
        const recoveryDailyLesson = await DailyLessonRepository.instance.get(lesson.recoveryDailyLesson.id);
        const recoveryLessonIndex = recoveryDailyLesson?.lessons.findIndex(l => l.lessonId == recoveryLessonRef?.lessonId);
        if (recoveryDailyLesson && recoveryLessonIndex != undefined && recoveryLessonIndex != -1) {
            recoveryDailyLesson.lessons.splice(recoveryLessonIndex, 1);
            // if the recovery daily lesson has no more lessons, delete it
            if (recoveryDailyLesson.lessons.length == 0) {
                await DailyLessonRepository.instance.delete(recoveryDailyLesson.id);
            } else {
                await DailyLessonRepository.instance.save(recoveryDailyLesson, recoveryDailyLesson.id);
            }
        }

        // Step 2: remove the recovery lesson reference from the original daily lesson
        const originalDailyLesson = await DailyLessonRepository.instance.get(lesson.originalDailyLesson.id);
        const originalLessonIndex = originalDailyLesson?.lessons.findIndex(l => l.lessonId == originalLessonRef?.lessonId);
        if (originalDailyLesson && originalLessonIndex != undefined && originalLessonIndex != -1) {
            delete originalDailyLesson.lessons[originalLessonIndex].recovery;
            await DailyLessonRepository.instance.save(originalDailyLesson, originalDailyLesson.id);
        }

        // Step 3: remove the recovey ref from recoveries
        if (originalLessonRef) {
            recoveryTypeDeletition.push(RecoveryType.DONE, RecoveryType.PENDING);
            if (deleteFromRecoveries)
                recoveryTypeDeletition.push(RecoveryType.UNSET);

            recoveryTypeDeletition.forEach(rtd => this.removeRecoveryByType(recovery, originalLessonRef, rtd));
            await SchoolRecoveryLessonRepository.instance.save(recovery, lesson.schoolId);
        }
    }
}
