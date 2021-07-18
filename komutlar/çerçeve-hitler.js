const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let resimişte = new Discord.MessageAttachment(`https://api.devs-hub.xyz//hitler?image=${user.avatarURL({size: 1024, format: 'png'})}`, `hitler.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte resmin!`)
  .setColor("RED")
  .attachFiles(resimişte)
  .setImage(`attachment://hitler.png`)
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
  name: "hitler",
  description: "",
  usage: ""
};