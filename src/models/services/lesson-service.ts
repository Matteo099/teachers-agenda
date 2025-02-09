import { Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { LessonStatus, type DailyLesson, type Lesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { MoveLessonService } from "./move-lesson-service";
import { SchoolRecoveryLessonService2 } from "./school-recovery-lesson-service2";
import { StudentService } from "./student-service";

export class LessonService {

    public async updateLessonStatus(status: LessonStatus, dailyLesson: DailyLesson, lesson: Lesson) {
        const schoolId: ID = dailyLesson.schoolId;
        const wasTrial = lesson.status == LessonStatus.TRIAL;
        const wasMoved = lesson.status == LessonStatus.MOVED;

        lesson.status = status;

        if (status == LessonStatus.TRIAL) {
            await StudentService.instance.setTrialDone(lesson.studentId, dailyLesson.date, dailyLesson.id);
        } else if (wasTrial) {
            await StudentService.instance.unsetTrial(lesson.studentId);
        } else if (wasMoved) {
            await MoveLessonService.instance.cancelMovedLesson(schoolId, dailyLesson.id, lesson);
        } else {
            await SchoolRecoveryLessonService2.instance.updateRecoveries(schoolId, dailyLesson.id, lesson);
        }
    }

    public async resetLesson(dailyLesson: DailyLesson, lesson: Lesson) {
        await this.updateLessonStatus(LessonStatus.NONE, dailyLesson, lesson);
        await SchoolRecoveryLessonService2.instance.resetRecoveries(dailyLesson, lesson);
    }

    public createFrom(lesson: Lesson, newId?: ID): Lesson {
        const newLesson: Lesson = {
            lessonId: newId ?? lesson.lessonId,
            studentId: lesson.studentId,
            endTime: lesson.endTime,
            startTime: lesson.startTime,
            status: lesson.status,
            updatedAt: Timestamp.now(),
            createdAt: Timestamp.now()
        };

        if (lesson.moved) newLesson.moved = lesson.moved;
        if (lesson.recovery) newLesson.recovery = lesson.recovery;

        return newLesson;
    }

    public moveLesson(lesson: Lesson, originalDailyLessonId: ID, newDailyLessonId: ID): Lesson {
        const newLesson: Lesson = {
            lessonId: uuidv4(),
            studentId: lesson.studentId,
            endTime: lesson.endTime,
            startTime: lesson.startTime,
            moved: {
                ref: 'original',
                lessonRef: {
                    dailyLessonId: originalDailyLessonId,
                    lessonId: lesson.lessonId
                }
            },
            status: LessonStatus.NONE,
            updatedAt: Timestamp.now(),
            createdAt: Timestamp.now()
        };
        lesson.moved = {
            ref: 'moved',
            lessonRef: {
                dailyLessonId: newDailyLessonId,
                lessonId: newLesson.lessonId
            }
        }
        return newLesson;
    }
}