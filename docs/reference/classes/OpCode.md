[scrypt-ts](../README.md) / OpCode

# Class: OpCode

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

#### Defined in

[src/builtins/functions.ts:270](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L270)

___

### OP\_0NOTEQUAL

▪ `Static` `Readonly` **OP\_0NOTEQUAL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:352](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L352)

___

### OP\_1

▪ `Static` `Readonly` **OP\_1**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:277](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L277)

___

### OP\_10

▪ `Static` `Readonly` **OP\_10**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:287](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L287)

___

### OP\_11

▪ `Static` `Readonly` **OP\_11**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:288](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L288)

___

### OP\_12

▪ `Static` `Readonly` **OP\_12**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:289](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L289)

___

### OP\_13

▪ `Static` `Readonly` **OP\_13**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:290](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L290)

___

### OP\_14

▪ `Static` `Readonly` **OP\_14**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:291](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L291)

___

### OP\_15

▪ `Static` `Readonly` **OP\_15**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:292](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L292)

___

### OP\_16

▪ `Static` `Readonly` **OP\_16**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:293](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L293)

___

### OP\_1ADD

▪ `Static` `Readonly` **OP\_1ADD**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:345](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L345)

___

### OP\_1NEGATE

▪ `Static` `Readonly` **OP\_1NEGATE**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:275](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L275)

___

### OP\_1SUB

▪ `Static` `Readonly` **OP\_1SUB**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:346](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L346)

___

### OP\_2

▪ `Static` `Readonly` **OP\_2**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:279](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L279)

___

### OP\_2DIV

▪ `Static` `Readonly` **OP\_2DIV**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:348](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L348)

___

### OP\_2DROP

▪ `Static` `Readonly` **OP\_2DROP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:309](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L309)

___

### OP\_2DUP

▪ `Static` `Readonly` **OP\_2DUP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:310](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L310)

___

### OP\_2MUL

▪ `Static` `Readonly` **OP\_2MUL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:347](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L347)

___

### OP\_2OVER

▪ `Static` `Readonly` **OP\_2OVER**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:312](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L312)

___

### OP\_2ROT

▪ `Static` `Readonly` **OP\_2ROT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:313](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L313)

___

### OP\_2SWAP

▪ `Static` `Readonly` **OP\_2SWAP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:314](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L314)

___

### OP\_3

▪ `Static` `Readonly` **OP\_3**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:280](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L280)

___

### OP\_3DUP

▪ `Static` `Readonly` **OP\_3DUP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:311](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L311)

___

### OP\_4

▪ `Static` `Readonly` **OP\_4**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:281](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L281)

___

### OP\_5

▪ `Static` `Readonly` **OP\_5**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:282](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L282)

___

### OP\_6

▪ `Static` `Readonly` **OP\_6**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:283](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L283)

___

### OP\_7

▪ `Static` `Readonly` **OP\_7**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:284](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L284)

___

### OP\_8

▪ `Static` `Readonly` **OP\_8**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:285](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L285)

___

### OP\_9

▪ `Static` `Readonly` **OP\_9**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:286](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L286)

___

### OP\_ABS

▪ `Static` `Readonly` **OP\_ABS**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:350](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L350)

___

### OP\_ADD

▪ `Static` `Readonly` **OP\_ADD**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:354](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L354)

___

### OP\_AND

▪ `Static` `Readonly` **OP\_AND**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:336](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L336)

___

### OP\_BIN2NUM

▪ `Static` `Readonly` **OP\_BIN2NUM**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:331](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L331)

___

### OP\_BOOLAND

▪ `Static` `Readonly` **OP\_BOOLAND**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:362](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L362)

___

### OP\_BOOLOR

▪ `Static` `Readonly` **OP\_BOOLOR**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:363](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L363)

___

### OP\_CAT

▪ `Static` `Readonly` **OP\_CAT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:328](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L328)

___

### OP\_CHECKMULTISIG

▪ `Static` `Readonly` **OP\_CHECKMULTISIG**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:385](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L385)

___

### OP\_CHECKMULTISIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKMULTISIGVERIFY**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:386](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L386)

___

### OP\_CHECKSIG

▪ `Static` `Readonly` **OP\_CHECKSIG**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:383](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L383)

___

### OP\_CHECKSIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKSIGVERIFY**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:384](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L384)

___

### OP\_CODESEPARATOR

▪ `Static` `Readonly` **OP\_CODESEPARATOR**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:382](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L382)

___

### OP\_DEPTH

▪ `Static` `Readonly` **OP\_DEPTH**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:316](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L316)

___

### OP\_DIV

▪ `Static` `Readonly` **OP\_DIV**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:357](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L357)

___

### OP\_DROP

▪ `Static` `Readonly` **OP\_DROP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:317](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L317)

___

### OP\_DUP

▪ `Static` `Readonly` **OP\_DUP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:318](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L318)

___

### OP\_ELSE

▪ `Static` `Readonly` **OP\_ELSE**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:302](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L302)

___

### OP\_ENDIF

▪ `Static` `Readonly` **OP\_ENDIF**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:303](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L303)

___

### OP\_EQUAL

▪ `Static` `Readonly` **OP\_EQUAL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:339](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L339)

___

### OP\_EQUALVERIFY

▪ `Static` `Readonly` **OP\_EQUALVERIFY**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:340](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L340)

___

### OP\_FALSE

▪ `Static` `Readonly` **OP\_FALSE**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:271](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L271)

___

### OP\_FROMALTSTACK

▪ `Static` `Readonly` **OP\_FROMALTSTACK**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:308](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L308)

___

### OP\_GREATERTHAN

▪ `Static` `Readonly` **OP\_GREATERTHAN**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:368](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L368)

___

### OP\_GREATERTHANOREQUAL

▪ `Static` `Readonly` **OP\_GREATERTHANOREQUAL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:370](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L370)

___

### OP\_HASH160

▪ `Static` `Readonly` **OP\_HASH160**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:380](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L380)

___

### OP\_HASH256

▪ `Static` `Readonly` **OP\_HASH256**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:381](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L381)

___

### OP\_IF

▪ `Static` `Readonly` **OP\_IF**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:298](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L298)

___

### OP\_IFDUP

▪ `Static` `Readonly` **OP\_IFDUP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:315](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L315)

___

### OP\_INVALIDOPCODE

▪ `Static` `Readonly` **OP\_INVALIDOPCODE**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:406](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L406)

___

### OP\_INVERT

▪ `Static` `Readonly` **OP\_INVERT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:335](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L335)

___

### OP\_LESSTHAN

▪ `Static` `Readonly` **OP\_LESSTHAN**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:367](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L367)

___

### OP\_LESSTHANOREQUAL

▪ `Static` `Readonly` **OP\_LESSTHANOREQUAL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:369](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L369)

___

### OP\_LSHIFT

▪ `Static` `Readonly` **OP\_LSHIFT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:359](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L359)

___

### OP\_MAX

▪ `Static` `Readonly` **OP\_MAX**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:372](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L372)

___

### OP\_MIN

▪ `Static` `Readonly` **OP\_MIN**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:371](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L371)

___

### OP\_MOD

▪ `Static` `Readonly` **OP\_MOD**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:358](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L358)

___

### OP\_MUL

▪ `Static` `Readonly` **OP\_MUL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:356](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L356)

___

### OP\_NEGATE

▪ `Static` `Readonly` **OP\_NEGATE**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:349](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L349)

___

### OP\_NIP

▪ `Static` `Readonly` **OP\_NIP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:319](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L319)

___

### OP\_NOP

▪ `Static` `Readonly` **OP\_NOP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:296](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L296)

___

### OP\_NOP1

▪ `Static` `Readonly` **OP\_NOP1**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:389](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L389)

___

### OP\_NOP10

▪ `Static` `Readonly` **OP\_NOP10**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:398](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L398)

___

### OP\_NOP2

▪ `Static` `Readonly` **OP\_NOP2**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:390](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L390)

___

### OP\_NOP3

▪ `Static` `Readonly` **OP\_NOP3**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:391](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L391)

___

### OP\_NOP4

▪ `Static` `Readonly` **OP\_NOP4**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:392](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L392)

___

### OP\_NOP5

▪ `Static` `Readonly` **OP\_NOP5**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:393](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L393)

___

### OP\_NOP6

▪ `Static` `Readonly` **OP\_NOP6**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:394](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L394)

___

### OP\_NOP7

▪ `Static` `Readonly` **OP\_NOP7**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:395](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L395)

___

### OP\_NOP8

▪ `Static` `Readonly` **OP\_NOP8**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:396](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L396)

___

### OP\_NOP9

▪ `Static` `Readonly` **OP\_NOP9**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:397](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L397)

___

### OP\_NOT

▪ `Static` `Readonly` **OP\_NOT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:351](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L351)

___

### OP\_NOTIF

▪ `Static` `Readonly` **OP\_NOTIF**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:299](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L299)

___

### OP\_NUM2BIN

▪ `Static` `Readonly` **OP\_NUM2BIN**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:330](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L330)

___

### OP\_NUMEQUAL

▪ `Static` `Readonly` **OP\_NUMEQUAL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:364](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L364)

___

### OP\_NUMEQUALVERIFY

▪ `Static` `Readonly` **OP\_NUMEQUALVERIFY**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:365](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L365)

___

### OP\_NUMNOTEQUAL

▪ `Static` `Readonly` **OP\_NUMNOTEQUAL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:366](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L366)

___

### OP\_OR

▪ `Static` `Readonly` **OP\_OR**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:337](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L337)

___

### OP\_OVER

▪ `Static` `Readonly` **OP\_OVER**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:320](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L320)

___

### OP\_PICK

▪ `Static` `Readonly` **OP\_PICK**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:321](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L321)

___

### OP\_PUBKEY

▪ `Static` `Readonly` **OP\_PUBKEY**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:405](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L405)

___

### OP\_PUBKEYHASH

▪ `Static` `Readonly` **OP\_PUBKEYHASH**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:404](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L404)

___

### OP\_PUSHDATA1

▪ `Static` `Readonly` **OP\_PUSHDATA1**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:272](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L272)

___

### OP\_PUSHDATA2

▪ `Static` `Readonly` **OP\_PUSHDATA2**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:273](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L273)

___

### OP\_PUSHDATA4

▪ `Static` `Readonly` **OP\_PUSHDATA4**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:274](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L274)

___

### OP\_RESERVED

▪ `Static` `Readonly` **OP\_RESERVED**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:276](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L276)

___

### OP\_RESERVED1

▪ `Static` `Readonly` **OP\_RESERVED1**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:341](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L341)

___

### OP\_RESERVED2

▪ `Static` `Readonly` **OP\_RESERVED2**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:342](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L342)

___

### OP\_RETURN

▪ `Static` `Readonly` **OP\_RETURN**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:305](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L305)

___

### OP\_RIPEMD160

▪ `Static` `Readonly` **OP\_RIPEMD160**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:377](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L377)

___

### OP\_ROLL

▪ `Static` `Readonly` **OP\_ROLL**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:322](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L322)

___

### OP\_ROT

▪ `Static` `Readonly` **OP\_ROT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:323](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L323)

___

### OP\_RSHIFT

▪ `Static` `Readonly` **OP\_RSHIFT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:360](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L360)

___

### OP\_SHA1

▪ `Static` `Readonly` **OP\_SHA1**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:378](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L378)

___

### OP\_SHA256

▪ `Static` `Readonly` **OP\_SHA256**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:379](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L379)

___

### OP\_SIZE

▪ `Static` `Readonly` **OP\_SIZE**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:332](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L332)

___

### OP\_SPLIT

▪ `Static` `Readonly` **OP\_SPLIT**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:329](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L329)

___

### OP\_SUB

▪ `Static` `Readonly` **OP\_SUB**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:355](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L355)

___

### OP\_SWAP

▪ `Static` `Readonly` **OP\_SWAP**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:324](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L324)

___

### OP\_TOALTSTACK

▪ `Static` `Readonly` **OP\_TOALTSTACK**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:307](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L307)

___

### OP\_TRUE

▪ `Static` `Readonly` **OP\_TRUE**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:278](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L278)

___

### OP\_TUCK

▪ `Static` `Readonly` **OP\_TUCK**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:325](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L325)

___

### OP\_VER

▪ `Static` `Readonly` **OP\_VER**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:297](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L297)

___

### OP\_VERIF

▪ `Static` `Readonly` **OP\_VERIF**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:300](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L300)

___

### OP\_VERIFY

▪ `Static` `Readonly` **OP\_VERIFY**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:304](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L304)

___

### OP\_VERNOTIF

▪ `Static` `Readonly` **OP\_VERNOTIF**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:301](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L301)

___

### OP\_WITHIN

▪ `Static` `Readonly` **OP\_WITHIN**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:374](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L374)

___

### OP\_XOR

▪ `Static` `Readonly` **OP\_XOR**: [`OpCodeType`](../README.md#opcodetype)

#### Defined in

[src/builtins/functions.ts:338](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L338)
