import{S as ne}from"./school-repository-BpvSq3HZ.js";import{d as Y,r as U,s as Z,o as ee,b as o,e as w,c as F,w as n,f as e,g as oe,h as ae,F as se,j as ue,l as fe,u as D,x as X,i as B,m as C,z as r,A as R,v as Q,K as ge,y as be,T as ie,k as P,t as re}from"./index-B7rqJQ63.js";import{u as de}from"./vee-validate.esm-BFqVqaMY.js";const Se=Y({__name:"LevelRangeEditor",props:{initialLevelRanges:{}},emits:["close","save"],setup(q,{emit:E}){const u=q,N=E,x=U(0),g=U(""),m=U(),d=U([]);Z(()=>u.initialLevelRanges,()=>p());function p(){u.initialLevelRanges&&(d.value=JSON.parse(JSON.stringify(u.initialLevelRanges)),d.value.length>0&&(m.value=d.value[0]))}function G(i,a){const v=i.levels.indexOf(a);i.levels.splice(v,1)}function _(){const i=m.value;if(i){const a=d.value.findIndex(v=>v.price==i.price);d.value.splice(a,1),m.value=d.value[0]}}function k(){const i=+x.value;if(i==null||i==null||isNaN(i)||i==0||(x.value=0,d.value.findIndex(v=>v.price==i)!=-1))return;const a=m.value={price:i,levels:[]};d.value.push(a),d.value.sort((v,b)=>v.price-b.price)}function O(i){const a=g.value.trim();a.length!=0&&(g.value="",!i.levels.includes(a)&&i.levels.push(a))}return ee(()=>p()),(i,a)=>{const v=o("v-number-input"),b=o("v-col"),c=o("v-btn"),h=o("v-row"),f=o("v-tab"),T=o("v-tabs"),L=o("v-text-field"),A=o("v-icon"),$=o("v-list"),I=o("v-tabs-window-item"),J=o("v-tabs-window"),M=o("v-card"),y=o("v-card-text"),K=o("v-divider"),H=o("v-spacer"),t=o("v-card-actions");return w(),F(M,{"prepend-icon":"mdi-format-list-numbered",title:"Livelli"},{default:n(()=>[e(y,null,{default:n(()=>[e(h,{class:"my-3 mb-10 justify-center"},{default:n(()=>[e(b,{class:"px-2",cols:"12",md:"4"},{default:n(()=>[e(v,{"max-width":"500",modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=l=>x.value=l),reverse:!1,controlVariant:"default",label:"Fascia di Prezzo",prefix:"€",hideInput:!1,inset:!1,min:0},null,8,["modelValue"])]),_:1}),e(b,{class:"px-2",cols:"12",md:"1"},{default:n(()=>[e(c,{onClick:k,icon:"mdi-plus",color:"success"}),e(c,{onClick:_,icon:"mdi-minus",color:"error"})]),_:1})]),_:1}),m.value?(w(),F(M,{key:0,class:"mx-5 mt-5 pa-2",elevation:"3"},{default:n(()=>[e(T,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=l=>m.value=l),class:"my-2","align-tabs":"center",color:"primary","show-arrows":""},{default:n(()=>[(w(!0),oe(se,null,ae(d.value,l=>(w(),F(f,{key:l.price,text:l.price+" €",value:l},null,8,["text","value"]))),128))]),_:1},8,["modelValue"]),e(J,{modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=l=>m.value=l)},{default:n(()=>[(w(!0),oe(se,null,ae(d.value,l=>(w(),F(I,{class:"mx-5 my-5",key:l.price,value:l},{default:n(()=>[e(L,{modelValue:g.value,"onUpdate:modelValue":a[2]||(a[2]=S=>g.value=S),label:"Nome Livello","append-icon":"mdi-plus",type:"text","onClick:append":S=>O(l)},null,8,["modelValue","onClick:append"]),e($,{items:l.levels},{append:n(({item:S})=>[e(A,{size:"small",onClick:V=>G(l,S)},{default:n(()=>a[6]||(a[6]=[fe(" mdi-delete ")])),_:2},1032,["onClick"])]),_:2},1032,["items"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})):ue("",!0)]),_:1}),e(K),e(t,null,{default:n(()=>[e(H),e(c,{text:"Annulla",variant:"plain",onClick:a[4]||(a[4]=l=>N("close"))}),e(c,{color:"primary",text:"Salva Livelli",variant:"tonal",onClick:a[5]||(a[5]=l=>N("save",d.value))})]),_:1})]),_:1})}}}),Ve=Y({__name:"ManagerEditor",props:{initialManagerOptions:{}},emits:["close","save"],setup(q,{emit:E}){const u=q,N=E,x=D({totalStudents:X().required("Il Numero Totale degli Studenti è obbligatorio").positive().label("Numero Totale Studenti"),quotePerStudent:X().required("La Quota per Studente è obbligatoria").positive().label("Quota per Studente"),cashFund:X().positive().label("Fondo Cassa").nullable().optional()}),{defineField:g,handleSubmit:m}=de({validationSchema:x}),d=b=>({props:{"error-messages":b.errors}}),[p,G]=g("totalStudents",d),[_,k]=g("quotePerStudent",d),[O,i]=g("cashFund",d),a=m(async b=>{N("save",{...b})},b=>{B.warn("Ci sono alcuni errori! Inserisci correttamente i dati"),console.log(b)});Z(()=>u.initialManagerOptions,()=>v());function v(){u.initialManagerOptions&&(p.value=u.initialManagerOptions.totalStudents,_.value=u.initialManagerOptions.quotePerStudent,O.value=u.initialManagerOptions.cashFund)}return ee(()=>v()),(b,c)=>{const h=o("v-number-input"),f=o("v-col"),T=o("v-row"),L=o("v-card-text"),A=o("v-divider"),$=o("v-spacer"),I=o("v-btn"),J=o("v-card-actions"),M=o("v-card");return w(),F(M,{"prepend-icon":"mdi-account",title:"Gestione Scuola"},{default:n(()=>[e(L,null,{default:n(()=>[e(T,{class:"my-3 mb-10 justify-center"},{default:n(()=>[e(f,{cols:"12",md:"6"},{default:n(()=>[e(h,C({modelValue:r(p),"onUpdate:modelValue":c[0]||(c[0]=y=>R(p)?p.value=y:null)},r(G),{reverse:!1,controlVariant:"default",label:"Numero Totale Studenti",hideInput:!1,inset:!1,min:0}),null,16,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:n(()=>[e(h,C({modelValue:r(_),"onUpdate:modelValue":c[1]||(c[1]=y=>R(_)?_.value=y:null)},r(k),{reverse:!1,controlVariant:"default",label:"Quota per Studente",prefix:"€",hideInput:!1,inset:!1,min:0}),null,16,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:n(()=>[e(h,C({modelValue:r(O),"onUpdate:modelValue":c[2]||(c[2]=y=>R(O)?O.value=y:null)},r(i),{reverse:!1,controlVariant:"default",label:"Fondo Cassa",hideInput:!1,prefix:"€",inset:!1,min:0}),null,16,["modelValue"])]),_:1})]),_:1})]),_:1}),e(A),e(J,null,{default:n(()=>[e($),e(I,{text:"Annulla",variant:"plain",onClick:c[3]||(c[3]=y=>N("close"))}),e(I,{color:"primary",text:"Salva Gestione",variant:"tonal",onClick:r(a)},null,8,["onClick"])]),_:1})]),_:1})}}}),xe={class:"v-input--center-affix v-input--error"},ye={class:"v-input__details"},Ce={class:"v-messages__message v-messages",role:"alert"},Ne={class:"v-input--center-affix v-input--error"},we={class:"v-input__details"},ke={class:"v-messages__message v-messages",role:"alert"},Re=Y({__name:"SchoolEditor",props:{initialSchool:{},edit:{type:Boolean}},emits:["close","save"],setup(q,{emit:E}){const u=q,N=E,x=U(!1),g=U(!1),m=U(!1),d=D({name:Q().required("Il Nome è obbligatorio").min(1).label("Nome"),city:Q().label("Città").nullable().optional(),email:Q().label("Email").nullable().optional(),phoneNumber:Q().label("Numero di Telefono").nullable().optional(),managed:ge().label("Gestione"),managerOptions:D().test({test:t=>f.value?t!==void 0:!0,message:"Configurare la Gestione della Scuola correttamente",exclusive:!1,name:"managedProp"}).label("Opzioni Gestione"),levelRanges:be().of(D()).test({test:t=>!!t&&t.length!=0,message:"I livelli sono obbligatori; configurare correttamente i Livelli",exclusive:!1,name:"level"}).label("Livelli")}),{defineField:p,handleSubmit:G}=de({validationSchema:d}),_=t=>({props:{"error-messages":t.errors}}),[k,O]=p("name",_),[i,a]=p("city",_),[v,b]=p("email",_),[c,h]=p("phoneNumber",_),[f,T]=p("managed",_),[L,A]=p("managerOptions",_),[$,I]=p("levelRanges",_),J=G(async t=>{H(t)},t=>{B.warn("Ci sono alcuni errori! Inserisci correttamente i dati"),console.log(t)});Z(()=>u.initialSchool,()=>M());function M(){if(u.initialSchool){const t=JSON.parse(JSON.stringify(u.initialSchool));k.value=t.name,i.value=t.city??"",v.value=t.email??"",c.value=t.phoneNumber??"",f.value=t.managed,L.value=t.managerOptions,$.value=t.levelRanges}}function y(t){console.log(t,JSON.stringify(t)),L.value=t,g.value=!1}function K(t){console.log(t,JSON.stringify(t)),$.value=t,x.value=!1}async function H(t){var S,V;m.value=!0;const l={name:t.name,managed:f.value??!1,levelRanges:t.levelRanges,createdAt:u.edit?(S=u.initialSchool)==null?void 0:S.createdAt:ie.now(),updatedAt:ie.now()};t.city&&(l.city=t.city),t.email&&(l.email=t.email),t.phoneNumber&&(l.phoneNumber=t.phoneNumber),f.value&&(l.managerOptions=L.value);try{u.edit&&((V=u.initialSchool)==null?void 0:V.id)!=null?(await ne.instance.save(l,u.initialSchool.id),B.success("Scuola Aggiornata")):(await ne.instance.save(l),B.success("Scuola Creata")),N("save",l)}catch(W){N("save"),B.error("Errore durante il salvataggio"),console.error("Error adding document (schools): ",W)}finally{m.value=!1}}return ee(()=>M()),(t,l)=>{const S=o("v-text-field"),V=o("v-col"),W=o("v-checkbox"),j=o("v-btn"),le=o("v-dialog"),te=o("v-row"),ce=o("v-card-text"),ve=o("v-divider"),me=o("v-spacer"),pe=o("v-card-actions"),_e=o("v-card");return w(),F(_e,{"prepend-icon":"mdi-school",title:"Scuola"},{default:n(()=>[e(ce,null,{default:n(()=>[e(te,{dense:""},{default:n(()=>[e(V,{cols:"12",md:"6"},{default:n(()=>[e(S,C({modelValue:r(k),"onUpdate:modelValue":l[0]||(l[0]=s=>R(k)?k.value=s:null)},r(O),{label:"Nome",required:""}),null,16,["modelValue"])]),_:1}),e(V,{cols:"12",md:"6"},{default:n(()=>[e(S,C({modelValue:r(i),"onUpdate:modelValue":l[1]||(l[1]=s=>R(i)?i.value=s:null)},r(a),{label:"Città"}),null,16,["modelValue"])]),_:1}),e(V,{cols:"12",md:"6"},{default:n(()=>[e(S,C({modelValue:r(v),"onUpdate:modelValue":l[2]||(l[2]=s=>R(v)?v.value=s:null)},r(b),{label:"Email"}),null,16,["modelValue"])]),_:1}),e(V,{cols:"12",md:"6"},{default:n(()=>[e(S,C({modelValue:r(c),"onUpdate:modelValue":l[3]||(l[3]=s=>R(c)?c.value=s:null)},r(h),{label:"Numero di Telefono"}),null,16,["modelValue"])]),_:1}),e(V,{cols:"12",md:"12"},{default:n(()=>[e(te,{"justify-center":""},{default:n(()=>[e(V,{class:"align-self-center"},{default:n(()=>[e(W,C({modelValue:r(f),"onUpdate:modelValue":l[4]||(l[4]=s=>R(f)?f.value=s:null)},r(T),{label:"Gestione"}),null,16,["modelValue"])]),_:1}),e(V,{class:"align-self-center"},{default:n(()=>[r(f)?(w(),F(le,{key:0,modelValue:g.value,"onUpdate:modelValue":l[7]||(l[7]=s=>g.value=s),fullscreen:""},{activator:n(({props:s})=>{var z;return[P("div",xe,[e(j,C({text:"Gestione"},s),null,16),P("div",ye,[P("div",Ce,[P("span",null,re((z=r(A)["error-messages"])==null?void 0:z[0]),1)])])])]}),default:n(()=>[e(Ve,{initialManagerOptions:r(L),onClose:l[5]||(l[5]=s=>g.value=!1),onSave:l[6]||(l[6]=s=>y(s))},null,8,["initialManagerOptions"])]),_:1},8,["modelValue"])):ue("",!0)]),_:1})]),_:1})]),_:1}),e(V,{cols:"12",md:"6"},{default:n(()=>[e(le,{modelValue:x.value,"onUpdate:modelValue":l[10]||(l[10]=s=>x.value=s),fullscreen:""},{activator:n(({props:s})=>{var z;return[P("div",Ne,[e(j,C({text:"Gestisci Livelli"},s),null,16),P("div",we,[P("div",ke,[P("span",null,re((z=r(I)["error-messages"])==null?void 0:z[0]),1)])])])]}),default:n(()=>[e(Se,{initialLevelRanges:r($),onClose:l[8]||(l[8]=s=>x.value=!1),onSave:l[9]||(l[9]=s=>K(s))},null,8,["initialLevelRanges"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(ve),e(pe,null,{default:n(()=>[e(me),e(j,{text:"Chiudi",variant:"plain",onClick:l[11]||(l[11]=s=>N("close"))}),e(j,{color:"primary",loading:m.value,disabled:m.value,text:t.edit?"Salva Modifiche":"Crea",variant:"tonal",onClick:r(J)},null,8,["loading","disabled","text","onClick"])]),_:1})]),_:1})}}});export{Re as _};
