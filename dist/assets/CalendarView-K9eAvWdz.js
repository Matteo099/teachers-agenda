import{D as d}from"./DailyLessonCalendar-BfP80PJ-.js";import{y as c,T as y}from"./schedule-x-vue-BELKaWgn.js";import{d as i,r as l,o as m,c as f,e as u}from"./index-DqQs06DF.js";import"./index.esm-B6FxmsNf.js";const x=i({__name:"CalendarView",setup(p){const o=l([]);async function n(){const a=c.today();let e=y.fromITime(13*3600+40*60);for(let t=1;t<=6;t++){const s=e.format();e=e.add({hour:1});const r=e.format();o.value.push({id:t,title:"Studente "+t,start:a.toIyyyyMMdd("-")+" "+s,end:a.toIyyyyMMdd("-")+" "+r})}console.log(o.value)}return m(async()=>{await n()}),(a,e)=>(u(),f(d,{events:o.value,editable:""},null,8,["events"]))}});export{x as default};
