const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let dmkisi = message.mentions.users.first();
    if(message.author.id != "693066907774877727") return //Bot sahip id
    if (!dmkisi) return message.channel.send('❌ **Teşekkür Edeceğin Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('\<a:kristalkalp:851411711541772348> Botu eklediğin sana teşekkür ederiz!')
    .setDescription(" \<:endavet:816295069715791903> [__**aZr - Bot**__](https://discord.com/oauth2/authorize?client_id=803267050894131223&scope=bot&permissions=805314622)")
    .addField('\<:aZr_yia:851734581908471859> Teşekkür Eden Kişi :', `➽ <@${message.author.id}>`)
    .setFooter('Bize destek olduğunuz için teşekkürler | aZr - Bot')
    .setThumbnail("https://media.discordapp.net/attachments/843562613799780373/852658753828028446/giphy.gif")
    dmkisi.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Teşekkür ettin ✅')
    .setFooter('aZr - Bot')
    message.channel.send(dmtamam);
    
        message.channel.send('✅ **Teşekkür Mesajın Gönderildi!😉**');
    };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["teşekküret"],
  permLevel: 0
};

exports.help = {
  name: 'teşekkür-et',
  description: 'teşekkür edersiniz',
  usage: 'teşekkür-er'
};