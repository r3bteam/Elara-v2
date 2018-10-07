const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { Canvas } = require("canvas-constructor");
const { get } = require("snekfetch");
const fsn = require('fs-nextra');

module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "beautiful",
            memberName: "beautiful",
            aliases: [],
            examples: [`${client.commandPrefix}beautiful @user/userid/username`],
            description: "Makes a beautiful painting of the person you choose",
            group: "fun",
            args: [
                {
                    key: 'user',
                    prompt: 'What user do you want to make beautiful? xd',
                    type: 'user'
                }
            ]
        })
    }
    async run(message, { user }) {
        message.channel.send('Loading...').then(msg => {
            get(user.displayAvatarURL.replace('.gif', '.png')).then(avatar => {
                fsn.readFile('./util/plate_beautiful.png').then(plate => {
                    let canvas = new Canvas(634, 675)
                        .setColor('#FF0000')
                        .addRect(0, 0, 634, 675)
                        .addImage(avatar.body, 423, 45, 168, 168)
                        .addImage(avatar.body, 426, 382, 168, 168)
                        .addImage(plate, 0, 0, 634, 675);
                    message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: "Painting.png" }] });
                    msg.delete();
                });
            });
        });
    }
}