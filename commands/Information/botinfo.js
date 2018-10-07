const { Command } = require('../../util/Commando');
const Discord = require('discord.js');
const config = require('../../config.js')
module.exports = class BotinfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: "botinfo",
            group: "information",
            memberName: "botinfo",
            aliases: [`info`, `binfo`],
            description: "Gives you the bots information",
            examples: [`${client.commandPrefix}botinfo`]
        })

    }
    async run (message){
        let string = '';
        this.client.guilds.forEach(guild => { string += `${guild.name}` + '\n'; })
        let botembed = new Discord.RichEmbed()
            .setDescription("[Bot Information](https://discord.gg/hgsM86w)")
            .setColor(`RANDOM`)
            .setThumbnail(this.client.user.displayAvatarURL)
            .addField("❯ Prefixes", `${this.client.commandPrefix}, ${this.client.user}`)
            .addField("❯ Mention", this.client.user, true)
            .addField(`❯ Name`, this.client.user.username, true)
            .addField(`❯ Tag`, `\`${this.client.user}\``, true)
            .addField(`❯ ID`, this.client.user.id, true)
            .addField(`❯ Discriminator`, `#${this.client.user.discriminator}`, true)
            .addField(`❯ Bot Owner(s)`, this.client.owners, true)
            .addField("❯ Created On", "**June 9th 2018**", true)
            .addField("❯ Invite Link", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot)`, true)
            .addField(`❯ My Support Server`, `[Click Here](https://discord.gg/hgsM86w)`, true)
            .addField(`❯ Discord Bots.org Link`, `[Click Here](https://discordbots.org/bot/455166272339181589)`, true)
            .addField(`❯ bots.discord.pw Link`, `[Click Here](https://bots.discord.pw/bots/455166272339181589)`, true)
            .addField(`❯ Upvote the bot`, `[Vote Here!](https://discordbots.org/bot/455166272339181589/vote)`, true)
            .addField(`❯ Servers`, string)
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL);
        message.say(botembed)
    }
}