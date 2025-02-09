
export class RecoveryLessonService {

    private static _instance: RecoveryLessonService | null = null;

    public static get instance(): RecoveryLessonService {
        if (!this._instance) this._instance = new RecoveryLessonService();
        return this._instance;
    }

    public async scheduleRecovery() {

    }

    public async cancelRecoveryLesson() {
        
    }

    public async cancelScheduledRecoveryLesson() {
        
    }
}