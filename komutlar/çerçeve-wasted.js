const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let resimişte = new Discord.MessageAttachment(`https://api.devs-hub.xyz//wasted?image=${user.avatarURL({size: 1024, format: 'png'})}`, `wasted.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte resmin!`)
  .setColor("BLACK")
  .attachFiles(resimişte)
  .setImage(`attachment://wasted.png`)
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
  name: "wasted",
  description: "",
  usage: ""
};