import { type DailyLesson, type Lesson, type SchoolRecoveryLesson, type Student, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";
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

    private addUnsetRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lesson: StudentLesson) {
        const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lesson.lessonId);
        if (unsetI == -1) recovery.unsetRecoveries.push({ dailyLessonId, lessonId: lesson.lessonId });
    }

    private removeUnsetRecovery(recovery: SchoolRecoveryLesson, dailyLessonId: ID, lesson: StudentLesson) {
        const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lesson.lessonId);
        if (unsetI != -1) recovery.unsetRecoveries.splice(unsetI, 1);
    }

    async updateRecovery(action: LessonStatusAction, dailyLessonId: ID, schoolId: ID, ...lessons: StudentLesson[]) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);
        for await (const lesson of lessons) {
            const O: RecoveryReference = { originalDailyLesson: { dailyLessonId, lesson.lessonId}} 
            const R: RecoveryReference = { originalDailyLesson: { dailyLessonId, lesson.lessonId}} 
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
                    this.removePendingRecovery(recovery, dailyLessonId, lesson);
                    this.addUnsetRecovery(recovery, dailyLessonId, lesson);
                    await DailyLessonService.instance.removeRecoveryRef(O);
                    await DailyLessonService.instance.removeRecoveryRef(R);
                }
            } else if (action == LessonStatusAction.RESET) {
                if (!lesson.recovery) {
                    this.removeUnsetRecovery(recovery, dailyLessonId, lesson);
                } else {
                    const removed =this.removeDoneRecovery(recovery, dailyLessonId, lesson);
                    // if lesson is in done status remove from done and add to pending state
                    if(removed) {
                        this.addPendingRecovery(recovery, dailyLessonId, lesson);
                    }
                    // otherwise, if the lesson was cancelled restore recoveryRef in the originalDailyLesson
                    else{
                        this.addPendingRecovery(recovery, dailyLessonId, lesson);
                        await DailyLessonService.instance.addRecoveryRef(O, R);
                        await DailyLessonService.instance.addRecoveryRef(R, O);
                    }
                }
            }
        }
        SchoolRecoveryLessonRepository.instance.save(recovery, schoolId);
    }
}