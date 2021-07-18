const Discord = require("discord.js");

exports.run = function(client, message, args) {

const meyrnn = message.mentions.users.first();

if (!meyrnn) return message.reply("\<a:enyanlis:813339775338545154> **Beşlik Çakacağın Kişiyi Etiketlemelisin!**");

const Embedmeyrnn = new Discord.MessageEmbed()

    .setDescription(
      `${meyrnn} ` + `ve **${message.author.username}** Beşlik Çaktı`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif"
    )
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
  
 return message.channel.send(Embedmeyrnn);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beşlikçak"],
  permLevel: 0
};
exports.help = {
  name: "beşlik",
  description: "Etiketlediğiniz Kişiyle Beşlik Çakarsınız",
  usage: "beşlik"
};