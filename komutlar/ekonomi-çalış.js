const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
  db.add(`bankakapasite_${message.author.id}`, 30)
  let miktarsonuç = (bt.rastgele("500", "pozitif"))
    var sebep = ["Tadilatçı olarak çalıştı.","Emlakçı olarak çalıştı.","Aşçı olarak çalıştı.", "Manav olarak çalıştı.","Doktor olarak çalıştı.","Bilgisayar Mühendisi olarak çalıştı.","Coder olarak çalıştı.","Grafik Tasarımcısı olarak çalıştı.","Su Satıcısı olarak çalıştı.","Boş boş durdu."]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`para_${message.author.id}`, miktarsonuç)
    const embed = new discord.MessageEmbed()
    .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktarsonuç}  :coin:  kazandı!`)
    return message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çalış' 
  }