"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[1636],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=s(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,c(c({ref:e},u),{},{components:n})):a.createElement(f,c({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7954:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},c="Interact with a Deployed Contract",i={unversionedId:"how-to-deploy-and-call-a-contract/call-deployed",id:"how-to-deploy-and-call-a-contract/call-deployed",title:"Interact with a Deployed Contract",description:"Overview",source:"@site/docs/how-to-deploy-and-call-a-contract/call-deployed.md",sourceDirName:"how-to-deploy-and-call-a-contract",slug:"/how-to-deploy-and-call-a-contract/call-deployed",permalink:"/how-to-deploy-and-call-a-contract/call-deployed",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Faucet",permalink:"/how-to-deploy-and-call-a-contract/faucet"},next:{title:"How to Test a Contract",permalink:"/how-to-test-a-contract"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"The Smart Contract",id:"the-smart-contract",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Interact",id:"interact",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:s};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interact-with-a-deployed-contract"},"Interact with a Deployed Contract"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this tutorial, we will interact with a deployed smart contract by calling its public method, in a separate process or by a different party.\nWe need to create an instance corresponding to the deployed contract on chain."),(0,o.kt)("h2",{id:"the-smart-contract"},"The Smart Contract"),(0,o.kt)("p",null,"We will reuse ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/stateful-contract#create-a-stateful-contract"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"Counter")," contract"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class Counter extends SmartContract {\n\n    @prop(true)\n    count: bigint\n\n    constructor(count: bigint) {\n        super(...arguments)\n        this.count = count\n    }\n\n    @method()\n    public incrementOnChain() {\n        // Increment counter.\n        this.increment()\n\n        // Ensure next output will contain this contracts code w\n        // the updated count property.\n        const amount: bigint = this.ctx.utxo.value\n        const outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()\n        assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')\n    }\n\n    @method()\n    increment(): void {\n        this.count++\n    }\n}\n")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"To deploy the smart contract, we define the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"async function deploy(initialCount = 100n): Promise<string> {\n    const instance = new Counter(initialCount)\n    await instance.connect(getDefaultSigner())\n    const tx = await instance.deploy(1)\n    console.log(`Counter deployed: ${tx.id}, the count is: ${instance.count}`)\n    return tx.id\n}\n")),(0,o.kt)("p",null,"The function deploys the contract with a balance of 1 satoshi and returns the TXID of the deployed contract."),(0,o.kt)("h2",{id:"interact"},"Interact"),(0,o.kt)("p",null,"Next, we update our deployed smart contract by calling the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"async function callIncrementOnChain(\n    txId: string,\n    atOutputIndex = 0\n): Promise<string> {\n    // Fetch TX via provider and reconstruct contract instance.\n    const signer = getDefaultSigner()\n    const tx = await signer.connectedProvider.getTransaction(txId)\n    const instance = Counter.fromTx(tx, atOutputIndex)\n\n    await instance.connect(signer)\n\n    const nextInstance = instance.next()\n    nextInstance.increment()\n\n    const { tx: callTx } = await instance.methods.incrementOnChain({\n        next: {\n            instance: nextInstance,\n            balance: instance.balance,\n        },\n    } as MethodCallOptions<Counter>)\n    console.log(`Counter incrementOnChain called: ${callTx.id}, the count now is: ${nextInstance.count}`)\n    return callTx.id\n}\n")),(0,o.kt)("p",null,"The function takes as parameters the TXID of the deployed smart contract to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#create-a-smart-contract-instance-from-a-transaction"},"create an instance"),", along with the output index (which is usually 0). It uses the ",(0,o.kt)("a",{parentName:"p",href:"../reference/classes/DefaultProvider"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultProvider"))," to fetch the transaction data from the blockchain. Subsequently, it reconstructs the smart contract instance using the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/built-ins#fromtx"},(0,o.kt)("inlineCode",{parentName:"a"},"fromTx"))," function."),(0,o.kt)("p",null,"Let's encapsulate the entire process within a main function, designed to deploy the contract and increment its value five times:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"async function main() {\n    await compileContract()\n    let lastTxId = await deploy()\n    for (let i = 0; i < 5; ++i) {\n        lastTxId = await callIncrementOnChain(lastTxId)\n    }\n}\n\n(async () => {\n    await main()\n})()\n")),(0,o.kt)("p",null,"If we execute the code, we should get an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Counter deployed: 1cd6eb4ff0a5bd83f06c60c5e9a5c113c6e44fd876096e4e94e04a80fee8c8ca, the count is: 100\nCounter incrementOnChain called: c5b8d8f37f5d9c089a73a321d58c3ae205087ba21c1e32ed09a1b2fbd4f65330, the count now is: 101\nCounter incrementOnChain called: c62bb0f187f81dfeb5b70eafe80d549d3b2c6219e16d9575639b4fbdffd1d391, the count now is: 102\nCounter incrementOnChain called: 9fb217b98324b633d8a0469d6a2478f522c1f40c0b6d806430efe5ae5457ca0e, the count now is: 103\nCounter incrementOnChain called: 2080ddecc7f7731fc6afd307a57c8b117227755bd7b82eb0bc7cd8b78417ad9a, the count now is: 104\nCounter incrementOnChain called: de43687fd386e92cd892c18600d473bc38d5adb0cc34bbda892b94c61b5d5eb8, the count now is: 105\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Congratulations! You've now deployed AND interacted with a Bitcoin smart contract.\nYou can see a complete test example in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/counterFromTx.test.ts"},"boilerplate repository"),"."))}d.isMDXComponent=!0}}]);