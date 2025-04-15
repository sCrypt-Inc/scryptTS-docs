[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / ContextUtils

# Class: ContextUtils

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:15](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L15)

Library for verifying preimage.

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new ContextUtils()

> **new ContextUtils**(...`args`): [`ContextUtils`](ContextUtils.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L29)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`ContextUtils`](ContextUtils.md)

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

### ePreimagePrefix

> `readonly` `static` **ePreimagePrefix**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:87](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L87)

A fixed preimage prefix.
https://github.com/bitcoin/bips/blob/master/bip-0340/reference.py#L114
e = taggedHash('BIP0340/challenge', bytes(R) || bytes(P) || m)

tagHash = sha256('BIP0340/challenge') = 7bb52d7a9fef58323eb1bf7a407db382d2f3f2d81bb1224f49fe518f6d48d37c

e = sha256(tagHash || tagHash || bytes(R) || bytes(P) || m)

we define:
    ePreimagePrefix = tagHash || tagHash || bytes(R) || bytes(P)

e = sha256(ePreimagePrefix || m)

default signing process Sign(sk, m) defines in BIP-340
https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#default-signing

we use the private key sk = 1 to sign the message, so
  d' = 1
  d' is good in range (0, n)
  P = d'G = G
  has_even_y(P) = has_even_y(G) = True
  d = d' if has_even_y(P) = 1
and we do not derive k' to generate the random point R but use G directly
  k' = 1
  R = k'G = G
  has_even_y(R) = has_even_y(G) = True
  k = k' if has_even_y(R) = 1

ePreimagePrefix = tagHash || tagHash || Gx || Gx

***

### Gx

> `readonly` `static` **Gx**: [`PubKey`](../type-aliases/PubKey.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L18)

X coordinate of secp256k1 generator point

***

### preimagePrefix

> `readonly` `static` **preimagePrefix**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:51](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L51)

A fixed preimage prefix.
https://github.com/bitcoin/bips/blob/master/bip-0340/reference.py#L25
taggedHash(tag, m) = sha256(sha256(tag) || sha256(tag) || m)

https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message
BIP-341 defines Common Signature Message, SigMsg(hash_type, ext_flag)

https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#common-signature-message-extension
BIP-342 defines tapscript message extension (ext) to BIP-341 Common Signature Message, indicated by ext_flag = 1:
  - tapLeafHash
  - keyVersion
  - codeSepPos

hash type uses 0x00 (SIGHASH_DEFAULT), so the message `m` to checksig is

    taggedHash('TapSighash', 0x00 || SigMsg(0x00, 1) || ext)
                              |              |    |
                       sighashEpoch     hashType  extFlag

tagHash = sha256('TapSighash') = f40a48df4b2a70c8b4924bf2654661ed3d95fd66a313eb87237597c628e4a031

 => sha256(tagHash || tagHash || 0x00 || SigMsg(0x00, 1) || ext)

we define:
    preimage = SigMsg(0x00, 1) || ext
    preimagePrefix = tagHash || tagHash || 0x00

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:16](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

## Methods

### checkPrevouts()

> `static` **checkPrevouts**(`prevouts`, `prevout`, `t_shaPrevouts`, `t_inputIndexVal`): [`Int32`](../type-aliases/Int32.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:173](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L173)

Verify that the prevouts context passed in by the user is authentic

#### Parameters

##### prevouts

[`Prevouts`](../type-aliases/Prevouts.md)

prevouts context passed in by the user that need to be verified

##### prevout

[`Outpoint`](../type-aliases/Outpoint.md)

prevout context passed in by the user that need to be verified

##### t\_shaPrevouts

[`ByteString`](../type-aliases/ByteString.md)

shaPrevouts in preimage which is trustable

##### t\_inputIndexVal

[`Int32`](../type-aliases/Int32.md)

the index of the input, which is trustable

#### Returns

[`Int32`](../type-aliases/Int32.md)

the number of inputs, which is trustable

***

### checkSHPreimage()

> `static` **checkSHPreimage**(`shPreimage`): [`Sig`](../type-aliases/Sig.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:97](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L97)

sign the transaction preimage

#### Parameters

##### shPreimage

[`SHPreimage`](../type-aliases/SHPreimage.md)

the transaction preimage

#### Returns

[`Sig`](../type-aliases/Sig.md)

a signature

***

### checkSpentAmounts()

> `static` **checkSpentAmounts**(`spentAmounts`, `t_shaSpentAmounts`, `t_inputCount`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:217](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L217)

Check if the spent amounts array passed in matches the shaSpentAmounts

#### Parameters

##### spentAmounts

[`SpentAmounts`](../type-aliases/SpentAmounts.md)

array of spent amounts passed in that need to be verified

##### t\_shaSpentAmounts

[`ByteString`](../type-aliases/ByteString.md)

the hash of the merged spent amounts, which comes from preimage and is trustable

##### t\_inputCount

`bigint`

must be trustable, the number of inputs

#### Returns

`void`

***

### checkSpentScripts()

> `static` **checkSpentScripts**(`spentScripts`, `t_shaSpentScripts`, `t_inputCount`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts:199](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/contextUtils.ts#L199)

Check if the spent scripts array passed in matches the shaSpentScripts

#### Parameters

##### spentScripts

[`SpentScripts`](../type-aliases/SpentScripts.md)

array of spent scripts passed in that need to be verified

##### t\_shaSpentScripts

[`ByteString`](../type-aliases/ByteString.md)

the hash of the merged spent scripts, which comes from preimage and is trustable

##### t\_inputCount

`bigint`

must be trustable, the number of inputs

#### Returns

`void`

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
