const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor('#198639')
    .setAuthor("Valorant - Odin Makineli Tüfek")
    .setDescription("Atış hızı 12 \n Koşma Hızı 5,13")
    .setImage('https://cdn.discordapp.com/attachments/841066817773502483/858699482908327957/Odin.png')
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))    

message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['valorant-odin'],
    permLevel: 0
}

exports.help = {
    name: 'valorant-odin',
    description: 'valorant-odin',
    usage: 'valorant-odin'
}