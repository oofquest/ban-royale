const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('Ban royale. Now. Thank you mom.')

  command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('SEND_MESSAGES') ||
      member.hasPermission('SEND_MESSAGES')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} That user has been banned. Let's hope you win this event!`)
      } else {
        message.channel.send(`${tag} Please specify someone to ban. If you did, that user has been banned already.`)
      }
    } else {
      message.channel.send(
        `${tag} Sorry, you do not have permission to run this command. `
      )
    }
  })
})

client.login(config.token)
