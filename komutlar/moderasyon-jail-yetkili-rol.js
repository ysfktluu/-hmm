const Discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

   var başarılı = ['\<a:enevet:813350232879923200>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['\<a:enhayir:813350216911683584>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];

if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**z!jail-yetkili ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Jail kurabilmek için, **z!jail-yetkili ayarla/sıfırla @rol** yazınız`)


  if (args[0] == 'ayarla') {

  let yetkilirol = message.mentions.roles.first() || message.guild.roles.cache.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(x2 + ` Bir rol etiketle`)

  db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)
  message.channel.send(x + ` Jail yetkilisi ${yetkilirol} olarak ayarlandı.`)
  } 


  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(x + ` Jail yetkilisi başarıyla sıfırlandı.`)
  }


};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'jail-yetkili',
 description: 'Hangi role sahip kişilerin jaile atabileceğini ayarlarsınız.',
 usage: 'jail-yetkilisi ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};