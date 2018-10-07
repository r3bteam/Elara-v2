const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "stafflist",
            memberName: "stafflist",
            aliases: [],
            examples: [`${client.commandPrefix}stafflist`],
            description: "Posts the staff list in SUPERCHIEFYT'S Discord",
            group: "botowner",
            ownerOnly: true
        })
    }
    async run(message) {
        let Owner = message.guild.roles.find(c => c.name === "Owner")
        let CoOwners = message.guild.roles.find(c => c.name === "Co Owners")
        let Admins = message.guild.roles.find(c => c.name === "Admins")
        let Mods = message.guild.roles.find(c => c.name === "Moderators")
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`The Current Staff List`)
            .setThumbnail(message.guild.iconURL)
            .addField(`${Owner.name} [${Owner.members.size}]`, `${Owner.members.map(m => m.user).join('\n') ? Owner.members.map(m => m.user).join('\n') : "None"}`)
            .addField(`${CoOwners.name} [${CoOwners.members.size}]`, `${CoOwners.members.map(m => m.user).join('\n') ? CoOwners.members.map(m => m.user).join('\n') : "None"}`)
            .addField(`${Admins.name} [${Admins.members.size}]`, `${Admins.members.map(m => m.user).join('\n') ? Admins.members.map(m => m.user).join('\n') : "None"}`)
            .addField(`${Mods.name} [${Mods.members.size}]`, `${Mods.members.map(m => m.user).join('\n') ? Mods.members.map(m => m.user).join('\n') : "None"}`)
            .setImage('https://cdn.discordapp.com/attachments/444028025932349441/445651959605624832/pizap.png')
        message.say(embed)
    }
}