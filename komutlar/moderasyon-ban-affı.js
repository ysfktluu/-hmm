const Discord = require('discord.js'); 
const db = require('croxydb');

exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
   message.channel.send(' \<a:enmavitik:839520034967257118> | **İşlem Başarılı!\n \<a:enmavitik:839520034967257118> | Sunucudaki Tüm Yasakları Kaldırdım**')

  message.guild.fetchBans().then(bans => {
      bans.cache.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-affı","kaldır"],
  permLevel: 0
};

exports.help = {
  name: 'ban-affı',
  description: 'ban-affı',
  usage: 'ban-affı'
};