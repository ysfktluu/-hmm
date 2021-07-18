const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setAuthor(`aZr - Bot Çerçeve Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setColor('RANDOM')
    .addField('\<a:azr_kristal:851411712414187600> z!buton', 'Yazdıklarınızı butonlu resime dönüştürür.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!gun', 'Etiketlediğiniz kişinin profiline silah efekti ekler.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!güzel', 'Etiketlediğiniz kişinin profiline güzel efekti ekler.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!kalp', 'Etiketlediğiniz kişinin profiline kalp efekti ekler.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!hitler', 'Etiketlediğiniz kişinin profiline hitler efekti ekler.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!magik', 'Etiketlediğiniz kişinin profiline magik efekti uygular.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!panik', 'Yazdıklarınızı panik resmine dönüştürür.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!pooh', 'Yazdıklarınızı pooh söylüyormuş gibi gösterir.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!rainbow', 'Etiketlediğiniz kişinin profiline rainbow efekti ekler.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!rip', 'Etiketlediğiniz kişinin profiline rip efekti ekler.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!trigger', 'Etiketlediğiniz kişinin profiline trigger efekti ekler.', true)
    .addField('\<a:azr_kristal:851411712414187600> z!wasted', 'Etiketlediğiniz kişinin profiline wasted efekti ekler.', true)
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
    

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['çerçeve']



};
exports.help = {
name: "çerçeve"
};