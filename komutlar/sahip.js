const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(message.author.id != "693066907774877727") return //Bot sahip id
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Ardanın CV")
  .setDescription("C++ | HTML | Node.JS | Java | Script | C4D | BlockBench | Blender | Photoshop | Premiere | After Effeckt | FL Studio 12 | Youtube | Filmora Editör | C#")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'ardaözel',
  permLevel: 0
};

exports.help = {
  name: 'ardaözel',
  description: 'ardaözel',
  usage: 'ardaözel'
};