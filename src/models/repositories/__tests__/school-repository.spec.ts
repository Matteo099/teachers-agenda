import { SchoolRepository } from "@/models/repositories/school-repository";
import { describe, expect, it } from "vitest";

describe("SchoolRepository", () => {
    it("retrieves a school by ID", async () => {
        const school = await SchoolRepository.instance.get("90iUvnbTwH8SrylaSRM4");
        expect(school).toBeDefined();
        expect(school?.name).toBe("Fenice");
    });

    it("retrieves all schools", async () => {
        const schools = await SchoolRepository.instance.getAll();
        expect(schools.length).toBeGreaterThanOrEqual(4);
    });

    it("saves a new school and retrieves it", async () => {
        const newSchool = {
            name: "Test School",
            managed: true,
            color: "#123456",
            city: "Test City",
            levelRanges: [{ price: 2, levels: ["test"] }],
            salaryStrategy: 1,
            trialLessonPaymentStrategy: 0,
        };

        const id = await SchoolRepository.instance.save(newSchool);
        expect(id).toBeDefined();

        const savedSchool = await SchoolRepository.instance.get(id);
        expect(savedSchool?.name).toBe("Test School");
    });

    it("updates an existing school", async () => {
        const id = "90iUvnbTwH8SrylaSRM4";
        await SchoolRepository.instance.save({ name: "Updated Name" }, id);

        const updatedSchool = await SchoolRepository.instance.get(id);
        expect(updatedSchool?.name).toBe("Updated Name");
    });

    it("deletes a school", async () => {
        const newSchool = { name: "To Be Deleted", managed: false };
        const id = await SchoolRepository.instance.save(newSchool);
        expect(id).toBeDefined();

        await SchoolRepository.instance.delete(id);
        const deletedSchool = await SchoolRepository.instance.get(id);
        expect(deletedSchool).toBeUndefined();
    });
});
