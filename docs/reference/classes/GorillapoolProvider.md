[scrypt-ts](../README.md) / GorillapoolProvider

# Class: GorillapoolProvider

The GorillapoolProvider is backed by [gorillapool][https://gorillapool.io/swagger/](https://gorillapool.io/swagger/)

## Hierarchy

- [`Provider`](Provider.md)

  ↳ **`GorillapoolProvider`**

## Table of contents

### Constructors

- [constructor](GorillapoolProvider.md#constructor)

### Properties

- [\_isProvider](GorillapoolProvider.md#_isprovider)
- [\_network](GorillapoolProvider.md#_network)
- [\_provider](GorillapoolProvider.md#_provider)
- [captureRejectionSymbol](GorillapoolProvider.md#capturerejectionsymbol)
- [captureRejections](GorillapoolProvider.md#capturerejections)
- [defaultMaxListeners](GorillapoolProvider.md#defaultmaxlisteners)
- [errorMonitor](GorillapoolProvider.md#errormonitor)

### Methods

- [addListener](GorillapoolProvider.md#addlistener)
- [connect](GorillapoolProvider.md#connect)
- [emit](GorillapoolProvider.md#emit)
- [eventNames](GorillapoolProvider.md#eventnames)
- [getBalance](GorillapoolProvider.md#getbalance)
- [getEstimateFee](GorillapoolProvider.md#getestimatefee)
- [getFeePerKb](GorillapoolProvider.md#getfeeperkb)
- [getMaxListeners](GorillapoolProvider.md#getmaxlisteners)
- [getNetwork](GorillapoolProvider.md#getnetwork)
- [getTransaction](GorillapoolProvider.md#gettransaction)
- [isConnected](GorillapoolProvider.md#isconnected)
- [listUnspent](GorillapoolProvider.md#listunspent)
- [listenerCount](GorillapoolProvider.md#listenercount)
- [listeners](GorillapoolProvider.md#listeners)
- [off](GorillapoolProvider.md#off)
- [on](GorillapoolProvider.md#on)
- [once](GorillapoolProvider.md#once)
- [prependListener](GorillapoolProvider.md#prependlistener)
- [prependOnceListener](GorillapoolProvider.md#prependoncelistener)
- [rawListeners](GorillapoolProvider.md#rawlisteners)
- [removeAllListeners](GorillapoolProvider.md#removealllisteners)
- [removeListener](GorillapoolProvider.md#removelistener)
- [sendRawTransaction](GorillapoolProvider.md#sendrawtransaction)
- [sendTransaction](GorillapoolProvider.md#sendtransaction)
- [setMaxListeners](GorillapoolProvider.md#setmaxlisteners)
- [updateNetwork](GorillapoolProvider.md#updatenetwork)
- [getEventListeners](GorillapoolProvider.md#geteventlisteners)
- [isProvider](GorillapoolProvider.md#isprovider)
- [listenerCount](GorillapoolProvider.md#listenercount-1)
- [on](GorillapoolProvider.md#on-1)
- [once](GorillapoolProvider.md#once-1)
- [setMaxListeners](GorillapoolProvider.md#setmaxlisteners-1)

## Constructors

### constructor

• **new GorillapoolProvider**()

#### Overrides

[Provider](Provider.md).[constructor](Provider.md#constructor)

#### Defined in

dist/providers/gorillapool-provider.d.ts:10

## Properties

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

[Provider](Provider.md).[_isProvider](Provider.md#_isprovider)

#### Defined in

dist/bsv/abstract-provider.d.ts:97

___

### \_network

• `Private` **\_network**: `any`

#### Defined in

dist/providers/gorillapool-provider.d.ts:8

___

### \_provider

• `Private` **\_provider**: `any`

#### Defined in

dist/providers/gorillapool-provider.d.ts:9

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Provider.md#capturerejectionsymbol)

#### Inherited from

[Provider](Provider.md).[captureRejectionSymbol](Provider.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:328

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Provider](Provider.md).[captureRejections](Provider.md#capturerejections)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Provider](Provider.md).[defaultMaxListeners](Provider.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:334

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Provider.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[Provider](Provider.md).[errorMonitor](Provider.md#errormonitor)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:327

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`GorillapoolProvider`](GorillapoolProvider.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[addListener](Provider.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:354

___

### connect

▸ **connect**(): `Promise`<[`GorillapoolProvider`](GorillapoolProvider.md)\>

Implement the connection provider, for example, verify the api key during the connection process.

#### Returns

`Promise`<[`GorillapoolProvider`](GorillapoolProvider.md)\>

a connected provider. Throw an exception if the connection fails.

#### Overrides

[Provider](Provider.md).[connect](Provider.md#connect)

#### Defined in

dist/providers/gorillapool-provider.d.ts:12

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Provider](Provider.md).[emit](Provider.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:610

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[Provider](Provider.md).[eventNames](Provider.md#eventnames)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:669

___

### getBalance

▸ **getBalance**(`address?`): `Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

Get the balance of BSVs in satoshis for an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | [`Address`](bsv.Address.md) | The query address. |

#### Returns

`Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

A promise which resolves to the address balance status.

#### Overrides

[Provider](Provider.md).[getBalance](Provider.md#getbalance)

#### Defined in

dist/providers/gorillapool-provider.d.ts:17

___

### getEstimateFee

▸ **getEstimateFee**(`tx`): `Promise`<`number`\>

Get a best guess of the fee for a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | A transaction object to estimate. |

#### Returns

`Promise`<`number`\>

The estimated fee in satoshis.

#### Inherited from

[Provider](Provider.md).[getEstimateFee](Provider.md#getestimatefee)

#### Defined in

dist/bsv/abstract-provider.d.ts:61

___

### getFeePerKb

▸ **getFeePerKb**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The fee rate for sending transactions through this provider.

#### Overrides

[Provider](Provider.md).[getFeePerKb](Provider.md#getfeeperkb)

#### Defined in

dist/providers/gorillapool-provider.d.ts:22

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](GorillapoolProvider.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[Provider](Provider.md).[getMaxListeners](Provider.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:526

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../interfaces/bsv.Networks.Network.md)\>

#### Returns

`Promise`<[`Network`](../interfaces/bsv.Networks.Network.md)\>

The network this provider is connected to.

#### Overrides

[Provider](Provider.md).[getNetwork](Provider.md#getnetwork)

#### Defined in

dist/providers/gorillapool-provider.d.ts:14

___

### getTransaction

▸ **getTransaction**(`txHash`): `Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Get a transaction from the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | The hash value of the transaction. |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

The query result with the transaction information.

#### Overrides

[Provider](Provider.md).[getTransaction](Provider.md#gettransaction)

#### Defined in

dist/providers/gorillapool-provider.d.ts:21

___

### isConnected

▸ **isConnected**(): `boolean`

check if provider is ready

#### Returns

`boolean`

#### Overrides

[Provider](Provider.md).[isConnected](Provider.md#isconnected)

#### Defined in

dist/providers/gorillapool-provider.d.ts:11

___

### listUnspent

▸ **listUnspent**(`address`, `options?`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

Get a list of the P2PKH UTXOs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](bsv.Address.md) | The address of the returned UTXOs belongs to. |
| `options?` | [`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md) | The optional query conditions, see details in `UtxoQueryOptions`. |

#### Returns

`Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

A promise which resolves to a list of UTXO for the query options.

#### Overrides

[Provider](Provider.md).[listUnspent](Provider.md#listunspent)

#### Defined in

dist/providers/gorillapool-provider.d.ts:16

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[Provider](Provider.md).[listenerCount](Provider.md#listenercount)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:616

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Provider](Provider.md).[listeners](Provider.md#listeners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:539

___

### off

▸ **off**(`eventName`, `listener`): [`GorillapoolProvider`](GorillapoolProvider.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[off](Provider.md#off)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:499

___

### on

▸ **on**(`eventName`, `listener`): [`GorillapoolProvider`](GorillapoolProvider.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[on](Provider.md#on)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:385

___

### once

▸ **once**(`eventName`, `listener`): [`GorillapoolProvider`](GorillapoolProvider.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[once](Provider.md#once)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:414

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`GorillapoolProvider`](GorillapoolProvider.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[prependListener](Provider.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:634

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`GorillapoolProvider`](GorillapoolProvider.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[prependOnceListener](Provider.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:650

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Provider](Provider.md).[rawListeners](Provider.md#rawlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:569

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`GorillapoolProvider`](GorillapoolProvider.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[removeAllListeners](Provider.md#removealllisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:510

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`GorillapoolProvider`](GorillapoolProvider.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[removeListener](Provider.md#removelistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:494

___

### sendRawTransaction

▸ **sendRawTransaction**(`rawTxHex`): `Promise`<`string`\>

Send a raw transaction hex string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTxHex` | `string` | The raw transaction hex string to send. |

#### Returns

`Promise`<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

#### Overrides

[Provider](Provider.md).[sendRawTransaction](Provider.md#sendrawtransaction)

#### Defined in

dist/providers/gorillapool-provider.d.ts:15

___

### sendTransaction

▸ **sendTransaction**(`tx`): `Promise`<`string`\>

Send a transaction object.

**`Throws`**

If there is a problem with the `tx` object during serialization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | The transaction object to send. |

#### Returns

`Promise`<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

#### Inherited from

[Provider](Provider.md).[sendTransaction](Provider.md#sendtransaction)

#### Defined in

dist/bsv/abstract-provider.d.ts:74

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`GorillapoolProvider`](GorillapoolProvider.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`GorillapoolProvider`](GorillapoolProvider.md)

#### Inherited from

[Provider](Provider.md).[setMaxListeners](Provider.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:520

___

### updateNetwork

▸ **updateNetwork**(`network`): `Promise`<`boolean`\>

update provider network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](../interfaces/bsv.Networks.Network.md) | Network type to be updated |

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Provider](Provider.md).[updateNetwork](Provider.md#updatenetwork)

#### Defined in

dist/providers/gorillapool-provider.d.ts:13

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Provider](Provider.md).[getEventListeners](Provider.md#geteventlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:299

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

Check if an object is a `Provider`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The target object |

#### Returns

value is Provider

Returns `true` if and only if `object` is a Provider.

#### Inherited from

[Provider](Provider.md).[isProvider](Provider.md#isprovider)

#### Defined in

dist/bsv/abstract-provider.d.ts:103

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[Provider](Provider.md).[listenerCount](Provider.md#listenercount-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:271

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[Provider](Provider.md).[on](Provider.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:254

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Provider](Provider.md).[once](Provider.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:194

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Provider](Provider.md).[once](Provider.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:195

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[Provider](Provider.md).[setMaxListeners](Provider.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:317
