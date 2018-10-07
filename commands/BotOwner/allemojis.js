const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class BotEmojisCommand extends Command {
    constructor(client) {
        super(client, {
            name: "allemojis",
            group: 'botowner',
            ownerOnly: true,
            aliases: [],
            description: "Lists all of the emojis from all of the servers the bot is in.",
            examples: [`${client.commandPrefix}allemojis`],
            memberName: "allemojis"
        })
    }
    async run(message) {
        this.client.guilds.forEach(g => {
        let animEmotes = [],
            staticEmotes = [];

        g.emojis.forEach((e) => {
            if (e.length === 0) return;
            e.animated ? animEmotes.push(`<a:${e.name}:${e.id}>`) : staticEmotes.push(`<:${e.name}:${e.id}>`);
        });
            staticEmotes = staticEmotes.length !== 0 ? `__**[${staticEmotes.length}] Normal Emotes**__\n${staticEmotes.join('')}` : '**__Normal Emojis__**\nN/A';
        animEmotes = animEmotes.length !== 0 ? `\n\n__**[${animEmotes.length}] Animated Emotes**__\n${animEmotes.join('')}` : '**__Animated Emojis__**\nN/A';

        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(g.name, g.iconURL)
        .setDescription(staticEmotes)
        let embed2 = new Discord.RichEmbed()
         .setColor(`RANDOM`)
        .setDescription(animEmotes)
        message.channel.send(embed)
        message.channel.send(embed2)
    })
    }
}