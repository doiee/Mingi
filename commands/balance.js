const fs = require("fs");
const money = require("../profile.json");

module.exports.run = async (bot, message, args) => {
    if(!args[0]){
        var user = message.author;
    } else {
        var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    }
    if(user.bot) {
      return message.channel.send("You cannot check balance of a bot <:error:803224284741763112>")
    }

    if(!money[user.id]){
      return message.channel.send("This user is not in the Jihan family")
    }

    message.channel.send({embed: {
      color: "GREEN",
      title: `${user.username}'s Balance`,
      description: `**Balance:** $${money[user.id].bal}`
    }})
    
}

module.exports.help = {
    name: "balance",
    aliases: ["bal", "money"]
}