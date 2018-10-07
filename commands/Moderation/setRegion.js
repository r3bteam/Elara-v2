const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "setregion",
            memberName: "setregion",
            aliases: [],
            examples: [`${client.commandPrefix}setregion`],
            description: "Sets the server region to the one you choose.",
            group: "moderation",
            guildOnly: true,
            args: [
                {
                    key: 'content',
                    prompt: `What region you want me to change it to? Want to see what all of the Available regions are do \`${client.commandPrefix}setregion list\``,
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { content }) {
        let list = [
            'singapore', 'eu-central', 'amsterdam', 'us-central', 'london', 'japan', 'eu-west', 'brazil', 'us-west', 'hongkong', 'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt', 'russia'
        ]
        if(content === "list") {
            let regionembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL)
            .setTimestamp()
            .addField(`Available Regions`, list)
            message.say(regionembed)
            return;
        } else {
        let modlogs = message.guild.channels.find(c => c.name === "modlogs");  
        if(!modlogs) return message.channel;
        let region = {
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };
        let embed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setTitle(`Server Region Changed`)
        .setTimestamp()
        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL)
        .addField(`Old Region`, region[message.guild.region], true)
        .addField(`New Region`, content.toUpperCase(), true)
        .addField(`Moderator`, message.author.tag)
        modlogs.send(embed)
       await message.guild.setRegion(content)
    }
    }
}