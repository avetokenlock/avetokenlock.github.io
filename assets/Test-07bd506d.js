import{d as r,o as i,f as _,c as m,g as p,k as o,I as n,j as d}from"./index-16fefa86.js";import{l as u}from"./lpABI-5e9b72a1.js";const k={__name:"Test",setup(f){async function c(){let t=o.wallet.contract("0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b",u);console.dir(t);let e=await t.token0();console.log(e);let a=o.wallet.contract(e,n),l=await t.token1();console.log(l);let s=o.wallet.contract(l,n);console.log(await a.symbol()+"/"+await s.symbol())}return(t,e)=>{const a=r("van-button");return i(),_("div",null,[m(a,{onClick:c},{default:p(()=>[d("干我")]),_:1})])}}};export{k as default};
