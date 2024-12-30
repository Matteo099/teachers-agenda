var O=Object.defineProperty;var v=(I,e,t)=>e in I?O(I,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):I[e]=t;var _=(I,e,t)=>v(I,typeof e!="symbol"?e+"":e,t);import{H as D,I as p,J as w,K as C}from"./index-DN_KyrT2.js";import{y as m,T as x,m as E,L as k}from"./schedule-x-vue-xe1pV1oS.js";import{D as A,v as S,W as B}from"./v4-DJrres8J.js";const T=class T{constructor(){_(this,"today")}static get instance(){return this._instance||(this._instance=new T),this._instance}calculateToday(){const e=new Date(new Date().toDateString()),t=m.fromDate(e);this.today={asDate:e,asString:t.toIyyyyMMdd(),asyyyyMMdd:t,asIyyyyMMdd:t.toIyyyyMMdd()}}async getCalendarLessons(e,t,a){const n=[],o=D(p("schoolId"),"==",e),d=D(p("date"),">=",t.date.toIyyyyMMdd()),c=D(p("date"),"<=",a.date.toIyyyyMMdd()),y=await A.instance.getAll(o,d,c);n.push(...y.flatMap(i=>{const h=m.fromIyyyyMMdd(i.date).toIyyyyMMdd("-",1);return i.lessons.map(M=>({id:S(),title:M.studentId,start:h+" "+x.fromITime(M.startTime).format(),end:h+" "+x.fromITime(M.endTime).format(),data:{date:h}}))}));const l=D(p("schoolId"),"==",e),s=D(p("from"),"<=",a.date.toIyyyyMMdd()),u=D(p("to"),">=",t.date.toIyyyyMMdd()),g=await B.instance.getAll(l,s,u),f=a.date.toDate(),r=t.date.toDate();for(;r<=f&&g.length>0;)g.forEach(i=>{const h=w(r,i.dayOfWeek);if(h>f||h>m.fromIyyyyMMdd(i.to).toDate()||h<m.fromIyyyyMMdd(i.from).toDate())return;const M=m.fromDate(h).toIyyyyMMdd("-",1);n.find(L=>{var q;return((q=L.data)==null?void 0:q.date)==M})||n.push(...i.schedule.map(L=>({id:S(),title:L.studentId,start:M+" "+x.fromITime(L.startTime).format(),end:M+" "+x.fromITime(L.endTime).format()})))}),r.setDate(r.getDate()+7);return n}async getGroupedLessons(e){const t=[];return this.calculateToday(),await this.addLastLessons(e,t,2),this.addUpcomingLessons(e.dailyLessons,e.weeklyLessons,t,4),this.groupLessonsByMonth(t)}async addLastLessons(e,t,a){const n=e.dailyLessons,o=e.weeklyLessons,d=n.filter(s=>s.date<=this.today.asString);d.sort((s,u)=>u.date.localeCompare(s.date)),d.slice(0,a).reverse().forEach(s=>{t.push(this.createLessonProjection(s,!1))});const y=new Date,l=[...o];for(;t.length<a&&l.length>0;)l.forEach(async(s,u)=>{if(t.length>=a)return;const g=C(y,s.dayOfWeek),f=m.fromDate(g),r=f.toIyyyyMMdd();if(s.from>r||r>s.to){l.splice(u,1);return}s.exclude.includes(r)||t.some(i=>i.date.equals(f))||t.push({date:f,pending:!0,next:!1,lessons:s.schedule})}),y.setDate(y.getDate()-7)}addUpcomingLessons(e,t,a,n){const o=new Date,d=a.length+n,c=e.filter(s=>s.date>this.today.asString).sort((s,u)=>s.date.localeCompare(u.date));let y=0;const l=[...t];for(;(l.length>0||c.length>y)&&a.length<d;){if(l.length==0){const s=c[y];a.push(this.createLessonProjection(s,!1)),y++}l.forEach((s,u)=>{if(a.length>=d)return;const g=w(o,s.dayOfWeek),f=m.fromDate(g),r=f.toIyyyyMMdd();if(s.from>r||r>s.to){l.splice(u,1);return}for(;c.length>y&&c[y].date<=r&&a.length<d;){const i=c[y];a.push(this.createLessonProjection(i,!1)),y++}s.exclude.includes(r)||a.length<d&&!a.some(i=>i.date.equals(f))&&a.push({date:f,next:!1,lessons:s.schedule})}),o.setDate(o.getDate()+7)}}groupLessonsByMonth(e){const t=[];let a=!1;return e.sort((n,o)=>n.date.toIyyyyMMdd()>o.date.toIyyyyMMdd()?1:-1).forEach(n=>{const o=n.date.getMonth();let d=t.findIndex(c=>c.month==E[o]);d==-1&&(t.push({month:E[o],lessons:[]}),d=t.length-1),!a&&n.date.toDate()>=this.today.asDate&&(a=!0,n.next=!0),t[d].lessons.push(n)}),t}createLessonProjection(e,t){const a=e.date<=this.today.asString&&e.lessons.some(o=>o.status==k.NONE),n=e.lessons.some(o=>{var d;return((d=o.recovery)==null?void 0:d.ref)=="original"});return{dailyLessonId:e.id,date:m.fromIyyyyMMdd(e.date),recovery:n,pending:a,next:t,lessons:e.lessons}}};_(T,"_instance",null);let W=T;export{W as L};
