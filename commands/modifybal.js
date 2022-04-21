const fs = require("fs");
const cards = require("../cards.json")
const profile = require("../profile.json")

module.exports.run = async(bot, message, args) => {
  if(!message.author.id === "835163780228710480" && !message.author.id === "743783437378519092") {
    return;
  } else {
    if(!args[2]) {
      return message.channel.send("Usage: `!modifybal <add or subtract> <user> <amount>`...")
    }

    const user = message.mentions.users.first();
    
    if(!profile[user.id]) {
      return message.channel.send("The user is not in the Jihan family!")
    }
    
    if(args[0] = "add") {
      profile[user.id].bal + args[2]
      fs.writeFile("./profile.json", JSON.stringify(profile), (err) => {
        if(err) console.log(err);
      });
    } else {
      profile[user.id].bal - args[2]
      fs.writeFile("./profile.json", JSON.stringify(profile), (err) => {
        if(err) console.log(err);
      });
    }

    message.channel.send({embed: {
      title: `${args[0]}ed :dollar: ${args[2]} to ${user.tag}!`,
      description: `Current balance of ${user}: ${profile[user.id].bal}`,
      color: "GREEN"
    }})
  }
}

module.exports.help = {
  name: "modifybal",
  aliases: []
}