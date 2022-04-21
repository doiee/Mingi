module.exports.run = async (bot, message, args) => {
        const gifs = [
          "https://media4.giphy.com/media/xTiIzMkQ4U9ZC9mDXW/giphy.gif",
          "https://media4.giphy.com/media/xTiIzMkQ4U9ZC9mDXW/giphy.gif",
          "https://data.whicdn.com/images/263754824/original.gif",
          "https://i.pinimg.com/originals/63/be/92/63be92a7f8b730b68b908811d842a13f.gif",
          "https://thumbs.gfycat.com/ClutteredUniqueBumblebee-max-1mb.gif",
          "https://thumbs.gfycat.com/VictoriousCandidAsiaticgreaterfreshwaterclam-max-1mb.gif",
          "https://media1.tenor.com/images/6aa1ec284efcbc8ccd5104c54598cdad/tenor.gif?itemid=15407712",
          "https://data.whicdn.com/images/175266838/original.gif",
          "https://66.media.tumblr.com/af2ad192cab5e41155a6d27120a79e79/tumblr_p2x2roStxr1thti8go5_500.gif",
          "https://i.pinimg.com/originals/b2/92/f1/b292f19116ecee6f14c288abf999e0de.gif",
          "https://data.whicdn.com/images/336758199/original.gif",
          "https://thumbs.gfycat.com/DearestSimpleButterfly-size_restricted.gif",
          "https://media3.giphy.com/media/THmiSD5l5B3tndGbT6/giphy.gif",
          "https://media1.tenor.com/images/6aa1ec284efcbc8ccd5104c54598cdad/tenor.gif?itemid=15407712",
          "https://1.bp.blogspot.com/-5ga4KdYbovw/X6a2t7WhO7I/AAAAAAAATiU/42RxvBeyFyEdEeqmmrfHZSuI6llCFQVlgCLcBGAsYHQ/s1081/d720ef8ed8fb9b9e38033203af92d2dc_mp4.gif",
        ]
        

        const gifindex = Math.floor(Math.random() * gifs.length)
        const gif = gifs[gifindex]
        if (!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}>, please mention a user to kiss them`)
        } else if (message.mentions.users.first().bot) {
            message.channel.send('i know you love jihan but she\'s just a bot!')
        } else (message.channel.send(`${message.author} kissed ${message.mentions.users.first()}`, {embed: {
          image: {
            url: gif
          },
          color: "#A7C7E7"
        }}))
}

module.exports.help = {
    name: "kiss",
    aliases: []
}