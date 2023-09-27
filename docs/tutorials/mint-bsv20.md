---
sidebar_position: 9
---

# Tutorial 9: Mint BSV20 Token

## Overview

In this tutorial, we will use contract [HashPuzzle](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/hashPuzzle.ts) as an example, to introduce how to mint a BSV20 token (Version 1) with [sCrypt](https://scrypt.io/) and transfer it with a Smart Contract.

To enable all these features, you should install `scrypt-ord` as an dependency in your project.

```bash
npm install scrypt-ord
```

## Contract

The new contract `HashPuzzleFT` is almost the same as the previous [implementation](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/hashPuzzle.ts), except two differences.

1. It must be derived from `BSV20V1` instead of `SmartContract`.

```ts
class HashPuzzleFT extends BSV20V1 {
    ...
}
```

2. The constructor has extra parameters - `tick`, `max`, and `lim` - representing [BSV20 fields](https://docs.1satordinals.com/bsv20#v1-deploy-first-is-first-mode-only).

```ts
constructor(tick: ByteString, max: bigint, lim: bigint, hash: Sha256) {
    super(tick, max, lim)
    this.init(...arguments)
    this.hash = hash
}
```

The contract also stores a hash value in the contract, and it will be unlocked successfully when calling the public method `unlock` with the correct message.

```ts
class HashPuzzleFT extends BSV20V1 {
    @prop()
    hash: Sha256
    
    @method()
    public unlock(message: ByteString) {
        assert(this.hash == sha256(message), 'hashes are not equal')
    }
    
    ...
}
```

The base class `BSV20V1` encapsulated helper functions to handle BSV20 tokens. If you want to create your own contract that can interact with BSV20 protocol, derive from it.

## Deploy and Mint

For BSV20 version 1, tokens must be deployed before mint. We first create an instance of contract `HashPuzzleNFT`, then call `deployToken` to deploy, and call `mint` at last to mint tokens into the contract instance.

```ts
// BSV20 fields
const tick = toByteString('HELLO', true)
const max = 100n
const lim = 10n
// create contract instance
const message = toByteString('Hello sCrpyt', true)
const hash = sha256(message)
const hashPuzzle = new HashPuzzleFT(tick, max, lim, hash)
...
// deploy BSV20
await hashPuzzle.deployToken()
// mint BSV20 into contract instance
const mintTx = await hashPuzzle.mint(10n)
```

Normally, we use a P2PKH address to receive the token, then the token is controlled by a private key the same as the general P2PKH.

In this example, the token is mint to a contract instance, it is controlled by the smart contract, which means it can only be transferred when the hash puzzle is solved.

## Transfer Token

For now, the contract instance holds the token and we try to transfer it to a P2PKH address.

### Step 1. Create Receiver Instance

Class `BSV20P2PKH` represents a P2PKH address that can hold BSV20 tokens. Its constructor takes BSV20 fields and an receiving address as parameters.

```ts
const receiver = new BSV20P2PKH(
    tick,
    max,
    lim,
    Addr(address.toByteString())
)
```

### Step 2. Call the Contract

Just as other [contract calling](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call) methods we introduced before, we call the public method `unlock` of `HashPuzzleFT` as follows.

```ts
const { tx: transferTx } = await hashPuzzle.methods.unlock(message, {
    transfer: {
        instance: receiver,
        amt: 1n,
    },
} as MethodCallOptions<HashPuzzleFT>)
```

In this case, we transfer `1` token to the receiver. The default transaction builder will automatically add a token change output on the transaction, you can also specify the token change address by passing the value to the key `tokenChangeAddress` of struct `MethodCallOptions`.

## Conclusion

Great! You have finished the tutorial on how to mint and transfer the BSV20 token with a Smart Contract.

The full complete [contract](https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/contracts/hashPuzzleFT.ts) and [example](https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/examples/mintBSV20.ts) can be found in sCrypt's [repository](https://github.com/sCrypt-Inc/scrypt-ord).
