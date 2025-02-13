import { SchoolRepository } from "@/models/repositories/school-repository";
import { describe, it } from "vitest";

describe("DailyLessonService2.updateLessonsStatus", () => {
    it("From NONE to PRESENT", async () => {
        const dl = await SchoolRepository.instance.get("90iUvnbTwH8SrylaSRM4");
        console.log(dl);
    });
});