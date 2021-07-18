const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("\<a:enunlem:813340295734493184> Bunu yapabilmek için yeterli yetkin yok!")
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: '',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};