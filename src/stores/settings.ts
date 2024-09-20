import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state() {
    return {
      darkMode: false
    } as {
      darkMode: boolean
    }
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  },
})
