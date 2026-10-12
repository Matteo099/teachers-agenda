import { Timestamp, documentId, where } from "firebase/firestore";
import { LessonStatus, yyyyMMdd, type IyyyyMMdd, type Student, type WeeklyLesson, type DailyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { StudentRepository } from "../repositories/student-repository";
import { WeeklyLessonRepository } from "../repositories/weekly-lesson-repository";
import { nameof } from "../utils";
import type { IQueryEvent } from "../utils/event";

export class StudentService {
    private static _instance: StudentService | null = null;

    public static get instance(): StudentService {
        if (!this._instance) this._instance = new StudentService();
        return this._instance;
    }

    public async getStudentsOfSchool(id: ID): Promise<Student[]> {
        const _query = where(nameof<Student>('schoolId'), '==', id);
        return StudentRepository.instance.getAll(_query);
    }

    public observeStudentsOfSchool(id: ID): IQueryEvent<Student[]> {
        const _query = where(nameof<Student>('schoolId'), '==', id);
        return StudentRepository.instance.observeAll(_query);
    }

    public async getStudentsOfSchoolWithIds(schoolId: ID, studentIds: string[]): Promise<Student[]> {
        if (studentIds.length == 0) return [];
        const _query1 = where(nameof<Student>('schoolId'), '==', schoolId);
        const _query2 = where(documentId(), 'in', studentIds);
        return StudentRepository.instance.getAll(_query1, _query2);
    }

    public async setArchived(studentId: ID, archived: boolean): Promise<void> {
        const student = await StudentRepository.instance.get(studentId);
        if (!student) throw new Error("Student not found");

        if (archived) {
            const weeklyLessons = await WeeklyLessonRepository.instance.getAll(
                where(nameof<WeeklyLesson>('schoolId'), '==', student.schoolId));
            for (const weekly of weeklyLessons) {
                const schedule = weekly.schedule.filter(lesson => lesson.studentId !== studentId);
                if (schedule.length === weekly.schedule.length) continue;
                if (schedule.length === 0) await WeeklyLessonRepository.instance.delete(weekly.id);
                else await WeeklyLessonRepository.instance.save({ ...weekly, schedule, updatedAt: Timestamp.now() }, weekly.id);
            }

            const futureLessons = await DailyLessonRepository.instance.getAll(
                where(nameof<DailyLesson>('schoolId'), '==', student.schoolId),
                where(nameof<DailyLesson>('date'), '>=', yyyyMMdd.today().toIyyyyMMdd()));
            for (const daily of futureLessons) {
                const lessons = daily.lessons.filter(lesson =>
                    lesson.studentId !== studentId || lesson.status !== LessonStatus.NONE ||
                    !!lesson.recovery || !!lesson.moved || !!lesson.compensation);
                if (lessons.length !== daily.lessons.length) {
                    await DailyLessonRepository.instance.save({ ...daily, lessons }, daily.id);
                }
            }
        }

        await StudentRepository.instance.save({ ...student, removed: archived, updatedAt: Timestamp.now() }, studentId);
    }

    public async setTrialDone(studentId: ID, dailyLessonDate?: IyyyyMMdd, dailyLessonId?: ID): Promise<Student> {
        const _student = await StudentRepository.instance.get(studentId);
        if (!_student) throw new Error("Student not found");
        if (_student.trial?.done) return _student;

        _student.trial = { done: true }
        if (dailyLessonDate) _student.trial.dailyLessonDate = dailyLessonDate;
        if (dailyLessonId) _student.trial.dailyLessonId = dailyLessonId;
        await StudentRepository.instance.save(_student, _student.id);
        return _student;
    }

    public async unsetTrial(studentId: ID): Promise<Student> {
        const _student = await StudentRepository.instance.get(studentId);
        if (!_student) throw new Error("Student not found");
        if (!_student.trial) return _student;
        delete _student.trial;
        await StudentRepository.instance.save(_student, _student.id);
        return _student;
    }

    public getLevelByDate(student: Student, date: IyyyyMMdd): string {
        let level = student.level;
        if (student.levelHistory) {
            const lv = student.levelHistory.find(l => {
                return l.from <= date && date <= (l.to ?? yyyyMMdd.today().toIyyyyMMdd());
            });
            level = lv?.level ?? level;
        }
        return level;
    }
}
