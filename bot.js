const { CommandoClient } = require('./util/Commando');
const config = require('./config.js');
const path = require('path');
const fs = require('fs');
const Discord = require('discord.js');
const bot = new CommandoClient({
    commandPrefix: "e!",
    unknownCommandResponse: false,
    owner: ['288450828837322764', "391529339214364674", "440810964061913119"],
    invite: "https://discord.gg/hgsM86w",
    autoReconnect: true,
    commandEditableDuration: 1000000,
    messageCacheLifetime: 100000
});
fs.readdir("./events/", (err, files) => {
    if (err) {
        let embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setDescription(`${err}`)
        bot.channels.get(config.errorchannel).send(embed)
    }
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
});
process.on('unhandledRejection', error => {
    console.error(`ERROR: \n${error}`);
    let errorembed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setTitle(`ERROR`)
        .setDescription(error.stack)
    bot.channels.get(config.errorchannel).send(errorembed)
});
bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['information', 'Information Commands'],
        ["fun", "Fun Commands"],
        ["botowner", "Bot Owner Commands"],
        ["moderation", "Moderation Commands"],
        ["botowner/myservercrap", "Bot Owner/MyServerStuff"],
        ["imagecommands", "Image Commands"],
        ["special", "Special Commands"]
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        prefix: false,
        ping: false,
        eval_: false,
        commandState: true
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));


     



client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ميوت صوتي`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#36393e')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك الميوت الصوتي `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ديفن أو سمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك عنهه الديفن أو السمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
  })
});
bot.login(config.token);
