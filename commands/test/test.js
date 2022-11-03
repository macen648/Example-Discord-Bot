module.exports = {
    name: 'test',
    aliases: [],
    showHelp: false, // Example of how command object data can be accessed.
                     // The help command won't show this command if false.
    execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Test:`)
        return message.channel.send(`Test: ${args[0]}`)
    },
}