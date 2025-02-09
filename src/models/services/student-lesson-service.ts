import type { DailyLesson, Student, StudentLesson } from "../model";
import { arraysHaveSameElements } from "../utils";
import { StudentService } from "./student-service";

export class StudentLessonService {

    private static _instance: StudentLessonService | null = null;

    public static get instance(): StudentLessonService {
        if (!this._instance) this._instance = new StudentLessonService();
        return this._instance;
    }

    public async getStudentLesson(dailyLesson: DailyLesson, stundetIds?: string[]): Promise<StudentLesson[]> {
        stundetIds ??= dailyLesson.lessons.map(l => l.studentId);
        const data = await StudentService.instance.getStudentsOfSchoolWithIds(dailyLesson.schoolId, stundetIds);
        return dailyLesson.lessons.map(l => {
            const s = data.find(st => st.id == l.studentId)!;
            return { ...l, ...s };
        });
    }

    public async getStudentLesson2(dailyLesson: DailyLesson, studentLessons: StudentLesson[]): Promise<StudentLesson[]> {
        console.log("dailyLesson", dailyLesson);

        const currentStudentsId: string[] = studentLessons.map(s => s.studentId);
        const newStudentsId: string[] = dailyLesson.lessons.map(l => l.studentId);

        const differentStudents = !arraysHaveSameElements(currentStudentsId, newStudentsId);
        let students: Student[] = [...studentLessons];
        if (differentStudents) {
            const stundetIds = dailyLesson.lessons.map(l => l.studentId);
            students = await StudentService.instance.getStudentsOfSchoolWithIds(dailyLesson.schoolId, stundetIds);
        }

        
        return dailyLesson.lessons.map(l => {
            const s = students.find(st => st.id == l.studentId)!;
            console.log(l);
            return { ...l, ...s };
        });
    }
}