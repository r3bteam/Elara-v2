const { Command } = require('../../util/Commando');
const Discord = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'fun',
            memberName: 'say',
            description: 'Sends a message to the channel',
            aliases: [`announce`],
            examples: [`${client.commandPrefix}say #channel Hi there!`],
            guildOnly: true,
            userPermissions: ["MANAGE_MESSAGES"],
            args: [
                {
                    key: "channel",
                    prompt: "What channel do you want me to send it to?",
                    type: "channel"
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });
    }

    async  run(msg, { channel, content }) {
        msg.delete().catch()
        let embed = new Discord.RichEmbed()
            .setDescription(content)
            .setColor(`RANDOM`)
        channel.send(embed);
    }
};