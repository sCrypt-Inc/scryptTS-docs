---
sidebar_position: 7
---

# How to Debug a Contract

Debugging a sCrypt contract is as easy as debugging TypeScript, since it is just TypeScript.


## Use console.log()

You can use `console.log()` to print output to the console.


```ts
export class Demo extends SmartContract {

    @prop()
    readonly x: bigint

    @prop()
    readonly y: bigint

    constructor(x: bigint, y: bigint) {
        super(...arguments)
        this.x = x
        this.y = y
    }

    @method()
    sum(a: bigint, b: bigint): bigint {
        return a + b
    }

    @method()
    public add(z: bigint) {
        console.log(`z: ${z}`) // print the value of z
        console.log(`sum: ${this.x + this.y}`) // print the value of this.x + this.y
        assert(z == this.sum(this.x, this.y), 'incorrect sum')
    }
}
```
[Try it on Replit](https://replit.com/@msinkec/scryptTS-console-logging)

After running the code, you should see the following output:

```
z: 3
sum: 3
```


## Use Visual Studio Code debugger

You can use VS Code to debug sCrypt contracts, the same way as any other TypeScript programs. To learn more about the VS Code TypeScript debugger, please refer to the [official documentation](https://code.visualstudio.com/docs/TypeScript/TypeScript-debugging).

## Debug a ScriptContext Failure
One common failure is caused by IContext assertions, like
```typescript
assert(this.checkOutputs(outputs), 'mismatch outputs');
```

Refer to [this guide](advanced/how-to-debug-scriptcontext.md) to debug such failures.

