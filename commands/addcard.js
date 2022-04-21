const fs = require("fs");
const staffs = require("../staffs.json")
const cards = require("../cards.json")

module.exports.run = async(bot, message, args) => {
  if(!staffs[message.author.id]) {
    return;
  } else {
    if(!args[1]) {
      return message.channel.send("Usage: `!addcard <card name> <image link>`...")
    }
    const name = getName(args.length)
    if(cards[name]) {
      return message.channel.send("That card already exist")
    } else {
      
      const image = args[args.length - 1]

      cards[name] = {
        issue: `0`,
        image: image
      }
      fs.writeFile("./cards.json", JSON.stringify(cards), (err) => {
        if(err) console.log(err)
      })

      const embed = {
        title: `Added the card with the name "**${name}**"`,
        color: "GREEN",
        image: {
          url: image
        }
      }

      message.channel.send({embed: embed})
    }
  }
  
  function getName(argLength) {
    var nameLength = argLength - 1
    var result = [];
    for ( var i = 0; i < nameLength; i++ ) {
      result.push(args[i]);
    }

    return result.join(" ")
  }
}

module.exports.help = {
  name: "addcard",
  aliases: []
}