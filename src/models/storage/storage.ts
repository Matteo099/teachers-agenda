export type UserSettings = {name: string}

export type LocalStorageValues = {
    theme: string,
    userSettings: UserSettings,
    lastLogin: Date,
}

export type LocalStorageKeys = keyof LocalStorageValues
