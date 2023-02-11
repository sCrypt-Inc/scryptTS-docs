---
sidebar_position: 6
---

# How to Deploy & Call a Contract

## Prepare a Signer and Provider

As we mentioned in the [testing section](./how-to-test-a-contract.md), a signer and a provider should be connected to a contract before deployment and calling. 


For testing purposes, like in a node testing framework, you might want to use the `TestWallet` we introduced [before](./how-to-test-a-contract#testwallet) like this:

```ts
let signer = new TestWallet(privateKey, new WhatsonchainProvider(bsv.Networks.testnet));
```

If you want to use one in production, we also have a built-in signer called `SensiletSigner" that wraps APIs from the Sensilet [chrome extension](https://sensilet.com/) which is a lightweight crypto-wallet like the [Metamask](https://metamask.io/) that can be used in users' browsers.

```ts
const network = bsv.Networks.testnet; // or bsv.Networks.mainnet
let signer = new SensiletSigner(new WhatsonchainProvider(network));
```

Don't forget to connect the signer to the contract instance as well:

```ts
instance.connect(signer);
```

## Contract Deployment

To deploy a smart contract, just call the `deploy` method like this:


```ts
// construct a new instance of `MyContract`
let instance = new MyContract(...initArgs);

// connect the signer to the instance
await instance.connect(signer);

// the contract UTXO’s satoshis
const initBalance = 1234;

// build and send tx for deployment
const deployTx = await instance.deploy(initBalance);

```

## Contract Call

Similar to how we described it in [this section](./how-to-test-a-contract#getatxforinvokingamethod), you can use code to call a contract's public `@method` on the blockchain as follows:

```ts
const { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, opts);
console.log(`method call success with tx id ${tx.id}`);
```

The major difference here from the local test is that the contract instance is connected to a real provider, which can send transactions.

Let's look at a more complex example this time.

### Method with Signatures

A contract public `@method` may occasionally need a signature argument for authentication. Take this `P2PKH` contract for example:

```ts
export class P2PKH extends SmartContract {
    @prop()
    readonly readonly pubKeyHash: PubKeyHash;

    constructor(pubKeyHash: PubKeyHash) {
        super(pubKeyHash);
        this.pubKeyHash = pubKeyHash;
    }

    @method()
    public unlock(sig: Sig, pubkey: PubKey) {
        // make sure the `pubkey` is the one locked with its hash value in the constructor
        assert(hash160(pubkey) == this.pubKeyHash, 'pubKeyHash check failed');

	   // make sure the `sig` is signed by the private key corresponding to the `pubkey`
        assert(this.checkSig(sig, pubkey), 'signature check failed');
    }
}
```

We can call the `unlock` method like this:

```ts
// call
const { tx: callTx } = await p2pkh.methods.unlock(
    // the first argument `sig` is replaced by a callback function
    (sigResponses) => findSigFrom(sigResponses, publicKey),

    // the second argument is still the value of `pubkey`
    PubKey(toHex(publicKey)),

    // method call options
    {
        // A request for signer to sign with the private key corresponding to the certain address.
        sigRequiredAddress: publicKey.toAddress(bsv.Networks.testnet).toString()
    } as MethodCallOptions<P2PKH>
);

console.log('contract called: ', callTx.id);

```

When `p2phk.method.unlock` is called, an option `sigRequestAddress` is given to the function, and its value is set to be the address of `publicKey`. 

At the same time, a callback function that accepts a `sigResponses` argument and returns a `Sig` value, which is also filtered by the `publicKey`, replaces the first argument for `unlock`.

In general, you should do the following if your `@method` contains multiple `Sig`-typed arguments:

* Ensure that the "sigRequestAddress" field contains all addresses corresponding to these "Sig"s;
* Replace each "Sig" argument with a callback function that retrieves the proper "Sig" from "sigResponses";


## Example

Here is the complete sample code for the deployment and call of a P2PKH contract.

```ts
```ts
// compile contract to get low-level asm
await P2PKH.compile()

// generate a new private key
const privateKey = bsv.PrivateKey.fromRandom('testnet');
// public key of the `privateKey`
const publicKey = privateKey.publicKey
// public key hash of the `publicKey`
const pkh = bsv.crypto.Hash.sha256ripemd160(publicKey.toBuffer())

// setup a signer with two private keys
const signer = await new TestWallet([privKey, privateKey]).connect(new WhatsonchainProvider(bsv.Networks.testnet));

// initiate an instance with `pkh`
let p2pkh = new P2PKH(PubKeyHash(toHex(pkh)))

// connect the signer
await p2pkh.connect(signer);

// deploy
const deployTx = await p2pkh.deploy(1);
console.log('contract deployed: ', deployTx.id);

// call
const { tx: callTx } = await p2pkh.methods.unlock(
    (sigResponses) => findSigFrom(sigResponses, publicKey),
    PubKey(toHex(publicKey)),
    {
        sigRequiredAddress: publicKey.toAddress(bsv.Networks.testnet).toString()
    } as MethodCallOptions<P2PKH>
);

console.log('contract called: ', callTx.id);

```


More examples can be found [here](https://github.com/sCrypt-Inc/scryptTS-examples/tree/master/tests/testnet)
