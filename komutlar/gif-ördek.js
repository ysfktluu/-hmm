const Discord = require("discord.js");

var ördek = ["https://cdn.discordapp.com/attachments/848203680377208832/853949784364810280/ordek.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949823837011988/ordek1.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949855483166730/ordek_2.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949863846871040/ordek_3.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949899430035456/ordek_4.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949923937484890/ordek5.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949979151695892/ordek_7.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949981765795860/ordek_6.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853949993283354634/ordek_8.jpg",
    "https://cdn.discordapp.com/attachments/848203680377208832/853950047279644692/ordek9.jpg"

];
exports.run = function(client, message, args) {
  let ördekk = ördek[Math.floor(Math.random() * ördek.length)];
  
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#e2bf20")
      .setTitle("Vak Vak Ördekler")
      .setImage(ördekk)
      .setTimestamp()
      .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ördek","duck"]
};

exports.help = {
  name: "ördek",
  description: "ördek",
  usage: "ördek"
};