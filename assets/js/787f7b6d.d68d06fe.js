"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[8245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||p;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,a=new Array(p);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const p={},a=void 0,o={unversionedId:"reference/interfaces/bsv.Script.IOpChunk",id:"reference/interfaces/bsv.Script.IOpChunk",title:"bsv.Script.IOpChunk",description:"scrypt-ts / bsv / Script / IOpChunk",source:"@site/docs/reference/interfaces/bsv.Script.IOpChunk.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/bsv.Script.IOpChunk",permalink:"/reference/interfaces/bsv.Script.IOpChunk",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.Networks.Network",permalink:"/reference/interfaces/bsv.Networks.Network"},next:{title:"bsv.Script.Interpreter.InterpretState",permalink:"/reference/interfaces/bsv.Script.Interpreter.InterpretState"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"buf",id:"buf",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"len",id:"len",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"opcodenum",id:"opcodenum",level:3},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / ",(0,i.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv")," / ",(0,i.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Script"},"Script")," / IOpChunk"),(0,i.kt)("h1",{id:"interface-iopchunk"},"Interface: IOpChunk"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv"),".",(0,i.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Script"},"Script"),".IOpChunk"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/bsv.Script.IOpChunk#buf"},"buf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/bsv.Script.IOpChunk#len"},"len")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/bsv.Script.IOpChunk#opcodenum"},"opcodenum"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"buf"},"buf"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"buf"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"node_modules/bsv/index.d.ts:1211"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"len"},"len"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"len"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"node_modules/bsv/index.d.ts:1212"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"opcodenum"},"opcodenum"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"opcodenum"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"node_modules/bsv/index.d.ts:1213"))}s.isMDXComponent=!0}}]);