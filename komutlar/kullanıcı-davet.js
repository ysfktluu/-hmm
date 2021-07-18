const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("aZr - Bot Davet")
  .setThumbnail(client.user.avatarURL())
  .setDescription(" \<:endavet:816295069715791903> [__**aZr Botu Davet Et!**__](https://discord.com/oauth2/authorize?client_id=803267050894131223&scope=bot&permissions=805314622) \n \<:endiscord:840142770973704203> [__**Destek Sunucusu**__](https://discord.gg/ywJ9rSrrWY) \n :technologist: [__**Komutlarım İçin Tıkla**__](https://azr.glitch.me/)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};