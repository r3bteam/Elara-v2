const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "senibot",
            memberName: "senibot",
            aliases: [],
            examples: [`${client.commandPrefix}senibot <Webhook ID Here> <Webhook Token Here>`],
            description: "N/A",
            group: "botowner",
            ownerOnly: true,
            args: [
                {
                    key: 'webhookid',
                    prompt: 'Please provide a webhook ID',
                    type: 'string'
                },
                {
                    key: 'webhooktoken',
                    prompt: 'Please provide a webhook token.',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { webhookid, webhooktoken }) {
        let sendchannel = new Discord.WebhookClient(webhookid, webhooktoken)
        let embed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
            .setAuthor(`Seniac`, `https://cdn.discordapp.com/avatars/236458932728627201/a_1424f73619333825220e62caa94bafcf.gif?size=2048`) 
    .setTitle(`Welcome To Seniac's Discord Server`)
    .setDescription(``)
    .addField(`Info`, `You will be able to get into the full chats in 5 Minutes\n\n**If you get Muted this is the only channel you will see, To get unmuted contact a Moderator or Admin, If you are muted by Auttaja you will be automatically unmuted in 1 hour**\n\n **If you ever feel you got unfairly banned by a Moderator or Admin, Please dm Seniac **`)
    .addField(`General Rules`, `**Please follow these rules and guidelines so we can have a happy discord**\n\n \`\`\`diff\n- Have fun enjoy yourself and respect others
- No bad language (DAMN is not a bad word)
- No spamming, trolling or hacking and Raiding.
- Respect and Listen to all of the Staff.
- No Politics
- No Links or Discord Invites unless its in allowed channels
- No Cutting over people in Voice Chats
- No Rude sounds or Voice Changers in Voice chat (that includes burping or farting)
- No talking about anything against the ToS of Games/Discord..
- And if you have the spammer role or muted role the only channel you can see is this one Untill you've been unmuted, If you want to be Unmuted dm a Moderator or Admin to Unmute you.
- Make sure you read the pinned messages in the channels, Each channel Has rules for them, Same with the topic of the channel!!!.
- DM Sniping/Advertising is not tolerated in this discord and will result in a Kick\`\`\``)


.addField(`Immediate and permanent ban Rules`,`
\`\`\`diff\n- Impersonating another person, YouTuber, or bot
- Releasing, posting, telling another person’s personal information
- Releasing your own personal information such as email etc 
- Racist/Racial, gender, religious slurs aimed to hurt another
- Any attempt to Program the Bots will result in a Ban
- Any NSFW link's or post's will get you banned \`\`\``)
        .addField(`Discord TOS`, `\`\`\`diff\n-Follow the Discord Terms of Service and GuideLines,

-Which require you to be over 13. We're not going to chase you down if you're under 13 though.

-By Joining this Server, you agree to the Discord Terms of Service and GuideLines of Discord.

- As per the Discord Terms of Service and Discord Developer Terms of Service, you must be 13 or over to use Discord. We reserve the right to refuse or revoke access to this server through Discord's moderation system if you do not comply with these rules.\`\`\`\n
Links for the Terms Of Service and GuideLines Of Discord.
https://discordapp.com/terms
https://discordapp.com/guidelines
`)
.addField(`MEE6 Level up Info`, `\`\`\`diff\n-Are you wondering what levelling up means? - Ok, So in the server we have Mee6 that gives you points for talking and being active which add up to a server leaderboard. Roles will be awarded upon reaching point milestones. If you have any questions please contact one of our Moderators or Admins.!

-In addition to these roles we have a few fun roles to earn using the Mee6 level/rank system. The more you are active and talk in the server, The more XP you will gain resulting in leveling up. Currently these roles is  on the list above

-You will get a certain amount of XP every 1 minute. Spamming will not work.. if you spam one of the bots will mute you.

Level up Ranks for MEE6

-Overlord Fool Rank - Level 40
-God Fool Rank - Level 30
-Supreme Fool - Level 20
-Damn Fool Rank - Level 15
-Massive Fool Rank - Level 10
-Big Fool Rank - Level 5 
-Fool Rank - Level 2
-Noob Rank - Everyone has this role
\`\`\`
The Leaderboard for MEE6: https://mee6.xyz/leaderboard/273904598895296513`)
.addField(`Role Info/How to get the roles`, `**Master Fool** - This role is given to the one and only Master Fool Seniac\n**Admins** - Admins are chosen by Seniac\n**Moderators** - Moderators are chosen by Seniac\n**SeniacTWO Sponsors** - This role is given to the Sponsors for the SeniacTWO Youtube Channel\n**Seniac Sponsors** - This role is given to the Sponsors for the Seniac Main Youtube Channel\n**Developers** - This role is given to the people that Seniac has made a video on his/her game\n**Youtuber** - This role is given to people that have 5k+ Subs, To get the role Dm a Moderator or Admin the link to your youtube channel and they will review it and get back to you.\n**Overlord Fool, God Fool, Superme Fool, Damn Fool, Massive Fool, Big Fool, Fool, Noob Roles** - Explained how to get them above`)
            .addField(`Links`, `**Seniac's Discord**\nhttps://discord.gg/Seniac\n**Fools Studio**\nhttps://discord.gg/y9Td5Qc \n **Farming Simulator**\n[Click Here](https://www.roblox.com/games/1862413075/VEHICLES-Farming-Simulator)\n**Sponsor Seniac's\nMain Channel**\n[Click Here](https://gaming.youtube.com/watch?action=sponsor&v=cHqGZ8a7vwQ)\n**Sponsor Seniac's\nSecond Channel**\n[Click Here](https://gaming.youtube.com/watch?action=sponsor&v=78DZRBV83Zc)`)
.setTimestamp()
        sendchannel.send(embed)
        await message.say(`Message sent.`)
    }
}