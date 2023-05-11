"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[8151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=i(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||s;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const s={},l=void 0,o={unversionedId:"reference/modules/bsv.crypto",id:"reference/modules/bsv.crypto",title:"bsv.crypto",description:"scrypt-ts / bsv / crypto",source:"@site/docs/reference/modules/bsv.crypto.md",sourceDirName:"reference/modules",slug:"/reference/modules/bsv.crypto",permalink:"/reference/modules/bsv.crypto",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.crypto.Random",permalink:"/reference/modules/bsv.crypto.Random"},next:{title:"bsv.encoding",permalink:"/reference/modules/bsv.encoding"}},c={},i=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Namespaces",id:"namespaces",level:3},{value:"Classes",id:"classes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"Endianness",id:"endianness",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / ",(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv")," / crypto"),(0,a.kt)("h1",{id:"namespace-crypto"},"Namespace: crypto"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv"),".crypto"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"namespaces"},"Namespaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.crypto.ECDSA"},"ECDSA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.crypto.Hash"},"Hash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.crypto.Random"},"Random"))),(0,a.kt)("h3",{id:"classes"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.crypto.BN"},"BN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.crypto.Point"},"Point")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.crypto.Signature"},"Signature"))),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/interfaces/bsv.crypto.IOpts"},"IOpts"))),(0,a.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.crypto#endianness"},"Endianness"))),(0,a.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,a.kt)("h3",{id:"endianness"},"Endianness"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"Endianness"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"le"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"be"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:655"))}u.isMDXComponent=!0}}]);