import type { Ref } from "vue";
import type { DailyLesson, Student, StudentLesson, StudentLesson2 } from "../model";
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

    public async updateStudentLesson2(dailyLesson: DailyLesson, studentLessons: StudentLesson2[], loading?: Ref<boolean>): Promise<StudentLesson2[]> {
        const currentStudentsId: string[] = studentLessons.map(s => s.lesson.studentId);
        const newStudentsId: string[] = dailyLesson.lessons.map(l => l.studentId);

        const differentStudents = !arraysHaveSameElements(currentStudentsId, newStudentsId);
        let students: Student[] = studentLessons.map(sl => sl.student);
        if (differentStudents) {
            if(loading) loading.value = true
            const stundetIds = dailyLesson.lessons.map(l => l.studentId);
            students = await StudentService.instance.getStudentsOfSchoolWithIds(dailyLesson.schoolId, stundetIds);
            if(loading) loading.value = false
        }

        studentLessons.length = 0;
        dailyLesson.lessons.map(lesson => {
            const student = students.find(st => st.id == lesson.studentId)!;
            studentLessons.push({ lesson, student });
        });
        return studentLessons;
    }
}