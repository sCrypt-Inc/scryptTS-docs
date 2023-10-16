"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[9698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:10},s="Tutorial 10: Mint BSV20 V1 Token",i={unversionedId:"tutorials/mint-bsv20-v1",id:"tutorials/mint-bsv20-v1",title:"Tutorial 10: Mint BSV20 V1 Token",description:"Overview",source:"@site/docs/tutorials/mint-bsv20-v1.md",sourceDirName:"tutorials",slug:"/tutorials/mint-bsv20-v1",permalink:"/tutorials/mint-bsv20-v1",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Tutorial 9: Mint BSV20 V2 Token",permalink:"/tutorials/mint-bsv20-v2"},next:{title:"FAQ",permalink:"/faq"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Contract",id:"contract",level:2},{value:"Deploy and Mint",id:"deploy-and-mint",level:2},{value:"Transfer Token",id:"transfer-token",level:2},{value:"Step 1. Create Receiver Instance",id:"step-1-create-receiver-instance",level:3},{value:"Step 2. Call the Contract",id:"step-2-call-the-contract",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-10-mint-bsv20-v1-token"},"Tutorial 10: Mint BSV20 V1 Token"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this tutorial, we will use contract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/hashLock.ts"},"HashLock")," as an example, to introduce how to mint a BSV20 Token (",(0,r.kt)("strong",{parentName:"p"},"version 1"),") with ",(0,r.kt)("a",{parentName:"p",href:"https://scrypt.io/"},"sCrypt")," and transfer it with a Smart Contract."),(0,r.kt)("p",null,"To enable all these features, you should install ",(0,r.kt)("inlineCode",{parentName:"p"},"scrypt-ord")," as an dependency in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install scrypt-ord\n")),(0,r.kt)("h2",{id:"contract"},"Contract"),(0,r.kt)("p",null,"The new contract ",(0,r.kt)("inlineCode",{parentName:"p"},"HashLockFT")," is almost the same as the previous ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/hashLock.ts"},"implementation"),", except two differences."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It must be derived from ",(0,r.kt)("inlineCode",{parentName:"li"},"BSV20V1")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"SmartContract"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class HashLockFT extends BSV20V1 {\n    ...\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The constructor has extra parameters - ",(0,r.kt)("inlineCode",{parentName:"li"},"tick"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lim"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"dec")," - representing ",(0,r.kt)("a",{parentName:"li",href:"https://docs.1satordinals.com/bsv20#v1-deploy-first-is-first-mode-only"},"BSV20 fields"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint, hash: Sha256) {\n    super(tick, max, lim, dec)\n    this.init(...arguments)\n    this.hash = hash\n}\n")),(0,r.kt)("p",null,"The contract also stores a hash value in the contract, and it will be unlocked successfully when calling the public method ",(0,r.kt)("inlineCode",{parentName:"p"},"unlock")," with the correct message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class HashLockFT extends BSV20V1 {\n    @prop()\n    hash: Sha256\n    \n    ...\n    \n    @method()\n    public unlock(message: ByteString) {\n        assert(this.hash == sha256(message), 'hashes are not equal')\n    }\n}\n")),(0,r.kt)("p",null,"The base class ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V1")," encapsulated helper functions to handle BSV20 (version 1) tokens. If you want to create your own contract that can interact with BSV20 protocol, derive from it."),(0,r.kt)("h2",{id:"deploy-and-mint"},"Deploy and Mint"),(0,r.kt)("p",null,"For BSV20 version 1, tokens must be deployed before mint. We first create an instance of contract ",(0,r.kt)("inlineCode",{parentName:"p"},"HashLockFT"),", then call function ",(0,r.kt)("inlineCode",{parentName:"p"},"deployToken")," to deploy the new token, and call ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," at last to mint tokens into the contract instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// BSV20 fields\nconst tick = toByteString('HELLO', true)\nconst max = 100n\nconst lim = 10n\nconst dec = 0n\n// create contract instance\nconst message = toByteString('Hello sCrypt', true)\nconst hash = sha256(message)\nconst hashLock = new HashLockFT(tick, max, lim, dec, hash)\n...\n// deploy the new BSV20 token $HELLO\nawait hashLock.deployToken()\n// mint 10 $HELLO into contract instance\nconst mintTx = await hashLock.mint(10n)\n")),(0,r.kt)("p",null,"Normally, we use a P2PKH address to receive the token, then the token is controlled by a private key the same as the general P2PKH."),(0,r.kt)("p",null,"In this example, the token is mint to a contract instance, it is controlled by the smart contract, which means it can only be transferred when the hash lock is unlocked."),(0,r.kt)("h2",{id:"transfer-token"},"Transfer Token"),(0,r.kt)("p",null,"For now, the contract instance holds the token and we try to transfer it to a P2PKH address."),(0,r.kt)("h3",{id:"step-1-create-receiver-instance"},"Step 1. Create Receiver Instance"),(0,r.kt)("p",null,"Class ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V1P2PKH")," represents a P2PKH address that can hold BSV20 version 1 tokens. Its constructor takes BSV20 fields and an receiving address as parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const alice = new BSV20V1P2PKH(tick, max, lim, dec, addressAlice)\nconst bob = new BSV20V1P2PKH(tick, max, lim, dec, addressBob)\n")),(0,r.kt)("h3",{id:"step-2-call-the-contract"},"Step 2. Call the Contract"),(0,r.kt)("p",null,"Just as other ",(0,r.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"contract calling")," methods we introduced before, we call the public method ",(0,r.kt)("inlineCode",{parentName:"p"},"unlock")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"HashLockFT")," as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Call the contract\nconst { tx: transferTx } = await hashLock.methods.unlock(message, {\n    transfer: [\n        {\n            instance: alice,\n            amt: 2n,\n        },\n        {\n            instance: bob,\n            amt: 5n,\n        },\n    ],\n} as MethodCallOptions<HashLockFT>)\n")),(0,r.kt)("p",null,"This code will create a transaction that transfers 2 tokens to ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," and 5 to ",(0,r.kt)("inlineCode",{parentName:"p"},"bob"),"."),(0,r.kt)("p",null,"The default transaction builder will automatically add a token change output on the transaction. In this example, it will automatically add a token change output with 3 tokens, paying to the default address of the instance connected signer. You can also specify the token change address by passing the value to the key ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenChangeAddress")," of struct ",(0,r.kt)("inlineCode",{parentName:"p"},"MethodCallOptions"),"."),(0,r.kt)("p",null,"Execute command ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ts-node tests/examples/mintBSV20.ts")," to run this example."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5527).Z,width:"1584",height:"300"})),(0,r.kt)("p",null,"Then you can check your token transfer details on the explorer."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1899).Z,width:"2466",height:"1352"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7859).Z,width:"2204",height:"1538"})),(0,r.kt)("p",null,"The UTXO model is a powerful feature of BSV20, we can send tokens to multiple receivers in a single transaction, allowing us to create complex and efficient transactions."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Great! You have finished the tutorial on how to mint and transfer the BSV20 Token with a Smart Contract."),(0,r.kt)("p",null,"The full complete ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/contracts/hashLockFT.ts"},"contract")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/examples/mintBSV20.ts"},"example")," can be found in sCrypt's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-ord"},"repository"),"."))}d.isMDXComponent=!0},1899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mint-bsv20-mint-tx-27e81f72e8b13b4337d3a598b77df7f6.png"},7859:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mint-bsv20-transfer-tx-39d10c2524b6bf0a9f2bd42f85a66e16.png"},5527:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mint-bsv20-457835378ee4536cd5201043011cbede.png"}}]);