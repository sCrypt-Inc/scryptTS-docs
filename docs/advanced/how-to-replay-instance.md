# How to Replay Instance to the latest states

With [sCrypt Service](./how-to-integrate-scrypt-service.md) and [sCrypt client](./how-to-integrate-scrypt-service.md#step-1-initialize-client), we can easily create a contract instance with the latest state as follows.

```ts
const currentInstance = await Scrypt.contractApi.getLatestInstance(
    Counter,
    contractId
)
```

However, it doesn't work for the smart contract with states of type [HashedMap](../how-to-write-a-contract/built-ins.md#hashedmap) or [HashedSet](../how-to-write-a-contract/built-ins.md#hashedset), since each instance only contains hashed values, not originals.

In this section, we will take [contract CrowdfundReplay](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/crowdfundReplay.ts) `src/contracts/crowdfundReplay.ts` as an example, and introduce how to replay these contract instances to the latest states.

This crowdfund contract contains a HahsedMap `donators` record of the donors' public key and their donation satoshi amount.

```ts
export type Donators = HashedMap<PubKey, bigint>

export class CrowdfundReplay extends SmartContract {
	
	@prop(true)
	donators: Donators
	
	....
}
```

There are three public methods in this contract:

- `donate` will add an entry to the HashedMap
- `refund` will remove the corresponding donator in the map
- `collect` will destroy the contract and it doesn't update any stateful properties

```ts
export type Donators = HashedMap<PubKey, bigint>

export class CrowdfundReplay extends SmartContract {
	...

	@method()
    public donate(donator: PubKey, amount: bigint) {
        ...
        // can only donate once
        assert(!this.donators.has(donator), 'donator already presents')
		// add an entry to the map
        this.donators.set(donator, amount)
        ...
    }

    // donators can be refunded at any time
    @method()
    public refund(donator: PubKey, amount: bigint, sig: Sig) {
        ...
        // whether donated before
        assert(this.donators.canGet(donator, amount), 'not donated before')
        // remove the donator
        assert(this.donators.delete(donator), 'remove donator failed')
        ...
    }

    // collect pledged fund
    @method()
    public collect(sig: Sig) {
        ...
    }
}
```

Now, we can replay the contract instance to the latest states according to the following three steps.

## Step 1. Offchain Helper Functions

First, add helper functions to update stateful properties **exactly the same** as public methods.

```ts
// for `donate` public method
applyOffchainUpdatesForDonate(donator: PubKey, amount: bigint) {
    this.donators.set(donator, amount)
}

// for `refund`
applyOffchainUpdatesForRefund(donator: PubKey) {
    this.donators.delete(donator)
}
```

:::note
Those method names **MUST** follow the pattern `applyOffchainUpdatesForXxx` where `Xxx` is the name of the corresponding public method with first letter capitalized
:::

In this example, we only need to add two helper functions because `collect` doesn't change any stateful properties.

## Step 2. Create Instance from Deployment Tx

Get the deployment transaction from contract ID, then [recover](../how-to-write-a-contract/built-ins.md#fromtx) contract instance from it.

```ts
import { getTransaction } from './utils/replayHelper'

// recover instance from deploy transaction
const tx = await getTransaction(contractId.txId)
const instance = CrowdfundReplay.fromTx(
    tx,
    contractId.outputIndex,
    {
        donators: new HashedMap<PubKey, bigint>(),
    }
)
```

## Step 3. Replay Instance to Latest States

Call function `replayToLatest` to get the latest contract instance.

```ts
import { replayToLatest } from './utils/replayHelper'

// replay to get latest instance
const latestInstance = await replayToLatest(instance, contractId)
if (latestInstance) {
    // the latest instance is ready to use here
    ...
}
```

You can also refer to the full complete [test code](https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/crowdfundReplay.test.ts#L109-L137) for more details.
