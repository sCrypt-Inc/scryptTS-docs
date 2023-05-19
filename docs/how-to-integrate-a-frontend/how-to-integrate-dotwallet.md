# How to integrate DotWallet


[DotWallet](https://www.DotWallet.com/en) is a lightweight wallet designed to help users easily and securely manage their digital assets. We will introduce how to integrate DotWallet.


## OAuth 2.0


DotWallet user authorization follows the standard authorization code flow of OAuth2. See [RFC6749](https://tools.ietf.org/html/rfc6749#section-4.1) for details. 


```
+----------+
| Resource |
|   Owner  |
|          |
+----------+
     ^
     |
    (B)
+----|-----+          Client Identifier      +---------------+
|         -+----(A)-- & Redirection URI ---->|               |
|  User-   |                                 | Authorization |
|  Agent  -+----(B)-- User authenticates --->|     Server    |
|          |                                 |               |
|         -+----(C)-- Authorization Code ---<|               |
+-|----|---+                                 +---------------+
  |    |                                         ^      v
 (A)  (C)                                        |      |
  |    |                                         |      |
  ^    v                                         |      |
+---------+                                      |      |
|         |>---(D)-- Authorization Code ---------'      |
|  Client |          & Redirection URI                  |
|         |                                             |
|         |<---(E)----- Access Token -------------------'
+---------+       (w/ Optional Refresh Token)
```

User authorization is based on Oauth2's Authorization Code grant. Authorization Code grant flow:

1. Construct URI. 

    Example URI: `https://api.ddpurse.com/v1/oauth2/authorize?client_id=YOUR-CLIENT-ID&redirect_uri=http%3A%2F%2FYOUR-REDIRECT-URL&response_type=code&state=YOUR-STATE&scope=user.info`

    URL Parameters:

    | Parameter    | Required | Description |
    | -------- | ------- | ------- |
    | client_id  | YES    | Developer’s dapp client_id    |
    | redirect_uri | YES     | The redirect URL after authorization. Needs to be url_encoded   |
    | state    | YES   | It is recommended to use a random string of more than 32 bits (such as UUID). The state is used to verify the consistency of the request and callback. This can prevent csrf attacks.  |
    |response_type |YES | Fill in the fixed value : `code` |
    |scope | YES | Authorization scope. The list of permissions that the user agrees to authorize. These permissions are required for certain API endpoints. Needs to be url_encoded. Use spaces to separate multiple permissions. For a list of currently supported scope permissions, please check the scope list below|

2. Redirect the user to the URI constructed in **1**
   
    After clicking the link, the user will be directed to the DotWallet authorization page. DotWallet will ask the user to log in, and then ask whether they agree to authorize the application for the listed permission scopes.

3. Receive the `code` through the callback uri.

    After the user agrees to authorization in **2**, DotWallet will redirect the client to the redirect_uri specified by the application. The authorization code code and the provided state will be included in the query parameters.

4. Exchange code for access_token. The access tokens are credentials used to access protected resources, which are issued by the authorization server.
   
:::warning
To avoid security issues, any request for using or obtaining `access_token` must be made from the backend server. Do not disclose your `client_id` and `client_secret` on the client side.
:::


## DotWallet Developer Platform

1. Before using DotWallet, you need to register and create a app on [DotWallet Developer Platform](https://developers.DotWallet.com/en).

![](../../static/img/DotWallet-create-dapp.png)

2. After creating the app, you will receive an email containing `app_id` and `secret`.


![](../../static/img/DotWallet-mail.png)

3. Next, you need to set [redirection URI](https://www.oauth.com/oauth2-servers/redirect-uris). Redirect URLs are a critical part of the OAuth flow. After a user successfully authorizes an application, the authorization server will redirect the user back to the application. For example, in the figure below, we filled in two redirection URIs.
  
- [https://classic.scrypt.io/tic-tac-toe/](https://classic.scrypt.io/tic-tac-toe) is the address used for product deployment.
- [http:/ /localhost:3000/tic-tac-toe/](http://localhost:3000/tic-tac-toe/) is used for development and debugging.

![](../../static/img/DotWallet-uris.png)


:::note
*Callback domain* in the form is the redirection URIs in OAuth. 
:::

## Development Environment 

sCrypt SDK provides `DotWalletSigner` for quick integration with DotWallet.

You can use `DotWalletDevOption` to create `DotWalletSigner`. Using `DotWalletDevOption` does not require to build a backend service. `DotWalletSigner` will automatically complete the authorization code grant flow for you on the front end.

:::note
`DotWalletDevOption` is only for development and debugging, otherwise it will leak your `client_secret` <sup>1</sup>. 
:::

```ts
/**
  * Please note that `DotWalletDevOption` is only used to create DotWalletSigner in development environment.
  * This Option should not be used in a production environment as it will expose your client_secret.
  */
export interface DotWalletDevOption {
     /** `app_id` received in the mail */
     client_id: string;
     /** `secret` received in the mail */
     client_secret: string;
     /** The url filled in the Callback domain */
     redirect_uri: string;
     /** A random string */
     state: string;
}
```

Here is a code example to create `DotWalletSigner` in `React`:


```ts
const state = localStorage.getItem("state")
    ? (localStorage.getItem("state") as string)
    : crypto.randomUUID();

localStorage.setItem("state", state);
const options = {
  client_id: "******",
  client_secret: "******",
  redirect_uri: `http://localhost:3000/tic-tac-toe/`,
  state: state,
};
const provider = new DefaultProvider();

const signerRef = useRef(new DotWalletSigner(options, provider));

const signer = signerRef.current;
```


Afterwards, you can use it as a signer like any other wallet as [before](./how-to-integrate-a-frontend.md#integrate-wallet). When the user clicks the login wallet button, the `requestAuth` method is called to access the wallet, and user is redirected to DotWallet's authorization page.


```ts
const onAuthenticated = async () => {
  const pubkey = await signer.getDefaultPubKey();

  setAlicePubkey(toHex(pubkey));

  setBobPubkey(toHex(pubkey));

  const balance = await signer.getBalance();

  setAliceBalance(balance.confirmed + balance.unconfirmed);
  setBobBalance(balance.confirmed + balance.unconfirmed);
  setConnected(true);
};

const walletLogin = async () => {
  try {
    const { isAuthenticated, error } = await signer.requestAuth();
    if (!isAuthenticated) {
      throw new Error(error);
    }

    onAuthenticated();
  } catch (error) {
    console.error("DotWallet login failed", error);
  }
};
```

![](../../static/img/DotWallet-auth.png)

After the user clicks **Agree to authorize** to log in, the page will be redirected to the `redirect_uri` given by the app. In this example, `redirect_uri` is the current page <sup>2</sup>.
We can tell whether it is a redirected page by seeing if the current query parameter has the `state` random string filled in when requesting to log in to the wallet. If yes, it will automatically call `getAccesstoken()` to get `accessToken`. After successful authentication, `DotwalletSigner` will automatically save the obtained `accessToken` in `localStorage`. 


```ts
useEffect(() => {
  if (signer.getStateFromUrl() === localStorage.getItem("state")) {
    signer.getAccesstoken();
  } else {
    signer.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        onAuthenticated();
      }
    });
  }
}, []);
```

After creating `DotWalletSigner` with `accessToken`, you can call all interfaces of `DotWalletSigner` like calling other [`signer`](../how-to-test-a-contract.md#signer).



## Production Environment 

Since the app secret and the obtained access_token have a very high security level, they must only be stored on the server and not allowed to be passed to the user agent.

The following code demonstrates how to get access token in [Express](https://expressjs.com/) web framework.


```js
// handle redirect_uri here.
app.use('/tic-tac-toe', async function(req, res, next) {

  const { query } = req;

  const {code, state } = query;

  if(code) {
    console.log('code', code)
    const superResponse = await superagent.post(`https://api.ddpurse.com/v1/oauth2/get_access_token`)
    .send({
        code,
        redirect_uri: 'http://localhost:3000/tic-tac-toe/',
        grant_type: "authorization_code",
        client_secret: "********",
        client_id: "********",
    });
  
    if(superResponse.ok) {
      const body = superResponse.body ? superResponse.body : JSON.parse(superResponse.text);
      const { code, data, msg } = body;
      if (code === 0) {
          const { access_token } = data;
          // save access_token
          res.redirect(`/tic-tac-toe?accessToken=${access_token}`);
      } else {
        res.send(`get accessToken failed: ${msg}`);
      }
    }
  } else {
    res.render(`index.html`);
  }
});
```


Get access token in frontend and use `DotWalletProdOption` to create a `DotWalletSigner`.


```ts
/**
 * This option can be used in both development environment and production environment.
 * See [access-token]{@link https://oauth.net/2/access-tokens} and [DotWallet APIs for authorization]{@link https://developers.DotWallet.com/documents/en/#authorization} to known how to get a access token.
 */
export interface DotWalletProdOption {
    accessToken: string;
}

const urlParams = new URLSearchParams(window.location.search);
const accessToken = urlParams.get("accessToken");

const provider = new DefaultProvider();

const signerRef = useRef(new DotWalletSigner({
  accessToken
}, provider));
```

Now you can access APIs of DotWalletSigner.

Congrats! You have completed the integration of DotWallet.
------

[1] `client_secret` is usually stored in the backend service. Use the request `accessToken`.

[2] `redirect_uri` only uses the current page in development environment. It usually uses a backend service as `redirect_uri` and serves the request with `accessToken` at the backend in production.

