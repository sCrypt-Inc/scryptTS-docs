[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / Interpreter

# Class: Interpreter

Defined in: [ts\_src/interpreter.ts:115](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L115)

## Constructors

### new Interpreter()

> **new Interpreter**(): [`Interpreter`](Interpreter.md)

Defined in: [ts\_src/interpreter.ts:309](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L309)

#### Returns

[`Interpreter`](Interpreter.md)

## Properties

### ANNEX\_TAG

> `readonly` `static` **ANNEX\_TAG**: `80` = `0x50`

Defined in: [ts\_src/interpreter.ts:269](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L269)

***

### FALSE

> `readonly` `static` **FALSE**: `Uint8Array`

Defined in: [ts\_src/interpreter.ts:272](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L272)

***

### LOCKTIME\_THRESHOLD

> `readonly` `static` **LOCKTIME\_THRESHOLD**: `500000000` = `500000000`

Defined in: [ts\_src/interpreter.ts:120](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L120)

***

### MAX\_SCRIPT\_ELEMENT\_SIZE

> `readonly` `static` **MAX\_SCRIPT\_ELEMENT\_SIZE**: `520` = `520`

Defined in: [ts\_src/interpreter.ts:118](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L118)

***

### MAX\_SCRIPT\_SIZE

> `readonly` `static` **MAX\_SCRIPT\_SIZE**: `10000` = `10000`

Defined in: [ts\_src/interpreter.ts:116](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L116)

***

### MAX\_STACK\_SIZE

> `readonly` `static` **MAX\_STACK\_SIZE**: `1000` = `1000`

Defined in: [ts\_src/interpreter.ts:117](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L117)

***

### PROTOCOL\_VERSION

> `readonly` `static` **PROTOCOL\_VERSION**: `70016` = `70016`

Defined in: [ts\_src/interpreter.ts:280](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L280)

***

### SCRIPT\_ENABLE\_REPLAY\_PROTECTION

> `readonly` `static` **SCRIPT\_ENABLE\_REPLAY\_PROTECTION**: `number`

Defined in: [ts\_src/interpreter.ts:211](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L211)

***

### SCRIPT\_ENABLE\_SIGHASH\_FORKID

> `readonly` `static` **SCRIPT\_ENABLE\_SIGHASH\_FORKID**: `number`

Defined in: [ts\_src/interpreter.ts:207](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L207)

***

### SCRIPT\_VERIFY\_CHECKLOCKTIMEVERIFY

> `readonly` `static` **SCRIPT\_VERIFY\_CHECKLOCKTIMEVERIFY**: `number`

Defined in: [ts\_src/interpreter.ts:176](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L176)

***

### SCRIPT\_VERIFY\_CHECKSEQUENCEVERIFY

> `readonly` `static` **SCRIPT\_VERIFY\_CHECKSEQUENCEVERIFY**: `number`

Defined in: [ts\_src/interpreter.ts:181](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L181)

***

### SCRIPT\_VERIFY\_CLEANSTACK

> `readonly` `static` **SCRIPT\_VERIFY\_CLEANSTACK**: `number`

Defined in: [ts\_src/interpreter.ts:171](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L171)

***

### SCRIPT\_VERIFY\_CONST\_SCRIPTCODE

> `readonly` `static` **SCRIPT\_VERIFY\_CONST\_SCRIPTCODE**: `number`

Defined in: [ts\_src/interpreter.ts:215](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L215)

***

### SCRIPT\_VERIFY\_DERSIG

> `readonly` `static` **SCRIPT\_VERIFY\_DERSIG**: `number`

Defined in: [ts\_src/interpreter.ts:135](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L135)

***

### SCRIPT\_VERIFY\_DISCOURAGE\_OP\_SUCCESS

> `readonly` `static` **SCRIPT\_VERIFY\_DISCOURAGE\_OP\_SUCCESS**: `number`

Defined in: [ts\_src/interpreter.ts:226](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L226)

***

### SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_NOPS

> `readonly` `static` **SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_NOPS**: `number`

Defined in: [ts\_src/interpreter.ts:162](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L162)

***

### SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_PUBKEYTYPE

> `readonly` `static` **SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_PUBKEYTYPE**: `number`

Defined in: [ts\_src/interpreter.ts:229](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L229)

***

### SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_TAPROOT\_VERSION

> `readonly` `static` **SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_TAPROOT\_VERSION**: `number`

Defined in: [ts\_src/interpreter.ts:223](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L223)

***

### SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_WITNESS\_PROGRAM

> `readonly` `static` **SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_WITNESS\_PROGRAM**: `number`

Defined in: [ts\_src/interpreter.ts:189](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L189)

***

### SCRIPT\_VERIFY\_LOW\_S

> `readonly` `static` **SCRIPT\_VERIFY\_LOW\_S**: `number`

Defined in: [ts\_src/interpreter.ts:139](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L139)

***

### SCRIPT\_VERIFY\_MINIMALDATA

> `readonly` `static` **SCRIPT\_VERIFY\_MINIMALDATA**: `number`

Defined in: [ts\_src/interpreter.ts:152](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L152)

***

### SCRIPT\_VERIFY\_MINIMALIF

> `readonly` `static` **SCRIPT\_VERIFY\_MINIMALIF**: `number`

Defined in: [ts\_src/interpreter.ts:195](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L195)

***

### SCRIPT\_VERIFY\_NONE

> `readonly` `static` **SCRIPT\_VERIFY\_NONE**: `0` = `0`

Defined in: [ts\_src/interpreter.ts:124](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L124)

***

### SCRIPT\_VERIFY\_NULLDUMMY

> `readonly` `static` **SCRIPT\_VERIFY\_NULLDUMMY**: `number`

Defined in: [ts\_src/interpreter.ts:142](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L142)

***

### SCRIPT\_VERIFY\_NULLFAIL

> `readonly` `static` **SCRIPT\_VERIFY\_NULLFAIL**: `number`

Defined in: [ts\_src/interpreter.ts:199](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L199)

***

### SCRIPT\_VERIFY\_P2SH

> `readonly` `static` **SCRIPT\_VERIFY\_P2SH**: `number`

Defined in: [ts\_src/interpreter.ts:127](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L127)

***

### SCRIPT\_VERIFY\_SIGPUSHONLY

> `readonly` `static` **SCRIPT\_VERIFY\_SIGPUSHONLY**: `number`

Defined in: [ts\_src/interpreter.ts:145](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L145)

***

### SCRIPT\_VERIFY\_STRICTENC

> `readonly` `static` **SCRIPT\_VERIFY\_STRICTENC**: `number`

Defined in: [ts\_src/interpreter.ts:132](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L132)

***

### SCRIPT\_VERIFY\_TAPROOT

> `readonly` `static` **SCRIPT\_VERIFY\_TAPROOT**: `number`

Defined in: [ts\_src/interpreter.ts:219](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L219)

***

### SCRIPT\_VERIFY\_WITNESS

> `readonly` `static` **SCRIPT\_VERIFY\_WITNESS**: `number`

Defined in: [ts\_src/interpreter.ts:185](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L185)

***

### SCRIPT\_VERIFY\_WITNESS\_PUBKEYTYPE

> `readonly` `static` **SCRIPT\_VERIFY\_WITNESS\_PUBKEYTYPE**: `number`

Defined in: [ts\_src/interpreter.ts:203](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L203)

***

### SEQUENCE\_LOCKTIME\_DISABLE\_FLAG

> `readonly` `static` **SEQUENCE\_LOCKTIME\_DISABLE\_FLAG**: `number`

Defined in: [ts\_src/interpreter.ts:236](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L236)

If this flag set, CTxIn::nSequence is NOT interpreted as a relative
lock-time.

***

### SEQUENCE\_LOCKTIME\_MASK

> `readonly` `static` **SEQUENCE\_LOCKTIME\_MASK**: `65535` = `0x0000ffff`

Defined in: [ts\_src/interpreter.ts:249](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L249)

If CTxIn::nSequence encodes a relative lock-time, this mask is applied to
extract that lock-time from the sequence field.

***

### SEQUENCE\_LOCKTIME\_TYPE\_FLAG

> `readonly` `static` **SEQUENCE\_LOCKTIME\_TYPE\_FLAG**: `number`

Defined in: [ts\_src/interpreter.ts:243](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L243)

If CTxIn::nSequence encodes a relative lock-time and this flag is set,
the relative lock-time has units of 512 seconds, otherwise it specifies
blocks with a granularity of 1.

***

### TAPROOT\_CONTROL\_BASE\_SIZE

> `readonly` `static` **TAPROOT\_CONTROL\_BASE\_SIZE**: `33` = `33`

Defined in: [ts\_src/interpreter.ts:258](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L258)

***

### TAPROOT\_CONTROL\_MAX\_NODE\_COUNT

> `readonly` `static` **TAPROOT\_CONTROL\_MAX\_NODE\_COUNT**: `128` = `128`

Defined in: [ts\_src/interpreter.ts:260](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L260)

***

### TAPROOT\_CONTROL\_MAX\_SIZE

> `readonly` `static` **TAPROOT\_CONTROL\_MAX\_SIZE**: `number`

Defined in: [ts\_src/interpreter.ts:274](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L274)

***

### TAPROOT\_CONTROL\_NODE\_SIZE

> `readonly` `static` **TAPROOT\_CONTROL\_NODE\_SIZE**: `32` = `32`

Defined in: [ts\_src/interpreter.ts:259](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L259)

***

### TAPROOT\_LEAF\_MASK

> `readonly` `static` **TAPROOT\_LEAF\_MASK**: `254` = `0xfe`

Defined in: [ts\_src/interpreter.ts:256](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L256)

***

### TAPROOT\_LEAF\_TAPSCRIPT

> `readonly` `static` **TAPROOT\_LEAF\_TAPSCRIPT**: `192` = `0xc0`

Defined in: [ts\_src/interpreter.ts:257](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L257)

***

### TRUE

> `readonly` `static` **TRUE**: `Uint8Array`

Defined in: [ts\_src/interpreter.ts:271](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L271)

***

### VALIDATION\_WEIGHT\_OFFSET

> `readonly` `static` **VALIDATION\_WEIGHT\_OFFSET**: `50` = `50`

Defined in: [ts\_src/interpreter.ts:265](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L265)

***

### VALIDATION\_WEIGHT\_PER\_SIGOP\_PASSED

> `readonly` `static` **VALIDATION\_WEIGHT\_PER\_SIGOP\_PASSED**: `50` = `50`

Defined in: [ts\_src/interpreter.ts:263](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L263)

***

### WITNESS\_V0\_KEYHASH\_SIZE

> `readonly` `static` **WITNESS\_V0\_KEYHASH\_SIZE**: `20` = `20`

Defined in: [ts\_src/interpreter.ts:253](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L253)

***

### WITNESS\_V0\_SCRIPTHASH\_SIZE

> `readonly` `static` **WITNESS\_V0\_SCRIPTHASH\_SIZE**: `32` = `32`

Defined in: [ts\_src/interpreter.ts:252](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L252)

Signature hash sizes

***

### WITNESS\_V1\_TAPROOT\_SIZE

> `readonly` `static` **WITNESS\_V1\_TAPROOT\_SIZE**: `32` = `32`

Defined in: [ts\_src/interpreter.ts:254](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L254)

## Methods

### \_evalCheckSig()

> **\_evalCheckSig**(`bufSig`, `bufPubkey`): `object`

Defined in: [ts\_src/interpreter.ts:2119](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2119)

Based on bitcoind's EvalChecksig function
bitcoind commit: a0988140b71485ad12c3c3a4a9573f7c21b1eff8

#### Parameters

##### bufSig

`Uint8Array`

##### bufPubkey

`Uint8Array`

#### Returns

`object`

##### result

> **result**: `boolean` = `false`

##### success

> **success**: `boolean` = `false`

***

### \_evalChecksigPreTapscript()

> **\_evalChecksigPreTapscript**(`bufSig`, `bufPubkey`): `object`

Defined in: [ts\_src/interpreter.ts:2140](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2140)

Based on bitcoind's EvalChecksigPreTapscript function
bitcoind commit: a0988140b71485ad12c3c3a4a9573f7c21b1eff8

#### Parameters

##### bufSig

`Uint8Array`

##### bufPubkey

`Uint8Array`

#### Returns

`object`

##### result

> **result**: `boolean` = `false`

##### success

> **success**: `boolean` = `false`

***

### \_evalChecksigTapscript()

> **\_evalChecksigTapscript**(`bufSig`, `bufPubkey`): `object`

Defined in: [ts\_src/interpreter.ts:2207](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2207)

Based on bitcoind's EvalChecksigTapscript function
bitcoind commit: a0988140b71485ad12c3c3a4a9573f7c21b1eff8

#### Parameters

##### bufSig

`Uint8Array`

##### bufPubkey

`Uint8Array`

#### Returns

`object`

##### result

> **result**: `boolean` = `false`

##### success

> **success**: `boolean`

***

### checkEcdsaSignature()

> **checkEcdsaSignature**(`sig`, `pubkey`, `subscript`): `boolean`

Defined in: [ts\_src/interpreter.ts:2542](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2542)

Verify ECDSA signature

#### Parameters

##### sig

`Uint8Array`

##### pubkey

`Uint8Array`

##### subscript

(`number` \| `Uint8Array`)[]

#### Returns

`boolean`

***

### checkLockTime()

> **checkLockTime**(`nLockTime`): `boolean`

Defined in: [ts\_src/interpreter.ts:2015](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2015)

Checks a locktime parameter with the transaction's locktime.
There are two times of nLockTime: lock-by-blockheight and lock-by-blocktime,
distinguished by whether nLockTime < LOCKTIME_THRESHOLD = 500000000

See the corresponding code on bitcoin core:
https://github.com/bitcoin/bitcoin/blob/ffd75adce01a78b3461b3ff05bcc2b530a9ce994/src/script/interpreter.cpp#L1129

#### Parameters

##### nLockTime

`bigint`

the locktime read from the script

#### Returns

`boolean`

true if the transaction's locktime is less than or equal to
                  the transaction's locktime

***

### checkPubkeyEncoding()

> **checkPubkeyEncoding**(`buf`): `boolean`

Defined in: [ts\_src/interpreter.ts:2441](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2441)

Translated from bitcoind's CheckPubKeyEncoding

#### Parameters

##### buf

`Uint8Array`

#### Returns

`boolean`

***

### checkSchnorrSignature()

> **checkSchnorrSignature**(`sig`, `pubkey`, `sigversion`, `execdata`): `boolean`

Defined in: [ts\_src/interpreter.ts:2286](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2286)

Verifies Schnorr signature

#### Parameters

##### sig

`Uint8Array`

##### pubkey

`Uint8Array`

##### sigversion

`SignatureVersion`

##### execdata

`any`

#### Returns

`boolean`

***

### checkSequence()

> **checkSequence**(`nSequence`): `boolean`

Defined in: [ts\_src/interpreter.ts:2060](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2060)

Checks a sequence parameter with the transaction's sequence.

#### Parameters

##### nSequence

`bigint`

the sequence read from the script

#### Returns

`boolean`

true if the transaction's sequence is less than or equal to
                  the transaction's sequence

***

### checkSignatureEncoding()

> **checkSignatureEncoding**(`buf`): `boolean`

Defined in: [ts\_src/interpreter.ts:2402](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2402)

Translated from bitcoind's CheckSignatureEncoding

#### Parameters

##### buf

`Uint8Array`

#### Returns

`boolean`

***

### evaluate()

> **evaluate**(): `boolean`

Defined in: [ts\_src/interpreter.ts:839](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L839)

Based on bitcoind's EvalScript function, with the inner loop moved to
static readonly prototype.step()
bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104

#### Returns

`boolean`

***

### executeWitnessScript()

> **executeWitnessScript**(`scriptPubKey`, `stack`, `sigversion`, `satoshis`, `flags`, `execdata`): `boolean`

Defined in: [ts\_src/interpreter.ts:771](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L771)

#### Parameters

##### scriptPubKey

(`number` \| `Uint8Array`)[]

##### stack

`Uint8Array`[]

##### sigversion

`SignatureVersion`

##### satoshis

`number`

##### flags

`number`

##### execdata

`any`

#### Returns

`boolean`

***

### getErr()

> **getErr**(): [`InterpreterErr`](../namespaces/interpreter/enumerations/InterpreterErr.md)

Defined in: [ts\_src/interpreter.ts:313](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L313)

#### Returns

[`InterpreterErr`](../namespaces/interpreter/enumerations/InterpreterErr.md)

***

### initialize()

> **initialize**(): `void`

Defined in: [ts\_src/interpreter.ts:317](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L317)

#### Returns

`void`

***

### isInitialized()

> **isInitialized**(): `boolean`

Defined in: [ts\_src/interpreter.ts:2463](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2463)

#### Returns

`boolean`

***

### setExecdata()

> **setExecdata**(`execdata`): `void`

Defined in: [ts\_src/interpreter.ts:379](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L379)

#### Parameters

##### execdata

`any`

#### Returns

`void`

***

### setFlags()

> **setFlags**(`flags`): `void`

Defined in: [ts\_src/interpreter.ts:363](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L363)

#### Parameters

##### flags

`number`

#### Returns

`void`

***

### setNin()

> **setNin**(`nin`): `void`

Defined in: [ts\_src/interpreter.ts:359](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L359)

#### Parameters

##### nin

`number`

#### Returns

`void`

***

### setPrevOuts()

> **setPrevOuts**(`prevOuts`): `void`

Defined in: [ts\_src/interpreter.ts:351](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L351)

#### Parameters

##### prevOuts

`undefined` | [`TxOutput`](../interfaces/TxOutput.md)[]

#### Returns

`void`

***

### setSatoshis()

> **setSatoshis**(`satoshis`): `void`

Defined in: [ts\_src/interpreter.ts:375](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L375)

#### Parameters

##### satoshis

`number`

#### Returns

`void`

***

### setScript()

> **setScript**(`script`): `boolean`

Defined in: [ts\_src/interpreter.ts:331](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L331)

#### Parameters

##### script

`Uint8Array` | (`number` \| `Uint8Array`)[]

#### Returns

`boolean`

***

### setSigversion()

> **setSigversion**(`sigversion`): `void`

Defined in: [ts\_src/interpreter.ts:371](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L371)

#### Parameters

##### sigversion

`SignatureVersion`

#### Returns

`void`

***

### setStack()

> **setStack**(`stack`): `void`

Defined in: [ts\_src/interpreter.ts:367](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L367)

#### Parameters

##### stack

`Uint8Array`[]

#### Returns

`void`

***

### setTx()

> **setTx**(`tx`): `void`

Defined in: [ts\_src/interpreter.ts:347](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L347)

#### Parameters

##### tx

[`Transaction`](Transaction.md)

#### Returns

`void`

***

### step()

> **step**(): `boolean`

Defined in: [ts\_src/interpreter.ts:890](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L890)

#### Returns

`boolean`

***

### verify()

> **verify**(`scriptSig`, `scriptPubkey`, `tx`, `nin`, `flags`, `witness`, `satoshis`, `prevOuts`?): `boolean`

Defined in: [ts\_src/interpreter.ts:383](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L383)

#### Parameters

##### scriptSig

`Uint8Array`

##### scriptPubkey

`Uint8Array`

##### tx

[`Transaction`](Transaction.md) = `...`

##### nin

`number` = `0`

##### flags

`number` = `0`

##### witness

`Uint8Array`[] = `[]`

##### satoshis

`number` = `0`

##### prevOuts?

[`TxOutput`](../interfaces/TxOutput.md)[]

#### Returns

`boolean`

***

### verifySignature()

> **verifySignature**(`sig`, `pubkey`, `subscript`, `sigversion`, `execdata`): `boolean`

Defined in: [ts\_src/interpreter.ts:2498](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2498)

This is here largely for legacy reasons. However, if the sig type
is already known (via sigversion), then it would be better to call
checkEcdsaSignature or checkSchnorrSignature directly.

#### Parameters

##### sig

`Uint8Array`

Signature to verify

##### pubkey

`Uint8Array`

Public key used to verify sig

##### subscript

(`number` \| `Uint8Array`)[]

ECDSA only

##### sigversion

`SignatureVersion`

See Signature.Version for valid versions (default: 0 or Signature.Version.BASE)

##### execdata

`any`

Schnorr only

#### Returns

`boolean`

whether the signature is valid for this transaction input

***

### verifyWitnessProgram()

> **verifyWitnessProgram**(`version`, `program`, `witness`, `satoshis`, `flags`, `isP2SH`): `boolean`

Defined in: [ts\_src/interpreter.ts:575](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L575)

#### Parameters

##### version

`number`

##### program

`Uint8Array`

##### witness

`Uint8Array`[]

##### satoshis

`number`

##### flags

`number`

##### isP2SH

`boolean` = `false`

#### Returns

`boolean`

***

### castToBool()

> `static` **castToBool**(`buf`): `boolean`

Defined in: [ts\_src/interpreter.ts:877](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L877)

#### Parameters

##### buf

`Uint8Array`

#### Returns

`boolean`

***

### computeTapleafHash()

> `static` **computeTapleafHash**(`leafVersion`, `scriptBuf`): `Uint8Array`

Defined in: [ts\_src/interpreter.ts:2356](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2356)

#### Parameters

##### leafVersion

`number`

##### scriptBuf

`Uint8Array`

#### Returns

`Uint8Array`

***

### verifyTaprootCommitment()

> `static` **verifyTaprootCommitment**(`control`, `program`, `tapleafHash`): `boolean`

Defined in: [ts\_src/interpreter.ts:2366](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/interpreter.ts#L2366)

#### Parameters

##### control

`Uint8Array`

##### program

`Uint8Array`

##### tapleafHash

`Uint8Array`

#### Returns

`boolean`
