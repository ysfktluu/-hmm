const Discord = require("discord.js")
exports.run = async (client, message, args) => {
 
 
   
const resim = ['https://img.fanatik.com.tr/img/75/1200x695/5ea41a6666a97c63749ca6ab.jpg',
 
'https://tenor.com/view/adolfos-burrito-wrap-gif-12674473',
 
'https://media1.tenor.com/images/7036173455c9298c7d9fcff3f22e8cc5/tenor.gif?itemid=10905029' ,
 
'https://st2.depositphotos.com/3765753/6393/i/600/depositphotos_63934853-stock-photo-turkish-shawarma-durum-traditional-sish.jpg' ,
 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5dr9529MszwCJtkapncwWyoNqUNAnMG0FQ&usqp=CAU' ,
 
'https://www.tokatkebabi.com.tr/images/products/IMG_1581.jpg'
 
]
 
let durum = new Discord.MessageEmbed()
.setColor(message.member.roles.highest.color)
.setImage(resim[Math.floor(Math.random() * resim.length)])
.setAuthor(message.author.username,"https://img.fanatik.com.tr/img/75/1200x695/5ea41a6666a97c63749ca6ab.jpg")
.setDescription(`:tada: Dürümü yedin afiyet olsun! `)

   if(args[0] || !args[0]) return message.channel.send(durum)
 
};
 
 
 
  exports.help = {
    name:"dürüm",
    usage:"dürüm",
    description:"dürüm yersiniz."
    }
   
    exports.conf = {
    aliases:[],
    kategori:"genel"
    }