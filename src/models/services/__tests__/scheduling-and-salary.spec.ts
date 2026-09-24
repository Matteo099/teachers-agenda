import { Timestamp } from "firebase/firestore";
import { describe, expect, it, vi } from "vitest";
import { DayOfWeek, LessonStatus, SalaryStrategy, TrialLessonPaymentStrategy, type DailyLesson, type School, type Student, type WeeklyLesson } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { DailyLessonService } from "../daily-lesson-service";
import { SalaryService } from "../salary-service";
import { StudentLessonService } from "../student-lesson-service";
import { StudentService } from "../student-service";
import { WeeklyLessonService } from "../weely-lesson-service";

const timestamp = Timestamp.fromMillis(0);

describe("StudentService.getLevelByDate", () => {
    it("uses the level active on the requested date", () => {
        const student: Student = {
            id: "student", schoolId: "school", name: "Ada", surname: "Lovelace", level: "advanced",
            minutesLessonDuration: 60, createdAt: timestamp, updatedAt: timestamp,
            levelHistory: [
                { level: "beginner", from: "20240101", to: "20240630" },
                { level: "intermediate", from: "20240701", to: "20241231" },
            ],
        };

        expect(StudentService.instance.getLevelByDate(student, "20240101")).toBe("beginner");
        expect(StudentService.instance.getLevelByDate(student, "20240630")).toBe("beginner");
        expect(StudentService.instance.getLevelByDate(student, "20241001")).toBe("intermediate");
        expect(StudentService.instance.getLevelByDate(student, "20250101")).toBe("advanced");
    });
});

describe("WeeklyLessonService.isValid", () => {
    const weeklyLesson: WeeklyLesson = {
        id: "weekly", schoolId: "school", dayOfWeek: DayOfWeek.MONDAY,
        from: "20240101", to: "20240108", exclude: [], schedule: [], createdAt: timestamp, updatedAt: timestamp,
    };

    it("includes the configured start and end dates", () => {
        expect(WeeklyLessonService.instance.isValid(weeklyLesson, "20240101")).toBe(true);
        expect(WeeklyLessonService.instance.isValid(weeklyLesson, "20240108")).toBe(true);
    });

    it("excludes explicit exceptions", () => {
        weeklyLesson.exclude = ["20240108"];
        expect(WeeklyLessonService.instance.isValid(weeklyLesson, "20240108")).toBe(false);
    });
});

describe("DailyLessonService.computeSalaryOfDailyLesson", () => {
    it("waits for every lesson price before persisting the total", async () => {
        const lesson = {
            lessonId: "lesson", studentId: "student", startTime: 0, endTime: 3600, status: LessonStatus.PRESENT,
            createdAt: timestamp, updatedAt: timestamp,
        };
        const dailyLesson: DailyLesson = {
            id: "daily", schoolId: "school", date: "20240101", lessons: [lesson], salary: 0,
        };
        const school: School = {
            id: "school", name: "School", managed: false, levelRanges: [], salaryStrategy: SalaryStrategy.ONLY_PRESENT,
            trialLessonPaymentStrategy: TrialLessonPaymentStrategy.NOTHING, createdAt: timestamp, updatedAt: timestamp,
        };
        const student: Student = {
            id: "student", schoolId: "school", name: "Ada", surname: "Lovelace", level: "beginner",
            minutesLessonDuration: 60, createdAt: timestamp, updatedAt: timestamp,
        };

        const getDailyLesson = vi.spyOn(DailyLessonRepository.instance, "get").mockResolvedValue(dailyLesson);
        const getStudentLessons = vi.spyOn(StudentLessonService.instance, "getStudentLesson").mockResolvedValue([{ lesson, student }]);
        const getLessonSalary = vi.spyOn(SalaryService.instance, "getSalaryOfStudentLesson").mockResolvedValue(25);
        const saveDailyLesson = vi.spyOn(DailyLessonRepository.instance, "save").mockResolvedValue("daily");

        await expect(DailyLessonService.instance.computeSalaryOfDailyLesson(school, "daily")).resolves.toMatchObject({ salary: 25 });
        expect(saveDailyLesson).toHaveBeenCalledWith(expect.objectContaining({ salary: 25 }), "daily");

        getDailyLesson.mockRestore();
        getStudentLessons.mockRestore();
        getLessonSalary.mockRestore();
        saveDailyLesson.mockRestore();
    });
});

describe("SalaryService.getSalaryOfStudentLesson", () => {
    const school: School = {
        id: "school", name: "School", managed: false, levelRanges: [{ levels: ["base"], price: 30 }],
        salaryStrategy: SalaryStrategy.ONLY_PRESENT, trialLessonPaymentStrategy: TrialLessonPaymentStrategy.HALF,
        createdAt: timestamp, updatedAt: timestamp,
    };
    const student: Student = { id: "student", schoolId: "school", name: "Ada", surname: "Lovelace", level: "base", minutesLessonDuration: 60, createdAt: timestamp, updatedAt: timestamp };

    it("uses hourly rates, student overrides and excludes recovery lessons", async () => {
        const lesson = { lessonId: "lesson", studentId: "student", startTime: 0, endTime: 1800, status: LessonStatus.PRESENT, createdAt: timestamp, updatedAt: timestamp };
        await expect(SalaryService.instance.getSalaryOfStudentLesson(school, lesson, student, "20240101")).resolves.toBe(15);
        await expect(SalaryService.instance.getSalaryOfStudentLesson(school, lesson, { ...student, hourlyRate: 40 }, "20240101")).resolves.toBe(20);
        await expect(SalaryService.instance.getSalaryOfStudentLesson(school, { ...lesson, recovery: { ref: 'original', lessonRef: { dailyLessonId: 'old', lessonId: 'old' } } }, student, "20240101")).resolves.toBe(0);
        await expect(SalaryService.instance.getSalaryOfStudentLesson(
            { ...school, salaryStrategy: SalaryStrategy.ABSENT_AND_PRESENT },
            { ...lesson, status: LessonStatus.ABSENT, recovery: { ref: 'recovery', lessonRef: { dailyLessonId: 'new', lessonId: 'new' } } },
            student, "20240101"
        )).resolves.toBe(15);
    });
});
