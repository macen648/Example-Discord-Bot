module.exports = {
    name: 'upTime',
    aliases: ['ut'],
    execute(client, message) {
        return message.channel.send(`${client.uptime}`, `**Current up time**:`)
    },
}