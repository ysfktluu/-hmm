const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

  let sayfalar = [ '\<a:enmavikristal:813439001259278388> **z!aduket-çek** - Etiketlediğiniz kişiye aduket çekersiniz. \n \<a:enmavikristal:813439001259278388> **z!ağla** - Botu Ağlatırsınız. \n \<a:enmavikristal:813439001259278388> **z!at** - Bot At resimleri gönderir. \n \<a:enmavikristal:813439001259278388> **z!beşlik** - Etiketlediğiniz kişiye beşlik çakarsınız. \n \<a:enmavikristal:813439001259278388> **z!bilgisayara-bak** - Bilgisayarınıza bakarsınız. \n \<a:enmavikristal:813439001259278388> **z!fbi** - FBİ gelir. \n \<a:enmavikristal:813439001259278388> **z!hediye-ver** - Etiketlediğiniz kişiye hediye verir. \n \<a:enmavikristal:813439001259278388> **z!kahve** - Kahve içersiniz.'+ client.commands.filter(cmd => exports.help.category === 'admin').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\<a:enmavikristal:813439001259278388> **z!kedi** - Bot Kedi resimleri gönderir. \n \<a:enmavikristal:813439001259278388> **z!köpek** - Bot Köpek resimleri gönderir. \n \<a:enmavikristal:813439001259278388> **z!kral-ol** - Kral Olursunuz! \n \<a:enmavikristal:813439001259278388> **z!polisi-ara** - Bot Polisi aramanızı sağlar. \n \<a:enmavikristal:813439001259278388> **z!sarıl** - Etiketlediğiniz kişiye sarılırsınız. \n \<a:enmavikristal:813439001259278388> **z!soda** - Etiketlediğiniz kişiye soda ikram edersiniz. \n \<a:enmavikristal:813439001259278388> **z!stres-çarkı** - Stres Çarkı çevirirsiniz. \n \<a:enmavikristal:813439001259278388> **z!araba** - Bot Araba gifleri atar.'+client.commands.filter(cmd => exports.help.category === 'util').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\<a:enmavikristal:813439001259278388> **z!şeker-ye** - Şeker Yersiniz. \n \<a:enmavikristal:813439001259278388>  **z!tilki** - Bot Tilki görselleri atar. \n \<a:enmavikristal:813439001259278388>  **z!tokat** - Etiketlediğiniz kişiye Tokat atarsınız. \n \<a:enmavikristal:813439001259278388> **z!zeki** - Bir anlığına zeki olursunuz :smile: '+client.commands.filter(cmd => exports.help.category === 'photo').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),]; 
  let sayfa = 1;

  const embed = new Discord.MessageEmbed()
    .setColor("#3f6d95")
    .setAuthor(`aZr - Bot Gif Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setImage('https://media.discordapp.net/attachments/839223299669622835/839787050089316412/standard_1.gif')
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
  name: 'gifler',
  description: 'Gif Yardım Menüsü.',
  usage: 'gifler'
};