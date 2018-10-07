const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "botfarm",
            memberName: "botfarm",
            aliases: [],
            examples: [`N/A`],
            description: "N/A",
            group: "botowner",
            ownerOnly: true,
            args: [
                {
                    key: 'content',
                    prompt: 'Hmm',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { content }) {
        let guild = this.client.guilds.get(content);
        let defaultChannel = "";
        guild.channels.forEach((channel) => {
            if (channel.type == "text" && defaultChannel == "") {
                if (channel.permissionsFor(guild.me).has("SEND_MESSAGES" && "EMBED_LINKS" && "READ_MESSAGES")) {
                    defaultChannel = channel;
                }
            }
        })
        let embed = new Discord.RichEmbed()
            .setColor(`#FF0000`)
            .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL)
            .setTimestamp()
            .setTitle(`Info`)
            .addField(`Why I left your server.`, `You have to many bots in this server. Me being here is useless.`)
        defaultChannel.send(embed).then(guild.leave())
    }
}