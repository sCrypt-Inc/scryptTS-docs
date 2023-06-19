---
sidebar_position: 6
---

# How To Override Methods Compiled Code

In some rare cases you might want to use low level Bitcoin script to write a smart contracts method. This is often done for optimization of the scrip size.
To achieve this currently, you have to edit the transpiled `.scrypt` files under your projects artifacts directory.

To make this easy and automated we have written some code, that automatically does this for you. 

Suppose you have an sCrypt project with the file `src/contracts/p2pkh.ts`, which contains a regular P2PKH smart contract:

```ts
export class P2PKH extends SmartContract {
    @prop()
    readonly pubKeyHash: PubKeyHash

    constructor(pubKeyHash: PubKeyHash) {
        super(...arguments)
        this.pubKeyHash = pubKeyHash
    }

    @method()
    public unlock(sig: Sig, pubkey: PubKey) {
        assert(
            hash160(pubkey) == this.pubKeyHash,
            'public key hashes are not equal'
        )
        assert(this.checkSig(sig, pubkey), 'signature check failed')
    }
}
```

For some reason you are not happy with the default bitcoin script produced by the sCrypt compiler and would like to substitute the `unlock` functions script with something your wrote manually.

If you created the project using the [sCrypt CLI](https://www.npmjs.com/package/scrypt-cli) with the `--asm` option enabled, you will have a directory named `.asm/` in the root of the project.

Now, inside the `.asm` directory, you will find a file named `asm.json`. Inside of it we can define the substitutions we want to perform:

```json
{
  "P2PKH": {
    "unlock": "op_dup op_hash160 $pubKeyHash op_equalverify op_checksig"
  }
}
```

We can observe, that we declared a single ASM substitution for the `unlock` method. We could define multiple substations for multiple methods, if we would like to.

Now, after every project build the ASM script substitution will automatically trigger. In case it doesn't, check if your `package.json` defines the following two scripts:

```json
"scripts": {
    "build": "tsc && npm run apply-asm",
    "apply-asm": "node .asm/apply_asm.js",
    ...
```

We can verify, that the ASM script substitutions get applied by taking a quick look at the `.scrypt` file(s), which get produced during the build. In our case it should look something like the following: 

![](../../static/img/asm.png)


:::note
Please bear in mind that modifying the contract's script code may cause inconsistencies between the on-chain and local execution (methods TS code) behavior. Once you modify the Bitcoin script, it is your responsibility to keep the two versions functionally equivalent.
:::