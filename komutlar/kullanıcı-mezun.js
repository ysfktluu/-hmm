const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let plasmic = new Discord.MessageAttachment(`https://api.no-api-key.com/api/v2/smrt?image=${user.avatarURL({size: 1024, format: 'png'})}`, `mezun.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte Mezunluk Resmin!`)
  .setColor("RANDOM")
  .attachFiles(plasmic)
  .setImage(`attachment://mezun.png`)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mezun",
  description: "",
  usage: ""
};