---
sidebar_position: 8
---

# Tutorial 8: Ordinal Lock


## Overview
In this tutorial, we will go over how to use [sCrypt](https://scrypt.io/) to build a full-stack dApp on Bitcoin to sell [1Sat Ordinals](https://docs.1satordinals.com/) inscription, including the smart contract and an interactive front-end.

## Contract

The contract [OrdinalLock](https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/contracts/ordinalLock.ts) will hold an inscription in it, users will get the inscription only if they pay the target amount satoshis when calling the public method `purchase`. Otherwise, the trade will not happen.

To record the seller and target selling price, we need to add two properties to the contract.

```ts
export class OrdinalLock extends OrdinalNFT {
    @prop()
    seller: PubKey

    @prop()
    amount: bigint
    
    ...
}
```

### Constructor

Initialize all the `@prop` properties in the constructor.

```ts
constructor(seller: PubKey, amount: bigint) {
    super()
    this.init(seller, amount)
    this.seller = seller
    this.amount = amount
}
```

### Methods

The public method `purchase` only needs to confine the transaction's outputs that contain:

- the inscription output to the buyer
- the fund output to the seller with the target amount of satoshis

```ts
@method()
public purchase(receiver: Addr) {
    const outputs =
        Utils.buildAddressOutput(receiver, 1n) + // inscription to the buyer
        Utils.buildAddressOutput(hash160(this.seller), this.amount) + // fund to the seller
        this.buildChangeOutput()
    assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs check failed')
}
```

### Final Code

You have completed the `OrdinalLock` contract! The [final complete code](https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/contracts/ordinalLock.ts) is as follows:

```ts
import { Addr, prop, method, Utils, hash256, assert, MethodCallOptions, ContractTransaction, bsv, PubKey, hash160 } from 'scrypt-ts'
import { OrdinalNFT } from '../scrypt-ord'

export class OrdinalLock extends OrdinalNFT {
    @prop()
    seller: PubKey

    @prop()
    amount: bigint

    constructor(seller: PubKey, amount: bigint) {
        super()
        this.init(seller, amount)
        this.seller = seller
        this.amount = amount
    }

    @method()
    public purchase(receiver: Addr) {
        const outputs =
            Utils.buildAddressOutput(receiver, 1n) + // inscription to the buyer
            Utils.buildAddressOutput(hash160(this.seller), this.amount) + // fund to the seller
            this.buildChangeOutput()
        assert(
            this.ctx.hashOutputs == hash256(outputs),
            'hashOutputs check failed'
        )
    }

    static async buildTxForPurchase(
        current: OrdinalLock,
        options: MethodCallOptions<OrdinalLock>,
        receiver: Addr
    ): Promise<ContractTransaction> {
        const defaultAddress = await current.signer.getDefaultAddress()
        const tx = new bsv.Transaction()
            .addInput(current.buildContractInput())
            .addOutput(
                new bsv.Transaction.Output({
                    script: bsv.Script.fromHex(
                        Utils.buildAddressScript(receiver)
                    ),
                    satoshis: 1,
                })
            )
            .addOutput(
                new bsv.Transaction.Output({
                    script: bsv.Script.fromHex(
                        Utils.buildAddressScript(hash160(current.seller))
                    ),
                    satoshis: Number(current.amount),
                })
            )
            .change(options.changeAddress || defaultAddress)
        return {
            tx,
            atInputIndex: 0,
            nexts: [],
        }
    }
}
```

## Frontend

We will add a frontend to the `OrdinalLock` smart contract accroding to this [guide](../how-to-integrate-a-frontend/how-to-integrate-a-frontend.md).

### Setup Project

The front-end will be created using [Create React App](https://create-react-app.dev/).

```bash
npx create-react-app ordinal-lock-demo --template typescript
```

### Install the sCrypt SDK

The sCrypt SDK enables you to easily compile, test, deploy, and call contracts.

Use the `scrypt-cli` command line to install the SDK.

```bash
cd voting
npx scrypt-cli init
```

This command will create a contract under `src/contracts`, replace the file with the contract written [above](#final-code).

### Compile Contract

Compile the contract with the following command: 

```bash
npx scrypt-cli compile
```

This command will generate a contract artifact file under `artifacts`.

### Load Contract Artifact

Before writing the front-end code, we need to load the contract artifact in `src/index.tsx`.

```ts
import { OrdinalLock } from './contracts/ordinalLock'
import artifact from '../artifacts/ordinalLock.json'
OrdinalLock.loadArtifact(artifact)
```

### Integrate Wallet

Use `requestAuth` method of `signer` to request access to the wallet.

```ts
// request authentication
const { isAuthenticated, error } = await signer.requestAuth();
if (!isAuthenticated) {
    // something went wrong, throw an Error with `error` message
    throw new Error(error);
}

// authenticated
// ...
```

### Integrate sCrypt Service

Follow [this guide](../advanced/how-to-integrate-scrypt-service.md) to initialize the client.

```ts
Scrypt.init({
  apiKey: 'YOUR_API_KEY',
  network: bsv.Networks.mainnet
})
```

### Connect Signer to `ScryptProvider`

It's required to connect your signer to `ScryptProvider` when using sCrypt service.

```ts
const provider = new ScryptProvider();
const signer = new SensiletSigner(provider);

signerRef.current = signer;
```

### Load Inscriptions

After users connect wallet, we can get the their address. Call the 1Sat Ordinals API to retrieve inscriptions on this address.

```ts
useEffect(() => {
  loadCollections()
}, [connectedAddress])

function loadCollections() {
  if (connectedAddress) {
    const url = `https://v3.ordinals.gorillapool.io/api/txos/address/${connectedAddress.toString()}/unspent?bsv20=false`
    fetch(url).then(r => r.json()).then(r => r.filter(e => e.origin.data.insc.file.type !== 'application/bsv-20')).then(r => setCollections(r))   }
}
```

![](../../static/img/ordinal-lock/load1.png)

![](../../static/img/ordinal-lock/load2.png)

![](../../static/img/ordinal-lock/load3.png)

### Sell an Inscription

For each inscription in the collection list, we can click the `Sell` button to sell it after filling in the selling price. Sell an inscription means we need to create a contract instance, and then transfer the inscription into the contract instance.

```ts
async function sell() {
    const signer = new SensiletSigner(new ScryptProvider())
    const publicKey = await signer.getDefaultPubKey()

    const instance = new OrdinalLock(PubKey(toHex(publicKey)), amount)
    await instance.connect(signer)

    const inscriptionUtxo = await parseUtxo(txid, vout)
    const inscriptionP2PKH = OrdNFTP2PKH.fromUTXO(inscriptionUtxo)
    await inscriptionP2PKH.connect(signer)

    const { tx } = await inscriptionP2PKH.methods.unlock(
        (sigResps) => findSig(sigResps, publicKey),
        PubKey(toHex(publicKey)),
        {
            transfer: instance,
            pubKeyOrAddrToSign: publicKey,
        } as MethodCallOptions<OrdNFTP2PKH>
    )
}
```

![](../../static/img/ordinal-lock/sell1.png)

![](../../static/img/ordinal-lock/sell2.png)

![](../../static/img/ordinal-lock/sell3.png)

### Buy an Inscription

To buy an inscription that is on sale, we only need to call the contract public method `purchase`.

```ts
async function buy() {
    const signer = new SensiletSigner(new ScryptProvider())
    const address = await signer.getDefaultAddress()
    const { tx } = await instance.methods.purchase(Addr(address.toByteString()))
}
```

![](../../static/img/ordinal-lock/buy1.png)

![](../../static/img/ordinal-lock/buy2.png)

![](../../static/img/ordinal-lock/buy3.png)

![](../../static/img/ordinal-lock/buy4.png)

## Conclusion

Congratulations! You have successfully completed a full-stack dApp that can sell 1Sat Ordinals inscription on Bitcoin.

The full example repo can be found [here](https://github.com/sCrypt-Inc/ordinal-lock-demo/tree/sensilet).
