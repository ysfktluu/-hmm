const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setAuthor(`aZr - Bot Ekonomi Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setColor('WHİTE')
    .addField('\<a:beyaz:837713655822942238> z!çalış', 'Çalışıp para kazanabilirsiniz.', true)
    .addField('\<a:beyaz:837713655822942238> z!para-yatır', 'Bankanıza para yatırırsınız.', true)
    .addField('\<a:beyaz:837713655822942238> z!para-çek', ' Bankanızdan para çekersiniz.', true)
    .addField('\<a:beyaz:837713655822942238> z!banka', 'Bankanıza Bakarsınız.', true)
    .addField('\<a:beyaz:837713655822942238> z!çanta', 'Çantanızda bulunan eşyalara bakarsınız.', true)
    .addField('\<a:beyaz:837713655822942238> z!market', 'Marketde bulunan ürünlere bakarsınız.', true)
    .addField('\<a:beyaz:837713655822942238> z!satın-al', 'Marketde bulunan ürünleri satın almanızı sağlar.', true)
    .addField('\<a:beyaz:837713655822942238> z!sat', 'Elinizde bulunan eşyaları satabilirsiniz.', true)
    .addField('\<a:beyaz:837713655822942238> z!günlük', 'Günlük Paranızı alırsınız.', true)
    .addField('\<a:beyaz:837713655822942238> z!kullan', 'Elinizde bulunan eşyaları kullanmanızı sağlar.', true)
    .setImage("https://cdn.discordapp.com/attachments/741796053887483904/839131319244947526/standard_2.gif")
    

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "ekonomi"
};