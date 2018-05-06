const Discord = require("discord.js");
const client = new Discord.Client();
const eks = require("./ekstra.json");

var prefix = "/test";

client.on('ready', () => {
  console.log('Giris Saglandi');
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  client.user.setGame('/test | Zappara TEST |');
});

client.on('message', msg => {
  if (msg.content === 'Merhaba') {
    msg.reply('Merhaba!');
  }
});
client.on('message', msg => {
  if (msg.content === '@Zappara TEST#2406') {
    msg.reply('Efendim');
  }
});
client.on('message', msg => {
  if (msg.content === '@Zappara TEST#2406 yardım') {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .addField("KOMUTLAR", `${prefix} benimid = Sizin ID'nizi gösterir` `${prefix} ping = Sizin pinginizi gösterir`)
      .setDescription(`${bot.user.username} KOMUTLAR`)
      .setFooter("Zappara TEST")
      .setTimestamp()
    const embed2 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription("Özel mesajlarını kontrol et :postbox:")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter("Zappara TEST")
      .setTimestamp()
    msg.channel.send(embed2).then(msg.author.send(embed));
  }
});
if (msg.content === prefix + 'yardım') {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .addField("KOMUTLAR", `${prefix} benimid = Sizin ID'nizi gösterir`)
      .setDescription(`${bot.user.username} KOMUTLAR`)
      .setFooter("Zappara TEST")
      .setTimestamp()
    const embed2 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription("Özel mesajlarını kontrol et :postbox:")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter("Zappara TEST")
      .setTimestamp()
    msg.channel.send(embed2).then(msg.author.send(embed));
  }
  if (msg.content === prefix + 'sunucu') {
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL)
      .addField("Sunucu Sahibi", msg.guild.owner)
      .addField("Toplam Üye Sayısı", msg.guild.members.size)
      .addField("Oluşturulma Tarihi", msg.guild.createdAt)
    msg.channel.send(embed)
  }
});










client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const event = msg.content.toLower

  try {
    let commandFile = require(`./ozellikler/${command}.js`);
    commandFile.run(client, msg, args);
  } catch (err) {}
});


client.login(eks.token);
        
