---
sidebar_position: 2
---

# Tutorial 2: Time-Lock

## Overview

In this tutorial, we will go over how to create a smart contract, which has a public method, that can only be unlocked once a certain point in time has passed.

### What is a time-lock?

In the context of smart contracts, a time-lock is a feature that restricts the spending of specific bitcoins until a specified future time or block height is reached. sCrypt offers capabilities to implement these types of time-locks in your smart contracts, providing a mechanism to ensure a transaction won't be included in a block before a certain point in time or block height is reached. In other words, the smart contract's method cannot be successfully invoked until that point in time has passed.

### Implementation

In sCrypt, a time-lock can be enforced by constraining the `locktime` and `sequence` values of the [script execution context](../how-to-write-a-contract/scriptcontext). This context pertains to the execution of the transaction, which includes a call to the smart contract's public method. Thus, if the value is constrained – for example, the `locktime` needs to be above the value `1690236000` (a Unix timestamp) – then this transaction cannot be included into the blockchain until that point in time.

Note that the value of `locktime` can either be a Unix timestamp or a block height. For this value to be enforced, `sequence` also needs to be set to a value less than `0xffffffff`.

## Contract properties

Let's declare the properties of our smart contract:

```ts
// Any value of locktime, that is less than the value below, is 
// considered to be a block height. Otherwise it is considered to be 
// an Unix timestamp.
static readonly LOCKTIME_BLOCK_HEIGHT_MARKER = 500000000

// The value of the sequence field needs to be less than the value below
// in order for the locktime to be enforced by the Bitcoin network.
static readonly UINT_MAX = 0xffffffffn

// Time after which our public method can be called.
@prop()
readonly matureTime: bigint // Can be a timestamp or block height.
```

## The Time-Locked Public Method

```ts
@method()
public unlock() {
    // Ensure nSequence is less than UINT_MAX.
    assert(
        this.ctx.sequence < CheckLockTimeVerify.UINT_MAX,
        'input sequence should less than UINT_MAX'
    )

    // Check if using block height.
    if (
        this.matureTime < CheckLockTimeVerify.LOCKTIME_BLOCK_HEIGHT_MARKER
    ) {
        // Enforce nLocktime field to also use block height.
        assert(
            this.ctx.locktime <
                CheckLockTimeVerify.LOCKTIME_BLOCK_HEIGHT_MARKER,
            'locktime should be less than 500000000'
        )
    }
    assert(
        this.ctx.locktime >= this.matureTime,
        'locktime has not yet expired'
    )
}
```

We can observe that our public method first asserts that the `sequence` value of our calling transaction is less than `UINT_MAX`. This ensures that the Bitcoin network will enforce the `locktime` value.

Next, it checks if our target time-lock value indicates a block height or a Unix timestamp. If it's using a block height, the method also ensures that the `locktime` value of the calling transaction corresponds to a block height.

Lastly, the method verifies that the value of `locktime` is greater than or equal to the time-lock we have set in the contract's property.

## Conclusion

Congratulations! You have completed the time-lock tutorial!

The full code along with [tests](https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/local/cltv.test.ts) can be found in sCrypt's [boilerplate repository](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/cltv.ts).

