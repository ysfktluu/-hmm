const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor('#7502ec')
    .setAuthor(`aZr - Bot Yardım`, client.user.avatarURL())
    .setDescription(" [__**Destek Sunucusu**__](https://discord.gg/ywJ9rSrrWY)")
    .addField('\<a:enmor:813311248534863954> z!moderasyon', 'Moderasyon komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!kullanıcı', 'Kullanıcı komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!logolar', 'Logo komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!oyunlar', 'Oyun komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!eğlence', 'Eğlence komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!gifler', 'Gif komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!kayıt', 'Kayıt Sisteminin komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!ekonomi', 'Ekonomi komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!seviye', 'Seviye komutlarını gösterir.', true)
    .addField('\<a:enmor:813311248534863954> z!çerçeve', 'Çerçeve komutlarını gösterir.', true)
	.setThumbnail(client.user.avatarURL())
    .setImage('https://media.discordapp.net/attachments/839223299669622835/839230530837938207/standard_2.gif')
    

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
};