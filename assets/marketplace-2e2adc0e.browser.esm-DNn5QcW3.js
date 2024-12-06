const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CO__PkzL.js","assets/index-Oe1SvVGL.css"])))=>i.map(i=>d[i]);
var U=Object.defineProperty;var V=(g,t,r)=>t in g?U(g,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):g[t]=r;var d=(g,t,r)=>V(g,typeof t!="symbol"?t+"":t,r);import{M as z,C as H,A as K,e as Y,a as O,b as w,L as A,B as s,g as L,c as p,i as v,f as I,h as j,T as u,W as q,r as W,n as C,j as Q,k as Z,l as D,m as J,o as R,p as P,q as X,_ as E,s as b}from"./index-CO__PkzL.js";import{D as tt,f as N,I as rt,a as et}from"./QueryParams-32a56510.browser.esm-Bh_ibkBN.js";import{m as _,v as x,h as F,i as at,a as nt}from"./marketplace-e3129e2f.browser.esm-BXPHAotq.js";import{C as st,a as ot,G as it,b as $}from"./contract-appuri-5c40af52.browser.esm-DpQuP50T.js";import{C as ct}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as dt}from"./contract-platform-fee-e756e68f.browser.esm-CSHn3nRm.js";import{C as pt}from"./contract-roles-71988d2e.browser.esm-A7J2PsBh.js";import{c as G}from"./cleanCurrencyAddress-ded19cfe.browser.esm-CE823IZG.js";import{s as B}from"./setErc20Allowance-7f76f677.browser.esm-DrmK6hne.js";let l=function(g){return g[g.Direct=0]="Direct",g[g.Auction=1]="Auction",g}({});class ut{constructor(t,r){d(this,"createListing",p(async t=>{x(t);const r=await W(t.assetContractAddress),e=await W(t.currencyContractAddress);await F(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await C(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),n=await C(this.contractWrapper.getProvider(),t.reservePricePerToken,e);let o=Math.floor(t.startTimestamp.getTime()/1e3);const h=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;o<h&&(o=h);const c=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:G(e),listingType:l.Auction,quantityToList:t.quantity,reservePricePerToken:n,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(o)}],parse:m=>({id:this.contractWrapper.parseLogs("ListingAdded",m==null?void 0:m.logs)[0].args.listingId,receipt:m})});return c.setGasLimitMultiple(1.2),c}));d(this,"createListingsBatch",p(async t=>{const r=(await Promise.all(t.map(a=>this.createListing.prepare(a)))).map(a=>a.encode()),e=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:a=>this.contractWrapper.parseLogs("ListingAdded",a==null?void 0:a.logs).map(o=>({id:o.args.listingId,receipt:a}))});return e.setGasLimitMultiple(1.2),e}));d(this,"buyoutListing",p(async t=>{const r=await this.validateListing(s.from(t)),e=await Q(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,Z(r.buyoutPrice,e.decimals))}));d(this,"makeBid",p(async(t,r)=>{const e=await this.validateListing(s.from(t)),a=await C(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(s.from(0)))throw new Error("Cannot make a bid with 0 value");const n=await this.contractWrapper.read("bidBufferBps",[]),o=await this.getWinningBid(t);if(o){const f=at(o.pricePerToken,a,n);v(f)}else{const f=a,y=s.from(e.reservePrice);v(f.gte(y))}const i=s.from(e.quantity),h=a.mul(i),c=await this.contractWrapper.getCallOverrides()||{};await B(this.contractWrapper,h,e.currencyContractAddress,c);const m=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,D],overrides:c});return m.setGasLimitMultiple(1.2),m}));d(this,"cancelListing",p(async t=>{const r=await this.validateListing(s.from(t)),e=s.from(Math.floor(Date.now()/1e3)),a=s.from(r.startTimeInEpochSeconds),n=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&n.offeror!==w)throw new J(t.toString());const o=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),await this.contractWrapper.getSignerAddress()]});return o.setGasLimitMultiple(1.2),o}));d(this,"closeListing",p(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateListing(s.from(t));try{const a=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),r]});return a.setGasLimitMultiple(1.2),a}catch(a){throw a.message.includes("cannot close auction before it has ended")?new R(t.toString(),e.endTimeInEpochSeconds.toString()):a}}));d(this,"executeSale",p(async t=>{const r=await this.validateListing(s.from(t));try{const e=await this.getWinningBid(t);v(e,"No winning bid found");const a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),n=this.encoder.encode("closeAuction",[t,e.buyerAddress]),o=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,n]});return o.setGasLimitMultiple(1.2),o}catch(e){throw e.message.includes("cannot close auction before it has ended")?new R(t.toString(),r.endTimeInEpochSeconds.toString()):e}}));d(this,"updateListing",p(async t=>{const r=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]});return r.setGasLimitMultiple(1.2),r}));this.contractWrapper=t,this.storage=r,this.encoder=new O(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new A(this.getAddress(),t.toString());if(r.listingType!==l.Auction)throw new q(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(s.from(t));const r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==w)return await _(this.contractWrapper.getProvider(),s.from(t),r)}async getWinner(t){const r=await this.validateListing(s.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=s.from(Math.floor(Date.now()/1e3)),n=s.from(r.endTimeInEpochSeconds);if(a.gt(n)&&e.offeror!==w)return e.offeror;const h=(await new $(this.contractWrapper).getEvents("AuctionClosed")).find(c=>c.data.listingId.eq(s.from(t)));if(!h)throw new Error(`Could not find auction with listingId ${t} in closed auctions`);return h.data.winningBidder}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),this.validateListing(s.from(t))]),n=e?e.currencyValue.value:a.reservePrice,o=n.add(n.mul(r).div(1e4));return P(this.contractWrapper.getProvider(),a.currencyContractAddress,o)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await N(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:s.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:l.Auction}}}class ht{constructor(t,r){d(this,"createListing",p(async t=>{x(t);const r=await W(t.assetContractAddress),e=await W(t.currencyContractAddress);await F(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await C(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e);let n=Math.floor(t.startTimestamp.getTime()/1e3);const i=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;n<i&&(n=i);const h=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:G(e),listingType:l.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(n)}],parse:c=>({id:this.contractWrapper.parseLogs("ListingAdded",c==null?void 0:c.logs)[0].args.listingId,receipt:c})});return h.setGasLimitMultiple(1.2),h}));d(this,"createListingsBatch",p(async t=>{const r=(await Promise.all(t.map(a=>this.createListing.prepare(a)))).map(a=>a.encode()),e=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:a=>this.contractWrapper.parseLogs("ListingAdded",a==null?void 0:a.logs).map(o=>({id:o.args.listingId,receipt:a}))});return e.setGasLimitMultiple(1.2),e}));d(this,"makeOffer",p(async(t,r,e,a,n)=>{if(I(e))throw new Error("You must use the wrapped native token address when making an offer with a native token");const o=await C(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(y){throw console.error("Failed to get listing, err =",y),new Error(`Error getting the listing with id ${t}`)}const i=s.from(r),h=s.from(o).mul(i),c=await this.contractWrapper.getCallOverrides()||{};await B(this.contractWrapper,h,e,c);let m=D;n&&(m=s.from(Math.floor(n.getTime()/1e3)));const f=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,o,m],overrides:c});return f.setGasLimitMultiple(1.2),f}));d(this,"acceptOffer",p(async(t,r)=>{await this.validateListing(s.from(t));const e=await W(r),a=await this.contractWrapper.read("offers",[t,e]),n=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]});return n.setGasLimitMultiple(1.2),n}));d(this,"buyoutListing",p(async(t,r,e)=>{const a=await this.validateListing(s.from(t)),{valid:n,error:o}=await this.isStillValidListing(a,r);if(!n)throw new Error(`Listing ${t} is no longer valid. ${o}`);const i=e||await this.contractWrapper.getSignerAddress(),h=s.from(r),c=s.from(a.buyoutPrice).mul(h),m=await this.contractWrapper.getCallOverrides()||{};await B(this.contractWrapper,c,a.currencyContractAddress,m);const f=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,i,h,a.currencyContractAddress,c],overrides:m});return f.setGasLimitMultiple(1.2),f}));d(this,"updateListing",p(async t=>{const r=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await W(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]});return r.setGasLimitMultiple(1.2),r}));d(this,"cancelListing",p(async t=>{const r=u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]});return r.setGasLimitMultiple(1.2),r}));this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new A(this.getAddress(),t.toString());if(r.listingType!==l.Direct)throw new q(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(s.from(t)),v(X(r));const e=await this.contractWrapper.read("offers",[t,await W(r)]);if(e.offeror!==w)return await _(this.contractWrapper.getProvider(),s.from(t),e)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await N(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:l.Direct}}async isStillValidListing(t,r){if(!await nt(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress))return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};const a=this.contractWrapper.getProvider(),n=(await E(async()=>{const{default:c}=await import("./IERC165-ODxXmlQV.js");return{default:c}},[])).default,o=new b(t.assetContractAddress,n,a),i=await o.supportsInterface(rt),h=await o.supportsInterface(et);if(i){const c=(await E(async()=>{const{default:T}=await import("./index-CO__PkzL.js").then(S=>S.d_);return{default:T}},__vite__mapDeps([0,1]))).default,m=new b(t.assetContractAddress,c,a);let f;try{f=await m.ownerOf(t.tokenId)}catch{}const y=(f==null?void 0:f.toLowerCase())===t.sellerAddress.toLowerCase();return{valid:y,error:y?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}else if(h){const c=(await E(async()=>{const{default:T}=await import("./index-CO__PkzL.js").then(S=>S.e0);return{default:T}},__vite__mapDeps([0,1]))).default,y=(await new b(t.assetContractAddress,c,a).balanceOf(t.sellerAddress,t.tokenId)).gte(r||t.quantity);return{valid:y,error:y?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}else return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}}const k=class k{constructor(t,r,e){d(this,"getAll",this.getAllListings);d(this,"buyoutListing",p(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new A(this.getAddress(),t.toString());switch(a.listingType){case l.Direct:return v(r!==void 0),await this.direct.buyoutListing.prepare(t,r,e);case l.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));d(this,"makeOffer",p(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new A(this.getAddress(),t.toString());const n=await this.contractWrapper.getChainID();switch(a.listingType){case l.Direct:return v(e),await this.direct.makeOffer.prepare(t,e,I(a.currency)?j[n].wrapped.address:a.currency,r);case l.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));d(this,"setBidBufferBps",p(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getTimeBufferInSeconds();return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,s.from(t)]})}));d(this,"setTimeBufferInSeconds",p(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getBidBufferBps();return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[s.from(t),r]})}));d(this,"allowListingFromSpecificAssetOnly",p(async t=>{const r=[];return(await this.roles.get("asset")).includes(w)&&r.push(this.encoder.encode("revokeRole",[L("asset"),w])),r.push(this.encoder.encode("grantRole",[L("asset"),t])),u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}));d(this,"allowListingFromAnyAsset",p(async()=>{const t=[],r=await this.roles.get("asset");for(const e in r)t.push(this.encoder.encode("revokeRole",[L("asset"),e]));return t.push(this.encoder.encode("grantRole",[L("asset"),w])),u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})}));let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new H(t,r,n,a,e);this._chainId=o,this.abi=K.parse(n||[]),this.contractWrapper=i,this.storage=e,this.metadata=new st(this.contractWrapper,Y,this.storage),this.app=new ot(this.contractWrapper,this.metadata,this.storage),this.roles=new pt(this.contractWrapper,k.contractRoles),this.encoder=new O(this.contractWrapper),this.estimator=new it(this.contractWrapper),this.direct=new ht(this.contractWrapper,this.storage),this.auction=new ut(this.contractWrapper,this.storage),this.events=new $(this.contractWrapper),this.platformFees=new dt(this.contractWrapper),this.interceptor=new ct(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new A(this.getAddress(),t.toString());switch(r.listingType){case l.Auction:return await this.auction.mapListing(r);case l.Direct:return await this.direct.mapListing(r);default:throw new Error(`Unknown listing type: ${r.listingType}`)}}async getActiveListings(t){const r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=s.from(Math.floor(Date.now()/1e3));return e.filter(n=>n.type===l.Auction&&s.from(n.endTimeInEpochSeconds).gt(a)&&s.from(n.startTimeInEpochSeconds).lte(a)||n.type===l.Direct&&s.from(n.quantity).gt(0))}async getAllListings(t){const r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.read("hasRole",[L("lister"),w])}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){const r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map(e=>_(this.contractWrapper.getProvider(),s.from(t),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror})))}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map(async e=>{let a;try{a=await this.getListing(e)}catch(n){if(n instanceof A)return;console.warn(`Failed to get listing ${e}' - skipping. Try 'marketplace.getListing(${e})' to get the underlying error.`);return}if(a.type===l.Auction)return a;if(t){const{valid:n}=await this.direct.isStillValidListing(a);if(!n)return}return a}))).filter(e=>e!==void 0)}applyFilter(t,r){let e=[...t];const a=s.from((r==null?void 0:r.start)||0).toNumber(),n=s.from((r==null?void 0:r.count)||tt).toNumber();return r&&(r.seller&&(e=e.filter(o=>{var i;return o.sellerAddress.toString().toLowerCase()===((i=r==null?void 0:r.seller)==null?void 0:i.toString().toLowerCase())})),r.tokenContract&&(e=e.filter(o=>{var i;return o.assetContractAddress.toString().toLowerCase()===((i=r==null?void 0:r.tokenContract)==null?void 0:i.toString().toLowerCase())})),r.tokenId!==void 0&&(e=e.filter(o=>{var i;return o.tokenId.toString()===((i=r==null?void 0:r.tokenId)==null?void 0:i.toString())})),e=e.filter((o,i)=>i>=a),e=e.slice(0,n)),e}async prepare(t,r,e){return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};d(k,"contractRoles",z);let M=k;export{M as Marketplace};
