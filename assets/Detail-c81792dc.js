import{D as Z,_ as oo}from"./DelayPopup-417b0ec6.js";import{O as to,_ as x}from"./InputQty.vuevuetypestyleindex0scoped69086644lang-284e9033.js";import{T as S,a as P,f as D,g as Q,b as N,c as V,d as so}from"./TokenIcon-ed595d7d.js";import{_ as R,d as q,r as v,y as eo,g as E,o as h,h as L,c as r,w as C,j as t,t as a,k as l,l as k,F as W,z as j,x as d,N as M,L as A,O as z,M as U,P as ao,b as no,E as lo,G as co,H as io,A as J,D as Y,I as ro,J as uo,K as mo}from"./index-557ccfb3.js";import{l as X}from"./lpABI-5e9b72a1.js";import{I as ko}from"./InputQty-655ad03d.js";import{B as K}from"./bignumber-3e8dfdf6.js";const po="/assets/images/time.png",_o="/assets/images/add.png";const ho={class:"ave-popup"},vo={class:"title"},yo={class:"body"},bo={class:"info"},wo={class:"key"},fo={class:"value"},go={key:0,class:"token"},$o={key:1,class:"token"},Co={class:"key"},Lo={class:"value"},Io={class:"key"},Do={class:"value"},So={class:"key"},Po={class:"value"},Ao={style:{}},To={__name:"AppendLockPopup",props:{show:Boolean,lockId:Number,isLpToken:Boolean,unlockDate:Number,tokenList:Array,symbol:String,address:String,chainCoinSymbol:String,amount:Number,chain:String,decimals:Number},emits:["update:show"],setup(y,{emit:T}){const s=y,p=q(),b=v(""),o=v(0),f=v(""),g=v(!1),B=v("");async function F(){const e=d.wallet.getEthersProvider();if(s.isLpToken){const c=await d.wallet.contractByProvider(e,s.address,X).balanceOf(p.walletAddress);o.value=Number(U(c,s.decimals))}else{const c=await d.wallet.contractByProvider(e,s.address,A).balanceOf(p.walletAddress);console.log(c),o.value=Number(U(c,s.decimals))}}async function H(){const e=d.wallet.getEthersProvider(),n=d.wallet.contractByProvider(e,p.lockContractAddress,M),_=await d.wallet.contractByProvider(e,s.address,A).decimals(),m=K(s.amount).plus(1e-15).toNumber().toString(),$=z(m,_),I=await e.getGasPrice();let w=await n.estimateGas.editLock(s.lockId.toString(),$.toString(),s.unlockDate);console.dir(w),f.value=ao(w.mul(I)).toString()}async function i(){const e=j({message:"Loading...",forbidClick:!0,duration:0}),n=d.wallet.getEthersProvider(),c=d.wallet.contractByProvider(n,p.lockContractAddress,M),m=await d.wallet.contractByProvider(n,s.address,A).decimals(),$=K(s.amount).plus(Number(b.value)).toNumber().toString();console.log($);const I=z($,m);try{let w=await c.editLock(s.lockId.toString(),I.toString(),s.unlockDate);console.dir(w),B.value=w.hash,g.value=!0}catch(w){console.log(w)}finally{e.close()}}eo(()=>s.show,(e,n)=>{e&&u()});async function u(){const e=j({message:"Loading...",forbidClick:!0,duration:0});await F(),await H(),e.close()}return(e,n)=>{const c=E("van-button"),_=E("van-popup");return h(),L(W,null,[r(_,{show:y.show,"onUpdate:show":n[1]||(n[1]=m=>{T("update:show",m)}),round:"",closeable:"",position:"bottom"},{default:C(()=>[t("div",ho,[t("div",vo,a(e.$t("appendLock")),1),t("div",yo,[t("ul",bo,[t("li",null,[t("div",wo,a(e.$t("appendAssets")),1),t("div",fo,[s.isLpToken?(h(),L("div",go,[r(S,{class:"token-icon",tokenIcon:l(P)(s.chain,s.tokenList[0].address)},null,8,["tokenIcon"]),r(S,{class:"token-icon",tokenIcon:l(P)(s.chain,s.tokenList[1].address)},null,8,["tokenIcon"]),k(" "+a(`${s.symbol} (${l(D)(s.address)})`),1)])):(h(),L("div",$o,[r(S,{class:"token-icon",tokenIcon:l(P)(s.chain,s.address),chainIcon:l(Q)(s.chain)},null,8,["tokenIcon","chainIcon"]),k(" "+a(`${s.symbol} (${l(D)(s.address)})`),1)]))])]),t("li",null,[t("div",Co,a(e.$t("currentAmount")),1),t("div",Lo,a(s.amount),1)]),t("li",null,[t("div",Io,a(e.$t("balance")),1),t("div",Do,a(`${o.value} ${s.symbol}`),1)]),t("li",null,[t("div",So,a(e.$t("serviceFee")),1),t("div",Po,a(`${f.value?f.value:"--"} ${s.chainCoinSymbol}`),1)])]),t("div",Ao,[r(ko,{total:o.value,amount:b.value,"onUpdate:amount":n[0]||(n[0]=m=>b.value=m)},null,8,["total","amount"])]),r(c,{class:"btn",type:"primary",block:"",onClick:i},{default:C(()=>[k(a(e.$t("confirmAndLock")),1)]),_:1})])])]),_:1},8,["show"]),r(to,{show:g.value,"onUpdate:show":n[2]||(n[2]=m=>g.value=m),txHash:B.value},null,8,["show","txHash"])],64)}}},Bo=R(To,[["__scopeId","data-v-0503c5ef"]]);const G=y=>(uo("data-v-534e751f"),y=y(),mo(),y),No={key:0,class:"body"},Eo={key:0,class:"token"},Uo={key:1,class:"token"},Fo={class:"info"},Ho={class:"item"},Yo={class:"key"},Mo={class:"value"},Go={class:"item"},Oo={class:"key"},xo={class:"value"},Vo={class:"item"},jo={class:"key"},zo={class:"value"},Jo={class:"item"},Ko={class:"key"},Qo={class:"value"},Ro={class:"blue-font"},qo={class:"item"},Wo={class:"key"},Xo={class:"value"},Zo={class:"item"},ot={class:"key"},tt={class:"value"},st={class:"footer"},et=G(()=>t("img",{src:oo,alt:""},null,-1)),at=G(()=>t("img",{src:po,alt:""},null,-1)),nt=G(()=>t("img",{src:_o,alt:""},null,-1)),lt={__name:"Detail",props:{lockId:Number},setup(y){const T=y;no("global");const{t:s}=lo(),p=q(),b=v(!1),o=co({id:T.lockId,address:"",amount:0,tokenList:[],lockDate:0,unlockDate:0,isLpToken:!1,symbol:"",chain:"",isExpired:!1,chainCoinSymbol:"",decimals:0}),f=v(!1),g=v(!1);async function B(){b.value=!1;const i=d.wallet.getEthersProvider(),u=d.wallet.contractByProvider(i,p.lockContractAddress,M);console.dir(u);let e;try{e=await u.getLockById(T.lockId)}catch{ro(s("failedToGetDetail"));return}o.lockDate=e.lockDate.toNumber(),o.unlockDate=e.tgeDate.toNumber(),o.address=e.token,o.owner=e.owner,o.isExpired=N().unix()>=o.unlockDate,o.chain=p.chain,o.chainCoinSymbol=p.chainCoinSymbol;try{const n=d.wallet.contractByProvider(i,o.address,X);let c=await n.decimals();o.decimals=c;let _=await n.token0(),$=await d.wallet.contract(_,A).symbol(),I=await n.token1(),O=await d.wallet.contract(I,A).symbol();o.isLpToken=!0,o.tokenList[0]={symbol:$.toUpperCase(),address:_.toLowerCase()},o.tokenList[1]={symbol:O.toUpperCase(),address:I.toLowerCase()},o.amount=Number(U(e.amount,c)),o.symbol=`${$}/${O}`}catch{const c=d.wallet.contractByProvider(i,o.address,A);let _=await c.symbol(),m=await c.decimals();o.decimals=m,o.tokenList=[],o.isLpToken=!1,o.symbol=_.toUpperCase(),o.amount=Number(U(e.amount,m))}b.value=!0,console.log("getDetailDone")}function F(){console.log(o),f.value=!0}function H(){g.value=!0}return io(()=>{B()}),v(!0),console.log(T.lockId),(i,u)=>{const e=E("van-button"),n=E("van-action-bar");return h(),L(W,null,[b.value?(h(),L("div",No,[o.isLpToken?(h(),L("div",Eo,[r(S,{class:"token-icon",tokenIcon:l(P)(o.chain,o.tokenList[0].address)},null,8,["tokenIcon"]),r(S,{class:"token-icon",tokenIcon:l(P)(o.chain,o.tokenList[1].address)},null,8,["tokenIcon"]),k(" "+a(`${o.symbol} (${l(D)(o.address)})`),1)])):(h(),L("div",Uo,[o.address?(h(),J(S,{key:0,class:"token-icon",tokenIcon:l(P)(o.chain,o.address.toLowerCase()),chainIcon:l(Q)(o.chain)},null,8,["tokenIcon","chainIcon"])):Y("",!0),k(" "+a(`${o.symbol} (${l(D)(o.address)})`),1)])),t("ul",Fo,[t("li",Ho,[t("div",Yo,a(i.$t("contractAddress")),1),t("div",Mo,[k(a(l(D)(o.address))+" ",1),r(x,{class:"copy-icon",name:"copy",onClick:u[0]||(u[0]=c=>l(V)(o.address))})])]),t("li",Go,[t("div",Oo,a(i.$t("contractChian")),1),t("div",xo,a(o.chain.toUpperCase()),1)]),t("li",Vo,[t("div",jo,a(`${o.symbol} ${i.$t("lockNumber")}`),1),t("div",zo,a(o.amount),1)]),t("li",Jo,[t("div",Ko,a(i.$t("unlockTime2")),1),t("div",Qo,[t("span",null,a(l(N).unix(o.unlockDate).format("YYYY-MM-DD HH:mm:ss")),1),t("span",null,[k("("),t("span",Ro,a(o.isExpired?i.$t("expired"):i.$t("dayLeft",{day:l(so)(l(N).unix(o.unlockDate).toDate())})),1),k(")")])])]),t("li",qo,[t("div",Wo,a(i.$t("lockUser")),1),t("div",Xo,[k(a(l(D)(o.owner))+" ",1),r(x,{class:"copy-icon",name:"copy",onClick:u[1]||(u[1]=c=>l(V)(o.owner))})])]),t("li",Zo,[t("div",ot,a(i.$t("lockTime")),1),t("div",tt,a(l(N).unix(o.lockDate).format("YYYY-MM-DD HH:mm:ss")),1)])])])):Y("",!0),t("div",st,[t("span",null,a(`${i.$t("technicalSupport")}:`),1),et]),!o.isExpired&&b.value&&l(p).walletAddress&&o.owner.toLowerCase()==l(p).walletAddress.toLowerCase()?(h(),J(n,{key:1,class:"tools"},{default:C(()=>[r(e,{class:"btn",color:"#9F3FF7",onClick:F},{icon:C(()=>[at]),default:C(()=>[k(a(i.$t("delay")),1)]),_:1}),r(e,{class:"btn",color:"#3F80F7",onClick:H},{icon:C(()=>[nt]),default:C(()=>[k(a(i.$t("append")),1)]),_:1}),r(Z,{show:f.value,"onUpdate:show":u[2]||(u[2]=c=>f.value=c),lockId:o.id,isLpToken:o.isLpToken,chain:o.chain,unlockDate:o.unlockDate,tokenList:o.tokenList,symbol:o.symbol,address:o.address,chainCoinSymbol:o.chainCoinSymbol,amount:o.amount,decimals:o.decimals},null,8,["show","lockId","isLpToken","chain","unlockDate","tokenList","symbol","address","chainCoinSymbol","amount","decimals"]),r(Bo,{show:g.value,"onUpdate:show":u[3]||(u[3]=c=>g.value=c),lockId:o.id,isLpToken:o.isLpToken,chain:o.chain,unlockDate:o.unlockDate,tokenList:o.tokenList,symbol:o.symbol,address:o.address,chainCoinSymbol:o.chainCoinSymbol,amount:o.amount,decimals:o.decimals},null,8,["show","lockId","isLpToken","chain","unlockDate","tokenList","symbol","address","chainCoinSymbol","amount","decimals"])]),_:1})):Y("",!0)],64)}}},pt=R(lt,[["__scopeId","data-v-534e751f"]]);export{pt as default};
