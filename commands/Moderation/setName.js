const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "channelname",
            memberName: "channelname",
            aliases: ["cn"],
            examples: [`${client.commandPrefix}channelname <#channel/channelid> <New Name here>`],
            description: "Changes the channel name or the channel you provide.",
            group: "moderation",
            guildOnly: true,
            userPermissions: ["MANAGE_CHANNELS", "MANAGE_GUILD", "ADMINISTRATOR"],
            args: [
                {
                    key: "channel",
                    prompt: "What channel do you want to change the name of?",
                    type: "channel"
                },
                {
                    key: 'content',
                    prompt: "What do you want me to name that channel?",
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { channel, content }) {
        try { channel.setName(content).then(message.say(`Changed the name to ${content}`)) } catch (e) { message.say(e) }
    }
}