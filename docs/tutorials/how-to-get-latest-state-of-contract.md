---
sidebar_position: 3
---

# Tutorial 3: How to get latest state of contract

When testing a contract, we usually put the deployment and call of the contract in the same process for convenience.

```ts
// deploy the contract first
const deployTx = await demo.deploy(inputSatoshis)
console.log('Demo contract deployed: ', deployTx.id)

// then call the contract
const { tx } = await demo.methods.add(3n)
console.log('Demo contract `add` called: ', tx.id)
```

In fact, once the contract is deployed, it can be called at any time. Just use `syncState(tx: bsv.Transaction, atOutputIndex: number, rawValue?: Record<string, HashedMap<any, any> | HashedSet<any>>)` beforehand to *recover* a instance to the latest state:

```ts
// new an instance with the data when deploying
const instance = new Recallable(PubKey(toHex(myPublicKey)))
// sync state from tx
instance.syncState(latestCallTx, atOutputIndex)

// we're good here, the `instance` has been recovered to the latest state
```

**Note**: If the contract contains state properties of type `HashedMap` or `HashedSet`, it's required to pass the values of all these properties at this transaction moment.

```ts
// @prop(true)
// mySet: HashedSet<bigint>

// @prop(true)
// myMap: HashedMap<bigint, bigint>

instance.syncState(latestTx, atOutputIndex, {
    'mySet': currentSet,
    'myMap': currentMap,
})
```

