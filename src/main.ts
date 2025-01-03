import '@mdi/font/css/materialdesignicons.css';
import '@schedule-x/theme-default/dist/index.css';
import 'vue3-toastify/dist/index.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import type { ToastContainerOptions } from 'vue3-toastify';
import Vue3Toastify from 'vue3-toastify';
import { VueFire, VueFireAuth } from 'vuefire';
import App from './App.vue';
import getFirebase from './plugins/firebase';
import vuetify from './plugins/vuetify';
import router from './router';
import { interceptConsole } from './plugins/interceptor';

if(import.meta.env.VITE_ENABLE_IN_APP_DEBUGGER.toLowerCase() === "true") interceptConsole();

const { firebaseApp } = getFirebase()
const app = createApp(App)
app.config.performance = true;

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ]
})
app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);

app.mount('#app')
