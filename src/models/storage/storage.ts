export type UserSettings = { 
    name: string,
    debuggerEnabled: boolean
}

export type LocalStorageValues = {
    theme: string,
    userSettings: UserSettings,
    lastLogin: Date,
}

export type LocalStorageKeys = keyof LocalStorageValues
