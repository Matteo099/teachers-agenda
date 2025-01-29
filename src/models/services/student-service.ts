import { documentId, where } from "firebase/firestore";
import { yyyyMMdd, type IyyyyMMdd, type Student } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { StudentRepository } from "../repositories/student-repository";
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

    public async setTrialDone(student: Student, dailyLessonDate?: IyyyyMMdd, dailyLessonId?: ID): Promise<Student> {
        const _student = await StudentRepository.instance.get(student.id);
        if (!_student) return student;
        if (_student.trial?.done) return _student;

        _student.trial = { done: true }
        if (dailyLessonDate) _student.trial.dailyLessonDate = dailyLessonDate;
        if (dailyLessonId) _student.trial.dailyLessonId = dailyLessonId;
        await StudentRepository.instance.save(_student, _student.id);
        return _student;
    }

    public async unsetTrial(student: Student): Promise<Student> {
        const _student = await StudentRepository.instance.get(student.id);
        if (!_student) return student;
        if (!_student.trial) return _student;
        delete _student.trial;
        await StudentRepository.instance.save(_student, _student.id);
        return _student;
    }

    public getLevelByDate(student: Student, date: IyyyyMMdd): string {
        let level = student.level;
        if (student.levelHistory) {
            const lv = student.levelHistory.find(l => {
                l.from >= date && date > (l.to ?? yyyyMMdd.today().toIyyyyMMdd())
            });
            level = lv?.level ?? level;
        }
        return level;
    }
}