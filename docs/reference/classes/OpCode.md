[scrypt-ts](../README.md) / OpCode

# Class: OpCode

Opcodes used in [Bitcoin Script][https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script](https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script)

## Table of contents

### Constructors

- [constructor](OpCode.md#constructor)

### Properties

- [OP\_0](OpCode.md#op_0)
- [OP\_0NOTEQUAL](OpCode.md#op_0notequal)
- [OP\_1](OpCode.md#op_1)
- [OP\_10](OpCode.md#op_10)
- [OP\_11](OpCode.md#op_11)
- [OP\_12](OpCode.md#op_12)
- [OP\_13](OpCode.md#op_13)
- [OP\_14](OpCode.md#op_14)
- [OP\_15](OpCode.md#op_15)
- [OP\_16](OpCode.md#op_16)
- [OP\_1ADD](OpCode.md#op_1add)
- [OP\_1NEGATE](OpCode.md#op_1negate)
- [OP\_1SUB](OpCode.md#op_1sub)
- [OP\_2](OpCode.md#op_2)
- [OP\_2DIV](OpCode.md#op_2div)
- [OP\_2DROP](OpCode.md#op_2drop)
- [OP\_2DUP](OpCode.md#op_2dup)
- [OP\_2MUL](OpCode.md#op_2mul)
- [OP\_2OVER](OpCode.md#op_2over)
- [OP\_2ROT](OpCode.md#op_2rot)
- [OP\_2SWAP](OpCode.md#op_2swap)
- [OP\_3](OpCode.md#op_3)
- [OP\_3DUP](OpCode.md#op_3dup)
- [OP\_4](OpCode.md#op_4)
- [OP\_5](OpCode.md#op_5)
- [OP\_6](OpCode.md#op_6)
- [OP\_7](OpCode.md#op_7)
- [OP\_8](OpCode.md#op_8)
- [OP\_9](OpCode.md#op_9)
- [OP\_ABS](OpCode.md#op_abs)
- [OP\_ADD](OpCode.md#op_add)
- [OP\_AND](OpCode.md#op_and)
- [OP\_BIN2NUM](OpCode.md#op_bin2num)
- [OP\_BOOLAND](OpCode.md#op_booland)
- [OP\_BOOLOR](OpCode.md#op_boolor)
- [OP\_CAT](OpCode.md#op_cat)
- [OP\_CHECKMULTISIG](OpCode.md#op_checkmultisig)
- [OP\_CHECKMULTISIGVERIFY](OpCode.md#op_checkmultisigverify)
- [OP\_CHECKSIG](OpCode.md#op_checksig)
- [OP\_CHECKSIGVERIFY](OpCode.md#op_checksigverify)
- [OP\_CODESEPARATOR](OpCode.md#op_codeseparator)
- [OP\_DEPTH](OpCode.md#op_depth)
- [OP\_DIV](OpCode.md#op_div)
- [OP\_DROP](OpCode.md#op_drop)
- [OP\_DUP](OpCode.md#op_dup)
- [OP\_ELSE](OpCode.md#op_else)
- [OP\_ENDIF](OpCode.md#op_endif)
- [OP\_EQUAL](OpCode.md#op_equal)
- [OP\_EQUALVERIFY](OpCode.md#op_equalverify)
- [OP\_FALSE](OpCode.md#op_false)
- [OP\_FROMALTSTACK](OpCode.md#op_fromaltstack)
- [OP\_GREATERTHAN](OpCode.md#op_greaterthan)
- [OP\_GREATERTHANOREQUAL](OpCode.md#op_greaterthanorequal)
- [OP\_HASH160](OpCode.md#op_hash160)
- [OP\_HASH256](OpCode.md#op_hash256)
- [OP\_IF](OpCode.md#op_if)
- [OP\_IFDUP](OpCode.md#op_ifdup)
- [OP\_INVALIDOPCODE](OpCode.md#op_invalidopcode)
- [OP\_INVERT](OpCode.md#op_invert)
- [OP\_LESSTHAN](OpCode.md#op_lessthan)
- [OP\_LESSTHANOREQUAL](OpCode.md#op_lessthanorequal)
- [OP\_LSHIFT](OpCode.md#op_lshift)
- [OP\_MAX](OpCode.md#op_max)
- [OP\_MIN](OpCode.md#op_min)
- [OP\_MOD](OpCode.md#op_mod)
- [OP\_MUL](OpCode.md#op_mul)
- [OP\_NEGATE](OpCode.md#op_negate)
- [OP\_NIP](OpCode.md#op_nip)
- [OP\_NOP](OpCode.md#op_nop)
- [OP\_NOP1](OpCode.md#op_nop1)
- [OP\_NOP10](OpCode.md#op_nop10)
- [OP\_NOP2](OpCode.md#op_nop2)
- [OP\_NOP3](OpCode.md#op_nop3)
- [OP\_NOP4](OpCode.md#op_nop4)
- [OP\_NOP5](OpCode.md#op_nop5)
- [OP\_NOP6](OpCode.md#op_nop6)
- [OP\_NOP7](OpCode.md#op_nop7)
- [OP\_NOP8](OpCode.md#op_nop8)
- [OP\_NOP9](OpCode.md#op_nop9)
- [OP\_NOT](OpCode.md#op_not)
- [OP\_NOTIF](OpCode.md#op_notif)
- [OP\_NUM2BIN](OpCode.md#op_num2bin)
- [OP\_NUMEQUAL](OpCode.md#op_numequal)
- [OP\_NUMEQUALVERIFY](OpCode.md#op_numequalverify)
- [OP\_NUMNOTEQUAL](OpCode.md#op_numnotequal)
- [OP\_OR](OpCode.md#op_or)
- [OP\_OVER](OpCode.md#op_over)
- [OP\_PICK](OpCode.md#op_pick)
- [OP\_PUBKEY](OpCode.md#op_pubkey)
- [OP\_PUBKEYHASH](OpCode.md#op_pubkeyhash)
- [OP\_PUSHDATA1](OpCode.md#op_pushdata1)
- [OP\_PUSHDATA2](OpCode.md#op_pushdata2)
- [OP\_PUSHDATA4](OpCode.md#op_pushdata4)
- [OP\_RESERVED](OpCode.md#op_reserved)
- [OP\_RESERVED1](OpCode.md#op_reserved1)
- [OP\_RESERVED2](OpCode.md#op_reserved2)
- [OP\_RETURN](OpCode.md#op_return)
- [OP\_RIPEMD160](OpCode.md#op_ripemd160)
- [OP\_ROLL](OpCode.md#op_roll)
- [OP\_ROT](OpCode.md#op_rot)
- [OP\_RSHIFT](OpCode.md#op_rshift)
- [OP\_SHA1](OpCode.md#op_sha1)
- [OP\_SHA256](OpCode.md#op_sha256)
- [OP\_SIZE](OpCode.md#op_size)
- [OP\_SPLIT](OpCode.md#op_split)
- [OP\_SUB](OpCode.md#op_sub)
- [OP\_SWAP](OpCode.md#op_swap)
- [OP\_TOALTSTACK](OpCode.md#op_toaltstack)
- [OP\_TRUE](OpCode.md#op_true)
- [OP\_TUCK](OpCode.md#op_tuck)
- [OP\_VER](OpCode.md#op_ver)
- [OP\_VERIF](OpCode.md#op_verif)
- [OP\_VERIFY](OpCode.md#op_verify)
- [OP\_VERNOTIF](OpCode.md#op_vernotif)
- [OP\_WITHIN](OpCode.md#op_within)
- [OP\_XOR](OpCode.md#op_xor)

## Constructors

### constructor

• **new OpCode**()

## Properties

### OP\_0

▪ `Static` `Readonly` **OP\_0**: [`OpCodeType`](../README.md#opcodetype)

An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.)

**`Name`**

OP_0

**`Constant`**

`OpCodeType('00')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:159

___

### OP\_0NOTEQUAL

▪ `Static` `Readonly` **OP\_0NOTEQUAL**: [`OpCodeType`](../README.md#opcodetype)

Returns 0 if the input is 0. 1 otherwise.

**`Name`**

OP_0NOTEQUAL

**`Constant`**

`OpCodeType('92')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:637

___

### OP\_1

▪ `Static` `Readonly` **OP\_1**: [`OpCodeType`](../README.md#opcodetype)

The number 1 is pushed onto the stack.

**`Name`**

OP_1

**`Constant`**

`OpCodeType('51')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:201

___

### OP\_10

▪ `Static` `Readonly` **OP\_10**: [`OpCodeType`](../README.md#opcodetype)

The number 10 is pushed onto the stack.

**`Name`**

OP_10

**`Constant`**

`OpCodeType('5a')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:261

___

### OP\_11

▪ `Static` `Readonly` **OP\_11**: [`OpCodeType`](../README.md#opcodetype)

The number 11 is pushed onto the stack.

**`Name`**

OP_11

**`Constant`**

`OpCodeType('5b')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:267

___

### OP\_12

▪ `Static` `Readonly` **OP\_12**: [`OpCodeType`](../README.md#opcodetype)

The number 12 is pushed onto the stack.

**`Name`**

OP_12

**`Constant`**

`OpCodeType('5c')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:273

___

### OP\_13

▪ `Static` `Readonly` **OP\_13**: [`OpCodeType`](../README.md#opcodetype)

The number 13 is pushed onto the stack.

**`Name`**

OP_13

**`Constant`**

`OpCodeType('5d')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:279

___

### OP\_14

▪ `Static` `Readonly` **OP\_14**: [`OpCodeType`](../README.md#opcodetype)

The number 14 is pushed onto the stack.

**`Name`**

OP_14

**`Constant`**

`OpCodeType('5e')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:285

___

### OP\_15

▪ `Static` `Readonly` **OP\_15**: [`OpCodeType`](../README.md#opcodetype)

The number 15 is pushed onto the stack.

**`Name`**

OP_15

**`Constant`**

`OpCodeType('5f')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:291

___

### OP\_16

▪ `Static` `Readonly` **OP\_16**: [`OpCodeType`](../README.md#opcodetype)

The number 16 is pushed onto the stack.

**`Name`**

OP_16

**`Constant`**

`OpCodeType('60')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:297

___

### OP\_1ADD

▪ `Static` `Readonly` **OP\_1ADD**: [`OpCodeType`](../README.md#opcodetype)

1 is added to the input.

**`Name`**

OP_1ADD

**`Constant`**

`OpCodeType('8b')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:595

___

### OP\_1NEGATE

▪ `Static` `Readonly` **OP\_1NEGATE**: [`OpCodeType`](../README.md#opcodetype)

The number -1 is pushed onto the stack.

**`Name`**

OP_1NEGATE

**`Constant`**

`OpCodeType('4f')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:189

___

### OP\_1SUB

▪ `Static` `Readonly` **OP\_1SUB**: [`OpCodeType`](../README.md#opcodetype)

1 is subtracted from the input.

**`Name`**

OP_1SUB

**`Constant`**

`OpCodeType('8c')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:601

___

### OP\_2

▪ `Static` `Readonly` **OP\_2**: [`OpCodeType`](../README.md#opcodetype)

The number 2 is pushed onto the stack.

**`Name`**

OP_2

**`Constant`**

`OpCodeType('52')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:213

___

### OP\_2DIV

▪ `Static` `Readonly` **OP\_2DIV**: [`OpCodeType`](../README.md#opcodetype)

The input is divided by 2. **DISABLED** now. (This opcode is scheduled to be re-enabled in the Chronicle update)

**`Name`**

OP_2DIV

**`Constant`**

`OpCodeType('8e')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:613

___

### OP\_2DROP

▪ `Static` `Readonly` **OP\_2DROP**: [`OpCodeType`](../README.md#opcodetype)

Removes the top two stack items.

**`Name`**

OP_2DROP

**`Constant`**

`OpCodeType('6d')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:415

___

### OP\_2DUP

▪ `Static` `Readonly` **OP\_2DUP**: [`OpCodeType`](../README.md#opcodetype)

Duplicates the top two stack items.

**`Name`**

OP_2DUP

**`Constant`**

`OpCodeType('6e')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:421

___

### OP\_2MUL

▪ `Static` `Readonly` **OP\_2MUL**: [`OpCodeType`](../README.md#opcodetype)

The input is multiplied by 2. **DISABLED** now. (This opcode is scheduled to be re-enabled in the Chronicle update)

**`Name`**

OP_2MUL

**`Constant`**

`OpCodeType('8d')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:607

___

### OP\_2OVER

▪ `Static` `Readonly` **OP\_2OVER**: [`OpCodeType`](../README.md#opcodetype)

Copies the pair of items two spaces back in the stack to the front.

**`Name`**

OP_2OVER

**`Constant`**

`OpCodeType('70')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:433

___

### OP\_2ROT

▪ `Static` `Readonly` **OP\_2ROT**: [`OpCodeType`](../README.md#opcodetype)

The fifth and sixth items back are moved to the top of the stack.

**`Name`**

OP_2ROT

**`Constant`**

`OpCodeType('71')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:439

___

### OP\_2SWAP

▪ `Static` `Readonly` **OP\_2SWAP**: [`OpCodeType`](../README.md#opcodetype)

Swaps the top two pairs of items.

**`Name`**

OP_2SWAP

**`Constant`**

`OpCodeType('72')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:445

___

### OP\_3

▪ `Static` `Readonly` **OP\_3**: [`OpCodeType`](../README.md#opcodetype)

The number 3 is pushed onto the stack.

**`Name`**

OP_3

**`Constant`**

`OpCodeType('53')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:219

___

### OP\_3DUP

▪ `Static` `Readonly` **OP\_3DUP**: [`OpCodeType`](../README.md#opcodetype)

Duplicates the top three stack items.

**`Name`**

OP_3DUP

**`Constant`**

`OpCodeType('6f')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:427

___

### OP\_4

▪ `Static` `Readonly` **OP\_4**: [`OpCodeType`](../README.md#opcodetype)

The number 4 is pushed onto the stack.

**`Name`**

OP_4

**`Constant`**

`OpCodeType('54')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:225

___

### OP\_5

▪ `Static` `Readonly` **OP\_5**: [`OpCodeType`](../README.md#opcodetype)

The number 5 is pushed onto the stack.

**`Name`**

OP_5

**`Constant`**

`OpCodeType('55')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:231

___

### OP\_6

▪ `Static` `Readonly` **OP\_6**: [`OpCodeType`](../README.md#opcodetype)

The number 6 is pushed onto the stack.

**`Name`**

OP_6

**`Constant`**

`OpCodeType('56')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:237

___

### OP\_7

▪ `Static` `Readonly` **OP\_7**: [`OpCodeType`](../README.md#opcodetype)

The number 7 is pushed onto the stack.

**`Name`**

OP_7

**`Constant`**

`OpCodeType('57')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:243

___

### OP\_8

▪ `Static` `Readonly` **OP\_8**: [`OpCodeType`](../README.md#opcodetype)

The number 8 is pushed onto the stack.

**`Name`**

OP_8

**`Constant`**

`OpCodeType('58')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:249

___

### OP\_9

▪ `Static` `Readonly` **OP\_9**: [`OpCodeType`](../README.md#opcodetype)

The number 9 is pushed onto the stack.

**`Name`**

OP_9

**`Constant`**

`OpCodeType('59')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:255

___

### OP\_ABS

▪ `Static` `Readonly` **OP\_ABS**: [`OpCodeType`](../README.md#opcodetype)

The input is made positive.

**`Name`**

OP_ABS

**`Constant`**

`OpCodeType('90')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:625

___

### OP\_ADD

▪ `Static` `Readonly` **OP\_ADD**: [`OpCodeType`](../README.md#opcodetype)

a is added to b.

**`Name`**

OP_ADD

**`Constant`**

`OpCodeType('93')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:643

___

### OP\_AND

▪ `Static` `Readonly` **OP\_AND**: [`OpCodeType`](../README.md#opcodetype)

Boolean and between each bit in the inputs.

**`Name`**

OP_AND

**`Constant`**

`OpCodeType('84')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:553

___

### OP\_BIN2NUM

▪ `Static` `Readonly` **OP\_BIN2NUM**: [`OpCodeType`](../README.md#opcodetype)

Converts byte sequence x into a numeric value.

**`Name`**

OP_BIN2NUM

**`Constant`**

`OpCodeType('81')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:535

___

### OP\_BOOLAND

▪ `Static` `Readonly` **OP\_BOOLAND**: [`OpCodeType`](../README.md#opcodetype)

If both a and b are not 0, the output is 1. Otherwise 0.

**`Name`**

OP_BOOLAND

**`Constant`**

`OpCodeType('9a')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:685

___

### OP\_BOOLOR

▪ `Static` `Readonly` **OP\_BOOLOR**: [`OpCodeType`](../README.md#opcodetype)

If a or b is not 0, the output is 1. Otherwise 0.

**`Name`**

OP_BOOLOR

**`Constant`**

`OpCodeType('9b')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:691

___

### OP\_CAT

▪ `Static` `Readonly` **OP\_CAT**: [`OpCodeType`](../README.md#opcodetype)

Concatenates two strings.

**`Name`**

OP_CAT

**`Constant`**

`OpCodeType('7e')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:517

___

### OP\_CHECKMULTISIG

▪ `Static` `Readonly` **OP\_CHECKMULTISIG**: [`OpCodeType`](../README.md#opcodetype)

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, an extra unused value (x) is removed from the stack. Script spenders must account for this by adding a junk value (typically zero) to the stack.

**`Name`**

OP_CHECKMULTISIG

**`Constant`**

`OpCodeType('ae')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:807

___

### OP\_CHECKMULTISIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKMULTISIGVERIFY**: [`OpCodeType`](../README.md#opcodetype)

Same as `OP_CHECKMULTISIG`, but `OP_VERIFY` is executed afterward.

**`Name`**

OP_CHECKMULTISIGVERIFY

**`Constant`**

`OpCodeType('af')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:813

___

### OP\_CHECKSIG

▪ `Static` `Readonly` **OP\_CHECKSIG**: [`OpCodeType`](../README.md#opcodetype)

The entire transaction's outputs, inputs, and script (from the most recently-executed [OP_CODESEPARATOR][https://wiki.bitcoinsv.io/index.php/OP_CODESEPARATOR](https://wiki.bitcoinsv.io/index.php/OP_CODESEPARATOR) to the end) are hashed.
The signature used by [OP_CHECKSIG][https://wiki.bitcoinsv.io/index.php/OP_CHECKSIG](https://wiki.bitcoinsv.io/index.php/OP_CHECKSIG) must be a valid signature for this hash and public key. If it is, 1 is returned, 0 otherwise.

**`Name`**

OP_CHECKSIG

**`Constant`**

`OpCodeType('ac')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:795

___

### OP\_CHECKSIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKSIGVERIFY**: [`OpCodeType`](../README.md#opcodetype)

Same as `OP_CHECKSIG`, but `OP_VERIFY` is executed afterward.

**`Name`**

OP_CHECKSIGVERIFY

**`Constant`**

`OpCodeType('ad')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:801

___

### OP\_CODESEPARATOR

▪ `Static` `Readonly` **OP\_CODESEPARATOR**: [`OpCodeType`](../README.md#opcodetype)

All of the signature checking words will only match signatures to the data after the most recently-executed
[OP_CODESEPARATOR][https://wiki.bitcoinsv.io/index.php/OP_CODESEPARATOR](https://wiki.bitcoinsv.io/index.php/OP_CODESEPARATOR).

**`Name`**

OP_CODESEPARATOR

**`Constant`**

`OpCodeType('ab')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:788

___

### OP\_DEPTH

▪ `Static` `Readonly` **OP\_DEPTH**: [`OpCodeType`](../README.md#opcodetype)

Counts the number of stack items onto the stack and places the value on the top

**`Name`**

OP_DEPTH

**`Constant`**

`OpCodeType('74')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:457

___

### OP\_DIV

▪ `Static` `Readonly` **OP\_DIV**: [`OpCodeType`](../README.md#opcodetype)

a is divided by b.

**`Name`**

OP_DIV

**`Constant`**

`OpCodeType('96')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:661

___

### OP\_DROP

▪ `Static` `Readonly` **OP\_DROP**: [`OpCodeType`](../README.md#opcodetype)

Removes the top stack item.

**`Name`**

OP_DROP

**`Constant`**

`OpCodeType('75')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:463

___

### OP\_DUP

▪ `Static` `Readonly` **OP\_DUP**: [`OpCodeType`](../README.md#opcodetype)

Duplicates the top stack item.

**`Name`**

OP_DUP

**`Constant`**

`OpCodeType('76')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:469

___

### OP\_ELSE

▪ `Static` `Readonly` **OP\_ELSE**: [`OpCodeType`](../README.md#opcodetype)

If the preceding IF or NOTIF check was not valid then statement 2 is executed.

**`Name`**

OP_ELSE

**`Constant`**

`OpCodeType('67')`

**`Example`**

`[expression] IF
 [statement 1]
ELSE
 [statement 2]
ENDIF`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:372

___

### OP\_ENDIF

▪ `Static` `Readonly` **OP\_ENDIF**: [`OpCodeType`](../README.md#opcodetype)

Ends an if/else block. All blocks must end, or the transaction is invalid.
An OP_ENDIF without a prior matching OP_IF or OP_NOTIF is also invalid.

**`Name`**

OP_ENDIF

**`Constant`**

`OpCodeType('68')`

**`Example`**

`[expression] IF
 [statement 1]
ELSE
 [statement 2]
ENDIF`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:385

___

### OP\_EQUAL

▪ `Static` `Readonly` **OP\_EQUAL**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if the inputs are exactly equal, 0 otherwise.

**`Name`**

OP_EQUAL

**`Constant`**

`OpCodeType('87')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:571

___

### OP\_EQUALVERIFY

▪ `Static` `Readonly` **OP\_EQUALVERIFY**: [`OpCodeType`](../README.md#opcodetype)

Same as `OP_EQUAL`, but runs `OP_VERIFY` afterward.

**`Name`**

OP_EQUALVERIFY

**`Constant`**

`OpCodeType('88')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:577

___

### OP\_FALSE

▪ `Static` `Readonly` **OP\_FALSE**: [`OpCodeType`](../README.md#opcodetype)

An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.)

**`Name`**

OP_FALSE

**`Constant`**

`OpCodeType('00')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:165

___

### OP\_FROMALTSTACK

▪ `Static` `Readonly` **OP\_FROMALTSTACK**: [`OpCodeType`](../README.md#opcodetype)

Puts the input onto the top of the main stack. Removes it from the alt stack.

**`Name`**

OP_FROMALTSTACK

**`Constant`**

`OpCodeType('6c')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:409

___

### OP\_GREATERTHAN

▪ `Static` `Readonly` **OP\_GREATERTHAN**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if a is greater than b, 0 otherwise.

**`Name`**

OP_GREATERTHAN

**`Constant`**

`OpCodeType('a0')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:721

___

### OP\_GREATERTHANOREQUAL

▪ `Static` `Readonly` **OP\_GREATERTHANOREQUAL**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if a is greater than or equal to b, 0 otherwise.

**`Name`**

OP_GREATERTHANOREQUAL

**`Constant`**

`OpCodeType('a2')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:733

___

### OP\_HASH160

▪ `Static` `Readonly` **OP\_HASH160**: [`OpCodeType`](../README.md#opcodetype)

The input is hashed twice: first with SHA-256 and then with RIPEMD-160.

**`Name`**

OP_HASH160

**`Constant`**

`OpCodeType('a9')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:775

___

### OP\_HASH256

▪ `Static` `Readonly` **OP\_HASH256**: [`OpCodeType`](../README.md#opcodetype)

The input is hashed two times with SHA-256.

**`Name`**

OP_HASH256

**`Constant`**

`OpCodeType('aa')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:781

___

### OP\_IF

▪ `Static` `Readonly` **OP\_IF**: [`OpCodeType`](../README.md#opcodetype)

If the top stack value is TRUE, statement 1 is executed.
If the top stack value is FALSE and ELSE is used, statement 2 is executed.
If ELSE is NOT used, the script jumps to ENDIF. The top stack value is removed.

**`Deprecated`**

**`Name`**

OP_IF

**`Constant`**

`OpCodeType('63')`

**`Example`**

`[expression] IF
 [statement 1]
ENDIF`
OR
`[expression] IF
 [statement 1]
ELSE
 [statement 2]
ENDIF`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:329

___

### OP\_IFDUP

▪ `Static` `Readonly` **OP\_IFDUP**: [`OpCodeType`](../README.md#opcodetype)

If the top stack value is not 0, duplicate it.

**`Name`**

OP_IFDUP

**`Constant`**

`OpCodeType('73')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:451

___

### OP\_INVALIDOPCODE

▪ `Static` `Readonly` **OP\_INVALIDOPCODE**: [`OpCodeType`](../README.md#opcodetype)

Matches any opcode that is not yet assigned. The word is used internally for assisting with transaction matching. They are invalid if used in actual scripts.

**`Name`**

OP_PUBKEY

**`Constant`**

`OpCodeType('ff')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:891

___

### OP\_INVERT

▪ `Static` `Readonly` **OP\_INVERT**: [`OpCodeType`](../README.md#opcodetype)

Flips all of the bits in the input.

**`Name`**

OP_INVERT

**`Constant`**

`OpCodeType('83')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:547

___

### OP\_LESSTHAN

▪ `Static` `Readonly` **OP\_LESSTHAN**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if a is less than b, 0 otherwise.

**`Name`**

OP_LESSTHAN

**`Constant`**

`OpCodeType('9f')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:715

___

### OP\_LESSTHANOREQUAL

▪ `Static` `Readonly` **OP\_LESSTHANOREQUAL**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if a is less than or equal to b, 0 otherwise.

**`Name`**

OP_LESSTHANOREQUAL

**`Constant`**

`OpCodeType('a1')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:727

___

### OP\_LSHIFT

▪ `Static` `Readonly` **OP\_LSHIFT**: [`OpCodeType`](../README.md#opcodetype)

Logical left shift b bits. Sign data is discarded

**`Name`**

OP_LSHIFT

**`Constant`**

`OpCodeType('98')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:673

___

### OP\_MAX

▪ `Static` `Readonly` **OP\_MAX**: [`OpCodeType`](../README.md#opcodetype)

Returns the larger of a and b.

**`Name`**

OP_MAX

**`Constant`**

`OpCodeType('a4')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:745

___

### OP\_MIN

▪ `Static` `Readonly` **OP\_MIN**: [`OpCodeType`](../README.md#opcodetype)

Returns the smaller of a and b.

**`Name`**

OP_MIN

**`Constant`**

`OpCodeType('a3')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:739

___

### OP\_MOD

▪ `Static` `Readonly` **OP\_MOD**: [`OpCodeType`](../README.md#opcodetype)

Returns the remainder after dividing a by b.

**`Name`**

OP_MOD

**`Constant`**

`OpCodeType('97')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:667

___

### OP\_MUL

▪ `Static` `Readonly` **OP\_MUL**: [`OpCodeType`](../README.md#opcodetype)

a is multiplied by b.

**`Name`**

OP_MUL

**`Constant`**

`OpCodeType('95')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:655

___

### OP\_NEGATE

▪ `Static` `Readonly` **OP\_NEGATE**: [`OpCodeType`](../README.md#opcodetype)

The sign of the input is flipped.

**`Name`**

OP_NEGATE

**`Constant`**

`OpCodeType('8f')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:619

___

### OP\_NIP

▪ `Static` `Readonly` **OP\_NIP**: [`OpCodeType`](../README.md#opcodetype)

Removes the second-to-top stack item.

**`Name`**

OP_NIP

**`Constant`**

`OpCodeType('77')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:475

___

### OP\_NOP

▪ `Static` `Readonly` **OP\_NOP**: [`OpCodeType`](../README.md#opcodetype)

Does nothing.

**`Name`**

OP_NOP

**`Constant`**

`OpCodeType('61')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:303

___

### OP\_NOP1

▪ `Static` `Readonly` **OP\_NOP1**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP1

**`Constant`**

`OpCodeType('b0')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:819

___

### OP\_NOP10

▪ `Static` `Readonly` **OP\_NOP10**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP10

**`Constant`**

`OpCodeType('b9')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:873

___

### OP\_NOP2

▪ `Static` `Readonly` **OP\_NOP2**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored. (previously OP_CHECKLOCKTIMEVERIFY)

**`Name`**

OP_NOP2

**`Constant`**

`OpCodeType('b1')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:825

___

### OP\_NOP3

▪ `Static` `Readonly` **OP\_NOP3**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored. (previously OP_CHECKSEQUENCEVERIFY)

**`Name`**

OP_NOP3

**`Constant`**

`OpCodeType('b2')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:831

___

### OP\_NOP4

▪ `Static` `Readonly` **OP\_NOP4**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP4

**`Constant`**

`OpCodeType('b3')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:837

___

### OP\_NOP5

▪ `Static` `Readonly` **OP\_NOP5**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP5

**`Constant`**

`OpCodeType('b4')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:843

___

### OP\_NOP6

▪ `Static` `Readonly` **OP\_NOP6**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP6

**`Constant`**

`OpCodeType('b5')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:849

___

### OP\_NOP7

▪ `Static` `Readonly` **OP\_NOP7**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP7

**`Constant`**

`OpCodeType('b6')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:855

___

### OP\_NOP8

▪ `Static` `Readonly` **OP\_NOP8**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP8

**`Constant`**

`OpCodeType('b7')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:861

___

### OP\_NOP9

▪ `Static` `Readonly` **OP\_NOP9**: [`OpCodeType`](../README.md#opcodetype)

No operation. The word is ignored.

**`Name`**

OP_NOP9

**`Constant`**

`OpCodeType('b8')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:867

___

### OP\_NOT

▪ `Static` `Readonly` **OP\_NOT**: [`OpCodeType`](../README.md#opcodetype)

If the input is 0 or 1, it is flipped. Otherwise the output will be 0.

**`Name`**

OP_NOT

**`Constant`**

`OpCodeType('91')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:631

___

### OP\_NOTIF

▪ `Static` `Readonly` **OP\_NOTIF**: [`OpCodeType`](../README.md#opcodetype)

If the top stack value is FALSE, statement 1 is executed.
If the top stack value is TRUE and ELSE is used, statement 2 is executed. If ELSE is NOT used, the script jumps to ENDIF.
The top stack value is removed.

**`Deprecated`**

**`Name`**

OP_NOTIF

**`Constant`**

`OpCodeType('64')`

**`Example`**

`[expression] NOTIF
 [statement 1]
ENDIF`
OR
`[expression] NOTIF
 [statement 1]
ELSE
 [statement 2]
ENDIF`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:348

___

### OP\_NUM2BIN

▪ `Static` `Readonly` **OP\_NUM2BIN**: [`OpCodeType`](../README.md#opcodetype)

Converts numeric value a into byte sequence of length b.

**`Name`**

OP_NUM2BIN

**`Constant`**

`OpCodeType('80')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:529

___

### OP\_NUMEQUAL

▪ `Static` `Readonly` **OP\_NUMEQUAL**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if the numbers are equal, 0 otherwise.

**`Name`**

OP_NUMEQUAL

**`Constant`**

`OpCodeType('9c')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:697

___

### OP\_NUMEQUALVERIFY

▪ `Static` `Readonly` **OP\_NUMEQUALVERIFY**: [`OpCodeType`](../README.md#opcodetype)

Same as `OP_NUMEQUAL`, but runs `OP_VERIFY` afterward.

**`Name`**

OP_NUMEQUALVERIFY

**`Constant`**

`OpCodeType('9d')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:703

___

### OP\_NUMNOTEQUAL

▪ `Static` `Readonly` **OP\_NUMNOTEQUAL**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if the numbers are not equal, 0 otherwise.

**`Name`**

OP_NUMNOTEQUAL

**`Constant`**

`OpCodeType('9e')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:709

___

### OP\_OR

▪ `Static` `Readonly` **OP\_OR**: [`OpCodeType`](../README.md#opcodetype)

Boolean or between each bit in the inputs.

**`Name`**

OP_OR

**`Constant`**

`OpCodeType('85')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:559

___

### OP\_OVER

▪ `Static` `Readonly` **OP\_OVER**: [`OpCodeType`](../README.md#opcodetype)

Copies the second-to-top stack item to the top.

**`Name`**

OP_OVER

**`Constant`**

`OpCodeType('78')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:481

___

### OP\_PICK

▪ `Static` `Readonly` **OP\_PICK**: [`OpCodeType`](../README.md#opcodetype)

The item `n` back in the stack is copied to the top.

**`Name`**

OP_PICK

**`Constant`**

`OpCodeType('79')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:487

___

### OP\_PUBKEY

▪ `Static` `Readonly` **OP\_PUBKEY**: [`OpCodeType`](../README.md#opcodetype)

Represents a public key compatible with OP_CHECKSIG. The word is used internally for assisting with transaction matching. They are invalid if used in actual scripts.

**`Name`**

OP_PUBKEY

**`Constant`**

`OpCodeType('fe')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:885

___

### OP\_PUBKEYHASH

▪ `Static` `Readonly` **OP\_PUBKEYHASH**: [`OpCodeType`](../README.md#opcodetype)

Represents a public key hashed with OP_HASH160. The word is used internally for assisting with transaction matching. They are invalid if used in actual scripts.

**`Name`**

OP_PUBKEYHASH

**`Constant`**

`OpCodeType('fd')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:879

___

### OP\_PUSHDATA1

▪ `Static` `Readonly` **OP\_PUSHDATA1**: [`OpCodeType`](../README.md#opcodetype)

The next byte contains the number of bytes to be pushed onto the stack.

**`Name`**

OP_PUSHDATA1

**`Constant`**

`OpCodeType('4c')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:171

___

### OP\_PUSHDATA2

▪ `Static` `Readonly` **OP\_PUSHDATA2**: [`OpCodeType`](../README.md#opcodetype)

The next two bytes contain the number of bytes to be pushed onto the stack in little endian order.

**`Name`**

OP_PUSHDATA2

**`Constant`**

`OpCodeType('4d')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:177

___

### OP\_PUSHDATA4

▪ `Static` `Readonly` **OP\_PUSHDATA4**: [`OpCodeType`](../README.md#opcodetype)

The next four bytes contain the number of bytes to be pushed onto the stack in little endian order.

**`Name`**

OP_PUSHDATA4

**`Constant`**

`OpCodeType('4e')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:183

___

### OP\_RESERVED

▪ `Static` `Readonly` **OP\_RESERVED**: [`OpCodeType`](../README.md#opcodetype)

Transaction is invalid unless occuring in an unexecuted OP_IF branch

**`Name`**

OP_RESERVED

**`Constant`**

`OpCodeType('50')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:195

___

### OP\_RESERVED1

▪ `Static` `Readonly` **OP\_RESERVED1**: [`OpCodeType`](../README.md#opcodetype)

Any opcode not assigned is also reserved. Using an unassigned opcode makes the transaction invalid.

**`Name`**

OP_RESERVED1

**`Constant`**

`OpCodeType('89')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:583

___

### OP\_RESERVED2

▪ `Static` `Readonly` **OP\_RESERVED2**: [`OpCodeType`](../README.md#opcodetype)

Any opcode not assigned is also reserved. Using an unassigned opcode makes the transaction invalid.

**`Name`**

OP_RESERVED2

**`Constant`**

`OpCodeType('8a')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:589

___

### OP\_RETURN

▪ `Static` `Readonly` **OP\_RETURN**: [`OpCodeType`](../README.md#opcodetype)

OP_RETURN can also be used to create "False Return" outputs with a scriptPubKey consisting of `OP_FALSE` `OP_RETURN` followed by data. Such outputs are provably unspendable and should be given a value of zero Satoshis. These outputs can be pruned from storage in the UTXO set, reducing its size. Currently the BitcoinSV network supports multiple FALSE RETURN outputs in a given transaction with each one capable of holding up to 100kB of data. After the Genesis upgrade in 2020 miners will be free to mine transactions containing FALSE RETURN outputs of any size.

**`Name`**

OP_RETURN

**`Constant`**

`OpCodeType('6a')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:397

___

### OP\_RIPEMD160

▪ `Static` `Readonly` **OP\_RIPEMD160**: [`OpCodeType`](../README.md#opcodetype)

The input is hashed using RIPEMD-160.

**`Name`**

OP_RIPEMD160

**`Constant`**

`OpCodeType('a6')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:757

___

### OP\_ROLL

▪ `Static` `Readonly` **OP\_ROLL**: [`OpCodeType`](../README.md#opcodetype)

The item `n` back in the stack is moved to the top.

**`Name`**

OP_ROLL

**`Constant`**

`OpCodeType('7a')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:493

___

### OP\_ROT

▪ `Static` `Readonly` **OP\_ROT**: [`OpCodeType`](../README.md#opcodetype)

The top three items on the stack are rotated to the left.

**`Name`**

OP_ROT

**`Constant`**

`OpCodeType('7b')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:499

___

### OP\_RSHIFT

▪ `Static` `Readonly` **OP\_RSHIFT**: [`OpCodeType`](../README.md#opcodetype)

Logical right shift b bits. Sign data is discarded

**`Name`**

OP_RSHIFT

**`Constant`**

`OpCodeType('99')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:679

___

### OP\_SHA1

▪ `Static` `Readonly` **OP\_SHA1**: [`OpCodeType`](../README.md#opcodetype)

The input is hashed using SHA-1.

**`Name`**

OP_SHA1

**`Constant`**

`OpCodeType('a7')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:763

___

### OP\_SHA256

▪ `Static` `Readonly` **OP\_SHA256**: [`OpCodeType`](../README.md#opcodetype)

The input is hashed using SHA-256.

**`Name`**

OP_SHA256

**`Constant`**

`OpCodeType('a8')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:769

___

### OP\_SIZE

▪ `Static` `Readonly` **OP\_SIZE**: [`OpCodeType`](../README.md#opcodetype)

Pushes the string length of the top element of the stack (without popping it).

**`Name`**

OP_SIZE

**`Constant`**

`OpCodeType('82')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:541

___

### OP\_SPLIT

▪ `Static` `Readonly` **OP\_SPLIT**: [`OpCodeType`](../README.md#opcodetype)

Splits byte sequence x at position n.

**`Name`**

OP_SPLIT

**`Constant`**

`OpCodeType('7f')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:523

___

### OP\_SUB

▪ `Static` `Readonly` **OP\_SUB**: [`OpCodeType`](../README.md#opcodetype)

b is subtracted from a.

**`Name`**

OP_SUB

**`Constant`**

`OpCodeType('94')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:649

___

### OP\_SWAP

▪ `Static` `Readonly` **OP\_SWAP**: [`OpCodeType`](../README.md#opcodetype)

The top two items on the stack are swapped.

**`Name`**

OP_SWAP

**`Constant`**

`OpCodeType('7c')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:505

___

### OP\_TOALTSTACK

▪ `Static` `Readonly` **OP\_TOALTSTACK**: [`OpCodeType`](../README.md#opcodetype)

Puts the input onto the top of the alt stack. Removes it from the main stack.

**`Name`**

OP_TOALTSTACK

**`Constant`**

`OpCodeType('6b')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:403

___

### OP\_TRUE

▪ `Static` `Readonly` **OP\_TRUE**: [`OpCodeType`](../README.md#opcodetype)

The number 1 is pushed onto the stack.

**`Name`**

OP_TRUE

**`Constant`**

`OpCodeType('51')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:207

___

### OP\_TUCK

▪ `Static` `Readonly` **OP\_TUCK**: [`OpCodeType`](../README.md#opcodetype)

The item at the top of the stack is copied and inserted before the second-to-top item.

**`Name`**

OP_TUCK

**`Constant`**

`OpCodeType('7d')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:511

___

### OP\_VER

▪ `Static` `Readonly` **OP\_VER**: [`OpCodeType`](../README.md#opcodetype)

Puts the version of the protocol under which this transaction will be evaluated onto the stack.

**`Deprecated`**

DISABLED

**`Name`**

OP_VER

**`Constant`**

`OpCodeType('62')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:310

___

### OP\_VERIF

▪ `Static` `Readonly` **OP\_VERIF**: [`OpCodeType`](../README.md#opcodetype)

**`Name`**

OP_VERIF

**`Constant`**

`OpCodeType('65')`

**`Deprecated`**

DISABLED

#### Defined in

dist/smart-contract/builtins/functions.d.ts:354

___

### OP\_VERIFY

▪ `Static` `Readonly` **OP\_VERIFY**: [`OpCodeType`](../README.md#opcodetype)

Marks transaction as invalid if top stack value is not true. The top stack value is removed.

**`Name`**

OP_VERIFY

**`Constant`**

`OpCodeType('69')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:391

___

### OP\_VERNOTIF

▪ `Static` `Readonly` **OP\_VERNOTIF**: [`OpCodeType`](../README.md#opcodetype)

**`Name`**

OP_VERNOTIF

**`Constant`**

`OpCodeType('66')`

**`Deprecated`**

DISABLED

#### Defined in

dist/smart-contract/builtins/functions.d.ts:360

___

### OP\_WITHIN

▪ `Static` `Readonly` **OP\_WITHIN**: [`OpCodeType`](../README.md#opcodetype)

Returns 1 if x is within the specified range (left-inclusive), 0 otherwise.

**`Name`**

OP_WITHIN

**`Constant`**

`OpCodeType('a5')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:751

___

### OP\_XOR

▪ `Static` `Readonly` **OP\_XOR**: [`OpCodeType`](../README.md#opcodetype)

Boolean exclusive or between each bit in the inputs.

**`Name`**

OP_XOR

**`Constant`**

`OpCodeType('86')`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:565
