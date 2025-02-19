[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / p2tr

# Function: p2tr()

> **p2tr**(`a`, `opts`?): [`Payment`](../interfaces/Payment.md)

Defined in: [ts\_src/payments/p2tr.ts:38](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/p2tr.ts#L38)

Creates a Pay-to-Taproot (P2TR) payment object.

## Parameters

### a

[`Payment`](../interfaces/Payment.md)

The payment object containing the necessary data for P2TR.

### opts?

[`PaymentOpts`](../interfaces/PaymentOpts.md)

Optional payment options.

## Returns

[`Payment`](../interfaces/Payment.md)

The P2TR payment object.

## Throws

If the provided data is invalid or insufficient.
