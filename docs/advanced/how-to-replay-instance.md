# How to Replay a Contract Instance to the Latest State

Using [sCrypt Service](./how-to-integrate-scrypt-service.md) and [sCrypt client](./how-to-integrate-scrypt-service.md#step-1-initialize-client), we can effortlessly create a contract instance reflecting the latest state as follows:

```ts
const currentInstance = await Scrypt.contractApi.getLatestInstance(
    Counter,
    contractId
)
```

However, this method is ineffective for smart contracts with states of type [HashedMap](../how-to-write-a-contract/built-ins.md#hashedmap) or [HashedSet](../how-to-write-a-contract/built-ins.md#hashedset). This is because each instance only contains hashed values, not the original ones.

In this section, we'll use [contract CrowdfundReplay](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/crowdfundReplay.ts) located at `src/contracts/crowdfundReplay.ts` as a reference to explain how to replay these contract instances to their latest states.

This crowdfund contract features a HashedMap `donators` that records the donors' public key and their respective donation satoshi amounts.

```ts
export type Donators = HashedMap<PubKey, bigint>

export class CrowdfundReplay extends SmartContract {
	
	@prop(true)
	donators: Donators
	
	...
}
```

This contract has three public methods:

- `donate` adds an entry to the HashedMap.
- `refund` removes a specific donator from the map.
- `collect` destroys the contract without updating any stateful properties.

```ts
export type Donators = HashedMap<PubKey, bigint>

export class CrowdfundReplay extends SmartContract {
	...

	@method()
    public donate(donator: PubKey, amount: bigint) {
        ...
        assert(!this.donators.has(donator), 'donator already exists')
		this.donators.set(donator, amount)
        ...
    }

    @method()
    public refund(donator: PubKey, amount: bigint, sig: Sig) {
        ...
        assert(this.donators.canGet(donator, amount), 'not donated before')
        assert(this.donators.delete(donator), 'failed to remove donator')
        ...
    }

    @method()
    public collect(sig: Sig) {
        ...
    }
}
```

To replay the contract instance to the latest states, follow these three steps:

## Step 1. Offchain Helper Functions

Initially, add helper functions that update stateful properties in a manner **identical** to the public methods.

These functions are defined within the `offchainUpdates` object:

```ts
class CrowdfundReplay extends SmartContract {

    ...

    offchainUpdates: OffchainUpdates<CrowdfundReplay> = {
        'donate': (next: CrowdfundReplay, donator: PubKey, amount: bigint) => {
            next.donators.set(donator, amount)
        },
        'refund': (next: CrowdfundReplay, donator: PubKey) => {
            next.donators.delete(donator)
        },
    }

   ...
}
```

:::note
The object keys must match the public method names precisely.
:::

In our example, we only need two helper functions since the `collect` method doesn't alter any stateful properties.

## Step 2. Create Instance from Deployment Tx

Retrieve the deployment transaction using the contract ID. Subsequently, [recover](../how-to-write-a-contract/built-ins.md#fromtx) the contract instance from it.

```ts
// Recover instance from the deployment transaction
const tx = await provider.getTx(contractId.txId)
const instance = CrowdfundReplay.fromTx(
    tx,
    contractId.outputIndex,
    {
        donators: new HashedMap<PubKey, bigint>(),
    }
)
```

**Note**: For more details on the workings of the `fromTx()` and `getTransaction()` functions, refer to the documentation [here](../how-to-write-a-contract/built-ins.md#fromtx).

## Step 3. Replay Instance to Latest States

Invoke the `replayToLatest` function to acquire the latest contract instance.

```ts
import { replayToLatest } from 'scrypt-ts'

...

const latestInstance = await replayToLatest(instance, contractId)

if (latestInstance) {
    // The latest instance is now ready for use.
    ...
}
```

**Note**: If the `replayToLatest()` function yields `null`, it indicates that there have been no state changes for the contract instance. This scenario arises if the contract hasn't been interacted with since its deployment or if all state modifications have been reverted.

---
