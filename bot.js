const { CommandoClient } = require('./util/Commando');
const config = require('./config.js');
const path = require('path');
const fs = require('fs');
const Discord = require('discord.js');
const bot = new CommandoClient({
    commandPrefix: "e!",
    unknownCommandResponse: false,
    owner: ['450711003324350485', "391529339214364674", "440810964061913119"],
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


     



bot.on('voiceStateUpdate', (oldM, newM) => {
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
  bot.on("guildBanAdd", (guild, member) => {

  bot.setTimeout(() => {

    guild.fetchAuditLogs({

        limit: 1,

        type: 22

      })

      .then(audit => {

        let exec = audit.entries.map(a => a.executor.username);

        try {

          let log = guild.channels.find('name', 'log');

          if (!log) return;

          bot.fetchUser(member.id).then(myUser => {

          let embed = new Discord.RichEmbed()

        .setAuthor(exec)

        .setThumbnail(myUser.avatarURL)

        .addField('- Banned User:',`**${myUser.username}**`,true)

        .addField('- Banned By:',`**${exec}**`,true)

        .setFooter(myUser.username,myUser.avatarURL)

            .setTimestamp();

          log.send(embed).catch(e => {

            console.log(e);

          });

          });

        } catch (e) {

          console.log(e);

        }

      });

  }, 1000);

});
 bot.on("guildBanRemove", (guild, member) => {
  bot.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("UnBanned")
		.setColor('#36393e') 
		 .setThumbnail(myUser.avatarURL)
        .addField('UnBanned User',`**${myUser.username}**`,true)
        .addField('UnBanned By',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});








      bot.on("roleDelete", role => {
  bot.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#36393e')          
            .setTitle(' - Role Deleted ')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('Role Color', role.hexColor, true)
            .addField('Role Permission', role.permissions, true)
            .addField('By', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})


bot.on('roleCreate', role => {
  bot.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('+ Role Created')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('Role Color', role.hexColor, true)
            .addField('Role Permission', role.permissions, true)
            .addField('By', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})






 









bot.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
             .setTitle('Message Deleted')
       .addField('Deleted Message',`${message.cleanContent}`)
       .addField('Deleted In',`<#${message.channel.id}>`)
       .addField('By', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
});




  bot.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setTitle('Message Edited')
       .addField('Before Edit',`${message.cleanContent}`)
       .addField('After Edit',`${newMessage.cleanContent}`)
       .addField('Edit In',`<#${message.channel.id}>`)
       .addField('By', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});


   bot.on("deleteChannel",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });


bot.login(config.token);
