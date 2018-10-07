const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "deleterole",
            memberName: "deleterole",
            aliases: [],
            guildOnly: true,
            examples: [`${client.commandPrefix}deleterole <role name here>`],
            description: "Deletes a role you choose [THIS ACTION IS NOT REVERSIBLE!]",
            group: "moderation",
            userPermissions: ["MANAGE_ROLES", "MANAGE_GUILD", "ADMINISTRATOR"],
            args: [
                {
                    key: 'role',
                    prompt: `What role do you want to delete?[THIS ACTION IS NOT REVERSIBLE]`,
                    type: 'role'
                }
            ]
        })
    }
    async run(message, { role }) {
        let gRole = role
        message.guild.roles.get(gRole.id).delete()
        let embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle(`Action`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(`**Role Deleted:**\n${gRole.name}`)
            .setTimestamp()

        message.say(embed)
    }
}