---
sidebar_position: 8
---

# Built-ins

## Functions

The following functions come with `scrypt-ts` and are available globally.

### Assert

- `assert(condition: boolean, msg?: string): asserts condition`

### Math

- `abs(a: bigint): bigint  `
- `min(a: bigint, b: bigint): bigint`
- `max(a: bigint, b: bigint): bigint`
- `within(x: bigint, min: bigint, max: bigint): boolean`

### Hashing

- `ripemd160(a: ByteString): Ripemd160`
- `sha1(a: ByteString): Sha1`
- `sha256(a: ByteString): Sha256`
- `hash160(a: ByteString): Ripemd160`, actually returns `ripemd160(sha256(a))`
- `hash256(a: ByteString): Sha256`, actually returns `sha256(sha256(a))`

### Bytes Operation

- `int2ByteString(n: bigint, size?: bigint): ByteString`. If not passing `size`,  the number `n` is converted to a `ByteString` with as few bytes as possible. Otherwise, converts the number `n` to a `ByteString` of the specified size, including the sign bit, fails if the number cannot be accommodated.
- `byteString2Int(a: ByteString): bigint`
- `len(a: ByteString): number`, returns the byte length of `a`
- `reverseByteString(b: ByteString, size: number): ByteString`

### Bitshift

- `lshift(x: bigint, n: bigint): bigint`
- `rshift(x: bigint, n: bigint): bigint`
- `pow2(n: bigint): bigint`
- `simplePow(x: bigint, y: bigint)`

### Exit

- `exit(status: boolean): void`. Call this function will terminate contract execution. If `status` is true then the contract succeeds; otherwise, it fails.

## Library

A library is the same with a contract, except it does not contain any public function. It is only intended to be imported by a contract or other libraries. It thus cannot be independently deployed and called. It is frequently used to group related constants and static functions.

### Standard Libraries

`scrypt-ts` comes with standard libraries that define many commonly used contracts. They are included by default and do not require explicit `import` to be used.

#### Library `Utils`

The `Utils` library provides a set of commonly used utility functions, such as function `Utils.fromLEUnsigned` converts signed integer `n` to unsigned integer of `l` bytes, in little endian. And function `buildOutput(outputScript: ByteString, outputSatoshis: bigint): ByteString` to build a tx output from its script and satoshi amount.

#### Library `SigHash`

`scrypt-ts` also provides a `SigHash` library to access various SigHash flags.

```typescript
export class AnyoneCanSpend extends SmartContract {
    @prop()
    recipient: PubKeyHash

    constructor(recipient: PubKeyHash) {
        super(...arguments)
        this.recipient = recipient
    }

    @method(SigHash.ANYONECANPAY_SINGLE)
    public unlock(outputAmount: bigint) {
        const lockingScript: ByteString = Utils.buildPublicKeyHashScript(this.recipient)
        const output: ByteString = Utils.buildOutput(lockingScript, outputAmount)
        assert(hash256(output) == this.ctx.hashOutputs, 'hashOutputs check failed')
    }
}
```

#### Library `HashedMap`

The HashedMap library provides a map/hashtable-like data structure. Unique keys and their corresponding values are hashed before being stored. Most functions of HashedMap require not only a key, but also its index, ranked by key hash in ascending order.

```typescript
let map = new Map<bigint, ByteString>()
map.set(1n, toByteString("0001"))
map.set(2n, toByteString("0011"))
map.set(10n, toByteString("0111"))

let hashedMap = new HashedMap(map)
```

#### Library `HashedSet`

The HashedSet library provides a set-like data structure. It can be regarded as a special HashedMap where a value is the same with its key and is thus omitted. Unique values are hashed before being stored. Most functions of HashedSet require an index, ranked by the value’s sha256 hash in ascending order. Similar to HashedMap, these functions also use SortedItem type parameter.

```typescript
let set = new Set<bigint>()

let hashedSet = new HashedSet(set)
```

#### Library `Constants`

`scrypt-ts` defines some commonly used constant values in the library `Constants`. You can use these constants anywhere in your code

```typescript
class Constants {
    // number of string to denote input sequence
    static readonly InputSeqLen: bigint = Int(4);
    // number of string to denote output value
    static readonly OutputValueLen: bigint = Int(8);
    // number of string to denote a public key (compressed)
    static readonly PubKeyLen: bigint = Int(33);
    // number of string to denote a public key hash
    static readonly PubKeyHashLen: bigint = Int(20);
    // number of string to denote a tx id
    static readonly TxIdLen: bigint = Int(32);
    // number of string to denote a outpoint
    static readonly OutpointLen: bigint = Int(36);
}
```

#### Full List

| Contract        | **Constructor parameters** | Public access                                                |
| --------------- | -------------------------- | ------------------------------------------------------------ |
| Utils           | None                       | readonly OutputValueLen: bigint<br />readonly PubKeyHashLen: bigint<br /><br />toLEUnsigned(n: bigint, l: bigint): ByteString<br />fromLEUnsigned(bytes: ByteString): bigint<br />readVarint(buf: ByteString): ByteString<br />writeVarint(buf: ByteString): ByteString<br />buildOutput(outputScript: ByteString, outputSatoshis: bigint): ByteString<br />buildPublicKeyHashScript(pubKeyHash: PubKeyHash ): ByteString<br />buildOpreturnScript(data: ByteString): ByteString |
| SigHash         | None                       | readonly ALL: SigHashType<br />readonly NONE: SigHashType<br />readonly SINGLE: SigHashType<br />readonly ANYONECANPAY_ALL: SigHashType<br />readonly ANYONECANPAY_NONE: SigHashType<br />readonly ANYONECANPAY_SINGLE: SigHashType |
| HashedMap<K, V> | Map<K, V>                  | clear(): boolean<br />size(): bigint<br />data(): ByteString<br />set(key: SortedItem<K>, value: V): boolean<br />has(key: SortedItem<K>): boolean<br />delete(key: SortedItem<K>): boolean<br />canGet(key: SortedItem<K>, val: V): boolean<br />toMap(): Map<K, V><br />attach(map: Map<K, V>): void |
| HashedSet<V>    | Set<E>                     | clear(): boolean<br />size(): bigint<br />data(): ByteString<br />add(key: SortedItem<E>): boolean<br />has(key: SortedItem<E>): boolean<br />delete(key: SortedItem<E>): boolean<br />toSet(): Set<E><br />attach(set: Set<E>): void |
