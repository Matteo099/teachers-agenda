import { Timestamp } from "firebase/firestore";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DayOfWeek, LessonStatus, SalaryStrategy, TrialLessonPaymentStrategy, type DailyLesson, type School, type Student, type WeeklyLesson } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { DailyLessonService } from "../daily-lesson-service";
import { SalaryService } from "../salary-service";
import { StudentLessonService } from "../student-lesson-service";
import { StudentService } from "../student-service";
import { WeeklyLessonService } from "../weely-lesson-service";
import { MonthlySalaryService } from "../monthly-salary-service";

const timestamp = Timestamp.fromMillis(0);

afterEach(() => vi.restoreAllMocks());

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

    it("uses student level tariff for completed recoveries", async () => {
        const lesson = { lessonId: "recovery", studentId: "student", startTime: 0, endTime: 1800, status: LessonStatus.PRESENT,
            recovery: { ref: 'original' as const, lessonRef: { dailyLessonId: 'old', lessonId: 'old' } }, createdAt: timestamp, updatedAt: timestamp };
        await expect(SalaryService.instance.getSalaryOfRecoveryLesson(school, lesson, student, "20240101")).resolves.toBe(15);
        await expect(SalaryService.instance.getSalaryOfRecoveryLesson({ ...school, levelRanges: [{ levels: ["base"], price: 40 }] }, lesson, student, "20240101")).resolves.toBe(20);
    });

    it("creates immutable compensation snapshots for regular, trial, absence and recovery lessons", async () => {
        const baseLesson = { lessonId: "lesson", studentId: "student", startTime: 0, endTime: 1800,
            status: LessonStatus.PRESENT, createdAt: timestamp, updatedAt: timestamp };

        await expect(SalaryService.instance.getLessonCompensation(school, baseLesson, student, "20240101"))
            .resolves.toMatchObject({ level: "base", hourlyRate: 30, minutes: 30, amount: 15, type: "REGULAR" });
        await expect(SalaryService.instance.getLessonCompensation(school, { ...baseLesson, status: LessonStatus.TRIAL }, student, "20240101"))
            .resolves.toMatchObject({ amount: 7.5, type: "TRIAL" });
        await expect(SalaryService.instance.getLessonCompensation(
            { ...school, salaryStrategy: SalaryStrategy.ABSENT_AND_PRESENT },
            { ...baseLesson, status: LessonStatus.ABSENT }, student, "20240101"))
            .resolves.toMatchObject({ amount: 15, type: "ABSENCE" });
        await expect(SalaryService.instance.getLessonCompensation(school, {
            ...baseLesson, recovery: { ref: "original", lessonRef: { dailyLessonId: "old", lessonId: "old" } }
        }, student, "20240101")).resolves.toMatchObject({ amount: 15, type: "RECOVERY" });
    });

    it("does not pay absences in pay-per-performance schools", async () => {
        const lesson = { lessonId: "lesson", studentId: "student", startTime: 0, endTime: 3600,
            status: LessonStatus.ABSENT, createdAt: timestamp, updatedAt: timestamp };
        await expect(SalaryService.instance.getLessonCompensation(school, lesson, student, "20240101")).resolves.toBeUndefined();
    });
});

describe("MonthlySalaryService", () => {
    const school: School = {
        id: "school", name: "School", managed: false, levelRanges: [{ levels: ["base"], price: 30 }],
        salaryStrategy: SalaryStrategy.ONLY_PRESENT, trialLessonPaymentStrategy: TrialLessonPaymentStrategy.HALF,
        dailyExpenseReimbursement: 10, createdAt: timestamp, updatedAt: timestamp,
    };
    const student: Student = { id: "student", schoolId: "school", name: "Ada", surname: "Lovelace", level: "base",
        minutesLessonDuration: 60, createdAt: timestamp, updatedAt: timestamp };

    it("uses frozen snapshots and separates regular lessons from recoveries", async () => {
        const regular = { lessonId: "regular", studentId: "student", startTime: 0, endTime: 3600,
            status: LessonStatus.PRESENT, compensation: { level: "base", hourlyRate: 20, minutes: 60, amount: 20, type: "REGULAR" as const },
            createdAt: timestamp, updatedAt: timestamp };
        const recovery = { lessonId: "recovery", studentId: "student", startTime: 3600, endTime: 5400,
            status: LessonStatus.PRESENT, recovery: { ref: "original" as const, lessonRef: { dailyLessonId: "old", lessonId: "old" } },
            compensation: { level: "base", hourlyRate: 30, minutes: 30, amount: 15, type: "RECOVERY" as const },
            createdAt: timestamp, updatedAt: timestamp };
        const daily: DailyLesson = { id: "daily", schoolId: "school", date: "20240102", lessons: [regular, recovery], salary: 35,
            isOfficialCalendarDate: true };
        vi.spyOn(DailyLessonService.instance, "getDailyLessonOfSchoolBetweenDate").mockResolvedValue([daily]);
        vi.spyOn(StudentLessonService.instance, "getStudentLesson").mockResolvedValue([
            { lesson: regular, student }, { lesson: recovery, student }
        ]);
        vi.spyOn(WeeklyLessonService.instance, "getWeeklyLessonOfSchool").mockResolvedValue([]);

        await expect(MonthlySalaryService.instance.compute(school, "20240101", "20240131")).resolves.toMatchObject({
            regularLessonsTotal: 20, recoveryTotal: 15, officialCalendarDays: 1, reimbursementTotal: 10, netTotal: 45
        });
    });

    it("excludes recovery-only dates from reimbursements", async () => {
        const daily: DailyLesson = { id: "extra", schoolId: "school", date: "20240103", lessons: [], salary: 0,
            isOfficialCalendarDate: false };
        vi.spyOn(DailyLessonService.instance, "getDailyLessonOfSchoolBetweenDate").mockResolvedValue([daily]);
        vi.spyOn(WeeklyLessonService.instance, "getWeeklyLessonOfSchool").mockResolvedValue([]);

        await expect(MonthlySalaryService.instance.compute(school, "20240101", "20240131")).resolves.toMatchObject({
            officialCalendarDays: 0, reimbursementTotal: 0
        });
    });

    it("lets an explicit false flag override a weekly official date", async () => {
        const daily: DailyLesson = { id: "excluded", schoolId: "school", date: "20240101", lessons: [], salary: 0,
            isOfficialCalendarDate: false };
        const weekly: WeeklyLesson = { id: "weekly", schoolId: "school", dayOfWeek: DayOfWeek.MONDAY,
            from: "20240101", to: "20240131", exclude: [], schedule: [], createdAt: timestamp, updatedAt: timestamp };
        vi.spyOn(DailyLessonService.instance, "getDailyLessonOfSchoolBetweenDate").mockResolvedValue([daily]);
        vi.spyOn(WeeklyLessonService.instance, "getWeeklyLessonOfSchool").mockResolvedValue([weekly]);

        const report = await MonthlySalaryService.instance.compute(school, "20240101", "20240101");
        expect(report.officialCalendarDays).toBe(0);
    });
});

describe("StudentLessonService", () => {
    it("filters students hidden only for the selected date", async () => {
        const visible = { lessonId: "visible", studentId: "visible", startTime: 0, endTime: 1800,
            status: LessonStatus.NONE, createdAt: timestamp, updatedAt: timestamp };
        const hidden = { lessonId: "hidden", studentId: "hidden", startTime: 1800, endTime: 3600,
            status: LessonStatus.NONE, hiddenForDate: true, createdAt: timestamp, updatedAt: timestamp };
        const daily: DailyLesson = { id: "daily", schoolId: "school", date: "20240101", lessons: [visible, hidden], salary: 0 };
        vi.spyOn(StudentService.instance, "getStudentsOfSchoolWithIds").mockResolvedValue([
            { id: "visible", schoolId: "school", name: "Ada", surname: "Lovelace", level: "base", minutesLessonDuration: 30, createdAt: timestamp, updatedAt: timestamp },
            { id: "hidden", schoolId: "school", name: "Grace", surname: "Hopper", level: "base", minutesLessonDuration: 30, createdAt: timestamp, updatedAt: timestamp },
        ]);

        const result = await StudentLessonService.instance.getStudentLesson(daily);
        expect(result.map(x => x.lesson.lessonId)).toEqual(["visible"]);
    });
});
