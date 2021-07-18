const { MessageAttachment } = require("discord.js");
const { prefix } = require("../ayarlar.json"); 

exports.run = async (client, message, args) => { 
  let yazı = args.slice(0).join(" ");
  if (!yazı) return message.channel.send(`Bir şeyler yazmalısın!`);
  if (!yazı.includes(","))
    return message.channel.send(
      `Lütfen mesajını \`,\` ile ayırt! Örnek: ${prefix}panik üst yazı, orta yazı, alt yazı`
    );
  let s = yazı.split(",");
  let link = `https://api.devs-hub.xyz/panik?panik=${s[0]}]}&kalm=${s[1]}&panik2=${s[2]}`;
  let encode = encodeURI(link);

  message.channel.send(new MessageAttachment(encode, `panik.png`));
};

exports.conf = {
  aliases: []
};

exports.help = { 
  name: "panik",
  description: "panik",
  usage: "panik",
  perm: ""
};