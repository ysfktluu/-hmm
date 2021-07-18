const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async(client, message, args) => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('\<a:enhayir:813350216911683584> ```Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın```')

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send(':red_circle: ```Kick Log kanalını belirtmelisin```')

    db.set(`kicklog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`\<a:enmavitik:839520034967257118> | **Kick Log Kanalı Başarıyla <#${kanal.id}> Olarak ayarlandı!**`)
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:['kicklog'],
	permlevel: 0
};

exports.help = {
	name: "kick-log"
}