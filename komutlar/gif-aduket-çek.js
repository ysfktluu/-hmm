const Discord = require("discord.js");

exports.run = function(client, message, args) {

const meyrnn = message.mentions.users.first();

if (!meyrnn)

return message.reply("\<a:enyanlis:813339775338545154> **Aduket Çekeceğin Kişiyi Etiketlemelisin!**");

const Embedmeyrnn = new Discord.MessageEmbed()

    .setDescription(
      `${meyrnn} ` + `**${message.author.username}** Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(Embedmeyrnn);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "meyrnnrisé Eğlence Botu Özelliği",
  usage: "aduket-çek <etiket>"
};