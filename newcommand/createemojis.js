const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "em",
            memberName: "em",
            aliases: [],
            examples: ["N/A"],
            description: "N/A",
            group: "botowner",
            ownerOnly: true
        })
    }
    async run(message) {
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/441815722222682123.gif?v=1", "rave")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/439360318041489408.gif?v=1", "evil")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/408714245497159690.gif?v=1", "metal")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/413950760410284033.gif?v=1", "DANCE2")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/413950627757031424.gif?v=1", "DANCE")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/422586075572076544.gif?v=1", "Shrug")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/441815570015453184.gif?v=1", "Muppet")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/414578725951373313.gif?v=1", "Eyes")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/447158311541014542.gif?v=1", "cute")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/486163691016814603.png?v=1", "Heart")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/487917439074566144.gif?v=1", "Heartagram")
        // message.guild.createEmoji("https://cdn.discordapp.com/emojis/413650141665558528.gif?v=1", "Panda")
        // await message.say(`Done.`)
        //message.guild.createEmoji("", "")

    }
}