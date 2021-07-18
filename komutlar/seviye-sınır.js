const Discord = require('discord.js');

const db = require("croxydb");

const ayarlar = require("../ayarlar.json")

exports.run = async (client, msg, args) => {
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(msg.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/ywJ9rSrrWY)")
  .setFooter('Üzgünüm...')
if(msg.author.id != "477189482206986240") return msg.channel.send(bakim)

}
        	 let karaliste = db.fetch(`ckaraliste.${msg.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/ywJ9rSrrWY) gelebilirsin!`)
  if(karaliste) 
    return msg.channel.send(westraben)

  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.MessageEmbed()

.setTitle(`Uyarı`)

.setDescription(`\<a:aZr_yanlis:841083661168410624> Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  

  

  if(args[0] == "sıfırla" || args[0] == "reset") {

    db.set(`seviyesınır${msg.guild.id}`, 250)

    return msg.channel.send(`\<a:aZr_dogru:841085808600809483> Seviye-Sınır Başarıyla Sıfırlandı! Varsayılan: \`500\``)

 }

  let sayı = args[0]

  if(!sayı) return msg.channel.send(`\<a:aZr_yanlis:841083661168410624> Seviye bir sayı olmalı!`)

  if(sayı < 100) return msg.channel.send(`\<a:aZr_yanlis:841083661168410624> En Az 100'e Kadar Bir Sayı Girebilirsiniz!`)

  if(sayı > 500) return msg.channel.send(`\<a:aZr_yanlis:841083661168410624> En Fazla 500'e Kadar Bir Sayı Girebilirsiniz!`)

  db.set(`seviyesınır${msg.guild.id}`, args[0])

  return msg.channel.send("\<a:aZr_dogru:841085808600809483> Başarıyla Seviye Sınırını \`" + args[0] + "\` Olarak Ayarladınız!")

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-sınır'

}