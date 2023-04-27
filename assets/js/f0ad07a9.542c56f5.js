"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[9517],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(a),h=r,u=f["".concat(c,".").concat(h)]||f[h]||d[h]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:11},i="How to Verify a Contract",s={unversionedId:"how-to-verify-a-contract",id:"how-to-verify-a-contract",title:"How to Verify a Contract",description:"You will learn how to verify smart contracts on WhatsOnChain (WoC), a blockchain explorer.",source:"@site/docs/how-to-verify-a-contract.md",sourceDirName:".",slug:"/how-to-verify-a-contract",permalink:"/docs/how-to-verify-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"How to Publish a Contract to NPM",permalink:"/docs/how-to-publish-a-contract"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},c={},l=[{value:"1. Using WOC sCrypt Plugin",id:"1-using-woc-scrypt-plugin",level:2},{value:"2. Using CLI",id:"2-using-cli",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-verify-a-contract"},"How to Verify a Contract"),(0,r.kt)("p",null,"You will learn how to verify smart contracts on ",(0,r.kt)("a",{parentName:"p",href:"https://whatsonchain.com/"},"WhatsOnChain")," (WoC), a blockchain explorer.\nBy verifying your smart contract on WoC, anyone can view its source code and interact with it confidently. Let's get started!"),(0,r.kt)("p",null,"To start with the verification process, we need to first deploy a smart contract. Let us use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/hello-world"},'"Hello World" tutorial')," as an example. After you complete the tutorial, you should get the ID of the deployment transaction such as ",(0,r.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/tx/a34d4e45a9108b5b9da4faf4f086e9ef36b79466383bd7a22ff2c7f6a562546c"},(0,r.kt)("inlineCode",{parentName:"a"},"a34d4e45a9108b5b9da4faf4f086e9ef36b79466383bd7a22ff2c7f6a562546c")),"."),(0,r.kt)("p",null,"If you take a look at the transaction on WoC, you'll see that the first output contains a script identified by the hash ",(0,r.kt)("inlineCode",{parentName:"p"},"eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def"),", which contains your contract in script format."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1719).Z,width:"968",height:"790"})),(0,r.kt)("p",null,"This hash is referred to as the ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptHash"),". It's essentially just a ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256")," hash value of the deployed contracts locking script, encoded in a little-endian hex format. It is commonly used as an index by block explorers. You can also get this value locally, via the contract instances ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptHash")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(instance.scriptHash)\n// eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The scriptHash value can vary due to factors like the current property values and the number of times the contract has been updated, leading to inconsistencies in its value. ")),(0,r.kt)("p",null,"You can submit and verify sCrypt source code that belongs to a specific script hash."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2874).Z,width:"1928",height:"738"})),(0,r.kt)("p",null,"There are two ways to verify it."),(0,r.kt)("h2",{id:"1-using-woc-scrypt-plugin"},"1. Using WOC sCrypt Plugin"),(0,r.kt)("p",null,"At the deployed transaction on WOC, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptHash")," of the first output. It will open a page like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2464).Z,width:"923",height:"590"})),(0,r.kt)("p",null,"You shall see an ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," tab. Click on it. You'll see a very simple form:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5598).Z,width:"874",height:"408"})),(0,r.kt)("p",null,"In the form you are able to select the version of sCrypt you've used to compile and deploy the contract, along with a text-box in which you need to paste the source code."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8522).Z,width:"879",height:"614"})),(0,r.kt)("p",null,"Now click ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit"),". If the code is correct, you should see something like the following in a few seconds:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1135).Z,width:"864",height:"935"})),(0,r.kt)("p",null,"Congrats, you have verified your first smart contract!"),(0,r.kt)("p",null,"Now, every time someone opens the ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," tab on ",(0,r.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/script/eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def"},"the script hash page"),", they will see the verified smart contract source code, as well as its constructor parameters when deployed."),(0,r.kt)("h2",{id:"2-using-cli"},"2. Using CLI"),(0,r.kt)("p",null,"The same process can be done using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/scrypt-cli"},"sCrypt CLI"),".\nYou can verify the deployed smart contracts script using the ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify <scriptHash> <contractPath>\n")),(0,r.kt)("p",null,"The first positional argument is the script hash of the deployed contract and the second one is the path to the file which contains the sCrypt smart contract. Note, that the file must also include all the code it depends on, i.e. third party libraries."),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," option, you can specify on which network the contract is deployed. This defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", indicating the Bitcoin testnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify --network main <scriptHash> <contractPath>\n")),(0,r.kt)("p",null,"You can also specify the version of sCrypt used during verification. By default, the command will use the version specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify -V 0.2.0-beta.9 <scriptHash> <contractPath>\n")),(0,r.kt)("p",null,"For example, if we would like to verify the same deployed contract as above, we would simply run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def src/contracts/demoproject.ts\n")),(0,r.kt)("p",null,"Upon execution, the designated contract code undergoes verification on sCrypt's servers. If successful, the outcome will be ",(0,r.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/script/eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def"},"displayed on WoC"),', under the "sCrypt" tab, just like above.'))}d.isMDXComponent=!0},2874:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify-diagram-df9c8d1cde78abc16187496a3df9de70.webp"},2464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify-scripthash-77906ebb8a446ccbadfae9dbbb65e291.png"},8522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify-submit-filled-b7facc86ff6e8901486b7fce8158004a.png"},5598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify-submit-463b3f3bff047e974a6945f04e2d5fc2.png"},1719:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify-tx-out-e9b3bcaf241e25aaf9016d956126c3e6.png"},1135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify-verified-code-e54e31abaaad526a4c5355797628f2c6.png"}}]);