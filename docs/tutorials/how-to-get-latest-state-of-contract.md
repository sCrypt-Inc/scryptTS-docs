---
sidebar_position: 3
---

# Tutorial 3: How to sync contract state from transaction

To interact with a smart contract, such as calling the public methods of the contract, we need to use the contract instance. When writing testnet test cases, we usually put the contract deployment code and calling code in the same process for convenience, so that we don't need to manage the state of the instance, because it's always consistent with the transactions on the chain . 

```ts
// deploy the contract first
const deployTx = await demo.deploy(inputSatoshis)
console.log('Demo contract deployed: ', deployTx.id)
// then call the contract
const { tx } = await demo.methods.add(3n)
console.log('Demo contract `add` called: ', tx.id)

// no need to manage the state of instance `demo`
```

In fact, once the contract is deployed, it can be called at any time. Just use `syncState(tx: bsv.Transaction, atOutputIndex: number, rawValue?: Record<string, HashedMap<any, any> | HashedSet<any>>)` beforehand to synchronize the state of the contract instance from the on-chain transaction.

```ts
// new an instance using the same constructor arguments as when deploying the contract [1]
const instance = new Recallable(PubKey(toHex(myPublicKey)))
// sync state from tx [2]
instance.syncState(tx, atOutputIndex)

// we're good here, the `instance` is state synchronized with the on-chain transaction
```

**Note [1]**: Before calling `syncState`, creating the contract instance with the same construction arguments as when deploying the contract for the first time is required.

**Note [2]**: If the contract contains state properties of type `HashedMap` or `HashedSet`, passing the values of all these properties at this transaction moment is required.

```ts
// e.g. the contract has two state properties of type `HashedMap` or `HashedSet`
// @prop(true) mySet: HashedSet<bigint>
// @prop(true) myMap: HashedMap<bigint, bigint>
instance.syncState(latestTx, atOutputIndex, {
    // pass the values of all these properties at the transaction moment
    'mySet': currentSet,
    'myMap': currentMap,
})
```
