module.exports.run = async (bot, message, args) => {
        const gifs = [
          "https://data.whicdn.com/images/217336645/original.gif",
          "https://pa1.narvii.com/6541/22666480a5eec428dc2528aebf8ccf65640d8585_hq.gif",
          "https://i.pinimg.com/originals/53/e0/9d/53e09df8efa4c58f4fb76011c9e8883e.gif",
          "https://i0.wp.com/media3.giphy.com/media/cLfTXmbsLnDJFXrIY8/giphy.gif?resize=669%2C324&ssl=1",
          "https://0.soompi.io/wp-content/uploads/2018/07/26104354/secretary-kim-park-min-young-park-seo-joon1.gif"
        ]
        
        
        const gifindex = Math.floor(Math.random() * gifs.length)
        const gif = gifs[gifindex]
        if (!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}>, please mention a user to marry them`)
        } else if (message.mentions.users.first().bot) {
            message.channel.send('i know you love jihan but she\'s just a bot!')
        } else (message.channel.send(`${message.author} married ${message.mentions.users.first()}`, {embed: {
          image: {
            url: gif
          },
          color: "#A7C7E7"
        }}))
}

module.exports.help = {
    name: "marry",
    aliases: ["propose"]
}