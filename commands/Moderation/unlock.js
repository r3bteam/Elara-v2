const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "unlock",
            memberName: "unlock",
            aliases: [],
            examples: [`${client.commandPrefix}unlock`],
            description: "Unlocks the discord channel",
            group: "moderation",
            guildOnly: true,
            userPermissions: ["MANAGE_MESSAGES"]
        })
    }
    async run(message) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null,
            READ_MESSAGES: null
        });
        const lockembed = new Discord.RichEmbed()
            .setColor(`#FF000`)
            .setDescription(`<@${message.author.id}> This Channel is now Unlocked!`)
        message.channel.send(lockembed)
    }
}