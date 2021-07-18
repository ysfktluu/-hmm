const Discord = require("discord.js");

var tilki = ["https://i.pinimg.com/originals/cc/2f/38/cc2f38b524e5e70f2019ffb0b196667b.jpg",
             "https://i.pinimg.com/originals/ec/01/14/ec0114e1cb972e7804dd364a49f1f620.jpg",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvkGnfIHv7XWMGeKioFiZapZSSQD5p4NIjA&usqp=CAU",
             "https://lh3.googleusercontent.com/proxy/MAymSwVEquZobDzrG4QWDYsWCU_3cYvibGIx6ByhDFM3T68PUs1l4YwZomYwr0VcnCZ8o7I1Y2XROznhVOkY7g3bn_X17KsjRAxOAu-IOwDemwJOC70",
             "https://im.haberturk.com/yerel_haber/2020/05/21/ver1590052144/78093463_620x410.jpg",
             "https://img-s1.onedio.com/id-5471e2990c909f7824b2a96e/rev-0/w-900/h-599/f-jpg/s-82f98cc137d22004b38d335b3a44e719de7759bb.jpg"
  
];
exports.run = function(client, message, args) {
  let tilkii = tilki[Math.floor(Math.random() * tilki.length)];
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#FF7F00")
      .setTitle("Buda Bizim Tavuk Dızcısı...")
      .setImage(tilkii)
      .setTimestamp()
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tilki","fox"]
};

exports.help = {
  name: "tilki",
  description: "tilki",
  usage: "tilki"
};