---
sidebar_position: 2
---

# Built-in Functions

## Global Functions

The following functions come with sCrypt:

### Assert

- `assert(condition: boolean, errorMsg?: string)` Throw an `Error` with the optional error message if `condition` is `false`. Otherwise, nothing happens.

```ts
assert(1n === 1n)        // nothing happens
assert(1n === 2n)        // throws Error('Execution failed')
assert(false, 'hello')   // throws Error('Execution failed, hello')
```

### Fill

- `fill(value: T, length: number): T[length] ` Returns an `FixedArray` with all `size` elements set to `value`, where `value` can be any type.

:::note
`length` must be a [compiled-time constant](./basics#compile-time-constant).
:::


```ts
// good
fill(1n, 3) // numeric literal 3
fill(1n, M) // const M = 3
fill(1n, Demo.N) // `N` is a static readonly property of class `Demo`
```

### Math

- `abs(a: bigint): bigint` Returns the absolute value of `a`.

```ts
abs(1n)  // 1n
abs(0n)  // 0n
abs(-1n) // 1n
```

- `min(a: bigint, b: bigint): bigint` Returns the smallest of `a` and `b`.

```ts
min(1n, 2n) // 1n
```

- `max(a: bigint, b: bigint): bigint` Returns the lagest of `a` and `b`.

```ts
max(1n, 2n) // 2n
```

- `within(x: bigint, min: bigint, max: bigint): boolean` Returns `true` if `x` is within the specified range (left-inclusive and right-exclusive), `false` otherwise.

```ts
within(0n, 0n, 2n) // true
within(1n, 0n, 2n) // true
within(2n, 0n, 2n) // false
```

### Hashing

- `ripemd160(a: ByteString): Ripemd160` Returns the [RIPEMD160](https://en.wikipedia.org/wiki/RIPEMD) hash result of `a`.
- `sha1(a: ByteString): Sha1` Returns the [SHA1](https://en.wikipedia.org/wiki/SHA-1) hash result of `a`.
- `sha256(a: ByteString): Sha256` Returns the [SHA256](https://www.movable-type.co.uk/scripts/sha256.html) hash result of `a`.
- `hash160(a: ByteString): Ripemd160` Actually returns `ripemd160(sha256(a))`.
- `pubKey2Addr(pk: PubKey): Addr` Wrapper function of `hash160`.
- `hash256(a: ByteString): Sha256` Actually returns `sha256(sha256(a))`.

### ByteString Operations

Basic types allowed to be used in `@props` and `@methods` are `boolean` and `bigint`, along with their wrapper types `Boolean` and `BigInt`.

A `string` literal is not allowed to be used directly without being converted into a ByteString.

```ts
@method()
public example(x: bigint, y: ByteString, z: boolean) {

    assert(x == 5n)

    assert(z)

    // Strings must by converted to ByteString before being used
    // in a smart contract:
    assert(y == toByteString("hello world!", true))

    // Vice versa, we can turn integers into ByteStrings:
    assert(int32ToByteString(x) == toByteString('05'))

    // Little-endian signed-magnitude representation is being used:
    assert(int32ToByteString(-x) == toByteString('85'))
    assert(int32ToByteString(-x * 1000n) == toByteString('8893'))

}

```

- `int32ToByteString(n: bigint): ByteString` If `size` is omitted, convert `n` is converted to a `ByteString` in [sign-magnitude](https://en.wikipedia.org/wiki/Signed_number_representations#Sign%E2%80%93magnitude) little endian format, with as few bytes as possible (a.k.a., minimally encoded). Otherwise, converts the number `n` to a `ByteString` of the specified size, including the sign bit; fails if the number cannot be accommodated.

```ts
// as few bytes as possible
int32ToByteString(128n)   // '8000', little endian
int32ToByteString(127n)   // '7f'
int32ToByteString(0n)     // ''
int32ToByteString(-1n)    // '81'
int32ToByteString(-129n)  // '8180', little endian
```

- `len(a: ByteString): number` Returns the byte length of `a`.

```ts
const s1 = toByteString('0011', false) // '0011', 2 bytes
len(s1) // 2

const s2 = toByteString('hello', true) // '68656c6c6f', 5 bytes
len(s2) // 5
```


## `SmartContract` Methods

The following `@method`s come with the `SmartContract` base class.


### `loadArtifact`

Function `static loadArtifact(artifactFile: Artifact)` loads the contract artifact file from the path you passed in to initialize the contract class.

If no parameter is passed when calling, the function will load the artifact file from the default directory. This is generally used during [testing](../how-to-test-a-contract.md#load-artifact).

You can also pass the artifact path directly. This is usually used when the method is called when interacting with a contract at the front-end.

```ts
import { TicTacToe } from './contracts/tictactoe';
import artifact from '../artifacts/tictactoe.json';
TicTacToe.loadArtifact(artifact);
```

### `checkSig`

Function `checkSig(signature: Sig, publicKey: PubKey): boolean` verifies an ECDSA signature. It takes two inputs: an ECDSA signature and a public key.

It returns if the signature matches the public key.

:::caution
All signature checking functions (`checkSig` and `checkMultiSig`) follow the [**NULLFAIL** rule](https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#NULLFAIL): if the signature is invalid, the entire contract aborts and fails immediately, unless the signature is an empty ByteString, in which case these functions return `false`.
:::

For example, Pay-to-Public-Key-Hash ([P2PKH](https://learnmeabitcoin.com/guide/p2pkh)) can be implemented as below.

```ts
class P2PKH extends SmartContract {
  // Address of the recipient.
  @prop()
  readonly address: Addr

  constructor(address: Addr) {
    super(...arguments)
    this.address = address
  }

  @method()
  public unlock(sig: Sig, pubkey: PubKey) {
    // Check if the passed public key belongs to the specified public key hash.
    assert(pubKey2Addr(pubkey) == this.address, 'address does not correspond to address')
    // Check signature validity.
    assert(this.checkSig(sig, pubkey), 'signature check failed')
  }
}
```

### `checkMultiSig`

Function `checkMultiSig(signatures: Sig[], publickeys: PubKey[]): boolean` verifies an array of ECDSA signatures. It takes two inputs: an array of ECDSA signatures and an array of public keys.

The function compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the `signatures` array using the same order as their corresponding public keys were placed in the `publickeys` array. If all signatures are valid, `true` is returned, `false` otherwise.

```ts
class MultiSigPayment extends SmartContract {
  // Addresses of the 3 recipients.
  @prop()
  readonly addresses: FixedArray<Addr, 3>

  constructor(addresses: FixedArray<Addr, 3>) {
    super(...arguments)
    this.addresses = addresses
  }

  @method()
  public unlock(
      signatures: FixedArray<Sig, 3>,
      publicKeys: FixedArray<PubKey, 3>
    ) {
    // Check if the passed public keys belong to the specified addresses.
    for (let i = 0; i < 3; i++) {
      assert(pubKey2Addr(publicKeys[i]) == this.addresses[i], 'address mismatch')
    }
    // Validate signatures.
    assert(this.checkMultiSig(signatures, publicKeys), 'checkMultiSig failed')
  }
}
```

### `buildStateOutput`

Function `buildStateOutput(amount: bigint): ByteString` creates an output containing the latest state. It takes an input: the number of satoshis in the output.

```ts
class Counter extends SmartContract {
  // ...

  @method()
  public incOnChain() {
    // ... update state

    // construct the new state output
    const output: ByteString = this.buildStateOutput(this.ctx.utxo.value)

    // ... verify outputs of current tx
  }
}
```

### `buildChangeOutput`

Function `buildChangeOutput(): ByteString` creates a change output.

```ts
class Auction extends SmartContract {

  // ...

  @method()
  public bid(bidder: Addr, bid: bigint) {

    // Addr
    const auctionOutput: ByteString = ...

    // Refund previous highest bidder.
    const refundOutput: ByteString = ...

    let outputs: ByteString = auctionOutput + refundOutput

    // Add change output.
    outputs += this.buildChangeOutput()

    assert(sha256(outputs) == this.ctx.shaOutputs, 'shaOutputs check failed')
  }
}
```


Specify the change address via PSBT:


```ts

const address = await signer.getAddress();
const feeRate = await provider.getFeeRate();
const psbt = new ExtPsbt();

psbt.addUTXO(utxos)   // add inputs and outputs
.addCovenantOutput(covenant, satoshis)
.change(address, feeRate);   // add change output explicitly
```
<!-- 
### `timeLock`

Function `timeLock(locktime: bigint): boolean` returns whether the calling transaction has its [`nLocktime`](https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence) value set to a point past the passed `locktime` value. This value can either be a UNIX timestamp or a block height. Additionally, it ensures the value of `nSequence` is set to less than `0xFFFFFFFF`.

If we assert the returned value to be `true`, we have effectively ensured that the public method of our smart contract cannot be successfully invoked until the specified time has passed.

```ts
class TimeLock extends SmartContract {

  @prop()
  locktime: bigint

  // ...

  @method()
  public unlock() {
    assert(this.timeLock(this.locktime), 'time lock not yet expired')
  }

}
```

:::note
This mechanism can be employed solely to ensure that a method can be called **after** a specific point in time. In contrast, it cannot be employed to ensure that a method is called **before** a specific point in time.
:::

To learn more about time locks, see the [dedicated doc section](../advanced/timeLock.md). -->


## Standard Libraries

`sCrypt` comes with standard libraries that define many commonly used functions.

### `Utils`

The `Utils` library provides a set of commonly used utility functions.


- `static buildOutput(outputScript: ByteString, outputSatoshis: ByteString): ByteString` Build a transaction output with the specified script and satoshi amount.

```ts
const lockingScript = toByteString('01020304')
Utils.buildOutput(lockingScript, toByteString('0100000000000000')) // '01000000000000000401020304'
```

- `static buildPublicKeyHashScript(pubKeyHash: PubKeyHash ): ByteString` Build a [Pay to Public Key Hash (P2PKH)](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash) script from a public key hash / address.

```ts
const address = Addr(toByteString('0011223344556677889900112233445566778899'))
Utils.buildPublicKeyHashScript(address) // '76a914001122334455667788990011223344556677889988ac'
```

- `static buildPublicKeyHashOutput(pubKeyHash: PubKeyHash, amount: bigint): ByteString` Build a P2PKH output from the public key hash.

```ts
const address = Addr(toByteString('0011223344556677889900112233445566778899'))
Utils.buildPublicKeyHashOutput(address, 1n) // '01000000000000001976a914001122334455667788990011223344556677889988ac'
```

- `static buildOpreturnOutput(data: ByteString): ByteString` Build a data-carrying [OP_RETURN](https://en.bitcoin.it/wiki/OP_RETURN) script from `data` payload.

```ts
const data = toByteString('hello world', true)
Utils.buildOpreturnOutput(data) // '6a0b68656c6c6f20776f726c64'
```