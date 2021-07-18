const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("#f7a667")
.setTitle("**aZr - Bot İletişim**")   
.setDescription("\<:aZr_discord:841085871440658462> \n ➔ Discord Üzerinden İletişime Geçmek İçin [Buraya](https://discord.gg/ywJ9rSrrWY) Tıklayınız. \n \<a:aZr_instagram:841085443817734144> \n ➔ İnstagram Üzerinden İletişime Geçmek İçin [Buraya](https://www.instagram.com/azrbotdestek/) Tıklayınız. \n :technologist: \n ➔ Dm Üzerinden İletişime Geçmek İçin  [Buraya](https://discord.gg/ywJ9rSrrWY) Tıklayınız.") 
.setThumbnail('https://images-ext-1.discordapp.net/external/yUjmgpu9KH3nDTl_V-7tKoGu-zdbqaymZQ5Xz5vCjWs/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/803267050894131223/5d2e1ef49f5da2e618e3a703cadb76f2.png?width=473&height=473%27')
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "iletişim",
    description: "iletişim",
    usage: "iletişim"
  };