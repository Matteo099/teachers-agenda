import { Timestamp } from "firebase/firestore";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DayOfWeek, LessonStatus, SalaryStrategy, TrialLessonPaymentStrategy, yyyyMMdd, type DailyLesson, type School, type Student, type WeeklyLesson } from "@/models/model";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { DailyLessonService } from "../daily-lesson-service";
import { SalaryService } from "../salary-service";
import { StudentLessonService } from "../student-lesson-service";
import { StudentService } from "../student-service";
import { WeeklyLessonService } from "../weely-lesson-service";
import { MonthlySalaryService } from "../monthly-salary-service";
import { filterSchoolLessons, LessonGroupService, type SchoolLessons } from "../lesson-group-service";

const timestamp = Timestamp.fromMillis(0);

afterEach(() => vi.restoreAllMocks());

describe("school lesson filters", () => {
    const regular = (studentId: string, extra: Partial<DailyLesson['lessons'][number]> = {}): DailyLesson['lessons'][number] => ({
        lessonId: studentId, studentId, startTime: 36000, endTime: 39600,
        status: LessonStatus.NONE, createdAt: timestamp, updatedAt: timestamp, ...extra,
    });
    const weekly: WeeklyLesson = {
        id: 'weekly', schoolId: 'school', dayOfWeek: DayOfWeek.MONDAY,
        from: '20240101', to: '20240131', exclude: [],
        schedule: [{ lessonId: 'scheduled', studentId: 'scheduled', startTime: 36000, endTime: 39600 }],
        createdAt: timestamp, updatedAt: timestamp,
    };
    const lessons: SchoolLessons = {
        schoolId: 'school', weeklyLessons: [weekly], dailyLessons: [
            { id: 'calendar', schoolId: 'school', date: '20240101', lessons: [regular('scheduled')], salary: 0 },
            { id: 'extra-on-calendar-day', schoolId: 'school', date: '20240108', lessons: [regular('scheduled'), regular('extra')], salary: 0 },
            { id: 'private', schoolId: 'school', date: '20240102', lessons: [regular('private')], salary: 0 },
            { id: 'recovery', schoolId: 'school', date: '20240103', lessons: [regular('recovery', { recovery: { ref: 'original', lessonRef: { dailyLessonId: 'original', lessonId: 'original' } } })], salary: 0 },
            { id: 'moved', schoolId: 'school', date: '20240104', lessons: [regular('moved', { moved: { ref: 'original', lessonRef: { dailyLessonId: 'original', lessonId: 'original' } } })], salary: 0 },
        ],
    };
    const byType = (type: 'weekly' | 'recoveryMoved' | 'daily') => filterSchoolLessons(lessons, [{ type, name: type, icon: '', color: '' }]);

    it('shows calendar occurrences and their materialized days', () => {
        expect(byType('weekly').dailyLessons.map(lesson => lesson.id)).toEqual(['calendar', 'extra-on-calendar-day']);
        expect(byType('weekly').weeklyLessons).toEqual([weekly]);
    });

    it('groups recovery and moved days together', () => {
        expect(byType('recoveryMoved').dailyLessons.map(lesson => lesson.id)).toEqual(['recovery', 'moved']);
    });

    it('shows additional daily lessons, including those added on a calendar day', () => {
        expect(byType('daily').dailyLessons.map(lesson => lesson.id)).toEqual(['extra-on-calendar-day', 'private']);
        expect(byType('daily').weeklyLessons).toEqual([]);
    });

    it('shows no lessons when every filter is cleared', () => {
        expect(filterSchoolLessons(lessons, [])).toEqual({ schoolId: 'school', dailyLessons: [], weeklyLessons: [] });
    });
});

describe("lesson day completion", () => {
    const lesson = (id: string, status: LessonStatus): DailyLesson['lessons'][number] => ({
        lessonId: id, studentId: 'student', startTime: 36000, endTime: 39600,
        status, createdAt: timestamp, updatedAt: timestamp,
    });

    it("counts a trial alongside a completed lesson without raising a duplicate warning", async () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const daily: DailyLesson = {
            id: 'day', schoolId: 'school', date: yyyyMMdd.fromDate(yesterday).toIyyyyMMdd(), salary: 0,
            lessons: [lesson('trial', LessonStatus.TRIAL), lesson('regular', LessonStatus.PRESENT)],
        };

        const groups = await LessonGroupService.instance.getGroupedLessons({ schoolId: 'school', dailyLessons: [daily], weeklyLessons: [] }, undefined, 1, 0);
        expect(groups[0]?.lessons[0]?.pending).toBe(false);

        daily.lessons = [daily.lessons[0]!];
        const trialOnlyGroups = await LessonGroupService.instance.getGroupedLessons({ schoolId: 'school', dailyLessons: [daily], weeklyLessons: [] }, undefined, 1, 0);
        expect(trialOnlyGroups[0]?.lessons[0]?.pending).toBe(false);

        daily.lessons.push(lesson('regular', LessonStatus.NONE));
        const incompleteGroups = await LessonGroupService.instance.getGroupedLessons({ schoolId: 'school', dailyLessons: [daily], weeklyLessons: [] }, undefined, 1, 0);
        expect(incompleteGroups[0]?.lessons[0]?.pending).toBe(true);
    });
});

describe("DailyLessonService.syncStudentBiweeklyLessons", () => {
    it("includes today's existing lesson when its week must be hidden", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 9, 8, 12));
        try {
            const lesson = {
                lessonId: 'lesson', studentId: 'student', startTime: 36000, endTime: 39600,
                status: LessonStatus.NONE, createdAt: timestamp, updatedAt: timestamp,
            };
            const daily: DailyLesson = {
                id: 'today', schoolId: 'school', date: '20261008', lessons: [lesson], salary: 0,
            };
            const load = vi.spyOn(DailyLessonService.instance, 'getDailyLessonOfSchoolFromDate').mockResolvedValue([daily]);
            const save = vi.spyOn(DailyLessonRepository.instance, 'save').mockResolvedValue('today');
            const student = {
                id: 'student', schoolId: 'school', biweeklyStartDate: '20261001',
            } as Student;

            await DailyLessonService.instance.syncStudentBiweeklyLessons(student);

            expect(load).toHaveBeenCalledWith('school', '20261008', 'asc');
            expect(lesson).toMatchObject({ hiddenForDate: true, biweeklyAutoHidden: true });
            expect(save).toHaveBeenCalledWith(daily, 'today');
        } finally {
            vi.useRealTimers();
        }
    });
});

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
