---
sidebar_position: 7
---

# Tutorial 7: Voting

## Overview

In this tutorial, we will go over how to use sCrypt to build a Voting dApp on Bitcoin, including the Smart Contract and an interactive front-end web page.

![](../../static/img/voting.gif)

On the web page, you can see the candidates list. Click the `Voting` link will add one vote to the corresponding candidate. This action will pop up the Sensilet wallet to let you authorize the voting operation, then send a transaction to call the smart contract after your approval.

Now let's start. First is the smart contract implementation step-by-step, then the front-end web page.

## Contract

### Properties

For the candidate, there are two main properties we need to store in the contract: the name and his/her votes received.

We define a type alias of `ByteString` to represent the type of the candidate name.

```ts
export type CandidateName = ByteString
```

Then define a struct to represent the candidate.

```ts
export type Candidate = {
  name: CandidateName
  votesReceived: bigint
}
```

For the contract, we need to store a list of the candidates, so we can use `FixedArray`.

```ts
export const N = 10
export type Candidates = FixedArray<Candidate, typeof N>
```

Noted that we define the list of candidates as type `Candidates` in order to simplify the code.

```ts
export class Voting extends SmartContract {  
  @prop(true)
  candidates: Candidates
  // ...
}
```

### Constructor

Initialize all the `@prop` properties in the constructor. Note that we only need to pass the candidate names as the argument, because the votes they received would be all 0 at the beginning.

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

The only way to interact with this contract is to vote for one candidate in the list, so we will have only 1 **public** method `vote`, it takes only 1 parameter: the name of the candidate you want to vote for.

```ts
@method()
public vote(candidate: CandidateName) {
  // change contract state: add one vote to `candidate` in the list
  // restrict tx outputs
}
```

We can simply use a `for` loop to implement this: find the corresponding candidate in the list by comparing the name, then add one vote to it. Note that we implement a non-public method `increaseVotesReceived` to cover this logic: add one vote to the candidate passed in by the argument.

```ts
@method()
increaseVotesReceived(candidate: CandidateName): void {
  for (let i = 0; i < N; i++) {
    if (this.candidates[i].name === candidate) {
      this.candidates[i].votesReceived++
    }
  }
}
```

For the outputs, we just need to restrict them to contain the latest contract state, and the change output when necessary.

```ts
let outputs: ByteString = this.buildStateOutput(this.ctx.utxo.value)
if (this.changeAmount > 0n) {
  outputs += this.buildChangeOutput()
}
assert(this.ctx.hashOutputs === hash256(outputs), 'hashOutputs mismatch')
```

At this point, the public function `vote` is finished.

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

We can add a frontend to the voting smart contract according to [this guide](../how-to-integrate-a-frontend.md). It contains several steps as follows, let's go through them quickly.

### Setup Project

The front-end interface of the dApp will be created using [Create React App](https://create-react-app.dev/).

```bash
npx create-react-app voting --template typescript
```

### Install the sCrypt SDK

The sCrypt SDK - sCrypt enables you to easily compile, test, deploy, and call contracts.

Use the scrypt-cli command line tool to install the SDK.

```bash
cd voting
npx scrypt-cli init
```

This command will create a contract file at `src\contracts\voting.ts`, replace the content of the file with the contract written above.


### Compiling Contract

Compile the contract with the following command: 

```bash
npx scrypt-cli compile
```

This command will output a contract artifact file at `artifacts\src\contracts\voting.json`.

### Contract Deployment

After[installing the sCrypt SDK](#install-the-scrypt-sdk), You will get a script `deploy.ts` to deploy contract, which can be used to deploy our `Voting` contract with a little modification.

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

    // TODO: Adjust the amount of satoshis locked in the smart contract:
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


Execute the `deploy.ts` script with the following command to deploy the contract.

```
npx ts-node deploy.ts
```

After success, you will see the following output:

![](../../static/img/deploy-output.png)

The transaction that deployed the contract and the output index where the contract is located represent the ID of the contract. Now we get the contract ID: 

```js
const contract_id = {
  /** The deployment transaction id */
  txId: "0bccd695db02876d1c7cb41ac97f1fa2381c91c54a38b03633f1edde9260084e",
  /** The output index */
  outputIndex: 0,
};
```


### Load contract artifact

Before actually starting to write the front-end code, we need to load contract artifact.

```ts
import { Voting } from './contracts/voting';
var artifact = require('../artifacts/src/contracts/voting.json');
Voting.loadArtifact(artifact);
```

### Integreate Wallet

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

Before interacting with the voting contract, we always need to create a contract instance representing the latest state of the contract on the chain, yet it is not easy to implement this in practical applications.

When both Alice and Bob vote on the web page, you need to ensure that their contract instances are always up-to-date. After Alice votes, you have to notify Bob that the state of the contract has been changed and synchronize his local contract instance to the latest state on the chain.

That's why we need `sCrypt` infrastructure service, you can refer to [this guide](../advanced/how-to-integrate-scrypt-service.md) to initialize it.

```ts
Scrypt.init({
  apiKey: 'YOUR_API_KEY',
  network: 'testnet'
})
```


### Fetch contract in the frontend

After the contract is deployed, we can fetch it on the frontend.

Call the `Scrypt.contractApi.getLatestInstance` method to get a contract instance aligned to the contract on-chain state. With this instance, we can read contract properties using the dot operator to display data to the user on the web page, or update the contract state by calling its public method as [before](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call) when the user votes for a candidate.


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


With the contract latest instance, now we can read the lastest contract state and render it.


```ts

function byteString2utf8(b: ByteString) {
  return Buffer.from(b, "hex").toString("utf8");
}


function App() {

...

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


### Update contract state

To update contract state, we need to call contract public method. we create a function `voting()` to handle the voting action.

How to call a contract public method is no different than what is described [here](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call).

```ts

  ...
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

If successful, you will see the following LOG in `console`:

```
Voting call tx: fc8b3d03b8fa7469d66a165b017fe941fa8ab59c0979457cef2b6415d659e3f7
```

### Subscribe contract event

We see transactions where the contract is successfully invoked, but nothing changes in the UI. 

In order to refresh the UI in a timely manner, we can use `Scrypt.contractApi.subscribe(options: SubscribeOptions<T>, cb: (e: ContractCalledEvent<T>) => void): SubScription` to subscribe to the event that the contract is called.  When the voting contract gets called or updated, the client will receive a notification to allow you to do some own business, such as refreshing the page to show the latest data to the user and updating the contract instance.

Subscribe to contract events by contract ID. This function accepts a callback function. The first parameter of the callback function is `ContractCalledEvent<T>`. 

ContractCalledEvent is the relevant information when the contract is called, such as the public function name and function arguments when the call occurs.

```ts
export interface ContractCalledEvent<T> {
    /**
     * If a stateful contract is called, `nexts` contains the contract instance containing the new state generated by this call.
     * If a stateless contract is called, `nexts` is empty.
     */
    nexts: Array<T>;
    /** name of public function */
    methodName: string;
    /** public function arguments */
    args: SupportedParamType[];
    /** transaction where contract is called */
    tx: bsv.Transaction;
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

Congratulations! You have successfully completed the development of the voting dapp.

The repo  is [here](https://github.com/sCrypt-Inc/voting). And a online exmaple is [here](http://classic.scrypt.io/voting).



