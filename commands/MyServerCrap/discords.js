const {Command} = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class ESCommand extends Command {
    constructor(client) {
        super(client, {
            name: "discords",
            memberName: "discords",
            aliases: [],
            group: "botowner/myservercrap",
            guildOnly: true,
            ownerOnly: true,
            examples: [`${client.commandPrefix}discords`],
            description: "Sends discord invites."
        })
    }
    async run(message) {
        let bicon = ("https://cdn.discordapp.com/emojis/405944757869871105.gif?v=1");
        let botembed = new Discord.RichEmbed()
            .setColor("#000FF")
            .setThumbnail(bicon)
            .setDescription("IMPORTANT")
            .addField("Discord links for Other Discords", "If you want your server added dm me and Ask me to put your discord server in this list")
            .addBlankField()
            .addField("Information", "The Link's posted here what goes on in these servers we have no control over. Remember inside these discord servers their rules apply not ours. You Have Been Warned. ")
            .addBlankField()
            .addField("Friend's Discord Servers", "Listed Down Below")
            .addBlankField()
            .addField("Caittlin's Discord", "https://discord.gg/wfvWpcW", true)
            .addField("RHG'S Discord", "https://discord.gg/WUTAaSW", true)
            .addField("Cameron's Discord", "https://discord.gg/rg5XKMZ", true)
            .addField("Internal Sephus's Discord", "https://discord.gg/kDUecZD", true)
            .addField("Spenny's Discord", "https://discord.gg/UQ3CkvE", true)
            .addField("TruckerDenmark's Discord", "https://discord.gg/6M5xE9Q", true)
            .addField("Mo_sie's Discord", "https://discord.gg/krXDXEM", true)
            .addField("Icy's Discord", "https://discord.gg/wVZTjkm", true)
            .addField("Trevaless's Discord", "https://discord.gg/z3HsPa8", true)
            .addField("Pokemonman's Discord", "https://discord.gg/9QBegq7", true)
            .addField("Nivenia's Discord", "https://discord.gg/CVuaS", true)
            .addField("Strike's Discord", "https://discord.gg/cFC857N", true)
            .addField("CocoBananas Discord", "https://discord.gg/GepPnzE", true)
            .addField("Jonbn123's Discord", "https://discord.gg/HbYx6XE", true)
        let botembed2 = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField("Other Discord Servers.", "Listed Down Below")
            .addField("Creativerse Fan Discord.", "https://discord.gg/nB6jxba", true)
            .addField("Xander's Discord", "https://discord.gg/6j7GkFR", true)
            .addField("Pie_Nation's Discord", "https://discord.gg/tqUAF4", true)
            .addField("DragonRaid's Discord", "https://discord.gg/cwgbQgY", true)
            .addField("Lit Fam Gaming Discord", "https://discord.gg/pxPa4Hb", true)
            .addField("Fifteam Discord", "https://discord.gg/8uKAuzH", true)
            .addField("CrypticOmission's Discord", "https://discord.gg/G7CBfeZ", true)
            .addField("Amy's Discord", "https://discord.gg/7mh7tfR", true)
            .addField("Ibotmealot's Discord", "https://discord.gg/zbZKWKa", true)
        let botembed3 = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField("Lumber Related Discord's", "Listed Down Below")
            .addField("Lumber Chat Discord", "https://discord.gg/2TC4EKY", true)
            .addField("Lumber Tycoon Relations Discord ", "https://discord.gg/s6TMRNN", true)
            .addBlankField()
            .addField("Official Discord Servers", "Listed Down Below")
            .addField("Official Discord Events", "https://discord.gg/events", true)
            .addField("Discord Developers", "https://discord.gg/discord-developers", true)
            .addField("Discord Testers", "https://discord.gg/discord-testers", true)
            .addField("Discord Feedback", "https://discord.gg/discord-feedback", true)
        let embed = new Discord.RichEmbed()
        .setColor(`#000FF`)
        .setTitle(`All Emoji Servers`)
            .setDescription(`https://discord.gg/KeMD4PF
            https://discord.gg/yATKMY8
            https://discord.gg/b7GN3e
            https://discord.gg/syVKsvj
            https://discord.gg/mqeXUAX
            https://discord.gg/z696gQN
            https://discord.gg/Fh6q2Fw
            http://discord.gg/7sEVMry
            https://discord.gg/5hFXySs
            https://discord.gg/dHBxu4B
            https://discord.gg/PSbd9pw
            https://discord.gg/NqfVS7M
            https://discord.gg/cYzFU9S
            https://discord.gg/KT49WeZ
            https://discord.gg/jravcCm
            https://discord.gg/AEdkebQ
            http://discord.gg/LegacysNation
            https://discord.gg/FHcH5Yn
            https://discord.gg/GYBtYeg
            https://discord.gg/zeM6ND
            https://discord.gg/ASSuM4T
            https://discord.gg/Ajr5P3V
            https://discord.gg/NUrkxcT
            https://discord.gg/7DQWZX8
`)
        let botembed4 = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField("Youtuber Discord's", "Listed Down Below")
            .addField("G-Rated Family Gaming", "https://discord.gg/tAZgvdd", true)
            .addField("GamerBears", "https://discord.gg/8UGhQSe", true)
            .addField("Seniac", "https://discord.gg/Seniac", true)
            .addField("ImaFlyNmidget", "https://discord.gg/ImaFlyNmidget", true)
            .addField("DarkJGaming", "https://discord.gg/CxGf6yY", true)
            .addField("CodePrime8", "https://discord.gg/CodePrime8", true)
            .addField("BunnyFilms1", "https://discord.gg/u3XEYXK", true)
            .addField("SkyTheGamer", "https://discord.gg/cva5b", true)
            .addField("Roblox News Channel", "https://discord.gg/RStWZcE", true)
            .addField("GamerBoyJJM", "https://discord.gg/AcwuBzM", true)
            .addField("Magikarp Films", "https://discord.gg/RyJU4Wa", true)
            .addField("DigDugPlays", "https://discord.gg/9pBE7hX", true)
            .setImage("https://cdn.discordapp.com/attachments/444028025932349441/444408933482758144/pizap_1.jpg");
        message.channel.send(botembed)
        await message.channel.send(botembed2)
        await message.channel.send(botembed3)
        await message.channel.send(embed)
        await message.channel.send(botembed4)
        message.delete().catch();
    }
}