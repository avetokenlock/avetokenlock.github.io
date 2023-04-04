import{g as x,T,f as E,a as O,b as P,d as de}from"./TokenIcon-49895af2.js";import{_ as ee,g as oe,j as A,o as v,C as N,w as k,l as t,t as n,n as e,k as b,c,q as f,G as te,H as ue,f as ke,r as h,D as ve,J as fe,F as Q,z as r,B as q,N as H,Q as z,P as J,R as X,O as pe,Y as he,K as C}from"./index-a0f7f558.js";/* empty css                                                              */import{I as me}from"./InputQty-f254fc8a.js";import{O as _e,S as we}from"./OperateSuccessDialog-5f31d2ef.js";import{B as Z}from"./bignumber-3e8dfdf6.js";const ye={class:"ave-popup"},ge={class:"title"},Ce={class:"body"},be={class:"info"},$e={class:"key"},Ie={class:"value"},Ae={key:0,class:"token"},Te={key:1,class:"token"},De={key:2,class:"token"},Se={class:"key"},Le={class:"value"},Be={class:"key"},Pe={class:"value"},Ne={class:"key"},Ee={class:"value"},Oe={class:"blue-font"},Ge={class:"key"},Ue={class:"value"},Me={class:"tips"},Fe={__name:"LockConfirmPopup",props:{show:Boolean,showGas:String,amount:String,unlockDate:Date},emits:["update:show","confirm"],setup(w,{emit:d}){const G=w,l=oe();function D(){d("confirm")}return(i,S)=>{const o=A("van-button"),U=A("van-popup");return v(),N(U,{show:w.show,"onUpdate:show":S[0]||(S[0]=y=>{d("update:show",y)}),round:"",closeable:"",position:"bottom"},{default:k(()=>[t("div",ye,[t("div",ge,n(i.$t("lockConfirm")),1),t("div",Ce,[t("ul",be,[t("li",null,[t("div",$e,n(i.$t("lockAssets")),1),t("div",Ie,[e(l).token?e(l).token.tokenType==0?(v(),b("div",Te,[c(T,{class:"token-icon",tokenIcon:e(l).token.icon,chainIcon:e(x)(e(l).token.chain)},null,8,["tokenIcon","chainIcon"]),f(" "+n(`${e(l).token.symbol} (${e(E)(e(l).token.address)})`),1)])):e(l).token.tokenType==1?(v(),b("div",De,[c(T,{class:"token-icon",tokenIcon:e(O)(e(l).token.chain,e(l).token.tokenList[0].address)},null,8,["tokenIcon"]),c(T,{class:"token-icon",tokenIcon:e(O)(e(l).token.chain,e(l).token.tokenList[1].address)},null,8,["tokenIcon"]),f(" "+n(`${e(l).token.symbol} (${e(E)(e(l).token.address)})`),1)])):te("",!0):(v(),b("div",Ae," -- "))])]),t("li",null,[t("div",Se,n(i.$t("lockNumber")),1),t("div",Le,n(w.amount),1)]),t("li",null,[t("div",Be,n(i.$t("contractChian")),1),t("div",Pe,n(e(l).token?e(l).token.chain.toUpperCase():"--"),1)]),t("li",null,[t("div",Ne,n(i.$t("unlockTime2")),1),t("div",Ee,[t("span",null,n(e(P)(w.unlockDate).format("YYYY-MM-DD")),1),t("span",null,[f("("),t("span",Oe,n(i.$t("dayLeft",{day:e(de)(G.unlockDate)})),1),f(")")])])]),t("li",null,[t("div",Ge,n(i.$t("serviceFee")),1),t("div",Ue,n(e(l).token&&w.showGas?`${w.showGas} ${e(l).token.chainCoinSymbol.toUpperCase()}`:"--"),1)])]),t("div",Me,[t("div",null,n(i.$t("createTips1")),1),t("div",null,n(i.$t("createTips2")),1),t("div",null,n(i.$t("createTips3")),1)]),c(o,{class:"btn",type:"primary",block:"",onClick:D},{default:k(()=>[f(n(i.$t("confirmAndLock")),1)]),_:1})])])]),_:1},8,["show"])}}},Re=ee(Fe,[["__scopeId","data-v-bf62a0c7"]]);const We={class:"body"},Ye={class:"title token-title"},He={key:0,class:"token-box"},Ve={key:1,class:"token"},je={class:"title"},Ke={class:"title"},Qe={__name:"Create",setup(w){const{t:d}=ue(),G=ke("global"),l=h(!1),D=h(!1),i=h(!1),S=ve(),o=oe(),U=P().add(1,"day").endOf("day").toDate(),y=h(U),g=h(""),L=h(!1),V=h(""),M=h(!1),F=h(""),$=h("");async function ne(){await o.connectWallet()}async function j(){if(o.token==null)return;if(o.token.address==r.wallet.MAIN_COIN_ADDRESS){l.value=!1;return}await r.wallet.isAllowanceEnough(o.lockContractAddress,o.token.address,o.walletAddress)?l.value=!1:l.value=!0}async function se(){D.value=!0;try{console.log("approve");let s=await r.wallet.approveMaxAmount(o.token.address,o.lockContractAddress);console.log(s),await s.wait(),l.value=!1}catch(s){console.log(s)}finally{D.value=!1}}async function ae(){i.value=!0,F.value="";try{if(!o.token){C(d("pleaseSelectToken"));return}if(!g.value){C(d("enterAmount"));return}let s=G.cfg.allowChainList.find(a=>a.chain==o.token.chain);if(!s){C(d("tokenChainNotSupport"));return}if(o.chainId!=s.chainId){C(d("switchTokenChain"));try{await r.wallet.switchNetwork(s.chainId)}catch{C(d("switchTokenChain"));return}return}if(Z(g.value).gt(Z($.value))){C(d("balanceSlow"));return}if(await j(),l.value){C(d("approveFirst"));return}await le()}catch(s){console.log(s)}finally{i.value=!1}}async function le(){const s=o.token.address,a=r.wallet.getEthersProvider(),p=await r.wallet.contractByProvider(a,s,H).decimals(),_=o.walletAddress,B=o.token.tokenType==1,u=z(g.value,p),R=P(y.value).endOf("day").unix(),W="",Y=r.wallet.contractByProvider(a,o.lockContractAddress,J),I=await a.getGasPrice();let K=await Y.estimateGas.lock(_,s,B,u.toString(),R,W);console.dir(K),V.value=X(K.mul(I)).toString(),L.value=!0}async function ce(){const s=q({message:"Loading...",forbidClick:!0,duration:0}),a=o.token.address,m=o.walletAddress,p=r.wallet.getEthersProvider(),_=o.token.tokenType==1,u=await r.wallet.contractByProvider(p,a,H).decimals(),R=z(g.value,u),W=P(y.value).endOf("day").unix(),Y=r.wallet.contractByProvider(p,o.lockContractAddress,J);try{let I=await Y.lock(m,a,_,R.toString(),W,"");console.dir(I),F.value=I.hash,M.value=!0,L.value=!1}catch(I){console.log(I)}finally{s.close()}}function ie(){S.push("/selectToken")}async function re(){if(!o.token)return;const s=q({message:"Loading...",forbidClick:!0,duration:0});try{const a=r.wallet.getEthersProvider();if(o.token.address==r.wallet.MAIN_COIN_ADDRESS){const m=await a.getBalance(o.walletAddress);$.value=X(m)}else{const m=r.wallet.contractByProvider(a,o.token.address,H),p=await m.decimals(),_=await m.balanceOf(o.walletAddress);$.value=pe(_,p)}}catch(a){console.log(a),o.token=null}finally{s.close()}}return fe(()=>{console.log("onMounted"),o.chainId>0&&o.isConnectWallet&&o.token&&(j(),re())}),(s,a)=>{const m=A("van-cell"),p=A("van-cell-group"),_=A("van-button"),B=A("van-action-bar");return v(),b(Q,null,[t("div",We,[c(p,{inset:"",class:"form-item"},{default:k(()=>[t("div",Ye,n(s.$t("selectToken2")),1),c(m,{"is-link":"",class:"token-cell",onClick:ie},he({_:2},[e(o).token?{name:"title",fn:k(()=>[e(o).token.tokenType==0?(v(),b("div",He,[c(T,{class:"token-icon",tokenIcon:e(o).token.icon,chainIcon:e(x)(e(o).token.chain)},null,8,["tokenIcon","chainIcon"]),f(" "+n(`${e(o).token.symbol} (${e(E)(e(o).token.address)})`),1)])):e(o).token.tokenType==1?(v(),b("div",Ve,[c(T,{class:"token-icon",tokenIcon:e(O)(e(o).token.chain,e(o).token.tokenList[0].address)},null,8,["tokenIcon"]),c(T,{class:"token-icon",tokenIcon:e(O)(e(o).token.chain,e(o).token.tokenList[1].address)},null,8,["tokenIcon"]),f(" "+n(`${e(o).token.symbol} (${e(E)(e(o).token.address)})`),1)])):te("",!0)]),key:"0"}:{name:"title",fn:k(()=>[t("div",{class:"token-box",style:{color:"#999999"}},n(s.$t("pleaseSelectToken")),1)]),key:"1"}]),1024)]),_:1}),c(p,{inset:"",class:"form-item"},{default:k(()=>[t("div",je,[t("div",null,n(e(d)("setNumberOfLock")),1),t("div",null,[f(n(`${e(d)("balance")}: `),1),t("span",null,n($.value?$.value:"--"),1)])]),t("div",null,[c(me,{amount:g.value,"onUpdate:amount":a[0]||(a[0]=u=>g.value=u),total:$.value,decimals:e(o).token?e(o).token.decimals:0},null,8,["amount","total","decimals"])])]),_:1}),c(p,{inset:"",class:"form-item"},{default:k(()=>[t("div",Ke,[t("div",null,n(s.$t("setDate")),1)]),t("div",null,[c(we,{date:y.value,"onUpdate:date":a[1]||(a[1]=u=>y.value=u),showTools:""},null,8,["date"])])]),_:1})]),c(B,{class:"tools"},{default:k(()=>[e(o).isConnectWallet?(v(),b(Q,{key:0},[l.value?(v(),N(_,{key:0,class:"btn",type:"danger",onClick:se,block:"",loading:D.value},{default:k(()=>[f(n(s.$t("approve")),1)]),_:1},8,["loading"])):(v(),N(_,{key:1,class:"btn",color:"#3F80F7",onClick:ae,block:"",loading:i.value},{default:k(()=>[f(n(s.$t("oneKeyLock")),1)]),_:1},8,["loading"]))],64)):(v(),N(_,{key:1,class:"btn",type:"primary",onClick:ne,block:""},{default:k(()=>[f(n(s.$t("connectWallet")),1)]),_:1}))]),_:1}),c(Re,{show:L.value,"onUpdate:show":a[2]||(a[2]=u=>L.value=u),unlockDate:y.value,amount:g.value,showGas:V.value,onConfirm:ce},null,8,["show","unlockDate","amount","showGas"]),c(_e,{show:M.value,"onUpdate:show":a[3]||(a[3]=u=>M.value=u),txHash:F.value,onClose:a[4]||(a[4]=u=>e(S).push("/"))},null,8,["show","txHash"])],64)}}},eo=ee(Qe,[["__scopeId","data-v-4f5a8f93"]]);export{eo as default};
