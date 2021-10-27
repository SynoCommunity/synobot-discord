import {
  ApplicationCommand,
  InteractionHandler,
  Interaction,
  InteractionResponse,
  InteractionResponseType,
  ApplicationCommandOptionType,
} from '@glenstack/cf-workers-discord-bot'

const command = (cmd: string, description: string): ApplicationCommand => {
  return {
    name: cmd,
    description: description,
    options: [
      {
        name: 'user',
        description: 'User to reply to',
        type: ApplicationCommandOptionType.USER,
        required: true,
      },
    ],
  }
}

const handler = (content: string): InteractionHandler => {
  return async (interaction: Interaction): Promise<InteractionResponse> => {
    // const authorID = interaction.member.user.id
    const options = (interaction.data && interaction.data.options) || []
    const userID = (options && options[0].value) || ''

    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `<@${userID}> ${content}`,
        allowed_mentions: {
          users: [userID],
        },
      },
    }
  }
}

export { command, handler }
