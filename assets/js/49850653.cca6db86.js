"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5444],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(r),m=n,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||l;return r?a.createElement(p,o(o({ref:t},c),{},{components:r})):a.createElement(p,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},48570:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={},s="Incentive Mechanism for BSC Relayer",d={unversionedId:"learn/incentives",id:"learn/incentives",isDocsHomePage:!1,title:"Incentive Mechanism for BSC Relayer",description:"The BSC relayers play an important role in relaying interchain packages from BC to BSC.",source:"@site/docs/learn/incentives.md",sourceDirName:"learn",slug:"/learn/incentives",permalink:"/docs/learn/incentives",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/learn/incentives.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"BSC Relayer",permalink:"/docs/learn/bsc-relayer"},next:{title:"Oracle Module",permalink:"/docs/learn/oracle-module"}},c=[{value:"Principle",id:"principle",children:[],level:2},{value:"Rewards Source and Allocation",id:"rewards-source-and-allocation",children:[],level:2},{value:"Rewards Distribution Formula",id:"rewards-distribution-formula",children:[{value:"Weight formula for package relayers:",id:"weight-formula-for-package-relayers",children:[],level:3},{value:"Weight formula for header relayers:",id:"weight-formula-for-header-relayers",children:[],level:3},{value:"We consider setting these parameters a reasonable value:",id:"we-consider-setting-these-parameters-a-reasonable-value",children:[],level:3},{value:"Distribution And Claim Reward",id:"distribution-and-claim-reward",children:[],level:3}],level:2},{value:"Other Consideration",id:"other-consideration",children:[{value:"System Reward Pool",id:"system-reward-pool",children:[],level:3},{value:"Foul Play",id:"foul-play",children:[],level:3}],level:2}],u={toc:c};function h(e){var t=e.components,i=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"incentive-mechanism-for-bsc-relayer"},"Incentive Mechanism for BSC Relayer"),(0,l.kt)("p",null,"The BSC relayers play an important role in relaying interchain packages from BC to BSC.\nAll BSC relayers build their stable infrastructure, watch any event happened on the Beacon Chain, and act timely to get paid accordingly. The following discussion is about how to distribute the rewards to let the relayers are willing to make a long-term contribution."),(0,l.kt)("h2",{id:"principle"},"Principle"),(0,l.kt)("p",null,"Considering the following points:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Fairness, competitiveness, and redundancy: Everyone has a chance to run a relayer even on cheap hardware. It should be hard for someone to get all the rewards."),(0,l.kt)("li",{parentName:"ol"},"Simplicity."),(0,l.kt)("li",{parentName:"ol"},"Robustness: The relayer may have a strategy to make its largest profit accordingly, under any condition, the interchain communication should not be blocked."),(0,l.kt)("li",{parentName:"ol"},"Low Risk: The relayer should take a little risk to play in this game. For the top N relayers, they should gain enough rewards to cover the cost.")),(0,l.kt)("p",null,"It is tough hard to achieve all these goals; we make some trade-off on robustness and low risk in the following design."),(0,l.kt)("h2",{id:"rewards-source-and-allocation"},"Rewards Source and Allocation"),(0,l.kt)("p",null,"We have three reward sources:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Users paid rewards: Users who send ",(0,l.kt)("inlineCode",{parentName:"li"},"bind")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"cross chain transfer")," transactions need to pay extra fee as BSC relayer rewards."),(0,l.kt)("li",{parentName:"ol"},"System rewards: Rewards comes from ",(0,l.kt)("inlineCode",{parentName:"li"},"SystemReward")," contract.")),(0,l.kt)("p",null,"The role of relayers and their rewards comes from:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Relayer Behavior"),(0,l.kt)("th",{parentName:"tr",align:null},"Rewards come from"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User packages(bind, unbind, transfer) from BC to BSC"),(0,l.kt)("td",{parentName:"tr",align:null},"Users pay for the reward")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System packages(staking, slash, governance) from BC to BSC"),(0,l.kt)("td",{parentName:"tr",align:null},"System reward")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Relayer for sync tendermint header to light client contract"),(0,l.kt)("td",{parentName:"tr",align:null},"System reward")))),(0,l.kt)("h2",{id:"rewards-distribution-formula"},"Rewards Distribution Formula"),(0,l.kt)("p",null,"To prevent the relayer who has the best network always winning the game, we gather the reward into two reward pools (header relayer reward pool and package relayer reward pool) and reallocate to the relayers to achieve redundancy:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"S")," is a constant number of transactions that in around. Each round, there are ",(0,l.kt)("em",{parentName:"li"},"S")," transactions, and the last transaction of the round will trigger reward distribution."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"N")," is the maximum weight that a relayer can gain in a round. ",(0,l.kt)("em",{parentName:"li"},"R")," is the total reward in this round. ",(0,l.kt)("em",{parentName:"li"},"Ki")," is the number of successful transactions from Relayer i. ",(0,l.kt)("em",{parentName:"li"},"Wi")," is the reward weight of Relayer i. ",(0,l.kt)("em",{parentName:"li"},"Ri")," is the rewards of Relayer i."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"R")," is the total reward in this round."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Ki")," is the number of successful transactions from Relayer i."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Wi")," is the reward weight of Relayer i."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Ri")," is the rewards of Relayer i.")),(0,l.kt)("h3",{id:"weight-formula-for-package-relayers"},"Weight formula for package relayers:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"formula",src:r(32463).Z})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rp")," represents the total balance of package reward pool."),(0,l.kt)("h3",{id:"weight-formula-for-header-relayers"},"Weight formula for header relayers:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"formula",src:r(89286).Z})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rh")," represents the total balance of header reward pool."),(0,l.kt)("h3",{id:"we-consider-setting-these-parameters-a-reasonable-value"},"We consider setting these parameters a reasonable value:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"S to be 100. Some rewards come from gas fee, we can not guarantee enough rewards during a small round, a large round may dismiss deviation and let relayer give up relaying when it has made its max profit."),(0,l.kt)("li",{parentName:"ol"},"N to be 40. We think the redundancy of relayer around 3-5 is best. If N is too large, the redundancy will decrease. If N is too small, then there will not be enough relayers. Set N as 40 may be a reasonable value, at least 3 relayers can compete."),(0,l.kt)("li",{parentName:"ol"},"The relayFee of a single package and the ratio of reward for header relayer can be modified by governance on Beacon Chain.")),(0,l.kt)("h3",{id:"distribution-and-claim-reward"},"Distribution And Claim Reward"),(0,l.kt)("p",null,"In each round, the last package delivery transaction will trigger the reward distribution. Both the header reward pool and package reward pool will be distributed. However, the reward won't be paid directly to relayer accounts. The distribution algorithm just calculates rewards for all relayers and writes down the amounts. Relayers are required to actively send transactions to claim their own accumulated rewards."),(0,l.kt)("h2",{id:"other-consideration"},"Other Consideration"),(0,l.kt)("h3",{id:"system-reward-pool"},"System Reward Pool"),(0,l.kt)("p",null,"The system reward pool can hold at most 100BNB for example, to prevent the pool get unnecessary income."),(0,l.kt)("p",null,"The client needs to query the balance of the contract to decide whether to distribute 1/16 of the transaction fee to the contract or not. It seems not that fair that some validators pay more to the reward pool than others, but this is random and will eventually become fair in the long run."),(0,l.kt)("p",null,"If there are not enough rewards in the pool, all the tokens in the pool will be distributed."),(0,l.kt)("p",null,"Block header sync transaction with ",(0,l.kt)("inlineCode",{parentName:"p"},"validatorSet")," change will claim reward to relayers from system reward pool directly."),(0,l.kt)("h3",{id:"foul-play"},"Foul Play"),(0,l.kt)("p",null,"For example, a relayer may deliver packages using a different address in round robin, we can\u2019t recognize this. We try to introduce registration and BNB deposit for relayer to raise the cost of cheat.  How it works:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A BSC account needs to call the ",(0,l.kt)("inlineCode",{parentName:"li"},"register")," of ",(0,l.kt)("a",{parentName:"li",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001006"},"RelayerHub")," contract to deposit 100BNB(more or less than 100 BNB will be rejected) to become a BSC relayer."),(0,l.kt)("li",{parentName:"ul"},"Only a valid relayer can sync Beacon Chain Headers and deliver cross-chain packages."),(0,l.kt)("li",{parentName:"ul"},"Relayer can withdraw its deposit, but we will charge 0.1 BNB as the transaction fee so that it will receive 99.9 BNB back."),(0,l.kt)("li",{parentName:"ul"},"The charged fee will directly go to the system reward pool.")))}h.isMDXComponent=!0},89286:function(e,t,r){t.Z=r.p+"assets/images/headerRelayerRewardFormula-904570efd418b4fc5f09907e858c16b6.png"},32463:function(e,t,r){t.Z=r.p+"assets/images/packageRelayerRewardformula-b5f95c3d28e81d5a54fd6838b99780cf.png"}}]);