import { clientId, publicKey, secret } from '../config'
import { createSlashCommandHandler } from '@glenstack/cf-workers-discord-bot'

// import { debugCommand, debugHandler } from './commands/debug'
import { certCommand, certHandler } from './commands/cert'
import { badrequestCommand, badrequestHandler } from './commands/badrequest'
import { sickchillCommand, sickchillHandler } from './commands/sickchill'
import { dsm7Command, dsm7Handler } from './commands/dsm7'

const slashCommandHandler = createSlashCommandHandler({
  applicationID: clientId,
  applicationSecret: secret,
  publicKey: publicKey,
  commands: [
    // [debugCommand, debugHandler],
    [certCommand, certHandler],
    [badrequestCommand, badrequestHandler],
    [sickchillCommand, sickchillHandler],
    [dsm7Command, dsm7Handler],
  ],
})

addEventListener('fetch', (event) => {
  event.respondWith(slashCommandHandler(event.request))
})
