---
title: "buildStateOutputFT"
sidebar_position: 3
---

Any instance of `BSV20V1` or `BSV20V2` contains the `buildStateOutputFT` method. Unlike the regular `buildStateOutput` method, this method inscribes the subsequent amount with an appropriate [BSV-20 transfer inscription](https://docs.1satordinals.com/bsv20#transfer-all-modes). The method takes the number of tokens to be transferred to the subsequent output as an argument.

Below is an example of an FT counter contract:

```ts
class CounterFTV2 extends BSV20V2 {

    @prop(true)
    counter: bigint

    constructor(id: ByteString, max: bigint, dec: bigint, counter: bigint) {
        super(id, max, dec)
        this.init(...arguments)
        this.counter = counter
    }

    @method(SigHash.ANYONECANPAY_SINGLE)
    public inc(tokenAmt: bigint) {
        this.counter++

        const outputs = this.buildStateOutputFT(tokenAmt)

        assert(
            this.ctx.hashOutputs == hash256(outputs),
            'hashOutputs check failed'
        )
    }

}
```

Each iteration will contain the number of tokens that was passed via `tokenAmt`. Note that this amount cannot be larger than the amount in the previous iteration. If the amount is less than in the previous iteration, the remaining tokens will be returned as change.
