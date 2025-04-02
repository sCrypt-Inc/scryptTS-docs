[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / TxUtils

# Class: TxUtils

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:39](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L39)

Library for parsing and constructing transactions

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new TxUtils()

> **new TxUtils**(...`args`): [`TxUtils`](TxUtils.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L29)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`TxUtils`](TxUtils.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Properties

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:28](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L28)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:15](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L15)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### NON\_STATES\_HASH\_ROOT

> `readonly` `static` **NON\_STATES\_HASH\_ROOT**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:54](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L54)

the state hash root value for all non-state inputs,
same as hash160(hash160('') + hash160('') + hash160('') + hash160('') + hash160(''))

***

### STATE\_HASH\_ROOT\_SCRIPT\_PREFIX

> `readonly` `static` **STATE\_HASH\_ROOT\_SCRIPT\_PREFIX**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:47](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L47)

op_return + op_push24 + "cat" (0x636174) + version (0x01)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:16](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

***

### ZERO\_SATS

> `readonly` `static` **ZERO\_SATS**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:43](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L43)

if a output satoshi value is zero

## Methods

### buildChangeOutput()

> `static` **buildChangeOutput**(`change`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:209](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L209)

Build serialized change output

#### Parameters

##### change

[`TxOut`](../type-aliases/TxOut.md)

change output to build

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized change output in format ByteString

***

### buildOpReturnOutput()

> `static` **buildOpReturnOutput**(`data`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:238](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L238)

build `OP_RETURN` script from data payload

#### Parameters

##### data

[`ByteString`](../type-aliases/ByteString.md)

the data payload

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a ByteString contains the data payload

***

### buildOutput()

> `static` **buildOutput**(`script`, `satoshis`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:175](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L175)

Build serialized tx output

#### Parameters

##### script

[`ByteString`](../type-aliases/ByteString.md)

serialized locking script of the output

##### satoshis

[`ByteString`](../type-aliases/ByteString.md)

serialized satoshis of the output

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized tx output in format ByteString

***

### buildP2PKHOutput()

> `static` **buildP2PKHOutput**(`addr`, `amount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:267](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L267)

constructs a P2PKH output from a given PubKeyHash and satoshi amount

#### Parameters

##### addr

[`Ripemd160`](../type-aliases/Ripemd160.md)

the recipient's public key hash

##### amount

[`ByteString`](../type-aliases/ByteString.md)

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH output

***

### buildP2PKHScript()

> `static` **buildP2PKHScript**(`addr`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:249](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L249)

constructs a P2PKH script from a given PubKeyHash

#### Parameters

##### addr

[`Ripemd160`](../type-aliases/Ripemd160.md)

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH script

***

### buildP2TROutput()

> `static` **buildP2TROutput**(`xpubkey`, `amount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:309](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L309)

constructs a p2tr output from a given PubKeyHash and satoshi amount

#### Parameters

##### xpubkey

[`XOnlyPubKey`](../type-aliases/XOnlyPubKey.md)

the recipient's x-only public key

##### amount

[`ByteString`](../type-aliases/ByteString.md)

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH output

***

### buildP2TRScript()

> `static` **buildP2TRScript**(`xpubkey`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:298](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L298)

#### Parameters

##### xpubkey

[`XOnlyPubKey`](../type-aliases/XOnlyPubKey.md)

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

***

### buildP2WPKHOutput()

> `static` **buildP2WPKHOutput**(`addr`, `amount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:288](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L288)

constructs a P2WPKH output from a given PubKeyHash and satoshi amount

#### Parameters

##### addr

[`Ripemd160`](../type-aliases/Ripemd160.md)

the recipient's public key hash

##### amount

[`ByteString`](../type-aliases/ByteString.md)

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH output

***

### buildP2WPKHScript()

> `static` **buildP2WPKHScript**(`addr`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:277](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L277)

#### Parameters

##### addr

[`Ripemd160`](../type-aliases/Ripemd160.md)

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

***

### buildStateHashRootOutput()

> `static` **buildStateHashRootOutput**(`hashRoot`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:188](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L188)

Build serialized state hash root output

#### Parameters

##### hashRoot

[`ByteString`](../type-aliases/ByteString.md)

state hash root

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized state hash root output in format ByteString

***

### buildStateHashRootScript()

> `static` **buildStateHashRootScript**(`hashRoot`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:198](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L198)

Build locking script of state output from state hash root

#### Parameters

##### hashRoot

[`ByteString`](../type-aliases/ByteString.md)

state hash root

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

locking script of state hash root output

***

### checkIndex()

> `static` **checkIndex**(`indexVal`, `indexBytes`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:164](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L164)

Check if the index value and bytes are matched

#### Parameters

##### indexVal

[`Int32`](../type-aliases/Int32.md)

value of the input index or output index

##### indexBytes

[`ByteString`](../type-aliases/ByteString.md)

ByteString of the input index or output index

#### Returns

`void`

***

### indexValueToBytes()

> `static` **indexValueToBytes**(`indexVal`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:149](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L149)

Convert tx input index or output index from value to bytes

#### Parameters

##### indexVal

[`Int32`](../type-aliases/Int32.md)

value of the input index or output index

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

ByteString of the input index or output index

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L18)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)

***

### mergeInput()

> `static` **mergeInput**(`txInput`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:221](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L221)

Merge tx input into a ByteString

#### Parameters

##### txInput

[`TxIn`](../type-aliases/TxIn.md)

tx input, must be a segwit input

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized tx input

***

### mergePrevouts()

> `static` **mergePrevouts**(`prevouts`): `MergePrevoutsResponse`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:64](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L64)

Merge prevout list into a single ByteString

#### Parameters

##### prevouts

[`Prevouts`](../type-aliases/Prevouts.md)

prevout list to merge

#### Returns

`MergePrevoutsResponse`

merged prevouts and number of tx inputs

***

### mergeSpentAmounts()

> `static` **mergeSpentAmounts**(`amounts`, `t_inputCount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:131](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L131)

Merge spent amount list into a single ByteString

#### Parameters

##### amounts

[`SpentAmounts`](../type-aliases/SpentAmounts.md)

spent amount list to merge

##### t\_inputCount

`bigint`

the number of tx inputs, must be verified and trusable

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

merged spent amounts

***

### mergeSpentScripts()

> `static` **mergeSpentScripts**(`scripts`, `t_inputCount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:107](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L107)

Merge spent script list into a single ByteString

#### Parameters

##### scripts

[`SpentScripts`](../type-aliases/SpentScripts.md)

spent script list to merge

##### t\_inputCount

`bigint`

the number of tx inputs, must be verified and trusable

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

merged spent scripts

***

### toSatoshis()

> `static` **toSatoshis**(`n`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts:319](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/txUtils.ts#L319)

convert a `Int32` number to 8 bytes in little-end order.

#### Parameters

##### n

[`Int32`](../type-aliases/Int32.md)

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString`
