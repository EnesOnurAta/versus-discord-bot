const Discord = require('discord.js');
exports.run = (client, message, args) => {
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
