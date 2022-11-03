const { Client, GatewayIntentBits } = require('discord.js')
const Handler = require('dchandler.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    disableMentions: 'everyone',
})

const handler = new Handler.HandlerClient(client)

client.login('') // Token goes here!