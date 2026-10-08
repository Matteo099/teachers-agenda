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
        background: '#101827',
        surface: '#1B2638',
        primary: '#8FB6FF',
        'primary-darken-1': '#6C9BF2',
        secondary: '#A4B3CA',
        'secondary-darken-1': '#8799B3',
        'on-background': '#E9EFF8',
        'on-surface': '#E9EFF8',
        error: '#FF8F92',
        info: '#8BC5FF',
        success: '#75D6A0',
        warning: '#F4CC75',
        'blue-grey-lighten': '#D2DCEB'
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
