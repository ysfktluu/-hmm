const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

  let sayfalar = ['\<a:enmavi:813332989949116416> **z!alev** - Alevli Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!altın** - Altın Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!arrow** - Arrow stili Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!basit** Basit stil Logo yaparsınız.\n\<a:enmavi:813332989949116416>  **z!bubble** - Bubble Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!dinamik** - Dinamik stil Logo yaparsınız.\n\<a:enmavi:813332989949116416>  **z!ejderha** - Ejderha stil Logo yaparsınız.\n\<a:enmavi:813332989949116416>  **z!elmas** - Elmas Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!yeşil** - Yeşil Logo yaparsınız.'+ client.commands.filter(cmd => exports.help.category === 'fun').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
   '\<a:enmavi:813332989949116416> **z!habbo** - Habbo stili Logo yaparsınız. \n\<a:enmavi:813332989949116416>   **z!alev2** - Alevli Logo yaparsınız. \n\<a:enmavi:813332989949116416>  **z!anime** - Anime stili Logo yaparsınız._\n\<a:enmavi:813332989949116416>  **z!kalın** - Kalın Logo yaparsınız. \n\<a:enmavi:813332989949116416> **z!kalp** - Kalpli Logo yaparsınız. \n\<a:enmavi:813332989949116416> **z!kırmızı** - Kırmızı Logo yaparsınız. \n\<a:enmavi:813332989949116416> **z!komik** - Komik stili Logo yaparsınız. \n\<a:enmavi:813332989949116416> **z!havalı** - _Havalı Logo yaparsınız. \n\<a:enmavi:813332989949116416>  **z!gökkuşağı** - Gökkuşağı Logo yaparsınız.'+client.commands.filter(cmd => exports.help.category === 'fun').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
   '\<a:enmavi:813332989949116416> **z!odun** - Alevli Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!neon** - Neon Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!neonmavi** - Neon Mavi Logo yaparsınız.\n\<a:enmavi:813332989949116416> **z!pembe** - Pembe Logo yaparsınız.'+client.commands.filter(cmd => exports.help.category === 'fun').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),]; 
  let sayfa = 1;

  const embed = new Discord.MessageEmbed()
    .setColor("#6775f7")
    .setAuthor(`aZr - Bot Logo Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setImage('https://media.discordapp.net/attachments/839223299669622835/839228891041759232/standard.gif')
    .setDescription(sayfalar[sayfa-1])

  message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
      msg.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);


      backwards.on('collect', r => {
        if (sayfa === 1) return;
        sayfa--;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

      forwards.on('collect', r => {
        if (sayfa === sayfalar.length) return;
        sayfa++;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

    })

  })
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h","dy"],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'logolar',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'logolar'
};