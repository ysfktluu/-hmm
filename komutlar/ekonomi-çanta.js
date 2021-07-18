const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
exports.run = async(client, message, args) => {
    let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    let olta = db.fetch(`olta_${user.id}`)
    if(olta == olta) {var oltavar = olta}
    if(olta == undefined) {var oltavar = "yok"}
    let balta = db.fetch(`balta_${user.id}`)
    if(balta == balta) {var baltavar = balta}
    if(balta == undefined) {var baltavar = "yok"}
    let silah = db.fetch(`silah_${user.id}`)
    if(silah == silah) {var silahvar = silah}
    if(silah == undefined) {var silahvar = "yok"}
    let padlock = db.fetch(`padlock_${user.id}`)
    if(padlock == padlock) {var padlockvar = padlock}
    if(padlock == undefined) {var padlockvar = "yok"}
    let bitcoin = db.fetch(`bitcoin_${user.id}`)
    if(bitcoin == bitcoin) {var bitcoinvar = bitcoin}
    if(bitcoin == undefined) {var bitcoinvar = "yok"}
    const member = message.guild.member(user);
let embed = new discord.MessageEmbed()
.setTitle(`${user.username} kişisinin çantası!`)
.addField(`__Olta__`,`Balık tutmaya yarar. \n Stok: **${oltavar}**`)
.addField(`__Balta__`, `Ağac kesmeye yarar. \n Stok: **${baltavar}**`)
.addField(`__Silah__`, `Avlanmaya yarar. \n Stok: **${silahvar}**`)
.addField(`__Padlock__`, `Paranı 1 kereliğine çaldırmamanı sağlar. \n Stok: **${padlockvar}**`)
.addField(`__Bitcoin__`, `0 - 8000 arası para verir. \n Stok: **${bitcoinvar}**`)
.setThumbnail(message.author.avatarURL())
.setTimestamp()
.setFooter('aZr - Bot | Ekonomi Sistemi')
return message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çanta' 
  }