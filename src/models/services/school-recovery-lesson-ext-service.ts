import { RecoveryStatus, type SchoolRecoveryLesson } from "../model";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import type { StudentLessonWithRecovery } from "./school-recovery-lesson-service2";
import { StudentService } from "./student-service";

export interface SchoolRecoveryLessonMap {
    recoveryMap: Map<RecoveryStatus, StudentLessonWithRecovery[]>;
    schoolId: string;
}

export class SchoolRecoveryLessonExtService {

    private static _instance: SchoolRecoveryLessonExtService | null = null;

    public static get instance(): SchoolRecoveryLessonExtService {
        if (!this._instance) this._instance = new SchoolRecoveryLessonExtService();
        return this._instance;
    }

    public async computeDailyLessons(recoveries: SchoolRecoveryLesson): Promise<SchoolRecoveryLessonMap> {
        // Collect all unique daily lesson IDs from recoveries
        const dailyLessonIds = Array.from(new Set(recoveries.recoveries.flatMap(r => [r.originalLesson.dailyLessonId, r.recoveryLesson?.dailyLessonId]).filter(Boolean)));

        // Retrieve all required daily lessons and students
        const dailyLessons = await Promise.all(dailyLessonIds.map(id => DailyLessonRepository.instance.get(id!)));
        const validDailyLessons = dailyLessons.filter(Boolean);
        const students = await StudentService.instance.getStudentsOfSchool(recoveries.schoolId);

        // Initialize recovery map
        const recoveryMap = new Map<RecoveryStatus, StudentLessonWithRecovery[]>([
            [RecoveryStatus.UNSET, []],
            [RecoveryStatus.PENDING, []],
            [RecoveryStatus.DONE, []],
        ]);

        // Process each recovery
        recoveries.recoveries.forEach(recovery => {
            const { originalLesson, recoveryLesson, status } = recovery;

            const originalDailyLesson = validDailyLessons.find(d => d!.id === originalLesson.dailyLessonId);
            const recoveryDailyLesson = recoveryLesson ? validDailyLessons.find(d => d!.id === recoveryLesson.dailyLessonId) : undefined;

            if (!originalDailyLesson) {
                console.warn("Unable to load original daily lesson of a recovery...");
                return;
            }

            const recoveryReference = { originalDailyLesson, recoveryDailyLesson };

            originalDailyLesson.lessons.forEach(lesson => {
                if (lesson.lessonId !== originalLesson.lessonId) return;

                const student = students.find(st => st.id === lesson.studentId);
                if (!student) return;

                recoveryMap.get(status)?.push({ lesson, student, recoveryReference });
            });
        });

        return { recoveryMap, schoolId: recoveries.schoolId };
    }
}