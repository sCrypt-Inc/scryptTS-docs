---
sidebar_position: 11
---

# How to Build an Oracle Service

As described in [this tutorial](../tutorials/oracle.md), a blockchain oracle is a third-party service or agent that provides external data to a blockchain network. It is a bridge between the blockchain and the external world, enabling smart contracts to access, verify, and incorporate data from outside the blockchain. Specifically, the oracle service provides external data along with a [Rabin signature](https://en.wikipedia.org/wiki/Rabin_signature_algorithm) of the data, and the smart contract uses this data and verifies the signature before using it.

[Rabin signature](https://en.wikipedia.org/wiki/Rabin_signature_algorithm) is an alternative digital signature algorithm ([DSA](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm)) to [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) used in Bitcoin. The security of Rabin signature depends on the fact that calculating a modular square-root is as hard as integer factorisation. It has the beautiful **asymmetry** that **signature generation is computationally expensive, but signature verification is computationally cheap**. Therefore, here we choose to use Rabin signature to ensure the integrity of the external arbitrary data provided by the oracle. On one side, when Oracle provides data, it will sign the data, and these signatures are generated off-chain by the oracle. On the other side, when the data is used by smart contracts, only signature verification is required on-chain, which is computationally cheap.

![](../../static/img/oracle.png)

In this section, we will introduce how to build your own oracle service. For the backend framework, we use [NestJS](https://nestjs.com/) to demo, but you are good to use any familiar framework to build the service. For the Rabin signature part, we have already implemented a library [`rabinsig`](https://github.com/sCrypt-Inc/rabin), which can be imported and used directly.

The full complete code of this demo can be found on our [GitHub repo](https://github.com/sCrypt-Inc/oracle-demo).

## 1. Scaffold the project

Run the following command to create a `NestJS` project.

```bash
npx @nestjs/cli new oracle-demo
```

Then install the project dependencies.

```bash
cd oracle-demo
npm install
npm install --save rabinsig
```

## 2. Generate signatures

An oracle may provide multiple pieces of data, each requiring a signature. We implement a common service, so that it can be reused and called in different places.

The class `RabinService` will load and initialize a private key from ENVs. We add a method `sign` in this class, which takes one parameter `dataBuffer` representing the binary data to be signed.

```ts
import { Rabin } from 'rabinsig';

@Injectable()
export class RabinService {
  private rabin = new Rabin();
  // load and init Rabin private key from ENVs
  ...
  sign(dataBuffer: Buffer) {
    const dataHex = dataBuffer.toString('hex');
    const sig = this.rabin.sign(dataHex, this.privKey);
    return {
      data: dataHex,
      signature: {
        s: toBufferLE(sig.signature).toString('hex'),
        padding: '00'.repeat(sig.paddingByteCount),
      },
    };
  }
}
```

## 3. Add a timestamp API

Too see how it works, we implement a simple timestamp API. We first get the current timestamp, then convert it to a 4 bytes *Buffer* in little-endian, and sign the structed `data` lastly.

```ts
export function getTimestamp() {
  return Math.trunc(Date.now() / 1000);
}

@Get('/timestamp')
getTimestamp() {
  const timestamp = getTimestamp();
  const data = Buffer.concat([
    toBufferLE(V1Controller.MARKER.TIMESTAMP, 1), // api marker, 1 byte
    toBufferLE(timestamp, 4), // timestamp, 4 bytes LE
  ]);
  const sigResponse = this.rabinService.sign(data);
  return { timestamp, ...sigResponse };
}
```

The response of this API is as follows.

```json
{
  "timestamp":1700596603,
  "data":"017b0b5d65",
  "signature":{
    "s":"4fe8bbcdf26...",
    "padding":""
  }
}
```

For the smart contract, it is only necessary to focus on two parts, `data` and `signature`, and it will resolve and use `data` only when the `signature` verification is passed.

Note that the first byte in `data` is an identification marker, which not only indicates how the signed data is serialized, but also has a more important role in distinguishing the data from different interfaces.

Without this marker, the smart contract cannot distinguish which interface the passing-in data actually comes from. When oracle has two interfaces that return signed data of the same length, the attacker can pass the data returned from other interfaces to the contract, causing risks. Therefore, different APIs should use different marker values.

## 4. Add a coin price API

Here we use the [OKX API](https://www.okx.com/docs-v5/en) to obtain the currency price, and this is only for the demo, regardless of the single point of failure problem.

First, wrap the OKX API. Note how the method handles the value of price. Because it is inconvenient for the smart contract to handle *float* numbers, a variable `decimal` is introduced to convert the price value into an integer.

```ts
/**
 * @param tradingPair e.g. `BSV-USDT`, `BTC-USDC`, etc
 * @param decimal decimal of the returned price
 * @returns an integer representing the price of the trading pair, e.g. return 1234 with decimal 2 means 12.34
 */
async getOkxPrice(tradingPair: string, decimal: number) {
  return axios
    .get(`https://www.okx.com/api/v5/market/ticker?instId=${tradingPair}`)
    .then((r) => Math.trunc(r.data.data[0].last * 10 ** decimal));
}
```

Then implement the oracle API following the flow of **obtaining data, serializing data, and signing data**.

```ts
@Get('price/:base/:query')
async getPrice(@Param('base') base: string, @Param('query') query: string) {
  // obtain data
  const tradingPair = `${query.toUpperCase()}-${base.toUpperCase()}`;
  const decimal = 4;
  const price = await this.v1Service.getOkxPrice(tradingPair, decimal);
  // serialize data
  const timestamp = getTimestamp();
  const data = Buffer.concat([
    toBufferLE(V1Controller.MARKER.PRICE, 1), // api marker, 1 byte
    toBufferLE(timestamp, 4), // timestamp, 4 bytes LE
    toBufferLE(price, 8), // price, 8 bytes LE
    toBufferLE(decimal, 1), // decimal, 1 byte
    Buffer.from(tradingPair), // trading pair
  ]);
  // sign data
  const sigResponse = this.rabinService.sign(data);
  return { timestamp, tradingPair, price, decimal, ...sigResponse };
}
```

## 5. Add more APIs

According to the previous introduction, you can add more APIs to oracle as needed, such as obtaining BSV chain info, etc., which will not be detailed described here.

## 6. Use oralce data in a smart contract

In [this tutorial](../tutorials/oracle.md), we introduced how to verify and use oracle data in smart contracts.

To verify signatures in smart contracts, we need to install the `scrypt-ts-lib` library.

```bash
npm install --save scrypt-ts-lib
```

Then add the contract under folder `src/contracts`. Here we also use the [PriceBet](https://github.com/sCrypt-Inc/oracle-demo/blob/master/src/contracts/priceBet.ts) contract. You can refer to file [priceBet.e2e-spec.ts](https://github.com/sCrypt-Inc/oracle-demo/blob/master/src/contracts/priceBet.ts) for the full complete test code.
