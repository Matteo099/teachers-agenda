import type { DailyLesson } from "../model";
import { StudentService } from "./student-service";

export class StudentLessonService {

    private static _instance: StudentLessonService | null = null;

    public static get instance(): StudentLessonService {
        if (!this._instance) this._instance = new StudentLessonService();
        return this._instance;
    }

    public async getStudentLesson(dailyLesson: DailyLesson, stundetIds?: string[]) {
        stundetIds ??= dailyLesson.lessons.map(l => l.studentId);
        const data = await StudentService.instance.getStudentsOfSchoolWithIds(dailyLesson.schoolId, stundetIds);
        return dailyLesson.lessons.map(l => {
            const s = data.find(st => st.id == l.studentId)!;
            return { ...l, ...s };
        });
    }
}