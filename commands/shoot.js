module.exports.run = async (bot, message, args) => {
        if (!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}>, please mention a user to shoot them`)
        } else if (message.mentions.users.first().bot) {
            message.channel.send('Lol are you trying to shoot a bot? I don\'t think you can!')
        } else (message.channel.send(`${message.author} shot ${message.mentions.users.first()} with that ddu du ddu du`, {embed: {
          image: {
            url: "https://data.whicdn.com/images/314084432/original.gif"
          },
          color: "#A7C7E7"
        }}))
}

module.exports.help = {
    name: "shoot",
    aliases: []
}