// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import { en, it } from 'vuetify/locale'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#F7F9FC',
        surface: '#FFFFFF',
        primary: '#2563EB',
        'primary-darken-1': '#1D4ED8',
        secondary: '#64748B',
        'secondary-darken-1': '#475569',
        'on-background': '#172033',
        'on-surface': '#172033',
        error: '#EF5B5B',
        info: '#4DA3FF',
        success: '#34C27A',
        warning: '#F5B83D',
        'blue-grey-lighten': '#37474F'
    }
}
const myCustomDarkTheme = {
    dark: true,
    colors: {
        success: '#78dc77',
        secondary: '#000000',
        primary: '#cfbdff',
        info: '#9ecaff',
        'blue-grey-lighten': '#ECEFF1'
    }
}

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents
    },
    directives,
    // icons: {
    //     defaultSet: 'mdi',
    //     aliases,
    //     sets: {
    //         mdi
    //     }
    // },
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
            myCustomDarkTheme
        }
    },
    locale: {
        locale: 'it',
        fallback: 'en',
        messages: { en, it },
    },
    date: {
        locale: {
            it: 'it-IT',
        },
    },
})

export default vuetify
