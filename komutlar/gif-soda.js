const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`İkram edeceğin istediğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://tenor.com/view/child-aww-cute-what-the-fail-gif-11812677",
  "https://tenor.com/view/sticker-pusheen-drinking-cat-soda-gif-18170400",
  "https://tenor.com/view/pouring-lionsgate-live-stream-soda-drinks-have-a-drink-gif-16926046",
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Aç gözlü olma oğlum ikram ediceksin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine soda ikram ediyor..**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'soda'
};