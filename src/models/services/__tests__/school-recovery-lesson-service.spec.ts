import { LessonStatus, RecoveryStatus, Time, yyyyMMdd, type RecoverySchedule } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "@/models/repositories/recovery-lesson-repository";
import { describe, expect, it } from "vitest";
import { DailyLessonService } from "../daily-lesson-service";
import { SchoolRecoveryLessonExtService } from "../school-recovery-lesson-ext-service";
import { SchoolRecoveryLessonService } from "../school-recovery-lesson-service";

describe("SchoolRecoveryLessonService.schedule", () => {
    const dailyLessonService = DailyLessonService.instance;
    const dailyLessonRepository = DailyLessonRepository.instance;
    const schoolRecoveryService = SchoolRecoveryLessonService.instance;
    const schoolRecoveryServiceExt = SchoolRecoveryLessonExtService.instance;
    const schoolRecoveryLessonRepository = SchoolRecoveryLessonRepository.instance;

    /**
     *  - [x] da programmare -> programmata
     *  - [x] programmata -> da programmare
     */
    it.only("Should schedule lesson UNSET => PENDING", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        let schoolRecovery = (await schoolRecoveryService.getOrCreate(schoolId));
        const extendedRecoveries = await schoolRecoveryServiceExt.computeDailyLessons(schoolRecovery);
        const recoveries = extendedRecoveries.recoveryMap.get(RecoveryStatus.UNSET);
        let originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;

        // sunday 12th february 2025
        const date = new Date(2025, 1, 12);
        const startTime = Time.fromHHMM("12:00")!;

        expect(recoveries).toBeDefined();
        const recovery = recoveries![0]!;
        expect(recovery).toBeDefined();

        const schedule: RecoverySchedule = {
            studentId: recovery.student.id,
            schoolId,
            originalDailyLessonId: recovery.recoveryReference.originalDailyLesson.id,
            originalLessonId: recovery.lesson.lessonId,
            date,
            startTime: startTime.toITime(),
            endTime: startTime.add({ minutes: recovery.student.minutesLessonDuration }).toITime()
        }
        // Schedule recovery
        await schoolRecoveryService.scheduleRecovery(recovery, schedule);


        // Check school recovery
        schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId))!;
        const recoveryAfterSchedule = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1]!.lessonId)
        expect(recoveryAfterSchedule).toBeDefined();
        expect(recoveryAfterSchedule?.status).toBe(RecoveryStatus.PENDING);
        expect(recoveryAfterSchedule?.originalLesson).toBeDefined();

        const recoveryDailyLesson = (await dailyLessonService.getDailyLessonOfSchoolByDate(schoolId, yyyyMMdd.fromDate(date).toIyyyyMMdd()))!;
        expect(recoveryDailyLesson).toBeDefined();
        expect(recoveryAfterSchedule?.recoveryLesson).toBeDefined();
        expect(recoveryAfterSchedule?.recoveryLesson?.dailyLessonId).toBe(recoveryDailyLesson.id);
        expect(recoveryAfterSchedule?.recoveryLesson?.lessonId).toBe(recoveryDailyLesson.lessons[0]!.lessonId);
        expect(recoveryDailyLesson.lessons[0]!.recovery).toBeDefined();
        expect(recoveryDailyLesson.lessons[0]!.recovery?.ref).toBe('original');
        expect(recoveryDailyLesson.lessons[0]!.recovery?.lessonRef.dailyLessonId).toBe(recoveryAfterSchedule?.originalLesson?.dailyLessonId);
        expect(recoveryDailyLesson.lessons[0]!.recovery?.lessonRef.lessonId).toBe(recoveryAfterSchedule?.originalLesson?.lessonId);

        originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(originalDailyLesson).toBeDefined();
        expect(originalDailyLesson.lessons[1]!.recovery).toBeDefined();
        expect(originalDailyLesson.lessons[1]!.recovery?.ref).toBe('recovery');
        expect(originalDailyLesson.lessons[1]!.recovery?.lessonRef.dailyLessonId).toBe(recoveryDailyLesson.id);
        expect(originalDailyLesson.lessons[1]!.recovery?.lessonRef.lessonId).toBe(recoveryDailyLesson.lessons[0]!.lessonId);
    });

    it.only("Should unschedule lesson PENDING => UNSET", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        let schoolRecovery = (await schoolRecoveryService.getOrCreate(schoolId));
        let originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        let extendedRecoveries = await schoolRecoveryServiceExt.computeDailyLessons(schoolRecovery);
        let recoveries = extendedRecoveries.recoveryMap.get(RecoveryStatus.UNSET);
        let recovery = recoveries![0]!;

        // sunday 12th february 2025
        const date = new Date(2025, 1, 12);
        const startTime = Time.fromHHMM("12:00")!;
        const schedule: RecoverySchedule = {
            studentId: recovery.student.id,
            schoolId,
            originalDailyLessonId: dailyLessonId,
            originalLessonId: recovery.lesson.lessonId,
            date,
            startTime: startTime.toITime(),
            endTime: startTime.add({ minutes: recovery.student.minutesLessonDuration }).toITime()
        }
        // Schedule recovery
        await schoolRecoveryService.scheduleRecovery(recovery, schedule);

        // Cancel recovery
        schoolRecovery = (await schoolRecoveryService.getOrCreate(schoolId));
        extendedRecoveries = await schoolRecoveryServiceExt.computeDailyLessons(schoolRecovery);
        recoveries = extendedRecoveries.recoveryMap.get(RecoveryStatus.PENDING);
        recovery = recoveries![0]!;
        const recoveryDailyLessonId = recovery.recoveryReference.recoveryDailyLesson?.id;
        await schoolRecoveryService.cancelRecovery(recovery);


        // Check school recovery
        schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId))!;
        const recoveryAfterCancel = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1]!.lessonId)
        expect(recoveryAfterCancel).toBeDefined();
        expect(recoveryAfterCancel?.status).toBe(RecoveryStatus.UNSET);
        expect(recoveryAfterCancel?.originalLesson).toBeDefined();
        expect(recoveryAfterCancel?.recoveryLesson).not.toBeDefined();

        // Check recovery daily lesson does not exist
        expect((await dailyLessonRepository.get(recoveryDailyLessonId!))).not.toBeDefined();

        // Check original lesson
        originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(originalDailyLesson).toBeDefined();
        expect(originalDailyLesson.lessons[1]!.status).toBe(LessonStatus.ABSENT);
        expect(originalDailyLesson.lessons[1]!.recovery).not.toBeDefined();
    });
});