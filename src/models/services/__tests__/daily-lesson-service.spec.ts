import { LessonStatus, RecoveryStatus, Time, type DailyLesson, type RecoverySchedule } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { describe, expect, it } from "vitest";
import { DailyLessonService2 } from "../daily-lesson-service2";
import { StudentRepository } from "@/models/repositories/student-repository";
import { SchoolRecoveryLessonRepository } from "@/models/repositories/recovery-lesson-repository";
import { SchoolRecoveryLessonService2 } from "../school-recovery-lesson-service2";
import { SchoolRecoveryLessonExtService } from "../school-recovery-lesson-ext-service";

describe("DailyLessonService2.updateLessonsStatus", () => {
    const dailyLessonService = DailyLessonService2.instance;
    const dailyLessonRepository = DailyLessonRepository.instance;

    it("should update lesson statuses correctly", async () => {
        // Retrieve an existing daily lesson
        const dailyLesson = await dailyLessonRepository.get("LUMiJz3vcjJ9fSpYUSTc");
        expect(dailyLesson).not.toBeNull();

        // Define lessons to update
        const lessonsToUpdate = dailyLesson?.lessons.map(lesson => ({
            ...lesson,
            status: LessonStatus.PRESENT // Updating all to PRESENT
        }));

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson!, lessonsToUpdate!);

        // Fetch updated lesson
        const updatedDailyLesson = await dailyLessonRepository.get("LUMiJz3vcjJ9fSpYUSTc");
        expect(updatedDailyLesson).not.toBeNull();

        // Ensure all lessons are updated
        updatedDailyLesson?.lessons.forEach(lesson => {
            expect(lesson.status).toBe(LessonStatus.PRESENT);
        });
    });
});

describe("DailyLessonService2.updateLessonsStatus - Original Lesson", () => {
    const dailyLessonService = DailyLessonService2.instance;
    const dailyLessonRepository = DailyLessonRepository.instance;
    const studentRepository = StudentRepository.instance;
    const schoolRecoveryLessonRepository = SchoolRecoveryLessonRepository.instance;

    /**
     *  - [x] none -> presente
     *  - [x] presente -> reset
     *  - [x] presente -> assenza recuperabile
     *  - [x] presente -> assenza ingiustificata
     */
    it("Should update lesson from NONE to PRESENT", async () => {
        const dailyLessonId = "ZBNQtG8bOjB6bnWZxVWv";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];
        const student = (await studentRepository.get(lessonToUpdate.studentId))!;

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        for (let index = 1; index < dailyLesson.lessons.length; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }

        // Check trial is not alterated
        // const studentAfter = (await studentRepository.get(lessonToUpdate.studentId))!;
        // expect(student).toStrictEqual(studentAfter);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should update lesson from PRESENT to NONE (RESET)", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];
        const student = (await studentRepository.get(lessonToUpdate.studentId))!;

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.NONE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.NONE);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.ABSENT);
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check trial is not alterated
        // const studentAfter = (await studentRepository.get(lessonToUpdate.studentId))!;
        // expect(student).toStrictEqual(studentAfter);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should update lesson from PRESENT to RECOVERABLE_ABSENCE", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.ABSENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.ABSENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.ABSENT);
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check school recovery
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.UNSET);
    });

    it("Should update lesson from PRESENT to UNJUSTIFIED_ABSENCE", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.UNJUSTIFIED_ABSENCE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.ABSENT);
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check school recovery
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });


    /**
     *  - [x] none -> assenza recuperabile
     *  - [x] assenza recuperabile (non programmata) -> reset
     *  - [x] assenza recuperabile (non programmata) -> presente
     *  - [x] none -> assenza ingiustificata
     *  - [x] assenza ingiustificata -> reset
     *  - [x] assenza ingiustificata -> presente
     */
    it("Should update lesson from NONE to RECOVERABLE_ABSENCE", async () => {
        const dailyLessonId = "ZBNQtG8bOjB6bnWZxVWv";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];
        const student = (await studentRepository.get(lessonToUpdate.studentId))!;

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.ABSENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.ABSENT);
        for (let index = 1; index < dailyLesson.lessons.length; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }

        // Check school recovery
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).toBeDefined();
        expect(recovery?.status).toBe(RecoveryStatus.UNSET);
    });

    it("Should update lesson from RECOVERABLE_ABSENCE to NONE (RESET)", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[1];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.NONE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.NONE);
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should update lesson from RECOVERABLE_ABSENCE to PRESENT", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[1];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should update lesson from NONE to UNJUSTIFIED_ABSENCE", async () => {
        const dailyLessonId = "ZBNQtG8bOjB6bnWZxVWv";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[0];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.UNJUSTIFIED_ABSENCE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);
        for (let index = 1; index < dailyLesson.lessons.length; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }

        // Check school recovery
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should update lesson from UNJUSTIFIED_ABSENCE to NONE (RESET)", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[2];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.NONE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.ABSENT);
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.NONE);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should update lesson from UNJUSTIFIED_ABSENCE to PRESENT", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[2];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.ABSENT);
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.PRESENT);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });


    /**
     *  - [x] none -> prova
     *  - [x] prova -> reset
     */
    it("Should update lesson from NONE to TRIAL", async () => {
        const dailyLessonId = "ZBNQtG8bOjB6bnWZxVWv";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToUpdate = dailyLesson.lessons[2];

        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.TRIAL, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons[2].status).toBe(LessonStatus.TRIAL);
        for (let index = 1; index < dailyLesson.lessons.length - 1; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }

        // Check trial is not alterated
        const student = (await studentRepository.get(lessonToUpdate.studentId))!;
        expect(student.trial).toBeDefined();
        expect(student.trial?.done).toBeTruthy();
        expect(student.trial?.dailyLessonId).toBe(dailyLessonId);
        expect(student.trial?.dailyLessonDate).toBe(dailyLesson.date);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should update lesson from TRIAL to NONE", async () => {
        const dailyLessonId = "ZBNQtG8bOjB6bnWZxVWv";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        let dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        let lessonToUpdate = dailyLesson.lessons[2];
        await dailyLessonService.updateLessonsStatus(LessonStatus.TRIAL, dailyLesson, [lessonToUpdate]);

        dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        lessonToUpdate = dailyLesson.lessons[2];
        // Update lesson statuses
        await dailyLessonService.updateLessonsStatus(LessonStatus.NONE, dailyLesson, [lessonToUpdate]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        for (let index = 0; index < dailyLesson.lessons.length; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }

        // Check trial is not alterated
        const student = (await studentRepository.get(lessonToUpdate.studentId))!;
        expect(student.trial).not.toBeDefined();

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });
});


describe("DailyLessonService2.deleteLessons - Original Lesson", () => {
    const dailyLessonService = DailyLessonService2.instance;
    const dailyLessonRepository = DailyLessonRepository.instance;
    const studentRepository = StudentRepository.instance;
    const schoolRecoveryLessonRepository = SchoolRecoveryLessonRepository.instance;
    const schoolRecoveryService = SchoolRecoveryLessonService2.instance;
    const schoolRecoveryServiceExt = SchoolRecoveryLessonExtService.instance;

    /**
     *  - [x] none -> elimina
     *  - [x] presente -> elimina
     *  - [x] prova -> elimina
     *  - [x] assenza ingiustificata -> elimina
     *  - [x] assenza recuperabile (non programmata) -> elimina
     *  - [] assenza recuperabile (programmata ma non fatta) -> elimina
     *  - [] assenza recuperabile (programmata e fatta) -> elimina
     */
    it("Should delete lesson NONE => DELETED", async () => {
        const dailyLessonId = "ZBNQtG8bOjB6bnWZxVWv";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToDelete = dailyLesson.lessons[0];

        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, true, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(2);
        for (let index = 0; index < dailyLesson.lessons.length; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == updatedDailyLesson.lessons[0].lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should delete lesson PRESENT => DELETED", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToDelete = dailyLesson.lessons[0];

        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, true, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson.lessons.length).toBe(2);
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.ABSENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == lessonToDelete.lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should delete lesson TRIAL => DELETED", async () => {
        const dailyLessonId = "ZBNQtG8bOjB6bnWZxVWv";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        let dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        let lessonToDelete = dailyLesson.lessons[2];
        await dailyLessonService.updateLessonsStatus(LessonStatus.TRIAL, dailyLesson, [lessonToDelete]);

        dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        lessonToDelete = dailyLesson.lessons[2];
        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, true, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson.lessons.length).toBe(2);
        for (let index = 0; index < dailyLesson.lessons.length; index++) {
            expect(updatedDailyLesson.lessons[index].status).toBe(LessonStatus.NONE);
        }

        // Check trial is not alterated
        const student = (await studentRepository.get(lessonToDelete.studentId))!;
        expect(student.trial).not.toBeDefined();

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == lessonToDelete.lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should delete lesson UNJUSTIFIED_ABSENCE => DELETED", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToDelete = dailyLesson.lessons[2];

        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, true, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(2);
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.ABSENT);

        // Check school recovery is not alterated
        const schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        const recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == lessonToDelete.lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should delete lesson UNSET RECOVERABLE_ABSENCE => DELETED", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        const dailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        const lessonToDelete = dailyLesson.lessons[1];

        // Check school recovery is not alterated
        let schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        let recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == lessonToDelete.lessonId)
        expect(recovery).toBeDefined();

        // Delete lesson
        await dailyLessonService.deleteLessons(dailyLesson, true, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(2);
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check school recovery
        schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId));
        recovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == lessonToDelete.lessonId)
        expect(recovery).not.toBeDefined();
    });

    it("Should delete lesson PENDING RECOVERABLE_ABSENCE => DELETED", async () => {
        const dailyLessonId = "LUMiJz3vcjJ9fSpYUSTc";
        const schoolId = "T0RYndQ7RkAjzmL3qjqJ";
        let schoolRecovery = (await schoolRecoveryService.getOrCreate(schoolId));
        let originalDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        let extendedRecoveries = await schoolRecoveryServiceExt.computeDailyLessons(schoolRecovery);
        let recoveries = extendedRecoveries.recoveryMap.get(RecoveryStatus.UNSET);
        let recovery = recoveries![0];
        let lessonToDelete = originalDailyLesson.lessons[1];

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

        // Delete lesson
        await dailyLessonService.deleteLessons(originalDailyLesson, true, [lessonToDelete]);

        // Fetch updated lesson
        const updatedDailyLesson = (await dailyLessonRepository.get(dailyLessonId))!;
        expect(updatedDailyLesson).not.toBeNull();
        expect(updatedDailyLesson.lessons.length).toBe(2);
        expect(updatedDailyLesson.lessons[0].status).toBe(LessonStatus.PRESENT);
        expect(updatedDailyLesson.lessons[1].status).toBe(LessonStatus.UNJUSTIFIED_ABSENCE);

        // Check school recovery
        schoolRecovery = (await schoolRecoveryLessonRepository.get(schoolId))!;
        const screcovery = schoolRecovery?.recoveries.find(r => r.originalLesson.dailyLessonId == dailyLessonId && r.originalLesson.lessonId == lessonToDelete.lessonId)
        expect(screcovery).not.toBeDefined();
    });

    it("Should delete lesson DONE RECOVERABLE_ABSENCE => DELETED", async () => {
        // TODO
    });
})