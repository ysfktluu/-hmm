const discord = require('discord.js');
const ai = require('@codare/codare.ai')
exports.run = async(client, message, args) => {
let soru = args.slice(0).join(' ');
if(!soru) return message.channel.send('Lütfen cevaplamamı istediğiniz soruyu sorun!')
ai.sor(soru).then(enginar => {
message.channel.send(enginar)  
  })
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
    name : "yapay-----zeeeeka"
    };
