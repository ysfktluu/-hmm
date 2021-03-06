const discord = require('discord.js')
const yts = require( 'yt-search' )
exports.run = async (client, message, args) => { 
  let engin = args.slice(0).join(' ')
  if(!engin) return message.channel.send('Lütfen aramam için bir şeyler giriniz')
  const r = await yts(engin)
  const videos = r.videos.slice( 0, 1 )
  videos.forEach( function ( v ) {
    const views = String( v.views ).padStart( 10, ' ' )
    const embed = new discord.MessageEmbed()
    .setTitle(":mag_right:  "+ engin + " sonuçları  :mag:")
    .setDescription(`:desktop:  Video: ${ v.title } \n \n :busts_in_silhouette:  Görüntülenme: ${ views } \n \n :clock2:  Süre: ${ v. timestamp } \n \n :arrow_right:  [İzlemek için tıkla](${v.url})`)
    return message.channel.send(embed)
  } )
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtube'
};