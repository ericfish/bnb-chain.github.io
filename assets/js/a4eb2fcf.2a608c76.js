"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8808],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,b=f["".concat(s,".").concat(h)]||f[h]||u[h]||a;return n?i.createElement(b,o(o({ref:t},d),{},{components:n})):i.createElement(b,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11979:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Scenarios for Slashing",hide_table_of_contents:!1,sidebar_position:2},s="Scenarios for Slashing and Jail",c={unversionedId:"validator/scenarios-slash",id:"validator/scenarios-slash",isDocsHomePage:!1,title:"Scenarios for Slashing and Jail",description:"Double Signing",source:"@site/docs/validator/scenarios-slash.md",sourceDirName:"validator",slug:"/validator/scenarios-slash",permalink:"/docs/validator/scenarios-slash",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/validator/scenarios-slash.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Scenarios for Slashing",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BSC Slash Evidence",permalink:"/docs/validator/send-slash-evidence"},next:{title:"Slashing Fee",permalink:"/docs/validator/slash-fee"}},d=[{value:"Double Signing",id:"double-signing",children:[],level:3},{value:"Unavailability/Downtime",id:"unavailabilitydowntime",children:[],level:3},{value:"Self\u2010bond Below Minimum",id:"selfbond-below-minimum",children:[],level:3}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scenarios-for-slashing-and-jail"},"Scenarios for Slashing and Jail"),(0,a.kt)("h3",{id:"double-signing"},"Double Signing"),(0,a.kt)("p",null,"Double signing refers to an event when the validator node proposes two different blocks at the same block height. The validator will be removed from the validator set, if they try signing two different blocks and broadcasting them. For BSC slash request on double signing, the supporting evidence should indicate two block headers having the same block height and the same parent block hash sealed by the same validator. The time of these two blocks must be within the validity of the evidence, which is 24 hours. Rewards for successful submission of double-sign evidence is 100 BNB. In the event evidence and slash request is valid, the validators will face a slashing of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"10,000 BNB"))," from their self-delegated BNB and will be 'jailed' for a time period of 292 years."),(0,a.kt)("h3",{id:"unavailabilitydowntime"},"Unavailability/Downtime"),(0,a.kt)("p",null,"The slash fee for a validator being offline is self-delegated ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"50 BNB"))," along with jail time of 2 days. If a validator missed 50 blocks (","~","52 minutes of downtime) within 24 hours, their collected reward will be re-distributed among other better performing validators of the set. Another case of unavailability is when a validator misses over 150 blocks (","~","157.5 minutes of downtime) within 24 hours. In this case, the validator will lose its reward and be kicked out of the validator set immediately."),(0,a.kt)("h3",{id:"selfbond-below-minimum"},"Self\u2010bond Below Minimum"),(0,a.kt)("p",null,"Validators will be jailed for 1 day if their self\u2010bond falls below ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"10,000 BNB")),"."))}f.isMDXComponent=!0}}]);