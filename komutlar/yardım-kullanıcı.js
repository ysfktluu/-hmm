const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

  let sayfalar = [  '\<a:enkoyuyesil:813854893063798845> **z!avatar** - Kendi avatarınızı veya etiketlediğiniz kişinin avatarına bakabilirsiniz. \n \<a:enkoyuyesil:813854893063798845> **z!davet** -   sunucunuza eklemek için gerekli olan linki alabilirsiniz.  \n \<a:enkoyuyesil:813854893063798845> **z!hava-durumu** - Girdiğiniz şehrin hava durumuna bakarsınız. \n \<a:enkoyuyesil:813854893063798845> **z!hesapla** - Bota Matematik işlemi hesaplatırsınız. \n \<a:enkoyuyesil:813854893063798845> **z!kullanıcı-bilgi** - Kendi kullanıcı bilginize veya belirttiğiniz kullanıcının bilgisine bakabilirsiniz. \n \<a:enkoyuyesil:813854893063798845> **z!mcödül** - Yazdığınız yazıyı Minecraft Başarımı şeklinde atar.'+ client.commands.filter(cmd => exports.help.category === 'admin').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"), 
  '\<a:enkoyuyesil:813854893063798845>  **z!mcskin** - Minecraft adını girdiğiniz kişinin Minecraft Skinini atar. \n \<a:enkoyuyesil:813854893063798845> **z!ping** - Ping gösterir. \n \<a:enkoyuyesil:813854893063798845> **z!random-profil** - Sunucuda bulunan üyelerin random profillerini atar. \n \<a:enkoyuyesil:813854893063798845> **z!rol-bilgi** -Belirttiğiniz rol hakkında bilgi gönderir. \n \<a:enkoyuyesil:813854893063798845> **z!soru-sor** - Bota Sorduğunuz soruları cevaplar. '+client.commands.filter(cmd => exports.help.category === 'util').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\<a:enkoyuyesil:813854893063798845> **z!sunucu-bilgi** - Sunucu Hakkında bilgi verir. \n \<a:enkoyuyesil:813854893063798845> **z!sunucu-sayı** - Botun kaç sunucuda bulunduğunu gösterir. \n \<a:enkoyuyesil:813854893063798845> **z!tdk** - Türk Dil Kurumunda kelime aratırsınız. \n \<a:enkoyuyesil:813854893063798845> **z!youtube** - YouTubeda aratırsınız. \n \<a:enkoyuyesil:813854893063798845> **z!iletişim** - Botun Yapımcıları ile nasıl iletişime kurabileceğinizi gösterir. \n \<a:enkoyuyesil:813854893063798845> **z!günlük-by** - İstediğiniz Burcun Günlük Burç Yorumlarına bakarsınız.'+client.commands.filter(cmd => exports.help.category === 'photo').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\n \<a:enkoyuyesil:813854893063798845> **z!ateş** - Etiketlediğiniz Kişiye ateş edersiniz. \n \<a:enkoyuyesil:813854893063798845>  **z!dizi** - Bot rastgele izleyebileceğiniz dizileri atar. \n \<a:enkoyuyesil:813854893063798845>  **z!mezun** - Profilinize mezun efekti verir. \n \<a:enkoyuyesil:813854893063798845> **z!zıt-renk** - Bot profilinizin rengini zıt rengine çevirir. \n \<a:enkoyuyesil:813854893063798845> **z!yetkilerim** - Bot bulunduğunuz sunucuda ki yetkilerinizi gösterir. \n \<a:enkoyuyesil:813854893063798845> **z!not yardım** - Not yardım menüsünü görürsünüz. \n \<a:enkoyuyesil:813854893063798845> **z!istatistik** - Botun istatisliklerini gösterir.' +client.commands.filter(cmd => exports.help.category === 'photo').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),]; 
  let sayfa = 1;

  const embed = new Discord.MessageEmbed()
    .setColor("#198639")    
    .setAuthor(`aZr - Bot Kullanıcı Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setImage('https://media.discordapp.net/attachments/839223299669622835/839229941207007242/standard_1.gif')
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
  name: 'kullanıcı',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'kullanıcı'
};