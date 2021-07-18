const Spectrum = new Set();
const Discord = require('discord.js');
const burc = require('burc.js'); 

exports.run = async (client, message, args, db) => {
  
 const error = (str) => message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Hata').setDescription(str));

   if (Spectrum.has(message.author.id)) {
           return message.channel.send("\<a:enhayir:813350216911683584> Bu Komudu 10 Saniyede Bir Kullanabilirsiniz.");
} else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
        message.delete();
          Spectrum.delete(message.author.id);
        }, 10000);// milisaniye cinsinden
    }  
  
  
if (!args[0]) return message.channel.send("\<a:enhayir:813350216911683584> Bir burç ismi girmelisin.\n **Doğru Kullanım:** z!günlük-by [Burç İsmi] ")
let msg = await message.channel.send("\<a:enyukleniyor:839797646139195412> Lütfen bekleyiniz veriler çekiliyor.")
let burcumuz = await burc.gunluk(args[0])
let embed = new Discord.MessageEmbed()
.setAuthor("Günlük Burç Yorumu", message.author.displayAvatarURL({dynamic:true}))
.setDescription(burcumuz)
.setFooter(""+message.author.username+"#"+message.author.discriminator+" tarafından istendi.")
.setImage("https://foto.haberler.com/haber/2020/05/12/gunluk-burc-yorumlari-12-mayis-2020-sali-haft-13212847_amp.jpg")
.setTimestamp()
msg.edit("",{embed:embed})
}
exports.conf = {  
  enabled: true,
  guildOnly: true,
  aliases: ["günlük-burç-yorumu","günlükburçyorumu"],
  permLevel: 0,
  kategori: "geliştirici"
};

exports.help = {
  name: 'günlük-by',
  description: "Günlük olarak değişen burç yorumları alırsınız.",
  usage: 'günlük-by'
}