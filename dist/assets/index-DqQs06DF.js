const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-CSsXZNhU.js","assets/SchoolEditor.vue_vue_type_script_setup_true_lang-B56HtjZd.js","assets/school-repository-mPHwUDC0.js","assets/index.esm-B6FxmsNf.js","assets/ManageSchoolView-ei1Sb7CX.js","assets/ManageSchoolView-dinIxp75.css","assets/SchoolView-CUG-EmHR.js","assets/school-service-BlitUF5l.js","assets/v4-DOMLpR64.js","assets/schedule-x-vue-BELKaWgn.js","assets/DailyLessonCalendar-BfP80PJ-.js","assets/DailyLessonCalendar-Lln_Agx3.css","assets/lesson-group-service-BkAu8ZDW.js","assets/SchoolView-C7z9mBDA.css","assets/SchoolLessonView-B2kquOTf.js","assets/DailyLessonView-Rursr0R9.js","assets/CalendarView-K9eAvWdz.js","assets/LoginView-BjTYVZIR.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pp(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const mt={},Co=[],sr=()=>{},RD=()=>!1,zf=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Rp=e=>e.startsWith("onUpdate:"),Xt=Object.assign,xp=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xD=Object.prototype.hasOwnProperty,pt=(e,t)=>xD.call(e,t),Be=Array.isArray,To=e=>qf(e)==="[object Map]",HE=e=>qf(e)==="[object Set]",qe=e=>typeof e=="function",Ht=e=>typeof e=="string",Ms=e=>typeof e=="symbol",Rt=e=>e!==null&&typeof e=="object",jE=e=>(Rt(e)||qe(e))&&qe(e.then)&&qe(e.catch),WE=Object.prototype.toString,qf=e=>WE.call(e),VD=e=>qf(e).slice(8,-1),zE=e=>qf(e)==="[object Object]",Vp=e=>Ht(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,au=Pp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gf=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},DD=/-(\w)/g,ai=Gf(e=>e.replace(DD,(t,n)=>n?n.toUpperCase():"")),ND=/\B([A-Z])/g,Ls=Gf(e=>e.replace(ND,"-$1").toLowerCase()),gr=Gf(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rm=Gf(e=>e?`on${gr(e)}`:""),ii=(e,t)=>!Object.is(e,t),Ad=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},qE=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},kv=e=>{const t=parseFloat(e);return isNaN(t)?e:t},OD=e=>{const t=Ht(e)?Number(e):NaN;return isNaN(t)?e:t};let ww;const GE=()=>ww||(ww=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kf(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Ht(i)?BD(i):Kf(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Ht(e)||Rt(e))return e}const MD=/;(?![^(]*\))/g,LD=/:([^]+)/,FD=/\/\*[^]*?\*\//g;function BD(e){const t={};return e.replace(FD,"").split(MD).forEach(n=>{if(n){const i=n.split(LD);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Yf(e){let t="";if(Ht(e))t=e;else if(Be(e))for(let n=0;n<e.length;n++){const i=Yf(e[n]);i&&(t+=i+" ")}else if(Rt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function oQ(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ht(t)&&(e.class=Yf(t)),n&&(e.style=Kf(n)),e}const $D="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",UD=Pp($D);function KE(e){return!!e||e===""}const YE=e=>!!(e&&e.__v_isRef===!0),hs=e=>Ht(e)?e:e==null?"":Be(e)||Rt(e)&&(e.toString===WE||!qe(e.toString))?YE(e)?hs(e.value):JSON.stringify(e,QE,2):String(e),QE=(e,t)=>YE(t)?QE(e,t.value):To(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[xm(i,s)+" =>"]=r,n),{})}:HE(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>xm(n))}:Ms(t)?xm(t):Rt(t)&&!Be(t)&&!zE(t)?String(t):t,xm=(e,t="")=>{var n;return Ms(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qn;class XE{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qn,!t&&Qn&&(this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Qn;try{return Qn=this,t()}finally{Qn=n}}}on(){Qn=this}off(){Qn=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function lc(e){return new XE(e)}function JE(){return Qn}function Pn(e,t=!1){Qn&&Qn.cleanups.push(e)}let Et;const Vm=new WeakSet;class ZE{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qn&&Qn.active&&Qn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vm.has(this)&&(Vm.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tC(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sw(this),nC(this);const t=Et,n=Bi;Et=this,Bi=!0;try{return this.fn()}finally{iC(this),Et=t,Bi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Op(t);this.deps=this.depsTail=void 0,Sw(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vm.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Av(this)&&this.run()}get dirty(){return Av(this)}}let eC=0,ou;function tC(e){e.flags|=8,e.next=ou,ou=e}function Dp(){eC++}function Np(){if(--eC>0)return;let e;for(;ou;){let t=ou;for(ou=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function nC(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function iC(e){let t,n=e.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Op(i),HD(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=n}function Av(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(rC(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function rC(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Iu))return;e.globalVersion=Iu;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Av(e)){e.flags&=-3;return}const n=Et,i=Bi;Et=e,Bi=!0;try{nC(e);const r=e.fn(e._value);(t.version===0||ii(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{Et=n,Bi=i,iC(e),e.flags&=-3}}function Op(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i),!n.subs)if(n.computed){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Op(s,!0)}else n.map&&!t&&(n.map.delete(n.key),n.map.size||Eu.delete(n.target))}function HD(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Bi=!0;const sC=[];function Fs(){sC.push(Bi),Bi=!1}function Bs(){const e=sC.pop();Bi=e===void 0?!0:e}function Sw(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Et;Et=void 0;try{t()}finally{Et=n}}}let Iu=0;class jD{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qf{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(t){if(!Et||!Bi||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new jD(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,Et.flags&4&&aC(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(t){this.version++,Iu++,this.notify(t)}notify(t){Dp();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Np()}}}function aC(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)aC(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const Eu=new WeakMap,ma=Symbol(""),Pv=Symbol(""),Cu=Symbol("");function Wn(e,t,n){if(Bi&&Et){let i=Eu.get(e);i||Eu.set(e,i=new Map);let r=i.get(n);r||(i.set(n,r=new Qf),r.target=e,r.map=i,r.key=n),r.track()}}function $r(e,t,n,i,r,s){const a=Eu.get(e);if(!a){Iu++;return}const o=l=>{l&&l.trigger()};if(Dp(),t==="clear")a.forEach(o);else{const l=Be(e),u=l&&Vp(n);if(l&&n==="length"){const c=Number(i);a.forEach((d,h)=>{(h==="length"||h===Cu||!Ms(h)&&h>=c)&&o(d)})}else switch(n!==void 0&&o(a.get(n)),u&&o(a.get(Cu)),t){case"add":l?u&&o(a.get("length")):(o(a.get(ma)),To(e)&&o(a.get(Pv)));break;case"delete":l||(o(a.get(ma)),To(e)&&o(a.get(Pv)));break;case"set":To(e)&&o(a.get(ma));break}}Np()}function WD(e,t){var n;return(n=Eu.get(e))==null?void 0:n.get(t)}function lo(e){const t=xe(e);return t===e?t:(Wn(t,"iterate",Cu),Ri(e)?t:t.map(Mn))}function Xf(e){return Wn(e=xe(e),"iterate",Cu),e}const zD={__proto__:null,[Symbol.iterator](){return Dm(this,Symbol.iterator,Mn)},concat(...e){return lo(this).concat(...e.map(t=>Be(t)?lo(t):t))},entries(){return Dm(this,"entries",e=>(e[1]=Mn(e[1]),e))},every(e,t){return Ar(this,"every",e,t,void 0,arguments)},filter(e,t){return Ar(this,"filter",e,t,n=>n.map(Mn),arguments)},find(e,t){return Ar(this,"find",e,t,Mn,arguments)},findIndex(e,t){return Ar(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ar(this,"findLast",e,t,Mn,arguments)},findLastIndex(e,t){return Ar(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ar(this,"forEach",e,t,void 0,arguments)},includes(...e){return Nm(this,"includes",e)},indexOf(...e){return Nm(this,"indexOf",e)},join(e){return lo(this).join(e)},lastIndexOf(...e){return Nm(this,"lastIndexOf",e)},map(e,t){return Ar(this,"map",e,t,void 0,arguments)},pop(){return Bl(this,"pop")},push(...e){return Bl(this,"push",e)},reduce(e,...t){return Iw(this,"reduce",e,t)},reduceRight(e,...t){return Iw(this,"reduceRight",e,t)},shift(){return Bl(this,"shift")},some(e,t){return Ar(this,"some",e,t,void 0,arguments)},splice(...e){return Bl(this,"splice",e)},toReversed(){return lo(this).toReversed()},toSorted(e){return lo(this).toSorted(e)},toSpliced(...e){return lo(this).toSpliced(...e)},unshift(...e){return Bl(this,"unshift",e)},values(){return Dm(this,"values",Mn)}};function Dm(e,t,n){const i=Xf(e),r=i[t]();return i!==e&&!Ri(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const qD=Array.prototype;function Ar(e,t,n,i,r,s){const a=Xf(e),o=a!==e&&!Ri(e),l=a[t];if(l!==qD[t]){const d=l.apply(e,s);return o?Mn(d):d}let u=n;a!==e&&(o?u=function(d,h){return n.call(this,Mn(d),h,e)}:n.length>2&&(u=function(d,h){return n.call(this,d,h,e)}));const c=l.call(a,u,i);return o&&r?r(c):c}function Iw(e,t,n,i){const r=Xf(e);let s=n;return r!==e&&(Ri(e)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,e)}):s=function(a,o,l){return n.call(this,a,Mn(o),l,e)}),r[t](s,...i)}function Nm(e,t,n){const i=xe(e);Wn(i,"iterate",Cu);const r=i[t](...n);return(r===-1||r===!1)&&Bp(n[0])?(n[0]=xe(n[0]),i[t](...n)):r}function Bl(e,t,n=[]){Fs(),Dp();const i=xe(e)[t].apply(e,n);return Np(),Bs(),i}const GD=Pp("__proto__,__v_isRef,__isVue"),oC=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ms));function KD(e){Ms(e)||(e=String(e));const t=xe(this);return Wn(t,"has",e),t.hasOwnProperty(e)}class lC{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?oN:fC:s?dC:cC).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Be(t);if(!r){let l;if(a&&(l=zD[n]))return l;if(n==="hasOwnProperty")return KD}const o=Reflect.get(t,n,Bt(t)?t:i);return(Ms(n)?oC.has(n):GD(n))||(r||Wn(t,"get",n),s)?o:Bt(o)?a&&Vp(n)?o:o.value:Rt(o)?r?uc(o):Ut(o):o}}class uC extends lC{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=ba(s);if(!Ri(i)&&!ba(i)&&(s=xe(s),i=xe(i)),!Be(t)&&Bt(s)&&!Bt(i))return l?!1:(s.value=i,!0)}const a=Be(t)&&Vp(n)?Number(n)<t.length:pt(t,n),o=Reflect.set(t,n,i,Bt(t)?t:r);return t===xe(r)&&(a?ii(i,s)&&$r(t,"set",n,i):$r(t,"add",n,i)),o}deleteProperty(t,n){const i=pt(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&$r(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Ms(n)||!oC.has(n))&&Wn(t,"has",n),i}ownKeys(t){return Wn(t,"iterate",Be(t)?"length":ma),Reflect.ownKeys(t)}}class YD extends lC{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const QD=new uC,XD=new YD,JD=new uC(!0);const Mp=e=>e,Jf=e=>Reflect.getPrototypeOf(e);function nd(e,t,n=!1,i=!1){e=e.__v_raw;const r=xe(e),s=xe(t);n||(ii(t,s)&&Wn(r,"get",t),Wn(r,"get",s));const{has:a}=Jf(r),o=i?Mp:n?Up:Mn;if(a.call(r,t))return o(e.get(t));if(a.call(r,s))return o(e.get(s));e!==r&&e.get(t)}function id(e,t=!1){const n=this.__v_raw,i=xe(n),r=xe(e);return t||(ii(e,r)&&Wn(i,"has",e),Wn(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function rd(e,t=!1){return e=e.__v_raw,!t&&Wn(xe(e),"iterate",ma),Reflect.get(e,"size",e)}function Ew(e,t=!1){!t&&!Ri(e)&&!ba(e)&&(e=xe(e));const n=xe(this);return Jf(n).has.call(n,e)||(n.add(e),$r(n,"add",e,e)),this}function Cw(e,t,n=!1){!n&&!Ri(t)&&!ba(t)&&(t=xe(t));const i=xe(this),{has:r,get:s}=Jf(i);let a=r.call(i,e);a||(e=xe(e),a=r.call(i,e));const o=s.call(i,e);return i.set(e,t),a?ii(t,o)&&$r(i,"set",e,t):$r(i,"add",e,t),this}function Tw(e){const t=xe(this),{has:n,get:i}=Jf(t);let r=n.call(t,e);r||(e=xe(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&$r(t,"delete",e,void 0),s}function kw(){const e=xe(this),t=e.size!==0,n=e.clear();return t&&$r(e,"clear",void 0,void 0),n}function sd(e,t){return function(i,r){const s=this,a=s.__v_raw,o=xe(a),l=t?Mp:e?Up:Mn;return!e&&Wn(o,"iterate",ma),a.forEach((u,c)=>i.call(r,l(u),l(c),s))}}function ad(e,t,n){return function(...i){const r=this.__v_raw,s=xe(r),a=To(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=r[e](...i),c=n?Mp:t?Up:Mn;return!t&&Wn(s,"iterate",l?Pv:ma),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:o?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function ls(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ZD(){const e={get(s){return nd(this,s)},get size(){return rd(this)},has:id,add:Ew,set:Cw,delete:Tw,clear:kw,forEach:sd(!1,!1)},t={get(s){return nd(this,s,!1,!0)},get size(){return rd(this)},has:id,add(s){return Ew.call(this,s,!0)},set(s,a){return Cw.call(this,s,a,!0)},delete:Tw,clear:kw,forEach:sd(!1,!0)},n={get(s){return nd(this,s,!0)},get size(){return rd(this,!0)},has(s){return id.call(this,s,!0)},add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear"),forEach:sd(!0,!1)},i={get(s){return nd(this,s,!0,!0)},get size(){return rd(this,!0)},has(s){return id.call(this,s,!0)},add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear"),forEach:sd(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ad(s,!1,!1),n[s]=ad(s,!0,!1),t[s]=ad(s,!1,!0),i[s]=ad(s,!0,!0)}),[e,n,t,i]}const[eN,tN,nN,iN]=ZD();function Lp(e,t){const n=t?e?iN:nN:e?tN:eN;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(pt(n,r)&&r in i?n:i,r,s)}const rN={get:Lp(!1,!1)},sN={get:Lp(!1,!0)},aN={get:Lp(!0,!1)};const cC=new WeakMap,dC=new WeakMap,fC=new WeakMap,oN=new WeakMap;function lN(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uN(e){return e.__v_skip||!Object.isExtensible(e)?0:lN(VD(e))}function Ut(e){return ba(e)?e:Fp(e,!1,QD,rN,cC)}function hC(e){return Fp(e,!1,JD,sN,dC)}function uc(e){return Fp(e,!0,XD,aN,fC)}function Fp(e,t,n,i,r){if(!Rt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const a=uN(e);if(a===0)return e;const o=new Proxy(e,a===2?i:n);return r.set(e,o),o}function ko(e){return ba(e)?ko(e.__v_raw):!!(e&&e.__v_isReactive)}function ba(e){return!!(e&&e.__v_isReadonly)}function Ri(e){return!!(e&&e.__v_isShallow)}function Bp(e){return e?!!e.__v_raw:!1}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function $p(e){return!pt(e,"__v_skip")&&Object.isExtensible(e)&&qE(e,"__v_skip",!0),e}const Mn=e=>Rt(e)?Ut(e):e,Up=e=>Rt(e)?uc(e):e;function Bt(e){return e?e.__v_isRef===!0:!1}function ee(e){return mC(e,!1)}function me(e){return mC(e,!0)}function mC(e,t){return Bt(e)?e:new cN(e,t)}class cN{constructor(t,n){this.dep=new Qf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:xe(t),this._value=n?t:Mn(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ri(t)||ba(t);t=i?t:xe(t),ii(t,n)&&(this._rawValue=t,this._value=i?t:Mn(t),this.dep.trigger())}}function it(e){return Bt(e)?e.value:e}function xr(e){return qe(e)?e():it(e)}const dN={get:(e,t,n)=>t==="__v_raw"?e:it(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Bt(r)&&!Bt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function vC(e){return ko(e)?e:new Proxy(e,dN)}class fN{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Qf,{get:i,set:r}=t(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function hN(e){return new fN(e)}function $s(e){const t=Be(e)?new Array(e.length):{};for(const n in e)t[n]=gC(e,n);return t}class mN{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return WD(xe(this._object),this._key)}}class vN{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function G(e,t,n){return Bt(e)?e:qe(e)?new vN(e):Rt(e)&&arguments.length>1?gC(e,t,n):ee(e)}function gC(e,t,n){const i=e[t];return Bt(i)?i:new mN(e,t,n)}class gN{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Qf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Iu-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return tC(this),!0}get value(){const t=this.dep.track();return rC(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function pN(e,t,n=!1){let i,r;return qe(e)?i=e:(i=e.get,r=e.set),new gN(i,r,n)}const od={},Yd=new WeakMap;let ra;function yN(e,t=!1,n=ra){if(n){let i=Yd.get(n);i||Yd.set(n,i=[]),i.push(e)}}function _N(e,t,n=mt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,u=P=>r?P:Ri(P)||r===!1||r===0?Dr(P,1):Dr(P);let c,d,h,v,g=!1,p=!1;if(Bt(e)?(d=()=>e.value,g=Ri(e)):ko(e)?(d=()=>u(e),g=!0):Be(e)?(p=!0,g=e.some(P=>ko(P)||Ri(P)),d=()=>e.map(P=>{if(Bt(P))return P.value;if(ko(P))return u(P);if(qe(P))return l?l(P,2):P()})):qe(e)?t?d=l?()=>l(e,2):e:d=()=>{if(h){Fs();try{h()}finally{Bs()}}const P=ra;ra=c;try{return l?l(e,3,[v]):e(v)}finally{ra=P}}:d=sr,t&&r){const P=d,D=r===!0?1/0:r;d=()=>Dr(P(),D)}const y=JE(),I=()=>{c.stop(),y&&xp(y.effects,c)};if(s&&t){const P=t;t=(...D)=>{P(...D),I()}}let E=p?new Array(e.length).fill(od):od;const V=P=>{if(!(!(c.flags&1)||!c.dirty&&!P))if(t){const D=c.run();if(r||g||(p?D.some((N,R)=>ii(N,E[R])):ii(D,E))){h&&h();const N=ra;ra=c;try{const R=[D,E===od?void 0:p&&E[0]===od?[]:E,v];l?l(t,3,R):t(...R),E=D}finally{ra=N}}}else c.run()};return o&&o(V),c=new ZE(d),c.scheduler=a?()=>a(V,!1):V,v=P=>yN(P,!1,c),h=c.onStop=()=>{const P=Yd.get(c);if(P){if(l)l(P,4);else for(const D of P)D();Yd.delete(c)}},t?i?V(!0):E=c.run():a?a(V.bind(null,!0),!0):c.run(),I.pause=c.pause.bind(c),I.resume=c.resume.bind(c),I.stop=I,I}function Dr(e,t=1/0,n){if(t<=0||!Rt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Bt(e))Dr(e.value,t,n);else if(Be(e))for(let i=0;i<e.length;i++)Dr(e[i],t,n);else if(HE(e)||To(e))e.forEach(i=>{Dr(i,t,n)});else if(zE(e)){for(const i in e)Dr(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Dr(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cc(e,t,n,i){try{return i?e(...i):e()}catch(r){Zf(r,t,n)}}function Hi(e,t,n,i){if(qe(e)){const r=cc(e,t,n,i);return r&&jE(r)&&r.catch(s=>{Zf(s,t,n)}),r}if(Be(e)){const r=[];for(let s=0;s<e.length;s++)r.push(Hi(e[s],t,n,i));return r}}function Zf(e,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||mt;if(t){let o=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}o=o.parent}if(s){Fs(),cc(s,null,10,[e,l,u]),Bs();return}}bN(e,n,r,i,a)}function bN(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}let Tu=!1,Rv=!1;const Xn=[];let er=0;const Ao=[];let ms=null,vo=0;const pC=Promise.resolve();let Hp=null;function Qe(e){const t=Hp||pC;return e?t.then(this?e.bind(this):e):t}function wN(e){let t=Tu?er+1:0,n=Xn.length;for(;t<n;){const i=t+n>>>1,r=Xn[i],s=ku(r);s<e||s===e&&r.flags&2?t=i+1:n=i}return t}function jp(e){if(!(e.flags&1)){const t=ku(e),n=Xn[Xn.length-1];!n||!(e.flags&2)&&t>=ku(n)?Xn.push(e):Xn.splice(wN(t),0,e),e.flags|=1,yC()}}function yC(){!Tu&&!Rv&&(Rv=!0,Hp=pC.then(bC))}function SN(e){Be(e)?Ao.push(...e):ms&&e.id===-1?ms.splice(vo+1,0,e):e.flags&1||(Ao.push(e),e.flags|=1),yC()}function Aw(e,t,n=Tu?er+1:0){for(;n<Xn.length;n++){const i=Xn[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Xn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _C(e){if(Ao.length){const t=[...new Set(Ao)].sort((n,i)=>ku(n)-ku(i));if(Ao.length=0,ms){ms.push(...t);return}for(ms=t,vo=0;vo<ms.length;vo++){const n=ms[vo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ms=null,vo=0}}const ku=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bC(e){Rv=!1,Tu=!0;try{for(er=0;er<Xn.length;er++){const t=Xn[er];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),cc(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;er<Xn.length;er++){const t=Xn[er];t&&(t.flags&=-2)}er=0,Xn.length=0,_C(),Tu=!1,Hp=null,(Xn.length||Ao.length)&&bC()}}let hn=null,wC=null;function Qd(e){const t=hn;return hn=e,wC=e&&e.type.__scopeId||null,t}function Ne(e,t=hn,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&Bw(-1);const s=Qd(t);let a;try{a=e(...r)}finally{Qd(s),i._d&&Bw(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xt(e,t){if(hn===null)return e;const n=sh(hn),i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,a,o,l=mt]=t[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&Dr(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function Zs(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Fs(),Hi(l,n,8,[e.el,o,e,t]),Bs())}}const SC=Symbol("_vte"),IC=e=>e.__isTeleport,lu=e=>e&&(e.disabled||e.disabled===""),IN=e=>e&&(e.defer||e.defer===""),Pw=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Rw=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,xv=(e,t)=>{const n=e&&e.to;return Ht(n)?t?t(n):null:n},EN={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,a,o,l,u){const{mc:c,pc:d,pbc:h,o:{insert:v,querySelector:g,createText:p,createComment:y}}=u,I=lu(t.props);let{shapeFlag:E,children:V,dynamicChildren:P}=t;if(e==null){const D=t.el=p(""),N=t.anchor=p("");v(D,n,i),v(N,n,i);const R=(_,T)=>{E&16&&(r&&r.isCE&&(r.ce._teleportTarget=_),c(V,_,T,r,s,a,o,l))},b=()=>{const _=t.target=xv(t.props,g),T=EC(_,t,p,v);_&&(a!=="svg"&&Pw(_)?a="svg":a!=="mathml"&&Rw(_)&&(a="mathml"),I||(R(_,T),Pd(t)))};I&&(R(n,N),Pd(t)),IN(t.props)?ni(b,s):b()}else{t.el=e.el,t.targetStart=e.targetStart;const D=t.anchor=e.anchor,N=t.target=e.target,R=t.targetAnchor=e.targetAnchor,b=lu(e.props),_=b?n:N,T=b?D:R;if(a==="svg"||Pw(N)?a="svg":(a==="mathml"||Rw(N))&&(a="mathml"),P?(h(e.dynamicChildren,P,_,r,s,a,o),Jp(e,t,!0)):l||d(e,t,_,T,r,s,a,o,!1),I)b?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ld(t,n,D,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const k=t.target=xv(t.props,g);k&&ld(t,k,null,u,0)}else b&&ld(t,N,R,u,1);Pd(t)}},remove(e,t,n,{um:i,o:{remove:r}},s){const{shapeFlag:a,children:o,anchor:l,targetStart:u,targetAnchor:c,target:d,props:h}=e;if(d&&(r(u),r(c)),s&&r(l),a&16){const v=s||!lu(h);for(let g=0;g<o.length;g++){const p=o[g];i(p,t,n,v,!!p.dynamicChildren)}}},move:ld,hydrate:CN};function ld(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:a,anchor:o,shapeFlag:l,children:u,props:c}=e,d=s===2;if(d&&i(a,t,n),(!d||lu(c))&&l&16)for(let h=0;h<u.length;h++)r(u[h],t,n,2);d&&i(o,t,n)}function CN(e,t,n,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:u,createText:c}},d){const h=t.target=xv(t.props,l);if(h){const v=h._lpa||h.firstChild;if(t.shapeFlag&16)if(lu(t.props))t.anchor=d(a(e),t,o(e),n,i,r,s),t.targetStart=v,t.targetAnchor=v&&a(v);else{t.anchor=a(e);let g=v;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")t.targetStart=g;else if(g.data==="teleport anchor"){t.targetAnchor=g,h._lpa=t.targetAnchor&&a(t.targetAnchor);break}}g=a(g)}t.targetAnchor||EC(h,t,c,u),d(v&&a(v),t,h,n,i,r,s)}Pd(t)}return t.anchor&&a(t.anchor)}const TN=EN;function Pd(e){const t=e.ctx;if(t&&t.ut){let n=e.targetStart;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}function EC(e,t,n,i){const r=t.targetStart=n(""),s=t.targetAnchor=n("");return r[SC]=s,e&&(i(r,e),i(s,e)),s}const vs=Symbol("_leaveCb"),ud=Symbol("_enterCb");function CC(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jt(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const ki=[Function,Array],TC={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ki,onEnter:ki,onAfterEnter:ki,onEnterCancelled:ki,onBeforeLeave:ki,onLeave:ki,onAfterLeave:ki,onLeaveCancelled:ki,onBeforeAppear:ki,onAppear:ki,onAfterAppear:ki,onAppearCancelled:ki},kC=e=>{const t=e.subTree;return t.component?kC(t.component):t},kN={name:"BaseTransition",props:TC,setup(e,{slots:t}){const n=rl(),i=CC();return()=>{const r=t.default&&Wp(t.default(),!0);if(!r||!r.length)return;const s=AC(r),a=xe(e),{mode:o}=a;if(i.isLeaving)return Om(s);const l=xw(s);if(!l)return Om(s);let u=Au(l,a,i,n,h=>u=h);l.type!==$n&&wa(l,u);const c=n.subTree,d=c&&xw(c);if(d&&d.type!==$n&&!oa(l,d)&&kC(n).type!==$n){const h=Au(d,a,i,n);if(wa(d,h),o==="out-in"&&l.type!==$n)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},Om(s);o==="in-out"&&l.type!==$n&&(h.delayLeave=(v,g,p)=>{const y=PC(i,d);y[String(d.key)]=d,v[vs]=()=>{g(),v[vs]=void 0,delete u.delayedLeave},u.delayedLeave=p})}return s}}};function AC(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==$n){t=n;break}}return t}const AN=kN;function PC(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Au(e,t,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:v,onAfterLeave:g,onLeaveCancelled:p,onBeforeAppear:y,onAppear:I,onAfterAppear:E,onAppearCancelled:V}=t,P=String(e.key),D=PC(n,e),N=(_,T)=>{_&&Hi(_,i,9,T)},R=(_,T)=>{const k=T[1];N(_,T),Be(_)?_.every(C=>C.length<=1)&&k():_.length<=1&&k()},b={mode:a,persisted:o,beforeEnter(_){let T=l;if(!n.isMounted)if(s)T=y||l;else return;_[vs]&&_[vs](!0);const k=D[P];k&&oa(e,k)&&k.el[vs]&&k.el[vs](),N(T,[_])},enter(_){let T=u,k=c,C=d;if(!n.isMounted)if(s)T=I||u,k=E||c,C=V||d;else return;let A=!1;const B=_[ud]=W=>{A||(A=!0,W?N(C,[_]):N(k,[_]),b.delayedLeave&&b.delayedLeave(),_[ud]=void 0)};T?R(T,[_,B]):B()},leave(_,T){const k=String(e.key);if(_[ud]&&_[ud](!0),n.isUnmounting)return T();N(h,[_]);let C=!1;const A=_[vs]=B=>{C||(C=!0,T(),B?N(p,[_]):N(g,[_]),_[vs]=void 0,D[k]===e&&delete D[k])};D[k]=e,v?R(v,[_,A]):A()},clone(_){const T=Au(_,t,n,i,r);return r&&r(T),T}};return b}function Om(e){if(eh(e))return e=ur(e),e.children=null,e}function xw(e){if(!eh(e))return IC(e.type)&&e.children?AC(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&qe(n.default))return n.default()}}function wa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,wa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wp(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===we?(a.patchFlag&128&&r++,i=i.concat(Wp(a.children,t,o))):(t||a.type!==$n)&&i.push(o!=null?ur(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Us(e,t){return qe(e)?Xt({name:e.name},t,{setup:e}):e}function RC(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Vv(e,t,n,i,r=!1){if(Be(e)){e.forEach((g,p)=>Vv(g,t&&(Be(t)?t[p]:t),n,i,r));return}if(Po(i)&&!r)return;const s=i.shapeFlag&4?sh(i.component):i.el,a=r?null:s,{i:o,r:l}=e,u=t&&t.r,c=o.refs===mt?o.refs={}:o.refs,d=o.setupState,h=xe(d),v=d===mt?()=>!1:g=>pt(h,g);if(u!=null&&u!==l&&(Ht(u)?(c[u]=null,v(u)&&(d[u]=null)):Bt(u)&&(u.value=null)),qe(l))cc(l,o,12,[a,c]);else{const g=Ht(l),p=Bt(l);if(g||p){const y=()=>{if(e.f){const I=g?v(l)?d[l]:c[l]:l.value;r?Be(I)&&xp(I,s):Be(I)?I.includes(s)||I.push(s):g?(c[l]=[s],v(l)&&(d[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else g?(c[l]=a,v(l)&&(d[l]=a)):p&&(l.value=a,e.k&&(c[e.k]=a))};a?(y.id=-1,ni(y,n)):y()}}}const Po=e=>!!e.type.__asyncLoader,eh=e=>e.type.__isKeepAlive;function xC(e,t){VC(e,"a",t)}function zp(e,t){VC(e,"da",t)}function VC(e,t,n=In){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(th(t,i,n),n){let r=n.parent;for(;r&&r.parent;)eh(r.parent.vnode)&&PN(i,t,n,r),r=r.parent}}function PN(e,t,n,i){const r=th(t,e,i,!0);dc(()=>{xp(i[t],r)},n)}function th(e,t,n=In,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{Fs();const o=hc(n),l=Hi(t,n,e,a);return o(),Bs(),l});return i?r.unshift(s):r.push(s),s}}const Xr=e=>(t,n=In)=>{(!rh||e==="sp")&&th(e,(...i)=>t(...i),n)},qp=Xr("bm"),jt=Xr("m"),DC=Xr("bu"),Gp=Xr("u"),vn=Xr("bum"),dc=Xr("um"),NC=Xr("sp"),RN=Xr("rtg"),xN=Xr("rtc");function VN(e,t=In){th("ec",e,t)}const Kp="components",DN="directives";function kt(e,t){return Yp(Kp,e,!0,t)||e}const OC=Symbol.for("v-ndc");function MC(e){return Ht(e)?Yp(Kp,e,!1)||e:e||OC}function oi(e){return Yp(DN,e)}function Yp(e,t,n=!0,i=!1){const r=hn||In;if(r){const s=r.type;if(e===Kp){const o=_O(s,!1);if(o&&(o===t||o===ai(t)||o===gr(ai(t))))return s}const a=Vw(r[e]||s[e],t)||Vw(r.appContext[e],t);return!a&&i?s:a}}function Vw(e,t){return e&&(e[t]||e[ai(t)]||e[gr(ai(t))])}function NN(e,t,n,i){let r;const s=n,a=Be(e);if(a||Ht(e)){const o=a&&ko(e);let l=!1;o&&(l=!Ri(e),e=Xf(e)),r=new Array(e.length);for(let u=0,c=e.length;u<c;u++)r[u]=t(l?Mn(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,s)}else if(Rt(e))if(e[Symbol.iterator])r=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=t(e[c],c,l,s)}}else r=[];return r}function lQ(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(Be(i))for(let r=0;r<i.length;r++)e[i[r].name]=i[r].fn;else i&&(e[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return e}function uQ(e,t,n={},i,r){if(hn.ce||hn.parent&&Po(hn.parent)&&hn.parent.ce)return n.name=t,bn(),ci(we,null,[m("slot",n,i)],64);let s=e[t];s&&s._c&&(s._d=!1),bn();const a=s&&LC(s(n)),o=ci(we,{key:(n.key||a&&a.key||`_${t}`)+(!a&&i?"_fb":"")},a||[],a&&e._===1?64:-2);return o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function LC(e){return e.some(t=>Sa(t)?!(t.type===$n||t.type===we&&!LC(t.children)):!0)?e:null}const Dv=e=>e?nT(e)?sh(e):Dv(e.parent):null,uu=Xt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dv(e.parent),$root:e=>Dv(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Qp(e),$forceUpdate:e=>e.f||(e.f=()=>{jp(e.update)}),$nextTick:e=>e.n||(e.n=Qe.bind(e.proxy)),$watch:e=>nO.bind(e)}),Mm=(e,t)=>e!==mt&&!e.__isScriptSetup&&pt(e,t),ON={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=e;let u;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Mm(i,t))return a[t]=1,i[t];if(r!==mt&&pt(r,t))return a[t]=2,r[t];if((u=e.propsOptions[0])&&pt(u,t))return a[t]=3,s[t];if(n!==mt&&pt(n,t))return a[t]=4,n[t];Nv&&(a[t]=0)}}const c=uu[t];let d,h;if(c)return t==="$attrs"&&Wn(e.attrs,"get",""),c(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==mt&&pt(n,t))return a[t]=4,n[t];if(h=l.config.globalProperties,pt(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return Mm(r,t)?(r[t]=n,!0):i!==mt&&pt(i,t)?(i[t]=n,!0):pt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||e!==mt&&pt(e,a)||Mm(t,a)||(o=s[0])&&pt(o,a)||pt(i,a)||pt(uu,a)||pt(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xd(e){return Be(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function cQ(e,t){return!e||!t?e||t:Be(e)&&Be(t)?e.concat(t):Xt({},Xd(e),Xd(t))}let Nv=!0;function MN(e){const t=Qp(e),n=e.proxy,i=e.ctx;Nv=!1,t.beforeCreate&&Dw(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:d,mounted:h,beforeUpdate:v,updated:g,activated:p,deactivated:y,beforeDestroy:I,beforeUnmount:E,destroyed:V,unmounted:P,render:D,renderTracked:N,renderTriggered:R,errorCaptured:b,serverPrefetch:_,expose:T,inheritAttrs:k,components:C,directives:A,filters:B}=t;if(u&&LN(u,i,null),a)for(const se in a){const z=a[se];qe(z)&&(i[se]=z.bind(n))}if(r){const se=r.call(n,n);Rt(se)&&(e.data=Ut(se))}if(Nv=!0,s)for(const se in s){const z=s[se],U=qe(z)?z.bind(n,n):qe(z.get)?z.get.bind(n,n):sr,$=!qe(z)&&qe(z.set)?z.set.bind(n):sr,q=S({get:U,set:$});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>q.value,set:ne=>q.value=ne})}if(o)for(const se in o)FC(o[se],i,n,se);if(l){const se=qe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(z=>{vt(z,se[z])})}c&&Dw(c,e,"c");function Q(se,z){Be(z)?z.forEach(U=>se(U.bind(n))):z&&se(z.bind(n))}if(Q(qp,d),Q(jt,h),Q(DC,v),Q(Gp,g),Q(xC,p),Q(zp,y),Q(VN,b),Q(xN,N),Q(RN,R),Q(vn,E),Q(dc,P),Q(NC,_),Be(T))if(T.length){const se=e.exposed||(e.exposed={});T.forEach(z=>{Object.defineProperty(se,z,{get:()=>n[z],set:U=>n[z]=U})})}else e.exposed||(e.exposed={});D&&e.render===sr&&(e.render=D),k!=null&&(e.inheritAttrs=k),C&&(e.components=C),A&&(e.directives=A),_&&RC(e)}function LN(e,t,n=sr){Be(e)&&(e=Ov(e));for(const i in e){const r=e[i];let s;Rt(r)?"default"in r?s=$e(r.from||i,r.default,!0):s=$e(r.from||i):s=$e(r),Bt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function Dw(e,t,n){Hi(Be(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function FC(e,t,n,i){let r=i.includes(".")?QC(n,i):()=>n[i];if(Ht(e)){const s=t[e];qe(s)&&ve(r,s)}else if(qe(e))ve(r,e.bind(n));else if(Rt(e))if(Be(e))e.forEach(s=>FC(s,t,n,i));else{const s=qe(e.handler)?e.handler.bind(n):t[e.handler];qe(s)&&ve(r,s,e)}}function Qp(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>Jd(l,u,a,!0)),Jd(l,t,a)),Rt(t)&&s.set(t,l),l}function Jd(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Jd(e,s,n,!0),r&&r.forEach(a=>Jd(e,a,n,!0));for(const a in t)if(!(i&&a==="expose")){const o=FN[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const FN={data:Nw,props:Ow,emits:Ow,methods:Ql,computed:Ql,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:Ql,directives:Ql,watch:$N,provide:Nw,inject:BN};function Nw(e,t){return t?e?function(){return Xt(qe(e)?e.call(this,this):e,qe(t)?t.call(this,this):t)}:t:e}function BN(e,t){return Ql(Ov(e),Ov(t))}function Ov(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yn(e,t){return e?[...new Set([].concat(e,t))]:t}function Ql(e,t){return e?Xt(Object.create(null),e,t):t}function Ow(e,t){return e?Be(e)&&Be(t)?[...new Set([...e,...t])]:Xt(Object.create(null),Xd(e),Xd(t??{})):t}function $N(e,t){if(!e)return t;if(!t)return e;const n=Xt(Object.create(null),e);for(const i in t)n[i]=Yn(e[i],t[i]);return n}function BC(){return{app:null,config:{isNativeTag:RD,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UN=0;function HN(e,t){return function(i,r=null){qe(i)||(i=Xt({},i)),r!=null&&!Rt(r)&&(r=null);const s=BC(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:UN++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:wO,get config(){return s.config},set config(c){},use(c,...d){return a.has(c)||(c&&qe(c.install)?(a.add(c),c.install(u,...d)):qe(c)&&(a.add(c),c(u,...d))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,d){return d?(s.components[c]=d,u):s.components[c]},directive(c,d){return d?(s.directives[c]=d,u):s.directives[c]},mount(c,d,h){if(!l){const v=u._ceVNode||m(i,r);return v.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),d&&t?t(v,c):e(v,c,h),l=!0,u._container=c,c.__vue_app__=u,sh(v.component)}},onUnmount(c){o.push(c)},unmount(){l&&(Hi(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return s.provides[c]=d,u},runWithContext(c){const d=Ro;Ro=u;try{return c()}finally{Ro=d}}};return u}}let Ro=null;function vt(e,t){if(In){let n=In.provides;const i=In.parent&&In.parent.provides;i===n&&(n=In.provides=Object.create(i)),n[e]=t}}function $e(e,t,n=!1){const i=In||hn;if(i||Ro){const r=Ro?Ro._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&qe(t)?t.call(i&&i.proxy):t}}const $C={},UC=()=>Object.create($C),HC=e=>Object.getPrototypeOf(e)===$C;function jN(e,t,n,i=!1){const r={},s=UC();e.propsDefaults=Object.create(null),jC(e,t,r,s);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=i?r:hC(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function WN(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=e,o=xe(r),[l]=e.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(ih(e.emitsOptions,h))continue;const v=t[h];if(l)if(pt(s,h))v!==s[h]&&(s[h]=v,u=!0);else{const g=ai(h);r[g]=Mv(l,o,g,v,e,!1)}else v!==s[h]&&(s[h]=v,u=!0)}}}else{jC(e,t,r,s)&&(u=!0);let c;for(const d in o)(!t||!pt(t,d)&&((c=Ls(d))===d||!pt(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=Mv(l,o,d,void 0,e,!0)):delete r[d]);if(s!==o)for(const d in s)(!t||!pt(t,d))&&(delete s[d],u=!0)}u&&$r(e.attrs,"set","")}function jC(e,t,n,i){const[r,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(au(l))continue;const u=t[l];let c;r&&pt(r,c=ai(l))?!s||!s.includes(c)?n[c]=u:(o||(o={}))[c]=u:ih(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=xe(n),u=o||mt;for(let c=0;c<s.length;c++){const d=s[c];n[d]=Mv(r,l,d,u[d],e,!pt(u,d))}}return a}function Mv(e,t,n,i,r,s){const a=e[n];if(a!=null){const o=pt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&qe(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=hc(r);i=u[n]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ls(n))&&(i=!0))}return i}const zN=new WeakMap;function WC(e,t,n=!1){const i=n?zN:t.propsCache,r=i.get(e);if(r)return r;const s=e.props,a={},o=[];let l=!1;if(!qe(e)){const c=d=>{l=!0;const[h,v]=WC(d,t,!0);Xt(a,h),v&&o.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return Rt(e)&&i.set(e,Co),Co;if(Be(s))for(let c=0;c<s.length;c++){const d=ai(s[c]);Mw(d)&&(a[d]=mt)}else if(s)for(const c in s){const d=ai(c);if(Mw(d)){const h=s[c],v=a[d]=Be(h)||qe(h)?{type:h}:Xt({},h),g=v.type;let p=!1,y=!0;if(Be(g))for(let I=0;I<g.length;++I){const E=g[I],V=qe(E)&&E.name;if(V==="Boolean"){p=!0;break}else V==="String"&&(y=!1)}else p=qe(g)&&g.name==="Boolean";v[0]=p,v[1]=y,(p||pt(v,"default"))&&o.push(d)}}const u=[a,o];return Rt(e)&&i.set(e,u),u}function Mw(e){return e[0]!=="$"&&!au(e)}const zC=e=>e[0]==="_"||e==="$stable",Xp=e=>Be(e)?e.map(tr):[tr(e)],qN=(e,t,n)=>{if(t._n)return t;const i=Ne((...r)=>Xp(t(...r)),n);return i._c=!1,i},qC=(e,t,n)=>{const i=e._ctx;for(const r in e){if(zC(r))continue;const s=e[r];if(qe(s))t[r]=qN(r,s,i);else if(s!=null){const a=Xp(s);t[r]=()=>a}}},GC=(e,t)=>{const n=Xp(t);e.slots.default=()=>n},KC=(e,t,n)=>{for(const i in t)(n||i!=="_")&&(e[i]=t[i])},GN=(e,t,n)=>{const i=e.slots=UC();if(e.vnode.shapeFlag&32){const r=t._;r?(KC(i,t,n),n&&qE(i,"_",r,!0)):qC(t,i)}else t&&GC(e,t)},KN=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,a=mt;if(i.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:KC(r,t,n):(s=!t.$stable,qC(t,r)),a=t}else t&&(GC(e,t),a={default:1});if(s)for(const o in r)!zC(o)&&a[o]==null&&delete r[o]},ni=lO;function YN(e){return QN(e)}function QN(e,t){const n=GE();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:h,setScopeId:v=sr,insertStaticContent:g}=e,p=(O,M,H,Z=null,X=null,le=null,be=void 0,de=null,_e=!!M.dynamicChildren)=>{if(O===M)return;O&&!oa(O,M)&&(Z=j(O),ne(O,X,le,!0),O=null),M.patchFlag===-2&&(_e=!1,M.dynamicChildren=null);const{type:fe,ref:Me,shapeFlag:Ce}=M;switch(fe){case fc:y(O,M,H,Z);break;case $n:I(O,M,H,Z);break;case Bm:O==null&&E(M,H,Z,be);break;case we:C(O,M,H,Z,X,le,be,de,_e);break;default:Ce&1?D(O,M,H,Z,X,le,be,de,_e):Ce&6?A(O,M,H,Z,X,le,be,de,_e):(Ce&64||Ce&128)&&fe.process(O,M,H,Z,X,le,be,de,_e,ue)}Me!=null&&X&&Vv(Me,O&&O.ref,le,M||O,!M)},y=(O,M,H,Z)=>{if(O==null)i(M.el=o(M.children),H,Z);else{const X=M.el=O.el;M.children!==O.children&&u(X,M.children)}},I=(O,M,H,Z)=>{O==null?i(M.el=l(M.children||""),H,Z):M.el=O.el},E=(O,M,H,Z)=>{[O.el,O.anchor]=g(O.children,M,H,Z,O.el,O.anchor)},V=({el:O,anchor:M},H,Z)=>{let X;for(;O&&O!==M;)X=h(O),i(O,H,Z),O=X;i(M,H,Z)},P=({el:O,anchor:M})=>{let H;for(;O&&O!==M;)H=h(O),r(O),O=H;r(M)},D=(O,M,H,Z,X,le,be,de,_e)=>{M.type==="svg"?be="svg":M.type==="math"&&(be="mathml"),O==null?N(M,H,Z,X,le,be,de,_e):_(O,M,X,le,be,de,_e)},N=(O,M,H,Z,X,le,be,de)=>{let _e,fe;const{props:Me,shapeFlag:Ce,transition:De,dirs:Ve}=O;if(_e=O.el=a(O.type,le,Me&&Me.is,Me),Ce&8?c(_e,O.children):Ce&16&&b(O.children,_e,null,Z,X,Lm(O,le),be,de),Ve&&Zs(O,null,Z,"created"),R(_e,O,O.scopeId,be,Z),Me){for(const ft in Me)ft!=="value"&&!au(ft)&&s(_e,ft,null,Me[ft],le,Z);"value"in Me&&s(_e,"value",null,Me.value,le),(fe=Me.onVnodeBeforeMount)&&Ji(fe,Z,O)}Ve&&Zs(O,null,Z,"beforeMount");const Ue=XN(X,De);Ue&&De.beforeEnter(_e),i(_e,M,H),((fe=Me&&Me.onVnodeMounted)||Ue||Ve)&&ni(()=>{fe&&Ji(fe,Z,O),Ue&&De.enter(_e),Ve&&Zs(O,null,Z,"mounted")},X)},R=(O,M,H,Z,X)=>{if(H&&v(O,H),Z)for(let le=0;le<Z.length;le++)v(O,Z[le]);if(X){let le=X.subTree;if(M===le||ZC(le.type)&&(le.ssContent===M||le.ssFallback===M)){const be=X.vnode;R(O,be,be.scopeId,be.slotScopeIds,X.parent)}}},b=(O,M,H,Z,X,le,be,de,_e=0)=>{for(let fe=_e;fe<O.length;fe++){const Me=O[fe]=de?ps(O[fe]):tr(O[fe]);p(null,Me,M,H,Z,X,le,be,de)}},_=(O,M,H,Z,X,le,be)=>{const de=M.el=O.el;let{patchFlag:_e,dynamicChildren:fe,dirs:Me}=M;_e|=O.patchFlag&16;const Ce=O.props||mt,De=M.props||mt;let Ve;if(H&&ea(H,!1),(Ve=De.onVnodeBeforeUpdate)&&Ji(Ve,H,M,O),Me&&Zs(M,O,H,"beforeUpdate"),H&&ea(H,!0),(Ce.innerHTML&&De.innerHTML==null||Ce.textContent&&De.textContent==null)&&c(de,""),fe?T(O.dynamicChildren,fe,de,H,Z,Lm(M,X),le):be||z(O,M,de,null,H,Z,Lm(M,X),le,!1),_e>0){if(_e&16)k(de,Ce,De,H,X);else if(_e&2&&Ce.class!==De.class&&s(de,"class",null,De.class,X),_e&4&&s(de,"style",Ce.style,De.style,X),_e&8){const Ue=M.dynamicProps;for(let ft=0;ft<Ue.length;ft++){const lt=Ue[ft],Rn=Ce[lt],un=De[lt];(un!==Rn||lt==="value")&&s(de,lt,Rn,un,X,H)}}_e&1&&O.children!==M.children&&c(de,M.children)}else!be&&fe==null&&k(de,Ce,De,H,X);((Ve=De.onVnodeUpdated)||Me)&&ni(()=>{Ve&&Ji(Ve,H,M,O),Me&&Zs(M,O,H,"updated")},Z)},T=(O,M,H,Z,X,le,be)=>{for(let de=0;de<M.length;de++){const _e=O[de],fe=M[de],Me=_e.el&&(_e.type===we||!oa(_e,fe)||_e.shapeFlag&70)?d(_e.el):H;p(_e,fe,Me,null,Z,X,le,be,!0)}},k=(O,M,H,Z,X)=>{if(M!==H){if(M!==mt)for(const le in M)!au(le)&&!(le in H)&&s(O,le,M[le],null,X,Z);for(const le in H){if(au(le))continue;const be=H[le],de=M[le];be!==de&&le!=="value"&&s(O,le,de,be,X,Z)}"value"in H&&s(O,"value",M.value,H.value,X)}},C=(O,M,H,Z,X,le,be,de,_e)=>{const fe=M.el=O?O.el:o(""),Me=M.anchor=O?O.anchor:o("");let{patchFlag:Ce,dynamicChildren:De,slotScopeIds:Ve}=M;Ve&&(de=de?de.concat(Ve):Ve),O==null?(i(fe,H,Z),i(Me,H,Z),b(M.children||[],H,Me,X,le,be,de,_e)):Ce>0&&Ce&64&&De&&O.dynamicChildren?(T(O.dynamicChildren,De,H,X,le,be,de),(M.key!=null||X&&M===X.subTree)&&Jp(O,M,!0)):z(O,M,H,Me,X,le,be,de,_e)},A=(O,M,H,Z,X,le,be,de,_e)=>{M.slotScopeIds=de,O==null?M.shapeFlag&512?X.ctx.activate(M,H,Z,be,_e):B(M,H,Z,X,le,be,_e):W(O,M,_e)},B=(O,M,H,Z,X,le,be)=>{const de=O.component=mO(O,Z,X);if(eh(O)&&(de.ctx.renderer=ue),vO(de,!1,be),de.asyncDep){if(X&&X.registerDep(de,Q,be),!O.el){const _e=de.subTree=m($n);I(null,_e,M,H)}}else Q(de,O,M,H,X,le,be)},W=(O,M,H)=>{const Z=M.component=O.component;if(aO(O,M,H))if(Z.asyncDep&&!Z.asyncResolved){se(Z,M,H);return}else Z.next=M,Z.update();else M.el=O.el,Z.vnode=M},Q=(O,M,H,Z,X,le,be)=>{const de=()=>{if(O.isMounted){let{next:Ce,bu:De,u:Ve,parent:Ue,vnode:ft}=O;{const xn=YC(O);if(xn){Ce&&(Ce.el=ft.el,se(O,Ce,be)),xn.asyncDep.then(()=>{O.isUnmounted||de()});return}}let lt=Ce,Rn;ea(O,!1),Ce?(Ce.el=ft.el,se(O,Ce,be)):Ce=ft,De&&Ad(De),(Rn=Ce.props&&Ce.props.onVnodeBeforeUpdate)&&Ji(Rn,Ue,Ce,ft),ea(O,!0);const un=Fm(O),yn=O.subTree;O.subTree=un,p(yn,un,d(yn.el),j(yn),O,X,le),Ce.el=un.el,lt===null&&oO(O,un.el),Ve&&ni(Ve,X),(Rn=Ce.props&&Ce.props.onVnodeUpdated)&&ni(()=>Ji(Rn,Ue,Ce,ft),X)}else{let Ce;const{el:De,props:Ve}=M,{bm:Ue,m:ft,parent:lt,root:Rn,type:un}=O,yn=Po(M);if(ea(O,!1),Ue&&Ad(Ue),!yn&&(Ce=Ve&&Ve.onVnodeBeforeMount)&&Ji(Ce,lt,M),ea(O,!0),De&&Ee){const xn=()=>{O.subTree=Fm(O),Ee(De,O.subTree,O,X,null)};yn&&un.__asyncHydrate?un.__asyncHydrate(De,O,xn):xn()}else{Rn.ce&&Rn.ce._injectChildStyle(un);const xn=O.subTree=Fm(O);p(null,xn,H,Z,O,X,le),M.el=xn.el}if(ft&&ni(ft,X),!yn&&(Ce=Ve&&Ve.onVnodeMounted)){const xn=M;ni(()=>Ji(Ce,lt,xn),X)}(M.shapeFlag&256||lt&&Po(lt.vnode)&&lt.vnode.shapeFlag&256)&&O.a&&ni(O.a,X),O.isMounted=!0,M=H=Z=null}};O.scope.on();const _e=O.effect=new ZE(de);O.scope.off();const fe=O.update=_e.run.bind(_e),Me=O.job=_e.runIfDirty.bind(_e);Me.i=O,Me.id=O.uid,_e.scheduler=()=>jp(Me),ea(O,!0),fe()},se=(O,M,H)=>{M.component=O;const Z=O.vnode.props;O.vnode=M,O.next=null,WN(O,M.props,Z,H),KN(O,M.children,H),Fs(),Aw(O),Bs()},z=(O,M,H,Z,X,le,be,de,_e=!1)=>{const fe=O&&O.children,Me=O?O.shapeFlag:0,Ce=M.children,{patchFlag:De,shapeFlag:Ve}=M;if(De>0){if(De&128){$(fe,Ce,H,Z,X,le,be,de,_e);return}else if(De&256){U(fe,Ce,H,Z,X,le,be,de,_e);return}}Ve&8?(Me&16&&ie(fe,X,le),Ce!==fe&&c(H,Ce)):Me&16?Ve&16?$(fe,Ce,H,Z,X,le,be,de,_e):ie(fe,X,le,!0):(Me&8&&c(H,""),Ve&16&&b(Ce,H,Z,X,le,be,de,_e))},U=(O,M,H,Z,X,le,be,de,_e)=>{O=O||Co,M=M||Co;const fe=O.length,Me=M.length,Ce=Math.min(fe,Me);let De;for(De=0;De<Ce;De++){const Ve=M[De]=_e?ps(M[De]):tr(M[De]);p(O[De],Ve,H,null,X,le,be,de,_e)}fe>Me?ie(O,X,le,!0,!1,Ce):b(M,H,Z,X,le,be,de,_e,Ce)},$=(O,M,H,Z,X,le,be,de,_e)=>{let fe=0;const Me=M.length;let Ce=O.length-1,De=Me-1;for(;fe<=Ce&&fe<=De;){const Ve=O[fe],Ue=M[fe]=_e?ps(M[fe]):tr(M[fe]);if(oa(Ve,Ue))p(Ve,Ue,H,null,X,le,be,de,_e);else break;fe++}for(;fe<=Ce&&fe<=De;){const Ve=O[Ce],Ue=M[De]=_e?ps(M[De]):tr(M[De]);if(oa(Ve,Ue))p(Ve,Ue,H,null,X,le,be,de,_e);else break;Ce--,De--}if(fe>Ce){if(fe<=De){const Ve=De+1,Ue=Ve<Me?M[Ve].el:Z;for(;fe<=De;)p(null,M[fe]=_e?ps(M[fe]):tr(M[fe]),H,Ue,X,le,be,de,_e),fe++}}else if(fe>De)for(;fe<=Ce;)ne(O[fe],X,le,!0),fe++;else{const Ve=fe,Ue=fe,ft=new Map;for(fe=Ue;fe<=De;fe++){const Gn=M[fe]=_e?ps(M[fe]):tr(M[fe]);Gn.key!=null&&ft.set(Gn.key,fe)}let lt,Rn=0;const un=De-Ue+1;let yn=!1,xn=0;const rs=new Array(un);for(fe=0;fe<un;fe++)rs[fe]=0;for(fe=Ve;fe<=Ce;fe++){const Gn=O[fe];if(Rn>=un){ne(Gn,X,le,!0);continue}let Ti;if(Gn.key!=null)Ti=ft.get(Gn.key);else for(lt=Ue;lt<=De;lt++)if(rs[lt-Ue]===0&&oa(Gn,M[lt])){Ti=lt;break}Ti===void 0?ne(Gn,X,le,!0):(rs[Ti-Ue]=fe+1,Ti>=xn?xn=Ti:yn=!0,p(Gn,M[Ti],H,null,X,le,be,de,_e),Rn++)}const no=yn?JN(rs):Co;for(lt=no.length-1,fe=un-1;fe>=0;fe--){const Gn=Ue+fe,Ti=M[Gn],io=Gn+1<Me?M[Gn+1].el:Z;rs[fe]===0?p(null,Ti,H,io,X,le,be,de,_e):yn&&(lt<0||fe!==no[lt]?q(Ti,H,io,2):lt--)}}},q=(O,M,H,Z,X=null)=>{const{el:le,type:be,transition:de,children:_e,shapeFlag:fe}=O;if(fe&6){q(O.component.subTree,M,H,Z);return}if(fe&128){O.suspense.move(M,H,Z);return}if(fe&64){be.move(O,M,H,ue);return}if(be===we){i(le,M,H);for(let Ce=0;Ce<_e.length;Ce++)q(_e[Ce],M,H,Z);i(O.anchor,M,H);return}if(be===Bm){V(O,M,H);return}if(Z!==2&&fe&1&&de)if(Z===0)de.beforeEnter(le),i(le,M,H),ni(()=>de.enter(le),X);else{const{leave:Ce,delayLeave:De,afterLeave:Ve}=de,Ue=()=>i(le,M,H),ft=()=>{Ce(le,()=>{Ue(),Ve&&Ve()})};De?De(le,Ue,ft):ft()}else i(le,M,H)},ne=(O,M,H,Z=!1,X=!1)=>{const{type:le,props:be,ref:de,children:_e,dynamicChildren:fe,shapeFlag:Me,patchFlag:Ce,dirs:De,cacheIndex:Ve}=O;if(Ce===-2&&(X=!1),de!=null&&Vv(de,null,H,O,!0),Ve!=null&&(M.renderCache[Ve]=void 0),Me&256){M.ctx.deactivate(O);return}const Ue=Me&1&&De,ft=!Po(O);let lt;if(ft&&(lt=be&&be.onVnodeBeforeUnmount)&&Ji(lt,M,O),Me&6)Pe(O.component,H,Z);else{if(Me&128){O.suspense.unmount(H,Z);return}Ue&&Zs(O,null,M,"beforeUnmount"),Me&64?O.type.remove(O,M,H,ue,Z):fe&&!fe.hasOnce&&(le!==we||Ce>0&&Ce&64)?ie(fe,M,H,!1,!0):(le===we&&Ce&384||!X&&Me&16)&&ie(_e,M,H),Z&&ge(O)}(ft&&(lt=be&&be.onVnodeUnmounted)||Ue)&&ni(()=>{lt&&Ji(lt,M,O),Ue&&Zs(O,null,M,"unmounted")},H)},ge=O=>{const{type:M,el:H,anchor:Z,transition:X}=O;if(M===we){Se(H,Z);return}if(M===Bm){P(O);return}const le=()=>{r(H),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(O.shapeFlag&1&&X&&!X.persisted){const{leave:be,delayLeave:de}=X,_e=()=>be(H,le);de?de(O.el,le,_e):_e()}else le()},Se=(O,M)=>{let H;for(;O!==M;)H=h(O),r(O),O=H;r(M)},Pe=(O,M,H)=>{const{bum:Z,scope:X,job:le,subTree:be,um:de,m:_e,a:fe}=O;Lw(_e),Lw(fe),Z&&Ad(Z),X.stop(),le&&(le.flags|=8,ne(be,O,M,H)),de&&ni(de,M),ni(()=>{O.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&O.asyncDep&&!O.asyncResolved&&O.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},ie=(O,M,H,Z=!1,X=!1,le=0)=>{for(let be=le;be<O.length;be++)ne(O[be],M,H,Z,X)},j=O=>{if(O.shapeFlag&6)return j(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const M=h(O.anchor||O.el),H=M&&M[SC];return H?h(H):M};let oe=!1;const he=(O,M,H)=>{O==null?M._vnode&&ne(M._vnode,null,null,!0):p(M._vnode||null,O,M,null,null,null,H),M._vnode=O,oe||(oe=!0,Aw(),_C(),oe=!1)},ue={p,um:ne,m:q,r:ge,mt:B,mc:b,pc:z,pbc:T,n:j,o:e};let re,Ee;return{render:he,hydrate:re,createApp:HN(he,re)}}function Lm({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ea({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function XN(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Jp(e,t,n=!1){const i=e.children,r=t.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ps(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Jp(a,o)),o.type===fc&&(o.el=a.el)}}function JN(e){const t=e.slice(),n=[0];let i,r,s,a,o;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<u?s=o+1:a=o;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function YC(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:YC(t)}function Lw(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ZN=Symbol.for("v-scx"),eO=()=>$e(ZN);function Ct(e,t){return nh(e,null,t)}function tO(e,t){return nh(e,null,{flush:"sync"})}function ve(e,t,n){return nh(e,t,n)}function nh(e,t,n=mt){const{immediate:i,deep:r,flush:s,once:a}=n,o=Xt({},n);let l;if(rh)if(s==="sync"){const h=eO();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||i)o.once=!0;else{const h=()=>{};return h.stop=sr,h.resume=sr,h.pause=sr,h}const u=In;o.call=(h,v,g)=>Hi(h,u,v,g);let c=!1;s==="post"?o.scheduler=h=>{ni(h,u&&u.suspense)}:s!=="sync"&&(c=!0,o.scheduler=(h,v)=>{v?h():jp(h)}),o.augmentJob=h=>{t&&(h.flags|=4),c&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=_N(e,t,o);return l&&l.push(d),d}function nO(e,t,n){const i=this.proxy,r=Ht(e)?e.includes(".")?QC(i,e):()=>i[e]:e.bind(i,i);let s;qe(t)?s=t:(s=t.handler,n=t);const a=hc(this),o=nh(r,s.bind(i),n);return a(),o}function QC(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function dQ(e,t,n=mt){const i=rl(),r=ai(t),s=Ls(t),a=XC(e,t),o=hN((l,u)=>{let c,d=mt,h;return tO(()=>{const v=e[t];ii(c,v)&&(c=v,u())}),{get(){return l(),n.get?n.get(c):c},set(v){const g=n.set?n.set(v):v;if(!ii(g,c)&&!(d!==mt&&ii(v,d)))return;const p=i.vnode.props;p&&(t in p||r in p||s in p)&&(`onUpdate:${t}`in p||`onUpdate:${r}`in p||`onUpdate:${s}`in p)||(c=v,u()),i.emit(`update:${t}`,g),ii(v,g)&&ii(v,d)&&!ii(g,h)&&u(),d=v,h=g}}});return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?a||mt:o,done:!1}:{done:!0}}}},o}const XC=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ai(t)}Modifiers`]||e[`${Ls(t)}Modifiers`];function iO(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||mt;let r=n;const s=t.startsWith("update:"),a=s&&XC(i,t.slice(7));a&&(a.trim&&(r=n.map(c=>Ht(c)?c.trim():c)),a.number&&(r=n.map(kv)));let o,l=i[o=Rm(t)]||i[o=Rm(ai(t))];!l&&s&&(l=i[o=Rm(Ls(t))]),l&&Hi(l,e,6,r);const u=i[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Hi(u,e,6,r)}}function JC(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let a={},o=!1;if(!qe(e)){const l=u=>{const c=JC(u,t,!0);c&&(o=!0,Xt(a,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(Rt(e)&&i.set(e,null),null):(Be(s)?s.forEach(l=>a[l]=null):Xt(a,s),Rt(e)&&i.set(e,a),a)}function ih(e,t){return!e||!zf(t)?!1:(t=t.slice(2).replace(/Once$/,""),pt(e,t[0].toLowerCase()+t.slice(1))||pt(e,Ls(t))||pt(e,t))}function Fm(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:d,data:h,setupState:v,ctx:g,inheritAttrs:p}=e,y=Qd(e);let I,E;try{if(n.shapeFlag&4){const P=r||i,D=P;I=tr(u.call(D,P,c,d,v,h,g)),E=o}else{const P=t;I=tr(P.length>1?P(d,{attrs:o,slots:a,emit:l}):P(d,null)),E=t.props?o:rO(o)}}catch(P){cu.length=0,Zf(P,e,1),I=m($n)}let V=I;if(E&&p!==!1){const P=Object.keys(E),{shapeFlag:D}=V;P.length&&D&7&&(s&&P.some(Rp)&&(E=sO(E,s)),V=ur(V,E,!1,!0))}return n.dirs&&(V=ur(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&wa(V,n.transition),I=V,Qd(y),I}const rO=e=>{let t;for(const n in e)(n==="class"||n==="style"||zf(n))&&((t||(t={}))[n]=e[n]);return t},sO=(e,t)=>{const n={};for(const i in e)(!Rp(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function aO(e,t,n){const{props:i,children:r,component:s}=e,{props:a,children:o,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Fw(i,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(a[h]!==i[h]&&!ih(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Fw(i,a,u):!0:!!a;return!1}function Fw(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!ih(n,s))return!0}return!1}function oO({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const ZC=e=>e.__isSuspense;function lO(e,t){t&&t.pendingBranch?Be(e)?t.effects.push(...e):t.effects.push(e):SN(e)}const we=Symbol.for("v-fgt"),fc=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),Bm=Symbol.for("v-stc"),cu=[];let mi=null;function bn(e=!1){cu.push(mi=e?null:[])}function uO(){cu.pop(),mi=cu[cu.length-1]||null}let Pu=1;function Bw(e){Pu+=e,e<0&&mi&&(mi.hasOnce=!0)}function eT(e){return e.dynamicChildren=Pu>0?mi||Co:null,uO(),Pu>0&&mi&&mi.push(e),e}function cd(e,t,n,i,r,s){return eT(gs(e,t,n,i,r,s,!0))}function ci(e,t,n,i,r){return eT(m(e,t,n,i,r,!0))}function Sa(e){return e?e.__v_isVNode===!0:!1}function oa(e,t){return e.type===t.type&&e.key===t.key}const tT=({key:e})=>e??null,Rd=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ht(e)||Bt(e)||qe(e)?{i:hn,r:e,k:t,f:!!n}:e:null);function gs(e,t=null,n=null,i=0,r=null,s=e===we?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tT(t),ref:t&&Rd(t),scopeId:wC,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return o?(Zp(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ht(n)?8:16),Pu>0&&!a&&mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mi.push(l),l}const m=cO;function cO(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===OC)&&(e=$n),Sa(e)){const o=ur(e,t,!0);return n&&Zp(o,n),Pu>0&&!s&&mi&&(o.shapeFlag&6?mi[mi.indexOf(e)]=o:mi.push(o)),o.patchFlag=-2,o}if(bO(e)&&(e=e.__vccOpts),t){t=dO(t);let{class:o,style:l}=t;o&&!Ht(o)&&(t.class=Yf(o)),Rt(l)&&(Bp(l)&&!Be(l)&&(l=Xt({},l)),t.style=Kf(l))}const a=Ht(e)?1:ZC(e)?128:IC(e)?64:Rt(e)?4:qe(e)?2:0;return gs(e,t,n,i,r,a,s,!0)}function dO(e){return e?Bp(e)||HC(e)?Xt({},e):e:null}function ur(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=e,u=t?K(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&tT(u),ref:t&&t.ref?n&&s?Be(s)?s.concat(Rd(t)):[s,Rd(t)]:Rd(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ur(e.ssContent),ssFallback:e.ssFallback&&ur(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&wa(c,l.clone(c)),c}function ht(e=" ",t=0){return m(fc,null,e,t)}function $l(e="",t=!1){return t?(bn(),ci($n,null,e)):m($n,null,e)}function tr(e){return e==null||typeof e=="boolean"?m($n):Be(e)?m(we,null,e.slice()):typeof e=="object"?ps(e):m(fc,null,String(e))}function ps(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ur(e)}function Zp(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Be(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Zp(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!HC(t)?t._ctx=hn:r===3&&hn&&(hn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else qe(t)?(t={default:t,_ctx:hn},n=32):(t=String(t),i&64?(n=16,t=[ht(t)]):n=8);e.children=t,e.shapeFlag|=n}function K(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Yf([t.class,i.class]));else if(r==="style")t.style=Kf([t.style,i.style]);else if(zf(r)){const s=t[r],a=i[r];a&&s!==a&&!(Be(s)&&s.includes(a))&&(t[r]=s?[].concat(s,a):a)}else r!==""&&(t[r]=i[r])}return t}function Ji(e,t,n,i=null){Hi(e,t,7,[n,i])}const fO=BC();let hO=0;function mO(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||fO,s={uid:hO++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new XE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:WC(i,r),emitsOptions:JC(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=iO.bind(null,s),e.ce&&e.ce(s),s}let In=null;const rl=()=>In||hn;let Zd,Lv;{const e=GE(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Zd=t("__VUE_INSTANCE_SETTERS__",n=>In=n),Lv=t("__VUE_SSR_SETTERS__",n=>rh=n)}const hc=e=>{const t=In;return Zd(e),e.scope.on(),()=>{e.scope.off(),Zd(t)}},$w=()=>{In&&In.scope.off(),Zd(null)};function nT(e){return e.vnode.shapeFlag&4}let rh=!1;function vO(e,t=!1,n=!1){t&&Lv(t);const{props:i,children:r}=e.vnode,s=nT(e);jN(e,i,s,t),GN(e,r,n);const a=s?gO(e,t):void 0;return t&&Lv(!1),a}function gO(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ON);const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?yO(e):null,s=hc(e);Fs();const a=cc(i,e,0,[e.props,r]);if(Bs(),s(),jE(a)){if(Po(e)||RC(e),a.then($w,$w),t)return a.then(o=>{Uw(e,o,t)}).catch(o=>{Zf(o,e,0)});e.asyncDep=a}else Uw(e,a,t)}else iT(e,t)}function Uw(e,t,n){qe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Rt(t)&&(e.setupState=vC(t)),iT(e,n)}let Hw;function iT(e,t,n){const i=e.type;if(!e.render){if(!t&&Hw&&!i.render){const r=i.template||Qp(e).template;if(r){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=i,u=Xt(Xt({isCustomElement:s,delimiters:o},a),l);i.render=Hw(r,u)}}e.render=i.render||sr}{const r=hc(e);Fs();try{MN(e)}finally{Bs(),r()}}}const pO={get(e,t){return Wn(e,"get",""),e[t]}};function yO(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pO),slots:e.slots,emit:e.emit,expose:t}}function sh(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vC($p(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in uu)return uu[n](e)},has(t,n){return n in t||n in uu}})):e.proxy}function _O(e,t=!0){return qe(e)?e.displayName||e.name:e.name||t&&e.__name}function bO(e){return qe(e)&&"__vccOpts"in e}const S=(e,t)=>pN(e,t,rh);function Jn(e,t,n){const i=arguments.length;return i===2?Rt(t)&&!Be(t)?Sa(t)?m(e,null,[t]):m(e,t):m(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Sa(n)&&(n=[n]),m(e,t,n))}const wO="3.5.7";/**
* @vue/runtime-dom v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fv;const jw=typeof window<"u"&&window.trustedTypes;if(jw)try{Fv=jw.createPolicy("vue",{createHTML:e=>e})}catch{}const rT=Fv?e=>Fv.createHTML(e):e=>e,SO="http://www.w3.org/2000/svg",IO="http://www.w3.org/1998/Math/MathML",Vr=typeof document<"u"?document:null,Ww=Vr&&Vr.createElement("template"),EO={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?Vr.createElementNS(SO,e):t==="mathml"?Vr.createElementNS(IO,e):n?Vr.createElement(e,{is:n}):Vr.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Vr.createTextNode(e),createComment:e=>Vr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Vr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const a=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ww.innerHTML=rT(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=Ww.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},us="transition",Ul="animation",Fo=Symbol("_vtc"),sT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},aT=Xt({},TC,sT),CO=e=>(e.displayName="Transition",e.props=aT,e),As=CO((e,{slots:t})=>Jn(AN,oT(e),t)),ta=(e,t=[])=>{Be(e)?e.forEach(n=>n(...t)):e&&e(...t)},zw=e=>e?Be(e)?e.some(t=>t.length>1):e.length>1:!1;function oT(e){const t={};for(const C in e)C in sT||(t[C]=e[C]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,g=TO(r),p=g&&g[0],y=g&&g[1],{onBeforeEnter:I,onEnter:E,onEnterCancelled:V,onLeave:P,onLeaveCancelled:D,onBeforeAppear:N=I,onAppear:R=E,onAppearCancelled:b=V}=t,_=(C,A,B)=>{fs(C,A?c:o),fs(C,A?u:a),B&&B()},T=(C,A)=>{C._isLeaving=!1,fs(C,d),fs(C,v),fs(C,h),A&&A()},k=C=>(A,B)=>{const W=C?R:E,Q=()=>_(A,C,B);ta(W,[A,Q]),qw(()=>{fs(A,C?l:s),Rr(A,C?c:o),zw(W)||Gw(A,i,p,Q)})};return Xt(t,{onBeforeEnter(C){ta(I,[C]),Rr(C,s),Rr(C,a)},onBeforeAppear(C){ta(N,[C]),Rr(C,l),Rr(C,u)},onEnter:k(!1),onAppear:k(!0),onLeave(C,A){C._isLeaving=!0;const B=()=>T(C,A);Rr(C,d),Rr(C,h),uT(),qw(()=>{C._isLeaving&&(fs(C,d),Rr(C,v),zw(P)||Gw(C,i,y,B))}),ta(P,[C,B])},onEnterCancelled(C){_(C,!1),ta(V,[C])},onAppearCancelled(C){_(C,!0),ta(b,[C])},onLeaveCancelled(C){T(C),ta(D,[C])}})}function TO(e){if(e==null)return null;if(Rt(e))return[$m(e.enter),$m(e.leave)];{const t=$m(e);return[t,t]}}function $m(e){return OD(e)}function Rr(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Fo]||(e[Fo]=new Set)).add(t)}function fs(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Fo];n&&(n.delete(t),n.size||(e[Fo]=void 0))}function qw(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let kO=0;function Gw(e,t,n,i){const r=e._endId=++kO,s=()=>{r===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=lT(e,t);if(!a)return i();const u=a+"end";let c=0;const d=()=>{e.removeEventListener(u,h),s()},h=v=>{v.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},o+1),e.addEventListener(u,h)}function lT(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),r=i(`${us}Delay`),s=i(`${us}Duration`),a=Kw(r,s),o=i(`${Ul}Delay`),l=i(`${Ul}Duration`),u=Kw(o,l);let c=null,d=0,h=0;t===us?a>0&&(c=us,d=a,h=s.length):t===Ul?u>0&&(c=Ul,d=u,h=l.length):(d=Math.max(a,u),c=d>0?a>u?us:Ul:null,h=c?c===us?s.length:l.length:0);const v=c===us&&/\b(transform|all)(,|$)/.test(i(`${us}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:v}}function Kw(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Yw(n)+Yw(e[i])))}function Yw(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function uT(){return document.body.offsetHeight}function AO(e,t,n){const i=e[Fo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ef=Symbol("_vod"),cT=Symbol("_vsh"),Qi={beforeMount(e,{value:t},{transition:n}){e[ef]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Hl(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Hl(e,!0),i.enter(e)):i.leave(e,()=>{Hl(e,!1)}):Hl(e,t))},beforeUnmount(e,{value:t}){Hl(e,t)}};function Hl(e,t){e.style.display=t?e[ef]:"none",e[cT]=!t}const PO=Symbol(""),RO=/(^|;)\s*display\s*:/;function xO(e,t,n){const i=e.style,r=Ht(n);let s=!1;if(n&&!r){if(t)if(Ht(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&xd(i,o,"")}else for(const a in t)n[a]==null&&xd(i,a,"");for(const a in n)a==="display"&&(s=!0),xd(i,a,n[a])}else if(r){if(t!==n){const a=i[PO];a&&(n+=";"+a),i.cssText=n,s=RO.test(n)}}else t&&e.removeAttribute("style");ef in e&&(e[ef]=s?i.display:"",e[cT]&&(i.display="none"))}const Qw=/\s*!important$/;function xd(e,t,n){if(Be(n))n.forEach(i=>xd(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=VO(e,t);Qw.test(n)?e.setProperty(Ls(i),n.replace(Qw,""),"important"):e[i]=n}}const Xw=["Webkit","Moz","ms"],Um={};function VO(e,t){const n=Um[t];if(n)return n;let i=ai(t);if(i!=="filter"&&i in e)return Um[t]=i;i=gr(i);for(let r=0;r<Xw.length;r++){const s=Xw[r]+i;if(s in e)return Um[t]=s}return t}const Jw="http://www.w3.org/1999/xlink";function Zw(e,t,n,i,r,s=UD(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Jw,t.slice(6,t.length)):e.setAttributeNS(Jw,t,n):n==null||s&&!KE(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ms(n)?String(n):n)}function DO(e,t,n,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?rT(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,o=n==null?e.type==="checkbox"?"on":"":String(n);(a!==o||!("_value"in e))&&(e.value=o),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=KE(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function go(e,t,n,i){e.addEventListener(t,n,i)}function NO(e,t,n,i){e.removeEventListener(t,n,i)}const eS=Symbol("_vei");function OO(e,t,n,i,r=null){const s=e[eS]||(e[eS]={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=MO(t);if(i){const u=s[t]=BO(i,r);go(e,o,u,l)}else a&&(NO(e,o,a,l),s[t]=void 0)}}const tS=/(?:Once|Passive|Capture)$/;function MO(e){let t;if(tS.test(e)){t={};let i;for(;i=e.match(tS);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ls(e.slice(2)),t]}let Hm=0;const LO=Promise.resolve(),FO=()=>Hm||(LO.then(()=>Hm=0),Hm=Date.now());function BO(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Hi($O(i,n.value),t,5,[i])};return n.value=e,n.attached=FO(),n}function $O(e,t){if(Be(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const nS=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,UO=(e,t,n,i,r,s)=>{const a=r==="svg";t==="class"?AO(e,i,a):t==="style"?xO(e,n,i):zf(t)?Rp(t)||OO(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):HO(e,t,i,a))?(DO(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zw(e,t,i,a,s,t!=="value")):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Zw(e,t,i,a))};function HO(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&nS(t)&&qe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return nS(t)&&Ht(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!Ht(n)))}const dT=new WeakMap,fT=new WeakMap,tf=Symbol("_moveCb"),iS=Symbol("_enterCb"),jO=e=>(delete e.props.mode,e),WO=jO({name:"TransitionGroup",props:Xt({},aT,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=rl(),i=CC();let r,s;return Gp(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!KO(r[0].el,n.vnode.el,a))return;r.forEach(zO),r.forEach(qO);const o=r.filter(GO);uT(),o.forEach(l=>{const u=l.el,c=u.style;Rr(u,a),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[tf]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[tf]=null,fs(u,a))};u.addEventListener("transitionend",d)})}),()=>{const a=xe(e),o=oT(a);let l=a.tag||we;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),wa(c,Au(c,o,i,n)),dT.set(c,c.el.getBoundingClientRect()))}s=t.default?Wp(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&wa(c,Au(c,o,i,n))}return m(l,null,s)}}}),ey=WO;function zO(e){const t=e.el;t[tf]&&t[tf](),t[iS]&&t[iS]()}function qO(e){fT.set(e,e.el.getBoundingClientRect())}function GO(e){const t=dT.get(e),n=fT.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function KO(e,t,n){const i=e.cloneNode(),r=e[Fo];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:a}=lT(i);return s.removeChild(i),a}const rS=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Be(t)?n=>Ad(t,n):t};function YO(e){e.target.composing=!0}function sS(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jm=Symbol("_assign"),QO={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[jm]=rS(r);const s=i||r.props&&r.props.type==="number";go(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=kv(o)),e[jm](o)}),n&&go(e,"change",()=>{e.value=e.value.trim()}),t||(go(e,"compositionstart",YO),go(e,"compositionend",sS),go(e,"change",sS))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},a){if(e[jm]=rS(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?kv(e.value):e.value,l=t??"";o!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===l)||(e.value=l))}},XO=["ctrl","shift","alt","meta"],JO={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>XO.some(n=>e[`${n}Key`]&&!t.includes(n))},Bv=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...s)=>{for(let a=0;a<t.length;a++){const o=JO[t[a]];if(o&&o(r,t))return}return e(r,...s)})},ZO=Xt({patchProp:UO},EO);let aS;function hT(){return aS||(aS=YN(ZO))}const mT=(...e)=>{hT().render(...e)},vT=(...e)=>{const t=hT().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=tM(i);if(!r)return;const s=t._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,eM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function eM(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function tM(e){return Ht(e)?document.querySelector(e):e}var nM=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const iM=Symbol();var oS;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(oS||(oS={}));function rM(){const e=lc(!0),t=e.run(()=>ee({}));let n=[],i=[];const r=$p({install(s){r._a=s,s.provide(iM,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return!this._a&&!nM?i.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}var lS={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=function(e,t){if(!e)throw sl(t)},sl=function(e){return new Error("Firebase Database ("+gT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},sM=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],a=e[n++],o=e[n++],l=((r&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return t.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],a=r+1<e.length,o=a?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,c=s>>2,d=(s&3)<<4|o>>4;let h=(o&15)<<2|u>>6,v=u&63;l||(v=64,a||(h=64)),i.push(n[c],n[d],n[h],n[v])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pT(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sM(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||o==null||u==null||d==null)throw new aM;const h=s<<2|o>>4;if(i.push(h),u!==64){const v=o<<4&240|u>>2;if(i.push(v),d!==64){const g=u<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class aM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yT=function(e){const t=pT(e);return ah.encodeByteArray(t,!0)},nf=function(e){return yT(e).replace(/\./g,"")},rf=function(e){try{return ah.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(e){return _T(void 0,e)}function _T(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!lM(n)||(e[n]=_T(e[n],t[n]));return e}function lM(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=()=>uM().__FIREBASE_DEFAULTS__,dM=()=>{if(typeof process>"u"||typeof lS>"u")return;const e=lS.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fM=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&rf(e[1]);return t&&JSON.parse(t)},oh=()=>{try{return cM()||dM()||fM()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},bT=e=>{var t,n;return(n=(t=oh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hM=e=>{const t=bT(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},wT=()=>{var e;return(e=oh())===null||e===void 0?void 0:e.config},ST=e=>{var t;return(t=oh())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[nf(JSON.stringify(n)),nf(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zn())}function vM(){var e;const t=(e=oh())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gM(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pM(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function IT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yM(){const e=zn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ET(){return gT.NODE_ADMIN===!0}function _M(){return!vM()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CT(){try{return typeof indexedDB=="object"}catch{return!1}}function bM(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM="FirebaseError";class pr extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=wM,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],a=s?SM(s,i):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new pr(r,o,i)}}function SM(e,t){return e.replace(IM,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const IM=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(e){return JSON.parse(e)}function En(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=xu(rf(s[0])||""),n=xu(rf(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:r}},EM=function(e){const t=TT(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CM=function(e){const t=TT(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bo(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function $v(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function sf(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function af(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],a=t[r];if(uS(s)&&uS(a)){if(!af(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function uS(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Xl(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function Jl(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)i[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],o=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=o^s&(a^o),c=1518500249):(u=s^a^o,c=1859775393):d<60?(u=s&a|o&(s|a),c=2400959708):(u=s^a^o,c=3395469782);const h=(r<<5|r>>>27)+u+l+c+i[d]&4294967295;l=o,o=a,a=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let a=this.inbuf_;for(;r<n;){if(a===0)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<n;)if(s[a]=t.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}else for(;r<n;)if(s[a]=t[r],++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}this.inbuf_=a,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)t[i]=this.chain_[r]>>s&255,++i;return t}}function kM(e,t){const n=new AM(e,t);return n.subscribe.bind(n)}class AM{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");PM(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Wm),r.error===void 0&&(r.error=Wm),r.complete===void 0&&(r.complete=Wm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PM(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Wm(){}function RM(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,ke(i<e.length,"Surrogate pair missing trail surrogate.");const a=e.charCodeAt(i)-56320;r=65536+(s<<10)+a}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},lh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return e&&e._delegate?e._delegate:e}class ji{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Ru;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(NM(t))try{this.getOrInitializeService({instanceIdentifier:sa})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=sa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sa){return this.instances.has(t)}getOptions(t=sa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&a.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:DM(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=sa){return this.component?this.component.multipleInstances?t:sa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DM(e){return e===sa?void 0:e}function NM(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new VM(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Je||(Je={}));const MM={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},LM=Je.INFO,FM={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},BM=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=FM[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mc{constructor(t){this.name=t,this._logLevel=LM,this._logHandler=BM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?MM[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...t),this._logHandler(this,Je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...t),this._logHandler(this,Je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...t),this._logHandler(this,Je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...t),this._logHandler(this,Je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...t),this._logHandler(this,Je.ERROR,...t)}}const $M=(e,t)=>t.some(n=>e instanceof n);let cS,dS;function UM(){return cS||(cS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HM(){return dS||(dS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kT=new WeakMap,Uv=new WeakMap,AT=new WeakMap,zm=new WeakMap,ny=new WeakMap;function jM(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Es(e.result)),r()},a=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&kT.set(n,e)}).catch(()=>{}),ny.set(t,e),t}function WM(e){if(Uv.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),r()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Uv.set(e,t)}let Hv={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Uv.get(e);if(t==="objectStoreNames")return e.objectStoreNames||AT.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Es(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function zM(e){Hv=e(Hv)}function qM(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(qm(this),t,...n);return AT.set(i,t.sort?t.sort():[t]),Es(i)}:HM().includes(e)?function(...t){return e.apply(qm(this),t),Es(kT.get(this))}:function(...t){return Es(e.apply(qm(this),t))}}function GM(e){return typeof e=="function"?qM(e):(e instanceof IDBTransaction&&WM(e),$M(e,UM())?new Proxy(e,Hv):e)}function Es(e){if(e instanceof IDBRequest)return jM(e);if(zm.has(e))return zm.get(e);const t=GM(e);return t!==e&&(zm.set(e,t),ny.set(t,e)),t}const qm=e=>ny.get(e);function KM(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),o=Es(a);return i&&a.addEventListener("upgradeneeded",l=>{i(Es(a.result),l.oldVersion,l.newVersion,Es(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const YM=["get","getKey","getAll","getAllKeys","count"],QM=["put","add","delete","clear"],Gm=new Map;function fS(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gm.get(t))return Gm.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=QM.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||YM.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),r&&l.done]))[0]};return Gm.set(t,s),s}zM(e=>({...e,get:(t,n,i)=>fS(t,n)||e.get(t,n,i),has:(t,n)=>!!fS(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JM(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function JM(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jv="@firebase/app",hS="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new mc("@firebase/app"),ZM="@firebase/app-compat",eL="@firebase/analytics-compat",tL="@firebase/analytics",nL="@firebase/app-check-compat",iL="@firebase/app-check",rL="@firebase/auth",sL="@firebase/auth-compat",aL="@firebase/database",oL="@firebase/database-compat",lL="@firebase/functions",uL="@firebase/functions-compat",cL="@firebase/installations",dL="@firebase/installations-compat",fL="@firebase/messaging",hL="@firebase/messaging-compat",mL="@firebase/performance",vL="@firebase/performance-compat",gL="@firebase/remote-config",pL="@firebase/remote-config-compat",yL="@firebase/storage",_L="@firebase/storage-compat",bL="@firebase/firestore",wL="@firebase/vertexai-preview",SL="@firebase/firestore-compat",IL="firebase",EL="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="[DEFAULT]",CL={[jv]:"fire-core",[ZM]:"fire-core-compat",[tL]:"fire-analytics",[eL]:"fire-analytics-compat",[iL]:"fire-app-check",[nL]:"fire-app-check-compat",[rL]:"fire-auth",[sL]:"fire-auth-compat",[aL]:"fire-rtdb",[oL]:"fire-rtdb-compat",[lL]:"fire-fn",[uL]:"fire-fn-compat",[cL]:"fire-iid",[dL]:"fire-iid-compat",[fL]:"fire-fcm",[hL]:"fire-fcm-compat",[mL]:"fire-perf",[vL]:"fire-perf-compat",[gL]:"fire-rc",[pL]:"fire-rc-compat",[yL]:"fire-gcs",[_L]:"fire-gcs-compat",[bL]:"fire-fst",[SL]:"fire-fst-compat",[wL]:"fire-vertex","fire-js":"fire-js",[IL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map,TL=new Map,zv=new Map;function mS(e,t){try{e.container.addComponent(t)}catch(n){Wr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function cr(e){const t=e.name;if(zv.has(t))return Wr.debug(`There were multiple attempts to register component ${t}.`),!1;zv.set(t,e);for(const n of Vu.values())mS(n,e);for(const n of TL.values())mS(n,e);return!0}function iy(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Mi(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cs=new al("app","Firebase",kL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Cs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=EL;function PT(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Wv,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Cs.create("bad-app-name",{appName:String(r)});if(n||(n=wT()),!n)throw Cs.create("no-options");const s=Vu.get(r);if(s){if(af(n,s.options)&&af(i,s.config))return s;throw Cs.create("duplicate-app",{appName:r})}const a=new OM(r);for(const l of zv.values())a.addComponent(l);const o=new AL(n,i,a);return Vu.set(r,o),o}function ry(e=Wv){const t=Vu.get(e);if(!t&&e===Wv&&wT())return PT();if(!t)throw Cs.create("no-app",{appName:e});return t}function PL(){return Array.from(Vu.values())}function pi(e,t,n){var i;let r=(i=CL[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wr.warn(o.join(" "));return}cr(new ji(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL="firebase-heartbeat-database",xL=1,Du="firebase-heartbeat-store";let Km=null;function RT(){return Km||(Km=KM(RL,xL,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Du)}catch(n){console.warn(n)}}}}).catch(e=>{throw Cs.create("idb-open",{originalErrorMessage:e.message})})),Km}async function VL(e){try{const n=(await RT()).transaction(Du),i=await n.objectStore(Du).get(xT(e));return await n.done,i}catch(t){if(t instanceof pr)Wr.warn(t.message);else{const n=Cs.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wr.warn(n.message)}}}async function vS(e,t){try{const i=(await RT()).transaction(Du,"readwrite");await i.objectStore(Du).put(t,xT(e)),await i.done}catch(n){if(n instanceof pr)Wr.warn(n.message);else{const i=Cs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wr.warn(i.message)}}}function xT(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=1024,NL=30*24*60*60*1e3;class OL{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LL(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gS();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=NL}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Wr.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gS(),{heartbeatsToSend:i,unsentEntries:r}=ML(this._heartbeatsCache.heartbeats),s=nf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Wr.warn(n),""}}}function gS(){return new Date().toISOString().substring(0,10)}function ML(e,t=DL){const n=[];let i=e.slice();for(const r of e){const s=n.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),pS(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),pS(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class LL{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CT()?bM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function pS(e){return nf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(e){cr(new ji("platform-logger",t=>new XM(t),"PRIVATE")),cr(new ji("heartbeat",t=>new OL(t),"PRIVATE")),pi(jv,hS,e),pi(jv,hS,"esm2017"),pi("fire-js","")}FL("");function sy(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function VT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BL=VT,DT=new al("auth","Firebase",VT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new mc("@firebase/auth");function $L(e,...t){of.logLevel<=Je.WARN&&of.warn(`Auth (${Hs}): ${e}`,...t)}function Vd(e,...t){of.logLevel<=Je.ERROR&&of.error(`Auth (${Hs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e,...t){throw oy(e,...t)}function $i(e,...t){return oy(e,...t)}function ay(e,t,n){const i=Object.assign(Object.assign({},BL()),{[t]:n});return new al("auth","Firebase",i).create(t,{appName:e.name})}function Ur(e){return ay(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function UL(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&xi(e,"argument-error"),ay(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oy(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return DT.create(e,...t)}function We(e,t,...n){if(!e)throw oy(t,...n)}function Or(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Vd(t),new Error(t)}function zr(e,t){e||Or(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function HL(){return yS()==="http:"||yS()==="https:"}function yS(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HL()||pM()||"connection"in navigator)?navigator.onLine:!0}function WL(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,n){this.shortDelay=t,this.longDelay=n,zr(n>t,"Short delay should be less than long delay!"),this.isMobile=ty()||IT()}get(){return jL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(e,t){zr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new vc(3e4,6e4);function Zr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function yr(e,t,n,i,r={}){return OT(e,r,async()=>{let s={},a={};i&&(t==="GET"?a=i:s={body:JSON.stringify(i)});const o=ol(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return gM()||(u.referrerPolicy="no-referrer"),NT.fetch()(MT(e,e.config.apiHost,n,o),u)})}async function OT(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},zL),t);try{const r=new KL(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw dd(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dd(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw dd(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw dd(e,"user-disabled",a);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ay(e,c,u);xi(e,c)}}catch(r){if(r instanceof pr)throw r;xi(e,"network-request-failed",{message:String(r)})}}async function gc(e,t,n,i,r={}){const s=await yr(e,t,n,i,r);return"mfaPendingCredential"in s&&xi(e,"multi-factor-auth-required",{_serverResponse:s}),s}function MT(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?ly(e.config,r):`${e.config.apiScheme}://${r}`}function GL(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KL{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i($i(this.auth,"network-request-failed")),qL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=$i(e,t,i);return r.customData._tokenResponse=n,r}function _S(e){return e!==void 0&&e.enterprise!==void 0}class YL{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return GL(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function QL(e,t){return yr(e,"GET","/v2/recaptchaConfig",Zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL(e,t){return yr(e,"POST","/v1/accounts:delete",t)}async function LT(e,t){return yr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function JL(e,t=!1){const n=Jt(e),i=await n.getIdToken(t),r=uy(i);We(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:du(Ym(r.auth_time)),issuedAtTime:du(Ym(r.iat)),expirationTime:du(Ym(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ym(e){return Number(e)*1e3}function uy(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Vd("JWT malformed, contained fewer than 3 sections"),null;try{const r=rf(n);return r?JSON.parse(r):(Vd("Failed to decode base64 JWT payload"),null)}catch(r){return Vd("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bS(e){const t=uy(e);return We(t,"internal-error"),We(typeof t.exp<"u","internal-error"),We(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof pr&&ZL(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ZL({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=du(this.lastLoginAt),this.creationTime=du(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(e){var t;const n=e.auth,i=await e.getIdToken(),r=await $o(e,LT(n,{idToken:i}));We(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?FT(s.providerUserInfo):[],o=nF(e.providerData,a),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Gv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function tF(e){const t=Jt(e);await lf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nF(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function FT(e){return e.map(t=>{var{providerId:n}=t,i=sy(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iF(e,t){const n=await OT(e,{},async()=>{const i=ol({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=MT(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",NT.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rF(e,t){return yr(e,"POST","/v2/accounts:revokeToken",Zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){We(t.idToken,"internal-error"),We(typeof t.idToken<"u","internal-error"),We(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){We(t.length!==0,"internal-error");const n=bS(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(We(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await iF(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,a=new xo;return i&&(We(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),r&&(We(typeof r=="string","internal-error",{appName:t}),a.accessToken=r),s&&(We(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e,t){We(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Mr{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=sy(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await $o(this,this.stsTokenManager.getToken(this.auth,t));return We(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return JL(this,t)}reload(){return tF(this)}_assign(t){this!==t&&(We(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Mr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){We(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await lf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mi(this.auth.app))return Promise.reject(Ur(this.auth));const t=await this.getIdToken();return await $o(this,XL(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,a,o,l,u,c;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(a=n.photoURL)!==null&&a!==void 0?a:void 0,p=(o=n.tenantId)!==null&&o!==void 0?o:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:V,emailVerified:P,isAnonymous:D,providerData:N,stsTokenManager:R}=n;We(V&&R,t,"internal-error");const b=xo.fromJSON(this.name,R);We(typeof V=="string",t,"internal-error"),cs(d,t.name),cs(h,t.name),We(typeof P=="boolean",t,"internal-error"),We(typeof D=="boolean",t,"internal-error"),cs(v,t.name),cs(g,t.name),cs(p,t.name),cs(y,t.name),cs(I,t.name),cs(E,t.name);const _=new Mr({uid:V,auth:t,email:h,emailVerified:P,displayName:d,isAnonymous:D,photoURL:g,phoneNumber:v,tenantId:p,stsTokenManager:b,createdAt:I,lastLoginAt:E});return N&&Array.isArray(N)&&(_.providerData=N.map(T=>Object.assign({},T))),y&&(_._redirectEventId=y),_}static async _fromIdTokenResponse(t,n,i=!1){const r=new xo;r.updateFromServerResponse(n);const s=new Mr({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await lf(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];We(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?FT(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),o=new xo;o.updateFromIdToken(i);const l=new Mr({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Gv(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Map;function Lr(e){zr(e instanceof Function,"Expected a class definition");let t=wS.get(e);return t?(zr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wS.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}BT.type="NONE";const SS=BT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(e,t,n){return`firebase:${e}:${t}:${n}`}class Vo{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Dd(this.userKey,r.apiKey,s),this.fullPersistenceKey=Dd("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Vo(Lr(SS),t,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Lr(SS);const a=Dd(i,t.config.apiKey,t.name);let o=null;for(const u of n)try{const c=await u._get(a);if(c){const d=Mr._fromJSON(t,c);u!==s&&(o=d),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vo(s,t,i):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Vo(s,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($T(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zT(t))return"Blackberry";if(qT(t))return"Webos";if(UT(t))return"Safari";if((t.includes("chrome/")||HT(t))&&!t.includes("edge/"))return"Chrome";if(WT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $T(e=zn()){return/firefox\//i.test(e)}function UT(e=zn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function HT(e=zn()){return/crios\//i.test(e)}function jT(e=zn()){return/iemobile/i.test(e)}function WT(e=zn()){return/android/i.test(e)}function zT(e=zn()){return/blackberry/i.test(e)}function qT(e=zn()){return/webos/i.test(e)}function cy(e=zn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function sF(e=zn()){var t;return cy(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function aF(){return yM()&&document.documentMode===10}function GT(e=zn()){return cy(e)||WT(e)||qT(e)||zT(e)||/windows phone/i.test(e)||jT(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(e,t=[]){let n;switch(e){case"Browser":n=IS(zn());break;case"Worker":n=`${IS(zn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lF(e,t={}){return yr(e,"GET","/v2/passwordPolicy",Zr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF=6;class cF{constructor(t){var n,i,r,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:uF,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,r,s,a,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ES(this),this.idTokenSubscription=new ES(this),this.beforeStateQueue=new oF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Lr(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Vo.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await LT(this,{idToken:t}),i=await Mr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Mi(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return We(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await lf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=WL()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Mi(this.app))return Promise.reject(Ur(this));const n=t?Jt(t):null;return n&&We(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&We(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Mi(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Mi(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await lF(this),n=new cF(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new al("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await rF(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Lr(t)||this._popupRedirectResolver;We(n,this,"argument-error"),this.redirectPersistenceManager=await Vo.create(this,[Lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(We(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,r);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return We(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=KT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&$L(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function es(e){return Jt(e)}class ES{constructor(t){this.auth=t,this.observer=null,this.addObserver=kM(n=>this.observer=n)}get next(){return We(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fF(e){uh=e}function YT(e){return uh.loadJS(e)}function hF(){return uh.recaptchaEnterpriseScript}function mF(){return uh.gapiScript}function vF(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const gF="recaptcha-enterprise",pF="NO_RECAPTCHA";class yF{constructor(t){this.type=gF,this.auth=es(t)}async verify(t="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{QL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new YL(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(l=>{o(l)})})}function r(s,a,o){const l=window.grecaptcha;_S(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{a(u)}).catch(()=>{a(pF)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{i(this.auth).then(o=>{if(!n&&_S(window.grecaptcha))r(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hF();l.length!==0&&(l+=o),YT(l).then(()=>{r(o,s,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}async function CS(e,t,n,i=!1){const r=new yF(e);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const a=Object.assign({},t);return i?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function uf(e,t,n,i){var r;if(!((r=e._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await CS(e,t,n,n==="getOobCode");return i(e,s)}else return i(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await CS(e,t,n,n==="getOobCode");return i(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(e,t){const n=iy(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(af(s,t??{}))return r;xi(r,"already-initialized")}return n.initialize({options:t})}function _F(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Lr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function XT(e,t,n){const i=es(e);We(i._canInitEmulator,i,"emulator-config-failed"),We(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!1,s=JT(t),{host:a,port:o}=bF(t),l=o===null?"":`:${o}`;i.config.emulator={url:`${s}//${a}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),wF()}function JT(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bF(e){const t=JT(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:TS(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:TS(a)}}}function TS(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function wF(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Or("not implemented")}_getIdTokenResponse(t){return Or("not implemented")}_linkToIdToken(t,n){return Or("not implemented")}_getReauthenticationResolver(t){return Or("not implemented")}}async function SF(e,t){return yr(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IF(e,t){return gc(e,"POST","/v1/accounts:signInWithPassword",Zr(e,t))}async function EF(e,t){return yr(e,"POST","/v1/accounts:sendOobCode",Zr(e,t))}async function CF(e,t){return EF(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TF(e,t){return gc(e,"POST","/v1/accounts:signInWithEmailLink",Zr(e,t))}async function kF(e,t){return gc(e,"POST","/v1/accounts:signInWithEmailLink",Zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends dy{constructor(t,n,i,r=null){super("password",i),this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new Nu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Nu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uf(t,n,"signInWithPassword",IF);case"emailLink":return TF(t,{email:this._email,oobCode:this._password});default:xi(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uf(t,i,"signUpPassword",SF);case"emailLink":return kF(t,{idToken:n,email:this._email,oobCode:this._password});default:xi(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(e,t){return gc(e,"POST","/v1/accounts:signInWithIdp",Zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF="http://localhost";class Ia extends dy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ia(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=sy(n,["providerId","signInMethod"]);if(!i||!r)return null;const a=new Ia(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Do(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Do(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Do(t,n)}buildRequest(){const t={requestUri:AF,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ol(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PF(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RF(e){const t=Xl(Jl(e)).link,n=t?Xl(Jl(t)).deep_link_id:null,i=Xl(Jl(e)).deep_link_id;return(i?Xl(Jl(i)).link:null)||i||n||t||e}class fy{constructor(t){var n,i,r,s,a,o;const l=Xl(Jl(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(i=l.oobCode)!==null&&i!==void 0?i:null,d=PF((r=l.mode)!==null&&r!==void 0?r:null);We(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=l.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=RF(t);try{return new fy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.providerId=ll.PROVIDER_ID}static credential(t,n){return Nu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=fy.parseLink(n);return We(i,"argument-error"),Nu._fromEmailAndCode(t,i.code,i.tenantId)}}ll.PROVIDER_ID="password";ll.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ll.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends hy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends pc{constructor(){super("facebook.com")}static credential(t){return Ia._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _s.credentialFromTaggedObject(t)}static credentialFromError(t){return _s.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _s.credential(t.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends pc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ia._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Nr.credential(n,i)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends pc{constructor(){super("github.com")}static credential(t){return Ia._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bs.credentialFromTaggedObject(t)}static credentialFromError(t){return bs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bs.credential(t.oauthAccessToken)}catch{return null}}}bs.GITHUB_SIGN_IN_METHOD="github.com";bs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends pc{constructor(){super("twitter.com")}static credential(t,n){return Ia._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ws.credentialFromTaggedObject(t)}static credentialFromError(t){return ws.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ws.credential(n,i)}catch{return null}}}ws.TWITTER_SIGN_IN_METHOD="twitter.com";ws.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xF(e,t){return gc(e,"POST","/v1/accounts:signUp",Zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await Mr._fromIdTokenResponse(t,i,r),a=kS(i);return new Ea({user:s,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=kS(i);return new Ea({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function kS(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends pr{constructor(t,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,cf.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new cf(t,n,i,r)}}function ZT(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cf._fromErrorAndOperation(e,s,t,i):s})}async function VF(e,t,n=!1){const i=await $o(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ea._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DF(e,t,n=!1){const{auth:i}=e;if(Mi(i.app))return Promise.reject(Ur(i));const r="reauthenticate";try{const s=await $o(e,ZT(i,r,t,e),n);We(s.idToken,i,"internal-error");const a=uy(s.idToken);We(a,i,"internal-error");const{sub:o}=a;return We(e.uid===o,i,"user-mismatch"),Ea._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xi(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(e,t,n=!1){if(Mi(e.app))return Promise.reject(Ur(e));const i="signIn",r=await ZT(e,i,t),s=await Ea._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function NF(e,t){return ek(es(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(e){const t=es(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function fQ(e,t,n){const i=es(e);await uf(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CF)}async function hQ(e,t,n){if(Mi(e.app))return Promise.reject(Ur(e));const i=es(e),a=await uf(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xF).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tk(e),l}),o=await Ea._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(o.user),o}function mQ(e,t,n){return Mi(e.app)?Promise.reject(Ur(e)):NF(Jt(e),ll.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&tk(e),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OF(e,t){return yr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vQ(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=Jt(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await $o(i,OF(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const o=i.providerData.find(({providerId:l})=>l==="password");o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function nk(e,t,n,i){return Jt(e).onIdTokenChanged(t,n,i)}function MF(e,t,n){return Jt(e).beforeAuthStateChanged(t,n)}function LF(e){return Jt(e).signOut()}const df="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(df,"1"),this.storage.removeItem(df),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF=1e3,BF=10;class rk extends ik{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const i=t.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);aF()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,BF):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},FF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}rk.type="LOCAL";const sk=rk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak extends ik{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ak.type="SESSION";const my=ak;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $F(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new ch(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(a).map(async u=>u(n.origin,s)),l=await $F(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=vy("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return window}function HF(e){ar().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function jF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WF(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function zF(){return ok()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="firebaseLocalStorageDb",qF=1,ff="firebaseLocalStorage",uk="fbase_key";class yc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dh(e,t){return e.transaction([ff],t?"readwrite":"readonly").objectStore(ff)}function GF(){const e=indexedDB.deleteDatabase(lk);return new yc(e).toPromise()}function Kv(){const e=indexedDB.open(lk,qF);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(ff,{keyPath:uk})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(ff)?t(i):(i.close(),await GF(),t(await Kv()))})})}async function AS(e,t,n){const i=dh(e,!0).put({[uk]:t,value:n});return new yc(i).toPromise()}async function KF(e,t){const n=dh(e,!1).get(t),i=await new yc(n).toPromise();return i===void 0?null:i.value}function PS(e,t){const n=dh(e,!0).delete(t);return new yc(n).toPromise()}const YF=800,QF=3;class ck{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>QF)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ok()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ch._getInstance(zF()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await jF(),!this.activeServiceWorker)return;this.sender=new UF(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||WF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kv();return await AS(t,df,"1"),await PS(t,df),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>AS(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>KF(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>PS(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=dh(r,!1).getAll();return new yc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ck.type="LOCAL";const dk=ck;new vc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(e,t){return t?Lr(t):(We(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends dy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Do(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Do(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Do(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function XF(e){return ek(e.auth,new gy(e),e.bypassAuthState)}function JF(e){const{auth:t,user:n}=e;return We(n,t,"internal-error"),DF(n,new gy(e),e.bypassAuthState)}async function ZF(e){const{auth:t,user:n}=e;return We(n,t,"internal-error"),VF(n,new gy(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return XF;case"linkViaPopup":case"linkViaRedirect":return ZF;case"reauthViaPopup":case"reauthViaRedirect":return JF;default:xi(this.auth,"internal-error")}}resolve(t){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new vc(2e3,1e4);async function gQ(e,t,n){if(Mi(e.app))return Promise.reject($i(e,"operation-not-supported-in-this-environment"));const i=es(e);UL(e,t,hy);const r=fk(i,n);return new la(i,"signInViaPopup",t,r).executeNotNull()}class la extends hk{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,la.currentPopupAction&&la.currentPopupAction.cancel(),la.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return We(t,this.auth,"internal-error"),t}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const t=vy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($i(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject($i(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,la.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($i(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,e2.get())};t()}}la.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2="pendingRedirect",Nd=new Map;class n2 extends hk{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Nd.get(this.auth._key());if(!t){try{const i=await i2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Nd.set(this.auth._key(),t)}return this.bypassAuthState||Nd.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i2(e,t){const n=a2(t),i=s2(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function r2(e,t){Nd.set(e._key(),t)}function s2(e){return Lr(e._redirectPersistence)}function a2(e){return Dd(t2,e.config.apiKey,e.name)}async function o2(e,t,n=!1){if(Mi(e.app))return Promise.reject(Ur(e));const i=es(e),r=fk(i,t),a=await new n2(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=10*60*1e3;class u2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!c2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!mk(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError($i(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=l2&&this.cachedEventUids.clear(),this.cachedEventUids.has(RS(t))}saveEventToCache(t){this.cachedEventUids.add(RS(t)),this.lastProcessedEventTime=Date.now()}}function RS(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function mk({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function c2(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mk(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(e,t={}){return yr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h2=/^https?/;async function m2(e){if(e.config.emulator)return;const{authorizedDomains:t}=await d2(e);for(const n of t)try{if(v2(n))return}catch{}xi(e,"unauthorized-domain")}function v2(e){const t=qv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!h2.test(n))return!1;if(f2.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new vc(3e4,6e4);function xS(){const e=ar().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function p2(e){return new Promise((t,n)=>{var i,r,s;function a(){xS(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xS(),n($i(e,"network-request-failed"))},timeout:g2.get()})}if(!((r=(i=ar().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=ar().gapi)===null||s===void 0)&&s.load)a();else{const o=vF("iframefcb");return ar()[o]=()=>{gapi.load?a():n($i(e,"network-request-failed"))},YT(`${mF()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Od=null,t})}let Od=null;function y2(e){return Od=Od||p2(e),Od}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=new vc(5e3,15e3),b2="__/auth/iframe",w2="emulator/auth/iframe",S2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E2(e){const t=e.config;We(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ly(t,w2):`https://${e.config.authDomain}/${b2}`,i={apiKey:t.apiKey,appName:e.name,v:Hs},r=I2.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ol(i).slice(1)}`}async function C2(e){const t=await y2(e),n=ar().gapi;return We(n,e,"internal-error"),t.open({where:document.body,url:E2(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S2,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=$i(e,"network-request-failed"),o=ar().setTimeout(()=>{s(a)},_2.get());function l(){ar().clearTimeout(o),r(i)}i.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k2=500,A2=600,P2="_blank",R2="http://localhost";class VS{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x2(e,t,n,i=k2,r=A2){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},T2),{width:i.toString(),height:r.toString(),top:s,left:a}),u=zn().toLowerCase();n&&(o=HT(u)?P2:n),$T(u)&&(t=t||R2,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,g])=>`${h}${v}=${g},`,"");if(sF(u)&&o!=="_self")return V2(t||"",o),new VS(null);const d=window.open(t||"",o,c);We(d,e,"popup-blocked");try{d.focus()}catch{}return new VS(d)}function V2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="__/auth/handler",N2="emulator/auth/handler",O2=encodeURIComponent("fac");async function DS(e,t,n,i,r,s){We(e.config.authDomain,e,"auth-domain-config-required"),We(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Hs,eventId:r};if(t instanceof hy){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",$v(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries({}))a[c]=d}if(t instanceof pc){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(a.scopes=c.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${O2}=${encodeURIComponent(l)}`:"";return`${M2(e)}?${ol(o).slice(1)}${u}`}function M2({config:e}){return e.emulator?ly(e,N2):`https://${e.authDomain}/${D2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="webStorageSupport";class L2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=o2,this._overrideRedirectResult=r2}async _openPopup(t,n,i,r){var s;zr((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await DS(t,n,i,qv(),r);return x2(t,a,vy())}async _openRedirect(t,n,i,r){await this._originValidation(t);const s=await DS(t,n,i,qv(),r);return HF(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(zr(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await C2(t),i=new u2(t);return n.register("authEvent",r=>(We(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qm,{type:Qm},r=>{var s;const a=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Qm];a!==void 0&&n(!!a),xi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return GT()||UT()||cy()}}const vk=L2;var NS="@firebase/auth",OS="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){We(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $2(e){cr(new ji("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;We(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KT(e)},u=new dF(i,r,s,l);return _F(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),cr(new ji("auth-internal",t=>{const n=es(t.getProvider("auth").getImmediate());return(i=>new F2(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(NS,OS,B2(e)),pi(NS,OS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=5*60,H2=ST("authIdTokenMaxAge")||U2;let MS=null;const j2=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>H2)return;const r=n==null?void 0:n.token;MS!==r&&(MS=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function W2(e=ry()){const t=iy(e,"auth");if(t.isInitialized())return t.getImmediate();const n=QT(e,{popupRedirectResolver:vk,persistence:[dk,sk,my]}),i=ST("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=j2(s.toString());MF(n,a,()=>a(n.currentUser)),nk(n,o=>a(o))}}const r=bT("auth");return r&&XT(n,`http://${r}`),n}function z2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}fF({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=$i("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",z2().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$2("Browser");/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const po=typeof document<"u";function gk(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function q2(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&gk(e.default)}const bt=Object.assign;function Xm(e,t){const n={};for(const i in t){const r=t[i];n[i]=Wi(r)?r.map(e):e(r)}return n}const fu=()=>{},Wi=Array.isArray,pk=/#/g,G2=/&/g,K2=/\//g,Y2=/=/g,Q2=/\?/g,yk=/\+/g,X2=/%5B/g,J2=/%5D/g,_k=/%5E/g,Z2=/%60/g,bk=/%7B/g,eB=/%7C/g,wk=/%7D/g,tB=/%20/g;function py(e){return encodeURI(""+e).replace(eB,"|").replace(X2,"[").replace(J2,"]")}function nB(e){return py(e).replace(bk,"{").replace(wk,"}").replace(_k,"^")}function Yv(e){return py(e).replace(yk,"%2B").replace(tB,"+").replace(pk,"%23").replace(G2,"%26").replace(Z2,"`").replace(bk,"{").replace(wk,"}").replace(_k,"^")}function iB(e){return Yv(e).replace(Y2,"%3D")}function rB(e){return py(e).replace(pk,"%23").replace(Q2,"%3F")}function sB(e){return e==null?"":rB(e).replace(K2,"%2F")}function Ou(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const aB=/\/$/,oB=e=>e.replace(aB,"");function Jm(e,t,n="/"){let i,r={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,o>-1?o:t.length),r=e(s)),o>-1&&(i=i||t.slice(0,o),a=t.slice(o,t.length)),i=dB(i??t,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Ou(a)}}function lB(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function LS(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function uB(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Uo(t.matched[i],n.matched[r])&&Sk(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Uo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Sk(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cB(e[n],t[n]))return!1;return!0}function cB(e,t){return Wi(e)?FS(e,t):Wi(t)?FS(t,e):e===t}function FS(e,t){return Wi(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function dB(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const ds={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Mu;(function(e){e.pop="pop",e.push="push"})(Mu||(Mu={}));var hu;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hu||(hu={}));function fB(e){if(!e)if(po){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),oB(e)}const hB=/^[^#]+#/;function mB(e,t){return e.replace(hB,"#")+t}function vB(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const fh=()=>({left:window.scrollX,top:window.scrollY});function gB(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=vB(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function BS(e,t){return(history.state?history.state.position-t:-1)+e}const Qv=new Map;function pB(e,t){Qv.set(e,t)}function yB(e){const t=Qv.get(e);return Qv.delete(e),t}let _B=()=>location.protocol+"//"+location.host;function Ik(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let o=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),LS(l,"")}return LS(n,e)+i+r}function bB(e,t,n,i){let r=[],s=[],a=null;const o=({state:h})=>{const v=Ik(e,location),g=n.value,p=t.value;let y=0;if(h){if(n.value=v,t.value=h,a&&a===g){a=null;return}y=p?h.position-p.position:0}else i(v);r.forEach(I=>{I(n.value,g,{delta:y,type:Mu.pop,direction:y?y>0?hu.forward:hu.back:hu.unknown})})};function l(){a=n.value}function u(h){r.push(h);const v=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(v),v}function c(){const{history:h}=window;h.state&&h.replaceState(bt({},h.state,{scroll:fh()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function $S(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?fh():null}}function wB(e){const{history:t,location:n}=window,i={value:Ik(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:_B()+e+l;try{t[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[c?"replace":"assign"](h)}}function a(l,u){const c=bt({},t.state,$S(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function o(l,u){const c=bt({},r.value,t.state,{forward:l,scroll:fh()});s(c.current,c,!0);const d=bt({},$S(i.value,l,null),{position:c.position+1},u);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function SB(e){e=fB(e);const t=wB(e),n=bB(e,t.state,t.location,t.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=bt({location:"",base:e,go:i,createHref:mB.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function IB(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),SB(e)}function EB(e){return typeof e=="string"||e&&typeof e=="object"}function Ek(e){return typeof e=="string"||typeof e=="symbol"}const Ck=Symbol("");var US;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(US||(US={}));function Ho(e,t){return bt(new Error,{type:e,[Ck]:!0},t)}function Pr(e,t){return e instanceof Error&&Ck in e&&(t==null||!!(e.type&t))}const HS="[^/]+?",CB={sensitive:!1,strict:!1,start:!0,end:!0},TB=/[.+*?^${}()[\]/\\]/g;function kB(e,t){const n=bt({},CB,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const h=u[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(TB,"\\$&"),v+=40;else if(h.type===1){const{value:g,repeatable:p,optional:y,regexp:I}=h;s.push({name:g,repeatable:p,optional:y});const E=I||HS;if(E!==HS){v+=10;try{new RegExp(`(${E})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+P.message)}}let V=p?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(V=y&&u.length<2?`(?:/${V})`:"/"+V),y&&(V+="?"),r+=V,v+=20,y&&(v+=-8),p&&(v+=-20),E===".*"&&(v+=-50)}c.push(v)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(u){const c=u.match(a),d={};if(!c)return null;for(let h=1;h<c.length;h++){const v=c[h]||"",g=s[h-1];d[g.name]=v&&g.repeatable?v.split("/"):v}return d}function l(u){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const v of h)if(v.type===0)c+=v.value;else if(v.type===1){const{value:g,repeatable:p,optional:y}=v,I=g in u?u[g]:"";if(Wi(I)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Wi(I)?I.join("/"):I;if(!E)if(y)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);c+=E}}return c||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function AB(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Tk(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=AB(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(jS(i))return 1;if(jS(r))return-1}return r.length-i.length}function jS(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const PB={type:0,value:""},RB=/[a-zA-Z0-9_]/;function xB(e){if(!e)return[[]];if(e==="/")return[[PB]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,u="",c="";function d(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),a()):l===":"?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:RB.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),r}function VB(e,t,n){const i=kB(xB(e.path),n),r=bt(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function DB(e,t){const n=[],i=new Map;t=GS({strict:!1,end:!0,sensitive:!1},t);function r(d){return i.get(d)}function s(d,h,v){const g=!v,p=zS(d);p.aliasOf=v&&v.record;const y=GS(t,d),I=[p];if("alias"in d){const P=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of P)I.push(zS(bt({},p,{components:v?v.record.components:p.components,path:D,aliasOf:v?v.record:p})))}let E,V;for(const P of I){const{path:D}=P;if(h&&D[0]!=="/"){const N=h.record.path,R=N[N.length-1]==="/"?"":"/";P.path=h.record.path+(D&&R+D)}if(E=VB(P,h,y),v?v.alias.push(E):(V=V||E,V!==E&&V.alias.push(E),g&&d.name&&!qS(E)&&a(d.name)),kk(E)&&l(E),p.children){const N=p.children;for(let R=0;R<N.length;R++)s(N[R],E,v&&v.children[R])}v=v||E}return V?()=>{a(V)}:fu}function a(d){if(Ek(d)){const h=i.get(d);h&&(i.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&i.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return n}function l(d){const h=MB(d,n);n.splice(h,0,d),d.record.name&&!qS(d)&&i.set(d.record.name,d)}function u(d,h){let v,g={},p,y;if("name"in d&&d.name){if(v=i.get(d.name),!v)throw Ho(1,{location:d});y=v.record.name,g=bt(WS(h.params,v.keys.filter(V=>!V.optional).concat(v.parent?v.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),d.params&&WS(d.params,v.keys.map(V=>V.name))),p=v.stringify(g)}else if(d.path!=null)p=d.path,v=n.find(V=>V.re.test(p)),v&&(g=v.parse(p),y=v.record.name);else{if(v=h.name?i.get(h.name):n.find(V=>V.re.test(h.path)),!v)throw Ho(1,{location:d,currentLocation:h});y=v.record.name,g=bt({},h.params,d.params),p=v.stringify(g)}const I=[];let E=v;for(;E;)I.unshift(E.record),E=E.parent;return{name:y,path:p,params:g,matched:I,meta:OB(I)}}e.forEach(d=>s(d));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:r}}function WS(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function zS(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:NB(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function NB(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function qS(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function OB(e){return e.reduce((t,n)=>bt(t,n.meta),{})}function GS(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function MB(e,t){let n=0,i=t.length;for(;n!==i;){const s=n+i>>1;Tk(e,t[s])<0?i=s:n=s+1}const r=LB(e);return r&&(i=t.lastIndexOf(r,i-1)),i}function LB(e){let t=e;for(;t=t.parent;)if(kk(t)&&Tk(e,t)===0)return t}function kk({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function FB(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(yk," "),a=s.indexOf("="),o=Ou(a<0?s:s.slice(0,a)),l=a<0?null:Ou(s.slice(a+1));if(o in t){let u=t[o];Wi(u)||(u=t[o]=[u]),u.push(l)}else t[o]=l}return t}function KS(e){let t="";for(let n in e){const i=e[n];if(n=iB(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Wi(i)?i.map(s=>s&&Yv(s)):[i&&Yv(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function BB(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Wi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const $B=Symbol(""),YS=Symbol(""),hh=Symbol(""),yy=Symbol(""),Xv=Symbol("");function jl(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ys(e,t,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const u=h=>{h===!1?l(Ho(4,{from:n,to:t})):h instanceof Error?l(h):EB(h)?l(Ho(2,{from:t,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},c=s(()=>e.call(i&&i.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(h=>l(h))})}function Zm(e,t,n,i,r=s=>s()){const s=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(gk(l)){const c=(l.__vccOpts||l)[t];c&&s.push(ys(c,n,i,a,o,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=q2(c)?c.default:c;a.mods[o]=c,a.components[o]=d;const v=(d.__vccOpts||d)[t];return v&&ys(v,n,i,a,o,r)()}))}}return s}function QS(e){const t=$e(hh),n=$e(yy),i=S(()=>{const l=it(e.to);return t.resolve(l)}),r=S(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Uo.bind(null,c));if(h>-1)return h;const v=XS(l[u-2]);return u>1&&XS(c)===v&&d[d.length-1].path!==v?d.findIndex(Uo.bind(null,l[u-2])):h}),s=S(()=>r.value>-1&&WB(n.params,i.value.params)),a=S(()=>r.value>-1&&r.value===n.matched.length-1&&Sk(n.params,i.value.params));function o(l={}){return jB(l)?t[it(e.replace)?"replace":"push"](it(e.to)).catch(fu):Promise.resolve()}return{route:i,href:S(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const UB=Us({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:QS,setup(e,{slots:t}){const n=Ut(QS(e)),{options:i}=$e(hh),r=S(()=>({[JS(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[JS(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Jn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),HB=UB;function jB(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function WB(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Wi(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function XS(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const JS=(e,t,n)=>e??t??n,zB=Us({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=$e(Xv),r=S(()=>e.route||i.value),s=$e(YS,0),a=S(()=>{let u=it(s);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),o=S(()=>r.value.matched[a.value]);vt(YS,S(()=>a.value+1)),vt($B,o),vt(Xv,r);const l=ee();return ve(()=>[l.value,o.value,e.name],([u,c,d],[h,v,g])=>{c&&(c.instances[d]=u,v&&v!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=v.leaveGuards),c.updateGuards.size||(c.updateGuards=v.updateGuards))),u&&c&&(!v||!Uo(c,v)||!h)&&(c.enterCallbacks[d]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=o.value,h=d&&d.components[c];if(!h)return ZS(n.default,{Component:h,route:u});const v=d.props[c],g=v?v===!0?u.params:typeof v=="function"?v(u):v:null,y=Jn(h,bt({},g,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return ZS(n.default,{Component:y,route:u})||y}}});function ZS(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const qB=zB;function GB(e){const t=DB(e.routes,e),n=e.parseQuery||FB,i=e.stringifyQuery||KS,r=e.history,s=jl(),a=jl(),o=jl(),l=me(ds);let u=ds;po&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Xm.bind(null,j=>""+j),d=Xm.bind(null,sB),h=Xm.bind(null,Ou);function v(j,oe){let he,ue;return Ek(j)?(he=t.getRecordMatcher(j),ue=oe):ue=j,t.addRoute(ue,he)}function g(j){const oe=t.getRecordMatcher(j);oe&&t.removeRoute(oe)}function p(){return t.getRoutes().map(j=>j.record)}function y(j){return!!t.getRecordMatcher(j)}function I(j,oe){if(oe=bt({},oe||l.value),typeof j=="string"){const M=Jm(n,j,oe.path),H=t.resolve({path:M.path},oe),Z=r.createHref(M.fullPath);return bt(M,H,{params:h(H.params),hash:Ou(M.hash),redirectedFrom:void 0,href:Z})}let he;if(j.path!=null)he=bt({},j,{path:Jm(n,j.path,oe.path).path});else{const M=bt({},j.params);for(const H in M)M[H]==null&&delete M[H];he=bt({},j,{params:d(M)}),oe.params=d(oe.params)}const ue=t.resolve(he,oe),re=j.hash||"";ue.params=c(h(ue.params));const Ee=lB(i,bt({},j,{hash:nB(re),path:ue.path})),O=r.createHref(Ee);return bt({fullPath:Ee,hash:re,query:i===KS?BB(j.query):j.query||{}},ue,{redirectedFrom:void 0,href:O})}function E(j){return typeof j=="string"?Jm(n,j,l.value.path):bt({},j)}function V(j,oe){if(u!==j)return Ho(8,{from:oe,to:j})}function P(j){return R(j)}function D(j){return P(bt(E(j),{replace:!0}))}function N(j){const oe=j.matched[j.matched.length-1];if(oe&&oe.redirect){const{redirect:he}=oe;let ue=typeof he=="function"?he(j):he;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=E(ue):{path:ue},ue.params={}),bt({query:j.query,hash:j.hash,params:ue.path!=null?{}:j.params},ue)}}function R(j,oe){const he=u=I(j),ue=l.value,re=j.state,Ee=j.force,O=j.replace===!0,M=N(he);if(M)return R(bt(E(M),{state:typeof M=="object"?bt({},re,M.state):re,force:Ee,replace:O}),oe||he);const H=he;H.redirectedFrom=oe;let Z;return!Ee&&uB(i,ue,he)&&(Z=Ho(16,{to:H,from:ue}),q(ue,ue,!0,!1)),(Z?Promise.resolve(Z):T(H,ue)).catch(X=>Pr(X)?Pr(X,2)?X:$(X):z(X,H,ue)).then(X=>{if(X){if(Pr(X,2))return R(bt({replace:O},E(X.to),{state:typeof X.to=="object"?bt({},re,X.to.state):re,force:Ee}),oe||H)}else X=C(H,ue,!0,O,re);return k(H,ue,X),X})}function b(j,oe){const he=V(j,oe);return he?Promise.reject(he):Promise.resolve()}function _(j){const oe=Se.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(j):j()}function T(j,oe){let he;const[ue,re,Ee]=KB(j,oe);he=Zm(ue.reverse(),"beforeRouteLeave",j,oe);for(const M of ue)M.leaveGuards.forEach(H=>{he.push(ys(H,j,oe))});const O=b.bind(null,j,oe);return he.push(O),ie(he).then(()=>{he=[];for(const M of s.list())he.push(ys(M,j,oe));return he.push(O),ie(he)}).then(()=>{he=Zm(re,"beforeRouteUpdate",j,oe);for(const M of re)M.updateGuards.forEach(H=>{he.push(ys(H,j,oe))});return he.push(O),ie(he)}).then(()=>{he=[];for(const M of Ee)if(M.beforeEnter)if(Wi(M.beforeEnter))for(const H of M.beforeEnter)he.push(ys(H,j,oe));else he.push(ys(M.beforeEnter,j,oe));return he.push(O),ie(he)}).then(()=>(j.matched.forEach(M=>M.enterCallbacks={}),he=Zm(Ee,"beforeRouteEnter",j,oe,_),he.push(O),ie(he))).then(()=>{he=[];for(const M of a.list())he.push(ys(M,j,oe));return he.push(O),ie(he)}).catch(M=>Pr(M,8)?M:Promise.reject(M))}function k(j,oe,he){o.list().forEach(ue=>_(()=>ue(j,oe,he)))}function C(j,oe,he,ue,re){const Ee=V(j,oe);if(Ee)return Ee;const O=oe===ds,M=po?history.state:{};he&&(ue||O?r.replace(j.fullPath,bt({scroll:O&&M&&M.scroll},re)):r.push(j.fullPath,re)),l.value=j,q(j,oe,he,O),$()}let A;function B(){A||(A=r.listen((j,oe,he)=>{if(!Pe.listening)return;const ue=I(j),re=N(ue);if(re){R(bt(re,{replace:!0}),ue).catch(fu);return}u=ue;const Ee=l.value;po&&pB(BS(Ee.fullPath,he.delta),fh()),T(ue,Ee).catch(O=>Pr(O,12)?O:Pr(O,2)?(R(O.to,ue).then(M=>{Pr(M,20)&&!he.delta&&he.type===Mu.pop&&r.go(-1,!1)}).catch(fu),Promise.reject()):(he.delta&&r.go(-he.delta,!1),z(O,ue,Ee))).then(O=>{O=O||C(ue,Ee,!1),O&&(he.delta&&!Pr(O,8)?r.go(-he.delta,!1):he.type===Mu.pop&&Pr(O,20)&&r.go(-1,!1)),k(ue,Ee,O)}).catch(fu)}))}let W=jl(),Q=jl(),se;function z(j,oe,he){$(j);const ue=Q.list();return ue.length?ue.forEach(re=>re(j,oe,he)):console.error(j),Promise.reject(j)}function U(){return se&&l.value!==ds?Promise.resolve():new Promise((j,oe)=>{W.add([j,oe])})}function $(j){return se||(se=!j,B(),W.list().forEach(([oe,he])=>j?he(j):oe()),W.reset()),j}function q(j,oe,he,ue){const{scrollBehavior:re}=e;if(!po||!re)return Promise.resolve();const Ee=!he&&yB(BS(j.fullPath,0))||(ue||!he)&&history.state&&history.state.scroll||null;return Qe().then(()=>re(j,oe,Ee)).then(O=>O&&gB(O)).catch(O=>z(O,j,oe))}const ne=j=>r.go(j);let ge;const Se=new Set,Pe={currentRoute:l,listening:!0,addRoute:v,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:p,resolve:I,options:e,push:P,replace:D,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:U,install(j){const oe=this;j.component("RouterLink",HB),j.component("RouterView",qB),j.config.globalProperties.$router=oe,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>it(l)}),po&&!ge&&l.value===ds&&(ge=!0,P(r.location).catch(re=>{}));const he={};for(const re in ds)Object.defineProperty(he,re,{get:()=>l.value[re],enumerable:!0});j.provide(hh,oe),j.provide(yy,hC(he)),j.provide(Xv,l);const ue=j.unmount;Se.add(j),j.unmount=function(){Se.delete(j),Se.size<1&&(u=ds,A&&A(),A=null,l.value=ds,ge=!1,se=!1),ue()}}};function ie(j){return j.reduce((oe,he)=>oe.then(()=>_(he)),Promise.resolve())}return Pe}function KB(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(u=>Uo(u,o))?i.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(u=>Uo(u,l))||r.push(l))}return[n,i,r]}function YB(){return $e(hh)}function QB(e){return $e(yy)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XB=new Map,JB={activated:!1,tokenObservers:[]};function zi(e){return XB.get(e)||Object.assign({},JB)}const e0={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZB{constructor(t,n,i,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Ru,this.pending.promise.catch(n=>{}),await e$(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Ru,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function e$(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t$={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},hf=new al("appCheck","AppCheck",t$);function Ak(e){if(!zi(e).activated)throw hf.create("use-before-activation",{appName:e.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$="firebase-app-check-database",i$=1,Jv="firebase-app-check-store";let fd=null;function r$(){return fd||(fd=new Promise((e,t)=>{try{const n=indexedDB.open(n$,i$);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var r;t(hf.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Jv,{keyPath:"compositeKey"})}}}catch(n){t(hf.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),fd)}function s$(e,t){return a$(o$(e),t)}async function a$(e,t){const i=(await r$()).transaction(Jv,"readwrite"),s=i.objectStore(Jv).put({compositeKey:e,value:t});return new Promise((a,o)=>{s.onsuccess=l=>{a()},i.onerror=l=>{var u;o(hf.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function o$(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new mc("@firebase/app-check");function t0(e,t){return CT()?s$(e,t).catch(n=>{Zv.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$={error:"UNKNOWN_ERROR"};function u$(e){return ah.encodeString(JSON.stringify(e),!1)}async function eg(e,t=!1){const n=e.app;Ak(n);const i=zi(n);let r=i.token,s;if(r&&!Zl(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(Zl(l)?r=l:await t0(n,void 0))}if(!t&&r&&Zl(r))return{token:r.token};let a=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),a=!0),r=await zi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Zv.warn(l.message):Zv.error(l),s=l}let o;return r?s?Zl(r)?o={token:r.token,internalError:s}:o=i0(s):(o={token:r.token},i.token=r,await t0(n,r)):o=i0(s),a&&h$(n,o),o}async function c$(e){const t=e.app;Ak(t);const{provider:n}=zi(t);{const{token:i}=await n.getToken();return{token:i}}}function d$(e,t,n,i){const{app:r}=e,s=zi(r),a={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&Zl(s.token)){const o=s.token;Promise.resolve().then(()=>{n({token:o.token}),n0(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>n0(e))}function Pk(e,t){const n=zi(e),i=n.tokenObservers.filter(r=>r.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function n0(e){const{app:t}=e,n=zi(t);let i=n.tokenRefresher;i||(i=f$(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function f$(e){const{app:t}=e;return new ZB(async()=>{const n=zi(t);let i;if(n.token?i=await eg(e,!0):i=await eg(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=zi(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},e0.RETRIAL_MIN_WAIT,e0.RETRIAL_MAX_WAIT)}function h$(e,t){const n=zi(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function Zl(e){return e.expireTimeMillis-Date.now()>0}function i0(e){return{token:u$(l$),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=zi(this.app);for(const n of t)Pk(this.app,n.next);return Promise.resolve()}}function v$(e,t){return new m$(e,t)}function g$(e){return{getToken:t=>eg(e,t),getLimitedUseToken:()=>c$(e),addTokenListener:t=>d$(e,"INTERNAL",t),removeTokenListener:t=>Pk(e.app,t)}}const p$="@firebase/app-check",y$="0.8.8",_$="app-check",r0="app-check-internal";function b$(){cr(new ji(_$,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return v$(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(r0).initialize()})),cr(new ji(r0,e=>{const t=e.getProvider("app-check").getImmediate();return g$(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),pi(p$,y$)}b$();var w$="firebase",S$="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pi(w$,S$,"app");const Rk=Symbol("firebaseApp");function _c(e){return rl()&&$e(Rk,null)||ry(e)}const nr=()=>{},I$=typeof window<"u";function _y(e,t){return t.split(".").reduce((n,i)=>n&&n[i],e)}function E$(e,t,n){const i=(""+t).split("."),r=i.pop(),s=i.reduce((a,o)=>a&&a[o],e);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function Ba(e){return!!e&&typeof e=="object"}const C$=Object.prototype;function T$(e){return Ba(e)&&Object.getPrototypeOf(e)===C$}function by(e){return Ba(e)&&e.type==="document"}function k$(e){return Ba(e)&&e.type==="collection"}function A$(e){return by(e)||k$(e)}function P$(e){return Ba(e)&&e.type==="query"}function R$(e){return Ba(e)&&"ref"in e}function x$(e){return Ba(e)&&typeof e.bucket=="string"}function V$(e,t){let n;return()=>{if(!n)return n=!0,e(t())}}const D$=Symbol.for("v-scx");function N$(){return!!$e(D$,0)}const hd=new WeakMap;function O$(e,t){if(!hd.has(e)){const n=lc(!0);hd.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),hd.delete(e)}}return hd.get(e)}const xk=new WeakMap;function M$(e){return xk.get(_c(e))}const md=new WeakMap;function Vk(e){const t=_c(e);if(!md.has(t)){let n;const r=[new Promise(s=>{n=s}),s=>{md.set(t,s),n(s.value)}];md.set(t,r)}return md.get(t)}function s0(e){const t=Vk(e);return Array.isArray(t)?t[0]:Promise.resolve(t.value)}function L$(e,t){nk(t,n=>{const i=Vk();e.value=n,Array.isArray(i)&&i[1](e)})}var a0={};const o0="@firebase/database",l0="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dk="";function F$(e){Dk=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),En(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:xu(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Jr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new B$(t)}}catch{}return new $$},ua=Nk("localStorage"),U$=Nk("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new mc("@firebase/database"),H$=function(){let e=1;return function(){return e++}}(),Ok=function(e){const t=xM(e),n=new TM;n.update(t);const i=n.digest();return ah.encodeByteArray(i)},bc=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=bc.apply(null,i):typeof i=="object"?t+=En(i):t+=i,t+=" "}return t};let mu=null,u0=!0;const j$=function(e,t){ke(!t,"Can't turn on custom loggers persistently."),No.logLevel=Je.VERBOSE,mu=No.log.bind(No)},Ln=function(...e){if(u0===!0&&(u0=!1,mu===null&&U$.get("logging_enabled")===!0&&j$()),mu){const t=bc.apply(null,e);mu(t)}},wc=function(e){return function(...t){Ln(e,...t)}},tg=function(...e){const t="FIREBASE INTERNAL ERROR: "+bc(...e);No.error(t)},Ca=function(...e){const t=`FIREBASE FATAL ERROR: ${bc(...e)}`;throw No.error(t),new Error(t)},yi=function(...e){const t="FIREBASE WARNING: "+bc(...e);No.warn(t)},W$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mk=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},z$=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jo="[MIN_NAME]",Ta="[MAX_NAME]",ul=function(e,t){if(e===t)return 0;if(e===jo||t===Ta)return-1;if(t===jo||e===Ta)return 1;{const n=c0(e),i=c0(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},q$=function(e,t){return e===t?0:e<t?-1:1},Wl=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+En(t))},wy=function(e){if(typeof e!="object"||e===null)return En(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=En(t[i]),n+=":",n+=wy(e[t[i]]);return n+="}",n},Lk=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Vi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Fk=function(e){ke(!Mk(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,a,o,l;e===0?(s=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=o+i,a=Math.round(e*Math.pow(2,n-o)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},G$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},K$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Y$=new RegExp("^-?(0*)\\d{1,10}$"),Q$=-2147483648,X$=2147483647,c0=function(e){if(Y$.test(e)){const t=Number(e);if(t>=Q$&&t<=X$)return t}return null},Sc=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw yi("Exception was thrown by user callback.",n),t},Math.floor(0))}},J$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vu=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z${constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){yi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yi(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="5",Bk="v",$k="s",Uk="r",Hk="f",jk=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wk="ls",zk="p",ng="ac",qk="websocket",Gk="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(t,n,i,r,s=!1,a="",o=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=a,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ua.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ua.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function nU(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Kk(e,t,n){ke(typeof t=="string","typeof type must == string"),ke(typeof n=="object","typeof params must == object");let i;if(t===qk)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Gk)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);nU(e)&&(n.ns=e.namespace);const r=[];return Vi(n,(s,a)=>{r.push(s+"="+a)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(){this.counters_={}}incrementCounter(t,n=1){Jr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return oM(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={},tv={};function Iy(e){const t=e.toString();return ev[t]||(ev[t]=new iU),ev[t]}function rU(e,t){const n=e.toString();return tv[n]||(tv[n]=t()),tv[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Sc(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="start",aU="close",oU="pLPCommand",lU="pRTLPCB",Yk="id",Qk="pw",Xk="ser",uU="cb",cU="seg",dU="ts",fU="d",hU="dframe",Jk=1870,Zk=30,mU=Jk-Zk,vU=25e3,gU=3e4;class wo{constructor(t,n,i,r,s,a,o){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=a,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wc(t),this.stats_=Iy(n),this.urlFn=l=>(this.appCheckToken&&(l[ng]=this.appCheckToken),Kk(n,Gk,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sU(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gU)),z$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ey((...s)=>{const[a,o,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===d0)this.id=o,this.password=l;else if(a===aU)o?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(o,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...s)=>{const[a,o]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(a,o)},()=>{this.onClosed_()},this.urlFn);const i={};i[d0]="t",i[Xk]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[uU]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Bk]=Sy,this.transportSessionId&&(i[$k]=this.transportSessionId),this.lastSessionId&&(i[Wk]=this.lastSessionId),this.applicationId&&(i[zk]=this.applicationId),this.appCheckToken&&(i[ng]=this.appCheckToken),typeof location<"u"&&location.hostname&&jk.test(location.hostname)&&(i[Uk]=Hk);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wo.forceAllow_=!0}static forceDisallow(){wo.forceDisallow_=!0}static isAvailable(){return wo.forceAllow_?!0:!wo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!G$()&&!K$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=En(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=yT(n),r=Lk(i,mU);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[hU]="t",i[Yk]=t,i[Qk]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=En(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ey{constructor(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=H$(),window[oU+this.uniqueCallbackIdentifier]=t,window[lU+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ey.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(o){Ln("frame writing exception"),o.stack&&Ln(o.stack),Ln(o)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ln("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Yk]=this.myID,t[Qk]=this.myPW,t[Xk]=this.currentSerial;let n=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zk+i.length<=Jk;){const a=this.pendingSegs.shift();i=i+"&"+cU+r+"="+a.seg+"&"+dU+r+"="+a.ts+"&"+fU+r+"="+a.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(vU)),s=()=>{clearTimeout(r),i()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ln("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU=16384,yU=45e3;let mf=null;typeof MozWebSocket<"u"?mf=MozWebSocket:typeof WebSocket<"u"&&(mf=WebSocket);class Oi{constructor(t,n,i,r,s,a,o){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wc(this.connId),this.stats_=Iy(n),this.connURL=Oi.connectionURL_(n,a,o,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,r,s){const a={};return a[Bk]=Sy,typeof location<"u"&&location.hostname&&jk.test(location.hostname)&&(a[Uk]=Hk),n&&(a[$k]=n),i&&(a[Wk]=i),r&&(a[ng]=r),s&&(a[zk]=s),Kk(t,qk,a)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ua.set("previous_websocket_failure",!0);try{let i;ET(),this.mySock=new mf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Oi.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&mf!==null&&!Oi.forceDisallow_}static previouslyFailed(){return ua.isInMemoryStorage||ua.get("previous_websocket_failure")===!0}markConnectionHealthy(){ua.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=xu(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(ke(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=En(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Lk(n,pU);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yU))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Oi.responsesRequiredToBeHealthy=2;Oi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[wo,Oi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Oi&&Oi.isAvailable();let i=n&&!Oi.previouslyFailed();if(t.webSocketOnly&&(n||yi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Oi];else{const r=this.transports_=[];for(const s of Lu.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Lu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Lu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U=6e4,bU=5e3,wU=10*1024,SU=100*1024,nv="t",f0="d",IU="s",h0="r",EU="e",m0="o",v0="a",g0="n",p0="p",CU="h";class TU{constructor(t,n,i,r,s,a,o,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=a,this.onReady_=o,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wc("c:"+this.id+":"),this.transportManager_=new Lu(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=vu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(nv in t){const n=t[nv];n===v0?this.upgradeIfSecondaryHealthy_():n===h0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===m0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Wl("t",t),i=Wl("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:p0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:v0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Wl("t",t),i=Wl("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Wl(nv,t);if(f0 in t){const i=t[f0];if(n===CU){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===g0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===IU?this.onConnectionShutdown_(i):n===h0?this.onReset_(i):n===EU?tg("Server Error: "+i):n===m0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tg("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sy!==i&&yi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),vu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_U))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:p0,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ua.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{put(t,n,i,r){}merge(t,n,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(t){this.allowedEvents_=t,this.listeners_={},ke(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const r=this.getInitialEvent(t);r&&n.apply(i,r)}off(t,n,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(t){ke(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends tA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ty()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vf}getInitialEvent(t){return ke(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=32,_0=768;class $t{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function wt(){return new $t("")}function rt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ps(e){return e.pieces_.length-e.pieceNum_}function Mt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new $t(e.pieces_,t)}function nA(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function kU(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function iA(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function rA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $t(t,0)}function fn(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof $t)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new $t(n,0)}function tt(e){return e.pieceNum_>=e.pieces_.length}function Ai(e,t){const n=rt(e),i=rt(t);if(n===null)return t;if(n===i)return Ai(Mt(e),Mt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function sA(e,t){if(Ps(e)!==Ps(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Li(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Ps(e)>Ps(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class AU{constructor(t,n){this.errorPrefix_=n,this.parts_=iA(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=lh(this.parts_[i]);aA(this)}}function PU(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=lh(t),aA(e)}function RU(e){const t=e.parts_.pop();e.byteLength_-=lh(t),e.parts_.length>0&&(e.byteLength_-=1)}function aA(e){if(e.byteLength_>_0)throw new Error(e.errorPrefix_+"has a key path longer than "+_0+" bytes ("+e.byteLength_+").");if(e.parts_.length>y0)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y0+") or object contains a cycle "+aa(e))}function aa(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends tA{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Cy}getInitialEvent(t){return ke(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=1e3,xU=60*5*1e3,b0=30*1e3,VU=1.3,DU=3e4,NU="server_kill",w0=3;class Hr extends eA{constructor(t,n,i,r,s,a,o,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=Hr.nextPersistentConnectionId_++,this.log_=wc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zl,this.maxReconnectDelay_=xU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ET())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cy.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&vf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const r=++this.requestNumber_,s={r,a:t,b:n};this.log_(En(s)),ke(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const n=new Ru,r={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:a=>{const o=a.d;a.s==="ok"?n.resolve(o):n.reject(o)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,r){this.initConnection_();const s=t._queryIdentifier,a=t._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),ke(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ke(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:n,query:t,tag:i};this.listens.get(a).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},a="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(a,s,o=>{const l=o.d,u=o.s;Hr.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",o),u!=="ok"&&this.removeListen_(i,r),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Jr(t,"w")){const i=Bo(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();yi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||CM(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=b0)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=EM(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,a=r.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),ke(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,n)}sendUnlisten_(t,n,i,r){this.log_("Unlisten on "+t+" for "+n);const s={p:t},a="n";r&&(s.q=i,s.t=r),this.sendRequest(a,s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,a=>{r&&setTimeout(()=>{r(a.s,a.d)},Math.floor(0))})}put(t,n,i,r){this.putInternal("p",t,n,i,r)}merge(t,n,i,r){this.putInternal("m",t,n,i,r)}putInternal(t,n,i,r,s){this.initConnection_();const a={p:n,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:t,request:a,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+En(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):tg("Unrecognized action received from server: "+En(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){ke(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zl,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=zl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DU&&(this.reconnectDelay_=zl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Hr.nextConnectionId_++,s=this.lastSessionId;let a=!1,o=null;const l=function(){o?o.close():(a=!0,i())},u=function(d){ke(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);a?Ln("getToken() completed but was canceled"):(Ln("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,o=new TU(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,v=>{yi(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(NU)},s))}catch(d){this.log_("Failed to get token: "+d),a||(this.repoInfo_.nodeAdmin&&yi(d),l())}}}interrupt(t){Ln("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ln("Resuming connection for reason: "+t),delete this.interruptReasons_[t],$v(this.interruptReasons_)&&(this.reconnectDelay_=zl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(s=>wy(s)).join("$"):i="default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,n){const i=new $t(t).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,n){Ln("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=w0&&(this.reconnectDelay_=b0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ln("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=w0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Dk.replace(/\./g,"-")]=1,ty()?t["framework.cordova"]=1:IT()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=vf.getInstance().currentlyOnline();return $v(this.interruptReasons_)&&t}}Hr.nextPersistentConnectionId_=0;Hr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new st(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new st(jo,t),r=new st(jo,n);return this.compare(i,r)!==0}minPost(){return st.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd;class oA extends mh{static get __EMPTY_NODE(){return vd}static set __EMPTY_NODE(t){vd=t}compare(t,n){return ul(t.name,n.name)}isDefinedOn(t){throw sl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return st.MIN}maxPost(){return new st(Ta,vd)}makePost(t,n){return ke(typeof t=="string","KeyIndex indexValue must always be a string."),new st(t,vd)}toString(){return".key"}}const Oo=new oA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd=class{constructor(t,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let a=1;for(;!t.isEmpty();)if(t=t,a=n?i(t.key,n):1,r&&(a*=-1),a<0)this.isReverse_?t=t.left:t=t.right;else if(a===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}},di=class eu{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??eu.RED,this.left=r??ir.EMPTY_NODE,this.right=s??ir.EMPTY_NODE}copy(t,n,i,r,s){return new eu(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ir.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,r;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return ir.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,eu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,eu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}};di.RED=!0;di.BLACK=!1;class OU{copy(t,n,i,r,s){return this}insert(t,n,i){return new di(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let ir=class Md{constructor(t,n=Md.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Md(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,di.BLACK,null,null))}remove(t){return new Md(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,di.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new gd(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new gd(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new gd(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new gd(this.root_,null,this.comparator_,!0,t)}};ir.EMPTY_NODE=new OU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(e,t){return ul(e.name,t.name)}function Ty(e,t){return ul(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;function LU(e){ig=e}const lA=function(e){return typeof e=="number"?"number:"+Fk(e):"string:"+e},uA=function(e){if(e.isLeafNode()){const t=e.val();ke(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Jr(t,".sv"),"Priority must be a string or number.")}else ke(e===ig||e.isEmpty(),"priority of unexpected type.");ke(e===ig||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S0;class cn{constructor(t,n=cn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,ke(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uA(this.priorityNode_)}static set __childrenNodeConstructor(t){S0=t}static get __childrenNodeConstructor(){return S0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new cn(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:cn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return tt(t)?this:rt(t)===".priority"?this.priorityNode_:cn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:cn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=rt(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(ke(i!==".priority"||Ps(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,cn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Mt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+lA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Fk(this.value_):t+=this.value_,this.lazyHash_=Ok(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===cn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof cn.__childrenNodeConstructor?-1:(ke(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,r=cn.VALUE_TYPE_ORDER.indexOf(n),s=cn.VALUE_TYPE_ORDER.indexOf(i);return ke(r>=0,"Unknown leaf type: "+n),ke(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}cn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cA,dA;function FU(e){cA=e}function BU(e){dA=e}class $U extends mh{compare(t,n){const i=t.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?ul(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return st.MIN}maxPost(){return new st(Ta,new cn("[PRIORITY-POST]",dA))}makePost(t,n){const i=cA(t);return new st(n,new cn("[PRIORITY-POST]",i))}toString(){return".priority"}}const Un=new $U;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU=Math.log(2);class HU{constructor(t){const n=s=>parseInt(Math.log(s)/UU,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const r=i(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const gf=function(e,t,n,i){e.sort(t);const r=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=e[l],h=n?n(d):d,new di(h,d.node,di.BLACK,null,null);{const v=parseInt(c/2,10)+l,g=r(l,v),p=r(v+1,u);return d=e[v],h=n?n(d):d,new di(h,d.node,di.BLACK,g,p)}},s=function(l){let u=null,c=null,d=e.length;const h=function(g,p){const y=d-g,I=d;d-=g;const E=r(y+1,I),V=e[y],P=n?n(V):V;v(new di(P,V.node,p,null,E))},v=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const p=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));p?h(y,di.BLACK):(h(y,di.BLACK),h(y,di.RED))}return c},a=new HU(e.length),o=s(a);return new ir(i||t,o)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iv;const uo={};class Fr{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return ke(uo&&Un,"ChildrenNode.ts has not been loaded"),iv=iv||new Fr({".priority":uo},{".priority":Un}),iv}get(t){const n=Bo(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof ir?n:null}hasIndex(t){return Jr(this.indexSet_,t.toString())}addIndex(t,n){ke(t!==Oo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(st.Wrap);let a=s.getNext();for(;a;)r=r||t.isDefinedOn(a.node),i.push(a),a=s.getNext();let o;r?o=gf(i,t.getCompare()):o=uo;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=o,new Fr(c,u)}addToIndexes(t,n){const i=sf(this.indexes_,(r,s)=>{const a=Bo(this.indexSet_,s);if(ke(a,"Missing index implementation for "+s),r===uo)if(a.isDefinedOn(t.node)){const o=[],l=n.getIterator(st.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&o.push(u),u=l.getNext();return o.push(t),gf(o,a.getCompare())}else return uo;else{const o=n.get(t.name);let l=r;return o&&(l=l.remove(new st(t.name,o))),l.insert(t,t.node)}});return new Fr(i,this.indexSet_)}removeFromIndexes(t,n){const i=sf(this.indexes_,r=>{if(r===uo)return r;{const s=n.get(t.name);return s?r.remove(new st(t.name,s)):r}});return new Fr(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;class _t{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&uA(this.priorityNode_),this.children_.isEmpty()&&ke(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ql||(ql=new _t(new ir(Ty),null,Fr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ql}updatePriority(t){return this.children_.isEmpty()?this:new _t(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?ql:n}}getChild(t){const n=rt(t);return n===null?this:this.getImmediateChild(n).getChild(Mt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(ke(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new st(t,n);let r,s;n.isEmpty()?(r=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const a=r.isEmpty()?ql:this.priorityNode_;return new _t(r,a,s)}}updateChild(t,n){const i=rt(t);if(i===null)return n;{ke(rt(t)!==".priority"||Ps(t)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Mt(t),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Un,(a,o)=>{n[a]=o.val(t),i++,s&&_t.INTEGER_REGEXP_.test(a)?r=Math.max(r,Number(a)):s=!1}),!t&&s&&r<2*i){const a=[];for(const o in n)a[o]=n[o];return a}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+lA(this.getPriority().val())+":"),this.forEachChild(Un,(n,i)=>{const r=i.hash();r!==""&&(t+=":"+n+":"+r)}),this.lazyHash_=t===""?"":Ok(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new st(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new st(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new st(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,r=>r);{const r=this.children_.getIteratorFrom(t.name,st.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,r=>r);{const r=this.children_.getReverseIteratorFrom(t.name,st.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)>0;)r.getNext(),s=r.peek();return r}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ic?-1:0}withIndex(t){if(t===Oo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new _t(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Oo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Un),r=n.getIterator(Un);let s=i.getNext(),a=r.getNext();for(;s&&a;){if(s.name!==a.name||!s.node.equals(a.node))return!1;s=i.getNext(),a=r.getNext()}return s===null&&a===null}else return!1;else return!1}}resolveIndex_(t){return t===Oo?null:this.indexMap_.get(t.toString())}}_t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jU extends _t{constructor(){super(new ir(Ty),_t.EMPTY_NODE,Fr.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return _t.EMPTY_NODE}isEmpty(){return!1}}const Ic=new jU;Object.defineProperties(st,{MIN:{value:new st(jo,_t.EMPTY_NODE)},MAX:{value:new st(Ta,Ic)}});oA.__EMPTY_NODE=_t.EMPTY_NODE;cn.__childrenNodeConstructor=_t;LU(Ic);BU(Ic);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU=!0;function Fn(e,t=null){if(e===null)return _t.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),ke(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new cn(n,Fn(t))}if(!(e instanceof Array)&&WU){const n=[];let i=!1;if(Vi(e,(a,o)=>{if(a.substring(0,1)!=="."){const l=Fn(o);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new st(a,l)))}}),n.length===0)return _t.EMPTY_NODE;const s=gf(n,MU,a=>a.name,Ty);if(i){const a=gf(n,Un.getCompare());return new _t(s,Fn(t),new Fr({".priority":a},{".priority":Un}))}else return new _t(s,Fn(t),Fr.Default)}else{let n=_t.EMPTY_NODE;return Vi(e,(i,r)=>{if(Jr(e,i)&&i.substring(0,1)!=="."){const s=Fn(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Fn(t))}}FU(Fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU extends mh{constructor(t){super(),this.indexPath_=t,ke(!tt(t)&&rt(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?ul(t.name,n.name):s}makePost(t,n){const i=Fn(t),r=_t.EMPTY_NODE.updateChild(this.indexPath_,i);return new st(n,r)}maxPost(){const t=_t.EMPTY_NODE.updateChild(this.indexPath_,Ic);return new st(Ta,t)}toString(){return iA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU extends mh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?ul(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return st.MIN}maxPost(){return st.MAX}makePost(t,n){const i=Fn(t);return new st(n,i)}toString(){return".value"}}const GU=new qU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KU(e){return{type:"value",snapshotNode:e}}function YU(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function QU(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function I0(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function XU(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Un}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ke(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ke(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jo}hasEnd(){return this.endSet_}getIndexEndValue(){return ke(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ke(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ta}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ke(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Un}copy(){const t=new ky;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function E0(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Un?n="$priority":e.index_===GU?n="$value":e.index_===Oo?n="$key":(ke(e.index_ instanceof zU,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=En(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=En(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+En(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=En(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+En(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function C0(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Un&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends eA{constructor(t,n,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=wc("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(ke(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,r){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const a=pf.getListenId_(t,i),o={};this.listens_[a]=o;const l=E0(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,i),Bo(this.listens_,a)===o){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",r(h,null)}})}unlisten(t,n){const i=pf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=E0(t._queryParams),i=t._path.toString(),r=new Ru;return this.restRequest_(i+".json",n,(s,a)=>{let o=a;s===404&&(o=null,s=null),s===null?(this.onDataUpdate_(i,o,!1,null),r.resolve(o)):r.reject(new Error(o))}),r.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ol(n);this.log_("Sending REST request for "+a);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&o.readyState===4){this.log_("REST Response for "+a+" received. status:",o.status,"response:",o.responseText);let l=null;if(o.status>=200&&o.status<300){try{l=xu(o.responseText)}catch{yi("Failed to parse JSON response for "+a+": "+o.responseText)}i(null,l)}else o.status!==401&&o.status!==404&&yi("Got unsuccessful REST response for "+a+" Status: "+o.status),i(o.status);i=null}},o.open("GET",a,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(){this.rootNode_=_t.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){return{value:null,children:new Map}}function fA(e,t,n){if(tt(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=rt(t);e.children.has(i)||e.children.set(i,yf());const r=e.children.get(i);t=Mt(t),fA(r,t,n)}}function rg(e,t,n){e.value!==null?n(t,e.value):ZU(e,(i,r)=>{const s=new $t(t.toString()+"/"+i);rg(r,s,n)})}function ZU(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Vi(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=10*1e3,t4=30*1e3,n4=5*60*1e3;class i4{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new e4(t);const i=T0+(t4-T0)*Math.random();vu(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;Vi(t,(r,s)=>{s>0&&Jr(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),vu(this.reportStats_.bind(this),Math.floor(Math.random()*2*n4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rr||(rr={}));function hA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vA(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=rr.ACK_USER_WRITE,this.source=hA()}operationForChild(t){if(tt(this.path)){if(this.affectedTree.value!=null)return ke(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $t(t));return new _f(wt(),n,this.revert)}}else return ke(rt(this.path)===t,"operationForChild called for unrelated child."),new _f(Mt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=rr.OVERWRITE}operationForChild(t){return tt(this.path)?new ka(this.source,wt(),this.snap.getImmediateChild(t)):new ka(this.source,Mt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=rr.MERGE}operationForChild(t){if(tt(this.path)){const n=this.children.subtree(new $t(t));return n.isEmpty()?null:n.value?new ka(this.source,wt(),n.value):new Fu(this.source,wt(),n)}else return ke(rt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Fu(this.source,Mt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(tt(t))return this.isFullyInitialized()&&!this.filtered_;const n=rt(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function r4(e,t,n,i){const r=[],s=[];return t.forEach(a=>{a.type==="child_changed"&&e.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&s.push(XU(a.childName,a.snapshotNode))}),Gl(e,r,"child_removed",t,i,n),Gl(e,r,"child_added",t,i,n),Gl(e,r,"child_moved",s,i,n),Gl(e,r,"child_changed",t,i,n),Gl(e,r,"value",t,i,n),r}function Gl(e,t,n,i,r,s){const a=i.filter(o=>o.type===n);a.sort((o,l)=>a4(e,o,l)),a.forEach(o=>{const l=s4(e,o,s);r.forEach(u=>{u.respondsTo(o.type)&&t.push(u.createEvent(l,e.query_))})})}function s4(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function a4(e,t,n){if(t.childName==null||n.childName==null)throw sl("Should only compare child_ events.");const i=new st(t.childName,t.snapshotNode),r=new st(n.childName,n.snapshotNode);return e.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(e,t){return{eventCache:e,serverCache:t}}function gu(e,t,n,i){return gA(new Ay(t,n,i),e.serverCache)}function pA(e,t,n,i){return gA(e.eventCache,new Ay(t,n,i))}function sg(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Aa(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv;const o4=()=>(rv||(rv=new ir(q$)),rv);class Ot{constructor(t,n=o4()){this.value=t,this.children=n}static fromObject(t){let n=new Ot(null);return Vi(t,(i,r)=>{n=n.set(new $t(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:wt(),value:this.value};if(tt(t))return null;{const i=rt(t),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Mt(t),n);return s!=null?{path:fn(new $t(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(tt(t))return this;{const n=rt(t),i=this.children.get(n);return i!==null?i.subtree(Mt(t)):new Ot(null)}}set(t,n){if(tt(t))return new Ot(n,this.children);{const i=rt(t),s=(this.children.get(i)||new Ot(null)).set(Mt(t),n),a=this.children.insert(i,s);return new Ot(this.value,a)}}remove(t){if(tt(t))return this.children.isEmpty()?new Ot(null):new Ot(null,this.children);{const n=rt(t),i=this.children.get(n);if(i){const r=i.remove(Mt(t));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Ot(null):new Ot(this.value,s)}else return this}}get(t){if(tt(t))return this.value;{const n=rt(t),i=this.children.get(n);return i?i.get(Mt(t)):null}}setTree(t,n){if(tt(t))return n;{const i=rt(t),s=(this.children.get(i)||new Ot(null)).setTree(Mt(t),n);let a;return s.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,s),new Ot(this.value,a)}}fold(t){return this.fold_(wt(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(fn(t,r),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,wt(),n)}findOnPath_(t,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(tt(t))return null;{const s=rt(t),a=this.children.get(s);return a?a.findOnPath_(Mt(t),fn(n,s),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,wt(),n)}foreachOnPath_(t,n,i){if(tt(t))return this;{this.value&&i(n,this.value);const r=rt(t),s=this.children.get(r);return s?s.foreachOnPath_(Mt(t),fn(n,r),i):new Ot(null)}}foreach(t){this.foreach_(wt(),t)}foreach_(t,n){this.children.inorderTraversal((i,r)=>{r.foreach_(fn(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t){this.writeTree_=t}static empty(){return new Ui(new Ot(null))}}function pu(e,t,n){if(tt(t))return new Ui(new Ot(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const r=i.path;let s=i.value;const a=Ai(r,t);return s=s.updateChild(a,n),new Ui(e.writeTree_.set(r,s))}else{const r=new Ot(n),s=e.writeTree_.setTree(t,r);return new Ui(s)}}}function k0(e,t,n){let i=e;return Vi(n,(r,s)=>{i=pu(i,fn(t,r),s)}),i}function A0(e,t){if(tt(t))return Ui.empty();{const n=e.writeTree_.setTree(t,new Ot(null));return new Ui(n)}}function ag(e,t){return $a(e,t)!=null}function $a(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Ai(n.path,t)):null}function P0(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Un,(i,r)=>{t.push(new st(i,r))}):e.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&t.push(new st(i,r.value))}),t}function Ts(e,t){if(tt(t))return e;{const n=$a(e,t);return n!=null?new Ui(new Ot(n)):new Ui(e.writeTree_.subtree(t))}}function og(e){return e.writeTree_.isEmpty()}function Wo(e,t){return yA(wt(),e.writeTree_,t)}function yA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((r,s)=>{r===".priority"?(ke(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=yA(fn(e,r),s,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(fn(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(e,t){return EA(t,e)}function l4(e,t,n,i,r){ke(i>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=pu(e.visibleWrites,t,n)),e.lastWriteId=i}function u4(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function c4(e,t){const n=e.allWrites.findIndex(o=>o.writeId===t);ke(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,a=e.allWrites.length-1;for(;r&&a>=0;){const o=e.allWrites[a];o.visible&&(a>=n&&d4(o,i.path)?r=!1:Li(i.path,o.path)&&(s=!0)),a--}if(r){if(s)return f4(e),!0;if(i.snap)e.visibleWrites=A0(e.visibleWrites,i.path);else{const o=i.children;Vi(o,l=>{e.visibleWrites=A0(e.visibleWrites,fn(i.path,l))})}return!0}else return!1}function d4(e,t){if(e.snap)return Li(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Li(fn(e.path,n),t))return!0;return!1}function f4(e){e.visibleWrites=bA(e.allWrites,h4,wt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function h4(e){return e.visible}function bA(e,t,n){let i=Ui.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const a=s.path;let o;if(s.snap)Li(n,a)?(o=Ai(n,a),i=pu(i,o,s.snap)):Li(a,n)&&(o=Ai(a,n),i=pu(i,wt(),s.snap.getChild(o)));else if(s.children){if(Li(n,a))o=Ai(n,a),i=k0(i,o,s.children);else if(Li(a,n))if(o=Ai(a,n),tt(o))i=k0(i,wt(),s.children);else{const l=Bo(s.children,rt(o));if(l){const u=l.getChild(Mt(o));i=pu(i,wt(),u)}}}else throw sl("WriteRecord should have .snap or .children")}}return i}function wA(e,t,n,i,r){if(!i&&!r){const s=$a(e.visibleWrites,t);if(s!=null)return s;{const a=Ts(e.visibleWrites,t);if(og(a))return n;if(n==null&&!ag(a,wt()))return null;{const o=n||_t.EMPTY_NODE;return Wo(a,o)}}}else{const s=Ts(e.visibleWrites,t);if(!r&&og(s))return n;if(!r&&n==null&&!ag(s,wt()))return null;{const a=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Li(u.path,t)||Li(t,u.path))},o=bA(e.allWrites,a,t),l=n||_t.EMPTY_NODE;return Wo(o,l)}}}function m4(e,t,n){let i=_t.EMPTY_NODE;const r=$a(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Un,(s,a)=>{i=i.updateImmediateChild(s,a)}),i;if(n){const s=Ts(e.visibleWrites,t);return n.forEachChild(Un,(a,o)=>{const l=Wo(Ts(s,new $t(a)),o);i=i.updateImmediateChild(a,l)}),P0(s).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const s=Ts(e.visibleWrites,t);return P0(s).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function v4(e,t,n,i,r){ke(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=fn(t,n);if(ag(e.visibleWrites,s))return null;{const a=Ts(e.visibleWrites,s);return og(a)?r.getChild(n):Wo(a,r.getChild(n))}}function g4(e,t,n,i){const r=fn(t,n),s=$a(e.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const a=Ts(e.visibleWrites,r);return Wo(a,i.getNode().getImmediateChild(n))}else return null}function p4(e,t){return $a(e.visibleWrites,t)}function y4(e,t,n,i,r,s,a){let o;const l=Ts(e.visibleWrites,t),u=$a(l,wt());if(u!=null)o=u;else if(n!=null)o=Wo(l,n);else return[];if(o=o.withIndex(a),!o.isEmpty()&&!o.isLeafNode()){const c=[],d=a.getCompare(),h=s?o.getReverseIteratorFrom(i,a):o.getIteratorFrom(i,a);let v=h.getNext();for(;v&&c.length<r;)d(v,i)!==0&&c.push(v),v=h.getNext();return c}else return[]}function _4(){return{visibleWrites:Ui.empty(),allWrites:[],lastWriteId:-1}}function lg(e,t,n,i){return wA(e.writeTree,e.treePath,t,n,i)}function SA(e,t){return m4(e.writeTree,e.treePath,t)}function R0(e,t,n,i){return v4(e.writeTree,e.treePath,t,n,i)}function bf(e,t){return p4(e.writeTree,fn(e.treePath,t))}function b4(e,t,n,i,r,s){return y4(e.writeTree,e.treePath,t,n,i,r,s)}function Py(e,t,n){return g4(e.writeTree,e.treePath,t,n)}function IA(e,t){return EA(fn(e.treePath,t),e.writeTree)}function EA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;ke(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ke(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,I0(i,t.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,QU(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,YU(i,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,I0(i,t.snapshotNode,r.oldSnap));else throw sl("Illegal combination of changes: "+t+" occurred after "+r)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const CA=new S4;class Ry{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new Ay(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Py(this.writes_,t,i)}}getChildAfterChild(t,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Aa(this.viewCache_),s=b4(this.writes_,r,n,1,i,t);return s.length===0?null:s[0]}}function I4(e,t){ke(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),ke(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function E4(e,t,n,i,r){const s=new w4;let a,o;if(n.type===rr.OVERWRITE){const u=n;u.source.fromUser?a=ug(e,t,u.path,u.snap,i,r,s):(ke(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!tt(u.path),a=wf(e,t,u.path,u.snap,i,r,o,s))}else if(n.type===rr.MERGE){const u=n;u.source.fromUser?a=T4(e,t,u.path,u.children,i,r,s):(ke(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered(),a=cg(e,t,u.path,u.children,i,r,o,s))}else if(n.type===rr.ACK_USER_WRITE){const u=n;u.revert?a=P4(e,t,u.path,i,r,s):a=k4(e,t,u.path,u.affectedTree,i,r,s)}else if(n.type===rr.LISTEN_COMPLETE)a=A4(e,t,n.path,i,s);else throw sl("Unknown operation type: "+n.type);const l=s.getChanges();return C4(t,a,l),{viewCache:a,changes:l}}function C4(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=sg(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(KU(sg(t)))}}function TA(e,t,n,i,r,s){const a=t.eventCache;if(bf(i,n)!=null)return t;{let o,l;if(tt(n))if(ke(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Aa(t),c=u instanceof _t?u:_t.EMPTY_NODE,d=SA(i,c);o=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=lg(i,Aa(t));o=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=rt(n);if(u===".priority"){ke(Ps(n)===1,"Can't have a priority with additional path components");const c=a.getNode();l=t.serverCache.getNode();const d=R0(i,n,c,l);d!=null?o=e.filter.updatePriority(c,d):o=a.getNode()}else{const c=Mt(n);let d;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const h=R0(i,n,a.getNode(),l);h!=null?d=a.getNode().getImmediateChild(u).updateChild(c,h):d=a.getNode().getImmediateChild(u)}else d=Py(i,u,t.serverCache);d!=null?o=e.filter.updateChild(a.getNode(),u,d,c,r,s):o=a.getNode()}}return gu(t,o,a.isFullyInitialized()||tt(n),e.filter.filtersNodes())}}function wf(e,t,n,i,r,s,a,o){const l=t.serverCache;let u;const c=a?e.filter:e.filter.getIndexedFilter();if(tt(n))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,i);u=c.updateFullNode(l.getNode(),v,null)}else{const v=rt(n);if(!l.isCompleteForPath(n)&&Ps(n)>1)return t;const g=Mt(n),y=l.getNode().getImmediateChild(v).updateChild(g,i);v===".priority"?u=c.updatePriority(l.getNode(),y):u=c.updateChild(l.getNode(),v,y,g,CA,null)}const d=pA(t,u,l.isFullyInitialized()||tt(n),c.filtersNodes()),h=new Ry(r,d,s);return TA(e,d,n,r,h,o)}function ug(e,t,n,i,r,s,a){const o=t.eventCache;let l,u;const c=new Ry(r,t,s);if(tt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,a),l=gu(t,u,!0,e.filter.filtersNodes());else{const d=rt(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),i),l=gu(t,u,o.isFullyInitialized(),o.isFiltered());else{const h=Mt(n),v=o.getNode().getImmediateChild(d);let g;if(tt(h))g=i;else{const p=c.getCompleteChild(d);p!=null?nA(h)===".priority"&&p.getChild(rA(h)).isEmpty()?g=p:g=p.updateChild(h,i):g=_t.EMPTY_NODE}if(v.equals(g))l=t;else{const p=e.filter.updateChild(o.getNode(),d,g,h,c,a);l=gu(t,p,o.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function x0(e,t){return e.eventCache.isCompleteForChild(t)}function T4(e,t,n,i,r,s,a){let o=t;return i.foreach((l,u)=>{const c=fn(n,l);x0(t,rt(c))&&(o=ug(e,o,c,u,r,s,a))}),i.foreach((l,u)=>{const c=fn(n,l);x0(t,rt(c))||(o=ug(e,o,c,u,r,s,a))}),o}function V0(e,t,n){return n.foreach((i,r)=>{t=t.updateChild(i,r)}),t}function cg(e,t,n,i,r,s,a,o){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;tt(n)?u=i:u=new Ot(null).setTree(n,i);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const v=t.serverCache.getNode().getImmediateChild(d),g=V0(e,v,h);l=wf(e,l,new $t(d),g,r,s,a,o)}}),u.children.inorderTraversal((d,h)=>{const v=!t.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!v){const g=t.serverCache.getNode().getImmediateChild(d),p=V0(e,g,h);l=wf(e,l,new $t(d),p,r,s,a,o)}}),l}function k4(e,t,n,i,r,s,a){if(bf(r,n)!=null)return t;const o=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(tt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wf(e,t,n,l.getNode().getChild(n),r,s,o,a);if(tt(n)){let u=new Ot(null);return l.getNode().forEachChild(Oo,(c,d)=>{u=u.set(new $t(c),d)}),cg(e,t,n,u,r,s,o,a)}else return t}else{let u=new Ot(null);return i.foreach((c,d)=>{const h=fn(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),cg(e,t,n,u,r,s,o,a)}}function A4(e,t,n,i,r){const s=t.serverCache,a=pA(t,s.getNode(),s.isFullyInitialized()||tt(n),s.isFiltered());return TA(e,a,n,i,CA,r)}function P4(e,t,n,i,r,s){let a;if(bf(i,n)!=null)return t;{const o=new Ry(i,t,r),l=t.eventCache.getNode();let u;if(tt(n)||rt(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=lg(i,Aa(t));else{const d=t.serverCache.getNode();ke(d instanceof _t,"serverChildren would be complete if leaf node"),c=SA(i,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=rt(n);let d=Py(i,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,Mt(n),o,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,_t.EMPTY_NODE,Mt(n),o,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=lg(i,Aa(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||bf(i,wt())!=null,gu(t,u,a,e.filter.filtersNodes())}}function R4(e,t){const n=Aa(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!tt(t)&&!n.getImmediateChild(rt(t)).isEmpty())?n.getChild(t):null}function D0(e,t,n,i){t.type===rr.MERGE&&t.source.queryId!==null&&(ke(Aa(e.viewCache_),"We should always have a full cache before handling merges"),ke(sg(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=E4(e.processor_,r,t,n,i);return I4(e.processor_,s.viewCache),ke(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,x4(e,s.changes,s.viewCache.eventCache.getNode())}function x4(e,t,n,i){const r=e.eventRegistrations_;return r4(e.eventGenerator_,t,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N0;function V4(e){ke(!N0,"__referenceConstructor has already been defined"),N0=e}function xy(e,t,n,i){const r=t.source.queryId;if(r!==null){const s=e.views.get(r);return ke(s!=null,"SyncTree gave us an op for an invalid query."),D0(s,t,n,i)}else{let s=[];for(const a of e.views.values())s=s.concat(D0(a,t,n,i));return s}}function Vy(e,t){let n=null;for(const i of e.views.values())n=n||R4(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O0;function D4(e){ke(!O0,"__referenceConstructor has already been defined"),O0=e}class M0{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ot(null),this.pendingWriteTree_=_4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function N4(e,t,n,i,r){return l4(e.pendingWriteTree_,t,n,i,r),r?gh(e,new ka(hA(),t,n)):[]}function So(e,t,n=!1){const i=u4(e.pendingWriteTree_,t);if(c4(e.pendingWriteTree_,t)){let s=new Ot(null);return i.snap!=null?s=s.set(wt(),!0):Vi(i.children,a=>{s=s.set(new $t(a),!0)}),gh(e,new _f(i.path,s,n))}else return[]}function vh(e,t,n){return gh(e,new ka(mA(),t,n))}function O4(e,t,n){const i=Ot.fromObject(n);return gh(e,new Fu(mA(),t,i))}function M4(e,t,n,i){const r=RA(e,i);if(r!=null){const s=xA(r),a=s.path,o=s.queryId,l=Ai(a,t),u=new ka(vA(o),l,n);return VA(e,a,u)}else return[]}function L4(e,t,n,i){const r=RA(e,i);if(r){const s=xA(r),a=s.path,o=s.queryId,l=Ai(a,t),u=Ot.fromObject(n),c=new Fu(vA(o),l,u);return VA(e,a,c)}else return[]}function kA(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(a,o)=>{const l=Ai(a,t),u=Vy(o,l);if(u)return u});return wA(r,t,s,n,!0)}function gh(e,t){return AA(t,e.syncPointTree_,null,_A(e.pendingWriteTree_,wt()))}function AA(e,t,n,i){if(tt(e.path))return PA(e,t,n,i);{const r=t.get(wt());n==null&&r!=null&&(n=Vy(r,wt()));let s=[];const a=rt(e.path),o=e.operationForChild(a),l=t.children.get(a);if(l&&o){const u=n?n.getImmediateChild(a):null,c=IA(i,a);s=s.concat(AA(o,l,u,c))}return r&&(s=s.concat(xy(r,e,i,n))),s}}function PA(e,t,n,i){const r=t.get(wt());n==null&&r!=null&&(n=Vy(r,wt()));let s=[];return t.children.inorderTraversal((a,o)=>{const l=n?n.getImmediateChild(a):null,u=IA(i,a),c=e.operationForChild(a);c&&(s=s.concat(PA(c,o,l,u)))}),r&&(s=s.concat(xy(r,e,i,n))),s}function RA(e,t){return e.tagToQueryMap.get(t)}function xA(e){const t=e.indexOf("$");return ke(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $t(e.substr(0,t))}}function VA(e,t,n){const i=e.syncPointTree_.get(t);ke(i,"Missing sync point for query tag that we're tracking");const r=_A(e.pendingWriteTree_,t);return xy(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Dy(n)}node(){return this.node_}}class Ny{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=fn(this.path_,t);return new Ny(this.syncTree_,n)}node(){return kA(this.syncTree_,this.path_)}}const F4=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},L0=function(e,t,n){if(!e||typeof e!="object")return e;if(ke(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return B4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return $4(e[".sv"],t);ke(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},B4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:ke(!1,"Unexpected server value: "+e)}},$4=function(e,t,n){e.hasOwnProperty("increment")||ke(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&ke(!1,"Unexpected increment value: "+i);const r=t.node();if(ke(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const a=r.getValue();return typeof a!="number"?i:a+i},U4=function(e,t,n,i){return Oy(t,new Ny(n,e),i)},H4=function(e,t,n){return Oy(e,new Dy(t),n)};function Oy(e,t,n){const i=e.getPriority().val(),r=L0(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const a=e,o=L0(a.getValue(),t,n);return o!==a.getValue()||r!==a.getPriority().val()?new cn(o,Fn(r)):e}else{const a=e;return s=a,r!==a.getPriority().val()&&(s=s.updatePriority(new cn(r))),a.forEachChild(Un,(o,l)=>{const u=Oy(l,t.getImmediateChild(o),n);u!==l&&(s=s.updateImmediateChild(o,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function Ly(e,t){let n=t instanceof $t?t:new $t(t),i=e,r=rt(n);for(;r!==null;){const s=Bo(i.node.children,r)||{children:{},childCount:0};i=new My(r,i,s),n=Mt(n),r=rt(n)}return i}function cl(e){return e.node.value}function DA(e,t){e.node.value=t,dg(e)}function NA(e){return e.node.childCount>0}function j4(e){return cl(e)===void 0&&!NA(e)}function ph(e,t){Vi(e.node.children,(n,i)=>{t(new My(n,e,i))})}function OA(e,t,n,i){n&&!i&&t(e),ph(e,r=>{OA(r,t,!0,i)}),n&&i&&t(e)}function W4(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Ec(e){return new $t(e.parent===null?e.name:Ec(e.parent)+"/"+e.name)}function dg(e){e.parent!==null&&z4(e.parent,e.name,e)}function z4(e,t,n){const i=j4(n),r=Jr(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,dg(e)):!i&&!r&&(e.node.children[t]=n.node,e.node.childCount++,dg(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=/[\[\].#$\/\u0000-\u001F\u007F]/,G4=/[\[\].#$\u0000-\u001F\u007F]/,sv=10*1024*1024,MA=function(e){return typeof e=="string"&&e.length!==0&&!q4.test(e)},K4=function(e){return typeof e=="string"&&e.length!==0&&!G4.test(e)},Y4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),K4(e)},LA=function(e,t,n){const i=n instanceof $t?new AU(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+aa(i));if(typeof t=="function")throw new Error(e+"contains a function "+aa(i)+" with contents = "+t.toString());if(Mk(t))throw new Error(e+"contains "+t.toString()+" "+aa(i));if(typeof t=="string"&&t.length>sv/3&&lh(t)>sv)throw new Error(e+"contains a string greater than "+sv+" utf8 bytes "+aa(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let r=!1,s=!1;if(Vi(t,(a,o)=>{if(a===".value")r=!0;else if(a!==".priority"&&a!==".sv"&&(s=!0,!MA(a)))throw new Error(e+" contains an invalid key ("+a+") "+aa(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PU(i,a),LA(e,o,i),RU(i)}),r&&s)throw new Error(e+' contains ".value" child '+aa(i)+" in addition to actual children.")}},Q4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!MA(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Y4(n))throw new Error(RM(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function J4(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();n!==null&&!sA(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ua(e,t,n){J4(e,n),Z4(e,i=>Li(i,t)||Li(t,i))}function Z4(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(eH(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function eH(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();mu&&Ln("event: "+n.toString()),Sc(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tH="repo_interrupt",nH=25;class iH{constructor(t,n,i,r){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new X4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yf(),this.transactionQueueTree_=new My,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rH(e,t,n){if(e.stats_=Iy(e.repoInfo_),e.forceRestClient_||J$())e.server_=new pf(e.repoInfo_,(i,r,s,a)=>{F0(e,i,r,s,a)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>B0(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{En(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Hr(e.repoInfo_,t,(i,r,s,a)=>{F0(e,i,r,s,a)},i=>{B0(e,i)},i=>{aH(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=rU(e.repoInfo_,()=>new i4(e.stats_,e.server_)),e.infoData_=new JU,e.infoSyncTree_=new M0({startListening:(i,r,s,a)=>{let o=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(o=vh(e.infoSyncTree_,i._path,l),setTimeout(()=>{a("ok")},0)),o},stopListening:()=>{}}),Fy(e,"connected",!1),e.serverSyncTree_=new M0({startListening:(i,r,s,a)=>(e.server_.listen(i,s,r,(o,l)=>{const u=a(o,l);Ua(e.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{e.server_.unlisten(i,r)}})}function sH(e){const n=e.infoData_.getNode(new $t(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function FA(e){return F4({timestamp:sH(e)})}function F0(e,t,n,i,r){e.dataUpdateCount++;const s=new $t(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const l=sf(n,u=>Fn(u));a=L4(e.serverSyncTree_,s,l,r)}else{const l=Fn(n);a=M4(e.serverSyncTree_,s,l,r)}else if(i){const l=sf(n,u=>Fn(u));a=O4(e.serverSyncTree_,s,l)}else{const l=Fn(n);a=vh(e.serverSyncTree_,s,l)}let o=s;a.length>0&&(o=$y(e,s)),Ua(e.eventQueue_,o,a)}function B0(e,t){Fy(e,"connected",t),t===!1&&lH(e)}function aH(e,t){Vi(t,(n,i)=>{Fy(e,n,i)})}function Fy(e,t,n){const i=new $t("/.info/"+t),r=Fn(n);e.infoData_.updateSnapshot(i,r);const s=vh(e.infoSyncTree_,i,r);Ua(e.eventQueue_,i,s)}function oH(e){return e.nextWriteId_++}function lH(e){BA(e,"onDisconnectEvents");const t=FA(e),n=yf();rg(e.onDisconnect_,wt(),(r,s)=>{const a=U4(r,s,e.serverSyncTree_,t);fA(n,r,a)});let i=[];rg(n,wt(),(r,s)=>{i=i.concat(vh(e.serverSyncTree_,r,s));const a=fH(e,r);$y(e,a)}),e.onDisconnect_=yf(),Ua(e.eventQueue_,wt(),i)}function uH(e){e.persistentConnection_&&e.persistentConnection_.interrupt(tH)}function BA(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ln(n,...t)}function $A(e,t,n){return kA(e.serverSyncTree_,t,n)||_t.EMPTY_NODE}function By(e,t=e.transactionQueueTree_){if(t||yh(e,t),cl(t)){const n=HA(e,t);ke(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&cH(e,Ec(t),n)}else NA(t)&&ph(t,n=>{By(e,n)})}function cH(e,t,n){const i=n.map(u=>u.currentWriteId),r=$A(e,t,i);let s=r;const a=r.hash();for(let u=0;u<n.length;u++){const c=n[u];ke(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ai(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const o=s.val(!0),l=t;e.server_.put(l.toString(),o,u=>{BA(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(So(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();yh(e,Ly(e.transactionQueueTree_,t)),By(e,e.transactionQueueTree_),Ua(e.eventQueue_,t,c);for(let h=0;h<d.length;h++)Sc(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{yi("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}$y(e,t)}},a)}function $y(e,t){const n=UA(e,t),i=Ec(n),r=HA(e,n);return dH(e,r,i),i}function dH(e,t,n){if(t.length===0)return;const i=[];let r=[];const a=t.filter(o=>o.status===0).map(o=>o.currentWriteId);for(let o=0;o<t.length;o++){const l=t[o],u=Ai(n,l.path);let c=!1,d;if(ke(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,r=r.concat(So(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nH)c=!0,d="maxretry",r=r.concat(So(e.serverSyncTree_,l.currentWriteId,!0));else{const h=$A(e,l.path,a);l.currentInputSnapshot=h;const v=t[o].update(h.val());if(v!==void 0){LA("transaction failed: Data returned ",v,l.path);let g=Fn(v);typeof v=="object"&&v!=null&&Jr(v,".priority")||(g=g.updatePriority(h.getPriority()));const y=l.currentWriteId,I=FA(e),E=H4(g,h,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=E,l.currentWriteId=oH(e),a.splice(a.indexOf(y),1),r=r.concat(N4(e.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(So(e.serverSyncTree_,y,!0))}else c=!0,d="nodata",r=r.concat(So(e.serverSyncTree_,l.currentWriteId,!0))}Ua(e.eventQueue_,n,r),r=[],c&&(t[o].status=2,function(h){setTimeout(h,Math.floor(0))}(t[o].unwatcher),t[o].onComplete&&(d==="nodata"?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(new Error(d),!1,null))))}yh(e,e.transactionQueueTree_);for(let o=0;o<i.length;o++)Sc(i[o]);By(e,e.transactionQueueTree_)}function UA(e,t){let n,i=e.transactionQueueTree_;for(n=rt(t);n!==null&&cl(i)===void 0;)i=Ly(i,n),t=Mt(t),n=rt(t);return i}function HA(e,t){const n=[];return jA(e,t,n),n.sort((i,r)=>i.order-r.order),n}function jA(e,t,n){const i=cl(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ph(t,r=>{jA(e,r,n)})}function yh(e,t){const n=cl(t);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,DA(t,n.length>0?n:void 0)}ph(t,i=>{yh(e,i)})}function fH(e,t){const n=Ec(UA(e,t)),i=Ly(e.transactionQueueTree_,t);return W4(i,r=>{av(e,r)}),av(e,i),OA(i,r=>{av(e,r)}),n}function av(e,t){const n=cl(t);if(n){const i=[];let r=[],s=-1;for(let a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(ke(s===a-1,"All SENT items should be at beginning of queue."),s=a,n[a].status=3,n[a].abortReason="set"):(ke(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),r=r.concat(So(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&i.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));s===-1?DA(t,void 0):n.length=s+1,Ua(e.eventQueue_,Ec(t),r);for(let a=0;a<i.length;a++)Sc(i[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hH(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}t+="/"+r}return t}function mH(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):yi(`Invalid query segment '${n}' in query '${e}'`)}return t}const $0=function(e,t){const n=vH(e),i=n.namespace;n.domain==="firebase.com"&&Ca(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ca("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||W$();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tU(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new $t(n.pathString)}},vH=function(e){let t="",n="",i="",r="",s="",a=!0,o="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(o=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(r=hH(e.substring(c,d)));const h=mH(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(a=o==="https"||o==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const v=t.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=t.indexOf(".");i=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:a,scheme:o,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t,n,i,r){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return tt(this._path)?null:nA(this._path)}get ref(){return new dl(this._repo,this._path)}get _queryIdentifier(){const t=C0(this._queryParams),n=wy(t);return n==="{}"?"default":n}get _queryObject(){return C0(this._queryParams)}isEqual(t){if(t=Jt(t),!(t instanceof Uy))return!1;const n=this._repo===t._repo,i=sA(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+kU(this._path)}}class dl extends Uy{constructor(t,n){super(t,n,new ky,!1)}get parent(){const t=rA(this._path);return t===null?null:new dl(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}V4(dl);D4(dl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gH="FIREBASE_DATABASE_EMULATOR_HOST",fg={};let pH=!1;function yH(e,t,n,i,r){let s=i||e.options.databaseURL;s===void 0&&(e.options.projectId||Ca("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ln("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a=$0(s,r),o=a.repoInfo,l;typeof process<"u"&&a0&&(l=a0[gH]),l?(s=`http://${l}?ns=${o.namespace}`,a=$0(s,r),o=a.repoInfo):a.repoInfo.secure;const u=new eU(e.name,e.options,t);Q4("Invalid Firebase Database URL",a),tt(a.path)||Ca("Database URL must point to the root of a Firebase Database (not including a child path).");const c=bH(o,e,u,new Z$(e.name,n));return new wH(c,e)}function _H(e,t){const n=fg[t];(!n||n[e.key]!==e)&&Ca(`Database ${t}(${e.repoInfo_}) has already been deleted.`),uH(e),delete n[e.key]}function bH(e,t,n,i){let r=fg[t.name];r||(r={},fg[t.name]=r);let s=r[e.toURLString()];return s&&Ca("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new iH(e,pH,n,i),r[e.toURLString()]=s,s}class wH{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rH(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dl(this._repo,wt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_H(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Ca("Cannot call "+t+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SH(e){F$(Hs),cr(new ji("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return yH(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),pi(o0,l0,e),pi(o0,l0,"esm2017")}Hr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Hr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};SH();var U0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var va,WA;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,b){function _(){}_.prototype=b.prototype,R.D=b.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(T,k,C){for(var A=Array(arguments.length-2),B=2;B<arguments.length;B++)A[B-2]=arguments[B];return b.prototype[k].apply(T,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,b,_){_||(_=0);var T=Array(16);if(typeof b=="string")for(var k=0;16>k;++k)T[k]=b.charCodeAt(_++)|b.charCodeAt(_++)<<8|b.charCodeAt(_++)<<16|b.charCodeAt(_++)<<24;else for(k=0;16>k;++k)T[k]=b[_++]|b[_++]<<8|b[_++]<<16|b[_++]<<24;b=R.g[0],_=R.g[1],k=R.g[2];var C=R.g[3],A=b+(C^_&(k^C))+T[0]+3614090360&4294967295;b=_+(A<<7&4294967295|A>>>25),A=C+(k^b&(_^k))+T[1]+3905402710&4294967295,C=b+(A<<12&4294967295|A>>>20),A=k+(_^C&(b^_))+T[2]+606105819&4294967295,k=C+(A<<17&4294967295|A>>>15),A=_+(b^k&(C^b))+T[3]+3250441966&4294967295,_=k+(A<<22&4294967295|A>>>10),A=b+(C^_&(k^C))+T[4]+4118548399&4294967295,b=_+(A<<7&4294967295|A>>>25),A=C+(k^b&(_^k))+T[5]+1200080426&4294967295,C=b+(A<<12&4294967295|A>>>20),A=k+(_^C&(b^_))+T[6]+2821735955&4294967295,k=C+(A<<17&4294967295|A>>>15),A=_+(b^k&(C^b))+T[7]+4249261313&4294967295,_=k+(A<<22&4294967295|A>>>10),A=b+(C^_&(k^C))+T[8]+1770035416&4294967295,b=_+(A<<7&4294967295|A>>>25),A=C+(k^b&(_^k))+T[9]+2336552879&4294967295,C=b+(A<<12&4294967295|A>>>20),A=k+(_^C&(b^_))+T[10]+4294925233&4294967295,k=C+(A<<17&4294967295|A>>>15),A=_+(b^k&(C^b))+T[11]+2304563134&4294967295,_=k+(A<<22&4294967295|A>>>10),A=b+(C^_&(k^C))+T[12]+1804603682&4294967295,b=_+(A<<7&4294967295|A>>>25),A=C+(k^b&(_^k))+T[13]+4254626195&4294967295,C=b+(A<<12&4294967295|A>>>20),A=k+(_^C&(b^_))+T[14]+2792965006&4294967295,k=C+(A<<17&4294967295|A>>>15),A=_+(b^k&(C^b))+T[15]+1236535329&4294967295,_=k+(A<<22&4294967295|A>>>10),A=b+(k^C&(_^k))+T[1]+4129170786&4294967295,b=_+(A<<5&4294967295|A>>>27),A=C+(_^k&(b^_))+T[6]+3225465664&4294967295,C=b+(A<<9&4294967295|A>>>23),A=k+(b^_&(C^b))+T[11]+643717713&4294967295,k=C+(A<<14&4294967295|A>>>18),A=_+(C^b&(k^C))+T[0]+3921069994&4294967295,_=k+(A<<20&4294967295|A>>>12),A=b+(k^C&(_^k))+T[5]+3593408605&4294967295,b=_+(A<<5&4294967295|A>>>27),A=C+(_^k&(b^_))+T[10]+38016083&4294967295,C=b+(A<<9&4294967295|A>>>23),A=k+(b^_&(C^b))+T[15]+3634488961&4294967295,k=C+(A<<14&4294967295|A>>>18),A=_+(C^b&(k^C))+T[4]+3889429448&4294967295,_=k+(A<<20&4294967295|A>>>12),A=b+(k^C&(_^k))+T[9]+568446438&4294967295,b=_+(A<<5&4294967295|A>>>27),A=C+(_^k&(b^_))+T[14]+3275163606&4294967295,C=b+(A<<9&4294967295|A>>>23),A=k+(b^_&(C^b))+T[3]+4107603335&4294967295,k=C+(A<<14&4294967295|A>>>18),A=_+(C^b&(k^C))+T[8]+1163531501&4294967295,_=k+(A<<20&4294967295|A>>>12),A=b+(k^C&(_^k))+T[13]+2850285829&4294967295,b=_+(A<<5&4294967295|A>>>27),A=C+(_^k&(b^_))+T[2]+4243563512&4294967295,C=b+(A<<9&4294967295|A>>>23),A=k+(b^_&(C^b))+T[7]+1735328473&4294967295,k=C+(A<<14&4294967295|A>>>18),A=_+(C^b&(k^C))+T[12]+2368359562&4294967295,_=k+(A<<20&4294967295|A>>>12),A=b+(_^k^C)+T[5]+4294588738&4294967295,b=_+(A<<4&4294967295|A>>>28),A=C+(b^_^k)+T[8]+2272392833&4294967295,C=b+(A<<11&4294967295|A>>>21),A=k+(C^b^_)+T[11]+1839030562&4294967295,k=C+(A<<16&4294967295|A>>>16),A=_+(k^C^b)+T[14]+4259657740&4294967295,_=k+(A<<23&4294967295|A>>>9),A=b+(_^k^C)+T[1]+2763975236&4294967295,b=_+(A<<4&4294967295|A>>>28),A=C+(b^_^k)+T[4]+1272893353&4294967295,C=b+(A<<11&4294967295|A>>>21),A=k+(C^b^_)+T[7]+4139469664&4294967295,k=C+(A<<16&4294967295|A>>>16),A=_+(k^C^b)+T[10]+3200236656&4294967295,_=k+(A<<23&4294967295|A>>>9),A=b+(_^k^C)+T[13]+681279174&4294967295,b=_+(A<<4&4294967295|A>>>28),A=C+(b^_^k)+T[0]+3936430074&4294967295,C=b+(A<<11&4294967295|A>>>21),A=k+(C^b^_)+T[3]+3572445317&4294967295,k=C+(A<<16&4294967295|A>>>16),A=_+(k^C^b)+T[6]+76029189&4294967295,_=k+(A<<23&4294967295|A>>>9),A=b+(_^k^C)+T[9]+3654602809&4294967295,b=_+(A<<4&4294967295|A>>>28),A=C+(b^_^k)+T[12]+3873151461&4294967295,C=b+(A<<11&4294967295|A>>>21),A=k+(C^b^_)+T[15]+530742520&4294967295,k=C+(A<<16&4294967295|A>>>16),A=_+(k^C^b)+T[2]+3299628645&4294967295,_=k+(A<<23&4294967295|A>>>9),A=b+(k^(_|~C))+T[0]+4096336452&4294967295,b=_+(A<<6&4294967295|A>>>26),A=C+(_^(b|~k))+T[7]+1126891415&4294967295,C=b+(A<<10&4294967295|A>>>22),A=k+(b^(C|~_))+T[14]+2878612391&4294967295,k=C+(A<<15&4294967295|A>>>17),A=_+(C^(k|~b))+T[5]+4237533241&4294967295,_=k+(A<<21&4294967295|A>>>11),A=b+(k^(_|~C))+T[12]+1700485571&4294967295,b=_+(A<<6&4294967295|A>>>26),A=C+(_^(b|~k))+T[3]+2399980690&4294967295,C=b+(A<<10&4294967295|A>>>22),A=k+(b^(C|~_))+T[10]+4293915773&4294967295,k=C+(A<<15&4294967295|A>>>17),A=_+(C^(k|~b))+T[1]+2240044497&4294967295,_=k+(A<<21&4294967295|A>>>11),A=b+(k^(_|~C))+T[8]+1873313359&4294967295,b=_+(A<<6&4294967295|A>>>26),A=C+(_^(b|~k))+T[15]+4264355552&4294967295,C=b+(A<<10&4294967295|A>>>22),A=k+(b^(C|~_))+T[6]+2734768916&4294967295,k=C+(A<<15&4294967295|A>>>17),A=_+(C^(k|~b))+T[13]+1309151649&4294967295,_=k+(A<<21&4294967295|A>>>11),A=b+(k^(_|~C))+T[4]+4149444226&4294967295,b=_+(A<<6&4294967295|A>>>26),A=C+(_^(b|~k))+T[11]+3174756917&4294967295,C=b+(A<<10&4294967295|A>>>22),A=k+(b^(C|~_))+T[2]+718787259&4294967295,k=C+(A<<15&4294967295|A>>>17),A=_+(C^(k|~b))+T[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+C&4294967295}i.prototype.u=function(R,b){b===void 0&&(b=R.length);for(var _=b-this.blockSize,T=this.B,k=this.h,C=0;C<b;){if(k==0)for(;C<=_;)r(this,R,C),C+=this.blockSize;if(typeof R=="string"){for(;C<b;)if(T[k++]=R.charCodeAt(C++),k==this.blockSize){r(this,T),k=0;break}}else for(;C<b;)if(T[k++]=R[C++],k==this.blockSize){r(this,T),k=0;break}}this.h=k,this.o+=b},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;var _=8*this.o;for(b=R.length-8;b<R.length;++b)R[b]=_&255,_/=256;for(this.u(R),R=Array(16),b=_=0;4>b;++b)for(var T=0;32>T;T+=8)R[_++]=this.g[b]>>>T&255;return R};function s(R,b){var _=o;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=b(R)}function a(R,b){this.h=b;for(var _=[],T=!0,k=R.length-1;0<=k;k--){var C=R[k]|0;T&&C==b||(_[k]=C,T=!1)}this.g=_}var o={};function l(R){return-128<=R&&128>R?s(R,function(b){return new a([b|0],0>b?-1:0)}):new a([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(0>R)return y(u(-R));for(var b=[],_=1,T=0;R>=_;T++)b[T]=R/_|0,_*=4294967296;return new a(b,0)}function c(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return y(c(R.substring(1),b));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(b,8)),T=d,k=0;k<R.length;k+=8){var C=Math.min(8,R.length-k),A=parseInt(R.substring(k,k+C),b);8>C?(C=u(Math.pow(b,C)),T=T.j(C).add(u(A))):(T=T.j(_),T=T.add(u(A)))}return T}var d=l(0),h=l(1),v=l(16777216);e=a.prototype,e.m=function(){if(p(this))return-y(this).m();for(var R=0,b=1,_=0;_<this.g.length;_++){var T=this.i(_);R+=(0<=T?T:4294967296+T)*b,b*=4294967296}return R},e.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(g(this))return"0";if(p(this))return"-"+y(this).toString(R);for(var b=u(Math.pow(R,6)),_=this,T="";;){var k=P(_,b).g;_=I(_,k.j(b));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=k,g(_))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},e.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function g(R){if(R.h!=0)return!1;for(var b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function p(R){return R.h==-1}e.l=function(R){return R=I(this,R),p(R)?-1:g(R)?0:1};function y(R){for(var b=R.g.length,_=[],T=0;T<b;T++)_[T]=~R.g[T];return new a(_,~R.h).add(h)}e.abs=function(){return p(this)?y(this):this},e.add=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0,k=0;k<=b;k++){var C=T+(this.i(k)&65535)+(R.i(k)&65535),A=(C>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);T=A>>>16,C&=65535,A&=65535,_[k]=A<<16|C}return new a(_,_[_.length-1]&-2147483648?-1:0)};function I(R,b){return R.add(y(b))}e.j=function(R){if(g(this)||g(R))return d;if(p(this))return p(R)?y(this).j(y(R)):y(y(this).j(R));if(p(R))return y(this.j(y(R)));if(0>this.l(v)&&0>R.l(v))return u(this.m()*R.m());for(var b=this.g.length+R.g.length,_=[],T=0;T<2*b;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<R.g.length;k++){var C=this.i(T)>>>16,A=this.i(T)&65535,B=R.i(k)>>>16,W=R.i(k)&65535;_[2*T+2*k]+=A*W,E(_,2*T+2*k),_[2*T+2*k+1]+=C*W,E(_,2*T+2*k+1),_[2*T+2*k+1]+=A*B,E(_,2*T+2*k+1),_[2*T+2*k+2]+=C*B,E(_,2*T+2*k+2)}for(T=0;T<b;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=b;T<2*b;T++)_[T]=0;return new a(_,0)};function E(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function V(R,b){this.g=R,this.h=b}function P(R,b){if(g(b))throw Error("division by zero");if(g(R))return new V(d,d);if(p(R))return b=P(y(R),b),new V(y(b.g),y(b.h));if(p(b))return b=P(R,y(b)),new V(y(b.g),b.h);if(30<R.g.length){if(p(R)||p(b))throw Error("slowDivide_ only works with positive integers.");for(var _=h,T=b;0>=T.l(R);)_=D(_),T=D(T);var k=N(_,1),C=N(T,1);for(T=N(T,2),_=N(_,2);!g(T);){var A=C.add(T);0>=A.l(R)&&(k=k.add(_),C=A),T=N(T,1),_=N(_,1)}return b=I(R,k.j(b)),new V(k,b)}for(k=d;0<=R.l(b);){for(_=Math.max(1,Math.floor(R.m()/b.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=u(_),A=C.j(b);p(A)||0<A.l(R);)_-=T,C=u(_),A=C.j(b);g(C)&&(C=h),k=k.add(C),R=I(R,A)}return new V(k,R)}e.A=function(R){return P(this,R).h},e.and=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0;T<b;T++)_[T]=this.i(T)&R.i(T);return new a(_,this.h&R.h)},e.or=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0;T<b;T++)_[T]=this.i(T)|R.i(T);return new a(_,this.h|R.h)},e.xor=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0;T<b;T++)_[T]=this.i(T)^R.i(T);return new a(_,this.h^R.h)};function D(R){for(var b=R.g.length+1,_=[],T=0;T<b;T++)_[T]=R.i(T)<<1|R.i(T-1)>>>31;return new a(_,R.h)}function N(R,b){var _=b>>5;b%=32;for(var T=R.g.length-_,k=[],C=0;C<T;C++)k[C]=0<b?R.i(C+_)>>>b|R.i(C+_+1)<<32-b:R.i(C+_);return new a(k,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,WA=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=c,va=a}).apply(typeof U0<"u"?U0:typeof self<"u"?self:typeof window<"u"?window:{});var pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zA,qA,tu,GA,Ld,hg,KA,YA,QA;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,w,x){return f==Array.prototype||f==Object.prototype||(f[w]=x.value),f};function n(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof pd=="object"&&pd];for(var w=0;w<f.length;++w){var x=f[w];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var i=n(this);function r(f,w){if(w)e:{var x=i;f=f.split(".");for(var L=0;L<f.length-1;L++){var J=f[L];if(!(J in x))break e;x=x[J]}f=f[f.length-1],L=x[f],w=w(L),w!=L&&w!=null&&t(x,f,{configurable:!0,writable:!0,value:w})}}function s(f,w){f instanceof String&&(f+="");var x=0,L=!1,J={next:function(){if(!L&&x<f.length){var ae=x++;return{value:w(ae,f[ae]),done:!1}}return L=!0,{done:!0,value:void 0}}};return J[Symbol.iterator]=function(){return J},J}r("Array.prototype.values",function(f){return f||function(){return s(this,function(w,x){return x})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function l(f){var w=typeof f;return w=w!="object"?w:f?Array.isArray(f)?"array":w:"null",w=="array"||w=="object"&&typeof f.length=="number"}function u(f){var w=typeof f;return w=="object"&&f!=null||w=="function"}function c(f,w,x){return f.call.apply(f.bind,arguments)}function d(f,w,x){if(!f)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var J=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(J,L),f.apply(w,J)}}return function(){return f.apply(w,arguments)}}function h(f,w,x){return h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?c:d,h.apply(null,arguments)}function v(f,w){var x=Array.prototype.slice.call(arguments,1);return function(){var L=x.slice();return L.push.apply(L,arguments),f.apply(this,L)}}function g(f,w){function x(){}x.prototype=w.prototype,f.aa=w.prototype,f.prototype=new x,f.prototype.constructor=f,f.Qb=function(L,J,ae){for(var Te=Array(arguments.length-2),It=2;It<arguments.length;It++)Te[It-2]=arguments[It];return w.prototype[J].apply(L,Te)}}function p(f){const w=f.length;if(0<w){const x=Array(w);for(let L=0;L<w;L++)x[L]=f[L];return x}return[]}function y(f,w){for(let x=1;x<arguments.length;x++){const L=arguments[x];if(l(L)){const J=f.length||0,ae=L.length||0;f.length=J+ae;for(let Te=0;Te<ae;Te++)f[J+Te]=L[Te]}else f.push(L)}}class I{constructor(w,x){this.i=w,this.j=x,this.h=0,this.g=null}get(){let w;return 0<this.h?(this.h--,w=this.g,this.g=w.next,w.next=null):w=this.i(),w}}function E(f){return/^[\s\xa0]*$/.test(f)}function V(){var f=o.navigator;return f&&(f=f.userAgent)?f:""}function P(f){return P[" "](f),f}P[" "]=function(){};var D=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function N(f,w,x){for(const L in f)w.call(x,f[L],L,f)}function R(f,w){for(const x in f)w.call(void 0,f[x],x,f)}function b(f){const w={};for(const x in f)w[x]=f[x];return w}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(f,w){let x,L;for(let J=1;J<arguments.length;J++){L=arguments[J];for(x in L)f[x]=L[x];for(let ae=0;ae<_.length;ae++)x=_[ae],Object.prototype.hasOwnProperty.call(L,x)&&(f[x]=L[x])}}function k(f){var w=1;f=f.split(":");const x=[];for(;0<w&&f.length;)x.push(f.shift()),w--;return f.length&&x.push(f.join(":")),x}function C(f){o.setTimeout(()=>{throw f},0)}function A(){var f=U;let w=null;return f.g&&(w=f.g,f.g=f.g.next,f.g||(f.h=null),w.next=null),w}class B{constructor(){this.h=this.g=null}add(w,x){const L=W.get();L.set(w,x),this.h?this.h.next=L:this.g=L,this.h=L}}var W=new I(()=>new Q,f=>f.reset());class Q{constructor(){this.next=this.g=this.h=null}set(w,x){this.h=w,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let se,z=!1,U=new B,$=()=>{const f=o.Promise.resolve(void 0);se=()=>{f.then(q)}};var q=()=>{for(var f;f=A();){try{f.h.call(f.g)}catch(x){C(x)}var w=W;w.j(f),100>w.h&&(w.h++,f.next=w.g,w.g=f)}z=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(f,w){this.type=f,this.g=this.target=w,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var f=!1,w=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const x=()=>{};o.addEventListener("test",x,w),o.removeEventListener("test",x,w)}catch{}return f}();function Pe(f,w){if(ge.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var x=this.type=f.type,L=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=w,w=f.relatedTarget){if(D){e:{try{P(w.nodeName);var J=!0;break e}catch{}J=!1}J||(w=null)}}else x=="mouseover"?w=f.fromElement:x=="mouseout"&&(w=f.toElement);this.relatedTarget=w,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:ie[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&Pe.aa.h.call(this)}}g(Pe,ge);var ie={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),oe=0;function he(f,w,x,L,J){this.listener=f,this.proxy=null,this.src=w,this.type=x,this.capture=!!L,this.ha=J,this.key=++oe,this.da=this.fa=!1}function ue(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function re(f){this.src=f,this.g={},this.h=0}re.prototype.add=function(f,w,x,L,J){var ae=f.toString();f=this.g[ae],f||(f=this.g[ae]=[],this.h++);var Te=O(f,w,L,J);return-1<Te?(w=f[Te],x||(w.fa=!1)):(w=new he(w,this.src,ae,!!L,J),w.fa=x,f.push(w)),w};function Ee(f,w){var x=w.type;if(x in f.g){var L=f.g[x],J=Array.prototype.indexOf.call(L,w,void 0),ae;(ae=0<=J)&&Array.prototype.splice.call(L,J,1),ae&&(ue(w),f.g[x].length==0&&(delete f.g[x],f.h--))}}function O(f,w,x,L){for(var J=0;J<f.length;++J){var ae=f[J];if(!ae.da&&ae.listener==w&&ae.capture==!!x&&ae.ha==L)return J}return-1}var M="closure_lm_"+(1e6*Math.random()|0),H={};function Z(f,w,x,L,J){if(Array.isArray(w)){for(var ae=0;ae<w.length;ae++)Z(f,w[ae],x,L,J);return null}return x=De(x),f&&f[j]?f.K(w,x,u(L)?!!L.capture:!!L,J):X(f,w,x,!1,L,J)}function X(f,w,x,L,J,ae){if(!w)throw Error("Invalid event type");var Te=u(J)?!!J.capture:!!J,It=Me(f);if(It||(f[M]=It=new re(f)),x=It.add(w,x,L,Te,ae),x.proxy)return x;if(L=le(),x.proxy=L,L.src=f,L.listener=x,f.addEventListener)Se||(J=Te),J===void 0&&(J=!1),f.addEventListener(w.toString(),L,J);else if(f.attachEvent)f.attachEvent(_e(w.toString()),L);else if(f.addListener&&f.removeListener)f.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return x}function le(){function f(x){return w.call(f.src,f.listener,x)}const w=fe;return f}function be(f,w,x,L,J){if(Array.isArray(w))for(var ae=0;ae<w.length;ae++)be(f,w[ae],x,L,J);else L=u(L)?!!L.capture:!!L,x=De(x),f&&f[j]?(f=f.i,w=String(w).toString(),w in f.g&&(ae=f.g[w],x=O(ae,x,L,J),-1<x&&(ue(ae[x]),Array.prototype.splice.call(ae,x,1),ae.length==0&&(delete f.g[w],f.h--)))):f&&(f=Me(f))&&(w=f.g[w.toString()],f=-1,w&&(f=O(w,x,L,J)),(x=-1<f?w[f]:null)&&de(x))}function de(f){if(typeof f!="number"&&f&&!f.da){var w=f.src;if(w&&w[j])Ee(w.i,f);else{var x=f.type,L=f.proxy;w.removeEventListener?w.removeEventListener(x,L,f.capture):w.detachEvent?w.detachEvent(_e(x),L):w.addListener&&w.removeListener&&w.removeListener(L),(x=Me(w))?(Ee(x,f),x.h==0&&(x.src=null,w[M]=null)):ue(f)}}}function _e(f){return f in H?H[f]:H[f]="on"+f}function fe(f,w){if(f.da)f=!0;else{w=new Pe(w,this);var x=f.listener,L=f.ha||f.src;f.fa&&de(f),f=x.call(L,w)}return f}function Me(f){return f=f[M],f instanceof re?f:null}var Ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function De(f){return typeof f=="function"?f:(f[Ce]||(f[Ce]=function(w){return f.handleEvent(w)}),f[Ce])}function Ve(){ne.call(this),this.i=new re(this),this.M=this,this.F=null}g(Ve,ne),Ve.prototype[j]=!0,Ve.prototype.removeEventListener=function(f,w,x,L){be(this,f,w,x,L)};function Ue(f,w){var x,L=f.F;if(L)for(x=[];L;L=L.F)x.push(L);if(f=f.M,L=w.type||w,typeof w=="string")w=new ge(w,f);else if(w instanceof ge)w.target=w.target||f;else{var J=w;w=new ge(L,f),T(w,J)}if(J=!0,x)for(var ae=x.length-1;0<=ae;ae--){var Te=w.g=x[ae];J=ft(Te,L,!0,w)&&J}if(Te=w.g=f,J=ft(Te,L,!0,w)&&J,J=ft(Te,L,!1,w)&&J,x)for(ae=0;ae<x.length;ae++)Te=w.g=x[ae],J=ft(Te,L,!1,w)&&J}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var f=this.i,w;for(w in f.g){for(var x=f.g[w],L=0;L<x.length;L++)ue(x[L]);delete f.g[w],f.h--}}this.F=null},Ve.prototype.K=function(f,w,x,L){return this.i.add(String(f),w,!1,x,L)},Ve.prototype.L=function(f,w,x,L){return this.i.add(String(f),w,!0,x,L)};function ft(f,w,x,L){if(w=f.i.g[String(w)],!w)return!0;w=w.concat();for(var J=!0,ae=0;ae<w.length;++ae){var Te=w[ae];if(Te&&!Te.da&&Te.capture==x){var It=Te.listener,_n=Te.ha||Te.src;Te.fa&&Ee(f.i,Te),J=It.call(_n,L)!==!1&&J}}return J&&!L.defaultPrevented}function lt(f,w,x){if(typeof f=="function")x&&(f=h(f,x));else if(f&&typeof f.handleEvent=="function")f=h(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(w)?-1:o.setTimeout(f,w||0)}function Rn(f){f.g=lt(()=>{f.g=null,f.i&&(f.i=!1,Rn(f))},f.l);const w=f.h;f.h=null,f.m.apply(null,w)}class un extends ne{constructor(w,x){super(),this.m=w,this.l=x,this.h=null,this.i=!1,this.g=null}j(w){this.h=arguments,this.g?this.i=!0:Rn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(f){ne.call(this),this.h=f,this.g={}}g(yn,ne);var xn=[];function rs(f){N(f.g,function(w,x){this.g.hasOwnProperty(x)&&de(w)},f),f.g={}}yn.prototype.N=function(){yn.aa.N.call(this),rs(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var no=o.JSON.stringify,Gn=o.JSON.parse,Ti=class{stringify(f){return o.JSON.stringify(f,void 0)}parse(f){return o.JSON.parse(f,void 0)}};function io(){}io.prototype.h=null;function Rb(f){return f.h||(f.h=f.i())}function xb(){}var Tl={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gm(){ge.call(this,"d")}g(gm,ge);function pm(){ge.call(this,"c")}g(pm,ge);var Ys={},Vb=null;function Hc(){return Vb=Vb||new Ve}Ys.La="serverreachability";function Db(f){ge.call(this,Ys.La,f)}g(Db,ge);function kl(f){const w=Hc();Ue(w,new Db(w))}Ys.STAT_EVENT="statevent";function Nb(f,w){ge.call(this,Ys.STAT_EVENT,f),this.stat=w}g(Nb,ge);function Kn(f){const w=Hc();Ue(w,new Nb(w,f))}Ys.Ma="timingevent";function Ob(f,w){ge.call(this,Ys.Ma,f),this.size=w}g(Ob,ge);function Al(f,w){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){f()},w)}function Pl(){this.g=!0}Pl.prototype.xa=function(){this.g=!1};function oD(f,w,x,L,J,ae){f.info(function(){if(f.g)if(ae)for(var Te="",It=ae.split("&"),_n=0;_n<It.length;_n++){var ut=It[_n].split("=");if(1<ut.length){var Vn=ut[0];ut=ut[1];var Dn=Vn.split("_");Te=2<=Dn.length&&Dn[1]=="type"?Te+(Vn+"="+ut+"&"):Te+(Vn+"=redacted&")}}else Te=null;else Te=ae;return"XMLHTTP REQ ("+L+") [attempt "+J+"]: "+w+`
`+x+`
`+Te})}function lD(f,w,x,L,J,ae,Te){f.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+J+"]: "+w+`
`+x+`
`+ae+" "+Te})}function ro(f,w,x,L){f.info(function(){return"XMLHTTP TEXT ("+w+"): "+cD(f,x)+(L?" "+L:"")})}function uD(f,w){f.info(function(){return"TIMEOUT: "+w})}Pl.prototype.info=function(){};function cD(f,w){if(!f.g)return w;if(!w)return null;try{var x=JSON.parse(w);if(x){for(f=0;f<x.length;f++)if(Array.isArray(x[f])){var L=x[f];if(!(2>L.length)){var J=L[1];if(Array.isArray(J)&&!(1>J.length)){var ae=J[0];if(ae!="noop"&&ae!="stop"&&ae!="close")for(var Te=1;Te<J.length;Te++)J[Te]=""}}}}return no(x)}catch{return w}}var jc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mb={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ym;function Wc(){}g(Wc,io),Wc.prototype.g=function(){return new XMLHttpRequest},Wc.prototype.i=function(){return{}},ym=new Wc;function ss(f,w,x,L){this.j=f,this.i=w,this.l=x,this.R=L||1,this.U=new yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lb}function Lb(){this.i=null,this.g="",this.h=!1}var Fb={},_m={};function bm(f,w,x){f.L=1,f.v=Kc(Tr(w)),f.m=x,f.P=!0,Bb(f,null)}function Bb(f,w){f.F=Date.now(),zc(f),f.A=Tr(f.v);var x=f.A,L=f.R;Array.isArray(L)||(L=[String(L)]),Zb(x.i,"t",L),f.C=0,x=f.j.J,f.h=new Lb,f.g=pw(f.j,x?w:null,!f.m),0<f.O&&(f.M=new un(h(f.Y,f,f.g),f.O)),w=f.U,x=f.g,L=f.ca;var J="readystatechange";Array.isArray(J)||(J&&(xn[0]=J.toString()),J=xn);for(var ae=0;ae<J.length;ae++){var Te=Z(x,J[ae],L||w.handleEvent,!1,w.h||w);if(!Te)break;w.g[Te.key]=Te}w=f.H?b(f.H):{},f.m?(f.u||(f.u="POST"),w["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,w)):(f.u="GET",f.g.ea(f.A,f.u,null,w)),kl(),oD(f.i,f.u,f.A,f.l,f.R,f.m)}ss.prototype.ca=function(f){f=f.target;const w=this.M;w&&kr(f)==3?w.j():this.Y(f)},ss.prototype.Y=function(f){try{if(f==this.g)e:{const Dn=kr(this.g);var w=this.g.Ba();const oo=this.g.Z();if(!(3>Dn)&&(Dn!=3||this.g&&(this.h.h||this.g.oa()||aw(this.g)))){this.J||Dn!=4||w==7||(w==8||0>=oo?kl(3):kl(2)),wm(this);var x=this.g.Z();this.X=x;t:if($b(this)){var L=aw(this.g);f="";var J=L.length,ae=kr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qs(this),Rl(this);var Te="";break t}this.h.i=new o.TextDecoder}for(w=0;w<J;w++)this.h.h=!0,f+=this.h.i.decode(L[w],{stream:!(ae&&w==J-1)});L.length=0,this.h.g+=f,this.C=0,Te=this.h.g}else Te=this.g.oa();if(this.o=x==200,lD(this.i,this.u,this.A,this.l,this.R,Dn,x),this.o){if(this.T&&!this.K){t:{if(this.g){var It,_n=this.g;if((It=_n.g?_n.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(It)){var ut=It;break t}}ut=null}if(x=ut)ro(this.i,this.l,x,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sm(this,x);else{this.o=!1,this.s=3,Kn(12),Qs(this),Rl(this);break e}}if(this.P){x=!0;let Ni;for(;!this.J&&this.C<Te.length;)if(Ni=dD(this,Te),Ni==_m){Dn==4&&(this.s=4,Kn(14),x=!1),ro(this.i,this.l,null,"[Incomplete Response]");break}else if(Ni==Fb){this.s=4,Kn(15),ro(this.i,this.l,Te,"[Invalid Chunk]"),x=!1;break}else ro(this.i,this.l,Ni,null),Sm(this,Ni);if($b(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dn!=4||Te.length!=0||this.h.h||(this.s=1,Kn(16),x=!1),this.o=this.o&&x,!x)ro(this.i,this.l,Te,"[Invalid Chunked Response]"),Qs(this),Rl(this);else if(0<Te.length&&!this.W){this.W=!0;var Vn=this.j;Vn.g==this&&Vn.ba&&!Vn.M&&(Vn.j.info("Great, no buffering proxy detected. Bytes received: "+Te.length),Am(Vn),Vn.M=!0,Kn(11))}}else ro(this.i,this.l,Te,null),Sm(this,Te);Dn==4&&Qs(this),this.o&&!this.J&&(Dn==4?hw(this.j,this):(this.o=!1,zc(this)))}else AD(this.g),x==400&&0<Te.indexOf("Unknown SID")?(this.s=3,Kn(12)):(this.s=0,Kn(13)),Qs(this),Rl(this)}}}catch{}finally{}};function $b(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function dD(f,w){var x=f.C,L=w.indexOf(`
`,x);return L==-1?_m:(x=Number(w.substring(x,L)),isNaN(x)?Fb:(L+=1,L+x>w.length?_m:(w=w.slice(L,L+x),f.C=L+x,w)))}ss.prototype.cancel=function(){this.J=!0,Qs(this)};function zc(f){f.S=Date.now()+f.I,Ub(f,f.I)}function Ub(f,w){if(f.B!=null)throw Error("WatchDog timer not null");f.B=Al(h(f.ba,f),w)}function wm(f){f.B&&(o.clearTimeout(f.B),f.B=null)}ss.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(uD(this.i,this.A),this.L!=2&&(kl(),Kn(17)),Qs(this),this.s=2,Rl(this)):Ub(this,this.S-f)};function Rl(f){f.j.G==0||f.J||hw(f.j,f)}function Qs(f){wm(f);var w=f.M;w&&typeof w.ma=="function"&&w.ma(),f.M=null,rs(f.U),f.g&&(w=f.g,f.g=null,w.abort(),w.ma())}function Sm(f,w){try{var x=f.j;if(x.G!=0&&(x.g==f||Im(x.h,f))){if(!f.K&&Im(x.h,f)&&x.G==3){try{var L=x.Da.g.parse(w)}catch{L=null}if(Array.isArray(L)&&L.length==3){var J=L;if(J[0]==0){e:if(!x.u){if(x.g)if(x.g.F+3e3<f.F)Zc(x),Xc(x);else break e;km(x),Kn(18)}}else x.za=J[1],0<x.za-x.T&&37500>J[2]&&x.F&&x.v==0&&!x.C&&(x.C=Al(h(x.Za,x),6e3));if(1>=Wb(x.h)&&x.ca){try{x.ca()}catch{}x.ca=void 0}}else Js(x,11)}else if((f.K||x.g==f)&&Zc(x),!E(w))for(J=x.Da.g.parse(w),w=0;w<J.length;w++){let ut=J[w];if(x.T=ut[0],ut=ut[1],x.G==2)if(ut[0]=="c"){x.K=ut[1],x.ia=ut[2];const Vn=ut[3];Vn!=null&&(x.la=Vn,x.j.info("VER="+x.la));const Dn=ut[4];Dn!=null&&(x.Aa=Dn,x.j.info("SVER="+x.Aa));const oo=ut[5];oo!=null&&typeof oo=="number"&&0<oo&&(L=1.5*oo,x.L=L,x.j.info("backChannelRequestTimeoutMs_="+L)),L=x;const Ni=f.g;if(Ni){const td=Ni.g?Ni.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(td){var ae=L.h;ae.g||td.indexOf("spdy")==-1&&td.indexOf("quic")==-1&&td.indexOf("h2")==-1||(ae.j=ae.l,ae.g=new Set,ae.h&&(Em(ae,ae.h),ae.h=null))}if(L.D){const Pm=Ni.g?Ni.g.getResponseHeader("X-HTTP-Session-Id"):null;Pm&&(L.ya=Pm,Nt(L.I,L.D,Pm))}}x.G=3,x.l&&x.l.ua(),x.ba&&(x.R=Date.now()-f.F,x.j.info("Handshake RTT: "+x.R+"ms")),L=x;var Te=f;if(L.qa=gw(L,L.J?L.ia:null,L.W),Te.K){zb(L.h,Te);var It=Te,_n=L.L;_n&&(It.I=_n),It.B&&(wm(It),zc(It)),L.g=Te}else dw(L);0<x.i.length&&Jc(x)}else ut[0]!="stop"&&ut[0]!="close"||Js(x,7);else x.G==3&&(ut[0]=="stop"||ut[0]=="close"?ut[0]=="stop"?Js(x,7):Tm(x):ut[0]!="noop"&&x.l&&x.l.ta(ut),x.v=0)}}kl(4)}catch{}}var fD=class{constructor(f,w){this.g=f,this.map=w}};function Hb(f){this.l=f||10,o.PerformanceNavigationTiming?(f=o.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jb(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function Wb(f){return f.h?1:f.g?f.g.size:0}function Im(f,w){return f.h?f.h==w:f.g?f.g.has(w):!1}function Em(f,w){f.g?f.g.add(w):f.h=w}function zb(f,w){f.h&&f.h==w?f.h=null:f.g&&f.g.has(w)&&f.g.delete(w)}Hb.prototype.cancel=function(){if(this.i=qb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function qb(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let w=f.i;for(const x of f.g.values())w=w.concat(x.D);return w}return p(f.i)}function hD(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(l(f)){for(var w=[],x=f.length,L=0;L<x;L++)w.push(f[L]);return w}w=[],x=0;for(L in f)w[x++]=f[L];return w}function mD(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(l(f)||typeof f=="string"){var w=[];f=f.length;for(var x=0;x<f;x++)w.push(x);return w}w=[],x=0;for(const L in f)w[x++]=L;return w}}}function Gb(f,w){if(f.forEach&&typeof f.forEach=="function")f.forEach(w,void 0);else if(l(f)||typeof f=="string")Array.prototype.forEach.call(f,w,void 0);else for(var x=mD(f),L=hD(f),J=L.length,ae=0;ae<J;ae++)w.call(void 0,L[ae],x&&x[ae],f)}var Kb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vD(f,w){if(f){f=f.split("&");for(var x=0;x<f.length;x++){var L=f[x].indexOf("="),J=null;if(0<=L){var ae=f[x].substring(0,L);J=f[x].substring(L+1)}else ae=f[x];w(ae,J?decodeURIComponent(J.replace(/\+/g," ")):"")}}}function Xs(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof Xs){this.h=f.h,qc(this,f.j),this.o=f.o,this.g=f.g,Gc(this,f.s),this.l=f.l;var w=f.i,x=new Dl;x.i=w.i,w.g&&(x.g=new Map(w.g),x.h=w.h),Yb(this,x),this.m=f.m}else f&&(w=String(f).match(Kb))?(this.h=!1,qc(this,w[1]||"",!0),this.o=xl(w[2]||""),this.g=xl(w[3]||"",!0),Gc(this,w[4]),this.l=xl(w[5]||"",!0),Yb(this,w[6]||"",!0),this.m=xl(w[7]||"")):(this.h=!1,this.i=new Dl(null,this.h))}Xs.prototype.toString=function(){var f=[],w=this.j;w&&f.push(Vl(w,Qb,!0),":");var x=this.g;return(x||w=="file")&&(f.push("//"),(w=this.o)&&f.push(Vl(w,Qb,!0),"@"),f.push(encodeURIComponent(String(x)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.s,x!=null&&f.push(":",String(x))),(x=this.l)&&(this.g&&x.charAt(0)!="/"&&f.push("/"),f.push(Vl(x,x.charAt(0)=="/"?yD:pD,!0))),(x=this.i.toString())&&f.push("?",x),(x=this.m)&&f.push("#",Vl(x,bD)),f.join("")};function Tr(f){return new Xs(f)}function qc(f,w,x){f.j=x?xl(w,!0):w,f.j&&(f.j=f.j.replace(/:$/,""))}function Gc(f,w){if(w){if(w=Number(w),isNaN(w)||0>w)throw Error("Bad port number "+w);f.s=w}else f.s=null}function Yb(f,w,x){w instanceof Dl?(f.i=w,wD(f.i,f.h)):(x||(w=Vl(w,_D)),f.i=new Dl(w,f.h))}function Nt(f,w,x){f.i.set(w,x)}function Kc(f){return Nt(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function xl(f,w){return f?w?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Vl(f,w,x){return typeof f=="string"?(f=encodeURI(f).replace(w,gD),x&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function gD(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Qb=/[#\/\?@]/g,pD=/[#\?:]/g,yD=/[#\?]/g,_D=/[#\?@]/g,bD=/#/g;function Dl(f,w){this.h=this.g=null,this.i=f||null,this.j=!!w}function as(f){f.g||(f.g=new Map,f.h=0,f.i&&vD(f.i,function(w,x){f.add(decodeURIComponent(w.replace(/\+/g," ")),x)}))}e=Dl.prototype,e.add=function(f,w){as(this),this.i=null,f=so(this,f);var x=this.g.get(f);return x||this.g.set(f,x=[]),x.push(w),this.h+=1,this};function Xb(f,w){as(f),w=so(f,w),f.g.has(w)&&(f.i=null,f.h-=f.g.get(w).length,f.g.delete(w))}function Jb(f,w){return as(f),w=so(f,w),f.g.has(w)}e.forEach=function(f,w){as(this),this.g.forEach(function(x,L){x.forEach(function(J){f.call(w,J,L,this)},this)},this)},e.na=function(){as(this);const f=Array.from(this.g.values()),w=Array.from(this.g.keys()),x=[];for(let L=0;L<w.length;L++){const J=f[L];for(let ae=0;ae<J.length;ae++)x.push(w[L])}return x},e.V=function(f){as(this);let w=[];if(typeof f=="string")Jb(this,f)&&(w=w.concat(this.g.get(so(this,f))));else{f=Array.from(this.g.values());for(let x=0;x<f.length;x++)w=w.concat(f[x])}return w},e.set=function(f,w){return as(this),this.i=null,f=so(this,f),Jb(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[w]),this.h+=1,this},e.get=function(f,w){return f?(f=this.V(f),0<f.length?String(f[0]):w):w};function Zb(f,w,x){Xb(f,w),0<x.length&&(f.i=null,f.g.set(so(f,w),p(x)),f.h+=x.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],w=Array.from(this.g.keys());for(var x=0;x<w.length;x++){var L=w[x];const ae=encodeURIComponent(String(L)),Te=this.V(L);for(L=0;L<Te.length;L++){var J=ae;Te[L]!==""&&(J+="="+encodeURIComponent(String(Te[L]))),f.push(J)}}return this.i=f.join("&")};function so(f,w){return w=String(w),f.j&&(w=w.toLowerCase()),w}function wD(f,w){w&&!f.j&&(as(f),f.i=null,f.g.forEach(function(x,L){var J=L.toLowerCase();L!=J&&(Xb(this,L),Zb(this,J,x))},f)),f.j=w}function SD(f,w){const x=new Pl;if(o.Image){const L=new Image;L.onload=v(os,x,"TestLoadImage: loaded",!0,w,L),L.onerror=v(os,x,"TestLoadImage: error",!1,w,L),L.onabort=v(os,x,"TestLoadImage: abort",!1,w,L),L.ontimeout=v(os,x,"TestLoadImage: timeout",!1,w,L),o.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=f}else w(!1)}function ID(f,w){const x=new Pl,L=new AbortController,J=setTimeout(()=>{L.abort(),os(x,"TestPingServer: timeout",!1,w)},1e4);fetch(f,{signal:L.signal}).then(ae=>{clearTimeout(J),ae.ok?os(x,"TestPingServer: ok",!0,w):os(x,"TestPingServer: server error",!1,w)}).catch(()=>{clearTimeout(J),os(x,"TestPingServer: error",!1,w)})}function os(f,w,x,L,J){try{J&&(J.onload=null,J.onerror=null,J.onabort=null,J.ontimeout=null),L(x)}catch{}}function ED(){this.g=new Ti}function CD(f,w,x){const L=x||"";try{Gb(f,function(J,ae){let Te=J;u(J)&&(Te=no(J)),w.push(L+ae+"="+encodeURIComponent(Te))})}catch(J){throw w.push(L+"type="+encodeURIComponent("_badmap")),J}}function Nl(f){this.l=f.Ub||null,this.j=f.eb||!1}g(Nl,io),Nl.prototype.g=function(){return new Yc(this.l,this.j)},Nl.prototype.i=function(f){return function(){return f}}({});function Yc(f,w){Ve.call(this),this.D=f,this.o=w,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Yc,Ve),e=Yc.prototype,e.open=function(f,w){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=w,this.readyState=1,Ml(this)},e.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const w={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(w.body=f),(this.D||o).fetch(new Request(this.A,w)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ol(this)),this.readyState=0},e.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,Ml(this)),this.g&&(this.readyState=3,Ml(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ew(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function ew(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}e.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var w=f.value?f.value:new Uint8Array(0);(w=this.v.decode(w,{stream:!f.done}))&&(this.response=this.responseText+=w)}f.done?Ol(this):Ml(this),this.readyState==3&&ew(this)}},e.Ra=function(f){this.g&&(this.response=this.responseText=f,Ol(this))},e.Qa=function(f){this.g&&(this.response=f,Ol(this))},e.ga=function(){this.g&&Ol(this)};function Ol(f){f.readyState=4,f.l=null,f.j=null,f.v=null,Ml(f)}e.setRequestHeader=function(f,w){this.u.append(f,w)},e.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],w=this.h.entries();for(var x=w.next();!x.done;)x=x.value,f.push(x[0]+": "+x[1]),x=w.next();return f.join(`\r
`)};function Ml(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(Yc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function tw(f){let w="";return N(f,function(x,L){w+=L,w+=":",w+=x,w+=`\r
`}),w}function Cm(f,w,x){e:{for(L in x){var L=!1;break e}L=!0}L||(x=tw(x),typeof f=="string"?x!=null&&encodeURIComponent(String(x)):Nt(f,w,x))}function Gt(f){Ve.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Gt,Ve);var TD=/^https?$/i,kD=["POST","PUT"];e=Gt.prototype,e.Ha=function(f){this.J=f},e.ea=function(f,w,x,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);w=w?w.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ym.g(),this.v=this.o?Rb(this.o):Rb(ym),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(w,String(f),!0),this.B=!1}catch(ae){nw(this,ae);return}if(f=x||"",x=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var J in L)x.set(J,L[J]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const ae of L.keys())x.set(ae,L.get(ae));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(x.keys()).find(ae=>ae.toLowerCase()=="content-type"),J=o.FormData&&f instanceof o.FormData,!(0<=Array.prototype.indexOf.call(kD,w,void 0))||L||J||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ae,Te]of x)this.g.setRequestHeader(ae,Te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sw(this),this.u=!0,this.g.send(f),this.u=!1}catch(ae){nw(this,ae)}};function nw(f,w){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=w,f.m=5,iw(f),Qc(f)}function iw(f){f.A||(f.A=!0,Ue(f,"complete"),Ue(f,"error"))}e.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,Ue(this,"complete"),Ue(this,"abort"),Qc(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qc(this,!0)),Gt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?rw(this):this.bb())},e.bb=function(){rw(this)};function rw(f){if(f.h&&typeof a<"u"&&(!f.v[1]||kr(f)!=4||f.Z()!=2)){if(f.u&&kr(f)==4)lt(f.Ea,0,f);else if(Ue(f,"readystatechange"),kr(f)==4){f.h=!1;try{const Te=f.Z();e:switch(Te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var w=!0;break e;default:w=!1}var x;if(!(x=w)){var L;if(L=Te===0){var J=String(f.D).match(Kb)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),L=!TD.test(J?J.toLowerCase():"")}x=L}if(x)Ue(f,"complete"),Ue(f,"success");else{f.m=6;try{var ae=2<kr(f)?f.g.statusText:""}catch{ae=""}f.l=ae+" ["+f.Z()+"]",iw(f)}}finally{Qc(f)}}}}function Qc(f,w){if(f.g){sw(f);const x=f.g,L=f.v[0]?()=>{}:null;f.g=null,f.v=null,w||Ue(f,"ready");try{x.onreadystatechange=L}catch{}}}function sw(f){f.I&&(o.clearTimeout(f.I),f.I=null)}e.isActive=function(){return!!this.g};function kr(f){return f.g?f.g.readyState:0}e.Z=function(){try{return 2<kr(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(f){if(this.g){var w=this.g.responseText;return f&&w.indexOf(f)==0&&(w=w.substring(f.length)),Gn(w)}};function aw(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function AD(f){const w={};f=(f.g&&2<=kr(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<f.length;L++){if(E(f[L]))continue;var x=k(f[L]);const J=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const ae=w[J]||[];w[J]=ae,ae.push(x)}R(w,function(L){return L.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ll(f,w,x){return x&&x.internalChannelParams&&x.internalChannelParams[f]||w}function ow(f){this.Aa=0,this.i=[],this.j=new Pl,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ll("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ll("baseRetryDelayMs",5e3,f),this.cb=Ll("retryDelaySeedMs",1e4,f),this.Wa=Ll("forwardChannelMaxRetries",2,f),this.wa=Ll("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new Hb(f&&f.concurrentRequestLimit),this.Da=new ED,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=ow.prototype,e.la=8,e.G=1,e.connect=function(f,w,x,L){Kn(0),this.W=f,this.H=w||{},x&&L!==void 0&&(this.H.OSID=x,this.H.OAID=L),this.F=this.X,this.I=gw(this,null,this.W),Jc(this)};function Tm(f){if(lw(f),f.G==3){var w=f.U++,x=Tr(f.I);if(Nt(x,"SID",f.K),Nt(x,"RID",w),Nt(x,"TYPE","terminate"),Fl(f,x),w=new ss(f,f.j,w),w.L=2,w.v=Kc(Tr(x)),x=!1,o.navigator&&o.navigator.sendBeacon)try{x=o.navigator.sendBeacon(w.v.toString(),"")}catch{}!x&&o.Image&&(new Image().src=w.v,x=!0),x||(w.g=pw(w.j,null),w.g.ea(w.v)),w.F=Date.now(),zc(w)}vw(f)}function Xc(f){f.g&&(Am(f),f.g.cancel(),f.g=null)}function lw(f){Xc(f),f.u&&(o.clearTimeout(f.u),f.u=null),Zc(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&o.clearTimeout(f.s),f.s=null)}function Jc(f){if(!jb(f.h)&&!f.s){f.s=!0;var w=f.Ga;se||$(),z||(se(),z=!0),U.add(w,f),f.B=0}}function PD(f,w){return Wb(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=w.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=Al(h(f.Ga,f,w),mw(f,f.B)),f.B++,!0)}e.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const J=new ss(this,this.j,f);let ae=this.o;if(this.S&&(ae?(ae=b(ae),T(ae,this.S)):ae=this.S),this.m!==null||this.O||(J.H=ae,ae=null),this.P)e:{for(var w=0,x=0;x<this.i.length;x++){t:{var L=this.i[x];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(w+=L,4096<w){w=x;break e}if(w===4096||x===this.i.length-1){w=x+1;break e}}w=1e3}else w=1e3;w=cw(this,J,w),x=Tr(this.I),Nt(x,"RID",f),Nt(x,"CVER",22),this.D&&Nt(x,"X-HTTP-Session-Id",this.D),Fl(this,x),ae&&(this.O?w="headers="+encodeURIComponent(String(tw(ae)))+"&"+w:this.m&&Cm(x,this.m,ae)),Em(this.h,J),this.Ua&&Nt(x,"TYPE","init"),this.P?(Nt(x,"$req",w),Nt(x,"SID","null"),J.T=!0,bm(J,x,null)):bm(J,x,w),this.G=2}}else this.G==3&&(f?uw(this,f):this.i.length==0||jb(this.h)||uw(this))};function uw(f,w){var x;w?x=w.l:x=f.U++;const L=Tr(f.I);Nt(L,"SID",f.K),Nt(L,"RID",x),Nt(L,"AID",f.T),Fl(f,L),f.m&&f.o&&Cm(L,f.m,f.o),x=new ss(f,f.j,x,f.B+1),f.m===null&&(x.H=f.o),w&&(f.i=w.D.concat(f.i)),w=cw(f,x,1e3),x.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),Em(f.h,x),bm(x,L,w)}function Fl(f,w){f.H&&N(f.H,function(x,L){Nt(w,L,x)}),f.l&&Gb({},function(x,L){Nt(w,L,x)})}function cw(f,w,x){x=Math.min(f.i.length,x);var L=f.l?h(f.l.Na,f.l,f):null;e:{var J=f.i;let ae=-1;for(;;){const Te=["count="+x];ae==-1?0<x?(ae=J[0].g,Te.push("ofs="+ae)):ae=0:Te.push("ofs="+ae);let It=!0;for(let _n=0;_n<x;_n++){let ut=J[_n].g;const Vn=J[_n].map;if(ut-=ae,0>ut)ae=Math.max(0,J[_n].g-100),It=!1;else try{CD(Vn,Te,"req"+ut+"_")}catch{L&&L(Vn)}}if(It){L=Te.join("&");break e}}}return f=f.i.splice(0,x),w.D=f,L}function dw(f){if(!f.g&&!f.u){f.Y=1;var w=f.Fa;se||$(),z||(se(),z=!0),U.add(w,f),f.v=0}}function km(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=Al(h(f.Fa,f),mw(f,f.v)),f.v++,!0)}e.Fa=function(){if(this.u=null,fw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=Al(h(this.ab,this),f)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Kn(10),Xc(this),fw(this))};function Am(f){f.A!=null&&(o.clearTimeout(f.A),f.A=null)}function fw(f){f.g=new ss(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var w=Tr(f.qa);Nt(w,"RID","rpc"),Nt(w,"SID",f.K),Nt(w,"AID",f.T),Nt(w,"CI",f.F?"0":"1"),!f.F&&f.ja&&Nt(w,"TO",f.ja),Nt(w,"TYPE","xmlhttp"),Fl(f,w),f.m&&f.o&&Cm(w,f.m,f.o),f.L&&(f.g.I=f.L);var x=f.g;f=f.ia,x.L=1,x.v=Kc(Tr(w)),x.m=null,x.P=!0,Bb(x,f)}e.Za=function(){this.C!=null&&(this.C=null,Xc(this),km(this),Kn(19))};function Zc(f){f.C!=null&&(o.clearTimeout(f.C),f.C=null)}function hw(f,w){var x=null;if(f.g==w){Zc(f),Am(f),f.g=null;var L=2}else if(Im(f.h,w))x=w.D,zb(f.h,w),L=1;else return;if(f.G!=0){if(w.o)if(L==1){x=w.m?w.m.length:0,w=Date.now()-w.F;var J=f.B;L=Hc(),Ue(L,new Ob(L,x)),Jc(f)}else dw(f);else if(J=w.s,J==3||J==0&&0<w.X||!(L==1&&PD(f,w)||L==2&&km(f)))switch(x&&0<x.length&&(w=f.h,w.i=w.i.concat(x)),J){case 1:Js(f,5);break;case 4:Js(f,10);break;case 3:Js(f,6);break;default:Js(f,2)}}}function mw(f,w){let x=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(x*=2),x*w}function Js(f,w){if(f.j.info("Error code "+w),w==2){var x=h(f.fb,f),L=f.Xa;const J=!L;L=new Xs(L||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qc(L,"https"),Kc(L),J?SD(L.toString(),x):ID(L.toString(),x)}else Kn(2);f.G=0,f.l&&f.l.sa(w),vw(f),lw(f)}e.fb=function(f){f?(this.j.info("Successfully pinged google.com"),Kn(2)):(this.j.info("Failed to ping google.com"),Kn(1))};function vw(f){if(f.G=0,f.ka=[],f.l){const w=qb(f.h);(w.length!=0||f.i.length!=0)&&(y(f.ka,w),y(f.ka,f.i),f.h.i.length=0,p(f.i),f.i.length=0),f.l.ra()}}function gw(f,w,x){var L=x instanceof Xs?Tr(x):new Xs(x);if(L.g!="")w&&(L.g=w+"."+L.g),Gc(L,L.s);else{var J=o.location;L=J.protocol,w=w?w+"."+J.hostname:J.hostname,J=+J.port;var ae=new Xs(null);L&&qc(ae,L),w&&(ae.g=w),J&&Gc(ae,J),x&&(ae.l=x),L=ae}return x=f.D,w=f.ya,x&&w&&Nt(L,x,w),Nt(L,"VER",f.la),Fl(f,L),L}function pw(f,w,x){if(w&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return w=f.Ca&&!f.pa?new Gt(new Nl({eb:x})):new Gt(f.pa),w.Ha(f.J),w}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function yw(){}e=yw.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ed(){}ed.prototype.g=function(f,w){return new ui(f,w)};function ui(f,w){Ve.call(this),this.g=new ow(w),this.l=f,this.h=w&&w.messageUrlParams||null,f=w&&w.messageHeaders||null,w&&w.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=w&&w.initMessageHeaders||null,w&&w.messageContentType&&(f?f["X-WebChannel-Content-Type"]=w.messageContentType:f={"X-WebChannel-Content-Type":w.messageContentType}),w&&w.va&&(f?f["X-WebChannel-Client-Profile"]=w.va:f={"X-WebChannel-Client-Profile":w.va}),this.g.S=f,(f=w&&w.Sb)&&!E(f)&&(this.g.m=f),this.v=w&&w.supportsCrossDomainXhr||!1,this.u=w&&w.sendRawJson||!1,(w=w&&w.httpSessionIdParam)&&!E(w)&&(this.g.D=w,f=this.h,f!==null&&w in f&&(f=this.h,w in f&&delete f[w])),this.j=new ao(this)}g(ui,Ve),ui.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ui.prototype.close=function(){Tm(this.g)},ui.prototype.o=function(f){var w=this.g;if(typeof f=="string"){var x={};x.__data__=f,f=x}else this.u&&(x={},x.__data__=no(f),f=x);w.i.push(new fD(w.Ya++,f)),w.G==3&&Jc(w)},ui.prototype.N=function(){this.g.l=null,delete this.j,Tm(this.g),delete this.g,ui.aa.N.call(this)};function _w(f){gm.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var w=f.__sm__;if(w){e:{for(const x in w){f=x;break e}f=void 0}(this.i=f)&&(f=this.i,w=w!==null&&f in w?w[f]:void 0),this.data=w}else this.data=f}g(_w,gm);function bw(){pm.call(this),this.status=1}g(bw,pm);function ao(f){this.g=f}g(ao,yw),ao.prototype.ua=function(){Ue(this.g,"a")},ao.prototype.ta=function(f){Ue(this.g,new _w(f))},ao.prototype.sa=function(f){Ue(this.g,new bw)},ao.prototype.ra=function(){Ue(this.g,"b")},ed.prototype.createWebChannel=ed.prototype.g,ui.prototype.send=ui.prototype.o,ui.prototype.open=ui.prototype.m,ui.prototype.close=ui.prototype.close,QA=function(){return new ed},YA=function(){return Hc()},KA=Ys,hg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jc.NO_ERROR=0,jc.TIMEOUT=8,jc.HTTP_ERROR=6,Ld=jc,Mb.COMPLETE="complete",GA=Mb,xb.EventType=Tl,Tl.OPEN="a",Tl.CLOSE="b",Tl.ERROR="c",Tl.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,tu=xb,qA=Nl,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,zA=Gt}).apply(typeof pd<"u"?pd:typeof self<"u"?self:typeof window<"u"?window:{});const H0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}On.UNAUTHENTICATED=new On(null),On.GOOGLE_CREDENTIALS=new On("google-credentials-uid"),On.FIRST_PARTY=new On("first-party-uid"),On.MOCK_USER=new On("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new mc("@firebase/firestore");function Kl(){return Pa.logLevel}function Oe(e,...t){if(Pa.logLevel<=Je.DEBUG){const n=t.map(Hy);Pa.debug(`Firestore (${fl}): ${e}`,...n)}}function qr(e,...t){if(Pa.logLevel<=Je.ERROR){const n=t.map(Hy);Pa.error(`Firestore (${fl}): ${e}`,...n)}}function zo(e,...t){if(Pa.logLevel<=Je.WARN){const n=t.map(Hy);Pa.warn(`Firestore (${fl}): ${e}`,...n)}}function Hy(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e="Unexpected state"){const t=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: `+e;throw qr(t),new Error(t)}function Tt(e,t){e||Ge()}function Ye(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Re extends pr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class IH{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(On.UNAUTHENTICATED))}shutdown(){}}class EH{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CH{constructor(t){this.t=t,this.currentUser=On.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},o=l=>{Oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>o(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?o(l):(Oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Tt(typeof i.accessToken=="string"),new XA(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Tt(t===null||typeof t=="string"),new On(t)}}class TH{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=On.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kH{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new TH(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(On.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AH{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PH{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=s=>{s.error!=null&&Oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Oe("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Tt(typeof n.token=="string"),this.R=n.token,new AH(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RH(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=RH(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function ct(e,t){return e<t?-1:e>t?1:0}function qo(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Re(ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Re(ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Re(ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Re(ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rn.fromMillis(Date.now())}static fromDate(t){return rn.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new rn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ke(t)}static min(){return new Ke(new rn(0,0))}static max(){return new Ke(new rn(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,n,i){n===void 0?n=0:n>t.length&&Ge(),i===void 0?i=t.length-n:i>t.length-n&&Ge(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Bu.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Bu?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),a=n.get(r);if(s<a)return-1;if(s>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Lt extends Bu{construct(t,n,i){return new Lt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new Re(ce.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Lt(n)}static emptyPath(){return new Lt([])}}const xH=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends Bu{construct(t,n,i){return new Cn(t,n,i)}static isValidIdentifier(t){return xH.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Cn(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Re(ce.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;r<t.length;){const o=t[r];if(o==="\\"){if(r+1===t.length)throw new Re(ce.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Re(ce.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else o==="`"?(a=!a,r++):o!=="."||a?(i+=o,r++):(s(),r++)}if(s(),a)throw new Re(ce.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Cn(n)}static emptyPath(){return new Cn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.path=t}static fromPath(t){return new Fe(Lt.fromString(t))}static fromName(t){return new Fe(Lt.fromString(t).popFirst(5))}static empty(){return new Fe(Lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Lt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Lt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Fe(new Lt(t.slice()))}}function VH(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Ke.fromTimestamp(i===1e9?new rn(n+1,0):new rn(n,i));return new Rs(r,Fe.empty(),t)}function DH(e){return new Rs(e.readTime,e.key,-1)}class Rs{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new Rs(Ke.min(),Fe.empty(),-1)}static max(){return new Rs(Ke.max(),Fe.empty(),-1)}}function NH(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Fe.comparator(e.documentKey,t.documentKey),n!==0?n:ct(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OH="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MH{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(e){if(e.code!==ce.FAILED_PRECONDITION||e.message!==OH)throw e;Oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new pe((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof pe?n:pe.resolve(n)}catch(n){return pe.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.reject(n)}static resolve(t){return new pe((n,i)=>{n(t)})}static reject(t){return new pe((n,i)=>{i(t)})}static waitFor(t){return new pe((n,i)=>{let r=0,s=0,a=!1;t.forEach(o=>{++r,o.next(()=>{++s,a&&s===r&&n()},l=>i(l))}),a=!0,s===r&&n()})}static or(t){let n=pe.resolve(!1);for(const i of t)n=n.next(r=>r?pe.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new pe((i,r)=>{const s=t.length,a=new Array(s);let o=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{a[u]=c,++o,o===s&&i(a)},c=>r(c))}})}static doWhile(t,n){return new pe((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function LH(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Tc(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}jy.oe=-1;function _h(e){return e==null}function Sf(e){return e===0&&1/e==-1/0}function FH(e){return typeof e=="number"&&Number.isInteger(e)&&!Sf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ha(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ZA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n){this.comparator=t,this.root=n||Sn.EMPTY}insert(t,n){return new qt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Sn.BLACK,null,null))}remove(t){return new qt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Sn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yd(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yd(this.root,t,this.comparator,!1)}getReverseIterator(){return new yd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yd(this.root,t,this.comparator,!0)}}class yd{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Sn{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??Sn.RED,this.left=r??Sn.EMPTY,this.right=s??Sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new Sn(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Sn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Sn.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ge();const t=this.left.check();if(t!==this.right.check())throw Ge();return t+(this.isRed()?0:1)}}Sn.EMPTY=null,Sn.RED=!0,Sn.BLACK=!1;Sn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ge()}get value(){throw Ge()}get color(){throw Ge()}get left(){throw Ge()}get right(){throw Ge()}copy(t,n,i,r,s){return this}insert(t,n,i){return new Sn(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t){this.comparator=t,this.data=new qt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new W0(this.data.getIterator())}getIteratorFrom(t){return new W0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof Tn)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Tn(this.comparator);return n.data=t,n}}class W0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t){this.fields=t,t.sort(Cn.comparator)}static empty(){return new vi([])}unionWith(t){let n=new Tn(Cn.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new vi(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return qo(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new eP("Invalid base64 string: "+s):s}}(t);return new kn(n)}static fromUint8Array(t){const n=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(t);return new kn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kn.EMPTY_BYTE_STRING=new kn("");const BH=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(e){if(Tt(!!e),typeof e=="string"){let t=0;const n=BH.exec(e);if(Tt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Qt(e.seconds),nanos:Qt(e.nanos)}}function Qt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ra(e){return typeof e=="string"?kn.fromBase64String(e):kn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zy(e){const t=e.mapValue.fields.__previous_value__;return Wy(t)?zy(t):t}function $u(e){const t=xs(e.mapValue.fields.__local_write_time__.timestampValue);return new rn(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $H{constructor(t,n,i,r,s,a,o,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=l,this.useFetchStreams=u}}class Uu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Uu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Uu&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xa(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Wy(e)?4:HH(e)?9007199254740991:UH(e)?10:11:Ge()}function dr(e,t){if(e===t)return!0;const n=xa(e);if(n!==xa(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return $u(e).isEqual($u(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=xs(r.timestampValue),o=xs(s.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return Ra(r.bytesValue).isEqual(Ra(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return Qt(r.geoPointValue.latitude)===Qt(s.geoPointValue.latitude)&&Qt(r.geoPointValue.longitude)===Qt(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Qt(r.integerValue)===Qt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=Qt(r.doubleValue),o=Qt(s.doubleValue);return a===o?Sf(a)===Sf(o):isNaN(a)&&isNaN(o)}return!1}(e,t);case 9:return qo(e.arrayValue.values||[],t.arrayValue.values||[],dr);case 10:case 11:return function(r,s){const a=r.mapValue.fields||{},o=s.mapValue.fields||{};if(j0(a)!==j0(o))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(o[l]===void 0||!dr(a[l],o[l])))return!1;return!0}(e,t);default:return Ge()}}function Hu(e,t){return(e.values||[]).find(n=>dr(n,t))!==void 0}function Go(e,t){if(e===t)return 0;const n=xa(e),i=xa(t);if(n!==i)return ct(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(e.booleanValue,t.booleanValue);case 2:return function(s,a){const o=Qt(s.integerValue||s.doubleValue),l=Qt(a.integerValue||a.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(e,t);case 3:return z0(e.timestampValue,t.timestampValue);case 4:return z0($u(e),$u(t));case 5:return ct(e.stringValue,t.stringValue);case 6:return function(s,a){const o=Ra(s),l=Ra(a);return o.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,a){const o=s.split("/"),l=a.split("/");for(let u=0;u<o.length&&u<l.length;u++){const c=ct(o[u],l[u]);if(c!==0)return c}return ct(o.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,a){const o=ct(Qt(s.latitude),Qt(a.latitude));return o!==0?o:ct(Qt(s.longitude),Qt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return q0(e.arrayValue,t.arrayValue);case 10:return function(s,a){var o,l,u,c;const d=s.fields||{},h=a.fields||{},v=(o=d.value)===null||o===void 0?void 0:o.arrayValue,g=(l=h.value)===null||l===void 0?void 0:l.arrayValue,p=ct(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0);return p!==0?p:q0(v,g)}(e.mapValue,t.mapValue);case 11:return function(s,a){if(s===_d.mapValue&&a===_d.mapValue)return 0;if(s===_d.mapValue)return 1;if(a===_d.mapValue)return-1;const o=s.fields||{},l=Object.keys(o),u=a.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=ct(l[d],c[d]);if(h!==0)return h;const v=Go(o[l[d]],u[c[d]]);if(v!==0)return v}return ct(l.length,c.length)}(e.mapValue,t.mapValue);default:throw Ge()}}function z0(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ct(e,t);const n=xs(e),i=xs(t),r=ct(n.seconds,i.seconds);return r!==0?r:ct(n.nanos,i.nanos)}function q0(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=Go(n[r],i[r]);if(s)return s}return ct(n.length,i.length)}function Ko(e){return mg(e)}function mg(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=xs(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ra(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Fe.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=mg(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${mg(n.fields[a])}`;return r+"}"}(e.mapValue):Ge()}function G0(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function vg(e){return!!e&&"integerValue"in e}function qy(e){return!!e&&"arrayValue"in e}function K0(e){return!!e&&"nullValue"in e}function Y0(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Fd(e){return!!e&&"mapValue"in e}function UH(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ha(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=yu(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=yu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function HH(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t){this.value=t}static empty(){return new ri({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Fd(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=yu(n)}setAll(t){let n=Cn.emptyPath(),i={},r=[];t.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=o.popLast()}a?i[o.lastSegment()]=yu(a):r.push(o.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Fd(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return dr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Fd(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){Ha(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new ri(yu(this.value))}}function tP(e){const t=[];return Ha(e.fields,(n,i)=>{const r=new Cn([n]);if(Fd(i)){const s=tP(i.mapValue).fields;if(s.length===0)t.push(r);else for(const a of s)t.push(r.child(a))}else t.push(r)}),new vi(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,n,i,r,s,a,o){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=o}static newInvalidDocument(t){return new Bn(t,0,Ke.min(),Ke.min(),Ke.min(),ri.empty(),0)}static newFoundDocument(t,n,i,r){return new Bn(t,1,n,Ke.min(),i,r,0)}static newNoDocument(t,n){return new Bn(t,2,n,Ke.min(),Ke.min(),ri.empty(),0)}static newUnknownDocument(t,n){return new Bn(t,3,n,Ke.min(),Ke.min(),ri.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ri.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ri.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ke.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Bn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,n){this.position=t,this.inclusive=n}}function Q0(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],a=e.position[r];if(s.field.isKeyField()?i=Fe.comparator(Fe.fromName(a.referenceValue),n.key):i=Go(a,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function X0(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!dr(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,n="asc"){this.field=t,this.dir=n}}function jH(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{}class nn extends nP{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new zH(t,n,i):n==="array-contains"?new KH(t,i):n==="in"?new YH(t,i):n==="not-in"?new QH(t,i):n==="array-contains-any"?new XH(t,i):new nn(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new qH(t,i):new GH(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Go(n,this.value)):n!==null&&xa(this.value)===xa(n)&&this.matchesComparison(Go(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qi extends nP{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new qi(t,n)}matches(t){return iP(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function iP(e){return e.op==="and"}function rP(e){return WH(e)&&iP(e)}function WH(e){for(const t of e.filters)if(t instanceof qi)return!1;return!0}function gg(e){if(e instanceof nn)return e.field.canonicalString()+e.op.toString()+Ko(e.value);if(rP(e))return e.filters.map(t=>gg(t)).join(",");{const t=e.filters.map(n=>gg(n)).join(",");return`${e.op}(${t})`}}function sP(e,t){return e instanceof nn?function(i,r){return r instanceof nn&&i.op===r.op&&i.field.isEqual(r.field)&&dr(i.value,r.value)}(e,t):e instanceof qi?function(i,r){return r instanceof qi&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,o)=>s&&sP(a,r.filters[o]),!0):!1}(e,t):void Ge()}function aP(e){return e instanceof nn?function(n){return`${n.field.canonicalString()} ${n.op} ${Ko(n.value)}`}(e):e instanceof qi?function(n){return n.op.toString()+" {"+n.getFilters().map(aP).join(" ,")+"}"}(e):"Filter"}class zH extends nn{constructor(t,n,i){super(t,n,i),this.key=Fe.fromName(i.referenceValue)}matches(t){const n=Fe.comparator(t.key,this.key);return this.matchesComparison(n)}}class qH extends nn{constructor(t,n){super(t,"in",n),this.keys=oP("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class GH extends nn{constructor(t,n){super(t,"not-in",n),this.keys=oP("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function oP(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Fe.fromName(i.referenceValue))}class KH extends nn{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return qy(n)&&Hu(n.arrayValue,this.value)}}class YH extends nn{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Hu(this.value.arrayValue,n)}}class QH extends nn{constructor(t,n){super(t,"not-in",n)}matches(t){if(Hu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Hu(this.value.arrayValue,n)}}class XH extends nn{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!qy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Hu(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JH{constructor(t,n=null,i=[],r=[],s=null,a=null,o=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=o,this.ue=null}}function J0(e,t=null,n=[],i=[],r=null,s=null,a=null){return new JH(e,t,n,i,r,s,a)}function Gy(e){const t=Ye(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>gg(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),_h(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Ko(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Ko(i)).join(",")),t.ue=n}return t.ue}function Ky(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!jH(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!sP(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!X0(e.startAt,t.startAt)&&X0(e.endAt,t.endAt)}function pg(e){return Fe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,n=null,i=[],r=[],s=null,a="F",o=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=o,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZH(e,t,n,i,r,s,a,o){return new hl(e,t,n,i,r,s,a,o)}function bh(e){return new hl(e)}function Z0(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function lP(e){return e.collectionGroup!==null}function _u(e){const t=Ye(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Tn(Cn.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(o=o.add(u.field))})}),o})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new ju(s,i))}),n.has(Cn.keyField().canonicalString())||t.ce.push(new ju(Cn.keyField(),i))}return t.ce}function or(e){const t=Ye(e);return t.le||(t.le=e5(t,_u(e))),t.le}function e5(e,t){if(e.limitType==="F")return J0(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new ju(r.field,s)});const n=e.endAt?new If(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new If(e.startAt.position,e.startAt.inclusive):null;return J0(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function yg(e,t){const n=e.filters.concat([t]);return new hl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function _g(e,t,n){return new hl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wh(e,t){return Ky(or(e),or(t))&&e.limitType===t.limitType}function uP(e){return`${Gy(or(e))}|lt:${e.limitType}`}function yo(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>aP(r)).join(", ")}]`),_h(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>Ko(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>Ko(r)).join(",")),`Target(${i})`}(or(e))}; limitType=${e.limitType})`}function Sh(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):Fe.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of _u(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(a,o,l){const u=Q0(a,o,l);return a.inclusive?u<=0:u<0}(i.startAt,_u(i),r)||i.endAt&&!function(a,o,l){const u=Q0(a,o,l);return a.inclusive?u>=0:u>0}(i.endAt,_u(i),r))}(e,t)}function t5(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function cP(e){return(t,n)=>{let i=!1;for(const r of _u(e)){const s=n5(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function n5(e,t,n){const i=e.field.isKeyField()?Fe.comparator(t.key,n.key):function(s,a,o){const l=a.data.field(s),u=o.data.field(s);return l!==null&&u!==null?Go(l,u):Ge()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ha(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return ZA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i5=new qt(Fe.comparator);function Gr(){return i5}const dP=new qt(Fe.comparator);function nu(...e){let t=dP;for(const n of e)t=t.insert(n.key,n);return t}function fP(e){let t=dP;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function ca(){return bu()}function hP(){return bu()}function bu(){return new ml(e=>e.toString(),(e,t)=>e.isEqual(t))}const r5=new qt(Fe.comparator),s5=new Tn(Fe.comparator);function Ze(...e){let t=s5;for(const n of e)t=t.add(n);return t}const a5=new Tn(ct);function o5(){return a5}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sf(t)?"-0":t}}function mP(e){return{integerValue:""+e}}function l5(e,t){return FH(t)?mP(t):Yy(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this._=void 0}}function u5(e,t,n){return e instanceof Ef?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Wy(s)&&(s=zy(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,t):e instanceof Wu?gP(e,t):e instanceof zu?pP(e,t):function(r,s){const a=vP(r,s),o=eI(a)+eI(r.Pe);return vg(a)&&vg(r.Pe)?mP(o):Yy(r.serializer,o)}(e,t)}function c5(e,t,n){return e instanceof Wu?gP(e,t):e instanceof zu?pP(e,t):n}function vP(e,t){return e instanceof Cf?function(i){return vg(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Ef extends Ih{}class Wu extends Ih{constructor(t){super(),this.elements=t}}function gP(e,t){const n=yP(t);for(const i of e.elements)n.some(r=>dr(r,i))||n.push(i);return{arrayValue:{values:n}}}class zu extends Ih{constructor(t){super(),this.elements=t}}function pP(e,t){let n=yP(t);for(const i of e.elements)n=n.filter(r=>!dr(r,i));return{arrayValue:{values:n}}}class Cf extends Ih{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function eI(e){return Qt(e.integerValue||e.doubleValue)}function yP(e){return qy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function d5(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof Wu&&r instanceof Wu||i instanceof zu&&r instanceof zu?qo(i.elements,r.elements,dr):i instanceof Cf&&r instanceof Cf?dr(i.Pe,r.Pe):i instanceof Ef&&r instanceof Ef}(e.transform,t.transform)}class f5{constructor(t,n){this.version=t,this.transformResults=n}}class si{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new si}static exists(t){return new si(void 0,t)}static updateTime(t){return new si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bd(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Eh{}function _P(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ch(e.key,si.none()):new kc(e.key,e.data,si.none());{const n=e.data,i=ri.empty();let r=new Tn(Cn.comparator);for(let s of t.fields)if(!r.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new js(e.key,i,new vi(r.toArray()),si.none())}}function h5(e,t,n){e instanceof kc?function(r,s,a){const o=r.value.clone(),l=nI(r.fieldTransforms,s,a.transformResults);o.setAll(l),s.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(e,t,n):e instanceof js?function(r,s,a){if(!Bd(r.precondition,s))return void s.convertToUnknownDocument(a.version);const o=nI(r.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(bP(r)),l.setAll(o),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function wu(e,t,n,i){return e instanceof kc?function(s,a,o,l){if(!Bd(s.precondition,a))return o;const u=s.value.clone(),c=iI(s.fieldTransforms,l,a);return u.setAll(c),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof js?function(s,a,o,l){if(!Bd(s.precondition,a))return o;const u=iI(s.fieldTransforms,l,a),c=a.data;return c.setAll(bP(s)),c.setAll(u),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(e,t,n,i):function(s,a,o){return Bd(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(e,t,n)}function m5(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=vP(i.transform,r||null);s!=null&&(n===null&&(n=ri.empty()),n.set(i.field,s))}return n||null}function tI(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&qo(i,r,(s,a)=>d5(s,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class kc extends Eh{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class js extends Eh{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bP(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function nI(e,t,n){const i=new Map;Tt(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],a=s.transform,o=t.data.field(s.field);i.set(s.field,c5(a,o,n[r]))}return i}function iI(e,t,n){const i=new Map;for(const r of e){const s=r.transform,a=n.data.field(r.field);i.set(r.field,u5(s,a,t))}return i}class Ch extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v5 extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&h5(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=wu(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=wu(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=hP();return this.mutations.forEach(r=>{const s=t.get(r.key),a=s.overlayedDocument;let o=this.applyToLocalView(a,s.mutatedFields);o=n.has(r.key)?null:o;const l=_P(a,o);l!==null&&i.set(r.key,l),a.isValidDocument()||a.convertToNoDocument(Ke.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ze())}isEqual(t){return this.batchId===t.batchId&&qo(this.mutations,t.mutations,(n,i)=>tI(n,i))&&qo(this.baseMutations,t.baseMutations,(n,i)=>tI(n,i))}}class Qy{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){Tt(t.mutations.length===i.length);let r=function(){return r5}();const s=t.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new Qy(t,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn,nt;function _5(e){switch(e){default:return Ge();case ce.CANCELLED:case ce.UNKNOWN:case ce.DEADLINE_EXCEEDED:case ce.RESOURCE_EXHAUSTED:case ce.INTERNAL:case ce.UNAVAILABLE:case ce.UNAUTHENTICATED:return!1;case ce.INVALID_ARGUMENT:case ce.NOT_FOUND:case ce.ALREADY_EXISTS:case ce.PERMISSION_DENIED:case ce.FAILED_PRECONDITION:case ce.ABORTED:case ce.OUT_OF_RANGE:case ce.UNIMPLEMENTED:case ce.DATA_LOSS:return!0}}function wP(e){if(e===void 0)return qr("GRPC error has no .code"),ce.UNKNOWN;switch(e){case tn.OK:return ce.OK;case tn.CANCELLED:return ce.CANCELLED;case tn.UNKNOWN:return ce.UNKNOWN;case tn.DEADLINE_EXCEEDED:return ce.DEADLINE_EXCEEDED;case tn.RESOURCE_EXHAUSTED:return ce.RESOURCE_EXHAUSTED;case tn.INTERNAL:return ce.INTERNAL;case tn.UNAVAILABLE:return ce.UNAVAILABLE;case tn.UNAUTHENTICATED:return ce.UNAUTHENTICATED;case tn.INVALID_ARGUMENT:return ce.INVALID_ARGUMENT;case tn.NOT_FOUND:return ce.NOT_FOUND;case tn.ALREADY_EXISTS:return ce.ALREADY_EXISTS;case tn.PERMISSION_DENIED:return ce.PERMISSION_DENIED;case tn.FAILED_PRECONDITION:return ce.FAILED_PRECONDITION;case tn.ABORTED:return ce.ABORTED;case tn.OUT_OF_RANGE:return ce.OUT_OF_RANGE;case tn.UNIMPLEMENTED:return ce.UNIMPLEMENTED;case tn.DATA_LOSS:return ce.DATA_LOSS;default:return Ge()}}(nt=tn||(tn={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b5(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5=new va([4294967295,4294967295],0);function rI(e){const t=b5().encode(e),n=new WA;return n.update(t),new Uint8Array(n.digest())}function sI(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new va([n,i],0),new va([r,s],0)]}class Xy{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new iu(`Invalid padding: ${n}`);if(i<0)throw new iu(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new iu(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new iu(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=va.fromNumber(this.Ie)}Ee(t,n,i){let r=t.add(n.multiply(va.fromNumber(i)));return r.compare(w5)===1&&(r=new va([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=rI(t),[i,r]=sI(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);if(!this.de(a))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Xy(s,r,n);return i.forEach(o=>a.insert(o)),a}insert(t){if(this.Ie===0)return;const n=rI(t),[i,r]=sI(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,Ac.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Th(Ke.min(),r,new qt(ct),Gr(),Ze())}}class Ac{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new Ac(i,n,Ze(),Ze(),Ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n,i,r){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=r}}class SP{constructor(t,n){this.targetId=t,this.me=n}}class IP{constructor(t,n,i=kn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class aI{constructor(){this.fe=0,this.ge=lI(),this.pe=kn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Ze(),n=Ze(),i=Ze();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Ge()}}),new Ac(this.pe,this.ye,t,n,i)}Ce(){this.we=!1,this.ge=lI()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class S5{constructor(t){this.Le=t,this.Be=new Map,this.ke=Gr(),this.qe=oI(),this.Qe=new qt(ct)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const i=this.Ge(n);switch(t.state){case 0:this.ze(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(t.resumeToken));break;default:Ge()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.ze(r)&&n(r)})}He(t){const n=t.targetId,i=t.me.count,r=this.Je(n);if(r){const s=r.target;if(pg(s))if(i===0){const a=new Fe(s.path);this.Ue(n,a,Bn.newNoDocument(a,Ke.min()))}else Tt(i===1);else{const a=this.Ye(n);if(a!==i){const o=this.Ze(t),l=o?this.Xe(o,t,a):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let a,o;try{a=Ra(i).toUint8Array()}catch(l){if(l instanceof eP)return zo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{o=new Xy(a,r,s)}catch(l){return zo(l instanceof iu?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return o.Ie===0?null:o}Xe(t,n,i){return n.me.count===i-this.nt(t,n.targetId)?0:2}nt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const a=this.Le.tt(),o=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(o)||(this.Ue(n,s,null),r++)}),r}rt(t){const n=new Map;this.Be.forEach((s,a)=>{const o=this.Je(a);if(o){if(s.current&&pg(o.target)){const l=new Fe(o.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Bn.newNoDocument(l,t))}s.be&&(n.set(a,s.ve()),s.Ce())}});let i=Ze();this.qe.forEach((s,a)=>{let o=!0;a.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const r=new Th(t,n,this.Qe,this.ke,i);return this.ke=Gr(),this.qe=oI(),this.Qe=new qt(ct),r}$e(t,n){if(!this.ze(t))return;const i=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new aI,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Tn(ct),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||Oe("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new aI),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function oI(){return new qt(Fe.comparator)}function lI(){return new qt(Fe.comparator)}const I5={asc:"ASCENDING",desc:"DESCENDING"},E5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C5={and:"AND",or:"OR"};class T5{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function bg(e,t){return e.useProto3Json||_h(t)?t:{value:t}}function Tf(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function EP(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function k5(e,t){return Tf(e,t.toTimestamp())}function lr(e){return Tt(!!e),Ke.fromTimestamp(function(n){const i=xs(n);return new rn(i.seconds,i.nanos)}(e))}function Jy(e,t){return wg(e,t).canonicalString()}function wg(e,t){const n=function(r){return new Lt(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function CP(e){const t=Lt.fromString(e);return Tt(RP(t)),t}function Sg(e,t){return Jy(e.databaseId,t.path)}function ov(e,t){const n=CP(t);if(n.get(1)!==e.databaseId.projectId)throw new Re(ce.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Re(ce.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Fe(kP(n))}function TP(e,t){return Jy(e.databaseId,t)}function A5(e){const t=CP(e);return t.length===4?Lt.emptyPath():kP(t)}function Ig(e){return new Lt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function kP(e){return Tt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function uI(e,t,n){return{name:Sg(e,t),fields:n.value.mapValue.fields}}function P5(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ge()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Tt(c===void 0||typeof c=="string"),kn.fromBase64String(c||"")):(Tt(c===void 0||c instanceof Buffer||c instanceof Uint8Array),kn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,o=a&&function(u){const c=u.code===void 0?ce.UNKNOWN:wP(u.code);return new Re(c,u.message||"")}(a);n=new IP(i,r,s,o||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=ov(e,i.document.name),s=lr(i.document.updateTime),a=i.document.createTime?lr(i.document.createTime):Ke.min(),o=new ri({mapValue:{fields:i.document.fields}}),l=Bn.newFoundDocument(r,s,a,o),u=i.targetIds||[],c=i.removedTargetIds||[];n=new $d(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=ov(e,i.document),s=i.readTime?lr(i.readTime):Ke.min(),a=Bn.newNoDocument(r,s),o=i.removedTargetIds||[];n=new $d([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=ov(e,i.document),s=i.removedTargetIds||[];n=new $d([],s,r,null)}else{if(!("filter"in t))return Ge();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new y5(r,s),o=i.targetId;n=new SP(o,a)}}return n}function R5(e,t){let n;if(t instanceof kc)n={update:uI(e,t.key,t.value)};else if(t instanceof Ch)n={delete:Sg(e,t.key)};else if(t instanceof js)n={update:uI(e,t.key,t.data),updateMask:B5(t.fieldMask)};else{if(!(t instanceof v5))return Ge();n={verify:Sg(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const o=a.transform;if(o instanceof Ef)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Wu)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zu)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Cf)return{fieldPath:a.field.canonicalString(),increment:o.Pe};throw Ge()}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:k5(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ge()}(e,t.precondition)),n}function x5(e,t){return e&&e.length>0?(Tt(t!==void 0),e.map(n=>function(r,s){let a=r.updateTime?lr(r.updateTime):lr(s);return a.isEqual(Ke.min())&&(a=lr(s)),new f5(a,r.transformResults||[])}(n,t))):[]}function V5(e,t){return{documents:[TP(e,t.path)]}}function D5(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=TP(e,r);const s=function(u){if(u.length!==0)return PP(qi.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:_o(h.field),direction:M5(h.dir)}}(c))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=bg(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:n,parent:r}}function N5(e){let t=A5(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Tt(i===1);const c=n.from[0];c.allDescendants?r=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=AP(d);return h instanceof qi&&rP(h)?h.getFilters():[h]}(n.where));let a=[];n.orderBy&&(a=function(d){return d.map(h=>function(g){return new ju(bo(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(h))}(n.orderBy));let o=null;n.limit&&(o=function(d){let h;return h=typeof d=="object"?d.value:d,_h(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,v=d.values||[];return new If(v,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,v=d.values||[];return new If(v,h)}(n.endAt)),ZH(t,r,a,s,o,"F",l,u)}function O5(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ge()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function AP(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=bo(n.unaryFilter.field);return nn.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=bo(n.unaryFilter.field);return nn.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bo(n.unaryFilter.field);return nn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=bo(n.unaryFilter.field);return nn.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Ge()}}(e):e.fieldFilter!==void 0?function(n){return nn.create(bo(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return qi.create(n.compositeFilter.filters.map(i=>AP(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ge()}}(n.compositeFilter.op))}(e):Ge()}function M5(e){return I5[e]}function L5(e){return E5[e]}function F5(e){return C5[e]}function _o(e){return{fieldPath:e.canonicalString()}}function bo(e){return Cn.fromServerFormat(e.fieldPath)}function PP(e){return e instanceof nn?function(n){if(n.op==="=="){if(Y0(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NAN"}};if(K0(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Y0(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NOT_NAN"}};if(K0(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(n.field),op:L5(n.op),value:n.value}}}(e):e instanceof qi?function(n){const i=n.getFilters().map(r=>PP(r));return i.length===1?i[0]:{compositeFilter:{op:F5(n.op),filters:i}}}(e):Ge()}function B5(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function RP(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,n,i,r,s=Ke.min(),a=Ke.min(),o=kn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=l}withSequenceNumber(t){return new Is(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $5{constructor(t){this.ct=t}}function U5(e){const t=N5({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?_g(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(){this.un=new j5}addToCollectionParentIndex(t,n){return this.un.add(n),pe.resolve()}getCollectionParents(t,n){return pe.resolve(this.un.getEntries(n))}addFieldIndex(t,n){return pe.resolve()}deleteFieldIndex(t,n){return pe.resolve()}deleteAllFieldIndexes(t){return pe.resolve()}createTargetIndexes(t,n){return pe.resolve()}getDocumentsMatchingTarget(t,n){return pe.resolve(null)}getIndexType(t,n){return pe.resolve(0)}getFieldIndexes(t,n){return pe.resolve([])}getNextCollectionGroupToUpdate(t){return pe.resolve(null)}getMinOffset(t,n){return pe.resolve(Rs.min())}getMinOffsetFromCollectionGroup(t,n){return pe.resolve(Rs.min())}updateCollectionGroup(t,n,i){return pe.resolve()}updateIndexEntries(t,n){return pe.resolve()}}class j5{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new Tn(Lt.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new Tn(Lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yo(0)}static kn(){return new Yo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W5{constructor(){this.changes=new ml(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Bn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?pe.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z5{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&wu(i.mutation,r,vi.empty(),rn.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,Ze()).next(()=>i))}getLocalViewOfDocuments(t,n,i=Ze()){const r=ca();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let a=nu();return s.forEach((o,l)=>{a=a.insert(o,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const i=ca();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,Ze()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((a,o)=>{n.set(a,o)})})}computeViews(t,n,i,r){let s=Gr();const a=bu(),o=function(){return bu()}();return n.forEach((l,u)=>{const c=i.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof js)?s=s.insert(u.key,u):c!==void 0?(a.set(u.key,c.mutation.getFieldMask()),wu(c.mutation,u,c.mutation.getFieldMask(),rn.now())):a.set(u.key,vi.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>a.set(u,c)),n.forEach((u,c)=>{var d;return o.set(u,new z5(c,(d=a.get(u))!==null&&d!==void 0?d:null))}),o))}recalculateAndSaveOverlays(t,n){const i=bu();let r=new qt((a,o)=>a-o),s=Ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const o of a)o.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=i.get(l)||vi.empty();c=o.applyToLocalView(u,c),i.set(l,c);const d=(r.get(o.batchId)||Ze()).add(l);r=r.insert(o.batchId,d)})}).next(()=>{const a=[],o=r.getReverseIterator();for(;o.hasNext();){const l=o.getNext(),u=l.key,c=l.value,d=hP();c.forEach(h=>{if(!s.has(h)){const v=_P(n.get(h),i.get(h));v!==null&&d.set(h,v),s=s.add(h)}}),a.push(this.documentOverlayCache.saveOverlays(t,u,d))}return pe.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(a){return Fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):lP(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):pe.resolve(ca());let o=-1,l=s;return a.next(u=>pe.forEach(u,(c,d)=>(o<d.largestBatchId&&(o=d.largestBatchId),s.get(c)?pe.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Ze())).next(c=>({batchId:o,changes:fP(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Fe(n)).next(i=>{let r=nu();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let a=nu();return this.indexManager.getCollectionParents(t,s).next(o=>pe.forEach(o,l=>{const u=function(d,h){return new hl(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(c=>{c.forEach((d,h)=>{a=a.insert(d,h)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(a=>{s.forEach((l,u)=>{const c=u.getKey();a.get(c)===null&&(a=a.insert(c,Bn.newInvalidDocument(c)))});let o=nu();return a.forEach((l,u)=>{const c=s.get(l);c!==void 0&&wu(c.mutation,u,vi.empty(),rn.now()),Sh(n,u)&&(o=o.insert(l,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,n){return pe.resolve(this.hr.get(n))}saveBundleMetadata(t,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:lr(r.createTime)}}(n)),pe.resolve()}getNamedQuery(t,n){return pe.resolve(this.Pr.get(n))}saveNamedQuery(t,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:U5(r.bundledQuery),readTime:lr(r.readTime)}}(n)),pe.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(){this.overlays=new qt(Fe.comparator),this.Ir=new Map}getOverlay(t,n){return pe.resolve(this.overlays.get(n))}getOverlays(t,n){const i=ca();return pe.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.ht(t,n,s)}),pe.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),pe.resolve()}getOverlaysForCollection(t,n,i){const r=ca(),s=n.length+1,a=new Fe(n.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const l=o.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return pe.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new qt((u,c)=>u-c);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let c=s.get(u.largestBatchId);c===null&&(c=ca(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const o=ca(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>o.set(u,c)),!(o.size()>=r)););return pe.resolve(o)}ht(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new p5(n,i));let s=this.Ir.get(n);s===void 0&&(s=Ze(),this.Ir.set(n,s)),this.Ir.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(){this.sessionToken=kn.EMPTY_BYTE_STRING}getSessionToken(t){return pe.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,pe.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.Tr=new Tn(dn.Er),this.dr=new Tn(dn.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,n){const i=new dn(t,n);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Vr(new dn(t,n))}mr(t,n){t.forEach(i=>this.removeReference(i,n))}gr(t){const n=new Fe(new Lt([])),i=new dn(n,t),r=new dn(n,t+1),s=[];return this.dr.forEachInRange([i,r],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const n=new Fe(new Lt([])),i=new dn(n,t),r=new dn(n,t+1);let s=Ze();return this.dr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(t){const n=new dn(t,0),i=this.Tr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class dn{constructor(t,n){this.key=t,this.wr=n}static Er(t,n){return Fe.comparator(t.key,n.key)||ct(t.wr,n.wr)}static Ar(t,n){return ct(t.wr,n.wr)||Fe.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Tn(dn.Er)}checkEmpty(t){return pe.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new g5(s,n,i,r);this.mutationQueue.push(a);for(const o of r)this.br=this.br.add(new dn(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return pe.resolve(a)}lookupMutationBatch(t,n){return pe.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.vr(i),s=r<0?0:r;return pe.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return pe.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return pe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new dn(n,0),r=new dn(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],a=>{const o=this.Dr(a.wr);s.push(o)}),pe.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new Tn(ct);return n.forEach(r=>{const s=new dn(r,0),a=new dn(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],o=>{i=i.add(o.wr)})}),pe.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;Fe.isDocumentKey(s)||(s=s.child(""));const a=new dn(new Fe(s),0);let o=new Tn(ct);return this.br.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(o=o.add(l.wr)),!0)},a),pe.resolve(this.Cr(o))}Cr(t){const n=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){Tt(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return pe.forEach(n.mutations,r=>{const s=new dn(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,n){const i=new dn(n,0),r=this.br.firstAfterOrEqual(i);return pe.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,pe.resolve()}Fr(t,n){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const n=this.vr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(t){this.Mr=t,this.docs=function(){return new qt(Fe.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,a=this.Mr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return pe.resolve(i?i.document.mutableCopy():Bn.newInvalidDocument(n))}getEntries(t,n){let i=Gr();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Bn.newInvalidDocument(r))}),pe.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=Gr();const a=n.path,o=new Fe(a.child("")),l=this.docs.getIteratorFrom(o);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||NH(DH(c),i)<=0||(r.has(c.key)||Sh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return pe.resolve(s)}getAllFromCollectionGroup(t,n,i,r){Ge()}Or(t,n){return pe.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new J5(this)}getSize(t){return pe.resolve(this.size)}}class J5 extends W5{constructor(t){super(),this.cr=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),pe.waitFor(n)}getFromCache(t,n){return this.cr.getEntry(t,n)}getAllFromCache(t,n){return this.cr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z5{constructor(t){this.persistence=t,this.Nr=new ml(n=>Gy(n),Ky),this.lastRemoteSnapshotVersion=Ke.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zy,this.targetCount=0,this.kr=Yo.Bn()}forEachTarget(t,n){return this.Nr.forEach((i,r)=>n(r)),pe.resolve()}getLastRemoteSnapshotVersion(t){return pe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return pe.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),pe.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Lr&&(this.Lr=n),pe.resolve()}Kn(t){this.Nr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.kr=new Yo(n),this.highestTargetId=n),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,n){return this.Kn(n),this.targetCount+=1,pe.resolve()}updateTargetData(t,n){return this.Kn(n),pe.resolve()}removeTargetData(t,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,pe.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Nr.forEach((a,o)=>{o.sequenceNumber<=n&&i.get(o.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),pe.waitFor(s).next(()=>r)}getTargetCount(t){return pe.resolve(this.targetCount)}getTargetData(t,n){const i=this.Nr.get(n)||null;return pe.resolve(i)}addMatchingKeys(t,n,i){return this.Br.Rr(n,i),pe.resolve()}removeMatchingKeys(t,n,i){this.Br.mr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(a=>{s.push(r.markPotentiallyOrphaned(t,a))}),pe.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Br.gr(n),pe.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Br.yr(n);return pe.resolve(i)}containsKey(t,n){return pe.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(t,n){this.qr={},this.overlays={},this.Qr=new jy(0),this.Kr=!1,this.Kr=!0,this.$r=new Y5,this.referenceDelegate=t(this),this.Ur=new Z5(this),this.indexManager=new H5,this.remoteDocumentCache=function(r){return new X5(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new $5(n),this.Gr=new G5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new K5,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.qr[t.toKey()];return i||(i=new Q5(n,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,n,i){Oe("MemoryPersistence","Starting transaction:",t);const r=new t6(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,n){return pe.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,n)))}}class t6 extends MH{constructor(t){super(),this.currentSequenceNumber=t}}class e_{constructor(t){this.persistence=t,this.Jr=new Zy,this.Yr=null}static Zr(t){return new e_(t)}get Xr(){if(this.Yr)return this.Yr;throw Ge()}addReference(t,n,i){return this.Jr.addReference(i,n),this.Xr.delete(i.toString()),pe.resolve()}removeReference(t,n,i){return this.Jr.removeReference(i,n),this.Xr.add(i.toString()),pe.resolve()}markPotentiallyOrphaned(t,n){return this.Xr.add(n.toString()),pe.resolve()}removeTarget(t,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}zr(){this.Yr=new Set}jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pe.forEach(this.Xr,i=>{const r=Fe.fromPath(i);return this.ei(t,r).next(s=>{s||n.removeEntry(r,Ke.min())})}).next(()=>(this.Yr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ei(t,n).next(i=>{i?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(t){return 0}ei(t,n){return pe.or([()=>pe.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Hr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.$i=i,this.Ui=r}static Wi(t,n){let i=Ze(),r=Ze();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new t_(t,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _M()?8:LH(zn())>0?6:4}()}initialize(t,n){this.Ji=t,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.Yi(t,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,n,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new n6;return this.Xi(t,n,a).next(o=>{if(s.result=o,this.zi)return this.es(t,n,a,o.size)})}).next(()=>s.result)}es(t,n,i,r){return i.documentReadCount<this.ji?(Kl()<=Je.DEBUG&&Oe("QueryEngine","SDK will not create cache indexes for query:",yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),pe.resolve()):(Kl()<=Je.DEBUG&&Oe("QueryEngine","Query:",yo(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(Kl()<=Je.DEBUG&&Oe("QueryEngine","The SDK decides to create cache indexes for query:",yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,or(n))):pe.resolve())}Yi(t,n){if(Z0(n))return pe.resolve(null);let i=or(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=_g(n,null,"F"),i=or(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=Ze(...s);return this.Ji.getDocuments(t,a).next(o=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.ts(n,o);return this.ns(n,u,a,l.readTime)?this.Yi(t,_g(n,null,"F")):this.rs(t,u,n,l)}))})))}Zi(t,n,i,r){return Z0(n)||r.isEqual(Ke.min())?pe.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(n,s);return this.ns(n,a,i,r)?pe.resolve(null):(Kl()<=Je.DEBUG&&Oe("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yo(n)),this.rs(t,a,n,VH(r,-1)).next(o=>o))})}ts(t,n){let i=new Tn(cP(t));return n.forEach((r,s)=>{Sh(t,s)&&(i=i.add(s))}),i}ns(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,n,i){return Kl()<=Je.DEBUG&&Oe("QueryEngine","Using full collection scan to execute query:",yo(n)),this.Ji.getDocumentsMatchingQuery(t,n,Rs.min(),i)}rs(t,n,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(t,n,i,r){this.persistence=t,this.ss=n,this.serializer=r,this.os=new qt(ct),this._s=new ml(s=>Gy(s),Ky),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new q5(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.os))}}function s6(e,t,n,i){return new r6(e,t,n,i)}async function xP(e,t){const n=Ye(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.ls(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],o=[];let l=Ze();for(const u of r){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(i,l).next(u=>({hs:u,removedBatchIds:a,addedBatchIds:o}))})})}function a6(e,t){const n=Ye(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(o,l,u,c){const d=u.batch,h=d.keys();let v=pe.resolve();return h.forEach(g=>{v=v.next(()=>c.getEntry(l,g)).next(p=>{const y=u.docVersions.get(g);Tt(y!==null),p.version.compareTo(y)<0&&(d.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),c.addEntry(p)))})}),v.next(()=>o.mutationQueue.removeMutationBatch(l,d))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let l=Ze();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(l=l.add(o.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function VP(e){const t=Ye(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ur.getLastRemoteSnapshotVersion(n))}function o6(e,t){const n=Ye(e),i=t.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const o=[];t.targetChanges.forEach((c,d)=>{const h=r.get(d);if(!h)return;o.push(n.Ur.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(s,c.addedDocuments,d)));let v=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?v=v.withResumeToken(kn.EMPTY_BYTE_STRING,Ke.min()).withLastLimboFreeSnapshotVersion(Ke.min()):c.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(c.resumeToken,i)),r=r.insert(d,v),function(p,y,I){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,v,c)&&o.push(n.Ur.updateTargetData(s,v))});let l=Gr(),u=Ze();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),o.push(l6(s,a,t.documentUpdates).next(c=>{l=c.Ps,u=c.Is})),!i.isEqual(Ke.min())){const c=n.Ur.getLastRemoteSnapshotVersion(s).next(d=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));o.push(c)}return pe.waitFor(o).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.os=r,s))}function l6(e,t,n){let i=Ze(),r=Ze();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let a=Gr();return n.forEach((o,l)=>{const u=s.get(o);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(o)),l.isNoDocument()&&l.version.isEqual(Ke.min())?(t.removeEntry(o,l.readTime),a=a.insert(o,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),a=a.insert(o,l)):Oe("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",l.version)}),{Ps:a,Is:r}})}function u6(e,t){const n=Ye(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function c6(e,t){const n=Ye(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ur.getTargetData(i,t).next(s=>s?(r=s,pe.resolve(r)):n.Ur.allocateTargetId(i).next(a=>(r=new Is(t,a,"TargetPurposeListen",i.currentSequenceNumber),n.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(i.targetId,i),n._s.set(t,i.targetId)),i})}async function Eg(e,t,n){const i=Ye(e),r=i.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Tc(a))throw a;Oe("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function cI(e,t,n){const i=Ye(e);let r=Ke.min(),s=Ze();return i.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,c){const d=Ye(l),h=d._s.get(c);return h!==void 0?pe.resolve(d.os.get(h)):d.Ur.getTargetData(u,c)}(i,a,or(t)).next(o=>{if(o)return r=o.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,o.targetId).next(l=>{s=l})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,n?r:Ke.min(),n?s:Ze())).next(o=>(d6(i,t5(t),o),{documents:o,Ts:s})))}function d6(e,t,n){let i=e.us.get(t)||Ke.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.us.set(t,i)}class dI{constructor(){this.activeTargetIds=o5()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class f6{constructor(){this.so=new dI,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,n,i){this.oo[t]=n}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new dI,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){Oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd=null;function lv(){return bd===null?bd=function(){return 268435456+Math.round(2147483648*Math.random())}():bd++,"0x"+bd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="WebChannelConnection";class g6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+n.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(n,i,r,s,a){const o=lv(),l=this.xo(n,i.toUriEncodedString());Oe("RestConnection",`Sending RPC '${n}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,a),this.No(n,l,u,r).then(c=>(Oe("RestConnection",`Received RPC '${n}' ${o}: `,c),c),c=>{throw zo("RestConnection",`RPC '${n}' ${o} failed with error: `,c,"url: ",l,"request:",r),c})}Lo(n,i,r,s,a,o){return this.Mo(n,i,r,s,a)}Oo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fl}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>n[a]=s),r&&r.headers.forEach((s,a)=>n[a]=s)}xo(n,i){const r=m6[n];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,n,i,r){const s=lv();return new Promise((a,o)=>{const l=new zA;l.setWithCredentials(!0),l.listenOnce(GA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ld.NO_ERROR:const c=l.getResponseJson();Oe(Nn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),a(c);break;case Ld.TIMEOUT:Oe(Nn,`RPC '${t}' ${s} timed out`),o(new Re(ce.DEADLINE_EXCEEDED,"Request time out"));break;case Ld.HTTP_ERROR:const d=l.getStatus();if(Oe(Nn,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const v=h==null?void 0:h.error;if(v&&v.status&&v.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(ce).indexOf(I)>=0?I:ce.UNKNOWN}(v.status);o(new Re(g,v.message))}else o(new Re(ce.UNKNOWN,"Server responded with status "+l.getStatus()))}else o(new Re(ce.UNAVAILABLE,"Connection failed."));break;default:Ge()}}finally{Oe(Nn,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);Oe(Nn,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}Bo(t,n,i){const r=lv(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=QA(),o=YA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new qA({})),this.Oo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");Oe(Nn,`Creating RPC '${t}' stream ${r}: ${c}`,l);const d=a.createWebChannel(c,l);let h=!1,v=!1;const g=new v6({Io:y=>{v?Oe(Nn,`Not sending because RPC '${t}' stream ${r} is closed:`,y):(h||(Oe(Nn,`Opening RPC '${t}' stream ${r} transport.`),d.open(),h=!0),Oe(Nn,`RPC '${t}' stream ${r} sending:`,y),d.send(y))},To:()=>d.close()}),p=(y,I,E)=>{y.listen(I,V=>{try{E(V)}catch(P){setTimeout(()=>{throw P},0)}})};return p(d,tu.EventType.OPEN,()=>{v||(Oe(Nn,`RPC '${t}' stream ${r} transport opened.`),g.yo())}),p(d,tu.EventType.CLOSE,()=>{v||(v=!0,Oe(Nn,`RPC '${t}' stream ${r} transport closed`),g.So())}),p(d,tu.EventType.ERROR,y=>{v||(v=!0,zo(Nn,`RPC '${t}' stream ${r} transport errored:`,y),g.So(new Re(ce.UNAVAILABLE,"The operation could not be completed")))}),p(d,tu.EventType.MESSAGE,y=>{var I;if(!v){const E=y.data[0];Tt(!!E);const V=E,P=V.error||((I=V[0])===null||I===void 0?void 0:I.error);if(P){Oe(Nn,`RPC '${t}' stream ${r} received error:`,P);const D=P.status;let N=function(_){const T=tn[_];if(T!==void 0)return wP(T)}(D),R=P.message;N===void 0&&(N=ce.INTERNAL,R="Unknown error status: "+D+" with message "+P.message),v=!0,g.So(new Re(N,R)),d.close()}else Oe(Nn,`RPC '${t}' stream ${r} received:`,E),g.bo(E)}}),p(o,KA.STAT_EVENT,y=>{y.stat===hg.PROXY?Oe(Nn,`RPC '${t}' stream ${r} detected buffering proxy`):y.stat===hg.NOPROXY&&Oe(Nn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function uv(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(e){return new T5(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(t,n,i=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-i);r>0&&Oe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(t,n,i,r,s,a,o,l){this.ui=t,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new DP(t,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():n&&n.code===ce.RESOURCE_EXHAUSTED?(qr(n.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===ce.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(n)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===n&&this.P_(i,r)},i=>{t(()=>{const r=new Re(ce.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,n){const i=this.h_(this.Yo);this.stream=this.T_(t,n),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return Oe("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return n=>{this.ui.enqueueAndForget(()=>this.Yo===t?n():(Oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p6 extends NP{constructor(t,n,i,r,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s}T_(t,n){return this.connection.Bo("Listen",t,n)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const n=P5(this.serializer,t),i=function(s){if(!("targetChange"in s))return Ke.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Ke.min():a.readTime?lr(a.readTime):Ke.min()}(t);return this.listener.d_(n,i)}A_(t){const n={};n.database=Ig(this.serializer),n.addTarget=function(s,a){let o;const l=a.target;if(o=pg(l)?{documents:V5(s,l)}:{query:D5(s,l)._t},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=EP(s,a.resumeToken);const u=bg(s,a.expectedCount);u!==null&&(o.expectedCount=u)}else if(a.snapshotVersion.compareTo(Ke.min())>0){o.readTime=Tf(s,a.snapshotVersion.toTimestamp());const u=bg(s,a.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const i=O5(this.serializer,t);i&&(n.labels=i),this.a_(n)}R_(t){const n={};n.database=Ig(this.serializer),n.removeTarget=t,this.a_(n)}}class y6 extends NP{constructor(t,n,i,r,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,n){return this.connection.Bo("Write",t,n)}E_(t){return Tt(!!t.streamToken),this.lastStreamToken=t.streamToken,Tt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const n=x5(t.writeResults,t.commitTime),i=lr(t.commitTime);return this.listener.g_(i,n)}p_(){const t={};t.database=Ig(this.serializer),this.a_(t)}m_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>R5(this.serializer,i))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6 extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new Re(ce.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,wg(n,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Re(ce.UNKNOWN,s.toString())})}Lo(t,n,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.Lo(t,wg(n,i),r,a,o,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Re(ce.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class b6{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qr(n),this.D_=!1):Oe("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{ja(this)&&(Oe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Ye(l);u.L_.add(4),await Pc(u),u.q_.set("Unknown"),u.L_.delete(4),await Ah(u)}(this))})}),this.q_=new b6(i,r)}}async function Ah(e){if(ja(e))for(const t of e.B_)await t(!0)}async function Pc(e){for(const t of e.B_)await t(!1)}function OP(e,t){const n=Ye(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),s_(n)?r_(n):vl(n).r_()&&i_(n,t))}function n_(e,t){const n=Ye(e),i=vl(n);n.N_.delete(t),i.r_()&&MP(n,t),n.N_.size===0&&(i.r_()?i.o_():ja(n)&&n.q_.set("Unknown"))}function i_(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ke.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}vl(e).A_(t)}function MP(e,t){e.Q_.xe(t),vl(e).R_(t)}function r_(e){e.Q_=new S5({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),vl(e).start(),e.q_.v_()}function s_(e){return ja(e)&&!vl(e).n_()&&e.N_.size>0}function ja(e){return Ye(e).L_.size===0}function LP(e){e.Q_=void 0}async function S6(e){e.q_.set("Online")}async function I6(e){e.N_.forEach((t,n)=>{i_(e,t)})}async function E6(e,t){LP(e),s_(e)?(e.q_.M_(t),r_(e)):e.q_.set("Unknown")}async function C6(e,t,n){if(e.q_.set("Online"),t instanceof IP&&t.state===2&&t.cause)try{await async function(r,s){const a=s.cause;for(const o of s.targetIds)r.N_.has(o)&&(await r.remoteSyncer.rejectListen(o,a),r.N_.delete(o),r.Q_.removeTarget(o))}(e,t)}catch(i){Oe("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await kf(e,i)}else if(t instanceof $d?e.Q_.Ke(t):t instanceof SP?e.Q_.He(t):e.Q_.We(t),!n.isEqual(Ke.min()))try{const i=await VP(e.localStore);n.compareTo(i)>=0&&await function(s,a){const o=s.Q_.rt(a);return o.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.N_.get(u);c&&s.N_.set(u,c.withResumeToken(l.resumeToken,a))}}),o.targetMismatches.forEach((l,u)=>{const c=s.N_.get(l);if(!c)return;s.N_.set(l,c.withResumeToken(kn.EMPTY_BYTE_STRING,c.snapshotVersion)),MP(s,l);const d=new Is(c.target,l,u,c.sequenceNumber);i_(s,d)}),s.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(i){Oe("RemoteStore","Failed to raise snapshot:",i),await kf(e,i)}}async function kf(e,t,n){if(!Tc(t))throw t;e.L_.add(1),await Pc(e),e.q_.set("Offline"),n||(n=()=>VP(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Oe("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Ah(e)})}function FP(e,t){return t().catch(n=>kf(e,n,t))}async function Ph(e){const t=Ye(e),n=Vs(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;T6(t);)try{const r=await u6(t.localStore,i);if(r===null){t.O_.length===0&&n.o_();break}i=r.batchId,k6(t,r)}catch(r){await kf(t,r)}BP(t)&&$P(t)}function T6(e){return ja(e)&&e.O_.length<10}function k6(e,t){e.O_.push(t);const n=Vs(e);n.r_()&&n.V_&&n.m_(t.mutations)}function BP(e){return ja(e)&&!Vs(e).n_()&&e.O_.length>0}function $P(e){Vs(e).start()}async function A6(e){Vs(e).p_()}async function P6(e){const t=Vs(e);for(const n of e.O_)t.m_(n.mutations)}async function R6(e,t,n){const i=e.O_.shift(),r=Qy.from(i,t,n);await FP(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Ph(e)}async function x6(e,t){t&&Vs(e).V_&&await async function(i,r){if(function(a){return _5(a)&&a!==ce.ABORTED}(r.code)){const s=i.O_.shift();Vs(i).s_(),await FP(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ph(i)}}(e,t),BP(e)&&$P(e)}async function hI(e,t){const n=Ye(e);n.asyncQueue.verifyOperationInProgress(),Oe("RemoteStore","RemoteStore received new credentials");const i=ja(n);n.L_.add(3),await Pc(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Ah(n)}async function V6(e,t){const n=Ye(e);t?(n.L_.delete(2),await Ah(n)):t||(n.L_.add(2),await Pc(n),n.q_.set("Unknown"))}function vl(e){return e.K_||(e.K_=function(n,i,r){const s=Ye(n);return s.w_(),new p6(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Eo:S6.bind(null,e),Ro:I6.bind(null,e),mo:E6.bind(null,e),d_:C6.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),s_(e)?r_(e):e.q_.set("Unknown")):(await e.K_.stop(),LP(e))})),e.K_}function Vs(e){return e.U_||(e.U_=function(n,i,r){const s=Ye(n);return s.w_(),new y6(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:A6.bind(null,e),mo:x6.bind(null,e),f_:P6.bind(null,e),g_:R6.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await Ph(e)):(await e.U_.stop(),e.O_.length>0&&(Oe("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const a=Date.now()+i,o=new a_(t,n,a,r,s);return o.start(i),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Re(ce.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function o_(e,t){if(qr("AsyncQueue",`${t}: ${e}`),Tc(e))return new Re(ce.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Fe.comparator(n.key,i.key):(n,i)=>Fe.comparator(n.key,i.key),this.keyedMap=nu(),this.sortedSet=new qt(this.comparator)}static emptySet(t){return new Mo(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Mo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Mo;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.W_=new qt(Fe.comparator)}track(t){const n=t.doc.key,i=this.W_.get(n);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(n,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(n):t.type===1&&i.type===2?this.W_=this.W_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):Ge():this.W_=this.W_.insert(n,t)}G_(){const t=[];return this.W_.inorderTraversal((n,i)=>{t.push(i)}),t}}class Qo{constructor(t,n,i,r,s,a,o,l,u){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,i,r,s){const a=[];return n.forEach(o=>{a.push({type:0,doc:o})}),new Qo(t,n,Mo.emptySet(n),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class N6{constructor(){this.queries=vI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,i){const r=Ye(n),s=r.queries;r.queries=vI(),s.forEach((a,o)=>{for(const l of o.j_)l.onError(i)})})(this,new Re(ce.ABORTED,"Firestore shutting down"))}}function vI(){return new ml(e=>uP(e),wh)}async function l_(e,t){const n=Ye(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new D6,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await n.onListen(r,!0);break;case 1:s.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const o=o_(a,`Initialization of query '${yo(t.query)}' failed`);return void t.onError(o)}n.queries.set(r,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&c_(n)}async function u_(e,t){const n=Ye(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function O6(e,t){const n=Ye(e);let i=!1;for(const r of t){const s=r.query,a=n.queries.get(s);if(a){for(const o of a.j_)o.X_(r)&&(i=!0);a.z_=r}}i&&c_(n)}function M6(e,t,n){const i=Ye(e),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(n);i.queries.delete(t)}function c_(e){e.Y_.forEach(t=>{t.next()})}var Cg,gI;(gI=Cg||(Cg={})).ea="default",gI.Cache="cache";class d_{constructor(t,n,i){this.query=t,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new Qo(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.na?this.ia(t)&&(this.ta.next(t),n=!0):this.sa(t,this.onlineState)&&(this.oa(t),n=!0),this.ra=t,n}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),n=!0),n}sa(t,n){if(!t.fromCache||!this.J_())return!0;const i=n!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(t){t=Qo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Cg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(t){this.key=t}}class HP{constructor(t){this.key=t}}class L6{constructor(t,n){this.query=t,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ze(),this.mutatedKeys=Ze(),this.Aa=cP(t),this.Ra=new Mo(this.Aa)}get Va(){return this.Ta}ma(t,n){const i=n?n.fa:new mI,r=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=r,o=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((c,d)=>{const h=r.get(c),v=Sh(this.query,d)?d:null,g=!!h&&this.mutatedKeys.has(h.key),p=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let y=!1;h&&v?h.data.isEqual(v.data)?g!==p&&(i.track({type:3,doc:v}),y=!0):this.ga(h,v)||(i.track({type:2,doc:v}),y=!0,(l&&this.Aa(v,l)>0||u&&this.Aa(v,u)<0)&&(o=!0)):!h&&v?(i.track({type:0,doc:v}),y=!0):h&&!v&&(i.track({type:1,doc:h}),y=!0,(l||u)&&(o=!0)),y&&(v?(a=a.add(v),s=p?s.add(c):s.delete(c)):(a=a.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const c=this.query.limitType==="F"?a.last():a.first();a=a.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{Ra:a,fa:i,ns:o,mutatedKeys:s}}ga(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((c,d)=>function(v,g){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ge()}};return p(v)-p(g)}(c.type,d.type)||this.Aa(c.doc,d.doc)),this.pa(i),r=r!=null&&r;const o=n&&!r?this.ya():[],l=this.da.size===0&&this.current&&!r?1:0,u=l!==this.Ea;return this.Ea=l,a.length!==0||u?{snapshot:new Qo(this.query,t.Ra,s,a,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Ze(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const n=[];return t.forEach(i=>{this.da.has(i)||n.push(new HP(i))}),this.da.forEach(i=>{t.has(i)||n.push(new UP(i))}),n}ba(t){this.Ta=t.Ts,this.da=Ze();const n=this.ma(t.documents);return this.applyChanges(n,!0)}Da(){return Qo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class F6{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class B6{constructor(t){this.key=t,this.va=!1}}class $6{constructor(t,n,i,r,s,a){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ml(o=>uP(o),wh),this.Ma=new Map,this.xa=new Set,this.Oa=new qt(Fe.comparator),this.Na=new Map,this.La=new Zy,this.Ba={},this.ka=new Map,this.qa=Yo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function U6(e,t,n=!0){const i=KP(e);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await jP(i,t,n,!0),r}async function H6(e,t){const n=KP(e);await jP(n,t,!0,!1)}async function jP(e,t,n,i){const r=await c6(e.localStore,or(t)),s=r.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return i&&(o=await j6(e,t,s,a==="current",r.resumeToken)),e.isPrimaryClient&&n&&OP(e.remoteStore,r),o}async function j6(e,t,n,i,r){e.Ka=(d,h,v)=>async function(p,y,I,E){let V=y.view.ma(I);V.ns&&(V=await cI(p.localStore,y.query,!1).then(({documents:R})=>y.view.ma(R,V)));const P=E&&E.targetChanges.get(y.targetId),D=E&&E.targetMismatches.get(y.targetId)!=null,N=y.view.applyChanges(V,p.isPrimaryClient,P,D);return yI(p,y.targetId,N.wa),N.snapshot}(e,d,h,v);const s=await cI(e.localStore,t,!0),a=new L6(t,s.Ts),o=a.ma(s.documents),l=Ac.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),u=a.applyChanges(o,e.isPrimaryClient,l);yI(e,n,u.wa);const c=new F6(t,n,a);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function W6(e,t,n){const i=Ye(e),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(a=>!wh(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Eg(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&n_(i.remoteStore,r.targetId),Tg(i,r.targetId)}).catch(Cc)):(Tg(i,r.targetId),await Eg(i.localStore,r.targetId,!0))}async function z6(e,t){const n=Ye(e),i=n.Fa.get(t),r=n.Ma.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),n_(n.remoteStore,i.targetId))}async function q6(e,t,n){const i=Z6(e);try{const r=await function(a,o){const l=Ye(a),u=rn.now(),c=o.reduce((v,g)=>v.add(g.key),Ze());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let g=Gr(),p=Ze();return l.cs.getEntries(v,c).next(y=>{g=y,g.forEach((I,E)=>{E.isValidDocument()||(p=p.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,g)).next(y=>{d=y;const I=[];for(const E of o){const V=m5(E,d.get(E.key).overlayedDocument);V!=null&&I.push(new js(E.key,V,tP(V.value.mapValue),si.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(d,p);return l.documentOverlayCache.saveOverlays(v,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:fP(d)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,o,l){let u=a.Ba[a.currentUser.toKey()];u||(u=new qt(ct)),u=u.insert(o,l),a.Ba[a.currentUser.toKey()]=u}(i,r.batchId,n),await Rc(i,r.changes),await Ph(i.remoteStore)}catch(r){const s=o_(r,"Failed to persist write");n.reject(s)}}async function WP(e,t){const n=Ye(e);try{const i=await o6(n.localStore,t);t.targetChanges.forEach((r,s)=>{const a=n.Na.get(s);a&&(Tt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?Tt(a.va):r.removedDocuments.size>0&&(Tt(a.va),a.va=!1))}),await Rc(n,i,t)}catch(i){await Cc(i)}}function pI(e,t,n){const i=Ye(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Fa.forEach((s,a)=>{const o=a.view.Z_(t);o.snapshot&&r.push(o.snapshot)}),function(a,o){const l=Ye(a);l.onlineState=o;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.j_)h.Z_(o)&&(u=!0)}),u&&c_(l)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function G6(e,t,n){const i=Ye(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Na.get(t),s=r&&r.key;if(s){let a=new qt(Fe.comparator);a=a.insert(s,Bn.newNoDocument(s,Ke.min()));const o=Ze().add(s),l=new Th(Ke.min(),new Map,new qt(ct),a,o);await WP(i,l),i.Oa=i.Oa.remove(s),i.Na.delete(t),f_(i)}else await Eg(i.localStore,t,!1).then(()=>Tg(i,t,n)).catch(Cc)}async function K6(e,t){const n=Ye(e),i=t.batch.batchId;try{const r=await a6(n.localStore,t);qP(n,i,null),zP(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Rc(n,r)}catch(r){await Cc(r)}}async function Y6(e,t,n){const i=Ye(e);try{const r=await function(a,o){const l=Ye(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,o).next(d=>(Tt(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(i.localStore,t);qP(i,t,n),zP(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Rc(i,r)}catch(r){await Cc(r)}}function zP(e,t){(e.ka.get(t)||[]).forEach(n=>{n.resolve()}),e.ka.delete(t)}function qP(e,t,n){const i=Ye(e);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function Tg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Ma.get(t))e.Fa.delete(i),n&&e.Ca.$a(i,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(i=>{e.La.containsKey(i)||GP(e,i)})}function GP(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);n!==null&&(n_(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),f_(e))}function yI(e,t,n){for(const i of n)i instanceof UP?(e.La.addReference(i.key,t),Q6(e,i)):i instanceof HP?(Oe("SyncEngine","Document no longer in limbo: "+i.key),e.La.removeReference(i.key,t),e.La.containsKey(i.key)||GP(e,i.key)):Ge()}function Q6(e,t){const n=t.key,i=n.path.canonicalString();e.Oa.get(n)||e.xa.has(i)||(Oe("SyncEngine","New document in limbo: "+n),e.xa.add(i),f_(e))}function f_(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Fe(Lt.fromString(t)),i=e.qa.next();e.Na.set(i,new B6(n)),e.Oa=e.Oa.insert(n,i),OP(e.remoteStore,new Is(or(bh(n.path)),i,"TargetPurposeLimboResolution",jy.oe))}}async function Rc(e,t,n){const i=Ye(e),r=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((o,l)=>{a.push(i.Ka(l,t,n).then(u=>{var c;if((u||n)&&i.isPrimaryClient){const d=u?!u.fromCache:(c=n==null?void 0:n.targetChanges.get(l.targetId))===null||c===void 0?void 0:c.current;i.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=t_.Wi(l.targetId,u);s.push(d)}}))}),await Promise.all(a),i.Ca.d_(r),await async function(l,u){const c=Ye(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>pe.forEach(u,h=>pe.forEach(h.$i,v=>c.persistence.referenceDelegate.addReference(d,h.targetId,v)).next(()=>pe.forEach(h.Ui,v=>c.persistence.referenceDelegate.removeReference(d,h.targetId,v)))))}catch(d){if(!Tc(d))throw d;Oe("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const v=c.os.get(h),g=v.snapshotVersion,p=v.withLastLimboFreeSnapshotVersion(g);c.os=c.os.insert(h,p)}}}(i.localStore,s))}async function X6(e,t){const n=Ye(e);if(!n.currentUser.isEqual(t)){Oe("SyncEngine","User change. New user:",t.toKey());const i=await xP(n.localStore,t);n.currentUser=t,function(s,a){s.ka.forEach(o=>{o.forEach(l=>{l.reject(new Re(ce.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Rc(n,i.hs)}}function J6(e,t){const n=Ye(e),i=n.Na.get(t);if(i&&i.va)return Ze().add(i.key);{let r=Ze();const s=n.Ma.get(t);if(!s)return r;for(const a of s){const o=n.Fa.get(a);r=r.unionWith(o.view.Va)}return r}}function KP(e){const t=Ye(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=WP.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=J6.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=G6.bind(null,t),t.Ca.d_=O6.bind(null,t.eventManager),t.Ca.$a=M6.bind(null,t.eventManager),t}function Z6(e){const t=Ye(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=K6.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Y6.bind(null,t),t}class _I{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=kh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return s6(this.persistence,new i6,t.initialUser,this.serializer)}createPersistence(t){return new e6(e_.Zr,this.serializer)}createSharedClientState(t){return new f6}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class e3{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>pI(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=X6.bind(null,this.syncEngine),await V6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new N6}()}createDatastore(t){const n=kh(t.databaseInfo.databaseId),i=function(s){return new g6(s)}(t.databaseInfo);return function(s,a,o,l){return new _6(s,a,o,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,a,o){return new w6(i,r,s,a,o)}(this.localStore,this.datastore,t.asyncQueue,n=>pI(this.syncEngine,n,0),function(){return fI.D()?new fI:new h6}())}createSyncEngine(t,n){return function(r,s,a,o,l,u,c){const d=new $6(r,s,a,o,l,u);return c&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(r){const s=Ye(r);Oe("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Pc(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):qr("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=On.UNAUTHENTICATED,this.clientId=JA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Oe("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Oe("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Re(ce.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=o_(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function cv(e,t){e.asyncQueue.verifyOperationInProgress(),Oe("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await xP(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function bI(e,t){e.asyncQueue.verifyOperationInProgress();const n=await i3(e);Oe("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>hI(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>hI(t.remoteStore,r)),e._onlineComponents=t}function n3(e){return e.name==="FirebaseError"?e.code===ce.FAILED_PRECONDITION||e.code===ce.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function i3(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await cv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!n3(n))throw n;zo("Error using user provided cache. Falling back to memory cache: "+n),await cv(e,new _I)}}else Oe("FirestoreClient","Using default OfflineComponentProvider"),await cv(e,new _I);return e._offlineComponents}async function YP(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Oe("FirestoreClient","Using user provided OnlineComponentProvider"),await bI(e,e._uninitializedComponentsProvider._online)):(Oe("FirestoreClient","Using default OnlineComponentProvider"),await bI(e,new e3))),e._onlineComponents}function r3(e){return YP(e).then(t=>t.syncEngine)}async function Af(e){const t=await YP(e),n=t.eventManager;return n.onListen=U6.bind(null,t.syncEngine),n.onUnlisten=W6.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=H6.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=z6.bind(null,t.syncEngine),n}function s3(e,t,n={}){const i=new jr;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,u){const c=new h_({next:h=>{a.enqueueAndForget(()=>u_(s,d));const v=h.docs.has(o);!v&&h.fromCache?u.reject(new Re(ce.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&h.fromCache&&l&&l.source==="server"?u.reject(new Re(ce.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new d_(bh(o.path),c,{includeMetadataChanges:!0,_a:!0});return l_(s,d)}(await Af(e),e.asyncQueue,t,n,i)),i.promise}function a3(e,t,n={}){const i=new jr;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,u){const c=new h_({next:h=>{a.enqueueAndForget(()=>u_(s,d)),h.fromCache&&l.source==="server"?u.reject(new Re(ce.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new d_(o,c,{includeMetadataChanges:!0,_a:!0});return l_(s,d)}(await Af(e),e.asyncQueue,t,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(e,t,n){if(!n)throw new Re(ce.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function o3(e,t,n,i){if(t===!0&&i===!0)throw new Re(ce.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function SI(e){if(!Fe.isDocumentKey(e))throw new Re(ce.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function II(e){if(Fe.isDocumentKey(e))throw new Re(ce.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Rh(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Ge()}function _i(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Re(ce.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rh(e);throw new Re(ce.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Re(ce.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Re(ce.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}o3("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QP((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Re(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Re(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Re(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xh{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Re(ce.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Re(ce.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EI(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new IH;switch(i.type){case"firstParty":return new kH(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Re(ce.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=wI.get(n);i&&(Oe("ComponentProvider","Removing Datastore"),wI.delete(n),i.terminate())}(this),Promise.resolve()}}function JP(e,t,n,i={}){var r;const s=(e=_i(e,xh))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&zo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let o,l;if(typeof i.mockUserToken=="string")o=i.mockUserToken,l=On.MOCK_USER;else{o=mM(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Re(ce.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new On(u)}e._authCredentials=new EH(new XA(o,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ws(this.firestore,t,this._query)}}class Zn{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zn(this.firestore,t,this._key)}}class ks extends Ws{constructor(t,n,i){super(t,n,bh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zn(this.firestore,null,new Fe(t))}withConverter(t){return new ks(this.firestore,t,this._path)}}function wQ(e,t,...n){if(e=Jt(e),XP("collection","path",t),e instanceof xh){const i=Lt.fromString(t,...n);return II(i),new ks(e,null,i)}{if(!(e instanceof Zn||e instanceof ks))throw new Re(ce.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Lt.fromString(t,...n));return II(i),new ks(e.firestore,null,i)}}function l3(e,t,...n){if(e=Jt(e),arguments.length===1&&(t=JA.newId()),XP("doc","path",t),e instanceof xh){const i=Lt.fromString(t,...n);return SI(i),new Zn(e,null,new Fe(i))}{if(!(e instanceof Zn||e instanceof ks))throw new Re(ce.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Lt.fromString(t,...n));return SI(i),new Zn(e.firestore,e instanceof ks?e.converter:null,new Fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u3{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new DP(this,"async_queue_retry"),this.Eu=()=>{const n=uv();n&&Oe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const t=uv();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const n=uv();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const n=new jr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Tc(t))throw t;Oe("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const n=this.au.then(()=>(this.Pu=!0,t().catch(i=>{this.hu=i,this.Pu=!1;const r=function(a){let o=a.message||"";return a.stack&&(o=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),o}(i);throw qr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Pu=!1,i))));return this.au=n,n}enqueueAfterDelay(t,n,i){this.du(),this.Tu.indexOf(t)>-1&&(n=0);const r=a_.createAndSchedule(this,t,n,i,s=>this.Vu(s));return this.lu.push(r),r}du(){this.hu&&Ge()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const n of this.lu)if(n.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const n=this.lu.indexOf(t);this.lu.splice(n,1)}}function CI(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Kr extends xh{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=function(){return new u3}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||e1(this),this._firestoreClient.terminate()}}function ZP(e,t){const n=typeof e=="object"?e:ry(),i=typeof e=="string"?e:"(default)",r=iy(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=hM("firestore");s&&JP(r,...s)}return r}function xc(e){return e._firestoreClient||e1(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function e1(e){var t,n,i;const r=e._freezeSettings(),s=function(o,l,u,c){return new $H(o,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,QP(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new t3(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xo(kn.fromBase64String(t))}catch(n){throw new Re(ce.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Xo(kn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Re(ce.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function SQ(){return new Vc("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Re(ce.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Re(ce.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3=/^__.*__$/;class d3{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new js(t,this.data,this.fieldMask,n,this.fieldTransforms):new kc(t,this.data,n,this.fieldTransforms)}}class t1{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new js(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function n1(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ge()}}class g_{constructor(t,n,i,r,s,a){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new g_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Su({path:i,Du:!1});return r.vu(t),r}Cu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Su({path:i,Du:!1});return r.yu(),r}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Pf(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(n1(this.wu)&&c3.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class f3{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||kh(t)}Nu(t,n,i,r=!1){return new g_({wu:t,methodName:n,Ou:i,path:Cn.emptyPath(),Du:!1,xu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dh(e){const t=e._freezeSettings(),n=kh(e._databaseId);return new f3(e._databaseId,!!t.ignoreUndefinedProperties,n)}function p_(e,t,n,i,r,s={}){const a=e.Nu(s.merge||s.mergeFields?2:0,t,n,r);y_("Data must be an object, but it was:",a,i);const o=i1(i,a);let l,u;if(s.merge)l=new vi(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=kg(t,d,n);if(!a.contains(h))throw new Re(ce.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);s1(c,h)||c.push(h)}l=new vi(c),u=a.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=a.fieldTransforms;return new d3(new ri(o),l,u)}class Nh extends m_{_toFieldTransform(t){if(t.wu!==2)throw t.wu===1?t.Mu(`${this._methodName}() can only appear at the top level of your update data`):t.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Nh}}function h3(e,t,n,i){const r=e.Nu(1,t,n);y_("Data must be an object, but it was:",r,i);const s=[],a=ri.empty();Ha(i,(l,u)=>{const c=__(t,l,n);u=Jt(u);const d=r.Cu(c);if(u instanceof Nh)s.push(c);else{const h=Dc(u,d);h!=null&&(s.push(c),a.set(c,h))}});const o=new vi(s);return new t1(a,o,r.fieldTransforms)}function m3(e,t,n,i,r,s){const a=e.Nu(1,t,n),o=[kg(t,i,n)],l=[r];if(s.length%2!=0)throw new Re(ce.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)o.push(kg(t,s[h])),l.push(s[h+1]);const u=[],c=ri.empty();for(let h=o.length-1;h>=0;--h)if(!s1(u,o[h])){const v=o[h];let g=l[h];g=Jt(g);const p=a.Cu(v);if(g instanceof Nh)u.push(v);else{const y=Dc(g,p);y!=null&&(u.push(v),c.set(v,y))}}const d=new vi(u);return new t1(c,d,a.fieldTransforms)}function v3(e,t,n,i=!1){return Dc(n,e.Nu(i?4:3,t))}function Dc(e,t){if(r1(e=Jt(e)))return y_("Unsupported field value:",t,e),i1(e,t);if(e instanceof m_)return function(i,r){if(!n1(r.wu))throw r.Mu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Mu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const o of i){let l=Dc(o,r.Fu(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Jt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return l5(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=rn.fromDate(i);return{timestampValue:Tf(r.serializer,s)}}if(i instanceof rn){const s=new rn(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Tf(r.serializer,s)}}if(i instanceof Vh)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Xo)return{bytesValue:EP(r.serializer,i._byteString)};if(i instanceof Zn){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jy(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof v_)return function(a,o){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw o.Mu("VectorValues must only contain numeric values.");return Yy(o.serializer,l)})}}}}}}(i,r);throw r.Mu(`Unsupported field value: ${Rh(i)}`)}(e,t)}function i1(e,t){const n={};return ZA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ha(e,(i,r)=>{const s=Dc(r,t.bu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function r1(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof rn||e instanceof Vh||e instanceof Xo||e instanceof Zn||e instanceof m_||e instanceof v_)}function y_(e,t,n){if(!r1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=Rh(n);throw i==="an object"?t.Mu(e+" a custom object"):t.Mu(e+" "+i)}}function kg(e,t,n){if((t=Jt(t))instanceof Vc)return t._internalPath;if(typeof t=="string")return __(e,t);throw Pf("Field path arguments must be of type string or ",e,!1,void 0,n)}const g3=new RegExp("[~\\*/\\[\\]]");function __(e,t,n){if(t.search(g3)>=0)throw Pf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vc(...t.split("."))._internalPath}catch{throw Pf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Pf(e,t,n,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new Re(ce.INVALID_ARGUMENT,o+e+l)}function s1(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new p3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p3 extends a1{data(){return super.data()}}function Oh(e,t){return typeof t=="string"?__(e,t):t instanceof Vc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Re(ce.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b_{}class l1 extends b_{}function IQ(e,t,...n){let i=[];t instanceof b_&&i.push(t),i=i.concat(n),function(s){const a=s.filter(l=>l instanceof w_).length,o=s.filter(l=>l instanceof Mh).length;if(a>1||a>0&&o>0)throw new Re(ce.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)e=r._apply(e);return e}class Mh extends l1{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new Mh(t,n,i)}_apply(t){const n=this._parse(t);return u1(t._query,n),new Ws(t.firestore,t.converter,yg(t._query,n))}_parse(t){const n=Dh(t.firestore);return function(s,a,o,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Re(ce.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){kI(d,c);const v=[];for(const g of d)v.push(TI(l,s,g));h={arrayValue:{values:v}}}else h=TI(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||kI(d,c),h=v3(o,a,d,c==="in"||c==="not-in");return nn.create(u,c,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function EQ(e,t,n){const i=t,r=Oh("where",e);return Mh._create(r,i,n)}class w_ extends b_{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new w_(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:qi.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,s){let a=r;const o=s.getFlattenedFilters();for(const l of o)u1(a,l),a=yg(a,l)}(t._query,n),new Ws(t.firestore,t.converter,yg(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class S_ extends l1{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new S_(t,n)}_apply(t){const n=function(r,s,a){if(r.startAt!==null)throw new Re(ce.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Re(ce.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ju(s,a)}(t._query,this._field,this._direction);return new Ws(t.firestore,t.converter,function(r,s){const a=r.explicitOrderBy.concat([s]);return new hl(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function CQ(e,t="asc"){const n=t,i=Oh("orderBy",e);return S_._create(i,n)}function TI(e,t,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new Re(ce.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lP(t)&&n.indexOf("/")!==-1)throw new Re(ce.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Lt.fromString(n));if(!Fe.isDocumentKey(i))throw new Re(ce.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return G0(e,new Fe(i))}if(n instanceof Zn)return G0(e,n._key);throw new Re(ce.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rh(n)}.`)}function kI(e,t){if(!Array.isArray(e)||e.length===0)throw new Re(ce.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function u1(e,t){const n=function(r,s){for(const a of r)for(const o of a.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new Re(ce.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Re(ce.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class y3{convertValue(t,n="none"){switch(xa(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ra(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Ge()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return Ha(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(t){var n,i,r;const s=(r=(i=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>Qt(a.doubleValue));return new v_(s)}convertGeoPoint(t){return new Vh(Qt(t.latitude),Qt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=zy(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp($u(t));default:return null}}convertTimestamp(t){const n=xs(t);return new rn(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Lt.fromString(t);Tt(RP(i));const r=new Uu(i.get(1),i.get(3)),s=new Fe(i.popFirst(5));return r.isEqual(n)||qr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class c1 extends a1{constructor(t,n,i,r,s,a){super(t,n,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ud(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Oh("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ud extends c1{data(t={}){return super.data(t)}}class d1{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new ru(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Ud(this._firestore,this._userDataWriter,i.key,i,new ru(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Re(ce.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(o=>{const l=new Ud(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ru(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const l=new Ud(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ru(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),c=a.indexOf(o.doc.key)),{type:_3(o.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _3(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ge()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(e){e=_i(e,Zn);const t=_i(e.firestore,Kr);return s3(xc(t),e._key).then(n=>h1(t,e,n))}class E_ extends y3{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xo(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Zn(this.firestore,null,n)}}function b3(e){e=_i(e,Ws);const t=_i(e.firestore,Kr),n=xc(t),i=new E_(t);return o1(e._query),a3(n,e._query).then(r=>new d1(t,i,e,r))}function TQ(e,t,n){e=_i(e,Zn);const i=_i(e.firestore,Kr),r=I_(e.converter,t,n);return Lh(i,[p_(Dh(i),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,si.none())])}function kQ(e){return Lh(_i(e.firestore,Kr),[new Ch(e._key,si.none())])}function AQ(e,t){const n=_i(e.firestore,Kr),i=l3(e),r=I_(e.converter,t);return Lh(n,[p_(Dh(e.firestore),"addDoc",i._key,r,e.converter!==null,{}).toMutation(i._key,si.exists(!1))]).then(()=>i)}function C_(e,...t){var n,i,r;e=Jt(e);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||CI(t[a])||(s=t[a],a++);const o={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(CI(t[a])){const d=t[a];t[a]=(n=d.next)===null||n===void 0?void 0:n.bind(d),t[a+1]=(i=d.error)===null||i===void 0?void 0:i.bind(d),t[a+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let l,u,c;if(e instanceof Zn)u=_i(e.firestore,Kr),c=bh(e._key.path),l={next:d=>{t[a]&&t[a](h1(u,e,d))},error:t[a+1],complete:t[a+2]};else{const d=_i(e,Ws);u=_i(d.firestore,Kr),c=d._query;const h=new E_(u);l={next:v=>{t[a]&&t[a](new d1(u,h,d,v))},error:t[a+1],complete:t[a+2]},o1(e._query)}return function(h,v,g,p){const y=new h_(p),I=new d_(v,y,g);return h.asyncQueue.enqueueAndForget(async()=>l_(await Af(h),I)),()=>{y.za(),h.asyncQueue.enqueueAndForget(async()=>u_(await Af(h),I))}}(xc(u),c,o,l)}function Lh(e,t){return function(i,r){const s=new jr;return i.asyncQueue.enqueueAndForget(async()=>q6(await r3(i),r,s)),s.promise}(xc(e),t)}function h1(e,t,n){const i=n.docs.get(t._key),r=new E_(e);return new c1(e,r,t._key,i,new ru(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Dh(t)}set(t,n,i){this._verifyNotCommitted();const r=dv(t,this._firestore),s=I_(r.converter,n,i),a=p_(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,si.none())),this}update(t,n,i,...r){this._verifyNotCommitted();const s=dv(t,this._firestore);let a;return a=typeof(n=Jt(n))=="string"||n instanceof Vc?m3(this._dataReader,"WriteBatch.update",s._key,n,i,r):h3(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(a.toMutation(s._key,si.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=dv(t,this._firestore);return this._mutations=this._mutations.concat(new Ch(n._key,si.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Re(ce.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dv(e,t){if((e=Jt(e)).firestore!==t)throw new Re(ce.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PQ(e){return xc(e=_i(e,Kr)),new w3(e,t=>Lh(e,t))}(function(t,n=!0){(function(r){fl=r})(Hs),cr(new ji("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),o=new Kr(new CH(i.getProvider("auth-internal")),new PH(i.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Re(ce.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uu(u.options.projectId,c)}(a,r),a);return s=Object.assign({useFetchStreams:n},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),pi(H0,"4.7.2",t),pi(H0,"4.7.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="firebasestorage.googleapis.com",S3="storageBucket",I3=2*60*1e3,E3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends pr{constructor(t,n,i=0){super(fv(t),`Firebase Storage: ${n} (${fv(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_r.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return fv(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fr;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fr||(fr={}));function fv(e){return"storage/"+e}function C3(){const e="An unknown error occurred, please check the error payload for server response.";return new _r(fr.UNKNOWN,e)}function T3(){return new _r(fr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function k3(){return new _r(fr.CANCELED,"User canceled the upload/download.")}function A3(e){return new _r(fr.INVALID_URL,"Invalid URL '"+e+"'.")}function P3(e){return new _r(fr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function AI(e){return new _r(fr.INVALID_ARGUMENT,e)}function v1(){return new _r(fr.APP_DELETED,"The Firebase app was deleted.")}function R3(e){return new _r(fr.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=Fi.makeFromUrl(t,n)}catch{return new Fi(t,"")}if(i.path==="")return i;throw P3(t)}static makeFromUrl(t,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+r+a,"i"),l={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${d}/${c}/b/${r}/o${h}`,"i"),g={bucket:1,path:3},p=n===m1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",I=new RegExp(`^https?://${p}/${r}/${y}`,"i"),V=[{regex:o,indices:l,postModify:s},{regex:v,indices:g,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<V.length;P++){const D=V[P],N=D.regex.exec(t);if(N){const R=N[D.indices.bucket];let b=N[D.indices.path];b||(b=""),i=new Fi(R,b),D.postModify(i);break}}if(i==null)throw A3(t);return i}}class x3{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V3(e,t,n){let i=1,r=null,s=null,a=!1,o=0;function l(){return o===2}let u=!1;function c(...y){u||(u=!0,t.apply(null,y))}function d(y){r=setTimeout(()=>{r=null,e(v,l())},y)}function h(){s&&clearTimeout(s)}function v(y,...I){if(u){h();return}if(y){h(),c.call(null,y,...I);return}if(l()||a){h(),c.call(null,y,...I);return}i<64&&(i*=2);let V;o===1?(o=2,V=0):V=(i+Math.random())*1e3,d(V)}let g=!1;function p(y){g||(g=!0,h(),!u&&(r!==null?(y||(o=2),clearTimeout(r),d(0)):y||(o=1)))}return d(0),s=setTimeout(()=>{a=!0,p(!0)},n),p}function D3(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N3(e){return e!==void 0}function PI(e,t,n,i){if(i<t)throw AI(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw AI(`Invalid value for '${e}'. Expected ${n} or less.`)}function O3(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var Rf;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Rf||(Rf={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M3(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(t,n,i,r,s,a,o,l,u,c,d,h=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,g)=>{this.resolve_=v,this.reject_=g,this.start_()})}start_(){const t=(i,r)=>{if(r){i(!1,new wd(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const l=o.loaded,u=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===Rf.NO_ERROR,l=s.getStatus();if(!o||M3(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Rf.ABORT;i(!1,new wd(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new wd(u,s))})},n=(i,r)=>{const s=this.resolve_,a=this.reject_,o=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(o,o.getResponse());N3(l)?s(l):s()}catch(l){a(l)}else if(o!==null){const l=C3();l.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,l)):a(l)}else if(r.canceled){const l=this.appDelete_?v1():k3();a(l)}else{const l=T3();a(l)}};this.canceled_?n(!1,new wd(!1,null,!0)):this.backoffId_=V3(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&D3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wd{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function F3(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function B3(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function $3(e,t){t&&(e["X-Firebase-GMPID"]=t)}function U3(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function H3(e,t,n,i,r,s,a=!0){const o=O3(e.urlParams),l=e.url+o,u=Object.assign({},e.headers);return $3(u,t),F3(u,n),B3(u,s),U3(u,i),new L3(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function W3(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n){this._service=t,n instanceof Fi?this._location=n:this._location=Fi.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new xf(t,n)}get root(){const t=new Fi(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W3(this._location.path)}get storage(){return this._service}get parent(){const t=j3(this._location.path);if(t===null)return null;const n=new Fi(this._location.bucket,t);return new xf(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw R3(t)}}function RI(e,t){const n=t==null?void 0:t[S3];return n==null?null:Fi.makeFromBucketSpec(n,e)}class z3{constructor(t,n,i,r,s){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=m1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=I3,this._maxUploadRetryTime=E3,this._requests=new Set,r!=null?this._bucket=Fi.makeFromBucketSpec(r,this._host):this._bucket=RI(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Fi.makeFromBucketSpec(this._url,t):this._bucket=RI(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){PI("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){PI("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new xf(this,t)}_makeRequest(t,n,i,r,s=!0){if(this._deleted)return new x3(v1());{const a=H3(t,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,r).getPromise()}}const xI="@firebase/storage",VI="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3="storage";function G3(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new z3(n,i,r,t,Hs)}function K3(){cr(new ji(q3,G3,"PUBLIC").setMultipleInstances(!0)),pi(xI,VI,""),pi(xI,VI,"esm2017")}K3();const hv=new WeakMap;function g1(e,t){return hv.has(t)||hv.set(t,{f:{},r:{},s:{},u:{}}),hv.get(t)}function Y3(e,t,n,i){if(!e)return n;const[r,s]=p1(e);if(!r)return n;const a=g1(void 0,i)[r]||{},o=t||s;return o&&o in a?a[o]:n}function Q3(e,t,n,i){if(!e)return;const[r,s]=p1(e);if(!r)return;const a=g1(void 0,i)[r],o=t||s;if(o)return n.then(l=>{a[o]=l}).catch(nr),o}function p1(e){return A$(e)||P$(e)?["f",e.path]:R$(e)?["r",e.toString()]:x$(e)?["s",e.toString()]:[]}const mv=new WeakMap;function X3(e,t,n){const i=_c();mv.has(i)||mv.set(i,new Map);const r=mv.get(i),s=Q3(t,n,e,i);return s&&r.set(s,e),s?()=>r.delete(s):nr}const J3={toFirestore(e){return e},fromFirestore(e,t){return e.exists()?Object.defineProperties(e.data(t),{id:{value:e.id}}):null}};function Ag(e,t,n,i){if(!T$(e))return[e,{}];const r=[{},{}],s=Object.keys(n).reduce((o,l)=>{const u=n[l];return o[u.path]=u.data(),o},{});function a(o,l,u,c){l=l||{};const[d,h]=c;Object.getOwnPropertyNames(o).forEach(v=>{const g=Object.getOwnPropertyDescriptor(o,v);g&&!g.enumerable&&Object.defineProperty(d,v,g)});for(const v in o){const g=o[v];if(g==null||g instanceof Date||g instanceof rn||g instanceof Vh)d[v]=g;else if(by(g)){const p=u+v;d[v]=p in n?l[v]:g.path,h[p]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){d[v]=Array(g.length);for(let p=0;p<g.length;p++){const y=g[p];y&&y.path in s&&(d[v][p]=s[y.path])}a(g,l[v]||d[v],u+v+".",[d[v],h])}else Ba(g)?(d[v]={},a(g,l[v],u+v+".",[d[v],h])):d[v]=g}}return a(e,t,"",r),r}const T_={reset:!1,wait:!0,maxRefDepth:2,converter:J3,snapshotOptions:{serverTimestamps:"estimate"}};function Vf(e){for(const t in e)e[t].unsub()}function Pg(e,t,n,i,r,s,a,o,l){const[u,c]=Ag(i.data(e.snapshotOptions),_y(t,n),r,e);s.set(t,n,u),Rg(e,t,n,r,c,s,a,o,l)}function Z3({ref:e,target:t,path:n,depth:i,resolve:r,reject:s,ops:a},o){const l=Object.create(null);let u=nr;return o.once?f1(e).then(c=>{c.exists()?Pg(o,t,n,c,l,a,i,r,s):(a.set(t,n,null),r())}).catch(s):u=C_(e,c=>{c.exists()?Pg(o,t,n,c,l,a,i,r,s):(a.set(t,n,null),r())},s),()=>{u(),Vf(l)}}function Rg(e,t,n,i,r,s,a,o,l){const u=Object.keys(r);if(Object.keys(i).filter(p=>u.indexOf(p)<0).forEach(p=>{i[p].unsub(),delete i[p]}),!u.length||++a>e.maxRefDepth)return o(n);let d=0;const h=u.length,v=Object.create(null);function g(p){p in v&&++d>=h&&o(n)}u.forEach(p=>{const y=i[p],I=r[p],E=`${n}.${p}`;if(v[E]=!0,y)if(y.path!==I.path)y.unsub();else return;i[p]={data:()=>_y(t,E),unsub:Z3({ref:I,target:t,path:E,depth:a,ops:s,resolve:g.bind(null,E),reject:l},e),path:I.path}})}function ej(e,t,n,i,r,s){const a=Object.assign({},T_,s),{snapshotListenOptions:o,snapshotOptions:l,wait:u,once:c}=a,d="value";let h=ee(u?[]:e.value);u||n.set(e,d,[]);const v=i;let g,p=nr;const y=[],I={added:({newIndex:V,doc:P})=>{y.splice(V,0,Object.create(null));const D=y[V],[N,R]=Ag(P.data(l),void 0,D,a);n.add(xr(h),V,N),Rg(a,h,`${d}.${V}`,D,R,n,0,i.bind(null,P),r)},modified:({oldIndex:V,newIndex:P,doc:D})=>{const N=xr(h),R=y[V],b=N[V],[_,T]=Ag(D.data(l),b,R,a);y.splice(P,0,R),n.remove(N,V),n.add(N,P,_),Rg(a,h,`${d}.${P}`,R,T,n,0,i,r)},removed:({oldIndex:V})=>{const P=xr(h);n.remove(P,V),Vf(y.splice(V,1)[0])}};function E(V){const P=V.docChanges(o);if(!g&&P.length){g=!0;let D=0;const N=P.length,R=Object.create(null);for(let b=0;b<N;b++)R[P[b].doc.id]=!0;i=b=>{b&&b.id in R&&++D>=N&&(u&&(n.set(e,d,xr(h)),h=e),v(xr(h)),i=nr)}}P.forEach(D=>{I[D.type](D)}),P.length||(u&&(n.set(e,d,xr(h)),h=e),i(xr(h)))}return c?b3(t).then(E).catch(r):p=C_(t,E,r),V=>{if(p(),V){const P=typeof V=="function"?V():[];n.set(e,d,P)}y.forEach(Vf)}}function tj(e,t,n,i,r,s){const a=Object.assign({},T_,s),o="value",l=Object.create(null);i=V$(i,()=>_y(e,o));let u=nr;function c(d){d.exists()?Pg(a,e,o,d,l,n,0,i,r):(n.set(e,o,null),i(null))}return a.once?f1(t).then(c).catch(r):u=C_(t,c,r),d=>{if(u(),d){const h=typeof d=="function"?d():null;n.set(e,o,h)}Vf(l)}}const DI=Symbol();function nj(e,t){let n=nr;const i=Object.assign({},T_,t),r=xr(e),s=i.target||ee();N$()&&(i.once=!0);const a=Y3(r,i.ssrKey,DI,_c()),o=a!==DI;o&&(s.value=a);let l=!o;const u=ee(!1),c=ee(),d=me(),h=JE();let v=nr;function g(){let I=xr(e);const E=new Promise((V,P)=>{if(n(i.reset),!I)return n=nr,V(null);u.value=l,l=!0,I.converter||(I=I.withConverter(i.converter)),n=(by(I)?tj:ej)(s,I,ij,V,P,i)}).catch(V=>(d.value===E&&(c.value=V),Promise.reject(V))).finally(()=>{d.value===E&&(u.value=!1)});d.value=E}let p=nr;(Bt(e)||typeof e=="function")&&(p=ve(e,g)),g(),r&&(v=X3(d.value,r,i.ssrKey)),rl()&&NC(()=>d.value),h&&Pn(y);function y(I=i.reset){p(),v(),n(I)}return Object.defineProperties(s,{error:{get:()=>c},data:{get:()=>s},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>y}})}const ij={set:(e,t,n)=>E$(e,t,n),add:(e,t,n)=>e.splice(t,0,n),remove:(e,t)=>e.splice(t,1)};function RQ(e,t){return nj(e,t)}function xQ(e){return ZP(_c(e))}function rj(e){return sj({initialUser:e,dependencies:{popupRedirectResolver:vk,persistence:[dk,sk,my]}})}const y1=Symbol("VueFireAuth");function sj({dependencies:e,initialUser:t}){return(n,i)=>{const[r,s]=aj(n,i,t,e);L$(r,s)}}function aj(e,t,n,i,r=QT(e,i)){const s=O$(e,t).run(()=>ee(n));return xk.set(e,s),t.provide(y1,r),[s,r]}function oj(e){return I$?$e(y1):null}function lj(e,{firebaseApp:t,modules:n=[]}){e.provide(Rk,t);for(const i of n)i(t,e)}function ei(e,t){let n;function i(){n=lc(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}ve(e,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),Pn(()=>{n==null||n.stop()})}const ot=typeof window<"u",k_=ot&&"IntersectionObserver"in window,uj=ot&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),NI=ot&&"EyeDropper"in window;function OI(e,t,n){cj(e,t),t.set(e,n)}function cj(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function dj(e,t,n){return e.set(_1(e,t),n),n}function na(e,t){return e.get(_1(e,t))}function _1(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function b1(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let r=0;r<i;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function br(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>br(e[i],t[i]))}function Va(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),b1(e,t.split("."),n))}function Yt(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return Va(e,t,n);if(Array.isArray(t))return b1(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function gi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function A_(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function MI(e){let t;return e!==null&&typeof e=="object"&&((t=Object.getPrototypeOf(e))===Object.prototype||t===null)}function P_(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const LI=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),xg=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function w1(e){return Object.keys(e)}function da(e,t){return t.every(n=>e.hasOwnProperty(n))}function R_(e,t){const n={},i=new Set(Object.keys(e));for(const r of t)i.has(r)&&(n[r]=e[r]);return n}function Vg(e,t,n){const i=Object.create(null),r=Object.create(null);for(const s in e)t.some(a=>a instanceof RegExp?a.test(s):a===s)&&!(n!=null&&n.some(a=>a===s))?i[s]=e[s]:r[s]=e[s];return[i,r]}function dt(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}function Fh(e,t){const n={};return t.forEach(i=>n[i]=e[i]),n}const S1=/^on[^a-z]/,Bh=e=>S1.test(e),fj=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],hj=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function mj(e){return e.isComposing&&hj.includes(e.key)}function zs(e){const[t,n]=Vg(e,[S1]),i=dt(t,fj),[r,s]=Vg(n,["class","style","id",/^data-/]);return Object.assign(r,t),Object.assign(s,i),[r,s]}function Pt(e){return e==null?[]:Array.isArray(e)?e:[e]}function vj(e,t){let n=0;const i=function(){for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];clearTimeout(n),n=setTimeout(()=>e(...s),it(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function Df(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function FI(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function BI(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function gj(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function pj(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Array.from({length:Math.ceil(e.length/t)},(n,i)=>e.slice(i*t,i*t+t))}function $I(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function Hn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in e)i[r]=e[r];for(const r in t){const s=e[r],a=t[r];if(MI(s)&&MI(a)){i[r]=Hn(s,a,n);continue}if(n&&Array.isArray(s)&&Array.isArray(a)){i[r]=n(s,a);continue}i[r]=a}return i}function I1(e){return e.map(t=>t.type===we?I1(t.children):t).flat()}function ga(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ga.cache.has(e))return ga.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ga.cache.set(e,t),t}ga.cache=new Map;function Io(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>Io(e,n)).flat(1);if(t.suspense)return Io(e,t.ssContent);if(Array.isArray(t.children))return t.children.map(n=>Io(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return Io(e,t.component.subTree).flat(1)}return[]}var Sd=new WeakMap,co=new WeakMap;class yj{constructor(t){OI(this,Sd,[]),OI(this,co,0),this.size=t}push(t){na(Sd,this)[na(co,this)]=t,dj(co,this,(na(co,this)+1)%this.size)}values(){return na(Sd,this).slice(na(co,this)).concat(na(Sd,this).slice(0,na(co,this)))}}function _j(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function x_(e){const t=Ut({}),n=S(e);return Ct(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),$s(t)}function Nf(e,t){return e.includes(t)}function E1(e){return e[2].toLowerCase()+e.slice(3)}const on=()=>[Function,Array];function UI(e,t){return t="on"+gr(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function V_(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}function qu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function C1(e,t,n){let i,r=e.indexOf(document.activeElement);const s=t==="next"?1:-1;do r+=s,i=e[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<e.length&&r>=0);return i}function pa(e,t){var i,r,s,a;const n=qu(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(r=n[0])==null||r.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else if(typeof t=="number")(a=n[t])==null||a.focus();else{const o=C1(n,t);o?o.focus():pa(e,t==="next"?"first":"last")}}function Id(e){return e==null||typeof e=="string"&&e.trim()===""}function T1(){}function Jo(e,t){if(!(ot&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function $h(e){return e.some(t=>Sa(t)?t.type===$n?!1:t.type!==we||$h(t.children):!0)?e:null}function bj(e,t){if(!ot||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function wj(e,t){const n=e.clientX,i=e.clientY,r=t.getBoundingClientRect(),s=r.left,a=r.top,o=r.right,l=r.bottom;return n>=s&&n<=o&&i>=a&&i<=l}function Of(){const e=me(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>P_(e.value)}),t}function Mf(e){const t=e.key.length===1,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}const k1=["top","bottom"],Sj=["start","end","left","right"];function Dg(e,t){let[n,i]=e.split(" ");return i||(i=Nf(k1,n)?"start":Nf(Sj,n)?"top":"center"),{side:Ng(n,t),align:Ng(i,t)}}function Ng(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function vv(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function gv(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function HI(e){return{side:e.align,align:e.side}}function jI(e){return Nf(k1,e.side)?"y":"x"}class ya{constructor(t){let{x:n,y:i,width:r,height:s}=t;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function WI(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function A1(e){return Array.isArray(e)?new ya({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function D_(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let r,s,a,o,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],a=+r[5],o=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],a=+r[3],o=+r[4],l=+r[5];else return new ya(t);const u=n.transformOrigin,c=t.x-o-(1-s)*parseFloat(u),d=t.y-l-(1-a)*parseFloat(u.slice(u.indexOf(" ")+1)),h=s?t.width/s:e.offsetWidth+1,v=a?t.height/a:e.offsetHeight+1;return new ya({x:c,y:d,width:h,height:v})}else return new ya(t)}function fa(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const Hd=new WeakMap;function Ij(e,t){Object.keys(t).forEach(n=>{if(Bh(n)){const i=E1(n),r=Hd.get(e);if(t[n]==null)r==null||r.forEach(s=>{const[a,o]=s;a===i&&(e.removeEventListener(i,o),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===t[n])){e.addEventListener(i,t[n]);const s=r||new Set;s.add([i,t[n]]),Hd.has(e)||Hd.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Ej(e,t){Object.keys(t).forEach(n=>{if(Bh(n)){const i=E1(n),r=Hd.get(e);r==null||r.forEach(s=>{const[a,o]=s;a===i&&(e.removeEventListener(i,o),r.delete(s))})}else e.removeAttribute(n)})}const fo=2.4,zI=.2126729,qI=.7151522,GI=.072175,Cj=.55,Tj=.58,kj=.57,Aj=.62,Ed=.03,KI=1.45,Pj=5e-4,Rj=1.25,xj=1.25,YI=.078,QI=12.82051282051282,Cd=.06,XI=.001;function JI(e,t){const n=(e.r/255)**fo,i=(e.g/255)**fo,r=(e.b/255)**fo,s=(t.r/255)**fo,a=(t.g/255)**fo,o=(t.b/255)**fo;let l=n*zI+i*qI+r*GI,u=s*zI+a*qI+o*GI;if(l<=Ed&&(l+=(Ed-l)**KI),u<=Ed&&(u+=(Ed-u)**KI),Math.abs(u-l)<Pj)return 0;let c;if(u>l){const d=(u**Cj-l**Tj)*Rj;c=d<XI?0:d<YI?d-d*QI*Cd:d-Cd}else{const d=(u**Aj-l**kj)*xj;c=d>-XI?0:d>-YI?d-d*QI*Cd:d+Cd}return c*100}function Vj(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const Lf=.20689655172413793,Dj=e=>e>Lf**3?Math.cbrt(e):e/(3*Lf**2)+4/29,Nj=e=>e>Lf?e**3:3*Lf**2*(e-4/29);function P1(e){const t=Dj,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function R1(e){const t=Nj,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const Oj=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Mj=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Lj=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Fj=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function x1(e){const t=Array(3),n=Mj,i=Oj;for(let r=0;r<3;++r)t[r]=Math.round(Ft(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function N_(e){let{r:t,g:n,b:i}=e;const r=[0,0,0],s=Fj,a=Lj;t=s(t/255),n=s(n/255),i=s(i/255);for(let o=0;o<3;++o)r[o]=a[o][0]*t+a[o][1]*n+a[o][2]*i;return r}function Og(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function Bj(e){return Og(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const ZI=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,$j={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>eE({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>eE({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>Yr({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>Yr({h:e,s:t,v:n,a:i})};function Pi(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&ZI.test(e)){const{groups:t}=e.match(ZI),{fn:n,values:i}=t,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return $j[n](...r)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),M1(t)}else if(typeof e=="object"){if(da(e,["r","g","b"]))return e;if(da(e,["h","s","l"]))return Yr(O_(e));if(da(e,["h","s","v"]))return Yr(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Yr(e){const{h:t,s:n,v:i,a:r}=e,s=o=>{const l=(o+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},a=[s(5),s(3),s(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:r}}function eE(e){return Yr(O_(e))}function Uh(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,r=Math.max(t,n,i),s=Math.min(t,n,i);let a=0;r!==s&&(r===t?a=60*(0+(n-i)/(r-s)):r===n?a=60*(2+(i-t)/(r-s)):r===i&&(a=60*(4+(t-n)/(r-s)))),a<0&&(a=a+360);const o=r===0?0:(r-s)/r,l=[a,o,r];return{h:l[0],s:l[1],v:l[2],a:e.a}}function V1(e){const{h:t,s:n,v:i,a:r}=e,s=i-i*n/2,a=s===1||s===0?0:(i-s)/Math.min(s,1-s);return{h:t,s:a,l:s,a:r}}function O_(e){const{h:t,s:n,l:i,a:r}=e,s=i+n*Math.min(i,1-i),a=s===0?0:2-2*i/s;return{h:t,s:a,v:s,a:r}}function D1(e){let{r:t,g:n,b:i,a:r}=e;return r===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${r})`}function N1(e){return D1(Yr(e))}function Td(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function O1(e){let{r:t,g:n,b:i,a:r}=e;return`#${[Td(t),Td(n),Td(i),r!==void 0?Td(Math.round(r*255)):""].join("")}`}function M1(e){e=Uj(e);let[t,n,i,r]=gj(e,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:t,g:n,b:i,a:r}}function L1(e){const t=M1(e);return Uh(t)}function F1(e){return O1(Yr(e))}function Uj(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=FI(FI(e,6),8,"F")),e}function Hj(e,t){const n=P1(N_(e));return n[0]=n[0]+t*10,x1(R1(n))}function jj(e,t){const n=P1(N_(e));return n[0]=n[0]-t*10,x1(R1(n))}function Mg(e){const t=Pi(e);return N_(t)[1]}function Wj(e,t){const n=Mg(e),i=Mg(t),r=Math.max(n,i),s=Math.min(n,i);return(r+.05)/(s+.05)}function B1(e){const t=Math.abs(JI(Pi(0),Pi(e)));return Math.abs(JI(Pi(16777215),Pi(e)))>Math.min(t,50)?"#fff":"#000"}function F(e,t){return n=>Object.keys(e).reduce((i,r)=>{const a=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?i[r]={...a,default:n[r]}:i[r]=a,t&&!i[r].source&&(i[r].source=t),i},{})}const Ie=F({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Wt(e,t){const n=rl();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function wr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Wt(e).type;return ga((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let $1=0,jd=new WeakMap;function gn(){const e=Wt("getUid");if(jd.has(e))return jd.get(e);{const t=$1++;return jd.set(e,t),t}}gn.reset=()=>{$1=0,jd=new WeakMap};function zj(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Wt("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const Zo=Symbol.for("vuetify:defaults");function qj(e){return ee(e)}function M_(){const e=$e(Zo);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Vt(e,t){const n=M_(),i=ee(e),r=S(()=>{if(it(t==null?void 0:t.disabled))return n.value;const a=it(t==null?void 0:t.scoped),o=it(t==null?void 0:t.reset),l=it(t==null?void 0:t.root);if(i.value==null&&!(a||o||l))return n.value;let u=Hn(i.value,{prev:n.value});if(a)return u;if(o||l){const c=Number(o||1/0);for(let d=0;d<=c&&!(!u||!("prev"in u));d++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=Hn(Hn(u,{prev:u}),u[l])),u}return u.prev?Hn(u.prev,u):u});return vt(Zo,r),r}function Gj(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[ga(t)])<"u"}function Kj(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M_();const i=Wt("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const r=S(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),s=new Proxy(e,{get(l,u){var d,h,v,g,p,y,I;const c=Reflect.get(l,u);return u==="class"||u==="style"?[(d=r.value)==null?void 0:d[u],c].filter(E=>E!=null):typeof u=="string"&&!Gj(i.vnode,u)?((h=r.value)==null?void 0:h[u])!==void 0?(v=r.value)==null?void 0:v[u]:((p=(g=n.value)==null?void 0:g.global)==null?void 0:p[u])!==void 0?(I=(y=n.value)==null?void 0:y.global)==null?void 0:I[u]:c:c}}),a=me();Ct(()=>{if(r.value){const l=Object.entries(r.value).filter(u=>{let[c]=u;return c.startsWith(c[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=zj(Zo,i);vt(Zo,S(()=>a.value?Hn((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:o}}function wi(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=F(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(i){return R_(i,t)},e.props._as=String,e.setup=function(i,r){const s=M_();if(!s.value)return e._setup(i,r);const{props:a,provideSubDefaults:o}=Kj(i,i._as??e.name,s),l=e._setup(a,r);return o(),l}}return e}function Y(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?wi:Us)(t)}function Yj(e,t){return t.props=e,t}function Sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Y()({name:n??gr(ai(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...Ie()},setup(i,r){let{slots:s}=r;return()=>{var a;return Jn(i.tag,{class:[e,i.class],style:i.style},(a=s.default)==null?void 0:a.call(s))}}})}function U1(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Gu="cubic-bezier(0.4, 0, 0.2, 1)",Qj="cubic-bezier(0.0, 0, 0.2, 1)",Xj="cubic-bezier(0.4, 0, 1, 1)";function tE(e,t,n){return Object.keys(e).filter(i=>Bh(i)&&i.endsWith(t)).reduce((i,r)=>(i[r.slice(0,-t.length)]=s=>e[r](s,n(s)),i),{})}function L_(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Jj(e):F_(e))return e;e=e.parentElement}return document.scrollingElement}function Ku(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(F_(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function F_(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Jj(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Zj(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function te(e){const t=Wt("useRender");t.render=e}function Ae(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const s=Wt("useProxiedModel"),a=ee(e[t]!==void 0?e[t]:n),o=ga(t),u=S(o!==t?()=>{var d,h,v,g;return e[t],!!(((d=s.vnode.props)!=null&&d.hasOwnProperty(t)||(h=s.vnode.props)!=null&&h.hasOwnProperty(o))&&((v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${t}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var d,h;return e[t],!!((d=s.vnode.props)!=null&&d.hasOwnProperty(t)&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${t}`)))});ei(()=>!u.value,()=>{ve(()=>e[t],d=>{a.value=d})});const c=S({get(){const d=e[t];return i(u.value?d:a.value)},set(d){const h=r(d),v=xe(u.value?e[t]:a.value);v===h||i(v)===d||(a.value=h,s==null||s.emit(`update:${t}`,h))}});return Object.defineProperty(c,"externalValue",{get:()=>u.value?e[t]:a.value}),c}const H1={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},nE="$vuetify.",iE=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),j1=(e,t,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];if(!i.startsWith(nE))return iE(i,s);const o=i.replace(nE,""),l=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let c=Va(l,o,null);return c||(`${i}${e.value}`,c=Va(u,o,null)),c||(c=i),typeof c!="string"&&(c=i),iE(c,s)};function W1(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function pv(e,t,n){const i=Ae(e,t,e[t]??n.value);return i.value=e[t]??n.value,ve(n,r=>{e[t]==null&&(i.value=n.value)}),i}function z1(e){return t=>{const n=pv(t,"locale",e.current),i=pv(t,"fallback",e.fallback),r=pv(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:j1(n,i,r),n:W1(n,i),provide:z1({current:n,fallback:i,messages:r})}}}function e9(e){const t=me((e==null?void 0:e.locale)??"en"),n=me((e==null?void 0:e.fallback)??"en"),i=ee({en:H1,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:j1(t,n,i),n:W1(t,n),provide:z1({current:t,fallback:n,messages:i})}}const el=Symbol.for("vuetify:locale");function t9(e){return e.name!=null}function n9(e){const t=e!=null&&e.adapter&&t9(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:e9(e),n=s9(t,e);return{...t,...n}}function St(){const e=$e(el);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function i9(e){const t=$e(el);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=a9(n,t.rtl,e),r={...n,...i};return vt(el,r),r}function r9(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function s9(e,t){const n=ee((t==null?void 0:t.rtl)??r9()),i=S(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:S(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function a9(e,t,n){const i=S(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:S(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function sn(){const e=$e(el);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const Hh={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function o9(e,t,n){const i=[];let r=[];const s=q1(e),a=G1(e),o=n??Hh[t.slice(-2).toUpperCase()]??0,l=(s.getDay()-o+7)%7,u=(a.getDay()-o+7)%7;for(let c=0;c<l;c++){const d=new Date(s);d.setDate(d.getDate()-(l-c)),r.push(d)}for(let c=1;c<=a.getDate();c++){const d=new Date(e.getFullYear(),e.getMonth(),c);r.push(d),r.length===7&&(i.push(r),r=[])}for(let c=1;c<7-u;c++){const d=new Date(a);d.setDate(d.getDate()+c),r.push(d)}return r.length>0&&i.push(r),i}function l9(e,t,n){const i=n??Hh[t.slice(-2).toUpperCase()]??0,r=new Date(e);for(;r.getDay()!==i;)r.setDate(r.getDate()-1);return r}function u9(e,t){const n=new Date(e),i=((Hh[t.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function q1(e){return new Date(e.getFullYear(),e.getMonth(),1)}function G1(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function c9(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const d9=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function K1(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(d9.test(e))return c9(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const rE=new Date(2e3,0,2);function f9(e,t){const n=t??Hh[e.slice(-2).toUpperCase()]??0;return gi(7).map(i=>{const r=new Date(rE);return r.setDate(rE.getDate()+n+i),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(r)})}function h9(e,t,n,i){const r=K1(e)??new Date,s=i==null?void 0:i[t];if(typeof s=="function")return s(r,t,n);let a={};switch(t){case"fullDate":a={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":a={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const o=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${o} ${l}`;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":a={month:"short",day:"numeric"};break;case"year":a={year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"weekday":a={weekday:"long"};break;case"weekdayShort":a={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":a={hour:"numeric",hour12:!0};break;case"hours24h":a={hour:"numeric",hour12:!1};break;case"minutes":a={minute:"numeric"};break;case"seconds":a={second:"numeric"};break;case"fullTime":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":a={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:a=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(r)}function m9(e,t){const n=e.toJsDate(t),i=n.getFullYear(),r=BI(String(n.getMonth()+1),2,"0"),s=BI(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function v9(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function g9(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function p9(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function y9(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function _9(e,t){const n=new Date(e);return n.setDate(n.getDate()+t*7),n}function b9(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function w9(e){return e.getFullYear()}function S9(e){return e.getMonth()}function I9(e){return e.getDate()}function E9(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function C9(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function T9(e){return e.getHours()}function k9(e){return e.getMinutes()}function A9(e){return new Date(e.getFullYear(),0,1)}function P9(e){return new Date(e.getFullYear(),11,31)}function R9(e,t){return Ff(e,t[0])&&D9(e,t[1])}function x9(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function Ff(e,t){return e.getTime()>t.getTime()}function V9(e,t){return Ff(Lg(e),Lg(t))}function D9(e,t){return e.getTime()<t.getTime()}function sE(e,t){return e.getTime()===t.getTime()}function N9(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function O9(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function M9(e,t){return e.getFullYear()===t.getFullYear()}function L9(e,t,n){const i=new Date(e),r=new Date(t);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function F9(e,t){const n=new Date(e);return n.setHours(t),n}function B9(e,t){const n=new Date(e);return n.setMinutes(t),n}function $9(e,t){const n=new Date(e);return n.setMonth(t),n}function U9(e,t){const n=new Date(e);return n.setDate(t),n}function H9(e,t){const n=new Date(e);return n.setFullYear(t),n}function Lg(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function j9(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class W9{constructor(t){this.locale=t.locale,this.formats=t.formats}date(t){return K1(t)}toJsDate(t){return t}toISO(t){return m9(this,t)}parseISO(t){return v9(t)}addMinutes(t,n){return g9(t,n)}addHours(t,n){return p9(t,n)}addDays(t,n){return y9(t,n)}addWeeks(t,n){return _9(t,n)}addMonths(t,n){return b9(t,n)}getWeekArray(t,n){return o9(t,this.locale,n?Number(n):void 0)}startOfWeek(t,n){return l9(t,this.locale,n?Number(n):void 0)}endOfWeek(t){return u9(t,this.locale)}startOfMonth(t){return q1(t)}endOfMonth(t){return G1(t)}format(t,n){return h9(t,n,this.locale,this.formats)}isEqual(t,n){return sE(t,n)}isValid(t){return x9(t)}isWithinRange(t,n){return R9(t,n)}isAfter(t,n){return Ff(t,n)}isAfterDay(t,n){return V9(t,n)}isBefore(t,n){return!Ff(t,n)&&!sE(t,n)}isSameDay(t,n){return N9(t,n)}isSameMonth(t,n){return O9(t,n)}isSameYear(t,n){return M9(t,n)}setMinutes(t,n){return B9(t,n)}setHours(t,n){return F9(t,n)}setMonth(t,n){return $9(t,n)}setDate(t,n){return U9(t,n)}setYear(t,n){return H9(t,n)}getDiff(t,n,i){return L9(t,n,i)}getWeekdays(t){return f9(this.locale,t?Number(t):void 0)}getYear(t){return w9(t)}getMonth(t){return S9(t)}getDate(t){return I9(t)}getNextMonth(t){return E9(t)}getPreviousMonth(t){return C9(t)}getHours(t){return T9(t)}getMinutes(t){return k9(t)}startOfDay(t){return Lg(t)}endOfDay(t){return j9(t)}startOfYear(t){return A9(t)}endOfYear(t){return P9(t)}}const Y1=Symbol.for("vuetify:date-options"),aE=Symbol.for("vuetify:date-adapter");function z9(e,t){const n=Hn({adapter:W9,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:Q1(n,t)}}function Q1(e,t){const n=Ut(typeof e.adapter=="function"?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return ve(t.current,i=>{n.locale=e.locale[i]??i??n.locale}),n}function Ir(){const e=$e(Y1);if(!e)throw new Error("[Vuetify] Could not find injected date options");const t=St();return Q1(e,t)}function q9(e,t){const n=e.toJsDate(t);let i=n.getFullYear(),r=new Date(i,0,1);if(n<r)i=i-1,r=new Date(i,0,1);else{const o=new Date(i+1,0,1);n>=o&&(i=i+1,r=o)}const s=Math.abs(n.getTime()-r.getTime()),a=Math.ceil(s/(1e3*60*60*24));return Math.floor(a/7)+1}const jh=["sm","md","lg","xl","xxl"],Fg=Symbol.for("vuetify:display"),oE={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},G9=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:oE;return Hn(oE,e)};function lE(e){return ot&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function uE(e){return ot&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function cE(e){const t=ot&&!e?window.navigator.userAgent:"ssr";function n(g){return!!t.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),a=n(/electron/i),o=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),c=n(/opera/i),d=n(/win/i),h=n(/mac/i),v=n(/linux/i);return{android:i,ios:r,cordova:s,electron:a,chrome:o,edge:l,firefox:u,opera:c,win:d,mac:h,linux:v,touch:uj,ssr:t==="ssr"}}function K9(e,t){const{thresholds:n,mobileBreakpoint:i}=G9(e),r=me(uE(t)),s=me(cE(t)),a=Ut({}),o=me(lE(t));function l(){r.value=uE(),o.value=lE()}function u(){l(),s.value=cE()}return Ct(()=>{const c=o.value<n.sm,d=o.value<n.md&&!c,h=o.value<n.lg&&!(d||c),v=o.value<n.xl&&!(h||d||c),g=o.value<n.xxl&&!(v||h||d||c),p=o.value>=n.xxl,y=c?"xs":d?"sm":h?"md":v?"lg":g?"xl":"xxl",I=typeof i=="number"?i:n[i],E=o.value<I;a.xs=c,a.sm=d,a.md=h,a.lg=v,a.xl=g,a.xxl=p,a.smAndUp=!c,a.mdAndUp=!(c||d),a.lgAndUp=!(c||d||h),a.xlAndUp=!(c||d||h||v),a.smAndDown=!(h||v||g||p),a.mdAndDown=!(v||g||p),a.lgAndDown=!(g||p),a.xlAndDown=!p,a.name=y,a.height=r.value,a.width=o.value,a.mobile=E,a.mobileBreakpoint=i,a.platform=s.value,a.thresholds=n}),ot&&window.addEventListener("resize",l,{passive:!0}),{...$s(a),update:u,ssr:!!t}}const Wa=F({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function Si(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wr();const n=$e(Fg);if(!n)throw new Error("Could not find Vuetify display injection");const i=S(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),r=S(()=>t?{[`${t}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const X1=Symbol.for("vuetify:goto");function J1(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function Y9(e){return B_(e)??(document.scrollingElement||document.body)}function B_(e){return typeof e=="string"?document.querySelector(e):P_(e)}function yv(e,t,n){if(typeof e=="number")return t&&n?-e:e;let i=B_(e),r=0;for(;i;)r+=t?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function Q9(e,t){return{rtl:t.isRtl,options:Hn(J1(),e)}}async function dE(e,t,n,i){const r=n?"scrollLeft":"scrollTop",s=Hn((i==null?void 0:i.options)??J1(),t),a=i==null?void 0:i.rtl.value,o=(typeof e=="number"?e:B_(e))??0,l=s.container==="parent"&&o instanceof HTMLElement?o.parentElement:Y9(s.container),u=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!u)throw new TypeError(`Easing function "${s.easing}" not found.`);let c;if(typeof o=="number")c=yv(o,n,a);else if(c=yv(o,n,a)-yv(l,n,a),s.layout){const g=window.getComputedStyle(o).getPropertyValue("--v-layout-top");g&&(c-=parseInt(g,10))}c+=s.offset,c=J9(l,c,!!a,!!n);const d=l[r]??0;if(c===d)return Promise.resolve(c);const h=performance.now();return new Promise(v=>requestAnimationFrame(function g(p){const I=(p-h)/s.duration,E=Math.floor(d+(c-d)*u(Ft(I,0,1)));if(l[r]=E,I>=1&&Math.abs(E-l[r])<10)return v(c);if(I>2)return v(l[r]);requestAnimationFrame(g)}))}function X9(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=$e(X1),{isRtl:n}=sn();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const i={...t,rtl:S(()=>t.rtl.value||n.value)};async function r(s,a){return dE(s,Hn(e,a),!1,i)}return r.horizontal=async(s,a)=>dE(s,Hn(e,a),!0,i),r}function J9(e,t,n,i){const{scrollWidth:r,scrollHeight:s}=e,[a,o]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let l,u;return i?n?(l=-(r-a),u=0):(l=0,u=r-a):(l=0,u=s+-o),Math.max(Math.min(t,u),l)}const Z9={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},eW={component:e=>Jn(U_,{...e,class:"mdi"})},Le=[String,Function,Object,Array],Bg=Symbol.for("vuetify:icons"),Wh=F({icon:{type:Le},tag:{type:String,required:!0}},"icon"),$g=Y()({name:"VComponentIcon",props:Wh(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return m(e.tag,null,{default:()=>{var r;return[e.icon?m(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),$_=wi({name:"VSvgIcon",inheritAttrs:!1,props:Wh(),setup(e,t){let{attrs:n}=t;return()=>m(e.tag,K(n,{style:null}),{default:()=>[m("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?m("path",{d:i[0],"fill-opacity":i[1]},null):m("path",{d:i},null)):m("path",{d:e.icon},null)])]})}}),tW=wi({name:"VLigatureIcon",props:Wh(),setup(e){return()=>m(e.tag,null,{default:()=>[e.icon]})}}),U_=wi({name:"VClassIcon",props:Wh(),setup(e){return()=>m(e.tag,{class:e.icon},null)}});function nW(){return{svg:{component:$_},class:{component:U_}}}function iW(e){const t=nW(),n=(e==null?void 0:e.defaultSet)??"mdi";return n==="mdi"&&!t.mdi&&(t.mdi=eW),Hn({defaultSet:n,sets:t,aliases:{...Z9,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const rW=e=>{const t=$e(Bg);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:S(()=>{var l;const i=it(e);if(!i)return{component:$g};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=t.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:$_,icon:r};if(typeof r!="string")return{component:$g,icon:r};const s=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),a=s?r.slice(s.length+1):r;return{component:t.sets[s??t.defaultSet].component,icon:a}})}},Yu=Symbol.for("vuetify:theme"),Xe=F({theme:String},"theme");function fE(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function sW(){var i,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:fE();const t=fE();if(!e)return{...t,isDisabled:!0};const n={};for(const[s,a]of Object.entries(e.themes??{})){const o=a.dark||s==="dark"?(i=t.themes)==null?void 0:i.dark:(r=t.themes)==null?void 0:r.light;n[s]=Hn(o,a)}return Hn(t,{...e,themes:n})}function aW(e){const t=sW(e),n=ee(t.defaultTheme),i=ee(t.themes),r=S(()=>{const c={};for(const[d,h]of Object.entries(i.value)){const v=c[d]={...h,colors:{...h.colors}};if(t.variations)for(const g of t.variations.colors){const p=v.colors[g];if(p)for(const y of["lighten","darken"]){const I=y==="lighten"?Hj:jj;for(const E of gi(t.variations[y],1))v.colors[`${g}-${y}-${E}`]=O1(I(Pi(p),E))}}for(const g of Object.keys(v.colors)){if(/^on-[a-z]/.test(g)||v.colors[`on-${g}`])continue;const p=`on-${g}`,y=Pi(v.colors[g]);v.colors[p]=B1(y)}}return c}),s=S(()=>r.value[n.value]),a=S(()=>{var g;const c=[];(g=s.value)!=null&&g.dark&&ia(c,":root",["color-scheme: dark"]),ia(c,":root",hE(s.value));for(const[p,y]of Object.entries(r.value))ia(c,`.v-theme--${p}`,[`color-scheme: ${y.dark?"dark":"normal"}`,...hE(y)]);const d=[],h=[],v=new Set(Object.values(r.value).flatMap(p=>Object.keys(p.colors)));for(const p of v)/^on-[a-z]/.test(p)?ia(h,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(ia(d,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),ia(h,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),ia(h,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return c.push(...d,...h),c.map((p,y)=>y===0?p:`    ${p}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(c){if(t.isDisabled)return;const d=c._context.provides.usehead;if(d)if(d.push){const h=d.push(o);ot&&ve(a,()=>{h.patch(o)})}else ot?(d.addHeadObjs(S(o)),Ct(()=>d.updateDOM())):d.addHeadObjs(o());else{let v=function(){if(typeof document<"u"&&!h){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),h=g,document.head.appendChild(h)}h&&(h.innerHTML=a.value)},h=ot?document.getElementById("vuetify-theme-stylesheet"):null;ot?ve(a,v,{immediate:!0}):v()}}const u=S(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:u,styles:a,global:{name:n,current:s}}}function at(e){Wt("provideTheme");const t=$e(Yu,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=S(()=>e.theme??t.name.value),i=S(()=>t.themes.value[n.value]),r=S(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,current:i,themeClasses:r};return vt(Yu,s),s}function H_(){Wt("useTheme");const e=$e(Yu,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function ia(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}