const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  let user = message.mentions.members.first();
  if (!user) return message.reply("**\<a:enyanlis:813339775338545154> Bir kullanıcı etiketlemelisin!**");
  if (user.id === message.author.id) return message.reply('**Kendinden bişey dızlayamasın düdük!**');
  if (user.id === `796460091334590525`) return message.reply('**Benden bişey dızlayamasın düdük!**');

  var dıızla = [
    "5 ELMAS DIZLADIN \<:enelmas:815977610126950420>",
    "ELMAS KAZMA DIZLADIN \<:enkazma:815977686266413087>",
    "BÜYÜLÜ ELYTRA DIZLADIN HEMDE FİŞEKLE BERABER",
    "KÖYLÜ DIZLADIN \<:enkoylu:815977709615185999>",
    "BÜYÜ MASASI DIZLAMAYA ÇALIŞIRKEN YAKALANDIN",
    "50TL LİK TAMİR KİTABI DIZLADIN \<:entamir:815978506290855936>",
    "BÜYÜLÜ ALTIN ELMA DIZLADIN",
    "CİCİ BEBE DIZLADIN ARTIK BANADA VERİRSİN 🤪",
    "CONCON KRİSTALİ DIZLADIN",
    "MELİS BABANIN GÖZLÜĞÜNÜ DIZLAMAYA ÇALIŞIRKEN YAKALANDIN \<:enmelisbaba:815979264591134721>",
    "MİNECRAFT PRE DIZLAMAYA ÇALIŞIRKEN YAKALANDIN",
    "İKİNCİ BİR BEYİN DIZLADIN"
  ];
  var dızla = dıızla[Math.floor(Math.random() * dıızla.length)];
  message.channel
    .send("DIZLAMAYA GİDİYORSUN \<a:enkac:815973099584487444>")
    .then(nmsg => nmsg.edit(`${user} **KİŞİSİNDEN** ${dızla} \<a:enamong:815973510056640522>`));
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dizla"],
  permLevel: 0
};

exports.help = {
  name: "dızla",
  description: "dızla",
  usage: "dızla"
};
