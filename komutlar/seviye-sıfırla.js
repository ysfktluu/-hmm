const Discord = require('discord.js');

const db = require("croxydb");

const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
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
        	 let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/ywJ9rSrrWY) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
                                                                               .setColor("RANDOM")

.setTitle(`Uyarı`)

.setDescription(`\<a:aZr_yanlis:841083661168410624> Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  

db.delete(`seviyesınır${message.guild.id}`)

db.delete(`seviyexp${message.guild.id}`)

db.delete(`seviyekanal${message.guild.id}`)

 return message.channel.send(new Discord.MessageEmbed()

.setColor("RANDOM")

.setThumbnail(client.user.avatarURL()) 

.setDescription(`\<a:aZr_dogru:841085808600809483> Seviye-Sistemi Bütün Ayarlamaları Sıfırlandı!`)

.setFooter(`${client.user.username} Seviye Sistemi!`)   )

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-sıfırla'

};