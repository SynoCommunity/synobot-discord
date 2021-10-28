// import { SlashCommandBuilder } from '@discordjs/builders'

import {
  ApplicationCommand,
  InteractionHandler,
  Interaction,
  InteractionResponse,
  InteractionResponseType,
  ApplicationCommandOptionType,
} from '@glenstack/cf-workers-discord-bot'

//   const debugCommand1 = new SlashCommandBuilder().setName('debug').setDescription('Check if this interaction is responsive');
//   debugCommand1.addUserOption((option) => option.setName('user').setDescription('The user to boop').setRequired(false));

const debugCommand: ApplicationCommand = {
  name: 'debug',
  description: 'Check if this interaction is responsive',
  options: [
    {
      name: 'user',
      description: 'User to reply to',
      type: ApplicationCommandOptionType.USER,
      required: true,
    },
  ],
}

const debugHandler: InteractionHandler = async (
  interaction: Interaction,
): Promise<InteractionResponse> => {
  //   const authorID = interaction.member.user.id
  const options = (interaction.data && interaction.data.options) || []
  const userID = (options && options[0].value) || ''

  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `<@${userID}> Pong! \`\`\`${JSON.stringify(
        interaction.data,
      )}\`\`\` `,
      allowed_mentions: {
        users: [userID],
      },
    },
  }
}

export { debugCommand, debugHandler }
