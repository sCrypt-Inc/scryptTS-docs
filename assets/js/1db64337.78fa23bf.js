"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[1372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},o="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"sCrypt is an embedded Domain Specific Language (eDSL) based on TypeScript for writing smart contracts on Bitcoin SV. Embedded means that it is a language inside another language. sCrypt is strictly a subset of TypeScript, so all sCrypt code is valid TypeScript, but not vice versa.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/installation"}},c={},p=[{value:"How do Bitcoin Smart Contracts work?",id:"how-do-bitcoin-smart-contracts-work",level:2},{value:"UTXO model",id:"utxo-model",level:3},{value:"How does <code>sCrypt</code> work?",id:"how-does-scrypt-work",level:2},{value:"Learn <code>sCrypt</code>",id:"learn-scrypt",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"embedded Domain Specific Language")," (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language#External_and_Embedded_Domain_Specific_Languages"},"eDSL"),") based on TypeScript for writing smart contracts on Bitcoin SV. ",(0,a.kt)("inlineCode",{parentName:"p"},"Embedded")," means that it is a language inside another language. ",(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," is strictly a subset of TypeScript, so all ",(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," code is valid TypeScript, but not vice versa."),(0,a.kt)("p",null,"We choose ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org"},"TypeScript")," as the host language because it provides an easy, familiar language (JavaScript), but with type safety, making it easy to get started writing safe smart contracts. There is no need to learn a new programming language or tools, if you are already familiar with TypeScript/JavaScript.\nIf you're new to TypeScript, check out this helpful ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ahCwqrYpIuM"},"introductory video"),"."),(0,a.kt)("h2",{id:"how-do-bitcoin-smart-contracts-work"},"How do Bitcoin Smart Contracts work?"),(0,a.kt)("p",null,"Smart contracts on Bitcoin are based on the UTXO model, which is very different from an account model like Ethereum used."),(0,a.kt)("h3",{id:"utxo-model"},"UTXO model"),(0,a.kt)("p",null,"Each bitcoin transaction consists of some inputs and outputs.\nAn output contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The amount of bitcoins it contains."),(0,a.kt)("li",{parentName:"ul"},"bytecodes (called the ",(0,a.kt)("inlineCode",{parentName:"li"},"locking script"),").")),(0,a.kt)("p",null,"while an input contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A reference to the previous transaction output."),(0,a.kt)("li",{parentName:"ul"},"bytecodes (the ",(0,a.kt)("inlineCode",{parentName:"li"},"unlocking script"),").")),(0,a.kt)("p",null,"An Unspent Transaction Output (UTXO) is an output not consumed in any transaction yet. The low-level bytecode/opcode is called ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Script"},"Bitcoin Script"),", which is interpreted by the ",(0,a.kt)("a",{parentName:"p",href:"https://xiaohuiliu.medium.com/introduction-to-bitcoin-smart-contracts-9c0ea37dc757"},"Bitcoin Virtual Machine")," (BVM)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6948).Z,width:"2490",height:"1232"})),(0,a.kt)("p",null,"In the example above, we have two transactions, each having one input (in green) and one output (in red). And the transaction on the right spends the one on the left.\nThe locking script can be regarded as a boolean function ",(0,a.kt)("inlineCode",{parentName:"p"},"f"),' that specifies conditions to spend the bitcoins in the UTXO, acting as a lock (thus the name "locking").\nThe unlocking script in turns provides the function arguments that makes ',(0,a.kt)("inlineCode",{parentName:"p"},"f")," evaluates to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),', i.e., the "key" (also called witness) needed to unlock.\nOnly when the \u201ckey\u201d in an input matches previous output\u2019s \u201clock\u201d, it can spend bitcoins contained in the output.'),(0,a.kt)("p",null,"In a regular Bitcoin payment to a ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Bitcoin_address"},"Bitcoin address"),", the locking script is ",(0,a.kt)("a",{parentName:"p",href:"https://learnmeabitcoin.com/technical/p2pkh"},"Pay To Pubkey Hash (P2PKH)"),". It checks the spender has the right private key corresponding to the address so she can produce a valid signature in the unlocking script. The expressive Script enables the locking script to specify arbitrarily more complex spending conditions than simple P2PKH, i.e., Bitcoin smart contracts."),(0,a.kt)("h2",{id:"how-does-scrypt-work"},"How does ",(0,a.kt)("inlineCode",{parentName:"h2"},"sCrypt")," work?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," is a high-level language to be compiled into ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Script"},"Bitcoin Script"),". The resulting assembly-like scripts could be used as locking scripts when building transactions."),(0,a.kt)("h2",{id:"learn-scrypt"},"Learn ",(0,a.kt)("inlineCode",{parentName:"h2"},"sCrypt")),(0,a.kt)("p",null,"Jump over to the ",(0,a.kt)("a",{parentName:"p",href:"/installation"},"Installation")," section to learn how to create an ",(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," project. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also follow this ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL0Kn1t30VSpGcbwN-bcbU1-x0fRAoq-GI"},"Youtube series"),".")),(0,a.kt)("p",null,"Join the ",(0,a.kt)("inlineCode",{parentName:"p"},"#scrypt")," channel on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/bsv"},"Bitcoin SV Discord")," or ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/scryptworkspace/shared_invite/enQtNzQ1OTMyNDk1ODU3LTJmYjE5MGNmNDZhYmYxZWM4ZGY2MTczM2NiNTIxYmFhNTVjNjE5MGYwY2UwNDYxMTQyNGU2NmFkNTY5MmI1MWM"},"Slack")," to ask questions."))}u.isMDXComponent=!0},6948:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/utxo-a4cf31c29158072cdfbfae3366522ba5.jpg"}}]);