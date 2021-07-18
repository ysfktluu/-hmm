const Discord = require("discord.js");

exports.run = (client, message, args) => {

let emadnaghi = args.slice(0).join("+");
if (!emadnaghi) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + emadnaghi;

const Embedemadnaghi = new Discord.MessageEmbed()
.setTitle("Ejderha Logo Oluşturuldu!")
.setColor("RANDOM")
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
.setImage(link);

return message.channel.send(Embedemadnaghi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ejderha'],
  permLevel: 0
};

exports.help = {
  name: "ejderha",
  description: "Ejderha Logosu Yaparsınız",
  usage: "ejderha <yazı>"
};
