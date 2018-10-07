const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "pokecord",
            memberName: "pokecord",
            aliases: [],
            examples: [`${client.commandPrefix}pokecord <Webhook ID Here> <Webhook Token Here>`],
            description: "Send a pokecord help message in a channel you choose.",
            group: "special",
            guildOnly: true,
            userPermissions: ["MANAGE_WEBHOOKS", "MANAGE_GUILD", "ADMINISTRATOR"],
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
            .setImage(`http://i.imgur.com/oJkBNgX.jpg`)
            .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png`)
            .setColor(`PURPLE`)
            .setTitle(`Click here to get the full list of all generations Pokemons!`)
            .setURL(`https://pokemondb.net/pokedex/national`)
            .addField(`Getting Started`, `All of the Commands will be listed down below.`)
            .addField(`p!start`, `Starts the game!`)
            .addField(`p!pick`, 'Pick a started Pokemon (`p!start` shows all available)')
            .addField(`p!help`, `Displays the help message`)
            .addField(`Main Commands`, `This will list all of the main commands for the bot.`)
            .addField(`p!info`, `Shows your selected pokémon's information.`)
            .addField(`p!pokemon`, `Shows a list of your pokémon.`)
            .addField(`p!fav`, `Shows a list of your favourite pokémon.`)
            .addField(`p!addfav`, `Adds a pokémon to your list of favourites.`)
            .addField(`p!removefav`, `Removes a pokémon from your list of favourites.`)
            .addField(`p!nickname`, `Gives a nickname to your currently selected pokémon.`)
            .addField(`p!dropitem`, `Drop the item your pokémon is currently holding.`)
            .addField(`p!select`, `Select which pokémon to train and use in battle!`)
            .addField(`p!catch <name of Pokemon here>`, `Catch a pokémon!`)
            .addField(`p!release <Pokemon number here>`, `Release a pokémon!`)
            .addField(`p!duel @user`, `Challenge one of your friends to a 1 on 1 duel!`)
            .addField(`p!trade @user`, `Invite one of your friends to a trade!`)
            .addField(`p!moves`, `List all moves your pokémon can currently learn.`)
            .addField(`p!learn <move name here>`, `Teach your pokémon a move.`)
            .addField(`p!shop`, `Open the shop to see items available for purchase.`)
            .addField(`p!buy <Item ID here>`, `Buy an item from shop.`)
        sendchannel.send(embed)
        await message.say(`Message sent.`)
    }
}