const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let icon = client.user.displayAvatarURL();
  
    const yenilikler = new Discord.MessageEmbed()
    .setAuthor('aZr - Bot', icon)
    .setTitle(`aZr - Bot `)
    .addField('Yenilikler' , '**・>** Yenilik 1\n**・>** Yenilik 2\n**・>** Yenilik 3...\n16 Mayıs 2021 tarihinde güncellendi.')
  message.channel.send(yenilikler)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['updates'],
  permLevel: 0
};

exports.help = {
  name: "yenilikler",
  description: "botun yeniliklerini gösterir",
  usage:"yenilikler"
}