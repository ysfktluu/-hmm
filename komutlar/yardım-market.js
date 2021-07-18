const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#521bb3')
 .setAuthor('RolePlay - ET | Market', 'https://cdn.discordapp.com/avatars/818873847846797373/657b60e8554e3b34b49d8523b1964667.png', 'https://discord.gg/avcVhQ9')
.setDescription("**\<:sprey:847780619198267392> Ürün Adı:** __Sprey__  \n **• Fiyat:** 150 ECoin \n **» Bilgi İçin:** `<bilgi sprey` \n \n `🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪` \n \n **:coin: Ürün Adı:** __2x Hızlı Para Kasma__  \n **• Fiyat:** 200 ECoin \n **» Bilgilendirme:** Para Kasmanızı 2x hızlandırır. Satın almak için `<satın-al-2xhız` \n \n `🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪` \n \n **:bow_and_arrow: Ürün Adı:** __İsim Değiştirme__ \n **• Fiyat:** 250 ECoin \n **» Bilgilendirme:** Sunucuda bulunan isminizi değiştirmenizi sağlar. Satın almak için \n`<satın-al-isimdeğiş` \n \n `🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪` \n \n :key: **Ürün Adı:** __Maymuncuk__ \n • **Fiyat:** 400 Ecoin \n »**Bilgilendirme:** Sunucuda bulunan bütün level odalarına giriş yapabilirsiniz. Satın almak için `<satın-al-maymuncuk`")  
 .setTimestamp()
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))

message.inlineReply(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["market","mağaza"], 
  permLevel: 0
};

exports.help = {
  name: "market",
  description: 'market',
  usage: 'market'
};