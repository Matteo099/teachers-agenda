export type UserSettings = { 
    name: string,
}

export type LocalStorageValues = {
    debugEnabled: boolean,
    loadTodayLesson: boolean,
    theme: string,
    userSettings: UserSettings,
    lastLogin: Date,
}

export type LocalStorageKeys = keyof LocalStorageValues
