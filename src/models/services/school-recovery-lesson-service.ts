import { type DailyLesson, type Lesson, type RecoveryInfo, type RecoveryLessonInfo, type SchoolRecoveryLesson, type Student, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";
import { StudentService } from "./student-service";

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

    private getRecoveryType(ri: RecoveryInfo): 'UNSET' | 'PENDING' | 'DONE' {
        if (!ri.done && !ri.recoveryLesson) return 'UNSET';
        if (!ri.done && !!ri.recoveryLesson) return 'PENDING';
        return 'DONE'
    }

    private addUnsetRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lessonId: ID | StudentLesson) {
        lessonId = typeof (lessonId) == "string" ? lessonId : lessonId.lessonId;
        const index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == 'UNSET' && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
        if (index == -1) recovery.recoveries.push({ originalLesson: { dailyLessonId, lessonId } });
    }

    private removeUnsetRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lessonId: ID | StudentLesson): RecoveryInfo[] {
        lessonId = typeof (lessonId) == "string" ? lessonId : lessonId.lessonId;
        const index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == 'UNSET' && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
        if (index != -1) return recovery.recoveries.splice(index, 1);
        return [];
    }

    private addPendingRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lessonId: ID | StudentLesson) {
        lessonId = typeof (lessonId) == "string" ? lessonId : lessonId.lessonId;
        const index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == 'PENDING' && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
        if (index == -1) recovery.recoveries.push({ originalLesson: { dailyLessonId, lessonId } });
    }

    private removePendingRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lessonId: ID | StudentLesson): RecoveryInfo[] {
        lessonId = typeof (lessonId) == "string" ? lessonId : lessonId.lessonId;
        const index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == 'PENDING' && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
        if (index != -1) return recovery.recoveries.splice(index, 1);
        return [];
    }

    private addDoneRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lessonId: ID | StudentLesson) {
        lessonId = typeof (lessonId) == "string" ? lessonId : lessonId.lessonId;
        const index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == 'DONE' && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
        if (index == -1) recovery.recoveries.push({ originalLesson: { dailyLessonId, lessonId } });
    }

    private removeDoneRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lessonId: ID | StudentLesson): RecoveryInfo[] {
        lessonId = typeof (lessonId) == "string" ? lessonId : lessonId.lessonId;
        const index = recovery.recoveries.findIndex(l => this.getRecoveryType(l) == 'DONE' && l.originalLesson.dailyLessonId == dailyLessonId && l.originalLesson.lessonId == lessonId);
        if (index != -1) return recovery.recoveries.splice(index, 1);
        return [];
    }

    async updateRecovery(action: LessonStatusAction, dailyLessonInfo: DailyLessonOrIDs, ...lessons: StudentLesson[]) {
        const schoolId = dailyLessonInfo.schoolId;
        const dailyLessonId = "id" in dailyLessonInfo ? dailyLessonInfo.id : dailyLessonInfo.dailyLessonId;
        const O: DailyLesson = "id" in dailyLessonInfo ? dailyLessonInfo : (await DailyLessonRepository.instance.get(dailyLessonId))!;

        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);
        for await (const lesson of lessons) {
            if (action == LessonStatusAction.SET_PRESENT) {
                if (!lesson.recovery) {
                    this.removeUnsetRecovery(recovery, dailyLessonId, lesson);
                } else {
                    this.removePendingRecovery(recovery, dailyLessonId, lesson);
                    this.addDoneRecovery(recovery, dailyLessonId, lesson);
                }
            }
            else if (action == LessonStatusAction.SET_ABSENT) {
                if (!lesson.recovery) {
                    this.addUnsetRecovery(recovery, dailyLessonId, lesson);
                } else {
                    console.warn("Trying to set absent a recovery lesson. A recovery lesson can be only CANCELLED!");
                }
            }
            else if (action == LessonStatusAction.CANCEL) {
                if (!lesson.recovery) {
                    this.removeUnsetRecovery(recovery, dailyLessonId, lesson);
                } else {
                    const R: DailyLesson = (await DailyLessonRepository.instance.get(lesson.recovery.lessonRef.dailyLessonId))!;
                    this.removePendingRecovery(recovery, dailyLessonId, lesson);
                    this.addUnsetRecovery(recovery, dailyLessonId, lesson);
                    await DailyLessonService.instance.removeRecoveryRef(O, lesson);
                    await DailyLessonService.instance.removeRecoveryRef(R, lesson);
                }
            } else if (action == LessonStatusAction.RESET) {
                if (!lesson.recovery) {
                    this.removeUnsetRecovery(recovery, dailyLessonId, lesson);
                } else {
                    const removed = this.removeDoneRecovery(recovery, dailyLessonId, lesson);
                    // if lesson is in done status remove from done and add to pending state
                    if (removed.length == 1) {
                        this.addPendingRecovery(recovery, dailyLessonId, lesson);
                    }
                    // otherwise, if the lesson was cancelled restore recoveryRef in the originalDailyLesson
                    else {
                        const R: DailyLesson = (await DailyLessonRepository.instance.get(lesson.recovery.lessonRef.dailyLessonId))!;
                        this.addPendingRecovery(recovery, dailyLessonId, lesson);

                        const rRef: RecoveryLessonInfo = {}
                        const oRef: RecoveryLessonInfo = {}
                        await DailyLessonService.instance.addRecoveryRef(O, lesson, rRef);
                        await DailyLessonService.instance.addRecoveryRef(R, oRef);
                    }
                }
            }
        }
        SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
    }
}