module.exports.run = async (bot, message, args) => {
  embed = {
    color: "#A7C7E7",
    title: "Jihan Help Menu",
    author: {
      name: message.author.tag,
      icon_url: message.author.displayAvatarURL({dynamic: true, size: 4096})
    },
    description: ":loudspeaker: **Announcement**\nOur bot is in beta! *(still being edited)*",
    fields: [
      {
        name: "__:sparkles: General__",
        value: "> `help`, `ping`, `avatar`"
      },
      {
        name: "__:wave: Emotes__",
        value: "> `cuddle`, `hug`, `kiss`, `marry`, `shoot`, `slap`"
      },
      {
        name: ":link: __Links__",
        value: "> [Support Server](https://discord.gg/jQdBzTbCTF)"
      }
    ],
    timestamp: new Date(),
	  footer: {
		  text: 'Add the prefix before each command',
	  },
    image: {
      url: "https://thumbs.gfycat.com/AcceptableFatalAfricangroundhornbill-size_restricted.gif"
    }
  }

  message.channel.send({embed: embed})
}

module.exports.help = {
    name: "help",
    aliases: []
}