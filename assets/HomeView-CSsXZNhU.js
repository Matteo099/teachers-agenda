import{_ as $}from"./SchoolEditor.vue_vue_type_script_setup_true_lang-B56HtjZd.js";import{S as z}from"./school-repository-mPHwUDC0.js";import{d as A,r as m,o as F,a as U,c as d,w as o,i as j,b as l,e as s,f as a,g as f,h as g,F as y,j as E,m as H,k as w,l as I}from"./index-DqQs06DF.js";import"./index.esm-B6FxmsNf.js";const L={class:"text-center ma-4"},q=A({__name:"HomeView",setup(M){let r;const _=m([]),i=m(!1),u=m(!1);function x(t){t&&(u.value=!1)}function k(t){return t.city?`${t.name} (${t.city})`:t.name}async function V(){i.value=!0,r=z.instance.observeAll().subscribe({next:t=>{_.value=t,i.value=!1},error:t=>{j.warning("Impossibile caricare le scuole..."),i.value=!1}})}return F(async()=>{await V()}),U(()=>{r==null||r.unsubscribe()}),(t,n)=>{const b=l("v-skeleton-loader"),c=l("v-col"),p=l("v-row"),S=l("v-expand-transition"),v=l("v-card"),C=l("v-icon"),N=l("v-dialog"),B=l("v-container");return s(),d(B,{fluid:""},{default:o(()=>[a(S,{mode:"out-in"},{default:o(()=>[i.value?(s(),d(p,{key:0,"no-gutters":""},{default:o(()=>[(s(),f(y,null,g(3,e=>a(c,{key:e,cols:"12",sm:"4"},{default:o(()=>[a(b,{class:"ma-2 pa-2",type:"card"})]),_:2},1024)),64))]),_:1})):E("",!0)]),_:1}),a(p,{"no-gutters":""},{default:o(()=>[(s(!0),f(y,null,g(_.value,e=>(s(),d(c,{key:e.name,cols:"12",sm:"4"},{default:o(()=>[a(v,{"append-icon":"mdi-open-in-new",class:"ma-2 pa-2",to:"/school/"+e.id,"prepend-icon":"mdi-town-hall",subtitle:"Visualizza tutti gli aggiornamenti della scuola "+e.name,title:k(e),color:"primary"},null,8,["to","subtitle","title"])]),_:2},1024))),128)),a(c,{cols:"12",sm:"4"},{default:o(()=>[a(N,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=e=>u.value=e),fullscreen:""},{activator:o(({props:e})=>[a(v,H({class:"ma-2 pa-2",color:"secondary"},e),{default:o(()=>[w("div",L,[n[4]||(n[4]=w("p",{class:"text-h6 font-weight"},"Aggiungi una scuola",-1)),a(C,{size:"x-large"},{default:o(()=>n[3]||(n[3]=[I("mdi-plus")])),_:1})])]),_:2},1040)]),default:o(()=>[a($,{onClose:n[0]||(n[0]=e=>u.value=!1),onSave:n[1]||(n[1]=e=>x(e))})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}});export{q as default};
