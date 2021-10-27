import {
  ApplicationCommand,
  InteractionHandler,
} from '@glenstack/cf-workers-discord-bot'

import { command, handler } from '../create-commands'

const sickchillCommand: ApplicationCommand = command(
  'sickchill',
  'sickchill beta',
)
const sickchillHandler: InteractionHandler = handler(
  `Some changes broke the Sickchill package and it is being updated by @BKSteve (Thank You!) We have a test version here: <https://seby.io/download/sickchill_noarch-dsm6_20210729-2.spk> and @BKSteve has more recent test builds here: <https://github.com/SickChill/SickChill/issues/7504>
Additional Information: <https://github.com/SickChill/SickChill/discussions/7364>`,
)

export { sickchillCommand, sickchillHandler }
