const profile = require("../profile.json");
const cards = require("../cards.json");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    return message.channel.send("You have to specify a code!\n\nUsage: `!view <code>`")
  }

  const userCards = profile[message.author.id].cards

  Object.keys(userCards).forEach((k, v) => {
    if(userCards[k].cardcode === args[0]) {
      message.channel.send({embed: {
        title: `${k}`,
        description: `Exp: ${userCards[k].exp}\nLevel: ${userCards[k].lvl}\nCard Code: ${userCards[k].cardcode}`,
        image: {
          url: `${cards[k].image}`
        },
        color: "GREEN"
      }})
    }
  })
}

module.exports.help = {
    name: "view",
    aliases: []
}