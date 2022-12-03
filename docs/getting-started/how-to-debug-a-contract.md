---
sidebar_position: 4
---

# How to Debug a Contract

In the process of writing contracts and testing contracts, it will not be successful once. Usually it is necessary to debug it.

As with debugging TypeScript, there are two ways to debug it:


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

    @method
    sum(a: bigint, b: bigint): bigint {
        return a + b;
    }

    @method
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

Build and run with following CLI:

```bash
npm run build && node ./dist/contracts/demo.js
```

You will see the following output:

```
z: 3
sum: 3
```

## Use debugging feature of Visual Studio Code


First make sure you have turned on the `sourceMap` setting in your tsconfig:

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

As with [debugging TypeScript programs](https://code.visualstudio.com/docs/typescript/typescript-debugging), you need to create `launch.json`.

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
                "${workspaceFolder}/node_modules/**/*.js",
            ],
            "program": "${workspaceRoot}/contracts/demo.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": ["${workspaceRoot}/dist/**/*.js"]
        },
        
    ]
}
```

Now you can start setting breakpoints and press **F5** to start the debugger.


![](https://github.com/sCrypt-Inc/image-hosting/blob/master/scryptTS-docs/debugging.gif?raw=true)

If you want to debug a unit test written with **mocha**, use the following configuration:

```json
{
    "type": "node",
    "request": "launch",
    "name": "Launch mocha",
    "skipFiles": [
        "<node_internals>/**",
        "${workspaceFolder}/node_modules/**/*.js",
    ],
    "program": "${workspaceRoot}/node_modules/.bin/_mocha",
    "args": [
        "${workspaceRoot}/dist/tests/**/*.js",
        "--colors",
        "-t",
        "100000"
    ],
    "preLaunchTask": "tsc: build - tsconfig.json",
    "outFiles": []
}
```


