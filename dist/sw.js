if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/BackButton.vue_vue_type_script_setup_true_lang-C8dZMgDG.js",revision:null},{url:"assets/CalendarView-urxRyzNs.js",revision:null},{url:"assets/DailyLessonCalendar-DC6ciTLI.js",revision:null},{url:"assets/DailyLessonCalendar-Lln_Agx3.css",revision:null},{url:"assets/DailyLessonView-DfBylawx.js",revision:null},{url:"assets/DebuggerView-C9ah2lQX.css",revision:null},{url:"assets/DebuggerView-cl8zKO-d.js",revision:null},{url:"assets/DeleteDialog.vue_vue_type_script_setup_true_lang-DHWn9YE8.js",revision:null},{url:"assets/HomeView-Cnsps_Vq.js",revision:null},{url:"assets/index-DCVIDi32.css",revision:null},{url:"assets/index-DjUe38IL.js",revision:null},{url:"assets/index.esm-Bofgu8vL.js",revision:null},{url:"assets/lesson-group-service-DG5wxCOe.js",revision:null},{url:"assets/LoginView-Eq9cGhYA.js",revision:null},{url:"assets/ManageSchoolView-dinIxp75.css",revision:null},{url:"assets/ManageSchoolView-Vi-QyF6Q.js",revision:null},{url:"assets/model-CTcth0Ot.js",revision:null},{url:"assets/schedule-x-vue-dDfllttq.js",revision:null},{url:"assets/school-repository-DwlukrFv.js",revision:null},{url:"assets/school-service-BKRy073a.js",revision:null},{url:"assets/SchoolEditor.vue_vue_type_script_setup_true_lang-Do8_Oy3A.js",revision:null},{url:"assets/SchoolLessonView-ChemwIBp.js",revision:null},{url:"assets/SchoolView-BbT9Qfp_.js",revision:null},{url:"assets/SchoolView-WJSNbe9e.css",revision:null},{url:"assets/SettingsView-DD1QV29J.js",revision:null},{url:"index.html",revision:"e2cbaff221652565a12a97c0c19aada6"},{url:"registerSW.js",revision:"50fde22cc7d4dee5cb5efd0961925123"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"manifest.webmanifest",revision:"c6ef15283b404691ed51c3121cca3783"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
