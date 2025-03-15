import { Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { DeleteMode, LessonStatus, type DailyLesson, type Lesson } from "../model";
import type { ID } from "../repositories/abstract-repository";
import { SchoolRecoveryLessonService } from "./school-recovery-lesson-service";
import { StudentService } from "./student-service";
import { DailyLessonRepository } from "../repositories/daily-lesson-repository";
import { DailyLessonService } from "./daily-lesson-service";

export class LessonService {

    private lessonIds: ID[] = [];

    public async updateLessonStatus(status: LessonStatus, dailyLesson: DailyLesson, lesson: Lesson) {
        const schoolId: ID = dailyLesson.schoolId;
        const wasTrial = lesson.status == LessonStatus.TRIAL;
        const wasMoved = !!lesson.moved;

        lesson.status = status;

        if (status == LessonStatus.TRIAL) {
            await StudentService.instance.setTrialDone(lesson.studentId, dailyLesson.date, dailyLesson.id);
        } else if (wasTrial) {
            await StudentService.instance.unsetTrial(lesson.studentId);
        } else if (wasMoved) {
            await this.cancelMovedLesson(dailyLesson, lesson);
        } else {
            await SchoolRecoveryLessonService.instance.updateRecoveries(schoolId, dailyLesson.id, lesson);
        }
    }

    public async resetLesson(dailyLesson: DailyLesson, lesson: Lesson, deleteMode?: DeleteMode) {
        if (this.lessonIds.includes(lesson.lessonId)) return;

        this.lessonIds.push(lesson.lessonId);
        await this.updateLessonStatus(LessonStatus.NONE, dailyLesson, lesson);
        await SchoolRecoveryLessonService.instance.resetRecoveries(dailyLesson, lesson, deleteMode);
        this.lessonIds = this.lessonIds.filter(i => i != lesson.lessonId);
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

    public async cancelMovedLesson(originalDailyLesson: DailyLesson, lesson: Lesson) {
        // if has moved, delete the moved lesson
        if (lesson.moved) {
            // delete moved lesson
            const movedDailyLesson = await DailyLessonRepository.instance.get(lesson.moved.lessonRef.dailyLessonId);
            const movedLesson = movedDailyLesson?.lessons.find(l => l.lessonId == lesson.moved!.lessonRef.lessonId)
            if (movedDailyLesson && movedLesson) {
                await DailyLessonService.instance.deleteLessons(movedDailyLesson, true, [movedLesson]);
            }
            else console.warn("unable to remove moved lesson")

            delete lesson.moved;
            console.log(originalDailyLesson, lesson);
            await DailyLessonRepository.instance.save(originalDailyLesson, originalDailyLesson.id);
        }
    }
}