if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/CalendarView-DQukxlX4.js",revision:null},{url:"assets/DailyLessonCalendar-Lln_Agx3.css",revision:null},{url:"assets/DailyLessonCalendar-yViGE9nL.js",revision:null},{url:"assets/DailyLessonView-CFU1zcG9.js",revision:null},{url:"assets/HomeView-B1BkfmrB.js",revision:null},{url:"assets/index-Ct3ItT6N.css",revision:null},{url:"assets/index-D9byFOU4.js",revision:null},{url:"assets/index.esm-BZ-Ns26G.js",revision:null},{url:"assets/lesson-group-service-4WGJTZ9_.js",revision:null},{url:"assets/LoginView-CUhuUOKW.js",revision:null},{url:"assets/ManageSchoolView-a1JOQN3N.js",revision:null},{url:"assets/ManageSchoolView-dinIxp75.css",revision:null},{url:"assets/schedule-x-vue-BQ0ZfpRH.js",revision:null},{url:"assets/school-repository-B0jre010.js",revision:null},{url:"assets/school-service-BrPAa7Bb.js",revision:null},{url:"assets/SchoolEditor.vue_vue_type_script_setup_true_lang-DrQN0U0S.js",revision:null},{url:"assets/SchoolLessonView-DRnnrxvA.js",revision:null},{url:"assets/SchoolView-C7z9mBDA.css",revision:null},{url:"assets/SchoolView-vDkGtVPr.js",revision:null},{url:"assets/v4-59mANDU3.js",revision:null},{url:"index.html",revision:"8d9438eb8e6979d30bff8dd8905dc639"},{url:"registerSW.js",revision:"50fde22cc7d4dee5cb5efd0961925123"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"manifest.webmanifest",revision:"c6ef15283b404691ed51c3121cca3783"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
