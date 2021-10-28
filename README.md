# 🤖 `synobot-discord`

Install at https://synobot.seby.io

More information can be found at [@glenstack/cf-workers-discord-bot](https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-discord-bot).

## Getting Started

This project is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). If you are not already familiar with the tool, we recommend that you install the tool and configure it to work with your [Cloudflare account](https://dash.cloudflare.com). Documentation can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler/).

1. Create a new discord app https://discord.com/developers/applications

2. Modify [config.ts](config.ts) with your app credentials

```js
const clientId = "";
const publicKey = "";
const secret = SECRET;

export {clientId, publicKey, secret}
```

### Formatting

This project uses [`prettier`](https://prettier.io/) for formatting. To invoke, run `npm run format`.

### Previewing and Publishing

```sh
npm run lint
# CLIENT SECRET
wrangler secret put SECRET
wrangler publish
https://synobot.seby.io/setup
```
