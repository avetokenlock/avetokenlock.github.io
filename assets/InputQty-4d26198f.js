import{B as _}from"./bignumber-3e8dfdf6.js";import{_ as v,f as b,g as f,o as y,h as k,c as g,j as e,U as d,k as o,F as I,J as N,K as B}from"./index-6f2cd010.js";const u=a=>(N("data-v-eb35dd22"),a=a(),B(),a),S={class:"progress-bar"},C=u(()=>e("div",null,"25%",-1)),$=u(()=>e("div",null,"50%",-1)),Q=u(()=>e("div",null,"75%",-1)),x=u(()=>e("div",null,"100%",-1)),F=u(()=>e("div",{class:"bbb"},null,-1)),V={__name:"InputQty",props:{total:Number,amount:String},emits:["update:amount"],setup(a,{emit:p}){const s=a;function c(l){return l&&l.replace("-","")}const n=b(()=>{const l=s.amount?Number(s.amount):0,t=s.total?Number(s.total):0;return t<=0?0:l/t*100});function i(l){const t=parseFloat(_(s.total).multipliedBy(l).div(100)).toString();p("update:amount",t)}return(l,t)=>{const m=f("van-field");return y(),k(I,null,[g(m,{"model-value":s.amount,"onUpdate:modelValue":t[0]||(t[0]=r=>p("update:amount",r)),type:"number",placeholder:l.$t("enterNumber"),class:"input","input-align":"center",formatter:c},null,8,["model-value","placeholder"]),e("ul",S,[e("li",{onClick:t[1]||(t[1]=r=>i(25))},[e("div",{class:"block",style:d({"--percent":o(n)<0?0:o(n)<25?(o(n)-0)/25*100:100})},null,4),C]),e("li",{onClick:t[2]||(t[2]=r=>i(50))},[e("div",{class:"block",style:d({"--percent":o(n)<25?0:o(n)<50?(o(n)-25)/25*100:100})},null,4),$]),e("li",{onClick:t[3]||(t[3]=r=>i(75))},[e("div",{class:"block",style:d({"--percent":o(n)<50?0:o(n)<75?(o(n)-50)/25*100:100})},null,4),Q]),e("li",{onClick:t[4]||(t[4]=r=>i(100))},[e("div",{class:"block",style:d({"--percent":o(n)<75?0:o(n)<100?(o(n)-75)/25*100:100})},null,4),x])]),F],64)}}},j=v(V,[["__scopeId","data-v-eb35dd22"]]);export{j as I};
