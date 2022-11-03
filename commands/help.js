const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['h', 'commands'],
    execute(client, message, args) {
        const commands = client.commands.filter(x => x.showHelp !== false)

        const Embed = new EmbedBuilder()
        Embed.setTitle('Help')
        Embed.setDescription('List of all commands.')
        Embed.addFields({ name: 'Commands:', value: commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | ') })
      
        return message.channel.send({ embeds: [Embed] })
    },
};