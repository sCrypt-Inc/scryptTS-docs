[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / Opcode

# Class: Opcode

[bsv](../modules/bsv.md).Opcode

Opcode class, representing opcodes used in Bitcoin Script

**`Param`**

## Table of contents

### Constructors

- [constructor](bsv.Opcode.md#constructor)

### Properties

- [OP\_0](bsv.Opcode.md#op_0)
- [OP\_0NOTEQUAL](bsv.Opcode.md#op_0notequal)
- [OP\_1](bsv.Opcode.md#op_1)
- [OP\_10](bsv.Opcode.md#op_10)
- [OP\_11](bsv.Opcode.md#op_11)
- [OP\_12](bsv.Opcode.md#op_12)
- [OP\_13](bsv.Opcode.md#op_13)
- [OP\_14](bsv.Opcode.md#op_14)
- [OP\_15](bsv.Opcode.md#op_15)
- [OP\_16](bsv.Opcode.md#op_16)
- [OP\_1ADD](bsv.Opcode.md#op_1add)
- [OP\_1NEGATE](bsv.Opcode.md#op_1negate)
- [OP\_1SUB](bsv.Opcode.md#op_1sub)
- [OP\_2](bsv.Opcode.md#op_2)
- [OP\_2DIV](bsv.Opcode.md#op_2div)
- [OP\_2DROP](bsv.Opcode.md#op_2drop)
- [OP\_2DUP](bsv.Opcode.md#op_2dup)
- [OP\_2MUL](bsv.Opcode.md#op_2mul)
- [OP\_2OVER](bsv.Opcode.md#op_2over)
- [OP\_2ROT](bsv.Opcode.md#op_2rot)
- [OP\_2SWAP](bsv.Opcode.md#op_2swap)
- [OP\_3](bsv.Opcode.md#op_3)
- [OP\_3DUP](bsv.Opcode.md#op_3dup)
- [OP\_4](bsv.Opcode.md#op_4)
- [OP\_5](bsv.Opcode.md#op_5)
- [OP\_6](bsv.Opcode.md#op_6)
- [OP\_7](bsv.Opcode.md#op_7)
- [OP\_8](bsv.Opcode.md#op_8)
- [OP\_9](bsv.Opcode.md#op_9)
- [OP\_ABS](bsv.Opcode.md#op_abs)
- [OP\_ADD](bsv.Opcode.md#op_add)
- [OP\_AND](bsv.Opcode.md#op_and)
- [OP\_BIN2NUM](bsv.Opcode.md#op_bin2num)
- [OP\_BOOLAND](bsv.Opcode.md#op_booland)
- [OP\_BOOLOR](bsv.Opcode.md#op_boolor)
- [OP\_CAT](bsv.Opcode.md#op_cat)
- [OP\_CHECKLOCKTIMEVERIFY](bsv.Opcode.md#op_checklocktimeverify)
- [OP\_CHECKMULTISIG](bsv.Opcode.md#op_checkmultisig)
- [OP\_CHECKMULTISIGVERIFY](bsv.Opcode.md#op_checkmultisigverify)
- [OP\_CHECKSEQUENCEVERIFY](bsv.Opcode.md#op_checksequenceverify)
- [OP\_CHECKSIG](bsv.Opcode.md#op_checksig)
- [OP\_CHECKSIGVERIFY](bsv.Opcode.md#op_checksigverify)
- [OP\_CODESEPARATOR](bsv.Opcode.md#op_codeseparator)
- [OP\_DEPTH](bsv.Opcode.md#op_depth)
- [OP\_DIV](bsv.Opcode.md#op_div)
- [OP\_DROP](bsv.Opcode.md#op_drop)
- [OP\_DUP](bsv.Opcode.md#op_dup)
- [OP\_ELSE](bsv.Opcode.md#op_else)
- [OP\_ENDIF](bsv.Opcode.md#op_endif)
- [OP\_EQUAL](bsv.Opcode.md#op_equal)
- [OP\_EQUALVERIFY](bsv.Opcode.md#op_equalverify)
- [OP\_FROMALTSTACK](bsv.Opcode.md#op_fromaltstack)
- [OP\_GREATERTHAN](bsv.Opcode.md#op_greaterthan)
- [OP\_GREATERTHANOREQUAL](bsv.Opcode.md#op_greaterthanorequal)
- [OP\_HASH160](bsv.Opcode.md#op_hash160)
- [OP\_HASH256](bsv.Opcode.md#op_hash256)
- [OP\_IF](bsv.Opcode.md#op_if)
- [OP\_IFDUP](bsv.Opcode.md#op_ifdup)
- [OP\_INVALIDOPCODE](bsv.Opcode.md#op_invalidopcode)
- [OP\_INVERT](bsv.Opcode.md#op_invert)
- [OP\_LESSTHAN](bsv.Opcode.md#op_lessthan)
- [OP\_LESSTHANOREQUAL](bsv.Opcode.md#op_lessthanorequal)
- [OP\_LSHIFT](bsv.Opcode.md#op_lshift)
- [OP\_MAX](bsv.Opcode.md#op_max)
- [OP\_MIN](bsv.Opcode.md#op_min)
- [OP\_MOD](bsv.Opcode.md#op_mod)
- [OP\_MUL](bsv.Opcode.md#op_mul)
- [OP\_NEGATE](bsv.Opcode.md#op_negate)
- [OP\_NIP](bsv.Opcode.md#op_nip)
- [OP\_NOP](bsv.Opcode.md#op_nop)
- [OP\_NOP1](bsv.Opcode.md#op_nop1)
- [OP\_NOP10](bsv.Opcode.md#op_nop10)
- [OP\_NOP2](bsv.Opcode.md#op_nop2)
- [OP\_NOP3](bsv.Opcode.md#op_nop3)
- [OP\_NOP4](bsv.Opcode.md#op_nop4)
- [OP\_NOP5](bsv.Opcode.md#op_nop5)
- [OP\_NOP6](bsv.Opcode.md#op_nop6)
- [OP\_NOP7](bsv.Opcode.md#op_nop7)
- [OP\_NOP8](bsv.Opcode.md#op_nop8)
- [OP\_NOP9](bsv.Opcode.md#op_nop9)
- [OP\_NOT](bsv.Opcode.md#op_not)
- [OP\_NOTIF](bsv.Opcode.md#op_notif)
- [OP\_NUM2BIN](bsv.Opcode.md#op_num2bin)
- [OP\_NUMEQUAL](bsv.Opcode.md#op_numequal)
- [OP\_NUMEQUALVERIFY](bsv.Opcode.md#op_numequalverify)
- [OP\_NUMNOTEQUAL](bsv.Opcode.md#op_numnotequal)
- [OP\_OR](bsv.Opcode.md#op_or)
- [OP\_OVER](bsv.Opcode.md#op_over)
- [OP\_PICK](bsv.Opcode.md#op_pick)
- [OP\_PUBKEY](bsv.Opcode.md#op_pubkey)
- [OP\_PUBKEYHASH](bsv.Opcode.md#op_pubkeyhash)
- [OP\_PUSHDATA1](bsv.Opcode.md#op_pushdata1)
- [OP\_PUSHDATA2](bsv.Opcode.md#op_pushdata2)
- [OP\_PUSHDATA4](bsv.Opcode.md#op_pushdata4)
- [OP\_RESERVED](bsv.Opcode.md#op_reserved)
- [OP\_RESERVED1](bsv.Opcode.md#op_reserved1)
- [OP\_RESERVED2](bsv.Opcode.md#op_reserved2)
- [OP\_RETURN](bsv.Opcode.md#op_return)
- [OP\_RIPEMD160](bsv.Opcode.md#op_ripemd160)
- [OP\_ROLL](bsv.Opcode.md#op_roll)
- [OP\_ROT](bsv.Opcode.md#op_rot)
- [OP\_RSHIFT](bsv.Opcode.md#op_rshift)
- [OP\_SHA1](bsv.Opcode.md#op_sha1)
- [OP\_SHA256](bsv.Opcode.md#op_sha256)
- [OP\_SIZE](bsv.Opcode.md#op_size)
- [OP\_SPLIT](bsv.Opcode.md#op_split)
- [OP\_SUB](bsv.Opcode.md#op_sub)
- [OP\_SWAP](bsv.Opcode.md#op_swap)
- [OP\_TOALTSTACK](bsv.Opcode.md#op_toaltstack)
- [OP\_TRUE](bsv.Opcode.md#op_true)
- [OP\_TUCK](bsv.Opcode.md#op_tuck)
- [OP\_VER](bsv.Opcode.md#op_ver)
- [OP\_VERIF](bsv.Opcode.md#op_verif)
- [OP\_VERIFY](bsv.Opcode.md#op_verify)
- [OP\_VERNOTIF](bsv.Opcode.md#op_vernotif)
- [OP\_WITHIN](bsv.Opcode.md#op_within)
- [OP\_XOR](bsv.Opcode.md#op_xor)

## Constructors

### constructor

• **new Opcode**(`op_code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `op_code` | `number` |

#### Defined in

node_modules/bsv/index.d.ts:603

## Properties

### OP\_0

▪ `Static` **OP\_0**: `number`

An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.)

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

empty

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:29

___

### OP\_0NOTEQUAL

▪ `Static` **OP\_0NOTEQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:547

___

### OP\_1

▪ `Static` **OP\_1**: `number`

The number 1 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`1`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:92

___

### OP\_10

▪ `Static` **OP\_10**: `number`

The number in the word name 10 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`10`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:173

___

### OP\_11

▪ `Static` **OP\_11**: `number`

The number in the word name 11 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`11`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:182

___

### OP\_12

▪ `Static` **OP\_12**: `number`

The number in the word name 12 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`12`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:191

___

### OP\_13

▪ `Static` **OP\_13**: `number`

The number in the word name 13 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`13`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:200

___

### OP\_14

▪ `Static` **OP\_14**: `number`

The number in the word name 14 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`14`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:209

___

### OP\_15

▪ `Static` **OP\_15**: `number`

The number in the word name 15 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`15`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:218

___

### OP\_16

▪ `Static` **OP\_16**: `number`

The number in the word name 16 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`16`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:227

___

### OP\_1ADD

▪ `Static` **OP\_1ADD**: `number`

#### Defined in

node_modules/bsv/index.d.ts:540

___

### OP\_1NEGATE

▪ `Static` **OP\_1NEGATE**: `number`

The number -1 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`-1`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:65

___

### OP\_1SUB

▪ `Static` **OP\_1SUB**: `number`

#### Defined in

node_modules/bsv/index.d.ts:541

___

### OP\_2

▪ `Static` **OP\_2**: `number`

The number in the word name 2 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`2`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:101

___

### OP\_2DIV

▪ `Static` **OP\_2DIV**: `number`

#### Defined in

node_modules/bsv/index.d.ts:543

___

### OP\_2DROP

▪ `Static` **OP\_2DROP**: `number`

Removes the top two stack items.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2

**`Output`**

Nothing

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:376

___

### OP\_2DUP

▪ `Static` **OP\_2DUP**: `number`

Duplicates the top two stack items.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2

**`Output`**

x1 x2 x1 x2

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:385

___

### OP\_2MUL

▪ `Static` **OP\_2MUL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:542

___

### OP\_2OVER

▪ `Static` **OP\_2OVER**: `number`

Copies the pair of items two spaces back in the stack to the front.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2 x3 x4

**`Output`**

x1 x2 x3 x4 x1 x2

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:403

___

### OP\_2ROT

▪ `Static` **OP\_2ROT**: `number`

The fifth and sixth items back are moved to the top of the stack.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2 x3 x4 x5 x6

**`Output`**

x3 x4 x5 x6 x1 x2

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:412

___

### OP\_2SWAP

▪ `Static` **OP\_2SWAP**: `number`

Swaps the top two pairs of items.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2 x3 x4

**`Output`**

x3 x4 x1 x2

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:421

___

### OP\_3

▪ `Static` **OP\_3**: `number`

The number in the word name 3 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`3`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:110

___

### OP\_3DUP

▪ `Static` **OP\_3DUP**: `number`

Duplicates the top three stack items.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2 x3

**`Output`**

x1 x2 x3 x1 x2 x3

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:394

___

### OP\_4

▪ `Static` **OP\_4**: `number`

The number in the word name 4 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`4`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:119

___

### OP\_5

▪ `Static` **OP\_5**: `number`

The number in the word name 5 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`5`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:128

___

### OP\_6

▪ `Static` **OP\_6**: `number`

The number in the word name 6 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`6`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:137

___

### OP\_7

▪ `Static` **OP\_7**: `number`

The number in the word name 7 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`7`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:146

___

### OP\_8

▪ `Static` **OP\_8**: `number`

The number in the word name 8 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`8`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:155

___

### OP\_9

▪ `Static` **OP\_9**: `number`

The number in the word name 9 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`9`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:164

___

### OP\_ABS

▪ `Static` **OP\_ABS**: `number`

#### Defined in

node_modules/bsv/index.d.ts:545

___

### OP\_ADD

▪ `Static` **OP\_ADD**: `number`

#### Defined in

node_modules/bsv/index.d.ts:549

___

### OP\_AND

▪ `Static` **OP\_AND**: `number`

#### Defined in

node_modules/bsv/index.d.ts:531

___

### OP\_BIN2NUM

▪ `Static` **OP\_BIN2NUM**: `number`

#### Defined in

node_modules/bsv/index.d.ts:526

___

### OP\_BOOLAND

▪ `Static` **OP\_BOOLAND**: `number`

#### Defined in

node_modules/bsv/index.d.ts:557

___

### OP\_BOOLOR

▪ `Static` **OP\_BOOLOR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:558

___

### OP\_CAT

▪ `Static` **OP\_CAT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:523

___

### OP\_CHECKLOCKTIMEVERIFY

▪ `Static` **OP\_CHECKLOCKTIMEVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:583

___

### OP\_CHECKMULTISIG

▪ `Static` **OP\_CHECKMULTISIG**: `number`

#### Defined in

node_modules/bsv/index.d.ts:580

___

### OP\_CHECKMULTISIGVERIFY

▪ `Static` **OP\_CHECKMULTISIGVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:581

___

### OP\_CHECKSEQUENCEVERIFY

▪ `Static` **OP\_CHECKSEQUENCEVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:584

___

### OP\_CHECKSIG

▪ `Static` **OP\_CHECKSIG**: `number`

#### Defined in

node_modules/bsv/index.d.ts:578

___

### OP\_CHECKSIGVERIFY

▪ `Static` **OP\_CHECKSIGVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:579

___

### OP\_CODESEPARATOR

▪ `Static` **OP\_CODESEPARATOR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:577

___

### OP\_DEPTH

▪ `Static` **OP\_DEPTH**: `number`

Counts the number of stack items onto the stack and places the value on the top

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

stack_size

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:439

___

### OP\_DIV

▪ `Static` **OP\_DIV**: `number`

#### Defined in

node_modules/bsv/index.d.ts:552

___

### OP\_DROP

▪ `Static` **OP\_DROP**: `number`

Removes the top stack item.

**`Opcode`**

**`Hex`**

**`Input`**

x

**`Output`**

Nothing

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:448

___

### OP\_DUP

▪ `Static` **OP\_DUP**: `number`

Removes the top stack item.

**`Opcode`**

**`Hex`**

**`Input`**

x

**`Output`**

x x

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:457

___

### OP\_ELSE

▪ `Static` **OP\_ELSE**: `number`

If the preceding IF or NOTIF check was not valid then statement 2 is executed.

**`Opcode`**

**`Hex`**

**`Example`**

```ts
`[expression] IF
     [statement 1]
 ELSE
     [statement 2]
ENDIF`
```

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:312

___

### OP\_ENDIF

▪ `Static` **OP\_ENDIF**: `number`

Ends an if/else block. All blocks must end, or the transaction is invalid. An OP_ENDIF without a prior matching OP_IF or OP_NOTIF is also invalid.

**`Opcode`**

**`Hex`**

**`Example`**

```ts
`[expression] IF
     [statement 1]
 ELSE
     [statement 2]
ENDIF`
```

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:325

___

### OP\_EQUAL

▪ `Static` **OP\_EQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:534

___

### OP\_EQUALVERIFY

▪ `Static` **OP\_EQUALVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:535

___

### OP\_FROMALTSTACK

▪ `Static` **OP\_FROMALTSTACK**: `number`

Puts the input onto the top of the main stack. Removes it from the alt stack.

**`Opcode`**

**`Hex`**

**`Input`**

(alt)x1

**`Output`**

x1

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:367

___

### OP\_GREATERTHAN

▪ `Static` **OP\_GREATERTHAN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:563

___

### OP\_GREATERTHANOREQUAL

▪ `Static` **OP\_GREATERTHANOREQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:565

___

### OP\_HASH160

▪ `Static` **OP\_HASH160**: `number`

#### Defined in

node_modules/bsv/index.d.ts:575

___

### OP\_HASH256

▪ `Static` **OP\_HASH256**: `number`

#### Defined in

node_modules/bsv/index.d.ts:576

___

### OP\_IF

▪ `Static` **OP\_IF**: `number`

If the top stack value is TRUE, statement 1 is executed.
If the top stack value is FALSE and ELSE is used, statement 2 is executed. If ELSE is NOT used, the script jumps to ENDIF.
The top stack value is removed.

**`Opcode`**

**`Hex`**

**`Example`**

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

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:266

___

### OP\_IFDUP

▪ `Static` **OP\_IFDUP**: `number`

If the top stack value is not 0, duplicate it.

**`Opcode`**

**`Hex`**

**`Input`**

x

**`Output`**

x / x x

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:430

___

### OP\_INVALIDOPCODE

▪ `Static` **OP\_INVALIDOPCODE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:601

___

### OP\_INVERT

▪ `Static` **OP\_INVERT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:530

___

### OP\_LESSTHAN

▪ `Static` **OP\_LESSTHAN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:562

___

### OP\_LESSTHANOREQUAL

▪ `Static` **OP\_LESSTHANOREQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:564

___

### OP\_LSHIFT

▪ `Static` **OP\_LSHIFT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:554

___

### OP\_MAX

▪ `Static` **OP\_MAX**: `number`

#### Defined in

node_modules/bsv/index.d.ts:567

___

### OP\_MIN

▪ `Static` **OP\_MIN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:566

___

### OP\_MOD

▪ `Static` **OP\_MOD**: `number`

#### Defined in

node_modules/bsv/index.d.ts:553

___

### OP\_MUL

▪ `Static` **OP\_MUL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:551

___

### OP\_NEGATE

▪ `Static` **OP\_NEGATE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:544

___

### OP\_NIP

▪ `Static` **OP\_NIP**: `number`

Removes the second-to-top stack item.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2

**`Output`**

x2

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:466

___

### OP\_NOP

▪ `Static` **OP\_NOP**: `number`

Does nothing.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

Nothing

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:237

___

### OP\_NOP1

▪ `Static` **OP\_NOP1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:587

___

### OP\_NOP10

▪ `Static` **OP\_NOP10**: `number`

#### Defined in

node_modules/bsv/index.d.ts:596

___

### OP\_NOP2

▪ `Static` **OP\_NOP2**: `number`

#### Defined in

node_modules/bsv/index.d.ts:588

___

### OP\_NOP3

▪ `Static` **OP\_NOP3**: `number`

#### Defined in

node_modules/bsv/index.d.ts:589

___

### OP\_NOP4

▪ `Static` **OP\_NOP4**: `number`

#### Defined in

node_modules/bsv/index.d.ts:590

___

### OP\_NOP5

▪ `Static` **OP\_NOP5**: `number`

#### Defined in

node_modules/bsv/index.d.ts:591

___

### OP\_NOP6

▪ `Static` **OP\_NOP6**: `number`

#### Defined in

node_modules/bsv/index.d.ts:592

___

### OP\_NOP7

▪ `Static` **OP\_NOP7**: `number`

#### Defined in

node_modules/bsv/index.d.ts:593

___

### OP\_NOP8

▪ `Static` **OP\_NOP8**: `number`

#### Defined in

node_modules/bsv/index.d.ts:594

___

### OP\_NOP9

▪ `Static` **OP\_NOP9**: `number`

#### Defined in

node_modules/bsv/index.d.ts:595

___

### OP\_NOT

▪ `Static` **OP\_NOT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:546

___

### OP\_NOTIF

▪ `Static` **OP\_NOTIF**: `number`

If the top stack value is FALSE, statement 1 is executed.
If the top stack value is TRUE and ELSE is used, statement 2 is executed. If ELSE is NOT used, the script jumps to ENDIF.
The top stack value is removed.

**`Opcode`**

**`Hex`**

**`Example`**

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

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:285

___

### OP\_NUM2BIN

▪ `Static` **OP\_NUM2BIN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:525

___

### OP\_NUMEQUAL

▪ `Static` **OP\_NUMEQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:559

___

### OP\_NUMEQUALVERIFY

▪ `Static` **OP\_NUMEQUALVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:560

___

### OP\_NUMNOTEQUAL

▪ `Static` **OP\_NUMNOTEQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:561

___

### OP\_OR

▪ `Static` **OP\_OR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:532

___

### OP\_OVER

▪ `Static` **OP\_OVER**: `number`

Copies the second-to-top stack item to the top.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2

**`Output`**

x1 x2 x1

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:475

___

### OP\_PICK

▪ `Static` **OP\_PICK**: `number`

The item `n` back in the stack is copied to the top.

**`Opcode`**

**`Hex`**

**`Input`**

xn ... x2 x1 x0 xn

**`Output`**

xn ... x2 x1 x0 xn

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:484

___

### OP\_PUBKEY

▪ `Static` **OP\_PUBKEY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:600

___

### OP\_PUBKEYHASH

▪ `Static` **OP\_PUBKEYHASH**: `number`

#### Defined in

node_modules/bsv/index.d.ts:599

___

### OP\_PUSHDATA1

▪ `Static` **OP\_PUSHDATA1**: `number`

The next byte contains the number of bytes to be pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

special

**`Output`**

data

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:38

___

### OP\_PUSHDATA2

▪ `Static` **OP\_PUSHDATA2**: `number`

The next two bytes contain the number of bytes to be pushed onto the stack in little endian order.

**`Opcode`**

**`Hex`**

**`Input`**

special

**`Output`**

data

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:47

___

### OP\_PUSHDATA4

▪ `Static` **OP\_PUSHDATA4**: `number`

The next four bytes contain the number of bytes to be pushed onto the stack in little endian order.

**`Opcode`**

**`Hex`**

**`Input`**

special

**`Output`**

data

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:56

___

### OP\_RESERVED

▪ `Static` **OP\_RESERVED**: `number`

Reserved words, Using an unassigned opcode makes the transaction invalid.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

Nothing

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:74

___

### OP\_RESERVED1

▪ `Static` **OP\_RESERVED1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:536

___

### OP\_RESERVED2

▪ `Static` **OP\_RESERVED2**: `number`

#### Defined in

node_modules/bsv/index.d.ts:537

___

### OP\_RETURN

▪ `Static` **OP\_RETURN**: `number`

OP_RETURN can also be used to create "False Return" outputs with a scriptPubKey consisting of OP_FALSE OP_RETURN followed by data.
Such outputs are provably unspendable and should be given a value of zero Satoshis. These outputs can be pruned from storage 
in the UTXO set, reducing its size. After the Genesis upgrade in 2020 miners will be free to mine transactions 
containing FALSE RETURN outputs of any size.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

Ends script with top value on stack as final result

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:346

___

### OP\_RIPEMD160

▪ `Static` **OP\_RIPEMD160**: `number`

#### Defined in

node_modules/bsv/index.d.ts:572

___

### OP\_ROLL

▪ `Static` **OP\_ROLL**: `number`

The item `n` back in the stack is copied to the top.

**`Opcode`**

**`Hex`**

**`Input`**

xn ... x2 x1 x0 xn

**`Output`**

... x2 x1 x0 xn

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:493

___

### OP\_ROT

▪ `Static` **OP\_ROT**: `number`

The top three items on the stack are rotated to the left.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2 x3

**`Output`**

x2 x3 x1

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:502

___

### OP\_RSHIFT

▪ `Static` **OP\_RSHIFT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:555

___

### OP\_SHA1

▪ `Static` **OP\_SHA1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:573

___

### OP\_SHA256

▪ `Static` **OP\_SHA256**: `number`

#### Defined in

node_modules/bsv/index.d.ts:574

___

### OP\_SIZE

▪ `Static` **OP\_SIZE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:527

___

### OP\_SPLIT

▪ `Static` **OP\_SPLIT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:524

___

### OP\_SUB

▪ `Static` **OP\_SUB**: `number`

#### Defined in

node_modules/bsv/index.d.ts:550

___

### OP\_SWAP

▪ `Static` **OP\_SWAP**: `number`

The top two items on the stack are swapped.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2

**`Output`**

x2 x1

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:511

___

### OP\_TOALTSTACK

▪ `Static` **OP\_TOALTSTACK**: `number`

Puts the input onto the top of the alt stack. Removes it from the main stack.

**`Opcode`**

**`Hex`**

**`Input`**

x1

**`Output`**

(alt)x1

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:358

___

### OP\_TRUE

▪ `Static` **OP\_TRUE**: `number`

The number 1 is pushed onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

`1`

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:83

___

### OP\_TUCK

▪ `Static` **OP\_TUCK**: `number`

The item at the top of the stack is copied and inserted before the second-to-top item.

**`Opcode`**

**`Hex`**

**`Input`**

x1 x2

**`Output`**

x2 x1 x2

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:520

___

### OP\_VER

▪ `Static` **OP\_VER**: `number`

DISABLED.Puts the version of the protocol under which this transaction will be evaluated onto the stack.

**`Opcode`**

**`Hex`**

**`Input`**

Nothing

**`Output`**

Protocol version

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:247

___

### OP\_VERIF

▪ `Static` **OP\_VERIF**: `number`

DISABLED

**`Opcode`**

**`Hex`**

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:292

___

### OP\_VERIFY

▪ `Static` **OP\_VERIFY**: `number`

Marks transaction as invalid if top stack value is not true. The top stack value is removed.

**`Opcode`**

**`Hex`**

**`Input`**

True / false

**`Output`**

Nothing / fail

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:334

___

### OP\_VERNOTIF

▪ `Static` **OP\_VERNOTIF**: `number`

DISABLED

**`Opcode`**

**`Hex`**

**`Static`**

#### Defined in

node_modules/bsv/index.d.ts:299

___

### OP\_WITHIN

▪ `Static` **OP\_WITHIN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:569

___

### OP\_XOR

▪ `Static` **OP\_XOR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:533
