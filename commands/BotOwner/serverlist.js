const { Command } = require('../../util/Commando'),  
    Discord = require('discord.js'),
    hastebin = require('hastebin-gen');
module.exports = class SRCommand extends Command {
    constructor(client){
        super(client, {
            name: "serverlist",
            memberName: "serverlist",
            aliases: ["slist"],
            group: "botowner",
            ownerOnly: true,
            examples: [`${client.commandPrefix}serverlist`],
            description: "Gives all of the server names that the bot is in"
        })
    }
    async run(message) {
        let string = '';
        this.client.guilds.forEach(guild => { string += `Server Name: (${guild.name})\nServer ID: (${guild.id})\nServer Icon: [Click Here](${guild.iconURL})` + '\n\n'; })
            const hastEmb = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setDescription(string)
                .setTitle(`Current Number of Servers **[${this.client.guilds.size}]**\nHere is a List of all of the Servers: `)
            message.channel.send(hastEmb)
    }
}