const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-Cnsps_Vq.js","assets/SchoolEditor.vue_vue_type_script_setup_true_lang-Do8_Oy3A.js","assets/model-CTcth0Ot.js","assets/school-repository-DwlukrFv.js","assets/index.esm-Bofgu8vL.js","assets/ManageSchoolView-Vi-QyF6Q.js","assets/ManageSchoolView-dinIxp75.css","assets/SchoolView-BbT9Qfp_.js","assets/DeleteDialog.vue_vue_type_script_setup_true_lang-DHWn9YE8.js","assets/BackButton.vue_vue_type_script_setup_true_lang-C8dZMgDG.js","assets/school-service-BKRy073a.js","assets/DailyLessonCalendar-DC6ciTLI.js","assets/schedule-x-vue-dDfllttq.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/DailyLessonCalendar-Lln_Agx3.css","assets/lesson-group-service-DG5wxCOe.js","assets/SchoolView-WJSNbe9e.css","assets/SchoolLessonView-ChemwIBp.js","assets/DailyLessonView-DfBylawx.js","assets/CalendarView-urxRyzNs.js","assets/SettingsView-DD1QV29J.js","assets/LoginView-Eq9cGhYA.js","assets/DebuggerView-cl8zKO-d.js","assets/DebuggerView-C9ah2lQX.css"])))=>i.map(i=>d[i]);
var ND=Object.defineProperty;var OD=(e,t,n)=>t in e?ND(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var us=(e,t,n)=>OD(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dp(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ft={},Po=[],sr=()=>{},MD=()=>!1,Qf=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Np=e=>e.startsWith("onUpdate:"),Xt=Object.assign,Op=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},LD=Object.prototype.hasOwnProperty,pt=(e,t)=>LD.call(e,t),Be=Array.isArray,Ro=e=>Xf(e)==="[object Map]",GE=e=>Xf(e)==="[object Set]",qe=e=>typeof e=="function",Ht=e=>typeof e=="string",Ls=e=>typeof e=="symbol",Rt=e=>e!==null&&typeof e=="object",KE=e=>(Rt(e)||qe(e))&&qe(e.then)&&qe(e.catch),YE=Object.prototype.toString,Xf=e=>YE.call(e),FD=e=>Xf(e).slice(8,-1),QE=e=>Xf(e)==="[object Object]",Mp=e=>Ht(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,uu=Dp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jf=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},BD=/-(\w)/g,ai=Jf(e=>e.replace(BD,(t,n)=>n?n.toUpperCase():"")),$D=/\B([A-Z])/g,Fs=Jf(e=>e.replace($D,"-$1").toLowerCase()),gr=Jf(e=>e.charAt(0).toUpperCase()+e.slice(1)),Om=Jf(e=>e?`on${gr(e)}`:""),ii=(e,t)=>!Object.is(e,t),xd=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},XE=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},xv=e=>{const t=parseFloat(e);return isNaN(t)?e:t},UD=e=>{const t=Ht(e)?Number(e):NaN;return isNaN(t)?e:t};let Tw;const JE=()=>Tw||(Tw=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zf(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Ht(i)?zD(i):Zf(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Ht(e)||Rt(e))return e}const HD=/;(?![^(]*\))/g,jD=/:([^]+)/,WD=/\/\*[^]*?\*\//g;function zD(e){const t={};return e.replace(WD,"").split(HD).forEach(n=>{if(n){const i=n.split(jD);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function eh(e){let t="";if(Ht(e))t=e;else if(Be(e))for(let n=0;n<e.length;n++){const i=eh(e[n]);i&&(t+=i+" ")}else if(Rt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function _Q(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ht(t)&&(e.class=eh(t)),n&&(e.style=Zf(n)),e}const qD="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",GD=Dp(qD);function ZE(e){return!!e||e===""}const eC=e=>!!(e&&e.__v_isRef===!0),vs=e=>Ht(e)?e:e==null?"":Be(e)||Rt(e)&&(e.toString===YE||!qe(e.toString))?eC(e)?vs(e.value):JSON.stringify(e,tC,2):String(e),tC=(e,t)=>eC(t)?tC(e,t.value):Ro(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[Mm(i,s)+" =>"]=r,n),{})}:GE(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mm(n))}:Ls(t)?Mm(t):Rt(t)&&!Be(t)&&!QE(t)?String(t):t,Mm=(e,t="")=>{var n;return Ls(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qn;class nC{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qn,!t&&Qn&&(this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Qn;try{return Qn=this,t()}finally{Qn=n}}}on(){Qn=this}off(){Qn=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function dc(e){return new nC(e)}function iC(){return Qn}function Pn(e,t=!1){Qn&&Qn.cleanups.push(e)}let Et;const Lm=new WeakSet;class rC{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qn&&Qn.active&&Qn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lm.has(this)&&(Lm.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||aC(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kw(this),oC(this);const t=Et,n=$i;Et=this,$i=!0;try{return this.fn()}finally{lC(this),Et=t,$i=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Bp(t);this.deps=this.depsTail=void 0,kw(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lm.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vv(this)&&this.run()}get dirty(){return Vv(this)}}let sC=0,cu;function aC(e){e.flags|=8,e.next=cu,cu=e}function Lp(){sC++}function Fp(){if(--sC>0)return;let e;for(;cu;){let t=cu;for(cu=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function oC(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function lC(e){let t,n=e.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Bp(i),KD(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=n}function Vv(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(uC(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function uC(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Tu))return;e.globalVersion=Tu;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Vv(e)){e.flags&=-3;return}const n=Et,i=$i;Et=e,$i=!0;try{oC(e);const r=e.fn(e._value);(t.version===0||ii(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{Et=n,$i=i,lC(e),e.flags&=-3}}function Bp(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i),!n.subs)if(n.computed){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Bp(s,!0)}else n.map&&!t&&(n.map.delete(n.key),n.map.size||ku.delete(n.target))}function KD(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $i=!0;const cC=[];function Bs(){cC.push($i),$i=!1}function $s(){const e=cC.pop();$i=e===void 0?!0:e}function kw(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Et;Et=void 0;try{t()}finally{Et=n}}}let Tu=0;class YD{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class th{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(t){if(!Et||!$i||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new YD(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,Et.flags&4&&dC(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(t){this.version++,Tu++,this.notify(t)}notify(t){Lp();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fp()}}}function dC(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)dC(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const ku=new WeakMap,ga=Symbol(""),Dv=Symbol(""),Au=Symbol("");function Wn(e,t,n){if($i&&Et){let i=ku.get(e);i||ku.set(e,i=new Map);let r=i.get(n);r||(i.set(n,r=new th),r.target=e,r.map=i,r.key=n),r.track()}}function Ur(e,t,n,i,r,s){const a=ku.get(e);if(!a){Tu++;return}const o=l=>{l&&l.trigger()};if(Lp(),t==="clear")a.forEach(o);else{const l=Be(e),u=l&&Mp(n);if(l&&n==="length"){const c=Number(i);a.forEach((d,h)=>{(h==="length"||h===Au||!Ls(h)&&h>=c)&&o(d)})}else switch(n!==void 0&&o(a.get(n)),u&&o(a.get(Au)),t){case"add":l?u&&o(a.get("length")):(o(a.get(ga)),Ro(e)&&o(a.get(Dv)));break;case"delete":l||(o(a.get(ga)),Ro(e)&&o(a.get(Dv)));break;case"set":Ro(e)&&o(a.get(ga));break}}Fp()}function QD(e,t){var n;return(n=ku.get(e))==null?void 0:n.get(t)}function fo(e){const t=xe(e);return t===e?t:(Wn(t,"iterate",Au),Ri(e)?t:t.map(Mn))}function nh(e){return Wn(e=xe(e),"iterate",Au),e}const XD={__proto__:null,[Symbol.iterator](){return Fm(this,Symbol.iterator,Mn)},concat(...e){return fo(this).concat(...e.map(t=>Be(t)?fo(t):t))},entries(){return Fm(this,"entries",e=>(e[1]=Mn(e[1]),e))},every(e,t){return Ar(this,"every",e,t,void 0,arguments)},filter(e,t){return Ar(this,"filter",e,t,n=>n.map(Mn),arguments)},find(e,t){return Ar(this,"find",e,t,Mn,arguments)},findIndex(e,t){return Ar(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ar(this,"findLast",e,t,Mn,arguments)},findLastIndex(e,t){return Ar(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ar(this,"forEach",e,t,void 0,arguments)},includes(...e){return Bm(this,"includes",e)},indexOf(...e){return Bm(this,"indexOf",e)},join(e){return fo(this).join(e)},lastIndexOf(...e){return Bm(this,"lastIndexOf",e)},map(e,t){return Ar(this,"map",e,t,void 0,arguments)},pop(){return Hl(this,"pop")},push(...e){return Hl(this,"push",e)},reduce(e,...t){return Aw(this,"reduce",e,t)},reduceRight(e,...t){return Aw(this,"reduceRight",e,t)},shift(){return Hl(this,"shift")},some(e,t){return Ar(this,"some",e,t,void 0,arguments)},splice(...e){return Hl(this,"splice",e)},toReversed(){return fo(this).toReversed()},toSorted(e){return fo(this).toSorted(e)},toSpliced(...e){return fo(this).toSpliced(...e)},unshift(...e){return Hl(this,"unshift",e)},values(){return Fm(this,"values",Mn)}};function Fm(e,t,n){const i=nh(e),r=i[t]();return i!==e&&!Ri(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const JD=Array.prototype;function Ar(e,t,n,i,r,s){const a=nh(e),o=a!==e&&!Ri(e),l=a[t];if(l!==JD[t]){const d=l.apply(e,s);return o?Mn(d):d}let u=n;a!==e&&(o?u=function(d,h){return n.call(this,Mn(d),h,e)}:n.length>2&&(u=function(d,h){return n.call(this,d,h,e)}));const c=l.call(a,u,i);return o&&r?r(c):c}function Aw(e,t,n,i){const r=nh(e);let s=n;return r!==e&&(Ri(e)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,e)}):s=function(a,o,l){return n.call(this,a,Mn(o),l,e)}),r[t](s,...i)}function Bm(e,t,n){const i=xe(e);Wn(i,"iterate",Au);const r=i[t](...n);return(r===-1||r===!1)&&jp(n[0])?(n[0]=xe(n[0]),i[t](...n)):r}function Hl(e,t,n=[]){Bs(),Lp();const i=xe(e)[t].apply(e,n);return Fp(),$s(),i}const ZD=Dp("__proto__,__v_isRef,__isVue"),fC=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ls));function eN(e){Ls(e)||(e=String(e));const t=xe(this);return Wn(t,"has",e),t.hasOwnProperty(e)}class hC{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?hN:pC:s?gC:vC).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Be(t);if(!r){let l;if(a&&(l=XD[n]))return l;if(n==="hasOwnProperty")return eN}const o=Reflect.get(t,n,Bt(t)?t:i);return(Ls(n)?fC.has(n):ZD(n))||(r||Wn(t,"get",n),s)?o:Bt(o)?a&&Mp(n)?o:o.value:Rt(o)?r?fc(o):Ut(o):o}}class mC extends hC{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=Sa(s);if(!Ri(i)&&!Sa(i)&&(s=xe(s),i=xe(i)),!Be(t)&&Bt(s)&&!Bt(i))return l?!1:(s.value=i,!0)}const a=Be(t)&&Mp(n)?Number(n)<t.length:pt(t,n),o=Reflect.set(t,n,i,Bt(t)?t:r);return t===xe(r)&&(a?ii(i,s)&&Ur(t,"set",n,i):Ur(t,"add",n,i)),o}deleteProperty(t,n){const i=pt(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&Ur(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Ls(n)||!fC.has(n))&&Wn(t,"has",n),i}ownKeys(t){return Wn(t,"iterate",Be(t)?"length":ga),Reflect.ownKeys(t)}}class tN extends hC{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const nN=new mC,iN=new tN,rN=new mC(!0);const $p=e=>e,ih=e=>Reflect.getPrototypeOf(e);function sd(e,t,n=!1,i=!1){e=e.__v_raw;const r=xe(e),s=xe(t);n||(ii(t,s)&&Wn(r,"get",t),Wn(r,"get",s));const{has:a}=ih(r),o=i?$p:n?zp:Mn;if(a.call(r,t))return o(e.get(t));if(a.call(r,s))return o(e.get(s));e!==r&&e.get(t)}function ad(e,t=!1){const n=this.__v_raw,i=xe(n),r=xe(e);return t||(ii(e,r)&&Wn(i,"has",e),Wn(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function od(e,t=!1){return e=e.__v_raw,!t&&Wn(xe(e),"iterate",ga),Reflect.get(e,"size",e)}function Pw(e,t=!1){!t&&!Ri(e)&&!Sa(e)&&(e=xe(e));const n=xe(this);return ih(n).has.call(n,e)||(n.add(e),Ur(n,"add",e,e)),this}function Rw(e,t,n=!1){!n&&!Ri(t)&&!Sa(t)&&(t=xe(t));const i=xe(this),{has:r,get:s}=ih(i);let a=r.call(i,e);a||(e=xe(e),a=r.call(i,e));const o=s.call(i,e);return i.set(e,t),a?ii(t,o)&&Ur(i,"set",e,t):Ur(i,"add",e,t),this}function xw(e){const t=xe(this),{has:n,get:i}=ih(t);let r=n.call(t,e);r||(e=xe(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&Ur(t,"delete",e,void 0),s}function Vw(){const e=xe(this),t=e.size!==0,n=e.clear();return t&&Ur(e,"clear",void 0,void 0),n}function ld(e,t){return function(i,r){const s=this,a=s.__v_raw,o=xe(a),l=t?$p:e?zp:Mn;return!e&&Wn(o,"iterate",ga),a.forEach((u,c)=>i.call(r,l(u),l(c),s))}}function ud(e,t,n){return function(...i){const r=this.__v_raw,s=xe(r),a=Ro(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=r[e](...i),c=n?$p:t?zp:Mn;return!t&&Wn(s,"iterate",l?Dv:ga),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:o?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function cs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sN(){const e={get(s){return sd(this,s)},get size(){return od(this)},has:ad,add:Pw,set:Rw,delete:xw,clear:Vw,forEach:ld(!1,!1)},t={get(s){return sd(this,s,!1,!0)},get size(){return od(this)},has:ad,add(s){return Pw.call(this,s,!0)},set(s,a){return Rw.call(this,s,a,!0)},delete:xw,clear:Vw,forEach:ld(!1,!0)},n={get(s){return sd(this,s,!0)},get size(){return od(this,!0)},has(s){return ad.call(this,s,!0)},add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear"),forEach:ld(!0,!1)},i={get(s){return sd(this,s,!0,!0)},get size(){return od(this,!0)},has(s){return ad.call(this,s,!0)},add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear"),forEach:ld(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ud(s,!1,!1),n[s]=ud(s,!0,!1),t[s]=ud(s,!1,!0),i[s]=ud(s,!0,!0)}),[e,n,t,i]}const[aN,oN,lN,uN]=sN();function Up(e,t){const n=t?e?uN:lN:e?oN:aN;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(pt(n,r)&&r in i?n:i,r,s)}const cN={get:Up(!1,!1)},dN={get:Up(!1,!0)},fN={get:Up(!0,!1)};const vC=new WeakMap,gC=new WeakMap,pC=new WeakMap,hN=new WeakMap;function mN(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vN(e){return e.__v_skip||!Object.isExtensible(e)?0:mN(FD(e))}function Ut(e){return Sa(e)?e:Hp(e,!1,nN,cN,vC)}function yC(e){return Hp(e,!1,rN,dN,gC)}function fc(e){return Hp(e,!0,iN,fN,pC)}function Hp(e,t,n,i,r){if(!Rt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const a=vN(e);if(a===0)return e;const o=new Proxy(e,a===2?i:n);return r.set(e,o),o}function xo(e){return Sa(e)?xo(e.__v_raw):!!(e&&e.__v_isReactive)}function Sa(e){return!!(e&&e.__v_isReadonly)}function Ri(e){return!!(e&&e.__v_isShallow)}function jp(e){return e?!!e.__v_raw:!1}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function Wp(e){return!pt(e,"__v_skip")&&Object.isExtensible(e)&&XE(e,"__v_skip",!0),e}const Mn=e=>Rt(e)?Ut(e):e,zp=e=>Rt(e)?fc(e):e;function Bt(e){return e?e.__v_isRef===!0:!1}function ee(e){return _C(e,!1)}function he(e){return _C(e,!0)}function _C(e,t){return Bt(e)?e:new gN(e,t)}class gN{constructor(t,n){this.dep=new th,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:xe(t),this._value=n?t:Mn(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ri(t)||Sa(t);t=i?t:xe(t),ii(t,n)&&(this._rawValue=t,this._value=i?t:Mn(t),this.dep.trigger())}}function it(e){return Bt(e)?e.value:e}function xr(e){return qe(e)?e():it(e)}const pN={get:(e,t,n)=>t==="__v_raw"?e:it(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Bt(r)&&!Bt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function bC(e){return xo(e)?e:new Proxy(e,pN)}class yN{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new th,{get:i,set:r}=t(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function _N(e){return new yN(e)}function Us(e){const t=Be(e)?new Array(e.length):{};for(const n in e)t[n]=wC(e,n);return t}class bN{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return QD(xe(this._object),this._key)}}class wN{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function G(e,t,n){return Bt(e)?e:qe(e)?new wN(e):Rt(e)&&arguments.length>1?wC(e,t,n):ee(e)}function wC(e,t,n){const i=e[t];return Bt(i)?i:new bN(e,t,n)}class SN{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new th(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tu-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return aC(this),!0}get value(){const t=this.dep.track();return uC(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function IN(e,t,n=!1){let i,r;return qe(e)?i=e:(i=e.get,r=e.set),new SN(i,r,n)}const cd={},Zd=new WeakMap;let sa;function EN(e,t=!1,n=sa){if(n){let i=Zd.get(n);i||Zd.set(n,i=[]),i.push(e)}}function CN(e,t,n=ft){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,u=A=>r?A:Ri(A)||r===!1||r===0?Nr(A,1):Nr(A);let c,d,h,v,g=!1,p=!1;if(Bt(e)?(d=()=>e.value,g=Ri(e)):xo(e)?(d=()=>u(e),g=!0):Be(e)?(p=!0,g=e.some(A=>xo(A)||Ri(A)),d=()=>e.map(A=>{if(Bt(A))return A.value;if(xo(A))return u(A);if(qe(A))return l?l(A,2):A()})):qe(e)?t?d=l?()=>l(e,2):e:d=()=>{if(h){Bs();try{h()}finally{$s()}}const A=sa;sa=c;try{return l?l(e,3,[v]):e(v)}finally{sa=A}}:d=sr,t&&r){const A=d,D=r===!0?1/0:r;d=()=>Nr(A(),D)}const y=iC(),I=()=>{c.stop(),y&&Op(y.effects,c)};if(s&&t){const A=t;t=(...D)=>{A(...D),I()}}let E=p?new Array(e.length).fill(cd):cd;const V=A=>{if(!(!(c.flags&1)||!c.dirty&&!A))if(t){const D=c.run();if(r||g||(p?D.some((N,R)=>ii(N,E[R])):ii(D,E))){h&&h();const N=sa;sa=c;try{const R=[D,E===cd?void 0:p&&E[0]===cd?[]:E,v];l?l(t,3,R):t(...R),E=D}finally{sa=N}}}else c.run()};return o&&o(V),c=new rC(d),c.scheduler=a?()=>a(V,!1):V,v=A=>EN(A,!1,c),h=c.onStop=()=>{const A=Zd.get(c);if(A){if(l)l(A,4);else for(const D of A)D();Zd.delete(c)}},t?i?V(!0):E=c.run():a?a(V.bind(null,!0),!0):c.run(),I.pause=c.pause.bind(c),I.resume=c.resume.bind(c),I.stop=I,I}function Nr(e,t=1/0,n){if(t<=0||!Rt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Bt(e))Nr(e.value,t,n);else if(Be(e))for(let i=0;i<e.length;i++)Nr(e[i],t,n);else if(GE(e)||Ro(e))e.forEach(i=>{Nr(i,t,n)});else if(QE(e)){for(const i in e)Nr(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Nr(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hc(e,t,n,i){try{return i?e(...i):e()}catch(r){rh(r,t,n)}}function ji(e,t,n,i){if(qe(e)){const r=hc(e,t,n,i);return r&&KE(r)&&r.catch(s=>{rh(s,t,n)}),r}if(Be(e)){const r=[];for(let s=0;s<e.length;s++)r.push(ji(e[s],t,n,i));return r}}function rh(e,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||ft;if(t){let o=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}o=o.parent}if(s){Bs(),hc(s,null,10,[e,l,u]),$s();return}}TN(e,n,r,i,a)}function TN(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}let Pu=!1,Nv=!1;const Xn=[];let er=0;const Vo=[];let gs=null,yo=0;const SC=Promise.resolve();let qp=null;function Qe(e){const t=qp||SC;return e?t.then(this?e.bind(this):e):t}function kN(e){let t=Pu?er+1:0,n=Xn.length;for(;t<n;){const i=t+n>>>1,r=Xn[i],s=Ru(r);s<e||s===e&&r.flags&2?t=i+1:n=i}return t}function Gp(e){if(!(e.flags&1)){const t=Ru(e),n=Xn[Xn.length-1];!n||!(e.flags&2)&&t>=Ru(n)?Xn.push(e):Xn.splice(kN(t),0,e),e.flags|=1,IC()}}function IC(){!Pu&&!Nv&&(Nv=!0,qp=SC.then(CC))}function AN(e){Be(e)?Vo.push(...e):gs&&e.id===-1?gs.splice(yo+1,0,e):e.flags&1||(Vo.push(e),e.flags|=1),IC()}function Dw(e,t,n=Pu?er+1:0){for(;n<Xn.length;n++){const i=Xn[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Xn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function EC(e){if(Vo.length){const t=[...new Set(Vo)].sort((n,i)=>Ru(n)-Ru(i));if(Vo.length=0,gs){gs.push(...t);return}for(gs=t,yo=0;yo<gs.length;yo++){const n=gs[yo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gs=null,yo=0}}const Ru=e=>e.id==null?e.flags&2?-1:1/0:e.id;function CC(e){Nv=!1,Pu=!0;try{for(er=0;er<Xn.length;er++){const t=Xn[er];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),hc(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;er<Xn.length;er++){const t=Xn[er];t&&(t.flags&=-2)}er=0,Xn.length=0,EC(),Pu=!1,qp=null,(Xn.length||Vo.length)&&CC()}}let hn=null,TC=null;function ef(e){const t=hn;return hn=e,TC=e&&e.type.__scopeId||null,t}function De(e,t=hn,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&Ww(-1);const s=ef(t);let a;try{a=e(...r)}finally{ef(s),i._d&&Ww(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xt(e,t){if(hn===null)return e;const n=ch(hn),i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,a,o,l=ft]=t[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&Nr(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function ea(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Bs(),ji(l,n,8,[e.el,o,e,t]),$s())}}const kC=Symbol("_vte"),AC=e=>e.__isTeleport,du=e=>e&&(e.disabled||e.disabled===""),PN=e=>e&&(e.defer||e.defer===""),Nw=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ow=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ov=(e,t)=>{const n=e&&e.to;return Ht(n)?t?t(n):null:n},RN={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,a,o,l,u){const{mc:c,pc:d,pbc:h,o:{insert:v,querySelector:g,createText:p,createComment:y}}=u,I=du(t.props);let{shapeFlag:E,children:V,dynamicChildren:A}=t;if(e==null){const D=t.el=p(""),N=t.anchor=p("");v(D,n,i),v(N,n,i);const R=(_,T)=>{E&16&&(r&&r.isCE&&(r.ce._teleportTarget=_),c(V,_,T,r,s,a,o,l))},b=()=>{const _=t.target=Ov(t.props,g),T=PC(_,t,p,v);_&&(a!=="svg"&&Nw(_)?a="svg":a!=="mathml"&&Ow(_)&&(a="mathml"),I||(R(_,T),Vd(t)))};I&&(R(n,N),Vd(t)),PN(t.props)?ni(b,s):b()}else{t.el=e.el,t.targetStart=e.targetStart;const D=t.anchor=e.anchor,N=t.target=e.target,R=t.targetAnchor=e.targetAnchor,b=du(e.props),_=b?n:N,T=b?D:R;if(a==="svg"||Nw(N)?a="svg":(a==="mathml"||Ow(N))&&(a="mathml"),A?(h(e.dynamicChildren,A,_,r,s,a,o),ny(e,t,!0)):l||d(e,t,_,T,r,s,a,o,!1),I)b?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):dd(t,n,D,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const k=t.target=Ov(t.props,g);k&&dd(t,k,null,u,0)}else b&&dd(t,N,R,u,1);Vd(t)}},remove(e,t,n,{um:i,o:{remove:r}},s){const{shapeFlag:a,children:o,anchor:l,targetStart:u,targetAnchor:c,target:d,props:h}=e;if(d&&(r(u),r(c)),s&&r(l),a&16){const v=s||!du(h);for(let g=0;g<o.length;g++){const p=o[g];i(p,t,n,v,!!p.dynamicChildren)}}},move:dd,hydrate:xN};function dd(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:a,anchor:o,shapeFlag:l,children:u,props:c}=e,d=s===2;if(d&&i(a,t,n),(!d||du(c))&&l&16)for(let h=0;h<u.length;h++)r(u[h],t,n,2);d&&i(o,t,n)}function xN(e,t,n,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:u,createText:c}},d){const h=t.target=Ov(t.props,l);if(h){const v=h._lpa||h.firstChild;if(t.shapeFlag&16)if(du(t.props))t.anchor=d(a(e),t,o(e),n,i,r,s),t.targetStart=v,t.targetAnchor=v&&a(v);else{t.anchor=a(e);let g=v;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")t.targetStart=g;else if(g.data==="teleport anchor"){t.targetAnchor=g,h._lpa=t.targetAnchor&&a(t.targetAnchor);break}}g=a(g)}t.targetAnchor||PC(h,t,c,u),d(v&&a(v),t,h,n,i,r,s)}Vd(t)}return t.anchor&&a(t.anchor)}const VN=RN;function Vd(e){const t=e.ctx;if(t&&t.ut){let n=e.targetStart;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}function PC(e,t,n,i){const r=t.targetStart=n(""),s=t.targetAnchor=n("");return r[kC]=s,e&&(i(r,e),i(s,e)),s}const ps=Symbol("_leaveCb"),fd=Symbol("_enterCb");function RC(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jt(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const ki=[Function,Array],xC={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ki,onEnter:ki,onAfterEnter:ki,onEnterCancelled:ki,onBeforeLeave:ki,onLeave:ki,onAfterLeave:ki,onLeaveCancelled:ki,onBeforeAppear:ki,onAppear:ki,onAfterAppear:ki,onAppearCancelled:ki},VC=e=>{const t=e.subTree;return t.component?VC(t.component):t},DN={name:"BaseTransition",props:xC,setup(e,{slots:t}){const n=Ua(),i=RC();return()=>{const r=t.default&&Kp(t.default(),!0);if(!r||!r.length)return;const s=DC(r),a=xe(e),{mode:o}=a;if(i.isLeaving)return $m(s);const l=Mw(s);if(!l)return $m(s);let u=xu(l,a,i,n,h=>u=h);l.type!==$n&&Ia(l,u);const c=n.subTree,d=c&&Mw(c);if(d&&d.type!==$n&&!ua(l,d)&&VC(n).type!==$n){const h=xu(d,a,i,n);if(Ia(d,h),o==="out-in"&&l.type!==$n)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},$m(s);o==="in-out"&&l.type!==$n&&(h.delayLeave=(v,g,p)=>{const y=NC(i,d);y[String(d.key)]=d,v[ps]=()=>{g(),v[ps]=void 0,delete u.delayedLeave},u.delayedLeave=p})}return s}}};function DC(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==$n){t=n;break}}return t}const NN=DN;function NC(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function xu(e,t,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:v,onAfterLeave:g,onLeaveCancelled:p,onBeforeAppear:y,onAppear:I,onAfterAppear:E,onAppearCancelled:V}=t,A=String(e.key),D=NC(n,e),N=(_,T)=>{_&&ji(_,i,9,T)},R=(_,T)=>{const k=T[1];N(_,T),Be(_)?_.every(C=>C.length<=1)&&k():_.length<=1&&k()},b={mode:a,persisted:o,beforeEnter(_){let T=l;if(!n.isMounted)if(s)T=y||l;else return;_[ps]&&_[ps](!0);const k=D[A];k&&ua(e,k)&&k.el[ps]&&k.el[ps](),N(T,[_])},enter(_){let T=u,k=c,C=d;if(!n.isMounted)if(s)T=I||u,k=E||c,C=V||d;else return;let P=!1;const B=_[fd]=W=>{P||(P=!0,W?N(C,[_]):N(k,[_]),b.delayedLeave&&b.delayedLeave(),_[fd]=void 0)};T?R(T,[_,B]):B()},leave(_,T){const k=String(e.key);if(_[fd]&&_[fd](!0),n.isUnmounting)return T();N(h,[_]);let C=!1;const P=_[ps]=B=>{C||(C=!0,T(),B?N(p,[_]):N(g,[_]),_[ps]=void 0,D[k]===e&&delete D[k])};D[k]=e,v?R(v,[_,P]):P()},clone(_){const T=xu(_,t,n,i,r);return r&&r(T),T}};return b}function $m(e){if(sh(e))return e=ur(e),e.children=null,e}function Mw(e){if(!sh(e))return AC(e.type)&&e.children?DC(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&qe(n.default))return n.default()}}function Ia(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ia(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Kp(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===we?(a.patchFlag&128&&r++,i=i.concat(Kp(a.children,t,o))):(t||a.type!==$n)&&i.push(o!=null?ur(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Hs(e,t){return qe(e)?Xt({name:e.name},t,{setup:e}):e}function OC(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function bQ(e){const t=Ua(),n=he(null);if(t){const r=t.refs===ft?t.refs={}:t.refs;Object.defineProperty(r,e,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}function Mv(e,t,n,i,r=!1){if(Be(e)){e.forEach((g,p)=>Mv(g,t&&(Be(t)?t[p]:t),n,i,r));return}if(Do(i)&&!r)return;const s=i.shapeFlag&4?ch(i.component):i.el,a=r?null:s,{i:o,r:l}=e,u=t&&t.r,c=o.refs===ft?o.refs={}:o.refs,d=o.setupState,h=xe(d),v=d===ft?()=>!1:g=>pt(h,g);if(u!=null&&u!==l&&(Ht(u)?(c[u]=null,v(u)&&(d[u]=null)):Bt(u)&&(u.value=null)),qe(l))hc(l,o,12,[a,c]);else{const g=Ht(l),p=Bt(l);if(g||p){const y=()=>{if(e.f){const I=g?v(l)?d[l]:c[l]:l.value;r?Be(I)&&Op(I,s):Be(I)?I.includes(s)||I.push(s):g?(c[l]=[s],v(l)&&(d[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else g?(c[l]=a,v(l)&&(d[l]=a)):p&&(l.value=a,e.k&&(c[e.k]=a))};a?(y.id=-1,ni(y,n)):y()}}}const Do=e=>!!e.type.__asyncLoader,sh=e=>e.type.__isKeepAlive;function MC(e,t){LC(e,"a",t)}function Yp(e,t){LC(e,"da",t)}function LC(e,t,n=In){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ah(t,i,n),n){let r=n.parent;for(;r&&r.parent;)sh(r.parent.vnode)&&ON(i,t,n,r),r=r.parent}}function ON(e,t,n,i){const r=ah(t,e,i,!0);mc(()=>{Op(i[t],r)},n)}function ah(e,t,n=In,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{Bs();const o=gc(n),l=ji(t,n,e,a);return o(),$s(),l});return i?r.unshift(s):r.push(s),s}}const Jr=e=>(t,n=In)=>{(!uh||e==="sp")&&ah(e,(...i)=>t(...i),n)},Qp=Jr("bm"),jt=Jr("m"),FC=Jr("bu"),Xp=Jr("u"),vn=Jr("bum"),mc=Jr("um"),BC=Jr("sp"),MN=Jr("rtg"),LN=Jr("rtc");function FN(e,t=In){ah("ec",e,t)}const Jp="components",BN="directives";function kt(e,t){return Zp(Jp,e,!0,t)||e}const $C=Symbol.for("v-ndc");function UC(e){return Ht(e)?Zp(Jp,e,!1)||e:e||$C}function oi(e){return Zp(BN,e)}function Zp(e,t,n=!0,i=!1){const r=hn||In;if(r){const s=r.type;if(e===Jp){const o=CO(s,!1);if(o&&(o===t||o===ai(t)||o===gr(ai(t))))return s}const a=Lw(r[e]||s[e],t)||Lw(r.appContext[e],t);return!a&&i?s:a}}function Lw(e,t){return e&&(e[t]||e[ai(t)]||e[gr(ai(t))])}function $N(e,t,n,i){let r;const s=n,a=Be(e);if(a||Ht(e)){const o=a&&xo(e);let l=!1;o&&(l=!Ri(e),e=nh(e)),r=new Array(e.length);for(let u=0,c=e.length;u<c;u++)r[u]=t(l?Mn(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,s)}else if(Rt(e))if(e[Symbol.iterator])r=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=t(e[c],c,l,s)}}else r=[];return r}function wQ(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(Be(i))for(let r=0;r<i.length;r++)e[i[r].name]=i[r].fn;else i&&(e[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return e}function SQ(e,t,n={},i,r){if(hn.ce||hn.parent&&Do(hn.parent)&&hn.parent.ce)return n.name=t,bn(),ci(we,null,[m("slot",n,i)],64);let s=e[t];s&&s._c&&(s._d=!1),bn();const a=s&&HC(s(n)),o=ci(we,{key:(n.key||a&&a.key||`_${t}`)+(!a&&i?"_fb":"")},a||[],a&&e._===1?64:-2);return o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function HC(e){return e.some(t=>Ea(t)?!(t.type===$n||t.type===we&&!HC(t.children)):!0)?e:null}const Lv=e=>e?oT(e)?ch(e):Lv(e.parent):null,fu=Xt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lv(e.parent),$root:e=>Lv(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ey(e),$forceUpdate:e=>e.f||(e.f=()=>{Gp(e.update)}),$nextTick:e=>e.n||(e.n=Qe.bind(e.proxy)),$watch:e=>lO.bind(e)}),Um=(e,t)=>e!==ft&&!e.__isScriptSetup&&pt(e,t),UN={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=e;let u;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Um(i,t))return a[t]=1,i[t];if(r!==ft&&pt(r,t))return a[t]=2,r[t];if((u=e.propsOptions[0])&&pt(u,t))return a[t]=3,s[t];if(n!==ft&&pt(n,t))return a[t]=4,n[t];Fv&&(a[t]=0)}}const c=fu[t];let d,h;if(c)return t==="$attrs"&&Wn(e.attrs,"get",""),c(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==ft&&pt(n,t))return a[t]=4,n[t];if(h=l.config.globalProperties,pt(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return Um(r,t)?(r[t]=n,!0):i!==ft&&pt(i,t)?(i[t]=n,!0):pt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||e!==ft&&pt(e,a)||Um(t,a)||(o=s[0])&&pt(o,a)||pt(i,a)||pt(fu,a)||pt(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function tf(e){return Be(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function IQ(e,t){return!e||!t?e||t:Be(e)&&Be(t)?e.concat(t):Xt({},tf(e),tf(t))}let Fv=!0;function HN(e){const t=ey(e),n=e.proxy,i=e.ctx;Fv=!1,t.beforeCreate&&Fw(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:d,mounted:h,beforeUpdate:v,updated:g,activated:p,deactivated:y,beforeDestroy:I,beforeUnmount:E,destroyed:V,unmounted:A,render:D,renderTracked:N,renderTriggered:R,errorCaptured:b,serverPrefetch:_,expose:T,inheritAttrs:k,components:C,directives:P,filters:B}=t;if(u&&jN(u,i,null),a)for(const se in a){const z=a[se];qe(z)&&(i[se]=z.bind(n))}if(r){const se=r.call(n,n);Rt(se)&&(e.data=Ut(se))}if(Fv=!0,s)for(const se in s){const z=s[se],U=qe(z)?z.bind(n,n):qe(z.get)?z.get.bind(n,n):sr,$=!qe(z)&&qe(z.set)?z.set.bind(n):sr,q=S({get:U,set:$});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>q.value,set:ne=>q.value=ne})}if(o)for(const se in o)jC(o[se],i,n,se);if(l){const se=qe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(z=>{vt(z,se[z])})}c&&Fw(c,e,"c");function Y(se,z){Be(z)?z.forEach(U=>se(U.bind(n))):z&&se(z.bind(n))}if(Y(Qp,d),Y(jt,h),Y(FC,v),Y(Xp,g),Y(MC,p),Y(Yp,y),Y(FN,b),Y(LN,N),Y(MN,R),Y(vn,E),Y(mc,A),Y(BC,_),Be(T))if(T.length){const se=e.exposed||(e.exposed={});T.forEach(z=>{Object.defineProperty(se,z,{get:()=>n[z],set:U=>n[z]=U})})}else e.exposed||(e.exposed={});D&&e.render===sr&&(e.render=D),k!=null&&(e.inheritAttrs=k),C&&(e.components=C),P&&(e.directives=P),_&&OC(e)}function jN(e,t,n=sr){Be(e)&&(e=Bv(e));for(const i in e){const r=e[i];let s;Rt(r)?"default"in r?s=$e(r.from||i,r.default,!0):s=$e(r.from||i):s=$e(r),Bt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function Fw(e,t,n){ji(Be(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function jC(e,t,n,i){let r=i.includes(".")?tT(n,i):()=>n[i];if(Ht(e)){const s=t[e];qe(s)&&ve(r,s)}else if(qe(e))ve(r,e.bind(n));else if(Rt(e))if(Be(e))e.forEach(s=>jC(s,t,n,i));else{const s=qe(e.handler)?e.handler.bind(n):t[e.handler];qe(s)&&ve(r,s,e)}}function ey(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>nf(l,u,a,!0)),nf(l,t,a)),Rt(t)&&s.set(t,l),l}function nf(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&nf(e,s,n,!0),r&&r.forEach(a=>nf(e,a,n,!0));for(const a in t)if(!(i&&a==="expose")){const o=WN[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const WN={data:Bw,props:$w,emits:$w,methods:Zl,computed:Zl,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:Zl,directives:Zl,watch:qN,provide:Bw,inject:zN};function Bw(e,t){return t?e?function(){return Xt(qe(e)?e.call(this,this):e,qe(t)?t.call(this,this):t)}:t:e}function zN(e,t){return Zl(Bv(e),Bv(t))}function Bv(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yn(e,t){return e?[...new Set([].concat(e,t))]:t}function Zl(e,t){return e?Xt(Object.create(null),e,t):t}function $w(e,t){return e?Be(e)&&Be(t)?[...new Set([...e,...t])]:Xt(Object.create(null),tf(e),tf(t??{})):t}function qN(e,t){if(!e)return t;if(!t)return e;const n=Xt(Object.create(null),e);for(const i in t)n[i]=Yn(e[i],t[i]);return n}function WC(){return{app:null,config:{isNativeTag:MD,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GN=0;function KN(e,t){return function(i,r=null){qe(i)||(i=Xt({},i)),r!=null&&!Rt(r)&&(r=null);const s=WC(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:GN++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kO,get config(){return s.config},set config(c){},use(c,...d){return a.has(c)||(c&&qe(c.install)?(a.add(c),c.install(u,...d)):qe(c)&&(a.add(c),c(u,...d))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,d){return d?(s.components[c]=d,u):s.components[c]},directive(c,d){return d?(s.directives[c]=d,u):s.directives[c]},mount(c,d,h){if(!l){const v=u._ceVNode||m(i,r);return v.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),d&&t?t(v,c):e(v,c,h),l=!0,u._container=c,c.__vue_app__=u,ch(v.component)}},onUnmount(c){o.push(c)},unmount(){l&&(ji(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return s.provides[c]=d,u},runWithContext(c){const d=No;No=u;try{return c()}finally{No=d}}};return u}}let No=null;function vt(e,t){if(In){let n=In.provides;const i=In.parent&&In.parent.provides;i===n&&(n=In.provides=Object.create(i)),n[e]=t}}function $e(e,t,n=!1){const i=In||hn;if(i||No){const r=No?No._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&qe(t)?t.call(i&&i.proxy):t}}const zC={},qC=()=>Object.create(zC),GC=e=>Object.getPrototypeOf(e)===zC;function YN(e,t,n,i=!1){const r={},s=qC();e.propsDefaults=Object.create(null),KC(e,t,r,s);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=i?r:yC(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function QN(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=e,o=xe(r),[l]=e.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(lh(e.emitsOptions,h))continue;const v=t[h];if(l)if(pt(s,h))v!==s[h]&&(s[h]=v,u=!0);else{const g=ai(h);r[g]=$v(l,o,g,v,e,!1)}else v!==s[h]&&(s[h]=v,u=!0)}}}else{KC(e,t,r,s)&&(u=!0);let c;for(const d in o)(!t||!pt(t,d)&&((c=Fs(d))===d||!pt(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=$v(l,o,d,void 0,e,!0)):delete r[d]);if(s!==o)for(const d in s)(!t||!pt(t,d))&&(delete s[d],u=!0)}u&&Ur(e.attrs,"set","")}function KC(e,t,n,i){const[r,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(uu(l))continue;const u=t[l];let c;r&&pt(r,c=ai(l))?!s||!s.includes(c)?n[c]=u:(o||(o={}))[c]=u:lh(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=xe(n),u=o||ft;for(let c=0;c<s.length;c++){const d=s[c];n[d]=$v(r,l,d,u[d],e,!pt(u,d))}}return a}function $v(e,t,n,i,r,s){const a=e[n];if(a!=null){const o=pt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&qe(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=gc(r);i=u[n]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Fs(n))&&(i=!0))}return i}const XN=new WeakMap;function YC(e,t,n=!1){const i=n?XN:t.propsCache,r=i.get(e);if(r)return r;const s=e.props,a={},o=[];let l=!1;if(!qe(e)){const c=d=>{l=!0;const[h,v]=YC(d,t,!0);Xt(a,h),v&&o.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return Rt(e)&&i.set(e,Po),Po;if(Be(s))for(let c=0;c<s.length;c++){const d=ai(s[c]);Uw(d)&&(a[d]=ft)}else if(s)for(const c in s){const d=ai(c);if(Uw(d)){const h=s[c],v=a[d]=Be(h)||qe(h)?{type:h}:Xt({},h),g=v.type;let p=!1,y=!0;if(Be(g))for(let I=0;I<g.length;++I){const E=g[I],V=qe(E)&&E.name;if(V==="Boolean"){p=!0;break}else V==="String"&&(y=!1)}else p=qe(g)&&g.name==="Boolean";v[0]=p,v[1]=y,(p||pt(v,"default"))&&o.push(d)}}const u=[a,o];return Rt(e)&&i.set(e,u),u}function Uw(e){return e[0]!=="$"&&!uu(e)}const QC=e=>e[0]==="_"||e==="$stable",ty=e=>Be(e)?e.map(tr):[tr(e)],JN=(e,t,n)=>{if(t._n)return t;const i=De((...r)=>ty(t(...r)),n);return i._c=!1,i},XC=(e,t,n)=>{const i=e._ctx;for(const r in e){if(QC(r))continue;const s=e[r];if(qe(s))t[r]=JN(r,s,i);else if(s!=null){const a=ty(s);t[r]=()=>a}}},JC=(e,t)=>{const n=ty(t);e.slots.default=()=>n},ZC=(e,t,n)=>{for(const i in t)(n||i!=="_")&&(e[i]=t[i])},ZN=(e,t,n)=>{const i=e.slots=qC();if(e.vnode.shapeFlag&32){const r=t._;r?(ZC(i,t,n),n&&XE(i,"_",r,!0)):XC(t,i)}else t&&JC(e,t)},eO=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,a=ft;if(i.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:ZC(r,t,n):(s=!t.$stable,XC(t,r)),a=t}else t&&(JC(e,t),a={default:1});if(s)for(const o in r)!QC(o)&&a[o]==null&&delete r[o]},ni=mO;function tO(e){return nO(e)}function nO(e,t){const n=JE();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:h,setScopeId:v=sr,insertStaticContent:g}=e,p=(O,M,H,Z=null,X=null,le=null,be=void 0,de=null,_e=!!M.dynamicChildren)=>{if(O===M)return;O&&!ua(O,M)&&(Z=j(O),ne(O,X,le,!0),O=null),M.patchFlag===-2&&(_e=!1,M.dynamicChildren=null);const{type:fe,ref:Me,shapeFlag:Ce}=M;switch(fe){case vc:y(O,M,H,Z);break;case $n:I(O,M,H,Z);break;case Wm:O==null&&E(M,H,Z,be);break;case we:C(O,M,H,Z,X,le,be,de,_e);break;default:Ce&1?D(O,M,H,Z,X,le,be,de,_e):Ce&6?P(O,M,H,Z,X,le,be,de,_e):(Ce&64||Ce&128)&&fe.process(O,M,H,Z,X,le,be,de,_e,ue)}Me!=null&&X&&Mv(Me,O&&O.ref,le,M||O,!M)},y=(O,M,H,Z)=>{if(O==null)i(M.el=o(M.children),H,Z);else{const X=M.el=O.el;M.children!==O.children&&u(X,M.children)}},I=(O,M,H,Z)=>{O==null?i(M.el=l(M.children||""),H,Z):M.el=O.el},E=(O,M,H,Z)=>{[O.el,O.anchor]=g(O.children,M,H,Z,O.el,O.anchor)},V=({el:O,anchor:M},H,Z)=>{let X;for(;O&&O!==M;)X=h(O),i(O,H,Z),O=X;i(M,H,Z)},A=({el:O,anchor:M})=>{let H;for(;O&&O!==M;)H=h(O),r(O),O=H;r(M)},D=(O,M,H,Z,X,le,be,de,_e)=>{M.type==="svg"?be="svg":M.type==="math"&&(be="mathml"),O==null?N(M,H,Z,X,le,be,de,_e):_(O,M,X,le,be,de,_e)},N=(O,M,H,Z,X,le,be,de)=>{let _e,fe;const{props:Me,shapeFlag:Ce,transition:Ne,dirs:Ve}=O;if(_e=O.el=a(O.type,le,Me&&Me.is,Me),Ce&8?c(_e,O.children):Ce&16&&b(O.children,_e,null,Z,X,Hm(O,le),be,de),Ve&&ea(O,null,Z,"created"),R(_e,O,O.scopeId,be,Z),Me){for(const mt in Me)mt!=="value"&&!uu(mt)&&s(_e,mt,null,Me[mt],le,Z);"value"in Me&&s(_e,"value",null,Me.value,le),(fe=Me.onVnodeBeforeMount)&&Zi(fe,Z,O)}Ve&&ea(O,null,Z,"beforeMount");const Ue=iO(X,Ne);Ue&&Ne.beforeEnter(_e),i(_e,M,H),((fe=Me&&Me.onVnodeMounted)||Ue||Ve)&&ni(()=>{fe&&Zi(fe,Z,O),Ue&&Ne.enter(_e),Ve&&ea(O,null,Z,"mounted")},X)},R=(O,M,H,Z,X)=>{if(H&&v(O,H),Z)for(let le=0;le<Z.length;le++)v(O,Z[le]);if(X){let le=X.subTree;if(M===le||rT(le.type)&&(le.ssContent===M||le.ssFallback===M)){const be=X.vnode;R(O,be,be.scopeId,be.slotScopeIds,X.parent)}}},b=(O,M,H,Z,X,le,be,de,_e=0)=>{for(let fe=_e;fe<O.length;fe++){const Me=O[fe]=de?ys(O[fe]):tr(O[fe]);p(null,Me,M,H,Z,X,le,be,de)}},_=(O,M,H,Z,X,le,be)=>{const de=M.el=O.el;let{patchFlag:_e,dynamicChildren:fe,dirs:Me}=M;_e|=O.patchFlag&16;const Ce=O.props||ft,Ne=M.props||ft;let Ve;if(H&&ta(H,!1),(Ve=Ne.onVnodeBeforeUpdate)&&Zi(Ve,H,M,O),Me&&ea(M,O,H,"beforeUpdate"),H&&ta(H,!0),(Ce.innerHTML&&Ne.innerHTML==null||Ce.textContent&&Ne.textContent==null)&&c(de,""),fe?T(O.dynamicChildren,fe,de,H,Z,Hm(M,X),le):be||z(O,M,de,null,H,Z,Hm(M,X),le,!1),_e>0){if(_e&16)k(de,Ce,Ne,H,X);else if(_e&2&&Ce.class!==Ne.class&&s(de,"class",null,Ne.class,X),_e&4&&s(de,"style",Ce.style,Ne.style,X),_e&8){const Ue=M.dynamicProps;for(let mt=0;mt<Ue.length;mt++){const ut=Ue[mt],Rn=Ce[ut],un=Ne[ut];(un!==Rn||ut==="value")&&s(de,ut,Rn,un,X,H)}}_e&1&&O.children!==M.children&&c(de,M.children)}else!be&&fe==null&&k(de,Ce,Ne,H,X);((Ve=Ne.onVnodeUpdated)||Me)&&ni(()=>{Ve&&Zi(Ve,H,M,O),Me&&ea(M,O,H,"updated")},Z)},T=(O,M,H,Z,X,le,be)=>{for(let de=0;de<M.length;de++){const _e=O[de],fe=M[de],Me=_e.el&&(_e.type===we||!ua(_e,fe)||_e.shapeFlag&70)?d(_e.el):H;p(_e,fe,Me,null,Z,X,le,be,!0)}},k=(O,M,H,Z,X)=>{if(M!==H){if(M!==ft)for(const le in M)!uu(le)&&!(le in H)&&s(O,le,M[le],null,X,Z);for(const le in H){if(uu(le))continue;const be=H[le],de=M[le];be!==de&&le!=="value"&&s(O,le,de,be,X,Z)}"value"in H&&s(O,"value",M.value,H.value,X)}},C=(O,M,H,Z,X,le,be,de,_e)=>{const fe=M.el=O?O.el:o(""),Me=M.anchor=O?O.anchor:o("");let{patchFlag:Ce,dynamicChildren:Ne,slotScopeIds:Ve}=M;Ve&&(de=de?de.concat(Ve):Ve),O==null?(i(fe,H,Z),i(Me,H,Z),b(M.children||[],H,Me,X,le,be,de,_e)):Ce>0&&Ce&64&&Ne&&O.dynamicChildren?(T(O.dynamicChildren,Ne,H,X,le,be,de),(M.key!=null||X&&M===X.subTree)&&ny(O,M,!0)):z(O,M,H,Me,X,le,be,de,_e)},P=(O,M,H,Z,X,le,be,de,_e)=>{M.slotScopeIds=de,O==null?M.shapeFlag&512?X.ctx.activate(M,H,Z,be,_e):B(M,H,Z,X,le,be,_e):W(O,M,_e)},B=(O,M,H,Z,X,le,be)=>{const de=O.component=bO(O,Z,X);if(sh(O)&&(de.ctx.renderer=ue),wO(de,!1,be),de.asyncDep){if(X&&X.registerDep(de,Y,be),!O.el){const _e=de.subTree=m($n);I(null,_e,M,H)}}else Y(de,O,M,H,X,le,be)},W=(O,M,H)=>{const Z=M.component=O.component;if(fO(O,M,H))if(Z.asyncDep&&!Z.asyncResolved){se(Z,M,H);return}else Z.next=M,Z.update();else M.el=O.el,Z.vnode=M},Y=(O,M,H,Z,X,le,be)=>{const de=()=>{if(O.isMounted){let{next:Ce,bu:Ne,u:Ve,parent:Ue,vnode:mt}=O;{const xn=eT(O);if(xn){Ce&&(Ce.el=mt.el,se(O,Ce,be)),xn.asyncDep.then(()=>{O.isUnmounted||de()});return}}let ut=Ce,Rn;ta(O,!1),Ce?(Ce.el=mt.el,se(O,Ce,be)):Ce=mt,Ne&&xd(Ne),(Rn=Ce.props&&Ce.props.onVnodeBeforeUpdate)&&Zi(Rn,Ue,Ce,mt),ta(O,!0);const un=jm(O),yn=O.subTree;O.subTree=un,p(yn,un,d(yn.el),j(yn),O,X,le),Ce.el=un.el,ut===null&&hO(O,un.el),Ve&&ni(Ve,X),(Rn=Ce.props&&Ce.props.onVnodeUpdated)&&ni(()=>Zi(Rn,Ue,Ce,mt),X)}else{let Ce;const{el:Ne,props:Ve}=M,{bm:Ue,m:mt,parent:ut,root:Rn,type:un}=O,yn=Do(M);if(ta(O,!1),Ue&&xd(Ue),!yn&&(Ce=Ve&&Ve.onVnodeBeforeMount)&&Zi(Ce,ut,M),ta(O,!0),Ne&&Ee){const xn=()=>{O.subTree=jm(O),Ee(Ne,O.subTree,O,X,null)};yn&&un.__asyncHydrate?un.__asyncHydrate(Ne,O,xn):xn()}else{Rn.ce&&Rn.ce._injectChildStyle(un);const xn=O.subTree=jm(O);p(null,xn,H,Z,O,X,le),M.el=xn.el}if(mt&&ni(mt,X),!yn&&(Ce=Ve&&Ve.onVnodeMounted)){const xn=M;ni(()=>Zi(Ce,ut,xn),X)}(M.shapeFlag&256||ut&&Do(ut.vnode)&&ut.vnode.shapeFlag&256)&&O.a&&ni(O.a,X),O.isMounted=!0,M=H=Z=null}};O.scope.on();const _e=O.effect=new rC(de);O.scope.off();const fe=O.update=_e.run.bind(_e),Me=O.job=_e.runIfDirty.bind(_e);Me.i=O,Me.id=O.uid,_e.scheduler=()=>Gp(Me),ta(O,!0),fe()},se=(O,M,H)=>{M.component=O;const Z=O.vnode.props;O.vnode=M,O.next=null,QN(O,M.props,Z,H),eO(O,M.children,H),Bs(),Dw(O),$s()},z=(O,M,H,Z,X,le,be,de,_e=!1)=>{const fe=O&&O.children,Me=O?O.shapeFlag:0,Ce=M.children,{patchFlag:Ne,shapeFlag:Ve}=M;if(Ne>0){if(Ne&128){$(fe,Ce,H,Z,X,le,be,de,_e);return}else if(Ne&256){U(fe,Ce,H,Z,X,le,be,de,_e);return}}Ve&8?(Me&16&&ie(fe,X,le),Ce!==fe&&c(H,Ce)):Me&16?Ve&16?$(fe,Ce,H,Z,X,le,be,de,_e):ie(fe,X,le,!0):(Me&8&&c(H,""),Ve&16&&b(Ce,H,Z,X,le,be,de,_e))},U=(O,M,H,Z,X,le,be,de,_e)=>{O=O||Po,M=M||Po;const fe=O.length,Me=M.length,Ce=Math.min(fe,Me);let Ne;for(Ne=0;Ne<Ce;Ne++){const Ve=M[Ne]=_e?ys(M[Ne]):tr(M[Ne]);p(O[Ne],Ve,H,null,X,le,be,de,_e)}fe>Me?ie(O,X,le,!0,!1,Ce):b(M,H,Z,X,le,be,de,_e,Ce)},$=(O,M,H,Z,X,le,be,de,_e)=>{let fe=0;const Me=M.length;let Ce=O.length-1,Ne=Me-1;for(;fe<=Ce&&fe<=Ne;){const Ve=O[fe],Ue=M[fe]=_e?ys(M[fe]):tr(M[fe]);if(ua(Ve,Ue))p(Ve,Ue,H,null,X,le,be,de,_e);else break;fe++}for(;fe<=Ce&&fe<=Ne;){const Ve=O[Ce],Ue=M[Ne]=_e?ys(M[Ne]):tr(M[Ne]);if(ua(Ve,Ue))p(Ve,Ue,H,null,X,le,be,de,_e);else break;Ce--,Ne--}if(fe>Ce){if(fe<=Ne){const Ve=Ne+1,Ue=Ve<Me?M[Ve].el:Z;for(;fe<=Ne;)p(null,M[fe]=_e?ys(M[fe]):tr(M[fe]),H,Ue,X,le,be,de,_e),fe++}}else if(fe>Ne)for(;fe<=Ce;)ne(O[fe],X,le,!0),fe++;else{const Ve=fe,Ue=fe,mt=new Map;for(fe=Ue;fe<=Ne;fe++){const Gn=M[fe]=_e?ys(M[fe]):tr(M[fe]);Gn.key!=null&&mt.set(Gn.key,fe)}let ut,Rn=0;const un=Ne-Ue+1;let yn=!1,xn=0;const ss=new Array(un);for(fe=0;fe<un;fe++)ss[fe]=0;for(fe=Ve;fe<=Ce;fe++){const Gn=O[fe];if(Rn>=un){ne(Gn,X,le,!0);continue}let Ti;if(Gn.key!=null)Ti=mt.get(Gn.key);else for(ut=Ue;ut<=Ne;ut++)if(ss[ut-Ue]===0&&ua(Gn,M[ut])){Ti=ut;break}Ti===void 0?ne(Gn,X,le,!0):(ss[Ti-Ue]=fe+1,Ti>=xn?xn=Ti:yn=!0,p(Gn,M[Ti],H,null,X,le,be,de,_e),Rn++)}const so=yn?rO(ss):Po;for(ut=so.length-1,fe=un-1;fe>=0;fe--){const Gn=Ue+fe,Ti=M[Gn],ao=Gn+1<Me?M[Gn+1].el:Z;ss[fe]===0?p(null,Ti,H,ao,X,le,be,de,_e):yn&&(ut<0||fe!==so[ut]?q(Ti,H,ao,2):ut--)}}},q=(O,M,H,Z,X=null)=>{const{el:le,type:be,transition:de,children:_e,shapeFlag:fe}=O;if(fe&6){q(O.component.subTree,M,H,Z);return}if(fe&128){O.suspense.move(M,H,Z);return}if(fe&64){be.move(O,M,H,ue);return}if(be===we){i(le,M,H);for(let Ce=0;Ce<_e.length;Ce++)q(_e[Ce],M,H,Z);i(O.anchor,M,H);return}if(be===Wm){V(O,M,H);return}if(Z!==2&&fe&1&&de)if(Z===0)de.beforeEnter(le),i(le,M,H),ni(()=>de.enter(le),X);else{const{leave:Ce,delayLeave:Ne,afterLeave:Ve}=de,Ue=()=>i(le,M,H),mt=()=>{Ce(le,()=>{Ue(),Ve&&Ve()})};Ne?Ne(le,Ue,mt):mt()}else i(le,M,H)},ne=(O,M,H,Z=!1,X=!1)=>{const{type:le,props:be,ref:de,children:_e,dynamicChildren:fe,shapeFlag:Me,patchFlag:Ce,dirs:Ne,cacheIndex:Ve}=O;if(Ce===-2&&(X=!1),de!=null&&Mv(de,null,H,O,!0),Ve!=null&&(M.renderCache[Ve]=void 0),Me&256){M.ctx.deactivate(O);return}const Ue=Me&1&&Ne,mt=!Do(O);let ut;if(mt&&(ut=be&&be.onVnodeBeforeUnmount)&&Zi(ut,M,O),Me&6)Pe(O.component,H,Z);else{if(Me&128){O.suspense.unmount(H,Z);return}Ue&&ea(O,null,M,"beforeUnmount"),Me&64?O.type.remove(O,M,H,ue,Z):fe&&!fe.hasOnce&&(le!==we||Ce>0&&Ce&64)?ie(fe,M,H,!1,!0):(le===we&&Ce&384||!X&&Me&16)&&ie(_e,M,H),Z&&ge(O)}(mt&&(ut=be&&be.onVnodeUnmounted)||Ue)&&ni(()=>{ut&&Zi(ut,M,O),Ue&&ea(O,null,M,"unmounted")},H)},ge=O=>{const{type:M,el:H,anchor:Z,transition:X}=O;if(M===we){Se(H,Z);return}if(M===Wm){A(O);return}const le=()=>{r(H),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(O.shapeFlag&1&&X&&!X.persisted){const{leave:be,delayLeave:de}=X,_e=()=>be(H,le);de?de(O.el,le,_e):_e()}else le()},Se=(O,M)=>{let H;for(;O!==M;)H=h(O),r(O),O=H;r(M)},Pe=(O,M,H)=>{const{bum:Z,scope:X,job:le,subTree:be,um:de,m:_e,a:fe}=O;Hw(_e),Hw(fe),Z&&xd(Z),X.stop(),le&&(le.flags|=8,ne(be,O,M,H)),de&&ni(de,M),ni(()=>{O.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&O.asyncDep&&!O.asyncResolved&&O.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},ie=(O,M,H,Z=!1,X=!1,le=0)=>{for(let be=le;be<O.length;be++)ne(O[be],M,H,Z,X)},j=O=>{if(O.shapeFlag&6)return j(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const M=h(O.anchor||O.el),H=M&&M[kC];return H?h(H):M};let oe=!1;const me=(O,M,H)=>{O==null?M._vnode&&ne(M._vnode,null,null,!0):p(M._vnode||null,O,M,null,null,null,H),M._vnode=O,oe||(oe=!0,Dw(),EC(),oe=!1)},ue={p,um:ne,m:q,r:ge,mt:B,mc:b,pc:z,pbc:T,n:j,o:e};let re,Ee;return{render:me,hydrate:re,createApp:KN(me,re)}}function Hm({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ta({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function iO(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ny(e,t,n=!1){const i=e.children,r=t.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ys(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&ny(a,o)),o.type===vc&&(o.el=a.el)}}function rO(e){const t=e.slice(),n=[0];let i,r,s,a,o;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<u?s=o+1:a=o;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function eT(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:eT(t)}function Hw(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const sO=Symbol.for("v-scx"),aO=()=>$e(sO);function Ct(e,t){return oh(e,null,t)}function oO(e,t){return oh(e,null,{flush:"sync"})}function ve(e,t,n){return oh(e,t,n)}function oh(e,t,n=ft){const{immediate:i,deep:r,flush:s,once:a}=n,o=Xt({},n);let l;if(uh)if(s==="sync"){const h=aO();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||i)o.once=!0;else{const h=()=>{};return h.stop=sr,h.resume=sr,h.pause=sr,h}const u=In;o.call=(h,v,g)=>ji(h,u,v,g);let c=!1;s==="post"?o.scheduler=h=>{ni(h,u&&u.suspense)}:s!=="sync"&&(c=!0,o.scheduler=(h,v)=>{v?h():Gp(h)}),o.augmentJob=h=>{t&&(h.flags|=4),c&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=CN(e,t,o);return l&&l.push(d),d}function lO(e,t,n){const i=this.proxy,r=Ht(e)?e.includes(".")?tT(i,e):()=>i[e]:e.bind(i,i);let s;qe(t)?s=t:(s=t.handler,n=t);const a=gc(this),o=oh(r,s.bind(i),n);return a(),o}function tT(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function EQ(e,t,n=ft){const i=Ua(),r=ai(t),s=Fs(t),a=nT(e,t),o=_N((l,u)=>{let c,d=ft,h;return oO(()=>{const v=e[t];ii(c,v)&&(c=v,u())}),{get(){return l(),n.get?n.get(c):c},set(v){const g=n.set?n.set(v):v;if(!ii(g,c)&&!(d!==ft&&ii(v,d)))return;const p=i.vnode.props;p&&(t in p||r in p||s in p)&&(`onUpdate:${t}`in p||`onUpdate:${r}`in p||`onUpdate:${s}`in p)||(c=v,u()),i.emit(`update:${t}`,g),ii(v,g)&&ii(v,d)&&!ii(g,h)&&u(),d=v,h=g}}});return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?a||ft:o,done:!1}:{done:!0}}}},o}const nT=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ai(t)}Modifiers`]||e[`${Fs(t)}Modifiers`];function uO(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ft;let r=n;const s=t.startsWith("update:"),a=s&&nT(i,t.slice(7));a&&(a.trim&&(r=n.map(c=>Ht(c)?c.trim():c)),a.number&&(r=n.map(xv)));let o,l=i[o=Om(t)]||i[o=Om(ai(t))];!l&&s&&(l=i[o=Om(Fs(t))]),l&&ji(l,e,6,r);const u=i[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ji(u,e,6,r)}}function iT(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let a={},o=!1;if(!qe(e)){const l=u=>{const c=iT(u,t,!0);c&&(o=!0,Xt(a,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(Rt(e)&&i.set(e,null),null):(Be(s)?s.forEach(l=>a[l]=null):Xt(a,s),Rt(e)&&i.set(e,a),a)}function lh(e,t){return!e||!Qf(t)?!1:(t=t.slice(2).replace(/Once$/,""),pt(e,t[0].toLowerCase()+t.slice(1))||pt(e,Fs(t))||pt(e,t))}function jm(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:d,data:h,setupState:v,ctx:g,inheritAttrs:p}=e,y=ef(e);let I,E;try{if(n.shapeFlag&4){const A=r||i,D=A;I=tr(u.call(D,A,c,d,v,h,g)),E=o}else{const A=t;I=tr(A.length>1?A(d,{attrs:o,slots:a,emit:l}):A(d,null)),E=t.props?o:cO(o)}}catch(A){hu.length=0,rh(A,e,1),I=m($n)}let V=I;if(E&&p!==!1){const A=Object.keys(E),{shapeFlag:D}=V;A.length&&D&7&&(s&&A.some(Np)&&(E=dO(E,s)),V=ur(V,E,!1,!0))}return n.dirs&&(V=ur(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Ia(V,n.transition),I=V,ef(y),I}const cO=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qf(n))&&((t||(t={}))[n]=e[n]);return t},dO=(e,t)=>{const n={};for(const i in e)(!Np(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function fO(e,t,n){const{props:i,children:r,component:s}=e,{props:a,children:o,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?jw(i,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(a[h]!==i[h]&&!lh(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?jw(i,a,u):!0:!!a;return!1}function jw(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!lh(n,s))return!0}return!1}function hO({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const rT=e=>e.__isSuspense;function mO(e,t){t&&t.pendingBranch?Be(e)?t.effects.push(...e):t.effects.push(e):AN(e)}const we=Symbol.for("v-fgt"),vc=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),Wm=Symbol.for("v-stc"),hu=[];let mi=null;function bn(e=!1){hu.push(mi=e?null:[])}function vO(){hu.pop(),mi=hu[hu.length-1]||null}let Vu=1;function Ww(e){Vu+=e,e<0&&mi&&(mi.hasOnce=!0)}function sT(e){return e.dynamicChildren=Vu>0?mi||Po:null,vO(),Vu>0&&mi&&mi.push(e),e}function hd(e,t,n,i,r,s){return sT(Vr(e,t,n,i,r,s,!0))}function ci(e,t,n,i,r){return sT(m(e,t,n,i,r,!0))}function Ea(e){return e?e.__v_isVNode===!0:!1}function ua(e,t){return e.type===t.type&&e.key===t.key}const aT=({key:e})=>e??null,Dd=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ht(e)||Bt(e)||qe(e)?{i:hn,r:e,k:t,f:!!n}:e:null);function Vr(e,t=null,n=null,i=0,r=null,s=e===we?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&aT(t),ref:t&&Dd(t),scopeId:TC,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return o?(iy(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ht(n)?8:16),Vu>0&&!a&&mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mi.push(l),l}const m=gO;function gO(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===$C)&&(e=$n),Ea(e)){const o=ur(e,t,!0);return n&&iy(o,n),Vu>0&&!s&&mi&&(o.shapeFlag&6?mi[mi.indexOf(e)]=o:mi.push(o)),o.patchFlag=-2,o}if(TO(e)&&(e=e.__vccOpts),t){t=pO(t);let{class:o,style:l}=t;o&&!Ht(o)&&(t.class=eh(o)),Rt(l)&&(jp(l)&&!Be(l)&&(l=Xt({},l)),t.style=Zf(l))}const a=Ht(e)?1:rT(e)?128:AC(e)?64:Rt(e)?4:qe(e)?2:0;return Vr(e,t,n,i,r,a,s,!0)}function pO(e){return e?jp(e)||GC(e)?Xt({},e):e:null}function ur(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=e,u=t?K(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&aT(u),ref:t&&t.ref?n&&s?Be(s)?s.concat(Dd(t)):[s,Dd(t)]:Dd(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ur(e.ssContent),ssFallback:e.ssFallback&&ur(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Ia(c,l.clone(c)),c}function ot(e=" ",t=0){return m(vc,null,e,t)}function jl(e="",t=!1){return t?(bn(),ci($n,null,e)):m($n,null,e)}function tr(e){return e==null||typeof e=="boolean"?m($n):Be(e)?m(we,null,e.slice()):typeof e=="object"?ys(e):m(vc,null,String(e))}function ys(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ur(e)}function iy(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Be(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),iy(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!GC(t)?t._ctx=hn:r===3&&hn&&(hn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else qe(t)?(t={default:t,_ctx:hn},n=32):(t=String(t),i&64?(n=16,t=[ot(t)]):n=8);e.children=t,e.shapeFlag|=n}function K(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=eh([t.class,i.class]));else if(r==="style")t.style=Zf([t.style,i.style]);else if(Qf(r)){const s=t[r],a=i[r];a&&s!==a&&!(Be(s)&&s.includes(a))&&(t[r]=s?[].concat(s,a):a)}else r!==""&&(t[r]=i[r])}return t}function Zi(e,t,n,i=null){ji(e,t,7,[n,i])}const yO=WC();let _O=0;function bO(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||yO,s={uid:_O++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:YC(i,r),emitsOptions:iT(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=uO.bind(null,s),e.ce&&e.ce(s),s}let In=null;const Ua=()=>In||hn;let rf,Uv;{const e=JE(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};rf=t("__VUE_INSTANCE_SETTERS__",n=>In=n),Uv=t("__VUE_SSR_SETTERS__",n=>uh=n)}const gc=e=>{const t=In;return rf(e),e.scope.on(),()=>{e.scope.off(),rf(t)}},zw=()=>{In&&In.scope.off(),rf(null)};function oT(e){return e.vnode.shapeFlag&4}let uh=!1;function wO(e,t=!1,n=!1){t&&Uv(t);const{props:i,children:r}=e.vnode,s=oT(e);YN(e,i,s,t),ZN(e,r,n);const a=s?SO(e,t):void 0;return t&&Uv(!1),a}function SO(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,UN);const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?EO(e):null,s=gc(e);Bs();const a=hc(i,e,0,[e.props,r]);if($s(),s(),KE(a)){if(Do(e)||OC(e),a.then(zw,zw),t)return a.then(o=>{qw(e,o,t)}).catch(o=>{rh(o,e,0)});e.asyncDep=a}else qw(e,a,t)}else lT(e,t)}function qw(e,t,n){qe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Rt(t)&&(e.setupState=bC(t)),lT(e,n)}let Gw;function lT(e,t,n){const i=e.type;if(!e.render){if(!t&&Gw&&!i.render){const r=i.template||ey(e).template;if(r){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=i,u=Xt(Xt({isCustomElement:s,delimiters:o},a),l);i.render=Gw(r,u)}}e.render=i.render||sr}{const r=gc(e);Bs();try{HN(e)}finally{$s(),r()}}}const IO={get(e,t){return Wn(e,"get",""),e[t]}};function EO(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,IO),slots:e.slots,emit:e.emit,expose:t}}function ch(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(bC(Wp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fu)return fu[n](e)},has(t,n){return n in t||n in fu}})):e.proxy}function CO(e,t=!0){return qe(e)?e.displayName||e.name:e.name||t&&e.__name}function TO(e){return qe(e)&&"__vccOpts"in e}const S=(e,t)=>IN(e,t,uh);function Jn(e,t,n){const i=arguments.length;return i===2?Rt(t)&&!Be(t)?Ea(t)?m(e,null,[t]):m(e,t):m(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ea(n)&&(n=[n]),m(e,t,n))}const kO="3.5.7";/**
* @vue/runtime-dom v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hv;const Kw=typeof window<"u"&&window.trustedTypes;if(Kw)try{Hv=Kw.createPolicy("vue",{createHTML:e=>e})}catch{}const uT=Hv?e=>Hv.createHTML(e):e=>e,AO="http://www.w3.org/2000/svg",PO="http://www.w3.org/1998/Math/MathML",Dr=typeof document<"u"?document:null,Yw=Dr&&Dr.createElement("template"),RO={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?Dr.createElementNS(AO,e):t==="mathml"?Dr.createElementNS(PO,e):n?Dr.createElement(e,{is:n}):Dr.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Dr.createTextNode(e),createComment:e=>Dr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Dr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const a=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Yw.innerHTML=uT(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=Yw.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ds="transition",Wl="animation",Ho=Symbol("_vtc"),cT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},dT=Xt({},xC,cT),xO=e=>(e.displayName="Transition",e.props=dT,e),Ps=xO((e,{slots:t})=>Jn(NN,fT(e),t)),na=(e,t=[])=>{Be(e)?e.forEach(n=>n(...t)):e&&e(...t)},Qw=e=>e?Be(e)?e.some(t=>t.length>1):e.length>1:!1;function fT(e){const t={};for(const C in e)C in cT||(t[C]=e[C]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,g=VO(r),p=g&&g[0],y=g&&g[1],{onBeforeEnter:I,onEnter:E,onEnterCancelled:V,onLeave:A,onLeaveCancelled:D,onBeforeAppear:N=I,onAppear:R=E,onAppearCancelled:b=V}=t,_=(C,P,B)=>{ms(C,P?c:o),ms(C,P?u:a),B&&B()},T=(C,P)=>{C._isLeaving=!1,ms(C,d),ms(C,v),ms(C,h),P&&P()},k=C=>(P,B)=>{const W=C?R:E,Y=()=>_(P,C,B);na(W,[P,Y]),Xw(()=>{ms(P,C?l:s),Rr(P,C?c:o),Qw(W)||Jw(P,i,p,Y)})};return Xt(t,{onBeforeEnter(C){na(I,[C]),Rr(C,s),Rr(C,a)},onBeforeAppear(C){na(N,[C]),Rr(C,l),Rr(C,u)},onEnter:k(!1),onAppear:k(!0),onLeave(C,P){C._isLeaving=!0;const B=()=>T(C,P);Rr(C,d),Rr(C,h),mT(),Xw(()=>{C._isLeaving&&(ms(C,d),Rr(C,v),Qw(A)||Jw(C,i,y,B))}),na(A,[C,B])},onEnterCancelled(C){_(C,!1),na(V,[C])},onAppearCancelled(C){_(C,!0),na(b,[C])},onLeaveCancelled(C){T(C),na(D,[C])}})}function VO(e){if(e==null)return null;if(Rt(e))return[zm(e.enter),zm(e.leave)];{const t=zm(e);return[t,t]}}function zm(e){return UD(e)}function Rr(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ho]||(e[Ho]=new Set)).add(t)}function ms(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Ho];n&&(n.delete(t),n.size||(e[Ho]=void 0))}function Xw(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let DO=0;function Jw(e,t,n,i){const r=e._endId=++DO,s=()=>{r===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=hT(e,t);if(!a)return i();const u=a+"end";let c=0;const d=()=>{e.removeEventListener(u,h),s()},h=v=>{v.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},o+1),e.addEventListener(u,h)}function hT(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),r=i(`${ds}Delay`),s=i(`${ds}Duration`),a=Zw(r,s),o=i(`${Wl}Delay`),l=i(`${Wl}Duration`),u=Zw(o,l);let c=null,d=0,h=0;t===ds?a>0&&(c=ds,d=a,h=s.length):t===Wl?u>0&&(c=Wl,d=u,h=l.length):(d=Math.max(a,u),c=d>0?a>u?ds:Wl:null,h=c?c===ds?s.length:l.length:0);const v=c===ds&&/\b(transform|all)(,|$)/.test(i(`${ds}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:v}}function Zw(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>eS(n)+eS(e[i])))}function eS(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function mT(){return document.body.offsetHeight}function NO(e,t,n){const i=e[Ho];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const sf=Symbol("_vod"),vT=Symbol("_vsh"),Xi={beforeMount(e,{value:t},{transition:n}){e[sf]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):zl(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),zl(e,!0),i.enter(e)):i.leave(e,()=>{zl(e,!1)}):zl(e,t))},beforeUnmount(e,{value:t}){zl(e,t)}};function zl(e,t){e.style.display=t?e[sf]:"none",e[vT]=!t}const OO=Symbol(""),MO=/(^|;)\s*display\s*:/;function LO(e,t,n){const i=e.style,r=Ht(n);let s=!1;if(n&&!r){if(t)if(Ht(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Nd(i,o,"")}else for(const a in t)n[a]==null&&Nd(i,a,"");for(const a in n)a==="display"&&(s=!0),Nd(i,a,n[a])}else if(r){if(t!==n){const a=i[OO];a&&(n+=";"+a),i.cssText=n,s=MO.test(n)}}else t&&e.removeAttribute("style");sf in e&&(e[sf]=s?i.display:"",e[vT]&&(i.display="none"))}const tS=/\s*!important$/;function Nd(e,t,n){if(Be(n))n.forEach(i=>Nd(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=FO(e,t);tS.test(n)?e.setProperty(Fs(i),n.replace(tS,""),"important"):e[i]=n}}const nS=["Webkit","Moz","ms"],qm={};function FO(e,t){const n=qm[t];if(n)return n;let i=ai(t);if(i!=="filter"&&i in e)return qm[t]=i;i=gr(i);for(let r=0;r<nS.length;r++){const s=nS[r]+i;if(s in e)return qm[t]=s}return t}const iS="http://www.w3.org/1999/xlink";function rS(e,t,n,i,r,s=GD(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(iS,t.slice(6,t.length)):e.setAttributeNS(iS,t,n):n==null||s&&!ZE(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ls(n)?String(n):n)}function BO(e,t,n,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?uT(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,o=n==null?e.type==="checkbox"?"on":"":String(n);(a!==o||!("_value"in e))&&(e.value=o),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ZE(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function _o(e,t,n,i){e.addEventListener(t,n,i)}function $O(e,t,n,i){e.removeEventListener(t,n,i)}const sS=Symbol("_vei");function UO(e,t,n,i,r=null){const s=e[sS]||(e[sS]={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=HO(t);if(i){const u=s[t]=zO(i,r);_o(e,o,u,l)}else a&&($O(e,o,a,l),s[t]=void 0)}}const aS=/(?:Once|Passive|Capture)$/;function HO(e){let t;if(aS.test(e)){t={};let i;for(;i=e.match(aS);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Fs(e.slice(2)),t]}let Gm=0;const jO=Promise.resolve(),WO=()=>Gm||(jO.then(()=>Gm=0),Gm=Date.now());function zO(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ji(qO(i,n.value),t,5,[i])};return n.value=e,n.attached=WO(),n}function qO(e,t){if(Be(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const oS=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,GO=(e,t,n,i,r,s)=>{const a=r==="svg";t==="class"?NO(e,i,a):t==="style"?LO(e,n,i):Qf(t)?Np(t)||UO(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):KO(e,t,i,a))?(BO(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&rS(e,t,i,a,s,t!=="value")):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),rS(e,t,i,a))};function KO(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&oS(t)&&qe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return oS(t)&&Ht(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!Ht(n)))}const gT=new WeakMap,pT=new WeakMap,af=Symbol("_moveCb"),lS=Symbol("_enterCb"),YO=e=>(delete e.props.mode,e),QO=YO({name:"TransitionGroup",props:Xt({},dT,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ua(),i=RC();let r,s;return Xp(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!eM(r[0].el,n.vnode.el,a))return;r.forEach(XO),r.forEach(JO);const o=r.filter(ZO);mT(),o.forEach(l=>{const u=l.el,c=u.style;Rr(u,a),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[af]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[af]=null,ms(u,a))};u.addEventListener("transitionend",d)})}),()=>{const a=xe(e),o=fT(a);let l=a.tag||we;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),Ia(c,xu(c,o,i,n)),gT.set(c,c.el.getBoundingClientRect()))}s=t.default?Kp(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&Ia(c,xu(c,o,i,n))}return m(l,null,s)}}}),ry=QO;function XO(e){const t=e.el;t[af]&&t[af](),t[lS]&&t[lS]()}function JO(e){pT.set(e,e.el.getBoundingClientRect())}function ZO(e){const t=gT.get(e),n=pT.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function eM(e,t,n){const i=e.cloneNode(),r=e[Ho];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:a}=hT(i);return s.removeChild(i),a}const uS=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Be(t)?n=>xd(t,n):t};function tM(e){e.target.composing=!0}function cS(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Km=Symbol("_assign"),nM={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[Km]=uS(r);const s=i||r.props&&r.props.type==="number";_o(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=xv(o)),e[Km](o)}),n&&_o(e,"change",()=>{e.value=e.value.trim()}),t||(_o(e,"compositionstart",tM),_o(e,"compositionend",cS),_o(e,"change",cS))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},a){if(e[Km]=uS(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?xv(e.value):e.value,l=t??"";o!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===l)||(e.value=l))}},iM=["ctrl","shift","alt","meta"],rM={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>iM.some(n=>e[`${n}Key`]&&!t.includes(n))},jv=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...s)=>{for(let a=0;a<t.length;a++){const o=rM[t[a]];if(o&&o(r,t))return}return e(r,...s)})},sM=Xt({patchProp:GO},RO);let dS;function yT(){return dS||(dS=tO(sM))}const _T=(...e)=>{yT().render(...e)},bT=(...e)=>{const t=yT().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=oM(i);if(!r)return;const s=t._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,aM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function aM(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function oM(e){return Ht(e)?document.querySelector(e):e}var lM=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const uM=Symbol();var fS;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(fS||(fS={}));function cM(){const e=dc(!0),t=e.run(()=>ee({}));let n=[],i=[];const r=Wp({install(s){r._a=s,s.provide(uM,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return!this._a&&!lM?i.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const pc={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},jo={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},ti={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},dM={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},wT={dangerouslyHTMLString:!1,multiple:!0,position:pc.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},fM={rtl:!1,newestOnTop:!1,toastClassName:""},ST={...wT,...fM};({...wT,type:ti.DEFAULT});var yt=(e=>(e[e.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",e[e.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",e.CSS_NAMESPACE="Toastify",e))(yt||{}),Wv=(e=>(e.ENTRANCE_ANIMATION_END="d",e))(Wv||{});const hM={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},mM={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},vM={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},gM={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},hS="Toastify--animate Toastify__none-enter";function IT(e,t=!1){var n;let i=hM;if(!e||typeof e=="string")switch(e){case"flip":i=gM;break;case"zoom":i=vM;break;case"slide":i=mM;break}else i=e;if(t)i.enter=hS;else if(i.enter===hS){const r=(n=i.exit.split("__")[1])==null?void 0:n.split("-")[0];i.enter=`Toastify--animate Toastify__${r}-enter`}return i}function pM(e){return e.containerId||String(e.position)}const dh="will-unmount";function yM(e=pc.TOP_RIGHT){return!!document.querySelector(`.${yt.CSS_NAMESPACE}__toast-container--${e}`)}function _M(e=pc.TOP_RIGHT){return`${yt.CSS_NAMESPACE}__toast-container--${e}`}function bM(e,t,n=!1){const i=[`${yt.CSS_NAMESPACE}__toast-container`,`${yt.CSS_NAMESPACE}__toast-container--${e}`,n?`${yt.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return Oo(t)?t({position:e,rtl:n,defaultClassName:i}):`${i} ${t||""}`}function wM(e){var t;const{position:n,containerClassName:i,rtl:r=!1,style:s={}}=e,a=yt.CSS_NAMESPACE,o=_M(n),l=document.querySelector(`.${a}`),u=document.querySelector(`.${o}`),c=!!u&&!((t=u.className)!=null&&t.includes(dh)),d=l||document.createElement("div"),h=document.createElement("div");h.className=bM(n,i,r),h.dataset.testid=`${yt.CSS_NAMESPACE}__toast-container--${n}`,h.id=pM(e);for(const v in s)if(Object.prototype.hasOwnProperty.call(s,v)){const g=s[v];h.style[v]=g}return l||(d.className=yt.CSS_NAMESPACE,document.body.appendChild(d)),c||d.appendChild(h),h}function zv(e){var t,n,i;const r=typeof e=="string"?e:((t=e.currentTarget)==null?void 0:t.id)||((n=e.target)==null?void 0:n.id),s=document.getElementById(r);s&&s.removeEventListener("animationend",zv,!1);try{Du[r].unmount(),(i=document.getElementById(r))==null||i.remove(),delete Du[r],delete wn[r]}catch{}}const Du=Ut({});function SM(e,t){const n=document.getElementById(String(t));n&&(Du[n.id]=e)}function qv(e,t=!0){const n=String(e);if(!Du[n])return;const i=document.getElementById(n);i&&i.classList.add(dh),t?(EM(e),i&&i.addEventListener("animationend",zv,!1)):zv(n),cr.items=cr.items.filter(r=>r.containerId!==e)}function IM(e){for(const t in Du)qv(t,e);cr.items=[]}function ET(e,t){const n=document.getElementById(e.toastId);if(n){let i=e;i={...i,...IT(i.transition)};const r=i.appendPosition?`${i.exit}--${i.position}`:i.exit;n.className+=` ${r}`,t&&t(n)}}function EM(e){for(const t in wn)if(t===e)for(const n of wn[t]||[])ET(n)}function CM(e){const t=Wo().find(n=>n.toastId===e);return t==null?void 0:t.containerId}function sy(e){return document.getElementById(e)}function TM(e){const t=sy(e.containerId);return t&&t.classList.contains(dh)}function mS(e){var t;const n=Ea(e.content)?xe(e.content.props):null;return n??xe((t=e.data)!=null?t:{})}function kM(e){return e?cr.items.filter(t=>t.containerId===e).length>0:cr.items.length>0}function AM(){if(cr.items.length>0){const e=cr.items.shift();Od(e==null?void 0:e.toastContent,e==null?void 0:e.toastProps)}}const wn=Ut({}),cr=Ut({items:[]});function Wo(){const e=xe(wn);return Object.values(e).reduce((t,n)=>[...t,...n],[])}function PM(e){return Wo().find(t=>t.toastId===e)}function Od(e,t={}){if(TM(t)){const n=sy(t.containerId);n&&n.addEventListener("animationend",Gv.bind(null,e,t),!1)}else Gv(e,t)}function Gv(e,t={}){const n=sy(t.containerId);n&&n.removeEventListener("animationend",Gv.bind(null,e,t),!1);const i=wn[t.containerId]||[],r=i.length>0;if(!r&&!yM(t.position)){const s=wM(t),a=bT(KM,t);a.mount(s),SM(a,s.id)}r&&!t.updateId&&(t.position=i[0].position),Qe(()=>{t.updateId?fi.update(t):fi.add(e,t)})}const fi={add(e,t){const{containerId:n=""}=t;n&&(wn[n]=wn[n]||[],wn[n].find(i=>i.toastId===t.toastId)||setTimeout(()=>{var i,r;t.newestOnTop?(i=wn[n])==null||i.unshift(t):(r=wn[n])==null||r.push(t),t.onOpen&&t.onOpen(mS(t))},t.delay||0))},remove(e){if(e){const t=CM(e);if(t){const n=wn[t];let i=n.find(r=>r.toastId===e);wn[t]=n.filter(r=>r.toastId!==e),!wn[t].length&&!kM(t)&&qv(t,!1),AM(),Qe(()=>{i!=null&&i.onClose&&(i.onClose(mS(i)),i=void 0)})}}},update(e={}){const{containerId:t=""}=e;if(t&&e.updateId){wn[t]=wn[t]||[];const n=wn[t].find(s=>s.toastId===e.toastId),i=(n==null?void 0:n.position)!==e.position||(n==null?void 0:n.transition)!==e.transition,r={...e,disabledEnterTransition:!i,updateId:void 0};fi.dismissForce(e==null?void 0:e.toastId),setTimeout(()=>{At(r.content,r)},e.delay||0)}},clear(e,t=!0){e?qv(e,t):IM(t)},dismissCallback(e){var t;const n=(t=e.currentTarget)==null?void 0:t.id,i=document.getElementById(n);i&&(i.removeEventListener("animationend",fi.dismissCallback,!1),setTimeout(()=>{fi.remove(n)}))},dismiss(e){if(e){const t=Wo();for(const n of t)if(n.toastId===e){ET(n,i=>{i.addEventListener("animationend",fi.dismissCallback,!1)});break}}},dismissForce(e){if(e){const t=Wo();for(const n of t)if(n.toastId===e){const i=document.getElementById(e);i&&(i.remove(),i.removeEventListener("animationend",fi.dismissCallback,!1),fi.remove(e));break}}}},CT=Ut({}),of=Ut({});function TT(){return Math.random().toString(36).substring(2,9)}function RM(e){return typeof e=="number"&&!isNaN(e)}function Kv(e){return typeof e=="string"}function Oo(e){return typeof e=="function"}function fh(...e){return K(...e)}function Md(e){return typeof e=="object"&&(!!(e!=null&&e.render)||!!(e!=null&&e.setup)||typeof(e==null?void 0:e.type)=="object")}function xM(e={}){CT[`${yt.CSS_NAMESPACE}-default-options`]=e}function VM(){return CT[`${yt.CSS_NAMESPACE}-default-options`]||ST}function DM(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Ld=(e=>(e[e.Enter=0]="Enter",e[e.Exit=1]="Exit",e))(Ld||{});const kT={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:pc.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:jo.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:ti.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},NM={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:ti.DEFAULT},theme:{type:String,required:!1,default:jo.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},OM=Hs({name:"ProgressBar",props:NM,setup(e,{attrs:t}){const n=ee(),i=S(()=>e.hide?"true":"false"),r=S(()=>({...t.style||{},animationDuration:`${e.autoClose===!0?5e3:e.autoClose}ms`,animationPlayState:e.isRunning?"running":"paused",opacity:e.hide||e.autoClose===!1?0:1,transform:e.controlledProgress?`scaleX(${e.progress})`:"none"})),s=S(()=>[`${yt.CSS_NAMESPACE}__progress-bar`,e.controlledProgress?`${yt.CSS_NAMESPACE}__progress-bar--controlled`:`${yt.CSS_NAMESPACE}__progress-bar--animated`,`${yt.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,`${yt.CSS_NAMESPACE}__progress-bar--${e.type}`,e.rtl?`${yt.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),a=S(()=>`${s.value} ${(t==null?void 0:t.class)||""}`),o=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{e.isIn&&e.closeToast&&e.autoClose!==!1&&(e.closeToast(),o())},u=S(()=>e.controlledProgress?null:l),c=S(()=>e.controlledProgress?l:null);return Ct(()=>{n.value&&(o(),n.value.onanimationend=u.value,n.value.ontransitionend=c.value)}),()=>m("div",{ref:n,role:"progressbar","aria-hidden":i.value,"aria-label":"notification timer",class:a.value,style:r.value},null)}}),MM=Hs({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:jo.AUTO},type:{type:String,required:!1,default:jo.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(e){return()=>m("button",{class:`${yt.CSS_NAMESPACE}__close-button ${yt.CSS_NAMESPACE}__close-button--${e.theme}`,type:"button",onClick:t=>{t.stopPropagation(),e.closeToast&&e.closeToast(t)},"aria-label":e.ariaLabel},[m("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[m("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),hh=({theme:e,type:t,path:n,...i})=>m("svg",K({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`},i),[m("path",{d:n},null)]);function LM(e){return m(hh,K(e,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function FM(e){return m(hh,K(e,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function BM(e){return m(hh,K(e,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function $M(e){return m(hh,K(e,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function UM(){return m("div",{class:`${yt.CSS_NAMESPACE}__spinner`},null)}const Yv={info:FM,warning:LM,success:BM,error:$M,spinner:UM},HM=e=>e in Yv;function jM({theme:e,type:t,isLoading:n,icon:i}){let r;const s={theme:e,type:t};return n?r=Yv.spinner():i===!1?r=void 0:Md(i)?r=xe(i):Oo(i)?r=i(s):Ea(i)?r=ur(i,s):Kv(i)||RM(i)?r=i:HM(t)&&(r=Yv[t](s)),r}const WM=()=>{};function zM(e,t,n=yt.COLLAPSE_DURATION){const{scrollHeight:i,style:r}=e,s=n;requestAnimationFrame(()=>{r.minHeight="initial",r.height=i+"px",r.transition=`all ${s}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(t,s)})})}function qM(e){const t=ee(!1),n=ee(!1),i=ee(!1),r=ee(Ld.Enter),s=Ut({...e,appendPosition:e.appendPosition||!1,collapse:typeof e.collapse>"u"?!0:e.collapse,collapseDuration:e.collapseDuration||yt.COLLAPSE_DURATION}),a=s.done||WM,o=S(()=>s.appendPosition?`${s.enter}--${s.position}`:s.enter),l=S(()=>s.appendPosition?`${s.exit}--${s.position}`:s.exit),u=S(()=>e.pauseOnHover?{onMouseenter:y,onMouseleave:p}:{});function c(){const E=o.value.split(" ");h().addEventListener(Wv.ENTRANCE_ANIMATION_END,p,{once:!0});const V=D=>{const N=h();D.target===N&&(N.dispatchEvent(new Event(Wv.ENTRANCE_ANIMATION_END)),N.removeEventListener("animationend",V),N.removeEventListener("animationcancel",V),r.value===Ld.Enter&&D.type!=="animationcancel"&&N.classList.remove(...E))},A=()=>{const D=h();D.classList.add(...E),D.addEventListener("animationend",V),D.addEventListener("animationcancel",V)};e.pauseOnFocusLoss&&v(),A()}function d(){if(!h())return;const E=()=>{const A=h();A.removeEventListener("animationend",E),s.collapse?zM(A,a,s.collapseDuration):a()},V=()=>{const A=h();r.value=Ld.Exit,A&&(A.className+=` ${l.value}`,A.addEventListener("animationend",E))};n.value||(i.value?E():setTimeout(V))}function h(){return e.toastRef.value}function v(){document.hasFocus()||y(),window.addEventListener("focus",p),window.addEventListener("blur",y)}function g(){window.removeEventListener("focus",p),window.removeEventListener("blur",y)}function p(){(!e.loading.value||e.isLoading===void 0)&&(t.value=!0)}function y(){t.value=!1}function I(E){E&&(E.stopPropagation(),E.preventDefault()),n.value=!1}return Ct(d),Ct(()=>{const E=Wo();n.value=E.findIndex(V=>V.toastId===s.toastId)>-1}),Ct(()=>{e.isLoading!==void 0&&(e.loading.value?y():p())}),jt(c),mc(()=>{e.pauseOnFocusLoss&&g()}),{isIn:n,isRunning:t,hideToast:I,eventHandlers:u}}const GM=Hs({name:"ToastItem",inheritAttrs:!1,props:kT,setup(e){const t=ee(),n=S(()=>!!e.isLoading),i=S(()=>e.progress!==void 0&&e.progress!==null),r=S(()=>jM(e)),s=S(()=>[`${yt.CSS_NAMESPACE}__toast`,`${yt.CSS_NAMESPACE}__toast-theme--${e.theme}`,`${yt.CSS_NAMESPACE}__toast--${e.type}`,e.rtl?`${yt.CSS_NAMESPACE}__toast--rtl`:void 0,e.toastClassName||""].filter(Boolean).join(" ")),{isRunning:a,isIn:o,hideToast:l,eventHandlers:u}=qM({toastRef:t,loading:n,done:()=>{fi.remove(e.toastId)},...IT(e.transition,e.disabledEnterTransition),...e});return()=>m("div",K({id:e.toastId,class:s.value,style:e.toastStyle||{},ref:t,"data-testid":`toast-item-${e.toastId}`,onClick:c=>{e.closeOnClick&&l(),e.onClick&&e.onClick(c)}},u.value),[m("div",{role:e.role,"data-testid":"toast-body",class:`${yt.CSS_NAMESPACE}__toast-body ${e.bodyClassName||""}`},[r.value!=null&&m("div",{"data-testid":`toast-icon-${e.type}`,class:[`${yt.CSS_NAMESPACE}__toast-icon`,e.isLoading?"":`${yt.CSS_NAMESPACE}--animate-icon ${yt.CSS_NAMESPACE}__zoom-enter`].join(" ")},[Md(r.value)?Jn(xe(r.value),{theme:e.theme,type:e.type}):Oo(r.value)?r.value({theme:e.theme,type:e.type}):r.value]),m("div",{"data-testid":"toast-content"},[Md(e.content)?Jn(xe(e.content),{toastProps:xe(e),closeToast:l,data:e.data}):Oo(e.content)?e.content({toastProps:xe(e),closeToast:l,data:e.data}):e.dangerouslyHTMLString?Jn("div",{innerHTML:e.content}):e.content])]),(e.closeButton===void 0||e.closeButton===!0)&&m(MM,{theme:e.theme,closeToast:c=>{c.stopPropagation(),c.preventDefault(),l()}},null),Md(e.closeButton)?Jn(xe(e.closeButton),{closeToast:l,type:e.type,theme:e.theme}):Oo(e.closeButton)?e.closeButton({closeToast:l,type:e.type,theme:e.theme}):null,m(OM,{className:e.progressClassName,style:e.progressStyle,rtl:e.rtl,theme:e.theme,isIn:o.value,type:e.type,hide:e.hideProgressBar,isRunning:a.value,autoClose:e.autoClose,controlledProgress:i.value,progress:e.progress,closeToast:e.isLoading?void 0:l},null)])}});let mu=0;function AT(){typeof window>"u"||(mu&&window.cancelAnimationFrame(mu),mu=window.requestAnimationFrame(AT),of.lastUrl!==window.location.href&&(of.lastUrl=window.location.href,fi.clear()))}const KM=Hs({name:"ToastifyContainer",inheritAttrs:!1,props:kT,setup(e){const t=S(()=>e.containerId),n=S(()=>wn[t.value]||[]),i=S(()=>n.value.filter(r=>r.position===e.position));return jt(()=>{typeof window<"u"&&e.clearOnUrlChange&&window.requestAnimationFrame(AT)}),mc(()=>{typeof window<"u"&&mu&&(window.cancelAnimationFrame(mu),of.lastUrl="")}),()=>m(we,null,[i.value.map(r=>{const{toastId:s=""}=r;return m(GM,K({key:s},r),null)})])}});let Ym=!1;function PT(){const e=[];return Wo().forEach(t=>{const n=document.getElementById(t.containerId);n&&!n.classList.contains(dh)&&e.push(t)}),e}function YM(e){const t=PT().length,n=e??0;return n>0&&t+cr.items.length>=n}function QM(e){YM(e.limit)&&!e.updateId&&cr.items.push({toastId:e.toastId,containerId:e.containerId,toastContent:e.content,toastProps:e})}function js(e,t,n={}){if(Ym)return;n=fh(VM(),{type:t},xe(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=TT()),n={...n,content:e,containerId:n.containerId||String(n.position)};const i=Number(n==null?void 0:n.progress);return i<0&&(n.progress=0),i>1&&(n.progress=1),n.theme==="auto"&&(n.theme=DM()),QM(n),of.lastUrl=window.location.href,n.multiple?cr.items.length?n.updateId&&Od(e,n):Od(e,n):(Ym=!0,At.clearAll(void 0,!1),setTimeout(()=>{Od(e,n)},0),setTimeout(()=>{Ym=!1},390)),n.toastId}const At=(e,t)=>js(e,ti.DEFAULT,t);At.info=(e,t)=>js(e,ti.DEFAULT,{...t,type:ti.INFO});At.error=(e,t)=>js(e,ti.DEFAULT,{...t,type:ti.ERROR});At.warning=(e,t)=>js(e,ti.DEFAULT,{...t,type:ti.WARNING});At.warn=At.warning;At.success=(e,t)=>js(e,ti.DEFAULT,{...t,type:ti.SUCCESS});At.loading=(e,t)=>js(e,ti.DEFAULT,fh(t,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));At.dark=(e,t)=>js(e,ti.DEFAULT,fh(t,{theme:jo.DARK}));At.remove=e=>{e?fi.dismiss(e):fi.clear()};At.clearAll=(e,t)=>{Qe(()=>{fi.clear(e,t)})};At.isActive=e=>{let t=!1;return t=PT().findIndex(n=>n.toastId===e)>-1,t};At.update=(e,t={})=>{setTimeout(()=>{const n=PM(e);if(n){const i=xe(n),{content:r}=i,s={...i,...t,toastId:t.toastId||e,updateId:TT()},a=s.render||r;delete s.render,js(a,s.type,s)}},0)};At.done=e=>{At.update(e,{isLoading:!1,progress:1})};At.promise=XM;function XM(e,{pending:t,error:n,success:i},r){var s,a,o;let l;const u={...r||{},autoClose:!1};t&&(l=Kv(t)?At.loading(t,u):At.loading(t.render,{...u,...t}));const c={autoClose:(s=r==null?void 0:r.autoClose)!=null?s:!0,closeOnClick:(a=r==null?void 0:r.closeOnClick)!=null?a:!0,closeButton:(o=r==null?void 0:r.autoClose)!=null?o:null,isLoading:void 0,draggable:null,delay:100},d=(v,g,p)=>{if(g==null){At.remove(l);return}const y={type:v,...c,...r,data:p},I=Kv(g)?{render:g}:g;return l?At.update(l,{...y,...I,isLoading:!1}):At(I.render,{...y,...I,isLoading:!1}),p},h=Oo(e)?e():e;return h.then(v=>{d("success",i,v)}).catch(v=>{d("error",n,v)}),h}At.POSITION=pc;At.THEME=jo;At.TYPE=ti;At.TRANSITIONS=dM;const RT={install(e,t={}){JM(t)}};typeof window<"u"&&(window.Vue3Toastify=RT);function JM(e={}){const t=fh(ST,e);xM(t)}var vS={};/**
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
 */const xT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ke=function(e,t){if(!e)throw ll(t)},ll=function(e){return new Error("Firebase Database ("+xT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const VT=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},ZM=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],a=e[n++],o=e[n++],l=((r&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return t.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],a=r+1<e.length,o=a?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,c=s>>2,d=(s&3)<<4|o>>4;let h=(o&15)<<2|u>>6,v=u&63;l||(v=64,a||(h=64)),i.push(n[c],n[d],n[h],n[v])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(VT(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ZM(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||o==null||u==null||d==null)throw new eL;const h=s<<2|o>>4;if(i.push(h),u!==64){const v=o<<4&240|u>>2;if(i.push(v),d!==64){const g=u<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class eL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DT=function(e){const t=VT(e);return mh.encodeByteArray(t,!0)},lf=function(e){return DT(e).replace(/\./g,"")},uf=function(e){try{return mh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function tL(e){return NT(void 0,e)}function NT(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!nL(n)||(e[n]=NT(e[n],t[n]));return e}function nL(e){return e!=="__proto__"}/**
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
 */function iL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rL=()=>iL().__FIREBASE_DEFAULTS__,sL=()=>{if(typeof process>"u"||typeof vS>"u")return;const e=vS.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},aL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&uf(e[1]);return t&&JSON.parse(t)},vh=()=>{try{return rL()||sL()||aL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},OT=e=>{var t,n;return(n=(t=vh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},oL=e=>{const t=OT(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},MT=()=>{var e;return(e=vh())===null||e===void 0?void 0:e.config},LT=e=>{var t;return(t=vh())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Nu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function lL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[lf(JSON.stringify(n)),lf(JSON.stringify(a)),""].join(".")}/**
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
 */function zn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zn())}function uL(){var e;const t=(e=vh())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function FT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fL(){const e=zn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function BT(){return xT.NODE_ADMIN===!0}function hL(){return!uL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $T(){try{return typeof indexedDB=="object"}catch{return!1}}function mL(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const vL="FirebaseError";class pr extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=vL,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ul.prototype.create)}}class ul{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],a=s?gL(s,i):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new pr(r,o,i)}}function gL(e,t){return e.replace(pL,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const pL=/\{\$([^}]+)}/g;/**
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
 */function Ou(e){return JSON.parse(e)}function En(e){return JSON.stringify(e)}/**
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
 */const UT=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Ou(uf(s[0])||""),n=Ou(uf(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:r}},yL=function(e){const t=UT(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_L=function(e){const t=UT(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Zr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function zo(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Qv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function cf(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function df(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],a=t[r];if(gS(s)&&gS(a)){if(!df(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function gS(e){return e!==null&&typeof e=="object"}/**
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
 */function cl(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function eu(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function tu(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class bL{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)i[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],o=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=o^s&(a^o),c=1518500249):(u=s^a^o,c=1859775393):d<60?(u=s&a|o&(s|a),c=2400959708):(u=s^a^o,c=3395469782);const h=(r<<5|r>>>27)+u+l+c+i[d]&4294967295;l=o,o=a,a=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let a=this.inbuf_;for(;r<n;){if(a===0)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<n;)if(s[a]=t.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}else for(;r<n;)if(s[a]=t[r],++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}this.inbuf_=a,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)t[i]=this.chain_[r]>>s&255,++i;return t}}function wL(e,t){const n=new SL(e,t);return n.subscribe.bind(n)}class SL{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");IL(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Qm),r.error===void 0&&(r.error=Qm),r.complete===void 0&&(r.complete=Qm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IL(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Qm(){}function EL(e,t){return`${e} failed: ${t} argument `}/**
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
 */const CL=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,ke(i<e.length,"Surrogate pair missing trail surrogate.");const a=e.charCodeAt(i)-56320;r=65536+(s<<10)+a}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},gh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Jt(e){return e&&e._delegate?e._delegate:e}class Wi{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const aa="[DEFAULT]";/**
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
 */class TL{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Nu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(AL(t))try{this.getOrInitializeService({instanceIdentifier:aa})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=aa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=aa){return this.instances.has(t)}getOptions(t=aa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&a.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kL(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=aa){return this.component?this.component.multipleInstances?t:aa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kL(e){return e===aa?void 0:e}function AL(e){return e.instantiationMode==="EAGER"}/**
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
 */class PL{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new TL(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Je||(Je={}));const RL={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},xL=Je.INFO,VL={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},DL=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=VL[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yc{constructor(t){this.name=t,this._logLevel=xL,this._logHandler=DL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?RL[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...t),this._logHandler(this,Je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...t),this._logHandler(this,Je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...t),this._logHandler(this,Je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...t),this._logHandler(this,Je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...t),this._logHandler(this,Je.ERROR,...t)}}const NL=(e,t)=>t.some(n=>e instanceof n);let pS,yS;function OL(){return pS||(pS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ML(){return yS||(yS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HT=new WeakMap,Xv=new WeakMap,jT=new WeakMap,Xm=new WeakMap,oy=new WeakMap;function LL(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Cs(e.result)),r()},a=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&HT.set(n,e)}).catch(()=>{}),oy.set(t,e),t}function FL(e){if(Xv.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),r()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Xv.set(e,t)}let Jv={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xv.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jT.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function BL(e){Jv=e(Jv)}function $L(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Jm(this),t,...n);return jT.set(i,t.sort?t.sort():[t]),Cs(i)}:ML().includes(e)?function(...t){return e.apply(Jm(this),t),Cs(HT.get(this))}:function(...t){return Cs(e.apply(Jm(this),t))}}function UL(e){return typeof e=="function"?$L(e):(e instanceof IDBTransaction&&FL(e),NL(e,OL())?new Proxy(e,Jv):e)}function Cs(e){if(e instanceof IDBRequest)return LL(e);if(Xm.has(e))return Xm.get(e);const t=UL(e);return t!==e&&(Xm.set(e,t),oy.set(t,e)),t}const Jm=e=>oy.get(e);function HL(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),o=Cs(a);return i&&a.addEventListener("upgradeneeded",l=>{i(Cs(a.result),l.oldVersion,l.newVersion,Cs(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const jL=["get","getKey","getAll","getAllKeys","count"],WL=["put","add","delete","clear"],Zm=new Map;function _S(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zm.get(t))return Zm.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=WL.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||jL.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),r&&l.done]))[0]};return Zm.set(t,s),s}BL(e=>({...e,get:(t,n,i)=>_S(t,n)||e.get(t,n,i),has:(t,n)=>!!_S(t,n)||e.has(t,n)}));/**
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
 */class zL{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qL(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function qL(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zv="@firebase/app",bS="0.10.11";/**
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
 */const zr=new yc("@firebase/app"),GL="@firebase/app-compat",KL="@firebase/analytics-compat",YL="@firebase/analytics",QL="@firebase/app-check-compat",XL="@firebase/app-check",JL="@firebase/auth",ZL="@firebase/auth-compat",eF="@firebase/database",tF="@firebase/database-compat",nF="@firebase/functions",iF="@firebase/functions-compat",rF="@firebase/installations",sF="@firebase/installations-compat",aF="@firebase/messaging",oF="@firebase/messaging-compat",lF="@firebase/performance",uF="@firebase/performance-compat",cF="@firebase/remote-config",dF="@firebase/remote-config-compat",fF="@firebase/storage",hF="@firebase/storage-compat",mF="@firebase/firestore",vF="@firebase/vertexai-preview",gF="@firebase/firestore-compat",pF="firebase",yF="10.13.2";/**
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
 */const eg="[DEFAULT]",_F={[Zv]:"fire-core",[GL]:"fire-core-compat",[YL]:"fire-analytics",[KL]:"fire-analytics-compat",[XL]:"fire-app-check",[QL]:"fire-app-check-compat",[JL]:"fire-auth",[ZL]:"fire-auth-compat",[eF]:"fire-rtdb",[tF]:"fire-rtdb-compat",[nF]:"fire-fn",[iF]:"fire-fn-compat",[rF]:"fire-iid",[sF]:"fire-iid-compat",[aF]:"fire-fcm",[oF]:"fire-fcm-compat",[lF]:"fire-perf",[uF]:"fire-perf-compat",[cF]:"fire-rc",[dF]:"fire-rc-compat",[fF]:"fire-gcs",[hF]:"fire-gcs-compat",[mF]:"fire-fst",[gF]:"fire-fst-compat",[vF]:"fire-vertex","fire-js":"fire-js",[pF]:"fire-js-all"};/**
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
 */const Mu=new Map,bF=new Map,tg=new Map;function wS(e,t){try{e.container.addComponent(t)}catch(n){zr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dr(e){const t=e.name;if(tg.has(t))return zr.debug(`There were multiple attempts to register component ${t}.`),!1;tg.set(t,e);for(const n of Mu.values())wS(n,e);for(const n of bF.values())wS(n,e);return!0}function ly(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Li(e){return e.settings!==void 0}/**
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
 */const wF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ts=new ul("app","Firebase",wF);/**
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
 */class SF{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ts.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=yF;function WT(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:eg,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Ts.create("bad-app-name",{appName:String(r)});if(n||(n=MT()),!n)throw Ts.create("no-options");const s=Mu.get(r);if(s){if(df(n,s.options)&&df(i,s.config))return s;throw Ts.create("duplicate-app",{appName:r})}const a=new PL(r);for(const l of tg.values())a.addComponent(l);const o=new SF(n,i,a);return Mu.set(r,o),o}function uy(e=eg){const t=Mu.get(e);if(!t&&e===eg&&MT())return WT();if(!t)throw Ts.create("no-app",{appName:e});return t}function IF(){return Array.from(Mu.values())}function pi(e,t,n){var i;let r=(i=_F[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zr.warn(o.join(" "));return}dr(new Wi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const EF="firebase-heartbeat-database",CF=1,Lu="firebase-heartbeat-store";let ev=null;function zT(){return ev||(ev=HL(EF,CF,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Lu)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ts.create("idb-open",{originalErrorMessage:e.message})})),ev}async function TF(e){try{const n=(await zT()).transaction(Lu),i=await n.objectStore(Lu).get(qT(e));return await n.done,i}catch(t){if(t instanceof pr)zr.warn(t.message);else{const n=Ts.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zr.warn(n.message)}}}async function SS(e,t){try{const i=(await zT()).transaction(Lu,"readwrite");await i.objectStore(Lu).put(t,qT(e)),await i.done}catch(n){if(n instanceof pr)zr.warn(n.message);else{const i=Ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(i.message)}}}function qT(e){return`${e.name}!${e.options.appId}`}/**
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
 */const kF=1024,AF=30*24*60*60*1e3;class PF{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xF(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=IS();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=AF}),this._storage.overwrite(this._heartbeatsCache))}catch(i){zr.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=IS(),{heartbeatsToSend:i,unsentEntries:r}=RF(this._heartbeatsCache.heartbeats),s=lf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zr.warn(n),""}}}function IS(){return new Date().toISOString().substring(0,10)}function RF(e,t=kF){const n=[];let i=e.slice();for(const r of e){const s=n.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),ES(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ES(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xF{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $T()?mL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return SS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return SS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ES(e){return lf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function VF(e){dr(new Wi("platform-logger",t=>new zL(t),"PRIVATE")),dr(new Wi("heartbeat",t=>new PF(t),"PRIVATE")),pi(Zv,bS,e),pi(Zv,bS,"esm2017"),pi("fire-js","")}VF("");function cy(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function GT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DF=GT,KT=new ul("auth","Firebase",GT());/**
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
 */const ff=new yc("@firebase/auth");function NF(e,...t){ff.logLevel<=Je.WARN&&ff.warn(`Auth (${Ws}): ${e}`,...t)}function Fd(e,...t){ff.logLevel<=Je.ERROR&&ff.error(`Auth (${Ws}): ${e}`,...t)}/**
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
 */function xi(e,...t){throw fy(e,...t)}function Ui(e,...t){return fy(e,...t)}function dy(e,t,n){const i=Object.assign(Object.assign({},DF()),{[t]:n});return new ul("auth","Firebase",i).create(t,{appName:e.name})}function Hr(e){return dy(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function OF(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&xi(e,"argument-error"),dy(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fy(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return KT.create(e,...t)}function We(e,t,...n){if(!e)throw fy(t,...n)}function Mr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Fd(t),new Error(t)}function qr(e,t){e||Mr(t)}/**
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
 */function ng(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function MF(){return CS()==="http:"||CS()==="https:"}function CS(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function LF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MF()||dL()||"connection"in navigator)?navigator.onLine:!0}function FF(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class _c{constructor(t,n){this.shortDelay=t,this.longDelay=n,qr(n>t,"Short delay should be less than long delay!"),this.isMobile=ay()||FT()}get(){return LF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hy(e,t){qr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class YT{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $F=new _c(3e4,6e4);function es(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function yr(e,t,n,i,r={}){return QT(e,r,async()=>{let s={},a={};i&&(t==="GET"?a=i:s={body:JSON.stringify(i)});const o=cl(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return cL()||(u.referrerPolicy="no-referrer"),YT.fetch()(XT(e,e.config.apiHost,n,o),u)})}async function QT(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},BF),t);try{const r=new HF(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw md(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw md(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw md(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw md(e,"user-disabled",a);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dy(e,c,u);xi(e,c)}}catch(r){if(r instanceof pr)throw r;xi(e,"network-request-failed",{message:String(r)})}}async function bc(e,t,n,i,r={}){const s=await yr(e,t,n,i,r);return"mfaPendingCredential"in s&&xi(e,"multi-factor-auth-required",{_serverResponse:s}),s}function XT(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?hy(e.config,r):`${e.config.apiScheme}://${r}`}function UF(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HF{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ui(this.auth,"network-request-failed")),$F.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function md(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Ui(e,t,i);return r.customData._tokenResponse=n,r}function TS(e){return e!==void 0&&e.enterprise!==void 0}class jF{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return UF(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function WF(e,t){return yr(e,"GET","/v2/recaptchaConfig",es(e,t))}/**
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
 */async function zF(e,t){return yr(e,"POST","/v1/accounts:delete",t)}async function JT(e,t){return yr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function vu(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qF(e,t=!1){const n=Jt(e),i=await n.getIdToken(t),r=my(i);We(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:vu(tv(r.auth_time)),issuedAtTime:vu(tv(r.iat)),expirationTime:vu(tv(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tv(e){return Number(e)*1e3}function my(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Fd("JWT malformed, contained fewer than 3 sections"),null;try{const r=uf(n);return r?JSON.parse(r):(Fd("Failed to decode base64 JWT payload"),null)}catch(r){return Fd("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function kS(e){const t=my(e);return We(t,"internal-error"),We(typeof t.exp<"u","internal-error"),We(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function qo(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof pr&&GF(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function GF({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class KF{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ig{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vu(this.lastLoginAt),this.creationTime=vu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hf(e){var t;const n=e.auth,i=await e.getIdToken(),r=await qo(e,JT(n,{idToken:i}));We(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?ZT(s.providerUserInfo):[],o=QF(e.providerData,a),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ig(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function YF(e){const t=Jt(e);await hf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function QF(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function ZT(e){return e.map(t=>{var{providerId:n}=t,i=cy(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function XF(e,t){const n=await QT(e,{},async()=>{const i=cl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=XT(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",YT.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JF(e,t){return yr(e,"POST","/v2/accounts:revokeToken",es(e,t))}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){We(t.idToken,"internal-error"),We(typeof t.idToken<"u","internal-error"),We(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):kS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){We(t.length!==0,"internal-error");const n=kS(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(We(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await XF(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,a=new Mo;return i&&(We(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),r&&(We(typeof r=="string","internal-error",{appName:t}),a.accessToken=r),s&&(We(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
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
 */function fs(e,t){We(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Lr{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=cy(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ig(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await qo(this,this.stsTokenManager.getToken(this.auth,t));return We(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return qF(this,t)}reload(){return YF(this)}_assign(t){this!==t&&(We(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Lr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){We(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await hf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Li(this.auth.app))return Promise.reject(Hr(this.auth));const t=await this.getIdToken();return await qo(this,zF(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,a,o,l,u,c;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(a=n.photoURL)!==null&&a!==void 0?a:void 0,p=(o=n.tenantId)!==null&&o!==void 0?o:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:V,emailVerified:A,isAnonymous:D,providerData:N,stsTokenManager:R}=n;We(V&&R,t,"internal-error");const b=Mo.fromJSON(this.name,R);We(typeof V=="string",t,"internal-error"),fs(d,t.name),fs(h,t.name),We(typeof A=="boolean",t,"internal-error"),We(typeof D=="boolean",t,"internal-error"),fs(v,t.name),fs(g,t.name),fs(p,t.name),fs(y,t.name),fs(I,t.name),fs(E,t.name);const _=new Lr({uid:V,auth:t,email:h,emailVerified:A,displayName:d,isAnonymous:D,photoURL:g,phoneNumber:v,tenantId:p,stsTokenManager:b,createdAt:I,lastLoginAt:E});return N&&Array.isArray(N)&&(_.providerData=N.map(T=>Object.assign({},T))),y&&(_._redirectEventId=y),_}static async _fromIdTokenResponse(t,n,i=!1){const r=new Mo;r.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await hf(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];We(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?ZT(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),o=new Mo;o.updateFromIdToken(i);const l=new Lr({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ig(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const AS=new Map;function Fr(e){qr(e instanceof Function,"Expected a class definition");let t=AS.get(e);return t?(qr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,AS.set(e,t),t)}/**
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
 */class ek{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ek.type="NONE";const PS=ek;/**
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
 */function Bd(e,t,n){return`firebase:${e}:${t}:${n}`}class Lo{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Bd(this.userKey,r.apiKey,s),this.fullPersistenceKey=Bd("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Lr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Lo(Fr(PS),t,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Fr(PS);const a=Bd(i,t.config.apiKey,t.name);let o=null;for(const u of n)try{const c=await u._get(a);if(c){const d=Lr._fromJSON(t,c);u!==s&&(o=d),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Lo(s,t,i):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Lo(s,t,i))}}/**
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
 */function RS(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rk(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tk(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ak(t))return"Blackberry";if(ok(t))return"Webos";if(nk(t))return"Safari";if((t.includes("chrome/")||ik(t))&&!t.includes("edge/"))return"Chrome";if(sk(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function tk(e=zn()){return/firefox\//i.test(e)}function nk(e=zn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ik(e=zn()){return/crios\//i.test(e)}function rk(e=zn()){return/iemobile/i.test(e)}function sk(e=zn()){return/android/i.test(e)}function ak(e=zn()){return/blackberry/i.test(e)}function ok(e=zn()){return/webos/i.test(e)}function vy(e=zn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ZF(e=zn()){var t;return vy(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function e2(){return fL()&&document.documentMode===10}function lk(e=zn()){return vy(e)||sk(e)||ok(e)||ak(e)||/windows phone/i.test(e)||rk(e)}/**
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
 */function uk(e,t=[]){let n;switch(e){case"Browser":n=RS(zn());break;case"Worker":n=`${RS(zn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${i}`}/**
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
 */class t2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function n2(e,t={}){return yr(e,"GET","/v2/passwordPolicy",es(e,t))}/**
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
 */const i2=6;class r2{constructor(t){var n,i,r,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:i2,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,r,s,a,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class s2{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xS(this),this.idTokenSubscription=new xS(this),this.beforeStateQueue=new t2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Fr(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await JT(this,{idToken:t}),i=await Lr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Li(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return We(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await hf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=FF()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Li(this.app))return Promise.reject(Hr(this));const n=t?Jt(t):null;return n&&We(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&We(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Li(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Li(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await n2(this),n=new r2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ul("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await JF(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Fr(t)||this._popupRedirectResolver;We(n,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[Fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(We(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,r);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return We(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=uk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&NF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ts(e){return Jt(e)}class xS{constructor(t){this.auth=t,this.observer=null,this.addObserver=wL(n=>this.observer=n)}get next(){return We(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a2(e){ph=e}function ck(e){return ph.loadJS(e)}function o2(){return ph.recaptchaEnterpriseScript}function l2(){return ph.gapiScript}function u2(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const c2="recaptcha-enterprise",d2="NO_RECAPTCHA";class f2{constructor(t){this.type=c2,this.auth=ts(t)}async verify(t="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{WF(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new jF(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(l=>{o(l)})})}function r(s,a,o){const l=window.grecaptcha;TS(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{a(u)}).catch(()=>{a(d2)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{i(this.auth).then(o=>{if(!n&&TS(window.grecaptcha))r(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=o2();l.length!==0&&(l+=o),ck(l).then(()=>{r(o,s,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}async function VS(e,t,n,i=!1){const r=new f2(e);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const a=Object.assign({},t);return i?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function mf(e,t,n,i){var r;if(!((r=e._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await VS(e,t,n,n==="getOobCode");return i(e,s)}else return i(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await VS(e,t,n,n==="getOobCode");return i(e,a)}else return Promise.reject(s)})}/**
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
 */function dk(e,t){const n=ly(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(df(s,t??{}))return r;xi(r,"already-initialized")}return n.initialize({options:t})}function h2(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Fr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function fk(e,t,n){const i=ts(e);We(i._canInitEmulator,i,"emulator-config-failed"),We(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!1,s=hk(t),{host:a,port:o}=m2(t),l=o===null?"":`:${o}`;i.config.emulator={url:`${s}//${a}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),v2()}function hk(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function m2(e){const t=hk(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:DS(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:DS(a)}}}function DS(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function v2(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class gy{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Mr("not implemented")}_getIdTokenResponse(t){return Mr("not implemented")}_linkToIdToken(t,n){return Mr("not implemented")}_getReauthenticationResolver(t){return Mr("not implemented")}}async function g2(e,t){return yr(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function p2(e,t){return bc(e,"POST","/v1/accounts:signInWithPassword",es(e,t))}async function y2(e,t){return yr(e,"POST","/v1/accounts:sendOobCode",es(e,t))}async function _2(e,t){return y2(e,t)}/**
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
 */async function b2(e,t){return bc(e,"POST","/v1/accounts:signInWithEmailLink",es(e,t))}async function w2(e,t){return bc(e,"POST","/v1/accounts:signInWithEmailLink",es(e,t))}/**
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
 */class Fu extends gy{constructor(t,n,i,r=null){super("password",i),this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new Fu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Fu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mf(t,n,"signInWithPassword",p2);case"emailLink":return b2(t,{email:this._email,oobCode:this._password});default:xi(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mf(t,i,"signUpPassword",g2);case"emailLink":return w2(t,{idToken:n,email:this._email,oobCode:this._password});default:xi(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Fo(e,t){return bc(e,"POST","/v1/accounts:signInWithIdp",es(e,t))}/**
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
 */const S2="http://localhost";class Ca extends gy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ca(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=cy(n,["providerId","signInMethod"]);if(!i||!r)return null;const a=new Ca(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Fo(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Fo(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fo(t,n)}buildRequest(){const t={requestUri:S2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=cl(n)}return t}}/**
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
 */function I2(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function E2(e){const t=eu(tu(e)).link,n=t?eu(tu(t)).deep_link_id:null,i=eu(tu(e)).deep_link_id;return(i?eu(tu(i)).link:null)||i||n||t||e}class py{constructor(t){var n,i,r,s,a,o;const l=eu(tu(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(i=l.oobCode)!==null&&i!==void 0?i:null,d=I2((r=l.mode)!==null&&r!==void 0?r:null);We(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=l.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=E2(t);try{return new py(n)}catch{return null}}}/**
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
 */class dl{constructor(){this.providerId=dl.PROVIDER_ID}static credential(t,n){return Fu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=py.parseLink(n);return We(i,"argument-error"),Fu._fromEmailAndCode(t,i.code,i.tenantId)}}dl.PROVIDER_ID="password";dl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wc extends yy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class bs extends wc{constructor(){super("facebook.com")}static credential(t){return Ca._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bs.credentialFromTaggedObject(t)}static credentialFromError(t){return bs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bs.credential(t.oauthAccessToken)}catch{return null}}}bs.FACEBOOK_SIGN_IN_METHOD="facebook.com";bs.PROVIDER_ID="facebook.com";/**
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
 */class Or extends wc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ca._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Or.credential(n,i)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class ws extends wc{constructor(){super("github.com")}static credential(t){return Ca._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ws.credentialFromTaggedObject(t)}static credentialFromError(t){return ws.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ws.credential(t.oauthAccessToken)}catch{return null}}}ws.GITHUB_SIGN_IN_METHOD="github.com";ws.PROVIDER_ID="github.com";/**
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
 */class Ss extends wc{constructor(){super("twitter.com")}static credential(t,n){return Ca._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ss.credentialFromTaggedObject(t)}static credentialFromError(t){return Ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Ss.credential(n,i)}catch{return null}}}Ss.TWITTER_SIGN_IN_METHOD="twitter.com";Ss.PROVIDER_ID="twitter.com";/**
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
 */async function C2(e,t){return bc(e,"POST","/v1/accounts:signUp",es(e,t))}/**
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
 */class Ta{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await Lr._fromIdTokenResponse(t,i,r),a=NS(i);return new Ta({user:s,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=NS(i);return new Ta({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function NS(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class vf extends pr{constructor(t,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,vf.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new vf(t,n,i,r)}}function mk(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vf._fromErrorAndOperation(e,s,t,i):s})}async function T2(e,t,n=!1){const i=await qo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ta._forOperation(e,"link",i)}/**
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
 */async function k2(e,t,n=!1){const{auth:i}=e;if(Li(i.app))return Promise.reject(Hr(i));const r="reauthenticate";try{const s=await qo(e,mk(i,r,t,e),n);We(s.idToken,i,"internal-error");const a=my(s.idToken);We(a,i,"internal-error");const{sub:o}=a;return We(e.uid===o,i,"user-mismatch"),Ta._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xi(i,"user-mismatch"),s}}/**
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
 */async function vk(e,t,n=!1){if(Li(e.app))return Promise.reject(Hr(e));const i="signIn",r=await mk(e,i,t),s=await Ta._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function A2(e,t){return vk(ts(e),t)}/**
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
 */async function gk(e){const t=ts(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function CQ(e,t,n){const i=ts(e);await mf(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",_2)}async function TQ(e,t,n){if(Li(e.app))return Promise.reject(Hr(e));const i=ts(e),a=await mf(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",C2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gk(e),l}),o=await Ta._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(o.user),o}function kQ(e,t,n){return Li(e.app)?Promise.reject(Hr(e)):A2(Jt(e),dl.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&gk(e),i})}/**
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
 */async function P2(e,t){return yr(e,"POST","/v1/accounts:update",t)}/**
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
 */async function AQ(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=Jt(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await qo(i,P2(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const o=i.providerData.find(({providerId:l})=>l==="password");o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function pk(e,t,n,i){return Jt(e).onIdTokenChanged(t,n,i)}function R2(e,t,n){return Jt(e).beforeAuthStateChanged(t,n)}function x2(e){return Jt(e).signOut()}const gf="__sak";/**
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
 */class yk{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gf,"1"),this.storage.removeItem(gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const V2=1e3,D2=10;class _k extends yk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lk(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const i=t.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);e2()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,D2):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},V2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}_k.type="LOCAL";const bk=_k;/**
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
 */class wk extends yk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}wk.type="SESSION";const _y=wk;/**
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
 */function N2(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new yh(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(a).map(async u=>u(n.origin,s)),l=await N2(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
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
 */function by(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class O2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=by("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ar(){return window}function M2(e){ar().location.href=e}/**
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
 */function Sk(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function L2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F2(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function B2(){return Sk()?self:null}/**
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
 */const Ik="firebaseLocalStorageDb",$2=1,pf="firebaseLocalStorage",Ek="fbase_key";class Sc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(e,t){return e.transaction([pf],t?"readwrite":"readonly").objectStore(pf)}function U2(){const e=indexedDB.deleteDatabase(Ik);return new Sc(e).toPromise()}function rg(){const e=indexedDB.open(Ik,$2);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(pf,{keyPath:Ek})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(pf)?t(i):(i.close(),await U2(),t(await rg()))})})}async function OS(e,t,n){const i=_h(e,!0).put({[Ek]:t,value:n});return new Sc(i).toPromise()}async function H2(e,t){const n=_h(e,!1).get(t),i=await new Sc(n).toPromise();return i===void 0?null:i.value}function MS(e,t){const n=_h(e,!0).delete(t);return new Sc(n).toPromise()}const j2=800,W2=3;class Ck{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rg(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>W2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(B2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await L2(),!this.activeServiceWorker)return;this.sender=new O2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||F2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await rg();return await OS(t,gf,"1"),await MS(t,gf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>OS(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>H2(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>MS(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=_h(r,!1).getAll();return new Sc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ck.type="LOCAL";const Tk=Ck;new _c(3e4,6e4);/**
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
 */function kk(e,t){return t?Fr(t):(We(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class wy extends gy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function z2(e){return vk(e.auth,new wy(e),e.bypassAuthState)}function q2(e){const{auth:t,user:n}=e;return We(n,t,"internal-error"),k2(n,new wy(e),e.bypassAuthState)}async function G2(e){const{auth:t,user:n}=e;return We(n,t,"internal-error"),T2(n,new wy(e),e.bypassAuthState)}/**
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
 */class Ak{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return z2;case"linkViaPopup":case"linkViaRedirect":return G2;case"reauthViaPopup":case"reauthViaRedirect":return q2;default:xi(this.auth,"internal-error")}}resolve(t){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const K2=new _c(2e3,1e4);async function PQ(e,t,n){if(Li(e.app))return Promise.reject(Ui(e,"operation-not-supported-in-this-environment"));const i=ts(e);OF(e,t,yy);const r=kk(i,n);return new ca(i,"signInViaPopup",t,r).executeNotNull()}class ca extends Ak{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ca.currentPopupAction&&ca.currentPopupAction.cancel(),ca.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return We(t,this.auth,"internal-error"),t}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const t=by();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ca.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,K2.get())};t()}}ca.currentPopupAction=null;/**
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
 */const Y2="pendingRedirect",$d=new Map;class Q2 extends Ak{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=$d.get(this.auth._key());if(!t){try{const i=await X2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}$d.set(this.auth._key(),t)}return this.bypassAuthState||$d.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function X2(e,t){const n=eB(t),i=Z2(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function J2(e,t){$d.set(e._key(),t)}function Z2(e){return Fr(e._redirectPersistence)}function eB(e){return Bd(Y2,e.config.apiKey,e.name)}async function tB(e,t,n=!1){if(Li(e.app))return Promise.reject(Hr(e));const i=ts(e),r=kk(i,t),a=await new Q2(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
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
 */const nB=10*60*1e3;class iB{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rB(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Pk(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ui(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nB&&this.cachedEventUids.clear(),this.cachedEventUids.has(LS(t))}saveEventToCache(t){this.cachedEventUids.add(LS(t)),this.lastProcessedEventTime=Date.now()}}function LS(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Pk({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rB(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pk(e);default:return!1}}/**
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
 */async function sB(e,t={}){return yr(e,"GET","/v1/projects",t)}/**
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
 */const aB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oB=/^https?/;async function lB(e){if(e.config.emulator)return;const{authorizedDomains:t}=await sB(e);for(const n of t)try{if(uB(n))return}catch{}xi(e,"unauthorized-domain")}function uB(e){const t=ng(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!oB.test(n))return!1;if(aB.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const cB=new _c(3e4,6e4);function FS(){const e=ar().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function dB(e){return new Promise((t,n)=>{var i,r,s;function a(){FS(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{FS(),n(Ui(e,"network-request-failed"))},timeout:cB.get()})}if(!((r=(i=ar().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=ar().gapi)===null||s===void 0)&&s.load)a();else{const o=u2("iframefcb");return ar()[o]=()=>{gapi.load?a():n(Ui(e,"network-request-failed"))},ck(`${l2()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Ud=null,t})}let Ud=null;function fB(e){return Ud=Ud||dB(e),Ud}/**
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
 */const hB=new _c(5e3,15e3),mB="__/auth/iframe",vB="emulator/auth/iframe",gB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yB(e){const t=e.config;We(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?hy(t,vB):`https://${e.config.authDomain}/${mB}`,i={apiKey:t.apiKey,appName:e.name,v:Ws},r=pB.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${cl(i).slice(1)}`}async function _B(e){const t=await fB(e),n=ar().gapi;return We(n,e,"internal-error"),t.open({where:document.body,url:yB(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gB,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=Ui(e,"network-request-failed"),o=ar().setTimeout(()=>{s(a)},hB.get());function l(){ar().clearTimeout(o),r(i)}i.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const bB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wB=500,SB=600,IB="_blank",EB="http://localhost";class BS{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CB(e,t,n,i=wB,r=SB){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},bB),{width:i.toString(),height:r.toString(),top:s,left:a}),u=zn().toLowerCase();n&&(o=ik(u)?IB:n),tk(u)&&(t=t||EB,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,g])=>`${h}${v}=${g},`,"");if(ZF(u)&&o!=="_self")return TB(t||"",o),new BS(null);const d=window.open(t||"",o,c);We(d,e,"popup-blocked");try{d.focus()}catch{}return new BS(d)}function TB(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const kB="__/auth/handler",AB="emulator/auth/handler",PB=encodeURIComponent("fac");async function $S(e,t,n,i,r,s){We(e.config.authDomain,e,"auth-domain-config-required"),We(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ws,eventId:r};if(t instanceof yy){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Qv(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries({}))a[c]=d}if(t instanceof wc){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(a.scopes=c.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${PB}=${encodeURIComponent(l)}`:"";return`${RB(e)}?${cl(o).slice(1)}${u}`}function RB({config:e}){return e.emulator?hy(e,AB):`https://${e.authDomain}/${kB}`}/**
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
 */const nv="webStorageSupport";class xB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_y,this._completeRedirectFn=tB,this._overrideRedirectResult=J2}async _openPopup(t,n,i,r){var s;qr((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await $S(t,n,i,ng(),r);return CB(t,a,by())}async _openRedirect(t,n,i,r){await this._originValidation(t);const s=await $S(t,n,i,ng(),r);return M2(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(qr(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await _B(t),i=new iB(t);return n.register("authEvent",r=>(We(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(nv,{type:nv},r=>{var s;const a=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[nv];a!==void 0&&n(!!a),xi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lB(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lk()||nk()||vy()}}const Rk=xB;var US="@firebase/auth",HS="1.7.9";/**
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
 */class VB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){We(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NB(e){dr(new Wi("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;We(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uk(e)},u=new s2(i,r,s,l);return h2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),dr(new Wi("auth-internal",t=>{const n=ts(t.getProvider("auth").getImmediate());return(i=>new VB(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(US,HS,DB(e)),pi(US,HS,"esm2017")}/**
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
 */const OB=5*60,MB=LT("authIdTokenMaxAge")||OB;let jS=null;const LB=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>MB)return;const r=n==null?void 0:n.token;jS!==r&&(jS=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function FB(e=uy()){const t=ly(e,"auth");if(t.isInitialized())return t.getImmediate();const n=dk(e,{popupRedirectResolver:Rk,persistence:[Tk,bk,_y]}),i=LT("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=LB(s.toString());R2(n,a,()=>a(n.currentUser)),pk(n,o=>a(o))}}const r=OT("auth");return r&&fk(n,`http://${r}`),n}function BB(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}a2({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=Ui("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",BB().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NB("Browser");/**
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
 */const $B=new Map,UB={activated:!1,tokenObservers:[]};function zi(e){return $B.get(e)||Object.assign({},UB)}const WS={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class HB{constructor(t,n,i,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Nu,this.pending.promise.catch(n=>{}),await jB(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Nu,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function jB(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const WB={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},yf=new ul("appCheck","AppCheck",WB);function xk(e){if(!zi(e).activated)throw yf.create("use-before-activation",{appName:e.name})}/**
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
 */const zB="firebase-app-check-database",qB=1,sg="firebase-app-check-store";let vd=null;function GB(){return vd||(vd=new Promise((e,t)=>{try{const n=indexedDB.open(zB,qB);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var r;t(yf.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(sg,{keyPath:"compositeKey"})}}}catch(n){t(yf.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),vd)}function KB(e,t){return YB(QB(e),t)}async function YB(e,t){const i=(await GB()).transaction(sg,"readwrite"),s=i.objectStore(sg).put({compositeKey:e,value:t});return new Promise((a,o)=>{s.onsuccess=l=>{a()},i.onerror=l=>{var u;o(yf.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function QB(e){return`${e.options.appId}-${e.name}`}/**
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
 */const ag=new yc("@firebase/app-check");function zS(e,t){return $T()?KB(e,t).catch(n=>{ag.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const XB={error:"UNKNOWN_ERROR"};function JB(e){return mh.encodeString(JSON.stringify(e),!1)}async function og(e,t=!1){const n=e.app;xk(n);const i=zi(n);let r=i.token,s;if(r&&!nu(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(nu(l)?r=l:await zS(n,void 0))}if(!t&&r&&nu(r))return{token:r.token};let a=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),a=!0),r=await zi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?ag.warn(l.message):ag.error(l),s=l}let o;return r?s?nu(r)?o={token:r.token,internalError:s}:o=GS(s):(o={token:r.token},i.token=r,await zS(n,r)):o=GS(s),a&&n$(n,o),o}async function ZB(e){const t=e.app;xk(t);const{provider:n}=zi(t);{const{token:i}=await n.getToken();return{token:i}}}function e$(e,t,n,i){const{app:r}=e,s=zi(r),a={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&nu(s.token)){const o=s.token;Promise.resolve().then(()=>{n({token:o.token}),qS(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>qS(e))}function Vk(e,t){const n=zi(e),i=n.tokenObservers.filter(r=>r.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function qS(e){const{app:t}=e,n=zi(t);let i=n.tokenRefresher;i||(i=t$(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function t$(e){const{app:t}=e;return new HB(async()=>{const n=zi(t);let i;if(n.token?i=await og(e,!0):i=await og(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=zi(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},WS.RETRIAL_MIN_WAIT,WS.RETRIAL_MAX_WAIT)}function n$(e,t){const n=zi(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function nu(e){return e.expireTimeMillis-Date.now()>0}function GS(e){return{token:JB(XB),error:e}}/**
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
 */class i${constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=zi(this.app);for(const n of t)Vk(this.app,n.next);return Promise.resolve()}}function r$(e,t){return new i$(e,t)}function s$(e){return{getToken:t=>og(e,t),getLimitedUseToken:()=>ZB(e),addTokenListener:t=>e$(e,"INTERNAL",t),removeTokenListener:t=>Vk(e.app,t)}}const a$="@firebase/app-check",o$="0.8.8",l$="app-check",KS="app-check-internal";function u$(){dr(new Wi(l$,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return r$(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(KS).initialize()})),dr(new Wi(KS,e=>{const t=e.getProvider("app-check").getImmediate();return s$(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),pi(a$,o$)}u$();var c$="firebase",d$="10.13.2";/**
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
 */pi(c$,d$,"app");const Dk=Symbol("firebaseApp");function Ic(e){return Ua()&&$e(Dk,null)||uy(e)}const nr=()=>{},f$=typeof window<"u";function Sy(e,t){return t.split(".").reduce((n,i)=>n&&n[i],e)}function h$(e,t,n){const i=(""+t).split("."),r=i.pop(),s=i.reduce((a,o)=>a&&a[o],e);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function Ha(e){return!!e&&typeof e=="object"}const m$=Object.prototype;function v$(e){return Ha(e)&&Object.getPrototypeOf(e)===m$}function Iy(e){return Ha(e)&&e.type==="document"}function g$(e){return Ha(e)&&e.type==="collection"}function p$(e){return Iy(e)||g$(e)}function y$(e){return Ha(e)&&e.type==="query"}function _$(e){return Ha(e)&&"ref"in e}function b$(e){return Ha(e)&&typeof e.bucket=="string"}function w$(e,t){let n;return()=>{if(!n)return n=!0,e(t())}}const S$=Symbol.for("v-scx");function I$(){return!!$e(S$,0)}const gd=new WeakMap;function E$(e,t){if(!gd.has(e)){const n=dc(!0);gd.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),gd.delete(e)}}return gd.get(e)}const Nk=new WeakMap;function C$(e){return Nk.get(Ic(e))}const pd=new WeakMap;function Ok(e){const t=Ic(e);if(!pd.has(t)){let n;const r=[new Promise(s=>{n=s}),s=>{pd.set(t,s),n(s.value)}];pd.set(t,r)}return pd.get(t)}function YS(e){const t=Ok(e);return Array.isArray(t)?t[0]:Promise.resolve(t.value)}function T$(e,t){pk(t,n=>{const i=Ok();e.value=n,Array.isArray(i)&&i[1](e)})}var QS={};const XS="@firebase/database",JS="1.0.8";/**
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
 */let Mk="";function k$(e){Mk=e}/**
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
 */class A${constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),En(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Ou(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class P${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Zr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const Lk=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new A$(t)}}catch{}return new P$},da=Lk("localStorage"),R$=Lk("sessionStorage");/**
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
 */const Bo=new yc("@firebase/database"),x$=function(){let e=1;return function(){return e++}}(),Fk=function(e){const t=CL(e),n=new bL;n.update(t);const i=n.digest();return mh.encodeByteArray(i)},Ec=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=Ec.apply(null,i):typeof i=="object"?t+=En(i):t+=i,t+=" "}return t};let gu=null,ZS=!0;const V$=function(e,t){ke(!t,"Can't turn on custom loggers persistently."),Bo.logLevel=Je.VERBOSE,gu=Bo.log.bind(Bo)},Ln=function(...e){if(ZS===!0&&(ZS=!1,gu===null&&R$.get("logging_enabled")===!0&&V$()),gu){const t=Ec.apply(null,e);gu(t)}},Cc=function(e){return function(...t){Ln(e,...t)}},lg=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ec(...e);Bo.error(t)},ka=function(...e){const t=`FIREBASE FATAL ERROR: ${Ec(...e)}`;throw Bo.error(t),new Error(t)},yi=function(...e){const t="FIREBASE WARNING: "+Ec(...e);Bo.warn(t)},D$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bk=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N$=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Go="[MIN_NAME]",Aa="[MAX_NAME]",fl=function(e,t){if(e===t)return 0;if(e===Go||t===Aa)return-1;if(t===Go||e===Aa)return 1;{const n=e0(e),i=e0(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},O$=function(e,t){return e===t?0:e<t?-1:1},ql=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+En(t))},Ey=function(e){if(typeof e!="object"||e===null)return En(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=En(t[i]),n+=":",n+=Ey(e[t[i]]);return n+="}",n},$k=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Vi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Uk=function(e){ke(!Bk(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,a,o,l;e===0?(s=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=o+i,a=Math.round(e*Math.pow(2,n-o)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},M$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},L$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},F$=new RegExp("^-?(0*)\\d{1,10}$"),B$=-2147483648,$$=2147483647,e0=function(e){if(F$.test(e)){const t=Number(e);if(t>=B$&&t<=$$)return t}return null},Tc=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw yi("Exception was thrown by user callback.",n),t},Math.floor(0))}},U$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pu=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class H${constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){yi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class j${constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yi(t)}}/**
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
 */const Cy="5",Hk="v",jk="s",Wk="r",zk="f",qk=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gk="ls",Kk="p",ug="ac",Yk="websocket",Qk="long_polling";/**
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
 */class W${constructor(t,n,i,r,s=!1,a="",o=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=a,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=da.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&da.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function z$(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Xk(e,t,n){ke(typeof t=="string","typeof type must == string"),ke(typeof n=="object","typeof params must == object");let i;if(t===Yk)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Qk)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);z$(e)&&(n.ns=e.namespace);const r=[];return Vi(n,(s,a)=>{r.push(s+"="+a)}),i+r.join("&")}/**
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
 */class q${constructor(){this.counters_={}}incrementCounter(t,n=1){Zr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return tL(this.counters_)}}/**
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
 */const iv={},rv={};function Ty(e){const t=e.toString();return iv[t]||(iv[t]=new q$),iv[t]}function G$(e,t){const n=e.toString();return rv[n]||(rv[n]=t()),rv[n]}/**
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
 */class K${constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Tc(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const t0="start",Y$="close",Q$="pLPCommand",X$="pRTLPCB",Jk="id",Zk="pw",eA="ser",J$="cb",Z$="seg",eU="ts",tU="d",nU="dframe",tA=1870,nA=30,iU=tA-nA,rU=25e3,sU=3e4;class Eo{constructor(t,n,i,r,s,a,o){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=a,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cc(t),this.stats_=Ty(n),this.urlFn=l=>(this.appCheckToken&&(l[ug]=this.appCheckToken),Xk(n,Qk,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new K$(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sU)),N$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ky((...s)=>{const[a,o,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===t0)this.id=o,this.password=l;else if(a===Y$)o?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(o,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...s)=>{const[a,o]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(a,o)},()=>{this.onClosed_()},this.urlFn);const i={};i[t0]="t",i[eA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[J$]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Hk]=Cy,this.transportSessionId&&(i[jk]=this.transportSessionId),this.lastSessionId&&(i[Gk]=this.lastSessionId),this.applicationId&&(i[Kk]=this.applicationId),this.appCheckToken&&(i[ug]=this.appCheckToken),typeof location<"u"&&location.hostname&&qk.test(location.hostname)&&(i[Wk]=zk);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Eo.forceAllow_=!0}static forceDisallow(){Eo.forceDisallow_=!0}static isAvailable(){return Eo.forceAllow_?!0:!Eo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!M$()&&!L$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=En(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=DT(n),r=$k(i,iU);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[nU]="t",i[Jk]=t,i[Zk]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=En(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ky{constructor(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x$(),window[Q$+this.uniqueCallbackIdentifier]=t,window[X$+this.uniqueCallbackIdentifier]=n,this.myIFrame=ky.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(o){Ln("frame writing exception"),o.stack&&Ln(o.stack),Ln(o)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ln("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Jk]=this.myID,t[Zk]=this.myPW,t[eA]=this.currentSerial;let n=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nA+i.length<=tA;){const a=this.pendingSegs.shift();i=i+"&"+Z$+r+"="+a.seg+"&"+eU+r+"="+a.ts+"&"+tU+r+"="+a.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(rU)),s=()=>{clearTimeout(r),i()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ln("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const aU=16384,oU=45e3;let _f=null;typeof MozWebSocket<"u"?_f=MozWebSocket:typeof WebSocket<"u"&&(_f=WebSocket);class Mi{constructor(t,n,i,r,s,a,o){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cc(this.connId),this.stats_=Ty(n),this.connURL=Mi.connectionURL_(n,a,o,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,r,s){const a={};return a[Hk]=Cy,typeof location<"u"&&location.hostname&&qk.test(location.hostname)&&(a[Wk]=zk),n&&(a[jk]=n),i&&(a[Gk]=i),r&&(a[ug]=r),s&&(a[Kk]=s),Xk(t,Yk,a)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,da.set("previous_websocket_failure",!0);try{let i;BT(),this.mySock=new _f(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Mi.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&_f!==null&&!Mi.forceDisallow_}static previouslyFailed(){return da.isInMemoryStorage||da.get("previous_websocket_failure")===!0}markConnectionHealthy(){da.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ou(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(ke(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=En(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=$k(n,aU);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oU))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mi.responsesRequiredToBeHealthy=2;Mi.healthyTimeout=3e4;/**
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
 */class Bu{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Eo,Mi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Mi&&Mi.isAvailable();let i=n&&!Mi.previouslyFailed();if(t.webSocketOnly&&(n||yi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Mi];else{const r=this.transports_=[];for(const s of Bu.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Bu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bu.globalTransportInitialized_=!1;/**
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
 */const lU=6e4,uU=5e3,cU=10*1024,dU=100*1024,sv="t",n0="d",fU="s",i0="r",hU="e",r0="o",s0="a",a0="n",o0="p",mU="h";class vU{constructor(t,n,i,r,s,a,o,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=a,this.onReady_=o,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cc("c:"+this.id+":"),this.transportManager_=new Bu(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=pu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(sv in t){const n=t[sv];n===s0?this.upgradeIfSecondaryHealthy_():n===i0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===r0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ql("t",t),i=ql("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:o0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:s0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:a0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ql("t",t),i=ql("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ql(sv,t);if(n0 in t){const i=t[n0];if(n===mU){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===a0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fU?this.onConnectionShutdown_(i):n===i0?this.onReset_(i):n===hU?lg("Server Error: "+i):n===r0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lg("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Cy!==i&&yi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),pu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lU))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:o0,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(da.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class iA{put(t,n,i,r){}merge(t,n,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class rA{constructor(t){this.allowedEvents_=t,this.listeners_={},ke(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const r=this.getInitialEvent(t);r&&n.apply(i,r)}off(t,n,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(t){ke(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class bf extends rA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ay()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bf}getInitialEvent(t){return ke(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const l0=32,u0=768;class $t{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function wt(){return new $t("")}function rt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Rs(e){return e.pieces_.length-e.pieceNum_}function Mt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new $t(e.pieces_,t)}function sA(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gU(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function aA(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function oA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $t(t,0)}function fn(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof $t)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new $t(n,0)}function tt(e){return e.pieceNum_>=e.pieces_.length}function Ai(e,t){const n=rt(e),i=rt(t);if(n===null)return t;if(n===i)return Ai(Mt(e),Mt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function lA(e,t){if(Rs(e)!==Rs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Fi(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Rs(e)>Rs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class pU{constructor(t,n){this.errorPrefix_=n,this.parts_=aA(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=gh(this.parts_[i]);uA(this)}}function yU(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=gh(t),uA(e)}function _U(e){const t=e.parts_.pop();e.byteLength_-=gh(t),e.parts_.length>0&&(e.byteLength_-=1)}function uA(e){if(e.byteLength_>u0)throw new Error(e.errorPrefix_+"has a key path longer than "+u0+" bytes ("+e.byteLength_+").");if(e.parts_.length>l0)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+l0+") or object contains a cycle "+oa(e))}function oa(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class Ay extends rA{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ay}getInitialEvent(t){return ke(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const Gl=1e3,bU=60*5*1e3,c0=30*1e3,wU=1.3,SU=3e4,IU="server_kill",d0=3;class jr extends iA{constructor(t,n,i,r,s,a,o,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=jr.nextPersistentConnectionId_++,this.log_=Cc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gl,this.maxReconnectDelay_=bU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!BT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ay.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&bf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const r=++this.requestNumber_,s={r,a:t,b:n};this.log_(En(s)),ke(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const n=new Nu,r={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:a=>{const o=a.d;a.s==="ok"?n.resolve(o):n.reject(o)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,r){this.initConnection_();const s=t._queryIdentifier,a=t._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),ke(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ke(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:n,query:t,tag:i};this.listens.get(a).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},a="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(a,s,o=>{const l=o.d,u=o.s;jr.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",o),u!=="ok"&&this.removeListen_(i,r),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Zr(t,"w")){const i=zo(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();yi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||_L(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=c0)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=yL(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,a=r.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),ke(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,n)}sendUnlisten_(t,n,i,r){this.log_("Unlisten on "+t+" for "+n);const s={p:t},a="n";r&&(s.q=i,s.t=r),this.sendRequest(a,s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,a=>{r&&setTimeout(()=>{r(a.s,a.d)},Math.floor(0))})}put(t,n,i,r){this.putInternal("p",t,n,i,r)}merge(t,n,i,r){this.putInternal("m",t,n,i,r)}putInternal(t,n,i,r,s){this.initConnection_();const a={p:n,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:t,request:a,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+En(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):lg("Unrecognized action received from server: "+En(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){ke(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gl,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Gl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SU&&(this.reconnectDelay_=Gl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+jr.nextConnectionId_++,s=this.lastSessionId;let a=!1,o=null;const l=function(){o?o.close():(a=!0,i())},u=function(d){ke(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);a?Ln("getToken() completed but was canceled"):(Ln("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,o=new vU(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,v=>{yi(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(IU)},s))}catch(d){this.log_("Failed to get token: "+d),a||(this.repoInfo_.nodeAdmin&&yi(d),l())}}}interrupt(t){Ln("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ln("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Qv(this.interruptReasons_)&&(this.reconnectDelay_=Gl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(s=>Ey(s)).join("$"):i="default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,n){const i=new $t(t).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,n){Ln("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=d0&&(this.reconnectDelay_=c0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ln("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=d0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Mk.replace(/\./g,"-")]=1,ay()?t["framework.cordova"]=1:FT()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=bf.getInstance().currentlyOnline();return Qv(this.interruptReasons_)&&t}}jr.nextPersistentConnectionId_=0;jr.nextConnectionId_=0;/**
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
 */class bh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new st(Go,t),r=new st(Go,n);return this.compare(i,r)!==0}minPost(){return st.MIN}}/**
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
 */let yd;class cA extends bh{static get __EMPTY_NODE(){return yd}static set __EMPTY_NODE(t){yd=t}compare(t,n){return fl(t.name,n.name)}isDefinedOn(t){throw ll("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return st.MIN}maxPost(){return new st(Aa,yd)}makePost(t,n){return ke(typeof t=="string","KeyIndex indexValue must always be a string."),new st(t,yd)}toString(){return".key"}}const $o=new cA;/**
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
 */let _d=class{constructor(t,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let a=1;for(;!t.isEmpty();)if(t=t,a=n?i(t.key,n):1,r&&(a*=-1),a<0)this.isReverse_?t=t.left:t=t.right;else if(a===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}},di=class iu{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??iu.RED,this.left=r??ir.EMPTY_NODE,this.right=s??ir.EMPTY_NODE}copy(t,n,i,r,s){return new iu(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ir.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,r;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return ir.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,iu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,iu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}};di.RED=!0;di.BLACK=!1;class EU{copy(t,n,i,r,s){return this}insert(t,n,i){return new di(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let ir=class Hd{constructor(t,n=Hd.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Hd(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,di.BLACK,null,null))}remove(t){return new Hd(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,di.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new _d(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new _d(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new _d(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new _d(this.root_,null,this.comparator_,!0,t)}};ir.EMPTY_NODE=new EU;/**
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
 */function CU(e,t){return fl(e.name,t.name)}function Py(e,t){return fl(e,t)}/**
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
 */let cg;function TU(e){cg=e}const dA=function(e){return typeof e=="number"?"number:"+Uk(e):"string:"+e},fA=function(e){if(e.isLeafNode()){const t=e.val();ke(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Zr(t,".sv"),"Priority must be a string or number.")}else ke(e===cg||e.isEmpty(),"priority of unexpected type.");ke(e===cg||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let f0;class cn{constructor(t,n=cn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,ke(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fA(this.priorityNode_)}static set __childrenNodeConstructor(t){f0=t}static get __childrenNodeConstructor(){return f0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new cn(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:cn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return tt(t)?this:rt(t)===".priority"?this.priorityNode_:cn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:cn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=rt(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(ke(i!==".priority"||Rs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,cn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Mt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+dA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Uk(this.value_):t+=this.value_,this.lazyHash_=Fk(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===cn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof cn.__childrenNodeConstructor?-1:(ke(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,r=cn.VALUE_TYPE_ORDER.indexOf(n),s=cn.VALUE_TYPE_ORDER.indexOf(i);return ke(r>=0,"Unknown leaf type: "+n),ke(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}cn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let hA,mA;function kU(e){hA=e}function AU(e){mA=e}class PU extends bh{compare(t,n){const i=t.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?fl(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return st.MIN}maxPost(){return new st(Aa,new cn("[PRIORITY-POST]",mA))}makePost(t,n){const i=hA(t);return new st(n,new cn("[PRIORITY-POST]",i))}toString(){return".priority"}}const Un=new PU;/**
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
 */const RU=Math.log(2);class xU{constructor(t){const n=s=>parseInt(Math.log(s)/RU,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const r=i(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const wf=function(e,t,n,i){e.sort(t);const r=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=e[l],h=n?n(d):d,new di(h,d.node,di.BLACK,null,null);{const v=parseInt(c/2,10)+l,g=r(l,v),p=r(v+1,u);return d=e[v],h=n?n(d):d,new di(h,d.node,di.BLACK,g,p)}},s=function(l){let u=null,c=null,d=e.length;const h=function(g,p){const y=d-g,I=d;d-=g;const E=r(y+1,I),V=e[y],A=n?n(V):V;v(new di(A,V.node,p,null,E))},v=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const p=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));p?h(y,di.BLACK):(h(y,di.BLACK),h(y,di.RED))}return c},a=new xU(e.length),o=s(a);return new ir(i||t,o)};/**
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
 */let av;const ho={};class Br{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return ke(ho&&Un,"ChildrenNode.ts has not been loaded"),av=av||new Br({".priority":ho},{".priority":Un}),av}get(t){const n=zo(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof ir?n:null}hasIndex(t){return Zr(this.indexSet_,t.toString())}addIndex(t,n){ke(t!==$o,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(st.Wrap);let a=s.getNext();for(;a;)r=r||t.isDefinedOn(a.node),i.push(a),a=s.getNext();let o;r?o=wf(i,t.getCompare()):o=ho;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=o,new Br(c,u)}addToIndexes(t,n){const i=cf(this.indexes_,(r,s)=>{const a=zo(this.indexSet_,s);if(ke(a,"Missing index implementation for "+s),r===ho)if(a.isDefinedOn(t.node)){const o=[],l=n.getIterator(st.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&o.push(u),u=l.getNext();return o.push(t),wf(o,a.getCompare())}else return ho;else{const o=n.get(t.name);let l=r;return o&&(l=l.remove(new st(t.name,o))),l.insert(t,t.node)}});return new Br(i,this.indexSet_)}removeFromIndexes(t,n){const i=cf(this.indexes_,r=>{if(r===ho)return r;{const s=n.get(t.name);return s?r.remove(new st(t.name,s)):r}});return new Br(i,this.indexSet_)}}/**
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
 */let Kl;class _t{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&fA(this.priorityNode_),this.children_.isEmpty()&&ke(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kl||(Kl=new _t(new ir(Py),null,Br.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kl}updatePriority(t){return this.children_.isEmpty()?this:new _t(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Kl:n}}getChild(t){const n=rt(t);return n===null?this:this.getImmediateChild(n).getChild(Mt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(ke(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new st(t,n);let r,s;n.isEmpty()?(r=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const a=r.isEmpty()?Kl:this.priorityNode_;return new _t(r,a,s)}}updateChild(t,n){const i=rt(t);if(i===null)return n;{ke(rt(t)!==".priority"||Rs(t)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Mt(t),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Un,(a,o)=>{n[a]=o.val(t),i++,s&&_t.INTEGER_REGEXP_.test(a)?r=Math.max(r,Number(a)):s=!1}),!t&&s&&r<2*i){const a=[];for(const o in n)a[o]=n[o];return a}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+dA(this.getPriority().val())+":"),this.forEachChild(Un,(n,i)=>{const r=i.hash();r!==""&&(t+=":"+n+":"+r)}),this.lazyHash_=t===""?"":Fk(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new st(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new st(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new st(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,r=>r);{const r=this.children_.getIteratorFrom(t.name,st.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,r=>r);{const r=this.children_.getReverseIteratorFrom(t.name,st.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)>0;)r.getNext(),s=r.peek();return r}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===kc?-1:0}withIndex(t){if(t===$o||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new _t(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===$o||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Un),r=n.getIterator(Un);let s=i.getNext(),a=r.getNext();for(;s&&a;){if(s.name!==a.name||!s.node.equals(a.node))return!1;s=i.getNext(),a=r.getNext()}return s===null&&a===null}else return!1;else return!1}}resolveIndex_(t){return t===$o?null:this.indexMap_.get(t.toString())}}_t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VU extends _t{constructor(){super(new ir(Py),_t.EMPTY_NODE,Br.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return _t.EMPTY_NODE}isEmpty(){return!1}}const kc=new VU;Object.defineProperties(st,{MIN:{value:new st(Go,_t.EMPTY_NODE)},MAX:{value:new st(Aa,kc)}});cA.__EMPTY_NODE=_t.EMPTY_NODE;cn.__childrenNodeConstructor=_t;TU(kc);AU(kc);/**
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
 */const DU=!0;function Fn(e,t=null){if(e===null)return _t.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),ke(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new cn(n,Fn(t))}if(!(e instanceof Array)&&DU){const n=[];let i=!1;if(Vi(e,(a,o)=>{if(a.substring(0,1)!=="."){const l=Fn(o);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new st(a,l)))}}),n.length===0)return _t.EMPTY_NODE;const s=wf(n,CU,a=>a.name,Py);if(i){const a=wf(n,Un.getCompare());return new _t(s,Fn(t),new Br({".priority":a},{".priority":Un}))}else return new _t(s,Fn(t),Br.Default)}else{let n=_t.EMPTY_NODE;return Vi(e,(i,r)=>{if(Zr(e,i)&&i.substring(0,1)!=="."){const s=Fn(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Fn(t))}}kU(Fn);/**
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
 */class NU extends bh{constructor(t){super(),this.indexPath_=t,ke(!tt(t)&&rt(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?fl(t.name,n.name):s}makePost(t,n){const i=Fn(t),r=_t.EMPTY_NODE.updateChild(this.indexPath_,i);return new st(n,r)}maxPost(){const t=_t.EMPTY_NODE.updateChild(this.indexPath_,kc);return new st(Aa,t)}toString(){return aA(this.indexPath_,0).join("/")}}/**
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
 */class OU extends bh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?fl(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return st.MIN}maxPost(){return st.MAX}makePost(t,n){const i=Fn(t);return new st(n,i)}toString(){return".value"}}const MU=new OU;/**
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
 */function LU(e){return{type:"value",snapshotNode:e}}function FU(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function BU(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function h0(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function $U(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Ry{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Un}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ke(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ke(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Go}hasEnd(){return this.endSet_}getIndexEndValue(){return ke(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ke(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Aa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ke(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Un}copy(){const t=new Ry;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function m0(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Un?n="$priority":e.index_===MU?n="$value":e.index_===$o?n="$key":(ke(e.index_ instanceof NU,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=En(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=En(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+En(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=En(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+En(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function v0(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Un&&(t.i=e.index_.toString()),t}/**
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
 */class Sf extends iA{constructor(t,n,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Cc("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(ke(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,r){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const a=Sf.getListenId_(t,i),o={};this.listens_[a]=o;const l=m0(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,i),zo(this.listens_,a)===o){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",r(h,null)}})}unlisten(t,n){const i=Sf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=m0(t._queryParams),i=t._path.toString(),r=new Nu;return this.restRequest_(i+".json",n,(s,a)=>{let o=a;s===404&&(o=null,s=null),s===null?(this.onDataUpdate_(i,o,!1,null),r.resolve(o)):r.reject(new Error(o))}),r.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+cl(n);this.log_("Sending REST request for "+a);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&o.readyState===4){this.log_("REST Response for "+a+" received. status:",o.status,"response:",o.responseText);let l=null;if(o.status>=200&&o.status<300){try{l=Ou(o.responseText)}catch{yi("Failed to parse JSON response for "+a+": "+o.responseText)}i(null,l)}else o.status!==401&&o.status!==404&&yi("Got unsuccessful REST response for "+a+" Status: "+o.status),i(o.status);i=null}},o.open("GET",a,!0),o.send()})}}/**
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
 */class UU{constructor(){this.rootNode_=_t.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function If(){return{value:null,children:new Map}}function vA(e,t,n){if(tt(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=rt(t);e.children.has(i)||e.children.set(i,If());const r=e.children.get(i);t=Mt(t),vA(r,t,n)}}function dg(e,t,n){e.value!==null?n(t,e.value):HU(e,(i,r)=>{const s=new $t(t.toString()+"/"+i);dg(r,s,n)})}function HU(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
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
 */class jU{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Vi(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=t,n}}/**
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
 */const g0=10*1e3,WU=30*1e3,zU=5*60*1e3;class qU{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jU(t);const i=g0+(WU-g0)*Math.random();pu(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;Vi(t,(r,s)=>{s>0&&Zr(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),pu(this.reportStats_.bind(this),Math.floor(Math.random()*2*zU))}}/**
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
 */var rr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rr||(rr={}));function gA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yA(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Ef{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=rr.ACK_USER_WRITE,this.source=gA()}operationForChild(t){if(tt(this.path)){if(this.affectedTree.value!=null)return ke(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $t(t));return new Ef(wt(),n,this.revert)}}else return ke(rt(this.path)===t,"operationForChild called for unrelated child."),new Ef(Mt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Pa{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=rr.OVERWRITE}operationForChild(t){return tt(this.path)?new Pa(this.source,wt(),this.snap.getImmediateChild(t)):new Pa(this.source,Mt(this.path),this.snap)}}/**
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
 */class $u{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=rr.MERGE}operationForChild(t){if(tt(this.path)){const n=this.children.subtree(new $t(t));return n.isEmpty()?null:n.value?new Pa(this.source,wt(),n.value):new $u(this.source,wt(),n)}else return ke(rt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new $u(this.source,Mt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xy{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(tt(t))return this.isFullyInitialized()&&!this.filtered_;const n=rt(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function GU(e,t,n,i){const r=[],s=[];return t.forEach(a=>{a.type==="child_changed"&&e.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&s.push($U(a.childName,a.snapshotNode))}),Yl(e,r,"child_removed",t,i,n),Yl(e,r,"child_added",t,i,n),Yl(e,r,"child_moved",s,i,n),Yl(e,r,"child_changed",t,i,n),Yl(e,r,"value",t,i,n),r}function Yl(e,t,n,i,r,s){const a=i.filter(o=>o.type===n);a.sort((o,l)=>YU(e,o,l)),a.forEach(o=>{const l=KU(e,o,s);r.forEach(u=>{u.respondsTo(o.type)&&t.push(u.createEvent(l,e.query_))})})}function KU(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function YU(e,t,n){if(t.childName==null||n.childName==null)throw ll("Should only compare child_ events.");const i=new st(t.childName,t.snapshotNode),r=new st(n.childName,n.snapshotNode);return e.index_.compare(i,r)}/**
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
 */function _A(e,t){return{eventCache:e,serverCache:t}}function yu(e,t,n,i){return _A(new xy(t,n,i),e.serverCache)}function bA(e,t,n,i){return _A(e.eventCache,new xy(t,n,i))}function fg(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ra(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let ov;const QU=()=>(ov||(ov=new ir(O$)),ov);class Ot{constructor(t,n=QU()){this.value=t,this.children=n}static fromObject(t){let n=new Ot(null);return Vi(t,(i,r)=>{n=n.set(new $t(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:wt(),value:this.value};if(tt(t))return null;{const i=rt(t),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Mt(t),n);return s!=null?{path:fn(new $t(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(tt(t))return this;{const n=rt(t),i=this.children.get(n);return i!==null?i.subtree(Mt(t)):new Ot(null)}}set(t,n){if(tt(t))return new Ot(n,this.children);{const i=rt(t),s=(this.children.get(i)||new Ot(null)).set(Mt(t),n),a=this.children.insert(i,s);return new Ot(this.value,a)}}remove(t){if(tt(t))return this.children.isEmpty()?new Ot(null):new Ot(null,this.children);{const n=rt(t),i=this.children.get(n);if(i){const r=i.remove(Mt(t));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Ot(null):new Ot(this.value,s)}else return this}}get(t){if(tt(t))return this.value;{const n=rt(t),i=this.children.get(n);return i?i.get(Mt(t)):null}}setTree(t,n){if(tt(t))return n;{const i=rt(t),s=(this.children.get(i)||new Ot(null)).setTree(Mt(t),n);let a;return s.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,s),new Ot(this.value,a)}}fold(t){return this.fold_(wt(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(fn(t,r),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,wt(),n)}findOnPath_(t,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(tt(t))return null;{const s=rt(t),a=this.children.get(s);return a?a.findOnPath_(Mt(t),fn(n,s),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,wt(),n)}foreachOnPath_(t,n,i){if(tt(t))return this;{this.value&&i(n,this.value);const r=rt(t),s=this.children.get(r);return s?s.foreachOnPath_(Mt(t),fn(n,r),i):new Ot(null)}}foreach(t){this.foreach_(wt(),t)}foreach_(t,n){this.children.inorderTraversal((i,r)=>{r.foreach_(fn(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
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
 */class Hi{constructor(t){this.writeTree_=t}static empty(){return new Hi(new Ot(null))}}function _u(e,t,n){if(tt(t))return new Hi(new Ot(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const r=i.path;let s=i.value;const a=Ai(r,t);return s=s.updateChild(a,n),new Hi(e.writeTree_.set(r,s))}else{const r=new Ot(n),s=e.writeTree_.setTree(t,r);return new Hi(s)}}}function p0(e,t,n){let i=e;return Vi(n,(r,s)=>{i=_u(i,fn(t,r),s)}),i}function y0(e,t){if(tt(t))return Hi.empty();{const n=e.writeTree_.setTree(t,new Ot(null));return new Hi(n)}}function hg(e,t){return ja(e,t)!=null}function ja(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Ai(n.path,t)):null}function _0(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Un,(i,r)=>{t.push(new st(i,r))}):e.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&t.push(new st(i,r.value))}),t}function ks(e,t){if(tt(t))return e;{const n=ja(e,t);return n!=null?new Hi(new Ot(n)):new Hi(e.writeTree_.subtree(t))}}function mg(e){return e.writeTree_.isEmpty()}function Ko(e,t){return wA(wt(),e.writeTree_,t)}function wA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((r,s)=>{r===".priority"?(ke(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=wA(fn(e,r),s,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(fn(e,".priority"),i)),n}}/**
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
 */function SA(e,t){return kA(t,e)}function XU(e,t,n,i,r){ke(i>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=_u(e.visibleWrites,t,n)),e.lastWriteId=i}function JU(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function ZU(e,t){const n=e.allWrites.findIndex(o=>o.writeId===t);ke(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,a=e.allWrites.length-1;for(;r&&a>=0;){const o=e.allWrites[a];o.visible&&(a>=n&&e4(o,i.path)?r=!1:Fi(i.path,o.path)&&(s=!0)),a--}if(r){if(s)return t4(e),!0;if(i.snap)e.visibleWrites=y0(e.visibleWrites,i.path);else{const o=i.children;Vi(o,l=>{e.visibleWrites=y0(e.visibleWrites,fn(i.path,l))})}return!0}else return!1}function e4(e,t){if(e.snap)return Fi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Fi(fn(e.path,n),t))return!0;return!1}function t4(e){e.visibleWrites=IA(e.allWrites,n4,wt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function n4(e){return e.visible}function IA(e,t,n){let i=Hi.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const a=s.path;let o;if(s.snap)Fi(n,a)?(o=Ai(n,a),i=_u(i,o,s.snap)):Fi(a,n)&&(o=Ai(a,n),i=_u(i,wt(),s.snap.getChild(o)));else if(s.children){if(Fi(n,a))o=Ai(n,a),i=p0(i,o,s.children);else if(Fi(a,n))if(o=Ai(a,n),tt(o))i=p0(i,wt(),s.children);else{const l=zo(s.children,rt(o));if(l){const u=l.getChild(Mt(o));i=_u(i,wt(),u)}}}else throw ll("WriteRecord should have .snap or .children")}}return i}function EA(e,t,n,i,r){if(!i&&!r){const s=ja(e.visibleWrites,t);if(s!=null)return s;{const a=ks(e.visibleWrites,t);if(mg(a))return n;if(n==null&&!hg(a,wt()))return null;{const o=n||_t.EMPTY_NODE;return Ko(a,o)}}}else{const s=ks(e.visibleWrites,t);if(!r&&mg(s))return n;if(!r&&n==null&&!hg(s,wt()))return null;{const a=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Fi(u.path,t)||Fi(t,u.path))},o=IA(e.allWrites,a,t),l=n||_t.EMPTY_NODE;return Ko(o,l)}}}function i4(e,t,n){let i=_t.EMPTY_NODE;const r=ja(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Un,(s,a)=>{i=i.updateImmediateChild(s,a)}),i;if(n){const s=ks(e.visibleWrites,t);return n.forEachChild(Un,(a,o)=>{const l=Ko(ks(s,new $t(a)),o);i=i.updateImmediateChild(a,l)}),_0(s).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const s=ks(e.visibleWrites,t);return _0(s).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function r4(e,t,n,i,r){ke(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=fn(t,n);if(hg(e.visibleWrites,s))return null;{const a=ks(e.visibleWrites,s);return mg(a)?r.getChild(n):Ko(a,r.getChild(n))}}function s4(e,t,n,i){const r=fn(t,n),s=ja(e.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const a=ks(e.visibleWrites,r);return Ko(a,i.getNode().getImmediateChild(n))}else return null}function a4(e,t){return ja(e.visibleWrites,t)}function o4(e,t,n,i,r,s,a){let o;const l=ks(e.visibleWrites,t),u=ja(l,wt());if(u!=null)o=u;else if(n!=null)o=Ko(l,n);else return[];if(o=o.withIndex(a),!o.isEmpty()&&!o.isLeafNode()){const c=[],d=a.getCompare(),h=s?o.getReverseIteratorFrom(i,a):o.getIteratorFrom(i,a);let v=h.getNext();for(;v&&c.length<r;)d(v,i)!==0&&c.push(v),v=h.getNext();return c}else return[]}function l4(){return{visibleWrites:Hi.empty(),allWrites:[],lastWriteId:-1}}function vg(e,t,n,i){return EA(e.writeTree,e.treePath,t,n,i)}function CA(e,t){return i4(e.writeTree,e.treePath,t)}function b0(e,t,n,i){return r4(e.writeTree,e.treePath,t,n,i)}function Cf(e,t){return a4(e.writeTree,fn(e.treePath,t))}function u4(e,t,n,i,r,s){return o4(e.writeTree,e.treePath,t,n,i,r,s)}function Vy(e,t,n){return s4(e.writeTree,e.treePath,t,n)}function TA(e,t){return kA(fn(e.treePath,t),e.writeTree)}function kA(e,t){return{treePath:e,writeTree:t}}/**
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
 */class c4{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;ke(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ke(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,h0(i,t.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,BU(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,FU(i,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,h0(i,t.snapshotNode,r.oldSnap));else throw ll("Illegal combination of changes: "+t+" occurred after "+r)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class d4{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const AA=new d4;class Dy{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new xy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vy(this.writes_,t,i)}}getChildAfterChild(t,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ra(this.viewCache_),s=u4(this.writes_,r,n,1,i,t);return s.length===0?null:s[0]}}function f4(e,t){ke(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),ke(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function h4(e,t,n,i,r){const s=new c4;let a,o;if(n.type===rr.OVERWRITE){const u=n;u.source.fromUser?a=gg(e,t,u.path,u.snap,i,r,s):(ke(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!tt(u.path),a=Tf(e,t,u.path,u.snap,i,r,o,s))}else if(n.type===rr.MERGE){const u=n;u.source.fromUser?a=v4(e,t,u.path,u.children,i,r,s):(ke(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered(),a=pg(e,t,u.path,u.children,i,r,o,s))}else if(n.type===rr.ACK_USER_WRITE){const u=n;u.revert?a=y4(e,t,u.path,i,r,s):a=g4(e,t,u.path,u.affectedTree,i,r,s)}else if(n.type===rr.LISTEN_COMPLETE)a=p4(e,t,n.path,i,s);else throw ll("Unknown operation type: "+n.type);const l=s.getChanges();return m4(t,a,l),{viewCache:a,changes:l}}function m4(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=fg(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(LU(fg(t)))}}function PA(e,t,n,i,r,s){const a=t.eventCache;if(Cf(i,n)!=null)return t;{let o,l;if(tt(n))if(ke(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Ra(t),c=u instanceof _t?u:_t.EMPTY_NODE,d=CA(i,c);o=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=vg(i,Ra(t));o=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=rt(n);if(u===".priority"){ke(Rs(n)===1,"Can't have a priority with additional path components");const c=a.getNode();l=t.serverCache.getNode();const d=b0(i,n,c,l);d!=null?o=e.filter.updatePriority(c,d):o=a.getNode()}else{const c=Mt(n);let d;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const h=b0(i,n,a.getNode(),l);h!=null?d=a.getNode().getImmediateChild(u).updateChild(c,h):d=a.getNode().getImmediateChild(u)}else d=Vy(i,u,t.serverCache);d!=null?o=e.filter.updateChild(a.getNode(),u,d,c,r,s):o=a.getNode()}}return yu(t,o,a.isFullyInitialized()||tt(n),e.filter.filtersNodes())}}function Tf(e,t,n,i,r,s,a,o){const l=t.serverCache;let u;const c=a?e.filter:e.filter.getIndexedFilter();if(tt(n))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,i);u=c.updateFullNode(l.getNode(),v,null)}else{const v=rt(n);if(!l.isCompleteForPath(n)&&Rs(n)>1)return t;const g=Mt(n),y=l.getNode().getImmediateChild(v).updateChild(g,i);v===".priority"?u=c.updatePriority(l.getNode(),y):u=c.updateChild(l.getNode(),v,y,g,AA,null)}const d=bA(t,u,l.isFullyInitialized()||tt(n),c.filtersNodes()),h=new Dy(r,d,s);return PA(e,d,n,r,h,o)}function gg(e,t,n,i,r,s,a){const o=t.eventCache;let l,u;const c=new Dy(r,t,s);if(tt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,a),l=yu(t,u,!0,e.filter.filtersNodes());else{const d=rt(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),i),l=yu(t,u,o.isFullyInitialized(),o.isFiltered());else{const h=Mt(n),v=o.getNode().getImmediateChild(d);let g;if(tt(h))g=i;else{const p=c.getCompleteChild(d);p!=null?sA(h)===".priority"&&p.getChild(oA(h)).isEmpty()?g=p:g=p.updateChild(h,i):g=_t.EMPTY_NODE}if(v.equals(g))l=t;else{const p=e.filter.updateChild(o.getNode(),d,g,h,c,a);l=yu(t,p,o.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function w0(e,t){return e.eventCache.isCompleteForChild(t)}function v4(e,t,n,i,r,s,a){let o=t;return i.foreach((l,u)=>{const c=fn(n,l);w0(t,rt(c))&&(o=gg(e,o,c,u,r,s,a))}),i.foreach((l,u)=>{const c=fn(n,l);w0(t,rt(c))||(o=gg(e,o,c,u,r,s,a))}),o}function S0(e,t,n){return n.foreach((i,r)=>{t=t.updateChild(i,r)}),t}function pg(e,t,n,i,r,s,a,o){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;tt(n)?u=i:u=new Ot(null).setTree(n,i);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const v=t.serverCache.getNode().getImmediateChild(d),g=S0(e,v,h);l=Tf(e,l,new $t(d),g,r,s,a,o)}}),u.children.inorderTraversal((d,h)=>{const v=!t.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!v){const g=t.serverCache.getNode().getImmediateChild(d),p=S0(e,g,h);l=Tf(e,l,new $t(d),p,r,s,a,o)}}),l}function g4(e,t,n,i,r,s,a){if(Cf(r,n)!=null)return t;const o=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(tt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Tf(e,t,n,l.getNode().getChild(n),r,s,o,a);if(tt(n)){let u=new Ot(null);return l.getNode().forEachChild($o,(c,d)=>{u=u.set(new $t(c),d)}),pg(e,t,n,u,r,s,o,a)}else return t}else{let u=new Ot(null);return i.foreach((c,d)=>{const h=fn(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),pg(e,t,n,u,r,s,o,a)}}function p4(e,t,n,i,r){const s=t.serverCache,a=bA(t,s.getNode(),s.isFullyInitialized()||tt(n),s.isFiltered());return PA(e,a,n,i,AA,r)}function y4(e,t,n,i,r,s){let a;if(Cf(i,n)!=null)return t;{const o=new Dy(i,t,r),l=t.eventCache.getNode();let u;if(tt(n)||rt(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=vg(i,Ra(t));else{const d=t.serverCache.getNode();ke(d instanceof _t,"serverChildren would be complete if leaf node"),c=CA(i,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=rt(n);let d=Vy(i,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,Mt(n),o,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,_t.EMPTY_NODE,Mt(n),o,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=vg(i,Ra(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||Cf(i,wt())!=null,yu(t,u,a,e.filter.filtersNodes())}}function _4(e,t){const n=Ra(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!tt(t)&&!n.getImmediateChild(rt(t)).isEmpty())?n.getChild(t):null}function I0(e,t,n,i){t.type===rr.MERGE&&t.source.queryId!==null&&(ke(Ra(e.viewCache_),"We should always have a full cache before handling merges"),ke(fg(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=h4(e.processor_,r,t,n,i);return f4(e.processor_,s.viewCache),ke(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,b4(e,s.changes,s.viewCache.eventCache.getNode())}function b4(e,t,n,i){const r=e.eventRegistrations_;return GU(e.eventGenerator_,t,n,r)}/**
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
 */let E0;function w4(e){ke(!E0,"__referenceConstructor has already been defined"),E0=e}function Ny(e,t,n,i){const r=t.source.queryId;if(r!==null){const s=e.views.get(r);return ke(s!=null,"SyncTree gave us an op for an invalid query."),I0(s,t,n,i)}else{let s=[];for(const a of e.views.values())s=s.concat(I0(a,t,n,i));return s}}function Oy(e,t){let n=null;for(const i of e.views.values())n=n||_4(i,t);return n}/**
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
 */let C0;function S4(e){ke(!C0,"__referenceConstructor has already been defined"),C0=e}class T0{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ot(null),this.pendingWriteTree_=l4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function I4(e,t,n,i,r){return XU(e.pendingWriteTree_,t,n,i,r),r?Sh(e,new Pa(gA(),t,n)):[]}function Co(e,t,n=!1){const i=JU(e.pendingWriteTree_,t);if(ZU(e.pendingWriteTree_,t)){let s=new Ot(null);return i.snap!=null?s=s.set(wt(),!0):Vi(i.children,a=>{s=s.set(new $t(a),!0)}),Sh(e,new Ef(i.path,s,n))}else return[]}function wh(e,t,n){return Sh(e,new Pa(pA(),t,n))}function E4(e,t,n){const i=Ot.fromObject(n);return Sh(e,new $u(pA(),t,i))}function C4(e,t,n,i){const r=DA(e,i);if(r!=null){const s=NA(r),a=s.path,o=s.queryId,l=Ai(a,t),u=new Pa(yA(o),l,n);return OA(e,a,u)}else return[]}function T4(e,t,n,i){const r=DA(e,i);if(r){const s=NA(r),a=s.path,o=s.queryId,l=Ai(a,t),u=Ot.fromObject(n),c=new $u(yA(o),l,u);return OA(e,a,c)}else return[]}function RA(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(a,o)=>{const l=Ai(a,t),u=Oy(o,l);if(u)return u});return EA(r,t,s,n,!0)}function Sh(e,t){return xA(t,e.syncPointTree_,null,SA(e.pendingWriteTree_,wt()))}function xA(e,t,n,i){if(tt(e.path))return VA(e,t,n,i);{const r=t.get(wt());n==null&&r!=null&&(n=Oy(r,wt()));let s=[];const a=rt(e.path),o=e.operationForChild(a),l=t.children.get(a);if(l&&o){const u=n?n.getImmediateChild(a):null,c=TA(i,a);s=s.concat(xA(o,l,u,c))}return r&&(s=s.concat(Ny(r,e,i,n))),s}}function VA(e,t,n,i){const r=t.get(wt());n==null&&r!=null&&(n=Oy(r,wt()));let s=[];return t.children.inorderTraversal((a,o)=>{const l=n?n.getImmediateChild(a):null,u=TA(i,a),c=e.operationForChild(a);c&&(s=s.concat(VA(c,o,l,u)))}),r&&(s=s.concat(Ny(r,e,i,n))),s}function DA(e,t){return e.tagToQueryMap.get(t)}function NA(e){const t=e.indexOf("$");return ke(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $t(e.substr(0,t))}}function OA(e,t,n){const i=e.syncPointTree_.get(t);ke(i,"Missing sync point for query tag that we're tracking");const r=SA(e.pendingWriteTree_,t);return Ny(i,n,r,null)}/**
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
 */class My{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new My(n)}node(){return this.node_}}class Ly{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=fn(this.path_,t);return new Ly(this.syncTree_,n)}node(){return RA(this.syncTree_,this.path_)}}const k4=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},k0=function(e,t,n){if(!e||typeof e!="object")return e;if(ke(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return A4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return P4(e[".sv"],t);ke(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},A4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:ke(!1,"Unexpected server value: "+e)}},P4=function(e,t,n){e.hasOwnProperty("increment")||ke(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&ke(!1,"Unexpected increment value: "+i);const r=t.node();if(ke(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const a=r.getValue();return typeof a!="number"?i:a+i},R4=function(e,t,n,i){return Fy(t,new Ly(n,e),i)},x4=function(e,t,n){return Fy(e,new My(t),n)};function Fy(e,t,n){const i=e.getPriority().val(),r=k0(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const a=e,o=k0(a.getValue(),t,n);return o!==a.getValue()||r!==a.getPriority().val()?new cn(o,Fn(r)):e}else{const a=e;return s=a,r!==a.getPriority().val()&&(s=s.updatePriority(new cn(r))),a.forEachChild(Un,(o,l)=>{const u=Fy(l,t.getImmediateChild(o),n);u!==l&&(s=s.updateImmediateChild(o,u))}),s}}/**
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
 */class By{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function $y(e,t){let n=t instanceof $t?t:new $t(t),i=e,r=rt(n);for(;r!==null;){const s=zo(i.node.children,r)||{children:{},childCount:0};i=new By(r,i,s),n=Mt(n),r=rt(n)}return i}function hl(e){return e.node.value}function MA(e,t){e.node.value=t,yg(e)}function LA(e){return e.node.childCount>0}function V4(e){return hl(e)===void 0&&!LA(e)}function Ih(e,t){Vi(e.node.children,(n,i)=>{t(new By(n,e,i))})}function FA(e,t,n,i){n&&!i&&t(e),Ih(e,r=>{FA(r,t,!0,i)}),n&&i&&t(e)}function D4(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Ac(e){return new $t(e.parent===null?e.name:Ac(e.parent)+"/"+e.name)}function yg(e){e.parent!==null&&N4(e.parent,e.name,e)}function N4(e,t,n){const i=V4(n),r=Zr(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,yg(e)):!i&&!r&&(e.node.children[t]=n.node,e.node.childCount++,yg(e))}/**
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
 */const O4=/[\[\].#$\/\u0000-\u001F\u007F]/,M4=/[\[\].#$\u0000-\u001F\u007F]/,lv=10*1024*1024,BA=function(e){return typeof e=="string"&&e.length!==0&&!O4.test(e)},L4=function(e){return typeof e=="string"&&e.length!==0&&!M4.test(e)},F4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),L4(e)},$A=function(e,t,n){const i=n instanceof $t?new pU(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+oa(i));if(typeof t=="function")throw new Error(e+"contains a function "+oa(i)+" with contents = "+t.toString());if(Bk(t))throw new Error(e+"contains "+t.toString()+" "+oa(i));if(typeof t=="string"&&t.length>lv/3&&gh(t)>lv)throw new Error(e+"contains a string greater than "+lv+" utf8 bytes "+oa(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let r=!1,s=!1;if(Vi(t,(a,o)=>{if(a===".value")r=!0;else if(a!==".priority"&&a!==".sv"&&(s=!0,!BA(a)))throw new Error(e+" contains an invalid key ("+a+") "+oa(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yU(i,a),$A(e,o,i),_U(i)}),r&&s)throw new Error(e+' contains ".value" child '+oa(i)+" in addition to actual children.")}},B4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!BA(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!F4(n))throw new Error(EL(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function U4(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();n!==null&&!lA(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Wa(e,t,n){U4(e,n),H4(e,i=>Fi(i,t)||Fi(t,i))}function H4(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(j4(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function j4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();gu&&Ln("event: "+n.toString()),Tc(i)}}}/**
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
 */const W4="repo_interrupt",z4=25;class q4{constructor(t,n,i,r){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=If(),this.transactionQueueTree_=new By,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function G4(e,t,n){if(e.stats_=Ty(e.repoInfo_),e.forceRestClient_||U$())e.server_=new Sf(e.repoInfo_,(i,r,s,a)=>{A0(e,i,r,s,a)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>P0(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{En(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new jr(e.repoInfo_,t,(i,r,s,a)=>{A0(e,i,r,s,a)},i=>{P0(e,i)},i=>{Y4(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=G$(e.repoInfo_,()=>new qU(e.stats_,e.server_)),e.infoData_=new UU,e.infoSyncTree_=new T0({startListening:(i,r,s,a)=>{let o=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(o=wh(e.infoSyncTree_,i._path,l),setTimeout(()=>{a("ok")},0)),o},stopListening:()=>{}}),Uy(e,"connected",!1),e.serverSyncTree_=new T0({startListening:(i,r,s,a)=>(e.server_.listen(i,s,r,(o,l)=>{const u=a(o,l);Wa(e.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{e.server_.unlisten(i,r)}})}function K4(e){const n=e.infoData_.getNode(new $t(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function UA(e){return k4({timestamp:K4(e)})}function A0(e,t,n,i,r){e.dataUpdateCount++;const s=new $t(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const l=cf(n,u=>Fn(u));a=T4(e.serverSyncTree_,s,l,r)}else{const l=Fn(n);a=C4(e.serverSyncTree_,s,l,r)}else if(i){const l=cf(n,u=>Fn(u));a=E4(e.serverSyncTree_,s,l)}else{const l=Fn(n);a=wh(e.serverSyncTree_,s,l)}let o=s;a.length>0&&(o=jy(e,s)),Wa(e.eventQueue_,o,a)}function P0(e,t){Uy(e,"connected",t),t===!1&&X4(e)}function Y4(e,t){Vi(t,(n,i)=>{Uy(e,n,i)})}function Uy(e,t,n){const i=new $t("/.info/"+t),r=Fn(n);e.infoData_.updateSnapshot(i,r);const s=wh(e.infoSyncTree_,i,r);Wa(e.eventQueue_,i,s)}function Q4(e){return e.nextWriteId_++}function X4(e){HA(e,"onDisconnectEvents");const t=UA(e),n=If();dg(e.onDisconnect_,wt(),(r,s)=>{const a=R4(r,s,e.serverSyncTree_,t);vA(n,r,a)});let i=[];dg(n,wt(),(r,s)=>{i=i.concat(wh(e.serverSyncTree_,r,s));const a=tH(e,r);jy(e,a)}),e.onDisconnect_=If(),Wa(e.eventQueue_,wt(),i)}function J4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(W4)}function HA(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ln(n,...t)}function jA(e,t,n){return RA(e.serverSyncTree_,t,n)||_t.EMPTY_NODE}function Hy(e,t=e.transactionQueueTree_){if(t||Eh(e,t),hl(t)){const n=zA(e,t);ke(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&Z4(e,Ac(t),n)}else LA(t)&&Ih(t,n=>{Hy(e,n)})}function Z4(e,t,n){const i=n.map(u=>u.currentWriteId),r=jA(e,t,i);let s=r;const a=r.hash();for(let u=0;u<n.length;u++){const c=n[u];ke(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ai(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const o=s.val(!0),l=t;e.server_.put(l.toString(),o,u=>{HA(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Co(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Eh(e,$y(e.transactionQueueTree_,t)),Hy(e,e.transactionQueueTree_),Wa(e.eventQueue_,t,c);for(let h=0;h<d.length;h++)Tc(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{yi("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}jy(e,t)}},a)}function jy(e,t){const n=WA(e,t),i=Ac(n),r=zA(e,n);return eH(e,r,i),i}function eH(e,t,n){if(t.length===0)return;const i=[];let r=[];const a=t.filter(o=>o.status===0).map(o=>o.currentWriteId);for(let o=0;o<t.length;o++){const l=t[o],u=Ai(n,l.path);let c=!1,d;if(ke(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,r=r.concat(Co(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=z4)c=!0,d="maxretry",r=r.concat(Co(e.serverSyncTree_,l.currentWriteId,!0));else{const h=jA(e,l.path,a);l.currentInputSnapshot=h;const v=t[o].update(h.val());if(v!==void 0){$A("transaction failed: Data returned ",v,l.path);let g=Fn(v);typeof v=="object"&&v!=null&&Zr(v,".priority")||(g=g.updatePriority(h.getPriority()));const y=l.currentWriteId,I=UA(e),E=x4(g,h,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=E,l.currentWriteId=Q4(e),a.splice(a.indexOf(y),1),r=r.concat(I4(e.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(Co(e.serverSyncTree_,y,!0))}else c=!0,d="nodata",r=r.concat(Co(e.serverSyncTree_,l.currentWriteId,!0))}Wa(e.eventQueue_,n,r),r=[],c&&(t[o].status=2,function(h){setTimeout(h,Math.floor(0))}(t[o].unwatcher),t[o].onComplete&&(d==="nodata"?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(new Error(d),!1,null))))}Eh(e,e.transactionQueueTree_);for(let o=0;o<i.length;o++)Tc(i[o]);Hy(e,e.transactionQueueTree_)}function WA(e,t){let n,i=e.transactionQueueTree_;for(n=rt(t);n!==null&&hl(i)===void 0;)i=$y(i,n),t=Mt(t),n=rt(t);return i}function zA(e,t){const n=[];return qA(e,t,n),n.sort((i,r)=>i.order-r.order),n}function qA(e,t,n){const i=hl(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ih(t,r=>{qA(e,r,n)})}function Eh(e,t){const n=hl(t);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,MA(t,n.length>0?n:void 0)}Ih(t,i=>{Eh(e,i)})}function tH(e,t){const n=Ac(WA(e,t)),i=$y(e.transactionQueueTree_,t);return D4(i,r=>{uv(e,r)}),uv(e,i),FA(i,r=>{uv(e,r)}),n}function uv(e,t){const n=hl(t);if(n){const i=[];let r=[],s=-1;for(let a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(ke(s===a-1,"All SENT items should be at beginning of queue."),s=a,n[a].status=3,n[a].abortReason="set"):(ke(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),r=r.concat(Co(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&i.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));s===-1?MA(t,void 0):n.length=s+1,Wa(e.eventQueue_,Ac(t),r);for(let a=0;a<i.length;a++)Tc(i[a])}}/**
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
 */function nH(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}t+="/"+r}return t}function iH(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):yi(`Invalid query segment '${n}' in query '${e}'`)}return t}const R0=function(e,t){const n=rH(e),i=n.namespace;n.domain==="firebase.com"&&ka(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ka("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||D$();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new W$(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new $t(n.pathString)}},rH=function(e){let t="",n="",i="",r="",s="",a=!0,o="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(o=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(r=nH(e.substring(c,d)));const h=iH(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(a=o==="https"||o==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const v=t.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=t.indexOf(".");i=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:a,scheme:o,pathString:r,namespace:s}};/**
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
 */class Wy{constructor(t,n,i,r){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return tt(this._path)?null:sA(this._path)}get ref(){return new ml(this._repo,this._path)}get _queryIdentifier(){const t=v0(this._queryParams),n=Ey(t);return n==="{}"?"default":n}get _queryObject(){return v0(this._queryParams)}isEqual(t){if(t=Jt(t),!(t instanceof Wy))return!1;const n=this._repo===t._repo,i=lA(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+gU(this._path)}}class ml extends Wy{constructor(t,n){super(t,n,new Ry,!1)}get parent(){const t=oA(this._path);return t===null?null:new ml(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}w4(ml);S4(ml);/**
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
 */const sH="FIREBASE_DATABASE_EMULATOR_HOST",_g={};let aH=!1;function oH(e,t,n,i,r){let s=i||e.options.databaseURL;s===void 0&&(e.options.projectId||ka("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ln("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a=R0(s,r),o=a.repoInfo,l;typeof process<"u"&&QS&&(l=QS[sH]),l?(s=`http://${l}?ns=${o.namespace}`,a=R0(s,r),o=a.repoInfo):a.repoInfo.secure;const u=new j$(e.name,e.options,t);B4("Invalid Firebase Database URL",a),tt(a.path)||ka("Database URL must point to the root of a Firebase Database (not including a child path).");const c=uH(o,e,u,new H$(e.name,n));return new cH(c,e)}function lH(e,t){const n=_g[t];(!n||n[e.key]!==e)&&ka(`Database ${t}(${e.repoInfo_}) has already been deleted.`),J4(e),delete n[e.key]}function uH(e,t,n,i){let r=_g[t.name];r||(r={},_g[t.name]=r);let s=r[e.toURLString()];return s&&ka("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new q4(e,aH,n,i),r[e.toURLString()]=s,s}class cH{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(G4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ml(this._repo,wt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lH(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&ka("Cannot call "+t+" on a deleted database.")}}/**
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
 */function dH(e){k$(Ws),dr(new Wi("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return oH(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),pi(XS,JS,e),pi(XS,JS,"esm2017")}jr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};jr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};dH();var x0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pa,GA;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,b){function _(){}_.prototype=b.prototype,R.D=b.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(T,k,C){for(var P=Array(arguments.length-2),B=2;B<arguments.length;B++)P[B-2]=arguments[B];return b.prototype[k].apply(T,P)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,b,_){_||(_=0);var T=Array(16);if(typeof b=="string")for(var k=0;16>k;++k)T[k]=b.charCodeAt(_++)|b.charCodeAt(_++)<<8|b.charCodeAt(_++)<<16|b.charCodeAt(_++)<<24;else for(k=0;16>k;++k)T[k]=b[_++]|b[_++]<<8|b[_++]<<16|b[_++]<<24;b=R.g[0],_=R.g[1],k=R.g[2];var C=R.g[3],P=b+(C^_&(k^C))+T[0]+3614090360&4294967295;b=_+(P<<7&4294967295|P>>>25),P=C+(k^b&(_^k))+T[1]+3905402710&4294967295,C=b+(P<<12&4294967295|P>>>20),P=k+(_^C&(b^_))+T[2]+606105819&4294967295,k=C+(P<<17&4294967295|P>>>15),P=_+(b^k&(C^b))+T[3]+3250441966&4294967295,_=k+(P<<22&4294967295|P>>>10),P=b+(C^_&(k^C))+T[4]+4118548399&4294967295,b=_+(P<<7&4294967295|P>>>25),P=C+(k^b&(_^k))+T[5]+1200080426&4294967295,C=b+(P<<12&4294967295|P>>>20),P=k+(_^C&(b^_))+T[6]+2821735955&4294967295,k=C+(P<<17&4294967295|P>>>15),P=_+(b^k&(C^b))+T[7]+4249261313&4294967295,_=k+(P<<22&4294967295|P>>>10),P=b+(C^_&(k^C))+T[8]+1770035416&4294967295,b=_+(P<<7&4294967295|P>>>25),P=C+(k^b&(_^k))+T[9]+2336552879&4294967295,C=b+(P<<12&4294967295|P>>>20),P=k+(_^C&(b^_))+T[10]+4294925233&4294967295,k=C+(P<<17&4294967295|P>>>15),P=_+(b^k&(C^b))+T[11]+2304563134&4294967295,_=k+(P<<22&4294967295|P>>>10),P=b+(C^_&(k^C))+T[12]+1804603682&4294967295,b=_+(P<<7&4294967295|P>>>25),P=C+(k^b&(_^k))+T[13]+4254626195&4294967295,C=b+(P<<12&4294967295|P>>>20),P=k+(_^C&(b^_))+T[14]+2792965006&4294967295,k=C+(P<<17&4294967295|P>>>15),P=_+(b^k&(C^b))+T[15]+1236535329&4294967295,_=k+(P<<22&4294967295|P>>>10),P=b+(k^C&(_^k))+T[1]+4129170786&4294967295,b=_+(P<<5&4294967295|P>>>27),P=C+(_^k&(b^_))+T[6]+3225465664&4294967295,C=b+(P<<9&4294967295|P>>>23),P=k+(b^_&(C^b))+T[11]+643717713&4294967295,k=C+(P<<14&4294967295|P>>>18),P=_+(C^b&(k^C))+T[0]+3921069994&4294967295,_=k+(P<<20&4294967295|P>>>12),P=b+(k^C&(_^k))+T[5]+3593408605&4294967295,b=_+(P<<5&4294967295|P>>>27),P=C+(_^k&(b^_))+T[10]+38016083&4294967295,C=b+(P<<9&4294967295|P>>>23),P=k+(b^_&(C^b))+T[15]+3634488961&4294967295,k=C+(P<<14&4294967295|P>>>18),P=_+(C^b&(k^C))+T[4]+3889429448&4294967295,_=k+(P<<20&4294967295|P>>>12),P=b+(k^C&(_^k))+T[9]+568446438&4294967295,b=_+(P<<5&4294967295|P>>>27),P=C+(_^k&(b^_))+T[14]+3275163606&4294967295,C=b+(P<<9&4294967295|P>>>23),P=k+(b^_&(C^b))+T[3]+4107603335&4294967295,k=C+(P<<14&4294967295|P>>>18),P=_+(C^b&(k^C))+T[8]+1163531501&4294967295,_=k+(P<<20&4294967295|P>>>12),P=b+(k^C&(_^k))+T[13]+2850285829&4294967295,b=_+(P<<5&4294967295|P>>>27),P=C+(_^k&(b^_))+T[2]+4243563512&4294967295,C=b+(P<<9&4294967295|P>>>23),P=k+(b^_&(C^b))+T[7]+1735328473&4294967295,k=C+(P<<14&4294967295|P>>>18),P=_+(C^b&(k^C))+T[12]+2368359562&4294967295,_=k+(P<<20&4294967295|P>>>12),P=b+(_^k^C)+T[5]+4294588738&4294967295,b=_+(P<<4&4294967295|P>>>28),P=C+(b^_^k)+T[8]+2272392833&4294967295,C=b+(P<<11&4294967295|P>>>21),P=k+(C^b^_)+T[11]+1839030562&4294967295,k=C+(P<<16&4294967295|P>>>16),P=_+(k^C^b)+T[14]+4259657740&4294967295,_=k+(P<<23&4294967295|P>>>9),P=b+(_^k^C)+T[1]+2763975236&4294967295,b=_+(P<<4&4294967295|P>>>28),P=C+(b^_^k)+T[4]+1272893353&4294967295,C=b+(P<<11&4294967295|P>>>21),P=k+(C^b^_)+T[7]+4139469664&4294967295,k=C+(P<<16&4294967295|P>>>16),P=_+(k^C^b)+T[10]+3200236656&4294967295,_=k+(P<<23&4294967295|P>>>9),P=b+(_^k^C)+T[13]+681279174&4294967295,b=_+(P<<4&4294967295|P>>>28),P=C+(b^_^k)+T[0]+3936430074&4294967295,C=b+(P<<11&4294967295|P>>>21),P=k+(C^b^_)+T[3]+3572445317&4294967295,k=C+(P<<16&4294967295|P>>>16),P=_+(k^C^b)+T[6]+76029189&4294967295,_=k+(P<<23&4294967295|P>>>9),P=b+(_^k^C)+T[9]+3654602809&4294967295,b=_+(P<<4&4294967295|P>>>28),P=C+(b^_^k)+T[12]+3873151461&4294967295,C=b+(P<<11&4294967295|P>>>21),P=k+(C^b^_)+T[15]+530742520&4294967295,k=C+(P<<16&4294967295|P>>>16),P=_+(k^C^b)+T[2]+3299628645&4294967295,_=k+(P<<23&4294967295|P>>>9),P=b+(k^(_|~C))+T[0]+4096336452&4294967295,b=_+(P<<6&4294967295|P>>>26),P=C+(_^(b|~k))+T[7]+1126891415&4294967295,C=b+(P<<10&4294967295|P>>>22),P=k+(b^(C|~_))+T[14]+2878612391&4294967295,k=C+(P<<15&4294967295|P>>>17),P=_+(C^(k|~b))+T[5]+4237533241&4294967295,_=k+(P<<21&4294967295|P>>>11),P=b+(k^(_|~C))+T[12]+1700485571&4294967295,b=_+(P<<6&4294967295|P>>>26),P=C+(_^(b|~k))+T[3]+2399980690&4294967295,C=b+(P<<10&4294967295|P>>>22),P=k+(b^(C|~_))+T[10]+4293915773&4294967295,k=C+(P<<15&4294967295|P>>>17),P=_+(C^(k|~b))+T[1]+2240044497&4294967295,_=k+(P<<21&4294967295|P>>>11),P=b+(k^(_|~C))+T[8]+1873313359&4294967295,b=_+(P<<6&4294967295|P>>>26),P=C+(_^(b|~k))+T[15]+4264355552&4294967295,C=b+(P<<10&4294967295|P>>>22),P=k+(b^(C|~_))+T[6]+2734768916&4294967295,k=C+(P<<15&4294967295|P>>>17),P=_+(C^(k|~b))+T[13]+1309151649&4294967295,_=k+(P<<21&4294967295|P>>>11),P=b+(k^(_|~C))+T[4]+4149444226&4294967295,b=_+(P<<6&4294967295|P>>>26),P=C+(_^(b|~k))+T[11]+3174756917&4294967295,C=b+(P<<10&4294967295|P>>>22),P=k+(b^(C|~_))+T[2]+718787259&4294967295,k=C+(P<<15&4294967295|P>>>17),P=_+(C^(k|~b))+T[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+C&4294967295}i.prototype.u=function(R,b){b===void 0&&(b=R.length);for(var _=b-this.blockSize,T=this.B,k=this.h,C=0;C<b;){if(k==0)for(;C<=_;)r(this,R,C),C+=this.blockSize;if(typeof R=="string"){for(;C<b;)if(T[k++]=R.charCodeAt(C++),k==this.blockSize){r(this,T),k=0;break}}else for(;C<b;)if(T[k++]=R[C++],k==this.blockSize){r(this,T),k=0;break}}this.h=k,this.o+=b},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;var _=8*this.o;for(b=R.length-8;b<R.length;++b)R[b]=_&255,_/=256;for(this.u(R),R=Array(16),b=_=0;4>b;++b)for(var T=0;32>T;T+=8)R[_++]=this.g[b]>>>T&255;return R};function s(R,b){var _=o;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=b(R)}function a(R,b){this.h=b;for(var _=[],T=!0,k=R.length-1;0<=k;k--){var C=R[k]|0;T&&C==b||(_[k]=C,T=!1)}this.g=_}var o={};function l(R){return-128<=R&&128>R?s(R,function(b){return new a([b|0],0>b?-1:0)}):new a([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(0>R)return y(u(-R));for(var b=[],_=1,T=0;R>=_;T++)b[T]=R/_|0,_*=4294967296;return new a(b,0)}function c(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return y(c(R.substring(1),b));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(b,8)),T=d,k=0;k<R.length;k+=8){var C=Math.min(8,R.length-k),P=parseInt(R.substring(k,k+C),b);8>C?(C=u(Math.pow(b,C)),T=T.j(C).add(u(P))):(T=T.j(_),T=T.add(u(P)))}return T}var d=l(0),h=l(1),v=l(16777216);e=a.prototype,e.m=function(){if(p(this))return-y(this).m();for(var R=0,b=1,_=0;_<this.g.length;_++){var T=this.i(_);R+=(0<=T?T:4294967296+T)*b,b*=4294967296}return R},e.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(g(this))return"0";if(p(this))return"-"+y(this).toString(R);for(var b=u(Math.pow(R,6)),_=this,T="";;){var k=A(_,b).g;_=I(_,k.j(b));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=k,g(_))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},e.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function g(R){if(R.h!=0)return!1;for(var b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function p(R){return R.h==-1}e.l=function(R){return R=I(this,R),p(R)?-1:g(R)?0:1};function y(R){for(var b=R.g.length,_=[],T=0;T<b;T++)_[T]=~R.g[T];return new a(_,~R.h).add(h)}e.abs=function(){return p(this)?y(this):this},e.add=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0,k=0;k<=b;k++){var C=T+(this.i(k)&65535)+(R.i(k)&65535),P=(C>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);T=P>>>16,C&=65535,P&=65535,_[k]=P<<16|C}return new a(_,_[_.length-1]&-2147483648?-1:0)};function I(R,b){return R.add(y(b))}e.j=function(R){if(g(this)||g(R))return d;if(p(this))return p(R)?y(this).j(y(R)):y(y(this).j(R));if(p(R))return y(this.j(y(R)));if(0>this.l(v)&&0>R.l(v))return u(this.m()*R.m());for(var b=this.g.length+R.g.length,_=[],T=0;T<2*b;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<R.g.length;k++){var C=this.i(T)>>>16,P=this.i(T)&65535,B=R.i(k)>>>16,W=R.i(k)&65535;_[2*T+2*k]+=P*W,E(_,2*T+2*k),_[2*T+2*k+1]+=C*W,E(_,2*T+2*k+1),_[2*T+2*k+1]+=P*B,E(_,2*T+2*k+1),_[2*T+2*k+2]+=C*B,E(_,2*T+2*k+2)}for(T=0;T<b;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=b;T<2*b;T++)_[T]=0;return new a(_,0)};function E(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function V(R,b){this.g=R,this.h=b}function A(R,b){if(g(b))throw Error("division by zero");if(g(R))return new V(d,d);if(p(R))return b=A(y(R),b),new V(y(b.g),y(b.h));if(p(b))return b=A(R,y(b)),new V(y(b.g),b.h);if(30<R.g.length){if(p(R)||p(b))throw Error("slowDivide_ only works with positive integers.");for(var _=h,T=b;0>=T.l(R);)_=D(_),T=D(T);var k=N(_,1),C=N(T,1);for(T=N(T,2),_=N(_,2);!g(T);){var P=C.add(T);0>=P.l(R)&&(k=k.add(_),C=P),T=N(T,1),_=N(_,1)}return b=I(R,k.j(b)),new V(k,b)}for(k=d;0<=R.l(b);){for(_=Math.max(1,Math.floor(R.m()/b.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=u(_),P=C.j(b);p(P)||0<P.l(R);)_-=T,C=u(_),P=C.j(b);g(C)&&(C=h),k=k.add(C),R=I(R,P)}return new V(k,R)}e.A=function(R){return A(this,R).h},e.and=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0;T<b;T++)_[T]=this.i(T)&R.i(T);return new a(_,this.h&R.h)},e.or=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0;T<b;T++)_[T]=this.i(T)|R.i(T);return new a(_,this.h|R.h)},e.xor=function(R){for(var b=Math.max(this.g.length,R.g.length),_=[],T=0;T<b;T++)_[T]=this.i(T)^R.i(T);return new a(_,this.h^R.h)};function D(R){for(var b=R.g.length+1,_=[],T=0;T<b;T++)_[T]=R.i(T)<<1|R.i(T-1)>>>31;return new a(_,R.h)}function N(R,b){var _=b>>5;b%=32;for(var T=R.g.length-_,k=[],C=0;C<T;C++)k[C]=0<b?R.i(C+_)>>>b|R.i(C+_+1)<<32-b:R.i(C+_);return new a(k,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,GA=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=c,pa=a}).apply(typeof x0<"u"?x0:typeof self<"u"?self:typeof window<"u"?window:{});var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KA,YA,ru,QA,jd,bg,XA,JA,ZA;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,w,x){return f==Array.prototype||f==Object.prototype||(f[w]=x.value),f};function n(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof bd=="object"&&bd];for(var w=0;w<f.length;++w){var x=f[w];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var i=n(this);function r(f,w){if(w)e:{var x=i;f=f.split(".");for(var L=0;L<f.length-1;L++){var J=f[L];if(!(J in x))break e;x=x[J]}f=f[f.length-1],L=x[f],w=w(L),w!=L&&w!=null&&t(x,f,{configurable:!0,writable:!0,value:w})}}function s(f,w){f instanceof String&&(f+="");var x=0,L=!1,J={next:function(){if(!L&&x<f.length){var ae=x++;return{value:w(ae,f[ae]),done:!1}}return L=!0,{done:!0,value:void 0}}};return J[Symbol.iterator]=function(){return J},J}r("Array.prototype.values",function(f){return f||function(){return s(this,function(w,x){return x})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function l(f){var w=typeof f;return w=w!="object"?w:f?Array.isArray(f)?"array":w:"null",w=="array"||w=="object"&&typeof f.length=="number"}function u(f){var w=typeof f;return w=="object"&&f!=null||w=="function"}function c(f,w,x){return f.call.apply(f.bind,arguments)}function d(f,w,x){if(!f)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var J=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(J,L),f.apply(w,J)}}return function(){return f.apply(w,arguments)}}function h(f,w,x){return h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?c:d,h.apply(null,arguments)}function v(f,w){var x=Array.prototype.slice.call(arguments,1);return function(){var L=x.slice();return L.push.apply(L,arguments),f.apply(this,L)}}function g(f,w){function x(){}x.prototype=w.prototype,f.aa=w.prototype,f.prototype=new x,f.prototype.constructor=f,f.Qb=function(L,J,ae){for(var Te=Array(arguments.length-2),It=2;It<arguments.length;It++)Te[It-2]=arguments[It];return w.prototype[J].apply(L,Te)}}function p(f){const w=f.length;if(0<w){const x=Array(w);for(let L=0;L<w;L++)x[L]=f[L];return x}return[]}function y(f,w){for(let x=1;x<arguments.length;x++){const L=arguments[x];if(l(L)){const J=f.length||0,ae=L.length||0;f.length=J+ae;for(let Te=0;Te<ae;Te++)f[J+Te]=L[Te]}else f.push(L)}}class I{constructor(w,x){this.i=w,this.j=x,this.h=0,this.g=null}get(){let w;return 0<this.h?(this.h--,w=this.g,this.g=w.next,w.next=null):w=this.i(),w}}function E(f){return/^[\s\xa0]*$/.test(f)}function V(){var f=o.navigator;return f&&(f=f.userAgent)?f:""}function A(f){return A[" "](f),f}A[" "]=function(){};var D=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function N(f,w,x){for(const L in f)w.call(x,f[L],L,f)}function R(f,w){for(const x in f)w.call(void 0,f[x],x,f)}function b(f){const w={};for(const x in f)w[x]=f[x];return w}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(f,w){let x,L;for(let J=1;J<arguments.length;J++){L=arguments[J];for(x in L)f[x]=L[x];for(let ae=0;ae<_.length;ae++)x=_[ae],Object.prototype.hasOwnProperty.call(L,x)&&(f[x]=L[x])}}function k(f){var w=1;f=f.split(":");const x=[];for(;0<w&&f.length;)x.push(f.shift()),w--;return f.length&&x.push(f.join(":")),x}function C(f){o.setTimeout(()=>{throw f},0)}function P(){var f=U;let w=null;return f.g&&(w=f.g,f.g=f.g.next,f.g||(f.h=null),w.next=null),w}class B{constructor(){this.h=this.g=null}add(w,x){const L=W.get();L.set(w,x),this.h?this.h.next=L:this.g=L,this.h=L}}var W=new I(()=>new Y,f=>f.reset());class Y{constructor(){this.next=this.g=this.h=null}set(w,x){this.h=w,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let se,z=!1,U=new B,$=()=>{const f=o.Promise.resolve(void 0);se=()=>{f.then(q)}};var q=()=>{for(var f;f=P();){try{f.h.call(f.g)}catch(x){C(x)}var w=W;w.j(f),100>w.h&&(w.h++,f.next=w.g,w.g=f)}z=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(f,w){this.type=f,this.g=this.target=w,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var f=!1,w=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const x=()=>{};o.addEventListener("test",x,w),o.removeEventListener("test",x,w)}catch{}return f}();function Pe(f,w){if(ge.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var x=this.type=f.type,L=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=w,w=f.relatedTarget){if(D){e:{try{A(w.nodeName);var J=!0;break e}catch{}J=!1}J||(w=null)}}else x=="mouseover"?w=f.fromElement:x=="mouseout"&&(w=f.toElement);this.relatedTarget=w,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:ie[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&Pe.aa.h.call(this)}}g(Pe,ge);var ie={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),oe=0;function me(f,w,x,L,J){this.listener=f,this.proxy=null,this.src=w,this.type=x,this.capture=!!L,this.ha=J,this.key=++oe,this.da=this.fa=!1}function ue(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function re(f){this.src=f,this.g={},this.h=0}re.prototype.add=function(f,w,x,L,J){var ae=f.toString();f=this.g[ae],f||(f=this.g[ae]=[],this.h++);var Te=O(f,w,L,J);return-1<Te?(w=f[Te],x||(w.fa=!1)):(w=new me(w,this.src,ae,!!L,J),w.fa=x,f.push(w)),w};function Ee(f,w){var x=w.type;if(x in f.g){var L=f.g[x],J=Array.prototype.indexOf.call(L,w,void 0),ae;(ae=0<=J)&&Array.prototype.splice.call(L,J,1),ae&&(ue(w),f.g[x].length==0&&(delete f.g[x],f.h--))}}function O(f,w,x,L){for(var J=0;J<f.length;++J){var ae=f[J];if(!ae.da&&ae.listener==w&&ae.capture==!!x&&ae.ha==L)return J}return-1}var M="closure_lm_"+(1e6*Math.random()|0),H={};function Z(f,w,x,L,J){if(Array.isArray(w)){for(var ae=0;ae<w.length;ae++)Z(f,w[ae],x,L,J);return null}return x=Ne(x),f&&f[j]?f.K(w,x,u(L)?!!L.capture:!!L,J):X(f,w,x,!1,L,J)}function X(f,w,x,L,J,ae){if(!w)throw Error("Invalid event type");var Te=u(J)?!!J.capture:!!J,It=Me(f);if(It||(f[M]=It=new re(f)),x=It.add(w,x,L,Te,ae),x.proxy)return x;if(L=le(),x.proxy=L,L.src=f,L.listener=x,f.addEventListener)Se||(J=Te),J===void 0&&(J=!1),f.addEventListener(w.toString(),L,J);else if(f.attachEvent)f.attachEvent(_e(w.toString()),L);else if(f.addListener&&f.removeListener)f.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return x}function le(){function f(x){return w.call(f.src,f.listener,x)}const w=fe;return f}function be(f,w,x,L,J){if(Array.isArray(w))for(var ae=0;ae<w.length;ae++)be(f,w[ae],x,L,J);else L=u(L)?!!L.capture:!!L,x=Ne(x),f&&f[j]?(f=f.i,w=String(w).toString(),w in f.g&&(ae=f.g[w],x=O(ae,x,L,J),-1<x&&(ue(ae[x]),Array.prototype.splice.call(ae,x,1),ae.length==0&&(delete f.g[w],f.h--)))):f&&(f=Me(f))&&(w=f.g[w.toString()],f=-1,w&&(f=O(w,x,L,J)),(x=-1<f?w[f]:null)&&de(x))}function de(f){if(typeof f!="number"&&f&&!f.da){var w=f.src;if(w&&w[j])Ee(w.i,f);else{var x=f.type,L=f.proxy;w.removeEventListener?w.removeEventListener(x,L,f.capture):w.detachEvent?w.detachEvent(_e(x),L):w.addListener&&w.removeListener&&w.removeListener(L),(x=Me(w))?(Ee(x,f),x.h==0&&(x.src=null,w[M]=null)):ue(f)}}}function _e(f){return f in H?H[f]:H[f]="on"+f}function fe(f,w){if(f.da)f=!0;else{w=new Pe(w,this);var x=f.listener,L=f.ha||f.src;f.fa&&de(f),f=x.call(L,w)}return f}function Me(f){return f=f[M],f instanceof re?f:null}var Ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ne(f){return typeof f=="function"?f:(f[Ce]||(f[Ce]=function(w){return f.handleEvent(w)}),f[Ce])}function Ve(){ne.call(this),this.i=new re(this),this.M=this,this.F=null}g(Ve,ne),Ve.prototype[j]=!0,Ve.prototype.removeEventListener=function(f,w,x,L){be(this,f,w,x,L)};function Ue(f,w){var x,L=f.F;if(L)for(x=[];L;L=L.F)x.push(L);if(f=f.M,L=w.type||w,typeof w=="string")w=new ge(w,f);else if(w instanceof ge)w.target=w.target||f;else{var J=w;w=new ge(L,f),T(w,J)}if(J=!0,x)for(var ae=x.length-1;0<=ae;ae--){var Te=w.g=x[ae];J=mt(Te,L,!0,w)&&J}if(Te=w.g=f,J=mt(Te,L,!0,w)&&J,J=mt(Te,L,!1,w)&&J,x)for(ae=0;ae<x.length;ae++)Te=w.g=x[ae],J=mt(Te,L,!1,w)&&J}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var f=this.i,w;for(w in f.g){for(var x=f.g[w],L=0;L<x.length;L++)ue(x[L]);delete f.g[w],f.h--}}this.F=null},Ve.prototype.K=function(f,w,x,L){return this.i.add(String(f),w,!1,x,L)},Ve.prototype.L=function(f,w,x,L){return this.i.add(String(f),w,!0,x,L)};function mt(f,w,x,L){if(w=f.i.g[String(w)],!w)return!0;w=w.concat();for(var J=!0,ae=0;ae<w.length;++ae){var Te=w[ae];if(Te&&!Te.da&&Te.capture==x){var It=Te.listener,_n=Te.ha||Te.src;Te.fa&&Ee(f.i,Te),J=It.call(_n,L)!==!1&&J}}return J&&!L.defaultPrevented}function ut(f,w,x){if(typeof f=="function")x&&(f=h(f,x));else if(f&&typeof f.handleEvent=="function")f=h(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(w)?-1:o.setTimeout(f,w||0)}function Rn(f){f.g=ut(()=>{f.g=null,f.i&&(f.i=!1,Rn(f))},f.l);const w=f.h;f.h=null,f.m.apply(null,w)}class un extends ne{constructor(w,x){super(),this.m=w,this.l=x,this.h=null,this.i=!1,this.g=null}j(w){this.h=arguments,this.g?this.i=!0:Rn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(f){ne.call(this),this.h=f,this.g={}}g(yn,ne);var xn=[];function ss(f){N(f.g,function(w,x){this.g.hasOwnProperty(x)&&de(w)},f),f.g={}}yn.prototype.N=function(){yn.aa.N.call(this),ss(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var so=o.JSON.stringify,Gn=o.JSON.parse,Ti=class{stringify(f){return o.JSON.stringify(f,void 0)}parse(f){return o.JSON.parse(f,void 0)}};function ao(){}ao.prototype.h=null;function Ob(f){return f.h||(f.h=f.i())}function Mb(){}var Pl={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wm(){ge.call(this,"d")}g(wm,ge);function Sm(){ge.call(this,"c")}g(Sm,ge);var Qs={},Lb=null;function zc(){return Lb=Lb||new Ve}Qs.La="serverreachability";function Fb(f){ge.call(this,Qs.La,f)}g(Fb,ge);function Rl(f){const w=zc();Ue(w,new Fb(w))}Qs.STAT_EVENT="statevent";function Bb(f,w){ge.call(this,Qs.STAT_EVENT,f),this.stat=w}g(Bb,ge);function Kn(f){const w=zc();Ue(w,new Bb(w,f))}Qs.Ma="timingevent";function $b(f,w){ge.call(this,Qs.Ma,f),this.size=w}g($b,ge);function xl(f,w){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){f()},w)}function Vl(){this.g=!0}Vl.prototype.xa=function(){this.g=!1};function dD(f,w,x,L,J,ae){f.info(function(){if(f.g)if(ae)for(var Te="",It=ae.split("&"),_n=0;_n<It.length;_n++){var ct=It[_n].split("=");if(1<ct.length){var Vn=ct[0];ct=ct[1];var Dn=Vn.split("_");Te=2<=Dn.length&&Dn[1]=="type"?Te+(Vn+"="+ct+"&"):Te+(Vn+"=redacted&")}}else Te=null;else Te=ae;return"XMLHTTP REQ ("+L+") [attempt "+J+"]: "+w+`
`+x+`
`+Te})}function fD(f,w,x,L,J,ae,Te){f.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+J+"]: "+w+`
`+x+`
`+ae+" "+Te})}function oo(f,w,x,L){f.info(function(){return"XMLHTTP TEXT ("+w+"): "+mD(f,x)+(L?" "+L:"")})}function hD(f,w){f.info(function(){return"TIMEOUT: "+w})}Vl.prototype.info=function(){};function mD(f,w){if(!f.g)return w;if(!w)return null;try{var x=JSON.parse(w);if(x){for(f=0;f<x.length;f++)if(Array.isArray(x[f])){var L=x[f];if(!(2>L.length)){var J=L[1];if(Array.isArray(J)&&!(1>J.length)){var ae=J[0];if(ae!="noop"&&ae!="stop"&&ae!="close")for(var Te=1;Te<J.length;Te++)J[Te]=""}}}}return so(x)}catch{return w}}var qc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ub={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Im;function Gc(){}g(Gc,ao),Gc.prototype.g=function(){return new XMLHttpRequest},Gc.prototype.i=function(){return{}},Im=new Gc;function as(f,w,x,L){this.j=f,this.i=w,this.l=x,this.R=L||1,this.U=new yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hb}function Hb(){this.i=null,this.g="",this.h=!1}var jb={},Em={};function Cm(f,w,x){f.L=1,f.v=Xc(Tr(w)),f.m=x,f.P=!0,Wb(f,null)}function Wb(f,w){f.F=Date.now(),Kc(f),f.A=Tr(f.v);var x=f.A,L=f.R;Array.isArray(L)||(L=[String(L)]),rw(x.i,"t",L),f.C=0,x=f.j.J,f.h=new Hb,f.g=Sw(f.j,x?w:null,!f.m),0<f.O&&(f.M=new un(h(f.Y,f,f.g),f.O)),w=f.U,x=f.g,L=f.ca;var J="readystatechange";Array.isArray(J)||(J&&(xn[0]=J.toString()),J=xn);for(var ae=0;ae<J.length;ae++){var Te=Z(x,J[ae],L||w.handleEvent,!1,w.h||w);if(!Te)break;w.g[Te.key]=Te}w=f.H?b(f.H):{},f.m?(f.u||(f.u="POST"),w["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,w)):(f.u="GET",f.g.ea(f.A,f.u,null,w)),Rl(),dD(f.i,f.u,f.A,f.l,f.R,f.m)}as.prototype.ca=function(f){f=f.target;const w=this.M;w&&kr(f)==3?w.j():this.Y(f)},as.prototype.Y=function(f){try{if(f==this.g)e:{const Dn=kr(this.g);var w=this.g.Ba();const co=this.g.Z();if(!(3>Dn)&&(Dn!=3||this.g&&(this.h.h||this.g.oa()||dw(this.g)))){this.J||Dn!=4||w==7||(w==8||0>=co?Rl(3):Rl(2)),Tm(this);var x=this.g.Z();this.X=x;t:if(zb(this)){var L=dw(this.g);f="";var J=L.length,ae=kr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xs(this),Dl(this);var Te="";break t}this.h.i=new o.TextDecoder}for(w=0;w<J;w++)this.h.h=!0,f+=this.h.i.decode(L[w],{stream:!(ae&&w==J-1)});L.length=0,this.h.g+=f,this.C=0,Te=this.h.g}else Te=this.g.oa();if(this.o=x==200,fD(this.i,this.u,this.A,this.l,this.R,Dn,x),this.o){if(this.T&&!this.K){t:{if(this.g){var It,_n=this.g;if((It=_n.g?_n.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(It)){var ct=It;break t}}ct=null}if(x=ct)oo(this.i,this.l,x,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,km(this,x);else{this.o=!1,this.s=3,Kn(12),Xs(this),Dl(this);break e}}if(this.P){x=!0;let Ni;for(;!this.J&&this.C<Te.length;)if(Ni=vD(this,Te),Ni==Em){Dn==4&&(this.s=4,Kn(14),x=!1),oo(this.i,this.l,null,"[Incomplete Response]");break}else if(Ni==jb){this.s=4,Kn(15),oo(this.i,this.l,Te,"[Invalid Chunk]"),x=!1;break}else oo(this.i,this.l,Ni,null),km(this,Ni);if(zb(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dn!=4||Te.length!=0||this.h.h||(this.s=1,Kn(16),x=!1),this.o=this.o&&x,!x)oo(this.i,this.l,Te,"[Invalid Chunked Response]"),Xs(this),Dl(this);else if(0<Te.length&&!this.W){this.W=!0;var Vn=this.j;Vn.g==this&&Vn.ba&&!Vn.M&&(Vn.j.info("Great, no buffering proxy detected. Bytes received: "+Te.length),Dm(Vn),Vn.M=!0,Kn(11))}}else oo(this.i,this.l,Te,null),km(this,Te);Dn==4&&Xs(this),this.o&&!this.J&&(Dn==4?yw(this.j,this):(this.o=!1,Kc(this)))}else VD(this.g),x==400&&0<Te.indexOf("Unknown SID")?(this.s=3,Kn(12)):(this.s=0,Kn(13)),Xs(this),Dl(this)}}}catch{}finally{}};function zb(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function vD(f,w){var x=f.C,L=w.indexOf(`
`,x);return L==-1?Em:(x=Number(w.substring(x,L)),isNaN(x)?jb:(L+=1,L+x>w.length?Em:(w=w.slice(L,L+x),f.C=L+x,w)))}as.prototype.cancel=function(){this.J=!0,Xs(this)};function Kc(f){f.S=Date.now()+f.I,qb(f,f.I)}function qb(f,w){if(f.B!=null)throw Error("WatchDog timer not null");f.B=xl(h(f.ba,f),w)}function Tm(f){f.B&&(o.clearTimeout(f.B),f.B=null)}as.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(hD(this.i,this.A),this.L!=2&&(Rl(),Kn(17)),Xs(this),this.s=2,Dl(this)):qb(this,this.S-f)};function Dl(f){f.j.G==0||f.J||yw(f.j,f)}function Xs(f){Tm(f);var w=f.M;w&&typeof w.ma=="function"&&w.ma(),f.M=null,ss(f.U),f.g&&(w=f.g,f.g=null,w.abort(),w.ma())}function km(f,w){try{var x=f.j;if(x.G!=0&&(x.g==f||Am(x.h,f))){if(!f.K&&Am(x.h,f)&&x.G==3){try{var L=x.Da.g.parse(w)}catch{L=null}if(Array.isArray(L)&&L.length==3){var J=L;if(J[0]==0){e:if(!x.u){if(x.g)if(x.g.F+3e3<f.F)nd(x),ed(x);else break e;Vm(x),Kn(18)}}else x.za=J[1],0<x.za-x.T&&37500>J[2]&&x.F&&x.v==0&&!x.C&&(x.C=xl(h(x.Za,x),6e3));if(1>=Yb(x.h)&&x.ca){try{x.ca()}catch{}x.ca=void 0}}else Zs(x,11)}else if((f.K||x.g==f)&&nd(x),!E(w))for(J=x.Da.g.parse(w),w=0;w<J.length;w++){let ct=J[w];if(x.T=ct[0],ct=ct[1],x.G==2)if(ct[0]=="c"){x.K=ct[1],x.ia=ct[2];const Vn=ct[3];Vn!=null&&(x.la=Vn,x.j.info("VER="+x.la));const Dn=ct[4];Dn!=null&&(x.Aa=Dn,x.j.info("SVER="+x.Aa));const co=ct[5];co!=null&&typeof co=="number"&&0<co&&(L=1.5*co,x.L=L,x.j.info("backChannelRequestTimeoutMs_="+L)),L=x;const Ni=f.g;if(Ni){const rd=Ni.g?Ni.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rd){var ae=L.h;ae.g||rd.indexOf("spdy")==-1&&rd.indexOf("quic")==-1&&rd.indexOf("h2")==-1||(ae.j=ae.l,ae.g=new Set,ae.h&&(Pm(ae,ae.h),ae.h=null))}if(L.D){const Nm=Ni.g?Ni.g.getResponseHeader("X-HTTP-Session-Id"):null;Nm&&(L.ya=Nm,Nt(L.I,L.D,Nm))}}x.G=3,x.l&&x.l.ua(),x.ba&&(x.R=Date.now()-f.F,x.j.info("Handshake RTT: "+x.R+"ms")),L=x;var Te=f;if(L.qa=ww(L,L.J?L.ia:null,L.W),Te.K){Qb(L.h,Te);var It=Te,_n=L.L;_n&&(It.I=_n),It.B&&(Tm(It),Kc(It)),L.g=Te}else gw(L);0<x.i.length&&td(x)}else ct[0]!="stop"&&ct[0]!="close"||Zs(x,7);else x.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?Zs(x,7):xm(x):ct[0]!="noop"&&x.l&&x.l.ta(ct),x.v=0)}}Rl(4)}catch{}}var gD=class{constructor(f,w){this.g=f,this.map=w}};function Gb(f){this.l=f||10,o.PerformanceNavigationTiming?(f=o.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kb(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function Yb(f){return f.h?1:f.g?f.g.size:0}function Am(f,w){return f.h?f.h==w:f.g?f.g.has(w):!1}function Pm(f,w){f.g?f.g.add(w):f.h=w}function Qb(f,w){f.h&&f.h==w?f.h=null:f.g&&f.g.has(w)&&f.g.delete(w)}Gb.prototype.cancel=function(){if(this.i=Xb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function Xb(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let w=f.i;for(const x of f.g.values())w=w.concat(x.D);return w}return p(f.i)}function pD(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(l(f)){for(var w=[],x=f.length,L=0;L<x;L++)w.push(f[L]);return w}w=[],x=0;for(L in f)w[x++]=f[L];return w}function yD(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(l(f)||typeof f=="string"){var w=[];f=f.length;for(var x=0;x<f;x++)w.push(x);return w}w=[],x=0;for(const L in f)w[x++]=L;return w}}}function Jb(f,w){if(f.forEach&&typeof f.forEach=="function")f.forEach(w,void 0);else if(l(f)||typeof f=="string")Array.prototype.forEach.call(f,w,void 0);else for(var x=yD(f),L=pD(f),J=L.length,ae=0;ae<J;ae++)w.call(void 0,L[ae],x&&x[ae],f)}var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _D(f,w){if(f){f=f.split("&");for(var x=0;x<f.length;x++){var L=f[x].indexOf("="),J=null;if(0<=L){var ae=f[x].substring(0,L);J=f[x].substring(L+1)}else ae=f[x];w(ae,J?decodeURIComponent(J.replace(/\+/g," ")):"")}}}function Js(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof Js){this.h=f.h,Yc(this,f.j),this.o=f.o,this.g=f.g,Qc(this,f.s),this.l=f.l;var w=f.i,x=new Ml;x.i=w.i,w.g&&(x.g=new Map(w.g),x.h=w.h),ew(this,x),this.m=f.m}else f&&(w=String(f).match(Zb))?(this.h=!1,Yc(this,w[1]||"",!0),this.o=Nl(w[2]||""),this.g=Nl(w[3]||"",!0),Qc(this,w[4]),this.l=Nl(w[5]||"",!0),ew(this,w[6]||"",!0),this.m=Nl(w[7]||"")):(this.h=!1,this.i=new Ml(null,this.h))}Js.prototype.toString=function(){var f=[],w=this.j;w&&f.push(Ol(w,tw,!0),":");var x=this.g;return(x||w=="file")&&(f.push("//"),(w=this.o)&&f.push(Ol(w,tw,!0),"@"),f.push(encodeURIComponent(String(x)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.s,x!=null&&f.push(":",String(x))),(x=this.l)&&(this.g&&x.charAt(0)!="/"&&f.push("/"),f.push(Ol(x,x.charAt(0)=="/"?SD:wD,!0))),(x=this.i.toString())&&f.push("?",x),(x=this.m)&&f.push("#",Ol(x,ED)),f.join("")};function Tr(f){return new Js(f)}function Yc(f,w,x){f.j=x?Nl(w,!0):w,f.j&&(f.j=f.j.replace(/:$/,""))}function Qc(f,w){if(w){if(w=Number(w),isNaN(w)||0>w)throw Error("Bad port number "+w);f.s=w}else f.s=null}function ew(f,w,x){w instanceof Ml?(f.i=w,CD(f.i,f.h)):(x||(w=Ol(w,ID)),f.i=new Ml(w,f.h))}function Nt(f,w,x){f.i.set(w,x)}function Xc(f){return Nt(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function Nl(f,w){return f?w?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Ol(f,w,x){return typeof f=="string"?(f=encodeURI(f).replace(w,bD),x&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function bD(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var tw=/[#\/\?@]/g,wD=/[#\?:]/g,SD=/[#\?]/g,ID=/[#\?@]/g,ED=/#/g;function Ml(f,w){this.h=this.g=null,this.i=f||null,this.j=!!w}function os(f){f.g||(f.g=new Map,f.h=0,f.i&&_D(f.i,function(w,x){f.add(decodeURIComponent(w.replace(/\+/g," ")),x)}))}e=Ml.prototype,e.add=function(f,w){os(this),this.i=null,f=lo(this,f);var x=this.g.get(f);return x||this.g.set(f,x=[]),x.push(w),this.h+=1,this};function nw(f,w){os(f),w=lo(f,w),f.g.has(w)&&(f.i=null,f.h-=f.g.get(w).length,f.g.delete(w))}function iw(f,w){return os(f),w=lo(f,w),f.g.has(w)}e.forEach=function(f,w){os(this),this.g.forEach(function(x,L){x.forEach(function(J){f.call(w,J,L,this)},this)},this)},e.na=function(){os(this);const f=Array.from(this.g.values()),w=Array.from(this.g.keys()),x=[];for(let L=0;L<w.length;L++){const J=f[L];for(let ae=0;ae<J.length;ae++)x.push(w[L])}return x},e.V=function(f){os(this);let w=[];if(typeof f=="string")iw(this,f)&&(w=w.concat(this.g.get(lo(this,f))));else{f=Array.from(this.g.values());for(let x=0;x<f.length;x++)w=w.concat(f[x])}return w},e.set=function(f,w){return os(this),this.i=null,f=lo(this,f),iw(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[w]),this.h+=1,this},e.get=function(f,w){return f?(f=this.V(f),0<f.length?String(f[0]):w):w};function rw(f,w,x){nw(f,w),0<x.length&&(f.i=null,f.g.set(lo(f,w),p(x)),f.h+=x.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],w=Array.from(this.g.keys());for(var x=0;x<w.length;x++){var L=w[x];const ae=encodeURIComponent(String(L)),Te=this.V(L);for(L=0;L<Te.length;L++){var J=ae;Te[L]!==""&&(J+="="+encodeURIComponent(String(Te[L]))),f.push(J)}}return this.i=f.join("&")};function lo(f,w){return w=String(w),f.j&&(w=w.toLowerCase()),w}function CD(f,w){w&&!f.j&&(os(f),f.i=null,f.g.forEach(function(x,L){var J=L.toLowerCase();L!=J&&(nw(this,L),rw(this,J,x))},f)),f.j=w}function TD(f,w){const x=new Vl;if(o.Image){const L=new Image;L.onload=v(ls,x,"TestLoadImage: loaded",!0,w,L),L.onerror=v(ls,x,"TestLoadImage: error",!1,w,L),L.onabort=v(ls,x,"TestLoadImage: abort",!1,w,L),L.ontimeout=v(ls,x,"TestLoadImage: timeout",!1,w,L),o.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=f}else w(!1)}function kD(f,w){const x=new Vl,L=new AbortController,J=setTimeout(()=>{L.abort(),ls(x,"TestPingServer: timeout",!1,w)},1e4);fetch(f,{signal:L.signal}).then(ae=>{clearTimeout(J),ae.ok?ls(x,"TestPingServer: ok",!0,w):ls(x,"TestPingServer: server error",!1,w)}).catch(()=>{clearTimeout(J),ls(x,"TestPingServer: error",!1,w)})}function ls(f,w,x,L,J){try{J&&(J.onload=null,J.onerror=null,J.onabort=null,J.ontimeout=null),L(x)}catch{}}function AD(){this.g=new Ti}function PD(f,w,x){const L=x||"";try{Jb(f,function(J,ae){let Te=J;u(J)&&(Te=so(J)),w.push(L+ae+"="+encodeURIComponent(Te))})}catch(J){throw w.push(L+"type="+encodeURIComponent("_badmap")),J}}function Ll(f){this.l=f.Ub||null,this.j=f.eb||!1}g(Ll,ao),Ll.prototype.g=function(){return new Jc(this.l,this.j)},Ll.prototype.i=function(f){return function(){return f}}({});function Jc(f,w){Ve.call(this),this.D=f,this.o=w,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Jc,Ve),e=Jc.prototype,e.open=function(f,w){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=w,this.readyState=1,Bl(this)},e.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const w={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(w.body=f),(this.D||o).fetch(new Request(this.A,w)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fl(this)),this.readyState=0},e.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,Bl(this)),this.g&&(this.readyState=3,Bl(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sw(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function sw(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}e.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var w=f.value?f.value:new Uint8Array(0);(w=this.v.decode(w,{stream:!f.done}))&&(this.response=this.responseText+=w)}f.done?Fl(this):Bl(this),this.readyState==3&&sw(this)}},e.Ra=function(f){this.g&&(this.response=this.responseText=f,Fl(this))},e.Qa=function(f){this.g&&(this.response=f,Fl(this))},e.ga=function(){this.g&&Fl(this)};function Fl(f){f.readyState=4,f.l=null,f.j=null,f.v=null,Bl(f)}e.setRequestHeader=function(f,w){this.u.append(f,w)},e.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],w=this.h.entries();for(var x=w.next();!x.done;)x=x.value,f.push(x[0]+": "+x[1]),x=w.next();return f.join(`\r
`)};function Bl(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(Jc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function aw(f){let w="";return N(f,function(x,L){w+=L,w+=":",w+=x,w+=`\r
`}),w}function Rm(f,w,x){e:{for(L in x){var L=!1;break e}L=!0}L||(x=aw(x),typeof f=="string"?x!=null&&encodeURIComponent(String(x)):Nt(f,w,x))}function Gt(f){Ve.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Gt,Ve);var RD=/^https?$/i,xD=["POST","PUT"];e=Gt.prototype,e.Ha=function(f){this.J=f},e.ea=function(f,w,x,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);w=w?w.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Im.g(),this.v=this.o?Ob(this.o):Ob(Im),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(w,String(f),!0),this.B=!1}catch(ae){ow(this,ae);return}if(f=x||"",x=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var J in L)x.set(J,L[J]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const ae of L.keys())x.set(ae,L.get(ae));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(x.keys()).find(ae=>ae.toLowerCase()=="content-type"),J=o.FormData&&f instanceof o.FormData,!(0<=Array.prototype.indexOf.call(xD,w,void 0))||L||J||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ae,Te]of x)this.g.setRequestHeader(ae,Te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cw(this),this.u=!0,this.g.send(f),this.u=!1}catch(ae){ow(this,ae)}};function ow(f,w){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=w,f.m=5,lw(f),Zc(f)}function lw(f){f.A||(f.A=!0,Ue(f,"complete"),Ue(f,"error"))}e.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,Ue(this,"complete"),Ue(this,"abort"),Zc(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zc(this,!0)),Gt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?uw(this):this.bb())},e.bb=function(){uw(this)};function uw(f){if(f.h&&typeof a<"u"&&(!f.v[1]||kr(f)!=4||f.Z()!=2)){if(f.u&&kr(f)==4)ut(f.Ea,0,f);else if(Ue(f,"readystatechange"),kr(f)==4){f.h=!1;try{const Te=f.Z();e:switch(Te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var w=!0;break e;default:w=!1}var x;if(!(x=w)){var L;if(L=Te===0){var J=String(f.D).match(Zb)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),L=!RD.test(J?J.toLowerCase():"")}x=L}if(x)Ue(f,"complete"),Ue(f,"success");else{f.m=6;try{var ae=2<kr(f)?f.g.statusText:""}catch{ae=""}f.l=ae+" ["+f.Z()+"]",lw(f)}}finally{Zc(f)}}}}function Zc(f,w){if(f.g){cw(f);const x=f.g,L=f.v[0]?()=>{}:null;f.g=null,f.v=null,w||Ue(f,"ready");try{x.onreadystatechange=L}catch{}}}function cw(f){f.I&&(o.clearTimeout(f.I),f.I=null)}e.isActive=function(){return!!this.g};function kr(f){return f.g?f.g.readyState:0}e.Z=function(){try{return 2<kr(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(f){if(this.g){var w=this.g.responseText;return f&&w.indexOf(f)==0&&(w=w.substring(f.length)),Gn(w)}};function dw(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function VD(f){const w={};f=(f.g&&2<=kr(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<f.length;L++){if(E(f[L]))continue;var x=k(f[L]);const J=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const ae=w[J]||[];w[J]=ae,ae.push(x)}R(w,function(L){return L.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $l(f,w,x){return x&&x.internalChannelParams&&x.internalChannelParams[f]||w}function fw(f){this.Aa=0,this.i=[],this.j=new Vl,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$l("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$l("baseRetryDelayMs",5e3,f),this.cb=$l("retryDelaySeedMs",1e4,f),this.Wa=$l("forwardChannelMaxRetries",2,f),this.wa=$l("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new Gb(f&&f.concurrentRequestLimit),this.Da=new AD,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=fw.prototype,e.la=8,e.G=1,e.connect=function(f,w,x,L){Kn(0),this.W=f,this.H=w||{},x&&L!==void 0&&(this.H.OSID=x,this.H.OAID=L),this.F=this.X,this.I=ww(this,null,this.W),td(this)};function xm(f){if(hw(f),f.G==3){var w=f.U++,x=Tr(f.I);if(Nt(x,"SID",f.K),Nt(x,"RID",w),Nt(x,"TYPE","terminate"),Ul(f,x),w=new as(f,f.j,w),w.L=2,w.v=Xc(Tr(x)),x=!1,o.navigator&&o.navigator.sendBeacon)try{x=o.navigator.sendBeacon(w.v.toString(),"")}catch{}!x&&o.Image&&(new Image().src=w.v,x=!0),x||(w.g=Sw(w.j,null),w.g.ea(w.v)),w.F=Date.now(),Kc(w)}bw(f)}function ed(f){f.g&&(Dm(f),f.g.cancel(),f.g=null)}function hw(f){ed(f),f.u&&(o.clearTimeout(f.u),f.u=null),nd(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&o.clearTimeout(f.s),f.s=null)}function td(f){if(!Kb(f.h)&&!f.s){f.s=!0;var w=f.Ga;se||$(),z||(se(),z=!0),U.add(w,f),f.B=0}}function DD(f,w){return Yb(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=w.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=xl(h(f.Ga,f,w),_w(f,f.B)),f.B++,!0)}e.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const J=new as(this,this.j,f);let ae=this.o;if(this.S&&(ae?(ae=b(ae),T(ae,this.S)):ae=this.S),this.m!==null||this.O||(J.H=ae,ae=null),this.P)e:{for(var w=0,x=0;x<this.i.length;x++){t:{var L=this.i[x];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(w+=L,4096<w){w=x;break e}if(w===4096||x===this.i.length-1){w=x+1;break e}}w=1e3}else w=1e3;w=vw(this,J,w),x=Tr(this.I),Nt(x,"RID",f),Nt(x,"CVER",22),this.D&&Nt(x,"X-HTTP-Session-Id",this.D),Ul(this,x),ae&&(this.O?w="headers="+encodeURIComponent(String(aw(ae)))+"&"+w:this.m&&Rm(x,this.m,ae)),Pm(this.h,J),this.Ua&&Nt(x,"TYPE","init"),this.P?(Nt(x,"$req",w),Nt(x,"SID","null"),J.T=!0,Cm(J,x,null)):Cm(J,x,w),this.G=2}}else this.G==3&&(f?mw(this,f):this.i.length==0||Kb(this.h)||mw(this))};function mw(f,w){var x;w?x=w.l:x=f.U++;const L=Tr(f.I);Nt(L,"SID",f.K),Nt(L,"RID",x),Nt(L,"AID",f.T),Ul(f,L),f.m&&f.o&&Rm(L,f.m,f.o),x=new as(f,f.j,x,f.B+1),f.m===null&&(x.H=f.o),w&&(f.i=w.D.concat(f.i)),w=vw(f,x,1e3),x.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),Pm(f.h,x),Cm(x,L,w)}function Ul(f,w){f.H&&N(f.H,function(x,L){Nt(w,L,x)}),f.l&&Jb({},function(x,L){Nt(w,L,x)})}function vw(f,w,x){x=Math.min(f.i.length,x);var L=f.l?h(f.l.Na,f.l,f):null;e:{var J=f.i;let ae=-1;for(;;){const Te=["count="+x];ae==-1?0<x?(ae=J[0].g,Te.push("ofs="+ae)):ae=0:Te.push("ofs="+ae);let It=!0;for(let _n=0;_n<x;_n++){let ct=J[_n].g;const Vn=J[_n].map;if(ct-=ae,0>ct)ae=Math.max(0,J[_n].g-100),It=!1;else try{PD(Vn,Te,"req"+ct+"_")}catch{L&&L(Vn)}}if(It){L=Te.join("&");break e}}}return f=f.i.splice(0,x),w.D=f,L}function gw(f){if(!f.g&&!f.u){f.Y=1;var w=f.Fa;se||$(),z||(se(),z=!0),U.add(w,f),f.v=0}}function Vm(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=xl(h(f.Fa,f),_w(f,f.v)),f.v++,!0)}e.Fa=function(){if(this.u=null,pw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=xl(h(this.ab,this),f)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Kn(10),ed(this),pw(this))};function Dm(f){f.A!=null&&(o.clearTimeout(f.A),f.A=null)}function pw(f){f.g=new as(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var w=Tr(f.qa);Nt(w,"RID","rpc"),Nt(w,"SID",f.K),Nt(w,"AID",f.T),Nt(w,"CI",f.F?"0":"1"),!f.F&&f.ja&&Nt(w,"TO",f.ja),Nt(w,"TYPE","xmlhttp"),Ul(f,w),f.m&&f.o&&Rm(w,f.m,f.o),f.L&&(f.g.I=f.L);var x=f.g;f=f.ia,x.L=1,x.v=Xc(Tr(w)),x.m=null,x.P=!0,Wb(x,f)}e.Za=function(){this.C!=null&&(this.C=null,ed(this),Vm(this),Kn(19))};function nd(f){f.C!=null&&(o.clearTimeout(f.C),f.C=null)}function yw(f,w){var x=null;if(f.g==w){nd(f),Dm(f),f.g=null;var L=2}else if(Am(f.h,w))x=w.D,Qb(f.h,w),L=1;else return;if(f.G!=0){if(w.o)if(L==1){x=w.m?w.m.length:0,w=Date.now()-w.F;var J=f.B;L=zc(),Ue(L,new $b(L,x)),td(f)}else gw(f);else if(J=w.s,J==3||J==0&&0<w.X||!(L==1&&DD(f,w)||L==2&&Vm(f)))switch(x&&0<x.length&&(w=f.h,w.i=w.i.concat(x)),J){case 1:Zs(f,5);break;case 4:Zs(f,10);break;case 3:Zs(f,6);break;default:Zs(f,2)}}}function _w(f,w){let x=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(x*=2),x*w}function Zs(f,w){if(f.j.info("Error code "+w),w==2){var x=h(f.fb,f),L=f.Xa;const J=!L;L=new Js(L||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Yc(L,"https"),Xc(L),J?TD(L.toString(),x):kD(L.toString(),x)}else Kn(2);f.G=0,f.l&&f.l.sa(w),bw(f),hw(f)}e.fb=function(f){f?(this.j.info("Successfully pinged google.com"),Kn(2)):(this.j.info("Failed to ping google.com"),Kn(1))};function bw(f){if(f.G=0,f.ka=[],f.l){const w=Xb(f.h);(w.length!=0||f.i.length!=0)&&(y(f.ka,w),y(f.ka,f.i),f.h.i.length=0,p(f.i),f.i.length=0),f.l.ra()}}function ww(f,w,x){var L=x instanceof Js?Tr(x):new Js(x);if(L.g!="")w&&(L.g=w+"."+L.g),Qc(L,L.s);else{var J=o.location;L=J.protocol,w=w?w+"."+J.hostname:J.hostname,J=+J.port;var ae=new Js(null);L&&Yc(ae,L),w&&(ae.g=w),J&&Qc(ae,J),x&&(ae.l=x),L=ae}return x=f.D,w=f.ya,x&&w&&Nt(L,x,w),Nt(L,"VER",f.la),Ul(f,L),L}function Sw(f,w,x){if(w&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return w=f.Ca&&!f.pa?new Gt(new Ll({eb:x})):new Gt(f.pa),w.Ha(f.J),w}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iw(){}e=Iw.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function id(){}id.prototype.g=function(f,w){return new ui(f,w)};function ui(f,w){Ve.call(this),this.g=new fw(w),this.l=f,this.h=w&&w.messageUrlParams||null,f=w&&w.messageHeaders||null,w&&w.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=w&&w.initMessageHeaders||null,w&&w.messageContentType&&(f?f["X-WebChannel-Content-Type"]=w.messageContentType:f={"X-WebChannel-Content-Type":w.messageContentType}),w&&w.va&&(f?f["X-WebChannel-Client-Profile"]=w.va:f={"X-WebChannel-Client-Profile":w.va}),this.g.S=f,(f=w&&w.Sb)&&!E(f)&&(this.g.m=f),this.v=w&&w.supportsCrossDomainXhr||!1,this.u=w&&w.sendRawJson||!1,(w=w&&w.httpSessionIdParam)&&!E(w)&&(this.g.D=w,f=this.h,f!==null&&w in f&&(f=this.h,w in f&&delete f[w])),this.j=new uo(this)}g(ui,Ve),ui.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ui.prototype.close=function(){xm(this.g)},ui.prototype.o=function(f){var w=this.g;if(typeof f=="string"){var x={};x.__data__=f,f=x}else this.u&&(x={},x.__data__=so(f),f=x);w.i.push(new gD(w.Ya++,f)),w.G==3&&td(w)},ui.prototype.N=function(){this.g.l=null,delete this.j,xm(this.g),delete this.g,ui.aa.N.call(this)};function Ew(f){wm.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var w=f.__sm__;if(w){e:{for(const x in w){f=x;break e}f=void 0}(this.i=f)&&(f=this.i,w=w!==null&&f in w?w[f]:void 0),this.data=w}else this.data=f}g(Ew,wm);function Cw(){Sm.call(this),this.status=1}g(Cw,Sm);function uo(f){this.g=f}g(uo,Iw),uo.prototype.ua=function(){Ue(this.g,"a")},uo.prototype.ta=function(f){Ue(this.g,new Ew(f))},uo.prototype.sa=function(f){Ue(this.g,new Cw)},uo.prototype.ra=function(){Ue(this.g,"b")},id.prototype.createWebChannel=id.prototype.g,ui.prototype.send=ui.prototype.o,ui.prototype.open=ui.prototype.m,ui.prototype.close=ui.prototype.close,ZA=function(){return new id},JA=function(){return zc()},XA=Qs,bg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qc.NO_ERROR=0,qc.TIMEOUT=8,qc.HTTP_ERROR=6,jd=qc,Ub.COMPLETE="complete",QA=Ub,Mb.EventType=Pl,Pl.OPEN="a",Pl.CLOSE="b",Pl.ERROR="c",Pl.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,ru=Mb,YA=Ll,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,KA=Gt}).apply(typeof bd<"u"?bd:typeof self<"u"?self:typeof window<"u"?window:{});const V0="@firebase/firestore";/**
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
 */let vl="10.13.2";/**
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
 */const xa=new yc("@firebase/firestore");function Ql(){return xa.logLevel}function Oe(e,...t){if(xa.logLevel<=Je.DEBUG){const n=t.map(zy);xa.debug(`Firestore (${vl}): ${e}`,...n)}}function Gr(e,...t){if(xa.logLevel<=Je.ERROR){const n=t.map(zy);xa.error(`Firestore (${vl}): ${e}`,...n)}}function Yo(e,...t){if(xa.logLevel<=Je.WARN){const n=t.map(zy);xa.warn(`Firestore (${vl}): ${e}`,...n)}}function zy(e){if(typeof e=="string")return e;try{/**
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
 */function Ge(e="Unexpected state"){const t=`FIRESTORE (${vl}) INTERNAL ASSERTION FAILED: `+e;throw Gr(t),new Error(t)}function Tt(e,t){e||Ge()}function Ye(e,t){return e}/**
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
 */class Wr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class eP{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fH{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(On.UNAUTHENTICATED))}shutdown(){}}class hH{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mH{constructor(t){this.t=t,this.currentUser=On.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wr,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},o=l=>{Oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>o(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?o(l):(Oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wr)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Tt(typeof i.accessToken=="string"),new eP(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Tt(t===null||typeof t=="string"),new On(t)}}class vH{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=On.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gH{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new vH(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(On.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pH{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yH{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=s=>{s.error!=null&&Oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Oe("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Tt(typeof n.token=="string"),this.R=n.token,new pH(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _H(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class tP{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=_H(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function dt(e,t){return e<t?-1:e>t?1:0}function Qo(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
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
 */class rn{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Re(ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Re(ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Re(ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Re(ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rn.fromMillis(Date.now())}static fromDate(t){return rn.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new rn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?dt(this.nanoseconds,t.nanoseconds):dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Uu{constructor(t,n,i){n===void 0?n=0:n>t.length&&Ge(),i===void 0?i=t.length-n:i>t.length-n&&Ge(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Uu.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Uu?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),a=n.get(r);if(s<a)return-1;if(s>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Lt extends Uu{construct(t,n,i){return new Lt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new Re(ce.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Lt(n)}static emptyPath(){return new Lt([])}}const bH=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends Uu{construct(t,n,i){return new Cn(t,n,i)}static isValidIdentifier(t){return bH.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Cn(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Re(ce.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;r<t.length;){const o=t[r];if(o==="\\"){if(r+1===t.length)throw new Re(ce.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Re(ce.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else o==="`"?(a=!a,r++):o!=="."||a?(i+=o,r++):(s(),r++)}if(s(),a)throw new Re(ce.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Cn(n)}static emptyPath(){return new Cn([])}}/**
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
 */class Fe{constructor(t){this.path=t}static fromPath(t){return new Fe(Lt.fromString(t))}static fromName(t){return new Fe(Lt.fromString(t).popFirst(5))}static empty(){return new Fe(Lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Lt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Lt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Fe(new Lt(t.slice()))}}function wH(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Ke.fromTimestamp(i===1e9?new rn(n+1,0):new rn(n,i));return new xs(r,Fe.empty(),t)}function SH(e){return new xs(e.readTime,e.key,-1)}class xs{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new xs(Ke.min(),Fe.empty(),-1)}static max(){return new xs(Ke.max(),Fe.empty(),-1)}}function IH(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Fe.comparator(e.documentKey,t.documentKey),n!==0?n:dt(e.largestBatchId,t.largestBatchId))}/**
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
 */const EH="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CH{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Pc(e){if(e.code!==ce.FAILED_PRECONDITION||e.message!==EH)throw e;Oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class pe{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new pe((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof pe?n:pe.resolve(n)}catch(n){return pe.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.reject(n)}static resolve(t){return new pe((n,i)=>{n(t)})}static reject(t){return new pe((n,i)=>{i(t)})}static waitFor(t){return new pe((n,i)=>{let r=0,s=0,a=!1;t.forEach(o=>{++r,o.next(()=>{++s,a&&s===r&&n()},l=>i(l))}),a=!0,s===r&&n()})}static or(t){let n=pe.resolve(!1);for(const i of t)n=n.next(r=>r?pe.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new pe((i,r)=>{const s=t.length,a=new Array(s);let o=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{a[u]=c,++o,o===s&&i(a)},c=>r(c))}})}static doWhile(t,n){return new pe((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function TH(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class qy{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}qy.oe=-1;function Ch(e){return e==null}function kf(e){return e===0&&1/e==-1/0}function kH(e){return typeof e=="number"&&Number.isInteger(e)&&!kf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function D0(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function za(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nP(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class qt{constructor(t,n){this.comparator=t,this.root=n||Sn.EMPTY}insert(t,n){return new qt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Sn.BLACK,null,null))}remove(t){return new qt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Sn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wd(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wd(this.root,t,this.comparator,!1)}getReverseIterator(){return new wd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wd(this.root,t,this.comparator,!0)}}class wd{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Sn{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??Sn.RED,this.left=r??Sn.EMPTY,this.right=s??Sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new Sn(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Sn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Sn.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ge();const t=this.left.check();if(t!==this.right.check())throw Ge();return t+(this.isRed()?0:1)}}Sn.EMPTY=null,Sn.RED=!0,Sn.BLACK=!1;Sn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ge()}get value(){throw Ge()}get color(){throw Ge()}get left(){throw Ge()}get right(){throw Ge()}copy(t,n,i,r,s){return this}insert(t,n,i){return new Sn(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Tn{constructor(t){this.comparator=t,this.data=new qt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new N0(this.data.getIterator())}getIteratorFrom(t){return new N0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof Tn)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Tn(this.comparator);return n.data=t,n}}class N0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vi{constructor(t){this.fields=t,t.sort(Cn.comparator)}static empty(){return new vi([])}unionWith(t){let n=new Tn(Cn.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new vi(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qo(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class iP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iP("Invalid base64 string: "+s):s}}(t);return new kn(n)}static fromUint8Array(t){const n=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(t);return new kn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kn.EMPTY_BYTE_STRING=new kn("");const AH=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vs(e){if(Tt(!!e),typeof e=="string"){let t=0;const n=AH.exec(e);if(Tt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Qt(e.seconds),nanos:Qt(e.nanos)}}function Qt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Va(e){return typeof e=="string"?kn.fromBase64String(e):kn.fromUint8Array(e)}/**
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
 */function Gy(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ky(e){const t=e.mapValue.fields.__previous_value__;return Gy(t)?Ky(t):t}function Hu(e){const t=Vs(e.mapValue.fields.__local_write_time__.timestampValue);return new rn(t.seconds,t.nanos)}/**
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
 */class PH{constructor(t,n,i,r,s,a,o,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=l,this.useFetchStreams=u}}class ju{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ju("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ju&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Sd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Da(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Gy(e)?4:xH(e)?9007199254740991:RH(e)?10:11:Ge()}function fr(e,t){if(e===t)return!0;const n=Da(e);if(n!==Da(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hu(e).isEqual(Hu(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=Vs(r.timestampValue),o=Vs(s.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return Va(r.bytesValue).isEqual(Va(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return Qt(r.geoPointValue.latitude)===Qt(s.geoPointValue.latitude)&&Qt(r.geoPointValue.longitude)===Qt(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Qt(r.integerValue)===Qt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=Qt(r.doubleValue),o=Qt(s.doubleValue);return a===o?kf(a)===kf(o):isNaN(a)&&isNaN(o)}return!1}(e,t);case 9:return Qo(e.arrayValue.values||[],t.arrayValue.values||[],fr);case 10:case 11:return function(r,s){const a=r.mapValue.fields||{},o=s.mapValue.fields||{};if(D0(a)!==D0(o))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(o[l]===void 0||!fr(a[l],o[l])))return!1;return!0}(e,t);default:return Ge()}}function Wu(e,t){return(e.values||[]).find(n=>fr(n,t))!==void 0}function Xo(e,t){if(e===t)return 0;const n=Da(e),i=Da(t);if(n!==i)return dt(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return dt(e.booleanValue,t.booleanValue);case 2:return function(s,a){const o=Qt(s.integerValue||s.doubleValue),l=Qt(a.integerValue||a.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(e,t);case 3:return O0(e.timestampValue,t.timestampValue);case 4:return O0(Hu(e),Hu(t));case 5:return dt(e.stringValue,t.stringValue);case 6:return function(s,a){const o=Va(s),l=Va(a);return o.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,a){const o=s.split("/"),l=a.split("/");for(let u=0;u<o.length&&u<l.length;u++){const c=dt(o[u],l[u]);if(c!==0)return c}return dt(o.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,a){const o=dt(Qt(s.latitude),Qt(a.latitude));return o!==0?o:dt(Qt(s.longitude),Qt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return M0(e.arrayValue,t.arrayValue);case 10:return function(s,a){var o,l,u,c;const d=s.fields||{},h=a.fields||{},v=(o=d.value)===null||o===void 0?void 0:o.arrayValue,g=(l=h.value)===null||l===void 0?void 0:l.arrayValue,p=dt(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0);return p!==0?p:M0(v,g)}(e.mapValue,t.mapValue);case 11:return function(s,a){if(s===Sd.mapValue&&a===Sd.mapValue)return 0;if(s===Sd.mapValue)return 1;if(a===Sd.mapValue)return-1;const o=s.fields||{},l=Object.keys(o),u=a.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=dt(l[d],c[d]);if(h!==0)return h;const v=Xo(o[l[d]],u[c[d]]);if(v!==0)return v}return dt(l.length,c.length)}(e.mapValue,t.mapValue);default:throw Ge()}}function O0(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return dt(e,t);const n=Vs(e),i=Vs(t),r=dt(n.seconds,i.seconds);return r!==0?r:dt(n.nanos,i.nanos)}function M0(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=Xo(n[r],i[r]);if(s)return s}return dt(n.length,i.length)}function Jo(e){return wg(e)}function wg(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Vs(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Va(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Fe.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=wg(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${wg(n.fields[a])}`;return r+"}"}(e.mapValue):Ge()}function L0(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Sg(e){return!!e&&"integerValue"in e}function Yy(e){return!!e&&"arrayValue"in e}function F0(e){return!!e&&"nullValue"in e}function B0(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Wd(e){return!!e&&"mapValue"in e}function RH(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function bu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return za(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=bu(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=bu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function xH(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ri{constructor(t){this.value=t}static empty(){return new ri({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Wd(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=bu(n)}setAll(t){let n=Cn.emptyPath(),i={},r=[];t.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=o.popLast()}a?i[o.lastSegment()]=bu(a):r.push(o.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Wd(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return fr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Wd(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){za(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new ri(bu(this.value))}}function rP(e){const t=[];return za(e.fields,(n,i)=>{const r=new Cn([n]);if(Wd(i)){const s=rP(i.mapValue).fields;if(s.length===0)t.push(r);else for(const a of s)t.push(r.child(a))}else t.push(r)}),new vi(t)}/**
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
 */class Af{constructor(t,n){this.position=t,this.inclusive=n}}function $0(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],a=e.position[r];if(s.field.isKeyField()?i=Fe.comparator(Fe.fromName(a.referenceValue),n.key):i=Xo(a,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function U0(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class zu{constructor(t,n="asc"){this.field=t,this.dir=n}}function VH(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class sP{}class nn extends sP{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new NH(t,n,i):n==="array-contains"?new LH(t,i):n==="in"?new FH(t,i):n==="not-in"?new BH(t,i):n==="array-contains-any"?new $H(t,i):new nn(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new OH(t,i):new MH(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xo(n,this.value)):n!==null&&Da(this.value)===Da(n)&&this.matchesComparison(Xo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qi extends sP{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new qi(t,n)}matches(t){return aP(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aP(e){return e.op==="and"}function oP(e){return DH(e)&&aP(e)}function DH(e){for(const t of e.filters)if(t instanceof qi)return!1;return!0}function Ig(e){if(e instanceof nn)return e.field.canonicalString()+e.op.toString()+Jo(e.value);if(oP(e))return e.filters.map(t=>Ig(t)).join(",");{const t=e.filters.map(n=>Ig(n)).join(",");return`${e.op}(${t})`}}function lP(e,t){return e instanceof nn?function(i,r){return r instanceof nn&&i.op===r.op&&i.field.isEqual(r.field)&&fr(i.value,r.value)}(e,t):e instanceof qi?function(i,r){return r instanceof qi&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,o)=>s&&lP(a,r.filters[o]),!0):!1}(e,t):void Ge()}function uP(e){return e instanceof nn?function(n){return`${n.field.canonicalString()} ${n.op} ${Jo(n.value)}`}(e):e instanceof qi?function(n){return n.op.toString()+" {"+n.getFilters().map(uP).join(" ,")+"}"}(e):"Filter"}class NH extends nn{constructor(t,n,i){super(t,n,i),this.key=Fe.fromName(i.referenceValue)}matches(t){const n=Fe.comparator(t.key,this.key);return this.matchesComparison(n)}}class OH extends nn{constructor(t,n){super(t,"in",n),this.keys=cP("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class MH extends nn{constructor(t,n){super(t,"not-in",n),this.keys=cP("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function cP(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Fe.fromName(i.referenceValue))}class LH extends nn{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Yy(n)&&Wu(n.arrayValue,this.value)}}class FH extends nn{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Wu(this.value.arrayValue,n)}}class BH extends nn{constructor(t,n){super(t,"not-in",n)}matches(t){if(Wu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Wu(this.value.arrayValue,n)}}class $H extends nn{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Yy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Wu(this.value.arrayValue,i))}}/**
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
 */class UH{constructor(t,n=null,i=[],r=[],s=null,a=null,o=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=o,this.ue=null}}function H0(e,t=null,n=[],i=[],r=null,s=null,a=null){return new UH(e,t,n,i,r,s,a)}function Qy(e){const t=Ye(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Ig(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ch(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Jo(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Jo(i)).join(",")),t.ue=n}return t.ue}function Xy(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!VH(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!lP(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!U0(e.startAt,t.startAt)&&U0(e.endAt,t.endAt)}function Eg(e){return Fe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class gl{constructor(t,n=null,i=[],r=[],s=null,a="F",o=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=o,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HH(e,t,n,i,r,s,a,o){return new gl(e,t,n,i,r,s,a,o)}function Th(e){return new gl(e)}function j0(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function dP(e){return e.collectionGroup!==null}function wu(e){const t=Ye(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Tn(Cn.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(o=o.add(u.field))})}),o})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new zu(s,i))}),n.has(Cn.keyField().canonicalString())||t.ce.push(new zu(Cn.keyField(),i))}return t.ce}function or(e){const t=Ye(e);return t.le||(t.le=jH(t,wu(e))),t.le}function jH(e,t){if(e.limitType==="F")return H0(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new zu(r.field,s)});const n=e.endAt?new Af(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Af(e.startAt.position,e.startAt.inclusive):null;return H0(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Cg(e,t){const n=e.filters.concat([t]);return new gl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Tg(e,t,n){return new gl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kh(e,t){return Xy(or(e),or(t))&&e.limitType===t.limitType}function fP(e){return`${Qy(or(e))}|lt:${e.limitType}`}function bo(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>uP(r)).join(", ")}]`),Ch(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>Jo(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>Jo(r)).join(",")),`Target(${i})`}(or(e))}; limitType=${e.limitType})`}function Ah(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):Fe.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of wu(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(a,o,l){const u=$0(a,o,l);return a.inclusive?u<=0:u<0}(i.startAt,wu(i),r)||i.endAt&&!function(a,o,l){const u=$0(a,o,l);return a.inclusive?u>=0:u>0}(i.endAt,wu(i),r))}(e,t)}function WH(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function hP(e){return(t,n)=>{let i=!1;for(const r of wu(e)){const s=zH(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function zH(e,t,n){const i=e.field.isKeyField()?Fe.comparator(t.key,n.key):function(s,a,o){const l=a.data.field(s),u=o.data.field(s);return l!==null&&u!==null?Xo(l,u):Ge()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ge()}}/**
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
 */class pl{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){za(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return nP(this.inner)}size(){return this.innerSize}}/**
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
 */const qH=new qt(Fe.comparator);function Kr(){return qH}const mP=new qt(Fe.comparator);function su(...e){let t=mP;for(const n of e)t=t.insert(n.key,n);return t}function vP(e){let t=mP;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function fa(){return Su()}function gP(){return Su()}function Su(){return new pl(e=>e.toString(),(e,t)=>e.isEqual(t))}const GH=new qt(Fe.comparator),KH=new Tn(Fe.comparator);function Ze(...e){let t=KH;for(const n of e)t=t.add(n);return t}const YH=new Tn(dt);function QH(){return YH}/**
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
 */function Jy(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kf(t)?"-0":t}}function pP(e){return{integerValue:""+e}}function XH(e,t){return kH(t)?pP(t):Jy(e,t)}/**
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
 */class Ph{constructor(){this._=void 0}}function JH(e,t,n){return e instanceof Pf?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Gy(s)&&(s=Ky(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,t):e instanceof qu?_P(e,t):e instanceof Gu?bP(e,t):function(r,s){const a=yP(r,s),o=W0(a)+W0(r.Pe);return Sg(a)&&Sg(r.Pe)?pP(o):Jy(r.serializer,o)}(e,t)}function ZH(e,t,n){return e instanceof qu?_P(e,t):e instanceof Gu?bP(e,t):n}function yP(e,t){return e instanceof Rf?function(i){return Sg(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Pf extends Ph{}class qu extends Ph{constructor(t){super(),this.elements=t}}function _P(e,t){const n=wP(t);for(const i of e.elements)n.some(r=>fr(r,i))||n.push(i);return{arrayValue:{values:n}}}class Gu extends Ph{constructor(t){super(),this.elements=t}}function bP(e,t){let n=wP(t);for(const i of e.elements)n=n.filter(r=>!fr(r,i));return{arrayValue:{values:n}}}class Rf extends Ph{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function W0(e){return Qt(e.integerValue||e.doubleValue)}function wP(e){return Yy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function e5(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof qu&&r instanceof qu||i instanceof Gu&&r instanceof Gu?Qo(i.elements,r.elements,fr):i instanceof Rf&&r instanceof Rf?fr(i.Pe,r.Pe):i instanceof Pf&&r instanceof Pf}(e.transform,t.transform)}class t5{constructor(t,n){this.version=t,this.transformResults=n}}class si{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new si}static exists(t){return new si(void 0,t)}static updateTime(t){return new si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zd(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Rh{}function SP(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new xh(e.key,si.none()):new xc(e.key,e.data,si.none());{const n=e.data,i=ri.empty();let r=new Tn(Cn.comparator);for(let s of t.fields)if(!r.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new zs(e.key,i,new vi(r.toArray()),si.none())}}function n5(e,t,n){e instanceof xc?function(r,s,a){const o=r.value.clone(),l=q0(r.fieldTransforms,s,a.transformResults);o.setAll(l),s.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(e,t,n):e instanceof zs?function(r,s,a){if(!zd(r.precondition,s))return void s.convertToUnknownDocument(a.version);const o=q0(r.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(IP(r)),l.setAll(o),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Iu(e,t,n,i){return e instanceof xc?function(s,a,o,l){if(!zd(s.precondition,a))return o;const u=s.value.clone(),c=G0(s.fieldTransforms,l,a);return u.setAll(c),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof zs?function(s,a,o,l){if(!zd(s.precondition,a))return o;const u=G0(s.fieldTransforms,l,a),c=a.data;return c.setAll(IP(s)),c.setAll(u),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(e,t,n,i):function(s,a,o){return zd(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(e,t,n)}function i5(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=yP(i.transform,r||null);s!=null&&(n===null&&(n=ri.empty()),n.set(i.field,s))}return n||null}function z0(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Qo(i,r,(s,a)=>e5(s,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class xc extends Rh{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zs extends Rh{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function IP(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function q0(e,t,n){const i=new Map;Tt(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],a=s.transform,o=t.data.field(s.field);i.set(s.field,ZH(a,o,n[r]))}return i}function G0(e,t,n){const i=new Map;for(const r of e){const s=r.transform,a=n.data.field(r.field);i.set(r.field,JH(s,a,t))}return i}class xh extends Rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r5 extends Rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class s5{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&n5(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=Iu(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=Iu(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=gP();return this.mutations.forEach(r=>{const s=t.get(r.key),a=s.overlayedDocument;let o=this.applyToLocalView(a,s.mutatedFields);o=n.has(r.key)?null:o;const l=SP(a,o);l!==null&&i.set(r.key,l),a.isValidDocument()||a.convertToNoDocument(Ke.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ze())}isEqual(t){return this.batchId===t.batchId&&Qo(this.mutations,t.mutations,(n,i)=>z0(n,i))&&Qo(this.baseMutations,t.baseMutations,(n,i)=>z0(n,i))}}class Zy{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){Tt(t.mutations.length===i.length);let r=function(){return GH}();const s=t.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new Zy(t,n,i,r)}}/**
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
 */class a5{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class o5{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var tn,nt;function l5(e){switch(e){default:return Ge();case ce.CANCELLED:case ce.UNKNOWN:case ce.DEADLINE_EXCEEDED:case ce.RESOURCE_EXHAUSTED:case ce.INTERNAL:case ce.UNAVAILABLE:case ce.UNAUTHENTICATED:return!1;case ce.INVALID_ARGUMENT:case ce.NOT_FOUND:case ce.ALREADY_EXISTS:case ce.PERMISSION_DENIED:case ce.FAILED_PRECONDITION:case ce.ABORTED:case ce.OUT_OF_RANGE:case ce.UNIMPLEMENTED:case ce.DATA_LOSS:return!0}}function EP(e){if(e===void 0)return Gr("GRPC error has no .code"),ce.UNKNOWN;switch(e){case tn.OK:return ce.OK;case tn.CANCELLED:return ce.CANCELLED;case tn.UNKNOWN:return ce.UNKNOWN;case tn.DEADLINE_EXCEEDED:return ce.DEADLINE_EXCEEDED;case tn.RESOURCE_EXHAUSTED:return ce.RESOURCE_EXHAUSTED;case tn.INTERNAL:return ce.INTERNAL;case tn.UNAVAILABLE:return ce.UNAVAILABLE;case tn.UNAUTHENTICATED:return ce.UNAUTHENTICATED;case tn.INVALID_ARGUMENT:return ce.INVALID_ARGUMENT;case tn.NOT_FOUND:return ce.NOT_FOUND;case tn.ALREADY_EXISTS:return ce.ALREADY_EXISTS;case tn.PERMISSION_DENIED:return ce.PERMISSION_DENIED;case tn.FAILED_PRECONDITION:return ce.FAILED_PRECONDITION;case tn.ABORTED:return ce.ABORTED;case tn.OUT_OF_RANGE:return ce.OUT_OF_RANGE;case tn.UNIMPLEMENTED:return ce.UNIMPLEMENTED;case tn.DATA_LOSS:return ce.DATA_LOSS;default:return Ge()}}(nt=tn||(tn={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function u5(){return new TextEncoder}/**
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
 */const c5=new pa([4294967295,4294967295],0);function K0(e){const t=u5().encode(e),n=new GA;return n.update(t),new Uint8Array(n.digest())}function Y0(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new pa([n,i],0),new pa([r,s],0)]}class e_{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new au(`Invalid padding: ${n}`);if(i<0)throw new au(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new au(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new au(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=pa.fromNumber(this.Ie)}Ee(t,n,i){let r=t.add(n.multiply(pa.fromNumber(i)));return r.compare(c5)===1&&(r=new pa([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=K0(t),[i,r]=Y0(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);if(!this.de(a))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new e_(s,r,n);return i.forEach(o=>a.insert(o)),a}insert(t){if(this.Ie===0)return;const n=K0(t),[i,r]=Y0(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class au extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vh{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,Vc.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Vh(Ke.min(),r,new qt(dt),Kr(),Ze())}}class Vc{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new Vc(i,n,Ze(),Ze(),Ze())}}/**
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
 */class qd{constructor(t,n,i,r){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=r}}class CP{constructor(t,n){this.targetId=t,this.me=n}}class TP{constructor(t,n,i=kn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Q0{constructor(){this.fe=0,this.ge=J0(),this.pe=kn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Ze(),n=Ze(),i=Ze();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Ge()}}),new Vc(this.pe,this.ye,t,n,i)}Ce(){this.we=!1,this.ge=J0()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class d5{constructor(t){this.Le=t,this.Be=new Map,this.ke=Kr(),this.qe=X0(),this.Qe=new qt(dt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const i=this.Ge(n);switch(t.state){case 0:this.ze(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(t.resumeToken));break;default:Ge()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.ze(r)&&n(r)})}He(t){const n=t.targetId,i=t.me.count,r=this.Je(n);if(r){const s=r.target;if(Eg(s))if(i===0){const a=new Fe(s.path);this.Ue(n,a,Bn.newNoDocument(a,Ke.min()))}else Tt(i===1);else{const a=this.Ye(n);if(a!==i){const o=this.Ze(t),l=o?this.Xe(o,t,a):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let a,o;try{a=Va(i).toUint8Array()}catch(l){if(l instanceof iP)return Yo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{o=new e_(a,r,s)}catch(l){return Yo(l instanceof au?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return o.Ie===0?null:o}Xe(t,n,i){return n.me.count===i-this.nt(t,n.targetId)?0:2}nt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const a=this.Le.tt(),o=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(o)||(this.Ue(n,s,null),r++)}),r}rt(t){const n=new Map;this.Be.forEach((s,a)=>{const o=this.Je(a);if(o){if(s.current&&Eg(o.target)){const l=new Fe(o.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Bn.newNoDocument(l,t))}s.be&&(n.set(a,s.ve()),s.Ce())}});let i=Ze();this.qe.forEach((s,a)=>{let o=!0;a.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const r=new Vh(t,n,this.Qe,this.ke,i);return this.ke=Kr(),this.qe=X0(),this.Qe=new qt(dt),r}$e(t,n){if(!this.ze(t))return;const i=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new Q0,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Tn(dt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||Oe("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Q0),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function X0(){return new qt(Fe.comparator)}function J0(){return new qt(Fe.comparator)}const f5={asc:"ASCENDING",desc:"DESCENDING"},h5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m5={and:"AND",or:"OR"};class v5{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function kg(e,t){return e.useProto3Json||Ch(t)?t:{value:t}}function xf(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kP(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function g5(e,t){return xf(e,t.toTimestamp())}function lr(e){return Tt(!!e),Ke.fromTimestamp(function(n){const i=Vs(n);return new rn(i.seconds,i.nanos)}(e))}function t_(e,t){return Ag(e,t).canonicalString()}function Ag(e,t){const n=function(r){return new Lt(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function AP(e){const t=Lt.fromString(e);return Tt(DP(t)),t}function Pg(e,t){return t_(e.databaseId,t.path)}function cv(e,t){const n=AP(t);if(n.get(1)!==e.databaseId.projectId)throw new Re(ce.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Re(ce.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Fe(RP(n))}function PP(e,t){return t_(e.databaseId,t)}function p5(e){const t=AP(e);return t.length===4?Lt.emptyPath():RP(t)}function Rg(e){return new Lt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function RP(e){return Tt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Z0(e,t,n){return{name:Pg(e,t),fields:n.value.mapValue.fields}}function y5(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ge()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Tt(c===void 0||typeof c=="string"),kn.fromBase64String(c||"")):(Tt(c===void 0||c instanceof Buffer||c instanceof Uint8Array),kn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,o=a&&function(u){const c=u.code===void 0?ce.UNKNOWN:EP(u.code);return new Re(c,u.message||"")}(a);n=new TP(i,r,s,o||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=cv(e,i.document.name),s=lr(i.document.updateTime),a=i.document.createTime?lr(i.document.createTime):Ke.min(),o=new ri({mapValue:{fields:i.document.fields}}),l=Bn.newFoundDocument(r,s,a,o),u=i.targetIds||[],c=i.removedTargetIds||[];n=new qd(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=cv(e,i.document),s=i.readTime?lr(i.readTime):Ke.min(),a=Bn.newNoDocument(r,s),o=i.removedTargetIds||[];n=new qd([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=cv(e,i.document),s=i.removedTargetIds||[];n=new qd([],s,r,null)}else{if(!("filter"in t))return Ge();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new o5(r,s),o=i.targetId;n=new CP(o,a)}}return n}function _5(e,t){let n;if(t instanceof xc)n={update:Z0(e,t.key,t.value)};else if(t instanceof xh)n={delete:Pg(e,t.key)};else if(t instanceof zs)n={update:Z0(e,t.key,t.data),updateMask:A5(t.fieldMask)};else{if(!(t instanceof r5))return Ge();n={verify:Pg(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const o=a.transform;if(o instanceof Pf)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qu)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gu)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rf)return{fieldPath:a.field.canonicalString(),increment:o.Pe};throw Ge()}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:g5(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ge()}(e,t.precondition)),n}function b5(e,t){return e&&e.length>0?(Tt(t!==void 0),e.map(n=>function(r,s){let a=r.updateTime?lr(r.updateTime):lr(s);return a.isEqual(Ke.min())&&(a=lr(s)),new t5(a,r.transformResults||[])}(n,t))):[]}function w5(e,t){return{documents:[PP(e,t.path)]}}function S5(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=PP(e,r);const s=function(u){if(u.length!==0)return VP(qi.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:wo(h.field),direction:C5(h.dir)}}(c))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=kg(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:n,parent:r}}function I5(e){let t=p5(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Tt(i===1);const c=n.from[0];c.allDescendants?r=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=xP(d);return h instanceof qi&&oP(h)?h.getFilters():[h]}(n.where));let a=[];n.orderBy&&(a=function(d){return d.map(h=>function(g){return new zu(So(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(h))}(n.orderBy));let o=null;n.limit&&(o=function(d){let h;return h=typeof d=="object"?d.value:d,Ch(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,v=d.values||[];return new Af(v,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,v=d.values||[];return new Af(v,h)}(n.endAt)),HH(t,r,a,s,o,"F",l,u)}function E5(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ge()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function xP(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=So(n.unaryFilter.field);return nn.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=So(n.unaryFilter.field);return nn.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=So(n.unaryFilter.field);return nn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=So(n.unaryFilter.field);return nn.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Ge()}}(e):e.fieldFilter!==void 0?function(n){return nn.create(So(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return qi.create(n.compositeFilter.filters.map(i=>xP(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ge()}}(n.compositeFilter.op))}(e):Ge()}function C5(e){return f5[e]}function T5(e){return h5[e]}function k5(e){return m5[e]}function wo(e){return{fieldPath:e.canonicalString()}}function So(e){return Cn.fromServerFormat(e.fieldPath)}function VP(e){return e instanceof nn?function(n){if(n.op==="=="){if(B0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NAN"}};if(F0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(B0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NAN"}};if(F0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(n.field),op:T5(n.op),value:n.value}}}(e):e instanceof qi?function(n){const i=n.getFilters().map(r=>VP(r));return i.length===1?i[0]:{compositeFilter:{op:k5(n.op),filters:i}}}(e):Ge()}function A5(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function DP(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Es{constructor(t,n,i,r,s=Ke.min(),a=Ke.min(),o=kn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=l}withSequenceNumber(t){return new Es(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class P5{constructor(t){this.ct=t}}function R5(e){const t=I5({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Tg(t,t.limit,"L"):t}/**
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
 */class x5{constructor(){this.un=new V5}addToCollectionParentIndex(t,n){return this.un.add(n),pe.resolve()}getCollectionParents(t,n){return pe.resolve(this.un.getEntries(n))}addFieldIndex(t,n){return pe.resolve()}deleteFieldIndex(t,n){return pe.resolve()}deleteAllFieldIndexes(t){return pe.resolve()}createTargetIndexes(t,n){return pe.resolve()}getDocumentsMatchingTarget(t,n){return pe.resolve(null)}getIndexType(t,n){return pe.resolve(0)}getFieldIndexes(t,n){return pe.resolve([])}getNextCollectionGroupToUpdate(t){return pe.resolve(null)}getMinOffset(t,n){return pe.resolve(xs.min())}getMinOffsetFromCollectionGroup(t,n){return pe.resolve(xs.min())}updateCollectionGroup(t,n,i){return pe.resolve()}updateIndexEntries(t,n){return pe.resolve()}}class V5{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new Tn(Lt.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new Tn(Lt.comparator)).toArray()}}/**
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
 */class Zo{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zo(0)}static kn(){return new Zo(-1)}}/**
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
 */class D5{constructor(){this.changes=new pl(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Bn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?pe.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class N5{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class O5{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&Iu(i.mutation,r,vi.empty(),rn.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,Ze()).next(()=>i))}getLocalViewOfDocuments(t,n,i=Ze()){const r=fa();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let a=su();return s.forEach((o,l)=>{a=a.insert(o,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const i=fa();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,Ze()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((a,o)=>{n.set(a,o)})})}computeViews(t,n,i,r){let s=Kr();const a=Su(),o=function(){return Su()}();return n.forEach((l,u)=>{const c=i.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof zs)?s=s.insert(u.key,u):c!==void 0?(a.set(u.key,c.mutation.getFieldMask()),Iu(c.mutation,u,c.mutation.getFieldMask(),rn.now())):a.set(u.key,vi.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>a.set(u,c)),n.forEach((u,c)=>{var d;return o.set(u,new N5(c,(d=a.get(u))!==null&&d!==void 0?d:null))}),o))}recalculateAndSaveOverlays(t,n){const i=Su();let r=new qt((a,o)=>a-o),s=Ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const o of a)o.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=i.get(l)||vi.empty();c=o.applyToLocalView(u,c),i.set(l,c);const d=(r.get(o.batchId)||Ze()).add(l);r=r.insert(o.batchId,d)})}).next(()=>{const a=[],o=r.getReverseIterator();for(;o.hasNext();){const l=o.getNext(),u=l.key,c=l.value,d=gP();c.forEach(h=>{if(!s.has(h)){const v=SP(n.get(h),i.get(h));v!==null&&d.set(h,v),s=s.add(h)}}),a.push(this.documentOverlayCache.saveOverlays(t,u,d))}return pe.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(a){return Fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):dP(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):pe.resolve(fa());let o=-1,l=s;return a.next(u=>pe.forEach(u,(c,d)=>(o<d.largestBatchId&&(o=d.largestBatchId),s.get(c)?pe.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Ze())).next(c=>({batchId:o,changes:vP(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Fe(n)).next(i=>{let r=su();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let a=su();return this.indexManager.getCollectionParents(t,s).next(o=>pe.forEach(o,l=>{const u=function(d,h){return new gl(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(c=>{c.forEach((d,h)=>{a=a.insert(d,h)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(a=>{s.forEach((l,u)=>{const c=u.getKey();a.get(c)===null&&(a=a.insert(c,Bn.newInvalidDocument(c)))});let o=su();return a.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Iu(c.mutation,u,vi.empty(),rn.now()),Ah(n,u)&&(o=o.insert(l,u))}),o})}}/**
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
 */class M5{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,n){return pe.resolve(this.hr.get(n))}saveBundleMetadata(t,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:lr(r.createTime)}}(n)),pe.resolve()}getNamedQuery(t,n){return pe.resolve(this.Pr.get(n))}saveNamedQuery(t,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:R5(r.bundledQuery),readTime:lr(r.readTime)}}(n)),pe.resolve()}}/**
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
 */class L5{constructor(){this.overlays=new qt(Fe.comparator),this.Ir=new Map}getOverlay(t,n){return pe.resolve(this.overlays.get(n))}getOverlays(t,n){const i=fa();return pe.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.ht(t,n,s)}),pe.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),pe.resolve()}getOverlaysForCollection(t,n,i){const r=fa(),s=n.length+1,a=new Fe(n.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const l=o.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return pe.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new qt((u,c)=>u-c);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let c=s.get(u.largestBatchId);c===null&&(c=fa(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const o=fa(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>o.set(u,c)),!(o.size()>=r)););return pe.resolve(o)}ht(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new a5(n,i));let s=this.Ir.get(n);s===void 0&&(s=Ze(),this.Ir.set(n,s)),this.Ir.set(n,s.add(i.key))}}/**
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
 */class F5{constructor(){this.sessionToken=kn.EMPTY_BYTE_STRING}getSessionToken(t){return pe.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,pe.resolve()}}/**
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
 */class n_{constructor(){this.Tr=new Tn(dn.Er),this.dr=new Tn(dn.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,n){const i=new dn(t,n);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Vr(new dn(t,n))}mr(t,n){t.forEach(i=>this.removeReference(i,n))}gr(t){const n=new Fe(new Lt([])),i=new dn(n,t),r=new dn(n,t+1),s=[];return this.dr.forEachInRange([i,r],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const n=new Fe(new Lt([])),i=new dn(n,t),r=new dn(n,t+1);let s=Ze();return this.dr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(t){const n=new dn(t,0),i=this.Tr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class dn{constructor(t,n){this.key=t,this.wr=n}static Er(t,n){return Fe.comparator(t.key,n.key)||dt(t.wr,n.wr)}static Ar(t,n){return dt(t.wr,n.wr)||Fe.comparator(t.key,n.key)}}/**
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
 */class B5{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Tn(dn.Er)}checkEmpty(t){return pe.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new s5(s,n,i,r);this.mutationQueue.push(a);for(const o of r)this.br=this.br.add(new dn(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return pe.resolve(a)}lookupMutationBatch(t,n){return pe.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.vr(i),s=r<0?0:r;return pe.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return pe.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return pe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new dn(n,0),r=new dn(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],a=>{const o=this.Dr(a.wr);s.push(o)}),pe.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new Tn(dt);return n.forEach(r=>{const s=new dn(r,0),a=new dn(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],o=>{i=i.add(o.wr)})}),pe.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;Fe.isDocumentKey(s)||(s=s.child(""));const a=new dn(new Fe(s),0);let o=new Tn(dt);return this.br.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(o=o.add(l.wr)),!0)},a),pe.resolve(this.Cr(o))}Cr(t){const n=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){Tt(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return pe.forEach(n.mutations,r=>{const s=new dn(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,n){const i=new dn(n,0),r=this.br.firstAfterOrEqual(i);return pe.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,pe.resolve()}Fr(t,n){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const n=this.vr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $5{constructor(t){this.Mr=t,this.docs=function(){return new qt(Fe.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,a=this.Mr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return pe.resolve(i?i.document.mutableCopy():Bn.newInvalidDocument(n))}getEntries(t,n){let i=Kr();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Bn.newInvalidDocument(r))}),pe.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=Kr();const a=n.path,o=new Fe(a.child("")),l=this.docs.getIteratorFrom(o);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||IH(SH(c),i)<=0||(r.has(c.key)||Ah(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return pe.resolve(s)}getAllFromCollectionGroup(t,n,i,r){Ge()}Or(t,n){return pe.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new U5(this)}getSize(t){return pe.resolve(this.size)}}class U5 extends D5{constructor(t){super(),this.cr=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),pe.waitFor(n)}getFromCache(t,n){return this.cr.getEntry(t,n)}getAllFromCache(t,n){return this.cr.getEntries(t,n)}}/**
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
 */class H5{constructor(t){this.persistence=t,this.Nr=new pl(n=>Qy(n),Xy),this.lastRemoteSnapshotVersion=Ke.min(),this.highestTargetId=0,this.Lr=0,this.Br=new n_,this.targetCount=0,this.kr=Zo.Bn()}forEachTarget(t,n){return this.Nr.forEach((i,r)=>n(r)),pe.resolve()}getLastRemoteSnapshotVersion(t){return pe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return pe.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),pe.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Lr&&(this.Lr=n),pe.resolve()}Kn(t){this.Nr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.kr=new Zo(n),this.highestTargetId=n),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,n){return this.Kn(n),this.targetCount+=1,pe.resolve()}updateTargetData(t,n){return this.Kn(n),pe.resolve()}removeTargetData(t,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,pe.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Nr.forEach((a,o)=>{o.sequenceNumber<=n&&i.get(o.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),pe.waitFor(s).next(()=>r)}getTargetCount(t){return pe.resolve(this.targetCount)}getTargetData(t,n){const i=this.Nr.get(n)||null;return pe.resolve(i)}addMatchingKeys(t,n,i){return this.Br.Rr(n,i),pe.resolve()}removeMatchingKeys(t,n,i){this.Br.mr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(a=>{s.push(r.markPotentiallyOrphaned(t,a))}),pe.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Br.gr(n),pe.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Br.yr(n);return pe.resolve(i)}containsKey(t,n){return pe.resolve(this.Br.containsKey(n))}}/**
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
 */class j5{constructor(t,n){this.qr={},this.overlays={},this.Qr=new qy(0),this.Kr=!1,this.Kr=!0,this.$r=new F5,this.referenceDelegate=t(this),this.Ur=new H5(this),this.indexManager=new x5,this.remoteDocumentCache=function(r){return new $5(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new P5(n),this.Gr=new M5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new L5,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.qr[t.toKey()];return i||(i=new B5(n,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,n,i){Oe("MemoryPersistence","Starting transaction:",t);const r=new W5(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,n){return pe.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,n)))}}class W5 extends CH{constructor(t){super(),this.currentSequenceNumber=t}}class i_{constructor(t){this.persistence=t,this.Jr=new n_,this.Yr=null}static Zr(t){return new i_(t)}get Xr(){if(this.Yr)return this.Yr;throw Ge()}addReference(t,n,i){return this.Jr.addReference(i,n),this.Xr.delete(i.toString()),pe.resolve()}removeReference(t,n,i){return this.Jr.removeReference(i,n),this.Xr.add(i.toString()),pe.resolve()}markPotentiallyOrphaned(t,n){return this.Xr.add(n.toString()),pe.resolve()}removeTarget(t,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}zr(){this.Yr=new Set}jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pe.forEach(this.Xr,i=>{const r=Fe.fromPath(i);return this.ei(t,r).next(s=>{s||n.removeEntry(r,Ke.min())})}).next(()=>(this.Yr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ei(t,n).next(i=>{i?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(t){return 0}ei(t,n){return pe.or([()=>pe.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Hr(t,n)])}}/**
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
 */class r_{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.$i=i,this.Ui=r}static Wi(t,n){let i=Ze(),r=Ze();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new r_(t,n.fromCache,i,r)}}/**
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
 */class z5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class q5{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hL()?8:TH(zn())>0?6:4}()}initialize(t,n){this.Ji=t,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.Yi(t,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,n,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new z5;return this.Xi(t,n,a).next(o=>{if(s.result=o,this.zi)return this.es(t,n,a,o.size)})}).next(()=>s.result)}es(t,n,i,r){return i.documentReadCount<this.ji?(Ql()<=Je.DEBUG&&Oe("QueryEngine","SDK will not create cache indexes for query:",bo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),pe.resolve()):(Ql()<=Je.DEBUG&&Oe("QueryEngine","Query:",bo(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(Ql()<=Je.DEBUG&&Oe("QueryEngine","The SDK decides to create cache indexes for query:",bo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,or(n))):pe.resolve())}Yi(t,n){if(j0(n))return pe.resolve(null);let i=or(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Tg(n,null,"F"),i=or(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=Ze(...s);return this.Ji.getDocuments(t,a).next(o=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.ts(n,o);return this.ns(n,u,a,l.readTime)?this.Yi(t,Tg(n,null,"F")):this.rs(t,u,n,l)}))})))}Zi(t,n,i,r){return j0(n)||r.isEqual(Ke.min())?pe.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(n,s);return this.ns(n,a,i,r)?pe.resolve(null):(Ql()<=Je.DEBUG&&Oe("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bo(n)),this.rs(t,a,n,wH(r,-1)).next(o=>o))})}ts(t,n){let i=new Tn(hP(t));return n.forEach((r,s)=>{Ah(t,s)&&(i=i.add(s))}),i}ns(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,n,i){return Ql()<=Je.DEBUG&&Oe("QueryEngine","Using full collection scan to execute query:",bo(n)),this.Ji.getDocumentsMatchingQuery(t,n,xs.min(),i)}rs(t,n,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class G5{constructor(t,n,i,r){this.persistence=t,this.ss=n,this.serializer=r,this.os=new qt(dt),this._s=new pl(s=>Qy(s),Xy),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new O5(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.os))}}function K5(e,t,n,i){return new G5(e,t,n,i)}async function NP(e,t){const n=Ye(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.ls(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],o=[];let l=Ze();for(const u of r){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(i,l).next(u=>({hs:u,removedBatchIds:a,addedBatchIds:o}))})})}function Y5(e,t){const n=Ye(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(o,l,u,c){const d=u.batch,h=d.keys();let v=pe.resolve();return h.forEach(g=>{v=v.next(()=>c.getEntry(l,g)).next(p=>{const y=u.docVersions.get(g);Tt(y!==null),p.version.compareTo(y)<0&&(d.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),c.addEntry(p)))})}),v.next(()=>o.mutationQueue.removeMutationBatch(l,d))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let l=Ze();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(l=l.add(o.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function OP(e){const t=Ye(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ur.getLastRemoteSnapshotVersion(n))}function Q5(e,t){const n=Ye(e),i=t.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const o=[];t.targetChanges.forEach((c,d)=>{const h=r.get(d);if(!h)return;o.push(n.Ur.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(s,c.addedDocuments,d)));let v=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?v=v.withResumeToken(kn.EMPTY_BYTE_STRING,Ke.min()).withLastLimboFreeSnapshotVersion(Ke.min()):c.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(c.resumeToken,i)),r=r.insert(d,v),function(p,y,I){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,v,c)&&o.push(n.Ur.updateTargetData(s,v))});let l=Kr(),u=Ze();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),o.push(X5(s,a,t.documentUpdates).next(c=>{l=c.Ps,u=c.Is})),!i.isEqual(Ke.min())){const c=n.Ur.getLastRemoteSnapshotVersion(s).next(d=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));o.push(c)}return pe.waitFor(o).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.os=r,s))}function X5(e,t,n){let i=Ze(),r=Ze();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let a=Kr();return n.forEach((o,l)=>{const u=s.get(o);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(o)),l.isNoDocument()&&l.version.isEqual(Ke.min())?(t.removeEntry(o,l.readTime),a=a.insert(o,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),a=a.insert(o,l)):Oe("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",l.version)}),{Ps:a,Is:r}})}function J5(e,t){const n=Ye(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function Z5(e,t){const n=Ye(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ur.getTargetData(i,t).next(s=>s?(r=s,pe.resolve(r)):n.Ur.allocateTargetId(i).next(a=>(r=new Es(t,a,"TargetPurposeListen",i.currentSequenceNumber),n.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(i.targetId,i),n._s.set(t,i.targetId)),i})}async function xg(e,t,n){const i=Ye(e),r=i.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Rc(a))throw a;Oe("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function eI(e,t,n){const i=Ye(e);let r=Ke.min(),s=Ze();return i.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,c){const d=Ye(l),h=d._s.get(c);return h!==void 0?pe.resolve(d.os.get(h)):d.Ur.getTargetData(u,c)}(i,a,or(t)).next(o=>{if(o)return r=o.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,o.targetId).next(l=>{s=l})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,n?r:Ke.min(),n?s:Ze())).next(o=>(e6(i,WH(t),o),{documents:o,Ts:s})))}function e6(e,t,n){let i=e.us.get(t)||Ke.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.us.set(t,i)}class tI{constructor(){this.activeTargetIds=QH()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class t6{constructor(){this.so=new tI,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,n,i){this.oo[t]=n}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new tI,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class n6{_o(t){}shutdown(){}}/**
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
 */class nI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){Oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Id=null;function dv(){return Id===null?Id=function(){return 268435456+Math.round(2147483648*Math.random())}():Id++,"0x"+Id.toString(16)}/**
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
 */const i6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class r6{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Nn="WebChannelConnection";class s6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+n.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(n,i,r,s,a){const o=dv(),l=this.xo(n,i.toUriEncodedString());Oe("RestConnection",`Sending RPC '${n}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,a),this.No(n,l,u,r).then(c=>(Oe("RestConnection",`Received RPC '${n}' ${o}: `,c),c),c=>{throw Yo("RestConnection",`RPC '${n}' ${o} failed with error: `,c,"url: ",l,"request:",r),c})}Lo(n,i,r,s,a,o){return this.Mo(n,i,r,s,a)}Oo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vl}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>n[a]=s),r&&r.headers.forEach((s,a)=>n[a]=s)}xo(n,i){const r=i6[n];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,n,i,r){const s=dv();return new Promise((a,o)=>{const l=new KA;l.setWithCredentials(!0),l.listenOnce(QA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jd.NO_ERROR:const c=l.getResponseJson();Oe(Nn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),a(c);break;case jd.TIMEOUT:Oe(Nn,`RPC '${t}' ${s} timed out`),o(new Re(ce.DEADLINE_EXCEEDED,"Request time out"));break;case jd.HTTP_ERROR:const d=l.getStatus();if(Oe(Nn,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const v=h==null?void 0:h.error;if(v&&v.status&&v.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(ce).indexOf(I)>=0?I:ce.UNKNOWN}(v.status);o(new Re(g,v.message))}else o(new Re(ce.UNKNOWN,"Server responded with status "+l.getStatus()))}else o(new Re(ce.UNAVAILABLE,"Connection failed."));break;default:Ge()}}finally{Oe(Nn,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);Oe(Nn,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}Bo(t,n,i){const r=dv(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ZA(),o=JA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new YA({})),this.Oo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");Oe(Nn,`Creating RPC '${t}' stream ${r}: ${c}`,l);const d=a.createWebChannel(c,l);let h=!1,v=!1;const g=new r6({Io:y=>{v?Oe(Nn,`Not sending because RPC '${t}' stream ${r} is closed:`,y):(h||(Oe(Nn,`Opening RPC '${t}' stream ${r} transport.`),d.open(),h=!0),Oe(Nn,`RPC '${t}' stream ${r} sending:`,y),d.send(y))},To:()=>d.close()}),p=(y,I,E)=>{y.listen(I,V=>{try{E(V)}catch(A){setTimeout(()=>{throw A},0)}})};return p(d,ru.EventType.OPEN,()=>{v||(Oe(Nn,`RPC '${t}' stream ${r} transport opened.`),g.yo())}),p(d,ru.EventType.CLOSE,()=>{v||(v=!0,Oe(Nn,`RPC '${t}' stream ${r} transport closed`),g.So())}),p(d,ru.EventType.ERROR,y=>{v||(v=!0,Yo(Nn,`RPC '${t}' stream ${r} transport errored:`,y),g.So(new Re(ce.UNAVAILABLE,"The operation could not be completed")))}),p(d,ru.EventType.MESSAGE,y=>{var I;if(!v){const E=y.data[0];Tt(!!E);const V=E,A=V.error||((I=V[0])===null||I===void 0?void 0:I.error);if(A){Oe(Nn,`RPC '${t}' stream ${r} received error:`,A);const D=A.status;let N=function(_){const T=tn[_];if(T!==void 0)return EP(T)}(D),R=A.message;N===void 0&&(N=ce.INTERNAL,R="Unknown error status: "+D+" with message "+A.message),v=!0,g.So(new Re(N,R)),d.close()}else Oe(Nn,`RPC '${t}' stream ${r} received:`,E),g.bo(E)}}),p(o,XA.STAT_EVENT,y=>{y.stat===bg.PROXY?Oe(Nn,`RPC '${t}' stream ${r} detected buffering proxy`):y.stat===bg.NOPROXY&&Oe(Nn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function fv(){return typeof document<"u"?document:null}/**
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
 */function Dh(e){return new v5(e,!0)}/**
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
 */class MP{constructor(t,n,i=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-i);r>0&&Oe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class LP{constructor(t,n,i,r,s,a,o,l){this.ui=t,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new MP(t,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():n&&n.code===ce.RESOURCE_EXHAUSTED?(Gr(n.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===ce.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(n)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===n&&this.P_(i,r)},i=>{t(()=>{const r=new Re(ce.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,n){const i=this.h_(this.Yo);this.stream=this.T_(t,n),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return Oe("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return n=>{this.ui.enqueueAndForget(()=>this.Yo===t?n():(Oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a6 extends LP{constructor(t,n,i,r,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s}T_(t,n){return this.connection.Bo("Listen",t,n)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const n=y5(this.serializer,t),i=function(s){if(!("targetChange"in s))return Ke.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Ke.min():a.readTime?lr(a.readTime):Ke.min()}(t);return this.listener.d_(n,i)}A_(t){const n={};n.database=Rg(this.serializer),n.addTarget=function(s,a){let o;const l=a.target;if(o=Eg(l)?{documents:w5(s,l)}:{query:S5(s,l)._t},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=kP(s,a.resumeToken);const u=kg(s,a.expectedCount);u!==null&&(o.expectedCount=u)}else if(a.snapshotVersion.compareTo(Ke.min())>0){o.readTime=xf(s,a.snapshotVersion.toTimestamp());const u=kg(s,a.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const i=E5(this.serializer,t);i&&(n.labels=i),this.a_(n)}R_(t){const n={};n.database=Rg(this.serializer),n.removeTarget=t,this.a_(n)}}class o6 extends LP{constructor(t,n,i,r,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,n){return this.connection.Bo("Write",t,n)}E_(t){return Tt(!!t.streamToken),this.lastStreamToken=t.streamToken,Tt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const n=b5(t.writeResults,t.commitTime),i=lr(t.commitTime);return this.listener.g_(i,n)}p_(){const t={};t.database=Rg(this.serializer),this.a_(t)}m_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>_5(this.serializer,i))};this.a_(n)}}/**
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
 */class l6 extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new Re(ce.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,Ag(n,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Re(ce.UNKNOWN,s.toString())})}Lo(t,n,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.Lo(t,Ag(n,i),r,a,o,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Re(ce.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class u6{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gr(n),this.D_=!1):Oe("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class c6{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{qa(this)&&(Oe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Ye(l);u.L_.add(4),await Dc(u),u.q_.set("Unknown"),u.L_.delete(4),await Nh(u)}(this))})}),this.q_=new u6(i,r)}}async function Nh(e){if(qa(e))for(const t of e.B_)await t(!0)}async function Dc(e){for(const t of e.B_)await t(!1)}function FP(e,t){const n=Ye(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),l_(n)?o_(n):yl(n).r_()&&a_(n,t))}function s_(e,t){const n=Ye(e),i=yl(n);n.N_.delete(t),i.r_()&&BP(n,t),n.N_.size===0&&(i.r_()?i.o_():qa(n)&&n.q_.set("Unknown"))}function a_(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ke.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}yl(e).A_(t)}function BP(e,t){e.Q_.xe(t),yl(e).R_(t)}function o_(e){e.Q_=new d5({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),yl(e).start(),e.q_.v_()}function l_(e){return qa(e)&&!yl(e).n_()&&e.N_.size>0}function qa(e){return Ye(e).L_.size===0}function $P(e){e.Q_=void 0}async function d6(e){e.q_.set("Online")}async function f6(e){e.N_.forEach((t,n)=>{a_(e,t)})}async function h6(e,t){$P(e),l_(e)?(e.q_.M_(t),o_(e)):e.q_.set("Unknown")}async function m6(e,t,n){if(e.q_.set("Online"),t instanceof TP&&t.state===2&&t.cause)try{await async function(r,s){const a=s.cause;for(const o of s.targetIds)r.N_.has(o)&&(await r.remoteSyncer.rejectListen(o,a),r.N_.delete(o),r.Q_.removeTarget(o))}(e,t)}catch(i){Oe("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Vf(e,i)}else if(t instanceof qd?e.Q_.Ke(t):t instanceof CP?e.Q_.He(t):e.Q_.We(t),!n.isEqual(Ke.min()))try{const i=await OP(e.localStore);n.compareTo(i)>=0&&await function(s,a){const o=s.Q_.rt(a);return o.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.N_.get(u);c&&s.N_.set(u,c.withResumeToken(l.resumeToken,a))}}),o.targetMismatches.forEach((l,u)=>{const c=s.N_.get(l);if(!c)return;s.N_.set(l,c.withResumeToken(kn.EMPTY_BYTE_STRING,c.snapshotVersion)),BP(s,l);const d=new Es(c.target,l,u,c.sequenceNumber);a_(s,d)}),s.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(i){Oe("RemoteStore","Failed to raise snapshot:",i),await Vf(e,i)}}async function Vf(e,t,n){if(!Rc(t))throw t;e.L_.add(1),await Dc(e),e.q_.set("Offline"),n||(n=()=>OP(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Oe("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Nh(e)})}function UP(e,t){return t().catch(n=>Vf(e,n,t))}async function Oh(e){const t=Ye(e),n=Ds(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;v6(t);)try{const r=await J5(t.localStore,i);if(r===null){t.O_.length===0&&n.o_();break}i=r.batchId,g6(t,r)}catch(r){await Vf(t,r)}HP(t)&&jP(t)}function v6(e){return qa(e)&&e.O_.length<10}function g6(e,t){e.O_.push(t);const n=Ds(e);n.r_()&&n.V_&&n.m_(t.mutations)}function HP(e){return qa(e)&&!Ds(e).n_()&&e.O_.length>0}function jP(e){Ds(e).start()}async function p6(e){Ds(e).p_()}async function y6(e){const t=Ds(e);for(const n of e.O_)t.m_(n.mutations)}async function _6(e,t,n){const i=e.O_.shift(),r=Zy.from(i,t,n);await UP(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Oh(e)}async function b6(e,t){t&&Ds(e).V_&&await async function(i,r){if(function(a){return l5(a)&&a!==ce.ABORTED}(r.code)){const s=i.O_.shift();Ds(i).s_(),await UP(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Oh(i)}}(e,t),HP(e)&&jP(e)}async function iI(e,t){const n=Ye(e);n.asyncQueue.verifyOperationInProgress(),Oe("RemoteStore","RemoteStore received new credentials");const i=qa(n);n.L_.add(3),await Dc(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Nh(n)}async function w6(e,t){const n=Ye(e);t?(n.L_.delete(2),await Nh(n)):t||(n.L_.add(2),await Dc(n),n.q_.set("Unknown"))}function yl(e){return e.K_||(e.K_=function(n,i,r){const s=Ye(n);return s.w_(),new a6(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Eo:d6.bind(null,e),Ro:f6.bind(null,e),mo:h6.bind(null,e),d_:m6.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),l_(e)?o_(e):e.q_.set("Unknown")):(await e.K_.stop(),$P(e))})),e.K_}function Ds(e){return e.U_||(e.U_=function(n,i,r){const s=Ye(n);return s.w_(),new o6(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:p6.bind(null,e),mo:b6.bind(null,e),f_:y6.bind(null,e),g_:_6.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await Oh(e)):(await e.U_.stop(),e.O_.length>0&&(Oe("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_}/**
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
 */class u_{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const a=Date.now()+i,o=new u_(t,n,a,r,s);return o.start(i),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Re(ce.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function c_(e,t){if(Gr("AsyncQueue",`${t}: ${e}`),Rc(e))return new Re(ce.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Uo{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Fe.comparator(n.key,i.key):(n,i)=>Fe.comparator(n.key,i.key),this.keyedMap=su(),this.sortedSet=new qt(this.comparator)}static emptySet(t){return new Uo(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Uo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Uo;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
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
 */class rI{constructor(){this.W_=new qt(Fe.comparator)}track(t){const n=t.doc.key,i=this.W_.get(n);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(n,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(n):t.type===1&&i.type===2?this.W_=this.W_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):Ge():this.W_=this.W_.insert(n,t)}G_(){const t=[];return this.W_.inorderTraversal((n,i)=>{t.push(i)}),t}}class el{constructor(t,n,i,r,s,a,o,l,u){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,i,r,s){const a=[];return n.forEach(o=>{a.push({type:0,doc:o})}),new el(t,n,Uo.emptySet(n),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class S6{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class I6{constructor(){this.queries=sI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,i){const r=Ye(n),s=r.queries;r.queries=sI(),s.forEach((a,o)=>{for(const l of o.j_)l.onError(i)})})(this,new Re(ce.ABORTED,"Firestore shutting down"))}}function sI(){return new pl(e=>fP(e),kh)}async function d_(e,t){const n=Ye(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new S6,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await n.onListen(r,!0);break;case 1:s.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const o=c_(a,`Initialization of query '${bo(t.query)}' failed`);return void t.onError(o)}n.queries.set(r,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&h_(n)}async function f_(e,t){const n=Ye(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function E6(e,t){const n=Ye(e);let i=!1;for(const r of t){const s=r.query,a=n.queries.get(s);if(a){for(const o of a.j_)o.X_(r)&&(i=!0);a.z_=r}}i&&h_(n)}function C6(e,t,n){const i=Ye(e),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(n);i.queries.delete(t)}function h_(e){e.Y_.forEach(t=>{t.next()})}var Vg,aI;(aI=Vg||(Vg={})).ea="default",aI.Cache="cache";class m_{constructor(t,n,i){this.query=t,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new el(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.na?this.ia(t)&&(this.ta.next(t),n=!0):this.sa(t,this.onlineState)&&(this.oa(t),n=!0),this.ra=t,n}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),n=!0),n}sa(t,n){if(!t.fromCache||!this.J_())return!0;const i=n!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(t){t=el.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Vg.Cache}}/**
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
 */class WP{constructor(t){this.key=t}}class zP{constructor(t){this.key=t}}class T6{constructor(t,n){this.query=t,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ze(),this.mutatedKeys=Ze(),this.Aa=hP(t),this.Ra=new Uo(this.Aa)}get Va(){return this.Ta}ma(t,n){const i=n?n.fa:new rI,r=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=r,o=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((c,d)=>{const h=r.get(c),v=Ah(this.query,d)?d:null,g=!!h&&this.mutatedKeys.has(h.key),p=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let y=!1;h&&v?h.data.isEqual(v.data)?g!==p&&(i.track({type:3,doc:v}),y=!0):this.ga(h,v)||(i.track({type:2,doc:v}),y=!0,(l&&this.Aa(v,l)>0||u&&this.Aa(v,u)<0)&&(o=!0)):!h&&v?(i.track({type:0,doc:v}),y=!0):h&&!v&&(i.track({type:1,doc:h}),y=!0,(l||u)&&(o=!0)),y&&(v?(a=a.add(v),s=p?s.add(c):s.delete(c)):(a=a.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const c=this.query.limitType==="F"?a.last():a.first();a=a.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{Ra:a,fa:i,ns:o,mutatedKeys:s}}ga(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((c,d)=>function(v,g){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ge()}};return p(v)-p(g)}(c.type,d.type)||this.Aa(c.doc,d.doc)),this.pa(i),r=r!=null&&r;const o=n&&!r?this.ya():[],l=this.da.size===0&&this.current&&!r?1:0,u=l!==this.Ea;return this.Ea=l,a.length!==0||u?{snapshot:new el(this.query,t.Ra,s,a,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Ze(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const n=[];return t.forEach(i=>{this.da.has(i)||n.push(new zP(i))}),this.da.forEach(i=>{t.has(i)||n.push(new WP(i))}),n}ba(t){this.Ta=t.Ts,this.da=Ze();const n=this.ma(t.documents);return this.applyChanges(n,!0)}Da(){return el.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class k6{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class A6{constructor(t){this.key=t,this.va=!1}}class P6{constructor(t,n,i,r,s,a){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new pl(o=>fP(o),kh),this.Ma=new Map,this.xa=new Set,this.Oa=new qt(Fe.comparator),this.Na=new Map,this.La=new n_,this.Ba={},this.ka=new Map,this.qa=Zo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function R6(e,t,n=!0){const i=XP(e);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await qP(i,t,n,!0),r}async function x6(e,t){const n=XP(e);await qP(n,t,!0,!1)}async function qP(e,t,n,i){const r=await Z5(e.localStore,or(t)),s=r.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return i&&(o=await V6(e,t,s,a==="current",r.resumeToken)),e.isPrimaryClient&&n&&FP(e.remoteStore,r),o}async function V6(e,t,n,i,r){e.Ka=(d,h,v)=>async function(p,y,I,E){let V=y.view.ma(I);V.ns&&(V=await eI(p.localStore,y.query,!1).then(({documents:R})=>y.view.ma(R,V)));const A=E&&E.targetChanges.get(y.targetId),D=E&&E.targetMismatches.get(y.targetId)!=null,N=y.view.applyChanges(V,p.isPrimaryClient,A,D);return lI(p,y.targetId,N.wa),N.snapshot}(e,d,h,v);const s=await eI(e.localStore,t,!0),a=new T6(t,s.Ts),o=a.ma(s.documents),l=Vc.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),u=a.applyChanges(o,e.isPrimaryClient,l);lI(e,n,u.wa);const c=new k6(t,n,a);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function D6(e,t,n){const i=Ye(e),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(a=>!kh(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await xg(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&s_(i.remoteStore,r.targetId),Dg(i,r.targetId)}).catch(Pc)):(Dg(i,r.targetId),await xg(i.localStore,r.targetId,!0))}async function N6(e,t){const n=Ye(e),i=n.Fa.get(t),r=n.Ma.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),s_(n.remoteStore,i.targetId))}async function O6(e,t,n){const i=H6(e);try{const r=await function(a,o){const l=Ye(a),u=rn.now(),c=o.reduce((v,g)=>v.add(g.key),Ze());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let g=Kr(),p=Ze();return l.cs.getEntries(v,c).next(y=>{g=y,g.forEach((I,E)=>{E.isValidDocument()||(p=p.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,g)).next(y=>{d=y;const I=[];for(const E of o){const V=i5(E,d.get(E.key).overlayedDocument);V!=null&&I.push(new zs(E.key,V,rP(V.value.mapValue),si.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(d,p);return l.documentOverlayCache.saveOverlays(v,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:vP(d)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,o,l){let u=a.Ba[a.currentUser.toKey()];u||(u=new qt(dt)),u=u.insert(o,l),a.Ba[a.currentUser.toKey()]=u}(i,r.batchId,n),await Nc(i,r.changes),await Oh(i.remoteStore)}catch(r){const s=c_(r,"Failed to persist write");n.reject(s)}}async function GP(e,t){const n=Ye(e);try{const i=await Q5(n.localStore,t);t.targetChanges.forEach((r,s)=>{const a=n.Na.get(s);a&&(Tt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?Tt(a.va):r.removedDocuments.size>0&&(Tt(a.va),a.va=!1))}),await Nc(n,i,t)}catch(i){await Pc(i)}}function oI(e,t,n){const i=Ye(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Fa.forEach((s,a)=>{const o=a.view.Z_(t);o.snapshot&&r.push(o.snapshot)}),function(a,o){const l=Ye(a);l.onlineState=o;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.j_)h.Z_(o)&&(u=!0)}),u&&h_(l)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function M6(e,t,n){const i=Ye(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Na.get(t),s=r&&r.key;if(s){let a=new qt(Fe.comparator);a=a.insert(s,Bn.newNoDocument(s,Ke.min()));const o=Ze().add(s),l=new Vh(Ke.min(),new Map,new qt(dt),a,o);await GP(i,l),i.Oa=i.Oa.remove(s),i.Na.delete(t),v_(i)}else await xg(i.localStore,t,!1).then(()=>Dg(i,t,n)).catch(Pc)}async function L6(e,t){const n=Ye(e),i=t.batch.batchId;try{const r=await Y5(n.localStore,t);YP(n,i,null),KP(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Nc(n,r)}catch(r){await Pc(r)}}async function F6(e,t,n){const i=Ye(e);try{const r=await function(a,o){const l=Ye(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,o).next(d=>(Tt(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(i.localStore,t);YP(i,t,n),KP(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Nc(i,r)}catch(r){await Pc(r)}}function KP(e,t){(e.ka.get(t)||[]).forEach(n=>{n.resolve()}),e.ka.delete(t)}function YP(e,t,n){const i=Ye(e);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function Dg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Ma.get(t))e.Fa.delete(i),n&&e.Ca.$a(i,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(i=>{e.La.containsKey(i)||QP(e,i)})}function QP(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);n!==null&&(s_(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),v_(e))}function lI(e,t,n){for(const i of n)i instanceof WP?(e.La.addReference(i.key,t),B6(e,i)):i instanceof zP?(Oe("SyncEngine","Document no longer in limbo: "+i.key),e.La.removeReference(i.key,t),e.La.containsKey(i.key)||QP(e,i.key)):Ge()}function B6(e,t){const n=t.key,i=n.path.canonicalString();e.Oa.get(n)||e.xa.has(i)||(Oe("SyncEngine","New document in limbo: "+n),e.xa.add(i),v_(e))}function v_(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Fe(Lt.fromString(t)),i=e.qa.next();e.Na.set(i,new A6(n)),e.Oa=e.Oa.insert(n,i),FP(e.remoteStore,new Es(or(Th(n.path)),i,"TargetPurposeLimboResolution",qy.oe))}}async function Nc(e,t,n){const i=Ye(e),r=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((o,l)=>{a.push(i.Ka(l,t,n).then(u=>{var c;if((u||n)&&i.isPrimaryClient){const d=u?!u.fromCache:(c=n==null?void 0:n.targetChanges.get(l.targetId))===null||c===void 0?void 0:c.current;i.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=r_.Wi(l.targetId,u);s.push(d)}}))}),await Promise.all(a),i.Ca.d_(r),await async function(l,u){const c=Ye(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>pe.forEach(u,h=>pe.forEach(h.$i,v=>c.persistence.referenceDelegate.addReference(d,h.targetId,v)).next(()=>pe.forEach(h.Ui,v=>c.persistence.referenceDelegate.removeReference(d,h.targetId,v)))))}catch(d){if(!Rc(d))throw d;Oe("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const v=c.os.get(h),g=v.snapshotVersion,p=v.withLastLimboFreeSnapshotVersion(g);c.os=c.os.insert(h,p)}}}(i.localStore,s))}async function $6(e,t){const n=Ye(e);if(!n.currentUser.isEqual(t)){Oe("SyncEngine","User change. New user:",t.toKey());const i=await NP(n.localStore,t);n.currentUser=t,function(s,a){s.ka.forEach(o=>{o.forEach(l=>{l.reject(new Re(ce.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Nc(n,i.hs)}}function U6(e,t){const n=Ye(e),i=n.Na.get(t);if(i&&i.va)return Ze().add(i.key);{let r=Ze();const s=n.Ma.get(t);if(!s)return r;for(const a of s){const o=n.Fa.get(a);r=r.unionWith(o.view.Va)}return r}}function XP(e){const t=Ye(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=GP.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=U6.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=M6.bind(null,t),t.Ca.d_=E6.bind(null,t.eventManager),t.Ca.$a=C6.bind(null,t.eventManager),t}function H6(e){const t=Ye(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=L6.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=F6.bind(null,t),t}class uI{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Dh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return K5(this.persistence,new q5,t.initialUser,this.serializer)}createPersistence(t){return new j5(i_.Zr,this.serializer)}createSharedClientState(t){return new t6}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j6{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>oI(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=$6.bind(null,this.syncEngine),await w6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new I6}()}createDatastore(t){const n=Dh(t.databaseInfo.databaseId),i=function(s){return new s6(s)}(t.databaseInfo);return function(s,a,o,l){return new l6(s,a,o,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,a,o){return new c6(i,r,s,a,o)}(this.localStore,this.datastore,t.asyncQueue,n=>oI(this.syncEngine,n,0),function(){return nI.D()?new nI:new n6}())}createSyncEngine(t,n){return function(r,s,a,o,l,u,c){const d=new P6(r,s,a,o,l,u);return c&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(r){const s=Ye(r);Oe("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Dc(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class g_{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):Gr("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class W6{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=On.UNAUTHENTICATED,this.clientId=tP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Oe("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Oe("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Re(ce.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=c_(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function hv(e,t){e.asyncQueue.verifyOperationInProgress(),Oe("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await NP(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function cI(e,t){e.asyncQueue.verifyOperationInProgress();const n=await q6(e);Oe("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>iI(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>iI(t.remoteStore,r)),e._onlineComponents=t}function z6(e){return e.name==="FirebaseError"?e.code===ce.FAILED_PRECONDITION||e.code===ce.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function q6(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await hv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!z6(n))throw n;Yo("Error using user provided cache. Falling back to memory cache: "+n),await hv(e,new uI)}}else Oe("FirestoreClient","Using default OfflineComponentProvider"),await hv(e,new uI);return e._offlineComponents}async function JP(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Oe("FirestoreClient","Using user provided OnlineComponentProvider"),await cI(e,e._uninitializedComponentsProvider._online)):(Oe("FirestoreClient","Using default OnlineComponentProvider"),await cI(e,new j6))),e._onlineComponents}function G6(e){return JP(e).then(t=>t.syncEngine)}async function Df(e){const t=await JP(e),n=t.eventManager;return n.onListen=R6.bind(null,t.syncEngine),n.onUnlisten=D6.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=x6.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=N6.bind(null,t.syncEngine),n}function K6(e,t,n={}){const i=new Wr;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,u){const c=new g_({next:h=>{a.enqueueAndForget(()=>f_(s,d));const v=h.docs.has(o);!v&&h.fromCache?u.reject(new Re(ce.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&h.fromCache&&l&&l.source==="server"?u.reject(new Re(ce.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new m_(Th(o.path),c,{includeMetadataChanges:!0,_a:!0});return d_(s,d)}(await Df(e),e.asyncQueue,t,n,i)),i.promise}function Y6(e,t,n={}){const i=new Wr;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,u){const c=new g_({next:h=>{a.enqueueAndForget(()=>f_(s,d)),h.fromCache&&l.source==="server"?u.reject(new Re(ce.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new m_(o,c,{includeMetadataChanges:!0,_a:!0});return d_(s,d)}(await Df(e),e.asyncQueue,t,n,i)),i.promise}/**
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
 */function ZP(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const dI=new Map;/**
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
 */function e1(e,t,n){if(!n)throw new Re(ce.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Q6(e,t,n,i){if(t===!0&&i===!0)throw new Re(ce.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fI(e){if(!Fe.isDocumentKey(e))throw new Re(ce.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hI(e){if(Fe.isDocumentKey(e))throw new Re(ce.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mh(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Ge()}function _i(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Re(ce.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(e);throw new Re(ce.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class mI{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Re(ce.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Re(ce.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Q6("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZP((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Re(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Re(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Re(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lh{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Re(ce.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Re(ce.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mI(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new fH;switch(i.type){case"firstParty":return new gH(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Re(ce.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=dI.get(n);i&&(Oe("ComponentProvider","Removing Datastore"),dI.delete(n),i.terminate())}(this),Promise.resolve()}}function t1(e,t,n,i={}){var r;const s=(e=_i(e,Lh))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let o,l;if(typeof i.mockUserToken=="string")o=i.mockUserToken,l=On.MOCK_USER;else{o=lL(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Re(ce.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new On(u)}e._authCredentials=new hH(new eP(o,l))}}/**
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
 */class qs{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new qs(this.firestore,t,this._query)}}class Zn{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zn(this.firestore,t,this._key)}}class As extends qs{constructor(t,n,i){super(t,n,Th(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zn(this.firestore,null,new Fe(t))}withConverter(t){return new As(this.firestore,t,this._path)}}function NQ(e,t,...n){if(e=Jt(e),e1("collection","path",t),e instanceof Lh){const i=Lt.fromString(t,...n);return hI(i),new As(e,null,i)}{if(!(e instanceof Zn||e instanceof As))throw new Re(ce.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Lt.fromString(t,...n));return hI(i),new As(e.firestore,null,i)}}function X6(e,t,...n){if(e=Jt(e),arguments.length===1&&(t=tP.newId()),e1("doc","path",t),e instanceof Lh){const i=Lt.fromString(t,...n);return fI(i),new Zn(e,null,new Fe(i))}{if(!(e instanceof Zn||e instanceof As))throw new Re(ce.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Lt.fromString(t,...n));return fI(i),new Zn(e.firestore,e instanceof As?e.converter:null,new Fe(i))}}/**
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
 */class J6{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new MP(this,"async_queue_retry"),this.Eu=()=>{const n=fv();n&&Oe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const t=fv();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const n=fv();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const n=new Wr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Rc(t))throw t;Oe("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const n=this.au.then(()=>(this.Pu=!0,t().catch(i=>{this.hu=i,this.Pu=!1;const r=function(a){let o=a.message||"";return a.stack&&(o=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),o}(i);throw Gr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Pu=!1,i))));return this.au=n,n}enqueueAfterDelay(t,n,i){this.du(),this.Tu.indexOf(t)>-1&&(n=0);const r=u_.createAndSchedule(this,t,n,i,s=>this.Vu(s));return this.lu.push(r),r}du(){this.hu&&Ge()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const n of this.lu)if(n.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const n=this.lu.indexOf(t);this.lu.splice(n,1)}}function vI(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Yr extends Lh{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=function(){return new J6}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||i1(this),this._firestoreClient.terminate()}}function n1(e,t){const n=typeof e=="object"?e:uy(),i=typeof e=="string"?e:"(default)",r=ly(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=oL("firestore");s&&t1(r,...s)}return r}function Oc(e){return e._firestoreClient||i1(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function i1(e){var t,n,i;const r=e._freezeSettings(),s=function(o,l,u,c){return new PH(o,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ZP(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new W6(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class tl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new tl(kn.fromBase64String(t))}catch(n){throw new Re(ce.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new tl(kn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Mc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Re(ce.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function OQ(){return new Mc("__name__")}/**
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
 */class p_{constructor(t){this._methodName=t}}/**
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
 */class Fh{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Re(ce.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Re(ce.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return dt(this._lat,t._lat)||dt(this._long,t._long)}}/**
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
 */class y_{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const Z6=/^__.*__$/;class e3{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new zs(t,this.data,this.fieldMask,n,this.fieldTransforms):new xc(t,this.data,n,this.fieldTransforms)}}class r1{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new zs(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function s1(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ge()}}class __{constructor(t,n,i,r,s,a){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new __(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Su({path:i,Du:!1});return r.vu(t),r}Cu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Su({path:i,Du:!1});return r.yu(),r}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Nf(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(s1(this.wu)&&Z6.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class t3{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Dh(t)}Nu(t,n,i,r=!1){return new __({wu:t,methodName:n,Ou:i,path:Cn.emptyPath(),Du:!1,xu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bh(e){const t=e._freezeSettings(),n=Dh(e._databaseId);return new t3(e._databaseId,!!t.ignoreUndefinedProperties,n)}function b_(e,t,n,i,r,s={}){const a=e.Nu(s.merge||s.mergeFields?2:0,t,n,r);w_("Data must be an object, but it was:",a,i);const o=a1(i,a);let l,u;if(s.merge)l=new vi(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Ng(t,d,n);if(!a.contains(h))throw new Re(ce.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);l1(c,h)||c.push(h)}l=new vi(c),u=a.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=a.fieldTransforms;return new e3(new ri(o),l,u)}class $h extends p_{_toFieldTransform(t){if(t.wu!==2)throw t.wu===1?t.Mu(`${this._methodName}() can only appear at the top level of your update data`):t.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $h}}function n3(e,t,n,i){const r=e.Nu(1,t,n);w_("Data must be an object, but it was:",r,i);const s=[],a=ri.empty();za(i,(l,u)=>{const c=S_(t,l,n);u=Jt(u);const d=r.Cu(c);if(u instanceof $h)s.push(c);else{const h=Lc(u,d);h!=null&&(s.push(c),a.set(c,h))}});const o=new vi(s);return new r1(a,o,r.fieldTransforms)}function i3(e,t,n,i,r,s){const a=e.Nu(1,t,n),o=[Ng(t,i,n)],l=[r];if(s.length%2!=0)throw new Re(ce.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)o.push(Ng(t,s[h])),l.push(s[h+1]);const u=[],c=ri.empty();for(let h=o.length-1;h>=0;--h)if(!l1(u,o[h])){const v=o[h];let g=l[h];g=Jt(g);const p=a.Cu(v);if(g instanceof $h)u.push(v);else{const y=Lc(g,p);y!=null&&(u.push(v),c.set(v,y))}}const d=new vi(u);return new r1(c,d,a.fieldTransforms)}function r3(e,t,n,i=!1){return Lc(n,e.Nu(i?4:3,t))}function Lc(e,t){if(o1(e=Jt(e)))return w_("Unsupported field value:",t,e),a1(e,t);if(e instanceof p_)return function(i,r){if(!s1(r.wu))throw r.Mu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Mu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const o of i){let l=Lc(o,r.Fu(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Jt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return XH(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=rn.fromDate(i);return{timestampValue:xf(r.serializer,s)}}if(i instanceof rn){const s=new rn(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xf(r.serializer,s)}}if(i instanceof Fh)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof tl)return{bytesValue:kP(r.serializer,i._byteString)};if(i instanceof Zn){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:t_(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof y_)return function(a,o){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw o.Mu("VectorValues must only contain numeric values.");return Jy(o.serializer,l)})}}}}}}(i,r);throw r.Mu(`Unsupported field value: ${Mh(i)}`)}(e,t)}function a1(e,t){const n={};return nP(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):za(e,(i,r)=>{const s=Lc(r,t.bu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function o1(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof rn||e instanceof Fh||e instanceof tl||e instanceof Zn||e instanceof p_||e instanceof y_)}function w_(e,t,n){if(!o1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=Mh(n);throw i==="an object"?t.Mu(e+" a custom object"):t.Mu(e+" "+i)}}function Ng(e,t,n){if((t=Jt(t))instanceof Mc)return t._internalPath;if(typeof t=="string")return S_(e,t);throw Nf("Field path arguments must be of type string or ",e,!1,void 0,n)}const s3=new RegExp("[~\\*/\\[\\]]");function S_(e,t,n){if(t.search(s3)>=0)throw Nf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mc(...t.split("."))._internalPath}catch{throw Nf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Nf(e,t,n,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new Re(ce.INVALID_ARGUMENT,o+e+l)}function l1(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class u1{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new a3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Uh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class a3 extends u1{data(){return super.data()}}function Uh(e,t){return typeof t=="string"?S_(e,t):t instanceof Mc?t._internalPath:t._delegate._internalPath}/**
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
 */function c1(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Re(ce.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I_{}class d1 extends I_{}function MQ(e,t,...n){let i=[];t instanceof I_&&i.push(t),i=i.concat(n),function(s){const a=s.filter(l=>l instanceof E_).length,o=s.filter(l=>l instanceof Hh).length;if(a>1||a>0&&o>0)throw new Re(ce.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)e=r._apply(e);return e}class Hh extends d1{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new Hh(t,n,i)}_apply(t){const n=this._parse(t);return f1(t._query,n),new qs(t.firestore,t.converter,Cg(t._query,n))}_parse(t){const n=Bh(t.firestore);return function(s,a,o,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Re(ce.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){pI(d,c);const v=[];for(const g of d)v.push(gI(l,s,g));h={arrayValue:{values:v}}}else h=gI(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||pI(d,c),h=r3(o,a,d,c==="in"||c==="not-in");return nn.create(u,c,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function LQ(e,t,n){const i=t,r=Uh("where",e);return Hh._create(r,i,n)}class E_ extends I_{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new E_(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:qi.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,s){let a=r;const o=s.getFlattenedFilters();for(const l of o)f1(a,l),a=Cg(a,l)}(t._query,n),new qs(t.firestore,t.converter,Cg(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class C_ extends d1{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new C_(t,n)}_apply(t){const n=function(r,s,a){if(r.startAt!==null)throw new Re(ce.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Re(ce.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zu(s,a)}(t._query,this._field,this._direction);return new qs(t.firestore,t.converter,function(r,s){const a=r.explicitOrderBy.concat([s]);return new gl(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function FQ(e,t="asc"){const n=t,i=Uh("orderBy",e);return C_._create(i,n)}function gI(e,t,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new Re(ce.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dP(t)&&n.indexOf("/")!==-1)throw new Re(ce.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Lt.fromString(n));if(!Fe.isDocumentKey(i))throw new Re(ce.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return L0(e,new Fe(i))}if(n instanceof Zn)return L0(e,n._key);throw new Re(ce.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function pI(e,t){if(!Array.isArray(e)||e.length===0)throw new Re(ce.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function f1(e,t){const n=function(r,s){for(const a of r)for(const o of a.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new Re(ce.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Re(ce.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class o3{convertValue(t,n="none"){switch(Da(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Va(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Ge()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return za(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(t){var n,i,r;const s=(r=(i=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>Qt(a.doubleValue));return new y_(s)}convertGeoPoint(t){return new Fh(Qt(t.latitude),Qt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Ky(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Hu(t));default:return null}}convertTimestamp(t){const n=Vs(t);return new rn(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Lt.fromString(t);Tt(DP(i));const r=new ju(i.get(1),i.get(3)),s=new Fe(i.popFirst(5));return r.isEqual(n)||Gr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function T_(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}/**
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
 */class ou{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class h1 extends u1{constructor(t,n,i,r,s,a){super(t,n,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Gd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Uh("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Gd extends h1{data(t={}){return super.data(t)}}class m1{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new ou(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Gd(this._firestore,this._userDataWriter,i.key,i,new ou(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Re(ce.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(o=>{const l=new Gd(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ou(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const l=new Gd(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ou(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),c=a.indexOf(o.doc.key)),{type:l3(o.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function l3(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ge()}}/**
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
 */function v1(e){e=_i(e,Zn);const t=_i(e.firestore,Yr);return K6(Oc(t),e._key).then(n=>g1(t,e,n))}class k_ extends o3{constructor(t){super(),this.firestore=t}convertBytes(t){return new tl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Zn(this.firestore,null,n)}}function u3(e){e=_i(e,qs);const t=_i(e.firestore,Yr),n=Oc(t),i=new k_(t);return c1(e._query),Y6(n,e._query).then(r=>new m1(t,i,e,r))}function BQ(e,t,n){e=_i(e,Zn);const i=_i(e.firestore,Yr),r=T_(e.converter,t,n);return jh(i,[b_(Bh(i),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,si.none())])}function $Q(e){return jh(_i(e.firestore,Yr),[new xh(e._key,si.none())])}function UQ(e,t){const n=_i(e.firestore,Yr),i=X6(e),r=T_(e.converter,t);return jh(n,[b_(Bh(e.firestore),"addDoc",i._key,r,e.converter!==null,{}).toMutation(i._key,si.exists(!1))]).then(()=>i)}function A_(e,...t){var n,i,r;e=Jt(e);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||vI(t[a])||(s=t[a],a++);const o={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(vI(t[a])){const d=t[a];t[a]=(n=d.next)===null||n===void 0?void 0:n.bind(d),t[a+1]=(i=d.error)===null||i===void 0?void 0:i.bind(d),t[a+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let l,u,c;if(e instanceof Zn)u=_i(e.firestore,Yr),c=Th(e._key.path),l={next:d=>{t[a]&&t[a](g1(u,e,d))},error:t[a+1],complete:t[a+2]};else{const d=_i(e,qs);u=_i(d.firestore,Yr),c=d._query;const h=new k_(u);l={next:v=>{t[a]&&t[a](new m1(u,h,d,v))},error:t[a+1],complete:t[a+2]},c1(e._query)}return function(h,v,g,p){const y=new g_(p),I=new m_(v,y,g);return h.asyncQueue.enqueueAndForget(async()=>d_(await Df(h),I)),()=>{y.za(),h.asyncQueue.enqueueAndForget(async()=>f_(await Df(h),I))}}(Oc(u),c,o,l)}function jh(e,t){return function(i,r){const s=new Wr;return i.asyncQueue.enqueueAndForget(async()=>O6(await G6(i),r,s)),s.promise}(Oc(e),t)}function g1(e,t,n){const i=n.docs.get(t._key),r=new k_(e);return new h1(e,r,t._key,i,new ou(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */class c3{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Bh(t)}set(t,n,i){this._verifyNotCommitted();const r=mv(t,this._firestore),s=T_(r.converter,n,i),a=b_(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,si.none())),this}update(t,n,i,...r){this._verifyNotCommitted();const s=mv(t,this._firestore);let a;return a=typeof(n=Jt(n))=="string"||n instanceof Mc?i3(this._dataReader,"WriteBatch.update",s._key,n,i,r):n3(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(a.toMutation(s._key,si.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=mv(t,this._firestore);return this._mutations=this._mutations.concat(new xh(n._key,si.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Re(ce.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mv(e,t){if((e=Jt(e)).firestore!==t)throw new Re(ce.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */function HQ(e){return Oc(e=_i(e,Yr)),new c3(e,t=>jh(e,t))}(function(t,n=!0){(function(r){vl=r})(Ws),dr(new Wi("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),o=new Yr(new mH(i.getProvider("auth-internal")),new yH(i.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Re(ce.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ju(u.options.projectId,c)}(a,r),a);return s=Object.assign({useFetchStreams:n},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),pi(V0,"4.7.2",t),pi(V0,"4.7.2","esm2017")})();/**
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
 */const p1="firebasestorage.googleapis.com",d3="storageBucket",f3=2*60*1e3,h3=10*60*1e3;/**
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
 */class _r extends pr{constructor(t,n,i=0){super(vv(t),`Firebase Storage: ${n} (${vv(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_r.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return vv(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var hr;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(hr||(hr={}));function vv(e){return"storage/"+e}function m3(){const e="An unknown error occurred, please check the error payload for server response.";return new _r(hr.UNKNOWN,e)}function v3(){return new _r(hr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g3(){return new _r(hr.CANCELED,"User canceled the upload/download.")}function p3(e){return new _r(hr.INVALID_URL,"Invalid URL '"+e+"'.")}function y3(e){return new _r(hr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function yI(e){return new _r(hr.INVALID_ARGUMENT,e)}function y1(){return new _r(hr.APP_DELETED,"The Firebase app was deleted.")}function _3(e){return new _r(hr.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Bi{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=Bi.makeFromUrl(t,n)}catch{return new Bi(t,"")}if(i.path==="")return i;throw y3(t)}static makeFromUrl(t,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+r+a,"i"),l={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${d}/${c}/b/${r}/o${h}`,"i"),g={bucket:1,path:3},p=n===p1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",I=new RegExp(`^https?://${p}/${r}/${y}`,"i"),V=[{regex:o,indices:l,postModify:s},{regex:v,indices:g,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<V.length;A++){const D=V[A],N=D.regex.exec(t);if(N){const R=N[D.indices.bucket];let b=N[D.indices.path];b||(b=""),i=new Bi(R,b),D.postModify(i);break}}if(i==null)throw p3(t);return i}}class b3{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function w3(e,t,n){let i=1,r=null,s=null,a=!1,o=0;function l(){return o===2}let u=!1;function c(...y){u||(u=!0,t.apply(null,y))}function d(y){r=setTimeout(()=>{r=null,e(v,l())},y)}function h(){s&&clearTimeout(s)}function v(y,...I){if(u){h();return}if(y){h(),c.call(null,y,...I);return}if(l()||a){h(),c.call(null,y,...I);return}i<64&&(i*=2);let V;o===1?(o=2,V=0):V=(i+Math.random())*1e3,d(V)}let g=!1;function p(y){g||(g=!0,h(),!u&&(r!==null?(y||(o=2),clearTimeout(r),d(0)):y||(o=1)))}return d(0),s=setTimeout(()=>{a=!0,p(!0)},n),p}function S3(e){e(!1)}/**
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
 */function I3(e){return e!==void 0}function _I(e,t,n,i){if(i<t)throw yI(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw yI(`Invalid value for '${e}'. Expected ${n} or less.`)}function E3(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var Of;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Of||(Of={}));/**
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
 */function C3(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||r||s}/**
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
 */class T3{constructor(t,n,i,r,s,a,o,l,u,c,d,h=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,g)=>{this.resolve_=v,this.reject_=g,this.start_()})}start_(){const t=(i,r)=>{if(r){i(!1,new Ed(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const l=o.loaded,u=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===Of.NO_ERROR,l=s.getStatus();if(!o||C3(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Of.ABORT;i(!1,new Ed(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new Ed(u,s))})},n=(i,r)=>{const s=this.resolve_,a=this.reject_,o=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(o,o.getResponse());I3(l)?s(l):s()}catch(l){a(l)}else if(o!==null){const l=m3();l.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,l)):a(l)}else if(r.canceled){const l=this.appDelete_?y1():g3();a(l)}else{const l=v3();a(l)}};this.canceled_?n(!1,new Ed(!1,null,!0)):this.backoffId_=w3(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&S3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ed{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function k3(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function A3(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function P3(e,t){t&&(e["X-Firebase-GMPID"]=t)}function R3(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function x3(e,t,n,i,r,s,a=!0){const o=E3(e.urlParams),l=e.url+o,u=Object.assign({},e.headers);return P3(u,t),k3(u,n),A3(u,s),R3(u,i),new T3(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function V3(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function D3(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class Mf{constructor(t,n){this._service=t,n instanceof Bi?this._location=n:this._location=Bi.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Mf(t,n)}get root(){const t=new Bi(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return D3(this._location.path)}get storage(){return this._service}get parent(){const t=V3(this._location.path);if(t===null)return null;const n=new Bi(this._location.bucket,t);return new Mf(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw _3(t)}}function bI(e,t){const n=t==null?void 0:t[d3];return n==null?null:Bi.makeFromBucketSpec(n,e)}class N3{constructor(t,n,i,r,s){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=p1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=f3,this._maxUploadRetryTime=h3,this._requests=new Set,r!=null?this._bucket=Bi.makeFromBucketSpec(r,this._host):this._bucket=bI(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Bi.makeFromBucketSpec(this._url,t):this._bucket=bI(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){_I("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){_I("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Mf(this,t)}_makeRequest(t,n,i,r,s=!0){if(this._deleted)return new b3(y1());{const a=x3(t,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,r).getPromise()}}const wI="@firebase/storage",SI="0.13.2";/**
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
 */const O3="storage";function M3(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new N3(n,i,r,t,Ws)}function L3(){dr(new Wi(O3,M3,"PUBLIC").setMultipleInstances(!0)),pi(wI,SI,""),pi(wI,SI,"esm2017")}L3();const gv=new WeakMap;function _1(e,t){return gv.has(t)||gv.set(t,{f:{},r:{},s:{},u:{}}),gv.get(t)}function F3(e,t,n,i){if(!e)return n;const[r,s]=b1(e);if(!r)return n;const a=_1(void 0,i)[r]||{},o=t||s;return o&&o in a?a[o]:n}function B3(e,t,n,i){if(!e)return;const[r,s]=b1(e);if(!r)return;const a=_1(void 0,i)[r],o=t||s;if(o)return n.then(l=>{a[o]=l}).catch(nr),o}function b1(e){return p$(e)||y$(e)?["f",e.path]:_$(e)?["r",e.toString()]:b$(e)?["s",e.toString()]:[]}const pv=new WeakMap;function $3(e,t,n){const i=Ic();pv.has(i)||pv.set(i,new Map);const r=pv.get(i),s=B3(t,n,e,i);return s&&r.set(s,e),s?()=>r.delete(s):nr}const U3={toFirestore(e){return e},fromFirestore(e,t){return e.exists()?Object.defineProperties(e.data(t),{id:{value:e.id}}):null}};function Og(e,t,n,i){if(!v$(e))return[e,{}];const r=[{},{}],s=Object.keys(n).reduce((o,l)=>{const u=n[l];return o[u.path]=u.data(),o},{});function a(o,l,u,c){l=l||{};const[d,h]=c;Object.getOwnPropertyNames(o).forEach(v=>{const g=Object.getOwnPropertyDescriptor(o,v);g&&!g.enumerable&&Object.defineProperty(d,v,g)});for(const v in o){const g=o[v];if(g==null||g instanceof Date||g instanceof rn||g instanceof Fh)d[v]=g;else if(Iy(g)){const p=u+v;d[v]=p in n?l[v]:g.path,h[p]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){d[v]=Array(g.length);for(let p=0;p<g.length;p++){const y=g[p];y&&y.path in s&&(d[v][p]=s[y.path])}a(g,l[v]||d[v],u+v+".",[d[v],h])}else Ha(g)?(d[v]={},a(g,l[v],u+v+".",[d[v],h])):d[v]=g}}return a(e,t,"",r),r}const P_={reset:!1,wait:!0,maxRefDepth:2,converter:U3,snapshotOptions:{serverTimestamps:"estimate"}};function Lf(e){for(const t in e)e[t].unsub()}function Mg(e,t,n,i,r,s,a,o,l){const[u,c]=Og(i.data(e.snapshotOptions),Sy(t,n),r,e);s.set(t,n,u),Lg(e,t,n,r,c,s,a,o,l)}function H3({ref:e,target:t,path:n,depth:i,resolve:r,reject:s,ops:a},o){const l=Object.create(null);let u=nr;return o.once?v1(e).then(c=>{c.exists()?Mg(o,t,n,c,l,a,i,r,s):(a.set(t,n,null),r())}).catch(s):u=A_(e,c=>{c.exists()?Mg(o,t,n,c,l,a,i,r,s):(a.set(t,n,null),r())},s),()=>{u(),Lf(l)}}function Lg(e,t,n,i,r,s,a,o,l){const u=Object.keys(r);if(Object.keys(i).filter(p=>u.indexOf(p)<0).forEach(p=>{i[p].unsub(),delete i[p]}),!u.length||++a>e.maxRefDepth)return o(n);let d=0;const h=u.length,v=Object.create(null);function g(p){p in v&&++d>=h&&o(n)}u.forEach(p=>{const y=i[p],I=r[p],E=`${n}.${p}`;if(v[E]=!0,y)if(y.path!==I.path)y.unsub();else return;i[p]={data:()=>Sy(t,E),unsub:H3({ref:I,target:t,path:E,depth:a,ops:s,resolve:g.bind(null,E),reject:l},e),path:I.path}})}function j3(e,t,n,i,r,s){const a=Object.assign({},P_,s),{snapshotListenOptions:o,snapshotOptions:l,wait:u,once:c}=a,d="value";let h=ee(u?[]:e.value);u||n.set(e,d,[]);const v=i;let g,p=nr;const y=[],I={added:({newIndex:V,doc:A})=>{y.splice(V,0,Object.create(null));const D=y[V],[N,R]=Og(A.data(l),void 0,D,a);n.add(xr(h),V,N),Lg(a,h,`${d}.${V}`,D,R,n,0,i.bind(null,A),r)},modified:({oldIndex:V,newIndex:A,doc:D})=>{const N=xr(h),R=y[V],b=N[V],[_,T]=Og(D.data(l),b,R,a);y.splice(A,0,R),n.remove(N,V),n.add(N,A,_),Lg(a,h,`${d}.${A}`,R,T,n,0,i,r)},removed:({oldIndex:V})=>{const A=xr(h);n.remove(A,V),Lf(y.splice(V,1)[0])}};function E(V){const A=V.docChanges(o);if(!g&&A.length){g=!0;let D=0;const N=A.length,R=Object.create(null);for(let b=0;b<N;b++)R[A[b].doc.id]=!0;i=b=>{b&&b.id in R&&++D>=N&&(u&&(n.set(e,d,xr(h)),h=e),v(xr(h)),i=nr)}}A.forEach(D=>{I[D.type](D)}),A.length||(u&&(n.set(e,d,xr(h)),h=e),i(xr(h)))}return c?u3(t).then(E).catch(r):p=A_(t,E,r),V=>{if(p(),V){const A=typeof V=="function"?V():[];n.set(e,d,A)}y.forEach(Lf)}}function W3(e,t,n,i,r,s){const a=Object.assign({},P_,s),o="value",l=Object.create(null);i=w$(i,()=>Sy(e,o));let u=nr;function c(d){d.exists()?Mg(a,e,o,d,l,n,0,i,r):(n.set(e,o,null),i(null))}return a.once?v1(t).then(c).catch(r):u=A_(t,c,r),d=>{if(u(),d){const h=typeof d=="function"?d():null;n.set(e,o,h)}Lf(l)}}const II=Symbol();function z3(e,t){let n=nr;const i=Object.assign({},P_,t),r=xr(e),s=i.target||ee();I$()&&(i.once=!0);const a=F3(r,i.ssrKey,II,Ic()),o=a!==II;o&&(s.value=a);let l=!o;const u=ee(!1),c=ee(),d=he(),h=iC();let v=nr;function g(){let I=xr(e);const E=new Promise((V,A)=>{if(n(i.reset),!I)return n=nr,V(null);u.value=l,l=!0,I.converter||(I=I.withConverter(i.converter)),n=(Iy(I)?W3:j3)(s,I,q3,V,A,i)}).catch(V=>(d.value===E&&(c.value=V),Promise.reject(V))).finally(()=>{d.value===E&&(u.value=!1)});d.value=E}let p=nr;(Bt(e)||typeof e=="function")&&(p=ve(e,g)),g(),r&&(v=$3(d.value,r,i.ssrKey)),Ua()&&BC(()=>d.value),h&&Pn(y);function y(I=i.reset){p(),v(),n(I)}return Object.defineProperties(s,{error:{get:()=>c},data:{get:()=>s},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>y}})}const q3={set:(e,t,n)=>h$(e,t,n),add:(e,t,n)=>e.splice(t,0,n),remove:(e,t)=>e.splice(t,1)};function jQ(e,t){return z3(e,t)}function WQ(e){return n1(Ic(e))}function G3(e){return K3({initialUser:e,dependencies:{popupRedirectResolver:Rk,persistence:[Tk,bk,_y]}})}const w1=Symbol("VueFireAuth");function K3({dependencies:e,initialUser:t}){return(n,i)=>{const[r,s]=Y3(n,i,t,e);T$(r,s)}}function Y3(e,t,n,i,r=dk(e,i)){const s=E$(e,t).run(()=>ee(n));return Nk.set(e,s),t.provide(w1,r),[s,r]}function Q3(e){return f$?$e(w1):null}function X3(e,{firebaseApp:t,modules:n=[]}){e.provide(Dk,t);for(const i of n)i(t,e)}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Io=typeof document<"u";function S1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function J3(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&S1(e.default)}const bt=Object.assign;function yv(e,t){const n={};for(const i in t){const r=t[i];n[i]=Gi(r)?r.map(e):e(r)}return n}const Eu=()=>{},Gi=Array.isArray,I1=/#/g,Z3=/&/g,ej=/\//g,tj=/=/g,nj=/\?/g,E1=/\+/g,ij=/%5B/g,rj=/%5D/g,C1=/%5E/g,sj=/%60/g,T1=/%7B/g,aj=/%7C/g,k1=/%7D/g,oj=/%20/g;function R_(e){return encodeURI(""+e).replace(aj,"|").replace(ij,"[").replace(rj,"]")}function lj(e){return R_(e).replace(T1,"{").replace(k1,"}").replace(C1,"^")}function Fg(e){return R_(e).replace(E1,"%2B").replace(oj,"+").replace(I1,"%23").replace(Z3,"%26").replace(sj,"`").replace(T1,"{").replace(k1,"}").replace(C1,"^")}function uj(e){return Fg(e).replace(tj,"%3D")}function cj(e){return R_(e).replace(I1,"%23").replace(nj,"%3F")}function dj(e){return e==null?"":cj(e).replace(ej,"%2F")}function Ku(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const fj=/\/$/,hj=e=>e.replace(fj,"");function _v(e,t,n="/"){let i,r={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,o>-1?o:t.length),r=e(s)),o>-1&&(i=i||t.slice(0,o),a=t.slice(o,t.length)),i=pj(i??t,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Ku(a)}}function mj(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function EI(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function vj(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&nl(t.matched[i],n.matched[r])&&A1(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nl(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function A1(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gj(e[n],t[n]))return!1;return!0}function gj(e,t){return Gi(e)?CI(e,t):Gi(t)?CI(t,e):e===t}function CI(e,t){return Gi(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function pj(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const hs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Yu;(function(e){e.pop="pop",e.push="push"})(Yu||(Yu={}));var Cu;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Cu||(Cu={}));function yj(e){if(!e)if(Io){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hj(e)}const _j=/^[^#]+#/;function bj(e,t){return e.replace(_j,"#")+t}function wj(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Wh=()=>({left:window.scrollX,top:window.scrollY});function Sj(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=wj(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function TI(e,t){return(history.state?history.state.position-t:-1)+e}const Bg=new Map;function Ij(e,t){Bg.set(e,t)}function Ej(e){const t=Bg.get(e);return Bg.delete(e),t}let Cj=()=>location.protocol+"//"+location.host;function P1(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let o=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),EI(l,"")}return EI(n,e)+i+r}function Tj(e,t,n,i){let r=[],s=[],a=null;const o=({state:h})=>{const v=P1(e,location),g=n.value,p=t.value;let y=0;if(h){if(n.value=v,t.value=h,a&&a===g){a=null;return}y=p?h.position-p.position:0}else i(v);r.forEach(I=>{I(n.value,g,{delta:y,type:Yu.pop,direction:y?y>0?Cu.forward:Cu.back:Cu.unknown})})};function l(){a=n.value}function u(h){r.push(h);const v=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(v),v}function c(){const{history:h}=window;h.state&&h.replaceState(bt({},h.state,{scroll:Wh()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function kI(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?Wh():null}}function kj(e){const{history:t,location:n}=window,i={value:P1(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Cj()+e+l;try{t[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[c?"replace":"assign"](h)}}function a(l,u){const c=bt({},t.state,kI(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function o(l,u){const c=bt({},r.value,t.state,{forward:l,scroll:Wh()});s(c.current,c,!0);const d=bt({},kI(i.value,l,null),{position:c.position+1},u);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Aj(e){e=yj(e);const t=kj(e),n=Tj(e,t.state,t.location,t.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=bt({location:"",base:e,go:i,createHref:bj.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Pj(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Aj(e)}function Rj(e){return typeof e=="string"||e&&typeof e=="object"}function R1(e){return typeof e=="string"||typeof e=="symbol"}const x1=Symbol("");var AI;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(AI||(AI={}));function il(e,t){return bt(new Error,{type:e,[x1]:!0},t)}function Pr(e,t){return e instanceof Error&&x1 in e&&(t==null||!!(e.type&t))}const PI="[^/]+?",xj={sensitive:!1,strict:!1,start:!0,end:!0},Vj=/[.+*?^${}()[\]/\\]/g;function Dj(e,t){const n=bt({},xj,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const h=u[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Vj,"\\$&"),v+=40;else if(h.type===1){const{value:g,repeatable:p,optional:y,regexp:I}=h;s.push({name:g,repeatable:p,optional:y});const E=I||PI;if(E!==PI){v+=10;try{new RegExp(`(${E})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+A.message)}}let V=p?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(V=y&&u.length<2?`(?:/${V})`:"/"+V),y&&(V+="?"),r+=V,v+=20,y&&(v+=-8),p&&(v+=-20),E===".*"&&(v+=-50)}c.push(v)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(u){const c=u.match(a),d={};if(!c)return null;for(let h=1;h<c.length;h++){const v=c[h]||"",g=s[h-1];d[g.name]=v&&g.repeatable?v.split("/"):v}return d}function l(u){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const v of h)if(v.type===0)c+=v.value;else if(v.type===1){const{value:g,repeatable:p,optional:y}=v,I=g in u?u[g]:"";if(Gi(I)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Gi(I)?I.join("/"):I;if(!E)if(y)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);c+=E}}return c||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Nj(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function V1(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=Nj(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(RI(i))return 1;if(RI(r))return-1}return r.length-i.length}function RI(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Oj={type:0,value:""},Mj=/[a-zA-Z0-9_]/;function Lj(e){if(!e)return[[]];if(e==="/")return[[Oj]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,u="",c="";function d(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),a()):l===":"?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:Mj.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),r}function Fj(e,t,n){const i=Dj(Lj(e.path),n),r=bt(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Bj(e,t){const n=[],i=new Map;t=NI({strict:!1,end:!0,sensitive:!1},t);function r(d){return i.get(d)}function s(d,h,v){const g=!v,p=VI(d);p.aliasOf=v&&v.record;const y=NI(t,d),I=[p];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of A)I.push(VI(bt({},p,{components:v?v.record.components:p.components,path:D,aliasOf:v?v.record:p})))}let E,V;for(const A of I){const{path:D}=A;if(h&&D[0]!=="/"){const N=h.record.path,R=N[N.length-1]==="/"?"":"/";A.path=h.record.path+(D&&R+D)}if(E=Fj(A,h,y),v?v.alias.push(E):(V=V||E,V!==E&&V.alias.push(E),g&&d.name&&!DI(E)&&a(d.name)),D1(E)&&l(E),p.children){const N=p.children;for(let R=0;R<N.length;R++)s(N[R],E,v&&v.children[R])}v=v||E}return V?()=>{a(V)}:Eu}function a(d){if(R1(d)){const h=i.get(d);h&&(i.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&i.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return n}function l(d){const h=Hj(d,n);n.splice(h,0,d),d.record.name&&!DI(d)&&i.set(d.record.name,d)}function u(d,h){let v,g={},p,y;if("name"in d&&d.name){if(v=i.get(d.name),!v)throw il(1,{location:d});y=v.record.name,g=bt(xI(h.params,v.keys.filter(V=>!V.optional).concat(v.parent?v.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),d.params&&xI(d.params,v.keys.map(V=>V.name))),p=v.stringify(g)}else if(d.path!=null)p=d.path,v=n.find(V=>V.re.test(p)),v&&(g=v.parse(p),y=v.record.name);else{if(v=h.name?i.get(h.name):n.find(V=>V.re.test(h.path)),!v)throw il(1,{location:d,currentLocation:h});y=v.record.name,g=bt({},h.params,d.params),p=v.stringify(g)}const I=[];let E=v;for(;E;)I.unshift(E.record),E=E.parent;return{name:y,path:p,params:g,matched:I,meta:Uj(I)}}e.forEach(d=>s(d));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:r}}function xI(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function VI(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:$j(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function $j(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function DI(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Uj(e){return e.reduce((t,n)=>bt(t,n.meta),{})}function NI(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Hj(e,t){let n=0,i=t.length;for(;n!==i;){const s=n+i>>1;V1(e,t[s])<0?i=s:n=s+1}const r=jj(e);return r&&(i=t.lastIndexOf(r,i-1)),i}function jj(e){let t=e;for(;t=t.parent;)if(D1(t)&&V1(e,t)===0)return t}function D1({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Wj(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(E1," "),a=s.indexOf("="),o=Ku(a<0?s:s.slice(0,a)),l=a<0?null:Ku(s.slice(a+1));if(o in t){let u=t[o];Gi(u)||(u=t[o]=[u]),u.push(l)}else t[o]=l}return t}function OI(e){let t="";for(let n in e){const i=e[n];if(n=uj(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Gi(i)?i.map(s=>s&&Fg(s)):[i&&Fg(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function zj(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Gi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const qj=Symbol(""),MI=Symbol(""),zh=Symbol(""),x_=Symbol(""),$g=Symbol("");function Xl(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function _s(e,t,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const u=h=>{h===!1?l(il(4,{from:n,to:t})):h instanceof Error?l(h):Rj(h)?l(il(2,{from:t,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},c=s(()=>e.call(i&&i.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(h=>l(h))})}function bv(e,t,n,i,r=s=>s()){const s=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(S1(l)){const c=(l.__vccOpts||l)[t];c&&s.push(_s(c,n,i,a,o,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=J3(c)?c.default:c;a.mods[o]=c,a.components[o]=d;const v=(d.__vccOpts||d)[t];return v&&_s(v,n,i,a,o,r)()}))}}return s}function LI(e){const t=$e(zh),n=$e(x_),i=S(()=>{const l=it(e.to);return t.resolve(l)}),r=S(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(nl.bind(null,c));if(h>-1)return h;const v=FI(l[u-2]);return u>1&&FI(c)===v&&d[d.length-1].path!==v?d.findIndex(nl.bind(null,l[u-2])):h}),s=S(()=>r.value>-1&&Qj(n.params,i.value.params)),a=S(()=>r.value>-1&&r.value===n.matched.length-1&&A1(n.params,i.value.params));function o(l={}){return Yj(l)?t[it(e.replace)?"replace":"push"](it(e.to)).catch(Eu):Promise.resolve()}return{route:i,href:S(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const Gj=Hs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:LI,setup(e,{slots:t}){const n=Ut(LI(e)),{options:i}=$e(zh),r=S(()=>({[BI(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[BI(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Jn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Kj=Gj;function Yj(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qj(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Gi(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function FI(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const BI=(e,t,n)=>e??t??n,Xj=Hs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=$e($g),r=S(()=>e.route||i.value),s=$e(MI,0),a=S(()=>{let u=it(s);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),o=S(()=>r.value.matched[a.value]);vt(MI,S(()=>a.value+1)),vt(qj,o),vt($g,r);const l=ee();return ve(()=>[l.value,o.value,e.name],([u,c,d],[h,v,g])=>{c&&(c.instances[d]=u,v&&v!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=v.leaveGuards),c.updateGuards.size||(c.updateGuards=v.updateGuards))),u&&c&&(!v||!nl(c,v)||!h)&&(c.enterCallbacks[d]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=o.value,h=d&&d.components[c];if(!h)return $I(n.default,{Component:h,route:u});const v=d.props[c],g=v?v===!0?u.params:typeof v=="function"?v(u):v:null,y=Jn(h,bt({},g,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return $I(n.default,{Component:y,route:u})||y}}});function $I(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Jj=Xj;function Zj(e){const t=Bj(e.routes,e),n=e.parseQuery||Wj,i=e.stringifyQuery||OI,r=e.history,s=Xl(),a=Xl(),o=Xl(),l=he(hs);let u=hs;Io&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=yv.bind(null,j=>""+j),d=yv.bind(null,dj),h=yv.bind(null,Ku);function v(j,oe){let me,ue;return R1(j)?(me=t.getRecordMatcher(j),ue=oe):ue=j,t.addRoute(ue,me)}function g(j){const oe=t.getRecordMatcher(j);oe&&t.removeRoute(oe)}function p(){return t.getRoutes().map(j=>j.record)}function y(j){return!!t.getRecordMatcher(j)}function I(j,oe){if(oe=bt({},oe||l.value),typeof j=="string"){const M=_v(n,j,oe.path),H=t.resolve({path:M.path},oe),Z=r.createHref(M.fullPath);return bt(M,H,{params:h(H.params),hash:Ku(M.hash),redirectedFrom:void 0,href:Z})}let me;if(j.path!=null)me=bt({},j,{path:_v(n,j.path,oe.path).path});else{const M=bt({},j.params);for(const H in M)M[H]==null&&delete M[H];me=bt({},j,{params:d(M)}),oe.params=d(oe.params)}const ue=t.resolve(me,oe),re=j.hash||"";ue.params=c(h(ue.params));const Ee=mj(i,bt({},j,{hash:lj(re),path:ue.path})),O=r.createHref(Ee);return bt({fullPath:Ee,hash:re,query:i===OI?zj(j.query):j.query||{}},ue,{redirectedFrom:void 0,href:O})}function E(j){return typeof j=="string"?_v(n,j,l.value.path):bt({},j)}function V(j,oe){if(u!==j)return il(8,{from:oe,to:j})}function A(j){return R(j)}function D(j){return A(bt(E(j),{replace:!0}))}function N(j){const oe=j.matched[j.matched.length-1];if(oe&&oe.redirect){const{redirect:me}=oe;let ue=typeof me=="function"?me(j):me;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=E(ue):{path:ue},ue.params={}),bt({query:j.query,hash:j.hash,params:ue.path!=null?{}:j.params},ue)}}function R(j,oe){const me=u=I(j),ue=l.value,re=j.state,Ee=j.force,O=j.replace===!0,M=N(me);if(M)return R(bt(E(M),{state:typeof M=="object"?bt({},re,M.state):re,force:Ee,replace:O}),oe||me);const H=me;H.redirectedFrom=oe;let Z;return!Ee&&vj(i,ue,me)&&(Z=il(16,{to:H,from:ue}),q(ue,ue,!0,!1)),(Z?Promise.resolve(Z):T(H,ue)).catch(X=>Pr(X)?Pr(X,2)?X:$(X):z(X,H,ue)).then(X=>{if(X){if(Pr(X,2))return R(bt({replace:O},E(X.to),{state:typeof X.to=="object"?bt({},re,X.to.state):re,force:Ee}),oe||H)}else X=C(H,ue,!0,O,re);return k(H,ue,X),X})}function b(j,oe){const me=V(j,oe);return me?Promise.reject(me):Promise.resolve()}function _(j){const oe=Se.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(j):j()}function T(j,oe){let me;const[ue,re,Ee]=e9(j,oe);me=bv(ue.reverse(),"beforeRouteLeave",j,oe);for(const M of ue)M.leaveGuards.forEach(H=>{me.push(_s(H,j,oe))});const O=b.bind(null,j,oe);return me.push(O),ie(me).then(()=>{me=[];for(const M of s.list())me.push(_s(M,j,oe));return me.push(O),ie(me)}).then(()=>{me=bv(re,"beforeRouteUpdate",j,oe);for(const M of re)M.updateGuards.forEach(H=>{me.push(_s(H,j,oe))});return me.push(O),ie(me)}).then(()=>{me=[];for(const M of Ee)if(M.beforeEnter)if(Gi(M.beforeEnter))for(const H of M.beforeEnter)me.push(_s(H,j,oe));else me.push(_s(M.beforeEnter,j,oe));return me.push(O),ie(me)}).then(()=>(j.matched.forEach(M=>M.enterCallbacks={}),me=bv(Ee,"beforeRouteEnter",j,oe,_),me.push(O),ie(me))).then(()=>{me=[];for(const M of a.list())me.push(_s(M,j,oe));return me.push(O),ie(me)}).catch(M=>Pr(M,8)?M:Promise.reject(M))}function k(j,oe,me){o.list().forEach(ue=>_(()=>ue(j,oe,me)))}function C(j,oe,me,ue,re){const Ee=V(j,oe);if(Ee)return Ee;const O=oe===hs,M=Io?history.state:{};me&&(ue||O?r.replace(j.fullPath,bt({scroll:O&&M&&M.scroll},re)):r.push(j.fullPath,re)),l.value=j,q(j,oe,me,O),$()}let P;function B(){P||(P=r.listen((j,oe,me)=>{if(!Pe.listening)return;const ue=I(j),re=N(ue);if(re){R(bt(re,{replace:!0}),ue).catch(Eu);return}u=ue;const Ee=l.value;Io&&Ij(TI(Ee.fullPath,me.delta),Wh()),T(ue,Ee).catch(O=>Pr(O,12)?O:Pr(O,2)?(R(O.to,ue).then(M=>{Pr(M,20)&&!me.delta&&me.type===Yu.pop&&r.go(-1,!1)}).catch(Eu),Promise.reject()):(me.delta&&r.go(-me.delta,!1),z(O,ue,Ee))).then(O=>{O=O||C(ue,Ee,!1),O&&(me.delta&&!Pr(O,8)?r.go(-me.delta,!1):me.type===Yu.pop&&Pr(O,20)&&r.go(-1,!1)),k(ue,Ee,O)}).catch(Eu)}))}let W=Xl(),Y=Xl(),se;function z(j,oe,me){$(j);const ue=Y.list();return ue.length?ue.forEach(re=>re(j,oe,me)):console.error(j),Promise.reject(j)}function U(){return se&&l.value!==hs?Promise.resolve():new Promise((j,oe)=>{W.add([j,oe])})}function $(j){return se||(se=!j,B(),W.list().forEach(([oe,me])=>j?me(j):oe()),W.reset()),j}function q(j,oe,me,ue){const{scrollBehavior:re}=e;if(!Io||!re)return Promise.resolve();const Ee=!me&&Ej(TI(j.fullPath,0))||(ue||!me)&&history.state&&history.state.scroll||null;return Qe().then(()=>re(j,oe,Ee)).then(O=>O&&Sj(O)).catch(O=>z(O,j,oe))}const ne=j=>r.go(j);let ge;const Se=new Set,Pe={currentRoute:l,listening:!0,addRoute:v,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:p,resolve:I,options:e,push:A,replace:D,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Y.add,isReady:U,install(j){const oe=this;j.component("RouterLink",Kj),j.component("RouterView",Jj),j.config.globalProperties.$router=oe,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>it(l)}),Io&&!ge&&l.value===hs&&(ge=!0,A(r.location).catch(re=>{}));const me={};for(const re in hs)Object.defineProperty(me,re,{get:()=>l.value[re],enumerable:!0});j.provide(zh,oe),j.provide(x_,yC(me)),j.provide($g,l);const ue=j.unmount;Se.add(j),j.unmount=function(){Se.delete(j),Se.size<1&&(u=hs,P&&P(),P=null,l.value=hs,ge=!1,se=!1),ue()}}};function ie(j){return j.reduce((oe,me)=>oe.then(()=>_(me)),Promise.resolve())}return Pe}function e9(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(u=>nl(u,o))?i.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(u=>nl(u,l))||r.push(l))}return[n,i,r]}function t9(){return $e(zh)}function n9(e){return $e(x_)}function ei(e,t){let n;function i(){n=dc(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}ve(e,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),Pn(()=>{n==null||n.stop()})}const lt=typeof window<"u",V_=lt&&"IntersectionObserver"in window,i9=lt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),UI=lt&&"EyeDropper"in window;function HI(e,t,n){r9(e,t),t.set(e,n)}function r9(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function s9(e,t,n){return e.set(N1(e,t),n),n}function ia(e,t){return e.get(N1(e,t))}function N1(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function O1(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let r=0;r<i;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function br(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>br(e[i],t[i]))}function Na(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),O1(e,t.split("."),n))}function Yt(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return Na(e,t,n);if(Array.isArray(t))return O1(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function gi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function D_(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function jI(e){let t;return e!==null&&typeof e=="object"&&((t=Object.getPrototypeOf(e))===Object.prototype||t===null)}function N_(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const WI=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Ug=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function M1(e){return Object.keys(e)}function ha(e,t){return t.every(n=>e.hasOwnProperty(n))}function O_(e,t){const n={},i=new Set(Object.keys(e));for(const r of t)i.has(r)&&(n[r]=e[r]);return n}function Hg(e,t,n){const i=Object.create(null),r=Object.create(null);for(const s in e)t.some(a=>a instanceof RegExp?a.test(s):a===s)&&!(n!=null&&n.some(a=>a===s))?i[s]=e[s]:r[s]=e[s];return[i,r]}function ht(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}function qh(e,t){const n={};return t.forEach(i=>n[i]=e[i]),n}const L1=/^on[^a-z]/,Gh=e=>L1.test(e),a9=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],o9=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function l9(e){return e.isComposing&&o9.includes(e.key)}function Gs(e){const[t,n]=Hg(e,[L1]),i=ht(t,a9),[r,s]=Hg(n,["class","style","id",/^data-/]);return Object.assign(r,t),Object.assign(s,i),[r,s]}function Pt(e){return e==null?[]:Array.isArray(e)?e:[e]}function u9(e,t){let n=0;const i=function(){for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];clearTimeout(n),n=setTimeout(()=>e(...s),it(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function Ff(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function zI(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function qI(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function c9(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function d9(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Array.from({length:Math.ceil(e.length/t)},(n,i)=>e.slice(i*t,i*t+t))}function GI(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function Hn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in e)i[r]=e[r];for(const r in t){const s=e[r],a=t[r];if(jI(s)&&jI(a)){i[r]=Hn(s,a,n);continue}if(n&&Array.isArray(s)&&Array.isArray(a)){i[r]=n(s,a);continue}i[r]=a}return i}function F1(e){return e.map(t=>t.type===we?F1(t.children):t).flat()}function ya(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ya.cache.has(e))return ya.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ya.cache.set(e,t),t}ya.cache=new Map;function To(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>To(e,n)).flat(1);if(t.suspense)return To(e,t.ssContent);if(Array.isArray(t.children))return t.children.map(n=>To(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return To(e,t.component.subTree).flat(1)}return[]}var Cd=new WeakMap,mo=new WeakMap;class f9{constructor(t){HI(this,Cd,[]),HI(this,mo,0),this.size=t}push(t){ia(Cd,this)[ia(mo,this)]=t,s9(mo,this,(ia(mo,this)+1)%this.size)}values(){return ia(Cd,this).slice(ia(mo,this)).concat(ia(Cd,this).slice(0,ia(mo,this)))}}function h9(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function M_(e){const t=Ut({}),n=S(e);return Ct(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),Us(t)}function Bf(e,t){return e.includes(t)}function B1(e){return e[2].toLowerCase()+e.slice(3)}const on=()=>[Function,Array];function KI(e,t){return t="on"+gr(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function L_(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}function Qu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function $1(e,t,n){let i,r=e.indexOf(document.activeElement);const s=t==="next"?1:-1;do r+=s,i=e[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<e.length&&r>=0);return i}function _a(e,t){var i,r,s,a;const n=Qu(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(r=n[0])==null||r.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else if(typeof t=="number")(a=n[t])==null||a.focus();else{const o=$1(n,t);o?o.focus():_a(e,t==="next"?"first":"last")}}function Td(e){return e==null||typeof e=="string"&&e.trim()===""}function U1(){}function rl(e,t){if(!(lt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function Kh(e){return e.some(t=>Ea(t)?t.type===$n?!1:t.type!==we||Kh(t.children):!0)?e:null}function m9(e,t){if(!lt||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function v9(e,t){const n=e.clientX,i=e.clientY,r=t.getBoundingClientRect(),s=r.left,a=r.top,o=r.right,l=r.bottom;return n>=s&&n<=o&&i>=a&&i<=l}function $f(){const e=he(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>N_(e.value)}),t}function Uf(e){const t=e.key.length===1,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}const H1=["top","bottom"],g9=["start","end","left","right"];function jg(e,t){let[n,i]=e.split(" ");return i||(i=Bf(H1,n)?"start":Bf(g9,n)?"top":"center"),{side:Wg(n,t),align:Wg(i,t)}}function Wg(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function wv(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Sv(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function YI(e){return{side:e.align,align:e.side}}function QI(e){return Bf(H1,e.side)?"y":"x"}class ba{constructor(t){let{x:n,y:i,width:r,height:s}=t;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function XI(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function j1(e){return Array.isArray(e)?new ba({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function F_(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let r,s,a,o,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],a=+r[5],o=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],a=+r[3],o=+r[4],l=+r[5];else return new ba(t);const u=n.transformOrigin,c=t.x-o-(1-s)*parseFloat(u),d=t.y-l-(1-a)*parseFloat(u.slice(u.indexOf(" ")+1)),h=s?t.width/s:e.offsetWidth+1,v=a?t.height/a:e.offsetHeight+1;return new ba({x:c,y:d,width:h,height:v})}else return new ba(t)}function ma(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const Kd=new WeakMap;function p9(e,t){Object.keys(t).forEach(n=>{if(Gh(n)){const i=B1(n),r=Kd.get(e);if(t[n]==null)r==null||r.forEach(s=>{const[a,o]=s;a===i&&(e.removeEventListener(i,o),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===t[n])){e.addEventListener(i,t[n]);const s=r||new Set;s.add([i,t[n]]),Kd.has(e)||Kd.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function y9(e,t){Object.keys(t).forEach(n=>{if(Gh(n)){const i=B1(n),r=Kd.get(e);r==null||r.forEach(s=>{const[a,o]=s;a===i&&(e.removeEventListener(i,o),r.delete(s))})}else e.removeAttribute(n)})}const vo=2.4,JI=.2126729,ZI=.7151522,eE=.072175,_9=.55,b9=.58,w9=.57,S9=.62,kd=.03,tE=1.45,I9=5e-4,E9=1.25,C9=1.25,nE=.078,iE=12.82051282051282,Ad=.06,rE=.001;function sE(e,t){const n=(e.r/255)**vo,i=(e.g/255)**vo,r=(e.b/255)**vo,s=(t.r/255)**vo,a=(t.g/255)**vo,o=(t.b/255)**vo;let l=n*JI+i*ZI+r*eE,u=s*JI+a*ZI+o*eE;if(l<=kd&&(l+=(kd-l)**tE),u<=kd&&(u+=(kd-u)**tE),Math.abs(u-l)<I9)return 0;let c;if(u>l){const d=(u**_9-l**b9)*E9;c=d<rE?0:d<nE?d-d*iE*Ad:d-Ad}else{const d=(u**S9-l**w9)*C9;c=d>-rE?0:d>-nE?d-d*iE*Ad:d+Ad}return c*100}function T9(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const Hf=.20689655172413793,k9=e=>e>Hf**3?Math.cbrt(e):e/(3*Hf**2)+4/29,A9=e=>e>Hf?e**3:3*Hf**2*(e-4/29);function W1(e){const t=k9,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function z1(e){const t=A9,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const P9=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],R9=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,x9=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],V9=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function q1(e){const t=Array(3),n=R9,i=P9;for(let r=0;r<3;++r)t[r]=Math.round(Ft(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function B_(e){let{r:t,g:n,b:i}=e;const r=[0,0,0],s=V9,a=x9;t=s(t/255),n=s(n/255),i=s(i/255);for(let o=0;o<3;++o)r[o]=a[o][0]*t+a[o][1]*n+a[o][2]*i;return r}function zg(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function D9(e){return zg(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const aE=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,N9={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>oE({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>oE({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>Qr({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>Qr({h:e,s:t,v:n,a:i})};function Pi(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&aE.test(e)){const{groups:t}=e.match(aE),{fn:n,values:i}=t,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return N9[n](...r)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),X1(t)}else if(typeof e=="object"){if(ha(e,["r","g","b"]))return e;if(ha(e,["h","s","l"]))return Qr($_(e));if(ha(e,["h","s","v"]))return Qr(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Qr(e){const{h:t,s:n,v:i,a:r}=e,s=o=>{const l=(o+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},a=[s(5),s(3),s(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:r}}function oE(e){return Qr($_(e))}function Yh(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,r=Math.max(t,n,i),s=Math.min(t,n,i);let a=0;r!==s&&(r===t?a=60*(0+(n-i)/(r-s)):r===n?a=60*(2+(i-t)/(r-s)):r===i&&(a=60*(4+(t-n)/(r-s)))),a<0&&(a=a+360);const o=r===0?0:(r-s)/r,l=[a,o,r];return{h:l[0],s:l[1],v:l[2],a:e.a}}function G1(e){const{h:t,s:n,v:i,a:r}=e,s=i-i*n/2,a=s===1||s===0?0:(i-s)/Math.min(s,1-s);return{h:t,s:a,l:s,a:r}}function $_(e){const{h:t,s:n,l:i,a:r}=e,s=i+n*Math.min(i,1-i),a=s===0?0:2-2*i/s;return{h:t,s:a,v:s,a:r}}function K1(e){let{r:t,g:n,b:i,a:r}=e;return r===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${r})`}function Y1(e){return K1(Qr(e))}function Pd(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function Q1(e){let{r:t,g:n,b:i,a:r}=e;return`#${[Pd(t),Pd(n),Pd(i),r!==void 0?Pd(Math.round(r*255)):""].join("")}`}function X1(e){e=O9(e);let[t,n,i,r]=c9(e,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:t,g:n,b:i,a:r}}function J1(e){const t=X1(e);return Yh(t)}function Z1(e){return Q1(Qr(e))}function O9(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=zI(zI(e,6),8,"F")),e}function M9(e,t){const n=W1(B_(e));return n[0]=n[0]+t*10,q1(z1(n))}function L9(e,t){const n=W1(B_(e));return n[0]=n[0]-t*10,q1(z1(n))}function qg(e){const t=Pi(e);return B_(t)[1]}function F9(e,t){const n=qg(e),i=qg(t),r=Math.max(n,i),s=Math.min(n,i);return(r+.05)/(s+.05)}function eR(e){const t=Math.abs(sE(Pi(0),Pi(e)));return Math.abs(sE(Pi(16777215),Pi(e)))>Math.min(t,50)?"#fff":"#000"}function F(e,t){return n=>Object.keys(e).reduce((i,r)=>{const a=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?i[r]={...a,default:n[r]}:i[r]=a,t&&!i[r].source&&(i[r].source=t),i},{})}const Ie=F({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Wt(e,t){const n=Ua();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function wr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Wt(e).type;return ya((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let tR=0,Yd=new WeakMap;function gn(){const e=Wt("getUid");if(Yd.has(e))return Yd.get(e);{const t=tR++;return Yd.set(e,t),t}}gn.reset=()=>{tR=0,Yd=new WeakMap};function B9(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Wt("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const sl=Symbol.for("vuetify:defaults");function $9(e){return ee(e)}function U_(){const e=$e(sl);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Vt(e,t){const n=U_(),i=ee(e),r=S(()=>{if(it(t==null?void 0:t.disabled))return n.value;const a=it(t==null?void 0:t.scoped),o=it(t==null?void 0:t.reset),l=it(t==null?void 0:t.root);if(i.value==null&&!(a||o||l))return n.value;let u=Hn(i.value,{prev:n.value});if(a)return u;if(o||l){const c=Number(o||1/0);for(let d=0;d<=c&&!(!u||!("prev"in u));d++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=Hn(Hn(u,{prev:u}),u[l])),u}return u.prev?Hn(u.prev,u):u});return vt(sl,r),r}function U9(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[ya(t)])<"u"}function H9(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:U_();const i=Wt("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const r=S(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),s=new Proxy(e,{get(l,u){var d,h,v,g,p,y,I;const c=Reflect.get(l,u);return u==="class"||u==="style"?[(d=r.value)==null?void 0:d[u],c].filter(E=>E!=null):typeof u=="string"&&!U9(i.vnode,u)?((h=r.value)==null?void 0:h[u])!==void 0?(v=r.value)==null?void 0:v[u]:((p=(g=n.value)==null?void 0:g.global)==null?void 0:p[u])!==void 0?(I=(y=n.value)==null?void 0:y.global)==null?void 0:I[u]:c:c}}),a=he();Ct(()=>{if(r.value){const l=Object.entries(r.value).filter(u=>{let[c]=u;return c.startsWith(c[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=B9(sl,i);vt(sl,S(()=>a.value?Hn((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:o}}function wi(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=F(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(i){return O_(i,t)},e.props._as=String,e.setup=function(i,r){const s=U_();if(!s.value)return e._setup(i,r);const{props:a,provideSubDefaults:o}=H9(i,i._as??e.name,s),l=e._setup(a,r);return o(),l}}return e}function Q(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?wi:Hs)(t)}function j9(e,t){return t.props=e,t}function Sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Q()({name:n??gr(ai(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...Ie()},setup(i,r){let{slots:s}=r;return()=>{var a;return Jn(i.tag,{class:[e,i.class],style:i.style},(a=s.default)==null?void 0:a.call(s))}}})}function nR(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Xu="cubic-bezier(0.4, 0, 0.2, 1)",W9="cubic-bezier(0.0, 0, 0.2, 1)",z9="cubic-bezier(0.4, 0, 1, 1)";function lE(e,t,n){return Object.keys(e).filter(i=>Gh(i)&&i.endsWith(t)).reduce((i,r)=>(i[r.slice(0,-t.length)]=s=>e[r](s,n(s)),i),{})}function H_(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?q9(e):j_(e))return e;e=e.parentElement}return document.scrollingElement}function Ju(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(j_(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function j_(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function q9(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function G9(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function te(e){const t=Wt("useRender");t.render=e}function Ae(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const s=Wt("useProxiedModel"),a=ee(e[t]!==void 0?e[t]:n),o=ya(t),u=S(o!==t?()=>{var d,h,v,g;return e[t],!!(((d=s.vnode.props)!=null&&d.hasOwnProperty(t)||(h=s.vnode.props)!=null&&h.hasOwnProperty(o))&&((v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${t}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var d,h;return e[t],!!((d=s.vnode.props)!=null&&d.hasOwnProperty(t)&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${t}`)))});ei(()=>!u.value,()=>{ve(()=>e[t],d=>{a.value=d})});const c=S({get(){const d=e[t];return i(u.value?d:a.value)},set(d){const h=r(d),v=xe(u.value?e[t]:a.value);v===h||i(v)===d||(a.value=h,s==null||s.emit(`update:${t}`,h))}});return Object.defineProperty(c,"externalValue",{get:()=>u.value?e[t]:a.value}),c}const iR={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},uE="$vuetify.",cE=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),rR=(e,t,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];if(!i.startsWith(uE))return cE(i,s);const o=i.replace(uE,""),l=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let c=Na(l,o,null);return c||(`${i}${e.value}`,c=Na(u,o,null)),c||(c=i),typeof c!="string"&&(c=i),cE(c,s)};function sR(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function Iv(e,t,n){const i=Ae(e,t,e[t]??n.value);return i.value=e[t]??n.value,ve(n,r=>{e[t]==null&&(i.value=n.value)}),i}function aR(e){return t=>{const n=Iv(t,"locale",e.current),i=Iv(t,"fallback",e.fallback),r=Iv(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:rR(n,i,r),n:sR(n,i),provide:aR({current:n,fallback:i,messages:r})}}}function K9(e){const t=he((e==null?void 0:e.locale)??"en"),n=he((e==null?void 0:e.fallback)??"en"),i=ee({en:iR,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:rR(t,n,i),n:sR(t,n),provide:aR({current:t,fallback:n,messages:i})}}const al=Symbol.for("vuetify:locale");function Y9(e){return e.name!=null}function Q9(e){const t=e!=null&&e.adapter&&Y9(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:K9(e),n=Z9(t,e);return{...t,...n}}function St(){const e=$e(al);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function X9(e){const t=$e(al);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=eW(n,t.rtl,e),r={...n,...i};return vt(al,r),r}function J9(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Z9(e,t){const n=ee((t==null?void 0:t.rtl)??J9()),i=S(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:S(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function eW(e,t,n){const i=S(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:S(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function sn(){const e=$e(al);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const Qh={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function tW(e,t,n){const i=[];let r=[];const s=oR(e),a=lR(e),o=n??Qh[t.slice(-2).toUpperCase()]??0,l=(s.getDay()-o+7)%7,u=(a.getDay()-o+7)%7;for(let c=0;c<l;c++){const d=new Date(s);d.setDate(d.getDate()-(l-c)),r.push(d)}for(let c=1;c<=a.getDate();c++){const d=new Date(e.getFullYear(),e.getMonth(),c);r.push(d),r.length===7&&(i.push(r),r=[])}for(let c=1;c<7-u;c++){const d=new Date(a);d.setDate(d.getDate()+c),r.push(d)}return r.length>0&&i.push(r),i}function nW(e,t,n){const i=n??Qh[t.slice(-2).toUpperCase()]??0,r=new Date(e);for(;r.getDay()!==i;)r.setDate(r.getDate()-1);return r}function iW(e,t){const n=new Date(e),i=((Qh[t.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function oR(e){return new Date(e.getFullYear(),e.getMonth(),1)}function lR(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function rW(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const sW=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function uR(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(sW.test(e))return rW(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const dE=new Date(2e3,0,2);function aW(e,t){const n=t??Qh[e.slice(-2).toUpperCase()]??0;return gi(7).map(i=>{const r=new Date(dE);return r.setDate(dE.getDate()+n+i),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(r)})}function oW(e,t,n,i){const r=uR(e)??new Date,s=i==null?void 0:i[t];if(typeof s=="function")return s(r,t,n);let a={};switch(t){case"fullDate":a={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":a={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const o=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${o} ${l}`;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":a={month:"short",day:"numeric"};break;case"year":a={year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"weekday":a={weekday:"long"};break;case"weekdayShort":a={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":a={hour:"numeric",hour12:!0};break;case"hours24h":a={hour:"numeric",hour12:!1};break;case"minutes":a={minute:"numeric"};break;case"seconds":a={second:"numeric"};break;case"fullTime":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":a={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:a=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(r)}function lW(e,t){const n=e.toJsDate(t),i=n.getFullYear(),r=qI(String(n.getMonth()+1),2,"0"),s=qI(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function uW(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function cW(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function dW(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function fW(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function hW(e,t){const n=new Date(e);return n.setDate(n.getDate()+t*7),n}function mW(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function vW(e){return e.getFullYear()}function gW(e){return e.getMonth()}function pW(e){return e.getDate()}function yW(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function _W(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function bW(e){return e.getHours()}function wW(e){return e.getMinutes()}function SW(e){return new Date(e.getFullYear(),0,1)}function IW(e){return new Date(e.getFullYear(),11,31)}function EW(e,t){return jf(e,t[0])&&kW(e,t[1])}function CW(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function jf(e,t){return e.getTime()>t.getTime()}function TW(e,t){return jf(Gg(e),Gg(t))}function kW(e,t){return e.getTime()<t.getTime()}function fE(e,t){return e.getTime()===t.getTime()}function AW(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function PW(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function RW(e,t){return e.getFullYear()===t.getFullYear()}function xW(e,t,n){const i=new Date(e),r=new Date(t);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function VW(e,t){const n=new Date(e);return n.setHours(t),n}function DW(e,t){const n=new Date(e);return n.setMinutes(t),n}function NW(e,t){const n=new Date(e);return n.setMonth(t),n}function OW(e,t){const n=new Date(e);return n.setDate(t),n}function MW(e,t){const n=new Date(e);return n.setFullYear(t),n}function Gg(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function LW(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class FW{constructor(t){this.locale=t.locale,this.formats=t.formats}date(t){return uR(t)}toJsDate(t){return t}toISO(t){return lW(this,t)}parseISO(t){return uW(t)}addMinutes(t,n){return cW(t,n)}addHours(t,n){return dW(t,n)}addDays(t,n){return fW(t,n)}addWeeks(t,n){return hW(t,n)}addMonths(t,n){return mW(t,n)}getWeekArray(t,n){return tW(t,this.locale,n?Number(n):void 0)}startOfWeek(t,n){return nW(t,this.locale,n?Number(n):void 0)}endOfWeek(t){return iW(t,this.locale)}startOfMonth(t){return oR(t)}endOfMonth(t){return lR(t)}format(t,n){return oW(t,n,this.locale,this.formats)}isEqual(t,n){return fE(t,n)}isValid(t){return CW(t)}isWithinRange(t,n){return EW(t,n)}isAfter(t,n){return jf(t,n)}isAfterDay(t,n){return TW(t,n)}isBefore(t,n){return!jf(t,n)&&!fE(t,n)}isSameDay(t,n){return AW(t,n)}isSameMonth(t,n){return PW(t,n)}isSameYear(t,n){return RW(t,n)}setMinutes(t,n){return DW(t,n)}setHours(t,n){return VW(t,n)}setMonth(t,n){return NW(t,n)}setDate(t,n){return OW(t,n)}setYear(t,n){return MW(t,n)}getDiff(t,n,i){return xW(t,n,i)}getWeekdays(t){return aW(this.locale,t?Number(t):void 0)}getYear(t){return vW(t)}getMonth(t){return gW(t)}getDate(t){return pW(t)}getNextMonth(t){return yW(t)}getPreviousMonth(t){return _W(t)}getHours(t){return bW(t)}getMinutes(t){return wW(t)}startOfDay(t){return Gg(t)}endOfDay(t){return LW(t)}startOfYear(t){return SW(t)}endOfYear(t){return IW(t)}}const cR=Symbol.for("vuetify:date-options"),hE=Symbol.for("vuetify:date-adapter");function BW(e,t){const n=Hn({adapter:FW,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:dR(n,t)}}function dR(e,t){const n=Ut(typeof e.adapter=="function"?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return ve(t.current,i=>{n.locale=e.locale[i]??i??n.locale}),n}function Ir(){const e=$e(cR);if(!e)throw new Error("[Vuetify] Could not find injected date options");const t=St();return dR(e,t)}function $W(e,t){const n=e.toJsDate(t);let i=n.getFullYear(),r=new Date(i,0,1);if(n<r)i=i-1,r=new Date(i,0,1);else{const o=new Date(i+1,0,1);n>=o&&(i=i+1,r=o)}const s=Math.abs(n.getTime()-r.getTime()),a=Math.ceil(s/(1e3*60*60*24));return Math.floor(a/7)+1}const Xh=["sm","md","lg","xl","xxl"],Kg=Symbol.for("vuetify:display"),mE={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},UW=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mE;return Hn(mE,e)};function vE(e){return lt&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function gE(e){return lt&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function pE(e){const t=lt&&!e?window.navigator.userAgent:"ssr";function n(g){return!!t.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),a=n(/electron/i),o=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),c=n(/opera/i),d=n(/win/i),h=n(/mac/i),v=n(/linux/i);return{android:i,ios:r,cordova:s,electron:a,chrome:o,edge:l,firefox:u,opera:c,win:d,mac:h,linux:v,touch:i9,ssr:t==="ssr"}}function HW(e,t){const{thresholds:n,mobileBreakpoint:i}=UW(e),r=he(gE(t)),s=he(pE(t)),a=Ut({}),o=he(vE(t));function l(){r.value=gE(),o.value=vE()}function u(){l(),s.value=pE()}return Ct(()=>{const c=o.value<n.sm,d=o.value<n.md&&!c,h=o.value<n.lg&&!(d||c),v=o.value<n.xl&&!(h||d||c),g=o.value<n.xxl&&!(v||h||d||c),p=o.value>=n.xxl,y=c?"xs":d?"sm":h?"md":v?"lg":g?"xl":"xxl",I=typeof i=="number"?i:n[i],E=o.value<I;a.xs=c,a.sm=d,a.md=h,a.lg=v,a.xl=g,a.xxl=p,a.smAndUp=!c,a.mdAndUp=!(c||d),a.lgAndUp=!(c||d||h),a.xlAndUp=!(c||d||h||v),a.smAndDown=!(h||v||g||p),a.mdAndDown=!(v||g||p),a.lgAndDown=!(g||p),a.xlAndDown=!p,a.name=y,a.height=r.value,a.width=o.value,a.mobile=E,a.mobileBreakpoint=i,a.platform=s.value,a.thresholds=n}),lt&&window.addEventListener("resize",l,{passive:!0}),{...Us(a),update:u,ssr:!!t}}const Ga=F({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function Si(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wr();const n=$e(Kg);if(!n)throw new Error("Could not find Vuetify display injection");const i=S(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),r=S(()=>t?{[`${t}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const fR=Symbol.for("vuetify:goto");function hR(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function jW(e){return W_(e)??(document.scrollingElement||document.body)}function W_(e){return typeof e=="string"?document.querySelector(e):N_(e)}function Ev(e,t,n){if(typeof e=="number")return t&&n?-e:e;let i=W_(e),r=0;for(;i;)r+=t?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function WW(e,t){return{rtl:t.isRtl,options:Hn(hR(),e)}}async function yE(e,t,n,i){const r=n?"scrollLeft":"scrollTop",s=Hn((i==null?void 0:i.options)??hR(),t),a=i==null?void 0:i.rtl.value,o=(typeof e=="number"?e:W_(e))??0,l=s.container==="parent"&&o instanceof HTMLElement?o.parentElement:jW(s.container),u=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!u)throw new TypeError(`Easing function "${s.easing}" not found.`);let c;if(typeof o=="number")c=Ev(o,n,a);else if(c=Ev(o,n,a)-Ev(l,n,a),s.layout){const g=window.getComputedStyle(o).getPropertyValue("--v-layout-top");g&&(c-=parseInt(g,10))}c+=s.offset,c=qW(l,c,!!a,!!n);const d=l[r]??0;if(c===d)return Promise.resolve(c);const h=performance.now();return new Promise(v=>requestAnimationFrame(function g(p){const I=(p-h)/s.duration,E=Math.floor(d+(c-d)*u(Ft(I,0,1)));if(l[r]=E,I>=1&&Math.abs(E-l[r])<10)return v(c);if(I>2)return v(l[r]);requestAnimationFrame(g)}))}function zW(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=$e(fR),{isRtl:n}=sn();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const i={...t,rtl:S(()=>t.rtl.value||n.value)};async function r(s,a){return yE(s,Hn(e,a),!1,i)}return r.horizontal=async(s,a)=>yE(s,Hn(e,a),!0,i),r}function qW(e,t,n,i){const{scrollWidth:r,scrollHeight:s}=e,[a,o]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let l,u;return i?n?(l=-(r-a),u=0):(l=0,u=r-a):(l=0,u=s+-o),Math.max(Math.min(t,u),l)}const GW={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},KW={component:e=>Jn(q_,{...e,class:"mdi"})},Le=[String,Function,Object,Array],Yg=Symbol.for("vuetify:icons"),Jh=F({icon:{type:Le},tag:{type:String,required:!0}},"icon"),Qg=Q()({name:"VComponentIcon",props:Jh(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return m(e.tag,null,{default:()=>{var r;return[e.icon?m(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),z_=wi({name:"VSvgIcon",inheritAttrs:!1,props:Jh(),setup(e,t){let{attrs:n}=t;return()=>m(e.tag,K(n,{style:null}),{default:()=>[m("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?m("path",{d:i[0],"fill-opacity":i[1]},null):m("path",{d:i},null)):m("path",{d:e.icon},null)])]})}}),YW=wi({name:"VLigatureIcon",props:Jh(),setup(e){return()=>m(e.tag,null,{default:()=>[e.icon]})}}),q_=wi({name:"VClassIcon",props:Jh(),setup(e){return()=>m(e.tag,{class:e.icon},null)}});function QW(){return{svg:{component:z_},class:{component:q_}}}function XW(e){const t=QW(),n=(e==null?void 0:e.defaultSet)??"mdi";return n==="mdi"&&!t.mdi&&(t.mdi=KW),Hn({defaultSet:n,sets:t,aliases:{...GW,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const JW=e=>{const t=$e(Yg);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:S(()=>{var l;const i=it(e);if(!i)return{component:Qg};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=t.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:z_,icon:r};if(typeof r!="string")return{component:Qg,icon:r};const s=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),a=s?r.slice(s.length+1):r;return{component:t.sets[s??t.defaultSet].component,icon:a}})}},Zu=Symbol.for("vuetify:theme"),Xe=F({theme:String},"theme");function _E(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function ZW(){var i,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_E();const t=_E();if(!e)return{...t,isDisabled:!0};const n={};for(const[s,a]of Object.entries(e.themes??{})){const o=a.dark||s==="dark"?(i=t.themes)==null?void 0:i.dark:(r=t.themes)==null?void 0:r.light;n[s]=Hn(o,a)}return Hn(t,{...e,themes:n})}function ez(e){const t=ZW(e),n=ee(t.defaultTheme),i=ee(t.themes),r=S(()=>{const c={};for(const[d,h]of Object.entries(i.value)){const v=c[d]={...h,colors:{...h.colors}};if(t.variations)for(const g of t.variations.colors){const p=v.colors[g];if(p)for(const y of["lighten","darken"]){const I=y==="lighten"?M9:L9;for(const E of gi(t.variations[y],1))v.colors[`${g}-${y}-${E}`]=Q1(I(Pi(p),E))}}for(const g of Object.keys(v.colors)){if(/^on-[a-z]/.test(g)||v.colors[`on-${g}`])continue;const p=`on-${g}`,y=Pi(v.colors[g]);v.colors[p]=eR(y)}}return c}),s=S(()=>r.value[n.value]),a=S(()=>{var g;const c=[];(g=s.value)!=null&&g.dark&&ra(c,":root",["color-scheme: dark"]),ra(c,":root",bE(s.value));for(const[p,y]of Object.entries(r.value))ra(c,`.v-theme--${p}`,[`color-scheme: ${y.dark?"dark":"normal"}`,...bE(y)]);const d=[],h=[],v=new Set(Object.values(r.value).flatMap(p=>Object.keys(p.colors)));for(const p of v)/^on-[a-z]/.test(p)?ra(h,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(ra(d,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),ra(h,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),ra(h,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return c.push(...d,...h),c.map((p,y)=>y===0?p:`    ${p}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(c){if(t.isDisabled)return;const d=c._context.provides.usehead;if(d)if(d.push){const h=d.push(o);lt&&ve(a,()=>{h.patch(o)})}else lt?(d.addHeadObjs(S(o)),Ct(()=>d.updateDOM())):d.addHeadObjs(o());else{let v=function(){if(typeof document<"u"&&!h){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),h=g,document.head.appendChild(h)}h&&(h.innerHTML=a.value)},h=lt?document.getElementById("vuetify-theme-stylesheet"):null;lt?ve(a,v,{immediate:!0}):v()}}const u=S(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:u,styles:a,global:{name:n,current:s}}}function at(e){Wt("provideTheme");const t=$e(Zu,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=S(()=>e.theme??t.name.value),i=S(()=>t.themes.value[n.value]),r=S(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,current:i,themeClasses:r};return vt(Zu,s),s}function G_(){Wt("useTheme");const e=$e(Zu,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function ra(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}