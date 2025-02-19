[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / p2sh

# Function: p2sh()

> **p2sh**(`a`, `opts`?): [`Payment`](../interfaces/Payment.md)

Defined in: [ts\_src/payments/p2sh.ts:29](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/p2sh.ts#L29)

Creates a Pay-to-Script-Hash (P2SH) payment object.

## Parameters

### a

[`Payment`](../interfaces/Payment.md)

The payment object containing the necessary data.

### opts?

[`PaymentOpts`](../interfaces/PaymentOpts.md)

Optional payment options.

## Returns

[`Payment`](../interfaces/Payment.md)

The P2SH payment object.

## Throws

If the required data is not provided or if the data is invalid.
