var Z=Object.defineProperty;var G=(f,e,s)=>e in f?Z(f,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):f[e]=s;var D=(f,e,s)=>G(f,typeof e!="symbol"?e+"":e,s);import{d as ee,r as $,b as _,e as se,c as ne,w as O,M as te,C as oe,D as ae,f as E,k as b,l as k,t as ie,i as z,H as g,I as u,N as J,T as B,O as H,P as Y}from"./index-DqQs06DF.js";import{A as re,u as ce,D as le,S as de}from"./school-repository-mPHwUDC0.js";import{D as l,a as K,v as W,W as C,S as ye}from"./v4-DOMLpR64.js";import{L as x,y as Q}from"./schedule-x-vue-BELKaWgn.js";const me=ee({__name:"DeleteDialog",props:{objName:{default:"Oggetto"},useToast:{type:Boolean,default:!0},name:{},onDelete:{}},emits:["delete"],setup(f,{emit:e}){const s=f,t=$(!1),n=$(!1);async function o(){var a;n.value=!0;const i=await((a=s.onDelete)==null?void 0:a.call(s))??!1;s.useToast&&(i?z.success(`${s.objName} eliminato/a`):z.warning("Errore durante l'eliminazione")),n.value=!1,t.value=i}return(i,a)=>{const r=_("v-card-text"),c=_("v-btn"),d=_("v-spacer"),v=_("v-card-actions"),L=_("v-card"),m=_("v-dialog");return se(),ne(m,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=I=>t.value=I)},{activator:O(({props:I})=>[te(i.$slots,"activator",oe(ae({props:I})))]),default:O(()=>[E(L,{"prepend-icon":"mdi-alert",class:"mx-auto","max-width":"500",title:"Elimina "+i.objName},{default:O(()=>[E(r,null,{default:O(()=>[b("p",null,[a[2]||(a[2]=k("Sei sicuro di voler eliminare ")),b("b",null,ie(i.name),1),a[3]||(a[3]=k("?"))]),a[4]||(a[4]=b("br",null,null,-1)),a[5]||(a[5]=b("p",null,[k("Dopo avere eliminato la risorsa "),b("b",null,"NON"),k(" è più possibile recuperare i dati!")],-1))]),_:1}),E(v,null,{default:O(()=>[E(c,{text:"Annulla",onClick:a[0]||(a[0]=I=>t.value=!1)}),E(d),E(c,{color:"surface-variant",text:"Elimina",variant:"flat",onClick:o,loading:n.value},null,8,["loading"])]),_:1})]),_:1},8,["title"])]),_:3},8,["modelValue"])}}}),A=class A extends re{constructor(){super(e=>ce(le.RECOVERY_LESSONS,e))}static get instance(){return this._instance||(this._instance=new A),this._instance}};D(A,"_instance",null);let w=A;var fe=(f=>(f[f.SET_PRESENT=0]="SET_PRESENT",f[f.SET_ABSENT=1]="SET_ABSENT",f[f.CANCEL=2]="CANCEL",f[f.RESET=3]="RESET",f))(fe||{});const R=class R{static get instance(){return this._instance||(this._instance=new R),this._instance}async computeDailyLessons(e){const s=Array.from(new Set(e.recoveries.flatMap(d=>{var v;return[d.originalLesson.dailyLessonId,(v=d.recoveryLesson)==null?void 0:v.dailyLessonId]}).filter(Boolean))),n=(await Promise.all(s.map(d=>l.instance.get(d)))).filter(Boolean),o=await K.instance.getStudentsOfSchool(e.schoolId),i=[],a=[],r=[],c=(d,v,L,m,I)=>{L.push({...d,...v,...m,recoveryStatus:I})};return e.recoveries.forEach(d=>{const{originalLesson:v,recoveryLesson:L,status:m}=d,I=n.find(y=>y.id===v.dailyLessonId),h=L?n.find(y=>y.id===L.dailyLessonId):void 0;if(!I){console.warn("Unable to load original daily lesson of a recovery...");return}const p={originalDailyLesson:I,recoveryDailyLesson:h};I.lessons.forEach(y=>{if(y.lessonId!==v.lessonId)return;const N=o.find(X=>X.id===y.studentId);N&&(h?m!=null?c(y,N,r,p,m):c(y,N,a,p):c(y,N,i,p))})}),{recoveryMap:[{type:"unset",recoveries:i},{type:"pending",recoveries:a},{type:"done",recoveries:r}],schoolId:e.schoolId}}async getOrCreate(e){const s=await w.instance.getDoc(e);if(s.exists())return s.data();const t={recoveries:[],schoolId:e};return await w.instance.save(t,e),t}getRecoveryType(e){return!e.status&&!e.recoveryLesson?0:!e.status&&e.recoveryLesson?1:2}addRecoveryByType(e,s,t,n){let o=e.recoveries.findIndex(a=>a.originalLesson.dailyLessonId==s.dailyLessonId&&a.originalLesson.lessonId==s.lessonId);o==-1&&(e.recoveries.push({originalLesson:s}),o=e.recoveries.length-1);const i=e.recoveries[o];t==0?i.originalLesson=n:t==1?i.recoveryLesson=n:i.status=n}removeRecoveryByType(e,s,t){const n=e.recoveries.findIndex(o=>o.originalLesson.dailyLessonId==s.dailyLessonId&&o.originalLesson.lessonId==s.lessonId);if(n!=-1){if(t==0)return e.recoveries.splice(n,1),!0;if(t==1){if(e.recoveries[n].recoveryLesson)return delete e.recoveries[n].recoveryLesson,!0}else if(e.recoveries[n].status)return delete e.recoveries[n].status,!0}return!1}async updateRecovery(e,s,...t){var o;const n=await R.instance.getOrCreate(s);for await(const i of t){const a=((o=i.recovery)==null?void 0:o.ref)=="original",r=a?{dailyLessonId:i.recovery.lessonRef.dailyLessonId,lessonId:i.recovery.lessonRef.lessonId}:{dailyLessonId:i.dailyLessonId,lessonId:i.lessonId};if(e==0)if(!a)this.removeRecoveryByType(n,r,0);else{const c=x.PRESENT;this.addRecoveryByType(n,r,2,c)}else if(e==1)if(a){const c={...r};this.removeRecoveryByType(n,r,1),this.addRecoveryByType(n,r,0,c);const d=r.lessonId,v=await l.instance.get(r.dailyLessonId);await T.instance.moveRecoveryRefToUndoneList(v,d)}else{const c={...r};this.addRecoveryByType(n,r,0,c)}else if(e==2)if(!a)this.removeRecoveryByType(n,r,0);else{const c=x.CANCELLED;this.addRecoveryByType(n,r,2,c)}else if(e==3){if(!a)this.removeRecoveryByType(n,r,0);else if(!this.removeRecoveryByType(n,r,2)){const d={dailyLessonId:i.dailyLessonId,lessonId:i.lessonId};this.addRecoveryByType(n,r,1,d);const v=r.lessonId,L=i.lessonId,m={lessonRef:{...r},ref:"original"},I={lessonRef:{...d},ref:"recovery"},h=await l.instance.get(r.dailyLessonId),p=await l.instance.get(i.dailyLessonId);await T.instance.addRecoveryRef(h,v,I),await T.instance.addRecoveryRef(p,L,m)}}}w.instance.save(n,s)}async scheduleRecovery(e,s){const t=await R.instance.getOrCreate(e.schoolId),n=await T.instance.createRecoveryLesson(s),o=await l.instance.getDoc(e.originalDailyLesson.id);if(o.exists()){const r=o.data(),c=r.lessons.find(d=>d.lessonId==e.lessonId);c&&(c.recovery={ref:"recovery",lessonRef:{dailyLessonId:n.dailyLessonId,lessonId:n.lessonId}},await l.instance.save(r,r.id))}else console.warn("");const i={dailyLessonId:e.originalDailyLesson.id,lessonId:e.lessonId},a={dailyLessonId:n.dailyLessonId,lessonId:n.lessonId};this.addRecoveryByType(t,i,1,a),w.instance.save(t,e.schoolId)}async cancelRecovery(e,s){var v,L,m,I,h,p;if(!e.recoveryDailyLesson)return;const t=await R.instance.getOrCreate(e.schoolId);let n,o;const i=[];((v=e.recovery)==null?void 0:v.ref)=="recovery"?(n=e.recovery.lessonRef,o=(m=(L=e.recoveryDailyLesson.lessons.find(y=>y.lessonId==(n==null?void 0:n.lessonId)))==null?void 0:L.recovery)==null?void 0:m.lessonRef):((I=e.recovery)==null?void 0:I.ref)=="original"&&(o=e.recovery.lessonRef,n=(p=(h=e.originalDailyLesson.lessons.find(y=>y.lessonId==(o==null?void 0:o.lessonId)))==null?void 0:h.recovery)==null?void 0:p.lessonRef);const a=await l.instance.get(e.recoveryDailyLesson.id),r=a==null?void 0:a.lessons.findIndex(y=>y.lessonId==(n==null?void 0:n.lessonId));a&&r!=null&&r!=-1&&(a.lessons.splice(r,1),a.lessons.length==0?await l.instance.delete(a.id):await l.instance.save(a,a.id));const c=await l.instance.get(e.originalDailyLesson.id),d=c==null?void 0:c.lessons.findIndex(y=>y.lessonId==(o==null?void 0:o.lessonId));c&&d!=null&&d!=-1&&(delete c.lessons[d].recovery,await l.instance.save(c,c.id)),o&&(i.push(2,1),s&&i.push(0),i.forEach(y=>this.removeRecoveryByType(t,o,y)),await w.instance.save(t,e.schoolId))}};D(R,"_instance",null);let j=R;const q=class q{static get instance(){return this._instance||(this._instance=new q),this._instance}async getStudentLesson(e,s){s??(s=e.lessons.map(n=>n.studentId));const t=await K.instance.getStudentsOfSchoolWithIds(e.schoolId,s);return e.lessons.map(n=>{const o=t.find(i=>i.id==n.studentId);return{...n,...o}})}};D(q,"_instance",null);let F=q;const S=class S{static get instance(){return this._instance||(this._instance=new S),this._instance}async getDailyLessonOfSchoolByDate(e,s){const t=g(u("schoolId"),"==",e),n=g(u("date"),"==",s);return l.instance.getAll(t,n)}async getDailyLessonOfSchoolFromDate(e,s,t){const n=[],o=g(u("schoolId"),"==",e),i=g(u("date"),">=",s);return n.push(o,i),t&&n.push(J(u("date"),t)),l.instance.getAll(...n)}async getOrCreateDailyLessonId(e,s){return s instanceof Date?this.createDailyLessonByDate(e,s):this.handleLessonProjection(e,s)}async handleLessonProjection(e,s){if(!s.dailyLessonId){const t=this.buildDailyLessonFromProjection(e.schoolId,s);return l.instance.save(t)}return s.dailyLessonId}buildDailyLessonFromProjection(e,s){return{date:s.date.toIyyyyMMdd(),schoolId:e,lessons:s.lessons.map(t=>({lessonId:W(),status:x.NONE,studentId:t.studentId,startTime:t.startTime,endTime:t.endTime,createdAt:B.now(),updatedAt:B.now()}))}}async createDailyLessonByDate(e,s){var i;const t=Q.fromDate(s).toIyyyyMMdd(),n=await S.instance.getDailyLessonOfSchoolByDate(e.schoolId,t);if((i=n==null?void 0:n[0])!=null&&i.id)return n[0].id;const o=this.buildDailyLessonFromWeeklyOrEmpty(e,s,t);return l.instance.save(o)}buildDailyLessonFromWeeklyOrEmpty(e,s,t){const n=e.weeklyLessons.find(o=>o.dayOfWeek===s.getDay());return n?{date:t,schoolId:e.schoolId,lessons:n.schedule.map(o=>({lessonId:W(),status:x.NONE,studentId:o.studentId,startTime:o.startTime,endTime:o.endTime,createdAt:B.now(),updatedAt:B.now()}))}:{date:t,schoolId:e.schoolId,lessons:[]}}async removeRecoveryLesson(e){const s=await l.instance.getDoc(e.dailyLessonId);if(s.exists()){const t=s.data(),n=t.lessons.findIndex(o=>o.lessonId==e.lessonId);if(n!=-1){const o=t.lessons.splice(n,1)[0];o.recovery||console.warn("Deleting a lesson not marked as recovery lesson!",o),l.instance.save(t,t.id)}}}async createRecoveryLesson(e){const s={lessonId:W(),status:x.NONE,studentId:e.studentId,startTime:e.startTime,endTime:e.endTime,recovery:{ref:"original",lessonRef:{dailyLessonId:e.originalDailyLessonId,lessonId:e.originalLessonId}},createdAt:B.now(),updatedAt:B.now()},t=await V.instance.getSchoolLessons(e.schoolId,e.date),n=await this.getOrCreateDailyLessonId(t,e.date),o=await l.instance.get(n);return o.lessons.push(s),await l.instance.save(o,o.id),{...s,dailyLessonId:o.id}}async removeRecoveryRef(e,s){const t=e.lessons.find(n=>n.lessonId==s);t&&t.recovery&&(delete t.recovery,await l.instance.save(e,e.id))}async moveRecoveryRefToUndoneList(e,s){const t=e.lessons.find(n=>n.lessonId==s);if(t&&t.recovery){const n={...t.recovery.lessonRef};t.undoneRecoveryRef||(t.undoneRecoveryRef=[]),t.undoneRecoveryRef.push(n),delete t.recovery,await l.instance.save(e,e.id)}}async addRecoveryRef(e,s,t){const n=e.lessons.find(o=>o.lessonId==s);n&&(n.recovery=t,await l.instance.save(e,e.id))}async deleteStudentLesson(e,s,t){const n=s.lessons.findIndex(o=>o.studentId==e.id)??-1;if(n==-1)return!1;try{const o=s.lessons[n];if(o.recovery){if(o.recovery.ref=="original"){const i=await l.instance.get(o.recovery.lessonRef.dailyLessonId),a=s;if(!i)return console.warn("Unable to cancel recovery because original daily lesson does not exist"),!1;const r={...e,originalDailyLesson:i,recoveryDailyLesson:a};await j.instance.cancelRecovery(r,t)}else if(o.recovery.ref=="recovery"){const i=await l.instance.get(o.recovery.lessonRef.dailyLessonId);if(!i)return console.warn("Unable to cancel recovery because recovery daily lesson does not exist"),!1;const r=(await F.instance.getStudentLesson(i)).find(c=>c.lessonId==o.recovery.lessonRef.lessonId);if(!r)return console.warn("Unable to cancel recovery because recovery student lesson does not exist"),!1;await this.deleteStudentLesson(r,i,!0),s.lessons.splice(n,1),await l.instance.save(s,s.id)}}return!0}catch{return!1}}};D(S,"_instance",null);let T=S;const M=class M{static get instance(){return this._instance||(this._instance=new M),this._instance}async getWeeklyLessonOfSchool(e){const s=g(u("schoolId"),"==",e);return C.instance.getAll(s)}async getWeeklyLessonOfSchoolByDayBetweenDate(e,s,t){const n=g(u("schoolId"),"==",e),o=g(u("dayOfWeek"),"==",s),i=g(u("from"),"<=",t),a=g(u("to"),">=",t);return C.instance.getAll(n,o,i,a)}observeWeekLessonOfSchool(e){const s=g(u("schoolId"),"==",e),t=J(u("dayOfWeek"));return C.instance.observeAll(s,t)}};D(M,"_instance",null);let U=M;const P=class P{static get instance(){return this._instance||(this._instance=new P),this._instance}async deleteById(e){const s=H(Y()),t=await de.instance.getDoc(e);s.delete(t.ref),(await this.getSchoolRelations(e)).forEach(n=>s.delete(n)),await s.commit()}async delete(e){const s=H(Y()),t=e.id;s.delete(e),(await this.getSchoolRelations(t)).forEach(n=>s.delete(n)),await s.commit()}async getSchoolRelations(e){const s=[];return(await ye.instance.getAllDocs(g(u("schoolId"),"==",e))).forEach(a=>s.push(a.ref)),(await C.instance.getAllDocs(g(u("schoolId"),"==",e))).forEach(a=>s.push(a.ref)),(await l.instance.getAllDocs(g(u("schoolId"),"==",e))).forEach(a=>s.push(a.ref)),(await w.instance.getAllDocs(g(u("schoolId"),"==",e))).forEach(a=>s.push(a.ref)),s}async getSchoolLessons(e,s){const t=s instanceof Date?Q.fromDate(s).toIyyyyMMdd():s,n=await T.instance.getDailyLessonOfSchoolFromDate(e,t,"desc"),o=await U.instance.getWeeklyLessonOfSchool(e);return{dailyLessons:n,weeklyLessons:o,schoolId:e}}};D(P,"_instance",null);let V=P;export{T as D,fe as L,V as S,U as W,me as _,j as a,w as b,F as c};