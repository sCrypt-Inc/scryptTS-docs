---
sidebar_position: 7
---

# Tutorial 7: Voting

## Overview

In this tutorial, we will go over how to use sCrypt to build a full-stacck voting dApp on Bitcoin, including the smart contract and an interactive front-end.

![](../../static/img/voting.gif)

On the web page, you can see the candidate list. Clicking the like button will cast one vote to the corresponding candidate. This will prompt the wallet to ask for a user's approval. A transaction calling the contract will be sent after her approval.

First we will write the smart contract step by step and deploy it. Afterwards we will build a front-end with React that allows users to cast vote and thus interact with the contract.

## Contract

### Properties

For each candidate, there are two properties we need to store in the contract: her name and her votes received so far.

We define a type alias of `ByteString` to represent a candidate name.

```ts
export type CandidateName = ByteString
```

We define a struct to represent a candidate.

```ts
export type Candidate = {
  name: CandidateName
  votesReceived: bigint
}
```

We use a `FixedArray` to store the list of candidates, which we alias as type `Candidates`.
Since candidates' vote counts can be updated, we mark it [stateful](../how-to-write-a-contract/stateful-contract.md#stateful-properties) by setting `@prop(true)`.

```ts
export const N = 10
export type Candidates = FixedArray<Candidate, typeof N>

export class Voting extends SmartContract {  
  @prop(true)
  candidates: Candidates
  // ...
}
```

### Constructor

Initialize all the `@prop` properties in the constructor. Note that we only need to pass the candidate names in the argument, because the votes they received would be all 0 at the beginning.

```ts
constructor(candidateNames: FixedArray<CandidateName, typeof N>) {
  super(...arguments)
  // initialize fixed array
  this.candidates = fill({ name: toByteString(''), votesReceived: 0n }, N)
  // set names and set votes they received to 0
  for (let i = 0; i < N; i++) {
    this.candidates[i] = { name: candidateNames[i], votesReceived: 0n }
  }
}
```

### Methods

The only way to interact with this contract is to vote for one candidate in the list, so we will have only 1 **public** method `vote`. Tt takes only 1 parameter: the name of the candidate you want to vote for.

```ts
@method()
public vote(candidate: CandidateName) {
  // 1) change contract state: add one vote to `candidate` in the list
  // 2) propogate the state
}
```

We can simply use a `for` loop to implement this: find the corresponding candidate in the list by name, then increment its vote by one. We implement this in a helper method `increaseVotesReceived`.

```ts
// cast one vote to a candidate
@method()
increaseVotesReceived(candidate: CandidateName): void {
  for (let i = 0; i < N; i++) {
    if (this.candidates[i].name === candidate) {
      this.candidates[i].votesReceived++
    }
  }
}
```

After we increment the candidate's votes and update the contract state, we make sure the new state is maintained in the spending transaction's output [as usual](../how-to-write-a-contract/stateful-contract.md#update-states). Another output is added if change is needed.

```ts
let outputs: ByteString = this.buildStateOutput(this.ctx.utxo.value)
if (this.changeAmount > 0n) {
  outputs += this.buildChangeOutput()
}
assert(this.ctx.hashOutputs === hash256(outputs), 'hashOutputs mismatch')
```

The public function `vote` is now finished.

```ts
@method()
public vote(candidate: CandidateName) {
  // change contract state: add one vote to `candidate` in the list
  this.increaseVotesReceived(candidate)
  
  // restrict tx outputs
  // to contain the latest state with the same balance
  let outputs: ByteString = this.buildStateOutput(this.ctx.utxo.value)
  if (this.changeAmount > 0n) {
    // to contain the change output when necessary
    outputs += this.buildChangeOutput()
  }
  assert(this.ctx.hashOutputs === hash256(outputs), 'hashOutputs mismatch')
}
```

### Final Code

You have completed the `Voting` contract! The [final complete code](https://github.com/sCrypt-Inc/voting/blob/master/src/contracts/voting.ts) is as follows:

```ts
import {
    method,
    prop,
    SmartContract,
    hash256,
    assert,
    ByteString,
    FixedArray,
    toByteString,
    fill
} from 'scrypt-ts'
export type CandidateName = ByteString

export type Candidate = {
  name: CandidateName
  votesReceived: bigint
}

export const N = 10

export type Candidates = FixedArray<Candidate, typeof N>

export class Voting extends SmartContract {
  @prop(true)
  candidates: Candidates

  constructor(candidateNames: FixedArray<CandidateName, typeof N>) {
    super(...arguments)
    // initilize fixed array
    this.candidates = fill({ name: toByteString(''), votesReceived: 0n }, N)
    // set names and set their received votes to 0
    for (let i = 0; i < N; i++) {
      this.candidates[i] = { name: candidateNames[i], votesReceived: 0n }
    }
  }

  @method()
  public vote(candidate: CandidateName) {
    this.increaseVotesReceived(candidate)
    // output containing the latest state and the same balance
    let outputs: ByteString = this.buildStateOutput(this.ctx.utxo.value)
    if (this.changeAmount > 0n) {
      outputs += this.buildChangeOutput()
    }
    assert(this.ctx.hashOutputs === hash256(outputs), 'hashOutputs mismatch')
  }

  @method()
  increaseVotesReceived(candidate: CandidateName): void {
    for (let i = 0; i < N; i++) {
      if (this.candidates[i].name === candidate) {
        this.candidates[i].votesReceived++
      }
    }
  }
}
```

## Frontend

We will add a frontend to the voting smart contract according to [this guide](../how-to-integrate-a-frontend.md).

### Setup Project

The front-end will be created using [Create React App](https://create-react-app.dev/).

```bash
npx create-react-app voting --template typescript
```

### Install the sCrypt SDK

The sCrypt SDK enables you to easily compile, test, deploy, and call contracts.

Use the `scrypt-cli` command line to install the SDK.

```bash
cd voting
npx scrypt-cli init
```

This command will create a contract file at `src\contracts\voting.ts`, replace the content of the file with the contract written [above](#final-code).

### Compile Contract

Compile the contract with the following command: 

```bash
npx scrypt-cli compile
```

This command will generate a contract artifact file at `artifacts\src\contracts\voting.json`.

### Contract Deployment

After [installing the sCrypt SDK](#install-the-scrypt-sdk), you will have a script `deploy.ts` in the project directory, which can be used to deploy our `Voting` contract with some monior modification.

```ts
import { CandidateName, Voting, N } from './src/contracts/voting'
import { bsv, TestWallet, DefaultProvider, toByteString, FixedArray } from 'scrypt-ts'

import * as dotenv from 'dotenv'

// Load the .env file
dotenv.config()

// Read the private key from the .env file.
// The default private key inside the .env file is meant to be used for the Bitcoin testnet.
// See https://scrypt.io/docs/bitcoin-basics/bsv/#private-keys
const privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY || '')

// Prepare signer. 
// See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider
const signer = new TestWallet(privateKey, new DefaultProvider({
    network: bsv.Networks.testnet
}))

async function main() {
    await Voting.compile()

    const amount = 1

    const candidateNames: FixedArray<CandidateName, typeof N> = [
        toByteString('Craig Wright', true),
        toByteString('Elon Musk', true),
        toByteString('Donald Trump', true),
        toByteString('Lionel Messi', true),
        toByteString('Bill Gates', true),
        toByteString('xhliu', true),
        toByteString('Zuckerberg', true),
        toByteString('Vitalik Buterin', true),
        toByteString('孙悟空', true),
        toByteString('Steve Jobs', true),
    ]

    const instance = new Voting(
        candidateNames
    )

    // Connect to a signer.
    await instance.connect(signer)

    // Contract deployment.
    const deployTx = await instance.deploy(amount)
    console.log('Voting contract deployed: ', deployTx.id)
}

main()
```

Before deploying the contract, we need to create `.env` file and save your private key in `PRIVATE_KEY` environment variable.

```
PRIVATE_KEY=cQtC5DoR7eyJakLKfRiUrqxLsGpHYh6RmxRVrsV1fjCoC8WAZMk4
```

Run the following command to deploy the contract.

```
npx ts-node deploy.ts
```

After success, you will see an output similar to the following:

![](../../static/img/deploy-output.png)

#### Contract ID
Your can get the deployed contract's ID: the TXID and the output index where the contract is located.
```js
const contract_id = {
  /** the deployment transaction id */
  txId: "0bccd695db02876d1c7cb41ac97f1fa2381c91c54a38b03633f1edde9260084e",
  /** the output index */
  outputIndex: 0,
};
```

### Load Contract Artifact

Before writing the front-end code, we need to load the contract artifact in `src\index.tsx`.

```ts
import { Voting } from './contracts/voting';
var artifact = require('../artifacts/src/contracts/voting.json');
Voting.loadArtifact(artifact);
```

### Integrate Wallet

Use `requestAuth` method of `signer` to request access to the wallet.

```ts
const provider = new DefaultProvider(bsv.Networks.testnet);
const signer = new SensiletSigner(provider);

// request authentication
const { isAuthenticated, error } = await signer.requestAuth();
if (!isAuthenticated) {
    // something went wrong, throw an Error with `error` message
    throw new Error(error);
}

// authenticated
// ...
```

### Integrate sCrypt Service

To interacte with the voting contract, we need to create a contract instance representing the latest state of the contract on chain. When both Alice and Bob vote on the webpage, we need to ensure that their contract instances are always up to date. After Alice votes, we have to notify Bob that the state of the contract has changed and synchronize his local contract instance to the latest state on chain.

Fortunately,`sCrypt` provides such infrastructure service, which abstracts away all the common complexities of communicating with the blockchain, so we do not have to track the contract state, which could be computationally demanding as blockchain grows. We can instead focus on our application's business logic.

To use it, we first have to initialize it according to [this guide](../advanced/how-to-integrate-scrypt-service.md).

```ts
Scrypt.init({
  apiKey: 'YOUR_API_KEY',
  network: 'testnet'
})
```

### Fetch Latest Contract Instance

We can fetch a contract's latest instance by calling the `Scrypt.contractApi.getLatestInstance()` using its [contract ID](#contract-id). With this instance, we can easily read a contract's properties to display to the user on the webpage, or update the contract state by calling its public method as [before](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call) when the user votes for a candidate.

```ts
import React, { useEffect, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Voting } from './contracts/voting';

import { Scrypt, ScryptProvider, SensiletSigner} from "scrypt-ts";

...

function App() {
  const [votingContract, setContract] = useState<Voting>();
  const signerRef = useRef<SensiletSigner>();

  async function fetchContract() {
    try {
      const instance = await Scrypt.contractApi.getLatestInstance(
        Voting,
        contract_id
      );
      console.log('votingContract', instance)
      setContract(instance);
    } catch (error: any) {
      console.error("fetchContract error: ", error);
    }
  }

  useEffect(() => {
    const provider = new ScryptProvider();
    const signer = new SensiletSigner(provider);
    signerRef.current = signer;
    fetchContract();
  }, []);

  return (
    <div className="App">
      <header>
      <h2>Who is Satoshi?</h2>
      </header>
    </div>
  );
}

export default App;
```

### Read contract state

With the contract instance, we can read its lastest state and render it.

```ts
function byteString2utf8(b: ByteString) {
  return Buffer.from(b, "hex").toString("utf8");
}

function App() {
  // ...

  let rows: Array<any> = [];
  if (votingContract) {
    // render contract state
    rows = votingContract.candidates.map((candidate) => {
      return (
        <tr>
          <td>{byteString2utf8(candidate.name)}</td>
          <td>{candidate.votesReceived.toString()}</td>

          <td>
            <button name={candidate.name}>👍</button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="App">
      <header >
        <h2>Who is Satoshi?</h2>
      </header>
      <table >
        <thead>
          <tr>
            <td>Candidate</td>
            <td>Votes</td>
            <td>Voting</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
```

### Update Contract State

To update the contract's state, we need to call its public method. We create a function `voting()` to handle the voting event triggered by a user.

Calling a contract public method is [the same as before](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call).

```ts
async function voting(e: any) {

  const signer = signerRef.current as SensiletSigner;

  if (votingContract && signer) {
    const { isAuthenticated, error } = await signer.requestAuth();
    if (!isAuthenticated) {
      throw new Error(error);
    }

    await votingContract.connect(signer);

    // create the next instance from the current
    const nextInstance = votingContract.next();

    const candidateName = e.target.name;

    // update state
    nextInstance.increaseVotesReceived(candidateName);

    // call the method of current instance to apply the updates on chain
    votingContract.methods
      .vote(candidateName, {
        next: {
          instance: nextInstance,
          balance: votingContract.balance,
        },
      })
      .then((result) => {
        console.log(`Voting call tx: ${result.tx.id}`);
      })
      .catch((e) => {
        fetchContract();
        console.error("call error: ", e);
      });
  }
}

if (votingContract) {
  // render contract state
  rows = votingContract.candidates.map((candidate) => {
    return (
      <tr>
        <td>{byteString2utf8(candidate.name)}</td>
        <td>{candidate.votesReceived.toString()}</td>

        <td>
          <button onClick={voting} name={candidate.name}>👍</button>
        </td>
      </tr>
    );
  });
}
```

If successful, you will see the following log in the `console`:

```
Voting call tx: fc8b3d03b8fa7469d66a165b017fe941fa8ab59c0979457cef2b6415d659e3f7
```

### Subscribe to Contract Event

So far, we have a fully working app. However, there is a slight problem. When Alice clicks on the like button for a candadate in her browser, the candidate's vote count in Bob's browser does not increase, unless he manually refreshes. 
We need a way to listen to contract event. 

We call `Scrypt.contractApi.subscribe(options: SubscribeOptions<T>, cb: (e: ContractCalledEvent<T>) => void): SubScription` to subscribe to events that the contract has been called. When a contract gets called and updated, we refresh the UI in real time, re-render all the content on the page and show the updated vote count.

Subscribe to contract events by contract ID. This function accepts a callback function. The first parameter of the callback function is `ContractCalledEvent<T>`. 

`ContractCalledEvent` is the relevant information when the contract is called, such as the public function name and function arguments when the call occurs.

```ts
export interface ContractCalledEvent<T> {
  /** name of public function */
  methodName: string;
  /** public function arguments */
  args: SupportedParamType[];
  /** transaction where contract is called from */
  tx: bsv.Transaction;
  /**
   * If a stateful contract is called, `nexts` contains the contract instance containing the new state generated by this call.
   * If a stateless contract is called, `nexts` is empty.
   */
  nexts: Array<T>;
}
```

```ts
useEffect(() => {
  const provider = new ScryptProvider();
  const signer = new SensiletSigner(provider);

  signerRef.current = signer;

  fetchContract();

  // subscribe by contract_id
  const subscription = Scrypt.contractApi.subscribe({
    clazz: Voting,
    id: contract_id
  }, (event: ContractCalledEvent<Voting>) => {
    // update the contract instance 
    setContract(event.nexts[0]);
  });

  return () => {
    // unsubscribe
    subscription.unsubscribe();
  };
}, []);
```

### Conclusion

Congratulations! You have successfully completed a fullstack voting dapp fully on Bitcoin.

The repo is [here](https://github.com/sCrypt-Inc/voting). And an online exmaple is [here](http://classic.scrypt.io/voting).
