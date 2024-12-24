var ls=Object.defineProperty;var rs=(N,e,s)=>e in N?ls(N,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):N[e]=s;var J=(N,e,s)=>rs(N,typeof e!="symbol"?e+"":e,s);import{U as W,V as qe,T as z,X as Ne,Y as Ue,d as ze,r as C,u as cs,v as $e,D as be,y as ds,i as ce,s as U,E as xe,a as je,o as Fe,b as m,e as A,c as K,w as y,f as l,m as X,z as T,A as ee,k as us,t as ke,j as ne,g as ue,Z as He,_ as vs,J as ys,h as Pe,F as Te,l as de}from"./index-ReAJFkyG.js";import{L as oe,n as E,y as $,d as te,T as Y,a as fs}from"./model-BjBmgxIT.js";import{D as L,a as Me,v as ve,W as ie,S as ms,L as ps}from"./lesson-group-service-BtlVGGcN.js";import{A as Is,u as gs,D as _s}from"./abstract-repository-DlvEjJ0c.js";import{S as Ls}from"./school-repository-Ck4WOYWa.js";import{u as hs}from"./vee-validate.esm-Bq4EpuXQ.js";import{D as ws,_ as Ds}from"./DailyLessonCalendar-BvNxr8Y0.js";const fe=class fe extends Is{constructor(){super(gs(_s.SCHOOL_RECOVERY_LESSONS))}static get instance(){return this._instance||(this._instance=new fe),this._instance}};J(fe,"_instance",null);let j=fe;const Z=class Z{static get instance(){return this._instance||(this._instance=new Z),this._instance}async computeDailyLessons(e){const s=Array.from(new Set(e.recoveries.flatMap(I=>{var w;return[I.originalLesson.dailyLessonId,(w=I.recoveryLesson)==null?void 0:w.dailyLessonId]}).filter(Boolean))),t=(await Promise.all(s.map(I=>L.instance.get(I)))).filter(Boolean),o=await Me.instance.getStudentsOfSchool(e.schoolId),i=[],d=[],r=[],c=(I,w,x,k,h)=>{x.push({...I,...w,...k,recoveryStatus:h})};return e.recoveries.forEach(I=>{const{originalLesson:w,recoveryLesson:x,status:k}=I,h=t.find(v=>v.id===w.dailyLessonId),g=x?t.find(v=>v.id===x.dailyLessonId):void 0;if(!h){console.warn("Unable to load original daily lesson of a recovery...");return}const p={originalDailyLesson:h,recoveryDailyLesson:g};h.lessons.forEach(v=>{if(v.lessonId!==w.lessonId)return;const P=o.find(S=>S.id===v.studentId);P&&(g?k!=null?c(v,P,r,p,k):c(v,P,d,p):c(v,P,i,p))})}),{recoveryMap:[{type:"unset",recoveries:i},{type:"pending",recoveries:d},{type:"done",recoveries:r}],schoolId:e.schoolId}}async getOrCreate(e){const s=await j.instance.getDoc(e);if(s.exists())return s.data();const n={recoveries:[],schoolId:e};return await j.instance.save(n,e),n}getRecoveryType(e){return!e.status&&!e.recoveryLesson?0:!e.status&&e.recoveryLesson?1:2}addRecoveryByType(e,s,n,t){let o=e.recoveries.findIndex(d=>d.originalLesson.dailyLessonId==s.dailyLessonId&&d.originalLesson.lessonId==s.lessonId);o==-1&&(e.recoveries.push({originalLesson:s}),o=e.recoveries.length-1);const i=e.recoveries[o];n==0?i.originalLesson=t:n==1?i.recoveryLesson=t:i.status=t}removeRecoveryByType(e,s,n){const t=e.recoveries.findIndex(o=>o.originalLesson.dailyLessonId==s.dailyLessonId&&o.originalLesson.lessonId==s.lessonId);if(t!=-1){if(n==0)return e.recoveries.splice(t,1),!0;if(n==1){if(e.recoveries[t].recoveryLesson)return delete e.recoveries[t].recoveryLesson,!0}else if(e.recoveries[t].status)return delete e.recoveries[t].status,!0}return!1}async updateRecovery(e,s,...n){var o;const t=await Z.instance.getOrCreate(s);for await(const i of n){const d=((o=i.recovery)==null?void 0:o.ref)=="original",r=d?{dailyLessonId:i.recovery.lessonRef.dailyLessonId,lessonId:i.recovery.lessonRef.lessonId}:{dailyLessonId:i.dailyLessonId,lessonId:i.lessonId};if(e==0)if(!d)this.removeRecoveryByType(t,r,0);else{const c=oe.PRESENT;this.addRecoveryByType(t,r,2,c)}else if(e==1)if(d){const c={...r};this.removeRecoveryByType(t,r,1),this.addRecoveryByType(t,r,0,c);const I=r.lessonId,w=await L.instance.get(r.dailyLessonId);await F.instance.moveRecoveryRefToUndoneList(w,I)}else{const c={...r};this.addRecoveryByType(t,r,0,c)}else if(e==2)if(!d)this.removeRecoveryByType(t,r,0);else{const c=oe.CANCELLED;this.addRecoveryByType(t,r,2,c)}else if(e==3){if(!d)this.removeRecoveryByType(t,r,0);else if(!this.removeRecoveryByType(t,r,2)){const I={dailyLessonId:i.dailyLessonId,lessonId:i.lessonId};this.addRecoveryByType(t,r,1,I);const w=r.lessonId,x=i.lessonId,k={lessonRef:{...r},ref:"original"},h={lessonRef:{...I},ref:"recovery"},g=await L.instance.get(r.dailyLessonId),p=await L.instance.get(i.dailyLessonId);await F.instance.addRecoveryRef(g,w,h),await F.instance.addRecoveryRef(p,x,k)}}}j.instance.save(t,s)}async scheduleRecovery(e,s){const n=await Z.instance.getOrCreate(e.schoolId),t=await F.instance.createRecoveryLesson(s),o=await L.instance.getDoc(e.originalDailyLesson.id);if(o.exists()){const r=o.data(),c=r.lessons.find(I=>I.lessonId==e.lessonId);c&&(c.recovery={ref:"recovery",lessonRef:{dailyLessonId:t.dailyLessonId,lessonId:t.lessonId}},await L.instance.save(r,r.id))}else console.warn("");const i={dailyLessonId:e.originalDailyLesson.id,lessonId:e.lessonId},d={dailyLessonId:t.dailyLessonId,lessonId:t.lessonId};this.addRecoveryByType(n,i,1,d),j.instance.save(n,e.schoolId)}async cancelRecovery(e,s){var w,x,k,h,g,p;if(!e.recoveryDailyLesson)return;const n=await Z.instance.getOrCreate(e.schoolId);let t,o;const i=[];((w=e.recovery)==null?void 0:w.ref)=="recovery"?(t=e.recovery.lessonRef,o=(k=(x=e.recoveryDailyLesson.lessons.find(v=>v.lessonId==(t==null?void 0:t.lessonId)))==null?void 0:x.recovery)==null?void 0:k.lessonRef):((h=e.recovery)==null?void 0:h.ref)=="original"&&(o=e.recovery.lessonRef,t=(p=(g=e.originalDailyLesson.lessons.find(v=>v.lessonId==(o==null?void 0:o.lessonId)))==null?void 0:g.recovery)==null?void 0:p.lessonRef);const d=await L.instance.get(e.recoveryDailyLesson.id),r=d==null?void 0:d.lessons.findIndex(v=>v.lessonId==(t==null?void 0:t.lessonId));d&&r!=null&&r!=-1&&(d.lessons.splice(r,1),d.lessons.length==0?await L.instance.delete(d.id):await L.instance.save(d,d.id));const c=await L.instance.get(e.originalDailyLesson.id),I=c==null?void 0:c.lessons.findIndex(v=>v.lessonId==(o==null?void 0:o.lessonId));c&&I!=null&&I!=-1&&(delete c.lessons[I].recovery,await L.instance.save(c,c.id)),o&&(i.push(2,1),s&&i.push(0),i.forEach(v=>this.removeRecoveryByType(n,o,v)),await j.instance.save(n,e.schoolId))}};J(Z,"_instance",null);let Re=Z;const me=class me{static get instance(){return this._instance||(this._instance=new me),this._instance}async getStudentLesson(e,s){s??(s=e.lessons.map(t=>t.studentId));const n=await Me.instance.getStudentsOfSchoolWithIds(e.schoolId,s);return e.lessons.map(t=>{const o=n.find(i=>i.id==t.studentId);return{...t,...o}})}};J(me,"_instance",null);let Se=me;const ae=class ae{static get instance(){return this._instance||(this._instance=new ae),this._instance}async getDailyLessonOfSchoolByDate(e,s){const n=W(E("schoolId"),"==",e),t=W(E("date"),"==",s);return L.instance.getAll(n,t)}async getDailyLessonOfSchoolFromDate(e,s,n){const t=[],o=W(E("schoolId"),"==",e),i=W(E("date"),">=",s);return t.push(o,i),n&&t.push(qe(E("date"),n)),L.instance.getAll(...t)}async getOrCreateDailyLessonId(e,s){return s instanceof Date?this.createDailyLessonByDate(e,s):this.handleLessonProjection(e,s)}async handleLessonProjection(e,s){if(!s.dailyLessonId){const n=this.buildDailyLessonFromProjection(e.schoolId,s);return L.instance.save(n)}return s.dailyLessonId}buildDailyLessonFromProjection(e,s){return{date:s.date.toIyyyyMMdd(),schoolId:e,lessons:s.lessons.map(n=>({lessonId:ve(),status:oe.NONE,studentId:n.studentId,startTime:n.startTime,endTime:n.endTime,createdAt:z.now(),updatedAt:z.now()}))}}async createDailyLessonByDate(e,s){var i;const n=$.fromDate(s).toIyyyyMMdd(),t=await ae.instance.getDailyLessonOfSchoolByDate(e.schoolId,n);if((i=t==null?void 0:t[0])!=null&&i.id)return t[0].id;const o=this.buildDailyLessonFromWeeklyOrEmpty(e,s,n);return L.instance.save(o)}buildDailyLessonFromWeeklyOrEmpty(e,s,n){const t=e.weeklyLessons.find(o=>o.dayOfWeek===s.getDay());return t?{date:n,schoolId:e.schoolId,lessons:t.schedule.map(o=>({lessonId:ve(),status:oe.NONE,studentId:o.studentId,startTime:o.startTime,endTime:o.endTime,createdAt:z.now(),updatedAt:z.now()}))}:{date:n,schoolId:e.schoolId,lessons:[]}}async removeRecoveryLesson(e){const s=await L.instance.getDoc(e.dailyLessonId);if(s.exists()){const n=s.data(),t=n.lessons.findIndex(o=>o.lessonId==e.lessonId);if(t!=-1){const o=n.lessons.splice(t,1)[0];o.recovery||console.warn("Deleting a lesson not marked as recovery lesson!",o),L.instance.save(n,n.id)}}}async createRecoveryLesson(e){const s={lessonId:ve(),status:oe.NONE,studentId:e.studentId,startTime:e.startTime,endTime:e.endTime,recovery:{ref:"original",lessonRef:{dailyLessonId:e.originalDailyLessonId,lessonId:e.originalLessonId}},createdAt:z.now(),updatedAt:z.now()},n=await ye.instance.getSchoolLessons(e.schoolId,e.date),t=await this.getOrCreateDailyLessonId(n,e.date),o=await L.instance.get(t);return o.lessons.push(s),await L.instance.save(o,o.id),{...s,dailyLessonId:o.id}}async removeRecoveryRef(e,s){const n=e.lessons.find(t=>t.lessonId==s);n&&n.recovery&&(delete n.recovery,await L.instance.save(e,e.id))}async moveRecoveryRefToUndoneList(e,s){const n=e.lessons.find(t=>t.lessonId==s);if(n&&n.recovery){const t={...n.recovery.lessonRef};n.undoneRecoveryRef||(n.undoneRecoveryRef=[]),n.undoneRecoveryRef.push(t),delete n.recovery,await L.instance.save(e,e.id)}}async addRecoveryRef(e,s,n){const t=e.lessons.find(o=>o.lessonId==s);t&&(t.recovery=n,await L.instance.save(e,e.id))}async deleteStudentLesson(e,s,n){const t=s.lessons.findIndex(o=>o.studentId==e.id)??-1;if(t==-1)return!1;try{const o=s.lessons[t];if(o.recovery){if(o.recovery.ref=="original"){const i=await L.instance.get(o.recovery.lessonRef.dailyLessonId),d=s;if(!i)return console.warn("Unable to cancel recovery because original daily lesson does not exist"),!1;const r={...e,originalDailyLesson:i,recoveryDailyLesson:d};await Re.instance.cancelRecovery(r,n)}else if(o.recovery.ref=="recovery"){const i=await L.instance.get(o.recovery.lessonRef.dailyLessonId);if(!i)return console.warn("Unable to cancel recovery because recovery daily lesson does not exist"),!1;const r=(await Se.instance.getStudentLesson(i)).find(c=>c.lessonId==o.recovery.lessonRef.lessonId);if(!r)return console.warn("Unable to cancel recovery because recovery student lesson does not exist"),!1;await this.deleteStudentLesson(r,i,!0),s.lessons.splice(t,1),await L.instance.save(s,s.id)}}return!0}catch{return!1}}};J(ae,"_instance",null);let F=ae;const pe=class pe{static get instance(){return this._instance||(this._instance=new pe),this._instance}async getWeeklyLessonOfSchool(e){const s=W(E("schoolId"),"==",e);return ie.instance.getAll(s)}observeWeekLessonOfSchool(e){const s=W(E("schoolId"),"==",e),n=qe(E("dayOfWeek"));return ie.instance.observeAll(s,n)}};J(pe,"_instance",null);let Oe=pe;const Ie=class Ie{static get instance(){return this._instance||(this._instance=new Ie),this._instance}async deleteById(e){const s=Ne(Ue()),n=await Ls.instance.getDoc(e);s.delete(n.ref),(await this.getSchoolRelations(e)).forEach(t=>s.delete(t)),await s.commit()}async delete(e){const s=Ne(Ue()),n=e.id;s.delete(e),(await this.getSchoolRelations(n)).forEach(t=>s.delete(t)),await s.commit()}async getSchoolRelations(e){const s=[];return(await ms.instance.getAllDocs(W(E("schoolId"),"==",e))).forEach(d=>s.push(d.ref)),(await ie.instance.getAllDocs(W(E("schoolId"),"==",e))).forEach(d=>s.push(d.ref)),(await L.instance.getAllDocs(W(E("schoolId"),"==",e))).forEach(d=>s.push(d.ref)),(await j.instance.getAllDocs(W(E("schoolId"),"==",e))).forEach(d=>s.push(d.ref)),s}async getSchoolLessons(e,s){const n=s instanceof Date?$.fromDate(s).toIyyyyMMdd():s,t=await F.instance.getDailyLessonOfSchoolFromDate(e,n,"desc"),o=await Oe.instance.getWeeklyLessonOfSchool(e);return{dailyLessons:t,weeklyLessons:o,schoolId:e}}};J(Ie,"_instance",null);let ye=Ie;const bs={key:1,class:"text-grey text-caption align-self-center"},Ts=ze({__name:"WeekLessonEditor",props:{school:{default:()=>({id:"1"})},edit:{type:Boolean},initialWeekLesson:{}},emits:["close","save"],setup(N,{emit:e}){const s=e,n=N,t=[];let o;const i=C([]),d=C([]),r=C([]),c=C([]),I=C(!1),w=C(!1),x=C(!1),k=cs({dayOfWeek:$e().required("Il Giorno è obbligatorio").label("Giorno"),from:be().required("La Data di Inizio delle lezioni settimanali è obbligatoria").label("Dal"),to:be().required("La Data di Fine delle lezioni settimanali è obbligatoria").label("Al"),excludeDates:ds().of(be()).label("Giorni da Escludere").nullable().optional(),startingTime:$e().required("L'Orario della prima Lezione è obbligatorio").label("Orario della prima Lezione")}),{defineField:h,handleSubmit:g}=hs({validationSchema:k}),p=u=>({props:{"error-messages":u.errors}}),[v,P]=h("dayOfWeek",p),[S,ge]=h("from",p),[B,_e]=h("to",p),[q,le]=h("excludeDates",p),[O,Le]=h("startingTime",p);let H=!1;const G=C([]),he=g(async u=>{Je()},u=>{ce.warn("Ci sono alcuni errori! Inserisci correttamente i dati"),console.log(u)});U(()=>n.initialWeekLesson,()=>Ee()),U(v,()=>we()),U(S,()=>we()),U(B,()=>we()),U(c,()=>Ce()),U(O,()=>{Ve(),H=!1}),U(v,async()=>await Be()),U(G,()=>Ge(),{deep:!0});const se=xe(()=>c.value.length===r.value.length),R=xe(()=>c.value.length>0);function b(){se.value?c.value=[]:c.value=r.value.slice()}function Ce(){var u;for(const a of c.value)if(i.value.findIndex(_=>_.studentId===a.id)===-1){const _=i.value.reduce((Q,re)=>re.endTime>Q?re.endTime:Q,((u=Y.fromHHMM(O.value))==null?void 0:u.getTotalMinutes())??0),M=a.minutesLessonDuration||0,V=_+M*60;i.value.push({lessonId:ve(),studentId:a.id,startTime:_,endTime:V})}for(const a of[...i.value])if(c.value.findIndex(_=>_.id==a.studentId)==-1){const _=i.value.indexOf(a);i.value.splice(_,1)}Ve()}function Ve(){var a;if(!H&&i.value.length>0){i.value.sort((M,V)=>M.startTime-V.startTime);const _=(((a=Y.fromHHMM(O.value))==null?void 0:a.getTotalMinutes())??0)*60-i.value[0].startTime;i.value.forEach(M=>{M.startTime+=_,M.endTime+=_})}const u=$.today();G.value=i.value.map(f=>{const _=De(f.studentId);return{id:f.lessonId,start:u.toIyyyyMMdd("-")+" "+Y.fromITime(f.startTime).format(),end:u.toIyyyyMMdd("-")+" "+Y.fromITime(f.endTime).format(),title:`${Ye(f.studentId)} - ${Xe(f.studentId)}`,data:{...f,..._}}})}function Ge(){i.value=G.value.map(u=>{const a=u.start.split(" ")[1],f=u.end.split(" ")[1];return{lessonId:u.data.lessonId,startTime:Y.fromHHMM(a).toITime(),endTime:Y.fromHHMM(f).toITime(),studentId:u.data.studentId}})}function Ee(){if(n.initialWeekLesson){const u=JSON.parse(JSON.stringify(n.initialWeekLesson));v.value=te[u.dayOfWeek],S.value=$.fromIyyyyMMdd(u.from).toDate(),B.value=$.fromIyyyyMMdd(u.to).toDate(),q.value=u.exclude.map(f=>$.fromIyyyyMMdd(f).toDate()),i.value=u.schedule;const a=i.value.map(f=>f.studentId);if(c.value=r.value.filter(f=>a.includes(f.id)),i.value.length>0){H=!0;const f=i.value[0].startTime;O.value=Y.fromITime(f).format()}}}function we(){if(v.value===void 0||S.value===void 0||B.value===void 0)return;d.value=[];const u=te.indexOf(v.value);let a=new Date(S.value);for(;a<=B.value;){if(a.getDay()===u){const f=new Date(a);d.value.push({name:fs(f),value:f})}a.setDate(a.getDate()+1)}}async function Je(u){var f,_,M;w.value=!0;const a={schoolId:n.school.id,dayOfWeek:te.indexOf(v.value),from:$.fromDate(S.value).toIyyyyMMdd(),to:$.fromDate(B.value).toIyyyyMMdd(),exclude:((f=q.value)==null?void 0:f.map(V=>$.fromDate(V).toIyyyyMMdd()))??[],schedule:i.value.sort((V,Q)=>V.startTime-Q.startTime),createdAt:n.edit?(_=n.initialWeekLesson)==null?void 0:_.createdAt:z.now(),updatedAt:z.now()};try{n.edit&&((M=n.initialWeekLesson)==null?void 0:M.id)!=null?(await ie.instance.save(a,n.initialWeekLesson.id),ce.success("Lezione Settimanale Aggiornata")):(await ie.instance.save(a),ce.success("Lezione Settimanale Creata")),s("save",a)}catch(V){s("save"),ce.error("Errore durante il salvataggio"),console.error("Error adding document (schools): ",V)}finally{w.value=!1}}function De(u){return r.value.find(a=>a.id==u)}function Ye(u){let a;return typeof u=="string"?a=De(u):a=u,`${a==null?void 0:a.name} ${a==null?void 0:a.surname}`}function Xe(u){let a;return typeof u=="string"?a=De(u):a=u,te[(a==null?void 0:a.lessonDay)??0]}async function Be(){o==null||o.unsubscribe(),x.value=!0;const u=new Promise((a,f)=>{o=Me.instance.observeStudentsOfSchool(n.school.id).subscribe({next:_=>{r.value=_,x.value=!1,a()},error:_=>{x.value=!1,f(_)}})});t.push(o),await u}return je(()=>{t.forEach(u=>u.unsubscribe())}),Fe(async()=>{await Be(),Ee()}),(u,a)=>{const f=m("v-select"),_=m("v-col"),M=m("v-row"),V=m("v-date-input"),Q=m("v-chip"),re=m("v-time-picker"),Ze=m("v-dialog"),Ke=m("v-text-field"),Qe=m("v-checkbox-btn"),es=m("v-list-item"),ss=m("v-divider"),ts=m("v-form"),ns=m("v-card-text"),os=m("v-spacer"),Ae=m("v-btn"),as=m("v-card-actions"),is=m("v-card");return A(),K(is,{title:"Lezione Settimanale"},{default:y(()=>[l(ns,null,{default:y(()=>[l(ts,{class:"ma-2"},{default:y(()=>[l(M,{class:"my-1 justify-center"},{default:y(()=>[l(_,{class:"px-2"},{default:y(()=>[l(f,X({modelValue:T(v),"onUpdate:modelValue":a[0]||(a[0]=D=>ee(v)?v.value=D:null)},T(P),{items:T(te),label:"Giorno",required:""}),null,16,["modelValue","items"])]),_:1})]),_:1}),l(M,{class:"my-1 justify-center"},{default:y(()=>[l(_,{class:"px-2",cols:"12",md:"4"},{default:y(()=>[l(V,X({max:T(B),modelValue:T(S),"onUpdate:modelValue":a[1]||(a[1]=D=>ee(S)?S.value=D:null)},T(ge),{label:"Dal",inputmode:"none"}),null,16,["max","modelValue"])]),_:1}),l(_,{class:"px-2",cols:"12",md:"4"},{default:y(()=>[l(V,X({min:T(S),modelValue:T(B),"onUpdate:modelValue":a[2]||(a[2]=D=>ee(B)?B.value=D:null)},T(_e),{label:"Al",inputmode:"none"}),null,16,["min","modelValue"])]),_:1}),l(_,{class:"px-2",cols:"12",md:"4"},{default:y(()=>[l(f,X({modelValue:T(q),"onUpdate:modelValue":a[3]||(a[3]=D=>ee(q)?q.value=D:null)},T(le),{items:d.value,label:"Giorni da Escludere",multiple:"","item-title":"name","item-value":"value","no-data-text":"Nessuna Data Disponibile",clearable:""}),{selection:y(({item:D,index:We})=>[We<2?(A(),K(Q,{key:0},{default:y(()=>[us("span",null,ke(D.title),1)]),_:2},1024)):ne("",!0),We===2?(A(),ue("span",bs," (+"+ke(T(q).length-2)+" others) ",1)):ne("",!0)]),_:1},16,["modelValue","items"])]),_:1})]),_:1}),l(M,{class:"my-1 justify-center"},{default:y(()=>[l(_,{class:"px-2",cols:"12",md:"6"},{default:y(()=>[l(Ke,X({modelValue:T(O),"onUpdate:modelValue":a[6]||(a[6]=D=>ee(O)?O.value=D:null)},T(Le),{active:I.value,focused:I.value,inputmode:"none",label:"Orario della prima Lezione","prepend-icon":"mdi-clock-time-four-outline",readonly:""}),{default:y(()=>[l(Ze,{modelValue:I.value,"onUpdate:modelValue":a[5]||(a[5]=D=>I.value=D),activator:"parent",width:"auto"},{default:y(()=>[I.value?(A(),K(re,{key:0,modelValue:T(O),"onUpdate:modelValue":a[4]||(a[4]=D=>ee(O)?O.value=D:null),format:"24hr"},null,8,["modelValue"])):ne("",!0)]),_:1},8,["modelValue"])]),_:1},16,["modelValue","active","focused"])]),_:1}),l(_,{class:"px-2",cols:"12",md:"6"},{default:y(()=>[l(f,{modelValue:c.value,"onUpdate:modelValue":a[7]||(a[7]=D=>c.value=D),items:r.value,label:"Studenti","item-title":"name","item-value":"id","return-object":!0,multiple:"","no-data-text":"Nessuno studente disponibile per questa scuola"},He({_:2},[r.value.length>1?{name:"prepend-item",fn:y(()=>[l(es,{title:"Seleziona tutti",onClick:b},{prepend:y(()=>[l(Qe,{color:R.value?"indigo-darken-4":void 0,indeterminate:R.value&&!se.value,"model-value":se.value},null,8,["color","indeterminate","model-value"])]),_:1}),l(ss,{class:"mt-2"})]),key:"0"}:void 0]),1032,["modelValue","items"])]),_:1})]),_:1})]),_:1}),l(ws,{modelValue:G.value,"onUpdate:modelValue":a[8]||(a[8]=D=>G.value=D),editable:""},null,8,["modelValue"])]),_:1}),l(as,null,{default:y(()=>[l(os),l(Ae,{text:"Chiudi",onClick:a[9]||(a[9]=D=>s("close"))}),l(Ae,{text:"Salva",color:"primary",onClick:T(he),loading:w.value},null,8,["onClick","loading"])]),_:1})]),_:1})}}}),xs=ze({__name:"LessonView",props:{school:{}},setup(N){const e=ys(),s=vs(),n=N,t=[],o=C([]),i=C(),d=C(!1),r=C(!1),c=C(!1),I={dailyLessons:[],weeklyLessons:[],schoolId:n.school.id},w=xe(()=>n.school==null||d.value||r.value||c.value);U(n.school,()=>h());function x(g){return g.next?"primary":g.pending?"warning":g.recovery?"info":"grey-lighten-1"}async function k(g){const p=await F.instance.getOrCreateDailyLessonId(I,g);e.push(`/lesson/${p}`)}async function h(){c.value=!0;const g=new Date(new Date().toDateString()),p=s.addMonths(g,-12),v=await ye.instance.getSchoolLessons(n.school.id,p);o.value=await ps.instance.getGroupedLessons(v),c.value=!1}return Fe(async()=>{await h()}),je(()=>{t.forEach(g=>g==null?void 0:g())}),(g,p)=>{const v=m("v-btn"),P=m("v-date-picker"),S=m("v-col"),ge=m("v-row"),B=m("v-card-text"),_e=m("v-spacer"),q=m("v-card-actions"),le=m("v-card"),O=m("v-dialog"),Le=m("v-list-subheader"),H=m("v-icon"),G=m("v-avatar"),he=m("v-list-item"),se=m("v-list");return A(),K(le,{title:"Lezioni",elevation:"3",loading:w.value},{append:y(()=>[l(O,{transition:"dialog-bottom-transition",class:"justify-center"},{activator:y(({props:R})=>[l(v,X({icon:"mdi-calendar",variant:"text",disabled:!g.school},R),null,16,["disabled"])]),default:y(({isActive:R})=>[l(le,{maxWidth:"400px"},{default:y(()=>[l(B,null,{default:y(()=>[l(ge,{class:"justify-center"},{default:y(()=>[l(S,{cols:"auto"},{default:y(()=>[l(P,{modelValue:i.value,"onUpdate:modelValue":p[0]||(p[0]=b=>i.value=b)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(q,null,{default:y(()=>[l(_e),l(v,{text:"Chiudi",onClick:b=>R.value=!1},null,8,["onClick"]),l(v,{text:"Ok",color:"primary",onClick:p[1]||(p[1]=b=>k(i.value)),disabled:!i.value},null,8,["disabled"])]),_:2},1024)]),_:2},1024)]),_:1}),l(v,{icon:"mdi-refresh",variant:"text",disabled:!g.school||c.value,onClick:h},null,8,["disabled"]),l(O,{transition:"dialog-bottom-transition",fullscreen:""},{activator:y(({props:R})=>[l(v,X({icon:"mdi-pencil",variant:"text"},R,{disabled:!g.school}),null,16,["disabled"])]),default:y(({isActive:R})=>[l(Ts,{school:g.school,onClose:b=>{R.value=!1,h()}},null,8,["school","onClose"])]),_:1}),l(v,{icon:"mdi-eye-arrow-right",variant:"text",to:"/lessons/"+g.school.id},null,8,["to"])]),default:y(()=>[l(se,{lines:"two"},{default:y(()=>[(A(!0),ue(Te,null,Pe(o.value,R=>(A(),ue(Te,{key:R.month},[l(Le,{inset:""},{default:y(()=>[de(ke(R.month),1)]),_:2},1024),(A(!0),ue(Te,null,Pe(R.lessons,b=>(A(),K(he,{key:b.date.toString(),title:b.date.format(),onClick:Ce=>k(b),baseColor:b.next?"primary":""},He({prepend:y(()=>[l(G,{color:x(b)},{default:y(()=>[l(H,{color:"white"},{default:y(()=>p[2]||(p[2]=[de("mdi-calendar")])),_:1})]),_:2},1032,["color"])]),_:2},[b.pending||b.recovery?{name:"append",fn:y(()=>[b.pending?(A(),K(H,{key:0,color:"warning"},{default:y(()=>p[3]||(p[3]=[de("mdi-alert")])),_:1})):ne("",!0),b.recovery?(A(),K(H,{key:1,color:"info"},{default:y(()=>p[4]||(p[4]=[de("mdi-alpha-r-circle")])),_:1})):ne("",!0)]),key:"0"}:void 0]),1032,["title","onClick","baseColor"]))),128))],64))),128))]),_:1})]),_:1},8,["loading"])}}}),ks=Ds(xs,[["__scopeId","data-v-f0554a03"]]),As=Object.freeze(Object.defineProperty({__proto__:null,default:ks},Symbol.toStringTag,{value:"Module"}));export{ks as L,Re as S,ye as a,As as b};
