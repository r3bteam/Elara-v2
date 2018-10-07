const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "cm",
            memberName: "cm",
            aliases: [`listcm`, `cmlist`],
            examples: [`${client.commandPrefix}cm <server id>`],
            description: "Lists all of the members from all of the server id you provide",
            group: "botowner",
            ownerOnly: true,
            args: [
                {
                    key: 'content',
                    prompt: 'What server do you want the members of?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { content }) {
        const hastebin = require('hastebin-gen');
        const members = this.client.guilds.get(content).members.map(c => `Username: [${c.user.username}] ID: (${c.user.id})`).join('\n')
            hastebin(members, "js").then(r => {
                var hastLink = r
                const hastEmb = new Discord.RichEmbed()
                    .setColor(0xFFF000)
                    .setURL(hastLink)
                    .addField('Link: ', `${hastLink}`)
                message.channel.send({ embed: hastEmb })
            }).catch(console.error);

    }
}