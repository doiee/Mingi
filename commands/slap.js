module.exports.run = async (bot, message, args) => {
        const gifs = [
          "https://i.pinimg.com/originals/a4/56/6c/a4566c2bc0293b701301f404c8176682.gif``",
          "https://thumbs.gfycat.com/AdvancedEnviousCopperbutterfly-max-1mb.gif",
          "https://media1.tenor.com/images/3a6907a0044ee796ca327a7ab1594edf/tenor.gif?itemid=7704417",
          "https://img.buzzfeed.com/buzzfeed-static/static/2018-04/10/0/asset/buzzfeed-prod-web-09/anigif_sub-buzz-24178-1523335370-1.gif",
          "https://i.pinimg.com/originals/a4/56/6c/a4566c2bc0293b701301f404c8176682.gif"
        ]

        let gifindex = Math.floor(Math.random() * gifs.length)
        const gif = gifs[gifindex]
        if (!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}>, please mention a user to slap them`)
        } else if (message.mentions.users.first().bot) {
            message.channel.send('you can\'t hit a bot!')
        }  else (message.channel.send(`${message.author} slapped ${message.mentions.users.first()}`, {embed: {
          image: {
            url: gif
          },
          color: "#A7C7E7"
        }}))
}

module.exports.help = {
    name: "slap",
    aliases: []
}