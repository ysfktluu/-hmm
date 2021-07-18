const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor('#b146d6')
    .setAuthor(`aZr - Bot Kayıt Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setDescription(" [__**Destek Sunucusu**__](https://discord.gg/ywJ9rSrrWY)")
    .addField('\<a:aZr_renkli:841084238974550036> z!kız-rol', 'Sunucuda kız rolünü ayarlar.', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!erkek-rol', 'Sunucuda erkek rolünü ayarlar.', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!kayıt-kanal', 'Sunucuda kayıt kanalını ayarlar.', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!kayıtçı-rol', 'Sunucuda kayıtçı rolünü ayarlar.', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!kayıtçı-ver', 'Belirttiğiniz kullanıcıya Kayıtçı rolünü verir.', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!kayıtçı-al', 'Belirttiğiniz kullanıcıdan Kayıtçı rolünü alır.', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!alınacak-rol', 'Kayıt olunca alınacak rolü ayarlar.', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!kız', 'Belirttiğiniz kişiyi kız olarak kayıt eder. z!kız **[Kayıt edilen kişi] [İsmi] [Yaşı]**', true)
    .addField('\<a:aZr_renkli:841084238974550036> z!erkek', 'Belirttiğiniz kişiyi erkek olarak kayıt eder. z!erkek **[Kayıt edilen kişi] [İsmi] [Yaşı]**', true)
    .setImage('https://cdn.discordapp.com/attachments/839223299669622835/841269287967653898/standard.gif')
    

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['kayıt']



};
exports.help = {
name: "kayıt"
};