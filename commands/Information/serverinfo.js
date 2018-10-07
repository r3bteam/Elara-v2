const { Command } = require('../../util/Commando'),
    config = require("../../config.js"),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "serverinfo",
            memberName: "serverinfo",
            aliases: ["guildinfo", "si", "gi"],
            examples: [`${client.commandPrefix}serverinfo`],
            description: "Gives you a all of the information about the guild.",
            group: "information",
            guildOnly: true
        })
    }
    async run(msg) {
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["None", "Low\nmust have verified\nemail on account", "Medium - must be registered on Discord for longer than 5 minutes", "High -  (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes", "Very High - ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"];
        let region = {
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };
        let fields = []
        fields.push(
            {
            name: '❯\u2000\Server Name',
            value: `**${guild.name}**`,
            inline: true
            }, 
            {
                name: `❯\u2000\Server ID`,
                value: `${msg.guild.id}`,
                inline: true
            },
            {
                name: '❯\u2000\Owner',
                value: `${guild.owner}`,
                inline: true
            }, 
            {
                name: '❯\u2000\Owner ID',
                value: `${guild.ownerID}`,
                inline: true
            }, 
            {
                name: '❯\u2000\Verification Level',
                value: `${verifLevels[msg.guild.verificationLevel]}`,
                inline: true
            }, 
            {
                name: `❯\u2000\Region`,
                value: `${region[msg.guild.region]}`,
                inline: true
            },
            {
                name: '❯\u2000\Total Members',
                value: `${serverSize}`,
                inline: true
            }, 
            {
                name: `❯\u2000\Total Humans`,
                value: `${humanCount}`,
                inline: true
            },
            {
                name: `❯\u2000\Total Bots`,
                value: `${botCount}`,
                inline: true
            },
            {
                name: '❯\u2000\Role Count',
                value: `${guild.roles.size}`,
                inline: true
            },
            {
                name: '❯\u2000\Partnership',
                value: `${guild.features.length === 0 ? 'No' : `Yes, features: ${guild.features.map(feature => `\`${feature}\``).join(', ')}`}`,
                inline: true
            }, 
            {
                name: `❯\u2000\Created At`,
                value: `${msg.guild.createdAt.toString().substr(0, 15)},\n${checkDays(msg.guild.createdAt)}`, 
                inline: true
            },
            {
                name: '❯\u2000\Channels',
                value: `Text: [${msg.guild.channels.filter(c => c.type == "text").size}]\nVoice: [${msg.guild.channels.filter(c => c.type == "voice").size}]\nCategory: [${msg.guild.channels.filter(c => c.type == "category").size}]`,
                inline: true
            }, 
            {
                name: `❯\u2000\Member Statuses`,
                value: `**${msg.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${msg.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${msg.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${msg.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible`,
                inline: true
            },
            {
                name: `❯\u2000\Server Roles`,
                value: `Type **${this.client.commandPrefix}roles** to see \nthe Server roles`,
                inline: true
            },
            {
                name: `❯\u2000\Server Channels`,
                value: `Type **${this.client.commandPrefix}channels** to see \nthe Servers Channels`,
                inline: true
            }
        )
        let emojis = {
            0: []
        }
        let counter = 0
        guild.emojis.forEach((emoji, index) => {
            if (emojis[counter].join('\n').length > 950) {
                if (++index === guild.emojis.length) {
                    emojis[counter].push(`${emoji}`)
                } else {
                    counter++
                    emojis[counter] = []
                }
            } else {
                emojis[counter].push(`${emoji}`)
            }
        })
        if (emojis[0].join('').length !== 0) {
            Object.keys(emojis).forEach((collection, index) => {
                if (index !== 0) {
                    fields.push({
                        name: '❯\u2000\Continued',
                        value: emojis[index].join(' ')
                    })
                } else {
                    fields.push({
                        name: '❯\u2000\Emojis',
                        value: emojis[index].join(' ')
                    })
                }
            })
        } else {
            fields.push({
                name: '❯\u2000\Emojis',
                value: '**None**'
            })
        }
            send()

        function send() {
            msg.channel.send({
                embed: {
                    timestamp: new Date(msg.timestamp),
                    color: msg.guild.me.highestRole.color,
                    thumbnail: {
                        url: guild.iconURL ? guild.iconURL : `http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png`
                    },
                    fields: fields
                }
            }).catch(e => {
                this.client.channels.get(config.errorchannel).send(`ERROR\n${e}`)
            })
        }
    }

}