import{d as D,r as p,b as t,e as C,c as V,w as n,N as k,C as w,D as B,f as o,k as s,l as u,t as j,i as v}from"./index-DjUe38IL.js";const S=D({__name:"DeleteDialog",props:{objName:{default:"Oggetto"},useToast:{type:Boolean,default:!0},name:{},onDelete:{}},emits:["delete"],setup(c,{emit:y}){const l=c,i=p(!1),d=p(!1);async function f(){var e;d.value=!0;const a=await((e=l.onDelete)==null?void 0:e.call(l))??!1;l.useToast&&(a?v.success(`${l.objName} eliminato/a`):v.warning("Errore durante l'eliminazione")),d.value=!1,i.value=a}return(a,e)=>{const _=t("v-card-text"),m=t("v-btn"),g=t("v-spacer"),b=t("v-card-actions"),N=t("v-card"),x=t("v-dialog");return C(),V(x,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=r=>i.value=r)},{activator:n(({props:r})=>[k(a.$slots,"activator",w(B({props:r})))]),default:n(()=>[o(N,{"prepend-icon":"mdi-alert",class:"mx-auto","max-width":"500",title:"Elimina "+a.objName},{default:n(()=>[o(_,null,{default:n(()=>[s("p",null,[e[2]||(e[2]=u("Sei sicuro di voler eliminare ")),s("b",null,j(a.name),1),e[3]||(e[3]=u("?"))]),e[4]||(e[4]=s("br",null,null,-1)),e[5]||(e[5]=s("p",null,[u("Dopo avere eliminato la risorsa "),s("b",null,"NON"),u(" è più possibile recuperare i dati!")],-1))]),_:1}),o(b,null,{default:n(()=>[o(m,{text:"Annulla",onClick:e[0]||(e[0]=r=>i.value=!1)}),o(g),o(m,{color:"surface-variant",text:"Elimina",variant:"flat",onClick:f,loading:d.value},null,8,["loading"])]),_:1})]),_:1},8,["title"])]),_:3},8,["modelValue"])}}});export{S as _};