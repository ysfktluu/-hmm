const { MessageEmbed, MessageAttachment } = require("discord.js");
const get = require("request");

exports.run = async (client, msg, args) => {
  
  let kullanıcı = msg.mentions.users.first() || msg.author;

  let r = Math.floor(Math.random() * Math.floor(11));
  if (r == 0) {
    r = 1;
  }

  let link = `https://nekobot.xyz/api/imagegen?type=magik&image=${kullanıcı.avatarURL(
    { format: "png", size: 1024 }
  )}&intensity=${r}&raw=true`;

  get(link, async function(err, resp, body) {
    
    body = JSON.parse(body);

    const ek = new MessageAttachment(body.message, `magik.png`);

    const embed = new MessageEmbed()
      .setTitle(`Magik efekti hazır!`)
      .setDescription(`Magik seviyesi: ${r}`)
      .setColor(`RANDOM`)
      .attachFiles(ek)
      .setImage(`attachment://magik.png`)
      .setFooter(
        `${msg.author.tag} tarafından istendi`,
        msg.author.avatarURL({ dynamic: true })
      )
      .setTimestamp();

    msg.channel.send(embed);
  });
};
exports.conf = {
  
  aliases: []
};

exports.help = {
  name: "magik",
  description: "",
  usage: "magik <etiket>",
  perm: ""
};