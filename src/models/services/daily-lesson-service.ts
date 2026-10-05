import { orderBy, Timestamp, where, type OrderByDirection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { DeleteMode, LessonStatus, Time, yyyyMMdd, type DailyLesson, type EventTime, type IyyyyMMdd, type Lesson, type RecoverySchedule, type ScheduledLesson, type School, type Student, type StudentLesson, type WeeklyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof } from "../utils";
import type { LessonProjection } from "./lesson-group-service";
import { LessonService } from "./lesson-service";
import { SalaryService } from "./salary-service";
import type { ExpandedLesson, StudentLessonWithRecovery } from "./school-recovery-lesson-service";
import { WeeklyLessonService } from "./weely-lesson-service";
import { StudentLessonService } from "./student-lesson-service";

export interface SaveOptions {
    school: School;
    updatedLessons?: Lesson[];
    studentLessons?: StudentLesson[];
}

export class DailyLessonService {

    private static _instance: DailyLessonService | null = null;

    public static get instance(): DailyLessonService {
        if (!this._instance) this._instance = new DailyLessonService();
        return this._instance;
    }

    private lessonService: LessonService = new LessonService();

    public async getDailyLessonOfSchoolByDate(schoolId: ID, date: IyyyyMMdd): Promise<DailyLesson | undefined> {
        const id = DailyLessonRepository.generateId({ schoolId, date });
        return DailyLessonRepository.instance.get(id);
    }

    public async getDailyLessonsOfSchool(schoolId: ID): Promise<DailyLesson[]> {
        return DailyLessonRepository.instance.getAll(where(nameof<DailyLesson>('schoolId'), '==', schoolId));
    }

    public async getDailyLessonOfSchoolFromDate(schoolId: ID, from: IyyyyMMdd, orderByDirection?: OrderByDirection): Promise<DailyLesson[]> {
        const queries = [];
        const _query1 = where(nameof<DailyLesson>('schoolId'), '==', schoolId);
        const _query2 = where(nameof<DailyLesson>('date'), '>=', from);
        queries.push(_query1, _query2);
        if (orderByDirection) queries.push(orderBy(nameof<DailyLesson>('date'), orderByDirection))
        return DailyLessonRepository.instance.getAll(...queries);
    }

    public async getDailyLessonOfSchoolBetweenDate(schoolId: ID, from: IyyyyMMdd, to: IyyyyMMdd): Promise<DailyLesson[]> {
        // retireve all the dailyLesson between from and to
        const _query1 = where(nameof<DailyLesson>('schoolId'), '==', schoolId);
        const _query2 = where(nameof<DailyLesson>('date'), '>=', from);
        const _query3 = where(nameof<DailyLesson>('date'), '<=', to);
        return await DailyLessonRepository.instance.getAll(_query1, _query2, _query3);
    }


    public async getOrCreateDailyLessonId(
        schoolId: ID,
        lesson: LessonProjection | Date
    ): Promise<ID> {
        // If lesson is a Date, call the helper to create a daily lesson based on the date
        if (lesson instanceof Date) {
            return this.createDailyLessonByDate(schoolId, lesson);
        }

        // If lesson is a LessonProjection, handle it
        return this.handleLessonProjection(schoolId, lesson);
    }

    private async handleLessonProjection(
        schoolId: ID,
        lessonGroup: LessonProjection
    ): Promise<ID> {
        if (!lessonGroup.dailyLessonId) {
            // If lessonId is undefined, create a new daily lesson
            const newDailyLesson = this.buildDailyLessonFromProjection(schoolId, lessonGroup);
            return DailyLessonRepository.instance.save(newDailyLesson);
        }

        // If lessonId exists, return it directly
        return lessonGroup.dailyLessonId;
    }

    public buildDailyLessonFromProjection(
        schoolId: string,
        lessonGroup: LessonProjection
    ): Partial<DailyLesson> {
        return {
            date: lessonGroup.date.toIyyyyMMdd(),
            schoolId,
            // A daily lesson created from a scheduled school-calendar
            // projection is an official calendar date by definition.
            isOfficialCalendarDate: true,
            lessons: lessonGroup.lessons.map(l => ({
                lessonId: uuidv4(),
                status: LessonStatus.NONE,
                studentId: l.studentId,
                startTime: l.startTime,
                endTime: l.endTime,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
            })),
        };
    }

    public async createDailyLessonByDate(
        schoolId: ID,
        lessonDate: Date
    ): Promise<ID> {
        const parseDate = yyyyMMdd.fromDate(lessonDate).toIyyyyMMdd();

        // Try to retrieve the daily lesson for the given date
        const existingData = await DailyLessonService.instance.getDailyLessonOfSchoolByDate(schoolId, parseDate);

        if (existingData) {
            // Older daily lessons may predate the official-calendar flag.
            // Infer it from the school's recurring calendar when it was not
            // explicitly set (an explicit false remains a manual exclusion).
            if (existingData.isOfficialCalendarDate === undefined) {
                const weeklyLessons = await WeeklyLessonService.instance
                    .getWeeklyLessonOfSchoolByDayBetweenDate(schoolId, lessonDate.getDay(), parseDate);
                if (weeklyLessons.length > 0) {
                    existingData.isOfficialCalendarDate = true;
                    await DailyLessonRepository.instance.save(existingData, existingData.id);
                }
            }
            return existingData.id; // If found, return the existing ID
        }

        // If no daily lesson found, create a new one from weekly lessons
        const newDailyLesson = await this.buildDailyLessonFromWeeklyOrEmpty(schoolId, lessonDate, parseDate);
        return DailyLessonRepository.instance.save(newDailyLesson);
    }

    public async buildDailyLessonFromWeeklyOrEmpty(
        schoolId: ID,
        lessonDate: Date,
        formattedDate: string
    ): Promise<Partial<DailyLesson>> {
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchoolByDayBetweenDate(schoolId, lessonDate.getDay(), formattedDate);
        const weeklyLesson = weeklyLessons?.[0];
        // const weeklyLesson = schoolLessons.weeklyLessons.find(l => l.dayOfWeek === lessonDate.getDay());

        if (weeklyLesson) {
            // Create daily lesson from weekly lesson schedule
            return {
                date: formattedDate,
                schoolId: schoolId,
                isOfficialCalendarDate: !!weeklyLesson,
                lessons: weeklyLesson.schedule.map(l => ({
                    lessonId: uuidv4(),
                    status: LessonStatus.NONE,
                    studentId: l.studentId,
                    startTime: l.startTime,
                    endTime: l.endTime,
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now(),
                })),
            };
        }

        // Create an empty daily lesson if no weekly lesson is found
        return {
            date: formattedDate,
            schoolId: schoolId,
            isOfficialCalendarDate: false,
            lessons: [],
        };
    }

    public async delete(dailyLesson: DailyLesson) {
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(dailyLesson.schoolId);
        const wl = weeklyLessons.find(wl => WeeklyLessonService.instance.isValid(wl, dailyLesson.date));
        if (wl) {
            wl.exclude.push(dailyLesson.date);
            await WeeklyLessonRepository.instance.save(wl, wl.id);
            return true;
        }

        this.deleteLessons(dailyLesson, true, dailyLesson.lessons);
        return false;
    }

    private dailyLessonIdToDelete?: ID;
    public async deleteLessons(dailyLesson: DailyLesson, deleteDailyLessonWhenNoLessons: boolean, lessons: Lesson[], deleteMode?: DeleteMode) {
        if (!this.dailyLessonIdToDelete) this.dailyLessonIdToDelete = dailyLesson.id;
        try {
            for await (const lesson of lessons) {
                let mode = deleteMode;
                if (this.dailyLessonIdToDelete == dailyLesson.id) {
                    if (lesson.recovery?.ref == 'recovery') mode = DeleteMode.DELETING_ORIGINAL_LESSON;
                    else if (lesson.recovery?.ref == 'original') mode = DeleteMode.DELETING_RECOVERY_LESSON;
                    else if (lesson.moved?.ref == 'original') mode = DeleteMode.DELETING_MOVE_LESSON;
                }
                await this.lessonService.resetLesson(dailyLesson, lesson, mode);
                const index = dailyLesson.lessons.findIndex(l => l.lessonId == lesson.lessonId);
                if (index < 0) continue;

                // The salary total is stored on the daily lesson. Removing a
                // lesson must remove its already calculated compensation too;
                // otherwise the lesson disappears but its pay remains in the
                // daily/monthly salary summaries.
                if (lesson.compensation) {
                    dailyLesson.salary = Math.max(0, (dailyLesson.salary ?? 0) - lesson.compensation.amount);
                }
                dailyLesson.lessons.splice(index, 1);
            }

            // if the recovery daily lesson has no more lessons, delete it
            if (dailyLesson.lessons.length == 0 && deleteDailyLessonWhenNoLessons) {
                await DailyLessonRepository.instance.delete(dailyLesson.id);
            } else {
                await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
            }
        } finally {
            if (this.dailyLessonIdToDelete == dailyLesson.id) this.dailyLessonIdToDelete = undefined;
        }
    }

    public async updateLessonsStatus(status: LessonStatus, dailyLesson: DailyLesson, lessons: Lesson[], school?: School) {
        for await (const lesson of lessons) {
            const _lesson = dailyLesson.lessons.find(l => l.lessonId == lesson.lessonId);
            await this.lessonService.updateLessonStatus(status, dailyLesson, _lesson!);
        }
        await this.save(dailyLesson, school ? { school } : undefined);
    }

    public async resetLessons(dailyLesson: DailyLesson, lessons: Lesson[], school?: School) {
        for await (const lesson of lessons) {
            await this.lessonService.resetLesson(dailyLesson, lesson);
        }
        await this.save(dailyLesson, school ? { school } : undefined);
    }

    public async moveLessons(dailyLesson: DailyLesson, newLessonDate: Date, lessons: Lesson[], school?: School) {
        const schoolId = dailyLesson.schoolId;
        const originalDailyLessonId = dailyLesson.id;

        // Step 1: get (or create) the new dailyLesson
        const newDailyLessonId = await DailyLessonService.instance.getOrCreateDailyLessonId(schoolId, newLessonDate);
        // Step 2: add the lesson to the new dailyLesson
        const newDailyLesson = await DailyLessonRepository.instance.get(newDailyLessonId);
        if (newDailyLesson) {
            for await (const lessonToMove of lessons) {
                const newLesson = this.lessonService.moveLesson(lessonToMove, originalDailyLessonId, newDailyLessonId);
                newDailyLesson.lessons.push(newLesson);
                newDailyLesson.lessons.sort((a, b) => a.startTime - b.startTime);
                if (school) await this.save(newDailyLesson, { school });
                else await DailyLessonRepository.instance.save(newDailyLesson, newDailyLessonId);
            }
            if (school) await this.save(dailyLesson, { school });
            else await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
        } else throw new Error("Unable to move the lesson because the new daily lesson is undefined!");
    }

    public async updateLessonTime(dailyLesson: DailyLesson, newDataEvent: EventTime, lesson: Lesson, applyFromDate = false) {
        const startTime = Time.fromHHMM(newDataEvent.startTime)?.toITime();
        const endTime = Time.fromHHMM(newDataEvent.endTime)?.toITime();
        if (startTime == undefined || endTime == undefined) {
            return false;
        }

        lesson.startTime = startTime;
        lesson.endTime = endTime;

        await this.save(dailyLesson);
        if (applyFromDate) await this.propagateLessonTime(dailyLesson, lesson, startTime, endTime);
        return true;
    }

    private async propagateLessonTime(dailyLesson: DailyLesson, lesson: Lesson, startTime: number, endTime: number): Promise<void> {
        const duration = endTime - startTime;
        const lessonDay = yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).toDate().getDay();
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(dailyLesson.schoolId);
        for (const weekly of weeklyLessons) {
            if (weekly.dayOfWeek !== lessonDay) continue;
            const target = weekly.schedule.find(item => item.studentId === lesson.studentId);
            if (!target) continue;
            target.startTime = startTime;
            target.endTime = endTime;
            this.shiftOverlappingLessons(weekly.schedule, target);
            await WeeklyLessonRepository.instance.save(weekly, weekly.id);
        }

        const futureLessons = await this.getDailyLessonOfSchoolFromDate(dailyLesson.schoolId, dailyLesson.date, 'asc');
        for (const future of futureLessons) {
            if (yyyyMMdd.fromIyyyyMMdd(future.date).toDate().getDay() !== lessonDay) continue;
            const target = future.lessons.find(item => item.studentId === lesson.studentId);
            if (!target) continue;
            target.startTime = startTime;
            target.endTime = startTime + duration;
            this.shiftOverlappingLessons(future.lessons, target);
            await this.save(future);
        }
    }

    private shiftOverlappingLessons(lessons: ScheduledLesson[], target: ScheduledLesson): void {
        const ordered = [...lessons].sort((first, second) => first.startTime - second.startTime);
        const targetIndex = ordered.indexOf(target);
        if (targetIndex < 0) return;
        let cursor = target.endTime;
        for (const lesson of ordered.slice(targetIndex + 1)) {
            if (lesson.startTime >= cursor) break;
            const duration = lesson.endTime - lesson.startTime;
            lesson.startTime = cursor;
            lesson.endTime = cursor + duration;
            cursor = lesson.endTime;
        }
    }

    public async addStudents(dailyLesson: DailyLesson, students: Student[]) {
        students.forEach(s => {
            // 08:00 => 28800 seconds
            const lastLessonEndTime = dailyLesson.lessons.length == 0 ? 28800 : dailyLesson.lessons[dailyLesson.lessons.length - 1]!.endTime;
            dailyLesson.lessons.push({
                lessonId: uuidv4(),
                status: LessonStatus.NONE,
                studentId: s.id,
                startTime: lastLessonEndTime,
                endTime: lastLessonEndTime + s.minutesLessonDuration * 60,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now()
            });
        })

        // Keep the reactive object used by DailyLessonView in sync with the
        // persisted document. Saving a shallow copy here left the view with
        // the old lesson list; the next save could therefore delete students.
        await this.save(dailyLesson);
    }

    public async save(dailyLesson: DailyLesson, opts?: SaveOptions) {
        const dl = await this.extractDailyLesson(dailyLesson, opts);
        await DailyLessonRepository.instance.save(dl, dl.id);
    }

    public async setOfficialCalendarDate(dailyLesson: DailyLesson, isOfficial: boolean): Promise<void> {
        dailyLesson.isOfficialCalendarDate = isOfficial;
        await this.save(dailyLesson);
    }

    public async ensureOfficialCalendarDate(dailyLesson: DailyLesson): Promise<void> {
        if (dailyLesson.isOfficialCalendarDate !== undefined) return;
        const weeklyLessons = await WeeklyLessonService.instance
            .getWeeklyLessonOfSchoolByDayBetweenDate(dailyLesson.schoolId,
                yyyyMMdd.fromIyyyyMMdd(dailyLesson.date).toDate().getDay(), dailyLesson.date);
        if (weeklyLessons.length === 0) return;
        dailyLesson.isOfficialCalendarDate = true;
        await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
    }

    public async syncTodayWithWeeklyLesson(weeklyLesson: WeeklyLesson): Promise<void> {
        const today = new Date(new Date().toDateString());
        const daysUntilLesson = (weeklyLesson.dayOfWeek - today.getDay() + 7) % 7;
        const firstAvailableDate = new Date(today);
        firstAvailableDate.setDate(today.getDate() + daysUntilLesson);
        const date = yyyyMMdd.fromDate(firstAvailableDate).toIyyyyMMdd();

        // A calendar may have been created for a future date (for example the
        // next Monday). When a student is added, the first available lesson is
        // the next occurrence from today, not the calendar's old start date.
        if (weeklyLesson.exclude.includes(date)) return;
        if (weeklyLesson.from > date) {
            weeklyLesson.from = date;
            await WeeklyLessonRepository.instance.save(weeklyLesson, weeklyLesson.id);
        }

        const id = await this.getOrCreateDailyLessonId(weeklyLesson.schoolId, firstAvailableDate);
        const dailyLesson = await DailyLessonRepository.instance.get(id);
        if (!dailyLesson) return;
        const existing = new Set(dailyLesson.lessons.map(l => l.studentId));
        weeklyLesson.schedule.filter(l => !existing.has(l.studentId)).forEach(l => dailyLesson.lessons.push({
            lessonId: uuidv4(), status: LessonStatus.NONE, studentId: l.studentId,
            startTime: l.startTime, endTime: l.endTime, createdAt: Timestamp.now(), updatedAt: Timestamp.now()
        }));
        dailyLesson.lessons.sort((a, b) => a.startTime - b.startTime);
        await this.save(dailyLesson);
    }

    /** Applies a student's new duration from the next scheduled lesson onward. */
    public async rescheduleStudentDuration(schoolId: ID, studentId: ID, minutes: number): Promise<void> {
        const today = yyyyMMdd.fromDate(new Date(new Date().toDateString())).toIyyyyMMdd();
        const weeklyLessons = await WeeklyLessonService.instance.getWeeklyLessonOfSchool(schoolId);
        const firstUsefulDateByDay = new Map<number, IyyyyMMdd>();
        for (const weekly of weeklyLessons) {
            if (!weekly.schedule.some(lesson => lesson.studentId === studentId)) continue;
            const todayDate = yyyyMMdd.fromIyyyyMMdd(today).toDate();
            const daysUntil = (weekly.dayOfWeek - todayDate.getDay() + 7) % 7;
            const firstDate = new Date(todayDate);
            firstDate.setDate(firstDate.getDate() + daysUntil);
            let firstDateValue = yyyyMMdd.fromDate(firstDate).toIyyyyMMdd();
            if (firstDateValue < weekly.from) {
                firstDate.setDate(firstDate.getDate() + 7);
                firstDateValue = yyyyMMdd.fromDate(firstDate).toIyyyyMMdd();
            }
            if (firstDateValue > weekly.to) continue;
            const currentFirstDate = firstUsefulDateByDay.get(weekly.dayOfWeek);
            if (!currentFirstDate || firstDateValue < currentFirstDate) {
                firstUsefulDateByDay.set(weekly.dayOfWeek, firstDateValue);
            }

            let changed = false;
            const schedule = weekly.schedule.map(lesson => ({ ...lesson })).sort((a, b) => a.startTime - b.startTime);
            let cursor: number | undefined;
            for (const lesson of schedule) {
                if (lesson.studentId === studentId) {
                    lesson.endTime = lesson.startTime + minutes * 60;
                    cursor = lesson.endTime;
                    changed = true;
                } else if (cursor !== undefined && lesson.startTime < cursor) {
                    const duration = lesson.endTime - lesson.startTime;
                    lesson.startTime = cursor;
                    lesson.endTime = cursor + duration;
                    cursor = lesson.endTime;
                    changed = true;
                } else if (cursor !== undefined) {
                    cursor = undefined;
                }
            }
            if (changed) {
                weekly.schedule = schedule;
                await WeeklyLessonRepository.instance.save(weekly, weekly.id);
            }
        }

        const dailyLessons = await this.getDailyLessonOfSchoolFromDate(schoolId, today, 'asc');
        for (const daily of dailyLessons) {
            const firstUsefulDate = firstUsefulDateByDay.get(yyyyMMdd.fromIyyyyMMdd(daily.date).toDate().getDay());
            if (!firstUsefulDate || daily.date < firstUsefulDate) continue;
            const schedule = [...daily.lessons].sort((a, b) => a.startTime - b.startTime);
            const targetIndex = schedule.findIndex(lesson => lesson.studentId === studentId);
            const target = targetIndex >= 0 ? schedule[targetIndex] : undefined;
            if (!target) continue;
            let cursor = target.startTime + minutes * 60;
            target.endTime = cursor;
            for (const lesson of schedule.slice(targetIndex + 1)) {
                if (lesson.startTime >= cursor) break;
                const duration = lesson.endTime - lesson.startTime;
                lesson.startTime = cursor;
                lesson.endTime = cursor + duration;
                cursor = lesson.endTime;
            }
            daily.lessons = schedule;
            await this.save(daily);
        }
    }

    private async extractDailyLesson(dailyLesson: DailyLesson, opts?: SaveOptions): Promise<DailyLesson> {
        const lessons: Lesson[] = [];
        // Status-only updates do not always have the school available. Preserve the
        // persisted amount in that case instead of silently overwriting it with zero.
        let salary = opts?.school ? 0 : (dailyLesson.salary ?? 0);
        for await (const l of dailyLesson.lessons) {
            let lesson: Lesson = l;
            let student: Student | undefined;
            if (opts?.updatedLessons) {
                const studentLesson = opts.updatedLessons.find(sl => sl.lessonId == l.lessonId);
                if (studentLesson == undefined) continue;
                lesson = studentLesson;
            } else if (opts?.studentLessons) {
                const studentLesson = opts.studentLessons.find(sl => sl.lesson.lessonId == l.lessonId);
                // Hidden or orphaned lessons are absent from the UI list;
                // preserve them instead of dropping historical data.
                if (studentLesson) {
                    lesson = studentLesson.lesson;
                    student = studentLesson.student;
                }
            }
            const newLesson: Lesson = {
                lessonId: l.lessonId,
                createdAt: l.createdAt,
                studentId: l.studentId,
                startTime: lesson.startTime,
                endTime: lesson.endTime,
                status: lesson.status,
                updatedAt: Timestamp.now()
            }
            if (l.bandAttendance) newLesson.bandAttendance = l.bandAttendance;
            if (l.hiddenForDate) newLesson.hiddenForDate = l.hiddenForDate;
            if (lesson.dailyNote) newLesson.dailyNote = lesson.dailyNote;
            if (l.compensation) newLesson.compensation = l.compensation;
            if (l.recovery) newLesson.recovery = l.recovery;
            if (l.moved) newLesson.moved = l.moved;
            lessons.push(newLesson);

            if (opts?.school) {
                if (l.hiddenForDate) continue;
                const compensation = await SalaryService.instance.getLessonCompensation(opts.school, lesson, student, dailyLesson.date);
                salary += compensation?.amount ?? await SalaryService.instance.getSalaryOfStudentLesson(opts.school, lesson, student, dailyLesson.date);
                if (compensation && !l.compensation) newLesson.compensation = compensation;
            }
        }
        const newDailyLesson: DailyLesson = {
            id: dailyLesson.id,
            schoolId: dailyLesson.schoolId,
            date: dailyLesson.date,
            lessons: lessons.sort((a, b) => a.startTime - b.startTime),
            lastSalaryUpdate: Timestamp.now(),
            salary
        };
        if (dailyLesson.isOfficialCalendarDate !== undefined)
            newDailyLesson.isOfficialCalendarDate = dailyLesson.isOfficialCalendarDate;
        if (opts?.school.salaryStrategy != undefined) newDailyLesson.salaryStrategy = opts.school.salaryStrategy;
        return newDailyLesson;
    }

    async createRecoveryLesson(schedule: RecoverySchedule): Promise<ExpandedLesson> {
        const recoveryLesson: Lesson = {
            lessonId: uuidv4(),
            status: LessonStatus.NONE,
            studentId: schedule.studentId,
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            recovery: {
                ref: 'original',
                lessonRef: {
                    dailyLessonId: schedule.originalDailyLessonId,
                    lessonId: schedule.originalLessonId,
                },
                fractionMinutes: schedule.minutes ?? Math.round((schedule.endTime - schedule.startTime) / 60)
            },
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
        }

        const recoveryDailyLessonId = await this.getOrCreateDailyLessonId(schedule.schoolId, schedule.date);
        const recoveryDailyLesson = (await DailyLessonRepository.instance.get(recoveryDailyLessonId))!;
        recoveryDailyLesson.lessons.push(recoveryLesson)
        await DailyLessonRepository.instance.save(recoveryDailyLesson, recoveryDailyLesson.id);
        return {
            dailyLessonId: recoveryDailyLesson.id,
            lesson: recoveryLesson
        }
    }

    async updateOriginalRecoveryLesson(lesson: StudentLessonWithRecovery, recoveryDailyLesson: ExpandedLesson) {
        const originalDaillyLesson = await DailyLessonRepository.instance.get(lesson.recoveryReference.originalDailyLesson.id);
        const _lesson = originalDaillyLesson?.lessons.find(l => l.lessonId == lesson.lesson.lessonId);
        if (originalDaillyLesson && _lesson) {
            _lesson.recovery = {
                ref: 'recovery',
                lessonRef: {
                    dailyLessonId: recoveryDailyLesson.dailyLessonId,
                    lessonId: recoveryDailyLesson.lesson.lessonId
                }
            }
            await DailyLessonRepository.instance.save(originalDaillyLesson, originalDaillyLesson.id);
        } else throw new Error("Lesson not found")
    }

    public async computeSalaryOfDailyLesson(school: School, dailyLessonId: ID): Promise<DailyLesson | undefined> {
        const dailyLesson = await DailyLessonRepository.instance.get(dailyLessonId);
        if (!dailyLesson) return;
        const studentIds = dailyLesson.lessons.map(l => l.studentId);
        const studentLessons = await StudentLessonService.instance.getStudentLesson(dailyLesson, studentIds);

        let salary = 0;
        for (const l of dailyLesson.lessons) {
            const st = studentLessons.find(sl => sl.student.id == l.studentId);
            if (st === undefined) continue;
            salary += await SalaryService.instance.getSalaryOfStudentLesson(school, st.lesson, st.student, dailyLesson.date);
        }
        if (salary != dailyLesson.salary) {
            dailyLesson.salary = salary;
            dailyLesson.lastSalaryUpdate = Timestamp.now();
            await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
            return dailyLesson;
        }
        return;
    }
}
