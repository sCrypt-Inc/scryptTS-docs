[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / embed

# Function: embed()

> **embed**(`a`, `opts`?): [`Payment`](../interfaces/Payment.md)

Defined in: [ts\_src/payments/embed.ts:18](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/embed.ts#L18)

Embeds data in a Bitcoin payment.

## Parameters

### a

[`Payment`](../interfaces/Payment.md)

The payment object.

### opts?

[`PaymentOpts`](../interfaces/PaymentOpts.md)

Optional payment options.

## Returns

[`Payment`](../interfaces/Payment.md)

The modified payment object.

## Throws

If there is not enough data or if the output is invalid.
