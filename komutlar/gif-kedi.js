const Discord = require("discord.js");

var kedi = [
  "https://i.pinimg.com/originals/ed/a3/61/eda361fd52c3422358f76aca27cdb6ad.jpg",
  "https://i.pinimg.com/originals/d6/61/c5/d661c5d30d7882704813b02c2333925a.jpg",
  "https://i.pinimg.com/736x/49/81/a7/4981a750b77f93c39683a2d543dea30c.jpg",
  "https://i.pinimg.com/originals/1a/4c/a0/1a4ca087e04c2a16fadf4ca6efd3642e.jpg",
  "https://i.pinimg.com/originals/d3/59/f1/d359f14a107b469ec3463bdff68806fd.jpg",
  "https://i.pinimg.com/originals/5c/80/54/5c8054c393951fcfc9cde39835a1995e.jpg",
  "https://i.pinimg.com/originals/6a/02/76/6a0276b9f71e64e137a8bf3cd47744f5.jpg",
  "https://i.pinimg.com/originals/5a/9f/be/5a9fbe8105fa21632151670fffdbd924.jpg",
  "https://i.pinimg.com/originals/11/49/fa/1149fa7912c54e89a5c3aa3023d77721.jpg",
  "https://i.pinimg.com/originals/07/e7/69/07e769e540c5912115b4f6c867cc7470.jpg",
  "https://pbs.twimg.com/media/ERZeXssXUAEPxd2.jpg",
  "https://i.redd.it/9v7r3c55bz341.jpg",
  "https://i.pinimg.com/originals/d7/ca/b5/d7cab5080cd5a903e03dfab6021c84d0.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/12/bc/49/59/random-cat-in-istanbul.jpg",
  "https://static.wikia.nocookie.net/talking-kitty-cat/images/1/1b/Random_Kitten-0.png/revision/latest/top-crop/width/360/height/450?cb=20170220113330",
  "https://i.pinimg.com/originals/06/33/ec/0633ec3ef717796dc5646f556b68063c.jpg",
  "https://i.pinimg.com/originals/6a/1f/ce/6a1fce195a3a3fb9375aef6b2d540230.jpg"
];
exports.run = function(client, message, args) {
  let kedii = kedi[Math.floor(Math.random() * kedi.length)];
  
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#FF7F00")
      .setTitle("MEOW...")
      .setImage(kedii)
      .setTimestamp()
  );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kedi","cat"]
};

exports.help = {
  name: "kedi",
  description: "kedi",
  usage: "kedi"
};