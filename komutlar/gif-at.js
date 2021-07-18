const Discord = require("discord.js");

var at = ["https://www.gelgez.net/wp-content/uploads/2019/07/atnal-nasil-evcillesti-gelgez-700x420.jpg",
          "https://images-ext-2.discordapp.net/external/oOXNPaSsyvRC90mvHxgIbir95fVqvsKcF0zCTZqZwGc/https/cdn.discordapp.com/avatars/760059427381575680/b7befde84367ec60615a0c41ab9aa047.webp",
          "https://www.nasihatler.com/wp-content/uploads/2013/05/beyaz-at.jpg",
          "https://i.pinimg.com/originals/c6/bd/8d/c6bd8d2af7323f452bdf2cb21288b5cf.jpg",
          "https://i2.milimaj.com/i/milliyet/75/0x0/5c8d9fdb45d2a09e009b70f1",
          "https://iasbh.tmgrup.com.tr/6a0363/1200/627/0/28/708/399?u=https://isbh.tmgrup.com.tr/sbh/2020/06/27/ruyada-at-gormek-nedir-ne-anlama-gelir-ruyada-beyaz-siyah-kahverengi-at-gormek-ruya-tabirleri-1593263179574.jpg",
          "https://www.diyadinnet.com/d/ruya/ruyada-at-gormek-nedir-siyah-beyaz-ata-binmek-ne-anlama-gelir-3280.jpg",
          "https://i4.hurimg.com/i/hurriyet/75/750x422/5dee17537af5071e78ad8e47.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cPS-EGCFjAulP-jKb3WgNP_y6OCGq1npgQ&usqp=CAU"
];
exports.run = function(client, message, args) {
  let att = at[Math.floor(Math.random() * at.length)];
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#FF7F00")
      .setTitle("iiiieeeeğğğğğ ...")
      .setImage(att)
      .setTimestamp()
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["at","horse"]
};

exports.help = {
  name: "at",
  description: "at",
  usage: "at"
};