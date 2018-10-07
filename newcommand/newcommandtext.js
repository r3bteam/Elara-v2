const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "",
            memberName: "",
            aliases: [],
            examples: [],
            description: "",
            group: "",
            args: [
                {
                    key: 'content',
                    prompt: '',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {content}) {

    }
}