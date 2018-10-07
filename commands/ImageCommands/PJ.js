const { Command } = require('../../util/Commando'),
    Discord = require('discord.js'),
    {PJ} = require('../../util/photos.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "pj",
            memberName: "pj",
            aliases: ["pjcat"],
            examples: [`${client.commandPrefix}PJ`],
            description: "Posts a PJ cat photo",
            group: "imagecommands",
            hidden: true
        })
    }
    async run(message) {
        let replies = PJ
        let result = Math.floor((Math.random() * replies.length));
        let embed = new Discord.RichEmbed()
            .setColor("#FF000")
            .setDescription("<a:Dots:426956230582599690> Loading a PJ Photo, Please Wait...")

        message.channel.send(embed).then(message => {
            embed.setColor("RANDOM")
            embed.setDescription("Here's a Photo of a PJ 😊")
            embed.setImage(replies[result])
            embed.setFooter(`PJ Photo ${result}/${replies.length}`)
            message.edit(embed)
        })
    }
}