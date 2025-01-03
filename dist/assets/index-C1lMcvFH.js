var o3=Object.defineProperty;var a3=(e,t,n)=>t in e?o3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var In=(e,t,n)=>a3(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function dS(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Wt={},Uu=[],Cs=()=>{},l3=()=>!1,Zg=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fS=e=>e.startsWith("onUpdate:"),zn=Object.assign,hS=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},u3=Object.prototype.hasOwnProperty,qt=(e,t)=>u3.call(e,t),rt=Array.isArray,ju=e=>ep(e)==="[object Map]",OR=e=>ep(e)==="[object Set]",ht=e=>typeof e=="function",Dn=e=>typeof e=="string",Ta=e=>typeof e=="symbol",gn=e=>e!==null&&typeof e=="object",VR=e=>(gn(e)||ht(e))&&ht(e.then)&&ht(e.catch),NR=Object.prototype.toString,ep=e=>NR.call(e),c3=e=>ep(e).slice(8,-1),MR=e=>ep(e)==="[object Object]",vS=e=>Dn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bd=dS(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tp=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},d3=/-(\w)/g,lr=tp(e=>e.replace(d3,(t,n)=>n?n.toUpperCase():"")),f3=/\B([A-Z])/g,Ia=tp(e=>e.replace(f3,"-$1").toLowerCase()),Fs=tp(e=>e.charAt(0).toUpperCase()+e.slice(1)),sy=tp(e=>e?`on${Fs(e)}`:""),nr=(e,t)=>!Object.is(e,t),Xv=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},LR=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},yb=e=>{const t=parseFloat(e);return isNaN(t)?e:t},h3=e=>{const t=Dn(e)?Number(e):NaN;return isNaN(t)?e:t};let Mk;const FR=()=>Mk||(Mk=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function np(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Dn(i)?p3(i):np(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Dn(e)||gn(e))return e}const v3=/;(?![^(]*\))/g,m3=/:([^]+)/,g3=/\/\*[^]*?\*\//g;function p3(e){const t={};return e.replace(g3,"").split(v3).forEach(n=>{if(n){const i=n.split(m3);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ip(e){let t="";if(Dn(e))t=e;else if(rt(e))for(let n=0;n<e.length;n++){const i=ip(e[n]);i&&(t+=i+" ")}else if(gn(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function $R(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Dn(t)&&(e.class=ip(t)),n&&(e.style=np(n)),e}const _3="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",y3=dS(_3);function BR(e){return!!e||e===""}const UR=e=>!!(e&&e.__v_isRef===!0),lt=e=>Dn(e)?e:e==null?"":rt(e)||gn(e)&&(e.toString===NR||!ht(e.toString))?UR(e)?lt(e.value):JSON.stringify(e,jR,2):String(e),jR=(e,t)=>UR(t)?jR(e,t.value):ju(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[oy(i,s)+" =>"]=r,n),{})}:OR(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>oy(n))}:Ta(t)?oy(t):gn(t)&&!rt(t)&&!MR(t)?String(t):t,oy=(e,t="")=>{var n;return Ta(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gi;class HR{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gi,!t&&Gi&&(this.index=(Gi.scopes||(Gi.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Gi;try{return Gi=this,t()}finally{Gi=n}}}on(){Gi=this}off(){Gi=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function uh(e){return new HR(e)}function WR(){return Gi}function Ci(e,t=!1){Gi&&Gi.cleanups.push(e)}let ln;const ay=new WeakSet;class zR{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gi&&Gi.active&&Gi.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ay.has(this)&&(ay.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qR(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lk(this),YR(this);const t=ln,n=es;ln=this,es=!0;try{return this.fn()}finally{KR(this),ln=t,es=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)pS(t);this.deps=this.depsTail=void 0,Lk(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ay.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bb(this)&&this.run()}get dirty(){return bb(this)}}let GR=0,Ud;function qR(e){e.flags|=8,e.next=Ud,Ud=e}function mS(){GR++}function gS(){if(--GR>0)return;let e;for(;Ud;){let t=Ud;for(Ud=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function YR(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function KR(e){let t,n=e.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),pS(i),b3(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=n}function bb(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(XR(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function XR(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===cf))return;e.globalVersion=cf;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!bb(e)){e.flags&=-3;return}const n=ln,i=es;ln=e,es=!0;try{YR(e);const r=e.fn(e._value);(t.version===0||nr(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ln=n,es=i,KR(e),e.flags&=-3}}function pS(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i),!n.subs)if(n.computed){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)pS(s,!0)}else n.map&&!t&&(n.map.delete(n.key),n.map.size||df.delete(n.target))}function b3(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let es=!0;const QR=[];function Aa(){QR.push(es),es=!1}function Pa(){const e=QR.pop();es=e===void 0?!0:e}function Lk(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ln;ln=void 0;try{t()}finally{ln=n}}}let cf=0;class w3{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rp{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(t){if(!ln||!es||ln===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ln)n=this.activeLink=new w3(ln,this),ln.deps?(n.prevDep=ln.depsTail,ln.depsTail.nextDep=n,ln.depsTail=n):ln.deps=ln.depsTail=n,ln.flags&4&&JR(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ln.depsTail,n.nextDep=void 0,ln.depsTail.nextDep=n,ln.depsTail=n,ln.deps===n&&(ln.deps=i)}return n}trigger(t){this.version++,cf++,this.notify(t)}notify(t){mS();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gS()}}}function JR(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)JR(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const df=new WeakMap,vl=Symbol(""),wb=Symbol(""),ff=Symbol("");function Bi(e,t,n){if(es&&ln){let i=df.get(e);i||df.set(e,i=new Map);let r=i.get(n);r||(i.set(n,r=new rp),r.target=e,r.map=i,r.key=n),r.track()}}function ho(e,t,n,i,r,s){const o=df.get(e);if(!o){cf++;return}const a=l=>{l&&l.trigger()};if(mS(),t==="clear")o.forEach(a);else{const l=rt(e),u=l&&vS(n);if(l&&n==="length"){const d=Number(i);o.forEach((c,f)=>{(f==="length"||f===ff||!Ta(f)&&f>=d)&&a(c)})}else switch(n!==void 0&&a(o.get(n)),u&&a(o.get(ff)),t){case"add":l?u&&a(o.get("length")):(a(o.get(vl)),ju(e)&&a(o.get(wb)));break;case"delete":l||(a(o.get(vl)),ju(e)&&a(o.get(wb)));break;case"set":ju(e)&&a(o.get(vl));break}}gS()}function S3(e,t){var n;return(n=df.get(e))==null?void 0:n.get(t)}function pu(e){const t=Ge(e);return t===e?t:(Bi(t,"iterate",ff),$r(e)?t:t.map(Ri))}function sp(e){return Bi(e=Ge(e),"iterate",ff),e}const E3={__proto__:null,[Symbol.iterator](){return ly(this,Symbol.iterator,Ri)},concat(...e){return pu(this).concat(...e.map(t=>rt(t)?pu(t):t))},entries(){return ly(this,"entries",e=>(e[1]=Ri(e[1]),e))},every(e,t){return Xs(this,"every",e,t,void 0,arguments)},filter(e,t){return Xs(this,"filter",e,t,n=>n.map(Ri),arguments)},find(e,t){return Xs(this,"find",e,t,Ri,arguments)},findIndex(e,t){return Xs(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xs(this,"findLast",e,t,Ri,arguments)},findLastIndex(e,t){return Xs(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xs(this,"forEach",e,t,void 0,arguments)},includes(...e){return uy(this,"includes",e)},indexOf(...e){return uy(this,"indexOf",e)},join(e){return pu(this).join(e)},lastIndexOf(...e){return uy(this,"lastIndexOf",e)},map(e,t){return Xs(this,"map",e,t,void 0,arguments)},pop(){return md(this,"pop")},push(...e){return md(this,"push",e)},reduce(e,...t){return Fk(this,"reduce",e,t)},reduceRight(e,...t){return Fk(this,"reduceRight",e,t)},shift(){return md(this,"shift")},some(e,t){return Xs(this,"some",e,t,void 0,arguments)},splice(...e){return md(this,"splice",e)},toReversed(){return pu(this).toReversed()},toSorted(e){return pu(this).toSorted(e)},toSpliced(...e){return pu(this).toSpliced(...e)},unshift(...e){return md(this,"unshift",e)},values(){return ly(this,"values",Ri)}};function ly(e,t,n){const i=sp(e),r=i[t]();return i!==e&&!$r(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const C3=Array.prototype;function Xs(e,t,n,i,r,s){const o=sp(e),a=o!==e&&!$r(e),l=o[t];if(l!==C3[t]){const c=l.apply(e,s);return a?Ri(c):c}let u=n;o!==e&&(a?u=function(c,f){return n.call(this,Ri(c),f,e)}:n.length>2&&(u=function(c,f){return n.call(this,c,f,e)}));const d=l.call(o,u,i);return a&&r?r(d):d}function Fk(e,t,n,i){const r=sp(e);let s=n;return r!==e&&($r(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Ri(a),l,e)}),r[t](s,...i)}function uy(e,t,n){const i=Ge(e);Bi(i,"iterate",ff);const r=i[t](...n);return(r===-1||r===!1)&&wS(n[0])?(n[0]=Ge(n[0]),i[t](...n)):r}function md(e,t,n=[]){Aa(),mS();const i=Ge(e)[t].apply(e,n);return gS(),Pa(),i}const k3=dS("__proto__,__v_isRef,__isVue"),ZR=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ta));function T3(e){Ta(e)||(e=String(e));const t=Ge(this);return Bi(t,"has",e),t.hasOwnProperty(e)}class eO{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?$3:rO:s?iO:nO).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=rt(t);if(!r){let l;if(o&&(l=E3[n]))return l;if(n==="hasOwnProperty")return T3}const a=Reflect.get(t,n,Qe(t)?t:i);return(Ta(n)?ZR.has(n):k3(n))||(r||Bi(t,"get",n),s)?a:Qe(a)?o&&vS(n)?a:a.value:gn(a)?r?xc(a):cn(a):a}}class tO extends eO{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=Cl(s);if(!$r(i)&&!Cl(i)&&(s=Ge(s),i=Ge(i)),!rt(t)&&Qe(s)&&!Qe(i))return l?!1:(s.value=i,!0)}const o=rt(t)&&vS(n)?Number(n)<t.length:qt(t,n),a=Reflect.set(t,n,i,Qe(t)?t:r);return t===Ge(r)&&(o?nr(i,s)&&ho(t,"set",n,i):ho(t,"add",n,i)),a}deleteProperty(t,n){const i=qt(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&ho(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Ta(n)||!ZR.has(n))&&Bi(t,"has",n),i}ownKeys(t){return Bi(t,"iterate",rt(t)?"length":vl),Reflect.ownKeys(t)}}class I3 extends eO{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const A3=new tO,P3=new I3,x3=new tO(!0);const _S=e=>e,op=e=>Reflect.getPrototypeOf(e);function cv(e,t,n=!1,i=!1){e=e.__v_raw;const r=Ge(e),s=Ge(t);n||(nr(t,s)&&Bi(r,"get",t),Bi(r,"get",s));const{has:o}=op(r),a=i?_S:n?ES:Ri;if(o.call(r,t))return a(e.get(t));if(o.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function dv(e,t=!1){const n=this.__v_raw,i=Ge(n),r=Ge(e);return t||(nr(e,r)&&Bi(i,"has",e),Bi(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function fv(e,t=!1){return e=e.__v_raw,!t&&Bi(Ge(e),"iterate",vl),Reflect.get(e,"size",e)}function $k(e,t=!1){!t&&!$r(e)&&!Cl(e)&&(e=Ge(e));const n=Ge(this);return op(n).has.call(n,e)||(n.add(e),ho(n,"add",e,e)),this}function Bk(e,t,n=!1){!n&&!$r(t)&&!Cl(t)&&(t=Ge(t));const i=Ge(this),{has:r,get:s}=op(i);let o=r.call(i,e);o||(e=Ge(e),o=r.call(i,e));const a=s.call(i,e);return i.set(e,t),o?nr(t,a)&&ho(i,"set",e,t):ho(i,"add",e,t),this}function Uk(e){const t=Ge(this),{has:n,get:i}=op(t);let r=n.call(t,e);r||(e=Ge(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&ho(t,"delete",e,void 0),s}function jk(){const e=Ge(this),t=e.size!==0,n=e.clear();return t&&ho(e,"clear",void 0,void 0),n}function hv(e,t){return function(i,r){const s=this,o=s.__v_raw,a=Ge(o),l=t?_S:e?ES:Ri;return!e&&Bi(a,"iterate",vl),o.forEach((u,d)=>i.call(r,l(u),l(d),s))}}function vv(e,t,n){return function(...i){const r=this.__v_raw,s=Ge(r),o=ju(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...i),d=n?_S:t?ES:Ri;return!t&&Bi(s,"iterate",l?wb:vl),{next(){const{value:c,done:f}=u.next();return f?{value:c,done:f}:{value:a?[d(c[0]),d(c[1])]:d(c),done:f}},[Symbol.iterator](){return this}}}}function Uo(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function D3(){const e={get(s){return cv(this,s)},get size(){return fv(this)},has:dv,add:$k,set:Bk,delete:Uk,clear:jk,forEach:hv(!1,!1)},t={get(s){return cv(this,s,!1,!0)},get size(){return fv(this)},has:dv,add(s){return $k.call(this,s,!0)},set(s,o){return Bk.call(this,s,o,!0)},delete:Uk,clear:jk,forEach:hv(!1,!0)},n={get(s){return cv(this,s,!0)},get size(){return fv(this,!0)},has(s){return dv.call(this,s,!0)},add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear"),forEach:hv(!0,!1)},i={get(s){return cv(this,s,!0,!0)},get size(){return fv(this,!0)},has(s){return dv.call(this,s,!0)},add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear"),forEach:hv(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=vv(s,!1,!1),n[s]=vv(s,!0,!1),t[s]=vv(s,!1,!0),i[s]=vv(s,!0,!0)}),[e,n,t,i]}const[R3,O3,V3,N3]=D3();function yS(e,t){const n=t?e?N3:V3:e?O3:R3;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(qt(n,r)&&r in i?n:i,r,s)}const M3={get:yS(!1,!1)},L3={get:yS(!1,!0)},F3={get:yS(!0,!1)};const nO=new WeakMap,iO=new WeakMap,rO=new WeakMap,$3=new WeakMap;function B3(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U3(e){return e.__v_skip||!Object.isExtensible(e)?0:B3(c3(e))}function cn(e){return Cl(e)?e:bS(e,!1,A3,M3,nO)}function sO(e){return bS(e,!1,x3,L3,iO)}function xc(e){return bS(e,!0,P3,F3,rO)}function bS(e,t,n,i,r){if(!gn(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=U3(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function ml(e){return Cl(e)?ml(e.__v_raw):!!(e&&e.__v_isReactive)}function Cl(e){return!!(e&&e.__v_isReadonly)}function $r(e){return!!(e&&e.__v_isShallow)}function wS(e){return e?!!e.__v_raw:!1}function Ge(e){const t=e&&e.__v_raw;return t?Ge(t):e}function SS(e){return!qt(e,"__v_skip")&&Object.isExtensible(e)&&LR(e,"__v_skip",!0),e}const Ri=e=>gn(e)?cn(e):e,ES=e=>gn(e)?xc(e):e;function Qe(e){return e?e.__v_isRef===!0:!1}function z(e){return oO(e,!1)}function Te(e){return oO(e,!0)}function oO(e,t){return Qe(e)?e:new j3(e,t)}class j3{constructor(t,n){this.dep=new rp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ge(t),this._value=n?t:Ri(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||$r(t)||Cl(t);t=i?t:Ge(t),nr(t,n)&&(this._rawValue=t,this._value=i?t:Ri(t),this.dep.trigger())}}function se(e){return Qe(e)?e.value:e}function fn(e){return ht(e)?e():se(e)}const H3={get:(e,t,n)=>t==="__v_raw"?e:se(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Qe(r)&&!Qe(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function aO(e){return ml(e)?e:new Proxy(e,H3)}class W3{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new rp,{get:i,set:r}=t(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function z3(e){return new W3(e)}function xa(e){const t=rt(e)?new Array(e.length):{};for(const n in e)t[n]=lO(e,n);return t}class G3{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return S3(Ge(this._object),this._key)}}class q3{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ue(e,t,n){return Qe(e)?e:ht(e)?new q3(e):gn(e)&&arguments.length>1?lO(e,t,n):z(e)}function lO(e,t,n){const i=e[t];return Qe(i)?i:new G3(e,t,n)}class Y3{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cf-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ln!==this)return qR(this),!0}get value(){const t=this.dep.track();return XR(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function K3(e,t,n=!1){let i,r;return ht(e)?i=e:(i=e.get,r=e.set),new Y3(i,r,n)}const mv={},Im=new WeakMap;let Xa;function X3(e,t=!1,n=Xa){if(n){let i=Im.get(n);i||Im.set(n,i=[]),i.push(e)}}function Q3(e,t,n=Wt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=k=>r?k:$r(k)||r===!1||r===0?no(k,1):no(k);let d,c,f,v,g=!1,p=!1;if(Qe(e)?(c=()=>e.value,g=$r(e)):ml(e)?(c=()=>u(e),g=!0):rt(e)?(p=!0,g=e.some(k=>ml(k)||$r(k)),c=()=>e.map(k=>{if(Qe(k))return k.value;if(ml(k))return u(k);if(ht(k))return l?l(k,2):k()})):ht(e)?t?c=l?()=>l(e,2):e:c=()=>{if(f){Aa();try{f()}finally{Pa()}}const k=Xa;Xa=d;try{return l?l(e,3,[v]):e(v)}finally{Xa=k}}:c=Cs,t&&r){const k=c,R=r===!0?1/0:r;c=()=>no(k(),R)}const _=WR(),y=()=>{d.stop(),_&&hS(_.effects,d)};if(s&&t){const k=t;t=(...R)=>{k(...R),y()}}let b=p?new Array(e.length).fill(mv):mv;const E=k=>{if(!(!(d.flags&1)||!d.dirty&&!k))if(t){const R=d.run();if(r||g||(p?R.some((O,D)=>nr(O,b[D])):nr(R,b))){f&&f();const O=Xa;Xa=d;try{const D=[R,b===mv?void 0:p&&b[0]===mv?[]:b,v];l?l(t,3,D):t(...D),b=R}finally{Xa=O}}}else d.run()};return a&&a(E),d=new zR(c),d.scheduler=o?()=>o(E,!1):E,v=k=>X3(k,!1,d),f=d.onStop=()=>{const k=Im.get(d);if(k){if(l)l(k,4);else for(const R of k)R();Im.delete(d)}},t?i?E(!0):b=d.run():o?o(E.bind(null,!0),!0):d.run(),y.pause=d.pause.bind(d),y.resume=d.resume.bind(d),y.stop=y,y}function no(e,t=1/0,n){if(t<=0||!gn(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Qe(e))no(e.value,t,n);else if(rt(e))for(let i=0;i<e.length;i++)no(e[i],t,n);else if(OR(e)||ju(e))e.forEach(i=>{no(i,t,n)});else if(MR(e)){for(const i in e)no(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&no(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ch(e,t,n,i){try{return i?e(...i):e()}catch(r){ap(r,t,n)}}function rs(e,t,n,i){if(ht(e)){const r=ch(e,t,n,i);return r&&VR(r)&&r.catch(s=>{ap(s,t,n)}),r}if(rt(e)){const r=[];for(let s=0;s<e.length;s++)r.push(rs(e[s],t,n,i));return r}}function ap(e,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Wt;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let c=0;c<d.length;c++)if(d[c](e,l,u)===!1)return}a=a.parent}if(s){Aa(),ch(s,null,10,[e,l,u]),Pa();return}}J3(e,n,r,i,o)}function J3(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}let hf=!1,Sb=!1;const Yi=[];let gs=0;const Hu=[];let qo=null,Au=0;const uO=Promise.resolve();let CS=null;function ot(e){const t=CS||uO;return e?t.then(this?e.bind(this):e):t}function Z3(e){let t=hf?gs+1:0,n=Yi.length;for(;t<n;){const i=t+n>>>1,r=Yi[i],s=vf(r);s<e||s===e&&r.flags&2?t=i+1:n=i}return t}function kS(e){if(!(e.flags&1)){const t=vf(e),n=Yi[Yi.length-1];!n||!(e.flags&2)&&t>=vf(n)?Yi.push(e):Yi.splice(Z3(t),0,e),e.flags|=1,cO()}}function cO(){!hf&&!Sb&&(Sb=!0,CS=uO.then(fO))}function ej(e){rt(e)?Hu.push(...e):qo&&e.id===-1?qo.splice(Au+1,0,e):e.flags&1||(Hu.push(e),e.flags|=1),cO()}function Hk(e,t,n=hf?gs+1:0){for(;n<Yi.length;n++){const i=Yi[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Yi.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dO(e){if(Hu.length){const t=[...new Set(Hu)].sort((n,i)=>vf(n)-vf(i));if(Hu.length=0,qo){qo.push(...t);return}for(qo=t,Au=0;Au<qo.length;Au++){const n=qo[Au];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qo=null,Au=0}}const vf=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fO(e){Sb=!1,hf=!0;try{for(gs=0;gs<Yi.length;gs++){const t=Yi[gs];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ch(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;gs<Yi.length;gs++){const t=Yi[gs];t&&(t.flags&=-2)}gs=0,Yi.length=0,dO(),hf=!1,CS=null,(Yi.length||Hu.length)&&fO()}}let ui=null,hO=null;function Am(e){const t=ui;return ui=e,hO=e&&e.type.__scopeId||null,t}function N(e,t=ui,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&eT(-1);const s=Am(t);let o;try{o=e(...r)}finally{Am(s),i._d&&eT(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function pn(e,t){if(ui===null)return e;const n=hp(ui),i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=Wt]=t[r];s&&(ht(s)&&(s={mounted:s,updated:s}),s.deep&&no(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function za(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Aa(),rs(l,n,8,[e.el,a,e,t]),Pa())}}const vO=Symbol("_vte"),mO=e=>e.__isTeleport,jd=e=>e&&(e.disabled||e.disabled===""),tj=e=>e&&(e.defer||e.defer===""),Wk=e=>typeof SVGElement<"u"&&e instanceof SVGElement,zk=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Eb=(e,t)=>{const n=e&&e.to;return Dn(n)?t?t(n):null:n},nj={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,u){const{mc:d,pc:c,pbc:f,o:{insert:v,querySelector:g,createText:p,createComment:_}}=u,y=jd(t.props);let{shapeFlag:b,children:E,dynamicChildren:k}=t;if(e==null){const R=t.el=p(""),O=t.anchor=p("");v(R,n,i),v(O,n,i);const D=(w,C)=>{b&16&&(r&&r.isCE&&(r.ce._teleportTarget=w),d(E,w,C,r,s,o,a,l))},S=()=>{const w=t.target=Eb(t.props,g),C=pO(w,t,p,v);w&&(o!=="svg"&&Wk(w)?o="svg":o!=="mathml"&&zk(w)&&(o="mathml"),y||(D(w,C),Qv(t)))};y&&(D(n,O),Qv(t)),tj(t.props)?tr(S,s):S()}else{t.el=e.el,t.targetStart=e.targetStart;const R=t.anchor=e.anchor,O=t.target=e.target,D=t.targetAnchor=e.targetAnchor,S=jd(e.props),w=S?n:O,C=S?R:D;if(o==="svg"||Wk(O)?o="svg":(o==="mathml"||zk(O))&&(o="mathml"),k?(f(e.dynamicChildren,k,w,r,s,o,a),NS(e,t,!0)):l||c(e,t,w,C,r,s,o,a,!1),y)S?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):gv(t,n,R,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const A=t.target=Eb(t.props,g);A&&gv(t,A,null,u,0)}else S&&gv(t,O,D,u,1);Qv(t)}},remove(e,t,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:d,target:c,props:f}=e;if(c&&(r(u),r(d)),s&&r(l),o&16){const v=s||!jd(f);for(let g=0;g<a.length;g++){const p=a[g];i(p,t,n,v,!!p.dynamicChildren)}}},move:gv,hydrate:ij};function gv(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:d}=e,c=s===2;if(c&&i(o,t,n),(!c||jd(d))&&l&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);c&&i(a,t,n)}function ij(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:d}},c){const f=t.target=Eb(t.props,l);if(f){const v=f._lpa||f.firstChild;if(t.shapeFlag&16)if(jd(t.props))t.anchor=c(o(e),t,a(e),n,i,r,s),t.targetStart=v,t.targetAnchor=v&&o(v);else{t.anchor=o(e);let g=v;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")t.targetStart=g;else if(g.data==="teleport anchor"){t.targetAnchor=g,f._lpa=t.targetAnchor&&o(t.targetAnchor);break}}g=o(g)}t.targetAnchor||pO(f,t,d,u),c(v&&o(v),t,f,n,i,r,s)}Qv(t)}return t.anchor&&o(t.anchor)}const gO=nj;function Qv(e){const t=e.ctx;if(t&&t.ut){let n=e.targetStart;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}function pO(e,t,n,i){const r=t.targetStart=n(""),s=t.targetAnchor=n("");return r[vO]=s,e&&(i(r,e),i(s,e)),s}const Yo=Symbol("_leaveCb"),pv=Symbol("_enterCb");function _O(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yt(()=>{e.isMounted=!0}),di(()=>{e.isUnmounting=!0}),e}const Or=[Function,Array],yO={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Or,onEnter:Or,onAfterEnter:Or,onEnterCancelled:Or,onBeforeLeave:Or,onLeave:Or,onAfterLeave:Or,onLeaveCancelled:Or,onBeforeAppear:Or,onAppear:Or,onAfterAppear:Or,onAppearCancelled:Or},bO=e=>{const t=e.subTree;return t.component?bO(t.component):t},rj={name:"BaseTransition",props:yO,setup(e,{slots:t}){const n=Gl(),i=_O();return()=>{const r=t.default&&TS(t.default(),!0);if(!r||!r.length)return;const s=wO(r),o=Ge(e),{mode:a}=o;if(i.isLeaving)return cy(s);const l=Gk(s);if(!l)return cy(s);let u=mf(l,o,i,n,f=>u=f);l.type!==Mi&&kl(l,u);const d=n.subTree,c=d&&Gk(d);if(c&&c.type!==Mi&&!el(l,c)&&bO(n).type!==Mi){const f=mf(c,o,i,n);if(kl(c,f),a==="out-in"&&l.type!==Mi)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave},cy(s);a==="in-out"&&l.type!==Mi&&(f.delayLeave=(v,g,p)=>{const _=SO(i,c);_[String(c.key)]=c,v[Yo]=()=>{g(),v[Yo]=void 0,delete u.delayedLeave},u.delayedLeave=p})}return s}}};function wO(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Mi){t=n;break}}return t}const sj=rj;function SO(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function mf(e,t,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:c,onBeforeLeave:f,onLeave:v,onAfterLeave:g,onLeaveCancelled:p,onBeforeAppear:_,onAppear:y,onAfterAppear:b,onAppearCancelled:E}=t,k=String(e.key),R=SO(n,e),O=(w,C)=>{w&&rs(w,i,9,C)},D=(w,C)=>{const A=C[1];O(w,C),rt(w)?w.every(P=>P.length<=1)&&A():w.length<=1&&A()},S={mode:o,persisted:a,beforeEnter(w){let C=l;if(!n.isMounted)if(s)C=_||l;else return;w[Yo]&&w[Yo](!0);const A=R[k];A&&el(e,A)&&A.el[Yo]&&A.el[Yo](),O(C,[w])},enter(w){let C=u,A=d,P=c;if(!n.isMounted)if(s)C=y||u,A=b||d,P=E||c;else return;let x=!1;const U=w[pv]=$=>{x||(x=!0,$?O(P,[w]):O(A,[w]),S.delayedLeave&&S.delayedLeave(),w[pv]=void 0)};C?D(C,[w,U]):U()},leave(w,C){const A=String(e.key);if(w[pv]&&w[pv](!0),n.isUnmounting)return C();O(f,[w]);let P=!1;const x=w[Yo]=U=>{P||(P=!0,C(),U?O(p,[w]):O(g,[w]),w[Yo]=void 0,R[A]===e&&delete R[A])};R[A]=e,v?D(v,[w,x]):x()},clone(w){const C=mf(w,t,n,i,r);return r&&r(C),C}};return S}function cy(e){if(lp(e))return e=Ds(e),e.children=null,e}function Gk(e){if(!lp(e))return mO(e.type)&&e.children?wO(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ht(n.default))return n.default()}}function kl(e,t){e.shapeFlag&6&&e.component?(e.transition=t,kl(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function TS(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ie?(o.patchFlag&128&&r++,i=i.concat(TS(o.children,t,a))):(t||o.type!==Mi)&&i.push(a!=null?Ds(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Tt(e,t){return ht(e)?zn({name:e.name},t,{setup:e}):e}function EO(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function oj(e){const t=Gl(),n=Te(null);if(t){const r=t.refs===Wt?t.refs={}:t.refs;Object.defineProperty(r,e,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}function Cb(e,t,n,i,r=!1){if(rt(e)){e.forEach((g,p)=>Cb(g,t&&(rt(t)?t[p]:t),n,i,r));return}if(Wu(i)&&!r)return;const s=i.shapeFlag&4?hp(i.component):i.el,o=r?null:s,{i:a,r:l}=e,u=t&&t.r,d=a.refs===Wt?a.refs={}:a.refs,c=a.setupState,f=Ge(c),v=c===Wt?()=>!1:g=>qt(f,g);if(u!=null&&u!==l&&(Dn(u)?(d[u]=null,v(u)&&(c[u]=null)):Qe(u)&&(u.value=null)),ht(l))ch(l,a,12,[o,d]);else{const g=Dn(l),p=Qe(l);if(g||p){const _=()=>{if(e.f){const y=g?v(l)?c[l]:d[l]:l.value;r?rt(y)&&hS(y,s):rt(y)?y.includes(s)||y.push(s):g?(d[l]=[s],v(l)&&(c[l]=d[l])):(l.value=[s],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,v(l)&&(c[l]=o)):p&&(l.value=o,e.k&&(d[e.k]=o))};o?(_.id=-1,tr(_,n)):_()}}}const Wu=e=>!!e.type.__asyncLoader,lp=e=>e.type.__isKeepAlive;function CO(e,t){kO(e,"a",t)}function IS(e,t){kO(e,"da",t)}function kO(e,t,n=_i){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(up(t,i,n),n){let r=n.parent;for(;r&&r.parent;)lp(r.parent.vnode)&&aj(i,t,n,r),r=r.parent}}function aj(e,t,n,i){const r=up(t,e,i,!0);Ir(()=>{hS(i[t],r)},n)}function up(e,t,n=_i,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{Aa();const a=fh(n),l=rs(t,n,e,o);return a(),Pa(),l});return i?r.unshift(s):r.push(s),s}}const Po=e=>(t,n=_i)=>{(!fp||e==="sp")&&up(e,(...i)=>t(...i),n)},AS=Po("bm"),yt=Po("m"),TO=Po("bu"),PS=Po("u"),di=Po("bum"),Ir=Po("um"),IO=Po("sp"),lj=Po("rtg"),uj=Po("rtc");function cj(e,t=_i){up("ec",e,t)}const xS="components",dj="directives";function H(e,t){return DS(xS,e,!0,t)||e}const AO=Symbol.for("v-ndc");function PO(e){return Dn(e)?DS(xS,e,!1)||e:e||AO}function ur(e){return DS(dj,e)}function DS(e,t,n=!0,i=!1){const r=ui||_i;if(r){const s=r.type;if(e===xS){const a=Xj(s,!1);if(a&&(a===t||a===lr(t)||a===Fs(lr(t))))return s}const o=qk(r[e]||s[e],t)||qk(r.appContext[e],t);return!o&&i?s:o}}function qk(e,t){return e&&(e[t]||e[lr(t)]||e[Fs(lr(t))])}function Ui(e,t,n,i){let r;const s=n,o=rt(e);if(o||Dn(e)){const a=o&&ml(e);let l=!1;a&&(l=!$r(e),e=sp(e)),r=new Array(e.length);for(let u=0,d=e.length;u<d;u++)r[u]=t(l?Ri(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(gn(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const d=a[l];r[l]=t(e[d],d,l,s)}}else r=[];return r}function RS(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(rt(i))for(let r=0;r<i.length;r++)e[i[r].name]=i[r].fn;else i&&(e[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return e}function fj(e,t,n={},i,r){if(ui.ce||ui.parent&&Wu(ui.parent)&&ui.parent.ce)return n.name=t,ye(),Le(Ie,null,[h("slot",n,i)],64);let s=e[t];s&&s._c&&(s._d=!1),ye();const o=s&&xO(s(n)),a=Le(Ie,{key:(n.key||o&&o.key||`_${t}`)+(!o&&i?"_fb":"")},o||[],o&&e._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function xO(e){return e.some(t=>Tl(t)?!(t.type===Mi||t.type===Ie&&!xO(t.children)):!0)?e:null}const kb=e=>e?KO(e)?hp(e):kb(e.parent):null,Hd=zn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kb(e.parent),$root:e=>kb(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>OS(e),$forceUpdate:e=>e.f||(e.f=()=>{kS(e.update)}),$nextTick:e=>e.n||(e.n=ot.bind(e.proxy)),$watch:e=>Vj.bind(e)}),dy=(e,t)=>e!==Wt&&!e.__isScriptSetup&&qt(e,t),hj={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(dy(i,t))return o[t]=1,i[t];if(r!==Wt&&qt(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&qt(u,t))return o[t]=3,s[t];if(n!==Wt&&qt(n,t))return o[t]=4,n[t];Tb&&(o[t]=0)}}const d=Hd[t];let c,f;if(d)return t==="$attrs"&&Bi(e.attrs,"get",""),d(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==Wt&&qt(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,qt(f,t))return f[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return dy(r,t)?(r[t]=n,!0):i!==Wt&&qt(i,t)?(i[t]=n,!0):qt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==Wt&&qt(e,o)||dy(t,o)||(a=s[0])&&qt(a,o)||qt(i,o)||qt(Hd,o)||qt(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:qt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Pm(e){return rt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function tc(e,t){return!e||!t?e||t:rt(e)&&rt(t)?e.concat(t):zn({},Pm(e),Pm(t))}let Tb=!0;function vj(e){const t=OS(e),n=e.proxy,i=e.ctx;Tb=!1,t.beforeCreate&&Yk(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:d,beforeMount:c,mounted:f,beforeUpdate:v,updated:g,activated:p,deactivated:_,beforeDestroy:y,beforeUnmount:b,destroyed:E,unmounted:k,render:R,renderTracked:O,renderTriggered:D,errorCaptured:S,serverPrefetch:w,expose:C,inheritAttrs:A,components:P,directives:x,filters:U}=t;if(u&&mj(u,i,null),o)for(const Y in o){const W=o[Y];ht(W)&&(i[Y]=W.bind(n))}if(r){const Y=r.call(n,n);gn(Y)&&(e.data=cn(Y))}if(Tb=!0,s)for(const Y in s){const W=s[Y],K=ht(W)?W.bind(n,n):ht(W.get)?W.get.bind(n,n):Cs,G=!ht(W)&&ht(W.set)?W.set.bind(n):Cs,te=I({get:K,set:G});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>te.value,set:oe=>te.value=oe})}if(a)for(const Y in a)DO(a[Y],i,n,Y);if(l){const Y=ht(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(W=>{Ut(W,Y[W])})}d&&Yk(d,e,"c");function j(Y,W){rt(W)?W.forEach(K=>Y(K.bind(n))):W&&Y(W.bind(n))}if(j(AS,c),j(yt,f),j(TO,v),j(PS,g),j(CO,p),j(IS,_),j(cj,S),j(uj,O),j(lj,D),j(di,b),j(Ir,k),j(IO,w),rt(C))if(C.length){const Y=e.exposed||(e.exposed={});C.forEach(W=>{Object.defineProperty(Y,W,{get:()=>n[W],set:K=>n[W]=K})})}else e.exposed||(e.exposed={});R&&e.render===Cs&&(e.render=R),A!=null&&(e.inheritAttrs=A),P&&(e.components=P),x&&(e.directives=x),w&&EO(e)}function mj(e,t,n=Cs){rt(e)&&(e=Ib(e));for(const i in e){const r=e[i];let s;gn(r)?"default"in r?s=st(r.from||i,r.default,!0):s=st(r.from||i):s=st(r),Qe(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Yk(e,t,n){rs(rt(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function DO(e,t,n,i){let r=i.includes(".")?HO(n,i):()=>n[i];if(Dn(e)){const s=t[e];ht(s)&&ge(r,s)}else if(ht(e))ge(r,e.bind(n));else if(gn(e))if(rt(e))e.forEach(s=>DO(s,t,n,i));else{const s=ht(e.handler)?e.handler.bind(n):t[e.handler];ht(s)&&ge(r,s,e)}}function OS(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>xm(l,u,o,!0)),xm(l,t,o)),gn(t)&&s.set(t,l),l}function xm(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&xm(e,s,n,!0),r&&r.forEach(o=>xm(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=gj[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const gj={data:Kk,props:Xk,emits:Xk,methods:Td,computed:Td,beforeCreate:zi,created:zi,beforeMount:zi,mounted:zi,beforeUpdate:zi,updated:zi,beforeDestroy:zi,beforeUnmount:zi,destroyed:zi,unmounted:zi,activated:zi,deactivated:zi,errorCaptured:zi,serverPrefetch:zi,components:Td,directives:Td,watch:_j,provide:Kk,inject:pj};function Kk(e,t){return t?e?function(){return zn(ht(e)?e.call(this,this):e,ht(t)?t.call(this,this):t)}:t:e}function pj(e,t){return Td(Ib(e),Ib(t))}function Ib(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zi(e,t){return e?[...new Set([].concat(e,t))]:t}function Td(e,t){return e?zn(Object.create(null),e,t):t}function Xk(e,t){return e?rt(e)&&rt(t)?[...new Set([...e,...t])]:zn(Object.create(null),Pm(e),Pm(t??{})):t}function _j(e,t){if(!e)return t;if(!t)return e;const n=zn(Object.create(null),e);for(const i in t)n[i]=zi(e[i],t[i]);return n}function RO(){return{app:null,config:{isNativeTag:l3,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yj=0;function bj(e,t){return function(i,r=null){ht(i)||(i=zn({},i)),r!=null&&!gn(r)&&(r=null);const s=RO(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:yj++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Jj,get config(){return s.config},set config(d){},use(d,...c){return o.has(d)||(d&&ht(d.install)?(o.add(d),d.install(u,...c)):ht(d)&&(o.add(d),d(u,...c))),u},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),u},component(d,c){return c?(s.components[d]=c,u):s.components[d]},directive(d,c){return c?(s.directives[d]=c,u):s.directives[d]},mount(d,c,f){if(!l){const v=u._ceVNode||h(i,r);return v.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),c&&t?t(v,d):e(v,d,f),l=!0,u._container=d,d.__vue_app__=u,hp(v.component)}},onUnmount(d){a.push(d)},unmount(){l&&(rs(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,c){return s.provides[d]=c,u},runWithContext(d){const c=zu;zu=u;try{return d()}finally{zu=c}}};return u}}let zu=null;function Ut(e,t){if(_i){let n=_i.provides;const i=_i.parent&&_i.parent.provides;i===n&&(n=_i.provides=Object.create(i)),n[e]=t}}function st(e,t,n=!1){const i=_i||ui;if(i||zu){const r=zu?zu._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ht(t)?t.call(i&&i.proxy):t}}const OO={},VO=()=>Object.create(OO),NO=e=>Object.getPrototypeOf(e)===OO;function wj(e,t,n,i=!1){const r={},s=VO();e.propsDefaults=Object.create(null),MO(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:sO(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function Sj(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=Ge(r),[l]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let c=0;c<d.length;c++){let f=d[c];if(dp(e.emitsOptions,f))continue;const v=t[f];if(l)if(qt(s,f))v!==s[f]&&(s[f]=v,u=!0);else{const g=lr(f);r[g]=Ab(l,a,g,v,e,!1)}else v!==s[f]&&(s[f]=v,u=!0)}}}else{MO(e,t,r,s)&&(u=!0);let d;for(const c in a)(!t||!qt(t,c)&&((d=Ia(c))===c||!qt(t,d)))&&(l?n&&(n[c]!==void 0||n[d]!==void 0)&&(r[c]=Ab(l,a,c,void 0,e,!0)):delete r[c]);if(s!==a)for(const c in s)(!t||!qt(t,c))&&(delete s[c],u=!0)}u&&ho(e.attrs,"set","")}function MO(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Bd(l))continue;const u=t[l];let d;r&&qt(r,d=lr(l))?!s||!s.includes(d)?n[d]=u:(a||(a={}))[d]=u:dp(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Ge(n),u=a||Wt;for(let d=0;d<s.length;d++){const c=s[d];n[c]=Ab(r,l,c,u[c],e,!qt(u,c))}}return o}function Ab(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=qt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ht(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const d=fh(r);i=u[n]=l.call(null,t),d()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ia(n))&&(i=!0))}return i}const Ej=new WeakMap;function LO(e,t,n=!1){const i=n?Ej:t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!ht(e)){const d=c=>{l=!0;const[f,v]=LO(c,t,!0);zn(o,f),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!l)return gn(e)&&i.set(e,Uu),Uu;if(rt(s))for(let d=0;d<s.length;d++){const c=lr(s[d]);Qk(c)&&(o[c]=Wt)}else if(s)for(const d in s){const c=lr(d);if(Qk(c)){const f=s[d],v=o[c]=rt(f)||ht(f)?{type:f}:zn({},f),g=v.type;let p=!1,_=!0;if(rt(g))for(let y=0;y<g.length;++y){const b=g[y],E=ht(b)&&b.name;if(E==="Boolean"){p=!0;break}else E==="String"&&(_=!1)}else p=ht(g)&&g.name==="Boolean";v[0]=p,v[1]=_,(p||qt(v,"default"))&&a.push(c)}}const u=[o,a];return gn(e)&&i.set(e,u),u}function Qk(e){return e[0]!=="$"&&!Bd(e)}const FO=e=>e[0]==="_"||e==="$stable",VS=e=>rt(e)?e.map(_s):[_s(e)],Cj=(e,t,n)=>{if(t._n)return t;const i=N((...r)=>VS(t(...r)),n);return i._c=!1,i},$O=(e,t,n)=>{const i=e._ctx;for(const r in e){if(FO(r))continue;const s=e[r];if(ht(s))t[r]=Cj(r,s,i);else if(s!=null){const o=VS(s);t[r]=()=>o}}},BO=(e,t)=>{const n=VS(t);e.slots.default=()=>n},UO=(e,t,n)=>{for(const i in t)(n||i!=="_")&&(e[i]=t[i])},kj=(e,t,n)=>{const i=e.slots=VO();if(e.vnode.shapeFlag&32){const r=t._;r?(UO(i,t,n),n&&LR(i,"_",r,!0)):$O(t,i)}else t&&BO(e,t)},Tj=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=Wt;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:UO(r,t,n):(s=!t.$stable,$O(t,r)),o=t}else t&&(BO(e,t),o={default:1});if(s)for(const a in r)!FO(a)&&o[a]==null&&delete r[a]},tr=Bj;function Ij(e){return Aj(e)}function Aj(e,t){const n=FR();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:d,parentNode:c,nextSibling:f,setScopeId:v=Cs,insertStaticContent:g}=e,p=(M,L,ee,fe=null,ae=null,me=null,Pe=void 0,Ee=null,Re=!!L.dynamicChildren)=>{if(M===L)return;M&&!el(M,L)&&(fe=B(M),oe(M,ae,me,!0),M=null),L.patchFlag===-2&&(Re=!1,L.dynamicChildren=null);const{type:be,ref:ze,shapeFlag:Me}=L;switch(be){case dh:_(M,L,ee,fe);break;case Mi:y(M,L,ee,fe);break;case vy:M==null&&b(L,ee,fe,Pe);break;case Ie:P(M,L,ee,fe,ae,me,Pe,Ee,Re);break;default:Me&1?R(M,L,ee,fe,ae,me,Pe,Ee,Re):Me&6?x(M,L,ee,fe,ae,me,Pe,Ee,Re):(Me&64||Me&128)&&be.process(M,L,ee,fe,ae,me,Pe,Ee,Re,ce)}ze!=null&&ae&&Cb(ze,M&&M.ref,me,L||M,!L)},_=(M,L,ee,fe)=>{if(M==null)i(L.el=a(L.children),ee,fe);else{const ae=L.el=M.el;L.children!==M.children&&u(ae,L.children)}},y=(M,L,ee,fe)=>{M==null?i(L.el=l(L.children||""),ee,fe):L.el=M.el},b=(M,L,ee,fe)=>{[M.el,M.anchor]=g(M.children,L,ee,fe,M.el,M.anchor)},E=({el:M,anchor:L},ee,fe)=>{let ae;for(;M&&M!==L;)ae=f(M),i(M,ee,fe),M=ae;i(L,ee,fe)},k=({el:M,anchor:L})=>{let ee;for(;M&&M!==L;)ee=f(M),r(M),M=ee;r(L)},R=(M,L,ee,fe,ae,me,Pe,Ee,Re)=>{L.type==="svg"?Pe="svg":L.type==="math"&&(Pe="mathml"),M==null?O(L,ee,fe,ae,me,Pe,Ee,Re):w(M,L,ae,me,Pe,Ee,Re)},O=(M,L,ee,fe,ae,me,Pe,Ee)=>{let Re,be;const{props:ze,shapeFlag:Me,transition:He,dirs:Ce}=M;if(Re=M.el=o(M.type,me,ze&&ze.is,ze),Me&8?d(Re,M.children):Me&16&&S(M.children,Re,null,fe,ae,fy(M,me),Pe,Ee),Ce&&za(M,null,fe,"created"),D(Re,M,M.scopeId,Pe,fe),ze){for(const mt in ze)mt!=="value"&&!Bd(mt)&&s(Re,mt,null,ze[mt],me,fe);"value"in ze&&s(Re,"value",null,ze.value,me),(be=ze.onVnodeBeforeMount)&&vs(be,fe,M)}Ce&&za(M,null,fe,"beforeMount");const Ze=Pj(ae,He);Ze&&He.beforeEnter(Re),i(Re,L,ee),((be=ze&&ze.onVnodeMounted)||Ze||Ce)&&tr(()=>{be&&vs(be,fe,M),Ze&&He.enter(Re),Ce&&za(M,null,fe,"mounted")},ae)},D=(M,L,ee,fe,ae)=>{if(ee&&v(M,ee),fe)for(let me=0;me<fe.length;me++)v(M,fe[me]);if(ae){let me=ae.subTree;if(L===me||GO(me.type)&&(me.ssContent===L||me.ssFallback===L)){const Pe=ae.vnode;D(M,Pe,Pe.scopeId,Pe.slotScopeIds,ae.parent)}}},S=(M,L,ee,fe,ae,me,Pe,Ee,Re=0)=>{for(let be=Re;be<M.length;be++){const ze=M[be]=Ee?Ko(M[be]):_s(M[be]);p(null,ze,L,ee,fe,ae,me,Pe,Ee)}},w=(M,L,ee,fe,ae,me,Pe)=>{const Ee=L.el=M.el;let{patchFlag:Re,dynamicChildren:be,dirs:ze}=L;Re|=M.patchFlag&16;const Me=M.props||Wt,He=L.props||Wt;let Ce;if(ee&&Ga(ee,!1),(Ce=He.onVnodeBeforeUpdate)&&vs(Ce,ee,L,M),ze&&za(L,M,ee,"beforeUpdate"),ee&&Ga(ee,!0),(Me.innerHTML&&He.innerHTML==null||Me.textContent&&He.textContent==null)&&d(Ee,""),be?C(M.dynamicChildren,be,Ee,ee,fe,fy(L,ae),me):Pe||W(M,L,Ee,null,ee,fe,fy(L,ae),me,!1),Re>0){if(Re&16)A(Ee,Me,He,ee,ae);else if(Re&2&&Me.class!==He.class&&s(Ee,"class",null,He.class,ae),Re&4&&s(Ee,"style",Me.style,He.style,ae),Re&8){const Ze=L.dynamicProps;for(let mt=0;mt<Ze.length;mt++){const xt=Ze[mt],le=Me[xt],re=He[xt];(re!==le||xt==="value")&&s(Ee,xt,le,re,ae,ee)}}Re&1&&M.children!==L.children&&d(Ee,L.children)}else!Pe&&be==null&&A(Ee,Me,He,ee,ae);((Ce=He.onVnodeUpdated)||ze)&&tr(()=>{Ce&&vs(Ce,ee,L,M),ze&&za(L,M,ee,"updated")},fe)},C=(M,L,ee,fe,ae,me,Pe)=>{for(let Ee=0;Ee<L.length;Ee++){const Re=M[Ee],be=L[Ee],ze=Re.el&&(Re.type===Ie||!el(Re,be)||Re.shapeFlag&70)?c(Re.el):ee;p(Re,be,ze,null,fe,ae,me,Pe,!0)}},A=(M,L,ee,fe,ae)=>{if(L!==ee){if(L!==Wt)for(const me in L)!Bd(me)&&!(me in ee)&&s(M,me,L[me],null,ae,fe);for(const me in ee){if(Bd(me))continue;const Pe=ee[me],Ee=L[me];Pe!==Ee&&me!=="value"&&s(M,me,Ee,Pe,ae,fe)}"value"in ee&&s(M,"value",L.value,ee.value,ae)}},P=(M,L,ee,fe,ae,me,Pe,Ee,Re)=>{const be=L.el=M?M.el:a(""),ze=L.anchor=M?M.anchor:a("");let{patchFlag:Me,dynamicChildren:He,slotScopeIds:Ce}=L;Ce&&(Ee=Ee?Ee.concat(Ce):Ce),M==null?(i(be,ee,fe),i(ze,ee,fe),S(L.children||[],ee,ze,ae,me,Pe,Ee,Re)):Me>0&&Me&64&&He&&M.dynamicChildren?(C(M.dynamicChildren,He,ee,ae,me,Pe,Ee),(L.key!=null||ae&&L===ae.subTree)&&NS(M,L,!0)):W(M,L,ee,ze,ae,me,Pe,Ee,Re)},x=(M,L,ee,fe,ae,me,Pe,Ee,Re)=>{L.slotScopeIds=Ee,M==null?L.shapeFlag&512?ae.ctx.activate(L,ee,fe,Pe,Re):U(L,ee,fe,ae,me,Pe,Re):$(M,L,Re)},U=(M,L,ee,fe,ae,me,Pe)=>{const Ee=M.component=zj(M,fe,ae);if(lp(M)&&(Ee.ctx.renderer=ce),Gj(Ee,!1,Pe),Ee.asyncDep){if(ae&&ae.registerDep(Ee,j,Pe),!M.el){const Re=Ee.subTree=h(Mi);y(null,Re,L,ee)}}else j(Ee,M,L,ee,ae,me,Pe)},$=(M,L,ee)=>{const fe=L.component=M.component;if(Fj(M,L,ee))if(fe.asyncDep&&!fe.asyncResolved){Y(fe,L,ee);return}else fe.next=L,fe.update();else L.el=M.el,fe.vnode=L},j=(M,L,ee,fe,ae,me,Pe)=>{const Ee=()=>{if(M.isMounted){let{next:Me,bu:He,u:Ce,parent:Ze,vnode:mt}=M;{const Fe=jO(M);if(Fe){Me&&(Me.el=mt.el,Y(M,Me,Pe)),Fe.asyncDep.then(()=>{M.isUnmounted||Ee()});return}}let xt=Me,le;Ga(M,!1),Me?(Me.el=mt.el,Y(M,Me,Pe)):Me=mt,He&&Xv(He),(le=Me.props&&Me.props.onVnodeBeforeUpdate)&&vs(le,Ze,Me,mt),Ga(M,!0);const re=hy(M),we=M.subTree;M.subTree=re,p(we,re,c(we.el),B(we),M,ae,me),Me.el=re.el,xt===null&&$j(M,re.el),Ce&&tr(Ce,ae),(le=Me.props&&Me.props.onVnodeUpdated)&&tr(()=>vs(le,Ze,Me,mt),ae)}else{let Me;const{el:He,props:Ce}=L,{bm:Ze,m:mt,parent:xt,root:le,type:re}=M,we=Wu(L);if(Ga(M,!1),Ze&&Xv(Ze),!we&&(Me=Ce&&Ce.onVnodeBeforeMount)&&vs(Me,xt,L),Ga(M,!0),He&&Se){const Fe=()=>{M.subTree=hy(M),Se(He,M.subTree,M,ae,null)};we&&re.__asyncHydrate?re.__asyncHydrate(He,M,Fe):Fe()}else{le.ce&&le.ce._injectChildStyle(re);const Fe=M.subTree=hy(M);p(null,Fe,ee,fe,M,ae,me),L.el=Fe.el}if(mt&&tr(mt,ae),!we&&(Me=Ce&&Ce.onVnodeMounted)){const Fe=L;tr(()=>vs(Me,xt,Fe),ae)}(L.shapeFlag&256||xt&&Wu(xt.vnode)&&xt.vnode.shapeFlag&256)&&M.a&&tr(M.a,ae),M.isMounted=!0,L=ee=fe=null}};M.scope.on();const Re=M.effect=new zR(Ee);M.scope.off();const be=M.update=Re.run.bind(Re),ze=M.job=Re.runIfDirty.bind(Re);ze.i=M,ze.id=M.uid,Re.scheduler=()=>kS(ze),Ga(M,!0),be()},Y=(M,L,ee)=>{L.component=M;const fe=M.vnode.props;M.vnode=L,M.next=null,Sj(M,L.props,fe,ee),Tj(M,L.children,ee),Aa(),Hk(M),Pa()},W=(M,L,ee,fe,ae,me,Pe,Ee,Re=!1)=>{const be=M&&M.children,ze=M?M.shapeFlag:0,Me=L.children,{patchFlag:He,shapeFlag:Ce}=L;if(He>0){if(He&128){G(be,Me,ee,fe,ae,me,Pe,Ee,Re);return}else if(He&256){K(be,Me,ee,fe,ae,me,Pe,Ee,Re);return}}Ce&8?(ze&16&&Q(be,ae,me),Me!==be&&d(ee,Me)):ze&16?Ce&16?G(be,Me,ee,fe,ae,me,Pe,Ee,Re):Q(be,ae,me,!0):(ze&8&&d(ee,""),Ce&16&&S(Me,ee,fe,ae,me,Pe,Ee,Re))},K=(M,L,ee,fe,ae,me,Pe,Ee,Re)=>{M=M||Uu,L=L||Uu;const be=M.length,ze=L.length,Me=Math.min(be,ze);let He;for(He=0;He<Me;He++){const Ce=L[He]=Re?Ko(L[He]):_s(L[He]);p(M[He],Ce,ee,null,ae,me,Pe,Ee,Re)}be>ze?Q(M,ae,me,!0,!1,Me):S(L,ee,fe,ae,me,Pe,Ee,Re,Me)},G=(M,L,ee,fe,ae,me,Pe,Ee,Re)=>{let be=0;const ze=L.length;let Me=M.length-1,He=ze-1;for(;be<=Me&&be<=He;){const Ce=M[be],Ze=L[be]=Re?Ko(L[be]):_s(L[be]);if(el(Ce,Ze))p(Ce,Ze,ee,null,ae,me,Pe,Ee,Re);else break;be++}for(;be<=Me&&be<=He;){const Ce=M[Me],Ze=L[He]=Re?Ko(L[He]):_s(L[He]);if(el(Ce,Ze))p(Ce,Ze,ee,null,ae,me,Pe,Ee,Re);else break;Me--,He--}if(be>Me){if(be<=He){const Ce=He+1,Ze=Ce<ze?L[Ce].el:fe;for(;be<=He;)p(null,L[be]=Re?Ko(L[be]):_s(L[be]),ee,Ze,ae,me,Pe,Ee,Re),be++}}else if(be>He)for(;be<=Me;)oe(M[be],ae,me,!0),be++;else{const Ce=be,Ze=be,mt=new Map;for(be=Ze;be<=He;be++){const qe=L[be]=Re?Ko(L[be]):_s(L[be]);qe.key!=null&&mt.set(qe.key,be)}let xt,le=0;const re=He-Ze+1;let we=!1,Fe=0;const et=new Array(re);for(be=0;be<re;be++)et[be]=0;for(be=Ce;be<=Me;be++){const qe=M[be];if(le>=re){oe(qe,ae,me,!0);continue}let kt;if(qe.key!=null)kt=mt.get(qe.key);else for(xt=Ze;xt<=He;xt++)if(et[xt-Ze]===0&&el(qe,L[xt])){kt=xt;break}kt===void 0?oe(qe,ae,me,!0):(et[kt-Ze]=be+1,kt>=Fe?Fe=kt:we=!0,p(qe,L[kt],ee,null,ae,me,Pe,Ee,Re),le++)}const ft=we?xj(et):Uu;for(xt=ft.length-1,be=re-1;be>=0;be--){const qe=Ze+be,kt=L[qe],on=qe+1<ze?L[qe+1].el:fe;et[be]===0?p(null,kt,ee,on,ae,me,Pe,Ee,Re):we&&(xt<0||be!==ft[xt]?te(kt,ee,on,2):xt--)}}},te=(M,L,ee,fe,ae=null)=>{const{el:me,type:Pe,transition:Ee,children:Re,shapeFlag:be}=M;if(be&6){te(M.component.subTree,L,ee,fe);return}if(be&128){M.suspense.move(L,ee,fe);return}if(be&64){Pe.move(M,L,ee,ce);return}if(Pe===Ie){i(me,L,ee);for(let Me=0;Me<Re.length;Me++)te(Re[Me],L,ee,fe);i(M.anchor,L,ee);return}if(Pe===vy){E(M,L,ee);return}if(fe!==2&&be&1&&Ee)if(fe===0)Ee.beforeEnter(me),i(me,L,ee),tr(()=>Ee.enter(me),ae);else{const{leave:Me,delayLeave:He,afterLeave:Ce}=Ee,Ze=()=>i(me,L,ee),mt=()=>{Me(me,()=>{Ze(),Ce&&Ce()})};He?He(me,Ze,mt):mt()}else i(me,L,ee)},oe=(M,L,ee,fe=!1,ae=!1)=>{const{type:me,props:Pe,ref:Ee,children:Re,dynamicChildren:be,shapeFlag:ze,patchFlag:Me,dirs:He,cacheIndex:Ce}=M;if(Me===-2&&(ae=!1),Ee!=null&&Cb(Ee,null,ee,M,!0),Ce!=null&&(L.renderCache[Ce]=void 0),ze&256){L.ctx.deactivate(M);return}const Ze=ze&1&&He,mt=!Wu(M);let xt;if(mt&&(xt=Pe&&Pe.onVnodeBeforeUnmount)&&vs(xt,L,M),ze&6)Ne(M.component,ee,fe);else{if(ze&128){M.suspense.unmount(ee,fe);return}Ze&&za(M,null,L,"beforeUnmount"),ze&64?M.type.remove(M,L,ee,ce,fe):be&&!be.hasOnce&&(me!==Ie||Me>0&&Me&64)?Q(be,L,ee,!1,!0):(me===Ie&&Me&384||!ae&&ze&16)&&Q(Re,L,ee),fe&&_e(M)}(mt&&(xt=Pe&&Pe.onVnodeUnmounted)||Ze)&&tr(()=>{xt&&vs(xt,L,M),Ze&&za(M,null,L,"unmounted")},ee)},_e=M=>{const{type:L,el:ee,anchor:fe,transition:ae}=M;if(L===Ie){Ae(ee,fe);return}if(L===vy){k(M);return}const me=()=>{r(ee),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(M.shapeFlag&1&&ae&&!ae.persisted){const{leave:Pe,delayLeave:Ee}=ae,Re=()=>Pe(ee,me);Ee?Ee(M.el,me,Re):Re()}else me()},Ae=(M,L)=>{let ee;for(;M!==L;)ee=f(M),r(M),M=ee;r(L)},Ne=(M,L,ee)=>{const{bum:fe,scope:ae,job:me,subTree:Pe,um:Ee,m:Re,a:be}=M;Jk(Re),Jk(be),fe&&Xv(fe),ae.stop(),me&&(me.flags|=8,oe(Pe,M,L,ee)),Ee&&tr(Ee,L),tr(()=>{M.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Q=(M,L,ee,fe=!1,ae=!1,me=0)=>{for(let Pe=me;Pe<M.length;Pe++)oe(M[Pe],L,ee,fe,ae)},B=M=>{if(M.shapeFlag&6)return B(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const L=f(M.anchor||M.el),ee=L&&L[vO];return ee?f(ee):L};let q=!1;const ie=(M,L,ee)=>{M==null?L._vnode&&oe(L._vnode,null,null,!0):p(L._vnode||null,M,L,null,null,null,ee),L._vnode=M,q||(q=!0,Hk(),dO(),q=!1)},ce={p,um:oe,m:te,r:_e,mt:U,mc:S,pc:W,pbc:C,n:B,o:e};let ne,Se;return{render:ie,hydrate:ne,createApp:bj(ie,ne)}}function fy({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ga({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Pj(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function NS(e,t,n=!1){const i=e.children,r=t.children;if(rt(i)&&rt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ko(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&NS(o,a)),a.type===dh&&(a.el=o.el)}}function xj(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function jO(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jO(t)}function Jk(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Dj=Symbol.for("v-scx"),Rj=()=>st(Dj);function rn(e,t){return cp(e,null,t)}function Oj(e,t){return cp(e,null,{flush:"sync"})}function ge(e,t,n){return cp(e,t,n)}function cp(e,t,n=Wt){const{immediate:i,deep:r,flush:s,once:o}=n,a=zn({},n);let l;if(fp)if(s==="sync"){const f=Rj();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const f=()=>{};return f.stop=Cs,f.resume=Cs,f.pause=Cs,f}const u=_i;a.call=(f,v,g)=>rs(f,u,v,g);let d=!1;s==="post"?a.scheduler=f=>{tr(f,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(f,v)=>{v?f():kS(f)}),a.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const c=Q3(e,t,a);return l&&l.push(c),c}function Vj(e,t,n){const i=this.proxy,r=Dn(e)?e.includes(".")?HO(i,e):()=>i[e]:e.bind(i,i);let s;ht(t)?s=t:(s=t.handler,n=t);const o=fh(this),a=cp(r,s.bind(i),n);return o(),a}function HO(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function nc(e,t,n=Wt){const i=Gl(),r=lr(t),s=Ia(t),o=WO(e,t),a=z3((l,u)=>{let d,c=Wt,f;return Oj(()=>{const v=e[t];nr(d,v)&&(d=v,u())}),{get(){return l(),n.get?n.get(d):d},set(v){const g=n.set?n.set(v):v;if(!nr(g,d)&&!(c!==Wt&&nr(v,c)))return;const p=i.vnode.props;p&&(t in p||r in p||s in p)&&(`onUpdate:${t}`in p||`onUpdate:${r}`in p||`onUpdate:${s}`in p)||(d=v,u()),i.emit(`update:${t}`,g),nr(v,g)&&nr(v,c)&&!nr(g,f)&&u(),c=v,f=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Wt:a,done:!1}:{done:!0}}}},a}const WO=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${lr(t)}Modifiers`]||e[`${Ia(t)}Modifiers`];function Nj(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Wt;let r=n;const s=t.startsWith("update:"),o=s&&WO(i,t.slice(7));o&&(o.trim&&(r=n.map(d=>Dn(d)?d.trim():d)),o.number&&(r=n.map(yb)));let a,l=i[a=sy(t)]||i[a=sy(lr(t))];!l&&s&&(l=i[a=sy(Ia(t))]),l&&rs(l,e,6,r);const u=i[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,rs(u,e,6,r)}}function zO(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!ht(e)){const l=u=>{const d=zO(u,t,!0);d&&(a=!0,zn(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(gn(e)&&i.set(e,null),null):(rt(s)?s.forEach(l=>o[l]=null):zn(o,s),gn(e)&&i.set(e,o),o)}function dp(e,t){return!e||!Zg(t)?!1:(t=t.slice(2).replace(/Once$/,""),qt(e,t[0].toLowerCase()+t.slice(1))||qt(e,Ia(t))||qt(e,t))}function hy(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:d,props:c,data:f,setupState:v,ctx:g,inheritAttrs:p}=e,_=Am(e);let y,b;try{if(n.shapeFlag&4){const k=r||i,R=k;y=_s(u.call(R,k,d,c,v,f,g)),b=a}else{const k=t;y=_s(k.length>1?k(c,{attrs:a,slots:o,emit:l}):k(c,null)),b=t.props?a:Mj(a)}}catch(k){Wd.length=0,ap(k,e,1),y=h(Mi)}let E=y;if(b&&p!==!1){const k=Object.keys(b),{shapeFlag:R}=E;k.length&&R&7&&(s&&k.some(fS)&&(b=Lj(b,s)),E=Ds(E,b,!1,!0))}return n.dirs&&(E=Ds(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&kl(E,n.transition),y=E,Am(_),y}const Mj=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zg(n))&&((t||(t={}))[n]=e[n]);return t},Lj=(e,t)=>{const n={};for(const i in e)(!fS(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Fj(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Zk(i,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let c=0;c<d.length;c++){const f=d[c];if(o[f]!==i[f]&&!dp(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zk(i,o,u):!0:!!o;return!1}function Zk(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!dp(n,s))return!0}return!1}function $j({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const GO=e=>e.__isSuspense;function Bj(e,t){t&&t.pendingBranch?rt(e)?t.effects.push(...e):t.effects.push(e):ej(e)}const Ie=Symbol.for("v-fgt"),dh=Symbol.for("v-txt"),Mi=Symbol.for("v-cmt"),vy=Symbol.for("v-stc"),Wd=[];let _r=null;function ye(e=!1){Wd.push(_r=e?null:[])}function Uj(){Wd.pop(),_r=Wd[Wd.length-1]||null}let gf=1;function eT(e){gf+=e,e<0&&_r&&(_r.hasOnce=!0)}function qO(e){return e.dynamicChildren=gf>0?_r||Uu:null,Uj(),gf>0&&_r&&_r.push(e),e}function St(e,t,n,i,r,s){return qO(tt(e,t,n,i,r,s,!0))}function Le(e,t,n,i,r){return qO(h(e,t,n,i,r,!0))}function Tl(e){return e?e.__v_isVNode===!0:!1}function el(e,t){return e.type===t.type&&e.key===t.key}const YO=({key:e})=>e??null,Jv=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Dn(e)||Qe(e)||ht(e)?{i:ui,r:e,k:t,f:!!n}:e:null);function tt(e,t=null,n=null,i=0,r=null,s=e===Ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&YO(t),ref:t&&Jv(t),scopeId:hO,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ui};return a?(LS(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Dn(n)?8:16),gf>0&&!o&&_r&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_r.push(l),l}const h=jj;function jj(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===AO)&&(e=Mi),Tl(e)){const a=Ds(e,t,!0);return n&&LS(a,n),gf>0&&!s&&_r&&(a.shapeFlag&6?_r[_r.indexOf(e)]=a:_r.push(a)),a.patchFlag=-2,a}if(Qj(e)&&(e=e.__vccOpts),t){t=MS(t);let{class:a,style:l}=t;a&&!Dn(a)&&(t.class=ip(a)),gn(l)&&(wS(l)&&!rt(l)&&(l=zn({},l)),t.style=np(l))}const o=Dn(e)?1:GO(e)?128:mO(e)?64:gn(e)?4:ht(e)?2:0;return tt(e,t,n,i,r,o,s,!0)}function MS(e){return e?wS(e)||NO(e)?zn({},e):e:null}function Ds(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=e,u=t?J(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&YO(u),ref:t&&t.ref?n&&s?rt(s)?s.concat(Jv(t)):[s,Jv(t)]:Jv(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ds(e.ssContent),ssFallback:e.ssFallback&&Ds(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&kl(d,l.clone(d)),d}function xe(e=" ",t=0){return h(dh,null,e,t)}function Jt(e="",t=!1){return t?(ye(),Le(Mi,null,e)):h(Mi,null,e)}function _s(e){return e==null||typeof e=="boolean"?h(Mi):rt(e)?h(Ie,null,e.slice()):typeof e=="object"?Ko(e):h(dh,null,String(e))}function Ko(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ds(e)}function LS(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(rt(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),LS(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!NO(t)?t._ctx=ui:r===3&&ui&&(ui.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ht(t)?(t={default:t,_ctx:ui},n=32):(t=String(t),i&64?(n=16,t=[xe(t)]):n=8);e.children=t,e.shapeFlag|=n}function J(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=ip([t.class,i.class]));else if(r==="style")t.style=np([t.style,i.style]);else if(Zg(r)){const s=t[r],o=i[r];o&&s!==o&&!(rt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function vs(e,t,n,i=null){rs(e,t,7,[n,i])}const Hj=RO();let Wj=0;function zj(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||Hj,s={uid:Wj++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new HR(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:LO(i,r),emitsOptions:zO(i,r),emit:null,emitted:null,propsDefaults:Wt,inheritAttrs:i.inheritAttrs,ctx:Wt,data:Wt,props:Wt,attrs:Wt,slots:Wt,refs:Wt,setupState:Wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Nj.bind(null,s),e.ce&&e.ce(s),s}let _i=null;const Gl=()=>_i||ui;let Dm,Pb;{const e=FR(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Dm=t("__VUE_INSTANCE_SETTERS__",n=>_i=n),Pb=t("__VUE_SSR_SETTERS__",n=>fp=n)}const fh=e=>{const t=_i;return Dm(e),e.scope.on(),()=>{e.scope.off(),Dm(t)}},tT=()=>{_i&&_i.scope.off(),Dm(null)};function KO(e){return e.vnode.shapeFlag&4}let fp=!1;function Gj(e,t=!1,n=!1){t&&Pb(t);const{props:i,children:r}=e.vnode,s=KO(e);wj(e,i,s,t),kj(e,r,n);const o=s?qj(e,t):void 0;return t&&Pb(!1),o}function qj(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hj);const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?Kj(e):null,s=fh(e);Aa();const o=ch(i,e,0,[e.props,r]);if(Pa(),s(),VR(o)){if(Wu(e)||EO(e),o.then(tT,tT),t)return o.then(a=>{nT(e,a,t)}).catch(a=>{ap(a,e,0)});e.asyncDep=o}else nT(e,o,t)}else XO(e,t)}function nT(e,t,n){ht(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:gn(t)&&(e.setupState=aO(t)),XO(e,n)}let iT;function XO(e,t,n){const i=e.type;if(!e.render){if(!t&&iT&&!i.render){const r=i.template||OS(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,u=zn(zn({isCustomElement:s,delimiters:a},o),l);i.render=iT(r,u)}}e.render=i.render||Cs}{const r=fh(e);Aa();try{vj(e)}finally{Pa(),r()}}}const Yj={get(e,t){return Bi(e,"get",""),e[t]}};function Kj(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Yj),slots:e.slots,emit:e.emit,expose:t}}function hp(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(aO(SS(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Hd)return Hd[n](e)},has(t,n){return n in t||n in Hd}})):e.proxy}function Xj(e,t=!0){return ht(e)?e.displayName||e.name:e.name||t&&e.__name}function Qj(e){return ht(e)&&"__vccOpts"in e}const I=(e,t)=>K3(e,t,fp);function ni(e,t,n){const i=arguments.length;return i===2?gn(t)&&!rt(t)?Tl(t)?h(e,null,[t]):h(e,t):h(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Tl(n)&&(n=[n]),h(e,t,n))}const Jj="3.5.7";/**
* @vue/runtime-dom v3.5.7
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xb;const rT=typeof window<"u"&&window.trustedTypes;if(rT)try{xb=rT.createPolicy("vue",{createHTML:e=>e})}catch{}const QO=xb?e=>xb.createHTML(e):e=>e,Zj="http://www.w3.org/2000/svg",e5="http://www.w3.org/1998/Math/MathML",to=typeof document<"u"?document:null,sT=to&&to.createElement("template"),t5={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?to.createElementNS(Zj,e):t==="mathml"?to.createElementNS(e5,e):n?to.createElement(e,{is:n}):to.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>to.createTextNode(e),createComment:e=>to.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>to.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{sT.innerHTML=QO(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=sT.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},jo="transition",gd="animation",ic=Symbol("_vtc"),JO={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ZO=zn({},yO,JO),n5=e=>(e.displayName="Transition",e.props=ZO,e),va=n5((e,{slots:t})=>ni(sj,eV(e),t)),qa=(e,t=[])=>{rt(e)?e.forEach(n=>n(...t)):e&&e(...t)},oT=e=>e?rt(e)?e.some(t=>t.length>1):e.length>1:!1;function eV(e){const t={};for(const P in e)P in JO||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:d=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,g=i5(r),p=g&&g[0],_=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:E,onLeave:k,onLeaveCancelled:R,onBeforeAppear:O=y,onAppear:D=b,onAppearCancelled:S=E}=t,w=(P,x,U)=>{zo(P,x?d:a),zo(P,x?u:o),U&&U()},C=(P,x)=>{P._isLeaving=!1,zo(P,c),zo(P,v),zo(P,f),x&&x()},A=P=>(x,U)=>{const $=P?D:b,j=()=>w(x,P,U);qa($,[x,j]),aT(()=>{zo(x,P?l:s),Zs(x,P?d:a),oT($)||lT(x,i,p,j)})};return zn(t,{onBeforeEnter(P){qa(y,[P]),Zs(P,s),Zs(P,o)},onBeforeAppear(P){qa(O,[P]),Zs(P,l),Zs(P,u)},onEnter:A(!1),onAppear:A(!0),onLeave(P,x){P._isLeaving=!0;const U=()=>C(P,x);Zs(P,c),Zs(P,f),nV(),aT(()=>{P._isLeaving&&(zo(P,c),Zs(P,v),oT(k)||lT(P,i,_,U))}),qa(k,[P,U])},onEnterCancelled(P){w(P,!1),qa(E,[P])},onAppearCancelled(P){w(P,!0),qa(S,[P])},onLeaveCancelled(P){C(P),qa(R,[P])}})}function i5(e){if(e==null)return null;if(gn(e))return[my(e.enter),my(e.leave)];{const t=my(e);return[t,t]}}function my(e){return h3(e)}function Zs(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ic]||(e[ic]=new Set)).add(t)}function zo(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[ic];n&&(n.delete(t),n.size||(e[ic]=void 0))}function aT(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let r5=0;function lT(e,t,n,i){const r=e._endId=++r5,s=()=>{r===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=tV(e,t);if(!o)return i();const u=o+"end";let d=0;const c=()=>{e.removeEventListener(u,f),s()},f=v=>{v.target===e&&++d>=l&&c()};setTimeout(()=>{d<l&&c()},a+1),e.addEventListener(u,f)}function tV(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),r=i(`${jo}Delay`),s=i(`${jo}Duration`),o=uT(r,s),a=i(`${gd}Delay`),l=i(`${gd}Duration`),u=uT(a,l);let d=null,c=0,f=0;t===jo?o>0&&(d=jo,c=o,f=s.length):t===gd?u>0&&(d=gd,c=u,f=l.length):(c=Math.max(o,u),d=c>0?o>u?jo:gd:null,f=d?d===jo?s.length:l.length:0);const v=d===jo&&/\b(transform|all)(,|$)/.test(i(`${jo}Property`).toString());return{type:d,timeout:c,propCount:f,hasTransform:v}}function uT(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>cT(n)+cT(e[i])))}function cT(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function nV(){return document.body.offsetHeight}function s5(e,t,n){const i=e[ic];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Rm=Symbol("_vod"),iV=Symbol("_vsh"),fs={beforeMount(e,{value:t},{transition:n}){e[Rm]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):pd(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),pd(e,!0),i.enter(e)):i.leave(e,()=>{pd(e,!1)}):pd(e,t))},beforeUnmount(e,{value:t}){pd(e,t)}};function pd(e,t){e.style.display=t?e[Rm]:"none",e[iV]=!t}const o5=Symbol(""),a5=/(^|;)\s*display\s*:/;function l5(e,t,n){const i=e.style,r=Dn(n);let s=!1;if(n&&!r){if(t)if(Dn(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Zv(i,a,"")}else for(const o in t)n[o]==null&&Zv(i,o,"");for(const o in n)o==="display"&&(s=!0),Zv(i,o,n[o])}else if(r){if(t!==n){const o=i[o5];o&&(n+=";"+o),i.cssText=n,s=a5.test(n)}}else t&&e.removeAttribute("style");Rm in e&&(e[Rm]=s?i.display:"",e[iV]&&(i.display="none"))}const dT=/\s*!important$/;function Zv(e,t,n){if(rt(n))n.forEach(i=>Zv(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=u5(e,t);dT.test(n)?e.setProperty(Ia(i),n.replace(dT,""),"important"):e[i]=n}}const fT=["Webkit","Moz","ms"],gy={};function u5(e,t){const n=gy[t];if(n)return n;let i=lr(t);if(i!=="filter"&&i in e)return gy[t]=i;i=Fs(i);for(let r=0;r<fT.length;r++){const s=fT[r]+i;if(s in e)return gy[t]=s}return t}const hT="http://www.w3.org/1999/xlink";function vT(e,t,n,i,r,s=y3(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hT,t.slice(6,t.length)):e.setAttributeNS(hT,t,n):n==null||s&&!BR(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ta(n)?String(n):n)}function c5(e,t,n,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?QO(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=BR(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Pu(e,t,n,i){e.addEventListener(t,n,i)}function d5(e,t,n,i){e.removeEventListener(t,n,i)}const mT=Symbol("_vei");function f5(e,t,n,i,r=null){const s=e[mT]||(e[mT]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=h5(t);if(i){const u=s[t]=g5(i,r);Pu(e,a,u,l)}else o&&(d5(e,a,o,l),s[t]=void 0)}}const gT=/(?:Once|Passive|Capture)$/;function h5(e){let t;if(gT.test(e)){t={};let i;for(;i=e.match(gT);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ia(e.slice(2)),t]}let py=0;const v5=Promise.resolve(),m5=()=>py||(v5.then(()=>py=0),py=Date.now());function g5(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;rs(p5(i,n.value),t,5,[i])};return n.value=e,n.attached=m5(),n}function p5(e,t){if(rt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const pT=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_5=(e,t,n,i,r,s)=>{const o=r==="svg";t==="class"?s5(e,i,o):t==="style"?l5(e,n,i):Zg(t)?fS(t)||f5(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):y5(e,t,i,o))?(c5(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&vT(e,t,i,o,s,t!=="value")):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),vT(e,t,i,o))};function y5(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&pT(t)&&ht(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return pT(t)&&Dn(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!Dn(n)))}const rV=new WeakMap,sV=new WeakMap,Om=Symbol("_moveCb"),_T=Symbol("_enterCb"),b5=e=>(delete e.props.mode,e),w5=b5({name:"TransitionGroup",props:zn({},ZO,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Gl(),i=_O();let r,s;return PS(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!k5(r[0].el,n.vnode.el,o))return;r.forEach(S5),r.forEach(E5);const a=r.filter(C5);nV(),a.forEach(l=>{const u=l.el,d=u.style;Zs(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const c=u[Om]=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",c),u[Om]=null,zo(u,o))};u.addEventListener("transitionend",c)})}),()=>{const o=Ge(e),a=eV(o);let l=o.tag||Ie;if(r=[],s)for(let u=0;u<s.length;u++){const d=s[u];d.el&&d.el instanceof Element&&(r.push(d),kl(d,mf(d,a,i,n)),rV.set(d,d.el.getBoundingClientRect()))}s=t.default?TS(t.default()):[];for(let u=0;u<s.length;u++){const d=s[u];d.key!=null&&kl(d,mf(d,a,i,n))}return h(l,null,s)}}}),FS=w5;function S5(e){const t=e.el;t[Om]&&t[Om](),t[_T]&&t[_T]()}function E5(e){sV.set(e,e.el.getBoundingClientRect())}function C5(e){const t=rV.get(e),n=sV.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function k5(e,t,n){const i=e.cloneNode(),r=e[ic];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:o}=tV(i);return s.removeChild(i),o}const yT=e=>{const t=e.props["onUpdate:modelValue"]||!1;return rt(t)?n=>Xv(t,n):t};function T5(e){e.target.composing=!0}function bT(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _y=Symbol("_assign"),I5={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[_y]=yT(r);const s=i||r.props&&r.props.type==="number";Pu(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=yb(a)),e[_y](a)}),n&&Pu(e,"change",()=>{e.value=e.value.trim()}),t||(Pu(e,"compositionstart",T5),Pu(e,"compositionend",bT),Pu(e,"change",bT))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(e[_y]=yT(o),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?yb(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===l)||(e.value=l))}},A5=["ctrl","shift","alt","meta"],P5={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>A5.some(n=>e[`${n}Key`]&&!t.includes(n))},Il=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=P5[t[o]];if(a&&a(r,t))return}return e(r,...s)})},x5=zn({patchProp:_5},t5);let wT;function oV(){return wT||(wT=Ij(x5))}const aV=(...e)=>{oV().render(...e)},lV=(...e)=>{const t=oV().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=R5(i);if(!r)return;const s=t._component;!ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,D5(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function D5(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function R5(e){return Dn(e)?document.querySelector(e):e}var O5=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const V5=Symbol();var ST;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ST||(ST={}));function N5(){const e=uh(!0),t=e.run(()=>z({}));let n=[],i=[];const r=SS({install(s){r._a=s,s.provide(V5,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!O5?i.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const hh={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},rc={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Zi={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},M5={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},uV={dangerouslyHTMLString:!1,multiple:!0,position:hh.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},L5={rtl:!1,newestOnTop:!1,toastClassName:""},cV={...uV,...L5};({...uV,type:Zi.DEFAULT});var Yt=(e=>(e[e.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",e[e.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",e.CSS_NAMESPACE="Toastify",e))(Yt||{}),Db=(e=>(e.ENTRANCE_ANIMATION_END="d",e))(Db||{});const F5={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},$5={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},B5={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},U5={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},ET="Toastify--animate Toastify__none-enter";function dV(e,t=!1){var n;let i=F5;if(!e||typeof e=="string")switch(e){case"flip":i=U5;break;case"zoom":i=B5;break;case"slide":i=$5;break}else i=e;if(t)i.enter=ET;else if(i.enter===ET){const r=(n=i.exit.split("__")[1])==null?void 0:n.split("-")[0];i.enter=`Toastify--animate Toastify__${r}-enter`}return i}function j5(e){return e.containerId||String(e.position)}const vp="will-unmount";function H5(e=hh.TOP_RIGHT){return!!document.querySelector(`.${Yt.CSS_NAMESPACE}__toast-container--${e}`)}function W5(e=hh.TOP_RIGHT){return`${Yt.CSS_NAMESPACE}__toast-container--${e}`}function z5(e,t,n=!1){const i=[`${Yt.CSS_NAMESPACE}__toast-container`,`${Yt.CSS_NAMESPACE}__toast-container--${e}`,n?`${Yt.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return Gu(t)?t({position:e,rtl:n,defaultClassName:i}):`${i} ${t||""}`}function G5(e){var t;const{position:n,containerClassName:i,rtl:r=!1,style:s={}}=e,o=Yt.CSS_NAMESPACE,a=W5(n),l=document.querySelector(`.${o}`),u=document.querySelector(`.${a}`),d=!!u&&!((t=u.className)!=null&&t.includes(vp)),c=l||document.createElement("div"),f=document.createElement("div");f.className=z5(n,i,r),f.dataset.testid=`${Yt.CSS_NAMESPACE}__toast-container--${n}`,f.id=j5(e);for(const v in s)if(Object.prototype.hasOwnProperty.call(s,v)){const g=s[v];f.style[v]=g}return l||(c.className=Yt.CSS_NAMESPACE,document.body.appendChild(c)),d||c.appendChild(f),f}function Rb(e){var t,n,i;const r=typeof e=="string"?e:((t=e.currentTarget)==null?void 0:t.id)||((n=e.target)==null?void 0:n.id),s=document.getElementById(r);s&&s.removeEventListener("animationend",Rb,!1);try{pf[r].unmount(),(i=document.getElementById(r))==null||i.remove(),delete pf[r],delete gi[r]}catch{}}const pf=cn({});function q5(e,t){const n=document.getElementById(String(t));n&&(pf[n.id]=e)}function Ob(e,t=!0){const n=String(e);if(!pf[n])return;const i=document.getElementById(n);i&&i.classList.add(vp),t?(K5(e),i&&i.addEventListener("animationend",Rb,!1)):Rb(n),Rs.items=Rs.items.filter(r=>r.containerId!==e)}function Y5(e){for(const t in pf)Ob(t,e);Rs.items=[]}function fV(e,t){const n=document.getElementById(e.toastId);if(n){let i=e;i={...i,...dV(i.transition)};const r=i.appendPosition?`${i.exit}--${i.position}`:i.exit;n.className+=` ${r}`,t&&t(n)}}function K5(e){for(const t in gi)if(t===e)for(const n of gi[t]||[])fV(n)}function X5(e){const t=sc().find(n=>n.toastId===e);return t==null?void 0:t.containerId}function $S(e){return document.getElementById(e)}function Q5(e){const t=$S(e.containerId);return t&&t.classList.contains(vp)}function CT(e){var t;const n=Tl(e.content)?Ge(e.content.props):null;return n??Ge((t=e.data)!=null?t:{})}function J5(e){return e?Rs.items.filter(t=>t.containerId===e).length>0:Rs.items.length>0}function Z5(){if(Rs.items.length>0){const e=Rs.items.shift();em(e==null?void 0:e.toastContent,e==null?void 0:e.toastProps)}}const gi=cn({}),Rs=cn({items:[]});function sc(){const e=Ge(gi);return Object.values(e).reduce((t,n)=>[...t,...n],[])}function eH(e){return sc().find(t=>t.toastId===e)}function em(e,t={}){if(Q5(t)){const n=$S(t.containerId);n&&n.addEventListener("animationend",Vb.bind(null,e,t),!1)}else Vb(e,t)}function Vb(e,t={}){const n=$S(t.containerId);n&&n.removeEventListener("animationend",Vb.bind(null,e,t),!1);const i=gi[t.containerId]||[],r=i.length>0;if(!r&&!H5(t.position)){const s=G5(t),o=lV(yH,t);o.mount(s),q5(o,s.id)}r&&!t.updateId&&(t.position=i[0].position),ot(()=>{t.updateId?mr.update(t):mr.add(e,t)})}const mr={add(e,t){const{containerId:n=""}=t;n&&(gi[n]=gi[n]||[],gi[n].find(i=>i.toastId===t.toastId)||setTimeout(()=>{var i,r;t.newestOnTop?(i=gi[n])==null||i.unshift(t):(r=gi[n])==null||r.push(t),t.onOpen&&t.onOpen(CT(t))},t.delay||0))},remove(e){if(e){const t=X5(e);if(t){const n=gi[t];let i=n.find(r=>r.toastId===e);gi[t]=n.filter(r=>r.toastId!==e),!gi[t].length&&!J5(t)&&Ob(t,!1),Z5(),ot(()=>{i!=null&&i.onClose&&(i.onClose(CT(i)),i=void 0)})}}},update(e={}){const{containerId:t=""}=e;if(t&&e.updateId){gi[t]=gi[t]||[];const n=gi[t].find(s=>s.toastId===e.toastId),i=(n==null?void 0:n.position)!==e.position||(n==null?void 0:n.transition)!==e.transition,r={...e,disabledEnterTransition:!i,updateId:void 0};mr.dismissForce(e==null?void 0:e.toastId),setTimeout(()=>{Xe(r.content,r)},e.delay||0)}},clear(e,t=!0){e?Ob(e,t):Y5(t)},dismissCallback(e){var t;const n=(t=e.currentTarget)==null?void 0:t.id,i=document.getElementById(n);i&&(i.removeEventListener("animationend",mr.dismissCallback,!1),setTimeout(()=>{mr.remove(n)}))},dismiss(e){if(e){const t=sc();for(const n of t)if(n.toastId===e){fV(n,i=>{i.addEventListener("animationend",mr.dismissCallback,!1)});break}}},dismissForce(e){if(e){const t=sc();for(const n of t)if(n.toastId===e){const i=document.getElementById(e);i&&(i.remove(),i.removeEventListener("animationend",mr.dismissCallback,!1),mr.remove(e));break}}}},hV=cn({}),Vm=cn({});function vV(){return Math.random().toString(36).substring(2,9)}function tH(e){return typeof e=="number"&&!isNaN(e)}function Nb(e){return typeof e=="string"}function Gu(e){return typeof e=="function"}function mp(...e){return J(...e)}function tm(e){return typeof e=="object"&&(!!(e!=null&&e.render)||!!(e!=null&&e.setup)||typeof(e==null?void 0:e.type)=="object")}function nH(e={}){hV[`${Yt.CSS_NAMESPACE}-default-options`]=e}function iH(){return hV[`${Yt.CSS_NAMESPACE}-default-options`]||cV}function rH(){return document.documentElement.classList.contains("dark")?"dark":"light"}var nm=(e=>(e[e.Enter=0]="Enter",e[e.Exit=1]="Exit",e))(nm||{});const mV={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:hh.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:rc.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Zi.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},sH={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Zi.DEFAULT},theme:{type:String,required:!1,default:rc.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},oH=Tt({name:"ProgressBar",props:sH,setup(e,{attrs:t}){const n=z(),i=I(()=>e.hide?"true":"false"),r=I(()=>({...t.style||{},animationDuration:`${e.autoClose===!0?5e3:e.autoClose}ms`,animationPlayState:e.isRunning?"running":"paused",opacity:e.hide||e.autoClose===!1?0:1,transform:e.controlledProgress?`scaleX(${e.progress})`:"none"})),s=I(()=>[`${Yt.CSS_NAMESPACE}__progress-bar`,e.controlledProgress?`${Yt.CSS_NAMESPACE}__progress-bar--controlled`:`${Yt.CSS_NAMESPACE}__progress-bar--animated`,`${Yt.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,`${Yt.CSS_NAMESPACE}__progress-bar--${e.type}`,e.rtl?`${Yt.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=I(()=>`${s.value} ${(t==null?void 0:t.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{e.isIn&&e.closeToast&&e.autoClose!==!1&&(e.closeToast(),a())},u=I(()=>e.controlledProgress?null:l),d=I(()=>e.controlledProgress?l:null);return rn(()=>{n.value&&(a(),n.value.onanimationend=u.value,n.value.ontransitionend=d.value)}),()=>h("div",{ref:n,role:"progressbar","aria-hidden":i.value,"aria-label":"notification timer",class:o.value,style:r.value},null)}}),aH=Tt({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:rc.AUTO},type:{type:String,required:!1,default:rc.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(e){return()=>h("button",{class:`${Yt.CSS_NAMESPACE}__close-button ${Yt.CSS_NAMESPACE}__close-button--${e.theme}`,type:"button",onClick:t=>{t.stopPropagation(),e.closeToast&&e.closeToast(t)},"aria-label":e.ariaLabel},[h("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[h("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),gp=({theme:e,type:t,path:n,...i})=>h("svg",J({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`},i),[h("path",{d:n},null)]);function lH(e){return h(gp,J(e,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function uH(e){return h(gp,J(e,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function cH(e){return h(gp,J(e,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function dH(e){return h(gp,J(e,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function fH(){return h("div",{class:`${Yt.CSS_NAMESPACE}__spinner`},null)}const Mb={info:uH,warning:lH,success:cH,error:dH,spinner:fH},hH=e=>e in Mb;function vH({theme:e,type:t,isLoading:n,icon:i}){let r;const s={theme:e,type:t};return n?r=Mb.spinner():i===!1?r=void 0:tm(i)?r=Ge(i):Gu(i)?r=i(s):Tl(i)?r=Ds(i,s):Nb(i)||tH(i)?r=i:hH(t)&&(r=Mb[t](s)),r}const mH=()=>{};function gH(e,t,n=Yt.COLLAPSE_DURATION){const{scrollHeight:i,style:r}=e,s=n;requestAnimationFrame(()=>{r.minHeight="initial",r.height=i+"px",r.transition=`all ${s}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(t,s)})})}function pH(e){const t=z(!1),n=z(!1),i=z(!1),r=z(nm.Enter),s=cn({...e,appendPosition:e.appendPosition||!1,collapse:typeof e.collapse>"u"?!0:e.collapse,collapseDuration:e.collapseDuration||Yt.COLLAPSE_DURATION}),o=s.done||mH,a=I(()=>s.appendPosition?`${s.enter}--${s.position}`:s.enter),l=I(()=>s.appendPosition?`${s.exit}--${s.position}`:s.exit),u=I(()=>e.pauseOnHover?{onMouseenter:_,onMouseleave:p}:{});function d(){const b=a.value.split(" ");f().addEventListener(Db.ENTRANCE_ANIMATION_END,p,{once:!0});const E=R=>{const O=f();R.target===O&&(O.dispatchEvent(new Event(Db.ENTRANCE_ANIMATION_END)),O.removeEventListener("animationend",E),O.removeEventListener("animationcancel",E),r.value===nm.Enter&&R.type!=="animationcancel"&&O.classList.remove(...b))},k=()=>{const R=f();R.classList.add(...b),R.addEventListener("animationend",E),R.addEventListener("animationcancel",E)};e.pauseOnFocusLoss&&v(),k()}function c(){if(!f())return;const b=()=>{const k=f();k.removeEventListener("animationend",b),s.collapse?gH(k,o,s.collapseDuration):o()},E=()=>{const k=f();r.value=nm.Exit,k&&(k.className+=` ${l.value}`,k.addEventListener("animationend",b))};n.value||(i.value?b():setTimeout(E))}function f(){return e.toastRef.value}function v(){document.hasFocus()||_(),window.addEventListener("focus",p),window.addEventListener("blur",_)}function g(){window.removeEventListener("focus",p),window.removeEventListener("blur",_)}function p(){(!e.loading.value||e.isLoading===void 0)&&(t.value=!0)}function _(){t.value=!1}function y(b){b&&(b.stopPropagation(),b.preventDefault()),n.value=!1}return rn(c),rn(()=>{const b=sc();n.value=b.findIndex(E=>E.toastId===s.toastId)>-1}),rn(()=>{e.isLoading!==void 0&&(e.loading.value?_():p())}),yt(d),Ir(()=>{e.pauseOnFocusLoss&&g()}),{isIn:n,isRunning:t,hideToast:y,eventHandlers:u}}const _H=Tt({name:"ToastItem",inheritAttrs:!1,props:mV,setup(e){const t=z(),n=I(()=>!!e.isLoading),i=I(()=>e.progress!==void 0&&e.progress!==null),r=I(()=>vH(e)),s=I(()=>[`${Yt.CSS_NAMESPACE}__toast`,`${Yt.CSS_NAMESPACE}__toast-theme--${e.theme}`,`${Yt.CSS_NAMESPACE}__toast--${e.type}`,e.rtl?`${Yt.CSS_NAMESPACE}__toast--rtl`:void 0,e.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:l,eventHandlers:u}=pH({toastRef:t,loading:n,done:()=>{mr.remove(e.toastId)},...dV(e.transition,e.disabledEnterTransition),...e});return()=>h("div",J({id:e.toastId,class:s.value,style:e.toastStyle||{},ref:t,"data-testid":`toast-item-${e.toastId}`,onClick:d=>{e.closeOnClick&&l(),e.onClick&&e.onClick(d)}},u.value),[h("div",{role:e.role,"data-testid":"toast-body",class:`${Yt.CSS_NAMESPACE}__toast-body ${e.bodyClassName||""}`},[r.value!=null&&h("div",{"data-testid":`toast-icon-${e.type}`,class:[`${Yt.CSS_NAMESPACE}__toast-icon`,e.isLoading?"":`${Yt.CSS_NAMESPACE}--animate-icon ${Yt.CSS_NAMESPACE}__zoom-enter`].join(" ")},[tm(r.value)?ni(Ge(r.value),{theme:e.theme,type:e.type}):Gu(r.value)?r.value({theme:e.theme,type:e.type}):r.value]),h("div",{"data-testid":"toast-content"},[tm(e.content)?ni(Ge(e.content),{toastProps:Ge(e),closeToast:l,data:e.data}):Gu(e.content)?e.content({toastProps:Ge(e),closeToast:l,data:e.data}):e.dangerouslyHTMLString?ni("div",{innerHTML:e.content}):e.content])]),(e.closeButton===void 0||e.closeButton===!0)&&h(aH,{theme:e.theme,closeToast:d=>{d.stopPropagation(),d.preventDefault(),l()}},null),tm(e.closeButton)?ni(Ge(e.closeButton),{closeToast:l,type:e.type,theme:e.theme}):Gu(e.closeButton)?e.closeButton({closeToast:l,type:e.type,theme:e.theme}):null,h(oH,{className:e.progressClassName,style:e.progressStyle,rtl:e.rtl,theme:e.theme,isIn:a.value,type:e.type,hide:e.hideProgressBar,isRunning:o.value,autoClose:e.autoClose,controlledProgress:i.value,progress:e.progress,closeToast:e.isLoading?void 0:l},null)])}});let zd=0;function gV(){typeof window>"u"||(zd&&window.cancelAnimationFrame(zd),zd=window.requestAnimationFrame(gV),Vm.lastUrl!==window.location.href&&(Vm.lastUrl=window.location.href,mr.clear()))}const yH=Tt({name:"ToastifyContainer",inheritAttrs:!1,props:mV,setup(e){const t=I(()=>e.containerId),n=I(()=>gi[t.value]||[]),i=I(()=>n.value.filter(r=>r.position===e.position));return yt(()=>{typeof window<"u"&&e.clearOnUrlChange&&window.requestAnimationFrame(gV)}),Ir(()=>{typeof window<"u"&&zd&&(window.cancelAnimationFrame(zd),Vm.lastUrl="")}),()=>h(Ie,null,[i.value.map(r=>{const{toastId:s=""}=r;return h(_H,J({key:s},r),null)})])}});let yy=!1;function pV(){const e=[];return sc().forEach(t=>{const n=document.getElementById(t.containerId);n&&!n.classList.contains(vp)&&e.push(t)}),e}function bH(e){const t=pV().length,n=e??0;return n>0&&t+Rs.items.length>=n}function wH(e){bH(e.limit)&&!e.updateId&&Rs.items.push({toastId:e.toastId,containerId:e.containerId,toastContent:e.content,toastProps:e})}function Da(e,t,n={}){if(yy)return;n=mp(iH(),{type:t},Ge(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=vV()),n={...n,content:e,containerId:n.containerId||String(n.position)};const i=Number(n==null?void 0:n.progress);return i<0&&(n.progress=0),i>1&&(n.progress=1),n.theme==="auto"&&(n.theme=rH()),wH(n),Vm.lastUrl=window.location.href,n.multiple?Rs.items.length?n.updateId&&em(e,n):em(e,n):(yy=!0,Xe.clearAll(void 0,!1),setTimeout(()=>{em(e,n)},0),setTimeout(()=>{yy=!1},390)),n.toastId}const Xe=(e,t)=>Da(e,Zi.DEFAULT,t);Xe.info=(e,t)=>Da(e,Zi.DEFAULT,{...t,type:Zi.INFO});Xe.error=(e,t)=>Da(e,Zi.DEFAULT,{...t,type:Zi.ERROR});Xe.warning=(e,t)=>Da(e,Zi.DEFAULT,{...t,type:Zi.WARNING});Xe.warn=Xe.warning;Xe.success=(e,t)=>Da(e,Zi.DEFAULT,{...t,type:Zi.SUCCESS});Xe.loading=(e,t)=>Da(e,Zi.DEFAULT,mp(t,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));Xe.dark=(e,t)=>Da(e,Zi.DEFAULT,mp(t,{theme:rc.DARK}));Xe.remove=e=>{e?mr.dismiss(e):mr.clear()};Xe.clearAll=(e,t)=>{ot(()=>{mr.clear(e,t)})};Xe.isActive=e=>{let t=!1;return t=pV().findIndex(n=>n.toastId===e)>-1,t};Xe.update=(e,t={})=>{setTimeout(()=>{const n=eH(e);if(n){const i=Ge(n),{content:r}=i,s={...i,...t,toastId:t.toastId||e,updateId:vV()},o=s.render||r;delete s.render,Da(o,s.type,s)}},0)};Xe.done=e=>{Xe.update(e,{isLoading:!1,progress:1})};Xe.promise=SH;function SH(e,{pending:t,error:n,success:i},r){var s,o,a;let l;const u={...r||{},autoClose:!1};t&&(l=Nb(t)?Xe.loading(t,u):Xe.loading(t.render,{...u,...t}));const d={autoClose:(s=r==null?void 0:r.autoClose)!=null?s:!0,closeOnClick:(o=r==null?void 0:r.closeOnClick)!=null?o:!0,closeButton:(a=r==null?void 0:r.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},c=(v,g,p)=>{if(g==null){Xe.remove(l);return}const _={type:v,...d,...r,data:p},y=Nb(g)?{render:g}:g;return l?Xe.update(l,{..._,...y,isLoading:!1}):Xe(y.render,{..._,...y,isLoading:!1}),p},f=Gu(e)?e():e;return f.then(v=>{c("success",i,v)}).catch(v=>{c("error",n,v)}),f}Xe.POSITION=hh;Xe.THEME=rc;Xe.TYPE=Zi;Xe.TRANSITIONS=M5;const _V={install(e,t={}){EH(t)}};typeof window<"u"&&(window.Vue3Toastify=_V);function EH(e={}){const t=mp(cV,e);nH(t)}var kT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=function(e,t){if(!e)throw Dc(t)},Dc=function(e){return new Error("Firebase Database ("+yV.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},CH=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(f=64)),i.push(n[d],n[c],n[f],n[v])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(bV(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):CH(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const c=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||u==null||c==null)throw new kH;const f=s<<2|a>>4;if(i.push(f),u!==64){const v=a<<4&240|u>>2;if(i.push(v),c!==64){const g=u<<6&192|c;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class kH extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wV=function(e){const t=bV(e);return pp.encodeByteArray(t,!0)},Nm=function(e){return wV(e).replace(/\./g,"")},Mm=function(e){try{return pp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TH(e){return SV(void 0,e)}function SV(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!IH(n)||(e[n]=SV(e[n],t[n]));return e}function IH(e){return e!=="__proto__"}/**
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
 */function AH(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PH=()=>AH().__FIREBASE_DEFAULTS__,xH=()=>{if(typeof process>"u"||typeof kT>"u")return;const e=kT.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},DH=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mm(e[1]);return t&&JSON.parse(t)},_p=()=>{try{return PH()||xH()||DH()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},EV=e=>{var t,n;return(n=(t=_p())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},RH=e=>{const t=EV(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},CV=()=>{var e;return(e=_p())===null||e===void 0?void 0:e.config},kV=e=>{var t;return(t=_p())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function OH(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Nm(JSON.stringify(n)),Nm(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ji())}function VH(){var e;const t=(e=_p())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NH(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MH(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function TV(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LH(){const e=ji();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function IV(){return yV.NODE_ADMIN===!0}function FH(){return!VH()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AV(){try{return typeof indexedDB=="object"}catch{return!1}}function $H(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BH="FirebaseError";class $s extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=BH,Object.setPrototypeOf(this,$s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rc.prototype.create)}}class Rc{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?UH(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $s(r,a,i)}}function UH(e,t){return e.replace(jH,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const jH=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e){return JSON.parse(e)}function yi(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=yf(Mm(s[0])||""),n=yf(Mm(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:r}},HH=function(e){const t=PV(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},WH=function(e){const t=PV(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function oc(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Lb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Lm(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Fm(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(TT(s)&&TT(o)){if(!Fm(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function TT(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Id(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function Ad(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zH{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let c=0;c<16;c++)i[c]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)i[c]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let c=16;c<80;c++){const f=i[c-3]^i[c-8]^i[c-14]^i[c-16];i[c]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(r<<5|r>>>27)+u+l+d+i[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<n;)if(s[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=t[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)t[i]=this.chain_[r]>>s&255,++i;return t}}function GH(e,t){const n=new qH(e,t);return n.subscribe.bind(n)}class qH{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");YH(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=by),r.error===void 0&&(r.error=by),r.complete===void 0&&(r.complete=by);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YH(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function by(){}function KH(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XH=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,Ue(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},yp=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Gn(e){return e&&e._delegate?e._delegate:e}class ss{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qa="[DEFAULT]";/**
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
 */class QH{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new _f;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ZH(t))try{this.getOrInitializeService({instanceIdentifier:Qa})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Qa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qa){return this.instances.has(t)}getOptions(t=Qa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:JH(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Qa){return this.component?this.component.multipleInstances?t:Qa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JH(e){return e===Qa?void 0:e}function ZH(e){return e.instantiationMode==="EAGER"}/**
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
 */class e9{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new QH(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(It||(It={}));const t9={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},n9=It.INFO,i9={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},r9=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=i9[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vh{constructor(t){this.name=t,this._logLevel=n9,this._logHandler=r9,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in It))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?t9[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...t),this._logHandler(this,It.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...t),this._logHandler(this,It.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,It.INFO,...t),this._logHandler(this,It.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,It.WARN,...t),this._logHandler(this,It.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...t),this._logHandler(this,It.ERROR,...t)}}const s9=(e,t)=>t.some(n=>e instanceof n);let IT,AT;function o9(){return IT||(IT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a9(){return AT||(AT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xV=new WeakMap,Fb=new WeakMap,DV=new WeakMap,wy=new WeakMap,US=new WeakMap;function l9(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(aa(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xV.set(n,e)}).catch(()=>{}),US.set(t,e),t}function u9(e){if(Fb.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Fb.set(e,t)}let $b={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fb.get(e);if(t==="objectStoreNames")return e.objectStoreNames||DV.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return aa(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function c9(e){$b=e($b)}function d9(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Sy(this),t,...n);return DV.set(i,t.sort?t.sort():[t]),aa(i)}:a9().includes(e)?function(...t){return e.apply(Sy(this),t),aa(xV.get(this))}:function(...t){return aa(e.apply(Sy(this),t))}}function f9(e){return typeof e=="function"?d9(e):(e instanceof IDBTransaction&&u9(e),s9(e,o9())?new Proxy(e,$b):e)}function aa(e){if(e instanceof IDBRequest)return l9(e);if(wy.has(e))return wy.get(e);const t=f9(e);return t!==e&&(wy.set(e,t),US.set(t,e)),t}const Sy=e=>US.get(e);function h9(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=aa(o);return i&&o.addEventListener("upgradeneeded",l=>{i(aa(o.result),l.oldVersion,l.newVersion,aa(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const v9=["get","getKey","getAll","getAllKeys","count"],m9=["put","add","delete","clear"],Ey=new Map;function PT(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ey.get(t))return Ey.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=m9.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||v9.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return Ey.set(t,s),s}c9(e=>({...e,get:(t,n,i)=>PT(t,n)||e.get(t,n,i),has:(t,n)=>!!PT(t,n)||e.has(t,n)}));/**
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
 */class g9{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p9(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function p9(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bb="@firebase/app",xT="0.10.11";/**
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
 */const yo=new vh("@firebase/app"),_9="@firebase/app-compat",y9="@firebase/analytics-compat",b9="@firebase/analytics",w9="@firebase/app-check-compat",S9="@firebase/app-check",E9="@firebase/auth",C9="@firebase/auth-compat",k9="@firebase/database",T9="@firebase/database-compat",I9="@firebase/functions",A9="@firebase/functions-compat",P9="@firebase/installations",x9="@firebase/installations-compat",D9="@firebase/messaging",R9="@firebase/messaging-compat",O9="@firebase/performance",V9="@firebase/performance-compat",N9="@firebase/remote-config",M9="@firebase/remote-config-compat",L9="@firebase/storage",F9="@firebase/storage-compat",$9="@firebase/firestore",B9="@firebase/vertexai-preview",U9="@firebase/firestore-compat",j9="firebase",H9="10.13.2";/**
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
 */const Ub="[DEFAULT]",W9={[Bb]:"fire-core",[_9]:"fire-core-compat",[b9]:"fire-analytics",[y9]:"fire-analytics-compat",[S9]:"fire-app-check",[w9]:"fire-app-check-compat",[E9]:"fire-auth",[C9]:"fire-auth-compat",[k9]:"fire-rtdb",[T9]:"fire-rtdb-compat",[I9]:"fire-fn",[A9]:"fire-fn-compat",[P9]:"fire-iid",[x9]:"fire-iid-compat",[D9]:"fire-fcm",[R9]:"fire-fcm-compat",[O9]:"fire-perf",[V9]:"fire-perf-compat",[N9]:"fire-rc",[M9]:"fire-rc-compat",[L9]:"fire-gcs",[F9]:"fire-gcs-compat",[$9]:"fire-fst",[U9]:"fire-fst-compat",[B9]:"fire-vertex","fire-js":"fire-js",[j9]:"fire-js-all"};/**
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
 */const bf=new Map,z9=new Map,jb=new Map;function DT(e,t){try{e.container.addComponent(t)}catch(n){yo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Os(e){const t=e.name;if(jb.has(t))return yo.debug(`There were multiple attempts to register component ${t}.`),!1;jb.set(t,e);for(const n of bf.values())DT(n,e);for(const n of z9.values())DT(n,e);return!0}function jS(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Kr(e){return e.settings!==void 0}/**
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
 */const G9={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},la=new Rc("app","Firebase",G9);/**
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
 */class q9{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw la.create("app-deleted",{appName:this._name})}}/**
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
 */const Ra=H9;function RV(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Ub,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw la.create("bad-app-name",{appName:String(r)});if(n||(n=CV()),!n)throw la.create("no-options");const s=bf.get(r);if(s){if(Fm(n,s.options)&&Fm(i,s.config))return s;throw la.create("duplicate-app",{appName:r})}const o=new e9(r);for(const l of jb.values())o.addComponent(l);const a=new q9(n,i,o);return bf.set(r,a),a}function HS(e=Ub){const t=bf.get(e);if(!t&&e===Ub&&CV())return RV();if(!t)throw la.create("no-app",{appName:e});return t}function Y9(){return Array.from(bf.values())}function wr(e,t,n){var i;let r=(i=W9[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yo.warn(a.join(" "));return}Os(new ss(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const K9="firebase-heartbeat-database",X9=1,wf="firebase-heartbeat-store";let Cy=null;function OV(){return Cy||(Cy=h9(K9,X9,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(wf)}catch(n){console.warn(n)}}}}).catch(e=>{throw la.create("idb-open",{originalErrorMessage:e.message})})),Cy}async function Q9(e){try{const n=(await OV()).transaction(wf),i=await n.objectStore(wf).get(VV(e));return await n.done,i}catch(t){if(t instanceof $s)yo.warn(t.message);else{const n=la.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});yo.warn(n.message)}}}async function RT(e,t){try{const i=(await OV()).transaction(wf,"readwrite");await i.objectStore(wf).put(t,VV(e)),await i.done}catch(n){if(n instanceof $s)yo.warn(n.message);else{const i=la.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yo.warn(i.message)}}}function VV(e){return`${e.name}!${e.options.appId}`}/**
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
 */const J9=1024,Z9=30*24*60*60*1e3;class eW{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nW(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=OT();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Z9}),this._storage.overwrite(this._heartbeatsCache))}catch(i){yo.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=OT(),{heartbeatsToSend:i,unsentEntries:r}=tW(this._heartbeatsCache.heartbeats),s=Nm(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yo.warn(n),""}}}function OT(){return new Date().toISOString().substring(0,10)}function tW(e,t=J9){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),VT(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),VT(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class nW{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AV()?$H().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q9(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return RT(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return RT(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function VT(e){return Nm(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function iW(e){Os(new ss("platform-logger",t=>new g9(t),"PRIVATE")),Os(new ss("heartbeat",t=>new eW(t),"PRIVATE")),wr(Bb,xT,e),wr(Bb,xT,"esm2017"),wr("fire-js","")}iW("");function WS(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function NV(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rW=NV,MV=new Rc("auth","Firebase",NV());/**
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
 */const $m=new vh("@firebase/auth");function sW(e,...t){$m.logLevel<=It.WARN&&$m.warn(`Auth (${Ra}): ${e}`,...t)}function im(e,...t){$m.logLevel<=It.ERROR&&$m.error(`Auth (${Ra}): ${e}`,...t)}/**
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
 */function Br(e,...t){throw GS(e,...t)}function ts(e,...t){return GS(e,...t)}function zS(e,t,n){const i=Object.assign(Object.assign({},rW()),{[t]:n});return new Rc("auth","Firebase",i).create(t,{appName:e.name})}function vo(e){return zS(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oW(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&Br(e,"argument-error"),zS(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function GS(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return MV.create(e,...t)}function ct(e,t,...n){if(!e)throw GS(t,...n)}function ao(e){const t="INTERNAL ASSERTION FAILED: "+e;throw im(t),new Error(t)}function bo(e,t){e||ao(t)}/**
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
 */function Hb(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function aW(){return NT()==="http:"||NT()==="https:"}function NT(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function lW(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aW()||MH()||"connection"in navigator)?navigator.onLine:!0}function uW(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class mh{constructor(t,n){this.shortDelay=t,this.longDelay=n,bo(n>t,"Short delay should be less than long delay!"),this.isMobile=BS()||TV()}get(){return lW()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qS(e,t){bo(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class LV{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ao("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ao("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ao("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cW={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dW=new mh(3e4,6e4);function Do(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Bs(e,t,n,i,r={}){return FV(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=Oc(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return NH()||(u.referrerPolicy="no-referrer"),LV.fetch()($V(e,e.config.apiHost,n,a),u)})}async function FV(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},cW),t);try{const r=new hW(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _v(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _v(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _v(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw _v(e,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zS(e,d,u);Br(e,d)}}catch(r){if(r instanceof $s)throw r;Br(e,"network-request-failed",{message:String(r)})}}async function gh(e,t,n,i,r={}){const s=await Bs(e,t,n,i,r);return"mfaPendingCredential"in s&&Br(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $V(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?qS(e.config,r):`${e.config.apiScheme}://${r}`}function fW(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hW{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ts(this.auth,"network-request-failed")),dW.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _v(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ts(e,t,i);return r.customData._tokenResponse=n,r}function MT(e){return e!==void 0&&e.enterprise!==void 0}class vW{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return fW(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function mW(e,t){return Bs(e,"GET","/v2/recaptchaConfig",Do(e,t))}/**
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
 */async function gW(e,t){return Bs(e,"POST","/v1/accounts:delete",t)}async function BV(e,t){return Bs(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Gd(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function pW(e,t=!1){const n=Gn(e),i=await n.getIdToken(t),r=YS(i);ct(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Gd(ky(r.auth_time)),issuedAtTime:Gd(ky(r.iat)),expirationTime:Gd(ky(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ky(e){return Number(e)*1e3}function YS(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return im("JWT malformed, contained fewer than 3 sections"),null;try{const r=Mm(n);return r?JSON.parse(r):(im("Failed to decode base64 JWT payload"),null)}catch(r){return im("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function LT(e){const t=YS(e);return ct(t,"internal-error"),ct(typeof t.exp<"u","internal-error"),ct(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ac(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof $s&&_W(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function _W({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class yW{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wb{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gd(this.lastLoginAt),this.creationTime=Gd(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bm(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ac(e,BV(n,{idToken:i}));ct(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?UV(s.providerUserInfo):[],a=wW(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wb(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,c)}async function bW(e){const t=Gn(e);await Bm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wW(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function UV(e){return e.map(t=>{var{providerId:n}=t,i=WS(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function SW(e,t){const n=await FV(e,{},async()=>{const i=Oc({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=$V(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LV.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EW(e,t){return Bs(e,"POST","/v2/accounts:revokeToken",Do(e,t))}/**
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
 */class qu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ct(t.idToken,"internal-error"),ct(typeof t.idToken<"u","internal-error"),ct(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):LT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ct(t.length!==0,"internal-error");const n=LT(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ct(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await SW(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new qu;return i&&(ct(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(ct(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(ct(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qu,this.toJSON())}_performRefresh(){return ao("not implemented")}}/**
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
 */function Ho(e,t){ct(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class lo{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=WS(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yW(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ac(this,this.stsTokenManager.getToken(this.auth,t));return ct(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return pW(this,t)}reload(){return bW(this)}_assign(t){this!==t&&(ct(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new lo(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ct(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Bm(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kr(this.auth.app))return Promise.reject(vo(this.auth));const t=await this.getIdToken();return await ac(this,gW(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,l,u,d;const c=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,b=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:k,isAnonymous:R,providerData:O,stsTokenManager:D}=n;ct(E&&D,t,"internal-error");const S=qu.fromJSON(this.name,D);ct(typeof E=="string",t,"internal-error"),Ho(c,t.name),Ho(f,t.name),ct(typeof k=="boolean",t,"internal-error"),ct(typeof R=="boolean",t,"internal-error"),Ho(v,t.name),Ho(g,t.name),Ho(p,t.name),Ho(_,t.name),Ho(y,t.name),Ho(b,t.name);const w=new lo({uid:E,auth:t,email:f,emailVerified:k,displayName:c,isAnonymous:R,photoURL:g,phoneNumber:v,tenantId:p,stsTokenManager:S,createdAt:y,lastLoginAt:b});return O&&Array.isArray(O)&&(w.providerData=O.map(C=>Object.assign({},C))),_&&(w._redirectEventId=_),w}static async _fromIdTokenResponse(t,n,i=!1){const r=new qu;r.updateFromServerResponse(n);const s=new lo({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await Bm(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];ct(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?UV(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new qu;a.updateFromIdToken(i);const l=new lo({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Wb(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const FT=new Map;function uo(e){bo(e instanceof Function,"Expected a class definition");let t=FT.get(e);return t?(bo(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,FT.set(e,t),t)}/**
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
 */class jV{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}jV.type="NONE";const $T=jV;/**
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
 */function rm(e,t,n){return`firebase:${e}:${t}:${n}`}class Yu{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=rm(this.userKey,r.apiKey,s),this.fullPersistenceKey=rm("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?lo._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Yu(uo($T),t,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||uo($T);const o=rm(i,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=lo._fromJSON(t,d);u!==s&&(a=c),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yu(s,t,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yu(s,t,i))}}/**
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
 */function BT(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(GV(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(HV(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(YV(t))return"Blackberry";if(KV(t))return"Webos";if(WV(t))return"Safari";if((t.includes("chrome/")||zV(t))&&!t.includes("edge/"))return"Chrome";if(qV(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function HV(e=ji()){return/firefox\//i.test(e)}function WV(e=ji()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zV(e=ji()){return/crios\//i.test(e)}function GV(e=ji()){return/iemobile/i.test(e)}function qV(e=ji()){return/android/i.test(e)}function YV(e=ji()){return/blackberry/i.test(e)}function KV(e=ji()){return/webos/i.test(e)}function KS(e=ji()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function CW(e=ji()){var t;return KS(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function kW(){return LH()&&document.documentMode===10}function XV(e=ji()){return KS(e)||qV(e)||KV(e)||YV(e)||/windows phone/i.test(e)||GV(e)}/**
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
 */function QV(e,t=[]){let n;switch(e){case"Browser":n=BT(ji());break;case"Worker":n=`${BT(ji())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ra}/${i}`}/**
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
 */class TW{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function IW(e,t={}){return Bs(e,"GET","/v2/passwordPolicy",Do(e,t))}/**
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
 */const AW=6;class PW{constructor(t){var n,i,r,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AW,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class xW{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new UT(this),this.idTokenSubscription=new UT(this),this.beforeStateQueue=new TW(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MV,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=uo(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Yu.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await BV(this,{idToken:t}),i=await lo._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Kr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ct(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bm(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=uW()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Kr(this.app))return Promise.reject(vo(this));const n=t?Gn(t):null;return n&&ct(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ct(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Kr(this.app)?Promise.reject(vo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Kr(this.app)?Promise.reject(vo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(uo(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await IW(this),n=new PW(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Rc("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await EW(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&uo(t)||this._popupRedirectResolver;ct(n,this,"argument-error"),this.redirectPersistenceManager=await Yu.create(this,[uo(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ct(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ct(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=QV(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&sW(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ro(e){return Gn(e)}class UT{constructor(t){this.auth=t,this.observer=null,this.addObserver=GH(n=>this.observer=n)}get next(){return ct(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DW(e){bp=e}function JV(e){return bp.loadJS(e)}function RW(){return bp.recaptchaEnterpriseScript}function OW(){return bp.gapiScript}function VW(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const NW="recaptcha-enterprise",MW="NO_RECAPTCHA";class LW{constructor(t){this.type=NW,this.auth=Ro(t)}async verify(t="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mW(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vW(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;MT(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(MW)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&MT(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=RW();l.length!==0&&(l+=a),JV(l).then(()=>{r(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function jT(e,t,n,i=!1){const r=new LW(e);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Um(e,t,n,i){var r;if(!((r=e._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await jT(e,t,n,n==="getOobCode");return i(e,s)}else return i(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jT(e,t,n,n==="getOobCode");return i(e,o)}else return Promise.reject(s)})}/**
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
 */function ZV(e,t){const n=jS(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Fm(s,t??{}))return r;Br(r,"already-initialized")}return n.initialize({options:t})}function FW(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(uo);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function eN(e,t,n){const i=Ro(e);ct(i._canInitEmulator,i,"emulator-config-failed"),ct(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!1,s=tN(t),{host:o,port:a}=$W(t),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),BW()}function tN(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $W(e){const t=tN(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:HT(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:HT(o)}}}function HT(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function BW(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class XS{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ao("not implemented")}_getIdTokenResponse(t){return ao("not implemented")}_linkToIdToken(t,n){return ao("not implemented")}_getReauthenticationResolver(t){return ao("not implemented")}}async function UW(e,t){return Bs(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function jW(e,t){return gh(e,"POST","/v1/accounts:signInWithPassword",Do(e,t))}async function HW(e,t){return Bs(e,"POST","/v1/accounts:sendOobCode",Do(e,t))}async function WW(e,t){return HW(e,t)}/**
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
 */async function zW(e,t){return gh(e,"POST","/v1/accounts:signInWithEmailLink",Do(e,t))}async function GW(e,t){return gh(e,"POST","/v1/accounts:signInWithEmailLink",Do(e,t))}/**
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
 */class Sf extends XS{constructor(t,n,i,r=null){super("password",i),this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new Sf(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Sf(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Um(t,n,"signInWithPassword",jW);case"emailLink":return zW(t,{email:this._email,oobCode:this._password});default:Br(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Um(t,i,"signUpPassword",UW);case"emailLink":return GW(t,{idToken:n,email:this._email,oobCode:this._password});default:Br(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ku(e,t){return gh(e,"POST","/v1/accounts:signInWithIdp",Do(e,t))}/**
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
 */const qW="http://localhost";class Al extends XS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Al(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Br("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=WS(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Al(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ku(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Ku(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ku(t,n)}buildRequest(){const t={requestUri:qW,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Oc(n)}return t}}/**
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
 */function YW(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KW(e){const t=Id(Ad(e)).link,n=t?Id(Ad(t)).deep_link_id:null,i=Id(Ad(e)).deep_link_id;return(i?Id(Ad(i)).link:null)||i||n||t||e}class QS{constructor(t){var n,i,r,s,o,a;const l=Id(Ad(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(i=l.oobCode)!==null&&i!==void 0?i:null,c=YW((r=l.mode)!==null&&r!==void 0?r:null);ct(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=KW(t);try{return new QS(n)}catch{return null}}}/**
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
 */class Vc{constructor(){this.providerId=Vc.PROVIDER_ID}static credential(t,n){return Sf._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=QS.parseLink(n);return ct(i,"argument-error"),Sf._fromEmailAndCode(t,i.code,i.tenantId)}}Vc.PROVIDER_ID="password";Vc.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class JS{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ph extends JS{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jo extends ph{constructor(){super("facebook.com")}static credential(t){return Al._fromParams({providerId:Jo.PROVIDER_ID,signInMethod:Jo.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jo.credentialFromTaggedObject(t)}static credentialFromError(t){return Jo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jo.credential(t.oauthAccessToken)}catch{return null}}}Jo.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jo.PROVIDER_ID="facebook.com";/**
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
 */class io extends ph{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Al._fromParams({providerId:io.PROVIDER_ID,signInMethod:io.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return io.credentialFromTaggedObject(t)}static credentialFromError(t){return io.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return io.credential(n,i)}catch{return null}}}io.GOOGLE_SIGN_IN_METHOD="google.com";io.PROVIDER_ID="google.com";/**
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
 */class Zo extends ph{constructor(){super("github.com")}static credential(t){return Al._fromParams({providerId:Zo.PROVIDER_ID,signInMethod:Zo.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zo.credentialFromTaggedObject(t)}static credentialFromError(t){return Zo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zo.credential(t.oauthAccessToken)}catch{return null}}}Zo.GITHUB_SIGN_IN_METHOD="github.com";Zo.PROVIDER_ID="github.com";/**
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
 */class ea extends ph{constructor(){super("twitter.com")}static credential(t,n){return Al._fromParams({providerId:ea.PROVIDER_ID,signInMethod:ea.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ea.credentialFromTaggedObject(t)}static credentialFromError(t){return ea.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ea.credential(n,i)}catch{return null}}}ea.TWITTER_SIGN_IN_METHOD="twitter.com";ea.PROVIDER_ID="twitter.com";/**
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
 */async function XW(e,t){return gh(e,"POST","/v1/accounts:signUp",Do(e,t))}/**
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
 */class Pl{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await lo._fromIdTokenResponse(t,i,r),o=WT(i);return new Pl({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=WT(i);return new Pl({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function WT(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class jm extends $s{constructor(t,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,jm.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new jm(t,n,i,r)}}function nN(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jm._fromErrorAndOperation(e,s,t,i):s})}async function QW(e,t,n=!1){const i=await ac(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pl._forOperation(e,"link",i)}/**
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
 */async function JW(e,t,n=!1){const{auth:i}=e;if(Kr(i.app))return Promise.reject(vo(i));const r="reauthenticate";try{const s=await ac(e,nN(i,r,t,e),n);ct(s.idToken,i,"internal-error");const o=YS(s.idToken);ct(o,i,"internal-error");const{sub:a}=o;return ct(e.uid===a,i,"user-mismatch"),Pl._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Br(i,"user-mismatch"),s}}/**
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
 */async function iN(e,t,n=!1){if(Kr(e.app))return Promise.reject(vo(e));const i="signIn",r=await nN(e,i,t),s=await Pl._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function ZW(e,t){return iN(Ro(e),t)}/**
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
 */async function rN(e){const t=Ro(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ez(e,t,n){const i=Ro(e);await Um(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",WW)}async function tz(e,t,n){if(Kr(e.app))return Promise.reject(vo(e));const i=Ro(e),o=await Um(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XW).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&rN(e),l}),a=await Pl._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function nz(e,t,n){return Kr(e.app)?Promise.reject(vo(e)):ZW(Gn(e),Vc.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&rN(e),i})}/**
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
 */async function iz(e,t){return Bs(e,"POST","/v1/accounts:update",t)}/**
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
 */async function rz(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=Gn(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await ac(i,iz(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function sN(e,t,n,i){return Gn(e).onIdTokenChanged(t,n,i)}function sz(e,t,n){return Gn(e).beforeAuthStateChanged(t,n)}function oz(e){return Gn(e).signOut()}const Hm="__sak";/**
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
 */class oN{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hm,"1"),this.storage.removeItem(Hm),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const az=1e3,lz=10;class aN extends oN{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=XV(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);kW()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,lz):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},az)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}aN.type="LOCAL";const lN=aN;/**
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
 */class uN extends oN{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}uN.type="SESSION";const ZS=uN;/**
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
 */function uz(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wp{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new wp(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await uz(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wp.receivers=[];/**
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
 */function eE(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class cz{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=eE("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ks(){return window}function dz(e){ks().location.href=e}/**
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
 */function cN(){return typeof ks().WorkerGlobalScope<"u"&&typeof ks().importScripts=="function"}async function fz(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hz(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function vz(){return cN()?self:null}/**
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
 */const dN="firebaseLocalStorageDb",mz=1,Wm="firebaseLocalStorage",fN="fbase_key";class _h{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sp(e,t){return e.transaction([Wm],t?"readwrite":"readonly").objectStore(Wm)}function gz(){const e=indexedDB.deleteDatabase(dN);return new _h(e).toPromise()}function zb(){const e=indexedDB.open(dN,mz);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Wm,{keyPath:fN})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Wm)?t(i):(i.close(),await gz(),t(await zb()))})})}async function zT(e,t,n){const i=Sp(e,!0).put({[fN]:t,value:n});return new _h(i).toPromise()}async function pz(e,t){const n=Sp(e,!1).get(t),i=await new _h(n).toPromise();return i===void 0?null:i.value}function GT(e,t){const n=Sp(e,!0).delete(t);return new _h(n).toPromise()}const _z=800,yz=3;class hN{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zb(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>yz)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cN()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wp._getInstance(vz()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await fz(),!this.activeServiceWorker)return;this.sender=new cz(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||hz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await zb();return await zT(t,Hm,"1"),await GT(t,Hm),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>zT(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>pz(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>GT(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Sp(r,!1).getAll();return new _h(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_z)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hN.type="LOCAL";const vN=hN;new mh(3e4,6e4);/**
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
 */function mN(e,t){return t?uo(t):(ct(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class tE extends XS{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ku(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ku(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ku(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function bz(e){return iN(e.auth,new tE(e),e.bypassAuthState)}function wz(e){const{auth:t,user:n}=e;return ct(n,t,"internal-error"),JW(n,new tE(e),e.bypassAuthState)}async function Sz(e){const{auth:t,user:n}=e;return ct(n,t,"internal-error"),QW(n,new tE(e),e.bypassAuthState)}/**
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
 */class gN{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bz;case"linkViaPopup":case"linkViaRedirect":return Sz;case"reauthViaPopup":case"reauthViaRedirect":return wz;default:Br(this.auth,"internal-error")}}resolve(t){bo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ez=new mh(2e3,1e4);async function Cz(e,t,n){if(Kr(e.app))return Promise.reject(ts(e,"operation-not-supported-in-this-environment"));const i=Ro(e);oW(e,t,JS);const r=mN(i,n);return new ol(i,"signInViaPopup",t,r).executeNotNull()}class ol extends gN{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ol.currentPopupAction&&ol.currentPopupAction.cancel(),ol.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ct(t,this.auth,"internal-error"),t}async onExecution(){bo(this.filter.length===1,"Popup operations only handle one event");const t=eE();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ts(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ts(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ol.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ts(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ez.get())};t()}}ol.currentPopupAction=null;/**
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
 */const kz="pendingRedirect",sm=new Map;class Tz extends gN{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=sm.get(this.auth._key());if(!t){try{const i=await Iz(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}sm.set(this.auth._key(),t)}return this.bypassAuthState||sm.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iz(e,t){const n=xz(t),i=Pz(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Az(e,t){sm.set(e._key(),t)}function Pz(e){return uo(e._redirectPersistence)}function xz(e){return rm(kz,e.config.apiKey,e.name)}async function Dz(e,t,n=!1){if(Kr(e.app))return Promise.reject(vo(e));const i=Ro(e),r=mN(i,t),o=await new Tz(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const Rz=10*60*1e3;class Oz{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Vz(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!pN(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ts(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Rz&&this.cachedEventUids.clear(),this.cachedEventUids.has(qT(t))}saveEventToCache(t){this.cachedEventUids.add(qT(t)),this.lastProcessedEventTime=Date.now()}}function qT(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function pN({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Vz(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pN(e);default:return!1}}/**
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
 */async function Nz(e,t={}){return Bs(e,"GET","/v1/projects",t)}/**
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
 */const Mz=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lz=/^https?/;async function Fz(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Nz(e);for(const n of t)try{if($z(n))return}catch{}Br(e,"unauthorized-domain")}function $z(e){const t=Hb(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Lz.test(n))return!1;if(Mz.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Bz=new mh(3e4,6e4);function YT(){const e=ks().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Uz(e){return new Promise((t,n)=>{var i,r,s;function o(){YT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{YT(),n(ts(e,"network-request-failed"))},timeout:Bz.get()})}if(!((r=(i=ks().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=ks().gapi)===null||s===void 0)&&s.load)o();else{const a=VW("iframefcb");return ks()[a]=()=>{gapi.load?o():n(ts(e,"network-request-failed"))},JV(`${OW()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw om=null,t})}let om=null;function jz(e){return om=om||Uz(e),om}/**
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
 */const Hz=new mh(5e3,15e3),Wz="__/auth/iframe",zz="emulator/auth/iframe",Gz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qz=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yz(e){const t=e.config;ct(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qS(t,zz):`https://${e.config.authDomain}/${Wz}`,i={apiKey:t.apiKey,appName:e.name,v:Ra},r=qz.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Oc(i).slice(1)}`}async function Kz(e){const t=await jz(e),n=ks().gapi;return ct(n,e,"internal-error"),t.open({where:document.body,url:Yz(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gz,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=ts(e,"network-request-failed"),a=ks().setTimeout(()=>{s(o)},Hz.get());function l(){ks().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Xz={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qz=500,Jz=600,Zz="_blank",e8="http://localhost";class KT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t8(e,t,n,i=Qz,r=Jz){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Xz),{width:i.toString(),height:r.toString(),top:s,left:o}),u=ji().toLowerCase();n&&(a=zV(u)?Zz:n),HV(u)&&(t=t||e8,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[v,g])=>`${f}${v}=${g},`,"");if(CW(u)&&a!=="_self")return n8(t||"",a),new KT(null);const c=window.open(t||"",a,d);ct(c,e,"popup-blocked");try{c.focus()}catch{}return new KT(c)}function n8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const i8="__/auth/handler",r8="emulator/auth/handler",s8=encodeURIComponent("fac");async function XT(e,t,n,i,r,s){ct(e.config.authDomain,e,"auth-domain-config-required"),ct(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ra,eventId:r};if(t instanceof JS){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Lb(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(t instanceof ph){const d=t.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${s8}=${encodeURIComponent(l)}`:"";return`${o8(e)}?${Oc(a).slice(1)}${u}`}function o8({config:e}){return e.emulator?qS(e,r8):`https://${e.authDomain}/${i8}`}/**
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
 */const Ty="webStorageSupport";class a8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZS,this._completeRedirectFn=Dz,this._overrideRedirectResult=Az}async _openPopup(t,n,i,r){var s;bo((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await XT(t,n,i,Hb(),r);return t8(t,o,eE())}async _openRedirect(t,n,i,r){await this._originValidation(t);const s=await XT(t,n,i,Hb(),r);return dz(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(bo(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await Kz(t),i=new Oz(t);return n.register("authEvent",r=>(ct(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ty,{type:Ty},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ty];o!==void 0&&n(!!o),Br(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fz(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return XV()||WV()||KS()}}const _N=a8;var QT="@firebase/auth",JT="1.7.9";/**
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
 */class l8{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ct(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function u8(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c8(e){Os(new ss("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ct(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QV(e)},u=new xW(i,r,s,l);return FW(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Os(new ss("auth-internal",t=>{const n=Ro(t.getProvider("auth").getImmediate());return(i=>new l8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(QT,JT,u8(e)),wr(QT,JT,"esm2017")}/**
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
 */const d8=5*60,f8=kV("authIdTokenMaxAge")||d8;let ZT=null;const h8=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>f8)return;const r=n==null?void 0:n.token;ZT!==r&&(ZT=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function v8(e=HS()){const t=jS(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ZV(e,{popupRedirectResolver:_N,persistence:[vN,lN,ZS]}),i=kV("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=h8(s.toString());sz(n,o,()=>o(n.currentUser)),sN(n,a=>o(a))}}const r=EV("auth");return r&&eN(n,`http://${r}`),n}function m8(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}DW({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=ts("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",m8().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c8("Browser");/**
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
 */const g8=new Map,p8={activated:!1,tokenObservers:[]};function os(e){return g8.get(e)||Object.assign({},p8)}const eI={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class _8{constructor(t,n,i,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new _f,this.pending.promise.catch(n=>{}),await y8(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new _f,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function y8(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const b8={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},zm=new Rc("appCheck","AppCheck",b8);function yN(e){if(!os(e).activated)throw zm.create("use-before-activation",{appName:e.name})}/**
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
 */const w8="firebase-app-check-database",S8=1,Gb="firebase-app-check-store";let yv=null;function E8(){return yv||(yv=new Promise((e,t)=>{try{const n=indexedDB.open(w8,S8);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var r;t(zm.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Gb,{keyPath:"compositeKey"})}}}catch(n){t(zm.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),yv)}function C8(e,t){return k8(T8(e),t)}async function k8(e,t){const i=(await E8()).transaction(Gb,"readwrite"),s=i.objectStore(Gb).put({compositeKey:e,value:t});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var u;a(zm.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function T8(e){return`${e.options.appId}-${e.name}`}/**
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
 */const qb=new vh("@firebase/app-check");function tI(e,t){return AV()?C8(e,t).catch(n=>{qb.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const I8={error:"UNKNOWN_ERROR"};function A8(e){return pp.encodeString(JSON.stringify(e),!1)}async function Yb(e,t=!1){const n=e.app;yN(n);const i=os(n);let r=i.token,s;if(r&&!Pd(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(Pd(l)?r=l:await tI(n,void 0))}if(!t&&r&&Pd(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await os(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?qb.warn(l.message):qb.error(l),s=l}let a;return r?s?Pd(r)?a={token:r.token,internalError:s}:a=iI(s):(a={token:r.token},i.token=r,await tI(n,r)):a=iI(s),o&&R8(n,a),a}async function P8(e){const t=e.app;yN(t);const{provider:n}=os(t);{const{token:i}=await n.getToken();return{token:i}}}function x8(e,t,n,i){const{app:r}=e,s=os(r),o={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Pd(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),nI(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>nI(e))}function bN(e,t){const n=os(e),i=n.tokenObservers.filter(r=>r.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function nI(e){const{app:t}=e,n=os(t);let i=n.tokenRefresher;i||(i=D8(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function D8(e){const{app:t}=e;return new _8(async()=>{const n=os(t);let i;if(n.token?i=await Yb(e,!0):i=await Yb(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=os(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},eI.RETRIAL_MIN_WAIT,eI.RETRIAL_MAX_WAIT)}function R8(e,t){const n=os(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function Pd(e){return e.expireTimeMillis-Date.now()>0}function iI(e){return{token:A8(I8),error:e}}/**
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
 */class O8{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=os(this.app);for(const n of t)bN(this.app,n.next);return Promise.resolve()}}function V8(e,t){return new O8(e,t)}function N8(e){return{getToken:t=>Yb(e,t),getLimitedUseToken:()=>P8(e),addTokenListener:t=>x8(e,"INTERNAL",t),removeTokenListener:t=>bN(e.app,t)}}const M8="@firebase/app-check",L8="0.8.8",F8="app-check",rI="app-check-internal";function $8(){Os(new ss(F8,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return V8(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(rI).initialize()})),Os(new ss(rI,e=>{const t=e.getProvider("app-check").getImmediate();return N8(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),wr(M8,L8)}$8();var B8="firebase",U8="10.13.2";/**
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
 */wr(B8,U8,"app");const wN=Symbol("firebaseApp");function yh(e){return Gl()&&st(wN,null)||HS(e)}const ys=()=>{},j8=typeof window<"u";function nE(e,t){return t.split(".").reduce((n,i)=>n&&n[i],e)}function H8(e,t,n){const i=(""+t).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],e);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function ql(e){return!!e&&typeof e=="object"}const W8=Object.prototype;function z8(e){return ql(e)&&Object.getPrototypeOf(e)===W8}function iE(e){return ql(e)&&e.type==="document"}function G8(e){return ql(e)&&e.type==="collection"}function q8(e){return iE(e)||G8(e)}function Y8(e){return ql(e)&&e.type==="query"}function K8(e){return ql(e)&&"ref"in e}function X8(e){return ql(e)&&typeof e.bucket=="string"}function Q8(e,t){let n;return()=>{if(!n)return n=!0,e(t())}}const J8=Symbol.for("v-scx");function Z8(){return!!st(J8,0)}const bv=new WeakMap;function e7(e,t){if(!bv.has(e)){const n=uh(!0);bv.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),bv.delete(e)}}return bv.get(e)}const SN=new WeakMap;function EN(e){return SN.get(yh(e))}const wv=new WeakMap;function CN(e){const t=yh(e);if(!wv.has(t)){let n;const r=[new Promise(s=>{n=s}),s=>{wv.set(t,s),n(s.value)}];wv.set(t,r)}return wv.get(t)}function sI(e){const t=CN(e);return Array.isArray(t)?t[0]:Promise.resolve(t.value)}function t7(e,t){sN(t,n=>{const i=CN();e.value=n,Array.isArray(i)&&i[1](e)})}var oI={};const aI="@firebase/database",lI="1.0.8";/**
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
 */let kN="";function n7(e){kN=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),yi(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:yf(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return xo(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new i7(t)}}catch{}return new r7},al=TN("localStorage"),s7=TN("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new vh("@firebase/database"),o7=function(){let e=1;return function(){return e++}}(),IN=function(e){const t=XH(e),n=new zH;n.update(t);const i=n.digest();return pp.encodeByteArray(i)},bh=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=bh.apply(null,i):typeof i=="object"?t+=yi(i):t+=i,t+=" "}return t};let qd=null,uI=!0;const a7=function(e,t){Ue(!t,"Can't turn on custom loggers persistently."),Xu.logLevel=It.VERBOSE,qd=Xu.log.bind(Xu)},Oi=function(...e){if(uI===!0&&(uI=!1,qd===null&&s7.get("logging_enabled")===!0&&a7()),qd){const t=bh.apply(null,e);qd(t)}},wh=function(e){return function(...t){Oi(e,...t)}},Kb=function(...e){const t="FIREBASE INTERNAL ERROR: "+bh(...e);Xu.error(t)},xl=function(...e){const t=`FIREBASE FATAL ERROR: ${bh(...e)}`;throw Xu.error(t),new Error(t)},Sr=function(...e){const t="FIREBASE WARNING: "+bh(...e);Xu.warn(t)},l7=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},AN=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},u7=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lc="[MIN_NAME]",Dl="[MAX_NAME]",Nc=function(e,t){if(e===t)return 0;if(e===lc||t===Dl)return-1;if(t===lc||e===Dl)return 1;{const n=cI(e),i=cI(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},c7=function(e,t){return e===t?0:e<t?-1:1},_d=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+yi(t))},rE=function(e){if(typeof e!="object"||e===null)return yi(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=yi(t[i]),n+=":",n+=rE(e[t[i]]);return n+="}",n},PN=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ur(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const xN=function(e){Ue(!AN(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,o,a,l;e===0?(s=0,o=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},d7=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},f7=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},h7=new RegExp("^-?(0*)\\d{1,10}$"),v7=-2147483648,m7=2147483647,cI=function(e){if(h7.test(e)){const t=Number(e);if(t>=v7&&t<=m7)return t}return null},Sh=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Sr("Exception was thrown by user callback.",n),t},Math.floor(0))}},g7=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yd=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class p7{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){Sr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _7{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Oi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="5",DN="v",RN="s",ON="r",VN="f",NN=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,MN="ls",LN="p",Xb="ac",FN="websocket",$N="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y7{constructor(t,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=al.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&al.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function b7(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function BN(e,t,n){Ue(typeof t=="string","typeof type must == string"),Ue(typeof n=="object","typeof params must == object");let i;if(t===FN)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===$N)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);b7(e)&&(n.ns=e.namespace);const r=[];return Ur(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w7{constructor(){this.counters_={}}incrementCounter(t,n=1){xo(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return TH(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={},Ay={};function oE(e){const t=e.toString();return Iy[t]||(Iy[t]=new w7),Iy[t]}function S7(e,t){const n=e.toString();return Ay[n]||(Ay[n]=t()),Ay[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E7{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Sh(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="start",C7="close",k7="pLPCommand",T7="pRTLPCB",UN="id",jN="pw",HN="ser",I7="cb",A7="seg",P7="ts",x7="d",D7="dframe",WN=1870,zN=30,R7=WN-zN,O7=25e3,V7=3e4;class Vu{constructor(t,n,i,r,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wh(t),this.stats_=oE(n),this.urlFn=l=>(this.appCheckToken&&(l[Xb]=this.appCheckToken),BN(n,$N,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new E7(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(V7)),u7(()=>{if(this.isClosed_)return;this.scriptTagHolder=new aE((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dI)this.id=a,this.password=l;else if(o===C7)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[dI]="t",i[HN]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[I7]=this.scriptTagHolder.uniqueCallbackIdentifier),i[DN]=sE,this.transportSessionId&&(i[RN]=this.transportSessionId),this.lastSessionId&&(i[MN]=this.lastSessionId),this.applicationId&&(i[LN]=this.applicationId),this.appCheckToken&&(i[Xb]=this.appCheckToken),typeof location<"u"&&location.hostname&&NN.test(location.hostname)&&(i[ON]=VN);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vu.forceAllow_=!0}static forceDisallow(){Vu.forceDisallow_=!0}static isAvailable(){return Vu.forceAllow_?!0:!Vu.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!d7()&&!f7()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=yi(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=wV(n),r=PN(i,R7);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[D7]="t",i[UN]=t,i[jN]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=yi(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class aE{constructor(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=o7(),window[k7+this.uniqueCallbackIdentifier]=t,window[T7+this.uniqueCallbackIdentifier]=n,this.myIFrame=aE.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Oi("frame writing exception"),a.stack&&Oi(a.stack),Oi(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Oi("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[UN]=this.myID,t[jN]=this.myPW,t[HN]=this.currentSerial;let n=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zN+i.length<=WN;){const o=this.pendingSegs.shift();i=i+"&"+A7+r+"="+o.seg+"&"+P7+r+"="+o.ts+"&"+x7+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(O7)),s=()=>{clearTimeout(r),i()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Oi("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N7=16384,M7=45e3;let Gm=null;typeof MozWebSocket<"u"?Gm=MozWebSocket:typeof WebSocket<"u"&&(Gm=WebSocket);class zr{constructor(t,n,i,r,s,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wh(this.connId),this.stats_=oE(n),this.connURL=zr.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,r,s){const o={};return o[DN]=sE,typeof location<"u"&&location.hostname&&NN.test(location.hostname)&&(o[ON]=VN),n&&(o[RN]=n),i&&(o[MN]=i),r&&(o[Xb]=r),s&&(o[LN]=s),BN(t,FN,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,al.set("previous_websocket_failure",!0);try{let i;IV(),this.mySock=new Gm(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){zr.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Gm!==null&&!zr.forceDisallow_}static previouslyFailed(){return al.isInMemoryStorage||al.get("previous_websocket_failure")===!0}markConnectionHealthy(){al.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=yf(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Ue(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=yi(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=PN(n,N7);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(M7))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zr.responsesRequiredToBeHealthy=2;zr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Vu,zr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=zr&&zr.isAvailable();let i=n&&!zr.previouslyFailed();if(t.webSocketOnly&&(n||Sr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[zr];else{const r=this.transports_=[];for(const s of Ef.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ef.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ef.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L7=6e4,F7=5e3,$7=10*1024,B7=100*1024,Py="t",fI="d",U7="s",hI="r",j7="e",vI="o",mI="a",gI="n",pI="p",H7="h";class W7{constructor(t,n,i,r,s,o,a,l,u,d){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wh("c:"+this.id+":"),this.transportManager_=new Ef(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=Yd(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>B7?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$7?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Py in t){const n=t[Py];n===mI?this.upgradeIfSecondaryHealthy_():n===hI?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vI&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=_d("t",t),i=_d("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pI,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mI,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gI,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=_d("t",t),i=_d("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=_d(Py,t);if(fI in t){const i=t[fI];if(n===H7){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===gI){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===U7?this.onConnectionShutdown_(i):n===hI?this.onReset_(i):n===j7?Kb("Server Error: "+i):n===vI?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kb("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sE!==i&&Sr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Yd(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(L7))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yd(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(F7))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pI,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(al.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{put(t,n,i,r){}merge(t,n,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(t){this.allowedEvents_=t,this.listeners_={},Ue(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const r=this.getInitialEvent(t);r&&n.apply(i,r)}off(t,n,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(t){Ue(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends qN{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!BS()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qm}getInitialEvent(t){return Ue(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=32,yI=768;class Tn{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function tn(){return new Tn("")}function Mt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ma(e){return e.pieces_.length-e.pieceNum_}function Sn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Tn(e.pieces_,t)}function YN(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function z7(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function KN(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function XN(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Tn(t,0)}function li(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Tn)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Tn(n,0)}function Rt(e){return e.pieceNum_>=e.pieces_.length}function Mr(e,t){const n=Mt(e),i=Mt(t);if(n===null)return t;if(n===i)return Mr(Sn(e),Sn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function QN(e,t){if(ma(e)!==ma(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Xr(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ma(e)>ma(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class G7{constructor(t,n){this.errorPrefix_=n,this.parts_=KN(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=yp(this.parts_[i]);JN(this)}}function q7(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=yp(t),JN(e)}function Y7(e){const t=e.parts_.pop();e.byteLength_-=yp(t),e.parts_.length>0&&(e.byteLength_-=1)}function JN(e){if(e.byteLength_>yI)throw new Error(e.errorPrefix_+"has a key path longer than "+yI+" bytes ("+e.byteLength_+").");if(e.parts_.length>_I)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_I+") or object contains a cycle "+Ja(e))}function Ja(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE extends qN{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new lE}getInitialEvent(t){return Ue(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=1e3,K7=60*5*1e3,bI=30*1e3,X7=1.3,Q7=3e4,J7="server_kill",wI=3;class mo extends GN{constructor(t,n,i,r,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=mo.nextPersistentConnectionId_++,this.log_=wh("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yd,this.maxReconnectDelay_=K7,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!IV())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lE.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&qm.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const r=++this.requestNumber_,s={r,a:t,b:n};this.log_(yi(s)),Ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const n=new _f,r={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,r){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Ue(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ue(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:t,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;mo.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,r),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&xo(t,"w")){const i=oc(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Sr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||WH(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bI)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=HH(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),Ue(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,n)}sendUnlisten_(t,n,i,r){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(t,n,i,r){this.putInternal("p",t,n,i,r)}merge(t,n,i,r){this.putInternal("m",t,n,i,r)}putInternal(t,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+yi(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Kb("Unrecognized action received from server: "+yi(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yd,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=yd,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Q7&&(this.reconnectDelay_=yd),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*X7)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+mo.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(c){Ue(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Oi("getToken() completed but was canceled"):(Oi("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new W7(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,v=>{Sr(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(J7)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Sr(c),l())}}}interrupt(t){Oi("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Oi("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Lb(this.interruptReasons_)&&(this.reconnectDelay_=yd,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(s=>rE(s)).join("$"):i="default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,n){const i=new Tn(t).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,n){Oi("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wI&&(this.reconnectDelay_=bI,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Oi("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wI&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+kN.replace(/\./g,"-")]=1,BS()?t["framework.cordova"]=1:TV()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=qm.getInstance().currentlyOnline();return Lb(this.interruptReasons_)&&t}}mo.nextPersistentConnectionId_=0;mo.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new Lt(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Lt(lc,t),r=new Lt(lc,n);return this.compare(i,r)!==0}minPost(){return Lt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sv;class ZN extends Ep{static get __EMPTY_NODE(){return Sv}static set __EMPTY_NODE(t){Sv=t}compare(t,n){return Nc(t.name,n.name)}isDefinedOn(t){throw Dc("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Lt.MIN}maxPost(){return new Lt(Dl,Sv)}makePost(t,n){return Ue(typeof t=="string","KeyIndex indexValue must always be a string."),new Lt(t,Sv)}toString(){return".key"}}const Qu=new ZN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ev=class{constructor(t,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,r&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}},vr=class xd{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??xd.RED,this.left=r??bs.EMPTY_NODE,this.right=s??bs.EMPTY_NODE}copy(t,n,i,r,s){return new xd(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return bs.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,r;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return bs.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,xd.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,xd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}};vr.RED=!0;vr.BLACK=!1;class Z7{copy(t,n,i,r,s){return this}insert(t,n,i){return new vr(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let bs=class am{constructor(t,n=am.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new am(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,vr.BLACK,null,null))}remove(t){return new am(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,vr.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ev(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Ev(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Ev(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Ev(this.root_,null,this.comparator_,!0,t)}};bs.EMPTY_NODE=new Z7;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eG(e,t){return Nc(e.name,t.name)}function uE(e,t){return Nc(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qb;function tG(e){Qb=e}const eM=function(e){return typeof e=="number"?"number:"+xN(e):"string:"+e},tM=function(e){if(e.isLeafNode()){const t=e.val();Ue(typeof t=="string"||typeof t=="number"||typeof t=="object"&&xo(t,".sv"),"Priority must be a string or number.")}else Ue(e===Qb||e.isEmpty(),"priority of unexpected type.");Ue(e===Qb||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SI;class oi{constructor(t,n=oi.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,Ue(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tM(this.priorityNode_)}static set __childrenNodeConstructor(t){SI=t}static get __childrenNodeConstructor(){return SI}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new oi(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:oi.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Rt(t)?this:Mt(t)===".priority"?this.priorityNode_:oi.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:oi.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Mt(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(Ue(i!==".priority"||ma(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,oi.__childrenNodeConstructor.EMPTY_NODE.updateChild(Sn(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+eM(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=xN(this.value_):t+=this.value_,this.lazyHash_=IN(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===oi.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof oi.__childrenNodeConstructor?-1:(Ue(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,r=oi.VALUE_TYPE_ORDER.indexOf(n),s=oi.VALUE_TYPE_ORDER.indexOf(i);return Ue(r>=0,"Unknown leaf type: "+n),Ue(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}oi.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nM,iM;function nG(e){nM=e}function iG(e){iM=e}class rG extends Ep{compare(t,n){const i=t.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Nc(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Lt.MIN}maxPost(){return new Lt(Dl,new oi("[PRIORITY-POST]",iM))}makePost(t,n){const i=nM(t);return new Lt(n,new oi("[PRIORITY-POST]",i))}toString(){return".priority"}}const Li=new rG;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sG=Math.log(2);class oG{constructor(t){const n=s=>parseInt(Math.log(s)/sG,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const r=i(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Ym=function(e,t,n,i){e.sort(t);const r=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=e[l],f=n?n(c):c,new vr(f,c.node,vr.BLACK,null,null);{const v=parseInt(d/2,10)+l,g=r(l,v),p=r(v+1,u);return c=e[v],f=n?n(c):c,new vr(f,c.node,vr.BLACK,g,p)}},s=function(l){let u=null,d=null,c=e.length;const f=function(g,p){const _=c-g,y=c;c-=g;const b=r(_+1,y),E=e[_],k=n?n(E):E;v(new vr(k,E.node,p,null,b))},v=function(g){u?(u.left=g,u=g):(d=g,u=g)};for(let g=0;g<l.count;++g){const p=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));p?f(_,vr.BLACK):(f(_,vr.BLACK),f(_,vr.RED))}return d},o=new oG(e.length),a=s(o);return new bs(i||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xy;const _u={};class co{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return Ue(_u&&Li,"ChildrenNode.ts has not been loaded"),xy=xy||new co({".priority":_u},{".priority":Li}),xy}get(t){const n=oc(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof bs?n:null}hasIndex(t){return xo(this.indexSet_,t.toString())}addIndex(t,n){Ue(t!==Qu,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Lt.Wrap);let o=s.getNext();for(;o;)r=r||t.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ym(i,t.getCompare()):a=_u;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const d=Object.assign({},this.indexes_);return d[l]=a,new co(d,u)}addToIndexes(t,n){const i=Lm(this.indexes_,(r,s)=>{const o=oc(this.indexSet_,s);if(Ue(o,"Missing index implementation for "+s),r===_u)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(Lt.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Ym(a,o.getCompare())}else return _u;else{const a=n.get(t.name);let l=r;return a&&(l=l.remove(new Lt(t.name,a))),l.insert(t,t.node)}});return new co(i,this.indexSet_)}removeFromIndexes(t,n){const i=Lm(this.indexes_,r=>{if(r===_u)return r;{const s=n.get(t.name);return s?r.remove(new Lt(t.name,s)):r}});return new co(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd;class Kt{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&tM(this.priorityNode_),this.children_.isEmpty()&&Ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bd||(bd=new Kt(new bs(uE),null,co.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bd}updatePriority(t){return this.children_.isEmpty()?this:new Kt(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?bd:n}}getChild(t){const n=Mt(t);return n===null?this:this.getImmediateChild(n).getChild(Sn(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(Ue(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Lt(t,n);let r,s;n.isEmpty()?(r=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?bd:this.priorityNode_;return new Kt(r,o,s)}}updateChild(t,n){const i=Mt(t);if(i===null)return n;{Ue(Mt(t)!==".priority"||ma(t)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Sn(t),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Li,(o,a)=>{n[o]=a.val(t),i++,s&&Kt.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!t&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+eM(this.getPriority().val())+":"),this.forEachChild(Li,(n,i)=>{const r=i.hash();r!==""&&(t+=":"+n+":"+r)}),this.lazyHash_=t===""?"":IN(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Lt(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Lt(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Lt(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,r=>r);{const r=this.children_.getIteratorFrom(t.name,Lt.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,r=>r);{const r=this.children_.getReverseIteratorFrom(t.name,Lt.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)>0;)r.getNext(),s=r.peek();return r}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Eh?-1:0}withIndex(t){if(t===Qu||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Kt(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Qu||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Li),r=n.getIterator(Li);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Qu?null:this.indexMap_.get(t.toString())}}Kt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aG extends Kt{constructor(){super(new bs(uE),Kt.EMPTY_NODE,co.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Kt.EMPTY_NODE}isEmpty(){return!1}}const Eh=new aG;Object.defineProperties(Lt,{MIN:{value:new Lt(lc,Kt.EMPTY_NODE)},MAX:{value:new Lt(Dl,Eh)}});ZN.__EMPTY_NODE=Kt.EMPTY_NODE;oi.__childrenNodeConstructor=Kt;tG(Eh);iG(Eh);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lG=!0;function Vi(e,t=null){if(e===null)return Kt.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),Ue(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new oi(n,Vi(t))}if(!(e instanceof Array)&&lG){const n=[];let i=!1;if(Ur(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=Vi(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Lt(o,l)))}}),n.length===0)return Kt.EMPTY_NODE;const s=Ym(n,eG,o=>o.name,uE);if(i){const o=Ym(n,Li.getCompare());return new Kt(s,Vi(t),new co({".priority":o},{".priority":Li}))}else return new Kt(s,Vi(t),co.Default)}else{let n=Kt.EMPTY_NODE;return Ur(e,(i,r)=>{if(xo(e,i)&&i.substring(0,1)!=="."){const s=Vi(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Vi(t))}}nG(Vi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uG extends Ep{constructor(t){super(),this.indexPath_=t,Ue(!Rt(t)&&Mt(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Nc(t.name,n.name):s}makePost(t,n){const i=Vi(t),r=Kt.EMPTY_NODE.updateChild(this.indexPath_,i);return new Lt(n,r)}maxPost(){const t=Kt.EMPTY_NODE.updateChild(this.indexPath_,Eh);return new Lt(Dl,t)}toString(){return KN(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cG extends Ep{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Nc(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Lt.MIN}maxPost(){return Lt.MAX}makePost(t,n){const i=Vi(t);return new Lt(n,i)}toString(){return".value"}}const dG=new cG;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fG(e){return{type:"value",snapshotNode:e}}function hG(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function vG(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function EI(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function mG(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Li}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lc}hasEnd(){return this.endSet_}getIndexEndValue(){return Ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dl}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Li}copy(){const t=new cE;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function CI(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Li?n="$priority":e.index_===dG?n="$value":e.index_===Qu?n="$key":(Ue(e.index_ instanceof uG,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=yi(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=yi(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+yi(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=yi(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+yi(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function kI(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Li&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends GN{constructor(t,n,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=wh("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(Ue(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,r){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Km.getListenId_(t,i),a={};this.listens_[o]=a;const l=CI(t._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,i),oc(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",r(f,null)}})}unlisten(t,n){const i=Km.getListenId_(t,n);delete this.listens_[i]}get(t){const n=CI(t._queryParams),i=t._path.toString(),r=new _f;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Oc(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=yf(a.responseText)}catch{Sr("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Sr("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gG{constructor(){this.rootNode_=Kt.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return{value:null,children:new Map}}function rM(e,t,n){if(Rt(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=Mt(t);e.children.has(i)||e.children.set(i,Xm());const r=e.children.get(i);t=Sn(t),rM(r,t,n)}}function Jb(e,t,n){e.value!==null?n(t,e.value):pG(e,(i,r)=>{const s=new Tn(t.toString()+"/"+i);Jb(r,s,n)})}function pG(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _G{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Ur(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=10*1e3,yG=30*1e3,bG=5*60*1e3;class wG{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _G(t);const i=TI+(yG-TI)*Math.random();Yd(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;Ur(t,(r,s)=>{s>0&&xo(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Yd(this.reportStats_.bind(this),Math.floor(Math.random()*2*bG))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ws;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ws||(ws={}));function sM(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oM(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function aM(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=ws.ACK_USER_WRITE,this.source=sM()}operationForChild(t){if(Rt(this.path)){if(this.affectedTree.value!=null)return Ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Tn(t));return new Qm(tn(),n,this.revert)}}else return Ue(Mt(this.path)===t,"operationForChild called for unrelated child."),new Qm(Sn(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=ws.OVERWRITE}operationForChild(t){return Rt(this.path)?new Rl(this.source,tn(),this.snap.getImmediateChild(t)):new Rl(this.source,Sn(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=ws.MERGE}operationForChild(t){if(Rt(this.path)){const n=this.children.subtree(new Tn(t));return n.isEmpty()?null:n.value?new Rl(this.source,tn(),n.value):new Cf(this.source,tn(),n)}else return Ue(Mt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Cf(this.source,Sn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Rt(t))return this.isFullyInitialized()&&!this.filtered_;const n=Mt(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function SG(e,t,n,i){const r=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mG(o.childName,o.snapshotNode))}),wd(e,r,"child_removed",t,i,n),wd(e,r,"child_added",t,i,n),wd(e,r,"child_moved",s,i,n),wd(e,r,"child_changed",t,i,n),wd(e,r,"value",t,i,n),r}function wd(e,t,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>CG(e,a,l)),o.forEach(a=>{const l=EG(e,a,s);r.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function EG(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function CG(e,t,n){if(t.childName==null||n.childName==null)throw Dc("Should only compare child_ events.");const i=new Lt(t.childName,t.snapshotNode),r=new Lt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(e,t){return{eventCache:e,serverCache:t}}function Kd(e,t,n,i){return lM(new dE(t,n,i),e.serverCache)}function uM(e,t,n,i){return lM(e.eventCache,new dE(t,n,i))}function Zb(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ol(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dy;const kG=()=>(Dy||(Dy=new bs(c7)),Dy);class wn{constructor(t,n=kG()){this.value=t,this.children=n}static fromObject(t){let n=new wn(null);return Ur(t,(i,r)=>{n=n.set(new Tn(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:tn(),value:this.value};if(Rt(t))return null;{const i=Mt(t),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Sn(t),n);return s!=null?{path:li(new Tn(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Rt(t))return this;{const n=Mt(t),i=this.children.get(n);return i!==null?i.subtree(Sn(t)):new wn(null)}}set(t,n){if(Rt(t))return new wn(n,this.children);{const i=Mt(t),s=(this.children.get(i)||new wn(null)).set(Sn(t),n),o=this.children.insert(i,s);return new wn(this.value,o)}}remove(t){if(Rt(t))return this.children.isEmpty()?new wn(null):new wn(null,this.children);{const n=Mt(t),i=this.children.get(n);if(i){const r=i.remove(Sn(t));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new wn(null):new wn(this.value,s)}else return this}}get(t){if(Rt(t))return this.value;{const n=Mt(t),i=this.children.get(n);return i?i.get(Sn(t)):null}}setTree(t,n){if(Rt(t))return n;{const i=Mt(t),s=(this.children.get(i)||new wn(null)).setTree(Sn(t),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new wn(this.value,o)}}fold(t){return this.fold_(tn(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(li(t,r),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,tn(),n)}findOnPath_(t,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Rt(t))return null;{const s=Mt(t),o=this.children.get(s);return o?o.findOnPath_(Sn(t),li(n,s),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,tn(),n)}foreachOnPath_(t,n,i){if(Rt(t))return this;{this.value&&i(n,this.value);const r=Mt(t),s=this.children.get(r);return s?s.foreachOnPath_(Sn(t),li(n,r),i):new wn(null)}}foreach(t){this.foreach_(tn(),t)}foreach_(t,n){this.children.inorderTraversal((i,r)=>{r.foreach_(li(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this.writeTree_=t}static empty(){return new ns(new wn(null))}}function Xd(e,t,n){if(Rt(t))return new ns(new wn(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const r=i.path;let s=i.value;const o=Mr(r,t);return s=s.updateChild(o,n),new ns(e.writeTree_.set(r,s))}else{const r=new wn(n),s=e.writeTree_.setTree(t,r);return new ns(s)}}}function II(e,t,n){let i=e;return Ur(n,(r,s)=>{i=Xd(i,li(t,r),s)}),i}function AI(e,t){if(Rt(t))return ns.empty();{const n=e.writeTree_.setTree(t,new wn(null));return new ns(n)}}function e0(e,t){return Yl(e,t)!=null}function Yl(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Mr(n.path,t)):null}function PI(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Li,(i,r)=>{t.push(new Lt(i,r))}):e.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&t.push(new Lt(i,r.value))}),t}function ua(e,t){if(Rt(t))return e;{const n=Yl(e,t);return n!=null?new ns(new wn(n)):new ns(e.writeTree_.subtree(t))}}function t0(e){return e.writeTree_.isEmpty()}function uc(e,t){return cM(tn(),e.writeTree_,t)}function cM(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((r,s)=>{r===".priority"?(Ue(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=cM(li(e,r),s,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(li(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(e,t){return gM(t,e)}function TG(e,t,n,i,r){Ue(i>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Xd(e.visibleWrites,t,n)),e.lastWriteId=i}function IG(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function AG(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);Ue(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&PG(a,i.path)?r=!1:Xr(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return xG(e),!0;if(i.snap)e.visibleWrites=AI(e.visibleWrites,i.path);else{const a=i.children;Ur(a,l=>{e.visibleWrites=AI(e.visibleWrites,li(i.path,l))})}return!0}else return!1}function PG(e,t){if(e.snap)return Xr(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Xr(li(e.path,n),t))return!0;return!1}function xG(e){e.visibleWrites=fM(e.allWrites,DG,tn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function DG(e){return e.visible}function fM(e,t,n){let i=ns.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const o=s.path;let a;if(s.snap)Xr(n,o)?(a=Mr(n,o),i=Xd(i,a,s.snap)):Xr(o,n)&&(a=Mr(o,n),i=Xd(i,tn(),s.snap.getChild(a)));else if(s.children){if(Xr(n,o))a=Mr(n,o),i=II(i,a,s.children);else if(Xr(o,n))if(a=Mr(o,n),Rt(a))i=II(i,tn(),s.children);else{const l=oc(s.children,Mt(a));if(l){const u=l.getChild(Sn(a));i=Xd(i,tn(),u)}}}else throw Dc("WriteRecord should have .snap or .children")}}return i}function hM(e,t,n,i,r){if(!i&&!r){const s=Yl(e.visibleWrites,t);if(s!=null)return s;{const o=ua(e.visibleWrites,t);if(t0(o))return n;if(n==null&&!e0(o,tn()))return null;{const a=n||Kt.EMPTY_NODE;return uc(o,a)}}}else{const s=ua(e.visibleWrites,t);if(!r&&t0(s))return n;if(!r&&n==null&&!e0(s,tn()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Xr(u.path,t)||Xr(t,u.path))},a=fM(e.allWrites,o,t),l=n||Kt.EMPTY_NODE;return uc(a,l)}}}function RG(e,t,n){let i=Kt.EMPTY_NODE;const r=Yl(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Li,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=ua(e.visibleWrites,t);return n.forEachChild(Li,(o,a)=>{const l=uc(ua(s,new Tn(o)),a);i=i.updateImmediateChild(o,l)}),PI(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=ua(e.visibleWrites,t);return PI(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function OG(e,t,n,i,r){Ue(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=li(t,n);if(e0(e.visibleWrites,s))return null;{const o=ua(e.visibleWrites,s);return t0(o)?r.getChild(n):uc(o,r.getChild(n))}}function VG(e,t,n,i){const r=li(t,n),s=Yl(e.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=ua(e.visibleWrites,r);return uc(o,i.getNode().getImmediateChild(n))}else return null}function NG(e,t){return Yl(e.visibleWrites,t)}function MG(e,t,n,i,r,s,o){let a;const l=ua(e.visibleWrites,t),u=Yl(l,tn());if(u!=null)a=u;else if(n!=null)a=uc(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let v=f.getNext();for(;v&&d.length<r;)c(v,i)!==0&&d.push(v),v=f.getNext();return d}else return[]}function LG(){return{visibleWrites:ns.empty(),allWrites:[],lastWriteId:-1}}function n0(e,t,n,i){return hM(e.writeTree,e.treePath,t,n,i)}function vM(e,t){return RG(e.writeTree,e.treePath,t)}function xI(e,t,n,i){return OG(e.writeTree,e.treePath,t,n,i)}function Jm(e,t){return NG(e.writeTree,li(e.treePath,t))}function FG(e,t,n,i,r,s){return MG(e.writeTree,e.treePath,t,n,i,r,s)}function fE(e,t,n){return VG(e.writeTree,e.treePath,t,n)}function mM(e,t){return gM(li(e.treePath,t),e.writeTree)}function gM(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $G{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;Ue(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Ue(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,EI(i,t.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,vG(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,hG(i,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,EI(i,t.snapshotNode,r.oldSnap));else throw Dc("Illegal combination of changes: "+t+" occurred after "+r)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BG{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const pM=new BG;class hE{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new dE(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fE(this.writes_,t,i)}}getChildAfterChild(t,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ol(this.viewCache_),s=FG(this.writes_,r,n,1,i,t);return s.length===0?null:s[0]}}function UG(e,t){Ue(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Ue(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function jG(e,t,n,i,r){const s=new $G;let o,a;if(n.type===ws.OVERWRITE){const u=n;u.source.fromUser?o=i0(e,t,u.path,u.snap,i,r,s):(Ue(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Rt(u.path),o=Zm(e,t,u.path,u.snap,i,r,a,s))}else if(n.type===ws.MERGE){const u=n;u.source.fromUser?o=WG(e,t,u.path,u.children,i,r,s):(Ue(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=r0(e,t,u.path,u.children,i,r,a,s))}else if(n.type===ws.ACK_USER_WRITE){const u=n;u.revert?o=qG(e,t,u.path,i,r,s):o=zG(e,t,u.path,u.affectedTree,i,r,s)}else if(n.type===ws.LISTEN_COMPLETE)o=GG(e,t,n.path,i,s);else throw Dc("Unknown operation type: "+n.type);const l=s.getChanges();return HG(t,o,l),{viewCache:o,changes:l}}function HG(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Zb(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(fG(Zb(t)))}}function _M(e,t,n,i,r,s){const o=t.eventCache;if(Jm(i,n)!=null)return t;{let a,l;if(Rt(n))if(Ue(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Ol(t),d=u instanceof Kt?u:Kt.EMPTY_NODE,c=vM(i,d);a=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{const u=n0(i,Ol(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=Mt(n);if(u===".priority"){Ue(ma(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=t.serverCache.getNode();const c=xI(i,n,d,l);c!=null?a=e.filter.updatePriority(d,c):a=o.getNode()}else{const d=Sn(n);let c;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const f=xI(i,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=fE(i,u,t.serverCache);c!=null?a=e.filter.updateChild(o.getNode(),u,c,d,r,s):a=o.getNode()}}return Kd(t,a,o.isFullyInitialized()||Rt(n),e.filter.filtersNodes())}}function Zm(e,t,n,i,r,s,o,a){const l=t.serverCache;let u;const d=o?e.filter:e.filter.getIndexedFilter();if(Rt(n))u=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,i);u=d.updateFullNode(l.getNode(),v,null)}else{const v=Mt(n);if(!l.isCompleteForPath(n)&&ma(n)>1)return t;const g=Sn(n),_=l.getNode().getImmediateChild(v).updateChild(g,i);v===".priority"?u=d.updatePriority(l.getNode(),_):u=d.updateChild(l.getNode(),v,_,g,pM,null)}const c=uM(t,u,l.isFullyInitialized()||Rt(n),d.filtersNodes()),f=new hE(r,c,s);return _M(e,c,n,r,f,a)}function i0(e,t,n,i,r,s,o){const a=t.eventCache;let l,u;const d=new hE(r,t,s);if(Rt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Kd(t,u,!0,e.filter.filtersNodes());else{const c=Mt(n);if(c===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),i),l=Kd(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=Sn(n),v=a.getNode().getImmediateChild(c);let g;if(Rt(f))g=i;else{const p=d.getCompleteChild(c);p!=null?YN(f)===".priority"&&p.getChild(XN(f)).isEmpty()?g=p:g=p.updateChild(f,i):g=Kt.EMPTY_NODE}if(v.equals(g))l=t;else{const p=e.filter.updateChild(a.getNode(),c,g,f,d,o);l=Kd(t,p,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function DI(e,t){return e.eventCache.isCompleteForChild(t)}function WG(e,t,n,i,r,s,o){let a=t;return i.foreach((l,u)=>{const d=li(n,l);DI(t,Mt(d))&&(a=i0(e,a,d,u,r,s,o))}),i.foreach((l,u)=>{const d=li(n,l);DI(t,Mt(d))||(a=i0(e,a,d,u,r,s,o))}),a}function RI(e,t,n){return n.foreach((i,r)=>{t=t.updateChild(i,r)}),t}function r0(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;Rt(n)?u=i:u=new wn(null).setTree(n,i);const d=t.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const v=t.serverCache.getNode().getImmediateChild(c),g=RI(e,v,f);l=Zm(e,l,new Tn(c),g,r,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const v=!t.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!v){const g=t.serverCache.getNode().getImmediateChild(c),p=RI(e,g,f);l=Zm(e,l,new Tn(c),p,r,s,o,a)}}),l}function zG(e,t,n,i,r,s,o){if(Jm(r,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(Rt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Zm(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Rt(n)){let u=new wn(null);return l.getNode().forEachChild(Qu,(d,c)=>{u=u.set(new Tn(d),c)}),r0(e,t,n,u,r,s,a,o)}else return t}else{let u=new wn(null);return i.foreach((d,c)=>{const f=li(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),r0(e,t,n,u,r,s,a,o)}}function GG(e,t,n,i,r){const s=t.serverCache,o=uM(t,s.getNode(),s.isFullyInitialized()||Rt(n),s.isFiltered());return _M(e,o,n,i,pM,r)}function qG(e,t,n,i,r,s){let o;if(Jm(i,n)!=null)return t;{const a=new hE(i,t,r),l=t.eventCache.getNode();let u;if(Rt(n)||Mt(n)===".priority"){let d;if(t.serverCache.isFullyInitialized())d=n0(i,Ol(t));else{const c=t.serverCache.getNode();Ue(c instanceof Kt,"serverChildren would be complete if leaf node"),d=vM(i,c)}d=d,u=e.filter.updateFullNode(l,d,s)}else{const d=Mt(n);let c=fE(i,d,t.serverCache);c==null&&t.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=e.filter.updateChild(l,d,c,Sn(n),a,s):t.eventCache.getNode().hasChild(d)?u=e.filter.updateChild(l,d,Kt.EMPTY_NODE,Sn(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=n0(i,Ol(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||Jm(i,tn())!=null,Kd(t,u,o,e.filter.filtersNodes())}}function YG(e,t){const n=Ol(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Rt(t)&&!n.getImmediateChild(Mt(t)).isEmpty())?n.getChild(t):null}function OI(e,t,n,i){t.type===ws.MERGE&&t.source.queryId!==null&&(Ue(Ol(e.viewCache_),"We should always have a full cache before handling merges"),Ue(Zb(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=jG(e.processor_,r,t,n,i);return UG(e.processor_,s.viewCache),Ue(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,KG(e,s.changes,s.viewCache.eventCache.getNode())}function KG(e,t,n,i){const r=e.eventRegistrations_;return SG(e.eventGenerator_,t,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VI;function XG(e){Ue(!VI,"__referenceConstructor has already been defined"),VI=e}function vE(e,t,n,i){const r=t.source.queryId;if(r!==null){const s=e.views.get(r);return Ue(s!=null,"SyncTree gave us an op for an invalid query."),OI(s,t,n,i)}else{let s=[];for(const o of e.views.values())s=s.concat(OI(o,t,n,i));return s}}function mE(e,t){let n=null;for(const i of e.views.values())n=n||YG(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NI;function QG(e){Ue(!NI,"__referenceConstructor has already been defined"),NI=e}class MI{constructor(t){this.listenProvider_=t,this.syncPointTree_=new wn(null),this.pendingWriteTree_=LG(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function JG(e,t,n,i,r){return TG(e.pendingWriteTree_,t,n,i,r),r?kp(e,new Rl(sM(),t,n)):[]}function Nu(e,t,n=!1){const i=IG(e.pendingWriteTree_,t);if(AG(e.pendingWriteTree_,t)){let s=new wn(null);return i.snap!=null?s=s.set(tn(),!0):Ur(i.children,o=>{s=s.set(new Tn(o),!0)}),kp(e,new Qm(i.path,s,n))}else return[]}function Cp(e,t,n){return kp(e,new Rl(oM(),t,n))}function ZG(e,t,n){const i=wn.fromObject(n);return kp(e,new Cf(oM(),t,i))}function eq(e,t,n,i){const r=SM(e,i);if(r!=null){const s=EM(r),o=s.path,a=s.queryId,l=Mr(o,t),u=new Rl(aM(a),l,n);return CM(e,o,u)}else return[]}function tq(e,t,n,i){const r=SM(e,i);if(r){const s=EM(r),o=s.path,a=s.queryId,l=Mr(o,t),u=wn.fromObject(n),d=new Cf(aM(a),l,u);return CM(e,o,d)}else return[]}function yM(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=Mr(o,t),u=mE(a,l);if(u)return u});return hM(r,t,s,n,!0)}function kp(e,t){return bM(t,e.syncPointTree_,null,dM(e.pendingWriteTree_,tn()))}function bM(e,t,n,i){if(Rt(e.path))return wM(e,t,n,i);{const r=t.get(tn());n==null&&r!=null&&(n=mE(r,tn()));let s=[];const o=Mt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=mM(i,o);s=s.concat(bM(a,l,u,d))}return r&&(s=s.concat(vE(r,e,i,n))),s}}function wM(e,t,n,i){const r=t.get(tn());n==null&&r!=null&&(n=mE(r,tn()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=mM(i,o),d=e.operationForChild(o);d&&(s=s.concat(wM(d,a,l,u)))}),r&&(s=s.concat(vE(r,e,i,n))),s}function SM(e,t){return e.tagToQueryMap.get(t)}function EM(e){const t=e.indexOf("$");return Ue(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Tn(e.substr(0,t))}}function CM(e,t,n){const i=e.syncPointTree_.get(t);Ue(i,"Missing sync point for query tag that we're tracking");const r=dM(e.pendingWriteTree_,t);return vE(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new gE(n)}node(){return this.node_}}class pE{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=li(this.path_,t);return new pE(this.syncTree_,n)}node(){return yM(this.syncTree_,this.path_)}}const nq=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},LI=function(e,t,n){if(!e||typeof e!="object")return e;if(Ue(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return iq(e[".sv"],t,n);if(typeof e[".sv"]=="object")return rq(e[".sv"],t);Ue(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},iq=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Ue(!1,"Unexpected server value: "+e)}},rq=function(e,t,n){e.hasOwnProperty("increment")||Ue(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&Ue(!1,"Unexpected increment value: "+i);const r=t.node();if(Ue(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},sq=function(e,t,n,i){return _E(t,new pE(n,e),i)},oq=function(e,t,n){return _E(e,new gE(t),n)};function _E(e,t,n){const i=e.getPriority().val(),r=LI(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=LI(o.getValue(),t,n);return a!==o.getValue()||r!==o.getPriority().val()?new oi(a,Vi(r)):e}else{const o=e;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new oi(r))),o.forEachChild(Li,(a,l)=>{const u=_E(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function bE(e,t){let n=t instanceof Tn?t:new Tn(t),i=e,r=Mt(n);for(;r!==null;){const s=oc(i.node.children,r)||{children:{},childCount:0};i=new yE(r,i,s),n=Sn(n),r=Mt(n)}return i}function Mc(e){return e.node.value}function kM(e,t){e.node.value=t,s0(e)}function TM(e){return e.node.childCount>0}function aq(e){return Mc(e)===void 0&&!TM(e)}function Tp(e,t){Ur(e.node.children,(n,i)=>{t(new yE(n,e,i))})}function IM(e,t,n,i){n&&!i&&t(e),Tp(e,r=>{IM(r,t,!0,i)}),n&&i&&t(e)}function lq(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Ch(e){return new Tn(e.parent===null?e.name:Ch(e.parent)+"/"+e.name)}function s0(e){e.parent!==null&&uq(e.parent,e.name,e)}function uq(e,t,n){const i=aq(n),r=xo(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,s0(e)):!i&&!r&&(e.node.children[t]=n.node,e.node.childCount++,s0(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cq=/[\[\].#$\/\u0000-\u001F\u007F]/,dq=/[\[\].#$\u0000-\u001F\u007F]/,Ry=10*1024*1024,AM=function(e){return typeof e=="string"&&e.length!==0&&!cq.test(e)},fq=function(e){return typeof e=="string"&&e.length!==0&&!dq.test(e)},hq=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),fq(e)},PM=function(e,t,n){const i=n instanceof Tn?new G7(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Ja(i));if(typeof t=="function")throw new Error(e+"contains a function "+Ja(i)+" with contents = "+t.toString());if(AN(t))throw new Error(e+"contains "+t.toString()+" "+Ja(i));if(typeof t=="string"&&t.length>Ry/3&&yp(t)>Ry)throw new Error(e+"contains a string greater than "+Ry+" utf8 bytes "+Ja(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let r=!1,s=!1;if(Ur(t,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!AM(o)))throw new Error(e+" contains an invalid key ("+o+") "+Ja(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);q7(i,o),PM(e,a,i),Y7(i)}),r&&s)throw new Error(e+' contains ".value" child '+Ja(i)+" in addition to actual children.")}},vq=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!AM(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hq(n))throw new Error(KH(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mq{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gq(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();n!==null&&!QN(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Kl(e,t,n){gq(e,n),pq(e,i=>Xr(i,t)||Xr(t,i))}function pq(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(_q(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function _q(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();qd&&Oi("event: "+n.toString()),Sh(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yq="repo_interrupt",bq=25;class wq{constructor(t,n,i,r){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mq,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xm(),this.transactionQueueTree_=new yE,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Sq(e,t,n){if(e.stats_=oE(e.repoInfo_),e.forceRestClient_||g7())e.server_=new Km(e.repoInfo_,(i,r,s,o)=>{FI(e,i,r,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>$I(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yi(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new mo(e.repoInfo_,t,(i,r,s,o)=>{FI(e,i,r,s,o)},i=>{$I(e,i)},i=>{Cq(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=S7(e.repoInfo_,()=>new wG(e.stats_,e.server_)),e.infoData_=new gG,e.infoSyncTree_=new MI({startListening:(i,r,s,o)=>{let a=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(a=Cp(e.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wE(e,"connected",!1),e.serverSyncTree_=new MI({startListening:(i,r,s,o)=>(e.server_.listen(i,s,r,(a,l)=>{const u=o(a,l);Kl(e.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{e.server_.unlisten(i,r)}})}function Eq(e){const n=e.infoData_.getNode(new Tn(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xM(e){return nq({timestamp:Eq(e)})}function FI(e,t,n,i,r){e.dataUpdateCount++;const s=new Tn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const l=Lm(n,u=>Vi(u));o=tq(e.serverSyncTree_,s,l,r)}else{const l=Vi(n);o=eq(e.serverSyncTree_,s,l,r)}else if(i){const l=Lm(n,u=>Vi(u));o=ZG(e.serverSyncTree_,s,l)}else{const l=Vi(n);o=Cp(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=EE(e,s)),Kl(e.eventQueue_,a,o)}function $I(e,t){wE(e,"connected",t),t===!1&&Tq(e)}function Cq(e,t){Ur(t,(n,i)=>{wE(e,n,i)})}function wE(e,t,n){const i=new Tn("/.info/"+t),r=Vi(n);e.infoData_.updateSnapshot(i,r);const s=Cp(e.infoSyncTree_,i,r);Kl(e.eventQueue_,i,s)}function kq(e){return e.nextWriteId_++}function Tq(e){DM(e,"onDisconnectEvents");const t=xM(e),n=Xm();Jb(e.onDisconnect_,tn(),(r,s)=>{const o=sq(r,s,e.serverSyncTree_,t);rM(n,r,o)});let i=[];Jb(n,tn(),(r,s)=>{i=i.concat(Cp(e.serverSyncTree_,r,s));const o=xq(e,r);EE(e,o)}),e.onDisconnect_=Xm(),Kl(e.eventQueue_,tn(),i)}function Iq(e){e.persistentConnection_&&e.persistentConnection_.interrupt(yq)}function DM(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Oi(n,...t)}function RM(e,t,n){return yM(e.serverSyncTree_,t,n)||Kt.EMPTY_NODE}function SE(e,t=e.transactionQueueTree_){if(t||Ip(e,t),Mc(t)){const n=VM(e,t);Ue(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&Aq(e,Ch(t),n)}else TM(t)&&Tp(t,n=>{SE(e,n)})}function Aq(e,t,n){const i=n.map(u=>u.currentWriteId),r=RM(e,t,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const d=n[u];Ue(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Mr(t,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{DM(e,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Nu(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ip(e,bE(e.transactionQueueTree_,t)),SE(e,e.transactionQueueTree_),Kl(e.eventQueue_,t,d);for(let f=0;f<c.length;f++)Sh(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Sr("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}EE(e,t)}},o)}function EE(e,t){const n=OM(e,t),i=Ch(n),r=VM(e,n);return Pq(e,r,i),i}function Pq(e,t,n){if(t.length===0)return;const i=[];let r=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=Mr(n,l.path);let d=!1,c;if(Ue(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,r=r.concat(Nu(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=bq)d=!0,c="maxretry",r=r.concat(Nu(e.serverSyncTree_,l.currentWriteId,!0));else{const f=RM(e,l.path,o);l.currentInputSnapshot=f;const v=t[a].update(f.val());if(v!==void 0){PM("transaction failed: Data returned ",v,l.path);let g=Vi(v);typeof v=="object"&&v!=null&&xo(v,".priority")||(g=g.updatePriority(f.getPriority()));const _=l.currentWriteId,y=xM(e),b=oq(g,f,y);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=b,l.currentWriteId=kq(e),o.splice(o.indexOf(_),1),r=r.concat(JG(e.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),r=r.concat(Nu(e.serverSyncTree_,_,!0))}else d=!0,c="nodata",r=r.concat(Nu(e.serverSyncTree_,l.currentWriteId,!0))}Kl(e.eventQueue_,n,r),r=[],d&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(c==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(c),!1,null))))}Ip(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)Sh(i[a]);SE(e,e.transactionQueueTree_)}function OM(e,t){let n,i=e.transactionQueueTree_;for(n=Mt(t);n!==null&&Mc(i)===void 0;)i=bE(i,n),t=Sn(t),n=Mt(t);return i}function VM(e,t){const n=[];return NM(e,t,n),n.sort((i,r)=>i.order-r.order),n}function NM(e,t,n){const i=Mc(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Tp(t,r=>{NM(e,r,n)})}function Ip(e,t){const n=Mc(t);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,kM(t,n.length>0?n:void 0)}Tp(t,i=>{Ip(e,i)})}function xq(e,t){const n=Ch(OM(e,t)),i=bE(e.transactionQueueTree_,t);return lq(i,r=>{Oy(e,r)}),Oy(e,i),IM(i,r=>{Oy(e,r)}),n}function Oy(e,t){const n=Mc(t);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Ue(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(Ue(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Nu(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?kM(t,void 0):n.length=s+1,Kl(e.eventQueue_,Ch(t),r);for(let o=0;o<i.length;o++)Sh(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dq(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}t+="/"+r}return t}function Rq(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Sr(`Invalid query segment '${n}' in query '${e}'`)}return t}const BI=function(e,t){const n=Oq(e),i=n.namespace;n.domain==="firebase.com"&&xl(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&xl("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||l7();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new y7(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Tn(n.pathString)}},Oq=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let d=e.indexOf("/");d===-1&&(d=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),t=e.substring(0,Math.min(d,c)),d<c&&(r=Dq(e.substring(d,c)));const f=Rq(e.substring(Math.min(e.length,c)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const v=t.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=t.indexOf(".");i=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=i}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class CE{constructor(t,n,i,r){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Rt(this._path)?null:YN(this._path)}get ref(){return new Lc(this._repo,this._path)}get _queryIdentifier(){const t=kI(this._queryParams),n=rE(t);return n==="{}"?"default":n}get _queryObject(){return kI(this._queryParams)}isEqual(t){if(t=Gn(t),!(t instanceof CE))return!1;const n=this._repo===t._repo,i=QN(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+z7(this._path)}}class Lc extends CE{constructor(t,n){super(t,n,new cE,!1)}get parent(){const t=XN(this._path);return t===null?null:new Lc(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}XG(Lc);QG(Lc);/**
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
 */const Vq="FIREBASE_DATABASE_EMULATOR_HOST",o0={};let Nq=!1;function Mq(e,t,n,i,r){let s=i||e.options.databaseURL;s===void 0&&(e.options.projectId||xl("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oi("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=BI(s,r),a=o.repoInfo,l;typeof process<"u"&&oI&&(l=oI[Vq]),l?(s=`http://${l}?ns=${a.namespace}`,o=BI(s,r),a=o.repoInfo):o.repoInfo.secure;const u=new _7(e.name,e.options,t);vq("Invalid Firebase Database URL",o),Rt(o.path)||xl("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Fq(a,e,u,new p7(e.name,n));return new $q(d,e)}function Lq(e,t){const n=o0[t];(!n||n[e.key]!==e)&&xl(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Iq(e),delete n[e.key]}function Fq(e,t,n,i){let r=o0[t.name];r||(r={},o0[t.name]=r);let s=r[e.toURLString()];return s&&xl("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new wq(e,Nq,n,i),r[e.toURLString()]=s,s}class $q{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Sq(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lc(this._repo,tn())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lq(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&xl("Cannot call "+t+" on a deleted database.")}}/**
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
 */function Bq(e){n7(Ra),Os(new ss("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return Mq(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),wr(aI,lI,e),wr(aI,lI,"esm2017")}mo.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};mo.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Bq();var UI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gl,MM;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(D,S){function w(){}w.prototype=S.prototype,D.D=S.prototype,D.prototype=new w,D.prototype.constructor=D,D.C=function(C,A,P){for(var x=Array(arguments.length-2),U=2;U<arguments.length;U++)x[U-2]=arguments[U];return S.prototype[A].apply(C,x)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(D,S,w){w||(w=0);var C=Array(16);if(typeof S=="string")for(var A=0;16>A;++A)C[A]=S.charCodeAt(w++)|S.charCodeAt(w++)<<8|S.charCodeAt(w++)<<16|S.charCodeAt(w++)<<24;else for(A=0;16>A;++A)C[A]=S[w++]|S[w++]<<8|S[w++]<<16|S[w++]<<24;S=D.g[0],w=D.g[1],A=D.g[2];var P=D.g[3],x=S+(P^w&(A^P))+C[0]+3614090360&4294967295;S=w+(x<<7&4294967295|x>>>25),x=P+(A^S&(w^A))+C[1]+3905402710&4294967295,P=S+(x<<12&4294967295|x>>>20),x=A+(w^P&(S^w))+C[2]+606105819&4294967295,A=P+(x<<17&4294967295|x>>>15),x=w+(S^A&(P^S))+C[3]+3250441966&4294967295,w=A+(x<<22&4294967295|x>>>10),x=S+(P^w&(A^P))+C[4]+4118548399&4294967295,S=w+(x<<7&4294967295|x>>>25),x=P+(A^S&(w^A))+C[5]+1200080426&4294967295,P=S+(x<<12&4294967295|x>>>20),x=A+(w^P&(S^w))+C[6]+2821735955&4294967295,A=P+(x<<17&4294967295|x>>>15),x=w+(S^A&(P^S))+C[7]+4249261313&4294967295,w=A+(x<<22&4294967295|x>>>10),x=S+(P^w&(A^P))+C[8]+1770035416&4294967295,S=w+(x<<7&4294967295|x>>>25),x=P+(A^S&(w^A))+C[9]+2336552879&4294967295,P=S+(x<<12&4294967295|x>>>20),x=A+(w^P&(S^w))+C[10]+4294925233&4294967295,A=P+(x<<17&4294967295|x>>>15),x=w+(S^A&(P^S))+C[11]+2304563134&4294967295,w=A+(x<<22&4294967295|x>>>10),x=S+(P^w&(A^P))+C[12]+1804603682&4294967295,S=w+(x<<7&4294967295|x>>>25),x=P+(A^S&(w^A))+C[13]+4254626195&4294967295,P=S+(x<<12&4294967295|x>>>20),x=A+(w^P&(S^w))+C[14]+2792965006&4294967295,A=P+(x<<17&4294967295|x>>>15),x=w+(S^A&(P^S))+C[15]+1236535329&4294967295,w=A+(x<<22&4294967295|x>>>10),x=S+(A^P&(w^A))+C[1]+4129170786&4294967295,S=w+(x<<5&4294967295|x>>>27),x=P+(w^A&(S^w))+C[6]+3225465664&4294967295,P=S+(x<<9&4294967295|x>>>23),x=A+(S^w&(P^S))+C[11]+643717713&4294967295,A=P+(x<<14&4294967295|x>>>18),x=w+(P^S&(A^P))+C[0]+3921069994&4294967295,w=A+(x<<20&4294967295|x>>>12),x=S+(A^P&(w^A))+C[5]+3593408605&4294967295,S=w+(x<<5&4294967295|x>>>27),x=P+(w^A&(S^w))+C[10]+38016083&4294967295,P=S+(x<<9&4294967295|x>>>23),x=A+(S^w&(P^S))+C[15]+3634488961&4294967295,A=P+(x<<14&4294967295|x>>>18),x=w+(P^S&(A^P))+C[4]+3889429448&4294967295,w=A+(x<<20&4294967295|x>>>12),x=S+(A^P&(w^A))+C[9]+568446438&4294967295,S=w+(x<<5&4294967295|x>>>27),x=P+(w^A&(S^w))+C[14]+3275163606&4294967295,P=S+(x<<9&4294967295|x>>>23),x=A+(S^w&(P^S))+C[3]+4107603335&4294967295,A=P+(x<<14&4294967295|x>>>18),x=w+(P^S&(A^P))+C[8]+1163531501&4294967295,w=A+(x<<20&4294967295|x>>>12),x=S+(A^P&(w^A))+C[13]+2850285829&4294967295,S=w+(x<<5&4294967295|x>>>27),x=P+(w^A&(S^w))+C[2]+4243563512&4294967295,P=S+(x<<9&4294967295|x>>>23),x=A+(S^w&(P^S))+C[7]+1735328473&4294967295,A=P+(x<<14&4294967295|x>>>18),x=w+(P^S&(A^P))+C[12]+2368359562&4294967295,w=A+(x<<20&4294967295|x>>>12),x=S+(w^A^P)+C[5]+4294588738&4294967295,S=w+(x<<4&4294967295|x>>>28),x=P+(S^w^A)+C[8]+2272392833&4294967295,P=S+(x<<11&4294967295|x>>>21),x=A+(P^S^w)+C[11]+1839030562&4294967295,A=P+(x<<16&4294967295|x>>>16),x=w+(A^P^S)+C[14]+4259657740&4294967295,w=A+(x<<23&4294967295|x>>>9),x=S+(w^A^P)+C[1]+2763975236&4294967295,S=w+(x<<4&4294967295|x>>>28),x=P+(S^w^A)+C[4]+1272893353&4294967295,P=S+(x<<11&4294967295|x>>>21),x=A+(P^S^w)+C[7]+4139469664&4294967295,A=P+(x<<16&4294967295|x>>>16),x=w+(A^P^S)+C[10]+3200236656&4294967295,w=A+(x<<23&4294967295|x>>>9),x=S+(w^A^P)+C[13]+681279174&4294967295,S=w+(x<<4&4294967295|x>>>28),x=P+(S^w^A)+C[0]+3936430074&4294967295,P=S+(x<<11&4294967295|x>>>21),x=A+(P^S^w)+C[3]+3572445317&4294967295,A=P+(x<<16&4294967295|x>>>16),x=w+(A^P^S)+C[6]+76029189&4294967295,w=A+(x<<23&4294967295|x>>>9),x=S+(w^A^P)+C[9]+3654602809&4294967295,S=w+(x<<4&4294967295|x>>>28),x=P+(S^w^A)+C[12]+3873151461&4294967295,P=S+(x<<11&4294967295|x>>>21),x=A+(P^S^w)+C[15]+530742520&4294967295,A=P+(x<<16&4294967295|x>>>16),x=w+(A^P^S)+C[2]+3299628645&4294967295,w=A+(x<<23&4294967295|x>>>9),x=S+(A^(w|~P))+C[0]+4096336452&4294967295,S=w+(x<<6&4294967295|x>>>26),x=P+(w^(S|~A))+C[7]+1126891415&4294967295,P=S+(x<<10&4294967295|x>>>22),x=A+(S^(P|~w))+C[14]+2878612391&4294967295,A=P+(x<<15&4294967295|x>>>17),x=w+(P^(A|~S))+C[5]+4237533241&4294967295,w=A+(x<<21&4294967295|x>>>11),x=S+(A^(w|~P))+C[12]+1700485571&4294967295,S=w+(x<<6&4294967295|x>>>26),x=P+(w^(S|~A))+C[3]+2399980690&4294967295,P=S+(x<<10&4294967295|x>>>22),x=A+(S^(P|~w))+C[10]+4293915773&4294967295,A=P+(x<<15&4294967295|x>>>17),x=w+(P^(A|~S))+C[1]+2240044497&4294967295,w=A+(x<<21&4294967295|x>>>11),x=S+(A^(w|~P))+C[8]+1873313359&4294967295,S=w+(x<<6&4294967295|x>>>26),x=P+(w^(S|~A))+C[15]+4264355552&4294967295,P=S+(x<<10&4294967295|x>>>22),x=A+(S^(P|~w))+C[6]+2734768916&4294967295,A=P+(x<<15&4294967295|x>>>17),x=w+(P^(A|~S))+C[13]+1309151649&4294967295,w=A+(x<<21&4294967295|x>>>11),x=S+(A^(w|~P))+C[4]+4149444226&4294967295,S=w+(x<<6&4294967295|x>>>26),x=P+(w^(S|~A))+C[11]+3174756917&4294967295,P=S+(x<<10&4294967295|x>>>22),x=A+(S^(P|~w))+C[2]+718787259&4294967295,A=P+(x<<15&4294967295|x>>>17),x=w+(P^(A|~S))+C[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(A+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+A&4294967295,D.g[3]=D.g[3]+P&4294967295}i.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var w=S-this.blockSize,C=this.B,A=this.h,P=0;P<S;){if(A==0)for(;P<=w;)r(this,D,P),P+=this.blockSize;if(typeof D=="string"){for(;P<S;)if(C[A++]=D.charCodeAt(P++),A==this.blockSize){r(this,C),A=0;break}}else for(;P<S;)if(C[A++]=D[P++],A==this.blockSize){r(this,C),A=0;break}}this.h=A,this.o+=S},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var w=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=w&255,w/=256;for(this.u(D),D=Array(16),S=w=0;4>S;++S)for(var C=0;32>C;C+=8)D[w++]=this.g[S]>>>C&255;return D};function s(D,S){var w=a;return Object.prototype.hasOwnProperty.call(w,D)?w[D]:w[D]=S(D)}function o(D,S){this.h=S;for(var w=[],C=!0,A=D.length-1;0<=A;A--){var P=D[A]|0;C&&P==S||(w[A]=P,C=!1)}this.g=w}var a={};function l(D){return-128<=D&&128>D?s(D,function(S){return new o([S|0],0>S?-1:0)}):new o([D|0],0>D?-1:0)}function u(D){if(isNaN(D)||!isFinite(D))return c;if(0>D)return _(u(-D));for(var S=[],w=1,C=0;D>=w;C++)S[C]=D/w|0,w*=4294967296;return new o(S,0)}function d(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return _(d(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(S,8)),C=c,A=0;A<D.length;A+=8){var P=Math.min(8,D.length-A),x=parseInt(D.substring(A,A+P),S);8>P?(P=u(Math.pow(S,P)),C=C.j(P).add(u(x))):(C=C.j(w),C=C.add(u(x)))}return C}var c=l(0),f=l(1),v=l(16777216);e=o.prototype,e.m=function(){if(p(this))return-_(this).m();for(var D=0,S=1,w=0;w<this.g.length;w++){var C=this.i(w);D+=(0<=C?C:4294967296+C)*S,S*=4294967296}return D},e.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(g(this))return"0";if(p(this))return"-"+_(this).toString(D);for(var S=u(Math.pow(D,6)),w=this,C="";;){var A=k(w,S).g;w=y(w,A.j(S));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(D);if(w=A,g(w))return P+C;for(;6>P.length;)P="0"+P;C=P+C}},e.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function g(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function p(D){return D.h==-1}e.l=function(D){return D=y(this,D),p(D)?-1:g(D)?0:1};function _(D){for(var S=D.g.length,w=[],C=0;C<S;C++)w[C]=~D.g[C];return new o(w,~D.h).add(f)}e.abs=function(){return p(this)?_(this):this},e.add=function(D){for(var S=Math.max(this.g.length,D.g.length),w=[],C=0,A=0;A<=S;A++){var P=C+(this.i(A)&65535)+(D.i(A)&65535),x=(P>>>16)+(this.i(A)>>>16)+(D.i(A)>>>16);C=x>>>16,P&=65535,x&=65535,w[A]=x<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function y(D,S){return D.add(_(S))}e.j=function(D){if(g(this)||g(D))return c;if(p(this))return p(D)?_(this).j(_(D)):_(_(this).j(D));if(p(D))return _(this.j(_(D)));if(0>this.l(v)&&0>D.l(v))return u(this.m()*D.m());for(var S=this.g.length+D.g.length,w=[],C=0;C<2*S;C++)w[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<D.g.length;A++){var P=this.i(C)>>>16,x=this.i(C)&65535,U=D.i(A)>>>16,$=D.i(A)&65535;w[2*C+2*A]+=x*$,b(w,2*C+2*A),w[2*C+2*A+1]+=P*$,b(w,2*C+2*A+1),w[2*C+2*A+1]+=x*U,b(w,2*C+2*A+1),w[2*C+2*A+2]+=P*U,b(w,2*C+2*A+2)}for(C=0;C<S;C++)w[C]=w[2*C+1]<<16|w[2*C];for(C=S;C<2*S;C++)w[C]=0;return new o(w,0)};function b(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function E(D,S){this.g=D,this.h=S}function k(D,S){if(g(S))throw Error("division by zero");if(g(D))return new E(c,c);if(p(D))return S=k(_(D),S),new E(_(S.g),_(S.h));if(p(S))return S=k(D,_(S)),new E(_(S.g),S.h);if(30<D.g.length){if(p(D)||p(S))throw Error("slowDivide_ only works with positive integers.");for(var w=f,C=S;0>=C.l(D);)w=R(w),C=R(C);var A=O(w,1),P=O(C,1);for(C=O(C,2),w=O(w,2);!g(C);){var x=P.add(C);0>=x.l(D)&&(A=A.add(w),P=x),C=O(C,1),w=O(w,1)}return S=y(D,A.j(S)),new E(A,S)}for(A=c;0<=D.l(S);){for(w=Math.max(1,Math.floor(D.m()/S.m())),C=Math.ceil(Math.log(w)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),P=u(w),x=P.j(S);p(x)||0<x.l(D);)w-=C,P=u(w),x=P.j(S);g(P)&&(P=f),A=A.add(P),D=y(D,x)}return new E(A,D)}e.A=function(D){return k(this,D).h},e.and=function(D){for(var S=Math.max(this.g.length,D.g.length),w=[],C=0;C<S;C++)w[C]=this.i(C)&D.i(C);return new o(w,this.h&D.h)},e.or=function(D){for(var S=Math.max(this.g.length,D.g.length),w=[],C=0;C<S;C++)w[C]=this.i(C)|D.i(C);return new o(w,this.h|D.h)},e.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),w=[],C=0;C<S;C++)w[C]=this.i(C)^D.i(C);return new o(w,this.h^D.h)};function R(D){for(var S=D.g.length+1,w=[],C=0;C<S;C++)w[C]=D.i(C)<<1|D.i(C-1)>>>31;return new o(w,D.h)}function O(D,S){var w=S>>5;S%=32;for(var C=D.g.length-w,A=[],P=0;P<C;P++)A[P]=0<S?D.i(P+w)>>>S|D.i(P+w+1)<<32-S:D.i(P+w);return new o(A,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,MM=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,gl=o}).apply(typeof UI<"u"?UI:typeof self<"u"?self:typeof window<"u"?window:{});var Cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var LM,FM,Dd,$M,lm,a0,BM,UM,jM;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(m,T,V){return m==Array.prototype||m==Object.prototype||(m[T]=V.value),m};function n(m){m=[typeof globalThis=="object"&&globalThis,m,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cv=="object"&&Cv];for(var T=0;T<m.length;++T){var V=m[T];if(V&&V.Math==Math)return V}throw Error("Cannot find global object")}var i=n(this);function r(m,T){if(T)e:{var V=i;m=m.split(".");for(var F=0;F<m.length-1;F++){var he=m[F];if(!(he in V))break e;V=V[he]}m=m[m.length-1],F=V[m],T=T(F),T!=F&&T!=null&&t(V,m,{configurable:!0,writable:!0,value:T})}}function s(m,T){m instanceof String&&(m+="");var V=0,F=!1,he={next:function(){if(!F&&V<m.length){var pe=V++;return{value:T(pe,m[pe]),done:!1}}return F=!0,{done:!0,value:void 0}}};return he[Symbol.iterator]=function(){return he},he}r("Array.prototype.values",function(m){return m||function(){return s(this,function(T,V){return V})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(m){var T=typeof m;return T=T!="object"?T:m?Array.isArray(m)?"array":T:"null",T=="array"||T=="object"&&typeof m.length=="number"}function u(m){var T=typeof m;return T=="object"&&m!=null||T=="function"}function d(m,T,V){return m.call.apply(m.bind,arguments)}function c(m,T,V){if(!m)throw Error();if(2<arguments.length){var F=Array.prototype.slice.call(arguments,2);return function(){var he=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(he,F),m.apply(T,he)}}return function(){return m.apply(T,arguments)}}function f(m,T,V){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:c,f.apply(null,arguments)}function v(m,T){var V=Array.prototype.slice.call(arguments,1);return function(){var F=V.slice();return F.push.apply(F,arguments),m.apply(this,F)}}function g(m,T){function V(){}V.prototype=T.prototype,m.aa=T.prototype,m.prototype=new V,m.prototype.constructor=m,m.Qb=function(F,he,pe){for(var Be=Array(arguments.length-2),an=2;an<arguments.length;an++)Be[an-2]=arguments[an];return T.prototype[he].apply(F,Be)}}function p(m){const T=m.length;if(0<T){const V=Array(T);for(let F=0;F<T;F++)V[F]=m[F];return V}return[]}function _(m,T){for(let V=1;V<arguments.length;V++){const F=arguments[V];if(l(F)){const he=m.length||0,pe=F.length||0;m.length=he+pe;for(let Be=0;Be<pe;Be++)m[he+Be]=F[Be]}else m.push(F)}}class y{constructor(T,V){this.i=T,this.j=V,this.h=0,this.g=null}get(){let T;return 0<this.h?(this.h--,T=this.g,this.g=T.next,T.next=null):T=this.i(),T}}function b(m){return/^[\s\xa0]*$/.test(m)}function E(){var m=a.navigator;return m&&(m=m.userAgent)?m:""}function k(m){return k[" "](m),m}k[" "]=function(){};var R=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function O(m,T,V){for(const F in m)T.call(V,m[F],F,m)}function D(m,T){for(const V in m)T.call(void 0,m[V],V,m)}function S(m){const T={};for(const V in m)T[V]=m[V];return T}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(m,T){let V,F;for(let he=1;he<arguments.length;he++){F=arguments[he];for(V in F)m[V]=F[V];for(let pe=0;pe<w.length;pe++)V=w[pe],Object.prototype.hasOwnProperty.call(F,V)&&(m[V]=F[V])}}function A(m){var T=1;m=m.split(":");const V=[];for(;0<T&&m.length;)V.push(m.shift()),T--;return m.length&&V.push(m.join(":")),V}function P(m){a.setTimeout(()=>{throw m},0)}function x(){var m=K;let T=null;return m.g&&(T=m.g,m.g=m.g.next,m.g||(m.h=null),T.next=null),T}class U{constructor(){this.h=this.g=null}add(T,V){const F=$.get();F.set(T,V),this.h?this.h.next=F:this.g=F,this.h=F}}var $=new y(()=>new j,m=>m.reset());class j{constructor(){this.next=this.g=this.h=null}set(T,V){this.h=T,this.g=V,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,W=!1,K=new U,G=()=>{const m=a.Promise.resolve(void 0);Y=()=>{m.then(te)}};var te=()=>{for(var m;m=x();){try{m.h.call(m.g)}catch(V){P(V)}var T=$;T.j(m),100>T.h&&(T.h++,m.next=T.g,T.g=m)}W=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(m,T){this.type=m,this.g=this.target=T,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var m=!1,T=Object.defineProperty({},"passive",{get:function(){m=!0}});try{const V=()=>{};a.addEventListener("test",V,T),a.removeEventListener("test",V,T)}catch{}return m}();function Ne(m,T){if(_e.call(this,m?m.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,m){var V=this.type=m.type,F=m.changedTouches&&m.changedTouches.length?m.changedTouches[0]:null;if(this.target=m.target||m.srcElement,this.g=T,T=m.relatedTarget){if(R){e:{try{k(T.nodeName);var he=!0;break e}catch{}he=!1}he||(T=null)}}else V=="mouseover"?T=m.fromElement:V=="mouseout"&&(T=m.toElement);this.relatedTarget=T,F?(this.clientX=F.clientX!==void 0?F.clientX:F.pageX,this.clientY=F.clientY!==void 0?F.clientY:F.pageY,this.screenX=F.screenX||0,this.screenY=F.screenY||0):(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0),this.button=m.button,this.key=m.key||"",this.ctrlKey=m.ctrlKey,this.altKey=m.altKey,this.shiftKey=m.shiftKey,this.metaKey=m.metaKey,this.pointerId=m.pointerId||0,this.pointerType=typeof m.pointerType=="string"?m.pointerType:Q[m.pointerType]||"",this.state=m.state,this.i=m,m.defaultPrevented&&Ne.aa.h.call(this)}}g(Ne,_e);var Q={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var m=this.i;m.preventDefault?m.preventDefault():m.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),q=0;function ie(m,T,V,F,he){this.listener=m,this.proxy=null,this.src=T,this.type=V,this.capture=!!F,this.ha=he,this.key=++q,this.da=this.fa=!1}function ce(m){m.da=!0,m.listener=null,m.proxy=null,m.src=null,m.ha=null}function ne(m){this.src=m,this.g={},this.h=0}ne.prototype.add=function(m,T,V,F,he){var pe=m.toString();m=this.g[pe],m||(m=this.g[pe]=[],this.h++);var Be=M(m,T,F,he);return-1<Be?(T=m[Be],V||(T.fa=!1)):(T=new ie(T,this.src,pe,!!F,he),T.fa=V,m.push(T)),T};function Se(m,T){var V=T.type;if(V in m.g){var F=m.g[V],he=Array.prototype.indexOf.call(F,T,void 0),pe;(pe=0<=he)&&Array.prototype.splice.call(F,he,1),pe&&(ce(T),m.g[V].length==0&&(delete m.g[V],m.h--))}}function M(m,T,V,F){for(var he=0;he<m.length;++he){var pe=m[he];if(!pe.da&&pe.listener==T&&pe.capture==!!V&&pe.ha==F)return he}return-1}var L="closure_lm_"+(1e6*Math.random()|0),ee={};function fe(m,T,V,F,he){if(Array.isArray(T)){for(var pe=0;pe<T.length;pe++)fe(m,T[pe],V,F,he);return null}return V=He(V),m&&m[B]?m.K(T,V,u(F)?!!F.capture:!!F,he):ae(m,T,V,!1,F,he)}function ae(m,T,V,F,he,pe){if(!T)throw Error("Invalid event type");var Be=u(he)?!!he.capture:!!he,an=ze(m);if(an||(m[L]=an=new ne(m)),V=an.add(T,V,F,Be,pe),V.proxy)return V;if(F=me(),V.proxy=F,F.src=m,F.listener=V,m.addEventListener)Ae||(he=Be),he===void 0&&(he=!1),m.addEventListener(T.toString(),F,he);else if(m.attachEvent)m.attachEvent(Re(T.toString()),F);else if(m.addListener&&m.removeListener)m.addListener(F);else throw Error("addEventListener and attachEvent are unavailable.");return V}function me(){function m(V){return T.call(m.src,m.listener,V)}const T=be;return m}function Pe(m,T,V,F,he){if(Array.isArray(T))for(var pe=0;pe<T.length;pe++)Pe(m,T[pe],V,F,he);else F=u(F)?!!F.capture:!!F,V=He(V),m&&m[B]?(m=m.i,T=String(T).toString(),T in m.g&&(pe=m.g[T],V=M(pe,V,F,he),-1<V&&(ce(pe[V]),Array.prototype.splice.call(pe,V,1),pe.length==0&&(delete m.g[T],m.h--)))):m&&(m=ze(m))&&(T=m.g[T.toString()],m=-1,T&&(m=M(T,V,F,he)),(V=-1<m?T[m]:null)&&Ee(V))}function Ee(m){if(typeof m!="number"&&m&&!m.da){var T=m.src;if(T&&T[B])Se(T.i,m);else{var V=m.type,F=m.proxy;T.removeEventListener?T.removeEventListener(V,F,m.capture):T.detachEvent?T.detachEvent(Re(V),F):T.addListener&&T.removeListener&&T.removeListener(F),(V=ze(T))?(Se(V,m),V.h==0&&(V.src=null,T[L]=null)):ce(m)}}}function Re(m){return m in ee?ee[m]:ee[m]="on"+m}function be(m,T){if(m.da)m=!0;else{T=new Ne(T,this);var V=m.listener,F=m.ha||m.src;m.fa&&Ee(m),m=V.call(F,T)}return m}function ze(m){return m=m[L],m instanceof ne?m:null}var Me="__closure_events_fn_"+(1e9*Math.random()>>>0);function He(m){return typeof m=="function"?m:(m[Me]||(m[Me]=function(T){return m.handleEvent(T)}),m[Me])}function Ce(){oe.call(this),this.i=new ne(this),this.M=this,this.F=null}g(Ce,oe),Ce.prototype[B]=!0,Ce.prototype.removeEventListener=function(m,T,V,F){Pe(this,m,T,V,F)};function Ze(m,T){var V,F=m.F;if(F)for(V=[];F;F=F.F)V.push(F);if(m=m.M,F=T.type||T,typeof T=="string")T=new _e(T,m);else if(T instanceof _e)T.target=T.target||m;else{var he=T;T=new _e(F,m),C(T,he)}if(he=!0,V)for(var pe=V.length-1;0<=pe;pe--){var Be=T.g=V[pe];he=mt(Be,F,!0,T)&&he}if(Be=T.g=m,he=mt(Be,F,!0,T)&&he,he=mt(Be,F,!1,T)&&he,V)for(pe=0;pe<V.length;pe++)Be=T.g=V[pe],he=mt(Be,F,!1,T)&&he}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var m=this.i,T;for(T in m.g){for(var V=m.g[T],F=0;F<V.length;F++)ce(V[F]);delete m.g[T],m.h--}}this.F=null},Ce.prototype.K=function(m,T,V,F){return this.i.add(String(m),T,!1,V,F)},Ce.prototype.L=function(m,T,V,F){return this.i.add(String(m),T,!0,V,F)};function mt(m,T,V,F){if(T=m.i.g[String(T)],!T)return!0;T=T.concat();for(var he=!0,pe=0;pe<T.length;++pe){var Be=T[pe];if(Be&&!Be.da&&Be.capture==V){var an=Be.listener,vi=Be.ha||Be.src;Be.fa&&Se(m.i,Be),he=an.call(vi,F)!==!1&&he}}return he&&!F.defaultPrevented}function xt(m,T,V){if(typeof m=="function")V&&(m=f(m,V));else if(m&&typeof m.handleEvent=="function")m=f(m.handleEvent,m);else throw Error("Invalid listener argument");return 2147483647<Number(T)?-1:a.setTimeout(m,T||0)}function le(m){m.g=xt(()=>{m.g=null,m.i&&(m.i=!1,le(m))},m.l);const T=m.h;m.h=null,m.m.apply(null,T)}class re extends oe{constructor(T,V){super(),this.m=T,this.l=V,this.h=null,this.i=!1,this.g=null}j(T){this.h=arguments,this.g?this.i=!0:le(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(m){oe.call(this),this.h=m,this.g={}}g(we,oe);var Fe=[];function et(m){O(m.g,function(T,V){this.g.hasOwnProperty(V)&&Ee(T)},m),m.g={}}we.prototype.N=function(){we.aa.N.call(this),et(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=a.JSON.stringify,qe=a.JSON.parse,kt=class{stringify(m){return a.JSON.stringify(m,void 0)}parse(m){return a.JSON.parse(m,void 0)}};function on(){}on.prototype.h=null;function ti(m){return m.h||(m.h=m.i())}function Zt(){}var Fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function si(){_e.call(this,"d")}g(si,_e);function Ii(){_e.call(this,"c")}g(Ii,_e);var dr={},du=null;function Lo(){return du=du||new Ce}dr.La="serverreachability";function fu(m){_e.call(this,dr.La,m)}g(fu,_e);function qs(m){const T=Lo();Ze(T,new fu(T))}dr.STAT_EVENT="statevent";function KC(m,T){_e.call(this,dr.STAT_EVENT,m),this.stat=T}g(KC,_e);function Wi(m){const T=Lo();Ze(T,new KC(T,m))}dr.Ma="timingevent";function XC(m,T){_e.call(this,dr.Ma,m),this.size=T}g(XC,_e);function rd(m,T){if(typeof m!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){m()},T)}function sd(){this.g=!0}sd.prototype.xa=function(){this.g=!1};function L6(m,T,V,F,he,pe){m.info(function(){if(m.g)if(pe)for(var Be="",an=pe.split("&"),vi=0;vi<an.length;vi++){var jt=an[vi].split("=");if(1<jt.length){var Ai=jt[0];jt=jt[1];var Pi=Ai.split("_");Be=2<=Pi.length&&Pi[1]=="type"?Be+(Ai+"="+jt+"&"):Be+(Ai+"=redacted&")}}else Be=null;else Be=pe;return"XMLHTTP REQ ("+F+") [attempt "+he+"]: "+T+`
`+V+`
`+Be})}function F6(m,T,V,F,he,pe,Be){m.info(function(){return"XMLHTTP RESP ("+F+") [ attempt "+he+"]: "+T+`
`+V+`
`+pe+" "+Be})}function hu(m,T,V,F){m.info(function(){return"XMLHTTP TEXT ("+T+"): "+B6(m,V)+(F?" "+F:"")})}function $6(m,T){m.info(function(){return"TIMEOUT: "+T})}sd.prototype.info=function(){};function B6(m,T){if(!m.g)return T;if(!T)return null;try{var V=JSON.parse(T);if(V){for(m=0;m<V.length;m++)if(Array.isArray(V[m])){var F=V[m];if(!(2>F.length)){var he=F[1];if(Array.isArray(he)&&!(1>he.length)){var pe=he[0];if(pe!="noop"&&pe!="stop"&&pe!="close")for(var Be=1;Be<he.length;Be++)he[Be]=""}}}}return ft(V)}catch{return T}}var Qh={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},QC={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},q_;function Jh(){}g(Jh,on),Jh.prototype.g=function(){return new XMLHttpRequest},Jh.prototype.i=function(){return{}},q_=new Jh;function Fo(m,T,V,F){this.j=m,this.i=T,this.l=V,this.R=F||1,this.U=new we(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new JC}function JC(){this.i=null,this.g="",this.h=!1}var ZC={},Y_={};function K_(m,T,V){m.L=1,m.v=nv(Ys(T)),m.m=V,m.P=!0,ek(m,null)}function ek(m,T){m.F=Date.now(),Zh(m),m.A=Ys(m.v);var V=m.A,F=m.R;Array.isArray(F)||(F=[String(F)]),vk(V.i,"t",F),m.C=0,V=m.j.J,m.h=new JC,m.g=Rk(m.j,V?T:null,!m.m),0<m.O&&(m.M=new re(f(m.Y,m,m.g),m.O)),T=m.U,V=m.g,F=m.ca;var he="readystatechange";Array.isArray(he)||(he&&(Fe[0]=he.toString()),he=Fe);for(var pe=0;pe<he.length;pe++){var Be=fe(V,he[pe],F||T.handleEvent,!1,T.h||T);if(!Be)break;T.g[Be.key]=Be}T=m.H?S(m.H):{},m.m?(m.u||(m.u="POST"),T["Content-Type"]="application/x-www-form-urlencoded",m.g.ea(m.A,m.u,m.m,T)):(m.u="GET",m.g.ea(m.A,m.u,null,T)),qs(),L6(m.i,m.u,m.A,m.l,m.R,m.m)}Fo.prototype.ca=function(m){m=m.target;const T=this.M;T&&Ks(m)==3?T.j():this.Y(m)},Fo.prototype.Y=function(m){try{if(m==this.g)e:{const Pi=Ks(this.g);var T=this.g.Ba();const gu=this.g.Z();if(!(3>Pi)&&(Pi!=3||this.g&&(this.h.h||this.g.oa()||wk(this.g)))){this.J||Pi!=4||T==7||(T==8||0>=gu?qs(3):qs(2)),X_(this);var V=this.g.Z();this.X=V;t:if(tk(this)){var F=wk(this.g);m="";var he=F.length,pe=Ks(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ja(this),od(this);var Be="";break t}this.h.i=new a.TextDecoder}for(T=0;T<he;T++)this.h.h=!0,m+=this.h.i.decode(F[T],{stream:!(pe&&T==he-1)});F.length=0,this.h.g+=m,this.C=0,Be=this.h.g}else Be=this.g.oa();if(this.o=V==200,F6(this.i,this.u,this.A,this.l,this.R,Pi,V),this.o){if(this.T&&!this.K){t:{if(this.g){var an,vi=this.g;if((an=vi.g?vi.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(an)){var jt=an;break t}}jt=null}if(V=jt)hu(this.i,this.l,V,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Q_(this,V);else{this.o=!1,this.s=3,Wi(12),ja(this),od(this);break e}}if(this.P){V=!0;let Wr;for(;!this.J&&this.C<Be.length;)if(Wr=U6(this,Be),Wr==Y_){Pi==4&&(this.s=4,Wi(14),V=!1),hu(this.i,this.l,null,"[Incomplete Response]");break}else if(Wr==ZC){this.s=4,Wi(15),hu(this.i,this.l,Be,"[Invalid Chunk]"),V=!1;break}else hu(this.i,this.l,Wr,null),Q_(this,Wr);if(tk(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pi!=4||Be.length!=0||this.h.h||(this.s=1,Wi(16),V=!1),this.o=this.o&&V,!V)hu(this.i,this.l,Be,"[Invalid Chunked Response]"),ja(this),od(this);else if(0<Be.length&&!this.W){this.W=!0;var Ai=this.j;Ai.g==this&&Ai.ba&&!Ai.M&&(Ai.j.info("Great, no buffering proxy detected. Bytes received: "+Be.length),iy(Ai),Ai.M=!0,Wi(11))}}else hu(this.i,this.l,Be,null),Q_(this,Be);Pi==4&&ja(this),this.o&&!this.J&&(Pi==4?Ak(this.j,this):(this.o=!1,Zh(this)))}else r3(this.g),V==400&&0<Be.indexOf("Unknown SID")?(this.s=3,Wi(12)):(this.s=0,Wi(13)),ja(this),od(this)}}}catch{}finally{}};function tk(m){return m.g?m.u=="GET"&&m.L!=2&&m.j.Ca:!1}function U6(m,T){var V=m.C,F=T.indexOf(`
`,V);return F==-1?Y_:(V=Number(T.substring(V,F)),isNaN(V)?ZC:(F+=1,F+V>T.length?Y_:(T=T.slice(F,F+V),m.C=F+V,T)))}Fo.prototype.cancel=function(){this.J=!0,ja(this)};function Zh(m){m.S=Date.now()+m.I,nk(m,m.I)}function nk(m,T){if(m.B!=null)throw Error("WatchDog timer not null");m.B=rd(f(m.ba,m),T)}function X_(m){m.B&&(a.clearTimeout(m.B),m.B=null)}Fo.prototype.ba=function(){this.B=null;const m=Date.now();0<=m-this.S?($6(this.i,this.A),this.L!=2&&(qs(),Wi(17)),ja(this),this.s=2,od(this)):nk(this,this.S-m)};function od(m){m.j.G==0||m.J||Ak(m.j,m)}function ja(m){X_(m);var T=m.M;T&&typeof T.ma=="function"&&T.ma(),m.M=null,et(m.U),m.g&&(T=m.g,m.g=null,T.abort(),T.ma())}function Q_(m,T){try{var V=m.j;if(V.G!=0&&(V.g==m||J_(V.h,m))){if(!m.K&&J_(V.h,m)&&V.G==3){try{var F=V.Da.g.parse(T)}catch{F=null}if(Array.isArray(F)&&F.length==3){var he=F;if(he[0]==0){e:if(!V.u){if(V.g)if(V.g.F+3e3<m.F)av(V),sv(V);else break e;ny(V),Wi(18)}}else V.za=he[1],0<V.za-V.T&&37500>he[2]&&V.F&&V.v==0&&!V.C&&(V.C=rd(f(V.Za,V),6e3));if(1>=sk(V.h)&&V.ca){try{V.ca()}catch{}V.ca=void 0}}else Wa(V,11)}else if((m.K||V.g==m)&&av(V),!b(T))for(he=V.Da.g.parse(T),T=0;T<he.length;T++){let jt=he[T];if(V.T=jt[0],jt=jt[1],V.G==2)if(jt[0]=="c"){V.K=jt[1],V.ia=jt[2];const Ai=jt[3];Ai!=null&&(V.la=Ai,V.j.info("VER="+V.la));const Pi=jt[4];Pi!=null&&(V.Aa=Pi,V.j.info("SVER="+V.Aa));const gu=jt[5];gu!=null&&typeof gu=="number"&&0<gu&&(F=1.5*gu,V.L=F,V.j.info("backChannelRequestTimeoutMs_="+F)),F=V;const Wr=m.g;if(Wr){const uv=Wr.g?Wr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uv){var pe=F.h;pe.g||uv.indexOf("spdy")==-1&&uv.indexOf("quic")==-1&&uv.indexOf("h2")==-1||(pe.j=pe.l,pe.g=new Set,pe.h&&(Z_(pe,pe.h),pe.h=null))}if(F.D){const ry=Wr.g?Wr.g.getResponseHeader("X-HTTP-Session-Id"):null;ry&&(F.ya=ry,bn(F.I,F.D,ry))}}V.G=3,V.l&&V.l.ua(),V.ba&&(V.R=Date.now()-m.F,V.j.info("Handshake RTT: "+V.R+"ms")),F=V;var Be=m;if(F.qa=Dk(F,F.J?F.ia:null,F.W),Be.K){ok(F.h,Be);var an=Be,vi=F.L;vi&&(an.I=vi),an.B&&(X_(an),Zh(an)),F.g=Be}else Tk(F);0<V.i.length&&ov(V)}else jt[0]!="stop"&&jt[0]!="close"||Wa(V,7);else V.G==3&&(jt[0]=="stop"||jt[0]=="close"?jt[0]=="stop"?Wa(V,7):ty(V):jt[0]!="noop"&&V.l&&V.l.ta(jt),V.v=0)}}qs(4)}catch{}}var j6=class{constructor(m,T){this.g=m,this.map=T}};function ik(m){this.l=m||10,a.PerformanceNavigationTiming?(m=a.performance.getEntriesByType("navigation"),m=0<m.length&&(m[0].nextHopProtocol=="hq"||m[0].nextHopProtocol=="h2")):m=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=m?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rk(m){return m.h?!0:m.g?m.g.size>=m.j:!1}function sk(m){return m.h?1:m.g?m.g.size:0}function J_(m,T){return m.h?m.h==T:m.g?m.g.has(T):!1}function Z_(m,T){m.g?m.g.add(T):m.h=T}function ok(m,T){m.h&&m.h==T?m.h=null:m.g&&m.g.has(T)&&m.g.delete(T)}ik.prototype.cancel=function(){if(this.i=ak(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const m of this.g.values())m.cancel();this.g.clear()}};function ak(m){if(m.h!=null)return m.i.concat(m.h.D);if(m.g!=null&&m.g.size!==0){let T=m.i;for(const V of m.g.values())T=T.concat(V.D);return T}return p(m.i)}function H6(m){if(m.V&&typeof m.V=="function")return m.V();if(typeof Map<"u"&&m instanceof Map||typeof Set<"u"&&m instanceof Set)return Array.from(m.values());if(typeof m=="string")return m.split("");if(l(m)){for(var T=[],V=m.length,F=0;F<V;F++)T.push(m[F]);return T}T=[],V=0;for(F in m)T[V++]=m[F];return T}function W6(m){if(m.na&&typeof m.na=="function")return m.na();if(!m.V||typeof m.V!="function"){if(typeof Map<"u"&&m instanceof Map)return Array.from(m.keys());if(!(typeof Set<"u"&&m instanceof Set)){if(l(m)||typeof m=="string"){var T=[];m=m.length;for(var V=0;V<m;V++)T.push(V);return T}T=[],V=0;for(const F in m)T[V++]=F;return T}}}function lk(m,T){if(m.forEach&&typeof m.forEach=="function")m.forEach(T,void 0);else if(l(m)||typeof m=="string")Array.prototype.forEach.call(m,T,void 0);else for(var V=W6(m),F=H6(m),he=F.length,pe=0;pe<he;pe++)T.call(void 0,F[pe],V&&V[pe],m)}var uk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z6(m,T){if(m){m=m.split("&");for(var V=0;V<m.length;V++){var F=m[V].indexOf("="),he=null;if(0<=F){var pe=m[V].substring(0,F);he=m[V].substring(F+1)}else pe=m[V];T(pe,he?decodeURIComponent(he.replace(/\+/g," ")):"")}}}function Ha(m){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,m instanceof Ha){this.h=m.h,ev(this,m.j),this.o=m.o,this.g=m.g,tv(this,m.s),this.l=m.l;var T=m.i,V=new ud;V.i=T.i,T.g&&(V.g=new Map(T.g),V.h=T.h),ck(this,V),this.m=m.m}else m&&(T=String(m).match(uk))?(this.h=!1,ev(this,T[1]||"",!0),this.o=ad(T[2]||""),this.g=ad(T[3]||"",!0),tv(this,T[4]),this.l=ad(T[5]||"",!0),ck(this,T[6]||"",!0),this.m=ad(T[7]||"")):(this.h=!1,this.i=new ud(null,this.h))}Ha.prototype.toString=function(){var m=[],T=this.j;T&&m.push(ld(T,dk,!0),":");var V=this.g;return(V||T=="file")&&(m.push("//"),(T=this.o)&&m.push(ld(T,dk,!0),"@"),m.push(encodeURIComponent(String(V)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),V=this.s,V!=null&&m.push(":",String(V))),(V=this.l)&&(this.g&&V.charAt(0)!="/"&&m.push("/"),m.push(ld(V,V.charAt(0)=="/"?Y6:q6,!0))),(V=this.i.toString())&&m.push("?",V),(V=this.m)&&m.push("#",ld(V,X6)),m.join("")};function Ys(m){return new Ha(m)}function ev(m,T,V){m.j=V?ad(T,!0):T,m.j&&(m.j=m.j.replace(/:$/,""))}function tv(m,T){if(T){if(T=Number(T),isNaN(T)||0>T)throw Error("Bad port number "+T);m.s=T}else m.s=null}function ck(m,T,V){T instanceof ud?(m.i=T,Q6(m.i,m.h)):(V||(T=ld(T,K6)),m.i=new ud(T,m.h))}function bn(m,T,V){m.i.set(T,V)}function nv(m){return bn(m,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),m}function ad(m,T){return m?T?decodeURI(m.replace(/%25/g,"%2525")):decodeURIComponent(m):""}function ld(m,T,V){return typeof m=="string"?(m=encodeURI(m).replace(T,G6),V&&(m=m.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m):null}function G6(m){return m=m.charCodeAt(0),"%"+(m>>4&15).toString(16)+(m&15).toString(16)}var dk=/[#\/\?@]/g,q6=/[#\?:]/g,Y6=/[#\?]/g,K6=/[#\?@]/g,X6=/#/g;function ud(m,T){this.h=this.g=null,this.i=m||null,this.j=!!T}function $o(m){m.g||(m.g=new Map,m.h=0,m.i&&z6(m.i,function(T,V){m.add(decodeURIComponent(T.replace(/\+/g," ")),V)}))}e=ud.prototype,e.add=function(m,T){$o(this),this.i=null,m=vu(this,m);var V=this.g.get(m);return V||this.g.set(m,V=[]),V.push(T),this.h+=1,this};function fk(m,T){$o(m),T=vu(m,T),m.g.has(T)&&(m.i=null,m.h-=m.g.get(T).length,m.g.delete(T))}function hk(m,T){return $o(m),T=vu(m,T),m.g.has(T)}e.forEach=function(m,T){$o(this),this.g.forEach(function(V,F){V.forEach(function(he){m.call(T,he,F,this)},this)},this)},e.na=function(){$o(this);const m=Array.from(this.g.values()),T=Array.from(this.g.keys()),V=[];for(let F=0;F<T.length;F++){const he=m[F];for(let pe=0;pe<he.length;pe++)V.push(T[F])}return V},e.V=function(m){$o(this);let T=[];if(typeof m=="string")hk(this,m)&&(T=T.concat(this.g.get(vu(this,m))));else{m=Array.from(this.g.values());for(let V=0;V<m.length;V++)T=T.concat(m[V])}return T},e.set=function(m,T){return $o(this),this.i=null,m=vu(this,m),hk(this,m)&&(this.h-=this.g.get(m).length),this.g.set(m,[T]),this.h+=1,this},e.get=function(m,T){return m?(m=this.V(m),0<m.length?String(m[0]):T):T};function vk(m,T,V){fk(m,T),0<V.length&&(m.i=null,m.g.set(vu(m,T),p(V)),m.h+=V.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const m=[],T=Array.from(this.g.keys());for(var V=0;V<T.length;V++){var F=T[V];const pe=encodeURIComponent(String(F)),Be=this.V(F);for(F=0;F<Be.length;F++){var he=pe;Be[F]!==""&&(he+="="+encodeURIComponent(String(Be[F]))),m.push(he)}}return this.i=m.join("&")};function vu(m,T){return T=String(T),m.j&&(T=T.toLowerCase()),T}function Q6(m,T){T&&!m.j&&($o(m),m.i=null,m.g.forEach(function(V,F){var he=F.toLowerCase();F!=he&&(fk(this,F),vk(this,he,V))},m)),m.j=T}function J6(m,T){const V=new sd;if(a.Image){const F=new Image;F.onload=v(Bo,V,"TestLoadImage: loaded",!0,T,F),F.onerror=v(Bo,V,"TestLoadImage: error",!1,T,F),F.onabort=v(Bo,V,"TestLoadImage: abort",!1,T,F),F.ontimeout=v(Bo,V,"TestLoadImage: timeout",!1,T,F),a.setTimeout(function(){F.ontimeout&&F.ontimeout()},1e4),F.src=m}else T(!1)}function Z6(m,T){const V=new sd,F=new AbortController,he=setTimeout(()=>{F.abort(),Bo(V,"TestPingServer: timeout",!1,T)},1e4);fetch(m,{signal:F.signal}).then(pe=>{clearTimeout(he),pe.ok?Bo(V,"TestPingServer: ok",!0,T):Bo(V,"TestPingServer: server error",!1,T)}).catch(()=>{clearTimeout(he),Bo(V,"TestPingServer: error",!1,T)})}function Bo(m,T,V,F,he){try{he&&(he.onload=null,he.onerror=null,he.onabort=null,he.ontimeout=null),F(V)}catch{}}function e3(){this.g=new kt}function t3(m,T,V){const F=V||"";try{lk(m,function(he,pe){let Be=he;u(he)&&(Be=ft(he)),T.push(F+pe+"="+encodeURIComponent(Be))})}catch(he){throw T.push(F+"type="+encodeURIComponent("_badmap")),he}}function cd(m){this.l=m.Ub||null,this.j=m.eb||!1}g(cd,on),cd.prototype.g=function(){return new iv(this.l,this.j)},cd.prototype.i=function(m){return function(){return m}}({});function iv(m,T){Ce.call(this),this.D=m,this.o=T,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(iv,Ce),e=iv.prototype,e.open=function(m,T){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=m,this.A=T,this.readyState=1,fd(this)},e.send=function(m){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const T={headers:this.u,method:this.B,credentials:this.m,cache:void 0};m&&(T.body=m),(this.D||a).fetch(new Request(this.A,T)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dd(this)),this.readyState=0},e.Sa=function(m){if(this.g&&(this.l=m,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=m.headers,this.readyState=2,fd(this)),this.g&&(this.readyState=3,fd(this),this.g)))if(this.responseType==="arraybuffer")m.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in m){if(this.j=m.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mk(this)}else m.text().then(this.Ra.bind(this),this.ga.bind(this))};function mk(m){m.j.read().then(m.Pa.bind(m)).catch(m.ga.bind(m))}e.Pa=function(m){if(this.g){if(this.o&&m.value)this.response.push(m.value);else if(!this.o){var T=m.value?m.value:new Uint8Array(0);(T=this.v.decode(T,{stream:!m.done}))&&(this.response=this.responseText+=T)}m.done?dd(this):fd(this),this.readyState==3&&mk(this)}},e.Ra=function(m){this.g&&(this.response=this.responseText=m,dd(this))},e.Qa=function(m){this.g&&(this.response=m,dd(this))},e.ga=function(){this.g&&dd(this)};function dd(m){m.readyState=4,m.l=null,m.j=null,m.v=null,fd(m)}e.setRequestHeader=function(m,T){this.u.append(m,T)},e.getResponseHeader=function(m){return this.h&&this.h.get(m.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const m=[],T=this.h.entries();for(var V=T.next();!V.done;)V=V.value,m.push(V[0]+": "+V[1]),V=T.next();return m.join(`\r
`)};function fd(m){m.onreadystatechange&&m.onreadystatechange.call(m)}Object.defineProperty(iv.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(m){this.m=m?"include":"same-origin"}});function gk(m){let T="";return O(m,function(V,F){T+=F,T+=":",T+=V,T+=`\r
`}),T}function ey(m,T,V){e:{for(F in V){var F=!1;break e}F=!0}F||(V=gk(V),typeof m=="string"?V!=null&&encodeURIComponent(String(V)):bn(m,T,V))}function $n(m){Ce.call(this),this.headers=new Map,this.o=m||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g($n,Ce);var n3=/^https?$/i,i3=["POST","PUT"];e=$n.prototype,e.Ha=function(m){this.J=m},e.ea=function(m,T,V,F){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+m);T=T?T.toUpperCase():"GET",this.D=m,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():q_.g(),this.v=this.o?ti(this.o):ti(q_),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(T,String(m),!0),this.B=!1}catch(pe){pk(this,pe);return}if(m=V||"",V=new Map(this.headers),F)if(Object.getPrototypeOf(F)===Object.prototype)for(var he in F)V.set(he,F[he]);else if(typeof F.keys=="function"&&typeof F.get=="function")for(const pe of F.keys())V.set(pe,F.get(pe));else throw Error("Unknown input type for opt_headers: "+String(F));F=Array.from(V.keys()).find(pe=>pe.toLowerCase()=="content-type"),he=a.FormData&&m instanceof a.FormData,!(0<=Array.prototype.indexOf.call(i3,T,void 0))||F||he||V.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[pe,Be]of V)this.g.setRequestHeader(pe,Be);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bk(this),this.u=!0,this.g.send(m),this.u=!1}catch(pe){pk(this,pe)}};function pk(m,T){m.h=!1,m.g&&(m.j=!0,m.g.abort(),m.j=!1),m.l=T,m.m=5,_k(m),rv(m)}function _k(m){m.A||(m.A=!0,Ze(m,"complete"),Ze(m,"error"))}e.abort=function(m){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=m||7,Ze(this,"complete"),Ze(this,"abort"),rv(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rv(this,!0)),$n.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?yk(this):this.bb())},e.bb=function(){yk(this)};function yk(m){if(m.h&&typeof o<"u"&&(!m.v[1]||Ks(m)!=4||m.Z()!=2)){if(m.u&&Ks(m)==4)xt(m.Ea,0,m);else if(Ze(m,"readystatechange"),Ks(m)==4){m.h=!1;try{const Be=m.Z();e:switch(Be){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var T=!0;break e;default:T=!1}var V;if(!(V=T)){var F;if(F=Be===0){var he=String(m.D).match(uk)[1]||null;!he&&a.self&&a.self.location&&(he=a.self.location.protocol.slice(0,-1)),F=!n3.test(he?he.toLowerCase():"")}V=F}if(V)Ze(m,"complete"),Ze(m,"success");else{m.m=6;try{var pe=2<Ks(m)?m.g.statusText:""}catch{pe=""}m.l=pe+" ["+m.Z()+"]",_k(m)}}finally{rv(m)}}}}function rv(m,T){if(m.g){bk(m);const V=m.g,F=m.v[0]?()=>{}:null;m.g=null,m.v=null,T||Ze(m,"ready");try{V.onreadystatechange=F}catch{}}}function bk(m){m.I&&(a.clearTimeout(m.I),m.I=null)}e.isActive=function(){return!!this.g};function Ks(m){return m.g?m.g.readyState:0}e.Z=function(){try{return 2<Ks(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(m){if(this.g){var T=this.g.responseText;return m&&T.indexOf(m)==0&&(T=T.substring(m.length)),qe(T)}};function wk(m){try{if(!m.g)return null;if("response"in m.g)return m.g.response;switch(m.H){case"":case"text":return m.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in m.g)return m.g.mozResponseArrayBuffer}return null}catch{return null}}function r3(m){const T={};m=(m.g&&2<=Ks(m)&&m.g.getAllResponseHeaders()||"").split(`\r
`);for(let F=0;F<m.length;F++){if(b(m[F]))continue;var V=A(m[F]);const he=V[0];if(V=V[1],typeof V!="string")continue;V=V.trim();const pe=T[he]||[];T[he]=pe,pe.push(V)}D(T,function(F){return F.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hd(m,T,V){return V&&V.internalChannelParams&&V.internalChannelParams[m]||T}function Sk(m){this.Aa=0,this.i=[],this.j=new sd,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hd("failFast",!1,m),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hd("baseRetryDelayMs",5e3,m),this.cb=hd("retryDelaySeedMs",1e4,m),this.Wa=hd("forwardChannelMaxRetries",2,m),this.wa=hd("forwardChannelRequestTimeoutMs",2e4,m),this.pa=m&&m.xmlHttpFactory||void 0,this.Xa=m&&m.Tb||void 0,this.Ca=m&&m.useFetchStreams||!1,this.L=void 0,this.J=m&&m.supportsCrossDomainXhr||!1,this.K="",this.h=new ik(m&&m.concurrentRequestLimit),this.Da=new e3,this.P=m&&m.fastHandshake||!1,this.O=m&&m.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=m&&m.Rb||!1,m&&m.xa&&this.j.xa(),m&&m.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&m&&m.detectBufferingProxy||!1,this.ja=void 0,m&&m.longPollingTimeout&&0<m.longPollingTimeout&&(this.ja=m.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Sk.prototype,e.la=8,e.G=1,e.connect=function(m,T,V,F){Wi(0),this.W=m,this.H=T||{},V&&F!==void 0&&(this.H.OSID=V,this.H.OAID=F),this.F=this.X,this.I=Dk(this,null,this.W),ov(this)};function ty(m){if(Ek(m),m.G==3){var T=m.U++,V=Ys(m.I);if(bn(V,"SID",m.K),bn(V,"RID",T),bn(V,"TYPE","terminate"),vd(m,V),T=new Fo(m,m.j,T),T.L=2,T.v=nv(Ys(V)),V=!1,a.navigator&&a.navigator.sendBeacon)try{V=a.navigator.sendBeacon(T.v.toString(),"")}catch{}!V&&a.Image&&(new Image().src=T.v,V=!0),V||(T.g=Rk(T.j,null),T.g.ea(T.v)),T.F=Date.now(),Zh(T)}xk(m)}function sv(m){m.g&&(iy(m),m.g.cancel(),m.g=null)}function Ek(m){sv(m),m.u&&(a.clearTimeout(m.u),m.u=null),av(m),m.h.cancel(),m.s&&(typeof m.s=="number"&&a.clearTimeout(m.s),m.s=null)}function ov(m){if(!rk(m.h)&&!m.s){m.s=!0;var T=m.Ga;Y||G(),W||(Y(),W=!0),K.add(T,m),m.B=0}}function s3(m,T){return sk(m.h)>=m.h.j-(m.s?1:0)?!1:m.s?(m.i=T.D.concat(m.i),!0):m.G==1||m.G==2||m.B>=(m.Va?0:m.Wa)?!1:(m.s=rd(f(m.Ga,m,T),Pk(m,m.B)),m.B++,!0)}e.Ga=function(m){if(this.s)if(this.s=null,this.G==1){if(!m){this.U=Math.floor(1e5*Math.random()),m=this.U++;const he=new Fo(this,this.j,m);let pe=this.o;if(this.S&&(pe?(pe=S(pe),C(pe,this.S)):pe=this.S),this.m!==null||this.O||(he.H=pe,pe=null),this.P)e:{for(var T=0,V=0;V<this.i.length;V++){t:{var F=this.i[V];if("__data__"in F.map&&(F=F.map.__data__,typeof F=="string")){F=F.length;break t}F=void 0}if(F===void 0)break;if(T+=F,4096<T){T=V;break e}if(T===4096||V===this.i.length-1){T=V+1;break e}}T=1e3}else T=1e3;T=kk(this,he,T),V=Ys(this.I),bn(V,"RID",m),bn(V,"CVER",22),this.D&&bn(V,"X-HTTP-Session-Id",this.D),vd(this,V),pe&&(this.O?T="headers="+encodeURIComponent(String(gk(pe)))+"&"+T:this.m&&ey(V,this.m,pe)),Z_(this.h,he),this.Ua&&bn(V,"TYPE","init"),this.P?(bn(V,"$req",T),bn(V,"SID","null"),he.T=!0,K_(he,V,null)):K_(he,V,T),this.G=2}}else this.G==3&&(m?Ck(this,m):this.i.length==0||rk(this.h)||Ck(this))};function Ck(m,T){var V;T?V=T.l:V=m.U++;const F=Ys(m.I);bn(F,"SID",m.K),bn(F,"RID",V),bn(F,"AID",m.T),vd(m,F),m.m&&m.o&&ey(F,m.m,m.o),V=new Fo(m,m.j,V,m.B+1),m.m===null&&(V.H=m.o),T&&(m.i=T.D.concat(m.i)),T=kk(m,V,1e3),V.I=Math.round(.5*m.wa)+Math.round(.5*m.wa*Math.random()),Z_(m.h,V),K_(V,F,T)}function vd(m,T){m.H&&O(m.H,function(V,F){bn(T,F,V)}),m.l&&lk({},function(V,F){bn(T,F,V)})}function kk(m,T,V){V=Math.min(m.i.length,V);var F=m.l?f(m.l.Na,m.l,m):null;e:{var he=m.i;let pe=-1;for(;;){const Be=["count="+V];pe==-1?0<V?(pe=he[0].g,Be.push("ofs="+pe)):pe=0:Be.push("ofs="+pe);let an=!0;for(let vi=0;vi<V;vi++){let jt=he[vi].g;const Ai=he[vi].map;if(jt-=pe,0>jt)pe=Math.max(0,he[vi].g-100),an=!1;else try{t3(Ai,Be,"req"+jt+"_")}catch{F&&F(Ai)}}if(an){F=Be.join("&");break e}}}return m=m.i.splice(0,V),T.D=m,F}function Tk(m){if(!m.g&&!m.u){m.Y=1;var T=m.Fa;Y||G(),W||(Y(),W=!0),K.add(T,m),m.v=0}}function ny(m){return m.g||m.u||3<=m.v?!1:(m.Y++,m.u=rd(f(m.Fa,m),Pk(m,m.v)),m.v++,!0)}e.Fa=function(){if(this.u=null,Ik(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var m=2*this.R;this.j.info("BP detection timer enabled: "+m),this.A=rd(f(this.ab,this),m)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Wi(10),sv(this),Ik(this))};function iy(m){m.A!=null&&(a.clearTimeout(m.A),m.A=null)}function Ik(m){m.g=new Fo(m,m.j,"rpc",m.Y),m.m===null&&(m.g.H=m.o),m.g.O=0;var T=Ys(m.qa);bn(T,"RID","rpc"),bn(T,"SID",m.K),bn(T,"AID",m.T),bn(T,"CI",m.F?"0":"1"),!m.F&&m.ja&&bn(T,"TO",m.ja),bn(T,"TYPE","xmlhttp"),vd(m,T),m.m&&m.o&&ey(T,m.m,m.o),m.L&&(m.g.I=m.L);var V=m.g;m=m.ia,V.L=1,V.v=nv(Ys(T)),V.m=null,V.P=!0,ek(V,m)}e.Za=function(){this.C!=null&&(this.C=null,sv(this),ny(this),Wi(19))};function av(m){m.C!=null&&(a.clearTimeout(m.C),m.C=null)}function Ak(m,T){var V=null;if(m.g==T){av(m),iy(m),m.g=null;var F=2}else if(J_(m.h,T))V=T.D,ok(m.h,T),F=1;else return;if(m.G!=0){if(T.o)if(F==1){V=T.m?T.m.length:0,T=Date.now()-T.F;var he=m.B;F=Lo(),Ze(F,new XC(F,V)),ov(m)}else Tk(m);else if(he=T.s,he==3||he==0&&0<T.X||!(F==1&&s3(m,T)||F==2&&ny(m)))switch(V&&0<V.length&&(T=m.h,T.i=T.i.concat(V)),he){case 1:Wa(m,5);break;case 4:Wa(m,10);break;case 3:Wa(m,6);break;default:Wa(m,2)}}}function Pk(m,T){let V=m.Ta+Math.floor(Math.random()*m.cb);return m.isActive()||(V*=2),V*T}function Wa(m,T){if(m.j.info("Error code "+T),T==2){var V=f(m.fb,m),F=m.Xa;const he=!F;F=new Ha(F||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ev(F,"https"),nv(F),he?J6(F.toString(),V):Z6(F.toString(),V)}else Wi(2);m.G=0,m.l&&m.l.sa(T),xk(m),Ek(m)}e.fb=function(m){m?(this.j.info("Successfully pinged google.com"),Wi(2)):(this.j.info("Failed to ping google.com"),Wi(1))};function xk(m){if(m.G=0,m.ka=[],m.l){const T=ak(m.h);(T.length!=0||m.i.length!=0)&&(_(m.ka,T),_(m.ka,m.i),m.h.i.length=0,p(m.i),m.i.length=0),m.l.ra()}}function Dk(m,T,V){var F=V instanceof Ha?Ys(V):new Ha(V);if(F.g!="")T&&(F.g=T+"."+F.g),tv(F,F.s);else{var he=a.location;F=he.protocol,T=T?T+"."+he.hostname:he.hostname,he=+he.port;var pe=new Ha(null);F&&ev(pe,F),T&&(pe.g=T),he&&tv(pe,he),V&&(pe.l=V),F=pe}return V=m.D,T=m.ya,V&&T&&bn(F,V,T),bn(F,"VER",m.la),vd(m,F),F}function Rk(m,T,V){if(T&&!m.J)throw Error("Can't create secondary domain capable XhrIo object.");return T=m.Ca&&!m.pa?new $n(new cd({eb:V})):new $n(m.pa),T.Ha(m.J),T}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ok(){}e=Ok.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function lv(){}lv.prototype.g=function(m,T){return new fr(m,T)};function fr(m,T){Ce.call(this),this.g=new Sk(T),this.l=m,this.h=T&&T.messageUrlParams||null,m=T&&T.messageHeaders||null,T&&T.clientProtocolHeaderRequired&&(m?m["X-Client-Protocol"]="webchannel":m={"X-Client-Protocol":"webchannel"}),this.g.o=m,m=T&&T.initMessageHeaders||null,T&&T.messageContentType&&(m?m["X-WebChannel-Content-Type"]=T.messageContentType:m={"X-WebChannel-Content-Type":T.messageContentType}),T&&T.va&&(m?m["X-WebChannel-Client-Profile"]=T.va:m={"X-WebChannel-Client-Profile":T.va}),this.g.S=m,(m=T&&T.Sb)&&!b(m)&&(this.g.m=m),this.v=T&&T.supportsCrossDomainXhr||!1,this.u=T&&T.sendRawJson||!1,(T=T&&T.httpSessionIdParam)&&!b(T)&&(this.g.D=T,m=this.h,m!==null&&T in m&&(m=this.h,T in m&&delete m[T])),this.j=new mu(this)}g(fr,Ce),fr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fr.prototype.close=function(){ty(this.g)},fr.prototype.o=function(m){var T=this.g;if(typeof m=="string"){var V={};V.__data__=m,m=V}else this.u&&(V={},V.__data__=ft(m),m=V);T.i.push(new j6(T.Ya++,m)),T.G==3&&ov(T)},fr.prototype.N=function(){this.g.l=null,delete this.j,ty(this.g),delete this.g,fr.aa.N.call(this)};function Vk(m){si.call(this),m.__headers__&&(this.headers=m.__headers__,this.statusCode=m.__status__,delete m.__headers__,delete m.__status__);var T=m.__sm__;if(T){e:{for(const V in T){m=V;break e}m=void 0}(this.i=m)&&(m=this.i,T=T!==null&&m in T?T[m]:void 0),this.data=T}else this.data=m}g(Vk,si);function Nk(){Ii.call(this),this.status=1}g(Nk,Ii);function mu(m){this.g=m}g(mu,Ok),mu.prototype.ua=function(){Ze(this.g,"a")},mu.prototype.ta=function(m){Ze(this.g,new Vk(m))},mu.prototype.sa=function(m){Ze(this.g,new Nk)},mu.prototype.ra=function(){Ze(this.g,"b")},lv.prototype.createWebChannel=lv.prototype.g,fr.prototype.send=fr.prototype.o,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,jM=function(){return new lv},UM=function(){return Lo()},BM=dr,a0={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qh.NO_ERROR=0,Qh.TIMEOUT=8,Qh.HTTP_ERROR=6,lm=Qh,QC.COMPLETE="complete",$M=QC,Zt.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Dd=Zt,FM=cd,$n.prototype.listenOnce=$n.prototype.L,$n.prototype.getLastError=$n.prototype.Ka,$n.prototype.getLastErrorCode=$n.prototype.Ba,$n.prototype.getStatus=$n.prototype.Z,$n.prototype.getResponseJson=$n.prototype.Oa,$n.prototype.getResponseText=$n.prototype.oa,$n.prototype.send=$n.prototype.ea,$n.prototype.setWithCredentials=$n.prototype.Ha,LM=$n}).apply(typeof Cv<"u"?Cv:typeof self<"u"?self:typeof window<"u"?window:{});const jI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Di.UNAUTHENTICATED=new Di(null),Di.GOOGLE_CREDENTIALS=new Di("google-credentials-uid"),Di.FIRST_PARTY=new Di("first-party-uid"),Di.MOCK_USER=new Di("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new vh("@firebase/firestore");function Sd(){return Vl.logLevel}function Ke(e,...t){if(Vl.logLevel<=It.DEBUG){const n=t.map(kE);Vl.debug(`Firestore (${Fc}): ${e}`,...n)}}function wo(e,...t){if(Vl.logLevel<=It.ERROR){const n=t.map(kE);Vl.error(`Firestore (${Fc}): ${e}`,...n)}}function cc(e,...t){if(Vl.logLevel<=It.WARN){const n=t.map(kE);Vl.warn(`Firestore (${Fc}): ${e}`,...n)}}function kE(e){if(typeof e=="string")return e;try{/**
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
 */function vt(e="Unexpected state"){const t=`FIRESTORE (${Fc}) INTERNAL ASSERTION FAILED: `+e;throw wo(t),new Error(t)}function dn(e,t){e||vt()}function _t(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class We extends $s{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Uq{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Di.UNAUTHENTICATED))}shutdown(){}}class jq{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hq{constructor(t){this.t=t,this.currentUser=Di.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new go;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new go,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Ke("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ke("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new go)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Ke("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(dn(typeof i.accessToken=="string"),new HM(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return dn(t===null||typeof t=="string"),new Di(t)}}class Wq{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=Di.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zq{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new Wq(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Di.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gq{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qq{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=s=>{s.error!=null&&Ke("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Ke("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Ke("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Ke("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(dn(typeof n.token=="string"),this.R=n.token,new Gq(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Yq(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=Yq(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function Ht(e,t){return e<t?-1:e>t?1:0}function dc(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new We(ke.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new We(ke.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new We(ke.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new We(ke.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new Et(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ht(this.nanoseconds,t.nanoseconds):Ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new gt(t)}static min(){return new gt(new Et(0,0))}static max(){return new gt(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,n,i){n===void 0?n=0:n>t.length&&vt(),i===void 0?i=t.length-n:i>t.length-n&&vt(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return kf.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof kf?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Cn extends kf{construct(t,n,i){return new Cn(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new We(ke.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Cn(n)}static emptyPath(){return new Cn([])}}const Kq=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bi extends kf{construct(t,n,i){return new bi(t,n,i)}static isValidIdentifier(t){return Kq.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bi.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bi(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new We(ke.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new We(ke.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new We(ke.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new We(ke.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bi(n)}static emptyPath(){return new bi([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(Cn.fromString(t))}static fromName(t){return new it(Cn.fromString(t).popFirst(5))}static empty(){return new it(Cn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Cn.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Cn.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new Cn(t.slice()))}}function Xq(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=gt.fromTimestamp(i===1e9?new Et(n+1,0):new Et(n,i));return new ga(r,it.empty(),t)}function Qq(e){return new ga(e.readTime,e.key,-1)}class ga{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new ga(gt.min(),it.empty(),-1)}static max(){return new ga(gt.max(),it.empty(),-1)}}function Jq(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=it.comparator(e.documentKey,t.documentKey),n!==0?n:Ht(e.largestBatchId,t.largestBatchId))}/**
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
 */const Zq="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eY{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(e){if(e.code!==ke.FAILED_PRECONDITION||e.message!==Zq)throw e;Ke("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Oe((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Oe?n:Oe.resolve(n)}catch(n){return Oe.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Oe.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Oe.reject(n)}static resolve(t){return new Oe((n,i)=>{n(t)})}static reject(t){return new Oe((n,i)=>{i(t)})}static waitFor(t){return new Oe((n,i)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(t){let n=Oe.resolve(!1);for(const i of t)n=n.next(r=>r?Oe.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new Oe((i,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(d=>{o[u]=d,++a,a===s&&i(o)},d=>r(d))}})}static doWhile(t,n){return new Oe((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function tY(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Th(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class TE{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}TE.oe=-1;function Ap(e){return e==null}function eg(e){return e===0&&1/e==-1/0}function nY(e){return typeof e=="number"&&Number.isInteger(e)&&!eg(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function zM(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,n){this.comparator=t,this.root=n||pi.EMPTY}insert(t,n){return new Ln(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,pi.BLACK,null,null))}remove(t){return new Ln(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pi.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kv(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kv(this.root,t,this.comparator,!1)}getReverseIterator(){return new kv(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kv(this.root,t,this.comparator,!0)}}class kv{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pi{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??pi.RED,this.left=r??pi.EMPTY,this.right=s??pi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new pi(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return pi.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw vt();const t=this.left.check();if(t!==this.right.check())throw vt();return t+(this.isRed()?0:1)}}pi.EMPTY=null,pi.RED=!0,pi.BLACK=!1;pi.EMPTY=new class{constructor(){this.size=0}get key(){throw vt()}get value(){throw vt()}get color(){throw vt()}get left(){throw vt()}get right(){throw vt()}copy(t,n,i,r,s){return this}insert(t,n,i){return new pi(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t){this.comparator=t,this.data=new Ln(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new WI(this.data.getIterator())}getIteratorFrom(t){return new WI(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof wi)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new wi(this.comparator);return n.data=t,n}}class WI{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yr{constructor(t){this.fields=t,t.sort(bi.comparator)}static empty(){return new yr([])}unionWith(t){let n=new wi(bi.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new yr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return dc(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class GM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Si{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new GM("Invalid base64 string: "+s):s}}(t);return new Si(n)}static fromUint8Array(t){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Si(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Si.EMPTY_BYTE_STRING=new Si("");const iY=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pa(e){if(dn(!!e),typeof e=="string"){let t=0;const n=iY.exec(e);if(dn(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Wn(e.seconds),nanos:Wn(e.nanos)}}function Wn(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Nl(e){return typeof e=="string"?Si.fromBase64String(e):Si.fromUint8Array(e)}/**
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
 */function IE(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function AE(e){const t=e.mapValue.fields.__previous_value__;return IE(t)?AE(t):t}function Tf(e){const t=pa(e.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(t,n,i,r,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class If{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new If("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof If&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Tv={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ml(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?IE(e)?4:oY(e)?9007199254740991:sY(e)?10:11:vt()}function Vs(e,t){if(e===t)return!0;const n=Ml(e);if(n!==Ml(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Tf(e).isEqual(Tf(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=pa(r.timestampValue),a=pa(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return Nl(r.bytesValue).isEqual(Nl(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return Wn(r.geoPointValue.latitude)===Wn(s.geoPointValue.latitude)&&Wn(r.geoPointValue.longitude)===Wn(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Wn(r.integerValue)===Wn(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Wn(r.doubleValue),a=Wn(s.doubleValue);return o===a?eg(o)===eg(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return dc(e.arrayValue.values||[],t.arrayValue.values||[],Vs);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(HI(o)!==HI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Vs(o[l],a[l])))return!1;return!0}(e,t);default:return vt()}}function Af(e,t){return(e.values||[]).find(n=>Vs(n,t))!==void 0}function fc(e,t){if(e===t)return 0;const n=Ml(e),i=Ml(t);if(n!==i)return Ht(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ht(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Wn(s.integerValue||s.doubleValue),l=Wn(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return zI(e.timestampValue,t.timestampValue);case 4:return zI(Tf(e),Tf(t));case 5:return Ht(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Nl(s),l=Nl(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=Ht(a[u],l[u]);if(d!==0)return d}return Ht(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=Ht(Wn(s.latitude),Wn(o.latitude));return a!==0?a:Ht(Wn(s.longitude),Wn(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return GI(e.arrayValue,t.arrayValue);case 10:return function(s,o){var a,l,u,d;const c=s.fields||{},f=o.fields||{},v=(a=c.value)===null||a===void 0?void 0:a.arrayValue,g=(l=f.value)===null||l===void 0?void 0:l.arrayValue,p=Ht(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((d=g==null?void 0:g.values)===null||d===void 0?void 0:d.length)||0);return p!==0?p:GI(v,g)}(e.mapValue,t.mapValue);case 11:return function(s,o){if(s===Tv.mapValue&&o===Tv.mapValue)return 0;if(s===Tv.mapValue)return 1;if(o===Tv.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let c=0;c<l.length&&c<d.length;++c){const f=Ht(l[c],d[c]);if(f!==0)return f;const v=fc(a[l[c]],u[d[c]]);if(v!==0)return v}return Ht(l.length,d.length)}(e.mapValue,t.mapValue);default:throw vt()}}function zI(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Ht(e,t);const n=pa(e),i=pa(t),r=Ht(n.seconds,i.seconds);return r!==0?r:Ht(n.nanos,i.nanos)}function GI(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=fc(n[r],i[r]);if(s)return s}return Ht(n.length,i.length)}function hc(e){return l0(e)}function l0(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=pa(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Nl(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return it.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=l0(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${l0(n.fields[o])}`;return r+"}"}(e.mapValue):vt()}function qI(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function u0(e){return!!e&&"integerValue"in e}function PE(e){return!!e&&"arrayValue"in e}function YI(e){return!!e&&"nullValue"in e}function KI(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function um(e){return!!e&&"mapValue"in e}function sY(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Qd(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xl(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=Qd(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qd(e.arrayValue.values[n]);return t}return Object.assign({},e)}function oY(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t){this.value=t}static empty(){return new or({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!um(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qd(n)}setAll(t){let n=bi.emptyPath(),i={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Qd(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());um(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Vs(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];um(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){Xl(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new or(Qd(this.value))}}function qM(e){const t=[];return Xl(e.fields,(n,i)=>{const r=new bi([n]);if(um(i)){const s=qM(i.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new yr(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,n,i,r,s,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ni(t,0,gt.min(),gt.min(),gt.min(),or.empty(),0)}static newFoundDocument(t,n,i,r){return new Ni(t,1,n,gt.min(),i,r,0)}static newNoDocument(t,n){return new Ni(t,2,n,gt.min(),gt.min(),or.empty(),0)}static newUnknownDocument(t,n){return new Ni(t,3,n,gt.min(),gt.min(),or.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(gt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=or.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=or.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=gt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ni&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ni(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tg{constructor(t,n){this.position=t,this.inclusive=n}}function XI(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(s.field.isKeyField()?i=it.comparator(it.fromName(o.referenceValue),n.key):i=fc(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function QI(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Vs(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Pf{constructor(t,n="asc"){this.field=t,this.dir=n}}function aY(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class YM{}class Qn extends YM{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new uY(t,n,i):n==="array-contains"?new fY(t,i):n==="in"?new hY(t,i):n==="not-in"?new vY(t,i):n==="array-contains-any"?new mY(t,i):new Qn(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new cY(t,i):new dY(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fc(n,this.value)):n!==null&&Ml(this.value)===Ml(n)&&this.matchesComparison(fc(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class as extends YM{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new as(t,n)}matches(t){return KM(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function KM(e){return e.op==="and"}function XM(e){return lY(e)&&KM(e)}function lY(e){for(const t of e.filters)if(t instanceof as)return!1;return!0}function c0(e){if(e instanceof Qn)return e.field.canonicalString()+e.op.toString()+hc(e.value);if(XM(e))return e.filters.map(t=>c0(t)).join(",");{const t=e.filters.map(n=>c0(n)).join(",");return`${e.op}(${t})`}}function QM(e,t){return e instanceof Qn?function(i,r){return r instanceof Qn&&i.op===r.op&&i.field.isEqual(r.field)&&Vs(i.value,r.value)}(e,t):e instanceof as?function(i,r){return r instanceof as&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&QM(o,r.filters[a]),!0):!1}(e,t):void vt()}function JM(e){return e instanceof Qn?function(n){return`${n.field.canonicalString()} ${n.op} ${hc(n.value)}`}(e):e instanceof as?function(n){return n.op.toString()+" {"+n.getFilters().map(JM).join(" ,")+"}"}(e):"Filter"}class uY extends Qn{constructor(t,n,i){super(t,n,i),this.key=it.fromName(i.referenceValue)}matches(t){const n=it.comparator(t.key,this.key);return this.matchesComparison(n)}}class cY extends Qn{constructor(t,n){super(t,"in",n),this.keys=ZM("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class dY extends Qn{constructor(t,n){super(t,"not-in",n),this.keys=ZM("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ZM(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>it.fromName(i.referenceValue))}class fY extends Qn{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return PE(n)&&Af(n.arrayValue,this.value)}}class hY extends Qn{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Af(this.value.arrayValue,n)}}class vY extends Qn{constructor(t,n){super(t,"not-in",n)}matches(t){if(Af(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Af(this.value.arrayValue,n)}}class mY extends Qn{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!PE(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Af(this.value.arrayValue,i))}}/**
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
 */class gY{constructor(t,n=null,i=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function JI(e,t=null,n=[],i=[],r=null,s=null,o=null){return new gY(e,t,n,i,r,s,o)}function xE(e){const t=_t(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>c0(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ap(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>hc(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>hc(i)).join(",")),t.ue=n}return t.ue}function DE(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!aY(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!QM(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!QI(e.startAt,t.startAt)&&QI(e.endAt,t.endAt)}function d0(e){return it.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pY(e,t,n,i,r,s,o,a){return new $c(e,t,n,i,r,s,o,a)}function Pp(e){return new $c(e)}function ZI(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function e2(e){return e.collectionGroup!==null}function Jd(e){const t=_t(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new wi(bi.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Pf(s,i))}),n.has(bi.keyField().canonicalString())||t.ce.push(new Pf(bi.keyField(),i))}return t.ce}function Ts(e){const t=_t(e);return t.le||(t.le=_Y(t,Jd(e))),t.le}function _Y(e,t){if(e.limitType==="F")return JI(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Pf(r.field,s)});const n=e.endAt?new tg(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new tg(e.startAt.position,e.startAt.inclusive):null;return JI(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function f0(e,t){const n=e.filters.concat([t]);return new $c(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function h0(e,t,n){return new $c(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xp(e,t){return DE(Ts(e),Ts(t))&&e.limitType===t.limitType}function t2(e){return`${xE(Ts(e))}|lt:${e.limitType}`}function xu(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>JM(r)).join(", ")}]`),Ap(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>hc(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>hc(r)).join(",")),`Target(${i})`}(Ts(e))}; limitType=${e.limitType})`}function Dp(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):it.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of Jd(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(o,a,l){const u=XI(o,a,l);return o.inclusive?u<=0:u<0}(i.startAt,Jd(i),r)||i.endAt&&!function(o,a,l){const u=XI(o,a,l);return o.inclusive?u>=0:u>0}(i.endAt,Jd(i),r))}(e,t)}function yY(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function n2(e){return(t,n)=>{let i=!1;for(const r of Jd(e)){const s=bY(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function bY(e,t,n){const i=e.field.isKeyField()?it.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?fc(l,u):vt()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return vt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Xl(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return zM(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wY=new Ln(it.comparator);function So(){return wY}const i2=new Ln(it.comparator);function Rd(...e){let t=i2;for(const n of e)t=t.insert(n.key,n);return t}function r2(e){let t=i2;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function ll(){return Zd()}function s2(){return Zd()}function Zd(){return new Bc(e=>e.toString(),(e,t)=>e.isEqual(t))}const SY=new Ln(it.comparator),EY=new wi(it.comparator);function At(...e){let t=EY;for(const n of e)t=t.add(n);return t}const CY=new wi(Ht);function kY(){return CY}/**
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
 */function RE(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eg(t)?"-0":t}}function o2(e){return{integerValue:""+e}}function TY(e,t){return nY(t)?o2(t):RE(e,t)}/**
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
 */class Rp{constructor(){this._=void 0}}function IY(e,t,n){return e instanceof ng?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&IE(s)&&(s=AE(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof xf?l2(e,t):e instanceof Df?u2(e,t):function(r,s){const o=a2(r,s),a=eA(o)+eA(r.Pe);return u0(o)&&u0(r.Pe)?o2(a):RE(r.serializer,a)}(e,t)}function AY(e,t,n){return e instanceof xf?l2(e,t):e instanceof Df?u2(e,t):n}function a2(e,t){return e instanceof ig?function(i){return u0(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class ng extends Rp{}class xf extends Rp{constructor(t){super(),this.elements=t}}function l2(e,t){const n=c2(t);for(const i of e.elements)n.some(r=>Vs(r,i))||n.push(i);return{arrayValue:{values:n}}}class Df extends Rp{constructor(t){super(),this.elements=t}}function u2(e,t){let n=c2(t);for(const i of e.elements)n=n.filter(r=>!Vs(r,i));return{arrayValue:{values:n}}}class ig extends Rp{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function eA(e){return Wn(e.integerValue||e.doubleValue)}function c2(e){return PE(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function PY(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof xf&&r instanceof xf||i instanceof Df&&r instanceof Df?dc(i.elements,r.elements,Vs):i instanceof ig&&r instanceof ig?Vs(i.Pe,r.Pe):i instanceof ng&&r instanceof ng}(e.transform,t.transform)}class xY{constructor(t,n){this.version=t,this.transformResults=n}}class ar{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ar}static exists(t){return new ar(void 0,t)}static updateTime(t){return new ar(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cm(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Op{}function d2(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Vp(e.key,ar.none()):new Ih(e.key,e.data,ar.none());{const n=e.data,i=or.empty();let r=new wi(bi.comparator);for(let s of t.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Oa(e.key,i,new yr(r.toArray()),ar.none())}}function DY(e,t,n){e instanceof Ih?function(r,s,o){const a=r.value.clone(),l=nA(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Oa?function(r,s,o){if(!cm(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=nA(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(f2(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ef(e,t,n,i){return e instanceof Ih?function(s,o,a,l){if(!cm(s.precondition,o))return a;const u=s.value.clone(),d=iA(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof Oa?function(s,o,a,l){if(!cm(s.precondition,o))return a;const u=iA(s.fieldTransforms,l,o),d=o.data;return d.setAll(f2(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(e,t,n,i):function(s,o,a){return cm(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function RY(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=a2(i.transform,r||null);s!=null&&(n===null&&(n=or.empty()),n.set(i.field,s))}return n||null}function tA(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&dc(i,r,(s,o)=>PY(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ih extends Op{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Oa extends Op{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function f2(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function nA(e,t,n){const i=new Map;dn(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,AY(o,a,n[r]))}return i}function iA(e,t,n){const i=new Map;for(const r of e){const s=r.transform,o=n.data.field(r.field);i.set(r.field,IY(s,o,t))}return i}class Vp extends Op{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OY extends Op{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VY{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&DY(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=ef(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=ef(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=s2();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=d2(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(gt.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),At())}isEqual(t){return this.batchId===t.batchId&&dc(this.mutations,t.mutations,(n,i)=>tA(n,i))&&dc(this.baseMutations,t.baseMutations,(n,i)=>tA(n,i))}}class OE{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){dn(t.mutations.length===i.length);let r=function(){return SY}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new OE(t,n,i,r)}}/**
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
 */class NY{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class MY{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn,Nt;function LY(e){switch(e){default:return vt();case ke.CANCELLED:case ke.UNKNOWN:case ke.DEADLINE_EXCEEDED:case ke.RESOURCE_EXHAUSTED:case ke.INTERNAL:case ke.UNAVAILABLE:case ke.UNAUTHENTICATED:return!1;case ke.INVALID_ARGUMENT:case ke.NOT_FOUND:case ke.ALREADY_EXISTS:case ke.PERMISSION_DENIED:case ke.FAILED_PRECONDITION:case ke.ABORTED:case ke.OUT_OF_RANGE:case ke.UNIMPLEMENTED:case ke.DATA_LOSS:return!0}}function h2(e){if(e===void 0)return wo("GRPC error has no .code"),ke.UNKNOWN;switch(e){case Kn.OK:return ke.OK;case Kn.CANCELLED:return ke.CANCELLED;case Kn.UNKNOWN:return ke.UNKNOWN;case Kn.DEADLINE_EXCEEDED:return ke.DEADLINE_EXCEEDED;case Kn.RESOURCE_EXHAUSTED:return ke.RESOURCE_EXHAUSTED;case Kn.INTERNAL:return ke.INTERNAL;case Kn.UNAVAILABLE:return ke.UNAVAILABLE;case Kn.UNAUTHENTICATED:return ke.UNAUTHENTICATED;case Kn.INVALID_ARGUMENT:return ke.INVALID_ARGUMENT;case Kn.NOT_FOUND:return ke.NOT_FOUND;case Kn.ALREADY_EXISTS:return ke.ALREADY_EXISTS;case Kn.PERMISSION_DENIED:return ke.PERMISSION_DENIED;case Kn.FAILED_PRECONDITION:return ke.FAILED_PRECONDITION;case Kn.ABORTED:return ke.ABORTED;case Kn.OUT_OF_RANGE:return ke.OUT_OF_RANGE;case Kn.UNIMPLEMENTED:return ke.UNIMPLEMENTED;case Kn.DATA_LOSS:return ke.DATA_LOSS;default:return vt()}}(Nt=Kn||(Kn={}))[Nt.OK=0]="OK",Nt[Nt.CANCELLED=1]="CANCELLED",Nt[Nt.UNKNOWN=2]="UNKNOWN",Nt[Nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Nt[Nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Nt[Nt.NOT_FOUND=5]="NOT_FOUND",Nt[Nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Nt[Nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Nt[Nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Nt[Nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Nt[Nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Nt[Nt.ABORTED=10]="ABORTED",Nt[Nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Nt[Nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Nt[Nt.INTERNAL=13]="INTERNAL",Nt[Nt.UNAVAILABLE=14]="UNAVAILABLE",Nt[Nt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function FY(){return new TextEncoder}/**
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
 */const $Y=new gl([4294967295,4294967295],0);function rA(e){const t=FY().encode(e),n=new MM;return n.update(t),new Uint8Array(n.digest())}function sA(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new gl([n,i],0),new gl([r,s],0)]}class VE{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Od(`Invalid padding: ${n}`);if(i<0)throw new Od(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Od(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Od(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=gl.fromNumber(this.Ie)}Ee(t,n,i){let r=t.add(n.multiply(gl.fromNumber(i)));return r.compare($Y)===1&&(r=new gl([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=rA(t),[i,r]=sA(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new VE(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const n=rA(t),[i,r]=sA(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Od extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,Ah.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Np(gt.min(),r,new Ln(Ht),So(),At())}}class Ah{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new Ah(i,n,At(),At(),At())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t,n,i,r){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=r}}class v2{constructor(t,n){this.targetId=t,this.me=n}}class m2{constructor(t,n,i=Si.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class oA{constructor(){this.fe=0,this.ge=lA(),this.pe=Si.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=At(),n=At(),i=At();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:vt()}}),new Ah(this.pe,this.ye,t,n,i)}Ce(){this.we=!1,this.ge=lA()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,dn(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class BY{constructor(t){this.Le=t,this.Be=new Map,this.ke=So(),this.qe=aA(),this.Qe=new Ln(Ht)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const i=this.Ge(n);switch(t.state){case 0:this.ze(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(t.resumeToken));break;default:vt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.ze(r)&&n(r)})}He(t){const n=t.targetId,i=t.me.count,r=this.Je(n);if(r){const s=r.target;if(d0(s))if(i===0){const o=new it(s.path);this.Ue(n,o,Ni.newNoDocument(o,gt.min()))}else dn(i===1);else{const o=this.Ye(n);if(o!==i){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=Nl(i).toUint8Array()}catch(l){if(l instanceof GM)return cc("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new VE(o,r,s)}catch(l){return cc(l instanceof Od?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,n,i){return n.me.count===i-this.nt(t,n.targetId)?0:2}nt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(n,s,null),r++)}),r}rt(t){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&d0(a.target)){const l=new it(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ni.newNoDocument(l,t))}s.be&&(n.set(o,s.ve()),s.Ce())}});let i=At();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new Np(t,n,this.Qe,this.ke,i);return this.ke=So(),this.qe=aA(),this.Qe=new Ln(Ht),r}$e(t,n){if(!this.ze(t))return;const i=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new oA,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new wi(Ht),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||Ke("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new oA),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function aA(){return new Ln(it.comparator)}function lA(){return new Ln(it.comparator)}const UY={asc:"ASCENDING",desc:"DESCENDING"},jY={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HY={and:"AND",or:"OR"};class WY{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function v0(e,t){return e.useProto3Json||Ap(t)?t:{value:t}}function rg(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function g2(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function zY(e,t){return rg(e,t.toTimestamp())}function Is(e){return dn(!!e),gt.fromTimestamp(function(n){const i=pa(n);return new Et(i.seconds,i.nanos)}(e))}function NE(e,t){return m0(e,t).canonicalString()}function m0(e,t){const n=function(r){return new Cn(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function p2(e){const t=Cn.fromString(e);return dn(S2(t)),t}function g0(e,t){return NE(e.databaseId,t.path)}function Vy(e,t){const n=p2(t);if(n.get(1)!==e.databaseId.projectId)throw new We(ke.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new We(ke.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new it(y2(n))}function _2(e,t){return NE(e.databaseId,t)}function GY(e){const t=p2(e);return t.length===4?Cn.emptyPath():y2(t)}function p0(e){return new Cn(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function y2(e){return dn(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function uA(e,t,n){return{name:g0(e,t),fields:n.value.mapValue.fields}}function qY(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:vt()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(dn(d===void 0||typeof d=="string"),Si.fromBase64String(d||"")):(dn(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Si.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const d=u.code===void 0?ke.UNKNOWN:h2(u.code);return new We(d,u.message||"")}(o);n=new m2(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Vy(e,i.document.name),s=Is(i.document.updateTime),o=i.document.createTime?Is(i.document.createTime):gt.min(),a=new or({mapValue:{fields:i.document.fields}}),l=Ni.newFoundDocument(r,s,o,a),u=i.targetIds||[],d=i.removedTargetIds||[];n=new dm(u,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Vy(e,i.document),s=i.readTime?Is(i.readTime):gt.min(),o=Ni.newNoDocument(r,s),a=i.removedTargetIds||[];n=new dm([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Vy(e,i.document),s=i.removedTargetIds||[];n=new dm([],s,r,null)}else{if(!("filter"in t))return vt();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new MY(r,s),a=i.targetId;n=new v2(a,o)}}return n}function YY(e,t){let n;if(t instanceof Ih)n={update:uA(e,t.key,t.value)};else if(t instanceof Vp)n={delete:g0(e,t.key)};else if(t instanceof Oa)n={update:uA(e,t.key,t.data),updateMask:iK(t.fieldMask)};else{if(!(t instanceof OY))return vt();n={verify:g0(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof ng)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xf)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Df)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ig)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw vt()}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:zY(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:vt()}(e,t.precondition)),n}function KY(e,t){return e&&e.length>0?(dn(t!==void 0),e.map(n=>function(r,s){let o=r.updateTime?Is(r.updateTime):Is(s);return o.isEqual(gt.min())&&(o=Is(s)),new xY(o,r.transformResults||[])}(n,t))):[]}function XY(e,t){return{documents:[_2(e,t.path)]}}function QY(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=_2(e,r);const s=function(u){if(u.length!==0)return w2(as.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(f){return{field:Du(f.field),direction:eK(f.dir)}}(d))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=v0(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:n,parent:r}}function JY(e){let t=GY(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){dn(i===1);const d=n.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(c){const f=b2(c);return f instanceof as&&XM(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(f=>function(g){return new Pf(Ru(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,Ap(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,v=c.values||[];return new tg(v,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,v=c.values||[];return new tg(v,f)}(n.endAt)),pY(t,r,o,s,a,"F",l,u)}function ZY(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function b2(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Ru(n.unaryFilter.field);return Qn.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Ru(n.unaryFilter.field);return Qn.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ru(n.unaryFilter.field);return Qn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ru(n.unaryFilter.field);return Qn.create(o,"!=",{nullValue:"NULL_VALUE"});default:return vt()}}(e):e.fieldFilter!==void 0?function(n){return Qn.create(Ru(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return vt()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return as.create(n.compositeFilter.filters.map(i=>b2(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return vt()}}(n.compositeFilter.op))}(e):vt()}function eK(e){return UY[e]}function tK(e){return jY[e]}function nK(e){return HY[e]}function Du(e){return{fieldPath:e.canonicalString()}}function Ru(e){return bi.fromServerFormat(e.fieldPath)}function w2(e){return e instanceof Qn?function(n){if(n.op==="=="){if(KI(n.value))return{unaryFilter:{field:Du(n.field),op:"IS_NAN"}};if(YI(n.value))return{unaryFilter:{field:Du(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(KI(n.value))return{unaryFilter:{field:Du(n.field),op:"IS_NOT_NAN"}};if(YI(n.value))return{unaryFilter:{field:Du(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Du(n.field),op:tK(n.op),value:n.value}}}(e):e instanceof as?function(n){const i=n.getFilters().map(r=>w2(r));return i.length===1?i[0]:{compositeFilter:{op:nK(n.op),filters:i}}}(e):vt()}function iK(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function S2(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,n,i,r,s=gt.min(),o=gt.min(),a=Si.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new na(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new na(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new na(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new na(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(t){this.ct=t}}function sK(e){const t=JY({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?h0(t,t.limit,"L"):t}/**
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
 */class oK{constructor(){this.un=new aK}addToCollectionParentIndex(t,n){return this.un.add(n),Oe.resolve()}getCollectionParents(t,n){return Oe.resolve(this.un.getEntries(n))}addFieldIndex(t,n){return Oe.resolve()}deleteFieldIndex(t,n){return Oe.resolve()}deleteAllFieldIndexes(t){return Oe.resolve()}createTargetIndexes(t,n){return Oe.resolve()}getDocumentsMatchingTarget(t,n){return Oe.resolve(null)}getIndexType(t,n){return Oe.resolve(0)}getFieldIndexes(t,n){return Oe.resolve([])}getNextCollectionGroupToUpdate(t){return Oe.resolve(null)}getMinOffset(t,n){return Oe.resolve(ga.min())}getMinOffsetFromCollectionGroup(t,n){return Oe.resolve(ga.min())}updateCollectionGroup(t,n,i){return Oe.resolve()}updateIndexEntries(t,n){return Oe.resolve()}}class aK{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new wi(Cn.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new wi(Cn.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new vc(0)}static kn(){return new vc(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lK{constructor(){this.changes=new Bc(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ni.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?Oe.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uK{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cK{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&ef(i.mutation,r,yr.empty(),Et.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,At()).next(()=>i))}getLocalViewOfDocuments(t,n,i=At()){const r=ll();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let o=Rd();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=ll();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,At()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,r){let s=So();const o=Zd(),a=function(){return Zd()}();return n.forEach((l,u)=>{const d=i.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof Oa)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ef(d.mutation,u,d.mutation.getFieldMask(),Et.now())):o.set(u.key,yr.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var c;return a.set(u,new uK(d,(c=o.get(u))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,n){const i=Zd();let r=new Ln((o,a)=>o-a),s=At();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=i.get(l)||yr.empty();d=a.applyToLocalView(u,d),i.set(l,d);const c=(r.get(a.batchId)||At()).add(l);r=r.insert(a.batchId,c)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,c=s2();d.forEach(f=>{if(!s.has(f)){const v=d2(n.get(f),i.get(f));v!==null&&c.set(f,v),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,c))}return Oe.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(o){return it.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):e2(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):Oe.resolve(ll());let a=-1,l=s;return o.next(u=>Oe.forEach(u,(d,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(d)?Oe.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{l=l.insert(d,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,At())).next(d=>({batchId:a,changes:r2(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new it(n)).next(i=>{let r=Rd();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let o=Rd();return this.indexManager.getCollectionParents(t,s).next(a=>Oe.forEach(a,l=>{const u=function(c,f){return new $c(f,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(d=>{d.forEach((c,f)=>{o=o.insert(c,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ni.newInvalidDocument(d)))});let a=Rd();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&ef(d.mutation,u,yr.empty(),Et.now()),Dp(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class dK{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,n){return Oe.resolve(this.hr.get(n))}saveBundleMetadata(t,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Is(r.createTime)}}(n)),Oe.resolve()}getNamedQuery(t,n){return Oe.resolve(this.Pr.get(n))}saveNamedQuery(t,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:sK(r.bundledQuery),readTime:Is(r.readTime)}}(n)),Oe.resolve()}}/**
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
 */class fK{constructor(){this.overlays=new Ln(it.comparator),this.Ir=new Map}getOverlay(t,n){return Oe.resolve(this.overlays.get(n))}getOverlays(t,n){const i=ll();return Oe.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.ht(t,n,s)}),Oe.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),Oe.resolve()}getOverlaysForCollection(t,n,i){const r=ll(),s=n.length+1,o=new it(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return Oe.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new Ln((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let d=s.get(u.largestBatchId);d===null&&(d=ll(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ll(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=r)););return Oe.resolve(a)}ht(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new NY(n,i));let s=this.Ir.get(n);s===void 0&&(s=At(),this.Ir.set(n,s)),this.Ir.set(n,s.add(i.key))}}/**
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
 */class hK{constructor(){this.sessionToken=Si.EMPTY_BYTE_STRING}getSessionToken(t){return Oe.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Oe.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.Tr=new wi(ai.Er),this.dr=new wi(ai.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,n){const i=new ai(t,n);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Vr(new ai(t,n))}mr(t,n){t.forEach(i=>this.removeReference(i,n))}gr(t){const n=new it(new Cn([])),i=new ai(n,t),r=new ai(n,t+1),s=[];return this.dr.forEachInRange([i,r],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const n=new it(new Cn([])),i=new ai(n,t),r=new ai(n,t+1);let s=At();return this.dr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new ai(t,0),i=this.Tr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class ai{constructor(t,n){this.key=t,this.wr=n}static Er(t,n){return it.comparator(t.key,n.key)||Ht(t.wr,n.wr)}static Ar(t,n){return Ht(t.wr,n.wr)||it.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vK{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new wi(ai.Er)}checkEmpty(t){return Oe.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VY(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new ai(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Oe.resolve(o)}lookupMutationBatch(t,n){return Oe.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.vr(i),s=r<0?0:r;return Oe.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Oe.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return Oe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new ai(n,0),r=new ai(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],o=>{const a=this.Dr(o.wr);s.push(a)}),Oe.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new wi(Ht);return n.forEach(r=>{const s=new ai(r,0),o=new ai(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{i=i.add(a.wr)})}),Oe.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;it.isDocumentKey(s)||(s=s.child(""));const o=new ai(new it(s),0);let a=new wi(Ht);return this.br.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.wr)),!0)},o),Oe.resolve(this.Cr(a))}Cr(t){const n=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){dn(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return Oe.forEach(n.mutations,r=>{const s=new ai(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,n){const i=new ai(n,0),r=this.br.firstAfterOrEqual(i);return Oe.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Oe.resolve()}Fr(t,n){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const n=this.vr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mK{constructor(t){this.Mr=t,this.docs=function(){return new Ln(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Mr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return Oe.resolve(i?i.document.mutableCopy():Ni.newInvalidDocument(n))}getEntries(t,n){let i=So();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Ni.newInvalidDocument(r))}),Oe.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=So();const o=n.path,a=new it(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jq(Qq(d),i)<=0||(r.has(d.key)||Dp(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return Oe.resolve(s)}getAllFromCollectionGroup(t,n,i,r){vt()}Or(t,n){return Oe.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new gK(this)}getSize(t){return Oe.resolve(this.size)}}class gK extends lK{constructor(t){super(),this.cr=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),Oe.waitFor(n)}getFromCache(t,n){return this.cr.getEntry(t,n)}getAllFromCache(t,n){return this.cr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pK{constructor(t){this.persistence=t,this.Nr=new Bc(n=>xE(n),DE),this.lastRemoteSnapshotVersion=gt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ME,this.targetCount=0,this.kr=vc.Bn()}forEachTarget(t,n){return this.Nr.forEach((i,r)=>n(r)),Oe.resolve()}getLastRemoteSnapshotVersion(t){return Oe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Oe.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),Oe.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Lr&&(this.Lr=n),Oe.resolve()}Kn(t){this.Nr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.kr=new vc(n),this.highestTargetId=n),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,n){return this.Kn(n),this.targetCount+=1,Oe.resolve()}updateTargetData(t,n){return this.Kn(n),Oe.resolve()}removeTargetData(t,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,Oe.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),Oe.waitFor(s).next(()=>r)}getTargetCount(t){return Oe.resolve(this.targetCount)}getTargetData(t,n){const i=this.Nr.get(n)||null;return Oe.resolve(i)}addMatchingKeys(t,n,i){return this.Br.Rr(n,i),Oe.resolve()}removeMatchingKeys(t,n,i){this.Br.mr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),Oe.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Br.gr(n),Oe.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Br.yr(n);return Oe.resolve(i)}containsKey(t,n){return Oe.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _K{constructor(t,n){this.qr={},this.overlays={},this.Qr=new TE(0),this.Kr=!1,this.Kr=!0,this.$r=new hK,this.referenceDelegate=t(this),this.Ur=new pK(this),this.indexManager=new oK,this.remoteDocumentCache=function(r){return new mK(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new rK(n),this.Gr=new dK(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new fK,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.qr[t.toKey()];return i||(i=new vK(n,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,n,i){Ke("MemoryPersistence","Starting transaction:",t);const r=new yK(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,n){return Oe.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,n)))}}class yK extends eY{constructor(t){super(),this.currentSequenceNumber=t}}class LE{constructor(t){this.persistence=t,this.Jr=new ME,this.Yr=null}static Zr(t){return new LE(t)}get Xr(){if(this.Yr)return this.Yr;throw vt()}addReference(t,n,i){return this.Jr.addReference(i,n),this.Xr.delete(i.toString()),Oe.resolve()}removeReference(t,n,i){return this.Jr.removeReference(i,n),this.Xr.add(i.toString()),Oe.resolve()}markPotentiallyOrphaned(t,n){return this.Xr.add(n.toString()),Oe.resolve()}removeTarget(t,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}zr(){this.Yr=new Set}jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Oe.forEach(this.Xr,i=>{const r=it.fromPath(i);return this.ei(t,r).next(s=>{s||n.removeEntry(r,gt.min())})}).next(()=>(this.Yr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ei(t,n).next(i=>{i?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(t){return 0}ei(t,n){return Oe.or([()=>Oe.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Hr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.$i=i,this.Ui=r}static Wi(t,n){let i=At(),r=At();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new FE(t,n.fromCache,i,r)}}/**
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
 */class bK{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class wK{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return FH()?8:tY(ji())>0?6:4}()}initialize(t,n){this.Ji=t,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.Yi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(t,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new bK;return this.Xi(t,n,o).next(a=>{if(s.result=a,this.zi)return this.es(t,n,o,a.size)})}).next(()=>s.result)}es(t,n,i,r){return i.documentReadCount<this.ji?(Sd()<=It.DEBUG&&Ke("QueryEngine","SDK will not create cache indexes for query:",xu(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Oe.resolve()):(Sd()<=It.DEBUG&&Ke("QueryEngine","Query:",xu(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(Sd()<=It.DEBUG&&Ke("QueryEngine","The SDK decides to create cache indexes for query:",xu(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ts(n))):Oe.resolve())}Yi(t,n){if(ZI(n))return Oe.resolve(null);let i=Ts(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=h0(n,null,"F"),i=Ts(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const o=At(...s);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(t,h0(n,null,"F")):this.rs(t,u,n,l)}))})))}Zi(t,n,i,r){return ZI(n)||r.isEqual(gt.min())?Oe.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const o=this.ts(n,s);return this.ns(n,o,i,r)?Oe.resolve(null):(Sd()<=It.DEBUG&&Ke("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xu(n)),this.rs(t,o,n,Xq(r,-1)).next(a=>a))})}ts(t,n){let i=new wi(n2(t));return n.forEach((r,s)=>{Dp(t,s)&&(i=i.add(s))}),i}ns(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,n,i){return Sd()<=It.DEBUG&&Ke("QueryEngine","Using full collection scan to execute query:",xu(n)),this.Ji.getDocumentsMatchingQuery(t,n,ga.min(),i)}rs(t,n,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class SK{constructor(t,n,i,r){this.persistence=t,this.ss=n,this.serializer=r,this.os=new Ln(Ht),this._s=new Bc(s=>xE(s),DE),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cK(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.os))}}function EK(e,t,n,i){return new SK(e,t,n,i)}async function E2(e,t){const n=_t(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.ls(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=At();for(const u of r){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(i,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function CK(e,t){const n=_t(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const c=u.batch,f=c.keys();let v=Oe.resolve();return f.forEach(g=>{v=v.next(()=>d.getEntry(l,g)).next(p=>{const _=u.docVersions.get(g);dn(_!==null),p.version.compareTo(_)<0&&(c.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),d.addEntry(p)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,c))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=At();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function C2(e){const t=_t(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ur.getLastRemoteSnapshotVersion(n))}function kK(e,t){const n=_t(e),i=t.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const a=[];t.targetChanges.forEach((d,c)=>{const f=r.get(c);if(!f)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,c).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,c)));let v=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(c)!==null?v=v.withResumeToken(Si.EMPTY_BYTE_STRING,gt.min()).withLastLimboFreeSnapshotVersion(gt.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,i)),r=r.insert(c,v),function(p,_,y){return p.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,v,d)&&a.push(n.Ur.updateTargetData(s,v))});let l=So(),u=At();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(TK(s,o,t.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!i.isEqual(gt.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(c=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(d)}return Oe.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.os=r,s))}function TK(e,t,n){let i=At(),r=At();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let o=So();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(gt.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):Ke("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:r}})}function IK(e,t){const n=_t(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function AK(e,t){const n=_t(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ur.getTargetData(i,t).next(s=>s?(r=s,Oe.resolve(r)):n.Ur.allocateTargetId(i).next(o=>(r=new na(t,o,"TargetPurposeListen",i.currentSequenceNumber),n.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(i.targetId,i),n._s.set(t,i.targetId)),i})}async function _0(e,t,n){const i=_t(e),r=i.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Th(o))throw o;Ke("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function cA(e,t,n){const i=_t(e);let r=gt.min(),s=At();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const c=_t(l),f=c._s.get(d);return f!==void 0?Oe.resolve(c.os.get(f)):c.Ur.getTargetData(u,d)}(i,o,Ts(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.ss.getDocumentsMatchingQuery(o,t,n?r:gt.min(),n?s:At())).next(a=>(PK(i,yY(t),a),{documents:a,Ts:s})))}function PK(e,t,n){let i=e.us.get(t)||gt.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.us.set(t,i)}class dA{constructor(){this.activeTargetIds=kY()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xK{constructor(){this.so=new dA,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,n,i){this.oo[t]=n}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new dA,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class DK{_o(t){}shutdown(){}}/**
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
 */class fA{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Ke("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){Ke("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iv=null;function Ny(){return Iv===null?Iv=function(){return 268435456+Math.round(2147483648*Math.random())}():Iv++,"0x"+Iv.toString(16)}/**
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
 */const RK={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OK{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="WebChannelConnection";class VK extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+n.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(n,i,r,s,o){const a=Ny(),l=this.xo(n,i.toUriEncodedString());Ke("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(n,l,u,r).then(d=>(Ke("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw cc("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",r),d})}Lo(n,i,r,s,o,a){return this.Mo(n,i,r,s,o)}Oo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fc}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}xo(n,i){const r=RK[n];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,n,i,r){const s=Ny();return new Promise((o,a)=>{const l=new LM;l.setWithCredentials(!0),l.listenOnce($M.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case lm.NO_ERROR:const d=l.getResponseJson();Ke(xi,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case lm.TIMEOUT:Ke(xi,`RPC '${t}' ${s} timed out`),a(new We(ke.DEADLINE_EXCEEDED,"Request time out"));break;case lm.HTTP_ERROR:const c=l.getStatus();if(Ke(xi,`RPC '${t}' ${s} failed with status:`,c,"response text:",l.getResponseText()),c>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const v=f==null?void 0:f.error;if(v&&v.status&&v.message){const g=function(_){const y=_.toLowerCase().replace(/_/g,"-");return Object.values(ke).indexOf(y)>=0?y:ke.UNKNOWN}(v.status);a(new We(g,v.message))}else a(new We(ke.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new We(ke.UNAVAILABLE,"Connection failed."));break;default:vt()}}finally{Ke(xi,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);Ke(xi,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}Bo(t,n,i){const r=Ny(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=jM(),a=UM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new FM({})),this.Oo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const d=s.join("");Ke(xi,`Creating RPC '${t}' stream ${r}: ${d}`,l);const c=o.createWebChannel(d,l);let f=!1,v=!1;const g=new OK({Io:_=>{v?Ke(xi,`Not sending because RPC '${t}' stream ${r} is closed:`,_):(f||(Ke(xi,`Opening RPC '${t}' stream ${r} transport.`),c.open(),f=!0),Ke(xi,`RPC '${t}' stream ${r} sending:`,_),c.send(_))},To:()=>c.close()}),p=(_,y,b)=>{_.listen(y,E=>{try{b(E)}catch(k){setTimeout(()=>{throw k},0)}})};return p(c,Dd.EventType.OPEN,()=>{v||(Ke(xi,`RPC '${t}' stream ${r} transport opened.`),g.yo())}),p(c,Dd.EventType.CLOSE,()=>{v||(v=!0,Ke(xi,`RPC '${t}' stream ${r} transport closed`),g.So())}),p(c,Dd.EventType.ERROR,_=>{v||(v=!0,cc(xi,`RPC '${t}' stream ${r} transport errored:`,_),g.So(new We(ke.UNAVAILABLE,"The operation could not be completed")))}),p(c,Dd.EventType.MESSAGE,_=>{var y;if(!v){const b=_.data[0];dn(!!b);const E=b,k=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(k){Ke(xi,`RPC '${t}' stream ${r} received error:`,k);const R=k.status;let O=function(w){const C=Kn[w];if(C!==void 0)return h2(C)}(R),D=k.message;O===void 0&&(O=ke.INTERNAL,D="Unknown error status: "+R+" with message "+k.message),v=!0,g.So(new We(O,D)),c.close()}else Ke(xi,`RPC '${t}' stream ${r} received:`,b),g.bo(b)}}),p(a,BM.STAT_EVENT,_=>{_.stat===a0.PROXY?Ke(xi,`RPC '${t}' stream ${r} detected buffering proxy`):_.stat===a0.NOPROXY&&Ke(xi,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function My(){return typeof document<"u"?document:null}/**
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
 */function Mp(e){return new WY(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(t,n,i=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-i);r>0&&Ke("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(t,n,i,r,s,o,a,l){this.ui=t,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new k2(t,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():n&&n.code===ke.RESOURCE_EXHAUSTED?(wo(n.toString()),wo("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===ke.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(n)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===n&&this.P_(i,r)},i=>{t(()=>{const r=new We(ke.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,n){const i=this.h_(this.Yo);this.stream=this.T_(t,n),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return Ke("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return n=>{this.ui.enqueueAndForget(()=>this.Yo===t?n():(Ke("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NK extends T2{constructor(t,n,i,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}T_(t,n){return this.connection.Bo("Listen",t,n)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const n=qY(this.serializer,t),i=function(s){if(!("targetChange"in s))return gt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?gt.min():o.readTime?Is(o.readTime):gt.min()}(t);return this.listener.d_(n,i)}A_(t){const n={};n.database=p0(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=d0(l)?{documents:XY(s,l)}:{query:QY(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=g2(s,o.resumeToken);const u=v0(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(gt.min())>0){a.readTime=rg(s,o.snapshotVersion.toTimestamp());const u=v0(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const i=ZY(this.serializer,t);i&&(n.labels=i),this.a_(n)}R_(t){const n={};n.database=p0(this.serializer),n.removeTarget=t,this.a_(n)}}class MK extends T2{constructor(t,n,i,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,n){return this.connection.Bo("Write",t,n)}E_(t){return dn(!!t.streamToken),this.lastStreamToken=t.streamToken,dn(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){dn(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const n=KY(t.writeResults,t.commitTime),i=Is(t.commitTime);return this.listener.g_(i,n)}p_(){const t={};t.database=p0(this.serializer),this.a_(t)}m_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>YY(this.serializer,i))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LK extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new We(ke.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(t,m0(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ke.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new We(ke.UNKNOWN,s.toString())})}Lo(t,n,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,m0(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ke.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new We(ke.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class FK{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wo(n),this.D_=!1):Ke("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $K{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{i.enqueueAndForget(async()=>{Ql(this)&&(Ke("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_t(l);u.L_.add(4),await Ph(u),u.q_.set("Unknown"),u.L_.delete(4),await Lp(u)}(this))})}),this.q_=new FK(i,r)}}async function Lp(e){if(Ql(e))for(const t of e.B_)await t(!0)}async function Ph(e){for(const t of e.B_)await t(!1)}function I2(e,t){const n=_t(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),jE(n)?UE(n):Uc(n).r_()&&BE(n,t))}function $E(e,t){const n=_t(e),i=Uc(n);n.N_.delete(t),i.r_()&&A2(n,t),n.N_.size===0&&(i.r_()?i.o_():Ql(n)&&n.q_.set("Unknown"))}function BE(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(gt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Uc(e).A_(t)}function A2(e,t){e.Q_.xe(t),Uc(e).R_(t)}function UE(e){e.Q_=new BY({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Uc(e).start(),e.q_.v_()}function jE(e){return Ql(e)&&!Uc(e).n_()&&e.N_.size>0}function Ql(e){return _t(e).L_.size===0}function P2(e){e.Q_=void 0}async function BK(e){e.q_.set("Online")}async function UK(e){e.N_.forEach((t,n)=>{BE(e,t)})}async function jK(e,t){P2(e),jE(e)?(e.q_.M_(t),UE(e)):e.q_.set("Unknown")}async function HK(e,t,n){if(e.q_.set("Online"),t instanceof m2&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(e,t)}catch(i){Ke("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await sg(e,i)}else if(t instanceof dm?e.Q_.Ke(t):t instanceof v2?e.Q_.He(t):e.Q_.We(t),!n.isEqual(gt.min()))try{const i=await C2(e.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(u);d&&s.N_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(Si.EMPTY_BYTE_STRING,d.snapshotVersion)),A2(s,l);const c=new na(d.target,l,u,d.sequenceNumber);BE(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(i){Ke("RemoteStore","Failed to raise snapshot:",i),await sg(e,i)}}async function sg(e,t,n){if(!Th(t))throw t;e.L_.add(1),await Ph(e),e.q_.set("Offline"),n||(n=()=>C2(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Ke("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Lp(e)})}function x2(e,t){return t().catch(n=>sg(e,n,t))}async function Fp(e){const t=_t(e),n=_a(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;WK(t);)try{const r=await IK(t.localStore,i);if(r===null){t.O_.length===0&&n.o_();break}i=r.batchId,zK(t,r)}catch(r){await sg(t,r)}D2(t)&&R2(t)}function WK(e){return Ql(e)&&e.O_.length<10}function zK(e,t){e.O_.push(t);const n=_a(e);n.r_()&&n.V_&&n.m_(t.mutations)}function D2(e){return Ql(e)&&!_a(e).n_()&&e.O_.length>0}function R2(e){_a(e).start()}async function GK(e){_a(e).p_()}async function qK(e){const t=_a(e);for(const n of e.O_)t.m_(n.mutations)}async function YK(e,t,n){const i=e.O_.shift(),r=OE.from(i,t,n);await x2(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Fp(e)}async function KK(e,t){t&&_a(e).V_&&await async function(i,r){if(function(o){return LY(o)&&o!==ke.ABORTED}(r.code)){const s=i.O_.shift();_a(i).s_(),await x2(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fp(i)}}(e,t),D2(e)&&R2(e)}async function hA(e,t){const n=_t(e);n.asyncQueue.verifyOperationInProgress(),Ke("RemoteStore","RemoteStore received new credentials");const i=Ql(n);n.L_.add(3),await Ph(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Lp(n)}async function XK(e,t){const n=_t(e);t?(n.L_.delete(2),await Lp(n)):t||(n.L_.add(2),await Ph(n),n.q_.set("Unknown"))}function Uc(e){return e.K_||(e.K_=function(n,i,r){const s=_t(n);return s.w_(),new NK(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Eo:BK.bind(null,e),Ro:UK.bind(null,e),mo:jK.bind(null,e),d_:HK.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),jE(e)?UE(e):e.q_.set("Unknown")):(await e.K_.stop(),P2(e))})),e.K_}function _a(e){return e.U_||(e.U_=function(n,i,r){const s=_t(n);return s.w_(),new MK(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:GK.bind(null,e),mo:KK.bind(null,e),f_:qK.bind(null,e),g_:YK.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await Fp(e)):(await e.U_.stop(),e.O_.length>0&&(Ke("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new go,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new HE(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new We(ke.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function WE(e,t){if(wo("AsyncQueue",`${t}: ${e}`),Th(e))return new We(ke.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.comparator=t?(n,i)=>t(n,i)||it.comparator(n.key,i.key):(n,i)=>it.comparator(n.key,i.key),this.keyedMap=Rd(),this.sortedSet=new Ln(this.comparator)}static emptySet(t){return new Ju(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ju)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Ju;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.W_=new Ln(it.comparator)}track(t){const n=t.doc.key,i=this.W_.get(n);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(n,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(n):t.type===1&&i.type===2?this.W_=this.W_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):vt():this.W_=this.W_.insert(n,t)}G_(){const t=[];return this.W_.inorderTraversal((n,i)=>{t.push(i)}),t}}class mc{constructor(t,n,i,r,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mc(t,n,Ju.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xp(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QK{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class JK{constructor(){this.queries=mA(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,i){const r=_t(n),s=r.queries;r.queries=mA(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(i)})})(this,new We(ke.ABORTED,"Firestore shutting down"))}}function mA(){return new Bc(e=>t2(e),xp)}async function zE(e,t){const n=_t(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new QK,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await n.onListen(r,!0);break;case 1:s.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=WE(o,`Initialization of query '${xu(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&qE(n)}async function GE(e,t){const n=_t(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const o=s.j_.indexOf(t);o>=0&&(s.j_.splice(o,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function ZK(e,t){const n=_t(e);let i=!1;for(const r of t){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(r)&&(i=!0);o.z_=r}}i&&qE(n)}function eX(e,t,n){const i=_t(e),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(n);i.queries.delete(t)}function qE(e){e.Y_.forEach(t=>{t.next()})}var y0,gA;(gA=y0||(y0={})).ea="default",gA.Cache="cache";class YE{constructor(t,n,i){this.query=t,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new mc(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.na?this.ia(t)&&(this.ta.next(t),n=!0):this.sa(t,this.onlineState)&&(this.oa(t),n=!0),this.ra=t,n}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),n=!0),n}sa(t,n){if(!t.fromCache||!this.J_())return!0;const i=n!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(t){t=mc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==y0.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(t){this.key=t}}class V2{constructor(t){this.key=t}}class tX{constructor(t,n){this.query=t,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=At(),this.mutatedKeys=At(),this.Aa=n2(t),this.Ra=new Ju(this.Aa)}get Va(){return this.Ta}ma(t,n){const i=n?n.fa:new vA,r=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,c)=>{const f=r.get(d),v=Dp(this.query,c)?c:null,g=!!f&&this.mutatedKeys.has(f.key),p=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let _=!1;f&&v?f.data.isEqual(v.data)?g!==p&&(i.track({type:3,doc:v}),_=!0):this.ga(f,v)||(i.track({type:2,doc:v}),_=!0,(l&&this.Aa(v,l)>0||u&&this.Aa(v,u)<0)&&(a=!0)):!f&&v?(i.track({type:0,doc:v}),_=!0):f&&!v&&(i.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(v?(o=o.add(v),s=p?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),i.track({type:1,doc:d})}return{Ra:o,fa:i,ns:a,mutatedKeys:s}}ga(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,c)=>function(v,g){const p=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt()}};return p(v)-p(g)}(d.type,c.type)||this.Aa(d.doc,c.doc)),this.pa(i),r=r!=null&&r;const a=n&&!r?this.ya():[],l=this.da.size===0&&this.current&&!r?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new mc(this.query,t.Ra,s,o,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new vA,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=At(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const n=[];return t.forEach(i=>{this.da.has(i)||n.push(new V2(i))}),this.da.forEach(i=>{t.has(i)||n.push(new O2(i))}),n}ba(t){this.Ta=t.Ts,this.da=At();const n=this.ma(t.documents);return this.applyChanges(n,!0)}Da(){return mc.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nX{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class iX{constructor(t){this.key=t,this.va=!1}}class rX{constructor(t,n,i,r,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Bc(a=>t2(a),xp),this.Ma=new Map,this.xa=new Set,this.Oa=new Ln(it.comparator),this.Na=new Map,this.La=new ME,this.Ba={},this.ka=new Map,this.qa=vc.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sX(e,t,n=!0){const i=B2(e);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await N2(i,t,n,!0),r}async function oX(e,t){const n=B2(e);await N2(n,t,!0,!1)}async function N2(e,t,n,i){const r=await AK(e.localStore,Ts(t)),s=r.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await aX(e,t,s,o==="current",r.resumeToken)),e.isPrimaryClient&&n&&I2(e.remoteStore,r),a}async function aX(e,t,n,i,r){e.Ka=(c,f,v)=>async function(p,_,y,b){let E=_.view.ma(y);E.ns&&(E=await cA(p.localStore,_.query,!1).then(({documents:D})=>_.view.ma(D,E)));const k=b&&b.targetChanges.get(_.targetId),R=b&&b.targetMismatches.get(_.targetId)!=null,O=_.view.applyChanges(E,p.isPrimaryClient,k,R);return _A(p,_.targetId,O.wa),O.snapshot}(e,c,f,v);const s=await cA(e.localStore,t,!0),o=new tX(t,s.Ts),a=o.ma(s.documents),l=Ah.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,l);_A(e,n,u.wa);const d=new nX(t,n,o);return e.Fa.set(t,d),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function lX(e,t,n){const i=_t(e),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(o=>!xp(o,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await _0(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&$E(i.remoteStore,r.targetId),b0(i,r.targetId)}).catch(kh)):(b0(i,r.targetId),await _0(i.localStore,r.targetId,!0))}async function uX(e,t){const n=_t(e),i=n.Fa.get(t),r=n.Ma.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),$E(n.remoteStore,i.targetId))}async function cX(e,t,n){const i=pX(e);try{const r=await function(o,a){const l=_t(o),u=Et.now(),d=a.reduce((v,g)=>v.add(g.key),At());let c,f;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let g=So(),p=At();return l.cs.getEntries(v,d).next(_=>{g=_,g.forEach((y,b)=>{b.isValidDocument()||(p=p.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,g)).next(_=>{c=_;const y=[];for(const b of a){const E=RY(b,c.get(b.key).overlayedDocument);E!=null&&y.push(new Oa(b.key,E,qM(E.value.mapValue),ar.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,y,a)}).next(_=>{f=_;const y=_.applyToLocalDocumentSet(c,p);return l.documentOverlayCache.saveOverlays(v,_.batchId,y)})}).then(()=>({batchId:f.batchId,changes:r2(c)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ln(Ht)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(i,r.batchId,n),await xh(i,r.changes),await Fp(i.remoteStore)}catch(r){const s=WE(r,"Failed to persist write");n.reject(s)}}async function M2(e,t){const n=_t(e);try{const i=await kK(n.localStore,t);t.targetChanges.forEach((r,s)=>{const o=n.Na.get(s);o&&(dn(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?dn(o.va):r.removedDocuments.size>0&&(dn(o.va),o.va=!1))}),await xh(n,i,t)}catch(i){await kh(i)}}function pA(e,t,n){const i=_t(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Fa.forEach((s,o)=>{const a=o.view.Z_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=_t(o);l.onlineState=a;let u=!1;l.queries.forEach((d,c)=>{for(const f of c.j_)f.Z_(a)&&(u=!0)}),u&&qE(l)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function dX(e,t,n){const i=_t(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Na.get(t),s=r&&r.key;if(s){let o=new Ln(it.comparator);o=o.insert(s,Ni.newNoDocument(s,gt.min()));const a=At().add(s),l=new Np(gt.min(),new Map,new Ln(Ht),o,a);await M2(i,l),i.Oa=i.Oa.remove(s),i.Na.delete(t),KE(i)}else await _0(i.localStore,t,!1).then(()=>b0(i,t,n)).catch(kh)}async function fX(e,t){const n=_t(e),i=t.batch.batchId;try{const r=await CK(n.localStore,t);F2(n,i,null),L2(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await xh(n,r)}catch(r){await kh(r)}}async function hX(e,t,n){const i=_t(e);try{const r=await function(o,a){const l=_t(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(c=>(dn(c!==null),d=c.keys(),l.mutationQueue.removeMutationBatch(u,c))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(i.localStore,t);F2(i,t,n),L2(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await xh(i,r)}catch(r){await kh(r)}}function L2(e,t){(e.ka.get(t)||[]).forEach(n=>{n.resolve()}),e.ka.delete(t)}function F2(e,t,n){const i=_t(e);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function b0(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Ma.get(t))e.Fa.delete(i),n&&e.Ca.$a(i,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(i=>{e.La.containsKey(i)||$2(e,i)})}function $2(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);n!==null&&($E(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),KE(e))}function _A(e,t,n){for(const i of n)i instanceof O2?(e.La.addReference(i.key,t),vX(e,i)):i instanceof V2?(Ke("SyncEngine","Document no longer in limbo: "+i.key),e.La.removeReference(i.key,t),e.La.containsKey(i.key)||$2(e,i.key)):vt()}function vX(e,t){const n=t.key,i=n.path.canonicalString();e.Oa.get(n)||e.xa.has(i)||(Ke("SyncEngine","New document in limbo: "+n),e.xa.add(i),KE(e))}function KE(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new it(Cn.fromString(t)),i=e.qa.next();e.Na.set(i,new iX(n)),e.Oa=e.Oa.insert(n,i),I2(e.remoteStore,new na(Ts(Pp(n.path)),i,"TargetPurposeLimboResolution",TE.oe))}}async function xh(e,t,n){const i=_t(e),r=[],s=[],o=[];i.Fa.isEmpty()||(i.Fa.forEach((a,l)=>{o.push(i.Ka(l,t,n).then(u=>{var d;if((u||n)&&i.isPrimaryClient){const c=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(l.targetId,c?"current":"not-current")}if(u){r.push(u);const c=FE.Wi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),i.Ca.d_(r),await async function(l,u){const d=_t(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>Oe.forEach(u,f=>Oe.forEach(f.$i,v=>d.persistence.referenceDelegate.addReference(c,f.targetId,v)).next(()=>Oe.forEach(f.Ui,v=>d.persistence.referenceDelegate.removeReference(c,f.targetId,v)))))}catch(c){if(!Th(c))throw c;Ke("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const f=c.targetId;if(!c.fromCache){const v=d.os.get(f),g=v.snapshotVersion,p=v.withLastLimboFreeSnapshotVersion(g);d.os=d.os.insert(f,p)}}}(i.localStore,s))}async function mX(e,t){const n=_t(e);if(!n.currentUser.isEqual(t)){Ke("SyncEngine","User change. New user:",t.toKey());const i=await E2(n.localStore,t);n.currentUser=t,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new We(ke.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await xh(n,i.hs)}}function gX(e,t){const n=_t(e),i=n.Na.get(t);if(i&&i.va)return At().add(i.key);{let r=At();const s=n.Ma.get(t);if(!s)return r;for(const o of s){const a=n.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function B2(e){const t=_t(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=M2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gX.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dX.bind(null,t),t.Ca.d_=ZK.bind(null,t.eventManager),t.Ca.$a=eX.bind(null,t.eventManager),t}function pX(e){const t=_t(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fX.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hX.bind(null,t),t}class yA{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Mp(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return EK(this.persistence,new wK,t.initialUser,this.serializer)}createPersistence(t){return new _K(LE.Zr,this.serializer)}createSharedClientState(t){return new xK}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _X{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>pA(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=mX.bind(null,this.syncEngine),await XK(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new JK}()}createDatastore(t){const n=Mp(t.databaseInfo.databaseId),i=function(s){return new VK(s)}(t.databaseInfo);return function(s,o,a,l){return new LK(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,o,a){return new $K(i,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>pA(this.syncEngine,n,0),function(){return fA.D()?new fA:new DK}())}createSyncEngine(t,n){return function(r,s,o,a,l,u,d){const c=new rX(r,s,o,a,l,u);return d&&(c.Qa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(r){const s=_t(r);Ke("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ph(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class XE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):wo("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yX{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Di.UNAUTHENTICATED,this.clientId=WM.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Ke("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Ke("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new We(ke.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new go;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=WE(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ly(e,t){e.asyncQueue.verifyOperationInProgress(),Ke("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await E2(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function bA(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wX(e);Ke("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>hA(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>hA(t.remoteStore,r)),e._onlineComponents=t}function bX(e){return e.name==="FirebaseError"?e.code===ke.FAILED_PRECONDITION||e.code===ke.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function wX(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ke("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ly(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!bX(n))throw n;cc("Error using user provided cache. Falling back to memory cache: "+n),await Ly(e,new yA)}}else Ke("FirestoreClient","Using default OfflineComponentProvider"),await Ly(e,new yA);return e._offlineComponents}async function U2(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ke("FirestoreClient","Using user provided OnlineComponentProvider"),await bA(e,e._uninitializedComponentsProvider._online)):(Ke("FirestoreClient","Using default OnlineComponentProvider"),await bA(e,new _X))),e._onlineComponents}function SX(e){return U2(e).then(t=>t.syncEngine)}async function og(e){const t=await U2(e),n=t.eventManager;return n.onListen=sX.bind(null,t.syncEngine),n.onUnlisten=lX.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=oX.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=uX.bind(null,t.syncEngine),n}function EX(e,t,n={}){const i=new go;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new XE({next:f=>{o.enqueueAndForget(()=>GE(s,c));const v=f.docs.has(a);!v&&f.fromCache?u.reject(new We(ke.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&f.fromCache&&l&&l.source==="server"?u.reject(new We(ke.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),c=new YE(Pp(a.path),d,{includeMetadataChanges:!0,_a:!0});return zE(s,c)}(await og(e),e.asyncQueue,t,n,i)),i.promise}function CX(e,t,n={}){const i=new go;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new XE({next:f=>{o.enqueueAndForget(()=>GE(s,c)),f.fromCache&&l.source==="server"?u.reject(new We(ke.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),c=new YE(a,d,{includeMetadataChanges:!0,_a:!0});return zE(s,c)}(await og(e),e.asyncQueue,t,n,i)),i.promise}/**
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
 */function j2(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const wA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(e,t,n){if(!n)throw new We(ke.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function kX(e,t,n,i){if(t===!0&&i===!0)throw new We(ke.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function SA(e){if(!it.isDocumentKey(e))throw new We(ke.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function EA(e){if(it.isDocumentKey(e))throw new We(ke.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function $p(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":vt()}function Er(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new We(ke.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$p(e);throw new We(ke.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class CA{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new We(ke.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new We(ke.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kX("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j2((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new We(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new We(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new We(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Bp{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new CA({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new We(ke.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new We(ke.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new CA(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Uq;switch(i.type){case"firstParty":return new zq(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new We(ke.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=wA.get(n);i&&(Ke("ComponentProvider","Removing Datastore"),wA.delete(n),i.terminate())}(this),Promise.resolve()}}function W2(e,t,n,i={}){var r;const s=(e=Er(e,Bp))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&cc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Di.MOCK_USER;else{a=OH(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new We(ke.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Di(u)}e._authCredentials=new jq(new HM(a,l))}}/**
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
 */class Va{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Va(this.firestore,t,this._query)}}class Qi{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ca(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qi(this.firestore,t,this._key)}}class ca extends Va{constructor(t,n,i){super(t,n,Pp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qi(this.firestore,null,new it(t))}withConverter(t){return new ca(this.firestore,t,this._path)}}function TX(e,t,...n){if(e=Gn(e),H2("collection","path",t),e instanceof Bp){const i=Cn.fromString(t,...n);return EA(i),new ca(e,null,i)}{if(!(e instanceof Qi||e instanceof ca))throw new We(ke.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Cn.fromString(t,...n));return EA(i),new ca(e.firestore,null,i)}}function Vd(e,t,...n){if(e=Gn(e),arguments.length===1&&(t=WM.newId()),H2("doc","path",t),e instanceof Bp){const i=Cn.fromString(t,...n);return SA(i),new Qi(e,null,new it(i))}{if(!(e instanceof Qi||e instanceof ca))throw new We(ke.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Cn.fromString(t,...n));return SA(i),new Qi(e.firestore,e instanceof ca?e.converter:null,new it(i))}}/**
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
 */class IX{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new k2(this,"async_queue_retry"),this.Eu=()=>{const n=My();n&&Ke("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const t=My();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const n=My();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const n=new go;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Th(t))throw t;Ke("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const n=this.au.then(()=>(this.Pu=!0,t().catch(i=>{this.hu=i,this.Pu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw wo("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Pu=!1,i))));return this.au=n,n}enqueueAfterDelay(t,n,i){this.du(),this.Tu.indexOf(t)>-1&&(n=0);const r=HE.createAndSchedule(this,t,n,i,s=>this.Vu(s));return this.lu.push(r),r}du(){this.hu&&vt()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const n of this.lu)if(n.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const n=this.lu.indexOf(t);this.lu.splice(n,1)}}function kA(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Eo extends Bp{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=function(){return new IX}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||G2(this),this._firestoreClient.terminate()}}function z2(e,t){const n=typeof e=="object"?e:HS(),i=typeof e=="string"?e:"(default)",r=jS(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=RH("firestore");s&&W2(r,...s)}return r}function Dh(e){return e._firestoreClient||G2(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function G2(e){var t,n,i;const r=e._freezeSettings(),s=function(a,l,u,d){return new rY(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,j2(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new yX(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class gc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gc(Si.fromBase64String(t))}catch(n){throw new We(ke.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new gc(Si.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Rh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new We(ke.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function AX(){return new Rh("__name__")}/**
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
 */class QE{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new We(ke.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new We(ke.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ht(this._lat,t._lat)||Ht(this._long,t._long)}}/**
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
 */class JE{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PX=/^__.*__$/;class xX{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Oa(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ih(t,this.data,n,this.fieldTransforms)}}class q2{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new Oa(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Y2(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vt()}}class ZE{constructor(t,n,i,r,s,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new ZE(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Su({path:i,Du:!1});return r.vu(t),r}Cu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Su({path:i,Du:!1});return r.yu(),r}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return ag(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(Y2(this.wu)&&PX.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class DX{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Mp(t)}Nu(t,n,i,r=!1){return new ZE({wu:t,methodName:n,Ou:i,path:bi.emptyPath(),Du:!1,xu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jp(e){const t=e._freezeSettings(),n=Mp(e._databaseId);return new DX(e._databaseId,!!t.ignoreUndefinedProperties,n)}function e1(e,t,n,i,r,s={}){const o=e.Nu(s.merge||s.mergeFields?2:0,t,n,r);t1("Data must be an object, but it was:",o,i);const a=K2(i,o);let l,u;if(s.merge)l=new yr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const c of s.mergeFields){const f=w0(t,c,n);if(!o.contains(f))throw new We(ke.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Q2(d,f)||d.push(f)}l=new yr(d),u=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,u=o.fieldTransforms;return new xX(new or(a),l,u)}class Hp extends QE{_toFieldTransform(t){if(t.wu!==2)throw t.wu===1?t.Mu(`${this._methodName}() can only appear at the top level of your update data`):t.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hp}}function RX(e,t,n,i){const r=e.Nu(1,t,n);t1("Data must be an object, but it was:",r,i);const s=[],o=or.empty();Xl(i,(l,u)=>{const d=n1(t,l,n);u=Gn(u);const c=r.Cu(d);if(u instanceof Hp)s.push(d);else{const f=Oh(u,c);f!=null&&(s.push(d),o.set(d,f))}});const a=new yr(s);return new q2(o,a,r.fieldTransforms)}function OX(e,t,n,i,r,s){const o=e.Nu(1,t,n),a=[w0(t,i,n)],l=[r];if(s.length%2!=0)throw new We(ke.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(w0(t,s[f])),l.push(s[f+1]);const u=[],d=or.empty();for(let f=a.length-1;f>=0;--f)if(!Q2(u,a[f])){const v=a[f];let g=l[f];g=Gn(g);const p=o.Cu(v);if(g instanceof Hp)u.push(v);else{const _=Oh(g,p);_!=null&&(u.push(v),d.set(v,_))}}const c=new yr(u);return new q2(d,c,o.fieldTransforms)}function VX(e,t,n,i=!1){return Oh(n,e.Nu(i?4:3,t))}function Oh(e,t){if(X2(e=Gn(e)))return t1("Unsupported field value:",t,e),K2(e,t);if(e instanceof QE)return function(i,r){if(!Y2(r.wu))throw r.Mu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Mu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=Oh(a,r.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Gn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return TY(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=Et.fromDate(i);return{timestampValue:rg(r.serializer,s)}}if(i instanceof Et){const s=new Et(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:rg(r.serializer,s)}}if(i instanceof Up)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof gc)return{bytesValue:g2(r.serializer,i._byteString)};if(i instanceof Qi){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:NE(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof JE)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return RE(a.serializer,l)})}}}}}}(i,r);throw r.Mu(`Unsupported field value: ${$p(i)}`)}(e,t)}function K2(e,t){const n={};return zM(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xl(e,(i,r)=>{const s=Oh(r,t.bu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function X2(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Et||e instanceof Up||e instanceof gc||e instanceof Qi||e instanceof QE||e instanceof JE)}function t1(e,t,n){if(!X2(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=$p(n);throw i==="an object"?t.Mu(e+" a custom object"):t.Mu(e+" "+i)}}function w0(e,t,n){if((t=Gn(t))instanceof Rh)return t._internalPath;if(typeof t=="string")return n1(e,t);throw ag("Field path arguments must be of type string or ",e,!1,void 0,n)}const NX=new RegExp("[~\\*/\\[\\]]");function n1(e,t,n){if(t.search(NX)>=0)throw ag(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Rh(...t.split("."))._internalPath}catch{throw ag(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ag(e,t,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new We(ke.INVALID_ARGUMENT,a+e+l)}function Q2(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class J2{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new MX(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Wp("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MX extends J2{data(){return super.data()}}function Wp(e,t){return typeof t=="string"?n1(e,t):t instanceof Rh?t._internalPath:t._delegate._internalPath}/**
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
 */function Z2(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new We(ke.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i1{}class eL extends i1{}function Fy(e,t,...n){let i=[];t instanceof i1&&i.push(t),i=i.concat(n),function(s){const o=s.filter(l=>l instanceof r1).length,a=s.filter(l=>l instanceof zp).length;if(o>1||o>0&&a>0)throw new We(ke.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)e=r._apply(e);return e}class zp extends eL{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new zp(t,n,i)}_apply(t){const n=this._parse(t);return nL(t._query,n),new Va(t.firestore,t.converter,f0(t._query,n))}_parse(t){const n=jp(t.firestore);return function(s,o,a,l,u,d,c){let f;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new We(ke.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){IA(c,d);const v=[];for(const g of c)v.push(TA(l,s,g));f={arrayValue:{values:v}}}else f=TA(l,s,c)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||IA(c,d),f=VX(a,o,c,d==="in"||d==="not-in");return Qn.create(u,d,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Pn(e,t,n){const i=t,r=Wp("where",e);return zp._create(r,i,n)}class r1 extends i1{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new r1(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:as.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const l of a)nL(o,l),o=f0(o,l)}(t._query,n),new Va(t.firestore,t.converter,f0(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class s1 extends eL{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new s1(t,n)}_apply(t){const n=function(r,s,o){if(r.startAt!==null)throw new We(ke.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new We(ke.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pf(s,o)}(t._query,this._field,this._direction);return new Va(t.firestore,t.converter,function(r,s){const o=r.explicitOrderBy.concat([s]);return new $c(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function tL(e,t="asc"){const n=t,i=Wp("orderBy",e);return s1._create(i,n)}function TA(e,t,n){if(typeof(n=Gn(n))=="string"){if(n==="")throw new We(ke.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e2(t)&&n.indexOf("/")!==-1)throw new We(ke.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Cn.fromString(n));if(!it.isDocumentKey(i))throw new We(ke.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return qI(e,new it(i))}if(n instanceof Qi)return qI(e,n._key);throw new We(ke.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$p(n)}.`)}function IA(e,t){if(!Array.isArray(e)||e.length===0)throw new We(ke.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function nL(e,t){const n=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new We(ke.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new We(ke.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class LX{convertValue(t,n="none"){switch(Ml(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Wn(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Nl(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return Xl(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(t){var n,i,r;const s=(r=(i=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>Wn(o.doubleValue));return new JE(s)}convertGeoPoint(t){return new Up(Wn(t.latitude),Wn(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=AE(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Tf(t));default:return null}}convertTimestamp(t){const n=pa(t);return new Et(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Cn.fromString(t);dn(S2(i));const r=new If(i.get(1),i.get(3)),s=new it(i.popFirst(5));return r.isEqual(n)||wo(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function o1(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}/**
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
 */class Nd{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class iL extends J2{constructor(t,n,i,r,s,o){super(t,n,i,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new fm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Wp("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class fm extends iL{data(t={}){return super.data(t)}}class rL{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Nd(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new fm(this._firestore,this._userDataWriter,i.key,i,new Nd(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new We(ke.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new fm(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Nd(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new fm(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Nd(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:FX(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FX(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vt()}}/**
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
 */function a1(e){e=Er(e,Qi);const t=Er(e.firestore,Eo);return EX(Dh(t),e._key).then(n=>sL(t,e,n))}class l1 extends LX{constructor(t){super(),this.firestore=t}convertBytes(t){return new gc(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Qi(this.firestore,null,n)}}function S0(e){e=Er(e,Va);const t=Er(e.firestore,Eo),n=Dh(t),i=new l1(t);return Z2(e._query),CX(n,e._query).then(r=>new rL(t,i,e,r))}function $X(e,t,n){e=Er(e,Qi);const i=Er(e.firestore,Eo),r=o1(e.converter,t,n);return qp(i,[e1(jp(i),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,ar.none())])}function BX(e){return qp(Er(e.firestore,Eo),[new Vp(e._key,ar.none())])}function UX(e,t){const n=Er(e.firestore,Eo),i=Vd(e),r=o1(e.converter,t);return qp(n,[e1(jp(e.firestore),"addDoc",i._key,r,e.converter!==null,{}).toMutation(i._key,ar.exists(!1))]).then(()=>i)}function Gp(e,...t){var n,i,r;e=Gn(e);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||kA(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(kA(t[o])){const c=t[o];t[o]=(n=c.next)===null||n===void 0?void 0:n.bind(c),t[o+1]=(i=c.error)===null||i===void 0?void 0:i.bind(c),t[o+2]=(r=c.complete)===null||r===void 0?void 0:r.bind(c)}let l,u,d;if(e instanceof Qi)u=Er(e.firestore,Eo),d=Pp(e._key.path),l={next:c=>{t[o]&&t[o](sL(u,e,c))},error:t[o+1],complete:t[o+2]};else{const c=Er(e,Va);u=Er(c.firestore,Eo),d=c._query;const f=new l1(u);l={next:v=>{t[o]&&t[o](new rL(u,f,c,v))},error:t[o+1],complete:t[o+2]},Z2(e._query)}return function(f,v,g,p){const _=new XE(p),y=new YE(v,_,g);return f.asyncQueue.enqueueAndForget(async()=>zE(await og(f),y)),()=>{_.za(),f.asyncQueue.enqueueAndForget(async()=>GE(await og(f),y))}}(Dh(u),d,a,l)}function qp(e,t){return function(i,r){const s=new go;return i.asyncQueue.enqueueAndForget(async()=>cX(await SX(i),r,s)),s.promise}(Dh(e),t)}function sL(e,t,n){const i=n.docs.get(t._key),r=new l1(e);return new iL(e,r,t._key,i,new Nd(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */class jX{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=jp(t)}set(t,n,i){this._verifyNotCommitted();const r=$y(t,this._firestore),s=o1(r.converter,n,i),o=e1(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,ar.none())),this}update(t,n,i,...r){this._verifyNotCommitted();const s=$y(t,this._firestore);let o;return o=typeof(n=Gn(n))=="string"||n instanceof Rh?OX(this._dataReader,"WriteBatch.update",s._key,n,i,r):RX(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ar.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=$y(t,this._firestore);return this._mutations=this._mutations.concat(new Vp(n._key,ar.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new We(ke.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $y(e,t){if((e=Gn(e)).firestore!==t)throw new We(ke.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */function AA(e){return Dh(e=Er(e,Eo)),new jX(e,t=>qp(e,t))}(function(t,n=!0){(function(r){Fc=r})(Ra),Os(new ss("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new Eo(new Hq(i.getProvider("auth-internal")),new qq(i.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new We(ke.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new If(u.options.projectId,d)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),wr(jI,"4.7.2",t),wr(jI,"4.7.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL="firebasestorage.googleapis.com",HX="storageBucket",WX=2*60*1e3,zX=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends $s{constructor(t,n,i=0){super(By(t),`Firebase Storage: ${n} (${By(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Us.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return By(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ns;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ns||(Ns={}));function By(e){return"storage/"+e}function GX(){const e="An unknown error occurred, please check the error payload for server response.";return new Us(Ns.UNKNOWN,e)}function qX(){return new Us(Ns.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YX(){return new Us(Ns.CANCELED,"User canceled the upload/download.")}function KX(e){return new Us(Ns.INVALID_URL,"Invalid URL '"+e+"'.")}function XX(e){return new Us(Ns.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function PA(e){return new Us(Ns.INVALID_ARGUMENT,e)}function aL(){return new Us(Ns.APP_DELETED,"The Firebase app was deleted.")}function QX(e){return new Us(Ns.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=Qr.makeFromUrl(t,n)}catch{return new Qr(t,"")}if(i.path==="")return i;throw XX(t)}static makeFromUrl(t,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(k){k.path_=decodeURIComponent(k.path)}const d="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",v=new RegExp(`^https?://${c}/${d}/b/${r}/o${f}`,"i"),g={bucket:1,path:3},p=n===oL?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",y=new RegExp(`^https?://${p}/${r}/${_}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:v,indices:g,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let k=0;k<E.length;k++){const R=E[k],O=R.regex.exec(t);if(O){const D=O[R.indices.bucket];let S=O[R.indices.path];S||(S=""),i=new Qr(D,S),R.postModify(i);break}}if(i==null)throw KX(t);return i}}class JX{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZX(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(..._){u||(u=!0,t.apply(null,_))}function c(_){r=setTimeout(()=>{r=null,e(v,l())},_)}function f(){s&&clearTimeout(s)}function v(_,...y){if(u){f();return}if(_){f(),d.call(null,_,...y);return}if(l()||o){f(),d.call(null,_,...y);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,c(E)}let g=!1;function p(_){g||(g=!0,f(),!u&&(r!==null?(_||(a=2),clearTimeout(r),c(0)):_||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,p(!0)},n),p}function eQ(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tQ(e){return e!==void 0}function xA(e,t,n,i){if(i<t)throw PA(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw PA(`Invalid value for '${e}'. Expected ${n} or less.`)}function nQ(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var lg;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(lg||(lg={}));/**
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
 */function iQ(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{constructor(t,n,i,r,s,o,a,l,u,d,c,f=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=c,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,g)=>{this.resolve_=v,this.reject_=g,this.start_()})}start_(){const t=(i,r)=>{if(r){i(!1,new Av(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===lg.NO_ERROR,l=s.getStatus();if(!a||iQ(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===lg.ABORT;i(!1,new Av(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new Av(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());tQ(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=GX();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?aL():YX();o(l)}else{const l=qX();o(l)}};this.canceled_?n(!1,new Av(!1,null,!0)):this.backoffId_=ZX(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&eQ(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Av{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function sQ(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function oQ(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function aQ(e,t){t&&(e["X-Firebase-GMPID"]=t)}function lQ(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function uQ(e,t,n,i,r,s,o=!0){const a=nQ(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return aQ(u,t),sQ(u,n),oQ(u,s),lQ(u,i),new rQ(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cQ(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function dQ(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */let fQ=class E0{constructor(t,n){this._service=t,n instanceof Qr?this._location=n:this._location=Qr.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new E0(t,n)}get root(){const t=new Qr(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dQ(this._location.path)}get storage(){return this._service}get parent(){const t=cQ(this._location.path);if(t===null)return null;const n=new Qr(this._location.bucket,t);return new E0(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw QX(t)}};function DA(e,t){const n=t==null?void 0:t[HX];return n==null?null:Qr.makeFromBucketSpec(n,e)}class hQ{constructor(t,n,i,r,s){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=oL,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WX,this._maxUploadRetryTime=zX,this._requests=new Set,r!=null?this._bucket=Qr.makeFromBucketSpec(r,this._host):this._bucket=DA(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Qr.makeFromBucketSpec(this._url,t):this._bucket=DA(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){xA("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){xA("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new fQ(this,t)}_makeRequest(t,n,i,r,s=!0){if(this._deleted)return new JX(aL());{const o=uQ(t,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,r).getPromise()}}const RA="@firebase/storage",OA="0.13.2";/**
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
 */const vQ="storage";function mQ(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new hQ(n,i,r,t,Ra)}function gQ(){Os(new ss(vQ,mQ,"PUBLIC").setMultipleInstances(!0)),wr(RA,OA,""),wr(RA,OA,"esm2017")}gQ();const Uy=new WeakMap;function lL(e,t){return Uy.has(t)||Uy.set(t,{f:{},r:{},s:{},u:{}}),Uy.get(t)}function pQ(e,t,n,i){if(!e)return n;const[r,s]=uL(e);if(!r)return n;const o=lL(void 0,i)[r]||{},a=t||s;return a&&a in o?o[a]:n}function _Q(e,t,n,i){if(!e)return;const[r,s]=uL(e);if(!r)return;const o=lL(void 0,i)[r],a=t||s;if(a)return n.then(l=>{o[a]=l}).catch(ys),a}function uL(e){return q8(e)||Y8(e)?["f",e.path]:K8(e)?["r",e.toString()]:X8(e)?["s",e.toString()]:[]}const jy=new WeakMap;function yQ(e,t,n){const i=yh();jy.has(i)||jy.set(i,new Map);const r=jy.get(i),s=_Q(t,n,e,i);return s&&r.set(s,e),s?()=>r.delete(s):ys}const bQ={toFirestore(e){return e},fromFirestore(e,t){return e.exists()?Object.defineProperties(e.data(t),{id:{value:e.id}}):null}};function C0(e,t,n,i){if(!z8(e))return[e,{}];const r=[{},{}],s=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,d){l=l||{};const[c,f]=d;Object.getOwnPropertyNames(a).forEach(v=>{const g=Object.getOwnPropertyDescriptor(a,v);g&&!g.enumerable&&Object.defineProperty(c,v,g)});for(const v in a){const g=a[v];if(g==null||g instanceof Date||g instanceof Et||g instanceof Up)c[v]=g;else if(iE(g)){const p=u+v;c[v]=p in n?l[v]:g.path,f[p]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){c[v]=Array(g.length);for(let p=0;p<g.length;p++){const _=g[p];_&&_.path in s&&(c[v][p]=s[_.path])}o(g,l[v]||c[v],u+v+".",[c[v],f])}else ql(g)?(c[v]={},o(g,l[v],u+v+".",[c[v],f])):c[v]=g}}return o(e,t,"",r),r}const u1={reset:!1,wait:!0,maxRefDepth:2,converter:bQ,snapshotOptions:{serverTimestamps:"estimate"}};function ug(e){for(const t in e)e[t].unsub()}function k0(e,t,n,i,r,s,o,a,l){const[u,d]=C0(i.data(e.snapshotOptions),nE(t,n),r,e);s.set(t,n,u),T0(e,t,n,r,d,s,o,a,l)}function wQ({ref:e,target:t,path:n,depth:i,resolve:r,reject:s,ops:o},a){const l=Object.create(null);let u=ys;return a.once?a1(e).then(d=>{d.exists()?k0(a,t,n,d,l,o,i,r,s):(o.set(t,n,null),r())}).catch(s):u=Gp(e,d=>{d.exists()?k0(a,t,n,d,l,o,i,r,s):(o.set(t,n,null),r())},s),()=>{u(),ug(l)}}function T0(e,t,n,i,r,s,o,a,l){const u=Object.keys(r);if(Object.keys(i).filter(p=>u.indexOf(p)<0).forEach(p=>{i[p].unsub(),delete i[p]}),!u.length||++o>e.maxRefDepth)return a(n);let c=0;const f=u.length,v=Object.create(null);function g(p){p in v&&++c>=f&&a(n)}u.forEach(p=>{const _=i[p],y=r[p],b=`${n}.${p}`;if(v[b]=!0,_)if(_.path!==y.path)_.unsub();else return;i[p]={data:()=>nE(t,b),unsub:wQ({ref:y,target:t,path:b,depth:o,ops:s,resolve:g.bind(null,b),reject:l},e),path:y.path}})}function SQ(e,t,n,i,r,s){const o=Object.assign({},u1,s),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:d}=o,c="value";let f=z(u?[]:e.value);u||n.set(e,c,[]);const v=i;let g,p=ys;const _=[],y={added:({newIndex:E,doc:k})=>{_.splice(E,0,Object.create(null));const R=_[E],[O,D]=C0(k.data(l),void 0,R,o);n.add(fn(f),E,O),T0(o,f,`${c}.${E}`,R,D,n,0,i.bind(null,k),r)},modified:({oldIndex:E,newIndex:k,doc:R})=>{const O=fn(f),D=_[E],S=O[E],[w,C]=C0(R.data(l),S,D,o);_.splice(k,0,D),n.remove(O,E),n.add(O,k,w),T0(o,f,`${c}.${k}`,D,C,n,0,i,r)},removed:({oldIndex:E})=>{const k=fn(f);n.remove(k,E),ug(_.splice(E,1)[0])}};function b(E){const k=E.docChanges(a);if(!g&&k.length){g=!0;let R=0;const O=k.length,D=Object.create(null);for(let S=0;S<O;S++)D[k[S].doc.id]=!0;i=S=>{S&&S.id in D&&++R>=O&&(u&&(n.set(e,c,fn(f)),f=e),v(fn(f)),i=ys)}}k.forEach(R=>{y[R.type](R)}),k.length||(u&&(n.set(e,c,fn(f)),f=e),i(fn(f)))}return d?S0(t).then(b).catch(r):p=Gp(t,b,r),E=>{if(p(),E){const k=typeof E=="function"?E():[];n.set(e,c,k)}_.forEach(ug)}}function EQ(e,t,n,i,r,s){const o=Object.assign({},u1,s),a="value",l=Object.create(null);i=Q8(i,()=>nE(e,a));let u=ys;function d(c){c.exists()?k0(o,e,a,c,l,n,0,i,r):(n.set(e,a,null),i(null))}return o.once?a1(t).then(d).catch(r):u=Gp(t,d,r),c=>{if(u(),c){const f=typeof c=="function"?c():null;n.set(e,a,f)}ug(l)}}const VA=Symbol();function CQ(e,t){let n=ys;const i=Object.assign({},u1,t),r=fn(e),s=i.target||z();Z8()&&(i.once=!0);const o=pQ(r,i.ssrKey,VA,yh()),a=o!==VA;a&&(s.value=o);let l=!a;const u=z(!1),d=z(),c=Te(),f=WR();let v=ys;function g(){let y=fn(e);const b=new Promise((E,k)=>{if(n(i.reset),!y)return n=ys,E(null);u.value=l,l=!0,y.converter||(y=y.withConverter(i.converter)),n=(iE(y)?EQ:SQ)(s,y,kQ,E,k,i)}).catch(E=>(c.value===b&&(d.value=E),Promise.reject(E))).finally(()=>{c.value===b&&(u.value=!1)});c.value=b}let p=ys;(Qe(e)||typeof e=="function")&&(p=ge(e,g)),g(),r&&(v=yQ(c.value,r,i.ssrKey)),Gl()&&IO(()=>c.value),f&&Ci(_);function _(y=i.reset){p(),v(),n(y)}return Object.defineProperties(s,{error:{get:()=>d},data:{get:()=>s},pending:{get:()=>u},promise:{get:()=>c},stop:{get:()=>_}})}const kQ={set:(e,t,n)=>H8(e,t,n),add:(e,t,n)=>e.splice(t,0,n),remove:(e,t)=>e.splice(t,1)};function Yp(e,t){return CQ(e,t)}function I0(e){return z2(yh(e))}function TQ(e){return IQ({initialUser:e,dependencies:{popupRedirectResolver:_N,persistence:[vN,lN,ZS]}})}const cL=Symbol("VueFireAuth");function IQ({dependencies:e,initialUser:t}){return(n,i)=>{const[r,s]=AQ(n,i,t,e);t7(r,s)}}function AQ(e,t,n,i,r=ZV(e,i)){const s=e7(e,t).run(()=>z(n));return SN.set(e,s),t.provide(cL,r),[s,r]}function dL(e){return j8?st(cL):null}function PQ(e,{firebaseApp:t,modules:n=[]}){e.provide(wN,t);for(const i of n)i(t,e)}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ou=typeof document<"u";function fL(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xQ(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&fL(e.default)}const Qt=Object.assign;function Hy(e,t){const n={};for(const i in t){const r=t[i];n[i]=ls(r)?r.map(e):e(r)}return n}const tf=()=>{},ls=Array.isArray,hL=/#/g,DQ=/&/g,RQ=/\//g,OQ=/=/g,VQ=/\?/g,vL=/\+/g,NQ=/%5B/g,MQ=/%5D/g,mL=/%5E/g,LQ=/%60/g,gL=/%7B/g,FQ=/%7C/g,pL=/%7D/g,$Q=/%20/g;function c1(e){return encodeURI(""+e).replace(FQ,"|").replace(NQ,"[").replace(MQ,"]")}function BQ(e){return c1(e).replace(gL,"{").replace(pL,"}").replace(mL,"^")}function A0(e){return c1(e).replace(vL,"%2B").replace($Q,"+").replace(hL,"%23").replace(DQ,"%26").replace(LQ,"`").replace(gL,"{").replace(pL,"}").replace(mL,"^")}function UQ(e){return A0(e).replace(OQ,"%3D")}function jQ(e){return c1(e).replace(hL,"%23").replace(VQ,"%3F")}function HQ(e){return e==null?"":jQ(e).replace(RQ,"%2F")}function Rf(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const WQ=/\/$/,zQ=e=>e.replace(WQ,"");function Wy(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=KQ(i??t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Rf(o)}}function GQ(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function NA(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qQ(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&pc(t.matched[i],n.matched[r])&&_L(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _L(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!YQ(e[n],t[n]))return!1;return!0}function YQ(e,t){return ls(e)?MA(e,t):ls(t)?MA(t,e):e===t}function MA(e,t){return ls(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function KQ(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Wo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Of;(function(e){e.pop="pop",e.push="push"})(Of||(Of={}));var nf;(function(e){e.back="back",e.forward="forward",e.unknown=""})(nf||(nf={}));function XQ(e){if(!e)if(Ou){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zQ(e)}const QQ=/^[^#]+#/;function JQ(e,t){return e.replace(QQ,"#")+t}function ZQ(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Kp=()=>({left:window.scrollX,top:window.scrollY});function eJ(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=ZQ(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function LA(e,t){return(history.state?history.state.position-t:-1)+e}const P0=new Map;function tJ(e,t){P0.set(e,t)}function nJ(e){const t=P0.get(e);return P0.delete(e),t}let iJ=()=>location.protocol+"//"+location.host;function yL(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),NA(l,"")}return NA(n,e)+i+r}function rJ(e,t,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const v=yL(e,location),g=n.value,p=t.value;let _=0;if(f){if(n.value=v,t.value=f,o&&o===g){o=null;return}_=p?f.position-p.position:0}else i(v);r.forEach(y=>{y(n.value,g,{delta:_,type:Of.pop,direction:_?_>0?nf.forward:nf.back:nf.unknown})})};function l(){o=n.value}function u(f){r.push(f);const v=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(v),v}function d(){const{history:f}=window;f.state&&f.replaceState(Qt({},f.state,{scroll:Kp()}),"")}function c(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:c}}function FA(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?Kp():null}}function sJ(e){const{history:t,location:n}=window,i={value:yL(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,d){const c=e.indexOf("#"),f=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+l:iJ()+e+l;try{t[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(v){console.error(v),n[d?"replace":"assign"](f)}}function o(l,u){const d=Qt({},t.state,FA(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,d,!0),i.value=l}function a(l,u){const d=Qt({},r.value,t.state,{forward:l,scroll:Kp()});s(d.current,d,!0);const c=Qt({},FA(i.value,l,null),{position:d.position+1},u);s(l,c,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function oJ(e){e=XQ(e);const t=sJ(e),n=rJ(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Qt({location:"",base:e,go:i,createHref:JQ.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function aJ(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),oJ(e)}function lJ(e){return typeof e=="string"||e&&typeof e=="object"}function bL(e){return typeof e=="string"||typeof e=="symbol"}const wL=Symbol("");var $A;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($A||($A={}));function _c(e,t){return Qt(new Error,{type:e,[wL]:!0},t)}function Qs(e,t){return e instanceof Error&&wL in e&&(t==null||!!(e.type&t))}const BA="[^/]+?",uJ={sensitive:!1,strict:!1,start:!0,end:!0},cJ=/[.+*?^${}()[\]/\\]/g;function dJ(e,t){const n=Qt({},uJ,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let c=0;c<u.length;c++){const f=u[c];let v=40+(n.sensitive?.25:0);if(f.type===0)c||(r+="/"),r+=f.value.replace(cJ,"\\$&"),v+=40;else if(f.type===1){const{value:g,repeatable:p,optional:_,regexp:y}=f;s.push({name:g,repeatable:p,optional:_});const b=y||BA;if(b!==BA){v+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+k.message)}}let E=p?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;c||(E=_&&u.length<2?`(?:/${E})`:"/"+E),_&&(E+="?"),r+=E,v+=20,_&&(v+=-8),p&&(v+=-20),b===".*"&&(v+=-50)}d.push(v)}i.push(d)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const d=u.match(o),c={};if(!d)return null;for(let f=1;f<d.length;f++){const v=d[f]||"",g=s[f-1];c[g.name]=v&&g.repeatable?v.split("/"):v}return c}function l(u){let d="",c=!1;for(const f of e){(!c||!d.endsWith("/"))&&(d+="/"),c=!1;for(const v of f)if(v.type===0)d+=v.value;else if(v.type===1){const{value:g,repeatable:p,optional:_}=v,y=g in u?u[g]:"";if(ls(y)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=ls(y)?y.join("/"):y;if(!b)if(_)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):c=!0);else throw new Error(`Missing required param "${g}"`);d+=b}}return d||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function fJ(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function SL(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=fJ(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(UA(i))return 1;if(UA(r))return-1}return r.length-i.length}function UA(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hJ={type:0,value:""},vJ=/[a-zA-Z0-9_]/;function mJ(e){if(!e)return[[]];if(e==="/")return[[hJ]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",d="";function c(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&c(),o()):l===":"?(c(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:vJ.test(l)?f():(c(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:c(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),c(),o(),r}function gJ(e,t,n){const i=dJ(mJ(e.path),n),r=Qt(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function pJ(e,t){const n=[],i=new Map;t=zA({strict:!1,end:!0,sensitive:!1},t);function r(c){return i.get(c)}function s(c,f,v){const g=!v,p=HA(c);p.aliasOf=v&&v.record;const _=zA(t,c),y=[p];if("alias"in c){const k=typeof c.alias=="string"?[c.alias]:c.alias;for(const R of k)y.push(HA(Qt({},p,{components:v?v.record.components:p.components,path:R,aliasOf:v?v.record:p})))}let b,E;for(const k of y){const{path:R}=k;if(f&&R[0]!=="/"){const O=f.record.path,D=O[O.length-1]==="/"?"":"/";k.path=f.record.path+(R&&D+R)}if(b=gJ(k,f,_),v?v.alias.push(b):(E=E||b,E!==b&&E.alias.push(b),g&&c.name&&!WA(b)&&o(c.name)),EL(b)&&l(b),p.children){const O=p.children;for(let D=0;D<O.length;D++)s(O[D],b,v&&v.children[D])}v=v||b}return E?()=>{o(E)}:tf}function o(c){if(bL(c)){const f=i.get(c);f&&(i.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&i.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){const f=bJ(c,n);n.splice(f,0,c),c.record.name&&!WA(c)&&i.set(c.record.name,c)}function u(c,f){let v,g={},p,_;if("name"in c&&c.name){if(v=i.get(c.name),!v)throw _c(1,{location:c});_=v.record.name,g=Qt(jA(f.params,v.keys.filter(E=>!E.optional).concat(v.parent?v.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),c.params&&jA(c.params,v.keys.map(E=>E.name))),p=v.stringify(g)}else if(c.path!=null)p=c.path,v=n.find(E=>E.re.test(p)),v&&(g=v.parse(p),_=v.record.name);else{if(v=f.name?i.get(f.name):n.find(E=>E.re.test(f.path)),!v)throw _c(1,{location:c,currentLocation:f});_=v.record.name,g=Qt({},f.params,c.params),p=v.stringify(g)}const y=[];let b=v;for(;b;)y.unshift(b.record),b=b.parent;return{name:_,path:p,params:g,matched:y,meta:yJ(y)}}e.forEach(c=>s(c));function d(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:r}}function jA(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function HA(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:_J(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function _J(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function WA(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yJ(e){return e.reduce((t,n)=>Qt(t,n.meta),{})}function zA(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function bJ(e,t){let n=0,i=t.length;for(;n!==i;){const s=n+i>>1;SL(e,t[s])<0?i=s:n=s+1}const r=wJ(e);return r&&(i=t.lastIndexOf(r,i-1)),i}function wJ(e){let t=e;for(;t=t.parent;)if(EL(t)&&SL(e,t)===0)return t}function EL({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function SJ(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(vL," "),o=s.indexOf("="),a=Rf(o<0?s:s.slice(0,o)),l=o<0?null:Rf(s.slice(o+1));if(a in t){let u=t[a];ls(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function GA(e){let t="";for(let n in e){const i=e[n];if(n=UQ(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(ls(i)?i.map(s=>s&&A0(s)):[i&&A0(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function EJ(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=ls(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const CJ=Symbol(""),qA=Symbol(""),Xp=Symbol(""),d1=Symbol(""),x0=Symbol("");function Ed(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Xo(e,t,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=f=>{f===!1?l(_c(4,{from:n,to:t})):f instanceof Error?l(f):lJ(f)?l(_c(2,{from:t,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},d=s(()=>e.call(i&&i.instances[r],t,n,u));let c=Promise.resolve(d);e.length<3&&(c=c.then(u)),c.catch(f=>l(f))})}function zy(e,t,n,i,r=s=>s()){const s=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(fL(l)){const d=(l.__vccOpts||l)[t];d&&s.push(Xo(d,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const c=xQ(d)?d.default:d;o.mods[a]=d,o.components[a]=c;const v=(c.__vccOpts||c)[t];return v&&Xo(v,n,i,o,a,r)()}))}}return s}function YA(e){const t=st(Xp),n=st(d1),i=I(()=>{const l=se(e.to);return t.resolve(l)}),r=I(()=>{const{matched:l}=i.value,{length:u}=l,d=l[u-1],c=n.matched;if(!d||!c.length)return-1;const f=c.findIndex(pc.bind(null,d));if(f>-1)return f;const v=KA(l[u-2]);return u>1&&KA(d)===v&&c[c.length-1].path!==v?c.findIndex(pc.bind(null,l[u-2])):f}),s=I(()=>r.value>-1&&AJ(n.params,i.value.params)),o=I(()=>r.value>-1&&r.value===n.matched.length-1&&_L(n.params,i.value.params));function a(l={}){return IJ(l)?t[se(e.replace)?"replace":"push"](se(e.to)).catch(tf):Promise.resolve()}return{route:i,href:I(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const kJ=Tt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:YA,setup(e,{slots:t}){const n=cn(YA(e)),{options:i}=st(Xp),r=I(()=>({[XA(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[XA(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:ni("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),TJ=kJ;function IJ(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function AJ(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!ls(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function KA(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const XA=(e,t,n)=>e??t??n,PJ=Tt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=st(x0),r=I(()=>e.route||i.value),s=st(qA,0),o=I(()=>{let u=se(s);const{matched:d}=r.value;let c;for(;(c=d[u])&&!c.components;)u++;return u}),a=I(()=>r.value.matched[o.value]);Ut(qA,I(()=>o.value+1)),Ut(CJ,a),Ut(x0,r);const l=z();return ge(()=>[l.value,a.value,e.name],([u,d,c],[f,v,g])=>{d&&(d.instances[c]=u,v&&v!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!pc(d,v)||!f)&&(d.enterCallbacks[c]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,c=a.value,f=c&&c.components[d];if(!f)return QA(n.default,{Component:f,route:u});const v=c.props[d],g=v?v===!0?u.params:typeof v=="function"?v(u):v:null,_=ni(f,Qt({},g,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(c.instances[d]=null)},ref:l}));return QA(n.default,{Component:_,route:u})||_}}});function QA(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const xJ=PJ;function DJ(e){const t=pJ(e.routes,e),n=e.parseQuery||SJ,i=e.stringifyQuery||GA,r=e.history,s=Ed(),o=Ed(),a=Ed(),l=Te(Wo);let u=Wo;Ou&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Hy.bind(null,B=>""+B),c=Hy.bind(null,HQ),f=Hy.bind(null,Rf);function v(B,q){let ie,ce;return bL(B)?(ie=t.getRecordMatcher(B),ce=q):ce=B,t.addRoute(ce,ie)}function g(B){const q=t.getRecordMatcher(B);q&&t.removeRoute(q)}function p(){return t.getRoutes().map(B=>B.record)}function _(B){return!!t.getRecordMatcher(B)}function y(B,q){if(q=Qt({},q||l.value),typeof B=="string"){const L=Wy(n,B,q.path),ee=t.resolve({path:L.path},q),fe=r.createHref(L.fullPath);return Qt(L,ee,{params:f(ee.params),hash:Rf(L.hash),redirectedFrom:void 0,href:fe})}let ie;if(B.path!=null)ie=Qt({},B,{path:Wy(n,B.path,q.path).path});else{const L=Qt({},B.params);for(const ee in L)L[ee]==null&&delete L[ee];ie=Qt({},B,{params:c(L)}),q.params=c(q.params)}const ce=t.resolve(ie,q),ne=B.hash||"";ce.params=d(f(ce.params));const Se=GQ(i,Qt({},B,{hash:BQ(ne),path:ce.path})),M=r.createHref(Se);return Qt({fullPath:Se,hash:ne,query:i===GA?EJ(B.query):B.query||{}},ce,{redirectedFrom:void 0,href:M})}function b(B){return typeof B=="string"?Wy(n,B,l.value.path):Qt({},B)}function E(B,q){if(u!==B)return _c(8,{from:q,to:B})}function k(B){return D(B)}function R(B){return k(Qt(b(B),{replace:!0}))}function O(B){const q=B.matched[B.matched.length-1];if(q&&q.redirect){const{redirect:ie}=q;let ce=typeof ie=="function"?ie(B):ie;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=b(ce):{path:ce},ce.params={}),Qt({query:B.query,hash:B.hash,params:ce.path!=null?{}:B.params},ce)}}function D(B,q){const ie=u=y(B),ce=l.value,ne=B.state,Se=B.force,M=B.replace===!0,L=O(ie);if(L)return D(Qt(b(L),{state:typeof L=="object"?Qt({},ne,L.state):ne,force:Se,replace:M}),q||ie);const ee=ie;ee.redirectedFrom=q;let fe;return!Se&&qQ(i,ce,ie)&&(fe=_c(16,{to:ee,from:ce}),te(ce,ce,!0,!1)),(fe?Promise.resolve(fe):C(ee,ce)).catch(ae=>Qs(ae)?Qs(ae,2)?ae:G(ae):W(ae,ee,ce)).then(ae=>{if(ae){if(Qs(ae,2))return D(Qt({replace:M},b(ae.to),{state:typeof ae.to=="object"?Qt({},ne,ae.to.state):ne,force:Se}),q||ee)}else ae=P(ee,ce,!0,M,ne);return A(ee,ce,ae),ae})}function S(B,q){const ie=E(B,q);return ie?Promise.reject(ie):Promise.resolve()}function w(B){const q=Ae.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(B):B()}function C(B,q){let ie;const[ce,ne,Se]=RJ(B,q);ie=zy(ce.reverse(),"beforeRouteLeave",B,q);for(const L of ce)L.leaveGuards.forEach(ee=>{ie.push(Xo(ee,B,q))});const M=S.bind(null,B,q);return ie.push(M),Q(ie).then(()=>{ie=[];for(const L of s.list())ie.push(Xo(L,B,q));return ie.push(M),Q(ie)}).then(()=>{ie=zy(ne,"beforeRouteUpdate",B,q);for(const L of ne)L.updateGuards.forEach(ee=>{ie.push(Xo(ee,B,q))});return ie.push(M),Q(ie)}).then(()=>{ie=[];for(const L of Se)if(L.beforeEnter)if(ls(L.beforeEnter))for(const ee of L.beforeEnter)ie.push(Xo(ee,B,q));else ie.push(Xo(L.beforeEnter,B,q));return ie.push(M),Q(ie)}).then(()=>(B.matched.forEach(L=>L.enterCallbacks={}),ie=zy(Se,"beforeRouteEnter",B,q,w),ie.push(M),Q(ie))).then(()=>{ie=[];for(const L of o.list())ie.push(Xo(L,B,q));return ie.push(M),Q(ie)}).catch(L=>Qs(L,8)?L:Promise.reject(L))}function A(B,q,ie){a.list().forEach(ce=>w(()=>ce(B,q,ie)))}function P(B,q,ie,ce,ne){const Se=E(B,q);if(Se)return Se;const M=q===Wo,L=Ou?history.state:{};ie&&(ce||M?r.replace(B.fullPath,Qt({scroll:M&&L&&L.scroll},ne)):r.push(B.fullPath,ne)),l.value=B,te(B,q,ie,M),G()}let x;function U(){x||(x=r.listen((B,q,ie)=>{if(!Ne.listening)return;const ce=y(B),ne=O(ce);if(ne){D(Qt(ne,{replace:!0}),ce).catch(tf);return}u=ce;const Se=l.value;Ou&&tJ(LA(Se.fullPath,ie.delta),Kp()),C(ce,Se).catch(M=>Qs(M,12)?M:Qs(M,2)?(D(M.to,ce).then(L=>{Qs(L,20)&&!ie.delta&&ie.type===Of.pop&&r.go(-1,!1)}).catch(tf),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),W(M,ce,Se))).then(M=>{M=M||P(ce,Se,!1),M&&(ie.delta&&!Qs(M,8)?r.go(-ie.delta,!1):ie.type===Of.pop&&Qs(M,20)&&r.go(-1,!1)),A(ce,Se,M)}).catch(tf)}))}let $=Ed(),j=Ed(),Y;function W(B,q,ie){G(B);const ce=j.list();return ce.length?ce.forEach(ne=>ne(B,q,ie)):console.error(B),Promise.reject(B)}function K(){return Y&&l.value!==Wo?Promise.resolve():new Promise((B,q)=>{$.add([B,q])})}function G(B){return Y||(Y=!B,U(),$.list().forEach(([q,ie])=>B?ie(B):q()),$.reset()),B}function te(B,q,ie,ce){const{scrollBehavior:ne}=e;if(!Ou||!ne)return Promise.resolve();const Se=!ie&&nJ(LA(B.fullPath,0))||(ce||!ie)&&history.state&&history.state.scroll||null;return ot().then(()=>ne(B,q,Se)).then(M=>M&&eJ(M)).catch(M=>W(M,B,q))}const oe=B=>r.go(B);let _e;const Ae=new Set,Ne={currentRoute:l,listening:!0,addRoute:v,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:_,getRoutes:p,resolve:y,options:e,push:k,replace:R,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:K,install(B){const q=this;B.component("RouterLink",TJ),B.component("RouterView",xJ),B.config.globalProperties.$router=q,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>se(l)}),Ou&&!_e&&l.value===Wo&&(_e=!0,k(r.location).catch(ne=>{}));const ie={};for(const ne in Wo)Object.defineProperty(ie,ne,{get:()=>l.value[ne],enumerable:!0});B.provide(Xp,q),B.provide(d1,sO(ie)),B.provide(x0,l);const ce=B.unmount;Ae.add(B),B.unmount=function(){Ae.delete(B),Ae.size<1&&(u=Wo,x&&x(),x=null,l.value=Wo,_e=!1,Y=!1),ce()}}};function Q(B){return B.reduce((q,ie)=>q.then(()=>w(ie)),Promise.resolve())}return Ne}function RJ(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(u=>pc(u,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(u=>pc(u,l))||r.push(l))}return[n,i,r]}function Vh(){return st(Xp)}function Qp(e){return st(d1)}function Ji(e,t){let n;function i(){n=uh(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}ge(e,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),Ci(()=>{n==null||n.stop()})}const Bt=typeof window<"u",f1=Bt&&"IntersectionObserver"in window,OJ=Bt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),JA=Bt&&"EyeDropper"in window;function ZA(e,t,n){VJ(e,t),t.set(e,n)}function VJ(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function NJ(e,t,n){return e.set(CL(e,t),n),n}function Ya(e,t){return e.get(CL(e,t))}function CL(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function kL(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let r=0;r<i;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function js(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>js(e[i],t[i]))}function Ll(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),kL(e,t.split("."),n))}function jn(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return Ll(e,t,n);if(Array.isArray(t))return kL(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function br(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function Ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function h1(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function eP(e){let t;return e!==null&&typeof e=="object"&&((t=Object.getPrototypeOf(e))===Object.prototype||t===null)}function v1(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const tP=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),D0=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function TL(e){return Object.keys(e)}function ul(e,t){return t.every(n=>e.hasOwnProperty(n))}function m1(e,t){const n={},i=new Set(Object.keys(e));for(const r of t)i.has(r)&&(n[r]=e[r]);return n}function R0(e,t,n){const i=Object.create(null),r=Object.create(null);for(const s in e)t.some(o=>o instanceof RegExp?o.test(s):o===s)&&!(n!=null&&n.some(o=>o===s))?i[s]=e[s]:r[s]=e[s];return[i,r]}function zt(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}function Jp(e,t){const n={};return t.forEach(i=>n[i]=e[i]),n}const IL=/^on[^a-z]/,Zp=e=>IL.test(e),MJ=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],LJ=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function FJ(e){return e.isComposing&&LJ.includes(e.key)}function Na(e){const[t,n]=R0(e,[IL]),i=zt(t,MJ),[r,s]=R0(n,["class","style","id",/^data-/]);return Object.assign(r,t),Object.assign(s,i),[r,s]}function vn(e){return e==null?[]:Array.isArray(e)?e:[e]}function $J(e,t){let n=0;const i=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout(()=>e(...s),se(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function cg(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function nP(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function iP(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function BJ(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function UJ(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Array.from({length:Math.ceil(e.length/t)},(n,i)=>e.slice(i*t,i*t+t))}function rP(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function Fi(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in e)i[r]=e[r];for(const r in t){const s=e[r],o=t[r];if(eP(s)&&eP(o)){i[r]=Fi(s,o,n);continue}if(n&&Array.isArray(s)&&Array.isArray(o)){i[r]=n(s,o);continue}i[r]=o}return i}function AL(e){return e.map(t=>t.type===Ie?AL(t.children):t).flat()}function pl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(pl.cache.has(e))return pl.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return pl.cache.set(e,t),t}pl.cache=new Map;function Mu(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>Mu(e,n)).flat(1);if(t.suspense)return Mu(e,t.ssContent);if(Array.isArray(t.children))return t.children.map(n=>Mu(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return Mu(e,t.component.subTree).flat(1)}return[]}var Pv=new WeakMap,yu=new WeakMap;class jJ{constructor(t){ZA(this,Pv,[]),ZA(this,yu,0),this.size=t}push(t){Ya(Pv,this)[Ya(yu,this)]=t,NJ(yu,this,(Ya(yu,this)+1)%this.size)}values(){return Ya(Pv,this).slice(Ya(yu,this)).concat(Ya(Pv,this).slice(0,Ya(yu,this)))}}function HJ(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function g1(e){const t=cn({}),n=I(e);return rn(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),xa(t)}function dg(e,t){return e.includes(t)}function PL(e){return e[2].toLowerCase()+e.slice(3)}const ii=()=>[Function,Array];function sP(e,t){return t="on"+Fs(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function p1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}function Vf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function xL(e,t,n){let i,r=e.indexOf(document.activeElement);const s=t==="next"?1:-1;do r+=s,i=e[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<e.length&&r>=0);return i}function _l(e,t){var i,r,s,o;const n=Vf(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(r=n[0])==null||r.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else if(typeof t=="number")(o=n[t])==null||o.focus();else{const a=xL(n,t);a?a.focus():_l(e,t==="next"?"first":"last")}}function xv(e){return e==null||typeof e=="string"&&e.trim()===""}function DL(){}function yc(e,t){if(!(Bt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function e_(e){return e.some(t=>Tl(t)?t.type===Mi?!1:t.type!==Ie||e_(t.children):!0)?e:null}function WJ(e,t){if(!Bt||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function zJ(e,t){const n=e.clientX,i=e.clientY,r=t.getBoundingClientRect(),s=r.left,o=r.top,a=r.right,l=r.bottom;return n>=s&&n<=a&&i>=o&&i<=l}function fg(){const e=Te(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>v1(e.value)}),t}function hg(e){const t=e.key.length===1,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}const RL=["top","bottom"],GJ=["start","end","left","right"];function O0(e,t){let[n,i]=e.split(" ");return i||(i=dg(RL,n)?"start":dg(GJ,n)?"top":"center"),{side:V0(n,t),align:V0(i,t)}}function V0(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Gy(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function qy(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function oP(e){return{side:e.align,align:e.side}}function aP(e){return dg(RL,e.side)?"y":"x"}class yl{constructor(t){let{x:n,y:i,width:r,height:s}=t;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function lP(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function OL(e){return Array.isArray(e)?new yl({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function _1(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new yl(t);const u=n.transformOrigin,d=t.x-a-(1-s)*parseFloat(u),c=t.y-l-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),f=s?t.width/s:e.offsetWidth+1,v=o?t.height/o:e.offsetHeight+1;return new yl({x:d,y:c,width:f,height:v})}else return new yl(t)}function cl(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const hm=new WeakMap;function qJ(e,t){Object.keys(t).forEach(n=>{if(Zp(n)){const i=PL(n),r=hm.get(e);if(t[n]==null)r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===t[n])){e.addEventListener(i,t[n]);const s=r||new Set;s.add([i,t[n]]),hm.has(e)||hm.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function YJ(e,t){Object.keys(t).forEach(n=>{if(Zp(n)){const i=PL(n),r=hm.get(e);r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))})}else e.removeAttribute(n)})}const bu=2.4,uP=.2126729,cP=.7151522,dP=.072175,KJ=.55,XJ=.58,QJ=.57,JJ=.62,Dv=.03,fP=1.45,ZJ=5e-4,eZ=1.25,tZ=1.25,hP=.078,vP=12.82051282051282,Rv=.06,mP=.001;function gP(e,t){const n=(e.r/255)**bu,i=(e.g/255)**bu,r=(e.b/255)**bu,s=(t.r/255)**bu,o=(t.g/255)**bu,a=(t.b/255)**bu;let l=n*uP+i*cP+r*dP,u=s*uP+o*cP+a*dP;if(l<=Dv&&(l+=(Dv-l)**fP),u<=Dv&&(u+=(Dv-u)**fP),Math.abs(u-l)<ZJ)return 0;let d;if(u>l){const c=(u**KJ-l**XJ)*eZ;d=c<mP?0:c<hP?c-c*vP*Rv:c-Rv}else{const c=(u**JJ-l**QJ)*tZ;d=c>-mP?0:c>-hP?c-c*vP*Rv:c+Rv}return d*100}function nZ(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const vg=.20689655172413793,iZ=e=>e>vg**3?Math.cbrt(e):e/(3*vg**2)+4/29,rZ=e=>e>vg?e**3:3*vg**2*(e-4/29);function VL(e){const t=iZ,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function NL(e){const t=rZ,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const sZ=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],oZ=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,aZ=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],lZ=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ML(e){const t=Array(3),n=oZ,i=sZ;for(let r=0;r<3;++r)t[r]=Math.round(kn(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function y1(e){let{r:t,g:n,b:i}=e;const r=[0,0,0],s=lZ,o=aZ;t=s(t/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*t+o[a][1]*n+o[a][2]*i;return r}function N0(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function uZ(e){return N0(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const pP=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,cZ={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>_P({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>_P({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>Co({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>Co({h:e,s:t,v:n,a:i})};function Lr(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&pP.test(e)){const{groups:t}=e.match(pP),{fn:n,values:i}=t,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return cZ[n](...r)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),UL(t)}else if(typeof e=="object"){if(ul(e,["r","g","b"]))return e;if(ul(e,["h","s","l"]))return Co(b1(e));if(ul(e,["h","s","v"]))return Co(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Co(e){const{h:t,s:n,v:i,a:r}=e,s=a=>{const l=(a+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function _P(e){return Co(b1(e))}function t_(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,r=Math.max(t,n,i),s=Math.min(t,n,i);let o=0;r!==s&&(r===t?o=60*(0+(n-i)/(r-s)):r===n?o=60*(2+(i-t)/(r-s)):r===i&&(o=60*(4+(t-n)/(r-s)))),o<0&&(o=o+360);const a=r===0?0:(r-s)/r,l=[o,a,r];return{h:l[0],s:l[1],v:l[2],a:e.a}}function LL(e){const{h:t,s:n,v:i,a:r}=e,s=i-i*n/2,o=s===1||s===0?0:(i-s)/Math.min(s,1-s);return{h:t,s:o,l:s,a:r}}function b1(e){const{h:t,s:n,l:i,a:r}=e,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:t,s:o,v:s,a:r}}function FL(e){let{r:t,g:n,b:i,a:r}=e;return r===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${r})`}function $L(e){return FL(Co(e))}function Ov(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function BL(e){let{r:t,g:n,b:i,a:r}=e;return`#${[Ov(t),Ov(n),Ov(i),r!==void 0?Ov(Math.round(r*255)):""].join("")}`}function UL(e){e=dZ(e);let[t,n,i,r]=BJ(e,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:t,g:n,b:i,a:r}}function jL(e){const t=UL(e);return t_(t)}function HL(e){return BL(Co(e))}function dZ(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=nP(nP(e,6),8,"F")),e}function fZ(e,t){const n=VL(y1(e));return n[0]=n[0]+t*10,ML(NL(n))}function hZ(e,t){const n=VL(y1(e));return n[0]=n[0]-t*10,ML(NL(n))}function M0(e){const t=Lr(e);return y1(t)[1]}function vZ(e,t){const n=M0(e),i=M0(t),r=Math.max(n,i),s=Math.min(n,i);return(r+.05)/(s+.05)}function WL(e){const t=Math.abs(gP(Lr(0),Lr(e)));return Math.abs(gP(Lr(16777215),Lr(e)))>Math.min(t,50)?"#fff":"#000"}function Z(e,t){return n=>Object.keys(e).reduce((i,r)=>{const o=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,t&&!i[r].source&&(i[r].source=t),i},{})}const $e=Z({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Rn(e,t){const n=Gl();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function Hs(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Rn(e).type;return pl((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let zL=0,vm=new WeakMap;function fi(){const e=Rn("getUid");if(vm.has(e))return vm.get(e);{const t=zL++;return vm.set(e,t),t}}fi.reset=()=>{zL=0,vm=new WeakMap};function mZ(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rn("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const bc=Symbol.for("vuetify:defaults");function gZ(e){return z(e)}function w1(){const e=st(bc);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function _n(e,t){const n=w1(),i=z(e),r=I(()=>{if(se(t==null?void 0:t.disabled))return n.value;const o=se(t==null?void 0:t.scoped),a=se(t==null?void 0:t.reset),l=se(t==null?void 0:t.root);if(i.value==null&&!(o||a||l))return n.value;let u=Fi(i.value,{prev:n.value});if(o)return u;if(a||l){const d=Number(a||1/0);for(let c=0;c<=d&&!(!u||!("prev"in u));c++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=Fi(Fi(u,{prev:u}),u[l])),u}return u.prev?Fi(u.prev,u):u});return Ut(bc,r),r}function pZ(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[pl(t)])<"u"}function _Z(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:w1();const i=Rn("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const r=I(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),s=new Proxy(e,{get(l,u){var c,f,v,g,p,_,y;const d=Reflect.get(l,u);return u==="class"||u==="style"?[(c=r.value)==null?void 0:c[u],d].filter(b=>b!=null):typeof u=="string"&&!pZ(i.vnode,u)?((f=r.value)==null?void 0:f[u])!==void 0?(v=r.value)==null?void 0:v[u]:((p=(g=n.value)==null?void 0:g.global)==null?void 0:p[u])!==void 0?(y=(_=n.value)==null?void 0:_.global)==null?void 0:y[u]:d:d}}),o=Te();rn(()=>{if(r.value){const l=Object.entries(r.value).filter(u=>{let[d]=u;return d.startsWith(d[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=mZ(bc,i);Ut(bc,I(()=>o.value?Fi((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function Ar(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=Z(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(i){return m1(i,t)},e.props._as=String,e.setup=function(i,r){const s=w1();if(!s.value)return e._setup(i,r);const{props:o,provideSubDefaults:a}=_Z(i,i._as??e.name,s),l=e._setup(o,r);return a(),l}}return e}function de(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?Ar:Tt)(t)}function yZ(e,t){return t.props=e,t}function Ws(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return de()({name:n??Fs(lr(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...$e()},setup(i,r){let{slots:s}=r;return()=>{var o;return ni(i.tag,{class:[e,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}function GL(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Nf="cubic-bezier(0.4, 0, 0.2, 1)",bZ="cubic-bezier(0.0, 0, 0.2, 1)",wZ="cubic-bezier(0.4, 0, 1, 1)";function yP(e,t,n){return Object.keys(e).filter(i=>Zp(i)&&i.endsWith(t)).reduce((i,r)=>(i[r.slice(0,-t.length)]=s=>e[r](s,n(s)),i),{})}function S1(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?SZ(e):E1(e))return e;e=e.parentElement}return document.scrollingElement}function Mf(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(E1(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function E1(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function SZ(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function EZ(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ve(e){const t=Rn("useRender");t.render=e}function je(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:c=>c,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:c=>c;const s=Rn("useProxiedModel"),o=z(e[t]!==void 0?e[t]:n),a=pl(t),u=I(a!==t?()=>{var c,f,v,g;return e[t],!!(((c=s.vnode.props)!=null&&c.hasOwnProperty(t)||(f=s.vnode.props)!=null&&f.hasOwnProperty(a))&&((v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${t}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var c,f;return e[t],!!((c=s.vnode.props)!=null&&c.hasOwnProperty(t)&&((f=s.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${t}`)))});Ji(()=>!u.value,()=>{ge(()=>e[t],c=>{o.value=c})});const d=I({get(){const c=e[t];return i(u.value?c:o.value)},set(c){const f=r(c),v=Ge(u.value?e[t]:o.value);v===f||i(v)===c||(o.value=f,s==null||s.emit(`update:${t}`,f))}});return Object.defineProperty(d,"externalValue",{get:()=>u.value?e[t]:o.value}),d}const qL={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},bP="$vuetify.",wP=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),YL=(e,t,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(bP))return wP(i,s);const a=i.replace(bP,""),l=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let d=Ll(l,a,null);return d||(`${i}${e.value}`,d=Ll(u,a,null)),d||(d=i),typeof d!="string"&&(d=i),wP(d,s)};function KL(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function Yy(e,t,n){const i=je(e,t,e[t]??n.value);return i.value=e[t]??n.value,ge(n,r=>{e[t]==null&&(i.value=n.value)}),i}function XL(e){return t=>{const n=Yy(t,"locale",e.current),i=Yy(t,"fallback",e.fallback),r=Yy(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:YL(n,i,r),n:KL(n,i),provide:XL({current:n,fallback:i,messages:r})}}}function CZ(e){const t=Te((e==null?void 0:e.locale)??"en"),n=Te((e==null?void 0:e.fallback)??"en"),i=z({en:qL,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:YL(t,n,i),n:KL(t,n),provide:XL({current:t,fallback:n,messages:i})}}const wc=Symbol.for("vuetify:locale");function kZ(e){return e.name!=null}function TZ(e){const t=e!=null&&e.adapter&&kZ(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:CZ(e),n=PZ(t,e);return{...t,...n}}function sn(){const e=st(wc);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function IZ(e){const t=st(wc);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=xZ(n,t.rtl,e),r={...n,...i};return Ut(wc,r),r}function AZ(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function PZ(e,t){const n=z((t==null?void 0:t.rtl)??AZ()),i=I(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:I(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function xZ(e,t,n){const i=I(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:I(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function Jn(){const e=st(wc);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const n_={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function DZ(e,t,n){const i=[];let r=[];const s=QL(e),o=JL(e),a=n??n_[t.slice(-2).toUpperCase()]??0,l=(s.getDay()-a+7)%7,u=(o.getDay()-a+7)%7;for(let d=0;d<l;d++){const c=new Date(s);c.setDate(c.getDate()-(l-d)),r.push(c)}for(let d=1;d<=o.getDate();d++){const c=new Date(e.getFullYear(),e.getMonth(),d);r.push(c),r.length===7&&(i.push(r),r=[])}for(let d=1;d<7-u;d++){const c=new Date(o);c.setDate(c.getDate()+d),r.push(c)}return r.length>0&&i.push(r),i}function RZ(e,t,n){const i=n??n_[t.slice(-2).toUpperCase()]??0,r=new Date(e);for(;r.getDay()!==i;)r.setDate(r.getDate()-1);return r}function OZ(e,t){const n=new Date(e),i=((n_[t.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function QL(e){return new Date(e.getFullYear(),e.getMonth(),1)}function JL(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function VZ(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const NZ=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function ZL(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(NZ.test(e))return VZ(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const SP=new Date(2e3,0,2);function MZ(e,t){const n=t??n_[e.slice(-2).toUpperCase()]??0;return br(7).map(i=>{const r=new Date(SP);return r.setDate(SP.getDate()+n+i),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(r)})}function LZ(e,t,n,i){const r=ZL(e)??new Date,s=i==null?void 0:i[t];if(typeof s=="function")return s(r,t,n);let o={};switch(t){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function FZ(e,t){const n=e.toJsDate(t),i=n.getFullYear(),r=iP(String(n.getMonth()+1),2,"0"),s=iP(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function $Z(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function BZ(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function UZ(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function jZ(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function HZ(e,t){const n=new Date(e);return n.setDate(n.getDate()+t*7),n}function WZ(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function zZ(e){return e.getFullYear()}function GZ(e){return e.getMonth()}function qZ(e){return e.getDate()}function YZ(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function KZ(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function XZ(e){return e.getHours()}function QZ(e){return e.getMinutes()}function JZ(e){return new Date(e.getFullYear(),0,1)}function ZZ(e){return new Date(e.getFullYear(),11,31)}function eee(e,t){return mg(e,t[0])&&iee(e,t[1])}function tee(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function mg(e,t){return e.getTime()>t.getTime()}function nee(e,t){return mg(L0(e),L0(t))}function iee(e,t){return e.getTime()<t.getTime()}function EP(e,t){return e.getTime()===t.getTime()}function ree(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function see(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function oee(e,t){return e.getFullYear()===t.getFullYear()}function aee(e,t,n){const i=new Date(e),r=new Date(t);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function lee(e,t){const n=new Date(e);return n.setHours(t),n}function uee(e,t){const n=new Date(e);return n.setMinutes(t),n}function cee(e,t){const n=new Date(e);return n.setMonth(t),n}function dee(e,t){const n=new Date(e);return n.setDate(t),n}function fee(e,t){const n=new Date(e);return n.setFullYear(t),n}function L0(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function hee(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class vee{constructor(t){this.locale=t.locale,this.formats=t.formats}date(t){return ZL(t)}toJsDate(t){return t}toISO(t){return FZ(this,t)}parseISO(t){return $Z(t)}addMinutes(t,n){return BZ(t,n)}addHours(t,n){return UZ(t,n)}addDays(t,n){return jZ(t,n)}addWeeks(t,n){return HZ(t,n)}addMonths(t,n){return WZ(t,n)}getWeekArray(t,n){return DZ(t,this.locale,n?Number(n):void 0)}startOfWeek(t,n){return RZ(t,this.locale,n?Number(n):void 0)}endOfWeek(t){return OZ(t,this.locale)}startOfMonth(t){return QL(t)}endOfMonth(t){return JL(t)}format(t,n){return LZ(t,n,this.locale,this.formats)}isEqual(t,n){return EP(t,n)}isValid(t){return tee(t)}isWithinRange(t,n){return eee(t,n)}isAfter(t,n){return mg(t,n)}isAfterDay(t,n){return nee(t,n)}isBefore(t,n){return!mg(t,n)&&!EP(t,n)}isSameDay(t,n){return ree(t,n)}isSameMonth(t,n){return see(t,n)}isSameYear(t,n){return oee(t,n)}setMinutes(t,n){return uee(t,n)}setHours(t,n){return lee(t,n)}setMonth(t,n){return cee(t,n)}setDate(t,n){return dee(t,n)}setYear(t,n){return fee(t,n)}getDiff(t,n,i){return aee(t,n,i)}getWeekdays(t){return MZ(this.locale,t?Number(t):void 0)}getYear(t){return zZ(t)}getMonth(t){return GZ(t)}getDate(t){return qZ(t)}getNextMonth(t){return YZ(t)}getPreviousMonth(t){return KZ(t)}getHours(t){return XZ(t)}getMinutes(t){return QZ(t)}startOfDay(t){return L0(t)}endOfDay(t){return hee(t)}startOfYear(t){return JZ(t)}endOfYear(t){return ZZ(t)}}const eF=Symbol.for("vuetify:date-options"),CP=Symbol.for("vuetify:date-adapter");function mee(e,t){const n=Fi({adapter:vee,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:tF(n,t)}}function tF(e,t){const n=cn(typeof e.adapter=="function"?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return ge(t.current,i=>{n.locale=e.locale[i]??i??n.locale}),n}function jr(){const e=st(eF);if(!e)throw new Error("[Vuetify] Could not find injected date options");const t=sn();return tF(e,t)}function gee(e,t){const n=e.toJsDate(t);let i=n.getFullYear(),r=new Date(i,0,1);if(n<r)i=i-1,r=new Date(i,0,1);else{const a=new Date(i+1,0,1);n>=a&&(i=i+1,r=a)}const s=Math.abs(n.getTime()-r.getTime()),o=Math.ceil(s/(1e3*60*60*24));return Math.floor(o/7)+1}const i_=["sm","md","lg","xl","xxl"],F0=Symbol.for("vuetify:display"),kP={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},pee=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kP;return Fi(kP,e)};function TP(e){return Bt&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function IP(e){return Bt&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function AP(e){const t=Bt&&!e?window.navigator.userAgent:"ssr";function n(g){return!!t.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),d=n(/opera/i),c=n(/win/i),f=n(/mac/i),v=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:u,opera:d,win:c,mac:f,linux:v,touch:OJ,ssr:t==="ssr"}}function _ee(e,t){const{thresholds:n,mobileBreakpoint:i}=pee(e),r=Te(IP(t)),s=Te(AP(t)),o=cn({}),a=Te(TP(t));function l(){r.value=IP(),a.value=TP()}function u(){l(),s.value=AP()}return rn(()=>{const d=a.value<n.sm,c=a.value<n.md&&!d,f=a.value<n.lg&&!(c||d),v=a.value<n.xl&&!(f||c||d),g=a.value<n.xxl&&!(v||f||c||d),p=a.value>=n.xxl,_=d?"xs":c?"sm":f?"md":v?"lg":g?"xl":"xxl",y=typeof i=="number"?i:n[i],b=a.value<y;o.xs=d,o.sm=c,o.md=f,o.lg=v,o.xl=g,o.xxl=p,o.smAndUp=!d,o.mdAndUp=!(d||c),o.lgAndUp=!(d||c||f),o.xlAndUp=!(d||c||f||v),o.smAndDown=!(f||v||g||p),o.mdAndDown=!(v||g||p),o.lgAndDown=!(g||p),o.xlAndDown=!p,o.name=_,o.height=r.value,o.width=a.value,o.mobile=b,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),Bt&&window.addEventListener("resize",l,{passive:!0}),{...xa(o),update:u,ssr:!!t}}const Jl=Z({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function Pr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hs();const n=st(F0);if(!n)throw new Error("Could not find Vuetify display injection");const i=I(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),r=I(()=>t?{[`${t}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const nF=Symbol.for("vuetify:goto");function iF(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function yee(e){return C1(e)??(document.scrollingElement||document.body)}function C1(e){return typeof e=="string"?document.querySelector(e):v1(e)}function Ky(e,t,n){if(typeof e=="number")return t&&n?-e:e;let i=C1(e),r=0;for(;i;)r+=t?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function bee(e,t){return{rtl:t.isRtl,options:Fi(iF(),e)}}async function PP(e,t,n,i){const r=n?"scrollLeft":"scrollTop",s=Fi((i==null?void 0:i.options)??iF(),t),o=i==null?void 0:i.rtl.value,a=(typeof e=="number"?e:C1(e))??0,l=s.container==="parent"&&a instanceof HTMLElement?a.parentElement:yee(s.container),u=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!u)throw new TypeError(`Easing function "${s.easing}" not found.`);let d;if(typeof a=="number")d=Ky(a,n,o);else if(d=Ky(a,n,o)-Ky(l,n,o),s.layout){const g=window.getComputedStyle(a).getPropertyValue("--v-layout-top");g&&(d-=parseInt(g,10))}d+=s.offset,d=See(l,d,!!o,!!n);const c=l[r]??0;if(d===c)return Promise.resolve(d);const f=performance.now();return new Promise(v=>requestAnimationFrame(function g(p){const y=(p-f)/s.duration,b=Math.floor(c+(d-c)*u(kn(y,0,1)));if(l[r]=b,y>=1&&Math.abs(b-l[r])<10)return v(d);if(y>2)return v(l[r]);requestAnimationFrame(g)}))}function wee(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=st(nF),{isRtl:n}=Jn();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const i={...t,rtl:I(()=>t.rtl.value||n.value)};async function r(s,o){return PP(s,Fi(e,o),!1,i)}return r.horizontal=async(s,o)=>PP(s,Fi(e,o),!0,i),r}function See(e,t,n,i){const{scrollWidth:r,scrollHeight:s}=e,[o,a]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let l,u;return i?n?(l=-(r-o),u=0):(l=0,u=r-o):(l=0,u=s+-a),Math.max(Math.min(t,u),l)}const Eee={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},Cee={component:e=>ni(T1,{...e,class:"mdi"})},Je=[String,Function,Object,Array],$0=Symbol.for("vuetify:icons"),r_=Z({icon:{type:Je},tag:{type:String,required:!0}},"icon"),B0=de()({name:"VComponentIcon",props:r_(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return h(e.tag,null,{default:()=>{var r;return[e.icon?h(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),k1=Ar({name:"VSvgIcon",inheritAttrs:!1,props:r_(),setup(e,t){let{attrs:n}=t;return()=>h(e.tag,J(n,{style:null}),{default:()=>[h("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?h("path",{d:i[0],"fill-opacity":i[1]},null):h("path",{d:i},null)):h("path",{d:e.icon},null)])]})}}),kee=Ar({name:"VLigatureIcon",props:r_(),setup(e){return()=>h(e.tag,null,{default:()=>[e.icon]})}}),T1=Ar({name:"VClassIcon",props:r_(),setup(e){return()=>h(e.tag,{class:e.icon},null)}});function Tee(){return{svg:{component:k1},class:{component:T1}}}function Iee(e){const t=Tee(),n=(e==null?void 0:e.defaultSet)??"mdi";return n==="mdi"&&!t.mdi&&(t.mdi=Cee),Fi({defaultSet:n,sets:t,aliases:{...Eee,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const Aee=e=>{const t=st($0);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:I(()=>{var l;const i=se(e);if(!i)return{component:B0};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=t.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:k1,icon:r};if(typeof r!="string")return{component:B0,icon:r};const s=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),o=s?r.slice(s.length+1):r;return{component:t.sets[s??t.defaultSet].component,icon:o}})}},Lf=Symbol.for("vuetify:theme"),Ct=Z({theme:String},"theme");function xP(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function Pee(){var i,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xP();const t=xP();if(!e)return{...t,isDisabled:!0};const n={};for(const[s,o]of Object.entries(e.themes??{})){const a=o.dark||s==="dark"?(i=t.themes)==null?void 0:i.dark:(r=t.themes)==null?void 0:r.light;n[s]=Fi(a,o)}return Fi(t,{...e,themes:n})}function xee(e){const t=Pee(e),n=z(t.defaultTheme),i=z(t.themes),r=I(()=>{const d={};for(const[c,f]of Object.entries(i.value)){const v=d[c]={...f,colors:{...f.colors}};if(t.variations)for(const g of t.variations.colors){const p=v.colors[g];if(p)for(const _ of["lighten","darken"]){const y=_==="lighten"?fZ:hZ;for(const b of br(t.variations[_],1))v.colors[`${g}-${_}-${b}`]=BL(y(Lr(p),b))}}for(const g of Object.keys(v.colors)){if(/^on-[a-z]/.test(g)||v.colors[`on-${g}`])continue;const p=`on-${g}`,_=Lr(v.colors[g]);v.colors[p]=WL(_)}}return d}),s=I(()=>r.value[n.value]),o=I(()=>{var g;const d=[];(g=s.value)!=null&&g.dark&&Ka(d,":root",["color-scheme: dark"]),Ka(d,":root",DP(s.value));for(const[p,_]of Object.entries(r.value))Ka(d,`.v-theme--${p}`,[`color-scheme: ${_.dark?"dark":"normal"}`,...DP(_)]);const c=[],f=[],v=new Set(Object.values(r.value).flatMap(p=>Object.keys(p.colors)));for(const p of v)/^on-[a-z]/.test(p)?Ka(f,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(Ka(c,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),Ka(f,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),Ka(f,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return d.push(...c,...f),d.map((p,_)=>_===0?p:`    ${p}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(d){if(t.isDisabled)return;const c=d._context.provides.usehead;if(c)if(c.push){const f=c.push(a);Bt&&ge(o,()=>{f.patch(a)})}else Bt?(c.addHeadObjs(I(a)),rn(()=>c.updateDOM())):c.addHeadObjs(a());else{let v=function(){if(typeof document<"u"&&!f){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),f=g,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=Bt?document.getElementById("vuetify-theme-stylesheet"):null;Bt?ge(o,v,{immediate:!0}):v()}}const u=I(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:u,styles:o,global:{name:n,current:s}}}function Ft(e){Rn("provideTheme");const t=st(Lf,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=I(()=>e.theme??t.name.value),i=I(()=>t.themes.value[n.value]),r=I(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,current:i,themeClasses:r};return Ut(Lf,s),s}function I1(){Rn("useTheme");const e=st(Lf,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function Ka(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}
  * vee-validate v4.14.3
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function Yr(e){return typeof e=="function"}function DU(e){return e==null}const Ac=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function VC(e){return Number(e)>=0}function vve(e){return typeof e=="object"&&e!==null}function mve(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function xD(e){if(!vve(e)||mve(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function rh(e,t){return Object.keys(t).forEach(n=>{if(xD(t[n])&&xD(e[n])){e[n]||(e[n]={}),rh(e[n],t[n]);return}e[n]=t[n]}),e}function Bv(e){const t=e.split(".");if(!t.length)return"";let n=String(t[0]);for(let i=1;i<t.length;i++){if(VC(t[i])){n+=`[${t[i]}]`;continue}n+=`.${t[i]}`}return n}const gve={};function pve(e){return gve[e]}function DD(e,t,n){typeof n.value=="object"&&(n.value=hn(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||t==="__proto__"?Object.defineProperty(e,t,n):e[t]=n.value}function hn(e){if(typeof e!="object")return e;var t=0,n,i,r,s=Object.prototype.toString.call(e);if(s==="[object Object]"?r=Object.create(e.__proto__||null):s==="[object Array]"?r=Array(e.length):s==="[object Set]"?(r=new Set,e.forEach(function(o){r.add(hn(o))})):s==="[object Map]"?(r=new Map,e.forEach(function(o,a){r.set(hn(a),hn(o))})):s==="[object Date]"?r=new Date(+e):s==="[object RegExp]"?r=new RegExp(e.source,e.flags):s==="[object DataView]"?r=new e.constructor(hn(e.buffer)):s==="[object ArrayBuffer]"?r=e.slice(0):s.slice(-6)==="Array]"&&(r=new e.constructor(e)),r){for(i=Object.getOwnPropertySymbols(e);t<i.length;t++)DD(r,i[t],Object.getOwnPropertyDescriptor(e,i[t]));for(t=0,i=Object.getOwnPropertyNames(e);t<i.length;t++)Object.hasOwnProperty.call(r,n=i[t])&&r[n]===e[n]||DD(r,n,Object.getOwnPropertyDescriptor(e,n))}return r||e}const _ve=Symbol("vee-validate-form"),yve=Symbol("vee-validate-form-context"),bve=typeof window<"u";function wve(e){return Yr(e)&&!!e.__locatorRef}function sa(e){return!!e&&Yr(e.parse)&&e.__type==="VVTypedSchema"}function RU(e){return!!e&&Yr(e.validate)}function Sve(e){return e==="checkbox"||e==="radio"}function Eve(e){return Ac(e)||Array.isArray(e)}function Cve(e){return Array.isArray(e)?e.length===0:Ac(e)&&Object.keys(e).length===0}function B_(e){return/^\[.+\]$/i.test(e)}function kve(e){return OU(e)&&e.multiple}function OU(e){return e.tagName==="SELECT"}function Tve(e){return VU(e)&&e.target&&"submit"in e.target}function VU(e){return e?!!(typeof Event<"u"&&Yr(Event)&&e instanceof Event||e&&e.srcElement):!1}function of(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,r;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!of(e[i],t[i]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(!of(i[1],t.get(i[0])))return!1;return!0}if(RD(e)&&RD(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();for(r=Object.keys(e),n=r.length,i=n;i--!==0;){var s=r[i];if(!of(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function RD(e){return bve?e instanceof File:!1}function NC(e){return B_(e)?e.replace(/\[|\]/gi,""):e}function so(e,t,n){return e?B_(t)?e[NC(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r,s)=>Eve(r)&&s in r?r[s]:n,e):n}function eo(e,t,n){if(B_(t)){e[NC(t)]=n;return}const i=t.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let s=0;s<i.length;s++){if(s===i.length-1){r[i[s]]=n;return}(!(i[s]in r)||DU(r[i[s]]))&&(r[i[s]]=VC(i[s+1])?[]:{}),r=r[i[s]]}}function ub(e,t){if(Array.isArray(e)&&VC(t)){e.splice(Number(t),1);return}Ac(e)&&delete e[t]}function OD(e,t){if(B_(t)){delete e[NC(t)];return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let s=0;s<n.length;s++){if(s===n.length-1){ub(i,n[s]);break}if(!(n[s]in i)||DU(i[n[s]]))break;i=i[n[s]]}const r=n.map((s,o)=>so(e,n.slice(0,o).join(".")));for(let s=r.length-1;s>=0;s--)if(Cve(r[s])){if(s===0){ub(e,n[0]);continue}ub(r[s-1],n[s-1])}}function Vr(e){return Object.keys(e)}function VD(e,t=0){let n=null,i=[];return function(...r){return n&&clearTimeout(n),n=setTimeout(()=>{const s=e(...r);i.forEach(o=>o(s)),i=[]},t),new Promise(s=>i.push(s))}}function Ive(e,t){let n;return async function(...r){const s=e(...r);n=s;const o=await s;return s!==n?o:(n=void 0,t(o,r))}}function ND(e){return Array.isArray(e)?e:e?[e]:[]}function Uv(e,t){const n={};for(const i in e)t.includes(i)||(n[i]=e[i]);return n}function Ave(e){let t=null,n=[];return function(...i){const r=ot(()=>{if(t!==r)return;const s=e(...i);n.forEach(o=>o(s)),n=[],t=null});return t=r,new Promise(s=>n.push(s))}}function cb(e){if(NU(e))return e._value}function NU(e){return"_value"in e}function Pve(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function MD(e){if(!VU(e))return e;const t=e.target;if(Sve(t.type)&&NU(t))return cb(t);if(t.type==="file"&&t.files){const n=Array.from(t.files);return t.multiple?n:n[0]}if(kve(t))return Array.from(t.options).filter(n=>n.selected&&!n.disabled).map(cb);if(OU(t)){const n=Array.from(t.options).find(i=>i.selected);return n?cb(n):t.value}return Pve(t)}function xve(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?Ac(e)&&e._$$isNormalized?e:Ac(e)?Object.keys(e).reduce((n,i)=>{const r=Dve(e[i]);return e[i]!==!1&&(n[i]=LD(r)),n},t):typeof e!="string"?t:e.split("|").reduce((n,i)=>{const r=Rve(i);return r.name&&(n[r.name]=LD(r.params)),n},t):t}function Dve(e){return e===!0?[]:Array.isArray(e)||Ac(e)?e:[e]}function LD(e){const t=n=>typeof n=="string"&&n[0]==="@"?Ove(n.slice(1)):n;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((n,i)=>(n[i]=t(e[i]),n),{})}const Rve=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function Ove(e){const t=n=>{var i;return(i=so(n,e))!==null&&i!==void 0?i:n[e]};return t.__locatorRef=e,t}const Vve={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Nve=Object.assign({},Vve);const Fd=()=>Nve;async function Mve(e,t,n={}){const i=n==null?void 0:n.bails,r={name:(n==null?void 0:n.name)||"{field}",rules:t,label:n==null?void 0:n.label,bails:i??!0,formData:(n==null?void 0:n.values)||{}},s=await Lve(r,e);return Object.assign(Object.assign({},s),{valid:!s.errors.length})}async function Lve(e,t){const n=e.rules;if(sa(n)||RU(n))return $ve(t,Object.assign(Object.assign({},e),{rules:n}));if(Yr(n)||Array.isArray(n)){const a={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},l=Array.isArray(n)?n:[n],u=l.length,d=[];for(let c=0;c<u;c++){const f=l[c],v=await f(t,a);if(!(typeof v!="string"&&!Array.isArray(v)&&v)){if(Array.isArray(v))d.push(...v);else{const p=typeof v=="string"?v:LU(a);d.push(p)}if(e.bails)return{errors:d}}}return{errors:d}}const i=Object.assign(Object.assign({},e),{rules:xve(n)}),r=[],s=Object.keys(i.rules),o=s.length;for(let a=0;a<o;a++){const l=s[a],u=await Bve(i,t,{name:l,params:i.rules[l]});if(u.error&&(r.push(u.error),e.bails))return{errors:r}}return{errors:r}}function Fve(e){return!!e&&e.name==="ValidationError"}function MU(e){return{__type:"VVTypedSchema",async parse(n,i){var r;try{return{output:await e.validate(n,{abortEarly:!1,context:(i==null?void 0:i.formData)||{}}),errors:[]}}catch(s){if(!Fve(s))throw s;if(!(!((r=s.inner)===null||r===void 0)&&r.length)&&s.errors.length)return{errors:[{path:s.path,errors:s.errors}]};const o=s.inner.reduce((a,l)=>{const u=l.path||"";return a[u]||(a[u]={errors:[],path:u}),a[u].errors.push(...l.errors),a},{});return{errors:Object.values(o)}}}}}async function $ve(e,t){const i=await(sa(t.rules)?t.rules:MU(t.rules)).parse(e,{formData:t.formData}),r=[];for(const s of i.errors)s.errors.length&&r.push(...s.errors);return{value:i.value,errors:r}}async function Bve(e,t,n){const i=pve(n.name);if(!i)throw new Error(`No such validator '${n.name}' exists.`);const r=Uve(n.params,e.formData),s={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:r})},o=await i(t,r,s);return typeof o=="string"?{error:o}:{error:o?void 0:LU(s)}}function LU(e){const t=Fd().generateMessage;return t?t(e):"Field is invalid"}function Uve(e,t){const n=i=>wve(i)?i(t):i;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((i,r)=>(i[r]=n(e[r]),i),{})}async function jve(e,t){const i=await(sa(e)?e:MU(e)).parse(hn(t),{formData:hn(t)}),r={},s={};for(const o of i.errors){const a=o.errors,l=(o.path||"").replace(/\["(\d+)"\]/g,(u,d)=>`[${d}]`);r[l]={valid:!a.length,errors:a},a.length&&(s[l]=a[0])}return{valid:!i.errors.length,results:r,errors:s,values:i.value,source:"schema"}}async function Hve(e,t,n){const r=Vr(e).map(async u=>{var d,c,f;const v=(d=n==null?void 0:n.names)===null||d===void 0?void 0:d[u],g=await Mve(so(t,u),e[u],{name:(v==null?void 0:v.name)||u,label:v==null?void 0:v.label,values:t,bails:(f=(c=n==null?void 0:n.bailsMap)===null||c===void 0?void 0:c[u])!==null&&f!==void 0?f:!0});return Object.assign(Object.assign({},g),{path:u})});let s=!0;const o=await Promise.all(r),a={},l={};for(const u of o)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(s=!1,l[u.path]=u.errors[0]);return{valid:s,results:a,errors:l,source:"schema"}}let Wve=0;const jv=["bails","fieldsCount","id","multiple","type","validate"];function FU(e){const t=(e==null?void 0:e.initialValues)||{},n=Object.assign({},fn(t)),i=se(e==null?void 0:e.validationSchema);return i&&sa(i)&&Yr(i.cast)?hn(i.cast(n)||{}):hn(n)}function ka(e){var t;const n=Wve++;let i=0;const r=z(!1),s=z(!1),o=z(0),a=[],l=cn(FU(e)),u=z([]),d=z({}),c=z({}),f=Ave(()=>{c.value=u.value.reduce((le,re)=>(le[Bv(fn(re.path))]=re,le),{})});function v(le,re){const we=j(le);if(!we){typeof le=="string"&&(d.value[Bv(le)]=ND(re));return}if(typeof le=="string"){const Fe=Bv(le);d.value[Fe]&&delete d.value[Fe]}we.errors=ND(re),we.valid=!we.errors.length}function g(le){Vr(le).forEach(re=>{v(re,le[re])})}e!=null&&e.initialErrors&&g(e.initialErrors);const p=I(()=>{const le=u.value.reduce((re,we)=>(we.errors.length&&(re[we.path]=we.errors),re),{});return Object.assign(Object.assign({},d.value),le)}),_=I(()=>Vr(p.value).reduce((le,re)=>{const we=p.value[re];return we!=null&&we.length&&(le[re]=we[0]),le},{})),y=I(()=>u.value.reduce((le,re)=>(le[re.path]={name:re.path||"",label:re.label||""},le),{})),b=I(()=>u.value.reduce((le,re)=>{var we;return le[re.path]=(we=re.bails)!==null&&we!==void 0?we:!0,le},{})),E=Object.assign({},(e==null?void 0:e.initialErrors)||{}),k=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:R,originalInitialValues:O,setInitialValues:D}=Gve(u,l,e),S=zve(u,l,O,_),w=I(()=>u.value.reduce((le,re)=>{const we=so(l,re.path);return eo(le,re.path,we),le},{})),C=e==null?void 0:e.validationSchema;function A(le,re){var we,Fe;const et=I(()=>so(R.value,fn(le))),ft=c.value[fn(le)],qe=(re==null?void 0:re.type)==="checkbox"||(re==null?void 0:re.type)==="radio";if(ft&&qe){ft.multiple=!0;const Ii=i++;return Array.isArray(ft.id)?ft.id.push(Ii):ft.id=[ft.id,Ii],ft.fieldsCount++,ft.__flags.pendingUnmount[Ii]=!1,ft}const kt=I(()=>so(l,fn(le))),on=fn(le),ti=W.findIndex(Ii=>Ii===on);ti!==-1&&W.splice(ti,1);const Zt=I(()=>{var Ii,dr,du,Lo;const fu=fn(C);if(sa(fu))return(dr=(Ii=fu.describe)===null||Ii===void 0?void 0:Ii.call(fu,fn(le)).required)!==null&&dr!==void 0?dr:!1;const qs=fn(re==null?void 0:re.schema);return sa(qs)&&(Lo=(du=qs.describe)===null||du===void 0?void 0:du.call(qs).required)!==null&&Lo!==void 0?Lo:!1}),Fn=i++,si=cn({id:Fn,path:le,touched:!1,pending:!1,valid:!0,validated:!!(!((we=E[on])===null||we===void 0)&&we.length),required:Zt,initialValue:et,errors:Te([]),bails:(Fe=re==null?void 0:re.bails)!==null&&Fe!==void 0?Fe:!1,label:re==null?void 0:re.label,type:(re==null?void 0:re.type)||"default",value:kt,multiple:!1,__flags:{pendingUnmount:{[Fn]:!1},pendingReset:!1},fieldsCount:1,validate:re==null?void 0:re.validate,dirty:I(()=>!of(se(kt),se(et)))});return u.value.push(si),c.value[on]=si,f(),_.value[on]&&!E[on]&&ot(()=>{Pe(on,{mode:"silent"})}),Qe(le)&&ge(le,Ii=>{f();const dr=hn(kt.value);c.value[Ii]=si,ot(()=>{eo(l,Ii,dr)})}),si}const P=VD(ze,5),x=VD(ze,5),U=Ive(async le=>await(le==="silent"?P():x()),(le,[re])=>{const we=Vr(Q.errorBag.value),et=[...new Set([...Vr(le.results),...u.value.map(ft=>ft.path),...we])].sort().reduce((ft,qe)=>{var kt;const on=qe,ti=j(on)||Y(on),Zt=((kt=le.results[on])===null||kt===void 0?void 0:kt.errors)||[],Fn=fn(ti==null?void 0:ti.path)||on,si=qve({errors:Zt,valid:!Zt.length},ft.results[Fn]);return ft.results[Fn]=si,si.valid||(ft.errors[Fn]=si.errors[0]),ti&&d.value[Fn]&&delete d.value[Fn],ti?(ti.valid=si.valid,re==="silent"||re==="validated-only"&&!ti.validated||v(ti,si.errors),ft):(v(Fn,Zt),ft)},{valid:le.valid,results:{},errors:{},source:le.source});return le.values&&(et.values=le.values,et.source=le.source),Vr(et.results).forEach(ft=>{var qe;const kt=j(ft);kt&&re!=="silent"&&(re==="validated-only"&&!kt.validated||v(kt,(qe=et.results[ft])===null||qe===void 0?void 0:qe.errors))}),et});function $(le){u.value.forEach(le)}function j(le){const re=typeof le=="string"?Bv(le):le;return typeof re=="string"?c.value[re]:re}function Y(le){return u.value.filter(we=>le.startsWith(we.path)).reduce((we,Fe)=>we?Fe.path.length>we.path.length?Fe:we:Fe,void 0)}let W=[],K;function G(le){return W.push(le),K||(K=ot(()=>{[...W].sort().reverse().forEach(we=>{OD(l,we)}),W=[],K=null})),K}function te(le){return function(we,Fe){return function(ft){return ft instanceof Event&&(ft.preventDefault(),ft.stopPropagation()),$(qe=>qe.touched=!0),r.value=!0,o.value++,me().then(qe=>{const kt=hn(l);if(qe.valid&&typeof we=="function"){const on=hn(w.value);let ti=le?on:kt;return qe.values&&(ti=qe.source==="schema"?qe.values:Object.assign({},ti,qe.values)),we(ti,{evt:ft,controlledValues:on,setErrors:g,setFieldError:v,setTouched:ee,setFieldTouched:ne,setValues:ie,setFieldValue:B,resetForm:ae,resetField:fe})}!qe.valid&&typeof Fe=="function"&&Fe({values:kt,evt:ft,errors:qe.errors,results:qe.results})}).then(qe=>(r.value=!1,qe),qe=>{throw r.value=!1,qe})}}}const _e=te(!1);_e.withControlled=te(!0);function Ae(le,re){const we=u.value.findIndex(et=>et.path===le&&(Array.isArray(et.id)?et.id.includes(re):et.id===re)),Fe=u.value[we];if(!(we===-1||!Fe)){if(ot(()=>{Pe(le,{mode:"silent",warn:!1})}),Fe.multiple&&Fe.fieldsCount&&Fe.fieldsCount--,Array.isArray(Fe.id)){const et=Fe.id.indexOf(re);et>=0&&Fe.id.splice(et,1),delete Fe.__flags.pendingUnmount[re]}(!Fe.multiple||Fe.fieldsCount<=0)&&(u.value.splice(we,1),Ee(le),f(),delete c.value[le])}}function Ne(le){Vr(c.value).forEach(re=>{re.startsWith(le)&&delete c.value[re]}),u.value=u.value.filter(re=>!re.path.startsWith(le)),ot(()=>{f()})}const Q={formId:n,values:l,controlledValues:w,errorBag:p,errors:_,schema:C,submitCount:o,meta:S,isSubmitting:r,isValidating:s,fieldArrays:a,keepValuesOnUnmount:k,validateSchema:se(C)?U:void 0,validate:me,setFieldError:v,validateField:Pe,setFieldValue:B,setValues:ie,setErrors:g,setFieldTouched:ne,setTouched:ee,resetForm:ae,resetField:fe,handleSubmit:_e,useFieldModel:Ce,defineInputBinds:Ze,defineComponentBinds:mt,defineField:He,stageInitialValue:Re,unsetInitialValue:Ee,setFieldInitialValue:be,createPathState:A,getPathState:j,unsetPathValue:G,removePathState:Ae,initialValues:R,getAllPathStates:()=>u.value,destroyPath:Ne,isFieldTouched:Se,isFieldDirty:M,isFieldValid:L};function B(le,re,we=!0){const Fe=hn(re),et=typeof le=="string"?le:le.path;j(et)||A(et),eo(l,et,Fe),we&&Pe(et)}function q(le,re=!0){Vr(l).forEach(we=>{delete l[we]}),Vr(le).forEach(we=>{B(we,le[we],!1)}),re&&me()}function ie(le,re=!0){rh(l,le),a.forEach(we=>we&&we.reset()),re&&me()}function ce(le,re){const we=j(fn(le))||A(le);return I({get(){return we.value},set(Fe){var et;const ft=fn(le);B(ft,Fe,(et=fn(re))!==null&&et!==void 0?et:!1)}})}function ne(le,re){const we=j(le);we&&(we.touched=re)}function Se(le){const re=j(le);return re?re.touched:u.value.filter(we=>we.path.startsWith(le)).some(we=>we.touched)}function M(le){const re=j(le);return re?re.dirty:u.value.filter(we=>we.path.startsWith(le)).some(we=>we.dirty)}function L(le){const re=j(le);return re?re.valid:u.value.filter(we=>we.path.startsWith(le)).every(we=>we.valid)}function ee(le){if(typeof le=="boolean"){$(re=>{re.touched=le});return}Vr(le).forEach(re=>{ne(re,!!le[re])})}function fe(le,re){var we;const Fe=re&&"value"in re?re.value:so(R.value,le),et=j(le);et&&(et.__flags.pendingReset=!0),be(le,hn(Fe),!0),B(le,Fe,!1),ne(le,(we=re==null?void 0:re.touched)!==null&&we!==void 0?we:!1),v(le,(re==null?void 0:re.errors)||[]),ot(()=>{et&&(et.__flags.pendingReset=!1)})}function ae(le,re){let we=hn(le!=null&&le.values?le.values:O.value);we=re!=null&&re.force?we:rh(O.value,we),we=sa(C)&&Yr(C.cast)?C.cast(we):we,D(we,{force:re==null?void 0:re.force}),$(Fe=>{var et;Fe.__flags.pendingReset=!0,Fe.validated=!1,Fe.touched=((et=le==null?void 0:le.touched)===null||et===void 0?void 0:et[Fe.path])||!1,B(Fe.path,so(we,Fe.path),!1),v(Fe.path,void 0)}),re!=null&&re.force?q(we,!1):ie(we,!1),g((le==null?void 0:le.errors)||{}),o.value=(le==null?void 0:le.submitCount)||0,ot(()=>{me({mode:"silent"}),$(Fe=>{Fe.__flags.pendingReset=!1})})}async function me(le){const re=(le==null?void 0:le.mode)||"force";if(re==="force"&&$(qe=>qe.validated=!0),Q.validateSchema)return Q.validateSchema(re);s.value=!0;const we=await Promise.all(u.value.map(qe=>qe.validate?qe.validate(le).then(kt=>({key:qe.path,valid:kt.valid,errors:kt.errors,value:kt.value})):Promise.resolve({key:qe.path,valid:!0,errors:[],value:void 0})));s.value=!1;const Fe={},et={},ft={};for(const qe of we)Fe[qe.key]={valid:qe.valid,errors:qe.errors},qe.value&&eo(ft,qe.key,qe.value),qe.errors.length&&(et[qe.key]=qe.errors[0]);return{valid:we.every(qe=>qe.valid),results:Fe,errors:et,values:ft,source:"fields"}}async function Pe(le,re){var we;const Fe=j(le);if(Fe&&(re==null?void 0:re.mode)!=="silent"&&(Fe.validated=!0),C){const{results:et}=await U((re==null?void 0:re.mode)||"validated-only");return et[le]||{errors:[],valid:!0}}return Fe!=null&&Fe.validate?Fe.validate(re):(!Fe&&(we=re==null?void 0:re.warn),Promise.resolve({errors:[],valid:!0}))}function Ee(le){OD(R.value,le)}function Re(le,re,we=!1){be(le,re),eo(l,le,re),we&&!(e!=null&&e.initialValues)&&eo(O.value,le,hn(re))}function be(le,re,we=!1){eo(R.value,le,hn(re)),we&&eo(O.value,le,hn(re))}async function ze(){const le=se(C);if(!le)return{valid:!0,results:{},errors:{},source:"none"};s.value=!0;const re=RU(le)||sa(le)?await jve(le,l):await Hve(le,l,{names:y.value,bailsMap:b.value});return s.value=!1,re}const Me=_e((le,{evt:re})=>{Tve(re)&&re.target.submit()});yt(()=>{if(e!=null&&e.initialErrors&&g(e.initialErrors),e!=null&&e.initialTouched&&ee(e.initialTouched),e!=null&&e.validateOnMount){me();return}Q.validateSchema&&Q.validateSchema("silent")}),Qe(C)&&ge(C,()=>{var le;(le=Q.validateSchema)===null||le===void 0||le.call(Q,"validated-only")}),Ut(_ve,Q);function He(le,re){const we=Yr(re)||re==null?void 0:re.label,Fe=j(fn(le))||A(le,{label:we}),et=()=>Yr(re)?re(Uv(Fe,jv)):re||{};function ft(){var Zt;Fe.touched=!0,((Zt=et().validateOnBlur)!==null&&Zt!==void 0?Zt:Fd().validateOnBlur)&&Pe(Fe.path)}function qe(){var Zt;((Zt=et().validateOnInput)!==null&&Zt!==void 0?Zt:Fd().validateOnInput)&&ot(()=>{Pe(Fe.path)})}function kt(){var Zt;((Zt=et().validateOnChange)!==null&&Zt!==void 0?Zt:Fd().validateOnChange)&&ot(()=>{Pe(Fe.path)})}const on=I(()=>{const Zt={onChange:kt,onInput:qe,onBlur:ft};return Yr(re)?Object.assign(Object.assign({},Zt),re(Uv(Fe,jv)).props||{}):re!=null&&re.props?Object.assign(Object.assign({},Zt),re.props(Uv(Fe,jv))):Zt});return[ce(le,()=>{var Zt,Fn,si;return(si=(Zt=et().validateOnModelUpdate)!==null&&Zt!==void 0?Zt:(Fn=Fd())===null||Fn===void 0?void 0:Fn.validateOnModelUpdate)!==null&&si!==void 0?si:!0}),on]}function Ce(le){return Array.isArray(le)?le.map(re=>ce(re,!0)):ce(le)}function Ze(le,re){const[we,Fe]=He(le,re);function et(){Fe.value.onBlur()}function ft(kt){const on=MD(kt);B(fn(le),on,!1),Fe.value.onInput()}function qe(kt){const on=MD(kt);B(fn(le),on,!1),Fe.value.onChange()}return I(()=>Object.assign(Object.assign({},Fe.value),{onBlur:et,onInput:ft,onChange:qe,value:we.value}))}function mt(le,re){const[we,Fe]=He(le,re),et=j(fn(le));function ft(qe){we.value=qe}return I(()=>{const qe=Yr(re)?re(Uv(et,jv)):re||{};return Object.assign({[qe.model||"modelValue"]:we.value,[`onUpdate:${qe.model||"modelValue"}`]:ft},Fe.value)})}const xt=Object.assign(Object.assign({},Q),{values:xc(l),handleReset:()=>ae(),submitForm:Me});return Ut(yve,xt),xt}function zve(e,t,n,i){const r={touched:"some",pending:"some",valid:"every"},s=I(()=>!of(t,se(n)));function o(){const l=e.value;return Vr(r).reduce((u,d)=>{const c=r[d];return u[d]=l[c](f=>f[d]),u},{})}const a=cn(o());return rn(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),I(()=>Object.assign(Object.assign({initialValues:se(n)},a),{valid:a.valid&&!Vr(i.value).length,dirty:s.value}))}function Gve(e,t,n){const i=FU(n),r=z(i),s=z(hn(i));function o(a,l){l!=null&&l.force?(r.value=hn(a),s.value=hn(a)):(r.value=rh(hn(r.value)||{},hn(a)),s.value=rh(hn(s.value)||{},hn(a))),l!=null&&l.updateFields&&e.value.forEach(u=>{if(u.touched)return;const c=so(r.value,u.path);eo(t,u.path,hn(c))})}return{initialValues:r,originalInitialValues:s,setInitialValues:o}}function qve(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}function Yve(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function uu(e){this._maxSize=e,this.clear()}uu.prototype.clear=function(){this._size=0,this._values=Object.create(null)};uu.prototype.get=function(e){return this._values[e]};uu.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Kve=/[^.^\]^[]+|(?=\[\]|\.\.)/g,$U=/^\d+$/,Xve=/^\d/,Qve=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Jve=/^\s*(['"]?)(.*?)(\1)\s*$/,MC=512,FD=new uu(MC),$D=new uu(MC),BD=new uu(MC),Sl={Cache:uu,split:zw,normalizePath:db,setter:function(e){var t=db(e);return $D.get(e)||$D.set(e,function(i,r){for(var s=0,o=t.length,a=i;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return i;a=a[t[s++]]}a[t[s]]=r})},getter:function(e,t){var n=db(e);return BD.get(e)||BD.set(e,function(r){for(var s=0,o=n.length;s<o;)if(r!=null||!t)r=r[n[s++]];else return;return r})},join:function(e){return e.reduce(function(t,n){return t+(LC(n)||$U.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){Zve(Array.isArray(e)?e:zw(e),t,n)}};function db(e){return FD.get(e)||FD.set(e,zw(e).map(function(t){return t.replace(Jve,"$2")}))}function zw(e){return e.match(Kve)||[""]}function Zve(e,t,n){var i=e.length,r,s,o,a;for(s=0;s<i;s++)r=e[s],r&&(nme(r)&&(r='"'+r+'"'),a=LC(r),o=!a&&/^\d+$/.test(r),t.call(n,r,a,o,s,e))}function LC(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function eme(e){return e.match(Xve)&&!e.match($U)}function tme(e){return Qve.test(e)}function nme(e){return!LC(e)&&(eme(e)||tme(e))}const ime=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,U_=e=>e.match(ime)||[],j_=e=>e[0].toUpperCase()+e.slice(1),FC=(e,t)=>U_(e).join(t).toLowerCase(),BU=e=>U_(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),rme=e=>j_(BU(e)),sme=e=>FC(e,"_"),ome=e=>FC(e,"-"),ame=e=>j_(FC(e," ")),lme=e=>U_(e).map(j_).join(" ");var fb={words:U_,upperFirst:j_,camelCase:BU,pascalCase:rme,snakeCase:sme,kebabCase:ome,sentenceCase:ame,titleCase:lme},$C={exports:{}};$C.exports=function(e){return UU(ume(e),e)};$C.exports.array=UU;function UU(e,t){var n=e.length,i=new Array(n),r={},s=n,o=cme(t),a=dme(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)r[s]||l(e[s],s,new Set);return i;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!r[d]){r[d]=!0;var v=o.get(u)||new Set;if(v=Array.from(v),d=v.length){c.add(u);do{var g=v[--d];l(g,a.get(g),c)}while(d);c.delete(u)}i[--n]=u}}}function ume(e){for(var t=new Set,n=0,i=e.length;n<i;n++){var r=e[n];t.add(r[0]),t.add(r[1])}return Array.from(t)}function cme(e){for(var t=new Map,n=0,i=e.length;n<i;n++){var r=e[n];t.has(r[0])||t.set(r[0],new Set),t.has(r[1])||t.set(r[1],new Set),t.get(r[0]).add(r[1])}return t}function dme(e){for(var t=new Map,n=0,i=e.length;n<i;n++)t.set(e[n],n);return t}var fme=$C.exports;const hme=Yve(fme),vme=Object.prototype.toString,mme=Error.prototype.toString,gme=RegExp.prototype.toString,pme=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",_me=/^Symbol\((.*)\)(.*)$/;function yme(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function UD(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return yme(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return pme.call(e).replace(_me,"Symbol($1)");const i=vme.call(e).slice(8,-1);return i==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):i==="Error"||e instanceof Error?"["+mme.call(e)+"]":i==="RegExp"?gme.call(e):null}function po(e,t){let n=UD(e,t);return n!==null?n:JSON.stringify(e,function(i,r){let s=UD(this[i],t);return s!==null?s:r},2)}function jU(e){return e==null?[]:[].concat(e)}let HU,WU,zU,bme=/\$\{\s*(\w+)\s*\}/g;HU=Symbol.toStringTag;class jD{constructor(t,n,i,r){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[HU]="Error",this.name="ValidationError",this.value=n,this.path=i,this.type=r,this.errors=[],this.inner=[],jU(t).forEach(s=>{if(rr.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}WU=Symbol.hasInstance;zU=Symbol.toStringTag;class rr extends Error{static formatError(t,n){const i=n.label||n.path||"this";return i!==n.path&&(n=Object.assign({},n,{path:i})),typeof t=="string"?t.replace(bme,(r,s)=>po(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,i,r,s){const o=new jD(t,n,i,r);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[zU]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,rr)}static[WU](t){return jD[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let ps={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:i})=>{const r=i!=null&&i!==n?` (cast from the value \`${po(i,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${po(n,!0)}\``+r:`${e} must match the configured type. The validated value was: \`${po(n,!0)}\``+r}},er={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Go={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Gw={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},qw={isValue:"${path} field must be ${value}"},Yw={noUnknown:"${path} field has unspecified keys: ${unknown}"},Sm={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},wme={notType:e=>{const{path:t,value:n,spec:i}=e,r=i.types.length;if(Array.isArray(n)){if(n.length<r)return`${t} tuple value has too few items, expected a length of ${r} but got ${n.length} for value: \`${po(n,!0)}\``;if(n.length>r)return`${t} tuple value has too many items, expected a length of ${r} but got ${n.length} for value: \`${po(n,!0)}\``}return rr.formatError(ps.notType,e)}};Object.assign(Object.create(null),{mixed:ps,string:er,number:Go,date:Gw,object:Yw,array:Sm,boolean:qw,tuple:wme});const H_=e=>e&&e.__isYupSchema__;class Rg{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:i,then:r,otherwise:s}=n,o=typeof i=="function"?i:(...a)=>a.every(l=>l===i);return new Rg(t,(a,l)=>{var u;let d=o(...a)?r:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let i=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),r=this.fn(i,t,n);if(r===void 0||r===t)return t;if(!H_(r))throw new TypeError("conditions must return a schema object");return r.resolve(n)}}const Hv={context:"$",value:"."};function Sme(e,t){return new Ba(e,t)}class Ba{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Hv.context,this.isValue=this.key[0]===Hv.value,this.isSibling=!this.isContext&&!this.isValue;let i=this.isContext?Hv.context:this.isValue?Hv.value:"";this.path=this.key.slice(i.length),this.getter=this.path&&Sl.getter(this.path,!0),this.map=n.map}getValue(t,n,i){let r=this.isContext?i:this.isValue?t:n;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ba.prototype.__isYupRef=!0;const Zr=e=>e==null;function Eu(e){function t({value:n,path:i="",options:r,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:v}=e;let{parent:g,context:p,abortEarly:_=o.spec.abortEarly,disableStackTrace:y=o.spec.disableStackTrace}=r;function b(A){return Ba.isRef(A)?A.getValue(n,g,p):A}function E(A={}){const P=Object.assign({value:n,originalValue:s,label:o.spec.label,path:A.path||i,spec:o.spec,disableStackTrace:A.disableStackTrace||y},c,A.params);for(const U of Object.keys(P))P[U]=b(P[U]);const x=new rr(rr.formatError(A.message||f,P),n,P.path,A.type||u,P.disableStackTrace);return x.params=P,x}const k=_?a:l;let R={path:i,parent:g,type:u,from:r.from,createError:E,resolve:b,options:r,originalValue:s,schema:o};const O=A=>{rr.isError(A)?k(A):A?l(null):k(E())},D=A=>{rr.isError(A)?k(A):a(A)};if(v&&Zr(n))return O(!0);let w;try{var C;if(w=d.call(R,n,R),typeof((C=w)==null?void 0:C.then)=="function"){if(r.sync)throw new Error(`Validation test of type: "${R.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(w).then(O,D)}}catch(A){D(A);return}O(w)}return t.OPTIONS=e,t}function Eme(e,t,n,i=n){let r,s,o;return t?(Sl.forEach(t,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;e=e.resolve({context:i,parent:r,value:n});let c=e.type==="tuple",f=u?parseInt(d,10):0;if(e.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);r=n,n=n&&n[f],e=c?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[d])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);r=n,n=n&&n[d],e=e.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:e,parent:r,parentPath:s}):{parent:r,parentPath:t,schema:e}}class Og extends Set{describe(){const t=[];for(const n of this.values())t.push(Ba.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const i of this.values())n.push(t(i));return n}clone(){return new Og(this.values())}merge(t,n){const i=this.clone();return t.forEach(r=>i.add(r)),n.forEach(r=>i.delete(r)),i}}function Bu(e,t=new Map){if(H_(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let i=0;i<e.length;i++)n[i]=Bu(e[i],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[i,r]of e.entries())n.set(i,Bu(r,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const i of e)n.add(Bu(i,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[i,r]of Object.entries(e))n[i]=Bu(r,t)}else throw Error(`Unable to clone ${e}`);return n}class Tr{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Og,this._blacklist=new Og,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ps.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Bu(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let i=t(this);return this._mutate=n,i}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,i=t.clone();const r=Object.assign({},n.spec,i.spec);return i.spec=r,i.internalTests=Object.assign({},n.internalTests,i.internalTests),i._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),i._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),i.tests=n.tests,i.exclusiveTests=n.exclusiveTests,i.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),i.transforms=[...n.transforms,...i.transforms],i}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let i=n.conditions;n=n.clone(),n.conditions=[],n=i.reduce((r,s)=>s.resolve(r,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,i,r,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(i=t.abortEarly)!=null?i:this.spec.abortEarly,recursive:(r=t.recursive)!=null?r:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,n={}){let i=this.resolve(Object.assign({value:t},n)),r=n.assert==="ignore-optionality",s=i._cast(t,n);if(n.assert!==!1&&!i.isType(s)){if(r&&Zr(s))return s;let o=po(t),a=po(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${o} 
`);navigator.clipboard.writeText(y)}function f(){r.value=!r.value}function v(){s.value=!s.value,_()}function g(y){if(l.value.includes(y))l.value=[];else{const b=[y];y==An.ERROR&&b.push(An.EXCEPTION,An.PROMISE_REJECTION),l.value=b}}function p(y){i.value=n.value=[...y].splice(0,t.bufferSize),_()}function _(){s.value&&setTimeout(()=>{var y,b;(b=o.value)==null||b.$el.scrollTo({top:(y=o.value)==null?void 0:y.$el.scrollHeight,behavior:"smooth"})},100)}return yt(()=>{u=ia.instance.subscription.subscribe({next:y=>p(y)},!0)}),Ir(()=>{u==null||u.unsubscribe()}),(y,b)=>{const E=H("v-btn"),k=H("v-spacer"),R=H("v-system-bar"),O=H("v-icon"),D=H("v-list-item-title"),S=H("v-list-item"),w=H("v-list"),C=H("v-col"),A=H("v-slide-x-transition"),P=H("v-card"),x=H("v-card-text"),U=H("v-row"),$=H("v-main"),j=H("v-layout");return ye(),Le(P,{class:"console-card"},{default:N(()=>[h(j,null,{default:N(()=>[h(R,{color:"pink-darken-2",style:{height:"35px"}},{default:N(()=>[h(E,{class:"ms-1",density:"compact",variant:"text",icon:"mdi-dots-vertical",onClick:f}),h(E,{class:"ms-1",density:"compact",variant:"text",icon:"mdi-format-vertical-align-bottom",color:s.value?"yellow":"",onClick:v},null,8,["color"]),h(E,{class:"ms-1",density:"compact",variant:"text",icon:"mdi-content-copy",onClick:c}),h(k),h(E,{class:"ms-1",density:"compact",variant:"text",icon:"mdi-delete",onClick:d})]),_:1}),h($,null,{default:N(()=>[h(U,{class:"pa-0 pt-3"},{default:N(()=>[h(A,{"hide-on-leave":""},{default:N(()=>[r.value?(ye(),Le(C,{key:0,class:"my-4 border-e-thin"},{default:N(()=>[h(w,{lines:!1,density:"compact",nav:""},{default:N(()=>[(ye(),St(Ie,null,Ui(a,(Y,W)=>h(S,{key:W,value:Y,color:"primary",onClick:K=>g(Y.type)},{prepend:N(()=>[h(O,{icon:Y.icon,color:Y.color},null,8,["icon","color"])]),default:N(()=>[h(D,null,{default:N(()=>[xe(lt(Y.text()),1)]),_:2},1024)]),_:2},1032,["value","onClick"])),64))]),_:1})]),_:1})):Jt("",!0)]),_:1}),h(C,{md:r.value?10:12},{default:N(()=>[h(x,{class:"console-output px-2",ref_key:"consoleOutput",ref:o},{default:N(()=>[(ye(!0),St(Ie,null,Ui(i.value,(Y,W)=>(ye(),Le(P,{key:W,class:"log-entry my-1 pa-1"},{default:N(()=>[Y.level==se(An).ERROR||Y.level==se(An).EXCEPTION||Y.level==se(An).PROMISE_REJECTION?(ye(),St("p",g_e,[h(O,{color:"error",class:"mr-2"},{default:N(()=>b[0]||(b[0]=[xe("mdi-close-octagon")])),_:1}),xe(" "+lt(Y.message),1)])):Y.level==se(An).WARNING?(ye(),St("p",p_e,[h(O,{color:"warning",class:"mr-2"},{default:N(()=>b[1]||(b[1]=[xe("mdi-alert-outline")])),_:1}),xe(" "+lt(Y.message),1)])):(ye(),St("p",__e,[h(O,{color:"info",class:"mr-2"},{default:N(()=>b[2]||(b[2]=[xe("mdi-information-outline")])),_:1}),xe(" "+lt(Y.message),1)]))]),_:2},1024))),128))]),_:1},512)]),_:1},8,["md"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),b_e=qC(y_e,[["__scopeId","data-v-e81b5894"]]),w_e=Tt({__name:"DebuggerView",setup(e){const t=z(!1);return yt(()=>{t.value=Jr.getItem("debugEnabled")??!1}),(n,i)=>{const r=H("v-col"),s=H("v-row"),o=H("v-icon"),a=H("v-btn"),l=H("v-container");return ye(),Le(l,{fluid:"",class:"mb-5"},{default:N(()=>[h(s,{class:"justify-center align-center mb-6"},{default:N(()=>[h(r,{cols:"auto"},{default:N(()=>[h(Kh)]),_:1}),h(r,null,{default:N(()=>i[0]||(i[0]=[tt("p",{class:"text-h5 text-center"},"Log dell'applicazione",-1)])),_:1})]),_:1}),h(s,null,{default:N(()=>[t.value?(ye(),Le(r,{key:0},{default:N(()=>[h(b_e)]),_:1})):(ye(),Le(r,{key:1,class:"text-center"},{default:N(()=>[tt("p",null,[i[3]||(i[3]=xe("La console di debug non è abilitata. Abilitala tramite le ")),h(a,{to:"settings",variant:"text"},{default:N(()=>[h(o,null,{default:N(()=>i[1]||(i[1]=[xe("mdi-link")])),_:1}),i[2]||(i[2]=xe(" impostazioni"))]),_:1})])]),_:1}))]),_:1})]),_:1})}}}),M6=DJ({history:aJ("/teachers-agenda"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:hb},{path:"/schools",name:"schools",meta:{requiresAuth:!0},component:Qme},{path:"/school/:id",meta:{requiresAuth:!0,transition:"v-slide-x-transition"},component:Ype},{path:"/lessons/:id",name:"lessons",meta:{requiresAuth:!0},component:n_e},{path:"/lesson/:id",name:"lesson",meta:{requiresAuth:!0},component:l_e},{path:"/recoveries",name:"recoveries",meta:{requiresAuth:!0},component:hb},{path:"/calendar",name:"calendar",meta:{requiresAuth:!0},component:u_e},{path:"/reports",name:"reports",meta:{requiresAuth:!0},component:hb},{path:"/settings",name:"settings",meta:{requiresAuth:!0},component:c_e},{path:"/login",name:"login",component:m_e},{path:"/debugger",name:"debugger",component:w_e}]});M6.beforeEach(async e=>{if(e.name=="login"&&await sI())return{path:"/"};if(e.meta.requiresAuth&&!await sI())return{path:"/login",query:{redirect:e.fullPath}}});const S_e=()=>{window.onerror=function(t,n,i){return ia.instance.push(An.EXCEPTION,{error:t,url:n,line:i}),!1},window.onunhandledrejection=function(t){try{const n={message:t.reason.message,stack:t.reason.stack};ia.instance.push(An.PROMISE_REJECTION,n)}catch{ia.instance.push(An.PROMISE_REJECTION,t)}};function e(t){const n=console[t].bind(console);return function(...i){let r=An.INFO;t=="error"?r=An.ERROR:t=="warn"&&(r=An.WARNING),ia.instance.push(r,...Array.from(i)),n.apply(console,i)}}["log","error","warn"].forEach(t=>{console[t]=e(t)})};S_e();const{firebaseApp:E_e}=Xee(),cu=lV(qee);cu.config.performance=!0;cu.use(N5());cu.use(M6);cu.use(Gae);cu.use(PQ,{firebaseApp:E_e,modules:[TQ()]});cu.use(_V,{autoClose:3e3});cu.mount("#app");