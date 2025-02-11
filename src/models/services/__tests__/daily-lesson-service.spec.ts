import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { describe, it } from "vitest";

describe("DailyLessonService2.updateLessonsStatus", () => {
    it("From NONE to PRESENT", async () => {
        const dl = await DailyLessonRepository.instance.get("id");
        console.log(dl);
        // DailyLessonService2.instance.updateLessonsStatus();
    });
});