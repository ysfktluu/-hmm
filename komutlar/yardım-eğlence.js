const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

  let sayfalar = ['\<a:enpembe:834547161924108329> **z!8ball** - Bota sihirli 8ball sorularınızı sorarsınız. \n \<a:enpembe:834547161924108329> **z!ascii** - Girdiğiniz yazıyı Ascii stiline ayarlar. \n \<a:enpembe:834547161924108329> **z!aşk-ölç** - Etiketlediğiniz kişi ile aranızdaki aşkı ölçer. \n \<a:enpembe:834547161924108329> **z!atatürk** - Bot Atatürk sözleri atar. \n \<a:enpembe:834547161924108329> **z!balıktut** - Balık tutarsınız. \n \<a:enpembe:834547161924108329> **z!banner** - Yazdığınız yazıyı bannera çevirir. \n \<a:enpembe:834547161924108329> **z!dızla** - Etiketlediğiniz kişiden bir eşya dızlarsınız. \n \<a:enpembe:834547161924108329> **z!el-yazı** - Bot yazdığınız kelimeyi/cümleyi el yazısına çevirir.'+ client.commands.filter(cmd => exports.help.category === 'admin').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\<a:enpembe:834547161924108329> **z!emoji-yazı** - Bot yazdığınız yazıyı emojiye yazıya çevirir. \n \<a:enpembe:834547161924108329> **z!espri** -  Bot espri yapar. \n \<a:enpembe:834547161924108329> **z!iltifat**  - Bot İltifat eder. \n \<a:enpembe:834547161924108329> **z!soru-sor** - Bota soru sorarsınız. \n \<a:enpembe:834547161924108329> **z!boğazla** - Etiketlediğiniz Kişiyi Boğazlarsınız! \n \<a:enpembe:834547161924108329> **z!vine** - Bot rastgele vine atar. \n \<a:enpembe:834547161924108329> **z!zar** - Zar atarsınız.'+client.commands.filter(cmd => exports.help.category === 'util').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),
  '\n \<a:enpembe:834547161924108329> **z!delete** - Etiketlediğiniz kişiyi silersiniz. \n \<a:enpembe:834547161924108329> **z!drake** - Yazdıklarınızı Drake söylüyormuş gibi gösterir. \n \<a:enpembe:834547161924108329> **z!dürüm** - Dürüm Yersiniz. \n \<a:enpembe:834547161924108329> **z!ilgi-iste** -  Etiketlediğiniz kişiden ilgi istersiniz. \n \<a:enpembe:834547161924108329> **z!karış** - Girdiğiniz rakamlar ile küp karıştırırsınız. \n \<a:enpembe:834547161924108329> **z!stres-çarkı** - Stres Çarkı çevirirsiniz. \n \<a:enpembe:834547161924108329> **z!trump** - Yazdığınız yazıyı Trump Diyor ki olarak atar. \n \<a:enpembe:834547161924108329> **z!tekerleme** - Bot Tekerleme Söyler.'+client.commands.filter(cmd => exports.help.category === 'util').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),]; 
  let sayfa = 1;

  const embed = new Discord.MessageEmbed()
    .setColor("#ce3561")
    .setAuthor(`aZr - Bot Eğlence Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setImage('https://media.discordapp.net/attachments/839223299669622835/839236311410802748/standard_5.gif')
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
  name: 'eğlence',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'eğlence'
};