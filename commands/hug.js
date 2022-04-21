module.exports.run = async (bot, message, args) => {
        const gifs = [
          "https://i.pinimg.com/originals/d5/56/75/d55675b9109e7c7854cc31bb1eb066b6.gif",
          "https://data.whicdn.com/images/333518436/original.gif",
          "https://pa1.narvii.com/7191/25a6cf1bc7add297e656450bf72f201f74f67914r1-580-326_hq.gif",
          "https://i.pinimg.com/originals/6f/9d/e2/6f9de2d98735674299ff3492df746a2f.gif",
          "https://i.makeagif.com/media/1-19-2017/bVzoNz.gif",
          "https://thumbs.gfycat.com/VariableWellinformedBeardedcollie-max-1mb.gif",
          "https://i.gifer.com/7OyF.gif",
          "https://64.media.tumblr.com/6cfae5bd4c465b1973b57eedd304a955/86ec85ded0d4e070-86/s1280x1920/1dd9610297edc7503c17c78715e37e1c0ea71068.gif",
          "https://64.media.tumblr.com/64988ee98284673d6e577eafbbcf8b21/tumblr_phqn1lBuUU1u7bsc9_540.gif",
          "https://thumbs.gfycat.com/AchingGlitteringCrocodile-max-1mb.gif",
          "https://tenor.com/view/kpop-hug-happy-friends-friendship-goals-gif-5659964",
        ]
        
        
        const gifindex = Math.floor(Math.random() * gifs.length)
        const gif = gifs[gifindex]
        if (!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}>, please mention a user to hug them`)
        } else if (message.mentions.users.first().bot) {
            message.channel.send('i know you love jihan but she\'s just a bot!')
        } else (message.channel.send(`${message.author} hugged ${message.mentions.users.first()}`, {embed: {
          image: {
            url: gif
          },
          color: "#A7C7E7"
        }}))
}

module.exports.help = {
    name: "hug",
    aliases: []
}