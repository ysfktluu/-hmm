const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
    if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = "\<a:krmzhayir:853567840085737492> `İsim ayarlanmamış!`";
  else isimYazi = `\<a:yesilevet:853567844780081162> \`${isim}\``;
  
  let favorioyun = db.fetch(`pfavorioyun_${message.author.id}`);
  let favoriYazi;
  if (favorioyun == null) favoriYazi = "\<a:krmzhayir:853567840085737492> `Oyun ayarlanmamış!`";
  else favoriYazi = `\<a:yesilevet:853567844780081162> \`${favorioyun}\``;
  
    let favorişarkı = db.fetch(`pfavorişarkı_${message.author.id}`);
  let favorisYazi;
  if (favorişarkı == null) favorisYazi = "\<a:krmzhayir:853567840085737492> `Şarkı ayarlanmamış!`";
  else favorisYazi = `\<a:yesilevet:853567844780081162> \`${favorişarkı}\``;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = "\<a:krmzhayir:853567840085737492> `Soy İsim ayarlanmamış!`";
  else soyisimYazi = `\<a:yesilevet:853567844780081162> \`${soyisim}\``;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = "\<a:krmzhayir:853567840085737492> `Cinsiyet ayarlanmamış!`";
  if (cinsiyet == "kız") csYazi = "\<a:yesilevet:853567844780081162> `Kız`";
  if (cinsiyet == "erkek") csYazi = "\<a:yesilevet:853567844780081162> `Erkek`";
  if (cinsiyet == "yok") csYazi = "\<a:yesilevet:853567844780081162> `Belirtmek istemiyor.`";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = "\<a:krmzhayir:853567840085737492> `Yaş ayarlanmamış!`";
  else yasYazi = `\<a:yesilevet:853567844780081162> \`${yas}\``;
 
  let bayrak = await db.fetch(`pbayrak_${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = "\<a:krmzhayir:853567840085737492> `Bayrak Girilmemiş.`";
  else bYazi = `\<a:yesilevet:853567844780081162> ${bayrak}`;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı Kullanıcının Profili`, user.displayAvatarURL({dynamic : true}))
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
.setImage(user.displayAvatarURL({dynamic : true}))
  .setColor('RANDOM')
    .addField("『 İsim 』", isimYazi)
    .addField("『 Soy isim 』", soyisimYazi)
    .addField("『 Yaş 』", yasYazi)
    .addField("『 Cinsiyet 』", csYazi)
    .addField("『 Bayrak! 』", bYazi)
    .addField("『 Favori Oyun 』", favoriYazi)
    .addField("『 Favori Şarkı 』", favorisYazi)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};