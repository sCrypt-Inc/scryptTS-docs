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

### Deployment

Before developing the front end, we should deploy the voting contract to get the contract ID. The front end needs to know this contract ID before interacting with it.

According to the [guide](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md/#contract-deployment), it's easy to implement the deployment [code](https://github.com/sCrypt-Inc/voting/blob/master/deploy.ts).

```ts
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

const instance = new Voting(candidateNames)

// Connect to a signer.
const signer = new TestWallet(privateKey, new DefaultProvider({
    network: bsv.Networks.testnet
}))
await instance.connect(signer)

// Contract deployment.
const amount = 1
const deployTx = await instance.deploy(amount)
console.log('Voting contract deployed: ', deployTx.id)
```

## Frontend

We can add a frontend to the voting smart contract according to [this guide](../how-to-integrate-a-frontend.md). It contains several steps as follows, let's go through them quickly.

### Setup Project

First, create a React project, then turn it into an `sCrypt` project.

```bash
npx create-react-app voting --template typescript

cd voting
npx scrypt-cli init
```

### Load Contract

Compile the contract.

```bash
npx scrypt-cli compile
```

Then load the artifact in `index.tsx` file.

```ts
import { Voting } from './contracts/voting';
var artifact = require('../artifacts/src/contracts/voting.json');
Voting.loadArtifact(artifact);
```

Now, the contract class is ready to use.

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

Now we can:

- Call the `Scrypt.contractApi.getLatestInstance` method to get a contract instance aligned to the contract on-chain state. With this instance, we can read contract properties using the dot operator to display data to the user on the web page, or update the contract state by calling its public method as [before](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call) when the user votes for a candidate.

```ts
const instance = await Scrypt.contractApi.getLatestInstance(
  Voting,
  contract_id
);
// ...
```

- Listen to Events. When the voting contract gets called or updated, the client will receive a notification to allow you to do some own business, such as refreshing the page to show the latest data to the user and updating the contract instance.

```ts
const subscription = Scrypt.contractApi.subscribe({
  clazz: Voting,
  id: contract_id
}, (event: ContractCalledEvent<Voting>) => {
  // ...
});
```

## Conclusion

Congratulations! You have completed the Voting dApp! Visit the GitHub [repo](https://github.com/sCrypt-Inc/voting) for more details.
