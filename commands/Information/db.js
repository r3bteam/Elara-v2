const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
const superagent = require('superagent');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "db",
            memberName: "db",
            aliases: [],
            examples: [`${client.commandPrefix}db 455166272339181589`],
            description: "Gives you the info about a bot on the discordbots.org site",
            group: "information",
            args: [
                {
                    key: 'user',
                    prompt: 'What bot do you want the info on?',
                    type: 'user'
                }
            ]
        })
    }
    async run(message, { user }) {
      try {  let { body } = await superagent
            .get(`https://www.discordbots.org/api/bots/${user.id}`);
        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}.png`)
        .setAuthor(body.username, `https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}.png`)
        .setDescription(body.shortdesc)
        .addField(`Name`, body.username, true)
        .addField(`ID`, body.id, true)
        .addField(`Discriminator`, `#${body.discriminator}`, true)
        .addField(`Prefix`, body.prefix, true)
        .addField(`Server Count`, `${body.server_count ? body.server_count : "N/A"}`, true)
        .addField(`Shard Count`, `${body.shard_count ? body.shard_count : "N/A"}`, true)
        .addField(`Certified Bot`, `${body.certifiedBot ? "Yes" : "No"}`, true)
        .addField(`Total Upvotes`, `${body.points ? body.points : "N/A"}`, true)
        .addField(`Monthly Upvotes`, `${body.monthlyPoints ? body.monthlyPoints : "N/A"}`, true)
        .addField(`Library`, body.lib, true)
        .addField(`Tags`, body.tags, true)
        .addField(`Owner(s)`, `${body.owners.map(owner => `<@${owner}>`).join('\n')}`, true)
        .addField(`Github`, `[Click Here](${body.github ? body.github : "N/A"})`, true)
        .addField(`Website`, `[Click Here](${body.website ? body.website : "N/A"})`, true)
        .addField(`DiscordBots List`, `[Click Here](https://discordbots.org/bot/${body.id})`, true)
        .addField(`Invite`, `[Click Here](${body.invite})`, true)
        .addField(`Support Server`, `[Click Here](https://discord.gg/${body.support})`, true)
        message.embed(embed)
    } catch (e) {
        message.say(`That bot isn't on discord bots list site.`)
    }
    }
}

//https://www.discordbots.org/api/bots/