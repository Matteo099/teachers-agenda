if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const c=e=>n(e,d),t={module:{uri:d},exports:o,require:c};i[d]=Promise.all(s.map((e=>t[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-_ERB04Xy.css",revision:null},{url:"assets/index-Bzf3STlp.js",revision:null},{url:"index.html",revision:"9d65020fd056d0c4dfbd995fcd7d4b6b"},{url:"registerSW.js",revision:"50fde22cc7d4dee5cb5efd0961925123"},{url:"favicon.ico",revision:"62ad7756db6ad5d562dca327e1046852"},{url:"img/icons/android-chrome-192x192.png",revision:"4cd895115d69651641a88d3c12f0bced"},{url:"img/icons/android-chrome-512x512.png",revision:"d71934480d0b61952ce4fe3c81bf6ee8"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"manifest.webmanifest",revision:"c6ef15283b404691ed51c3121cca3783"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
