[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / OpCode

# Class: OpCode

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:8](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L8)

This is a list of all Script words, also known as opcodes, commands, or functions.
Opcodes used in [BTC Script][https://en.bitcoin.it/wiki/Script](https://en.bitcoin.it/wiki/Script)

## Onchain

## Constructors

### new OpCode()

> **new OpCode**(): [`OpCode`](OpCode.md)

#### Returns

[`OpCode`](OpCode.md)

## Properties

### OP\_0

> `readonly` `static` **OP\_0**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:14](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L14)

An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.)

#### Name

OP_0

#### Constant

`OpCodeType('00')`

***

### OP\_0NOTEQUAL

> `readonly` `static` **OP\_0NOTEQUAL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:496](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L496)

Returns 0 if the input is 0. 1 otherwise.

#### Name

OP_0NOTEQUAL

#### Constant

`OpCodeType('92')`

***

### OP\_1

> `readonly` `static` **OP\_1**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:56](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L56)

The number 1 is pushed onto the stack.

#### Name

OP_1

#### Constant

`OpCodeType('51')`

***

### OP\_10

> `readonly` `static` **OP\_10**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:116](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L116)

The number 10 is pushed onto the stack.

#### Name

OP_10

#### Constant

`OpCodeType('5a')`

***

### OP\_11

> `readonly` `static` **OP\_11**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:122](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L122)

The number 11 is pushed onto the stack.

#### Name

OP_11

#### Constant

`OpCodeType('5b')`

***

### OP\_12

> `readonly` `static` **OP\_12**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:128](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L128)

The number 12 is pushed onto the stack.

#### Name

OP_12

#### Constant

`OpCodeType('5c')`

***

### OP\_13

> `readonly` `static` **OP\_13**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:134](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L134)

The number 13 is pushed onto the stack.

#### Name

OP_13

#### Constant

`OpCodeType('5d')`

***

### OP\_14

> `readonly` `static` **OP\_14**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:140](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L140)

The number 14 is pushed onto the stack.

#### Name

OP_14

#### Constant

`OpCodeType('5e')`

***

### OP\_15

> `readonly` `static` **OP\_15**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:146](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L146)

The number 15 is pushed onto the stack.

#### Name

OP_15

#### Constant

`OpCodeType('5f')`

***

### OP\_16

> `readonly` `static` **OP\_16**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:152](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L152)

The number 16 is pushed onto the stack.

#### Name

OP_16

#### Constant

`OpCodeType('60')`

***

### OP\_1ADD

> `readonly` `static` **OP\_1ADD**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:454](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L454)

1 is added to the input.

#### Name

OP_1ADD

#### Constant

`OpCodeType('8b')`

***

### OP\_1NEGATE

> `readonly` `static` **OP\_1NEGATE**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:44](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L44)

The number -1 is pushed onto the stack.

#### Name

OP_1NEGATE

#### Constant

`OpCodeType('4f')`

***

### OP\_1SUB

> `readonly` `static` **OP\_1SUB**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:460](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L460)

1 is subtracted from the input.

#### Name

OP_1SUB

#### Constant

`OpCodeType('8c')`

***

### OP\_2

> `readonly` `static` **OP\_2**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:68](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L68)

The number 2 is pushed onto the stack.

#### Name

OP_2

#### Constant

`OpCodeType('52')`

***

### OP\_2DIV

> `readonly` `static` **OP\_2DIV**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:472](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L472)

The input is divided by 2. **DISABLED** now. (This opcode is scheduled to be re-enabled in the Chronicle update)

#### Name

OP_2DIV

#### Constant

`OpCodeType('8e')`

***

### OP\_2DROP

> `readonly` `static` **OP\_2DROP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:271](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L271)

Removes the top two stack items.

#### Name

OP_2DROP

#### Constant

`OpCodeType('6d')`

***

### OP\_2DUP

> `readonly` `static` **OP\_2DUP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:277](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L277)

Duplicates the top two stack items.

#### Name

OP_2DUP

#### Constant

`OpCodeType('6e')`

***

### OP\_2MUL

> `readonly` `static` **OP\_2MUL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:466](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L466)

The input is multiplied by 2. **DISABLED** now. (This opcode is scheduled to be re-enabled in the Chronicle update)

#### Name

OP_2MUL

#### Constant

`OpCodeType('8d')`

***

### OP\_2OVER

> `readonly` `static` **OP\_2OVER**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:289](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L289)

Copies the pair of items two spaces back in the stack to the front.

#### Name

OP_2OVER

#### Constant

`OpCodeType('70')`

***

### OP\_2ROT

> `readonly` `static` **OP\_2ROT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:295](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L295)

The fifth and sixth items back are moved to the top of the stack.

#### Name

OP_2ROT

#### Constant

`OpCodeType('71')`

***

### OP\_2SWAP

> `readonly` `static` **OP\_2SWAP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:301](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L301)

Swaps the top two pairs of items.

#### Name

OP_2SWAP

#### Constant

`OpCodeType('72')`

***

### OP\_3

> `readonly` `static` **OP\_3**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:74](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L74)

The number 3 is pushed onto the stack.

#### Name

OP_3

#### Constant

`OpCodeType('53')`

***

### OP\_3DUP

> `readonly` `static` **OP\_3DUP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:283](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L283)

Duplicates the top three stack items.

#### Name

OP_3DUP

#### Constant

`OpCodeType('6f')`

***

### OP\_4

> `readonly` `static` **OP\_4**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:80](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L80)

The number 4 is pushed onto the stack.

#### Name

OP_4

#### Constant

`OpCodeType('54')`

***

### OP\_5

> `readonly` `static` **OP\_5**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:86](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L86)

The number 5 is pushed onto the stack.

#### Name

OP_5

#### Constant

`OpCodeType('55')`

***

### OP\_6

> `readonly` `static` **OP\_6**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:92](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L92)

The number 6 is pushed onto the stack.

#### Name

OP_6

#### Constant

`OpCodeType('56')`

***

### OP\_7

> `readonly` `static` **OP\_7**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:98](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L98)

The number 7 is pushed onto the stack.

#### Name

OP_7

#### Constant

`OpCodeType('57')`

***

### OP\_8

> `readonly` `static` **OP\_8**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:104](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L104)

The number 8 is pushed onto the stack.

#### Name

OP_8

#### Constant

`OpCodeType('58')`

***

### OP\_9

> `readonly` `static` **OP\_9**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:110](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L110)

The number 9 is pushed onto the stack.

#### Name

OP_9

#### Constant

`OpCodeType('59')`

***

### OP\_ABS

> `readonly` `static` **OP\_ABS**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:484](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L484)

The input is made positive.

#### Name

OP_ABS

#### Constant

`OpCodeType('90')`

***

### OP\_ADD

> `readonly` `static` **OP\_ADD**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:502](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L502)

a is added to b.

#### Name

OP_ADD

#### Constant

`OpCodeType('93')`

***

### OP\_AND

> `readonly` `static` **OP\_AND**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:411](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L411)

Boolean and between each bit in the inputs.

#### Name

OP_AND

#### Constant

`OpCodeType('84')`

***

### OP\_BIN2NUM

> `readonly` `static` **OP\_BIN2NUM**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:392](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L392)

Converts byte sequence x into a numeric value.

#### Name

OP_BIN2NUM

#### Constant

`OpCodeType('81')`

***

### OP\_BOOLAND

> `readonly` `static` **OP\_BOOLAND**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:544](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L544)

If both a and b are not 0, the output is 1. Otherwise 0.

#### Name

OP_BOOLAND

#### Constant

`OpCodeType('9a')`

***

### OP\_BOOLOR

> `readonly` `static` **OP\_BOOLOR**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:550](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L550)

If a or b is not 0, the output is 1. Otherwise 0.

#### Name

OP_BOOLOR

#### Constant

`OpCodeType('9b')`

***

### OP\_CAT

> `readonly` `static` **OP\_CAT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:374](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L374)

Concatenates two strings.

#### Name

OP_CAT

#### Constant

`OpCodeType('7e')`

***

### OP\_CHECKMULTISIG

> `readonly` `static` **OP\_CHECKMULTISIG**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:667](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L667)

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, an extra unused value (x) is removed from the stack. Script spenders must account for this by adding a junk value (typically zero) to the stack.

#### Name

OP_CHECKMULTISIG

#### Constant

`OpCodeType('ae')`

***

### OP\_CHECKMULTISIGVERIFY

> `readonly` `static` **OP\_CHECKMULTISIGVERIFY**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:673](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L673)

Same as `OP_CHECKMULTISIG`, but `OP_VERIFY` is executed afterward.

#### Name

OP_CHECKMULTISIGVERIFY

#### Constant

`OpCodeType('af')`

***

### OP\_CHECKSIG

> `readonly` `static` **OP\_CHECKSIG**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:655](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L655)

The entire transaction's outputs, inputs, and script (from the most recently-executed [OP_CODESEPARATOR][https://en.bitcoin.it/wiki/Script#:~:text=with%20SHA%2D256.-,OP\_CODESEPARATOR,-171](https://en.bitcoin.it/wiki/Script#:~:text=with%20SHA%2D256.-,OP_CODESEPARATOR,-171) to the end) are hashed.
The signature used by [OP_CHECKSIG][https://en.bitcoin.it/wiki/OP\_CHECKSIG](https://en.bitcoin.it/wiki/OP_CHECKSIG) must be a valid signature for this hash and public key. If it is, 1 is returned, 0 otherwise.

#### Name

OP_CHECKSIG

#### Constant

`OpCodeType('ac')`

***

### OP\_CHECKSIGVERIFY

> `readonly` `static` **OP\_CHECKSIGVERIFY**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:661](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L661)

Same as `OP_CHECKSIG`, but `OP_VERIFY` is executed afterward.

#### Name

OP_CHECKSIGVERIFY

#### Constant

`OpCodeType('ad')`

***

### OP\_CODESEPARATOR

> `readonly` `static` **OP\_CODESEPARATOR**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:648](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L648)

All of the signature checking words will only match signatures to the data after the most recently-executed
[OP_CODESEPARATOR][https://en.bitcoin.it/wiki/Script#:~:text=with%20SHA%2D256.-,OP\_CODESEPARATOR,-171](https://en.bitcoin.it/wiki/Script#:~:text=with%20SHA%2D256.-,OP_CODESEPARATOR,-171).

#### Name

OP_CODESEPARATOR

#### Constant

`OpCodeType('ab')`

***

### OP\_DEPTH

> `readonly` `static` **OP\_DEPTH**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:313](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L313)

Counts the number of stack items onto the stack and places the value on the top

#### Name

OP_DEPTH

#### Constant

`OpCodeType('74')`

***

### OP\_DIV

> `readonly` `static` **OP\_DIV**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:520](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L520)

a is divided by b.

#### Name

OP_DIV

#### Constant

`OpCodeType('96')`

***

### OP\_DROP

> `readonly` `static` **OP\_DROP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:319](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L319)

Removes the top stack item.

#### Name

OP_DROP

#### Constant

`OpCodeType('75')`

***

### OP\_DUP

> `readonly` `static` **OP\_DUP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:325](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L325)

Duplicates the top stack item.

#### Name

OP_DUP

#### Constant

`OpCodeType('76')`

***

### OP\_ELSE

> `readonly` `static` **OP\_ELSE**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:227](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L227)

If the preceding IF or NOTIF check was not valid then statement 2 is executed.

#### Name

OP_ELSE

#### Constant

`OpCodeType('67')`

#### Example

```ts
`[expression] IF
 [statement 1]
ELSE
 [statement 2]
ENDIF`
```

***

### OP\_ENDIF

> `readonly` `static` **OP\_ENDIF**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:240](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L240)

Ends an if/else block. All blocks must end, or the transaction is invalid.
An OP_ENDIF without a prior matching OP_IF or OP_NOTIF is also invalid.

#### Name

OP_ENDIF

#### Constant

`OpCodeType('68')`

#### Example

```ts
`[expression] IF
 [statement 1]
ELSE
 [statement 2]
ENDIF`
```

***

### OP\_EQUAL

> `readonly` `static` **OP\_EQUAL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:429](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L429)

Returns 1 if the inputs are exactly equal, 0 otherwise.

#### Name

OP_EQUAL

#### Constant

`OpCodeType('87')`

***

### OP\_EQUALVERIFY

> `readonly` `static` **OP\_EQUALVERIFY**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:435](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L435)

Same as `OP_EQUAL`, but runs `OP_VERIFY` afterward.

#### Name

OP_EQUALVERIFY

#### Constant

`OpCodeType('88')`

***

### OP\_FALSE

> `readonly` `static` **OP\_FALSE**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:20](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L20)

An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.)

#### Name

OP_FALSE

#### Constant

`OpCodeType('00')`

***

### OP\_FROMALTSTACK

> `readonly` `static` **OP\_FROMALTSTACK**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:265](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L265)

Puts the input onto the top of the main stack. Removes it from the alt stack.

#### Name

OP_FROMALTSTACK

#### Constant

`OpCodeType('6c')`

***

### OP\_GREATERTHAN

> `readonly` `static` **OP\_GREATERTHAN**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:580](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L580)

Returns 1 if a is greater than b, 0 otherwise.

#### Name

OP_GREATERTHAN

#### Constant

`OpCodeType('a0')`

***

### OP\_GREATERTHANOREQUAL

> `readonly` `static` **OP\_GREATERTHANOREQUAL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:592](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L592)

Returns 1 if a is greater than or equal to b, 0 otherwise.

#### Name

OP_GREATERTHANOREQUAL

#### Constant

`OpCodeType('a2')`

***

### OP\_HASH160

> `readonly` `static` **OP\_HASH160**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:635](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L635)

The input is hashed twice: first with SHA-256 and then with RIPEMD-160.

#### Name

OP_HASH160

#### Constant

`OpCodeType('a9')`

***

### OP\_HASH256

> `readonly` `static` **OP\_HASH256**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:641](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L641)

The input is hashed two times with SHA-256.

#### Name

OP_HASH256

#### Constant

`OpCodeType('aa')`

***

### OP\_IF

> `readonly` `static` **OP\_IF**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:184](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L184)

If the top stack value is TRUE, statement 1 is executed.
If the top stack value is FALSE and ELSE is used, statement 2 is executed.
If ELSE is NOT used, the script jumps to ENDIF. The top stack value is removed.

#### Name

OP_IF

#### Constant

`OpCodeType('63')`

#### Example

```ts
`[expression] IF
 [statement 1]
ENDIF`
OR
`[expression] IF
 [statement 1]
ELSE
 [statement 2]
ENDIF`
```

***

### OP\_IFDUP

> `readonly` `static` **OP\_IFDUP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:307](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L307)

If the top stack value is not 0, duplicate it.

#### Name

OP_IFDUP

#### Constant

`OpCodeType('73')`

***

### OP\_INVALIDOPCODE

> `readonly` `static` **OP\_INVALIDOPCODE**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:757](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L757)

Matches any opcode that is not yet assigned. The word is used internally for assisting with transaction matching. They are invalid if used in actual scripts.

#### Name

OP_PUBKEY

#### Constant

`OpCodeType('ff')`

***

### OP\_INVERT

> `readonly` `static` **OP\_INVERT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:405](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L405)

Flips all of the bits in the input.

#### Name

OP_INVERT

#### Constant

`OpCodeType('83')`

***

### OP\_LESSTHAN

> `readonly` `static` **OP\_LESSTHAN**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:574](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L574)

Returns 1 if a is less than b, 0 otherwise.

#### Name

OP_LESSTHAN

#### Constant

`OpCodeType('9f')`

***

### OP\_LESSTHANOREQUAL

> `readonly` `static` **OP\_LESSTHANOREQUAL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:586](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L586)

Returns 1 if a is less than or equal to b, 0 otherwise.

#### Name

OP_LESSTHANOREQUAL

#### Constant

`OpCodeType('a1')`

***

### OP\_LSHIFT

> `readonly` `static` **OP\_LSHIFT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:532](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L532)

Logical left shift b bits. Sign data is discarded

#### Name

OP_LSHIFT

#### Constant

`OpCodeType('98')`

***

### OP\_MAX

> `readonly` `static` **OP\_MAX**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:604](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L604)

Returns the larger of a and b.

#### Name

OP_MAX

#### Constant

`OpCodeType('a4')`

***

### OP\_MIN

> `readonly` `static` **OP\_MIN**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:598](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L598)

Returns the smaller of a and b.

#### Name

OP_MIN

#### Constant

`OpCodeType('a3')`

***

### OP\_MOD

> `readonly` `static` **OP\_MOD**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:526](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L526)

Returns the remainder after dividing a by b.

#### Name

OP_MOD

#### Constant

`OpCodeType('97')`

***

### OP\_MUL

> `readonly` `static` **OP\_MUL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:514](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L514)

a is multiplied by b.

#### Name

OP_MUL

#### Constant

`OpCodeType('95')`

***

### OP\_NEGATE

> `readonly` `static` **OP\_NEGATE**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:478](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L478)

The sign of the input is flipped.

#### Name

OP_NEGATE

#### Constant

`OpCodeType('8f')`

***

### OP\_NIP

> `readonly` `static` **OP\_NIP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:331](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L331)

Removes the second-to-top stack item.

#### Name

OP_NIP

#### Constant

`OpCodeType('77')`

***

### OP\_NOP

> `readonly` `static` **OP\_NOP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:159](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L159)

Does nothing.

#### Name

OP_NOP

#### Constant

`OpCodeType('61')`

***

### OP\_NOP1

> `readonly` `static` **OP\_NOP1**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:680](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L680)

No operation. The word is ignored.

#### Name

OP_NOP1

#### Constant

`OpCodeType('b0')`

***

### OP\_NOP10

> `readonly` `static` **OP\_NOP10**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:734](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L734)

No operation. The word is ignored.

#### Name

OP_NOP10

#### Constant

`OpCodeType('b9')`

***

### OP\_NOP2

> `readonly` `static` **OP\_NOP2**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:686](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L686)

No operation. The word is ignored. (previously OP_CHECKLOCKTIMEVERIFY)

#### Name

OP_NOP2

#### Constant

`OpCodeType('b1')`

***

### OP\_NOP3

> `readonly` `static` **OP\_NOP3**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:692](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L692)

No operation. The word is ignored. (previously OP_CHECKSEQUENCEVERIFY)

#### Name

OP_NOP3

#### Constant

`OpCodeType('b2')`

***

### OP\_NOP4

> `readonly` `static` **OP\_NOP4**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:698](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L698)

No operation. The word is ignored.

#### Name

OP_NOP4

#### Constant

`OpCodeType('b3')`

***

### OP\_NOP5

> `readonly` `static` **OP\_NOP5**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:704](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L704)

No operation. The word is ignored.

#### Name

OP_NOP5

#### Constant

`OpCodeType('b4')`

***

### OP\_NOP6

> `readonly` `static` **OP\_NOP6**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:710](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L710)

No operation. The word is ignored.

#### Name

OP_NOP6

#### Constant

`OpCodeType('b5')`

***

### OP\_NOP7

> `readonly` `static` **OP\_NOP7**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:716](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L716)

No operation. The word is ignored.

#### Name

OP_NOP7

#### Constant

`OpCodeType('b6')`

***

### OP\_NOP8

> `readonly` `static` **OP\_NOP8**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:722](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L722)

No operation. The word is ignored.

#### Name

OP_NOP8

#### Constant

`OpCodeType('b7')`

***

### OP\_NOP9

> `readonly` `static` **OP\_NOP9**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:728](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L728)

No operation. The word is ignored.

#### Name

OP_NOP9

#### Constant

`OpCodeType('b8')`

***

### OP\_NOT

> `readonly` `static` **OP\_NOT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:490](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L490)

If the input is 0 or 1, it is flipped. Otherwise the output will be 0.

#### Name

OP_NOT

#### Constant

`OpCodeType('91')`

***

### ~~OP\_NOTIF~~

> `readonly` `static` **OP\_NOTIF**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:203](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L203)

If the top stack value is FALSE, statement 1 is executed.
If the top stack value is TRUE and ELSE is used, statement 2 is executed. If ELSE is NOT used, the script jumps to ENDIF.
The top stack value is removed.

#### Deprecated

#### Name

OP_NOTIF

#### Constant

`OpCodeType('64')`

#### Example

```ts
`[expression] NOTIF
 [statement 1]
ENDIF`
OR
`[expression] NOTIF
 [statement 1]
ELSE
 [statement 2]
ENDIF`
```

***

### OP\_NUM2BIN

> `readonly` `static` **OP\_NUM2BIN**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:386](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L386)

Converts numeric value a into byte sequence of length b.

#### Name

OP_NUM2BIN

#### Constant

`OpCodeType('80')`

***

### OP\_NUMEQUAL

> `readonly` `static` **OP\_NUMEQUAL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:556](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L556)

Returns 1 if the numbers are equal, 0 otherwise.

#### Name

OP_NUMEQUAL

#### Constant

`OpCodeType('9c')`

***

### OP\_NUMEQUALVERIFY

> `readonly` `static` **OP\_NUMEQUALVERIFY**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:562](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L562)

Same as `OP_NUMEQUAL`, but runs `OP_VERIFY` afterward.

#### Name

OP_NUMEQUALVERIFY

#### Constant

`OpCodeType('9d')`

***

### OP\_NUMNOTEQUAL

> `readonly` `static` **OP\_NUMNOTEQUAL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:568](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L568)

Returns 1 if the numbers are not equal, 0 otherwise.

#### Name

OP_NUMNOTEQUAL

#### Constant

`OpCodeType('9e')`

***

### OP\_OR

> `readonly` `static` **OP\_OR**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:417](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L417)

Boolean or between each bit in the inputs.

#### Name

OP_OR

#### Constant

`OpCodeType('85')`

***

### OP\_OVER

> `readonly` `static` **OP\_OVER**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:337](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L337)

Copies the second-to-top stack item to the top.

#### Name

OP_OVER

#### Constant

`OpCodeType('78')`

***

### OP\_PICK

> `readonly` `static` **OP\_PICK**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:343](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L343)

The item `n` back in the stack is copied to the top.

#### Name

OP_PICK

#### Constant

`OpCodeType('79')`

***

### OP\_PUBKEY

> `readonly` `static` **OP\_PUBKEY**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:751](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L751)

Represents a public key compatible with OP_CHECKSIG. The word is used internally for assisting with transaction matching. They are invalid if used in actual scripts.

#### Name

OP_PUBKEY

#### Constant

`OpCodeType('fe')`

***

### OP\_PUBKEYHASH

> `readonly` `static` **OP\_PUBKEYHASH**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:745](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L745)

Represents a public key hashed with OP_HASH160. The word is used internally for assisting with transaction matching. They are invalid if used in actual scripts.

#### Name

OP_PUBKEYHASH

#### Constant

`OpCodeType('fd')`

***

### OP\_PUSHDATA1

> `readonly` `static` **OP\_PUSHDATA1**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:26](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L26)

The next byte contains the number of bytes to be pushed onto the stack.

#### Name

OP_PUSHDATA1

#### Constant

`OpCodeType('4c')`

***

### OP\_PUSHDATA2

> `readonly` `static` **OP\_PUSHDATA2**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:32](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L32)

The next two bytes contain the number of bytes to be pushed onto the stack in little endian order.

#### Name

OP_PUSHDATA2

#### Constant

`OpCodeType('4d')`

***

### OP\_PUSHDATA4

> `readonly` `static` **OP\_PUSHDATA4**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:38](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L38)

The next four bytes contain the number of bytes to be pushed onto the stack in little endian order.

#### Name

OP_PUSHDATA4

#### Constant

`OpCodeType('4e')`

***

### OP\_RESERVED

> `readonly` `static` **OP\_RESERVED**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:50](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L50)

Transaction is invalid unless occuring in an unexecuted OP_IF branch

#### Name

OP_RESERVED

#### Constant

`OpCodeType('50')`

***

### OP\_RESERVED1

> `readonly` `static` **OP\_RESERVED1**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:441](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L441)

Any opcode not assigned is also reserved. Using an unassigned opcode makes the transaction invalid.

#### Name

OP_RESERVED1

#### Constant

`OpCodeType('89')`

***

### OP\_RESERVED2

> `readonly` `static` **OP\_RESERVED2**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:447](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L447)

Any opcode not assigned is also reserved. Using an unassigned opcode makes the transaction invalid.

#### Name

OP_RESERVED2

#### Constant

`OpCodeType('8a')`

***

### OP\_RETURN

> `readonly` `static` **OP\_RETURN**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:252](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L252)

OP_RETURN can also be used to create "False Return" outputs with a scriptPubKey consisting of `OP_FALSE` `OP_RETURN` followed by data. Such outputs are provably unspendable and should be given a value of zero Satoshis. These outputs can be pruned from storage in the UTXO set, reducing its size. Currently the BitcoinSV network supports multiple FALSE RETURN outputs in a given transaction with each one capable of holding up to 100kB of data. After the Genesis upgrade in 2020 miners will be free to mine transactions containing FALSE RETURN outputs of any size.

#### Name

OP_RETURN

#### Constant

`OpCodeType('6a')`

***

### OP\_RIPEMD160

> `readonly` `static` **OP\_RIPEMD160**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:617](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L617)

The input is hashed using RIPEMD-160.

#### Name

OP_RIPEMD160

#### Constant

`OpCodeType('a6')`

***

### OP\_ROLL

> `readonly` `static` **OP\_ROLL**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:349](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L349)

The item `n` back in the stack is moved to the top.

#### Name

OP_ROLL

#### Constant

`OpCodeType('7a')`

***

### OP\_ROT

> `readonly` `static` **OP\_ROT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:355](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L355)

The top three items on the stack are rotated to the left.

#### Name

OP_ROT

#### Constant

`OpCodeType('7b')`

***

### OP\_RSHIFT

> `readonly` `static` **OP\_RSHIFT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:538](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L538)

Logical right shift b bits. Sign data is discarded

#### Name

OP_RSHIFT

#### Constant

`OpCodeType('99')`

***

### OP\_SHA1

> `readonly` `static` **OP\_SHA1**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:623](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L623)

The input is hashed using SHA-1.

#### Name

OP_SHA1

#### Constant

`OpCodeType('a7')`

***

### OP\_SHA256

> `readonly` `static` **OP\_SHA256**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:629](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L629)

The input is hashed using SHA-256.

#### Name

OP_SHA256

#### Constant

`OpCodeType('a8')`

***

### OP\_SIZE

> `readonly` `static` **OP\_SIZE**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:398](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L398)

Pushes the string length of the top element of the stack (without popping it).

#### Name

OP_SIZE

#### Constant

`OpCodeType('82')`

***

### OP\_SPLIT

> `readonly` `static` **OP\_SPLIT**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:380](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L380)

Splits byte sequence x at position n.

#### Name

OP_SPLIT

#### Constant

`OpCodeType('7f')`

***

### OP\_SUB

> `readonly` `static` **OP\_SUB**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:508](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L508)

b is subtracted from a.

#### Name

OP_SUB

#### Constant

`OpCodeType('94')`

***

### OP\_SWAP

> `readonly` `static` **OP\_SWAP**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:361](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L361)

The top two items on the stack are swapped.

#### Name

OP_SWAP

#### Constant

`OpCodeType('7c')`

***

### OP\_TOALTSTACK

> `readonly` `static` **OP\_TOALTSTACK**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:259](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L259)

Puts the input onto the top of the alt stack. Removes it from the main stack.

#### Name

OP_TOALTSTACK

#### Constant

`OpCodeType('6b')`

***

### OP\_TRUE

> `readonly` `static` **OP\_TRUE**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:62](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L62)

The number 1 is pushed onto the stack.

#### Name

OP_TRUE

#### Constant

`OpCodeType('51')`

***

### OP\_TUCK

> `readonly` `static` **OP\_TUCK**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:367](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L367)

The item at the top of the stack is copied and inserted before the second-to-top item.

#### Name

OP_TUCK

#### Constant

`OpCodeType('7d')`

***

### ~~OP\_VER~~

> `readonly` `static` **OP\_VER**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:166](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L166)

Puts the version of the protocol under which this transaction will be evaluated onto the stack.

#### Deprecated

DISABLED

#### Name

OP_VER

#### Constant

`OpCodeType('62')`

***

### ~~OP\_VERIF~~

> `readonly` `static` **OP\_VERIF**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:209](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L209)

#### Name

OP_VERIF

#### Constant

`OpCodeType('65')`

#### Deprecated

DISABLED

***

### OP\_VERIFY

> `readonly` `static` **OP\_VERIFY**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:246](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L246)

Marks transaction as invalid if top stack value is not true. The top stack value is removed.

#### Name

OP_VERIFY

#### Constant

`OpCodeType('69')`

***

### ~~OP\_VERNOTIF~~

> `readonly` `static` **OP\_VERNOTIF**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:215](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L215)

#### Name

OP_VERNOTIF

#### Constant

`OpCodeType('66')`

#### Deprecated

DISABLED

***

### OP\_WITHIN

> `readonly` `static` **OP\_WITHIN**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:610](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L610)

Returns 1 if x is within the specified range (left-inclusive), 0 otherwise.

#### Name

OP_WITHIN

#### Constant

`OpCodeType('a5')`

***

### OP\_XOR

> `readonly` `static` **OP\_XOR**: [`OpCodeType`](../type-aliases/OpCodeType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts:423](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/opCode.ts#L423)

Boolean exclusive or between each bit in the inputs.

#### Name

OP_XOR

#### Constant

`OpCodeType('86')`
