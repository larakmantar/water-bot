const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')
const { Client, MessageEmbed } = require('discord.js')

var prefix = ayarlar.prefix

client.on('ready', () => {
  console.log(`bot aktif oldu ${client.user.tag}!`);
  client.user.setStatus("online");
  client.user.setActivity("bakimda", { type: "WATCHING"});
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===prefix +  'lord') {
    const lord = new MessageEmbed()
    
    .setTitle('help komutu')
    .setDescription('yardım menüsünü gösterir')
    .setAuthor('water bot')//kendi botunuzun ismi
    .setColor("random")
    .setThumbnail('https://cdn.discordapp.com/attachments/760173908367900772/761941243466481714/waterbot.jpg')//buraya kendi botunuzun logosunun linkini koyun
    .addField('♥', 'water botu destekle');
     Message.channel.send(lord)
  }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('as');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'naber') {
      msg.author.send('iyidir senden');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'amk') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'oç') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'ananı') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'yarrak') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'orospu') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'göt') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'piç') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sikerim') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'siktir') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'yarak') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'anan') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }

  });
  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'ananısikim') {
      msg.delete()
      msg.author.send('bu kelimeyi kullanamassın');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'adam') {
      msg.react('♥')
      msg.channel.send('saol');
    }
  });


client.login('NzYyMzg2NzEwMjg5NTgwMDc0.X3oZ9A.i8X4jeuzLVU8N1lAPawh-YFzKPg');   //botunuzun tokeni

//botu xLinLord kodladi calinti deyildir sifir