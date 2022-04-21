const Discord = require("discord.js")

const RegNeededForAvatar = RegExp(/<@!?(\d+)>/)

//const MessageEmbed = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (message.guild.id === "836758454148268072") return message.channel.send("this command is disabled in this server");
  const userID = RegNeededForAvatar.test(args[0]) ? RegNeededForAvatar.exec(args[0])[1] : args[0]

  const mentionedUser = await message.client.users.fetch(userID).catch(() => null) || message.member.user
  let avatarembed = new Discord.MessageEmbed()
    .setTitle(`${mentionedUser.tag}'s avatar`)
    .setDescription(`> [Avatar URL](${mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })})`)
    .setImage(mentionedUser.displayAvatarURL({
      format: 'png',
      dynamic: true,
      size: 1024
    }))
    .setColor('#A7C7E7')

    .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`)

  return message.channel.send(avatarembed)
}

module.exports.help = {
  name: "avatar",
  aliases: ["av"]
}