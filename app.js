const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} Adıyla Giriş Yaptı!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('Server=>' + client.ping + 'ms');
  }
});  

client.on('message', msg => {
  if (msg.content === 'yapımcı') {
    msg.reply('Emir ==> https://www.instagram.com/kediisgold/');
  }
});

client.on('message', msg => {
  if (msg.content === 'kurucu') {
    msg.reply('arasbilgebey ==> https://www.instagram.com/arasbilgebey/');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamun aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin <3 İyi eğlenceler');
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin <3 İyi eğlenceler');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam Hoşgeldin <3 İyi eğlenceler');
  }
});

client.on('message', msg => {
  if (msg.content === 'sunucu') {
    msg.reply('Bizim Sunucumuza Gelmek isterseniz  buyrun https://discord.gg/RudKgTb ');
  }
});

client.on('message', msg => {
  if (msg.content === 'destek') {
    msg.reply('Teknik destek için sunucumuza gelebilirsiniz https://discord.gg/RudKgTb ');
  }
});

client.on('message', msg => {
  if (msg.content === 'Destek') {
    msg.reply('Teknik destek için sunucumuza gelebilirsiniz https://discord.gg/RudKgTb ');
  }
});

client.on('message' , message => {
  if (message.content === 'avatar'){
  message.reply(message.author.avatarURL)
  }
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!uçantekme')) {
    const user = message.mentions.users.first();
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)))
    return message.reply("Admin değilsiniz!");
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Denetim Kaydında görüntülenecek sebep ').then(() => {
          message.reply(`Uçan tekme başarılı ${user.tag}`);
        }).catch(err => {
          message.reply('Bunu yapma yetkisine sahip değilim.');
          console.error(err);
        });
      } else {
        message.reply('kullanıcı mevcut değil!');
      }
    } else {
      message.reply('Uçan Tekme atılacak kişiyi @ kullanarak ekleyiniz.');
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)))
    return message.reply("Admin değilsiniz!");
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'banned!',
        }).then(() => {
          message.reply(`Banlama işleminiz gerçekleşmiştir. ${user.tag}`);
        }).catch(err => {
          message.reply('Üye yasaklanırken bir hata meydana geldi.');
          console.error(err);
        });
      } else {
        message.reply('Kullanıcı mevcut değil.');
      }
    } else {
      message.reply('Kullanıcı yasaklanması için sebep giriniz.!');
    }
  }
});


client.login(process.env.BOT_TOKEN);
