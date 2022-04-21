module.exports.run = async (bot, message, args) => {
        const gifs = [
          "https://thumbs.gfycat.com/AdmirableThatCanine-max-1mb.gif",
          "https://64.media.tumblr.com/48dce9503eddeff165c244b84da7411d/14e48d4d3e43c1eb-45/s400x600/cf7924c3cb5e1985b509025eae86f479a3579c9a.gif",
          "https://pa1.narvii.com/6931/37ff8effe9d0608960e604fa86e83cd6850a3103r1-350-194_hq.gif",
          "https://data.whicdn.com/images/335614717/original.gif",
          "https://media1.tenor.com/images/da7507cd9ecc5da6eda8fa0a2a643f3e/tenor.gif?itemid=5013632",
          "https://i.pinimg.com/originals/46/4c/74/464c74473c6a797b543fea035b0c3e3a.gif",
          "https://i.pinimg.com/originals/27/cf/57/27cf57af2686d9b9be0a572b7de60c43.gif",
        ]

        let gifindex = Math.floor(Math.random() * gifs.length)
        const gif = gifs[gifindex]
        if (!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}>, please mention a user to cuddle them`)
        } else if (message.mentions.users.first().bot) {
            message.channel.send('i know you love jihan but shes just a bot!')
        } else (message.channel.send(`${message.author} cuddled ${message.mentions.users.first()}`, {embed: {
          image: {
            url: gif
          },
          color: "#A7C7E7"
        }}))
}

module.exports.help = {
    name: "cuddle",
    aliases: []
}