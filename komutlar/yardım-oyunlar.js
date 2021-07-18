const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setAuthor(`aZr - Bot Oyun Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setColor('#e94625')
    .addField('\<a:enturuncu:813334013565337630> z!soygun-yap', 'Bankalardan soygun yaparsınız.', true)
    .addField('\<a:enturuncu:813334013565337630> z!ilginç-bilgi', 'Bot bilmediğiniz ilginç bilgileri verir.', true)
    .addField('\<a:enturuncu:813334013565337630> z!düello', 'Etiketlediğiniz kişi ile düello yaparsınız.', true)
    .addField('\<a:enturuncu:813334013565337630> z!snake', 'Yılan Oyunu Oynarsınız.', true)
    .addField('\<a:enturuncu:813334013565337630> z!şanslı-sayım', 'Bot şanslı sayınızı tahmin eder.', true)
    .addField('\<a:enturuncu:813334013565337630> z!kasa-aç', 'CSGO kasası açarsınız.', true)
    .addField('\<a:enturuncu:813334013565337630> z!yazan-kazanır', 'Etiketlediğiniz kişi ile yazan kazanır oynarsınız.', true)
    .addField('\<a:enturuncu:813334013565337630> z!adam-asmaca', 'Adam asmaca oynarsınız.', true)
    .addField('\<a:enturuncu:813334013565337630> z!deste-aç', 'Zula destesi açar.', true)
    .addField('\<a:enturuncu:813334013565337630> z!slots', 'Slots oyununu oynarsınız.', true)
    .addField('\<a:enturuncu:813334013565337630> z!yazı-tura', 'Yazı Tura oynarsınız.', true)
    .setImage("https://cdn.discordapp.com/attachments/741796053887483904/839131319244947526/standard_2.gif")
    

message.inlineReply(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "oyunlar"
};