"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9460],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},42536:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={sidebar_label:"Run Validator on Testnet",sidebar_position:2,hide_table_of_contents:!1},s="How to join BNB Smart Chain Testnet as Validator?",d={unversionedId:"validator/guideline-testnet",id:"validator/guideline-testnet",isDocsHomePage:!1,title:"How to join BNB Smart Chain Testnet as Validator?",description:"Before You Start",source:"@site/docs/validator/guideline-testnet.md",sourceDirName:"validator",slug:"/validator/guideline-testnet",permalink:"/docs/validator/guideline-testnet",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/validator/guideline-testnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Run Validator on Testnet",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Join Mainnet",permalink:"/docs/validator/guideline-mainnet"},next:{title:"Create a Validator on Testnet",permalink:"/docs/validator/testnet"}},c=[{value:"Before You Start",id:"before-you-start",children:[{value:"Choose Your Validator hardware",id:"choose-your-validator-hardware",children:[],level:4}],level:3},{value:"Setup a Validator Node at Testnet",id:"setup-a-validator-node-at-testnet",children:[],level:3},{value:"Create Consensus Key",id:"create-consensus-key",children:[],level:3},{value:"Start Validator Node",id:"start-validator-node",children:[],level:3},{value:"Get Testnet Token from Faucet",id:"get-testnet-token-from-faucet",children:[],level:3},{value:"Declare Your Candidacy",id:"declare-your-candidacy",children:[],level:3},{value:"After Declaring Your Candidacy",id:"after-declaring-your-candidacy",children:[{value:"1. Monitor node status",id:"1-monitor-node-status",children:[],level:3},{value:"2. Update validator profile",id:"2-update-validator-profile",children:[],level:3},{value:"3. Publish Validator Information",id:"3-publish-validator-information",children:[],level:3},{value:"4. Stop Validating",id:"4-stop-validating",children:[],level:3}],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-join-bnb-smart-chain-testnet-as-validator"},"How to join BNB Smart Chain Testnet as Validator?"),(0,o.kt)("h3",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"Before you start, make sure you meet the hardware requirements for the validators nodes."),(0,o.kt)("h4",{id:"choose-your-validator-hardware"},"Choose Your Validator hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X or Linux."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IMPORTANT")," 2T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms"),(0,o.kt)("li",{parentName:"ul"},"16 cores of CPU and 48 gigabytes of memory (RAM)"),(0,o.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, or c2-standard-8 on Google cloud."),(0,o.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 10 megabyte per second")),(0,o.kt)("h3",{id:"setup-a-validator-node-at-testnet"},"Setup a Validator Node at Testnet"),(0,o.kt)("p",null,"!!! Note\nIf you are running a node in Testnet, 2CPU/8GB of RAM is sufficient."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install BSC Fullnode")),(0,o.kt)("p",null,"You can download the pre-build binaries from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc/releases/latest"},"release page")," or follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/fullnode"},"here to set up a full node"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download the config files")),(0,o.kt)("p",null,"Download ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'## testnet\nwget --no-check-certificate  $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep testnet |cut -d\\" -f4)\nunzip testnet.zip\n')),(0,o.kt)("p",null,"Launch your node and wait for it to get synced."),(0,o.kt)("h3",{id:"create-consensus-key"},"Create Consensus Key"),(0,o.kt)("p",null,"You need to create an account that represents a validator's consensus key. Use the following command to create a new account and set a password for that account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth account new --datadir ./node\n")),(0,o.kt)("h3",{id:"start-validator-node"},"Start Validator Node"),(0,o.kt)("p",null,"!!! Warning\nPlease do not expose your RPC endpoints to the public network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo {your-password} > password.txt\ngeth --config ./config.toml --datadir ./node --syncmode snap -unlock {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock --cache 18000\n")),(0,o.kt)("h3",{id:"get-testnet-token-from-faucet"},"Get Testnet Token from Faucet"),(0,o.kt)("p",null,"You can get testnet BNB from ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.binance.org/faucet-smart"},"https://testnet.binance.org/faucet-smart"),", but the BNB is on BNB Smart Chain."),(0,o.kt)("p",null,"Download ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli "),"from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/node-binary/tree/master/cli/testnet/0.8.1"},"GitHub"),". Use ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")," to create an account or recover an account."),(0,o.kt)("p",null,"You can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://binance-wallet.gitbook.io/binance-chain-extension-wallet/best-practice/transfer-testnet-bnb-from-bsc-to-bc"},"guide")," to transfer BNB from BSC testnet to BC testnet."),(0,o.kt)("h3",{id:"declare-your-candidacy"},"Declare Your Candidacy"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")," to create an account or recover an account, make sure the account get more than 10000 BNB."),(0,o.kt)("p",null,"Before sending ",(0,o.kt)("inlineCode",{parentName:"p"},"create-validator")," transaction, make sure your bsc validator have already catched up."),(0,o.kt)("p",null,"Example on testnet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tbnbcli staking bsc-create-validator \\\n--side-cons-addr {validator address} \\\n--side-fee-addr {wallet address on BSC} \\\n--address-delegator {wallet address on BC} \\\n--side-chain-id chapel \\\n--amount 10000000000:BNB \\\n--commission-rate {10000000 represent 10%} \\\n--commission-max-rate {20000000 represent 20%} \\\n--commission-max-change-rate {10000000 represent 1%} \\\n--moniker {validator name} \\\n--details {validator detailed description} \\\n--identity {keybase identity} \\\n--website {website for validator} \\\n--from {key name} \\\n--chain-id Binance-Chain-Ganges \\\n--node=http://data-seed-pre-1-s3.binance.org:80\n")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.binance.org/"},"explorer")," to verify your transactions."),(0,o.kt)("p",null,"Check your validator's status at this ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-staking.binance.org/en/staking"},"page")),(0,o.kt)("h2",{id:"after-declaring-your-candidacy"},"After Declaring Your Candidacy"),(0,o.kt)("h3",{id:"1-monitor-node-status"},"1. Monitor node status"),(0,o.kt)("p",null,"To get started quickly, run GethExporter in a Docker container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -it -d -p 9090:9090 \\\n  -e "GETH=http://mygethserverhere.com:8545" \\\n  hunterlong/gethexporter\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://grafana.com/api/dashboards/6976/images/4471/image",alt:null})),(0,o.kt)("h3",{id:"2-update-validator-profile"},"2. Update validator profile"),(0,o.kt)("p",null,"You can submit a PullRequest to this repository to update your information: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/validator-directory"},"https://github.com/binance-chain/validator-directory"),"\nReference: ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/6976"},"https://grafana.com/grafana/dashboards/6976")),(0,o.kt)("h3",{id:"3-publish-validator-information"},"3. Publish Validator Information"),(0,o.kt)("p",null,"Please submit a Pull Request to this repo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/validator-directory"},"https://github.com/binance-chain/validator-directory")),(0,o.kt)("p",null,"This repository is a place for validator candidates to give potential delegators a brief introduction about your team and infrastructure, and present your ecosystem contributions."),(0,o.kt)("h3",{id:"4-stop-validating"},"4. Stop Validating"),(0,o.kt)("p",null,"You can stop mining new blocks by sending commands in ",(0,o.kt)("inlineCode",{parentName:"p"},"geth console")),(0,o.kt)("p",null,"Connect to your validator node with ",(0,o.kt)("inlineCode",{parentName:"p"},"geth attach ipc:path/to/geth.ipc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"miner.stop()\n")),(0,o.kt)("p",null,"To resume validating,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"miner.start()\n")))}p.isMDXComponent=!0}}]);