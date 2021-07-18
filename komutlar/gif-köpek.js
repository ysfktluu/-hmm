const Discord = require("discord.js");

var köpek = ["https://i4.hurimg.com/i/hurriyet/75/0x0/5e5771550f254405d052eb10.jpg",
             "https://ichef.bbci.co.uk/news/640/cpsprodpb/121F9/production/_114033247_gettyimages-584683134.jpg",
             "https://i.pinimg.com/originals/a0/5f/9b/a05f9b6cb315590f936f548a498fb233.jpg",
             "https://media-cdn.t24.com.tr/media/library/2020/07/1593757155256-zbzb.jpg",
             "https://iasbh.tmgrup.com.tr/d88373/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2020/04/28/en-guzel-kopek-isimleri-populer-disi-ve-erkek-kopek-isimleri-1588099066246.jpg",
             "https://img-s3.onedio.com/id-53c192adaa1cf6461479f5e8/rev-0/w-900/h-583/f-jpg/s-2221e7ec2d6017a3c7d54174deb397cf863aebf0.jpg",
             "https://i.pinimg.com/originals/e4/89/ce/e489ceabdfc63695c3acb46d5c4ded89.jpg",
             "https://i12.haber7.net//haber/haber7/photos/2020/15/kopekleri_disari_cikartmadan_tuvaletini_yaptirmanin_yollari_1586182317_8059.jpg",
             "https://i2.milimaj.com/i/milliyet/75/0x0/5f58a43655427f11e4d000dc.png",
             "https://i2.milimaj.com/i/milliyet/75/1200x675/5c8d2ab707291c1d7401d712.jpg"
 
];
exports.run = function(client, message, args) {
  let köpekk = köpek[Math.floor(Math.random() * köpek.length)];
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#FF7F00")
      .setTitle("HAW HAW ...")
      .setImage(köpekk)
      .setTimestamp()
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["köpek","dog"]
};

exports.help = {
  name: "köpek",
  description: "köpek",
  usage: "köpek"
};