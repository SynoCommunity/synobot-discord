import {
  ApplicationCommand,
  InteractionHandler,
} from '@glenstack/cf-workers-discord-bot'

import { command, handler } from '../create-commands'

const badrequestCommand: ApplicationCommand = command(
  'badrequest',
  'Explain that the NAS endpoint is not for browsers',
)
const badrequestHandler: InteractionHandler = handler(
  `"Bad Request" is expected as the endpoint is for the NAS API and not intended for the browser. You can view the package list at <https://synocommunity.com/packages>
Also see: [FAQ: I'm seeing a 400 Bad Request, The browser (or proxy) sent a request that this server could not understand](<https://github.com/SynoCommunity/spksrc/wiki/Frequently-Asked-Questions#im-seeing-a-400-bad-request-the-browser-or-proxy-sent-a-request-that-this-server-could-not-understand>)`,
)

export { badrequestCommand, badrequestHandler }
