const fs = require('fs-extra')
const moment = require('moment-timezone')

async function handleMessage(sock, m) {
  const msg = m.messages[0]
  if (!msg.message || msg.key.fromMe) return

  const from = msg.key.remoteJid
  const type = Object.keys(msg.message)[0]
  const body =
    type === 'conversation' ? msg.message.conversation :
    type === 'extendedTextMessage' ? msg.message.extendedTextMessage.text :
    ''

  const prefix = '.'
  if (!body.startsWith(prefix)) return

  const command = body.slice(1).trim().split(/\s+/).shift().toLowerCase()

  if (command === 'menu') {
    await sock.sendMessage(from, {
      text: `*Nixon Commands*
.menu
.ping
.owner
`
    })

  } else if (command === 'ping') {
    await sock.sendMessage(from, { text: 'pong 🏓' })

  } else if (command === 'owner') {
    await sock.sendMessage(from, { text: 'Owner:6283836033866' })
  }
}

module.exports = { handleMessage }
