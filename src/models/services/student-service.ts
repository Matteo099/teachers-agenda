import { Timestamp, documentId, where } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { LessonStatus, yyyyMMdd, type IyyyyMMdd, type Student, type DailyLesson, type WeeklyLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { StudentRepository } from "../repositories/student-repository";
import { WeeklyLessonRepository } from '../repositories/weekly-lesson-repository';
import { nameof } from "../utils";
import type { IQueryEvent } from "../utils/event";
import { isStudentArchivedOnDate, reconcileStudentArchive } from '../student-archive';

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

    public async setArchived(studentId: ID, archived: boolean, date: IyyyyMMdd = yyyyMMdd.today().toIyyyyMMdd()): Promise<void> {
        const student = await StudentRepository.instance.get(studentId);
        if (!student) throw new Error("Student not found");
        const archiveHistory = [...(student.archiveHistory ?? []).filter(change => change.date !== date), { date, archived }]
            .sort((a, b) => a.date.localeCompare(b.date));
        const updatedStudent = { ...student, archiveHistory, removed: archiveHistory[archiveHistory.length - 1]!.archived, updatedAt: Timestamp.now() };
        await StudentRepository.instance.save(updatedStudent, studentId);

        const effectiveDate = yyyyMMdd.fromIyyyyMMdd(date).toDate();
        effectiveDate.setDate(effectiveDate.getDate() + 1);
        const from = yyyyMMdd.fromDate(effectiveDate).toIyyyyMMdd();
        const dailyLessons = await DailyLessonRepository.instance.getAll(
            where(nameof<DailyLesson>('schoolId'), '==', student.schoolId),
            where(nameof<DailyLesson>('date'), '>=', from));
        const weeklyLessons = archived ? [] : await WeeklyLessonRepository.instance.getAll(
            where(nameof<WeeklyLesson>('schoolId'), '==', student.schoolId));
        for (const daily of dailyLessons) {
            let corrected = reconcileStudentArchive(daily, updatedStudent);
            if (!archived && !isStudentArchivedOnDate(updatedStudent, daily.date) &&
                !corrected.lessons.some(lesson => lesson.studentId === studentId) &&
                !(corrected.archivedLessons ?? []).some(lesson => lesson.studentId === studentId)) {
                const dayOfWeek = yyyyMMdd.fromIyyyyMMdd(daily.date).toDate().getDay();
                const scheduled = weeklyLessons.find(weekly => weekly.dayOfWeek === dayOfWeek &&
                    weekly.from <= daily.date && daily.date <= weekly.to && !weekly.exclude.includes(daily.date) &&
                    weekly.schedule.some(lesson => lesson.studentId === studentId))?.schedule.find(lesson => lesson.studentId === studentId);
                if (scheduled) corrected = { ...corrected, lessons: [...corrected.lessons, {
                    lessonId: uuidv4(), studentId, status: LessonStatus.NONE,
                    startTime: scheduled.startTime, endTime: scheduled.endTime,
                    createdAt: Timestamp.now(), updatedAt: Timestamp.now()
                }].sort((a, b) => a.startTime - b.startTime) };
            }
            if (corrected !== daily) await DailyLessonRepository.instance.save({ ...corrected, lastSalaryUpdate: Timestamp.now() }, daily.id);
        }
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
