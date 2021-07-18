const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("**🎆 Şanslı Sayını Buluyorum! 🎇**").then(message => {
    var nespriler = [
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 15 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 16 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 17 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 18 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 19 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 20 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 1 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 2 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 3 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 4 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 5 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 6 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 7 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 8 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 9 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 10 🎲",
      "🎰 Senin Şanslı Sayın Yok 😔 ",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 11 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 12 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 13 🎲",
      "\<a:entada:813346013708419123> Senin Şanslı Sayın 14 🎲"
    ];
    var espri = nespriler[Math.floor(Math.random() * nespriler.length)];
    message.edit(`${espri}`);
  });
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["şanslısayım", "şanslı-sayım", "ş-s", "sayımşanslılan", "şs"],
  permLevel: 0
};

exports.help = {
  name: "şanslı-sayım",
  description: "Şanslı Sayınızı Bulmaya Çalışır",
  usage: "şanslı sayını tahmin eder"
};