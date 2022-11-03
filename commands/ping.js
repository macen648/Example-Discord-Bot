module.exports = {
    name: 'ping', 
    aliases: ['p'],
    execute(client, message, args) {
        message.react("🏓")
        return message.channel.send(`**${client.ws.ping}ms** 🛰️`)
    },
}