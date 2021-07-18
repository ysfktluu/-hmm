const discord = require('discord.js')
const küp = require('scrambler-util');
exports.run = async (client, message, args) => { 
  let meftun_bu_hangi_küp_olm = args[0]
  if(!meftun_bu_hangi_küp_olm) return message.channel.send('Lütfen karıştırılacak küp türünü gir.')
  let sayi = args[1]
    if(!sayi) sayi = 1 ;


  const scrambleArr = küp((args[0]), (args[1]));
    const burasıboşkalmasın = new discord.MessageEmbed()
    .setTitle("İşte "+ meftun_bu_hangi_küp_olm + " için "+ sayi + " adet karıştırman!")
    .setDescription(scrambleArr.join('\n\n'))
    .setColor(`#30b480`)
    .setFooter(`Örnek kullanım: z!karış 3x3 5`)
    .setTimestamp()
    return message.channel.send(burasıboşkalmasın)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'karış',
  name1: "karış",

};