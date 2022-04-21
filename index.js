const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const express = require('express');
const app = express();
const port = 8080;
const prfx = require("./prefix.json")
const mongo = require("./mongo")

app.get('/', (req, res) => res.send("The bot is ok!"));

app.listen(port, () =>
  console.log(`mingi is listening at http://localhost:${port}`)
);

bot.aliases = new Discord.Collection();
bot.commands = new Discord.Collection();

//Read commands folder
fs.readdir('./commands', (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    console.log("Couldn't find any commands!");
    return;
  }

  jsfile.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("ready", () => {
  console.log(`${bot.user.tag} is online!`)

  bot.guilds.cache.forEach((guild) => {
    console.log(
      `${guild.name} has a total of ${guild.memberCount} members`
    )
  })

  setInterval(() => {
    bot.user.setActivity(`!help | ${bot.guilds.cache.size} servers`, {
      type: 'PLAYING'
    }); // sets bot's activities to one of the phrases in the arraylist
  }, 30000); // Runs this every 30 seconds.
})

//Mongoose Conection
const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    console.log("Connected to MongoDB")
  })
}
connectToMongoDB()

bot.on('message', async message => {
  //Set prefix
  let prefix;
  if (prfx[message.guild.id]) {
    prefix = prfx[message.guild.id].prefix
  } else {
    prefix = '!';
  }

  //Check channel type
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;

  //Check prefix, define args & commands
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let cmd;
  cmd = args.shift().toLowerCase();
  let command;
  let commandFile = bot.commands.get(cmd.slice(prefix.length));
  if (commandFile) commandFile.run(bot, message, args);

  //Run commands
  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd));
  }
  try {
    command.run(bot, message, args, cmd);
  } catch (e) {
    return;
  }
});

bot.login(process.env.TOKEN)
