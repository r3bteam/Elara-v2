const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class SRCommand extends Command {
    constructor(client) {
        super(client, {
            name: "reply",
            memberName: "reply",
            aliases: [],
            group: "botowner",
            examples: ["e!reply <Guild ID>"],
            ownerOnly: true,
            guildOnly: true,
            description: "N/A"
        })
    }
    async run(message) {
        let args = message.content.split(' ').slice(1)
        let replychannel = this.client.channels.get(args[0]) || this.client.users.get(args[0])
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(args.slice(1).join(' '))
            .setAuthor(message.author.username, message.author.avatarURL)
        replychannel.send(embed)
        await message.channel.send(`Message has been successfully sent.`)
    }
}