---
sidebar_position: 6
---

# How To Override Methods Compiled Code

In some rare cases you might want to use low level Bitcoin script to write a smart contracts method. This is usually done for optimization of the scrip size.
To achieve this currently, you have to edit the transpiled `.scrypt` files under your projects artifacts directory.

To make this a bit easier, you can re-use the code inside the `optimizations/` directory in [`scrypt-ts-lib`](https://github.com/sCrypt-Inc/scrypt-ts-lib/tree/master/optimizations).

Inside this directory, there is a shell script named `apply_asm_optim.sh`. In this script, you can specify the source files where substitution with a custom bitcoin script should occur.

Let's take a quick look at how this is applied in `scrypt-ts-lib` for three source files:

```sh
# BN256
apply artifacts/src/ec/bn256.scrypt optimizations/ec/bn256

# SECP256K1
apply artifacts/src/ec/secp256k1.scrypt optimizations/ec/secp256k1

# SECP256R1
apply artifacts/src/ec/secp256r1.scrypt optimizations/ec/secp256r1
```

For instance, let's consider the content of `optimizations/ec/bn256`:

```
_addCurvePoints.asm
doubleCurvePoint.asm
lineFuncAdd.asm
lineFuncDouble.asm
modInverseBranchlessP.asm
mulFQ12.asm
mulLine.asm
squareFQ12.asm
```

The name of each file corresponds to a function in the specified `.scrypt` source file (`bn256.scrypt` for this example). The files contain the actual bitcoin script in ASM format:

```
OP_3 OP_PICK 11 OP_PICK OP_MUL 12 OP_PICK OP_4 OP_PICK OP_MUL OP_ADD OP_3 OP_PICK 12 OP_PICK OP_MUL OP_5 OP_PICK 14 OP_PICK OP_MUL OP_SUB OP_7 OP_PICK 11 OP_PICK OP_MUL 12 OP_PICK OP_8 OP_PICK OP_MUL OP_ADD OP_7 OP_PICK 12 OP_PICK OP_MUL OP_9 OP_PICK 14 OP_PICK OP_MUL OP_SUB OP_3 OP_ROLL OP_ROT OP_ADD OP_ROT OP_ROT OP_ADD OP_4 OP_PICK 11 OP_PICK 13 OP_PICK OP_8 OP_PICK OP_DUP OP_3 OP_PICK OP_MUL OP_2 OP_PICK OP_5 OP_PICK OP_MUL OP_ADD OP_SWAP OP_ROT OP_MUL OP_3 OP_ROLL OP_3 ...
```

Please note that it is crucial to run `apply_asm_optim.sh` after each project build. To make this process more convenient, you can modify the build script in `package.json`:

```json
"scripts": {
    "build": "tsc && npm run apply-optim",
    "apply-optim": "sh optimizations/apply_asm_optim.sh",
    ...
```

Now, after every build, the script optimizations will be applied.

:::note
Please bear in mind that modifying the contract's script code may cause inconsistencies between the on-chain and local execution (methods TS code) behavior. Once you modify the Bitcoin script, it is your responsibility to keep the two versions functionally equivalent.
:::