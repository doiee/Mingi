const fs = require("fs");
const prfx = require("../prefix.json")

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_SERVER")) {
    message.channel.send("You need **MANAGE_SERVER** permission to use this command");
    return;
  }
  if (!args[0]) {
    message.channel.send("The prefix needs to be atleast 1 character long!\n\nUsage: `setprefix [prefix]`");
    return;
  }
  if(args[0].length > 10) {
    message.channel.send("The prefix needs to be below 10 characters long!\n\nUsage: `setprefix [prefix]`");
    return;
  }

  if(!prfx[message.guild.id]) {
    prfx[message.guild.id] = {
      prefix: args[0]
    }
    fs.writeFile("./prefix.json", JSON.stringify(prfx), (err) => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    prfx[message.guild.id].prefix = args[0];
    fs.writeFile("./prefix.json", JSON.stringify(prfx), (err) => {
      if(err) {
        console.log(err)
      }
    })
  }

  message.channel.send(`Prefix successfuly set to **${args[0]}**`)
}

module.exports.help = {
    name: "setprefix",
    aliases: []
}