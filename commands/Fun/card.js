const { Command } = require('../../util/Commando'),
     {cards} = require('../../util/photos.js'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "card",
            memberName: "card",
            aliases: ["cards"],
            examples: [`${client.commandPrefix}card`],
            description: "Posts a random card",
            group: "fun"
        })
    }
    async run(message) {
        let replies = cards;
        let result = Math.floor((Math.random() * replies.length));
        let embed = new Discord.RichEmbed()
            .setColor("#FF000")
            .setDescription("<a:Dots:426956230582599690> Loading the Card, Please Wait.,,,,")
        message.channel.send(embed).then(message => {
            embed.setColor("#000FF")
            embed.setDescription("Heres you're card")
            embed.setImage(replies[result])
            message.edit(embed)
        })
    }
}