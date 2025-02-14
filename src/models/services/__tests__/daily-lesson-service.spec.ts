import { LessonStatus, type DailyLesson } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { describe, expect, it } from "vitest";
import { DailyLessonService2 } from "../daily-lesson-service2";

describe("DailyLessonService2.updateLessonsStatus", () => {
    it("should update lesson status from NONE to PRESENT", async () => {
        const dailyLessonId = "khrl1g87j12Ck9WiQx4V";
        const lessonId = "168d29be-16d6-40e1-a912-43b5ed6b29c4";

        // Fetch the daily lesson from Firestore
        const dailyLesson = await DailyLessonRepository.instance.get(dailyLessonId);
        expect(dailyLesson).toBeDefined();

        const lesson = dailyLesson?.lessons.find(l => l.lessonId === lessonId);
        expect(lesson).toBeDefined();
        expect(lesson?.status).toBe(LessonStatus.NONE);

        // Update lesson status
        await DailyLessonService2.instance.updateLessonsStatus(LessonStatus.PRESENT, dailyLesson!, [lesson!]);

        // Fetch updated daily lesson
        const updatedDailyLesson = await DailyLessonRepository.instance.get(dailyLessonId);
        const updatedLesson = updatedDailyLesson?.lessons.find(l => l.lessonId === lessonId);
        expect(updatedLesson?.status).toBe(LessonStatus.PRESENT);
    });
});
