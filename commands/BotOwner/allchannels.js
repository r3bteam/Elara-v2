const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class BotEmojisCommand extends Command {
    constructor(client) {
        super(client, {
            name: "allchannels",
            group: 'botowner',
            ownerOnly: true,
            aliases: [],
            description: "Lists all of the channels from all of the servers the bot is in.",
            examples: [`${client.commandPrefix}allchannels`],
            memberName: "allchannels"
        })
    }
    async run(message) {

        this.client.guilds.forEach(g => {
            let channels =  g.channels.map(c => c.name).join('\n')
        
                const hastEmb = new Discord.RichEmbed()
                    .setTitle(`Server ${g.name}`)
                    .setThumbnail(g.iconURL ? g.iconURL : "https://images-ext-1.discordapp.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
                    .setDescription(channels)
                    .setColor(`RANDOM`)
                message.channel.send(hastEmb)
            
        })
        
        
    }
}