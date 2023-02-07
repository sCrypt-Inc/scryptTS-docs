---
sidebar_position: 8
---

# Built-ins

## Functions

The following functions come with `scryptTS` and are available globally.

### Assert

- `assert(condition: boolean, msg?: string)`. Throw an `Error` with the optional error message `msg` if `condition` is `false`. Otherwise, nothing happens.

```typescript
assert(1 === 1)        // nothing happens
assert(1 === 2)        // throws Error('Execution failed')
assert(false, 'hello') // throws Error('Execution failed, hello')
```

### Math

- `abs(a: bigint): bigint  `, returns the absolute value of `a`.

```typescript
abs(1n)  // 1n
abs(0n)  // 0n
abs(-1n) // 1n
```

- `min(a: bigint, b: bigint): bigint`, returns the smallest of `a` and `b`.

```typescript
min(1n, 2n) // 1n
```

- `max(a: bigint, b: bigint): bigint`, return the lagest of `a` and `b`.

```typescript
max(1n, 2n) // 2n
```

- `within(x: bigint, min: bigint, max: bigint): boolean`, return `true` if `x` is within the specified range (left-inclusive), `false` otherwise.

```typescript
within(0n, 0n, 2n) // true
within(1n, 0n, 2n) // true
within(2n, 0n, 2n) // false
```

### Hashing

- `ripemd160(a: ByteString): Ripemd160`, returns the [RIPEMD160](https://en.wikipedia.org/wiki/RIPEMD) hash result of `a`.
- `sha1(a: ByteString): Sha1`, returns the [SHA1](https://en.wikipedia.org/wiki/SHA-1) hash result of `a`.
- `sha256(a: ByteString): Sha256`, returns the [SHA256](https://www.movable-type.co.uk/scripts/sha256.html) hash result of `a`.
- `hash160(a: ByteString): Ripemd160`, actually returns `ripemd160(sha256(a))`
- `hash256(a: ByteString): Sha256`, actually returns `sha256(sha256(a))`

### Bytes Operation

- `int2ByteString(n: bigint, size?: bigint): ByteString`. If not passing `size`,  the number `n` is converted to a `ByteString` with as few bytes as possible. Otherwise, converts the number `n` to a `ByteString` of the specified size, including the sign bit, fails if the number cannot be accommodated.

```typescript
// as few bytes as possible
int2ByteString(128n)   // '8000', little endian
int2ByteString(127n)   // '7f'
int2ByteString(1n)     // '01'
int2ByteString(0n)     // ''
int2ByteString(-0n)    // ''
int2ByteString(-1n)    // '81'
int2ByteString(-127n)  // 'ff'
int2ByteString(-129n)  // '8180', little endian

// specified size
int2ByteString(1n, 3n)        // '010000', 3 bytes
int2ByteString(-129n, 3n)     // '810080', 3 bytes

// Error: -129 cannot fit in 1 byte[s]
// int2ByteString(-129n, 1n)
```

- `byteString2Int(a: ByteString): bigint`

```typescript
byteString2Int(toByteString('8000'))    // 128n
byteString2Int(toByteString('7f'))      // 127n
byteString2Int(toByteString('01'))      // 1n
byteString2Int(toByteString(''))        // 0n
byteString2Int(toByteString('00'))      // 0n
byteString2Int(toByteString('80'))      // 0n
byteString2Int(toByteString('81'))      // -1n
byteString2Int(toByteString('ff'))      // -127n
byteString2Int(toByteString('8180'))    // -129n

byteString2Int(toByteString('010000'))  // 1n
byteString2Int(toByteString('810080'))  // -129n
```

- `len(a: ByteString): number`, returns the byte length of `a`

```typescript
const s1 = toByteString('0011', false) // '0011', 2 bytes
len(s1) // 2

const s2 = toByteString('hello', true) // '68656c6c6f', 5 bytes
len(s2) // 5
```

- `reverseByteString(b: ByteString, size: number): ByteString`

```typescript
const s1 = toByteString('001122', false) // '001122'
reverseByteString(s1, 3) // 221100
```

### Bitshift

- `lshift(x: bigint, n: bigint): bigint`
- `rshift(x: bigint, n: bigint): bigint`
- `pow2(n: bigint): bigint`
- `simplePow(x: bigint, y: bigint)`

### Exit

- `exit(status: boolean): void`. Call this function will terminate contract execution. If `status` is `true` then the contract succeeds; otherwise, it fails.

## Standard Libraries

`scryptTS` comes with standard libraries that define many commonly used contracts. They are included by default and do not require explicit `import` to be used.

### Library `Utils`

The `Utils` library provides a set of commonly used utility functions, such as function `Utils.fromLEUnsigned` converts signed integer `n` to unsigned integer of `l` bytes, in little endian. And function `buildOutput(outputScript: ByteString, outputSatoshis: bigint): ByteString` to build a tx output from its script and satoshi amount.

### Library `HashedMap`

The HashedMap library provides a map/hashtable-like data structure. Unique keys and their corresponding values are hashed before being stored. Most functions of HashedMap require not only a key, but also its index, ranked by key hash in ascending order.

```typescript
let map = new Map<bigint, ByteString>()
map.set(1n, toByteString("0001"))
map.set(2n, toByteString("0011"))
map.set(10n, toByteString("0111"))

let hashedMap = new HashedMap(map)
```

### Library `HashedSet`

The HashedSet library provides a set-like data structure. It can be regarded as a special HashedMap where a value is the same with its key and is thus omitted. Unique values are hashed before being stored. Most functions of HashedSet require an index, ranked by the value’s sha256 hash in ascending order. Similar to HashedMap, these functions also use SortedItem type parameter.

```typescript
let set = new Set<bigint>()

let hashedSet = new HashedSet(set)
```

### Library `Constants`

`scryptTS` defines some commonly used constant values in the library `Constants`. You can use these constants anywhere in your code

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
