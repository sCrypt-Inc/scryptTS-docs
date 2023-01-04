---
sidebar_position: 4
---

# How to Debug a Contract

Debugging a scryptTS contract is as easy as debugging TypeScript, since it is just TypeScript.


## Use console.log()

You can use `console.log` to print the value of an expression:


```ts
export class Demo extends SmartContract {

    @prop()
    x: bigint;

    @prop()
    y: bigint;

    constructor(x: bigint, y: bigint) {
        super(x, y);
        this.x = x;
        this.y = y;
    }

    @method()
    sum(a: bigint, b: bigint): bigint {
        return a + b;
    }

    @method()
    public add(z: bigint) {
        console.log(`z: ${z}`) // print the value of z
        console.log(`sum: ${this.x + this.y}`) // print the value of this.x + this.y
        assert(z == this.sum(this.x, this.y));
    }
}

Demo.compile().then(()=> {
    let demo = new Demo(1n, 2n);
    demo.add(3n);
})
```

Run this command in this [example](https://github.com/sCrypt-Inc/scryptTS-examples):

```bash
ts-node src/contracts/demo.ts
```

You will see the following output:

```
z: 3
sum: 3
```

## Use Visual Studio Code debugger


First make sure you have turned on the `sourceMap` setting in your `tsconfig.json`:

```json
{
    "compilerOptions": {
        "target": "es2021",
        "module": "commonjs",
        "outDir": "dist",
        "sourceMap": true
        ...
    }
}
```

As with [debugging TypeScript programs](https://code.visualstudio.com/docs/TypeScript/TypeScript-debugging), you need to create a `launch.json`.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch demo",
            "skipFiles": [
                "<node_internals>/**",
                "**/node_modules/**",
            ],
            "resolveSourceMapLocations": [
                "!**/node_modules/**",
            ],
            "program": "${workspaceRoot}/src/contracts/demo.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": ["${workspaceRoot}/dist/**/*.js"]
        },
        
    ]
}
```

Now you can start setting breakpoints and press **F5** to start the debugger.


![](../../static/img/debugging1.gif)

If you want to debug a unit test written with **Mocha**, use the following configuration:

```json
{
    "type": "node",
    "request": "launch",
    "name": "Launch Mocha",
    "skipFiles": [
        "<node_internals>/**",
        "**/node_modules/**",
    ],
    "resolveSourceMapLocations": [
        "!**/node_modules/**",
    ],
    "program": "${workspaceRoot}/node_modules/.bin/_mocha",
    "args": [
        "${workspaceRoot}/dist/tests/**/demo.test.js",
        "--colors",
        "-t",
        "100000"
    ],
    "preLaunchTask": "tsc: build - tsconfig.json",
    "outFiles": []
}
```

![](../../static/img/debugging2.gif)

