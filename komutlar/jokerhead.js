const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let resimişte = new Discord.MessageAttachment(`https://api.devs-hub.xyz//joke-over-head?image=${user.avatarURL({size: 1024, format: 'png'})}`, `joke.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte resmin!`)
  .setColor("RED")
  .attachFiles(resimişte)
  .setImage(`attachment://joke.png`)
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
  name: "joke",
  description: "",
  usage: ""
};