import '@mdi/font/css/materialdesignicons.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import getFirebase from './plugins/firebase'

const { firebaseApp } = getFirebase()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ]
})

app.mount('#app')
