const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class SupportICommand extends Command {
    constructor(client){
        super(client, {
            name: "guild",
            memberName: "guild",
            aliases: [],
            group: "botowner",
            examples: ["e!guild <Guild ID>"],
            ownerOnly: true,
            description: "N/A",
            args: [{
                key: "guildid",
                prompt: "guild?",
                type: "string"
            }, 
        ]
        })
    }
    async run(message, {guildid}) {
        try {
            var options = {
                maxAge: 0
            }
            
            let guild = this.client.guilds.get(guildid)
            let defaultChannel = "";
            guild.channels.forEach((channel) => {
                if (channel.type == "text" && defaultChannel == "") {
                    if (channel.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE")) {
                        defaultChannel = channel;
                    }
                }
            })
            let channelfind = defaultChannel;
            message.channel.send(`Creating..`).then(message => {
                message.edit(`Can't create a invite.`)
                channelfind.createInvite(options).then(i => {
                    message.edit(`Created a Invite For you  \n https://discord.gg/${i.code}`)
                })
            })
        } catch (e) {
            message.channel.send(`ERROR\n${e}`)
        }
    }
}