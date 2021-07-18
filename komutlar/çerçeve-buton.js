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
  let link = `https://api.devs-hub.xyz/two-buttons?button1=${s[0]}&button2=${s[1]}`;
  let encode = encodeURI(link);

  message.channel.send(new MessageAttachment(encode, `buton.png`));
};

exports.conf = {
  aliases: []
};

exports.help = { 
  name: "buton",
  description: "buton",
  usage: "buton",
  perm: ""
};