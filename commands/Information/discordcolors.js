const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "discordcolors",
            memberName: "discordcolors",
            aliases: ["dc"],
            examples: [`${client.commandPrefix}discordcolors`],
            description: "Gives you the different Discord Syntax Codes and Examples",
            group: "information"
        })
    }
    async run(message) {
        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
        .setTitle(`List of all of the Discord Syntax Codes and Examples.\nPut 3 **\`** at the back and front of the message.`)
        .setTimestamp()
        .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL)
        .addField('1. Regular', '```Hello ```')
        .addField(`2. CSS`, '```css\nHello```')
        .addField(`3. FIX`, '```fix\nHello```')
        .addField(`4. MD`, '```md\n#Hello``` or ```md\n[Hello](There)```')
        .addField(`5. PY`, '```py\n#Hello```')
        .addField(`6. CS`, '```cs\n#Hello```')
        .addField(`7. DIFF`, '```diff\n-Hello```')
        .addField(`8. XL`, '```xl\n\'Hello\'```')
        .addField(`9. TEX`, '```tex\n$ Hello```')
        .addField(`10. JAVA`, '```java\n"Hello"``` or ```java\n\'Hello\'```')
        .addField(`11. JS`, '```js\nconsole.log("Hello")```')
        message.embed(embed)
    }
}