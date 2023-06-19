"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[6341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},l="How to Test a Contract",i={unversionedId:"how-to-test-a-contract",id:"how-to-test-a-contract",title:"How to Test a Contract",description:"Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause real economic losses.",source:"@site/docs/how-to-test-a-contract.md",sourceDirName:".",slug:"/how-to-test-a-contract",permalink:"/how-to-test-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Interact with a Deployed Contract",permalink:"/how-to-deploy-and-call-a-contract/call-deployed"},next:{title:"How to Debug a Contract",permalink:"/how-to-debug-a-contract"}},s={},c=[{value:"Compile the Contract",id:"compile-the-contract",level:2},{value:"Provider",id:"provider",level:2},{value:"Signer",id:"signer",level:2},{value:"TestWallet",id:"testwallet",level:3},{value:"Test a Contract Locally",id:"test-a-contract-locally",level:2},{value:"Prepare a Signer and Provider",id:"prepare-a-signer-and-provider",level:3},{value:"Call a Public Method",id:"call-a-public-method",level:3},{value:"Verify the Tx input for the method call",id:"verify-the-tx-input-for-the-method-call",level:3},{value:"Integrate with a testing framework",id:"integrate-with-a-testing-framework",level:3},{value:"Test a Stateful Contract",id:"test-a-stateful-contract",level:2},{value:"1. Build the <code>current</code> instance",id:"1-build-the-current-instance",level:3},{value:"2. Create a <code>next</code> instance and apply updates to it off chain",id:"2-create-a-next-instance-and-apply-updates-to-it-off-chain",level:3},{value:"3. Call the method on the <code>current</code> instance to apply updates on chain",id:"3-call-the-method-on-the-current-instance-to-apply-updates-on-chain",level:3},{value:"Running the tests",id:"running-the-tests",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-test-a-contract"},"How to Test a Contract"),(0,o.kt)("p",null,"Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause ",(0,o.kt)("strong",{parentName:"p"},"real economic losses"),"."),(0,o.kt)("p",null,"There are two different kinds of tests recommended for every project using ",(0,o.kt)("inlineCode",{parentName:"p"},"sCrypt"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local Unit Testing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Testnet Integration Testing"))),(0,o.kt)("p",null,"Now we will take a look at the file ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/local/demo.ts"),". This file contains code for deployment of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Demo")," contract on the Bitcoin testnet and a subsequent public method call on the contract."),(0,o.kt)("p",null,"But before going into details, you should learn some basic models of sCrypt for signing and sending transactions."),(0,o.kt)("h2",{id:"compile-the-contract"},"Compile the Contract"),(0,o.kt)("p",null,"First, call function ",(0,o.kt)("inlineCode",{parentName:"p"},"SmartContract.compile()")," to compile the contract before doing any testing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await Demo.compile()\n")),(0,o.kt)("h2",{id:"provider"},"Provider"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," is an abstraction of a standard Bitcoin node that provides connection to the Bitcoin network, for read and write access to the blockchain."),(0,o.kt)("p",null,"sCrypt already has a few built-in providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DummyProvider"),": A mockup provider just for local tests. It does not connect to the Bitcoin blockchain and thus cannot send transactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DefaultProvider"),":  The default provider is the safest, easiest way to begin developing on Bitcoin, and it is also robust enough for use in production. It can be used in testnet as well as mainnet.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"See full list of providers ",(0,o.kt)("a",{parentName:"p",href:"/reference/classes/Provider#hierarchy"},"here"),"."))),(0,o.kt)("p",null,"You can initialize these providers like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let dummyProvider = new DummyProvider();\n\n// Mainnet\nlet provider = new DefaultProvider();\n// Or explicitly: let provider = new DefaultProvider(bsv.Networks.mainnet);\n\n// Testnet\nlet provider = new DefaultProvider(bsv.Networks.testnet);\n")),(0,o.kt)("h2",{id:"signer"},"Signer"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer")," is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet."),(0,o.kt)("h3",{id:"testwallet"},"TestWallet"),(0,o.kt)("p",null,"For testing purposes only, we have a built-in wallet called ",(0,o.kt)("inlineCode",{parentName:"p"},"TestWallet"),". It can be created like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const signer = new TestWallet(privateKey, provider);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"privateKey")," can be a single private key or an array of private keys that the wallet can use to sign transactions. The ability of the wallet to send transactions is assigned to ",(0,o.kt)("inlineCode",{parentName:"p"},"provider"),". In other words, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestWallet")," serves as both a signer and a provider."),(0,o.kt)("h2",{id:"test-a-contract-locally"},"Test a Contract Locally"),(0,o.kt)("p",null,"Compared to other blockchains, smart contracts on Bitcoin are ",(0,o.kt)("strong",{parentName:"p"},"pure"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state."),(0,o.kt)("li",{parentName:"ul"},"A public method call causes no side effects.")),(0,o.kt)("p",null,"Smart contracts are similar to mathematical functions. Thus, we can test a contract locally without touching the Bitcoin blockchain. If it passes tests off chain, we are confident it will behave the same on chain."),(0,o.kt)("h3",{id:"prepare-a-signer-and-provider"},"Prepare a Signer and Provider"),(0,o.kt)("p",null,"For local testing, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestWallet"),", with a mock provider. The ",(0,o.kt)("inlineCode",{parentName:"p"},"TestWallet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DummyProvider")," combination would be ideal for local tests because it can sign the contract call transactions without actually sending them."),(0,o.kt)("p",null,"Such a signer may be declared as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let signer = new TestWallet(privateKey, new DummyProvider());\n")),(0,o.kt)("p",null,"Don't forget to connect the signer to the contract instance as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await instance.connect(signer);\n")),(0,o.kt)("h3",{id:"call-a-public-method"},"Call a Public Method"),(0,o.kt)("p",null,"Similar to what we described in ",(0,o.kt)("a",{parentName:"p",href:"../how-to-test-a-contract#call-a-public-method"},"this section"),", you can call a contract's public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," on the blockchain as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// build and send tx for calling `foo`\nconst { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, options);\nconsole.log(`Smart contract method successfully called with txid ${tx.id}`);\n")),(0,o.kt)("p",null,"Remember that the tx is not actually sent anywhere in a local test because we connect to a mock provider."),(0,o.kt)("h3",{id:"verify-the-tx-input-for-the-method-call"},"Verify the Tx input for the method call"),(0,o.kt)("p",null,"In the previous step, the signed ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," for the contract call and its input index are returned. You can call ",(0,o.kt)("inlineCode",{parentName:"p"},"verifyScript")," on the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," to verify that the contract method call at the given tx input index is successful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let result = tx.verifyScript(atInputIndex)\nconsole.log(result.success) // Output: true or false\n")),(0,o.kt)("h3",{id:"integrate-with-a-testing-framework"},"Integrate with a testing framework"),(0,o.kt)("p",null,"You can use whatever testing framework you like to write unit tests for your contract. For example, a local test using ",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('Test SmartContract `Demo`', () => {\n  let signer;\n  let demo;\n\n  before(async () => {\n    // compile contract\n    await Demo.compile()\n\n    // create a test wallet as signer, connected to a dummy provider\n    signer = new TestWallet(privateKey, new DummyProvider())\n\n    // initialize a contract instance\n    demo = new Demo(1n, 2n)\n\n    // connect the instance to signer\n    await demo.connect(signer)\n  })\n\n  it('should pass the public method unit test successfully.', async () => {\n    // call `demo.methods.add` to get a signed tx\n    const { tx: callTx, atInputIndex } = await demo.methods.add(\n      // pass in the right argument\n      3n,\n      // set method call options\n      {\n        // Since `demo.deploy` hasn't been called before, a fake UTXO of the contract should be passed in.\n        fromUTXO: dummyUTXO\n      } as MethodCallOptions<Demo>\n    )\n\n    let result = callTx.verifyScript(atInputIndex)\n    expect(result.success, result.error).to.eq(true)\n  })\n\n  it('should pass the non-public method unit test', () => {\n    expect(demo.sum(3n, 4n)).to.be.eq(7n)\n  })\n\n  it('should throw error', () => {\n    return expect(\n      // Using the wrong argument when calling this function just results in an error.\n      demo.methods.add(4n, { fromUTXO: dummyUTXO })\n    ).to.be.rejectedWith(/add check failed/)\n  })\n})\n")),(0,o.kt)("h2",{id:"test-a-stateful-contract"},"Test a Stateful Contract"),(0,o.kt)("p",null,"Stateful contact testing is very similar to what we have described above. The only different is that you have to be aware of smart contract instance changes after method calls."),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/stateful-contract#overview"},"Overview"),", for each method call, a tx contains new contract UTXO(s) with the latest updated state, i.e., the next instance. From the perspective of the current spending tx, the public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," of a contract instance is called in one of its inputs, and the next contract instance is stored in one (or more) of its outputs."),(0,o.kt)("p",null,"Now, let's look at how to test the ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," method call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// initialize the first instance, i.e., deployment\nlet counter = new Counter(0n);\n// connect it to a signer\ncounter.connect(dummySigner());\n\n// set the current instance to be the first instance\nlet current = counter;\n\n// create the next instance from the current\nlet nextInstance = current.next();\n\n// apply the same updates on the next instance locally\nnextInstance.count++;\n\n// call the method of current instance to apply the updates on chain\nconst { tx: tx_i, atInputIndex } = await current.methods.increment(\n  {\n    // Since `counter.deploy` hasn't been called before, a fake UTXO of the contract should be passed in.\n    fromUTXO: getDummyUTXO(balance),\n\n    // the `next` instance and its balance should be provided here\n    next: {\n      instance: nextInstance,\n      balance\n    }\n  } as MethodCallOptions<Counter>\n);\n\n// check the validity of the input script generated for the method call.\nlet result = tx_i.verifyScript(atInputIndex);\nexpect(result.success, result.error).to.eq(true);\n\n")),(0,o.kt)("p",null,"In general, we call the method of a stateful contract in 3 steps:"),(0,o.kt)("h3",{id:"1-build-the-current-instance"},"1. Build the ",(0,o.kt)("inlineCode",{parentName:"h3"},"current")," instance"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," instance refers to the contract instance containing the latest state on the blockchain. The first instance is in the deployment transaction. In the above example, we initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," instance to be the first instance like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let current = counter;\n")),(0,o.kt)("h3",{id:"2-create-a-next-instance-and-apply-updates-to-it-off-chain"},"2. Create a ",(0,o.kt)("inlineCode",{parentName:"h3"},"next")," instance and apply updates to it off chain"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance is the new instance in the UTXO of the method calling tx."),(0,o.kt)("p",null,"To create the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," of a specific contract instance, you can simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let nextInstance = instance.next();\n")),(0,o.kt)("p",null,"It will make a deep copy of all properties and methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," to create a new one."),(0,o.kt)("p",null,"Then, you should apply all the state updates to the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance. Please note that these are just local/off-chain updates and are yet to be applied to the blockchain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"nextInstance.count++;\n")),(0,o.kt)("p",null,"This is the ",(0,o.kt)("strong",{parentName:"p"},"SAME")," action we do on chain in ",(0,o.kt)("inlineCode",{parentName:"p"},"increment"),", thanks to the fact that both the on-chain smart contract and off-chain code are written in TypeScript."),(0,o.kt)("h3",{id:"3-call-the-method-on-the-current-instance-to-apply-updates-on-chain"},"3. Call the method on the ",(0,o.kt)("inlineCode",{parentName:"h3"},"current")," instance to apply updates on chain"),(0,o.kt)("p",null,"As described in ",(0,o.kt)("a",{parentName:"p",href:"#call-a-public-method"},"this section"),", we can build a call transaction. The only difference here is that we pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance and its balance as a method call option in a stateful contract. So the method (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"increment"),") have all the information to verify that all updates made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance follow the state transition rules in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { tx: tx_i, atInputIndex } = await current.methods.increment(\n  {\n    // Since `counter.deploy` hasn't been called before, a fake UTXO of the contract should be passed in.\n    fromUTXO: getDummyUTXO(balance),\n\n    // the `next` instance and its balance should be provided here\n    next: {\n      instance: nextInstance,\n      balance\n    }\n  } as MethodCallOptions<Counter>\n);\n")),(0,o.kt)("p",null,"Finally, we can check the validity of the method call as before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let result = tx_i.verifyScript(atInputIndex);\nexpect(result.success, result.error).to.eq(true);\n")),(0,o.kt)("h3",{id:"running-the-tests"},"Running the tests"),(0,o.kt)("p",null,"As before, we can just use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test\n")),(0,o.kt)("p",null,"Full code is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/local/counter.test.ts"},"here"),"."),(0,o.kt)("p",null,"You may visit ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/"},"here")," to see more details on contract deployment and call."))}d.isMDXComponent=!0}}]);