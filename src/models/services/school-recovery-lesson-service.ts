import { yyyyMMdd, type DailyLesson, type IyyyyMMdd, type SchoolRecoveryLesson, type StudentLesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { SchoolRecoveryLessonRepository } from "../repositories/school-recovery-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";
import { StudentService } from "./student-service";

export type ExtendedStudentLesson = StudentLesson & { date: yyyyMMdd; dailyLessonId: ID, originalDailyLesson?: DailyLesson };
export interface ExtendedSchoolRecoveryLesson {
    recoveryMap: { type: 'unset' | 'pending' | 'done'; recoveries: ExtendedStudentLesson[] }[]
    // /**
    //  * List of dailyLessonIds containing lesson with ABSENT status and no recovery object
    //  */
    // unsetRecoveries: StudentLesson[];

    // /**
    //  * List of dailyLessonIds containing lesson with ABSENT status and recovery lesson defined, but lesson is not yet done (status = NONE)
    //  */
    // pendingRecoveries: StudentLesson[];

    // /**
    //  * List of dailyLessonIds containing lesson with a recovery object (origin = 'original') and status = PRESENT
    //  */
    // doneRecoveries: StudentLesson[];

    schoolId: string;
}

export class SchoolRecoveryLessonService {

    private static _instance: SchoolRecoveryLessonService | null = null;

    public static get instance(): SchoolRecoveryLessonService {
        if (!this._instance) this._instance = new SchoolRecoveryLessonService();
        return this._instance;
    }

    public async computeDailyLessons(recoveries: SchoolRecoveryLesson): Promise<ExtendedSchoolRecoveryLesson> {
        console.log(recoveries)
        const unsetRecoveryLessons = await Promise.all(recoveries.unsetRecoveries.map(id => DailyLessonRepository.instance.get(id.dailyLessonId)));
        console.log(unsetRecoveryLessons)
        const pendingRecoveryLessons = await Promise.all(recoveries.pendingRecoveries.map(id => DailyLessonRepository.instance.get(id.dailyLessonId)));
        console.log(pendingRecoveryLessons)
        const doneRecoveryLessons = await Promise.all(recoveries.doneRecoveries.map(id => {
            const dl = DailyLessonRepository.instance.get(id.dailyLessonId)
            // if you want to retrive the original daily lesson:
            // const ddl = await dl;
            // const less = ddl?.lessons.find(l => l.lessonId == id.lessonId);
            // const originalDailyLesson = less?.recovery?.dailyLessonId
            // const oDl = DailyLessonRepository.instance.get(originalDailyLesson!);
            return dl;
        }));
        console.log(doneRecoveryLessons)
        const students = await StudentService.instance.getStudentsOfSchool(recoveries.schoolId);
        console.log(students)

        const unsetRecoveries: ExtendedStudentLesson[] = [];
        const pendingRecoveries: ExtendedStudentLesson[] = [];
        const doneRecoveries: ExtendedStudentLesson[] = [];
        for (const dailyLesson of unsetRecoveryLessons.filter(l => !!l)) {
            dailyLesson.lessons.forEach(l => {
                const s = students.find(st => st.id == l.studentId);
                if (!s) return;
                unsetRecoveries.push({ ...l, ...s, date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date), dailyLessonId: dailyLesson.id });
            })
        }
        for (const dailyLesson of pendingRecoveryLessons.filter(l => !!l)) {
            dailyLesson.lessons.forEach(l => {
                const s = students.find(st => st.id == l.studentId);
                if (!s) return;
                pendingRecoveries.push({ ...l, ...s, date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date), dailyLessonId: dailyLesson.id });
            })
        }
        for (const dailyLesson of doneRecoveryLessons.filter(l => !!l)) {
            dailyLesson.lessons.forEach(l => {
                const s = students.find(st => st.id == l.studentId);
                if (!s) return;
                doneRecoveries.push({ ...l, ...s, date: yyyyMMdd.fromIyyyyMMdd(dailyLesson.date), dailyLessonId: dailyLesson.id });
            })
        }

        return {
            recoveryMap: [
                { type: 'unset', recoveries: unsetRecoveries },
                { type: 'pending', recoveries: pendingRecoveries },
                { type: 'done', recoveries: doneRecoveries },
            ],
            schoolId: recoveries.schoolId
        }
    }

    public async getOrCreate(schoolId: ID): Promise<SchoolRecoveryLesson> {
        const doc = await SchoolRecoveryLessonRepository.instance.getDoc(schoolId)
        if (doc.exists()) return doc.data();

        const srl: SchoolRecoveryLesson = {
            unsetRecoveries: [],
            pendingRecoveries: [],
            doneRecoveries: [],
            schoolId
        }
        await SchoolRecoveryLessonRepository.instance.create(srl);
        return srl;
    }

    public async setUnsetRecovery(dailyLessonId: ID, schoolId: ID, ...lessonIds: ID[]) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);
        lessonIds.forEach(async lessonId => {
            const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const pendingI = recovery.pendingRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const doneI = recovery.doneRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            if (unsetI == -1) recovery.unsetRecoveries.push({ lessonId, dailyLessonId });
            if (pendingI != -1) {
                const res = recovery.pendingRecoveries.splice(pendingI, 1);
                // const recoveryLesson = createOrGetDailyLesson(datePicker.value).addLesson().setRecovery({'original': recovery.value}).save()
                // createOrGetDailyLesson(recovery.value).getLesson().setRecovery({'recovery': recoveryLesson}).save()
            }
            if (doneI != -1) {
                const res = recovery.doneRecoveries.splice(doneI, 1);
                // const recoveryLesson = createOrGetDailyLesson(datePicker.value).addLesson().setRecovery({'original': recovery.value}).save()
                // createOrGetDailyLesson(recovery.value).getLesson().setRecovery({'recovery': recoveryLesson}).save()
            }
        })
        SchoolRecoveryLessonRepository.instance.update(recovery, schoolId);
    }

    public async setPendingRecovery(dailyLessonId: ID, schoolId: ID, ...lessonIds: ID[]) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);
        lessonIds.forEach(lessonId => {
            const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const pendingI = recovery.pendingRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const doneI = recovery.doneRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            if (unsetI != -1) recovery.unsetRecoveries.splice(unsetI, 1);
            if (pendingI == -1) recovery.pendingRecoveries.push({ lessonId, dailyLessonId });
            if (doneI != -1) recovery.doneRecoveries.splice(doneI, 1);
        })
        SchoolRecoveryLessonRepository.instance.update(recovery, schoolId);
    }

    public async removeFromRecovery(dailyLessonId: ID, schoolId: ID, ...lessonIds: ID[]) {
        const recovery = await SchoolRecoveryLessonService.instance.getOrCreate(schoolId);
        lessonIds.forEach(lessonId => {
            const unsetI = recovery.unsetRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const pendingI = recovery.pendingRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            const doneI = recovery.doneRecoveries.findIndex(l => l.dailyLessonId == dailyLessonId && l.lessonId == lessonId);
            if (unsetI == -1 && pendingI == -1 && doneI == -1) return;

            if (unsetI != -1) recovery.unsetRecoveries.splice(unsetI, 1);
            if (pendingI != -1) recovery.pendingRecoveries.splice(pendingI, 1);
            if (doneI != -1) recovery.doneRecoveries.splice(doneI, 1);
        });
        SchoolRecoveryLessonRepository.instance.update(recovery, schoolId);
    }
}