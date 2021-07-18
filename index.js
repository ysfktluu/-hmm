const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')



var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});


client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


client.on('guildMemberAdd', async member => {
  let roldb = db.fetch(`otorol.rol_${member.guild.id}`)
  let kanaldb = db.fetch(`otorol.kanal_${member.guild.id}`)
  let rol = member.guild.roles.cache.get(roldb)
  let kanal = member.guild.channels.cache.get(kanaldb)
  let otoyazi = db.fetch(`otoyazi.sunucu.${member.guild.id}`)
  if(rol === undefined || null) {
    return;
  
  } else if(kanal === undefined || null) {
    return;  
    
  } 
  
  else {
    
    try {
      
     
      if(otoyazi === 'acik') {
        await member.roles.add(roldb)
    kanal.send(`${member.user.username}#${member.user.discriminator} üye kullanıcısına \`${rol.name}\` rolü verildi.`)
      } if(otoyazi === undefined || null) {
        await member.roles.add(roldb)
      }
    } catch(e) {
    
    return;
  }
    
    
  }
})

require("./inlineReply")


client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

client.on('guildDelete', guild => {

  let plasmic = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(" Bot Atıldı ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('844866056567914517').send(plasmic);
   
  });
  
  
  
  client.on('guildCreate', guild => {
  
  let plasmicc = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(" Bot Eklendi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('844866056567914517').send(plasmicc);
  
  });
  
  

  client.on('message', msg => {
    if (msg.content === "z!para-yatır") {
      msg.channel.send('**Çok Yakında**');
    }
  }); 

  client.on('message', msg => {
    if (msg.content === "z!para-çek") {
      msg.channel.send('**Çok Yakında**');
    }
  }); 

  

  client.on("message", async msg => {
  
    if(msg.content.startsWith(prefix)) return;
  
    const db = require("croxydb")
  
    var id = msg.author.id;
  
    var gid = msg.guild.id;
  
    var xp = await db.fetch(`xp_${id}_${gid}`);
  
    var lvl = await db.fetch(`lvl_${id}_${gid}`);
  
    let seviyexp = await db.fetch(`seviyexp${msg.guild.id}`)
  
    const skanal = await db.fetch(`seviyekanal${msg.guild.id}`)
  
    let kanal = msg.guild.channels.cache.get(skanal)
  
    if (msg.author.bot === true) return;
  
    let seviyeEmbed = new Discord.MessageEmbed()
  
     seviyeEmbed.setDescription(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl+1}** seviye oldun! `)
  
     seviyeEmbed.setFooter(`${client.user.username} | Seviye Sistemi`)
  
     seviyeEmbed.setColor("#f6ff00")
  
     if(!lvl) {
  
      db.set(`xp_${id}_${gid}`, 5);
  
      db.set(`lvl_${id}_${gid}`, 1);
  
      db.set(`xpToLvl_${id}_${gid}`, 100);
  
      db.set(`top_${id}`, 1)
  
      }
  
    
  
    let veri1 = [];
  
    
  
    if(seviyexp) veri1 = seviyexp
  
    if(!seviyexp) veri1 = 5
  
    
  
    if (msg.content.length > 7) {
  
      db.add(`xp_${id}_${gid}`, veri1)
  
    };
  
    let seviyesınır = await db.fetch(`seviyesınır${msg.guild.id}`)
  
      let veri2 = [];
  
    
  
    if(seviyesınır) veri2 = seviyesınır
  
    if(!seviyesınır) veri2 = 250
  
     
  
    if (await db.fetch(`xp_${id}_${gid}`) > veri2) {
  
      if(skanal) {
  
   kanal.send(new Discord.MessageEmbed()
  
     .setDescription(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl+1}** seviye oldun.`)
  
     .setFooter(`${client.user.username} | Seviye Sistemi`)
  
     .setColor("#f6ff00"))
  
      }
  
      db.add(`lvl_${id}_${gid}`, 1)
  
      db.delete(`xp_${id}_${gid}`)};
  
      db.set(`top_${id}`, Math.floor(lvl+1))
  
    });
  
  //SEVİYE-ROL-----------------------------------
  
  client.on('message', async message => {
  
    var id = message.author.id;
  
    var gid = message.guild.id;
  
    let rrol = await db.fetch(`rrol.${message.guild.id}`)
  
    var level = await db.fetch(`lvl_${id}_${gid}`);
  
    
  
      if(rrol) {
  
    rrol.forEach(async rols => {
  
      var rrol2 = await db.fetch(`rrol2.${message.guild.id}.${rols}`)
  
      if(Math.floor(rrol2) <= Math.floor(level)) {
  
        let author = message.guild.member(message.author)
  
        author.roles.add(rols)
  
      }
  
       else if(Math.floor(rrol2) >= Math.floor(level)) {
  
        let author = message.guild.member(message.author)
  
        author.roles.remove(rols)
  
      }
  
    })
  
    }
  
    
  
      if(message.content == 's*rütbeler') {
  
      if(!rrol) {
  
                  message.channel.send(new Discord.MessageEmbed()
  
                        .setColor("#f6ff00")
  
                        .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
  
                        .setDescription(`Herhangi bir rol oluşturulmadı.`))
  
        
  
        
  
        return;
  
      }
  
          const { MessageEmbed } = require('discord.js')
  
        let d = rrol.map(x => '<@&'+message.guild.roles.cache.get(x).id+'>' + ' **' + db.get(`rrol3.${message.guild.id}.${x}`)+' Seviye**' ).join("\n")
  
      message.channel.send(new MessageEmbed()
  
                        .setColor("#f6ff00")
  
                        .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
  
                        .setDescription(`${d}`))
  
    }
  
    
  
    
  
  })
  
  client.on('message', async message => {
  
     var id = message.author.id;
  
    var gid = message.guild.id;
  
    let srol = await db.fetch(`srol.${message.guild.id}`)
  
    var level = await db.fetch(`lvl_${id}_${gid}`);
  
    if(srol) {
  
    srol.forEach(async rols => {
  
      var srol2 = await db.fetch(`srol2.${message.guild.id}.${rols}`)
  
      if(Math.floor(srol2) <= Math.floor(level)) {
  
        let author = message.guild.member(message.author)
  
        author.roles.add(rols)
  
      }
  
       else if(Math.floor(srol2) >= Math.floor(level)) {
  
        let author = message.guild.member(message.author)
  
        author.roles.remove(rols)
  
      }
  
    })
  
    }
  
      if(message.content == 's*seviyerolleri' || message.content == "s*levelroles") {
  
      if(!srol) {
  
                  message.channel.send(new Discord.MessageEmbed()
  
                        .setColor("#f6ff00")
  
                        .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
  
                        .setDescription(`Herhangi bir rol oluşturulmadı.`))
  
        return;
  
      }
  
          const { MessageEmbed } = require('discord.js')
  
        let d = srol.map(x => '<@&'+message.guild.roles.cache.get(x).id+'>' + ' **' + db.get(`srol3.${message.guild.id}.${x}`)+' Seviye**' ).join("\n")
  
      message.channel.send(new MessageEmbed()
  
                        .setColor("#f6ff00")
  
                        //.setColor(message.guild.member(message.author).highestRole.hexColor)
  
                        .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
  
                        .setDescription(`${d}`))
  
    }
  
    
  
  })
   
  client.on("guildMemberAdd", member => {
    const meftun = require("quick.db").fetch(`isimayar_${member.guild.id}`)
    
    if (member.bot) return;
    if(!meftun) return;
    setTimeout(() => {
      member.guild
        .member(member)
        .setNickname(member.user.username.replace(/[^a-züıöşğç0-9]/gi, " "));
    }, 3000);
  });

  client.on("guildMemberRemove", async member => {
    let kanal = await db.fetch(`bb-mesajı_${member.guild.id}`)
    client.channels.cache.get(kanal).send(`**${member.user.tag} sunucudan ayrıldı!** 👋 **${member.guild.memberCount} kişi kaldık!** 👋 \n **Sunucumuzdaki kişi artışını desteklemek istiyorsan, daha fazla kişi davet edebilirsin!**`)
  })
  
  client.on("guildMemberAdd", async member => {
    const embed = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/avatars/820632932841684994/a_10be43b97b43dd94882714fd37605c92.gif?size=128")
       .setColor("#000000")
    let theartistkanal = await db.fetch(`hg-mesajı_${member.guild.id}`)
    let theartistkullanici = client.users.cache.get(member.id)
    const theartisthesapkurulus = new Date().getTime()-theartistkullanici.createdAt.getTime();
    let theartist;
      if(theartisthesapkurulus < 1296000000) theartist = 'Güvenilir değil. :x:'
      if (theartisthesapkurulus > 1296000000) theartist = 'Güvenilir. :white_check_mark:'
    client.channels.cache.get(theartistkanal).send(`
    **🎊 ${member.guild.name} Sunucumuza Hoş Geldin <@${member.id}>! Seninle beraber ${member.guild.memberCount} kişiyiz.**
    
    **🤓 Hesabın ${moment.utc(theartistkullanici.createdAt).format('DD/MM/YYYY')} tarihinde oluşturulmuş. Yani ${theartist}**
    `, embed)
    });
    

client.on("message", async message => {
    const Database = require("plasma-db");
  const db = new Database("./database.json"); 
    const ai = require('@codare/codare.ai')
  let kanal = db.fetch(`yapayzekakanal_${message.guild.id}`)
  if(!kanal) return;
  if(message.channel.id !== kanal) return;
  if(message.author.bot == true) return;
  let soru = message.content;
  ai.sor(soru).then(enginar => {
  return message.channel.send(enginar) 
  });
  })
  
client.on('message', async msg => {
    const Database = require("plasma-db");
    const db = new Database("./database.json");
    let engin = db.fetch(`küfürengellog_${msg.guild.id}`)
    let enginn = db.fetch(`küfürengelmesaj_${msg.guild.id}`)
    let enginar = db.fetch(`küfürengel_${msg.guild.id}`)
    if(enginar === "aktif") {
    const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
    if (kufurler.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
              msg.delete();
              const embed = new Discord.MessageEmbed()
              .setTitle('Bir küfür yakaladım!')
              .setDescription(`<@${msg.author.id}> adlı kullanıcı küfürlü kelime kullandı! \n Kullanıcının ettiği küfür silindi!`)
              client.channels.cache.get(engin).send(embed)
              return msg.channel.send(`<@${msg.author.id}>, ${enginn}`)
     
            }              
          } 
          catch(err) {
            console.log(err);
          }
    }
    }
    else return;
    });

 
      client.on("message", msg => {
        let db = require('quick.db')
         let e = db.fetch(`reklamengel_${msg.guild.id}`)
        if(e === "aktif"){  
              const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
                if (reklam.some(word => msg.content.includes(word))) {
                  try {
                    if (!msg.member.hasPermission("BAN_MEMBERS")) {
                          msg.delete();
                                 const batusuyar = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle("Reklam Engel Filtresi")
        .setDescription(`Sunucuda Reklam Engel Filtresi Açık Reklam Yapamazsın <@${msg.authorid}>`)
                                 
            
                            return msg.channel.send(batusuyar).then(msg => msg.delete(3000));
           
         
          msg.delete(3000);                              
         
                    }              
                  } catch(err) {
                    console.log(err);
                  }
                }}
        else return;
            });
    
            client.on('guildMemberAdd', async member => {
                const data = require('croxydb')
                const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
                if(asd) {
                let data2 = await data.fetch(`jailrol_${member.guild.id}`)
                let rol = member.guild.roles.cache.get(data2)
                if(!rol) return;
                let kişi = member.guild.members.cache.get(member.id)
                kişi.roles.add(rol.id);
                kişi.roles.cache.forEach(r => {
                kişi.roles.remove(r.id)
                data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
                    data.set(`${member.guild.id}.jail.${kişi.id}`, 'Surge')
                  const wasted = new Discord.MessageEmbed()
                  .setAuthor(member.user.tag, member.user.avatarURL())
                  .setColor(`RANDOM`)
                  .setDescription(``)
                  .setTimestamp()
                    member.send(wasted)
                  }
                });
                   


client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.db = require("quick.db");
client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // XP
    exp(message);
function exp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || (Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let exp = client.db.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);
            message.channel.send(`\<a:enlevel:838076033969291285> ${message.author.toString()}, Tebrikler Seviye Atladın Yeni Seviyen ${newLevel}!`);
        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}
});

client.on('message', async msg => {
  let prefix = ayarlar.prefix 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
 .setAuthor('aZr - Bot', 'https://images-ext-1.discordapp.net/external/veDQp9wd7n_Q_M3BiFgnC3xD4P-avoVHMoeDs1IiRhM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/803267050894131223/78a6777a30ecf0243c7a8a14309c85c0.png?width=473&height=473', 'https://discord.gg/ywJ9rSrrWY')
.setDescription('Prefix'+"'"+'im: `z!` \nYardım İçin: `z!yardım`')
  if(msg.content == `<@!818873847846797373>`) return msg.inlineReply(embed);
});
   
   
   client.elevation = message => {
       if (!message.guild) {
           return;
       }
       let permlvl = 0;
       if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
       if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
       if (message.author.id === ayarlar.sahip) permlvl = 4;
       return permlvl;
   };
   
   var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
   // client.on('debug', e => {
   //   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
   // });
   
   client.on('warn', e => {
       console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
   });
   
   client.on('error', e => {
       console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
   });

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });


client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);