import"./index-B7rqJQ63.js";const m=e=>e,d=function(e,t){const r=e.getDay();if(t==r)return e;const n=(t-r+7)%7||7,o=new Date(e);return o.setDate(e.getDate()+n),o},y=function(e,t){const r=e.getDay();if(t==r)return e;const n=(t-r+7)%7||7,o=new Date(e);return o.setDate(e.getDate()-n),o},a=new Intl.DateTimeFormat("it-IT",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"Europe/Rome"}),c=function(e){if(!e)return"";const t=new Date(e);return a.format(t)},g=["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],p=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];class s{constructor(t=0,r=0,n=0){this.hour=t,this.minutes=r,this.seconds=n}static fromITime(t){const r=Math.trunc(t/3600),n=Math.trunc((t-r*3600)/60),o=t-(r*3600+n*60);return new s(r,n,o)}static fromHHMM(t){try{const r=t.split(":");if(r.length!=2)return;const n=parseInt(r[0]),o=parseInt(r[1]);return new s(n,o)}catch{return}}getTotalMinutes(){return this.hour*60+this.minutes}toITime(){return this.hour*3600+this.minutes*60+this.seconds}add(t){return this.hour+=t.hour??0,this.minutes+=t.minutes??0,this.seconds+=t.seconds??0,this}format(){const t=this.hour.toString().padStart(2,"0")||"00",r=this.minutes.toString().padStart(2,"0")||"00",n=this.seconds.toString().padStart(2,"0");return this.seconds!=0?`${t}:${r}:${n}`:`${t}:${r}`}}class i{constructor(t,r,n){this.day=t,this.month=r,this.year=n}static today(){return this.fromDate(new Date)}static fromIyyyyMMdd(t){if(t.length!=8)throw new Error("Unable to parse date, format not correct (yyyyMMdd): "+t);const r=parseInt(t.substring(0,4)),n=parseInt(t.substring(4,6)),o=parseInt(t.substring(6,8));return new i(o,n,r)}toIyyyyMMdd(t="",r=0){return`${this.year.toString().padStart(4,"0")}${t}${(this.month+r).toString().padStart(2,"0")}${t}${this.day.toString().padStart(2,"0")}`}static fromDate(t){const r=t.getFullYear(),n=t.getMonth(),o=t.getDate();return new i(o,n,r)}toDate(){return new Date(this.year,this.month,this.day)}format(){return c(this.toDate())}equals(t){return this.day==t.day&&this.month==t.month&&this.year==t.year}getYear(){return this.year}getMonth(){return this.month}getDay(){return this.day}}var h=(e=>(e[e.NONE=0]="NONE",e[e.PRESENT=1]="PRESENT",e[e.ABSENT=2]="ABSENT",e[e.CANCELLED=3]="CANCELLED",e))(h||{});const D={unset:"Lezioni di Recupero da Programmare",pending:"Lezioni di Recupero Programmate",done:"Lezioni di Recupero Completate"};export{h as L,s as T,c as a,d as b,g as d,p as m,m as n,y as p,D as r,i as y};