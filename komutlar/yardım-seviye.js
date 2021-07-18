const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/ywJ9rSrrWY) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/ywJ9rSrrWY)")
  .setFooter('Üzgünüm...')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`aZr - Bot Seviye Komutları`, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setColor('RANDOM')
.setDescription(` aZr botumuzu eklemek için \`z!davet\` yazabilirsiniz.`)  
.addField(`__Seviye Ayarlar__`,` \`z!seviye-ayarlar\` Seviye Ayarlarını Gösterir.`,true)
.addField(`__Seviye Log__`,` \`z!seviye-log ayarla <#kanal>\` Seviye Atlayınca Mesaj Gidecek Kanal.`,true)
.addField(`__Seviye Rol__`,` \`z!seviye-rol\` İstenilen Seviyeye Gelince Verilecek Rol`,true)
.addField(`__Seviye Sıfırla__`,` \`z!seviye-sıfırla\`  Seviye Sistemini Sıfırlarsınız.`,true)
.addField(`__Seviye Sınır__`,` \`z!seviye-sınır\` Maksimum Kazanılanabilecek Seviyeyi Belirler.`,true)
.addField(`__Seviye XP__`,` \`z!seviye-xp\`  Bir Mesaj Başına Verilecek Xp yi ayarlar.`,true)
.addField(`__Seviye Top5__`,` \`z!seviye-top\` Sunucuda ki En yüksek 5 Kişiyi Gösterir`,true)
.addField(`__Seviye Rolleri__`,` \`z!seviye-rol\` Hangi Seviye de Rol Verilecek Onu Gösterir.`,true)
.addField(`__Seviye Bilgi__`,` \`z!seviye-bilgi\` Seviyenizi Gösterir.`,true)
.setDescription(" [__**Destek Sunucusu**__](https://discord.gg/ywJ9rSrrWY)")
.setFooter(`aZr - Botu Davet Etmek İçin z!davet`, client.user.avatarURL())
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'seviye'
  }; 
  //////**\n:white_small_square: seviye-ayarlar** : Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.
//**:white_small_square: seviye-log** : Seviye Atlayınca Mesaj Gidecek Kanalı Ayarlarsınız.
//**:white_small_square: seviye-rol** : İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.
//**:white_small_square: seviye-sıfırla** : Mevcut Seviye Sistemini Sıfırlar
//**:white_small_square: seviye-sınır** : Maksimum Kazanılanabilecek Seviyeyi Belirler.
//**:white_small_square: seviye-xp** : Bir Mesaj Başına Verilecek Xp yi ayarlar.
//**:white_small_square: seviye-top** : Sunucuda ki En yüksek 5 Kişiyi Gösterir
//**:white_small_square: seviyerolleri** : Hangi Seviye de Rol Verilecek Onu Gösterir.
//**:white_small_square: seviye** : Seviyenizi Gösterir.`)