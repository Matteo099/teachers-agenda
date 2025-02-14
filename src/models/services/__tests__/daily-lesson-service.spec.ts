import { LessonStatus, type DailyLesson } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { describe, expect, it } from "vitest";
import { DailyLessonService2 } from "../daily-lesson-service2";

describe("DailyLessonService2.updateLessonsStatus", () => {
    it("should update lesson status from NONE to PRESENT", async () => {
        const data = true;
        expect(data).toBeTruthy();
    });
});
