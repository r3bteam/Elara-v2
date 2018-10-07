const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class StaffCommand extends Command {
    constructor(client) {
        super(client, {
            name: "rules",
            memberName: "rules",
            aliases: [],
            group: "botowner/myservercrap",
            guildOnly: true,
            ownerOnly: true,
            examples: [`${client.commandPrefix}rules`],
            description: "Posts the rules for SUPERCHIEFYT's Discord."
        })
    }
    async run(message) {
        let bicon = ("https://cdn.discordapp.com/attachments/444028025932349441/445611500246269972/alert.gif");
        let botembed = new Discord.RichEmbed()
            .setDescription("The Rules Of SUPERCHIEFYT's Discord")
            .setColor("#000FF")
            .setThumbnail(bicon)
            .addField("General Rules", "1. Do not agrue with the <@&455152231956873236>                                                                            2. No cursing in the discord incuding Voice chat's                                                   3. Listen to and work with staffs, not against them.                                                      4. No text spamming and cussing in the text channels                                                      5. No mic spamming and cussing in the voice channels.                             6. Trolling and bullying is not allowed in any form.                                                                          7. No alternate identities or accounts                                                                  8. No self bots")
            .addBlankField()
            .addField("AutoBan", "1. Not listening to staff after being warned Alot                                                      2. Pornographic, disturbing content, or racism.                                        3. Links to Porn or Racism Sites disturbing stuff                                                                                4. Impersonate another person or Bot.                                                                  5. Snipping In the Discord                                                                                                                            6. No Drama From Other Servers, after being told to stop and not doing so.")
            .addBlankField()
            .addField("Playing Status and Profile Photo And Usernames", "Shouldn't have Cursing or nothing to bad or a <@&455152231956873236> will contact you to change it")
            .addBlankField()
            .addField("Current Roles", " <@&371118310353272854> \n <@&382918499988930563> \n <@&455129848747130900> \n <@&455152024145625088> \n <@&455152231956873236> \n <@&455150059064131595> \n <@&455153741465911298> \n <@&455148872042545162> \n <@&455145515852627968> \n <@&455155381535244300> \n <@&455155451500298240> \n <@&455155149975978004> \n <@&455154864784408576> \n <@&455154776515018772> \n <@&455154648018583553> \n <@&455154520108826626> \n <@&455123167128846356> \n <@&455127060608843796>")
            .addBlankField()
            .addField("Special Roles", " <@&402548263258947608> \n <@&452265764972396555> \n <@&455149260242157568> \n <@&455168770621702144> \n <@&455168990088527882> \n <@&455168913362386944> \n <@&455176545611415552>  \n <@&455155280863559698>")
            .addBlankField()
            .addField("Extra Infomation", "Btw if you type [**Server link**](https://discord.gg/hgsM86w) in any chat it will give you this discord's link")
            .addBlankField()
            .addField("FOR EMERGENCYS ONLY", "In Case of an Emergency if someone is Cussing or sending bad photos links etc. Please tag <@&455129848747130900>")
            .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445612424545042453/tenor_1.gif")
            .setFooter("SUPERCHIEFYT", message.guild.iconURL);
        message.channel.send(botembed);
        message.delete().catch();
    }
}