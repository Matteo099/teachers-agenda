import { SchoolRepository } from "@/models/repositories/school-repository";
import { describe, expect, it } from "vitest";

describe("SchoolRepository", () => {
    let schoolRepository = SchoolRepository.instance;

    it("retrieves a school by ID", async () => {
        const school = await schoolRepository.get("T0RYndQ7RkAjzmL3qjqJ");
        expect(school).toBeDefined();
        expect(school?.name).toBe("Fenice");
        expect(school?.city).toBe("Servigliano");
    });

    it("retrieves all schools", async () => {
        const schools = await schoolRepository.getAll();
        expect(schools.length).toBeGreaterThanOrEqual(2);
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

        const id = await schoolRepository.save(newSchool);
        expect(id).toBeDefined();

        const savedSchool = await schoolRepository.get(id);
        expect(savedSchool?.name).toBe("Test School");
    });

    it("updates an existing school", async () => {
        const id = "T0RYndQ7RkAjzmL3qjqJ";
        await schoolRepository.save({ name: "Updated Name" }, id);

        const updatedSchool = await schoolRepository.get(id);
        expect(updatedSchool?.name).toBe("Updated Name");
    });

    it("deletes a school", async () => {
        const newSchool = { name: "To Be Deleted", managed: false };
        const id = await schoolRepository.save(newSchool);
        expect(id).toBeDefined();

        await schoolRepository.delete(id);
        const deletedSchool = await schoolRepository.get(id);
        expect(deletedSchool).toBeUndefined();
    });
});
