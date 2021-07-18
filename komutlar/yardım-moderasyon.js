const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  
  let sayfalar = ['\<a:kirmizi:837713693046865960> **z!ban** - Belirttiğiniz kişiye ban atarsınız. \n \<a:kirmizi:837713693046865960> **z!unban** - Belirttiğiniz kişinin banını açarsınız. \n \<a:kirmizi:837713693046865960> **z!ban-log** - Ban Log ayarlarsınız. \n \<a:kirmizi:837713693046865960> **z!ban-affı** - Sunucuda Yasağı bulunan herkesin yasağını kaldırır. \n \<a:kirmizi:837713693046865960> **z!ban-sorgu** - Belirttiğiniz kişinin banlanma sebeplerini gösterir. \n \<a:kirmizi:837713693046865960> **z!ban-yetkili-rol** - Ban Yetkili Rolünü ayarlarsınız. '+ client.commands.filter(cmd => exports.help.category === 'admin').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\<a:kirmizi:837713693046865960> **z!jail** - Belirttiğiniz kişiyi istediğiniz süre kadar susturabilirsiniz. \n \<a:kirmizi:837713693046865960> **z!jail-log** -Jail Log kanalını ayarlarsınız. \n \<a:kirmizi:837713693046865960> **z!jail-rol** - Jail Rolünü ayarlarsınız.  \n \<a:kirmizi:837713693046865960> **z!jail-yetkili-rol** - Jail Yetkilisinin Rolünü ayarlarsınız. \n \<a:kirmizi:837713693046865960> **z!jail-alınıcak-rol** - Kişinin susturma süresi bittiğinde alınıcak rolü ayarlarsınız.'+ client.commands.filter(cmd => exports.help.category === 'admin').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"), 
  '\<a:kirmizi:837713693046865960> **z!kanal-kilitle** - Komutu yazdığınız kanal kilitlenir. \n \<a:kirmizi:837713693046865960> **z!kanal-kilit-aç** - Komutu yazdığınız kanalın kiliti varsa kaldırır. \n \<a:kirmizi:837713693046865960> **z!küfür-engel** - Sunucuda Küfür Engel sistemini açarsınız/kapatırsınız. \n \<a:kirmizi:837713693046865960> **z!reklam-engel** - Sunucuda Reklam Engel sistemini açarsınız/kapatırsınız. \n \<a:kirmizi:837713693046865960> **z!oylama** - Oylama başlatırsınız. \n \<a:kirmizi:837713693046865960> **z!sil** - Belirttiğiniz sayı kadar mesaj siler. \n \<a:kirmizi:837713693046865960> **z!slowmode** - Komutu kullandığınız kanalda belirttiğiniz süre kadar yazma süresi ekler. \n \<a:kirmizi:837713693046865960> **z!yaz** - Bota istediğiniz yazıyı yazdırırsınız. \n \<a:kirmizi:837713693046865960> **z!emoji-ekle** - Sunucunuza eklemek istediğiniz emojiyi ekler.'+client.commands.filter(cmd => exports.help.category === 'util').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\<a:kirmizi:837713693046865960> **z!kick** - Belirttiğiniz kullanıcıya kick atarsınız. \n \<a:kirmizi:837713693046865960> **z!kick-log** - Kick Log kanalını belirlersiniz. \n \<a:kirmizi:837713693046865960> **z!kick-yetkili-rol** - Kick Yetkilisi Rolünü ayarlarsınız. \n \<a:kirmizi:837713693046865960> **z!uyar** - Belirttiğiniz kullanıcıyı uyarır. \n \<a:kirmizi:837713693046865960> **z!uyarı-ayar** - Uyarı sistemini Ayarlarına bakarsınız. \n \<a:kirmizi:837713693046865960> **z!uyarı-sicil** - Etiketlediğiniz kişinin Uyarı sicilini gösterir. \n \<a:kirmizi:837713693046865960> **z!uyarı-sil** - Belirttiğiniz Kullanıcının Uyarılı siler.'+client.commands.filter(cmd => exports.help.category === 'photo').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),]; 
  let sayfa = 1;

  const embed = new Discord.MessageEmbed()
    .setColor("#cc0708")
    .setDescription(" [__**Destek Sunucusu**__](https://discord.gg/ywJ9rSrrWY)")
    .setAuthor(`aZr - Bot Moderasyon Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setImage('https://media.discordapp.net/attachments/839223299669622835/839238103548952607/standard_6.gif')
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
  name: 'moderasyon',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'moderasyon'
};