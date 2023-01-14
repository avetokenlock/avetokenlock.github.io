import{C as _e}from"./ContractQuery-eba9ba2d.js";import{I as ve}from"./InputQty-9edd7de0.js";import{d as S,_ as he,O as pe,S as me}from"./InputQty.vuevuetypestyleindex0scopedc76ad684lang-ebd520a2.js";import{T}from"./TokenIcon-11e8e5f5.js";import{a as Z,f as B,b as P,c as fe,B as R}from"./bignumber-ea2dde45.js";import{_ as ee,d as oe,D as ye,f as $,o as d,v as x,h,j as t,x as e,g as w,c,k,t as i,B as te,p as ne,q as se,C as we,b as Ce,r as f,y as ge,G as be,F as q,n as v,l as J,J as z,M as K,L as X,V as Ie,H as y,N as $e}from"./index-5a0fd75d.js";const b=r=>(ne("data-v-48af84f7"),r=r(),se(),r),Se={class:"ave-popup"},Te=b(()=>t("div",{class:"title"},"锁定确认",-1)),Le={class:"body"},Ae={class:"info"},De=b(()=>t("div",{class:"key"},"锁定资产",-1)),xe={class:"value"},Be={key:0,class:"token"},Pe={key:1,class:"token"},Ne={key:2,class:"token"},Ee=b(()=>t("div",{class:"key"},"锁定数量",-1)),Ge={class:"value"},Me=b(()=>t("div",{class:"key"},"所属公链",-1)),Ue={class:"value"},Fe=b(()=>t("div",{class:"key"},"解除锁定",-1)),Oe={class:"value"},Ve={class:"blue-font"},We=b(()=>t("div",{class:"key"},"服务费",-1)),He={class:"value"},Re=b(()=>t("div",{class:"tips"},[t("div",null,"*1, 如代币存在交易限额可能会造成锁定失败;"),t("div",null," 2, 如代币存在交易或转账燃烧, 可能会造成实际锁定数量小于页面显示数量;"),t("div",null," 3, 锁定完成后, 将无法撤回或提前终止锁定。")],-1)),Ye={__name:"LockConfirmPopup",props:{show:Boolean,showGas:String,amount:String,unlockDate:Date},emits:["update:show","confirm"],setup(r,{emit:p}){const N=r,a=oe(),A=ye(()=>{if(!N.unlockDate)return 0;const E=S(N.unlockDate),o=S().startOf("day");return E.diff(o,"day")});function D(){p("confirm")}return(E,o)=>{const F=$("van-button"),C=$("van-popup");return d(),x(C,{show:r.show,"onUpdate:show":o[0]||(o[0]=m=>{p("update:show",m)}),round:"",closeable:"",position:"bottom"},{default:h(()=>[t("div",Se,[Te,t("div",Le,[t("ul",Ae,[t("li",null,[De,t("div",xe,[e(a).token?e(a).token.tokenType==0?(d(),w("div",Pe,[c(T,{class:"token-icon",tokenIcon:e(a).token.icon,chainIcon:e(Z)(e(a).token.chain)},null,8,["tokenIcon","chainIcon"]),k(" "+i(`${e(a).token.symbol} (${e(B)(e(a).token.address)})`),1)])):e(a).token.tokenType==1?(d(),w("div",Ne,[c(T,{class:"token-icon",tokenIcon:e(P)(e(a).token.chain,e(a).token.tokenList[0].address)},null,8,["tokenIcon"]),c(T,{class:"token-icon",tokenIcon:e(P)(e(a).token.chain,e(a).token.tokenList[1].address)},null,8,["tokenIcon"]),k(" "+i(`${e(a).token.symbol} (${e(B)(e(a).token.address)})`),1)])):te("",!0):(d(),w("div",Be," -- "))])]),t("li",null,[Ee,t("div",Ge,i(r.amount),1)]),t("li",null,[Me,t("div",Ue,i(e(a).token?e(a).token.chain.toUpperCase():"--"),1)]),t("li",null,[Fe,t("div",Oe,[t("span",null,i(e(S)(r.unlockDate).format("YYYY-MM-DD")),1),t("span",null,[k("("),t("span",Ve,"剩余"+i(e(A))+"天",1),k(")")])])]),t("li",null,[We,t("div",He,i(e(a).token&&r.showGas?`${r.showGas} ${e(a).token.chainCoinSymbol.toUpperCase()}`:"--"),1)])]),Re,c(F,{class:"btn",type:"primary",block:"",onClick:D},{default:h(()=>[k("确认并锁定")]),_:1})])])]),_:1},8,["show"])}}},je=ee(Ye,[["__scopeId","data-v-48af84f7"]]);const L=r=>(ne("data-v-5aa213a2"),r=r(),se(),r),Qe={class:"body"},qe={key:0,class:"info"},Je=L(()=>t("div",{class:"key"},"名称",-1)),ze={class:"value"},Ke=L(()=>t("div",{class:"key"},"符号",-1)),Xe={class:"value"},Ze=L(()=>t("div",{class:"key"},"合约",-1)),eo={class:"value"},oo=L(()=>t("div",{class:"title token-title"},"选择代币",-1)),to={key:0,class:"token-box"},no={key:1,class:"token"},so={class:"title"},ao=L(()=>t("div",null,"设置锁定数量",-1)),lo=L(()=>t("div",{class:"title"},[t("div",null,"设置锁定日期")],-1)),co={__name:"Create",setup(r){const{t:p}=we(),N=Ce("global"),a=f(!1),A=f(!1),D=f(!1),E=ge(),o=oe(),F=S().startOf("day").add(1,"day").toDate(),C=f(F),m=f(""),G=f(!1),Y=f(""),O=f(!1),V=f("");async function ae(){await o.connectWallet()}async function j(){console.log("checkAllowance"),await v.wallet.isAllowanceEnough(o.lockContractAddress,o.token.address,o.walletAddress)?a.value=!1:a.value=!0}async function le(){A.value=!0;try{let s=await v.wallet.approveMaxAmount(o.token.address,o.lockContractAddress);console.log(s),await s.wait(),a.value=!1}catch(s){console.log(s)}finally{A.value=!1}}async function ce(){D.value=!0,V.value="";try{if(!o.token){y(p("pleaseSelectToken"));return}if(!m.value){y("请输入金额");return}let s=N.cfg.allowChainList.find(_=>_.chain==o.token.chain);if(!s){y(p("tokenChainNotSupport"));return}if(o.chainId!=s.chainId){y(p("switchTokenChain"));try{await v.wallet.switchNetwork(s.chainId)}catch{y(p("switchTokenChain"));return}return}if(Number(m)>o.token.amount){y(p("blanceSlow"));return}if(await j(),a.value){y(p("approveFirst"));return}await ie()}catch(s){console.log(s)}finally{D.value=!1}}async function ie(){const s=o.token.address,l=v.wallet.getEthersProvider(),n=await v.wallet.contractByProvider(l,s,z).decimals(),g=o.walletAddress,M=o.token.tokenType==1,u=K(m.value,n),W=S(C.value).unix(),H="",U=v.wallet.contractByProvider(l,o.lockContractAddress,X);console.dir(U);const I=await l.getGasPrice();let Q=await U.estimateGas.lock(g,s,M,u.toString(),W,H);console.dir(Q),Y.value=$e(Q.mul(I)).toString(),G.value=!0}async function re(){const s=J({message:"Loading...",forbidClick:!0,duration:0}),l=o.token.address,_=o.walletAddress,n=v.wallet.getEthersProvider(),g=o.token.tokenType==1,u=await v.wallet.contractByProvider(n,l,z).decimals(),W=K(m.value,u),H=S(C.value).unix(),U=v.wallet.contractByProvider(n,o.lockContractAddress,X);try{let I=await U.lock(_,l,g,W.toString(),H,"");console.dir(I),V.value=I.hash,O.value=!0,G.value=!1}catch(I){console.log(I)}finally{s.close()}}function de(){E.push("/selectToken")}async function ue(s,l){let _=await v.debank.getTokenList(o.walletAddress,s);for(let n of _.data.data)if(n.token=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(n.token=v.wallet.MAIN_COIN_ADDRESS),new RegExp("^0x.*$","gi").test(n.token)&&n.value>0&&n.risk_score<60&&n.risk_level>=0&&n.flag!=="blacklist"&&n.symbol!==""&&n.token.toLowerCase()==l.toLowerCase())return n.flag=="lp"?{tokenList:[{address:"",symbol:""},{address:"",symbol:""}],symbol:"",address:n.token.toLowerCase(),tokenId:`${n.token}-${n.chain}`.toLowerCase(),chain:n.chain.toLowerCase(),decimals:n.decimals,amount:n.value,price:n.current_price_usd,hasTokenInfo:!1,tokenType:1,chainCoinSymbol:"BNB",name:n.name}:{address:n.token.toLowerCase(),tokenId:`${n.token}-${n.chain}`.toLowerCase(),chain:n.chain.toLowerCase(),symbol:n.symbol,decimals:n.decimals,icon:P(n.chain.toLowerCase(),n.token.toLowerCase()),amount:n.value,price:n.current_price_usd,tokenType:0,chainCoinSymbol:"BNB",name:n.name};return null}async function ke(s,l){if(!l){o.isSelectSearchToken=!1;return}const _=J({message:"Loading...",forbidClick:!0,duration:0});try{const n=await ue(s,l);if(n==null){y("未找到代币/LP"),o.isSelectSearchToken=!1;return}o.isSelectSearchToken=!0,o.token=n}catch(n){console.log(n)}finally{_.close()}}return be(()=>{console.log("onMounted"),o.chainId>0&&o.isConnectWallet&&o.token&&j()}),(s,l)=>{const _=$("van-cell"),n=$("van-cell-group"),g=$("van-button"),M=$("van-action-bar");return d(),w(q,null,[c(_e,{class:"query",onContractQuery:ke}),t("div",Qe,[e(o).isSelectSearchToken?(d(),w("ul",qe,[t("li",null,[Je,t("div",ze,i(e(o).token.name),1)]),t("li",null,[Ke,t("div",Xe,i(e(o).token.symbol),1)]),t("li",null,[Ze,t("div",eo,[k(i(e(B)(e(o).token.address))+" ",1),c(he,{class:"copy-icon",name:"copy",onClick:l[0]||(l[0]=u=>e(fe)(e(o).token.address))})])])])):(d(),x(n,{key:1,inset:"",class:"form-item"},{default:h(()=>[oo,c(_,{"is-link":"",class:"token-cell",onClick:de},Ie({_:2},[e(o).token?{name:"title",fn:h(()=>[e(o).token.tokenType==0?(d(),w("div",to,[c(T,{class:"token-icon",tokenIcon:e(o).token.icon,chainIcon:e(Z)(e(o).token.chain)},null,8,["tokenIcon","chainIcon"]),k(" "+i(`${e(o).token.symbol} (${e(B)(e(o).token.address)})`),1)])):e(o).token.tokenType==1?(d(),w("div",no,[c(T,{class:"token-icon",tokenIcon:e(P)(e(o).token.chain,e(o).token.tokenList[0].address)},null,8,["tokenIcon"]),c(T,{class:"token-icon",tokenIcon:e(P)(e(o).token.chain,e(o).token.tokenList[1].address)},null,8,["tokenIcon"]),k(" "+i(`${e(o).token.symbol} (${e(B)(e(o).token.address)})`),1)])):te("",!0)]),key:"0"}:{name:"title",fn:h(()=>[t("div",{class:"token-box",style:{color:"#999999"}},i(s.$t("pleaseSelectToken")),1)]),key:"1"}]),1024)]),_:1})),c(n,{inset:"",class:"form-item"},{default:h(()=>[t("div",so,[ao,t("div",null,[k("余额："),t("span",null,i(e(o).token?e(R)(e(o).token.amount).toString().indexOf(".")==-1?e(R)(e(o).token.amount):e(R)(e(o).token.amount).toFixed(6):"--"),1)])]),t("div",null,[c(ve,{amount:m.value,"onUpdate:amount":l[1]||(l[1]=u=>m.value=u),total:e(o).token?e(o).token.amount:0},null,8,["amount","total"])])]),_:1}),c(n,{inset:"",class:"form-item"},{default:h(()=>[lo,t("div",null,[c(me,{date:C.value,"onUpdate:date":l[2]||(l[2]=u=>C.value=u),showTools:""},null,8,["date"])])]),_:1})]),c(M,{class:"tools"},{default:h(()=>[e(o).isConnectWallet?(d(),w(q,{key:0},[a.value?(d(),x(g,{key:0,class:"btn",type:"danger",onClick:le,block:"",loading:A.value},{default:h(()=>[k(i(s.$t("approve")),1)]),_:1},8,["loading"])):(d(),x(g,{key:1,class:"btn",color:"#3F80F7",onClick:ce,block:"",loading:D.value},{default:h(()=>[k("一键锁定")]),_:1},8,["loading"]))],64)):(d(),x(g,{key:1,class:"btn",type:"primary",onClick:ae,block:""},{default:h(()=>[k(i(s.$t("connectWallet")),1)]),_:1}))]),_:1}),c(je,{show:G.value,"onUpdate:show":l[3]||(l[3]=u=>G.value=u),unlockDate:C.value,amount:m.value,showGas:Y.value,onConfirm:re},null,8,["show","unlockDate","amount","showGas"]),c(pe,{show:O.value,"onUpdate:show":l[4]||(l[4]=u=>O.value=u),txHash:V.value},null,8,["show","txHash"])],64)}}},ho=ee(co,[["__scopeId","data-v-5aa213a2"]]);export{ho as default};
