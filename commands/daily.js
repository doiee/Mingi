const fs = require("fs");
const Discord = require("discord.js");
const money = require("../profile.json")
const cards = require("../cards.json")
const cooldowns = require("../cooldowns.json")
const { time } = require("console");

module.exports.run = async (bot, message, args) => {
  let timeout = 86400000;
  let reward = 1000;

  let embed = new Discord.MessageEmbed()
    .setTitle("Daily Reward!");

  if (!money[message.author.id]) {
    embed.setColor('00FF00')
    embed.setDescription(`You are not in the doies world! Please use \`!start\` before using this command!`)
    embed.setFooter("Start your journey at !start")

    return message.channel.send(embed)
  } else {
    if (!cooldowns[message.author.id]) {
      cooldowns[message.author.id] = {
        name: bot.users.cache.get(message.author.id).tag,
        daily: Date.now()
      }
      fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
        if (err) console.log(err);
      });
        const card = pickCard(cards)

        const userCards = money[message.author.id].cards

        userCards[card] = {
          cardcode: makeid(5),
          lvl: 1,
          exp:0
        }
        fs.writeFile("./profile.json", JSON.stringify(money), (err) => {
          if(err) console.log(err)
        });

        embed.setDescription(`Here is your daily reward!\n\n**${card}**`)
        .setColor("GREEN")
        .setImage(`${cards[card].image}`)

        message.channel.send(embed)
    } else {
      if (timeout - (Date.now() - cooldowns[message.author.id].daily) > 0) {
        const ms = require("ms");
        let time = ms(timeout - (Date.now() - cooldowns[message.author.id].daily))

        embed.addField("Collect again in", `${time}`)
        embed.setColor("ff0000")
        embed.setDescription(`You have already collected your daily reward`)
        return message.channel.send(embed)
      } else {
        cooldowns[message.author.id].daily = Date.now();

        fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
          if (err) console.log(err);
        });

        const card = pickCard(cards)

        const userCards = money[message.author.id].cards

        userCards[card] = {
          cardcode: makeid(5),
          lvl: 1,
          exp:0
        }
        fs.writeFile("./profile.json", JSON.stringify(money), (err) => {
          if(err) console.log(err)
        });

        embed.setDescription(`Here is your daily reward!\n\n**${card}**`)
        .setColor("GREEN")
        .setImage(`${cards[card].image}`)

        message.channel.send(embed)
      }
    }
  }

  function pickCard(obj) {
    var prop, len = 0, randomPos, pos = 0;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            len += 1;
        }
    }
    randomPos = Math.floor(Math.random() * len);
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (pos === randomPos) {
                return prop;
            }
            pos += 1;
        }
    }
  }

  function makeid(length) {
    let result = [];
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 36)));
    }
    return result.join("");
  }
}

module.exports.help = {
  name: "daily",
  aliases: []
}