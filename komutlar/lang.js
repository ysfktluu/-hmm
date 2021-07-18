const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = (client, message, args) => {
   var a1 = args[0]
   var a2 = args[1]
   var dil = db.fetch(`lang_${message.guild.id}`)

   //----------\\Embedler//----------\\

   var tr = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setAuthor(client.user.username)
   .setTitle(`Dil Sistemi`)
   .setThumbnail('https://cdn.discordapp.com/attachments/850026025530163300/851481478852640778/Dunya.png')
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL());

   var en = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setAuthor(client.user.username)
   .setTitle(`Language System`)
   .setDescription('The language of the bot on your server is **English**')
   .setThumbnail('https://cdn.discordapp.com/attachments/850026025530163300/851481478852640778/Dunya.png')
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL());

   var hata = new Discord.MessageEmbed()
   .setColor("RED")
   .setTimestamp()
   .setFooter(`${message.author.tag}`, message.author.avatarURL());

   var başarılı = new Discord.MessageEmbed()
   .setColor("GREEN")
   .setTimestamp()
   .setFooter(`${message.author.tag}`, message.author.avatarURL());


   //----------\\Komutlar//----------\\

if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(dil == undefined || dil == 'tr') {
    hata.setTitle("Hata!")
    hata.setDescription('<@'+message.author.id+'> Maalesef bu komutu sadece \`YÖNETİCİ\` yetkisi olanlar kullanabilir :/')
  }
  else if(dil == 'en') {
    hata.setTitle("Error!")
    hata.setDescription(`Unfortunately, <@${message.author.id}> can only use this command with \`ADMINISTRATOR\` privileges :/`)
  }
  message.channel.send(hata)
  return;
}

   if(a1 == 'set') {
     if(a2 == 'tr' || a2 == 'TR' || a2 == 'Türkçe' || a2 == 'türkçe') {
       if(dil == 'tr') {
         hata.setTitle("Hata!")
         hata.setDescription('Zaten botun sunucudaki dili **Türkçe** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'tr')
       başarılı.setTitle('Dil Değiştirme Başarılı!')
       başarılı.setDescription("Botun dili sunucuda başarıyla **Türkçe** olarak ayarlandı.")
       message.channel.send(başarılı)
     }
     else if(a2 == 'en' || a2 == 'EN' || a2 == 'English' || a2 == 'english') {
       if(dil == 'en') {
         hata.setTitle("Hata!")
         hata.setDescription('Zaten botun sunucudaki dili **Türkçe** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'en')
       başarılı.setTitle('Link change successful!')
       başarılı.setDescription("Bot's language has been successfully set to **English** on the server.")
       message.channel.send(başarılı)
     }
     else if(dil == 'en') {
       hata.setTitle("Error!")
       hata.setDescription('Please specify a language! Sample: \`!lang set tr\`')
       message.channel.send(hata)
     }
     else if(dil == undefined || dil == 'tr') {
       hata.setTitle("Hata!")
       hata.setDescription('Lütfen bir dil belirtiniz! Örnek: \`!dil değiştir en\`')
       message.channel.send(hata)
     }
   }
   else if(a1 == 'değiştir') {
     if(a2 == 'tr' || a2 == 'TR' || a2 == 'Türkçe' || a2 == 'türkçe') {
       if(dil == 'tr') {
         hata.setTitle("Hata!")
         hata.setDescription('Zaten botun sunucudaki dili **Türkçe** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'tr')
       başarılı.setTitle('Dil Değiştirme Başarılı!')
       başarılı.setDescription("Botun dili sunucuda başarıyla **Türkçe** olarak ayarlandı.")
       message.channel.send(başarılı)
     }
     else if(a2 == 'en' || a2 == 'EN' || a2 == 'English' || a2 == 'english') {
       if(dil == 'en') {
         hata.setTitle("Error!")
         hata.setDescription('Already the language of the bot on the server is **English** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'en')
       başarılı.setTitle('Link change successful!')
       başarılı.setDescription("Bot's language has been successfully set to **English** on the server.")
       message.channel.send(başarılı)
     }
     else if(dil == 'en') {
       hata.setTitle("Error!")
       hata.setDescription('Please specify a language! Sample: \`!lang set en\`')
       message.channel.send(hata)
     }
     else if(dil == undefined || dil == 'tr') {
       hata.setTitle("Hata!")
       hata.setDescription('Lütfen bir dil belirtiniz! Örnek: \`!dil değiştir tr\`')
       message.channel.send(hata)
     }
   }
   else if(dil == undefined) {
     tr.setDescription('Botun dili sunucunuzda varsayılan olarak **Türkçe**! Dilini değiştirmek için \`!dil değiştir en\`')
     message.channel.send(tr)
   }
   else if(dil == 'tr') {
     tr.setDescription('Botun dili sunucunuzda **Türkçe**! Dilini değiştirmek için \`!dil değiştir en\`')
     message.channel.send(tr)
   }
   else if(dil == 'en') {
     message.channel.send(en)
   }

};

exports.conf = {
  aliases: ['dil', 'lang'], //komutun başka adları
  permLvl: 0
};

exports.help = {
  name: 'language', //komutun adı 
  description: 'Botun dilini değiştirir', //komutun açıklaması 
  usage: '!language set <lang>' //komutun kullanımı
};