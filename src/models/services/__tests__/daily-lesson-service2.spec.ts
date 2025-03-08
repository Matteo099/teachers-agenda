import { LessonStatus, RecoveryStatus, Time, type EventTime, type RecoverySchedule } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "@/models/repositories/recovery-lesson-repository";
import { describe, expect, it } from "vitest";
import { DailyLessonService2 } from "../daily-lesson-service2";
import { SchoolRecoveryLessonExtService } from "../school-recovery-lesson-ext-service";
import { SchoolRecoveryLessonService2 } from "../school-recovery-lesson-service2";

describe("DailyLessonService2.updateLessonsStatus - Recovery Lesson", () => {
    const dailyLessonService = DailyLessonService2.instance;
    const dailyLessonRepository = DailyLessonRepository.instance;
    const schoolRecoveryLessonRepository = SchoolRecoveryLessonRepository.instance;
    const schoolRecoveryService = SchoolRecoveryLessonService2.instance;
    const schoolRecoveryServiceExt = SchoolRecoveryLessonExtService.instance;
    const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc"
    const schoolId = "T0RYndQ7RkAjzmL3qjqJ"

    const createRecoveryLesson = async () => {
        const schoolRecovery = (await schoolRecoveryService.getOrCreate(schoolId));
        const extendedRecoveries = await schoolRecoveryServiceExt.computeDailyLessons(schoolRecovery);
        const recoveries = extendedRecoveries.recoveryMap.get(RecoveryStatus.UNSET);
        const recovery = recoveries![0];

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
        // Schedule recovery and return lesson ref(contains references to recovery lesson)
        return await schoolRecoveryService.scheduleRecovery(recovery, schedule);
    }

    /**
     *  - [x] none -> presente
     *  - [x] presente -> reset
     *  - [x] presente -> assenza ingiustificata
     */
    it("Should update recovery lesson from NONE to PRESENT", async () => {
        const recoveryRef = await createRecoveryLesson();
        const dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        // Check school recovery is DONE
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.DONE);
    });

    it("Should update recovery lesson from PRESENT to NONE (RESET)", async () => {
        const recoveryRef = await createRecoveryLesson();
        let dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        let lessonToUpdate = dailyLesson.lessons[0];
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToUpdate]);
        dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.NONE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.NONE);
        // Check school recovery is PENDING
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.PENDING);
    });

    it("Should update recovery lesson from PRESENT to ABSENT", async () => {
        const recoveryRef = await createRecoveryLesson();
        let dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        let lessonToUpdate = dailyLesson.lessons[0];
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToUpdate]);
        dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.ABSENT, dailyLesson, [lessonToUpdate]);


        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.ABSENT);
        // Check school recovery is PENDING
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.DONE);
    });


    // /**
    //  *  - [x] none -> assenza ingiustificata
    //  *  - [x] assenza ingiustificata -> reset
    //  *  - [x] assenza ingiustificata -> presente
    //  */
    it("Should update recovery lesson from NONE to ABSENT", async () => {
        const recoveryRef = await createRecoveryLesson();
        const dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.ABSENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.ABSENT);
        // Check school recovery is DONE
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.DONE);
    });

    it("Should update lesson from ABSENT to NONE (RESET)", async () => {
        const recoveryRef = await createRecoveryLesson();
        let dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        let lessonToUpdate = dailyLesson.lessons[0];
        await dailyLessonService.updateLessonsStatus(LessonStatus.ABSENT, dailyLesson, [lessonToUpdate]);
        dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.NONE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.NONE);
        // Check school recovery is DONE
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.PENDING);
    });

    it("Should update lesson from ABSENT to PRESENT", async () => {
        const recoveryRef = await createRecoveryLesson();
        let dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        let lessonToUpdate = dailyLesson.lessons[0];
        await dailyLessonService.updateLessonsStatus(LessonStatus.ABSENT, dailyLesson, [lessonToUpdate]);
        dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        // Check school recovery is DONE
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.DONE);
    });
});

describe("DailyLessonService2.deleteLessons - Recovery Lesson", () => {
    const dailyLessonService = DailyLessonService2.instance;
    const dailyLessonRepository = DailyLessonRepository.instance;
    const schoolRecoveryLessonRepository = SchoolRecoveryLessonRepository.instance;
    const schoolRecoveryService = SchoolRecoveryLessonService2.instance;
    const schoolRecoveryServiceExt = SchoolRecoveryLessonExtService.instance;
    const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc"
    const schoolId = "T0RYndQ7RkAjzmL3qjqJ"

    const createRecoveryLesson = async () => {
        const schoolRecovery = (await schoolRecoveryService.getOrCreate(schoolId));
        const extendedRecoveries = await schoolRecoveryServiceExt.computeDailyLessons(schoolRecovery);
        const recoveries = extendedRecoveries.recoveryMap.get(RecoveryStatus.UNSET);
        const recovery = recoveries![0];

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
        // Schedule recovery and return lesson ref(contains references to recovery lesson)
        return await schoolRecoveryService.scheduleRecovery(recovery, schedule);
    }

    /**
     *  - [x] none -> elimina
     *  - [x] presente -> elimina
     *  - [x] assenza -> elimina
     */
    it("Should delete recovery lesson NONE => DELETED", async () => {
        const recoveryRef = await createRecoveryLesson();
        const dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        const lessonToDelete = dailyLesson.lessons[0];

        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, false, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(0);
        // Check school recovery is not alterated
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.UNSET);
    });

    it("Should delete recovery lesson PRESENT => DELETED", async () => {
        const recoveryRef = await createRecoveryLesson();
        let dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        let lessonToDelete = dailyLesson.lessons[0];
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToDelete]);
        dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        lessonToDelete = dailyLesson.lessons[0];

        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, false, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(0);
        // Check school recovery is not alterated
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.UNSET);
    });

    it("Should delete recovery lesson ABSENT => DELETED", async () => {
        const recoveryRef = await createRecoveryLesson();
        let dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        let lessonToDelete = dailyLesson.lessons[0];
        await dailyLessonService.updateLessonsStatus(LessonStatus.UNJUSTIFIED_ABSENCE, dailyLesson, [lessonToDelete]);
        dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        lessonToDelete = dailyLesson.lessons[0];

        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, false, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(0);
        // Check school recovery is not alterated
        const originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == originalDailyLesson.lessons[1].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.UNSET);
    });
})

describe("DailyLessonService2.updateLessonTime - Recovery Lesson", () => {
    const dailyLessonService = DailyLessonService2.instance;
    const dailyLessonRepository = DailyLessonRepository.instance;
    const schoolRecoveryService = SchoolRecoveryLessonService2.instance;
    const schoolRecoveryServiceExt = SchoolRecoveryLessonExtService.instance;
    const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc"
    const schoolId = "T0RYndQ7RkAjzmL3qjqJ"

    const createRecoveryLesson = async () => {
        const schoolRecovery = (await schoolRecoveryService.getOrCreate(schoolId));
        const extendedRecoveries = await schoolRecoveryServiceExt.computeDailyLessons(schoolRecovery);
        const recoveries = extendedRecoveries.recoveryMap.get(RecoveryStatus.UNSET);
        const recovery = recoveries![0];

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
        // Schedule recovery and return lesson ref(contains references to recovery lesson)
        return await schoolRecoveryService.scheduleRecovery(recovery, schedule);
    }

    /**
     *  - [x] update lesson time
     */
    it("Should update recovery lesson time to 04:00 - 05:00", async () => {
        const recoveryRef = await createRecoveryLesson();
        const dailyLesson = (await dailyLessonRepository.get(recoveryRef.dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];
        const newDataEvent: EventTime = {
            startTime: "04:00",
            endTime: "05:00",
        }

        // Update lesson time
        await dailyLessonService.updateLessonTime(dailyLesson, newDataEvent, lessonToUpdate);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(3);
        for (let index = 0; index < dailyLesson.lessons.length; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }
        expect(updatedDailyLesson.lessons[0].startTime).toBeDefined();
        expect(updatedDailyLesson.lessons[0].endTime).toBeDefined();
        expect(updatedDailyLesson.lessons[0].startTime).toBe(Time.fromHHMM(newDataEvent.startTime)?.toITime());
        expect(updatedDailyLesson.lessons[0].endTime).toBe(Time.fromHHMM(newDataEvent.endTime)?.toITime());
    });
});