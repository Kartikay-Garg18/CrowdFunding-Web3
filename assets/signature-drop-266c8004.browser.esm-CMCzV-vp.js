var g=Object.defineProperty;var f=(c,e,t)=>e in c?g(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var s=(c,e,t)=>f(c,typeof e!="symbol"?e+"":e,t);import{D as h}from"./QueryParams-32a56510.browser.esm-Bh_ibkBN.js";import{N as w,C as W,A as T,y as b,a as y,z as A,B as i,g as S,b as E,c as p,T as N}from"./index-CO__PkzL.js";import{C as R,a as U,G as k,b as M}from"./contract-appuri-5c40af52.browser.esm-DpQuP50T.js";import{C as I}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as x,D as F,a as L}from"./contract-owner-49e75547.browser.esm-BRvQpjy3.js";import{C as _}from"./contract-platform-fee-e756e68f.browser.esm-CSHn3nRm.js";import{C as v}from"./contract-roles-71988d2e.browser.esm-A7J2PsBh.js";import{C as B}from"./contract-sales-918c7cb8.browser.esm-RZkQjyr_.js";import{D}from"./drop-claim-conditions-e6f2abbf.browser.esm-B2znPyIh.js";import{S as O}from"./erc-721-standard-4c4125d2.browser.esm-CUxAtF1e.js";import{E as d}from"./erc-721-27306550.browser.esm-DzZNf_s9.js";import{P as z}from"./thirdweb-checkout-f6974aaf.browser.esm-DvCfh_On.js";import"./setErc20Allowance-7f76f677.browser.esm-DrmK6hne.js";import"./index-D_UEIhFI.js";import"./treeify-BiRgWfqK.js";import"./assertEnabled-d1700f0b.browser.esm-0yURZZG5.js";const m=class m extends O{constructor(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,C=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,n,a);super(C,a,l);s(this,"createBatch",p(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));s(this,"claimTo",p(async(t,r,a)=>this.erc721.claimTo.prepare(t,r,a)));s(this,"claim",p(async(t,r)=>this.erc721.claim.prepare(t,r)));s(this,"burn",p(async t=>this.erc721.burn.prepare(t)));this.abi=T.parse(o||[]),this.metadata=new R(this.contractWrapper,b,this.storage),this.app=new U(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,m.contractRoles),this.royalties=new x(this.contractWrapper,this.metadata),this.sales=new B(this.contractWrapper),this.encoder=new y(this.contractWrapper),this.estimator=new k(this.contractWrapper),this.events=new M(this.contractWrapper),this.platformFees=new _(this.contractWrapper),this.interceptor=new I(this.contractWrapper),this.claimConditions=new D(this.contractWrapper,this.metadata,this.storage),this.signature=new d(this.contractWrapper,this.storage),this.revealer=new F(this.contractWrapper,this.storage,A.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new d(this.contractWrapper,this.storage),this.owner=new L(this.contractWrapper),this.checkout=new z(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||h).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),r+a);return await Promise.all(Array.from(Array(n).keys()).map(o=>this.get(o.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||h).toNumber(),n=i.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),o=i.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+a));return await Promise.all(Array.from(Array(o.sub(n).toNumber()).keys()).map(l=>this.erc721.getTokenMetadata(n.add(l).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[S("transfer"),E])}async getClaimTransaction(t,r,a){return this.erc721.getClaimTransaction(t,r,a)}async prepare(t,r,a){return N.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};s(m,"contractRoles",w);let u=m;export{u as SignatureDrop};