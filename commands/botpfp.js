const staffs = require("../staffs.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let avatarurl = args.join(" ");
  if(!staffs[message.author.id]) return;

  bot.user.setAvatar(`${avatarurl}`)
  if (!avatarurl) return message.channel.send(`Usage: set-avatar <url>`)
  let embed = new Discord.MessageEmbed()
    .setTitle('New Avatar Set')
    .setImage(`${avatarurl}`)
    .setTimestamp()
    .setColor("GREEN")
  message.channel.send(embed)
  .catch(e => {
    console.log(e)
    return message.channel.send("Something Went Wrong!")
  })
}

module.exports.help = {
    name: "botpfp",
    aliases: []
}