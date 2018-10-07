const { Command } = require('../../util/Commando');
const Discord = require('discord.js');
const config = require('../../config.js');
module.exports = class BotSuggestCommand extends Command {
    constructor(client){
        super(client, {
            name: "botsuggest",
            group: "information",
            memberName: "botsuggest",
            description: "Suggests a new command to the bot owner(s)",
            aliases: [],
            guildOnly: true,
            examples: [`${client.commandPrefix}botsuggest Add this command!`],

        })
    }
    async run (message, {content}){
        let logchannel = this.client.channels.get(config.suggestchannel)
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        var options = {
            maxAge: 0
        };
        let Susername = message.author;
        let Suseravatar = message.author.avatarURL;
        let server = message.guild;
        let Schannel = message.channel;
        let reason = args.join(' ')
        if(!reason) return message.say(`You need to provide a suggestion!`)
        message.delete().catch()
        let embed = new Discord.RichEmbed()
            .setColor("#000FF")
            .setDescription(`Creating......`)
            .setTimestamp()
        message.delete(15000).catch()
        logchannel.send(embed).then(message => {
            Schannel.createInvite(options).then(i => {
                embed.setColor(`RANDOM`)
                embed.setDescription(`${Susername} Has Put in a Suggestion Request!`)
                embed.addField(`User`, Susername, true)
                embed.addField(`User ID`, Susername.id, true)
                embed.addField(`Server`, server.name, true)
                embed.addField(`Server ID`, server.id, true)
                embed.addField(`Channel`, Schannel.name, true)
                embed.addField(`Channel ID`, Schannel.id, true)
                embed.addField(`Server Invite`, `https://discord.gg/${i.code}`, true)
                embed.setFooter(`Suggestion Requested At`)
                embed.setTimestamp()
                embed.setThumbnail(Suseravatar)
                embed.addField(`Reason`, reason)
                message.edit(embed)
            })
        }).then(message => {
            Schannel.send(`${Susername} Your Suggestion has been given to the bot support team!\n**This Message will delete in 10 Seconds**`).then(message => { message.delete(10000).catch() })
        })
    }
} 