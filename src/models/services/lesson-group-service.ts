import { LessonStatus, months, yyyyMMdd, type DailyLesson, type IyyyyMMdd, type ScheduledLesson, type WeeklyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { nextDay } from "../utils";

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

    public async getGroupedLessons(schoolLessons: SchoolLessons): Promise<LessonGroup[]> {
        const lessonProjections: LessonProjection[] = [];
        this.calculateToday();

        // Step 1: Filter the last 2 lessons from daily lessons based on today
        this.addLastDoneLessons(schoolLessons.dailyLessons, lessonProjections, 2);

        // Step 2: Add the upcoming 4 lessons from weekly lessons based on today
        this.addUpcomingLessons(schoolLessons.dailyLessons, schoolLessons.weeklyLessons, lessonProjections, 4);

        // Step 3: Group lessons by month
        return this.groupLessonsByMonth(lessonProjections);
    }

    private addLastDoneLessons(dailyLessons: DailyLesson[], lessonProjections: LessonProjection[], count: number) {
        // Filter only lessons that are done (i.e., on or before today)
        const pastLessons = dailyLessons.filter(dailyLesson => dailyLesson.date <= this.today.asString);

        // Sort the past lessons by date in ascending order to get the most recent ones
        pastLessons.sort((a, b) => a.date.localeCompare(b.date));

        const lastLessons = pastLessons.slice(0, count);
        lastLessons.forEach(dailyLesson => {
            lessonProjections.push(this.createLessonProjection(dailyLesson, false));
        });
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

        // Step 2: Loop until we have the required number of upcoming lessons (or run out of lessons)
        while ((weeklyLessons.length > 0 || futureDailyLessons.length > dailyLessonIndex) && lessonProjections.length < totalLessons) {
            weeklyLessons.forEach(weekLesson => {
                if (lessonProjections.length >= totalLessons) return;

                const nextLessonDate = nextDay(startingDay, weekLesson.dayOfWeek);
                const formattedDate = yyyyMMdd.fromDate(nextLessonDate);
                const nextLessonDateString = formattedDate.toIyyyyMMdd();

                // Step 3: Add any future daily lessons that occur before the next weekly lesson's date
                while (futureDailyLessons.length > dailyLessonIndex && futureDailyLessons[dailyLessonIndex].date <= nextLessonDateString && lessonProjections.length < totalLessons) {
                    const futureDailyLesson = futureDailyLessons[dailyLessonIndex];
                    lessonProjections.push(this.createLessonProjection(futureDailyLesson, false));
                    dailyLessonIndex++;
                }

                // Step 4: Ensure this weekly lesson isn't already in the projection
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
        const groupedLessons: { [month: number]: LessonProjection[] } = {};
        let nextFound = false;

        lessonProjections.forEach(lesson => {
            const lessonMonth = lesson.date.getMonth();
            if (!groupedLessons[lessonMonth]) {
                groupedLessons[lessonMonth] = [];
            }

            // Mark the next upcoming lesson
            if (!nextFound && lesson.date.toDate() >= this.today.asDate) {
                nextFound = true;
                lesson.next = true;
            }

            groupedLessons[lessonMonth].push(lesson);
        });

        // Convert grouped lessons to array of LessonGroup
        return Object.keys(groupedLessons).map(month => {
            const monthIndex = parseInt(month);
            return {
                month: months[monthIndex],
                lessons: groupedLessons[monthIndex]
            };
        });
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