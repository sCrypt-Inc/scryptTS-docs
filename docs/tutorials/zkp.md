---
sidebar_position: 6
---

# Tutorial 6: Zero Knowledge Proofs

## Overview 

In this tutorial we will go over how to create a zero-knowledge proof (ZKP) and verify it on Bitcoin using sCrypt.

### What are zk-SNARKS?

SNARK (zero-knowledge Succinct Non-interactive ARguments of Knowledge) is a type of ZKP that is amenable for blockchains. The generated proof is “succinct” and “non-interactive”: a proof is only a few hundred bytes and can be verified in constant time and within a few milliseconds, without needing to ask additional questions of the prover. Together, these properties make zk-SNARK especially suitable for blockchains, where on-chain storage and computation can be expensive and senders often go offline after sending a transaction. 

A proof is constructed off-chain by a prover who generates the proof using a secret input (often referred to as the "witness") and a public input. The prover can then use this proof as an input for an sCrypt smart contract, which can verify the validity of the proof using a verification key and the public input.
![](../../static/img/zksnark-verifier.png)
[Source](https://www.altoros.com/blog/securing-a-blockchain-with-a-noninteractive-zero-knowledge-proof/)


There are many tools for creating such proofs, [ZoKrates](https://github.com/sCrypt-Inc/zokrates) and [SnarkJS](https://github.com/sCrypt-Inc/snarkjs) are among the most popular. 

In this example we will use ZoKrates. It provides a python-like higher-level language for developers to code the computational problem they want to prove.

For a more comprehensive explanation of zk-SNARKS and how they work, we recommend reading [this blog post](https://xiaohuiliu.medium.com/zk-snarks-on-bitcoin-239d96d182bd).

## Install ZoKrates

Run the following command to install [released binaries](https://github.com/sCrypt-Inc/zokrates/releases):

```sh
curl -Ls https://scrypt.io/scripts/setup-zokrates.sh | sh -s -
```

or build from source:

```sh
git clone https://github.com/sCrypt-Inc/zokrates
cd ZoKrates
cargo +nightly build -p zokrates_cli --release
cd target/release
```

## ZoKrates Workflow

### 1. Design a circuit

Create a new ZoKrates file named `factor.zok` with the following content:

```python
// p, q are the factors of n
def main(private field p, private field q, field n) {
    assert(p * q == n);
    assert(p > 1);
    assert(q > 1);
    return;
}
```

This simple circuit/program proves one knows a factorization of an integer `n` into two integers, without revealing the factors. The circuit has two private inputs named `p` and `q` and one public input named `n`.


### 2. Compile the circuit

Compile the circuit with the following command:

```sh
zokrates compile -i factor.zok
```

This generates two files that encode the circuit in binary and human-readable format.

### 3. Setup

This generates a proving key and a verification key for this circuit.

```sh
zokrates setup
```

### 4. Calculate a witness

A proof attests that a prover knows some secret/private information that satisfies the original program. This secret information is called witness. In the following example, `7` and `13` are the witnesses, as they are factors of `91`.

```sh
zokrates compute-witness -a 7 13 91
```

A file named `witness` is generated.

### 5. Creating a proof

The following command produces a proof, using both the proving key and the witness:

```sh
zokrates generate-proof
```

The resulting file `proof.json` looks like the following:

```json
{
  "scheme": "g16",
  "curve": "bn128",
  "proof": {
    "a": [
      "0x0a7ea3ca37865347396645d017c7623431d13103e9107c937d722e5da15f352b",
      "0x040c202ba8fa153f84af8dabc2ca40ff534f54efeb3271acc04a70c41afd079b"
    ],
    "b": [
      [
        "0x0ec1e4faea792762de35dcfd0da0e6859ce491cafad455c334d2c72cb8b24550",
        "0x0985ef1d036b41d44376c1d42ff803b7cab9f9d4cf5bd75298e0fab2d109f096"
      ],
      [
        "0x265151afd8626b4c72dfefb86bac2b63489423d6cf895ed9fa186548b0b9e3f3",
        "0x301f2b356621408e037649d0f5b4ad5f4b2333f58453791cc24f07d5673349bf"
      ]
    ],
    "c": [
      "0x2b75a257d68763100ca11afb3beae511732c1cd1d3f1ce1804cbc0c26043cb6b",
      "0x2f80c706b58482eec9e759fce805585595a76c27e37b67af3463414246fbabbd"
    ]
  },
  "inputs": [
    "0x000000000000000000000000000000000000000000000000000000000000005b"
  ]
}
```

### 6. Export an sCrypt verifier

Using our version of ZoKrates, we can export a project template, which will contain a verifier for our circuit. Simply run the following command:

```sh
zokrates export-verifier-scrypt
``` 

This will create a directory named `verifier`, containing the project. Let's set it up. Run the following:

```sh
cd verifier && git init && npm i
```

Now the verifier is ready to be used. In the following section we will go over the code and show how to use it.


### 7. Run the sCrypt Verifier

In the generated project, let's open the file `src/contracts/verifier.ts`. This file contains all the sCrypt code that is used to verify a proof on-chain. This includes an elliptic curve implementation along with a library that implements pairings over that elliptic curve and lastly the implementation of the proof verification algorithm. In our example the [`BN-256` elliptic curve](https://hackmd.io/@jpw/bn254) is being used along with the [`Groth-16` proof system](https://eprint.iacr.org/2016/260.pdf).

As a developer you only need to know about the main `Verifier` contract. Let's take a look at its implementation:

```ts
export class Verifier extends SmartContract {
    
    @prop()
    vk: VerifyingKey

    constructor(vk: VerifyingKey) {
        super(...arguments)
        this.vk = vk
    }
    
    @method()
    public verifyProof(
        inputs: FixedArray<bigint, 1>,
        proof: Proof,
    ) {
        assert(G16BN256.verify(this.vk, inputs, proof))
    }

}
```

As we can see, the contract has a single property, namely the verification key. ZoKrates already created an object named `VERIFYING_KEY_DATA` in the same source file, which contains the values of the VK. We will use them later. 

The contract also has a public method named `verifyProof`. As the name implies it verifies a ZK proof and can be unlocked by a valid one. As inputs it takes the public values of our proof (in our case the product of the factors) and the proof itself. It calls a single function:

```ts
G16BN256.verify(this.vk, inputs, proof)
```

We can observe, that the implementation of the verification algorithm takes in the verifying key, the public inputs and the proof. It's important to note that the proof is cryptographically tied to the verifying key and thus must be a proof about the correct ZoKrates program (`factor.zok`).

The current method accepts a proof for any number, as it takes the public information as an input. Let's modify a bit and make the value fixed:

```ts
@method()
public verifyProof(
    proof: Proof
) {
    const inputs: FixedArray<bigint, 1> = [ 441668n ]
    assert(G16BN256.verify(this.vk, inputs, proof))
}
```

Now our smart contract will only accept a proof of knowing the factors of the number `441668`.

The generated project will also contain tests that demonstrate the usage of our verifier. Let's take a look at the code in `tests/local/verifier.test.ts`.

```ts
...

let verifier: Verifier

before(async () => {
    await Verifier.compile()
    // Construct VerifyingKey struct with pre-calculated miller(beta, alpha)
    let alpha = BN256.createCurvePoint(VERIFYING_KEY_DATA.alpha)
    let beta = BN256.createTwistPoint(VERIFYING_KEY_DATA.beta)
    let millerb1a1 = BN256Pairing.miller(beta, alpha)
    
    let vk: VerifyingKey = {
       millerb1a1: millerb1a1,
       gamma: VERIFYING_KEY_DATA.gamma,
       delta: VERIFYING_KEY_DATA.delta,
       gammaAbc: VERIFYING_KEY_DATA.gammaAbc
    }
    
    verifier = new Verifier(vk)
})

it('should pass verify proof', () => {
    // TODO: Link proof.json (relative to project root dir)
    const proofPath = '../proof.json'
    const proof: Proof = parseProofFile(proofPath)

    // TODO: Insert public param values here (don't forget to adjust arr size):
    const inputs: FixedArray<bigint, 1> = [ 0n ]

    const result = verifier.verify((self) => {
        self.verifyProof(inputs, proof)
    })
    expect(result.success, result.error).to.be.true
})
```

We can observe that we need to adjust two things. The first one is the path to our `proof.json` file, which contains the proof created by ZoKrates. The second one are the values of the public inputs to our ZoKrates program. Because we already hardcoded this value into our contract in a previous step, we can adjust the code to the following:

```ts
it('should pass verify proof', () => {
    const proofPath = '../proof.json'
    const proof: Proof = parseProofFile(proofPath)

    const result = verifier.verify((self) => {
        self.verifyProof(proof)
    })
    expect(result.success, result.error).to.be.true
})
```

Now that everything is ready, let's run the verification. Run this in the projects root directory:

```sh
npm t
```

If everything is right, the command should pass and successfully verify our proof.


## Conclusion

Congratulations! You have successfully created a zk-SNARK and verified it using sCrypt.

If you want to learn how you can integrate zk-SNARKS into a fully fledged Bitcoin web application, take a look at our free [course](https://learn.scrypt.io/en/courses/Build-a-zkSNARK-based-Battleship-Game-on-Bitcoin-64187ae0d1a6cb859d18d72a), which will teach you how to create a ZK Battleship game.
Additionally, it teaches you to use [snarkjs/circom](https://github.com/sCrypt-Inc/snarkjs).

To know more about ZKP, you can refer to [this awesome list](https://github.com/sCrypt-Inc/awesome-zero-knowledge-proofs).
