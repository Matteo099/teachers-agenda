import{d as de,r as R,i as ee,n as U,b as m,e as F,c as z,w as v,f as h,m as B,u as w,q as V,j as te,x as k,A as re,B as be,o as ge}from"./index-j92a3A_3.js";import{T as S,c as ye,a as De,y as _e,d as Te}from"./model-C9r2bJ5b.js";import{c as Ee,a as Oe,W as we}from"./schedule-x-vue-URhJ0zzV.js";import{c as Pe,a as ne,u as Me}from"./index.esm-PQuIfhzk.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";var W;(function(e){e.DragAndDrop="dragAndDrop",e.EventModal="eventModal",e.ScrollController="scrollController",e.EventRecurrence="eventRecurrence",e.Resize="resize",e.CalendarControls="calendarControls",e.CurrentTime="currentTime"})(W||(W={}));class Se extends Error{constructor(t){super(`Invalid time string: ${t}`)}}const Ie=/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,L=/^(\d{4})-(\d{2})-(\d{2}) (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,G=/^(\d{4})-(\d{2})-(\d{2})$/,ie={DATE_STRING:/^\d{4}-\d{2}-\d{2}$/,TIME_STRING:/^\d{2}:\d{2}$/,DATE_TIME_STRING:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/};class je extends Error{constructor(t){super(`Invalid date time specification: ${t}`)}}const ce=e=>{if(!ie.DATE_TIME_STRING.test(e)&&!ie.DATE_STRING.test(e))throw new je(e);return new Date(Number(e.slice(0,4)),Number(e.slice(5,7))-1,Number(e.slice(8,10)),Number(e.slice(11,13)),Number(e.slice(14,16)))},q=e=>{const t=e.slice(11,13),r=e.slice(14,16);return{year:Number(e.slice(0,4)),month:Number(e.slice(5,7))-1,date:Number(e.slice(8,10)),hours:t!==""?Number(t):void 0,minutes:r!==""?Number(r):void 0}};class Ae extends Error{constructor(t,r){super(`Number must be between ${t} and ${r}.`),Object.defineProperty(this,"min",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"max",{enumerable:!0,configurable:!0,writable:!0,value:r})}}const X=e=>{if(e<0||e>99)throw new Ae(0,99);return String(e).padStart(2,"0")},Q=e=>`${e.getFullYear()}-${X(e.getMonth()+1)}-${X(e.getDate())}`,Ne=e=>`${X(e.getHours())}:${X(e.getMinutes())}`,he=e=>`${Q(e)} ${Ne(e)}`,fe=1.6666666666666667,ae=e=>{if(!Ie.test(e)&&e!=="24:00")throw new Se(e);const[t,r]=e.split(":").map(a=>parseInt(a,10));let n=(r*fe).toString();return n.split(".")[0].length<2&&(n=`0${n}`),Number(t+n)},oe=(e,t)=>{const r=t/fe,n=ce(e);return n.setMinutes(n.getMinutes()+r),he(n)},P=(e,t)=>{const{year:r,month:n,date:a,hours:s,minutes:u}=q(e),c=s!==void 0&&u!==void 0,f=new Date(r,n,a,s??0,u??0);return f.setDate(f.getDate()+t),c?he(f):Q(f)},g=e=>e.slice(0,10),J=e=>e.slice(11),se=(e,t)=>{const r=J(e);return`${t} ${r}`},me=e=>"time-grid-event-copy-"+e,Le=(e,t,r)=>{var n;(n=e.config.plugins.eventRecurrence)===null||n===void 0||n.updateRecurrenceDND(t.id,r,t.start)},He=(e,t)=>{const r=e.calendarEvents.list.value.find(n=>n.id===t.id);r&&(r.start=t.start,r.end=t.end,e.calendarEvents.list.value=[...e.calendarEvents.list.value])},Z=(e,t,r)=>{"rrule"in t._getForeignProperties()&&e.config.plugins.eventRecurrence?Le(e,t,r):He(e,t),e.config.callbacks.onEventUpdate&&e.config.callbacks.onEventUpdate(t._getExternalEvent())},xe=e=>"touches"in e&&typeof e.touches=="object",ve=e=>{const t=xe(e)?e.touches[0]:e;return{clientX:t.clientX,clientY:t.clientY}},Re=e=>e.config.timePointsPerDay/e.config.weekOptions.value.gridHeight;class $e{constructor(t,r,n,a,s,u){Object.defineProperty(this,"$app",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"eventCoordinates",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"eventCopy",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"updateCopy",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"dayBoundariesDateTime",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(this,"CHANGE_THRESHOLD_IN_TIME_POINTS",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(this,"dayWidth",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastIntervalDiff",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"lastDaysDiff",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"originalStart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"handleMouseOrTouchMove",{enumerable:!0,configurable:!0,writable:!0,value:c=>{const{clientX:f,clientY:_}=ve(c),d=(_-this.startY)*this.timePointsPerPixel(),E=Math.round(d/this.CHANGE_THRESHOLD_IN_TIME_POINTS),p=f-this.startX,M=Math.round(p/this.dayWidth);this.handleVerticalMouseOrTouchMove(E),this.handleHorizontalMouseOrTouchMove(M)}}),Object.defineProperty(this,"handleMouseUpOrTouchEnd",{enumerable:!0,configurable:!0,writable:!0,value:()=>{document.removeEventListener("mousemove",this.handleMouseOrTouchMove),document.removeEventListener("touchmove",this.handleMouseOrTouchMove),this.updateCopy(void 0),this.updateOriginalEvent()}}),this.dayWidth=t.elements.calendarWrapper.querySelector(".sx__time-grid-day").clientWidth,this.startY=this.eventCoordinates.clientY,this.startX=this.eventCoordinates.clientX,this.originalStart=this.eventCopy.start,this.init()}init(){document.addEventListener("mousemove",this.handleMouseOrTouchMove),document.addEventListener("mouseup",this.handleMouseUpOrTouchEnd,{once:!0}),document.addEventListener("touchmove",this.handleMouseOrTouchMove,{passive:!1}),document.addEventListener("touchend",this.handleMouseUpOrTouchEnd,{once:!0})}timePointsPerPixel(){return Re(this.$app)}handleVerticalMouseOrTouchMove(t){if(t===this.lastIntervalDiff)return;const r=t>this.lastIntervalDiff?this.CHANGE_THRESHOLD_IN_TIME_POINTS:-this.CHANGE_THRESHOLD_IN_TIME_POINTS;this.setTimeForEventCopy(r),this.lastIntervalDiff=t}setTimeForEventCopy(t){const r=oe(this.eventCopy.start,t),n=oe(this.eventCopy.end,t);r<P(this.dayBoundariesDateTime.start,this.lastDaysDiff)||n>P(this.dayBoundariesDateTime.end,this.lastDaysDiff)||(this.eventCopy.start=r,this.eventCopy.end=n,this.updateCopy(this.eventCopy))}handleHorizontalMouseOrTouchMove(t){if(t===this.lastDaysDiff)return;const r=t-this.lastDaysDiff,n=P(g(this.eventCopy.start),r),a=P(g(this.eventCopy.end),r),s=se(this.eventCopy.start,n),u=se(this.eventCopy.end,a);s<this.$app.calendarState.range.value.start||u>this.$app.calendarState.range.value.end||(this.setDateForEventCopy(s,u),this.transformEventCopyPosition(t),this.lastDaysDiff=t)}setDateForEventCopy(t,r){this.eventCopy.start=t,this.eventCopy.end=r,this.updateCopy(this.eventCopy)}transformEventCopyPosition(t){const r=this.$app.elements.calendarWrapper.querySelector("#"+me(this.eventCopy.id));r.style.transform=`translateX(calc(${t*100}% + ${t}px))`}updateOriginalEvent(){if(this.lastIntervalDiff===0&&this.lastDaysDiff===0)return;const t=this.lastDaysDiff===0,r=document.querySelector(`[data-event-id="${this.eventCopy.id}"]`);!t&&r instanceof HTMLElement&&(r.style.display="none"),Z(this.$app,this.eventCopy,this.originalStart)}}const Ye=e=>e.elements.calendarWrapper.querySelector(".sx__time-grid-day").clientWidth,Ve=(e,t)=>e.elements.calendarWrapper.querySelector("#"+me(t.id)),ue=1e3*60*60*24;class Ge{constructor(t,r,n,a){Object.defineProperty(this,"$app",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"eventCopy",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"updateCopy",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"startX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dayWidth",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"originalStart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"originalEnd",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rangeStartDate",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rangeEndDate",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastDaysDiff",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"handleMouseOrTouchMove",{enumerable:!0,configurable:!0,writable:!0,value:s=>{const{clientX:u}=ve(s),c=u-this.startX,f=Math.round(c/this.dayWidth);if(f===this.lastDaysDiff)return;const _=P(this.originalStart,f),T=P(this.originalEnd,f),d=g(_),E=g(T);if(d>this.rangeEndDate||E<this.rangeStartDate)return;this.eventCopy.start=_,this.eventCopy.end=T;const M=d>=this.rangeStartDate&&d<=this.rangeEndDate?d:this.rangeStartDate,N=E>=this.rangeStartDate&&E<=this.rangeEndDate?E:this.rangeEndDate;this.eventCopy._nDaysInGrid=Math.round((new Date(N).getTime()-new Date(M).getTime())/ue)+1,d>=this.rangeStartDate&&this.transformEventCopyPosition(d),this.updateCopy(this.eventCopy),this.lastDaysDiff=f}}),Object.defineProperty(this,"handleMouseUpOrTouchEnd",{enumerable:!0,configurable:!0,writable:!0,value:()=>{document.removeEventListener("mousemove",this.handleMouseOrTouchMove),document.removeEventListener("touchmove",this.handleMouseOrTouchMove),this.updateOriginalEvent(),setTimeout(()=>{this.updateCopy(void 0)},10)}}),this.startX=r.clientX,this.dayWidth=Ye(this.$app),this.originalStart=this.eventCopy.start,this.originalEnd=this.eventCopy.end,this.rangeStartDate=g(this.$app.calendarState.range.value.start),this.rangeEndDate=P(this.rangeStartDate,t.config.weekOptions.value.nDays-1),this.init()}init(){document.addEventListener("mousemove",this.handleMouseOrTouchMove),document.addEventListener("mouseup",this.handleMouseUpOrTouchEnd,{once:!0}),document.addEventListener("touchmove",this.handleMouseOrTouchMove,{passive:!1}),document.addEventListener("touchend",this.handleMouseUpOrTouchEnd,{once:!0})}transformEventCopyPosition(t){const r=g(this.originalStart),n=Math.round((new Date(t).getTime()-new Date(r>=this.rangeStartDate?r:this.rangeStartDate).getTime())/ue);Ve(this.$app,this.eventCopy).style.transform=`translateX(calc(${n*this.dayWidth}px + ${n}px))`}updateOriginalEvent(){this.lastDaysDiff!==0&&Z(this.$app,this.eventCopy,this.originalStart)}}const le=(e,t)=>{const{year:r,month:n,date:a}=q(e),{year:s,month:u,date:c}=q(t),f=new Date(r,n,a),T=new Date(s,u,c).getTime()-f.getTime();return Math.round(T/(1e3*3600*24))};var K;(function(e){e[e.SUNDAY=0]="SUNDAY",e[e.MONDAY=1]="MONDAY",e[e.TUESDAY=2]="TUESDAY",e[e.WEDNESDAY=3]="WEDNESDAY",e[e.THURSDAY=4]="THURSDAY",e[e.FRIDAY=5]="FRIDAY",e[e.SATURDAY=6]="SATURDAY"})(K||(K={}));K.MONDAY;const Ue="primary";class Fe{constructor(t,r,n,a,s,u,c,f,_,T=void 0,d={},E={}){Object.defineProperty(this,"_config",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"start",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"end",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"title",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(this,"people",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(this,"location",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:f}),Object.defineProperty(this,"calendarId",{enumerable:!0,configurable:!0,writable:!0,value:_}),Object.defineProperty(this,"_options",{enumerable:!0,configurable:!0,writable:!0,value:T}),Object.defineProperty(this,"_customContent",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(this,"_foreignProperties",{enumerable:!0,configurable:!0,writable:!0,value:E}),Object.defineProperty(this,"_previousConcurrentEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_totalConcurrentEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nDaysInGrid",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_eventFragments",{enumerable:!0,configurable:!0,writable:!0,value:{}})}get _isSingleDayTimed(){return L.test(this.start)&&L.test(this.end)&&g(this.start)===g(this.end)}get _isSingleDayFullDay(){return G.test(this.start)&&G.test(this.end)&&this.start===this.end}get _isMultiDayTimed(){return L.test(this.start)&&L.test(this.end)&&g(this.start)!==g(this.end)}get _isMultiDayFullDay(){return G.test(this.start)&&G.test(this.end)&&this.start!==this.end}get _isSingleHybridDayTimed(){if(!this._config.isHybridDay||!L.test(this.start)||!L.test(this.end))return!1;const t=g(this.start),r=g(this.end),n=Q(new Date(ce(r).getTime()-864e5));if(t!==r&&t!==n)return!1;const a=this._config.dayBoundaries.value,s=ae(J(this.start)),u=ae(J(this.end));return s>=a.start&&(u<=a.end||u>s)||s<a.end&&u<=a.end}get _color(){return this.calendarId&&this._config.calendars.value&&this.calendarId in this._config.calendars.value?this._config.calendars.value[this.calendarId].colorName:Ue}_getForeignProperties(){return this._foreignProperties}_getExternalEvent(){return{id:this.id,start:this.start,end:this.end,title:this.title,people:this.people,location:this.location,description:this.description,calendarId:this.calendarId,_options:this._options,...this._getForeignProperties()}}}class ze{constructor(t,r,n,a){Object.defineProperty(this,"_config",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"start",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"end",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"people",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"location",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"title",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"calendarId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_foreignProperties",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"_options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_customContent",{enumerable:!0,configurable:!0,writable:!0,value:{}})}build(){return new Fe(this._config,this.id,this.start,this.end,this.title,this.people,this.location,this.description,this.calendarId,this._options,this._customContent,this._foreignProperties)}withTitle(t){return this.title=t,this}withPeople(t){return this.people=t,this}withLocation(t){return this.location=t,this}withDescription(t){return this.description=t,this}withForeignProperties(t){return this._foreignProperties=t,this}withCalendarId(t){return this.calendarId=t,this}withOptions(t){return this._options=t,this}withCustomContent(t){return this._customContent=t,this}}const Xe=(e,t)=>{const r=new ze(t.config,e.id,e.start,e.end).withTitle(e.title).withPeople(e.people).withCalendarId(e.calendarId).withForeignProperties(JSON.parse(JSON.stringify(e._getForeignProperties()))).withLocation(e.location).withDescription(e.description).withOptions(e._options).withCustomContent(e._customContent).build();return r._nDaysInGrid=e._nDaysInGrid,r};class Be{constructor(t,r){Object.defineProperty(this,"calendarEvent",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"$app",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"allDayElements",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentDragoverDate",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"eventNDays",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"originalStart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"MONTH_DAY_CLASS_NAME",{enumerable:!0,configurable:!0,writable:!0,value:"sx__month-grid-day"}),Object.defineProperty(this,"MONTH_DAY_SELECTOR",{enumerable:!0,configurable:!0,writable:!0,value:`.${this.MONTH_DAY_CLASS_NAME}`}),Object.defineProperty(this,"DAY_DRAGOVER_CLASS_NAME",{enumerable:!0,configurable:!0,writable:!0,value:"sx__month-grid-day--dragover"}),Object.defineProperty(this,"handleDragOver",{enumerable:!0,configurable:!0,writable:!0,value:n=>{n.preventDefault();let a=n.target;if((!(a instanceof HTMLDivElement)||!a.classList.contains(this.MONTH_DAY_CLASS_NAME))&&(a=n.target.closest(this.MONTH_DAY_SELECTOR)),this.currentDragoverDate===a.dataset.date)return;this.currentDragoverDate=a.dataset.date;const s=P(this.currentDragoverDate,this.eventNDays-1);this.allDayElements.forEach(u=>{const c=u.dataset.date;c>=this.currentDragoverDate&&c<=s?u.classList.add(this.DAY_DRAGOVER_CLASS_NAME):u.classList.remove(this.DAY_DRAGOVER_CLASS_NAME)})}}),Object.defineProperty(this,"handleDragEnd",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.allDayElements.forEach(n=>{n.removeEventListener("dragover",this.handleDragOver),n.classList.remove(this.DAY_DRAGOVER_CLASS_NAME)}),this.setCalendarEventPointerEventsTo("auto"),this.updateCalendarEvent()}}),Object.defineProperty(this,"setCalendarEventPointerEventsTo",{enumerable:!0,configurable:!0,writable:!0,value:n=>{var a;((a=this.$app.elements.calendarWrapper)===null||a===void 0?void 0:a.querySelectorAll(".sx__event")).forEach(s=>{String(s.dataset.eventId)!==String(this.calendarEvent.id)&&(s.style.pointerEvents=n)})}}),Object.defineProperty(this,"updateCalendarEvent",{enumerable:!0,configurable:!0,writable:!0,value:()=>{const n=Xe(this.calendarEvent,this.$app),a=le(g(this.calendarEvent.start),g(this.currentDragoverDate));n.start=P(n.start,a),n.end=P(n.end,a),Z(this.$app,n,this.originalStart)}}),this.originalStart=this.calendarEvent.start,this.allDayElements=r.elements.calendarWrapper.querySelectorAll(this.MONTH_DAY_SELECTOR),this.eventNDays=le(this.calendarEvent.start,this.calendarEvent.end)+1,this.init()}init(){document.addEventListener("dragend",this.handleDragEnd,{once:!0}),this.allDayElements.forEach(t=>{t.addEventListener("dragover",this.handleDragOver)}),this.setCalendarEventPointerEventsTo("none")}}const ke=(e,t)=>(t.name=e,t);class We{onRender(t){t.elements.calendarWrapper&&(t.elements.calendarWrapper.dataset.hasDnd="true")}constructor(t){Object.defineProperty(this,"minutesPerInterval",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:W.DragAndDrop})}createTimeGridDragHandler(t,r){return new $e(t.$app,t.eventCoordinates,t.eventCopy,t.updateCopy,r,this.getTimePointsForIntervalConfig())}getTimePointsForIntervalConfig(){return this.minutesPerInterval===60?100:this.minutesPerInterval===30?50:25}createDateGridDragHandler(t){return new Ge(t.$app,t.eventCoordinates,t.eventCopy,t.updateCopy)}createMonthGridDragHandler(t,r){return new Be(t,r)}}const qe=(e=15)=>ke("dragAndDrop",new We(e)),Je=de({__name:"EditLessonTime",props:{startTime:{},endTime:{},minutesOfLesson:{default:60}},emits:["close","save"],setup(e,{emit:t}){const r=e,n=t,a=R(!1),s=R(!1),u=R(!0),c=Pe({startTime:ne().required("L'Orario di inizio Lezione è obbligatorio").label("Orario di inizio Lezione"),endTime:ne().required("L'Orario di fine Lezione è obbligatorio").label("Orario di fine Lezione")}),{defineField:f,handleSubmit:_}=Me({validationSchema:c}),T=i=>({props:{"error-messages":i.errors}}),[d,E]=f("startTime",T),[p,M]=f("endTime",T),$=_(async i=>{var l,y;if((((l=S.fromHHMM(d.value))==null?void 0:l.getTotalMinutes())??0)>(((y=S.fromHHMM(p.value))==null?void 0:y.getTotalMinutes())??0)){ee.warning("L'orario di inizio lezione deve essere antecedente all'orario di fine lezione");return}n("save",{...i})},i=>{ee.warn("Ci sono alcuni errori! Inserisci correttamente i dati"),console.log(i)});U(r,()=>N(),{immediate:!0}),U(d,()=>o()),U(u,()=>o());function N(){r.startTime&&(d.value=r.startTime),r.endTime&&(p.value=r.endTime),o()}function o(){if(u.value&&r.minutesOfLesson!=null){const i=S.fromHHMM(d.value);if(!i)return;p.value=S.fromITime((i.getTotalMinutes()+r.minutesOfLesson)*60).format()}}return(i,l)=>{const y=m("v-checkbox"),D=m("v-col"),C=m("v-time-picker"),I=m("v-dialog"),j=m("v-text-field"),O=m("v-row"),A=m("v-card-text"),H=m("v-spacer"),x=m("v-btn"),Y=m("v-card-actions"),pe=m("v-card");return F(),z(pe,{title:"Modifica orario lezione",elevation:"2"},{default:v(()=>[h(A,null,{default:v(()=>[h(O,{justify:"space-around"},{default:v(()=>[h(D,{cols:"11",md:"6"},{default:v(()=>[h(y,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=b=>u.value=b),label:"Allinea la data di fine lezione in base alla durata della lezione definita dallo studente"},null,8,["modelValue"])]),_:1}),h(D,{cols:"11",sm:"5"},{default:v(()=>[h(j,B({modelValue:w(d),"onUpdate:modelValue":l[3]||(l[3]=b=>V(d)?d.value=b:null),active:a.value,focus:a.value,label:"Data di inizio"},w(E),{"prepend-icon":"mdi-clock-time-four-outline",readonly:""}),{default:v(()=>[h(I,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=b=>a.value=b),activator:"parent",width:"auto"},{default:v(()=>[a.value?(F(),z(C,{key:0,format:"24hr",modelValue:w(d),"onUpdate:modelValue":l[1]||(l[1]=b=>V(d)?d.value=b:null)},null,8,["modelValue"])):te("",!0)]),_:1},8,["modelValue"])]),_:1},16,["modelValue","active","focus"])]),_:1}),h(D,{cols:"11",sm:"5"},{default:v(()=>[h(j,B({modelValue:w(p),"onUpdate:modelValue":l[6]||(l[6]=b=>V(p)?p.value=b:null),active:s.value,focused:s.value,label:"Data di fine"},w(M),{"prepend-icon":"mdi-clock-time-four-outline",disabled:u.value,readonly:""}),{default:v(()=>[h(I,{modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=b=>s.value=b),activator:"parent",width:"auto"},{default:v(()=>[s.value?(F(),z(C,{key:0,format:"24hr",modelValue:w(p),"onUpdate:modelValue":l[4]||(l[4]=b=>V(p)?p.value=b:null)},null,8,["modelValue"])):te("",!0)]),_:1},8,["modelValue"])]),_:1},16,["modelValue","active","focused","disabled"])]),_:1})]),_:1})]),_:1}),h(Y,null,{default:v(()=>[h(H),h(x,{text:"Annulla",variant:"plain",onClick:l[7]||(l[7]=k(b=>n("close"),["stop"]))}),h(x,{color:"primary",text:"Modifica",variant:"tonal",onClick:k(w($),["stop"])},null,8,["onClick"])]),_:1})]),_:1})}}}),Ke=de({__name:"DailyLessonCalendar",props:re({date:{default:()=>_e.today()},editable:{type:Boolean,default:!1},showDay:{type:Boolean,default:!1},sort:{type:Boolean,default:!1}},{modelValue:{default:[]},modelModifiers:{}}),emits:re(["edit"],["update:modelValue"]),setup(e,{emit:t}){const r=e,n=t,a=be(e,"modelValue"),s=R([]),u=R(!1);U(a,()=>d(),{deep:!0});const c=Ee(),f=Oe(),_=qe(15),T=ye({locale:"it-IT",selectedDate:r.date.toIyyyyMMdd("-"),views:[De()],events:[],plugins:r.editable?[_,c,f]:[_,c],callbacks:{onEventUpdate(o){const i=s.value.find(l=>l.id==o.id);i&&(i.start=o.start,i.end=o.end,M(o))}}});function d(){s.value=E(),s.value.forEach(o=>{o._options||(o._options={}),o._options.disableDND=!r.editable,c.get(o.id)?c.update(o):c.add(o)}),console.log("updateInternalEvents",c.getAll(),r.date),c.getAll().forEach(o=>{s.value.findIndex(l=>l.id==o.id)==-1&&c.remove(o.id)})}function E(){const o=r.date.toIyyyyMMdd("-");return a.value.map(i=>"lessonId"in i?(console.log(i),{id:i.lessonId,start:o+" "+S.fromITime(i.startTime).format(),end:o+" "+S.fromITime(i.endTime).format(),title:`${i.name} ${i.surname} - ${Te[i.lessonDay??0]}`,data:{...i}}):i)}function p(o,i){var I,j;if(!o)return;const l=s.value.find(O=>O.id==o.id);if(!l)return;const y={...o},D=(I=y.start)==null?void 0:I.split(" "),C=(j=y.end)==null?void 0:j.split(" ");l.start=D[0]+" "+i.startTime,l.end=C[0]+" "+i.endTime,M(l),u.value=!1}function M(o){var l,y;const i=a.value.find(D=>"lessonId"in D?D.lessonId==o.id:D.id==o.id);i&&("lessonId"in i?(i.startTime=((l=S.fromHHMM(o.start.split(" ")[1]))==null?void 0:l.toITime())??i.startTime,i.endTime=((y=S.fromHHMM(o.end.split(" ")[1]))==null?void 0:y.toITime())??i.endTime):(i.start=o.start,i.end=o.end),r.sort&&a.value.sort((D,C)=>D.startTime-C.startTime),n("edit"))}function $(){const o=document.getElementsByClassName("sx__calendar-header")[0];o.style.display=o.style.display=="none"?"":"none",N()}function N(o=0){const i=document.getElementsByClassName("sx__week-header")[0];i?i.style.display=r.showDay?"":"none":o>=10?console.error("Unable to hide day header"):setTimeout(()=>N(o+1),10)}return ge(()=>{$(),d()}),(o,i)=>{const l=m("v-spacer"),y=m("v-btn"),D=m("v-dialog"),C=m("v-card-actions"),I=m("v-card"),j=m("v-container");return F(),z(j,null,{default:v(()=>[h(w(we),{"calendar-app":w(T)},{eventModal:v(({calendarEvent:O})=>[h(I,{elevation:"3",title:O.title,subtitle:O.start.split(" ")[1]+" - "+O.end.split(" ")[1],text:O.description},{default:v(()=>[h(C,null,{default:v(()=>[h(l),h(D,{modelValue:u.value,"onUpdate:modelValue":i[2]||(i[2]=A=>u.value=A),transition:"dialog-bottom-transition"},{activator:v(({props:A})=>[h(y,{text:"Chiudi",onClick:i[0]||(i[0]=H=>w(f).close())}),h(y,B({text:"Modifica",color:"primary"},A,{onClick:i[1]||(i[1]=k(()=>{},["stop"]))}),null,16)]),default:v(({isActive:A})=>{var H,x;return[h(Je,{onClose:Y=>A.value=!1,onSave:Y=>p(O,Y),startTime:(H=O.start)==null?void 0:H.split(" ")[1],endTime:(x=O.end)==null?void 0:x.split(" ")[1],minutesOfLesson:O.data.minutesLessonDuration},null,8,["onClose","onSave","startTime","endTime","minutesOfLesson"])]}),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1032,["title","subtitle","text"])]),_:1},8,["calendar-app"])]),_:1})}}}),nt=Ce(Ke,[["__scopeId","data-v-a762334b"]]);export{nt as D,Je as _};
