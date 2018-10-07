const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "randomemoji",
            memberName: "randomemoji",
            aliases: ["remoji"],
            examples: [`${client.commandPrefix}remoji`],
            description: "Posts a random emoji",
            group: "fun"
        })
    }
    async run(message) {
        let replies = [
            'o.O', 'O.o', 'O.O',
            '<a:TOYTLE:480587565053902848>', '<a:nyanparrot:424339135172706324>',
            '<a:arainblob:443961509735956493>', '<a:Batman:477030623698223104>',
            '<a:CoolDoge:476502836621082625>', '<a:PikaGroove:476635606814818314>',
            '<a:LoveDiscord:448269463402446850>', '<:HYPECAT:424205231400681473>'
        ]
        let result = Math.floor((Math.random() * replies.length));
        message.say(replies[result]);
    }
}