"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[3841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l=void 0,c={unversionedId:"reference/interfaces/StatefulNext",id:"reference/interfaces/StatefulNext",title:"StatefulNext",description:"scrypt-ts / StatefulNext",source:"@site/docs/reference/interfaces/StatefulNext.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/StatefulNext",permalink:"/docs/reference/interfaces/StatefulNext",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SignatureResponse",permalink:"/docs/reference/interfaces/SignatureResponse"},next:{title:"SubScription",permalink:"/docs/reference/interfaces/SubScription"}},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"atOutputIndex",id:"atoutputindex",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"balance",id:"balance",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"instance",id:"instance",level:3},{value:"Defined in",id:"defined-in-2",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / StatefulNext"),(0,a.kt)("h1",{id:"interface-statefulnextt"},"Interface: StatefulNext<T",">"),(0,a.kt)("p",null,"Contains information about the new state of a set of stateful contracts, used to construct transactions in the transaction builder."),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/StatefulNext#atoutputindex"},"atOutputIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/StatefulNext#balance"},"balance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/StatefulNext#instance"},"instance"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"atoutputindex"},"atOutputIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"atOutputIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The index of the subsequent contract output in the method calling tx"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:13"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"balance"},"balance"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"balance"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Satoshis of the subsequent contract output in the method calling tx"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:11"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"instance"},"instance"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"instance"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")),(0,a.kt)("p",null,"The subsequent stateful contract instance"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:9"))}u.isMDXComponent=!0}}]);