const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('\<a:enhayir:813350216911683584> ```Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın```')
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
    return message.channel
      .send(
        
        new Discord.MessageEmbed().addField(`\<a:enyanlis:813339775338545154>**Yazı Yazman Gerek** \<a:enyanlis:813339775338545154>`)
      )
      .then(m => m.delete(5000));
  console.log(
    "oylama komutu " +
      message.author.username +
      "#" +
      message.author.discriminator +
      " tarafından kullanıldı."
  );
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("Oylama Sistemi", client.user.avatarURL())
        .addField(`**Oylama**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("\<a:enevet:813350232879923200>");
      message.react("\<a:enhayir:813350216911683584>");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};