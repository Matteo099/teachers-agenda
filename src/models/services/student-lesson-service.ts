import type { Ref } from "vue";
import type { DailyLesson, School, Student, StudentLesson } from "../model";
import { arraysHaveSameElements } from "../utils";
import { StudentService } from "./student-service";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";

export class StudentLessonService {

    private static _instance: StudentLessonService | null = null;

    public static get instance(): StudentLessonService {
        if (!this._instance) this._instance = new StudentLessonService();
        return this._instance;
    }

    public async getStudentLesson(dailyLesson: DailyLesson, stundetIds?: string[]): Promise<StudentLesson[]> {
        stundetIds ??= dailyLesson.lessons.map(l => l.studentId);
        const data = await StudentService.instance.getStudentsOfSchoolWithIds(dailyLesson.schoolId, stundetIds);
        return dailyLesson.lessons.filter(l => !l.hiddenForDate).map(l => {
            const s = data.find(st => st.id == l.studentId)!;
            return { lesson: l, student: s };
        }).filter(sl => !!sl.student);
    }

    public async updateStudentLesson(dailyLesson: DailyLesson, studentLessons: StudentLesson[], loading?: Ref<boolean>): Promise<StudentLesson[]> {
        const currentStudentsId: string[] = studentLessons.map(s => s.lesson.studentId);
        const newStudentsId: string[] = dailyLesson.lessons.map(l => l.studentId);

        const differentStudents = !arraysHaveSameElements(currentStudentsId, newStudentsId);
        let students: Student[] = studentLessons.map(sl => sl.student);
        if (differentStudents) {
            if (loading) loading.value = true
            const stundetIds = dailyLesson.lessons.map(l => l.studentId);
            students = await StudentService.instance.getStudentsOfSchoolWithIds(dailyLesson.schoolId, stundetIds);
            if (loading) loading.value = false
        }

        studentLessons.length = 0;
        dailyLesson.lessons.map(lesson => {
            const student = students.find(st => st.id == lesson.studentId);
            if (student) studentLessons.push({ lesson, student });
        });
        return studentLessons;
    }

    public async hideStudentForDate(dailyLesson: DailyLesson, studentId: string, school?: School): Promise<void> {
        const lesson = dailyLesson.lessons.find(l => l.studentId === studentId);
        if (!lesson) return;
        lesson.hiddenForDate = true;
        delete lesson.biweeklyAutoHidden;
        delete lesson.biweeklyVisibilityOverride;
        if (school) await DailyLessonService.instance.save(dailyLesson, { school });
        else await DailyLessonRepository.instance.save(dailyLesson, dailyLesson.id);
    }

    public async showStudentForDate(dailyLesson: DailyLesson, studentId: string, school?: School): Promise<void> {
        const lesson = dailyLesson.lessons.find(l => l.studentId === studentId);
        if (!lesson) return;
        lesson.hiddenForDate = false;
        if (lesson.biweeklyAutoHidden) {
            delete lesson.biweeklyAutoHidden;
            lesson.biweeklyVisibilityOverride = true;
        }
        await DailyLessonService.instance.save(dailyLesson, school ? { school } : undefined);
    }
}
