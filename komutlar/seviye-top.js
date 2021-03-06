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

.setTitle(`Uyarı`)

.setDescription(`\<a:aZr_unlem:841083723222351902> Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

let user = message.author;

let id = message.author.id

let guild = message.guild;

let gid = message.guild.id

let sayi = 1

let map = message.guild.members.cache.filter(mem => !mem.user.bot).array().sort((a, b) => { return ( db.fetch(`lvl_${b.user.id}_${message.guild.id}`) || 0) - ( db.fetch(`lvl_${a.user.id}_${message.guild.id}`) || 0)  }).slice(0, 5).map(member => { return `\`#${sayi++}\` <@${member.user.id}> | **__Seviye:__** \`${( db.fetch(`lvl_${member.user.id}_${message.guild.id}`))}\` **__XP:__** \`${( db.fetch(`xp_${member.user.id}_${message.guild.id}`)) || `0`}\`` })

message.channel.send(new Discord.MessageEmbed()

.setColor("RANDOM")

.setAuthor(`${message.guild.name} Seviye İlk 5`, client.user.avatarURL())

.setDescription(map)

.setFooter(`${client.user.username} Seviye-Top Sistemi!`, client.user.avatarURL()))

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-top'

};