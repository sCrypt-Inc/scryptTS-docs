[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / Opcode

# Class: Opcode

[bsv](../modules/bsv.md).Opcode

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

node_modules/bsv/index.d.ts:153

## Properties

### OP\_0

▪ `Static` **OP\_0**: `number`

#### Defined in

node_modules/bsv/index.d.ts:15

___

### OP\_0NOTEQUAL

▪ `Static` **OP\_0NOTEQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:97

___

### OP\_1

▪ `Static` **OP\_1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:22

___

### OP\_10

▪ `Static` **OP\_10**: `number`

#### Defined in

node_modules/bsv/index.d.ts:31

___

### OP\_11

▪ `Static` **OP\_11**: `number`

#### Defined in

node_modules/bsv/index.d.ts:32

___

### OP\_12

▪ `Static` **OP\_12**: `number`

#### Defined in

node_modules/bsv/index.d.ts:33

___

### OP\_13

▪ `Static` **OP\_13**: `number`

#### Defined in

node_modules/bsv/index.d.ts:34

___

### OP\_14

▪ `Static` **OP\_14**: `number`

#### Defined in

node_modules/bsv/index.d.ts:35

___

### OP\_15

▪ `Static` **OP\_15**: `number`

#### Defined in

node_modules/bsv/index.d.ts:36

___

### OP\_16

▪ `Static` **OP\_16**: `number`

#### Defined in

node_modules/bsv/index.d.ts:37

___

### OP\_1ADD

▪ `Static` **OP\_1ADD**: `number`

#### Defined in

node_modules/bsv/index.d.ts:90

___

### OP\_1NEGATE

▪ `Static` **OP\_1NEGATE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:19

___

### OP\_1SUB

▪ `Static` **OP\_1SUB**: `number`

#### Defined in

node_modules/bsv/index.d.ts:91

___

### OP\_2

▪ `Static` **OP\_2**: `number`

#### Defined in

node_modules/bsv/index.d.ts:23

___

### OP\_2DIV

▪ `Static` **OP\_2DIV**: `number`

#### Defined in

node_modules/bsv/index.d.ts:93

___

### OP\_2DROP

▪ `Static` **OP\_2DROP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:54

___

### OP\_2DUP

▪ `Static` **OP\_2DUP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:55

___

### OP\_2MUL

▪ `Static` **OP\_2MUL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:92

___

### OP\_2OVER

▪ `Static` **OP\_2OVER**: `number`

#### Defined in

node_modules/bsv/index.d.ts:57

___

### OP\_2ROT

▪ `Static` **OP\_2ROT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:58

___

### OP\_2SWAP

▪ `Static` **OP\_2SWAP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:59

___

### OP\_3

▪ `Static` **OP\_3**: `number`

#### Defined in

node_modules/bsv/index.d.ts:24

___

### OP\_3DUP

▪ `Static` **OP\_3DUP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:56

___

### OP\_4

▪ `Static` **OP\_4**: `number`

#### Defined in

node_modules/bsv/index.d.ts:25

___

### OP\_5

▪ `Static` **OP\_5**: `number`

#### Defined in

node_modules/bsv/index.d.ts:26

___

### OP\_6

▪ `Static` **OP\_6**: `number`

#### Defined in

node_modules/bsv/index.d.ts:27

___

### OP\_7

▪ `Static` **OP\_7**: `number`

#### Defined in

node_modules/bsv/index.d.ts:28

___

### OP\_8

▪ `Static` **OP\_8**: `number`

#### Defined in

node_modules/bsv/index.d.ts:29

___

### OP\_9

▪ `Static` **OP\_9**: `number`

#### Defined in

node_modules/bsv/index.d.ts:30

___

### OP\_ABS

▪ `Static` **OP\_ABS**: `number`

#### Defined in

node_modules/bsv/index.d.ts:95

___

### OP\_ADD

▪ `Static` **OP\_ADD**: `number`

#### Defined in

node_modules/bsv/index.d.ts:99

___

### OP\_AND

▪ `Static` **OP\_AND**: `number`

#### Defined in

node_modules/bsv/index.d.ts:81

___

### OP\_BIN2NUM

▪ `Static` **OP\_BIN2NUM**: `number`

#### Defined in

node_modules/bsv/index.d.ts:76

___

### OP\_BOOLAND

▪ `Static` **OP\_BOOLAND**: `number`

#### Defined in

node_modules/bsv/index.d.ts:107

___

### OP\_BOOLOR

▪ `Static` **OP\_BOOLOR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:108

___

### OP\_CAT

▪ `Static` **OP\_CAT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:73

___

### OP\_CHECKLOCKTIMEVERIFY

▪ `Static` **OP\_CHECKLOCKTIMEVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:133

___

### OP\_CHECKMULTISIG

▪ `Static` **OP\_CHECKMULTISIG**: `number`

#### Defined in

node_modules/bsv/index.d.ts:130

___

### OP\_CHECKMULTISIGVERIFY

▪ `Static` **OP\_CHECKMULTISIGVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:131

___

### OP\_CHECKSEQUENCEVERIFY

▪ `Static` **OP\_CHECKSEQUENCEVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:134

___

### OP\_CHECKSIG

▪ `Static` **OP\_CHECKSIG**: `number`

#### Defined in

node_modules/bsv/index.d.ts:128

___

### OP\_CHECKSIGVERIFY

▪ `Static` **OP\_CHECKSIGVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:129

___

### OP\_CODESEPARATOR

▪ `Static` **OP\_CODESEPARATOR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:127

___

### OP\_DEPTH

▪ `Static` **OP\_DEPTH**: `number`

#### Defined in

node_modules/bsv/index.d.ts:61

___

### OP\_DIV

▪ `Static` **OP\_DIV**: `number`

#### Defined in

node_modules/bsv/index.d.ts:102

___

### OP\_DROP

▪ `Static` **OP\_DROP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:62

___

### OP\_DUP

▪ `Static` **OP\_DUP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:63

___

### OP\_ELSE

▪ `Static` **OP\_ELSE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:46

___

### OP\_ENDIF

▪ `Static` **OP\_ENDIF**: `number`

#### Defined in

node_modules/bsv/index.d.ts:47

___

### OP\_EQUAL

▪ `Static` **OP\_EQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:84

___

### OP\_EQUALVERIFY

▪ `Static` **OP\_EQUALVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:85

___

### OP\_FROMALTSTACK

▪ `Static` **OP\_FROMALTSTACK**: `number`

#### Defined in

node_modules/bsv/index.d.ts:53

___

### OP\_GREATERTHAN

▪ `Static` **OP\_GREATERTHAN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:113

___

### OP\_GREATERTHANOREQUAL

▪ `Static` **OP\_GREATERTHANOREQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:115

___

### OP\_HASH160

▪ `Static` **OP\_HASH160**: `number`

#### Defined in

node_modules/bsv/index.d.ts:125

___

### OP\_HASH256

▪ `Static` **OP\_HASH256**: `number`

#### Defined in

node_modules/bsv/index.d.ts:126

___

### OP\_IF

▪ `Static` **OP\_IF**: `number`

#### Defined in

node_modules/bsv/index.d.ts:42

___

### OP\_IFDUP

▪ `Static` **OP\_IFDUP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:60

___

### OP\_INVALIDOPCODE

▪ `Static` **OP\_INVALIDOPCODE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:151

___

### OP\_INVERT

▪ `Static` **OP\_INVERT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:80

___

### OP\_LESSTHAN

▪ `Static` **OP\_LESSTHAN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:112

___

### OP\_LESSTHANOREQUAL

▪ `Static` **OP\_LESSTHANOREQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:114

___

### OP\_LSHIFT

▪ `Static` **OP\_LSHIFT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:104

___

### OP\_MAX

▪ `Static` **OP\_MAX**: `number`

#### Defined in

node_modules/bsv/index.d.ts:117

___

### OP\_MIN

▪ `Static` **OP\_MIN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:116

___

### OP\_MOD

▪ `Static` **OP\_MOD**: `number`

#### Defined in

node_modules/bsv/index.d.ts:103

___

### OP\_MUL

▪ `Static` **OP\_MUL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:101

___

### OP\_NEGATE

▪ `Static` **OP\_NEGATE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:94

___

### OP\_NIP

▪ `Static` **OP\_NIP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:64

___

### OP\_NOP

▪ `Static` **OP\_NOP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:40

___

### OP\_NOP1

▪ `Static` **OP\_NOP1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:137

___

### OP\_NOP10

▪ `Static` **OP\_NOP10**: `number`

#### Defined in

node_modules/bsv/index.d.ts:146

___

### OP\_NOP2

▪ `Static` **OP\_NOP2**: `number`

#### Defined in

node_modules/bsv/index.d.ts:138

___

### OP\_NOP3

▪ `Static` **OP\_NOP3**: `number`

#### Defined in

node_modules/bsv/index.d.ts:139

___

### OP\_NOP4

▪ `Static` **OP\_NOP4**: `number`

#### Defined in

node_modules/bsv/index.d.ts:140

___

### OP\_NOP5

▪ `Static` **OP\_NOP5**: `number`

#### Defined in

node_modules/bsv/index.d.ts:141

___

### OP\_NOP6

▪ `Static` **OP\_NOP6**: `number`

#### Defined in

node_modules/bsv/index.d.ts:142

___

### OP\_NOP7

▪ `Static` **OP\_NOP7**: `number`

#### Defined in

node_modules/bsv/index.d.ts:143

___

### OP\_NOP8

▪ `Static` **OP\_NOP8**: `number`

#### Defined in

node_modules/bsv/index.d.ts:144

___

### OP\_NOP9

▪ `Static` **OP\_NOP9**: `number`

#### Defined in

node_modules/bsv/index.d.ts:145

___

### OP\_NOT

▪ `Static` **OP\_NOT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:96

___

### OP\_NOTIF

▪ `Static` **OP\_NOTIF**: `number`

#### Defined in

node_modules/bsv/index.d.ts:43

___

### OP\_NUM2BIN

▪ `Static` **OP\_NUM2BIN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:75

___

### OP\_NUMEQUAL

▪ `Static` **OP\_NUMEQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:109

___

### OP\_NUMEQUALVERIFY

▪ `Static` **OP\_NUMEQUALVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:110

___

### OP\_NUMNOTEQUAL

▪ `Static` **OP\_NUMNOTEQUAL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:111

___

### OP\_OR

▪ `Static` **OP\_OR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:82

___

### OP\_OVER

▪ `Static` **OP\_OVER**: `number`

#### Defined in

node_modules/bsv/index.d.ts:65

___

### OP\_PICK

▪ `Static` **OP\_PICK**: `number`

#### Defined in

node_modules/bsv/index.d.ts:66

___

### OP\_PUBKEY

▪ `Static` **OP\_PUBKEY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:150

___

### OP\_PUBKEYHASH

▪ `Static` **OP\_PUBKEYHASH**: `number`

#### Defined in

node_modules/bsv/index.d.ts:149

___

### OP\_PUSHDATA1

▪ `Static` **OP\_PUSHDATA1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:16

___

### OP\_PUSHDATA2

▪ `Static` **OP\_PUSHDATA2**: `number`

#### Defined in

node_modules/bsv/index.d.ts:17

___

### OP\_PUSHDATA4

▪ `Static` **OP\_PUSHDATA4**: `number`

#### Defined in

node_modules/bsv/index.d.ts:18

___

### OP\_RESERVED

▪ `Static` **OP\_RESERVED**: `number`

#### Defined in

node_modules/bsv/index.d.ts:20

___

### OP\_RESERVED1

▪ `Static` **OP\_RESERVED1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:86

___

### OP\_RESERVED2

▪ `Static` **OP\_RESERVED2**: `number`

#### Defined in

node_modules/bsv/index.d.ts:87

___

### OP\_RETURN

▪ `Static` **OP\_RETURN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:49

___

### OP\_RIPEMD160

▪ `Static` **OP\_RIPEMD160**: `number`

#### Defined in

node_modules/bsv/index.d.ts:122

___

### OP\_ROLL

▪ `Static` **OP\_ROLL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:67

___

### OP\_ROT

▪ `Static` **OP\_ROT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:68

___

### OP\_RSHIFT

▪ `Static` **OP\_RSHIFT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:105

___

### OP\_SHA1

▪ `Static` **OP\_SHA1**: `number`

#### Defined in

node_modules/bsv/index.d.ts:123

___

### OP\_SHA256

▪ `Static` **OP\_SHA256**: `number`

#### Defined in

node_modules/bsv/index.d.ts:124

___

### OP\_SIZE

▪ `Static` **OP\_SIZE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:77

___

### OP\_SPLIT

▪ `Static` **OP\_SPLIT**: `number`

#### Defined in

node_modules/bsv/index.d.ts:74

___

### OP\_SUB

▪ `Static` **OP\_SUB**: `number`

#### Defined in

node_modules/bsv/index.d.ts:100

___

### OP\_SWAP

▪ `Static` **OP\_SWAP**: `number`

#### Defined in

node_modules/bsv/index.d.ts:69

___

### OP\_TOALTSTACK

▪ `Static` **OP\_TOALTSTACK**: `number`

#### Defined in

node_modules/bsv/index.d.ts:52

___

### OP\_TRUE

▪ `Static` **OP\_TRUE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:21

___

### OP\_TUCK

▪ `Static` **OP\_TUCK**: `number`

#### Defined in

node_modules/bsv/index.d.ts:70

___

### OP\_VER

▪ `Static` **OP\_VER**: `number`

#### Defined in

node_modules/bsv/index.d.ts:41

___

### OP\_VERIF

▪ `Static` **OP\_VERIF**: `number`

#### Defined in

node_modules/bsv/index.d.ts:44

___

### OP\_VERIFY

▪ `Static` **OP\_VERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:48

___

### OP\_VERNOTIF

▪ `Static` **OP\_VERNOTIF**: `number`

#### Defined in

node_modules/bsv/index.d.ts:45

___

### OP\_WITHIN

▪ `Static` **OP\_WITHIN**: `number`

#### Defined in

node_modules/bsv/index.d.ts:119

___

### OP\_XOR

▪ `Static` **OP\_XOR**: `number`

#### Defined in

node_modules/bsv/index.d.ts:83
