import{D as oo,_ as so}from"./DelayPopup-eca976ff.js";import{O as to,_ as V}from"./OperateSuccessDialog-dfd017dc.js";import{T as P,a as A,f as S,g as R,b as E,c as j,d as eo}from"./TokenIcon-d13e24fd.js";import{_ as q,d as W,r as v,y as ao,g as U,o as h,h as I,c as r,w as L,j as s,t as a,k as l,l as k,F as X,z,x as d,N as G,L as T,O as J,M as F,P as no,b as lo,E as co,G as io,H as ro,A as K,D as M,I as uo,J as mo,K as ko}from"./index-6f2cd010.js";import{l as Z}from"./lpABI-5e9b72a1.js";import{I as po}from"./InputQty-4d26198f.js";import{B as Q}from"./bignumber-3e8dfdf6.js";const _o="/assets/images/time.png",ho="/assets/images/add.png";const vo={class:"ave-popup"},yo={class:"title"},bo={class:"body"},wo={class:"info"},fo={class:"key"},go={class:"value"},Co={key:0,class:"token"},$o={key:1,class:"token"},Lo={class:"key"},Io={class:"value"},Do={class:"key"},So={class:"value"},Po={class:"key"},Ao={class:"value"},To={style:{}},Bo={__name:"AppendLockPopup",props:{show:Boolean,lockId:Number,isLpToken:Boolean,unlockDate:Number,tokenList:Array,symbol:String,address:String,chainCoinSymbol:String,amount:Number,chain:String,decimals:Number},emits:["update:show","success"],setup(y,{emit:f}){const t=y,p=W(),b=v(""),o=v(0),g=v(""),C=v(!1),B=v("");async function H(){const e=d.wallet.getEthersProvider();if(t.isLpToken){const c=await d.wallet.contractByProvider(e,t.address,Z).balanceOf(p.walletAddress);o.value=Number(F(c,t.decimals))}else{const c=await d.wallet.contractByProvider(e,t.address,T).balanceOf(p.walletAddress);console.log(c),o.value=Number(F(c,t.decimals))}}async function Y(){const e=d.wallet.getEthersProvider(),n=d.wallet.contractByProvider(e,p.lockContractAddress,G),_=await d.wallet.contractByProvider(e,t.address,T).decimals(),m=Q(t.amount).plus(1e-15).toNumber().toString(),$=J(m,_),D=await e.getGasPrice();let w=await n.estimateGas.editLock(t.lockId.toString(),$.toString(),t.unlockDate);console.dir(w),g.value=no(w.mul(D)).toString()}async function N(){const e=z({message:"Loading...",forbidClick:!0,duration:0}),n=d.wallet.getEthersProvider(),c=d.wallet.contractByProvider(n,p.lockContractAddress,G),m=await d.wallet.contractByProvider(n,t.address,T).decimals(),$=Q(t.amount).plus(Number(b.value)).toNumber().toString();console.log($);const D=J($,m);try{let w=await c.editLock(t.lockId.toString(),D.toString(),t.unlockDate);console.dir(w),B.value=w.hash,C.value=!0}catch(w){console.log(w)}finally{e.close()}}ao(()=>t.show,(e,n)=>{e&&i()});async function i(){const e=z({message:"Loading...",forbidClick:!0,duration:0});await H(),await Y(),e.close()}function u(){f("update:show",!1),f("success")}return(e,n)=>{const c=U("van-button"),_=U("van-popup");return h(),I(X,null,[r(_,{show:y.show,"onUpdate:show":n[1]||(n[1]=m=>{f("update:show",m)}),round:"",closeable:"",position:"bottom"},{default:L(()=>[s("div",vo,[s("div",yo,a(e.$t("appendLock")),1),s("div",bo,[s("ul",wo,[s("li",null,[s("div",fo,a(e.$t("appendAssets")),1),s("div",go,[t.isLpToken?(h(),I("div",Co,[r(P,{class:"token-icon",tokenIcon:l(A)(t.chain,t.tokenList[0].address)},null,8,["tokenIcon"]),r(P,{class:"token-icon",tokenIcon:l(A)(t.chain,t.tokenList[1].address)},null,8,["tokenIcon"]),k(" "+a(`${t.symbol} (${l(S)(t.address)})`),1)])):(h(),I("div",$o,[r(P,{class:"token-icon",tokenIcon:l(A)(t.chain,t.address),chainIcon:l(R)(t.chain)},null,8,["tokenIcon","chainIcon"]),k(" "+a(`${t.symbol} (${l(S)(t.address)})`),1)]))])]),s("li",null,[s("div",Lo,a(e.$t("currentAmount")),1),s("div",Io,a(t.amount),1)]),s("li",null,[s("div",Do,a(e.$t("balance")),1),s("div",So,a(`${o.value} ${t.symbol}`),1)]),s("li",null,[s("div",Po,a(e.$t("serviceFee")),1),s("div",Ao,a(`${g.value?g.value:"--"} ${t.chainCoinSymbol}`),1)])]),s("div",To,[r(po,{total:o.value,amount:b.value,"onUpdate:amount":n[0]||(n[0]=m=>b.value=m)},null,8,["total","amount"])]),r(c,{class:"btn",type:"primary",block:"",onClick:N},{default:L(()=>[k(a(e.$t("confirmAndLock")),1)]),_:1})])])]),_:1},8,["show"]),r(to,{show:C.value,"onUpdate:show":n[2]||(n[2]=m=>C.value=m),txHash:B.value,onClose:u},null,8,["show","txHash"])],64)}}},No=q(Bo,[["__scopeId","data-v-9c0e1e84"]]);const O=y=>(mo("data-v-e74e71c0"),y=y(),ko(),y),Eo={key:0,class:"body"},Uo={key:0,class:"token"},Fo={key:1,class:"token"},Ho={class:"info"},Yo={class:"item"},Mo={class:"key"},Go={class:"value"},Oo={class:"item"},xo={class:"key"},Vo={class:"value"},jo={class:"item"},zo={class:"key"},Jo={class:"value"},Ko={class:"item"},Qo={class:"key"},Ro={class:"value"},qo={class:"blue-font"},Wo={class:"item"},Xo={class:"key"},Zo={class:"value"},os={class:"item"},ss={class:"key"},ts={class:"value"},es={class:"footer"},as=O(()=>s("img",{src:so,alt:""},null,-1)),ns=O(()=>s("img",{src:_o,alt:""},null,-1)),ls=O(()=>s("img",{src:ho,alt:""},null,-1)),cs={__name:"Detail",props:{lockId:Number},setup(y){const f=y;lo("global");const{t}=co(),p=W(),b=v(!1),o=io({id:f.lockId,address:"",amount:0,tokenList:[],lockDate:0,unlockDate:0,isLpToken:!1,symbol:"",chain:"",isExpired:!1,chainCoinSymbol:"",decimals:0}),g=v(!1),C=v(!1);async function B(){b.value=!1;const i=d.wallet.getEthersProvider(),u=d.wallet.contractByProvider(i,p.lockContractAddress,G);console.dir(u);let e;try{e=await u.getLockById(f.lockId)}catch{uo(t("failedToGetDetail"));return}o.lockDate=e.lockDate.toNumber(),o.unlockDate=e.tgeDate.toNumber(),o.address=e.token,o.owner=e.owner,o.isExpired=E().unix()>=o.unlockDate,o.chain=p.chain,o.chainCoinSymbol=p.chainCoinSymbol;try{const n=d.wallet.contractByProvider(i,o.address,Z);let c=await n.decimals();o.decimals=c;let _=await n.token0(),$=await d.wallet.contract(_,T).symbol(),D=await n.token1(),x=await d.wallet.contract(D,T).symbol();o.isLpToken=!0,o.tokenList[0]={symbol:$.toUpperCase(),address:_.toLowerCase()},o.tokenList[1]={symbol:x.toUpperCase(),address:D.toLowerCase()},o.amount=Number(F(e.amount,c)),o.symbol=`${$}/${x}`}catch{const c=d.wallet.contractByProvider(i,o.address,T);let _=await c.symbol(),m=await c.decimals();o.decimals=m,o.tokenList=[],o.isLpToken=!1,o.symbol=_.toUpperCase(),o.amount=Number(F(e.amount,m))}b.value=!0,console.log("getDetailDone")}function H(){console.log(o),g.value=!0}function Y(){C.value=!0}function N(){window.location.reload()}return ro(()=>{B()}),v(!0),console.log(f.lockId),(i,u)=>{const e=U("van-button"),n=U("van-action-bar");return h(),I(X,null,[b.value?(h(),I("div",Eo,[o.isLpToken?(h(),I("div",Uo,[r(P,{class:"token-icon",tokenIcon:l(A)(o.chain,o.tokenList[0].address)},null,8,["tokenIcon"]),r(P,{class:"token-icon",tokenIcon:l(A)(o.chain,o.tokenList[1].address)},null,8,["tokenIcon"]),k(" "+a(`${o.symbol} (${l(S)(o.address)})`),1)])):(h(),I("div",Fo,[o.address?(h(),K(P,{key:0,class:"token-icon",tokenIcon:l(A)(o.chain,o.address.toLowerCase()),chainIcon:l(R)(o.chain)},null,8,["tokenIcon","chainIcon"])):M("",!0),k(" "+a(`${o.symbol} (${l(S)(o.address)})`),1)])),s("ul",Ho,[s("li",Yo,[s("div",Mo,a(i.$t("contractAddress")),1),s("div",Go,[k(a(l(S)(o.address))+" ",1),r(V,{class:"copy-icon",name:"copy",onClick:u[0]||(u[0]=c=>l(j)(o.address))})])]),s("li",Oo,[s("div",xo,a(i.$t("contractChian")),1),s("div",Vo,a(o.chain.toUpperCase()),1)]),s("li",jo,[s("div",zo,a(`${o.symbol} ${i.$t("lockNumber")}`),1),s("div",Jo,a(o.amount),1)]),s("li",Ko,[s("div",Qo,a(i.$t("unlockTime2")),1),s("div",Ro,[s("span",null,a(l(E).unix(o.unlockDate).format("YYYY-MM-DD HH:mm:ss")),1),s("span",null,[k("("),s("span",qo,a(o.isExpired?i.$t("expired"):i.$t("dayLeft",{day:l(eo)(l(E).unix(o.unlockDate).toDate())})),1),k(")")])])]),s("li",Wo,[s("div",Xo,a(i.$t("lockUser")),1),s("div",Zo,[k(a(l(S)(o.owner))+" ",1),r(V,{class:"copy-icon",name:"copy",onClick:u[1]||(u[1]=c=>l(j)(o.owner))})])]),s("li",os,[s("div",ss,a(i.$t("lockTime")),1),s("div",ts,a(l(E).unix(o.lockDate).format("YYYY-MM-DD HH:mm:ss")),1)])])])):M("",!0),s("div",es,[s("span",null,a(`${i.$t("technicalSupport")}:`),1),as]),!o.isExpired&&b.value&&l(p).walletAddress&&o.owner.toLowerCase()==l(p).walletAddress.toLowerCase()?(h(),K(n,{key:1,class:"tools"},{default:L(()=>[r(e,{class:"btn",color:"#9F3FF7",onClick:H},{icon:L(()=>[ns]),default:L(()=>[k(a(i.$t("delay")),1)]),_:1}),r(e,{class:"btn",color:"#3F80F7",onClick:Y},{icon:L(()=>[ls]),default:L(()=>[k(a(i.$t("append")),1)]),_:1}),r(oo,{show:g.value,"onUpdate:show":u[2]||(u[2]=c=>g.value=c),onSuccess:N,lockId:o.id,isLpToken:o.isLpToken,chain:o.chain,unlockDate:o.unlockDate,tokenList:o.tokenList,symbol:o.symbol,address:o.address,chainCoinSymbol:o.chainCoinSymbol,amount:o.amount,decimals:o.decimals},null,8,["show","lockId","isLpToken","chain","unlockDate","tokenList","symbol","address","chainCoinSymbol","amount","decimals"]),r(No,{show:C.value,"onUpdate:show":u[3]||(u[3]=c=>C.value=c),onSuccess:N,lockId:o.id,isLpToken:o.isLpToken,chain:o.chain,unlockDate:o.unlockDate,tokenList:o.tokenList,symbol:o.symbol,address:o.address,chainCoinSymbol:o.chainCoinSymbol,amount:o.amount,decimals:o.decimals},null,8,["show","lockId","isLpToken","chain","unlockDate","tokenList","symbol","address","chainCoinSymbol","amount","decimals"])]),_:1})):M("",!0)],64)}}},_s=q(cs,[["__scopeId","data-v-e74e71c0"]]);export{_s as default};
