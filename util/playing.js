module.exports = (bot) => {
    bot.user.setActivity(`Prefix ${bot.commandPrefix} or @${bot.user.username}`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
    let userssize = bot.users.size;
    let channelsize = bot.channels.size;
    let guildsize = bot.guilds.size;
    var status = [
        `Prefix ${bot.commandPrefix} or @${bot.user.username} | Serving: ${guildsize} Servers, ${channelsize} Channels, ${userssize} Users`,
        `Prefix ${bot.commandPrefix} or @${bot.user.username} | More Updates Coming Soon!`,
        `Prefix ${bot.commandPrefix} or @${bot.user.username} | My Support Server: https://discord.gg/hgsM86w`,
    ];
    setInterval(() => {
        let gameval = Math.floor((Math.random() * status.length));
        bot.user.setActivity(`${status[gameval]}`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
    }, 10 * 1000);
};