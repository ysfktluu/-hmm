const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:maple_leaf:742698148329291826>`)
  const linqo = `https://habbofont.net/font/battlebanzai/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Anime Logo Oluşturuldu!")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'anime',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'anime <yazı>'
}