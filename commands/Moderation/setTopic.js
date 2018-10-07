const { Command } = require('../../util/Commando'),
    Discord = require('discord.js'),
    {sreact, nreact} = require('../../util/util.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "settopic",
            memberName: "settopic",
            aliases: ["stopic"],
            examples: [`${client.commandPrefix}settopic <#channel/channelid> <New topic here>`],
            description: "Sets the topic you provide for the channel you provide",
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
                    prompt: 'What do you want the new topic to be?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {channel, content }) {
        channel.setTopic(content).then(msg => {
            message.react(sreact)
        }).catch(err => {
            message.react(nreact)
            message.say(err)
        })
    }
}