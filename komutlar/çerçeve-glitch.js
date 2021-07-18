const { MessageAttachment } = require("discord.js");
const { prefix } = require("../ayarlar.json"); 

exports.run = async (client, message, args) => { 
  let yazı = args.slice(0).join(" ");
  if (!yazı) return message.channel.send(`Bir şeyler yazmalısın!`);
  if (!yazı.includes(","))
    return message.channel.send(
      `Lütfen mesajını \`,\` ile ayırt! Örnek: ${prefix}buton 1.yazı, 2.yazı`
    );
  let s = yazı.split(",");
  let link = `https://api.devs-hub.xyz//spongebob-timecard?${s[1]}=text`;
  let encode = encodeURI(link);

  message.channel.send(new MessageAttachment(encode, `card.png`));
};

exports.conf = {
  aliases: []
};

exports.help = { 
  name: "card",
  description: "",
  usage: "card",
  perm: ""
};