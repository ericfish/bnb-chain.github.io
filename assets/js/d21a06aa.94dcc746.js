"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7608],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},54766:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={},c="Command Line Interface (CLI)",s={unversionedId:"api-reference/cli",id:"api-reference/cli",isDocsHomePage:!1,title:"Command Line Interface (CLI)",description:"BNB CLI is one of several ways to interact with Beacon Chain.",source:"@site/docs/api-reference/cli.md",sourceDirName:"api-reference",slug:"/api-reference/cli",permalink:"/docs/api-reference/cli",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/api-reference/cli.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Where can I download the BNB CLI?",id:"where-can-i-download-the-bnb-cli",children:[{value:"CLI installation",id:"cli-installation",children:[],level:3}],level:2},{value:"Where to connect",id:"where-to-connect",children:[],level:2},{value:"Which Chain-ID to use",id:"which-chain-id-to-use",children:[],level:2},{value:"Which Private Key To Use",id:"which-private-key-to-use",children:[],level:2},{value:"Key manager",id:"key-manager",children:[{value:"Local key",id:"local-key",children:[],level:3},{value:"Ledger key",id:"ledger-key",children:[],level:3}],level:2},{value:"How to use",id:"how-to-use",children:[],level:2},{value:"CLI Reference",id:"cli-reference",children:[],level:2},{value:"Use CLI for Different Blockchains",id:"use-cli-for-different-blockchains",children:[],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,r.kt)("p",null,"BNB CLI is one of several ways to interact with Beacon Chain."),(0,r.kt)("p",null,"BNB CLI can be used as a local wallet, you can manage your keys via Beacon CLI. You can add a new\nkey or restore your key from mnemonic words. And you can list your keys and show specified key info."),(0,r.kt)("p",null,"With BNB CLI, you can send transactions to Beacon Chain, like placing an order, transferring token,\nissuing token and so on. Actually you can do almost everything you can do with Beacon Chain web wallet. What is\nmore, you can propose to list trading pairs and join chain governance."),(0,r.kt)("p",null,"In addition, you can do some simple queries through CLI. For example, you can query your account's\nbalance, transaction detail by transaction hash and etc."),(0,r.kt)("h2",{id:"where-can-i-download-the-bnb-cli"},"Where can I download the BNB CLI?"),(0,r.kt)("p",null,"You can download BNB CLI releases here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/node-binary/tree/master/cli"},"https://github.com/binance-chain/node-binary")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/binance-chain/node-binary.git\n")),(0,r.kt)("p",null,"You can choose to download the version for testnet or mainnet. Replace the network var with ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," or",(0,r.kt)("inlineCode",{parentName:"p"}," prod")," in the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd node-binary/cli/{network}/{version}\n")),(0,r.kt)("h3",{id:"cli-installation"},"CLI installation"),(0,r.kt)("p",null,"Once you have downloaded the binary for your platform, you may drop it into any folder you like. Open a terminal window or ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd.exe")," in that folder, and then follow the examples on the documentation site."),(0,r.kt)("p",null,"For mainnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$  ./bnbcli\n")),(0,r.kt)("p",null,"On Windows you would most likely use this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\> bnbcli.exe\n")),(0,r.kt)("p",null,"For testnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$  ./tbnbcli\n")),(0,r.kt)("p",null,"On Windows you would most likely use this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\> tbnbcli.exe\n")),(0,r.kt)("h2",{id:"where-to-connect"},"Where to connect"),(0,r.kt)("p",null,"You can manage you keys locally without connecting to any node. But if you want to interact with Beacon Chain, you need to connect to one of Beacon Chain full nodes."),(0,r.kt)("p",null,"You can run your own full node, which may automatically connect to Beacon Chain, and you can run your CLI there with your own full node. In the mean time, you can connect to any full nodes provided by other people."),(0,r.kt)("p",null,"You could query this API for for a list of full node on mainnet: ",(0,r.kt)("a",{parentName:"p",href:"https://dex.binance.org/api/v1/peers"},"https://dex.binance.org/api/v1/peers"),"."),(0,r.kt)("p",null,"For testnet, visit  ",(0,r.kt)("a",{parentName:"p",href:"https://testnet-dex.binance.org/api/v1/peers"},"https://testnet-dex.binance.org/api/v1/peers"),"."),(0,r.kt)("p",null,"Full nodes will be denoted as the format of ",(0,r.kt)("inlineCode",{parentName:"p"},"ip:port"),", you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"access_addr")," as your peer to get connected, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://dataseed4.defibit.io:443")),(0,r.kt)("p",null,"Please note that there are two types of nodes that offer RPC services. Some support TLS and others don't."),(0,r.kt)("h2",{id:"which-chain-id-to-use"},"Which Chain-ID to use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chain-id")," is an important field to fill for every transaction sent from ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli"),". The",(0,r.kt)("inlineCode",{parentName:"p"}," chain-id")," for mainnet is ",(0,r.kt)("inlineCode",{parentName:"p"},"Binance-Chain-Tigris"),", and is ",(0,r.kt)("inlineCode",{parentName:"p"},"Binance-Chain-Ganges")," for testnet. Please choose the correct one in your case."),(0,r.kt)("h2",{id:"which-private-key-to-use"},"Which Private Key To Use"),(0,r.kt)("p",null,"There are two ways for you to sign transaction\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Local Keystore File")),(0,r.kt)("p",null,"This is the default way to sign transactions with ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli"),". It will use the encrypted  keystore files saved at bnbcli home. You need to specify which key to decrypt with ",(0,r.kt)("inlineCode",{parentName:"p"},"--from"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Private Key in Hardware Wallet")),(0,r.kt)("p",null,"First, you must add ",(0,r.kt)("inlineCode",{parentName:"p"},"--ledger")," when creating a new address. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbcli keys add test --ledger --index 0 --account 0\n")),(0,r.kt)("p",null,"Then,  the private key file in ledger will be used to generate a new address."),(0,r.kt)("p",null,"You could also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--index")," to generate more addresses. After the generation, you could use Ledger for signing."),(0,r.kt)("p",null,"When you use the address to sign transactions, ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli")," will send transactions to Ledger and get signatures. Then ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli")," build the signed transactions and boardcast them to full nodes."),(0,r.kt)("h2",{id:"key-manager"},"Key manager"),(0,r.kt)("p",null,"Here we support two types of key: local key and leder key"),(0,r.kt)("h3",{id:"local-key"},"Local key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a local key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbcli keys add test_key\n")),(0,r.kt)("p",null,"The newly created local key will be encrypted and saved to the local keystore."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign transaction with a local key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbcli send --chain-id=<chain-id> --from=test_key --amount=100:BNB --to=<address>\n")),(0,r.kt)("p",null,"For instance, if you want to send a token transfer transaction, you can use the above command. The flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," is used to specify which key should be used to sign the transaction."),(0,r.kt)("h3",{id:"ledger-key"},"Ledger key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a local key")),(0,r.kt)("p",null,"Before creating a new ledger key, make sure you have performed these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ledger device is installed binance ledger app and the version should be later or equal to ",(0,r.kt)("strong",{parentName:"li"},"v1.1.3"),"."),(0,r.kt)("li",{parentName:"ol"},"Connect your ledger device to your machine and input pin code to unlock it."),(0,r.kt)("li",{parentName:"ol"},"Open the binance ledger app on your ledger device.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbcli keys add test_ledger_key --ledger\n")),(0,r.kt)("p",null,"Execute the above command to create a ledger key. The private key is only stored in your ledger device. And your local key store will save the corresponding publick key and address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbcli keys add test_ledger_key_new --ledger --index 0 --account 0\n")),(0,r.kt)("p",null,"You can also specify --account and --index to generate more keys."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign transaction with a ledger key")),(0,r.kt)("p",null,"Taking transfer transaction for example, please follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Execute command in your console:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbcli send --chain-id=<chain-id> --from=test_ledger_key --amount=100:BNB --to=<address>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Your console will print some message like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Please confirm if address displayed on ledger is identical to bnb15339dcwlq5nza4atfmqxfx6mhamywz35evruva (yes/no)?\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"User can click confirm button on ledger device and input yes to continue following steps."),(0,r.kt)("li",{parentName:"ol"},"Then user can preview the transaction data on ledger screen."),(0,r.kt)("li",{parentName:"ol"},"After going through all transaction data, user can select ",(0,r.kt)("inlineCode",{parentName:"li"},"sign transaction")," or",(0,r.kt)("inlineCode",{parentName:"li"}," reject"),"."),(0,r.kt)("li",{parentName:"ol"},"After user selects ",(0,r.kt)("inlineCode",{parentName:"li"},"sign transaction"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bnbcli")," will get the signature and broadcast the signed transaction to blockchain nodes.")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"When you have downloaded BNB Chain CLI, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," subcommand to see all the available commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$  ./bnbcli help\nBNBChain light-client\n\nUsage:\n  bnbcli [command]\n\nAvailable Commands:\n  init        Initialize light client\n  status      Query remote node for status\n\n  txs         Search for all transactions that match the given tags.\n  tx          Matches this txhash over all committed blocks\n\n  account     Query account balance\n  send        Create and sign a send tx\n  transfer\n\n  api-server  Start the API server daemon\n  keys        Add or view local private keys\n\n  version     Print the app version\n  token       issue or view tokens\n  dex         dex commands\n  gov         gov commands\n  help        Help about any command\n\nFlags:\n  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")\n  -h, --help              help for bnbcli\n      --home string       directory for config and data (default "/root/.bnbcli")\n  -o, --output string     Output format (text|json) (default "text")\n      --trace             print out full stack trace on errors\n\nUse "bnbcli [command] --help" for more information about a command.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":there is one special flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--trust-node")," of most subcommands, if not enabled which is by default the CLI\nwill take an extra 2-4 seconds to verify blockchain proof at current height. You can enable that flag if the peer is trustful so that most commands will accomplish in 500 milliseconds. If your node cannot prove the transaction, there will be the following notice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Create verifier failed: Commit: Response error: RPC error -32603 - Internal error: runtime error: invalid memory address or nil pointer dereference\nPlease check network connection and verify the address of the node to connect to\n")),(0,r.kt)("p",null,"To solve this issue, you need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"--trust-node")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h2",{id:"cli-reference"},"CLI Reference"),(0,r.kt)("p",null,"For detailed usage, you can refer to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/transfer"},"transfer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/trade"},"trade")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/tokens"},"issue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/governance"},"governance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/list"},"list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/keys"},"keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/offline"},"offline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/timelock"},"timelock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/memo-validation"},"memo validation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/learn/bc-staking"},"staking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/learn/bc-slashing"},"slashing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/bsc-gov"},"BNB Smart Chain Governance"))),(0,r.kt)("h2",{id:"use-cli-for-different-blockchains"},"Use CLI for Different Blockchains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli")," will save data about validatorset changes at home of ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli"),". If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli")," for different blockchains, for example, you want to change from testnet to mainnet, the data will be stale. In order to switch between blockchains, you need clean the data folder with ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf ~/.bnbcli/.bnblite/"),"  or create a new home folder for bnbcli with ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," flag.\nIf you forget to specify a different home folder path, then you will not be able to make queries with ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli"),"."),(0,r.kt)("p",null,"The same logic applies to ",(0,r.kt)("inlineCode",{parentName:"p"},"tbnbcli"),"."))}u.isMDXComponent=!0}}]);