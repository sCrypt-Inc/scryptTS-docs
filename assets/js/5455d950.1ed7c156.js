"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[5120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||o[u]||i;return n?a.createElement(f,l(l({ref:t},k),{},{components:n})):a.createElement(f,l({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,d={unversionedId:"reference/classes/bsv.HDPrivateKey",id:"reference/classes/bsv.HDPrivateKey",title:"bsv.HDPrivateKey",description:"scrypt-ts / bsv / HDPrivateKey",source:"@site/docs/reference/classes/bsv.HDPrivateKey.md",sourceDirName:"reference/classes",slug:"/reference/classes/bsv.HDPrivateKey",permalink:"/reference/classes/bsv.HDPrivateKey",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.ECIES",permalink:"/reference/classes/bsv.ECIES"},next:{title:"bsv.HDPublicKey",permalink:"/reference/classes/bsv.HDPublicKey"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"fingerPrint",id:"fingerprint",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"hdPublicKey",id:"hdpublickey",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"network",id:"network",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"privateKey",id:"privatekey",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"publicKey",id:"publickey",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"xprivkey",id:"xprivkey",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"xpubkey",id:"xpubkey",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods-1",level:2},{value:"derive",id:"derive",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"deriveChild",id:"derivechild",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"deriveNonCompliantChild",id:"derivenoncompliantchild",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"inspect",id:"inspect",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"toBuffer",id:"tobuffer",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"toHex",id:"tohex",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"toObject",id:"toobject",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"fromBuffer",id:"frombuffer",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"fromHex",id:"fromhex",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"fromObject",id:"fromobject",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"fromRandom",id:"fromrandom",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"fromSeed",id:"fromseed",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"fromString",id:"fromstring",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"getSerializedError",id:"getserializederror",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"isValidPath",id:"isvalidpath",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Defined in",id:"defined-in-25",level:4},{value:"isValidSerialized",id:"isvalidserialized",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-17",level:4},{value:"Defined in",id:"defined-in-26",level:4}],k={toc:s};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / ",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv")," / HDPrivateKey"),(0,r.kt)("h1",{id:"class-hdprivatekey"},"Class: HDPrivateKey"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv"),".HDPrivateKey"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#depth"},"depth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#fingerprint"},"fingerPrint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#hdpublickey"},"hdPublicKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#network"},"network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#privatekey"},"privateKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#publickey"},"publicKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#xprivkey"},"xprivkey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#xpubkey"},"xpubkey"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#derive"},"derive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#derivechild"},"deriveChild")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#derivenoncompliantchild"},"deriveNonCompliantChild")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#inspect"},"inspect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#tobuffer"},"toBuffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#tohex"},"toHex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#tojson"},"toJSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#toobject"},"toObject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#tostring"},"toString")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#frombuffer"},"fromBuffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#fromhex"},"fromHex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#fromobject"},"fromObject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#fromrandom"},"fromRandom")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#fromseed"},"fromSeed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#fromstring"},"fromString")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#getserializederror"},"getSerializedError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#isvalidpath"},"isValidPath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.HDPrivateKey#isvalidserialized"},"isValidSerialized"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new HDPrivateKey"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1123"),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"depth"},"depth"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"depth"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1130"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fingerprint"},"fingerPrint"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"fingerPrint"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1133"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hdpublickey"},"hdPublicKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hdPublicKey"),": ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPublicKey"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1125"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"network"},"network"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"network"),": ",(0,r.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,r.kt)("inlineCode",{parentName:"a"},"Network"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1129"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"privatekey"},"privateKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"privateKey"),": ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.PrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PrivateKey"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1131"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"publickey"},"publicKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"publicKey"),": ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey"))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1132"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xprivkey"},"xprivkey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"xprivkey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1127"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xpubkey"},"xpubkey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"xpubkey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1128"),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"derive"},"derive"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"derive"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hardened?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hardened?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1135"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"derivechild"},"deriveChild"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deriveChild"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hardened?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hardened?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1136"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"derivenoncompliantchild"},"deriveNonCompliantChild"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deriveNonCompliantChild"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hardened?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hardened?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1137"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inspect"},"inspect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"inspect"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1147"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tobuffer"},"toBuffer"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toBuffer"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1145"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tohex"},"toHex"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toHex"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1146"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1144"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toobject"},"toObject"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toObject"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1143"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tostring"},"toString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1142"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"frombuffer"},"fromBuffer"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromBuffer"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"buf"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"buf")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1156"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromhex"},"fromHex"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromHex"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"hex"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1157"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromobject"},"fromObject"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromObject"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"obj")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1151"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromrandom"},"fromRandom"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromRandom"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1149"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromseed"},"fromSeed"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromSeed"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"hexa"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"network"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hexa")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"network")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/reference/interfaces/bsv.Networks.Network"},(0,r.kt)("inlineCode",{parentName:"a"},"Network")))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1152"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromstring"},"fromString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromString"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.HDPrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"HDPrivateKey"))),(0,r.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1150"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getserializederror"},"getSerializedError"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getSerializedError"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"network?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"network?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/reference/interfaces/bsv.Networks.Network"},(0,r.kt)("inlineCode",{parentName:"a"},"Network")))))),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1163"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isvalidpath"},"isValidPath"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isValidPath"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hardened"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hardened")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-16"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1158"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isvalidserialized"},"isValidSerialized"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isValidSerialized"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"network?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"network?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/reference/interfaces/bsv.Networks.Network"},(0,r.kt)("inlineCode",{parentName:"a"},"Network")))))),(0,r.kt)("h4",{id:"returns-17"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:1159"))}o.isMDXComponent=!0}}]);