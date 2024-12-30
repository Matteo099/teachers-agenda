import{a as x,_ as I}from"./v4-DOMLpR64.js";import{c as R,a as W,b as T,e as B,f as G,g as L,h as A,v as F,y as O,T as S,W as H}from"./schedule-x-vue-BELKaWgn.js";import{S as Y}from"./school-repository-mPHwUDC0.js";import{L as z}from"./lesson-group-service-BkAu8ZDW.js";import{d as q,q as N,E as U,r as J,o as K,u as d,c as Q,w as b,j as X,G as Z,b as w,e as ee,f}from"./index-DqQs06DF.js";var $;(function(t){t.DragAndDrop="dragAndDrop",t.EventModal="eventModal",t.ScrollController="scrollController",t.EventRecurrence="eventRecurrence",t.Resize="resize",t.CalendarControls="calendarControls",t.CurrentTime="currentTime"})($||($={}));const te=/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,ae=/^(\d{4})-(\d{2})-(\d{2})$/;class re extends Error{constructor(e){super(`Invalid time string: ${e}`)}}class ne extends Error{constructor(e,r){super(`Number must be between ${e} and ${r}.`),Object.defineProperty(this,"min",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"max",{enumerable:!0,configurable:!0,writable:!0,value:r})}}const C=t=>{if(t<0||t>99)throw new ne(0,99);return String(t).padStart(2,"0")},P=1.6666666666666667,_=t=>{if(!te.test(t)&&t!=="24:00")throw new re(t);const[e,r]=t.split(":").map(i=>parseInt(i,10));let n=(r*P).toString();return n.split(".")[0].length<2&&(n=`0${n}`),Number(e+n)},M=t=>{const e=Math.floor(t/100),r=Math.round(t%100/P);return`${C(e)}:${C(r)}`},ie=(t,e)=>(e.name=t,e);class oe{constructor(){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:$.CalendarControls}),Object.defineProperty(this,"$app",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"getDate",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.datePickerState.selectedDate.value}),Object.defineProperty(this,"getView",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.calendarState.view.value}),Object.defineProperty(this,"getFirstDayOfWeek",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.firstDayOfWeek.value}),Object.defineProperty(this,"getLocale",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.locale.value}),Object.defineProperty(this,"getViews",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.views.value}),Object.defineProperty(this,"getDayBoundaries",{enumerable:!0,configurable:!0,writable:!0,value:()=>({start:M(this.$app.config.dayBoundaries.value.start),end:M(this.$app.config.dayBoundaries.value.end)})}),Object.defineProperty(this,"getWeekOptions",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.weekOptions.value}),Object.defineProperty(this,"getCalendars",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.calendars.value}),Object.defineProperty(this,"getMinDate",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.minDate.value}),Object.defineProperty(this,"getMaxDate",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.maxDate.value}),Object.defineProperty(this,"getMonthGridOptions",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.config.monthGridOptions.value}),Object.defineProperty(this,"getRange",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.$app.calendarState.range.value})}beforeRender(e){this.$app=e}onRender(e){this.$app=e}setDate(e){if(!ae.test(e))throw new Error("Invalid date. Expected format YYYY-MM-DD");this.$app.datePickerState.selectedDate.value=e}setView(e){if(!this.$app.config.views.value.find(n=>n.name===e))throw new Error(`Invalid view name. Expected one of ${this.$app.config.views.value.map(n=>n.name).join(", ")}`);this.$app.calendarState.setView(e,this.$app.datePickerState.selectedDate.value)}setFirstDayOfWeek(e){this.$app.config.firstDayOfWeek.value=e}setLocale(e){this.$app.config.locale.value=e}setViews(e){const r=this.$app.calendarState.view.value;if(!e.some(i=>i.name===r))throw new Error(`Currently active view is not in given views. Expected to find ${r} in ${e.map(i=>i.name).join(",")}`);this.$app.config.views.value=e}setDayBoundaries(e){this.$app.config.dayBoundaries.value={start:_(e.start),end:_(e.end)}}setWeekOptions(e){this.$app.config.weekOptions.value={...this.$app.config.weekOptions.value,...e}}setCalendars(e){this.$app.config.calendars.value=e}setMinDate(e){this.$app.config.minDate.value=e}setMaxDate(e){this.$app.config.maxDate.value=e}setMonthGridOptions(e){this.$app.config.monthGridOptions.value=e}}const se=()=>ie("calendarControls",new oe),fe=q({__name:"SchoolLessonView",setup(t){const e=Z(),r=N(()=>e.params.id),n=Y.instance.observe(r),i=U(n),c=[],v=J(!1),o=R(),j=W(),y=se(),E=T({locale:"it-IT",views:[B(),G(),L(),A()],defaultView:F.name,events:[],plugins:[o,j,y],callbacks:{beforeRender(a){const s=a.calendarState.range.value;m(s)},onRangeUpdate(a){m(a)}}});function k(){c.forEach(a=>{a._options||(a._options={}),o.get(a.id)?o.update(a):o.add(a)}),o.getAll().forEach(a=>{c.findIndex(l=>l.id==a.id)==-1&&o.remove(a.id)})}async function m(a){if(a??(a=y.getRange()),!a||!i.value)return;c.length=0,v.value=!0;const s={date:O.fromDate(new Date(a.start)),time:S.fromHHMM(a.start.split(" ")[1])},l={date:O.fromDate(new Date(a.end)),time:S.fromHHMM(a.end.split(" ")[1])},u=await z.instance.getCalendarLessons(i.value.id,s,l),p=Array.from(new Set(u.map(g=>g.title).filter(Boolean)));if(p.length>0){const g=await x.instance.getStudentsOfSchoolWithIds(i.value.id,p);u.forEach(D=>{const h=g.find(V=>V.id==D.title);h&&(D.title=h.name+" "+h.surname)})}c.push(...u),k(),v.value=!1}return K(async()=>{m()}),(a,s)=>{const l=w("v-progress-linear"),u=w("v-container"),p=w("v-card");return d(i)?(ee(),Q(p,{key:0,class:"pa-3",title:d(i).name,elevation:"0"},{prepend:b(()=>[f(I)]),default:b(()=>[f(u,null,{default:b(()=>[f(l,{active:v.value,color:"primary",indeterminate:""},null,8,["active"]),f(d(H),{"calendar-app":d(E)},null,8,["calendar-app"])]),_:1})]),_:1},8,["title"])):X("",!0)}}});export{fe as default};
