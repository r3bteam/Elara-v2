const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "seticon",
            memberName: "seticon",
            aliases: [],
            examples: [`${client.commandPrefix}seticon <Link here>`],
            description: "Changes the server icon",
            group: "moderation",
            guildOnly: true,
            userPermissions: ["MANAGE_GUILD", "ADMINISTRATOR"],
            args: [
                {
                    key: 'content',
                    prompt: "What do you want me to name that channel?",
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { content }) {
        let modlogs = message.guild.channels.find(c => c.name === "modlogs") || message.channel;
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setTimestamp()
            .setTitle(`Server Icon Changed`)
            .addField(`Old Name`, `[Click Here](${message.guild.iconURL}) <-- You may not be able to view it.`, true)
            .addField(`New Name`, content, true)
            .addField(`Moderator`, message.author.tag)
        modlogs.send(embed)
        await message.guild.setIcon(content)
    }
}