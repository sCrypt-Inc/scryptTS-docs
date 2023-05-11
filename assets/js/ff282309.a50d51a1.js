"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[9348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},o=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),o=s(t),k=a,m=o["".concat(u,".").concat(k)]||o[k]||f[k]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=o;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}o.displayName="MDXCreateElement"},1404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={},i=void 0,d={unversionedId:"reference/classes/bsv.encoding.BufferReader",id:"reference/classes/bsv.encoding.BufferReader",title:"bsv.encoding.BufferReader",description:"scrypt-ts / bsv / encoding / BufferReader",source:"@site/docs/reference/classes/bsv.encoding.BufferReader.md",sourceDirName:"reference/classes",slug:"/reference/classes/bsv.encoding.BufferReader",permalink:"/reference/classes/bsv.encoding.BufferReader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.encoding.Base58Check",permalink:"/reference/classes/bsv.encoding.Base58Check"},next:{title:"bsv.encoding.BufferWriter",permalink:"/reference/classes/bsv.encoding.BufferWriter"}},u={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"pos",id:"pos",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods-1",level:2},{value:"eof",id:"eof",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"read",id:"read",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"readAll",id:"readall",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"readInt32LE",id:"readint32le",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"readReverse",id:"readreverse",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"readUInt16BE",id:"readuint16be",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"readUInt16LE",id:"readuint16le",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"readUInt32BE",id:"readuint32be",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"readUInt32LE",id:"readuint32le",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"readUInt64BEBN",id:"readuint64bebn",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"readUInt64LEBN",id:"readuint64lebn",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"readUInt8",id:"readuint8",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"readVarLengthBuffer",id:"readvarlengthbuffer",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"readVarintBN",id:"readvarintbn",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"readVarintBuf",id:"readvarintbuf",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"readVarintNum",id:"readvarintnum",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"remaining",id:"remaining",level:3},{value:"Returns",id:"returns-16",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"reverse",id:"reverse",level:3},{value:"Returns",id:"returns-17",level:4},{value:"Defined in",id:"defined-in-19",level:4}],p={toc:s};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / ",(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv")," / ",(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv.encoding"},"encoding")," / BufferReader"),(0,a.kt)("h1",{id:"class-bufferreader"},"Class: BufferReader"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv"),".",(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv.encoding"},"encoding"),".BufferReader"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#pos"},"pos"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#eof"},"eof")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#read"},"read")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readall"},"readAll")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readint32le"},"readInt32LE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readreverse"},"readReverse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readuint16be"},"readUInt16BE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readuint16le"},"readUInt16LE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readuint32be"},"readUInt32BE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readuint32le"},"readUInt32LE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readuint64bebn"},"readUInt64BEBN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readuint64lebn"},"readUInt64LEBN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readuint8"},"readUInt8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readvarlengthbuffer"},"readVarLengthBuffer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readvarintbn"},"readVarintBN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readvarintbuf"},"readVarintBuf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#readvarintnum"},"readVarintNum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#remaining"},"remaining")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/classes/bsv.encoding.BufferReader#reverse"},"reverse"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new BufferReader"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"buf"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"buf")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:610"),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"pos"},"pos"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"pos"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:629"),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"eof"},"eof"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"eof"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:627"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read"},"read"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"read"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"len"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"len")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:611"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readall"},"readAll"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readAll"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:626"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readint32le"},"readInt32LE"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readInt32LE"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:617"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readreverse"},"readReverse"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readReverse"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"len?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"len?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:625"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readuint16be"},"readUInt16BE"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readUInt16BE"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:613"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readuint16le"},"readUInt16LE"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readUInt16LE"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:614"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readuint32be"},"readUInt32BE"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readUInt32BE"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:615"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readuint32le"},"readUInt32LE"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readUInt32LE"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:616"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readuint64bebn"},"readUInt64BEBN"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readUInt64BEBN"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:618"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readuint64lebn"},"readUInt64LEBN"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readUInt64LEBN"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:619"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readuint8"},"readUInt8"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readUInt8"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-11"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:612"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readvarlengthbuffer"},"readVarLengthBuffer"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readVarLengthBuffer"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"returns-12"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:621"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readvarintbn"},"readVarintBN"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readVarintBN"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/reference/classes/bsv.crypto.BN"},(0,a.kt)("inlineCode",{parentName:"a"},"BN"))),(0,a.kt)("h4",{id:"returns-13"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/classes/bsv.crypto.BN"},(0,a.kt)("inlineCode",{parentName:"a"},"BN"))),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:623"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readvarintbuf"},"readVarintBuf"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readVarintBuf"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"returns-14"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:622"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readvarintnum"},"readVarintNum"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readVarintNum"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-15"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:620"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remaining"},"remaining"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"remaining"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-16"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:628"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reverse"},"reverse"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"reverse"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/reference/classes/bsv.encoding.BufferReader"},(0,a.kt)("inlineCode",{parentName:"a"},"BufferReader"))),(0,a.kt)("h4",{id:"returns-17"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/classes/bsv.encoding.BufferReader"},(0,a.kt)("inlineCode",{parentName:"a"},"BufferReader"))),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:624"))}f.isMDXComponent=!0}}]);