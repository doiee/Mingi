//Requiring discord for the embed
const Discord = require("discord.js");
//Requiring profile for the cards they have
const profile = require("../profile.json");

module.exports.run = async (bot, message, args) => {
  //First we are gonna see if the user have joined the economy system.
  //For that, we are gonna see if the user is in the database (profile) IMRPOTANT: adding "!" before any code marks it as a NOT example: if(!UserDataBase) means that if there is no UserDataBase
  //profile[message.author.id] means profile of the message author's id
  if(!profile[message.author.id]) {
    //If there if no profile for the message author, then we are gonna send a message saying you are not in the Jihan family and then return/end.
    message.channel.send("You are not in the Jihan family, use `!start` to start!")
    return;
  }

  
  
  //We are gonna get the authors cards
  //Const is like a storage for now.
  const cardsArr = [];
  Object.keys(profile[message.author.id].cards).forEach(k => {
    cardsArr.push(k)
  });

  cardDB = profile[message.author.id].cards

  const cards = cardsArr.map((C, I) => `${I + 1}. **${C}** - **${cardDB[C].cardcode}**`).join("\n")
  //Now we are gonna send it to the user.
  message.channel.send(cards, { split: { char: "\n" } })

  //We will add it in an embed later!
}

module.exports.help = {
  name: "inventory",
  aliases: ["inv"]
}