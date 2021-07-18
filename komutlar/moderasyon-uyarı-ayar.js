const Discord = require('discord.js');
const db = require('quick.db');
const p = "."
exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir komut belirtmelisiniz. aZr - Bot | Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`z!uyarı-ayar yardım\``))
if(args[0] === "log"){
var kanal = message.mentions.channels.first();
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir kanal belirtmelisiniz. aZr - Bot | Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`z!uyarı-ayar yardım\``))
db.set(`uyarilog_${message.guild.id}`, kanal.id)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Uyarı Log kanalı ayarlandı."))
};
if(args[0] === "yetkili" || args[0] === "görevli"){
var rol = message.mentions.roles.first();
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir rol belirtmelisiniz. aZr -  Bot | Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`z!uyarı-ayar yardım\``))
db.set(`uyariyetkili_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`\`Uyarı Yetkilisi\` rol'ü <@&${rol.id}> olarak ayarlandı!`))
};
if(args[0] === "sınır"){
var sınır = args.slice(1).join('')
if(!sınır) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir sayı belirtmelisiniz. aZr - Bot | Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`z!uyarı-ayar yardım\``))
if(isNaN(sınır)) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir sayı belirtmelisiniz. aZr - Bot | Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`z!uyarı-ayar yardım\``))
if(sınır > 2000) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Girdiğiniz sayı 2000'den küçük olmalıdır.`))
db.set(`uyarisinir_${message.guild.id}`, sınır)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Uyarı sınırı ayarlandı!"))
};
if(args[0] === "cezalı"){
var rol = message.mentions.roles.first()
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir rol berlirtin!"))
db.set(`uyaricezarol_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("Uyarı ceza rolü ayarlandı!"))
};
if(args[0] === "yardım"){
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle("aZr - Bot | Uyarı Sistemi")
.setDescription(`
\<a:beyaz:837713655822942238> **z!uyarı-ayar log** : Log kanalını ayarlar.
\<a:beyaz:837713655822942238> **z!uyarı-ayar yetkili** : Uyarı yetkilisini ayarlar.
\<a:beyaz:837713655822942238> **z!uyarı-ayar sınır** : Ceza Puanı sınırını ayarlar.
\<a:beyaz:837713655822942238> **z!uyarı-ayar cezalı** : Ceza rolünü ayarlar
\<a:beyaz:837713655822942238>**z!uyarı-sicil @kisi** : Kişinin uyarı geçmişini gösterir.
(Eğer kişi etiketlenmezse kendisinin uyarı geçmişini gösterir)
\<a:beyaz:837713655822942238> **z!uyarı-sil @kisi** : Kişinin tüm uyarı geçmişini siler.
\<a:beyaz:837713655822942238> **z!uyar @kisi <sebep>** : Kişiyi uyarır.
`)
return message.channel.send(embed)
};
};
exports.conf = {
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "uyarı-ayar"
};