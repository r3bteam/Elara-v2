const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "googleit",
            memberName: "googleit",
            aliases: [],
            examples: [`${client.commandPrefix}googleit`],
            description: "Posts a google it gif",
            group: "imagecommands"
        })
    }
    async run(message) {
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setImage(`https://i.imgur.com/X20kba7.gif`)
        message.embed(embed)
    }
}