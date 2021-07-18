const Discord = require('discord.js');

const db = require("croxydb");

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

.setTitle(`Uyarı`)

.setDescription(`<a:siren:778777832976416778> Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  
  if(!args[0])  return message.channel.send(new Discord.MessageEmbed().setColor('#f6ff00').setDescription('> **Seviye Sisteminde ne yapmak istediğini belirtmedin** <a:sloading1:724733859534602350> \n> `s*seviye-log ayarla #kanal` **Seviye-Log Sistemini Ayarlar** \n> `s*seviye-log sıfırla` **Seviye-Log Sistemini Sıfırlar.**'))

  

   if(args[0] == "sıfırla") {

    db.delete(`seviyekanal${message.guild.id}`)

    return message.channel.send(`<a:tmdir:778774341357797378> | **Seviye-Log sıfırlandı!**`);

  }

    

    

   if (args[0] == "ayarla") {

      let akanal =

        message.mentions.channels.first() ||

        message.guild.channels.cache.find(ff => ff.name === args.slice(1).join(" "));

      db.set(`seviyekanal${message.guild.id}`, akanal.id);

      message.channel.send(`<a:tmdir:778774341357797378> | Seviye Log Kanalı Ayarlandı! Ayarlanan Kanal: <#${akanal.id}> **Sıfırlamak için** q!seviye-log sıfırla`)           

    }

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-log'

};