"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7724],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.createElement(f,c(c({ref:t},s),{},{components:n})):a.createElement(f,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],l={sidebar_label:"Wallet Creation",hide_table_of_contents:!1,sidebar_position:2},i="Key Management",u={unversionedId:"wallet/create-wallet",id:"wallet/create-wallet",isDocsHomePage:!1,title:"Key Management",description:"This article is a guide about key management strategy on client side of your Decentralised Application on BNB Smart Chain",source:"@site/docs/wallet/create-wallet.md",sourceDirName:"wallet",slug:"/wallet/create-wallet",permalink:"/docs/wallet/create-wallet",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/wallet/create-wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Wallet Creation",hide_table_of_contents:!1,sidebar_position:2}},s=[{value:"Setup Web3",id:"setup-web3",children:[],level:2},{value:"Connect to BSC network",id:"connect-to-bsc-network",children:[],level:2},{value:"Set up account",id:"set-up-account",children:[],level:2},{value:"Recover account",id:"recover-account",children:[],level:2},{value:"Full Example",id:"full-example",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-management"},"Key Management"),(0,o.kt)("p",null,"This article is a guide about key management strategy on client side of your Decentralised Application on BNB Smart Chain"),(0,o.kt)("h2",{id:"setup-web3"},"Setup Web3"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"web3.js")," is a javascript library that allows our client-side application to talk to the blockchain. We configure web3 to communicate via Metamask."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"web3.js")," doc is ",(0,o.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js"},"here")),(0,o.kt)("h2",{id:"connect-to-bsc-network"},"Connect to BSC network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    // mainnet \n     const web3 = new Web3('https://bsc-dataseed1.binance.org:443');\n    // testnet\n    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');\n")),(0,o.kt)("h2",{id:"set-up-account"},"Set up account"),(0,o.kt)("p",null,"If the installation and instantiation of web3 was successful, the following should successfully return a random account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    const account = web3.eth.accounts.create();\n")),(0,o.kt)("h2",{id:"recover-account"},"Recover account"),(0,o.kt)("p",null,"If you have backup the private key of your account, you can use it to restore your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    const account = web3.eth.accounts.privateKeyToAccount("$private-key")\n')),(0,o.kt)("h2",{id:"full-example"},"Full Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Web3 = require('web3');\nasync function main() {\n\n    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');\n    const loader = setupLoader({ provider: web3 }).web3;\n\n    const account = web3.eth.accounts.create();\n    console.log(account);\n}\n")))}d.isMDXComponent=!0}}]);