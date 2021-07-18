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

  var user = message.mentions.users.first() || message.author;

  var id = user.id

  var gid = message.guild.id;

  

  var lvl = await db.fetch(`lvl_${id}_${gid}`);

  var xp = await db.fetch(`xp_${id}_${gid}`);

  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  let u = message.mentions.users.first() || message.author;

  if(u.bot === true) { message.channel.send(new Discord.MessageEmbed()

                        .setDescription("\<a:aZr_yanlis:841083661168410624> Botların seviyesi bulunmamaktadır!")

                        .setColor("RANDOM"))}  

  else 

  message.channel.send(new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setAuthor(`${user.username}`, user.avatarURL())

  .setThumbnail(user.avatarURL)                     

  .setTitle(`Seviye Bilgisi:`)                 

  .addField(`Kullanıcı:`, `<@${user.id}>`, true)

  .addField(`Kullanıcı Xp Değeri:`, `**${xp || 0}**`, true)   

  .addField(`Kullanıcı Seviye Değeri:`, `**${lvl || 0}**`, true)

  .setFooter(`${client.user.username} Seviye Sistemi!`, client.user.avatarURL())   

  .setTimestamp())

  .setBackground("https://cdn.discordapp.com/attachments/841066817773502483/854400112049651733/seviye.png")

  .setRank(0)
  
  .setLevel(seviye)
  
  
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-bilgi'

};