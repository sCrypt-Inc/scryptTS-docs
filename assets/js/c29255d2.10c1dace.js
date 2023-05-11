"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[4089],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),h=u(n),d=o,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9175:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="How to Debug ScriptContext Failure",c={unversionedId:"advanced/how-to-debug-scriptcontext",id:"advanced/how-to-debug-scriptcontext",title:"How to Debug ScriptContext Failure",description:"ScriptContext enables the logic of the contract to be executed correctly according to the agreement, and the state of the contract can be propagated correctly.",source:"@site/docs/advanced/how-to-debug-scriptcontext.md",sourceDirName:"advanced",slug:"/advanced/how-to-debug-scriptcontext",permalink:"/advanced/how-to-debug-scriptcontext",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Call Multiple Contracts in a Single Tx",permalink:"/advanced/how-to-call-multiple-contracts"},next:{title:"How to Integrate sCrypt Service",permalink:"/advanced/how-to-integrate-scrypt-service"}},s={},u=[{value:"hashOutputs assertion failed",id:"hashoutputs-assertion-failed",level:2}],l={toc:u};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-debug-scriptcontext-failure"},"How to Debug ScriptContext Failure"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/scriptcontext"},"ScriptContext")," enables the logic of the contract to be executed correctly according to the agreement, and the state of the contract can be propagated correctly."),(0,o.kt)("p",null,"When it runs wrong, you need to master the following methods to locate the error more efficiently."),(0,o.kt)("h2",{id:"hashoutputs-assertion-failed"},"hashOutputs assertion failed"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hashOutputs")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptContext")," is the double SHA256 of the serialization of all output amount (8-byte little endian) with scriptPubKey. Through it, we can agree on how the outputs of the transaction calling the contract should be constructed."),(0,o.kt)("p",null,"If the output of the transaction is not constructed as required by the contract, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"hashOutputs")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptContext")," field will not match the the double SHA256 of the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," produced in the code when the contract runs. The following assertion will fail:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')\n")),(0,o.kt)("p",null,"We all know that if the preimage of the hash is inconsistent, the hash value will not match. When an assertion failure occurs, we can only see two mismatched hash values, and cannot visually see the difference between the preimages of the two hash values (that is, the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," in the contract and the outputs of the transaction)."),(0,o.kt)("p",null,"A function ",(0,o.kt)("inlineCode",{parentName:"p"},"diffOutputs")," in DebugFunctions Interface is provided to directly compare the difference between the outputs argument and all the outputs of the transaction bound by ",(0,o.kt)("inlineCode",{parentName:"p"},"this.to"),", which are serialized and hashed to produce ",(0,o.kt)("inlineCode",{parentName:"p"},"hashOutputs")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptContext"),". "),(0,o.kt)("p",null,"Just call ",(0,o.kt)("inlineCode",{parentName:"p"},"this.debug.diffOutputs(outputs)")," in the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"this.debug.diffOutputs(outputs) // diff and print the comparison result\nassert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')\n")),(0,o.kt)("p",null,"and you will see the comparison result:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"diffoutputs",src:n(2927).Z,width:"3778",height:"710"})),(0,o.kt)("p",null,"Through the printed comparison results, we can intuitively see that the number of satoshis included in the output calculated in the contract is different from the number of satoshis included in the output actually added when constructing the transaction. Now, we have found the source of the error."))}p.isMDXComponent=!0},2927:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/diffoutputs-e6e09f5644674ef9bfa04f0443f939cf.png"}}]);