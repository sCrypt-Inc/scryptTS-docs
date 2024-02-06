"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[6341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=i(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var i=2;i<l;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:5},r="How to Test a Contract",c={unversionedId:"how-to-test-a-contract",id:"how-to-test-a-contract",title:"How to Test a Contract",description:"Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause real economic losses.",source:"@site/docs/how-to-test-a-contract.md",sourceDirName:".",slug:"/how-to-test-a-contract",permalink:"/how-to-test-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Interact with a Deployed Contract",permalink:"/how-to-deploy-and-call-a-contract/call-deployed"},next:{title:"How to Debug a Contract",permalink:"/how-to-debug-a-contract"}},s={},i=[{value:"Load Artifact",id:"load-artifact",level:2},{value:"Instantiate the Contract",id:"instantiate-the-contract",level:2},{value:"Contract Deployment",id:"contract-deployment",level:2},{value:"Call a Public Method",id:"call-a-public-method",level:2},{value:"Call a Non-Public Method",id:"call-a-non-public-method",level:2},{value:"Integrate with a testing framework",id:"integrate-with-a-testing-framework",level:2},{value:"Run tests",id:"run-tests",level:2},{value:"Test a Stateful Contract",id:"test-a-stateful-contract",level:2},{value:"1. Build the <code>current</code> instance",id:"1-build-the-current-instance",level:3},{value:"2. Create a <code>next</code> instance and apply updates to it off chain",id:"2-create-a-next-instance-and-apply-updates-to-it-off-chain",level:3},{value:"3. Call the method on the <code>current</code> instance to apply updates on chain",id:"3-call-the-method-on-the-current-instance-to-apply-updates-on-chain",level:3},{value:"Run tests",id:"run-tests-1",level:3}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-test-a-contract"},"How to Test a Contract"),(0,o.kt)("p",null,"Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause ",(0,o.kt)("strong",{parentName:"p"},"real economic losses"),"."),(0,o.kt)("p",null,"Create a sample project with ",(0,o.kt)("a",{parentName:"p",href:"/installation#the-scrypt-cli-tool"},"the sCrypt CLI Tool"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx scrypt-cli project demo\n")),(0,o.kt)("p",null,"This will create a complete sCrypt project, which includes a sample smart contract ",(0,o.kt)("inlineCode",{parentName:"p"},"Demo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n    assert,\n    ByteString,\n    method,\n    prop,\n    sha256,\n    Sha256,\n    SmartContract,\n} from 'scrypt-ts'\n\nexport class Demo extends SmartContract {\n    @prop()\n    hash: Sha256\n\n    constructor(hash: Sha256) {\n        super(...arguments)\n        this.hash = hash\n    }\n\n    @method()\n    public unlock(message: ByteString) {\n        assert(sha256(message) == this.hash, 'Hash does not match')\n    }\n}\n")),(0,o.kt)("p",null,"Let us now open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/demo.test.ts"),". This file contains code for deployment of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Demo")," contract locally or on the Bitcoin testnet, and a subsequent  method call on the contract."),(0,o.kt)("h2",{id:"load-artifact"},"Load Artifact"),(0,o.kt)("p",null,"First, call function ",(0,o.kt)("inlineCode",{parentName:"p"},"SmartContract.loadArtifact()")," to load the contract artifact file in order to initialize the contract class before testing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Demo.loadArtifact()\n")),(0,o.kt)("h2",{id:"instantiate-the-contract"},"Instantiate the Contract"),(0,o.kt)("p",null,"Instantiate the contract and connect a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#signer"},"signer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"instance = new Demo(sha256(toByteString('hello world', true)))\n// connect a signer\nawait instance.connect(getDefaultSigner())\n")),(0,o.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,o.kt)("p",null,"To deploy a smart contract, simply call its ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const deployTx = await instance.deploy(1)\nconsole.log('Demo contract deployed: ', deployTx.id)\n")),(0,o.kt)("h2",{id:"call-a-public-method"},"Call a Public Method"),(0,o.kt)("p",null,"You can call a contract's public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// build and send tx by calling `unlock()` on `methods` object.\nawait instance.methods.unlock(\n    toByteString('hello world', true)\n)\n")),(0,o.kt)("h2",{id:"call-a-non-public-method"},"Call a Non-Public Method"),(0,o.kt)("p",null,"You can also call non-public methods."),(0,o.kt)("p",null,"Let's add a non-public method to our contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\nhashMessage(message: ByteString): ByteString {\n    return sha256(message)\n}\n")),(0,o.kt)("p",null,"You can now call this method like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const message: ByteString = toByteString('hello world')\nconst hashRes: ByteString = instance.hashMessage(message)\n")),(0,o.kt)("p",null,"Note the absence of ",(0,o.kt)("inlineCode",{parentName:"p"},".methods")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"instance"),", compared to a public method."),(0,o.kt)("p",null,"If the method is static, it can be called like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\nstatic hashMessageStatic(message: ByteString): ByteString {\n    return sha256(message)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const hashRes: ByteString = Demo.hashMessageStatic(message)\n")),(0,o.kt)("p",null,"It should be noted that non-public methods are only directly callable off-chain, e.g., for testing. On chain, they can only be invoked through a public method."),(0,o.kt)("h2",{id:"integrate-with-a-testing-framework"},"Integrate with a testing framework"),(0,o.kt)("p",null,"You can use whatever testing framework you like to write unit tests for your contract. For example, a test using ",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('Test SmartContract `Demo`', () => {\n    let instance: Demo\n\n    before(async () => {\n        Demo.loadArtifact()\n        instance = new Demo(sha256(toByteString('hello world', true)))\n        await instance.connect(getDefaultSigner())\n    })\n\n    it('should pass the public method unit test successfully.', async () => {\n        await instance.deploy(1)\n\n        const call = async () => instance.methods.unlock(\n            toByteString('hello world', true)\n        )\n\n        await expect(call()).not.to.be.rejected\n    })\n\n    it('should throw with wrong message.', async () => {\n        await instance.deploy(1)\n\n        const call = async () => instance.methods.unlock(toByteString('wrong message', true))\n        await expect(call()).to.be.rejectedWith(/Hash does not match/)\n    })\n})\n")),(0,o.kt)("h2",{id:"run-tests"},"Run tests"),(0,o.kt)("p",null,"Compared to other blockchains, smart contracts on Bitcoin are ",(0,o.kt)("strong",{parentName:"p"},"pure"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state."),(0,o.kt)("li",{parentName:"ul"},"A public method call causes no side effects.")),(0,o.kt)("p",null,"Thus, you can run tests in two different environments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Local"),": Running tests locally without touching the Bitcoin blockchain. Transactions are constructed with dummy UTXOs. If it passes tests off chain, we are confident it will behave the same on chain.")),(0,o.kt)("p",null,"Run tests in the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," environment using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Testnet"),": Running tests on the testnet of Bitcoin blockchain. Transactions are constructed with real UTXOs on the testnet.")),(0,o.kt)("p",null,"Run tests in the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," environment using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:testnet\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When running tests in a ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," environment, you need to get some test coins from a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/faucet"},"faucet"),".")),(0,o.kt)("h2",{id:"test-a-stateful-contract"},"Test a Stateful Contract"),(0,o.kt)("p",null,"Stateful contact testing is very similar to what we have described above. The only different is that you have to be aware of smart contract instance changes after method calls."),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/stateful-contract#overview"},"Overview"),", for each method call, a tx contains new contract UTXO(s) with the latest updated state, i.e., the next instance. From the perspective of the current spending tx, the public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," of a contract instance is called in one of its inputs, and the next contract instance is stored in one (or more) of its outputs."),(0,o.kt)("p",null,"Now, let's look at how to test the ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementOnChain")," method call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// initialize the first instance, i.e., deployment\nlet counter = new Counter(0n);\n// connect it to a signer\nawait counter.connect(getDefaultSigner());\n// deploy the contract\nawait counter.deploy(1)\n\n// set the current instance to be the first instance\nlet current = counter;\n\n// create the next instance from the current\nlet nextInstance = current.next();\n\n// apply the same updates on the next instance locally\nnextInstance.increment();\n\n// call the method of current instance to apply the updates on chain\nconst call = async () => current.methods.incrementOnChain(\n  {\n    // the `next` instance and its balance should be provided here\n    next: {\n      instance: nextInstance,\n      balance\n    }\n  } as MethodCallOptions<Counter>\n);\n\nawait expect(call()).not.to.be.rejected\n")),(0,o.kt)("p",null,"In general, we call the method of a stateful contract in 3 steps:"),(0,o.kt)("h3",{id:"1-build-the-current-instance"},"1. Build the ",(0,o.kt)("inlineCode",{parentName:"h3"},"current")," instance"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," instance refers to the contract instance containing the latest state on the blockchain. The first instance is in the deployment transaction. In the above example, we initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," instance to be the first instance like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let current = counter;\n")),(0,o.kt)("h3",{id:"2-create-a-next-instance-and-apply-updates-to-it-off-chain"},"2. Create a ",(0,o.kt)("inlineCode",{parentName:"h3"},"next")," instance and apply updates to it off chain"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance is the new instance in the UTXO of the method calling tx."),(0,o.kt)("p",null,"To create the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," of a specific contract instance, you can simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let nextInstance = instance.next();\n")),(0,o.kt)("p",null,"It will make a deep copy of all properties and methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," to create a new one."),(0,o.kt)("p",null,"Then, you should apply all the state updates to the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance. Please note that these are just local/off-chain updates and are yet to be applied to the blockchain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"nextInstance.increment();\n")),(0,o.kt)("p",null,"This is the ",(0,o.kt)("strong",{parentName:"p"},"SAME")," method we call on chain in ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementOnChain"),", thanks to the fact that both the on-chain smart contract and off-chain code are written in TypeScript."),(0,o.kt)("h3",{id:"3-call-the-method-on-the-current-instance-to-apply-updates-on-chain"},"3. Call the method on the ",(0,o.kt)("inlineCode",{parentName:"h3"},"current")," instance to apply updates on chain"),(0,o.kt)("p",null,"As described in ",(0,o.kt)("a",{parentName:"p",href:"#call-a-public-method"},"this section"),", we can build a call transaction. The only difference here is that we pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance and its balance as a method call option in a stateful contract. So the method (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementOnChain"),") have all the information to verify that all updates made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," instance follow the state transition rules in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const call = async () => current.methods.incrementOnChain(\n  {\n    // the `next` instance and its balance should be provided here\n    next: {\n      instance: nextInstance,\n      balance\n    }\n  } as MethodCallOptions<Counter>\n);\nawait expect(call()).not.to.be.rejected\n")),(0,o.kt)("h3",{id:"run-tests-1"},"Run tests"),(0,o.kt)("p",null,"As before, we can just use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:testnet\n")))}u.isMDXComponent=!0}}]);