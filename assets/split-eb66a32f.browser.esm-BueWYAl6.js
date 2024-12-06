const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CO__PkzL.js","assets/index-Oe1SvVGL.css"])))=>i.map(i=>d[i]);
var b=Object.defineProperty;var v=(i,t,e)=>t in i?b(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>v(i,typeof t!="symbol"?t+"":t,e);import{S as C,C as A,A as P,U as _,a as T,B as u,r as n,_ as O,s as S,p as k,c as l,T as o}from"./index-CO__PkzL.js";import{C as I,a as E,G as B,b as N}from"./contract-appuri-5c40af52.browser.esm-DpQuP50T.js";import{C as L}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as U}from"./contract-roles-71988d2e.browser.esm-A7J2PsBh.js";const h=class h{constructor(t,e,a){c(this,"withdraw",l(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await n(t)]})));c(this,"withdrawToken",l(async(t,e)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:await Promise.all([n(e),n(t)])})));c(this,"distribute",l(async()=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]})));c(this,"distributeToken",l(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await n(t)]})));let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new A(t,e,s,r,a);this._chainId=p,this.abi=P.parse(s||[]),this.contractWrapper=d,this.storage=a,this.metadata=new I(this.contractWrapper,_,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new U(this.contractWrapper,h.contractRoles),this.encoder=new T(this.contractWrapper),this.estimator=new B(this.contractWrapper),this.events=new N(this.contractWrapper),this.interceptor=new L(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAllRecipients(){const t=[];let e=u.from(0);const a=await this.contractWrapper.read("payeeCount",[]);for(;e.lt(a);)try{const r=await this.contractWrapper.read("payee",[e]);t.push(await this.getRecipientSplitPercentage(r)),e=e.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),e={};for(const a of t)e[a.address]=await this.balanceOf(a.address);return e}async balanceOfTokenAllRecipients(t){const[e,a]=await Promise.all([n(t),this.getAllRecipients()]),r={};for(const s of a)r[s.address]=await this.balanceOfToken(s.address,e);return r}async balanceOf(t){const[e,a,r]=await Promise.all([n(t),this.contractWrapper.getProvider().getBalance(this.getAddress()),this.contractWrapper.read("totalReleased",[])]),s=a.add(r);return this._pendingPayment(e,s,await this.contractWrapper.read("released",[e]))}async balanceOfToken(t,e){const[a,r]=await Promise.all([n(e),n(t)]),s=(await O(async()=>{const{default:y}=await import("./index-CO__PkzL.js").then(R=>R.dZ);return{default:y}},__vite__mapDeps([0,1]))).default,p=new S(a,s,this.contractWrapper.getProvider()),[d,W,g]=await Promise.all([p.balanceOf(this.getAddress()),this.contractWrapper.read("totalReleased",[a]),this.contractWrapper.read("released",[a,r])]),w=d.add(W),f=await this._pendingPayment(r,w,g);return await k(this.contractWrapper.getProvider(),a,f)}async getRecipientSplitPercentage(t){const[e,a,r]=await Promise.all([n(t),this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[t])]);return{address:e,splitPercentage:r.mul(u.from(1e7)).div(a).toNumber()/1e5}}async _pendingPayment(t,e,a){const[r,s]=await Promise.all([n(t),this.contractWrapper.read("totalShares",[])]);return e.mul(await this.contractWrapper.read("shares",[r])).div(s).sub(a)}async prepare(t,e,a){return o.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a})}async call(t,e,a){return this.contractWrapper.call(t,e,a)}};c(h,"contractRoles",C);let m=h;export{m as Split};
