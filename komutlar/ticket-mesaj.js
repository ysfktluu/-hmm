const Discord = require("discord.js");
 const data = require("croxydb");

exports.run = async (client, message, args) => {

  if (args[0] === "gönder") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (!kanalbelirle)
      return message.channel.send(`Mesajı göndereceğim kanalı ayarlamamışsın: u!ticket-kanal ayarla #kanal`
      );
    client.channels
      .cache.get(kanalbelirle)
      .send(
        new Discord.MessageEmbed()
          .setTitle(`UMEF-EK`)
          .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
          .setColor("BLUE")
          .setDescription(`📩 tepkisine tıklayıp bir ticket oluşturabilirsiniz.`)
      )
      .then(m => {
        m.react("📩");
        let açç = (reaction, user) =>
          reaction.emoji.name === "📩" && user.id !== client.user.id;
        let aç = m.createReactionCollector(açç, { time: 0 });

        aç.on("collect", async reaction => {
          const author = reaction.users.cache.last();
          reaction.users.remove(author.id);
          const sd = await data.fetch(`ass.${message.guild.id}.${author.id}`);

          data.add(`numara.${message.guild.id}`, 1);
          const as = await data.fetch(`numara.${message.guild.id}`);
          message.guild.channels.create(`ticket-${as}`).then(async s => {
            data.add(`numara.${s.id}`, as);
            data.set(`ass.${message.guild.id}.${author.id}`, s.id);
            data.set(
              `asd.${message.guild.id}.${s.id}.${author.id}`,
              "ticketaçma"
            );
            let role = message.guild.roles.cache.find(r => r.name === "@everyone");
            s.createOverwrite(role, { VIEW_CHANNEL: false });
            message.guild.members.cache.forEach(u => {
              if (u.hasPermission("MANAGE_GUILD")) {
                s.createOverwrite(u, {
                  VIEW_CHANNEL: true,
                  SEND_MESSAGES: true,
                  MANAGE_MESSAGES: true,     
                   });
              }
            });
            s.createOverwrite(author, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true
            });
            s.send(
              `${author}, Hoşgeldin!`,
              new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(
                  `Çok yakın zaman da seninle ilgileneceğiz. Ticket'ı kapatmak istersen: 🔒`
                )
                .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
            ).then(m => {
              m.react(`🔒`);
              let si = (reaction, user) =>
                reaction.emoji.name === "🔒" && user.id !== client.user.id;
              let s23 = m.createReactionCollector(si, { time: 0 })
                    s23.on("collect", async reaction => {
                const author = reaction.users.cache.last();
                reaction.users.remove(author.id);
                m.react(`✅`);
                m.react(`❌`);
                let sil = (reaction, user) =>
                  reaction.emoji.name === "✅" && user.id !== client.user.id;
                let sill = m.createReactionCollector(sil, { time: 0 });
                let ss = (reaction, user) =>
                  reaction.emoji.name === "❌" && user.id !== client.user.id;
                let s2 = m.createReactionCollector(ss, { time: 0 });
                s2.on("collect", async reaction => {
                  s.messages.fetch({ limit: 10 }).then(async messages => {
                    messages
                      .get(m.id)
                      .reactions.cache.get("✅")
                      .removeAll();
                    reaction.users.removeAll();
                  });
                });
                sill.on("collect", async reaction => {
                  let us = reaction.users.cache.last();
                  reaction.users.remove(us.id);
                  s.send(
                    new Discord.MessageEmbed()
                      .setColor("BLUE")
                      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
                      .setDescription(`Ticket ${us} tarafından kapatıldı.`)
                  );
                  s.setName(`closed-${as}`);
                  s.send(
                    new Discord.MessageEmbed().setColor("BLUE")
                    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
                      .setDescription(`:unlock:: Ticketi tekrar açar.\n:no_entry:: Ticketi siler.`)
                  ).then(m2 => {
                    m2.react("🔓");
                    m2.react("⛔");
                    let sil = (reaction, user) =>
                      reaction.emoji.name === "⛔" &&
                      user.id !== client.user.id;
                    let sill = m2.createReactionCollector(sil, { time: 0 });
                    let geri = (reaction, user) =>
                      reaction.emoji.name === "🔓" &&
                      user.id !== client.user.id;
                    let geriaç = m2.createReactionCollector(geri, { time: 0 });

                    geriaç.on("collect", async reaction => {
                      const author = reaction.users.cache.last();
                      m2.delete({ timeout: 5000   });
                      reaction.users.remove(author.id);
                      s.send(
                        new Discord.MessageEmbed()
                          .setColor("BLUE")
                          .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
                          .setDescription(
                            `Ticket ${author} tarafından tekrar açıldı.`
                          )
                      );
                      s.setName(`ticket-${as}`);
                    });

                    sill.on("collect", async reaction => {
                      const author = reaction.users.cache.last();
                      reaction.users.remove(author.id);
                      s.send(
                        new Discord.MessageEmbed()
                          .setColor("BLUE")
                          .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
                          .setDescription(
                            `Ticket 5 saniye sonra tamamen silinecek.`
                          )
                      );
                      setTimeout(async () => {
                        s.delete();
                        const sd = await data.fetch(
                          `ass.${message.guild.id}.${author.id}`
                        );
                        data.delete(`asd.${message.guild.id}.${author.id}`);
                        data.delete(
                          `asd.${message.guild.id}.${s.id}.${author.id}`
                        );
                      }, 5000);
                    });
                  });
                });
              });
            });
          });
        });
      });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticketmesaj"],
  permLevel: 0
};

exports.help = {
  name: "ticket-mesaj"
};