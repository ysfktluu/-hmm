const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let resimişte = new Discord.MessageAttachment(`https://api.devs-hub.xyz//jail?image=${user.avatarURL({size: 1024, format: 'png'})}`, `jail.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte resmin!`)
  .setColor("RANDOM")
  .attachFiles(resimişte)
  .setImage(`attachment://jail.png`)
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
  name: "jail",
  description: "jail",
  usage: "jail"
};