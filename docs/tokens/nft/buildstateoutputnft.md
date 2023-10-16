---
title: "buildStateOutputNFT"
sidebar_position: 2
---

Any instance of an `OrdinalNFT` contains the `buildStateOutputNFT` method. In contrast to the regular `buildStateOutput` method, this method also removes any inscription data that might be included in the smart contract's locking script. This is necessary because, within a stateful smart contract, we don't want the next iteration to re-inscribe the ordinal. Additionally, the `buildStateOutputNFT` method doesn't require a satoshi amount argument, as the amount is always 1 satoshi.

Below is an example of an ordinal counter contract:

```ts
class CounterNFT extends OrdinalNFT {

    @prop(true)
    counter: bigint

    constructor(counter: bigint) {
        super()
        this.init(counter)
        this.counter = counter
    }

    @method()
    public incOnchain() {
        this.counter++
        
        ...

        let outputs = this.buildStateOutputNFT()  // Does not include inscription in the next iteration.
        outputs += this.buildChangeOutput()
        assert(
            this.ctx.hashOutputs == hash256(outputs),
            'hashOutputs check failed'
        )
    }

}
```

See the [complete code on GitHub](https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/contracts/counterNFT.ts).
