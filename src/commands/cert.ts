import {
  ApplicationCommand,
  InteractionHandler,
} from '@glenstack/cf-workers-discord-bot'

import { command, handler } from '../create-commands'

const certCommand: ApplicationCommand = command(
  'cert',
  'Instruction to update the Root Certificate Store',
)
const certHandler: InteractionHandler = handler(
  `The Let’s Encrypt intermediate certificate expired recently so all you need to do is update your DSM6 version which will update the root trust store and fix the issue. If you want to continue to stay on an old versions (not recommended obviously) you can update the trust store manually by overriding the file with a more recent one, using SSH: \`sudo mv /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt.bak && sudo curl -Lko /etc/ssl/certs/ca-certificates.crt https://curl.se/ca/cacert.pem\` This will fix the issue, alternatively you can set the clock back. The best solution however is to update to a more recent DSM6 version.

**You need to update to NAS version 6.2.4-25556 Update 2 or later for the DSM to be able to load our site.**

> 6.2.4-25556 Update 2 Release Notes:
> 10. Updated the OpenSSL setting in response to new rules of Let's Encrypt certificates.`,
)

export { certCommand, certHandler }
