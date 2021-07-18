const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]"); // agalar kodların mantığı hep aynı.d sadece süslemesi farklı.. 
 
let msg = message
const stattime = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
const stat1 = new Discord.MessageEmbed()

.setColor('BLACK')
.setAuthor(`${bot.user.username} İstatistik`, bot.user.avatarURL())
.addField('⏰ Yeniden Başlatılma:',
`
\`\`\`fix
${stattime}
\`\`\` 
`)
.addField("💻 Ram İsrafı:",`${(process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + 'Mb'}`, true)  
.addField("🏓 Gecikme:",`${bot.ws.ping+"Ms"}`, true)
.addField('Total İstatistik:', `Kullanıcı: **${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}** Sunucu: **${(bot.guilds.cache.size).toLocaleString()}**`)
.setFooter(`・ ${message.author.tag} Tarafından istendi.`, message.author.avatarURL())

 return message.channel.send(stat1);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'istatistik'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "istatistik işte kanka",
  usage: "istatistik"
};