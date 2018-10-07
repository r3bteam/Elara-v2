const Discord = require('discord.js');
module.exports.run = (bot) => {
    console.log(`${bot.user.username} Has Been Disconnected/Restarted. At: ${new Date()}`);
    bot.owners[0].send(`${bot.user} Has Been Restarted.`)
    bot.owners[1].send(`${bot.user} Has Been Restarted.`)
}