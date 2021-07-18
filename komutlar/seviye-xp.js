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
  if(msg.author.id != "477189482206986240") return message.channel.send(bakim)

}
        	 let karaliste = db.fetch(`ckaraliste.${msg.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor(`#f6ff00`)
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/ywJ9rSrrWY) gelebilirsin!`)
  if(karaliste) 
    return msg.channel.send(westraben)

if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.MessageEmbed()

.setTitle(`Uyarı`)

.setDescription(`\<a:aZr_unlem:841083723222351902> Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  if(args[0] == "sıfırla" || args[0] == "reset") {

    db.delete(`seviyexp${msg.guild.id}`)

    return msg.channel.send(`Seviye-XP sıfırlandı! Default: \`5\``);

  }

let sayı = args[0]

if(!sayı) return msg.channel.send("Lütfen Bir Sayı Giriniz!")

if(sayı > 20) return msg.channel.send("Max 20 Olarak Ayarlayabilirsin.")

db.set(`seviyexp${msg.guild.id}`, Math.floor(args[0]))

return msg.channel.send("Başarıyla Seviye Puanını \`" + args[0] + "\` Olarak Ayarladınız!")

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-xp'

};