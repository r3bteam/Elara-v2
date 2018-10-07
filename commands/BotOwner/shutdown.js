const { Command } = require('../../util/Commando');
const Discord = require('discord.js');
const config = require('../../config.js')
module.exports = class ShutdownCommand extends Command {
    constructor(client){
        super(client, {
            name: "shutdown",
            memberName: 'shutdown',
            group: 'botowner',
            ownerOnly: true,
            description: "Shuts down the bot",
            aliases: ["st", "die"],
            examples: ["e!shutdown"]
        })
    }
    async run(message) {
        const modlogs = this.client.channels.get(config.logchannel)
        message.say('Shutting Down :wave:')
        let client = this.client;
        let botembed = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField("ShutDown Issued", `<@${message.author.id}> Has ShutDown ${client.user.username}`)
            .setTimestamp()
        await message.react("✅");
        await modlogs.send(botembed);
        process.exit(1)
    }
}