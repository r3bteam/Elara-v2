const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "setnsfw",
            memberName: "setnsfw",
            aliases: [],
            examples: [`${client.commandPrefx}setnsfw`],
            description: "Sets the NSFW marker for the channel you provide.",
            group: "moderation",
            guildOnly: true,
            args: [
                {
                    key: "channel",
                    prompt: "What channel do you want to change",
                    type: "channel"
                },
                {
                    key: 'content',
                    prompt: 'Do you want to turn off or on NSFW for that channel? [yes or no]',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { channel, content }) {
        if (content.toLowerCase() === "yes" || content.toLowerCase() === "y") {
            channel.setNSFW(true).then(message.say(`I have set NSFW for ${channel}`))
        } else
            if (content.toLowerCase() === "no" || content.toLowerCase() === "n") {
                channel.setNSFW(false).then(message.say(`I have turned off NSFW for ${channel}`))
            }
    }
}