const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor('#198639')
    .setAuthor("League Of Legends - Thresh Karakteri")
    .setDescription("Sadist ve kurnaz olan Thresh, Gölge Adalar'ın hırslı ve huzursuz ruhudur. Bir zamanlar sayısız gizli sırrın muhafızıyken, yaşam ya da ölümden daha büyük bir güç tarafından geri alındı ve şimdi diğerlerini yavaş, dayanılmaz bir yaratıcılıkla eziyet ederek ve kırarak ayakta kalıyor.")
    .setImage('https://media.discordapp.net/attachments/841066817773502483/858682607620063262/Thresh_0.png?width=801&height=473')
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))    

message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['lolkarakter'],
    permLevel: 0
}

exports.help = {
    name: 'lolkarakter-tresh',
    description: 'lolkarakter-tresh',
    usage: 'lolkarakter-tresh'
}