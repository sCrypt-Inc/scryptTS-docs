"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[6341],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),h=s(n),d=o,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,l(l({ref:e},p),{},{components:n})):a.createElement(m,l({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=h;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3878:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},l="How to Test a Contract",c={unversionedId:"how-to-test-a-contract",id:"how-to-test-a-contract",title:"How to Test a Contract",description:"Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause real economic losses.",source:"@site/docs/how-to-test-a-contract.md",sourceDirName:".",slug:"/how-to-test-a-contract",permalink:"/how-to-test-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Interact with a Deployed Contract",permalink:"/how-to-deploy-and-call-a-contract/call-deployed"},next:{title:"How to Debug a Contract",permalink:"/how-to-debug-a-contract"}},i={},s=[{value:"Compile the Contract",id:"compile-the-contract",level:2},{value:"Instantiate the Contract",id:"instantiate-the-contract",level:2},{value:"Contract Deployment",id:"contract-deployment",level:2},{value:"Call a Public Method",id:"call-a-public-method",level:2},{value:"Integrate with a testing framework",id:"integrate-with-a-testing-framework",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Test a Stateful Contract",id:"test-a-stateful-contract",level:2},{value:"1. Build the <code>current</code> instance",id:"1-build-the-current-instance",level:3},{value:"2. Create a <code>next</code> instance and apply updates to it off chain",id:"2-create-a-next-instance-and-apply-updates-to-it-off-chain",level:3},{value:"3. Call the method on the <code>current</code> instance to apply updates on chain",id:"3-call-the-method-on-the-current-instance-to-apply-updates-on-chain",level:3},{value:"Running the tests",id:"running-the-tests-1",level:3}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-test-a-contract"},"How to Test a Contract"),(0,o.kt)("p",null,"Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause ",(0,o.kt)("strong",{parentName:"p"},"real economic losses"),"."),(0,o.kt)("p",null,"Create a sample project with ",(0,o.kt)("a",{parentName:"p",href:"/installation#the-scrypt-cli-tool"},"the sCrypt CLI Tool"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx scrypt-cli project demo\n")),(0,o.kt)("p",null,"This will create a complete sCrypt project, which includes a sample smart contract ",(0,o.kt)("inlineCode",{parentName:"p"},"Demo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n    assert,\n    ByteString,\n    method,\n    prop,\n    sha256,\n    Sha256,\n    SmartContract,\n} from 'scrypt-ts'\n\nexport class Demo extends SmartContract {\n    @prop()\n    hash: Sha256\n\n    constructor(hash: Sha256) {\n        super(...arguments)\n        this.hash = hash\n    }\n\n    @method()\n    public unlock(message: ByteString) {\n        assert(sha256(message) == this.hash, 'Hash does not match')\n    }\n}\n")),(0,o.kt)("p",null,"Let us now open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/demo.test.ts"),". This file contains code for deployment of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Demo")," contract on the Bitcoin testnet or local and a subsequent public method call on the contract."),(0,o.kt)("h2",{id:"compile-the-contract"},"Compile the Contract"),(0,o.kt)("p",null,"First, call function ",(0,o.kt)("inlineCode",{parentName:"p"},"SmartContract.compile()")," to compile the contract before doing any testing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await Demo.compile()\n")),(0,o.kt)("h2",{id:"instantiate-the-contract"},"Instantiate the Contract"),(0,o.kt)("p",null,"Instantiate the contract and connect a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#signer"},"signer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"instance = new Demo(sha256(toByteString('hello world', true)))\n// connect a signer\nawait instance.connect(getDefaultSigner())\n")),(0,o.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,o.kt)("p",null,"To deploy a smart contract, simply call its ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const deployTx = await instance.deploy(1)\nconsole.log('Demo contract deployed: ', deployTx.id)\n")),(0,o.kt)("h2",{id:"call-a-public-method"},"Call a Public Method"),(0,o.kt)("p",null,"You can call a contract's public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," on the blockchain as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// build and send tx by calling `unlock()` on `methods` object.\nawait instance.methods.unlock(\n    toByteString('hello world', true)\n)\n")),(0,o.kt)("h2",{id:"integrate-with-a-testing-framework"},"Integrate with a testing framework"),(0,o.kt)("p",null,"You can use whatever testing framework you like to write unit tests for your contract. For example, a test using ",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\ndescribe('Test SmartContract `Demo`', () => {\n    let instance: Demo\n\n    before(async () => {\n        await Demo.compile()\n        instance = new Demo(sha256(toByteString('hello world', true)))\n        await instance.connect(getDefaultSigner())\n    })\n\n    it('should pass the public method unit test successfully.', async () => {\n        await instance.deploy(1)\n\n        const callContract = async () => await instance.methods.unlock(\n            toByteString('hello world', true)\n        )\n\n        expect(callContract()).not.throw\n    })\n\n    it('should throw with wrong message.', async () => {\n        await instance.deploy(1)\n\n        const callContract = async () => await instance.methods.unlock(toByteString('wrong message', true))\n        expect(callContract()).to.be.rejectedWith(/Hash does not match/)\n    })\n})\n")),(0,o.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,o.kt)("p",null,"Compared to other blockchains, smart contracts on Bitcoin are ",(0,o.kt)("strong",{parentName:"p"},"pure"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state."),(0,o.kt)("li",{parentName:"ul"},"A public method call causes no side effects.")),(0,o.kt)("p",null,"Thus, you can run tests in two different environments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Local"),": Running tests locally without touching the Bitcoin blockchain. Transactions are constructed with dummy UTXOs. If it passes tests off chain, we are confident it will behave the same on chain.")),(0,o.kt)("p",null,"Run tests in the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," environment using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Testnet"),": Running tests on the testnet of Bitcoin blockchain. Transactions are constructed with real UTXOs on the testnet.")),(0,o.kt)("p",null,"Run tests in the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," environment using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:testnet\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When running tests in a ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," environment, you need to get some test coins from a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/faucet"},"faucet"),".")),(0,o.kt)("h2",{id:"test-a-stateful-contract"},"Test a Stateful Contract"),(0,o.kt)("p",null,"Stateful contact testing is very similar to what we have described above. The only different is that you have to be aware of smart contract instance changes after method calls."),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/stateful-contract#overview"},"Overview"),", for each method call, a tx contains new contract UTXO(s) with the latest updated state, i.e., the next instance. From the perspective of the current spending tx, the public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," of a contract instance is called in one of its inputs, and the next contract instance is stored in one (or more) of its outputs."),(0,o.kt)("p",null,"Now, let's look at how to test the ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementOnChain")," method call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// initialize the first instance, i.e., deployment\nlet counter = new Counter(0n);\n// connect it to a signer\nawait counter.connect(getDefaultSigner());\n\n\nconst deployTx = await counter.deploy(1)\nconsole.log('Counter contract deployed: ', deployTx.id)\n\n// set the current instance to be the first instance\nlet current = counter;\n\n// create the next instance from the current\nlet nextInstance = current.next();\n\n// apply the same updates on the next instance locally\nnextInstance.increment();\n\n// call the method of current instance to apply the updates on chain\nconst callContract = async () => await current.methods.incrementOnChain(\n  {\n    // the `next` instance and its balance should be provided here\n    next: {\n      instance: nextInstance,\n      balance\n    }\n  } as MethodCallOptions<Counter>\n);\n\nexpect(callContract()).not.throw\n")),(0,o.kt)("p",null,"In general, we call the method of a stateful contract in 3 steps:"),(0,o.kt)("h3",{id:"1-build-the-current-instance"},"1. Build the ",(0,o.kt)("inlineCode",{parentName:"h3"},"current")," instance"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," instance refers to the contract instance containing the latest state on the blockchain. The first instance is in the deployment transaction. In the above example, we initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," instance to be the first instance like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let current = counter;\n")),(0,o.kt)("h3",{id:"2-create-a-next-instance-and-apply-updates-to-it-off-chain"},"2. Create a ",(0,o.kt)("inlineCode",{parentName:"h3"},"next")," instance and apply updates to it off chain"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance is the new instance in the UTXO of the method calling tx."),(0,o.kt)("p",null,"To create the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," of a specific contract instance, you can simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let nextInstance = instance.next();\n")),(0,o.kt)("p",null,"It will make a deep copy of all properties and methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," to create a new one."),(0,o.kt)("p",null,"Then, you should apply all the state updates to the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance. Please note that these are just local/off-chain updates and are yet to be applied to the blockchain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"nextInstance.increment();\n")),(0,o.kt)("p",null,"This is the ",(0,o.kt)("strong",{parentName:"p"},"SAME")," method we call on chain in ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementOnChain"),", thanks to the fact that both the on-chain smart contract and off-chain code are written in TypeScript."),(0,o.kt)("h3",{id:"3-call-the-method-on-the-current-instance-to-apply-updates-on-chain"},"3. Call the method on the ",(0,o.kt)("inlineCode",{parentName:"h3"},"current")," instance to apply updates on chain"),(0,o.kt)("p",null,"As described in ",(0,o.kt)("a",{parentName:"p",href:"#call-a-public-method"},"this section"),", we can build a call transaction. The only difference here is that we pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance and its balance as a method call option in a stateful contract. So the method (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementOnChain"),") have all the information to verify that all updates made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance follow the state transition rules in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const callContract = async () =>  await current.methods.incrementOnChain(\n  {\n    // the `next` instance and its balance should be provided here\n    next: {\n      instance: nextInstance,\n      balance\n    }\n  } as MethodCallOptions<Counter>\n);\nexpect(callContract()).not.throw\n")),(0,o.kt)("h3",{id:"running-the-tests-1"},"Running the tests"),(0,o.kt)("p",null,"As before, we can just use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:testnet\n")))}u.isMDXComponent=!0}}]);