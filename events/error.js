const Discord = require('discord.js');
const config = require('../config.js');
module.exports.run = (client, error) => {
    console.log(`ERR\n${error}`)
    let error2embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setTitle(`ERROR`)
        .setDescription(error.stack)
    client.channels.get(config.errorchannel).send(error2embed)
}