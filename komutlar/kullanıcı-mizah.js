const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {

request(`https://no-api-key.com/api/v1/memes`, function (error, response, body) {
    if (error) return console.log('Error:', error); 
    else if (!error) { 
        var info = JSON.parse(body);
        const enginarrrrr = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setImage(info.image);
  message.channel.send(enginarrrrr);
    }
});
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
    name: 'mizah',
  description: 'mizah',
  usage: 'mizah'
};