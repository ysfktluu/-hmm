const { MessageAttachment } = require("discord.js");
const { prefix } = require("../ayarlar.json"); 

exports.run = async (client, message, args) => { 
  let yazı = args.slice(0).join(" ");
  if (!yazı) return message.channel.send(`Bir şeyler yazmalısın!`);
  if (!yazı.includes(","))
    return message.channel.send(
      `Lütfen mesajını \`,\` ile ayırt! Örnek: ${prefix}pooh 1.yazı, 2.yazı`
    );
  let s = yazı.split(",");
  let link = `https://api.devs-hub.xyz//tuxedo-pooh?normal=${s[0]}&tuxedo=${s[1]}`;
  let encode = encodeURI(link);

  message.channel.send(new MessageAttachment(encode, `pooh.png`));
};

exports.conf = {
  aliases: []
};

exports.help = { 
  name: "pooh",
  description: "pooh",
  usage: "pooh",
  perm: ""
};