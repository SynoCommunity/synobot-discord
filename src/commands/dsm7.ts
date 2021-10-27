import {
  ApplicationCommand,
  InteractionHandler,
} from '@glenstack/cf-workers-discord-bot'

import { command, handler } from '../create-commands'

const dsm7Command: ApplicationCommand = command('dsm7', 'DSM7 Package Status')
const dsm7Handler: InteractionHandler = handler(
  `DSM7 package progress: <https://github.com/SynoCommunity/spksrc/issues/4524>`,
)

export { dsm7Command, dsm7Handler }
