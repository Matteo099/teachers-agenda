import { where } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { LessonStatus, months, Time, yyyyMMdd, type CalendarEventExt, type DailyLesson, type IyyyyMMdd, type ScheduledLesson, type WeeklyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof, nextDay, pastDay } from "../utils";
import { DailyLessonService } from "./daily-lesson-service";

export interface LessonGroup {
    month: string;
    lessons: LessonProjection[];
}

export interface LessonProjection {
    date: yyyyMMdd;
    next: boolean;
    dailyLessonId?: string;
    pending?: boolean;
    recovery?: boolean;
    lessons: ScheduledLesson[];
}

export interface SchoolLessons {
    schoolId: ID,
    dailyLessons: DailyLesson[],
    weeklyLessons: WeeklyLesson[]
}

export class LessonGroupService {
    private static _instance: LessonGroupService | null = null;
    private today!: {
        asDate: Date,
        asString: String,
        asyyyyMMdd: yyyyMMdd,
        asIyyyyMMdd: IyyyyMMdd,
    };

    public static get instance(): LessonGroupService {
        if (!this._instance) this._instance = new LessonGroupService();
        return this._instance;
    }

    private calculateToday() {
        const asDate = new Date(new Date().toDateString()); // Normalize to date only
        const asyyyyMMdd = yyyyMMdd.fromDate(asDate);
        this.today = {
            asDate,
            asString: asyyyyMMdd.toIyyyyMMdd(),
            asyyyyMMdd: asyyyyMMdd,
            asIyyyyMMdd: asyyyyMMdd.toIyyyyMMdd(),
        }
    }

    public async getCalendarLessons(schoolId: ID, from: { date: yyyyMMdd, time?: Time }, to: { date: yyyyMMdd, time?: Time }): Promise<CalendarEventExt[]> {
        const lessons: CalendarEventExt[] = [];

        const dailyLessons = await DailyLessonService.instance.getDailyLessonOfSchoolBetweenDate(schoolId, from.date.toIyyyyMMdd(), to.date.toIyyyyMMdd());
        lessons.push(...dailyLessons.flatMap(dl => {
            const date = yyyyMMdd.fromIyyyyMMdd(dl.date).toIyyyyMMdd("-", 1);
            return dl.lessons.map(l => {
                return {
                    id: dl.id + "_" + l.lessonId,
                    title: l.studentId,
                    start: date + " " + Time.fromITime(l.startTime).format(),
                    end: date + " " + Time.fromITime(l.endTime).format(),
                    data: { date, dailyLessonId: dl.id }
                }
            });
        }));

        // compute the weekly lesson according to from and to
        const _query4 = where(nameof<WeeklyLesson>('schoolId'), '==', schoolId);
        const _query5 = where(nameof<WeeklyLesson>('from'), '<=', to.date.toIyyyyMMdd());
        const _query6 = where(nameof<WeeklyLesson>('to'), '>=', from.date.toIyyyyMMdd());
        const weeklyLessons = await WeeklyLessonRepository.instance.getAll(_query4, _query5, _query6);
        const toDate = to.date.toDate();
        const startingDate = from.date.toDate();
        while (startingDate <= toDate && weeklyLessons.length > 0) {
            weeklyLessons.forEach(w => {
                const next = nextDay(startingDate, w.dayOfWeek);
                if (next > toDate) return;
                if (next > yyyyMMdd.fromIyyyyMMdd(w.to).toDate() || next < yyyyMMdd.fromIyyyyMMdd(w.from).toDate()) return;
                const date = yyyyMMdd.fromDate(next).toIyyyyMMdd("-", 1);
                if (lessons.find(l => l.data?.date == date)) return;

                lessons.push(...w.schedule.map(s => {
                    return {
                        id: uuidv4(),
                        title: s.studentId,
                        start: date + " " + Time.fromITime(s.startTime).format(),
                        end: date + " " + Time.fromITime(s.endTime).format(),
                    };
                }))
            });
            startingDate.setDate(startingDate.getDate() + 7);
        }

        return lessons;
    }

    public async getGroupedLessons(schoolLessons: SchoolLessons): Promise<LessonGroup[]> {
        const lessonProjections: LessonProjection[] = [];
        this.calculateToday();

        // Step 1: Filter the last 2 lessons from daily lessons or (if no daily lesson present) weekly lesson based on today
        await this.addLastLessons(schoolLessons, lessonProjections, 2);

        // Step 2: Add the upcoming 4 lessons from weekly lessons based on today
        this.addUpcomingLessons(schoolLessons.dailyLessons, schoolLessons.weeklyLessons, lessonProjections, 4);

        // Step 3: Group lessons by month
        return this.groupLessonsByMonth(lessonProjections);
    }

    private async addLastLessons(schoolLessons: SchoolLessons, lessonProjections: LessonProjection[], count: number) {
        const dailyLessons: DailyLesson[] = schoolLessons.dailyLessons;
        const weeklyLessons: WeeklyLesson[] = schoolLessons.weeklyLessons;
        // Filter only lessons that are done (i.e., on or before today)
        const pastLessons = dailyLessons.filter(dailyLesson => dailyLesson.date <= this.today.asString);

        // Sort the past lessons by date in descending order to get the most recent ones
        pastLessons.sort((a, b) => b.date.localeCompare(a.date));

        const lastLessons = pastLessons.slice(0, count).reverse();
        lastLessons.forEach(dailyLesson => {
            lessonProjections.push(this.createLessonProjection(dailyLesson, false));
        });

        const startingDay = new Date();
        const _weeklyLessons = [...weeklyLessons];
        // Step 2: Loop until we have the required number of past lessons (or run out of lessons)
        while (lessonProjections.length < count && _weeklyLessons.length > 0) {
            _weeklyLessons.forEach(async (weekLesson, index) => {
                if (lessonProjections.length >= count) return;

                const pastLessonDate = pastDay(startingDay, weekLesson.dayOfWeek);
                const formattedDate = yyyyMMdd.fromDate(pastLessonDate);
                const pastLessonDateString = formattedDate.toIyyyyMMdd();

                // if the next lesson to add is outside the boundary of the weekly event, discard the weeklylesson
                if (weekLesson.from > pastLessonDateString || pastLessonDateString > weekLesson.to) {
                    _weeklyLessons.splice(index, 1);
                    return;
                }

                // Step 4: Ensure this weekly lesson isn't in the excluded dates
                if (weekLesson.exclude.includes(pastLessonDateString)) {
                    return;
                }

                // Step 5: Ensure this weekly lesson isn't already in the projection
                if (!lessonProjections.some(lesson => lesson.date.equals(formattedDate))) {
                    lessonProjections.push({
                        date: formattedDate,
                        pending: true,
                        next: false,
                        lessons: weekLesson.schedule
                    });
                }
            });
            // Move the starting day one week forward for the next batch of weekly lessons
            startingDay.setDate(startingDay.getDate() - 7);
        }
    }

    private addUpcomingLessons(
        dailyLessons: DailyLesson[],
        weeklyLessons: WeeklyLesson[],
        lessonProjections: LessonProjection[],
        count: number
    ) {
        const startingDay = new Date();
        const totalLessons = lessonProjections.length + count

        // Step 1: Filter and sort future daily lessons that are scheduled after today
        const futureDailyLessons = dailyLessons
            .filter(dailyLesson => dailyLesson.date > this.today.asString) // Only future lessons
            .sort((a, b) => a.date.localeCompare(b.date)); // Sort future lessons by date
        let dailyLessonIndex = 0; // Index to track the current position in futureDailyLessons array
        const _weeklyLessons = [...weeklyLessons];

        // Step 2: Loop until we have the required number of upcoming lessons (or run out of lessons)
        while ((_weeklyLessons.length > 0 || futureDailyLessons.length > dailyLessonIndex) && lessonProjections.length < totalLessons) {
            if (_weeklyLessons.length == 0) {
                const futureDailyLesson = futureDailyLessons[dailyLessonIndex];
                lessonProjections.push(this.createLessonProjection(futureDailyLesson, false));
                dailyLessonIndex++;
            }
            _weeklyLessons.forEach((weekLesson, index) => {
                if (lessonProjections.length >= totalLessons) return;

                const nextLessonDate = nextDay(startingDay, weekLesson.dayOfWeek);
                const formattedDate = yyyyMMdd.fromDate(nextLessonDate);
                const nextLessonDateString = formattedDate.toIyyyyMMdd();

                // if the next lesson to add is outside the boundary of the weekly event, discard the weeklylesson
                if (weekLesson.from > nextLessonDateString || nextLessonDateString > weekLesson.to) {
                    _weeklyLessons.splice(index, 1);
                    return;
                }

                // Step 3: Add any future daily lessons that occur before the next weekly lesson's date
                while (futureDailyLessons.length > dailyLessonIndex && futureDailyLessons[dailyLessonIndex].date <= nextLessonDateString && lessonProjections.length < totalLessons) {
                    const futureDailyLesson = futureDailyLessons[dailyLessonIndex];
                    lessonProjections.push(this.createLessonProjection(futureDailyLesson, false));
                    dailyLessonIndex++;
                }

                // Step 4: Ensure this weekly lesson isn't in the excluded dates
                if (weekLesson.exclude.includes(nextLessonDateString)) {
                    return;
                }

                // Step 5: Ensure this weekly lesson isn't already in the projection
                if (lessonProjections.length < totalLessons && !lessonProjections.some(lesson => lesson.date.equals(formattedDate))) {
                    lessonProjections.push({
                        date: formattedDate,
                        next: false, // Mark as next lesson later
                        lessons: weekLesson.schedule
                    });
                }
            });
            // Move the starting day one week forward for the next batch of weekly lessons
            startingDay.setDate(startingDay.getDate() + 7);
        }
    }

    private groupLessonsByMonth(lessonProjections: LessonProjection[]): LessonGroup[] {
        const lessonGroup: LessonGroup[] = [];
        let nextFound = false;

        lessonProjections.sort((a, b) => {
            return a.date.toIyyyyMMdd() > b.date.toIyyyyMMdd() ? 1 : -1;
        }).forEach(lesson => {
            const lessonMonth = lesson.date.getMonth();

            let monthIndex = lessonGroup.findIndex(lg => lg.month == months[lessonMonth]);
            if (monthIndex == -1) {
                lessonGroup.push({ month: months[lessonMonth], lessons: [] });
                monthIndex = lessonGroup.length - 1;
            }

            // Mark the next upcoming lesson
            if (!nextFound && lesson.date.toDate() >= this.today.asDate) {
                nextFound = true;
                lesson.next = true;
            }

            lessonGroup[monthIndex].lessons.push(lesson);
        });

        return lessonGroup;
    }

    private createLessonProjection(dailyLesson: DailyLesson, next: boolean): LessonProjection {
        const pending = dailyLesson.date <= this.today.asString && dailyLesson.lessons.some(l => l.status == LessonStatus.NONE);
        const recovery = dailyLesson.lessons.some(l => l.recovery?.ref == 'original');

        return {
            dailyLessonId: dailyLesson.id,
            date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date),
            recovery,
            pending,
            next,
            lessons: dailyLesson.lessons
        };
    }
}