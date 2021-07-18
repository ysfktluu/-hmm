const Discord = require("discord.js");
exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
   "Taş kırılır, tunç erir ama Türklük ebedidir.",
   "En büyük savaş, cahilliğe karşı yapılan savaştır.",
   "Vatana ihanetin nedeni olmaz. ...",
   "Beni görmek demek, mutlaka yüzümü görmek değildir. ...",
   "Biz Türkler, bütün tarihimiz boyunca hürriyet ve istiklale timsal olmuş bir milletiz.",
   "Cehalet yenilmesi gereken en büyük düşmandır.",
   "Beni olağanüstü bir kişi olarak yorumlamayınız. Doğuşumdaki tek olağanüstülük Türk olarak dünyaya gelmemdir.",
   "Din gibi temiz bir duygu, politika gibi kirli oyunlar alet edilemez. Din ait olduğu yerde, temiz vicdan sahnesinde yaşanmalıdır.",
   "Bir millet zenginliğiyle değil, ahlak değeriyle ölçülür.",
   "Şayet ölecek olursam, memlekete ait söyleyecek hiçbir şeyim yoktur. Çünkü yürürlükteki Cumhuriyet yasaları bu işleri temine yeterlidir.",
   "Medeni olmayan insanlar, medeni olanların ayakları altında kalmaya mahkumdurlar.",
    "Ben icap ettiği zaman en büyük hediyem olmak üzere, Türk Milletine canımı vereceğim",
    "Hiçbir şeye ihtiyacımız yok, yalnız bir şeye ihtiyacımız vardır; çalışkan olmak!",
    "Öğretmen bir kandile benzer, kendini tüketerek başkalarına ışık verir.",
    "Milletimiz her güçlük ve zorluk karşısında, durmadan ilerlemekte ve yükselmektedir.",
    "Bir milletin medeniyetini ölçmek istiyor musunuz? Kadınlarına nasıl muamele edildiğine bakınız.",
    "Başarı tüm ulusun azim ve inancıyla çabasını birleştirmesi sonucu kazanabilir.",
    "Türkiye Cumhuriyeti mesut, muvaffak ve muzaffer olacaktır. 29 Ekim 1923",
    "Türk milletinin karakterine ve adetlerine en uygun olan idare, Cumhuriyet idaresidir.",
    "Cumhuriyet, fikir serbestliği taraftarıdır. Samimi ve meşru olmak şartıyla her fikre hürmet ederiz."
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]
  var resim = [
      "https://i.pinimg.com/736x/74/09/ae/7409aeffe413d5d638530897cc0d197f.jpg",
      "https://i.pinimg.com/originals/05/61/d5/0561d5930d772b9f9464a9af2b3d670d.jpg",
      "https://img.ednews.net/news/2019/05/photo_367542.jpg",
      "https://listelist.com/wp-content/uploads/2017/10/DNNYETjWsAEx6kI.jpg",
      "https://www.gercekgundem.com/images/galleries/gallery_14140/cf28c6f12b5c7a1d.jpg"
        ] 
        var görsel = resim[Math.floor(Math.random() * (resim.length))]  
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RED")
.setThumbnail(`${görsel}`)
.setTitle("**Mustafa Kemal Atatürk Diyor ki:**")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["atatürk"],
  permLevel: 0
};

exports.help = {
  name: "atatürk"
};