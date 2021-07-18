const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(RANDOM)
    .setTimestamp()
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://dynamic.brandcrowd.com/asset/logo/2fa9614c-e8fd-47be-b522-14aa07bd8f22/logo?v=4&text="+isim
  const CrewCodeembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage(link)
  .setTitle("Havalı Logo Oluşturuldu!")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  message.channel.send(CrewCodeembed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'havalı',
  description: 'Logo Yaparsınız',
  usage: 'havalı'
};