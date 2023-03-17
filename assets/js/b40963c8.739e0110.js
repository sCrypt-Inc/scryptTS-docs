"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[5700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,h=d["".concat(c,".").concat(g)]||d[g]||l[g]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},i="How to Debug a Contract",s={unversionedId:"how-to-debug-a-contract",id:"how-to-debug-a-contract",title:"How to Debug a Contract",description:"Debugging a scryptTS contract is as easy as debugging TypeScript, since it is just TypeScript.",source:"@site/docs/how-to-debug-a-contract.md",sourceDirName:".",slug:"/how-to-debug-a-contract",permalink:"/how-to-debug-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How to Customize a Contract Tx",permalink:"/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx"},next:{title:"How to Integrate With a Frontend",permalink:"/how-to-integrate-a-frontend"}},c={},u=[{value:"Use <code>console.log()</code>",id:"use-consolelog",level:2},{value:"Use Visual Studio Code debugger",id:"use-visual-studio-code-debugger",level:2}],p={toc:u};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-debug-a-contract"},"How to Debug a Contract"),(0,r.kt)("p",null,"Debugging a scryptTS contract is as easy as debugging TypeScript, since it is just TypeScript."),(0,r.kt)("h2",{id:"use-consolelog"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"console.log()")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," to print to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class Demo extends SmartContract {\n\n    @prop()\n    readonly x: bigint\n\n    @prop()\n    readonly y: bigint\n\n    constructor(x: bigint, y: bigint) {\n        super(...arguments)\n        this.x = x\n        this.y = y\n    }\n\n    @method()\n    sum(a: bigint, b: bigint): bigint {\n        return a + b\n    }\n\n    @method()\n    public add(z: bigint) {\n        console.log(`z: ${z}`) // print the value of z\n        console.log(`sum: ${this.x + this.y}`) // print the value of this.x + this.y\n        assert(z == this.sum(this.x, this.y), 'incorrect sum')\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://replit.com/@msinkec/scryptTS-console-logging"},"Try it on Replit")),(0,r.kt)("p",null,"After running the code, you should see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"z: 3\nsum: 3\n")),(0,r.kt)("h2",{id:"use-visual-studio-code-debugger"},"Use Visual Studio Code debugger"),(0,r.kt)("p",null,"You can use VS Code to debug scryptTS contracts, the same way as any other TypeScript programs. If you have created a project with ",(0,r.kt)("a",{parentName:"p",href:"/installation"},"the sCrypt CLI"),", you should have an auto-generated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/.vscode/launch.json"},"launch.json"),", containing everything needed for the debugger out of the box. To learn more about the VS Code TypeScript debugger, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/TypeScript/TypeScript-debugging"},"official documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4690).Z,width:"2166",height:"1568"}),"\nYou can set some breakpoints and choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Launch demo")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Run and Debug")," view (or press ",(0,r.kt)("strong",{parentName:"p"},"F5"),") to start the debugger instantly."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5378).Z,width:"2048",height:"1056"})),(0,r.kt)("p",null,"If you want to debug a unit test written with the ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org"},"Mocha")," testing framework, choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Launch demo test")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Run and Debug")," view."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4760).Z,width:"2048",height:"1056"})))}l.isMDXComponent=!0},4690:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/debug-a2bcba3bffead367b55d31e00fe99f2c.jpg"},5378:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/debugging1-c16cac93fc42ea18a2ed71d1e456441f.gif"},4760:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/debugging2-cfd4a199c43bd5bf30a176354550258d.gif"}}]);