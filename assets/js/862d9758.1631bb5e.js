"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[5636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"reference/interfaces/TxOutputRef",id:"reference/interfaces/TxOutputRef",title:"TxOutputRef",description:"scrypt-ts / TxOutputRef",source:"@site/docs/reference/interfaces/TxOutputRef.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/TxOutputRef",permalink:"/docs/reference/interfaces/TxOutputRef",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TxInputRef",permalink:"/docs/reference/interfaces/TxInputRef"},next:{title:"UtxoQueryOptions",permalink:"/docs/reference/interfaces/UtxoQueryOptions"}},p={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"outputIndex",id:"outputindex",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"tx",id:"tx",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:u};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / TxOutputRef"),(0,o.kt)("h1",{id:"interface-txoutputref"},"Interface: TxOutputRef"),(0,o.kt)("p",null,"A reference to an output of a transaction"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/TxOutputRef#outputindex"},"outputIndex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/TxOutputRef#tx"},"tx"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"outputindex"},"outputIndex"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"outputIndex"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"index of an output in this transaction"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"dist/smart-contract/contract.d.ts:25"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tx"},"tx"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"tx"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Transaction-1"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction"))),(0,o.kt)("p",null,"transaction object"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,"dist/smart-contract/contract.d.ts:23"))}f.isMDXComponent=!0}}]);