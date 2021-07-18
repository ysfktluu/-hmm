const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('aZr - Bot | Market Menüsü')
    .addField('\<:azr:846351548975677451> __Parana Para Katmak İçin Eşyalar__', '**z!balta**', true)
    .addField('\<:azr:846351548975677451> __Parana Para Katmak İçin Eşyalar__', '**z!olta**', true)
    .addField('\<:azr:846351548975677451> __Parana Para Katmak İçin Eşyalar__', '**z!silah**', true)
    .addField('\<:azr:846351548975677451> __Korunma Eşyaları__', '**z!padlock**', true)
    .addField('\<:azr:846351548975677451> __Şans Eşyaları__', '**z!bitcoin**', true)
    .setThumbnail("https://images-ext-1.discordapp.net/external/yUjmgpu9KH3nDTl_V-7tKoGu-zdbqaymZQ5Xz5vCjWs/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/803267050894131223/5d2e1ef49f5da2e618e3a703cadb76f2.png?width=473&height=473")
    

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['market']



};
exports.help = {
name: "market"
};