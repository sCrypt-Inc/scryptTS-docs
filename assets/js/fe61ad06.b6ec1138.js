"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[7719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="Tutorial 6: Zero Knowledge Proofs",l={unversionedId:"tutorials/zkp",id:"tutorials/zkp",title:"Tutorial 6: Zero Knowledge Proofs",description:"Overview",source:"@site/docs/tutorials/zkp.md",sourceDirName:"tutorials",slug:"/tutorials/zkp",permalink:"/tutorials/zkp",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Tutorial 5: Tic Tac Toe",permalink:"/tutorials/tic-tac-toe"},next:{title:"Tutorial 7: Voting",permalink:"/tutorials/voting"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"What are zk-SNARKS?",id:"what-are-zk-snarks",level:3},{value:"Install ZoKrates",id:"install-zokrates",level:2},{value:"ZoKrates Workflow",id:"zokrates-workflow",level:2},{value:"1. Design a circuit",id:"1-design-a-circuit",level:3},{value:"2. Compile the circuit",id:"2-compile-the-circuit",level:3},{value:"3. Setup",id:"3-setup",level:3},{value:"4. Calculate a witness",id:"4-calculate-a-witness",level:3},{value:"5. Creating a proof",id:"5-creating-a-proof",level:3},{value:"6. Export an sCrypt verifier",id:"6-export-an-scrypt-verifier",level:3},{value:"7. Run the sCrypt Verifier",id:"7-run-the-scrypt-verifier",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-6-zero-knowledge-proofs"},"Tutorial 6: Zero Knowledge Proofs"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this tutorial we will go over how to create a zero-knowledge proof (ZKP) and verify it on Bitcoin using sCrypt."),(0,r.kt)("h3",{id:"what-are-zk-snarks"},"What are zk-SNARKS?"),(0,r.kt)("p",null,"SNARK (zero-knowledge Succinct Non-interactive ARguments of Knowledge) is a type of ZKP that is amenable for blockchains. The generated proof is \u201csuccinct\u201d and \u201cnon-interactive\u201d: a proof is only a few hundred bytes and can be verified in constant time and within a few milliseconds, without needing to ask additional questions of the prover. Together, these properties make zk-SNARK especially suitable for blockchains, where on-chain storage and computation can be expensive and senders often go offline after sending a transaction. "),(0,r.kt)("p",null,'A proof is constructed off-chain by a prover who generates the proof using a secret input (often referred to as the "witness") and a public input. The prover can then use this proof as an input for an sCrypt smart contract, which can verify the validity of the proof using a verification key and the public input.\n',(0,r.kt)("img",{src:n(6559).Z,width:"1280",height:"720"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.altoros.com/blog/securing-a-blockchain-with-a-noninteractive-zero-knowledge-proof/"},"Source")),(0,r.kt)("p",null,"There are many tools for creating such proofs, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/zokrates"},"ZoKrates")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/snarkjs"},"SnarkJS")," are among the most popular. "),(0,r.kt)("p",null,"In this example we will use ZoKrates. It provides a python-like higher-level language for developers to code the computational problem they want to prove."),(0,r.kt)("p",null,"For a more comprehensive explanation of zk-SNARKS and how they work, we recommend reading ",(0,r.kt)("a",{parentName:"p",href:"https://xiaohuiliu.medium.com/zk-snarks-on-bitcoin-239d96d182bd"},"this blog post"),"."),(0,r.kt)("h2",{id:"install-zokrates"},"Install ZoKrates"),(0,r.kt)("p",null,"Run the following command to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/zokrates/releases"},"released binaries"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -Ls https://scrypt.io/scripts/setup-zokrates.sh | sh -s -\n")),(0,r.kt)("p",null,"or build from source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/sCrypt-Inc/zokrates\ncd ZoKrates\ncargo +nightly build -p zokrates_cli --release\ncd target/release\n")),(0,r.kt)("h2",{id:"zokrates-workflow"},"ZoKrates Workflow"),(0,r.kt)("h3",{id:"1-design-a-circuit"},"1. Design a circuit"),(0,r.kt)("p",null,"Create a new ZoKrates file named ",(0,r.kt)("inlineCode",{parentName:"p"},"factor.zok")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"// p, q are the factors of n\ndef main(private field p, private field q, field n) {\n    assert(p * q == n);\n    assert(p > 1);\n    assert(q > 1);\n    return;\n}\n")),(0,r.kt)("p",null,"This simple circuit/program proves one knows a factorization of an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," into two integers, without revealing the factors. The circuit has two private inputs named ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," and one public input named ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("h3",{id:"2-compile-the-circuit"},"2. Compile the circuit"),(0,r.kt)("p",null,"Compile the circuit with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"zokrates compile -i factor.zok\n")),(0,r.kt)("p",null,"This generates two files that encode the circuit in binary and human-readable format."),(0,r.kt)("h3",{id:"3-setup"},"3. Setup"),(0,r.kt)("p",null,"This generates a proving key and a verification key for this circuit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"zokrates setup\n")),(0,r.kt)("h3",{id:"4-calculate-a-witness"},"4. Calculate a witness"),(0,r.kt)("p",null,"A proof attests that a prover knows some secret/private information that satisfies the original program. This secret information is called witness. In the following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"13")," are the witnesses, as they are factors of ",(0,r.kt)("inlineCode",{parentName:"p"},"91"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"zokrates compute-witness -a 7 13 91\n")),(0,r.kt)("p",null,"A file named ",(0,r.kt)("inlineCode",{parentName:"p"},"witness")," is generated."),(0,r.kt)("h3",{id:"5-creating-a-proof"},"5. Creating a proof"),(0,r.kt)("p",null,"The following command produces a proof, using both the proving key and the witness:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"zokrates generate-proof\n")),(0,r.kt)("p",null,"The resulting file ",(0,r.kt)("inlineCode",{parentName:"p"},"proof.json")," looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scheme": "g16",\n  "curve": "bn128",\n  "proof": {\n    "a": [\n      "0x0a7ea3ca37865347396645d017c7623431d13103e9107c937d722e5da15f352b",\n      "0x040c202ba8fa153f84af8dabc2ca40ff534f54efeb3271acc04a70c41afd079b"\n    ],\n    "b": [\n      [\n        "0x0ec1e4faea792762de35dcfd0da0e6859ce491cafad455c334d2c72cb8b24550",\n        "0x0985ef1d036b41d44376c1d42ff803b7cab9f9d4cf5bd75298e0fab2d109f096"\n      ],\n      [\n        "0x265151afd8626b4c72dfefb86bac2b63489423d6cf895ed9fa186548b0b9e3f3",\n        "0x301f2b356621408e037649d0f5b4ad5f4b2333f58453791cc24f07d5673349bf"\n      ]\n    ],\n    "c": [\n      "0x2b75a257d68763100ca11afb3beae511732c1cd1d3f1ce1804cbc0c26043cb6b",\n      "0x2f80c706b58482eec9e759fce805585595a76c27e37b67af3463414246fbabbd"\n    ]\n  },\n  "inputs": [\n    "0x000000000000000000000000000000000000000000000000000000000000005b"\n  ]\n}\n')),(0,r.kt)("h3",{id:"6-export-an-scrypt-verifier"},"6. Export an sCrypt verifier"),(0,r.kt)("p",null,"Using our version of ZoKrates, we can export a project template, which will contain a verifier for our circuit. Simply run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"zokrates export-verifier-scrypt\n")),(0,r.kt)("p",null,"This will create a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"verifier"),", containing the project. Let's set it up. Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd verifier && git init && npm i\n")),(0,r.kt)("p",null,"Now the verifier is ready to be used. In the following section we will go over the code and show how to use it."),(0,r.kt)("h3",{id:"7-run-the-scrypt-verifier"},"7. Run the sCrypt Verifier"),(0,r.kt)("p",null,"In the generated project, let's open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contracts/verifier.ts"),". This file contains an sCrypt smart contract, named ",(0,r.kt)("inlineCode",{parentName:"p"},"Verifier"),", which can be unlocked by providing a valid ZK proof."),(0,r.kt)("p",null,"Under the hood it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"SNARK")," library from ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contracts/snark.ts"),". This file includes an elliptic curve implementation along with a library that implements pairings over that elliptic curve and lastly the implementation of the proof verification algorithm. In our example the ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/@jpw/bn254"},(0,r.kt)("inlineCode",{parentName:"a"},"BN-256")," elliptic curve")," is being used along with the ",(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2016/260.pdf"},(0,r.kt)("inlineCode",{parentName:"a"},"Groth-16")," proof system"),".."),(0,r.kt)("p",null,"Let's take a look at the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Verifier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class Verifier extends SmartContract {\n    \n    @prop()\n    vk: VerifyingKey\n\n    @prop()\n    publicInputs: FixedArray<bigint, typeof N_PUB_INPUTS>,\n\n    constructor(\n      vk: VerifyingKey,\n      publicInputs: FixedArray<bigint, typeof N_PUB_INPUTS>,\n      ) {\n        super(...arguments)\n        this.vk = vk\n        this.publicInputs = publicInputs\n    }\n    \n    @method()\n    public verifyProof(\n        proof: Proof\n    ) {\n        assert(SNARK.verify(this.vk, this.publicInputs, proof))\n    }\n\n}\n")),(0,r.kt)("p",null,"As we can see, the contract has two properties, namely the verification key and the value(s) of the public inputs to our ZK program. "),(0,r.kt)("p",null,"The contract also has a public method named ",(0,r.kt)("inlineCode",{parentName:"p"},"verifyProof"),". As the name implies it verifies a ZK proof and can be unlocked by a valid one. The proof is passed as a parameter. The method calls the proof verification function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"SNARK.verify(this.vk, this.publicInputs, proof)\n")),(0,r.kt)("p",null,"The function takes as parameters the verification key, the public inputs and the proof. It's important to note that the proof is cryptographically tied to the verification key and thus must be a proof about the correct ZoKrates program (",(0,r.kt)("inlineCode",{parentName:"p"},"factor.zok"),")."),(0,r.kt)("p",null,"The generated project will also contain a deployment script ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy.ts"),". Let's take a look at the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function main() {\n    await Verifier.compile()\n    \n    // TODO: Adjust the amount of satoshis locked in the smart contract:\n    const amount = 100\n\n    // TODO: Insert public input values here:\n    const publicInputs: FixedArray<bigint, typeof N_PUB_INPUTS> = [ 0n ]\n\n    let verifier = new Verifier(\n        prepareVerifyingKey(VERIFYING_KEY_DATA),\n        publicInputs\n    )\n\n    // Connect to a signer.\n    await verifier.connect(getDefaultSigner())\n\n    // Deploy:\n    const deployTx = await verifier.deploy(amount)\n    console.log('Verifier contract deployed: ', deployTx.id)\n}\n\nmain()\n")),(0,r.kt)("p",null,"We can observe that we need to adjust two things. First, we need to set the amount of satoshis we will lock into the deployed smart contract. The second thing is the public input value, i.e. the product of the secret factors. Let's set it to the value ",(0,r.kt)("inlineCode",{parentName:"p"},"91"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const publicInputs: FixedArray<bigint, typeof N_PUB_INPUTS> = [ 91n ]\n")),(0,r.kt)("p",null,"Note also, that ZoKrates already provided us with the values of the verification key, that we created during the setup phase."),(0,r.kt)("p",null,"Now, we can build and deploy the contract. Simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run deploy\n")),(0,r.kt)("p",null,"The first time you run the command, it will ask you to fund a testnet address. You can fund it using ",(0,r.kt)("a",{parentName:"p",href:"https://scrypt.io/faucet/"},"our faucet"),"."),(0,r.kt)("p",null,"After a successful run you should see something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Verifier contract deployed:  2396a4e52555cdc29795db281d17de423697bd5cbabbcb756cb14cea8e947235\n")),(0,r.kt)("p",null,"The smart contract is now deployed and can be unlocked using a valid proof, that proves the knowledge of the factors for the integer ",(0,r.kt)("inlineCode",{parentName:"p"},"91"),". You can see ",(0,r.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/tx/2396a4e52555cdc29795db281d17de423697bd5cbabbcb756cb14cea8e947235"},"the transaction")," using a block explorer."),(0,r.kt)("p",null,"Let's call the deployed contract. Let's create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"call.ts")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DefaultProvider } from 'scrypt-ts'\nimport { parseProofFile } from './src/util'\nimport { Verifier } from './src/contracts/verifier'\nimport { Proof } from './src/contracts/snark'\nimport { getDefaultSigner } from './tests/utils/helper'\nimport { PathLike } from 'fs'\n\nexport async function call(txId: string, proofPath: PathLike) {\n    await Verifier.compile()\n\n    // Fetch TX via provider and reconstruct contract instance\n    const provider = new DefaultProvider()\n    const tx = await provider.getTransaction(txId)\n    const verifier = Verifier.fromTx(tx, 0)\n    \n    // Connect signer\n    await verifier.connect(getDefaultSigner())\n\n    // Parse proof.json\n    const proof: Proof = parseProofFile(proofPath)\n\n    // Call verifyProof()\n    const { tx: callTx } = await verifier.methods.verifyProof(\n        proof\n    )\n    console.log('Verifier contract unlocked: ', callTx.id)\n}\n\n(async () => {\n  await call('2396a4e52555cdc29795db281d17de423697bd5cbabbcb756cb14cea8e947235', '../proof.json')\n})()\n")),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," will create the contract instance from the passed ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/TXID"},"TXID")," and call its ",(0,r.kt)("inlineCode",{parentName:"p"},"verifyProof")," method. The proof gets parsed from ",(0,r.kt)("inlineCode",{parentName:"p"},"proof.json"),", which we already created in the section above."),(0,r.kt)("p",null,"Let's unlock our contract by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx ts-node call.ts\n")),(0,r.kt)("p",null,"If everything goes as expected, we have now unlocked the verifier smart contract. You'll see an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Verifier contract unlocked:  30127e0c340878d3fb7c165e2d082267eef2c8df79b5cf750896ef565ca7651d\n")),(0,r.kt)("p",null,"Take a look at it using ",(0,r.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/tx/30127e0c340878d3fb7c165e2d082267eef2c8df79b5cf750896ef565ca7651d"},"a block explorer"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You have successfully created a zk-SNARK and verified it on-chain!"),(0,r.kt)("p",null,"If you want to learn how you can integrate zk-SNARKS into a fully fledged Bitcoin web application, take a look at our free ",(0,r.kt)("a",{parentName:"p",href:"https://learn.scrypt.io/en/courses/Build-a-zkSNARK-based-Battleship-Game-on-Bitcoin-64187ae0d1a6cb859d18d72a"},"course"),", which will teach you how to create a ZK Battleship game.\nAdditionally, it teaches you to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/snarkjs"},"snarkjs/circom"),"."),(0,r.kt)("p",null,"To know more about ZKP, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/awesome-zero-knowledge-proofs"},"this awesome list"),"."))}u.isMDXComponent=!0},6559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zksnark-verifier-76b36129a7c3ca5f1a956eb4c9c98abc.png"}}]);