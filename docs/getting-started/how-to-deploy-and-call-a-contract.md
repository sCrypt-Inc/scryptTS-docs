---
sidebar_position: 5
---

# How to Deploy & Call a Contract

## Contract Deployment

To deploy a smart contract, we first need to compile it to Script. Next, we build a transaction(tx) and uses the Script as locking script in one of its outputs. The output/UTXO is now controlled by the smart contract. Finally, we broadcast the transaction. If it is accepted by miners, the contract is successfully deployed.

## Contract Call

To spend a UTXO locked by a contract, we need to call one of its public methods to unlock it. We build a new tx to reference this UTXO in one input, and we need to provide the corresponding unlocking script for this input. The unlocking script is the arguments passed into the public method so that it returns `true`, a.k.a., `witness`.

A public method in this sense can be regarded as a mathematical boolean method `f` in the locking script, with `x` as its argument in the unlocking script. A contract call succeeds if and only if `f(x)` evaluates to `true`.

## Workflow

Generally speaking, if you want to deploy or call a contract on the Bitcoin network, it takes three steps:

### 1. Instantiate a contract

Initialize a contract with proper arguments to get an instance.

```ts
let instance = new MyContract(...args)
```

### 2. Build a tx

Build a tx and set its input and output script with the contract instance.

Conceptually speaking, there are two kinds of relationship between a contract instance and a tx.

#### `lockTo`

A contract `instance` is locked to a `tx` if the `instance` is the locking script of one of its outputs.

From the perspective of `tx`, it may look like this:

```js
tx.addOutput(new bsv.Transaction.Output({
  script: instance.lockingScript,
  ...
}))
```
The contract is in the 0-th output of `tx`.
From the perspective of `instance`, this is equivalent to:

```js
instance.lockTo = { tx, outputIndex: 0 }
```

#### `unlockFrom`

A contract `instance` is unlocked from a `tx` if one of its input calls `instance`'s public method to spend the UTXO it locks to.

From the perspective of `tx`, it looks like:

```js
tx.addInput(new bsv.Transaction.Input({
  script: instance.getUnlockingScript( inst => inst.pubMethod(...args) )
  ...
}))
```
`tx`'s 0-th input spends the contract UTXO.
From the perspective of `instance`, this is equivalent to:

```js
instance.unlockFrom = { tx, inputIndex: 0 };
```

### 3. Send the tx

The final step is to send the tx to the network. If everything is fine, the tx will be accepted by miners.

## Example

Here is the complete code to deploy and call contract `Demo`. Notice that we put the tx building logic in the contract as regular methods, i.e., without decorator `@method`.

```ts
export class Demo extends SmartContract {

    @prop()
    x: bigint

    @prop()
    y: bigint

    constructor(x: bigint, y: bigint) {
        super(...arguments)
        this.x = x
        this.y = y
    }

    @method()
    sum(a: bigint, b: bigint): bigint {
        return a + b
    }

    @method()
    public add(z: bigint) {
        assert(z == this.sum(this.x, this.y), 'incorrect sum')
    }

    @method()
    public sub(z: bigint) {
        assert(z == this.x - this.y, 'incorrect difference')
    }

    getDeployTx(utxos: UTXO[], satoshis: number): bsv.Transaction {
        return new bsv.Transaction().from(utxos)
            .addOutput(new bsv.Transaction.Output({
                script: this.lockingScript,
                satoshis: satoshis,
            }))
    }

    getCallTxForAdd(z: bigint, prevTx: bsv.Transaction): bsv.Transaction {
        return new bsv.Transaction()
            .addInputFromPrevTx(prevTx)
            .setInputScript(0, () => {
                return this.getUnlockingScript(self => self.add(z))
            })
    }
}

// compile contract to get low-level asm
await Demo.compile()

let demo = new Demo(1n, 2n)

// contract deployment
// 1. get the available utxos for the private key
const utxos = await utxoMgr.getUtxos()
// 2. construct a transaction for deployment
const unsignedDeployTx = demo.getDeployTx(utxos, 1000)
// 3. sign and broadcast the transaction
const deployTx = await signAndSend(unsignedDeployTx)
console.log('Demo contract deployed: ', deployTx.id)

// contract call
// 1. construct a transaction for the call
const unsignedCallTx = demo.getCallTxForAdd(3n, deployTx)
// 2. sign and broadcast the transaction
const callTx = await signAndSend(unsignedCallTx)
console.log('Demo contract called: ', callTx.id)

```

The full code can be found [here](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/tests/testnet/demo.ts).
