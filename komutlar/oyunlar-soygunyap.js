const Discord = require('discord.js');

const CrewSoygun = [
  "52 Türk Parası Soydun",
  "31 Türk Parası Soydun",
  "tüühh be polis geldi gaç!",
  "6 Türk Parası  Soydun",
  "436 Türk Parası  Soydun",
  "643 Türk Parası  Soydun",
  "531 Türk Parası Soydun!",
  "213 Türk Parası Soydun",
  "2.234 Türk Parası Soydun",
  "3.456 Türk Parası Soydun",
  "2.765 Türk Parası Soydun",
  "9.324 Türk Parası Soydun",
  "24.768 Türk Parası Soydun",
  "31.234 Türk Parası Soydun",
  "234.876 Türk Parası Soydun",
  "453.345 Türk Parası Soydun",
  "654.865 Türk Parası Soydun",
  "734.763 Türk Parası Soydun",
  "931.573 Türk Parası Soydun",
  "311.645 Türk Parası Soydun",
  "Büyük vurgun yaptın toplam 1.000.0000 Türk Parası wwOOOOww",
];

exports.run = function(client, message) {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Komutları Özel Mesajlarda Kullanılamaz!')
    return message.author.send(ozelmesajuyari); }
  const soygun = CrewSoygun[Math.floor(Math.random() * CrewSoygun.length)];
  message.channel.send(

  "Soygunun yapılacağı mekan seciliyor.."

  ).then(
  function(i){
    i.edit("mekan bulundu.")
    message.edit(2 * 2500)
    i.edit(
    new Discord.MessageEmbed()
      .setTitle('Soygunu yaptın ve şimdi harcama zamanı :D')
    .setDescription('')
      .addField('Bankadan soyduğun para miktarı :',soygun)
    .setColor('RED')


    )
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['soyuncu','soygun-yap'],
  permLevel: 0
};

exports.help = {
  name: 'soygun-yap',

  description: 'Soygun Yaparsınız',
    kategori: 'eğlence',
  usage: 'soygunyap'
}