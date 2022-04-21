const prof = require("../profile.json");
const fs = require("fs");
const cards = require("../cards.json");

module.exports.run = async (bot, message, args) => {
  if(prof[message.author.id]) {
    message.channel.send({embed: {
      title: "You are already in doyoungs world!",
      color: "RED"
    }})
    return;
  }
  
  prof[message.author.id] = {
    bal: 50,
    cards: {}
  }
  fs.writeFile("./profile.json", JSON.stringify(prof), (err) => {
    if (err) console.log(err)
  });
  const startercard = pickCard(cards);
  const userProf = prof[message.author.id];
  const userCards = userProf["cards"];
  userCards[startercard] = {
    cardcode: makeid(5),
    lvl: 1,
    exp: 0
  }
  fs.writeFile("./profile.json", JSON.stringify(prof), (err) => {
    if (err) console.log(err)
  });
  const startercard2 = pickCard(cards)
  userCards[startercard2] = {
    cardcode: makeid(5),
    lvl: 1,
    exp: 0
  }
  fs.writeFile("./profile.json", JSON.stringify(prof), (err) => {
    if (err) console.log(err)
  });
  
  let firststart;
  if(startercard.endsWith("2*")){
    firststart = "2 🔵"
  } else if(startercard.endsWith("3*")) {
    firststart = "3 🔴"
  } else if(startercard.endsWith("4*")) {
    firststart = "4 🟣"
  } else if(startercard.endsWith("5*")) {
    firststart = "5 🟡:"
  } else {
    firststart = "1 ⚪"
  }

  let firststart2;
  if(startercard2.endsWith("2*")){
    firststart2 = "2 🔵"
  } else if(startercard2.endsWith("3*")) {
    firststart2 = "3 🔴"
  } else if(startercard2.endsWith("4*")) {
    firststart2 = "4 🟣"
  } else if(startercard2.endsWith("5*")) {
    firststart2 = "5 🟡:"
  } else {
    firststart2 = "1 ⚪"
  }
  message.channel.send({embed: {
    title: "Welcome to doies world! Here is a little welcome gift for you!",
    description: `**ADDED CARDS**\n[${startercard}](${cards[startercard].image}) Star: ${firststart} Code: ${userCards[startercard].cardcode}\n\n[${startercard2}](${cards[startercard2].image}) Star: ${firststart2} Code: ${userCards[startercard2].cardcode}\n\n\n+ 50 <:jiheart:837711111108427858>`,
    color: "GREEN"
  }})



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
    name: "start",
    aliases: []
}