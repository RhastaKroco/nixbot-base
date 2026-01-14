const fs = require('fs')

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require('@whiskeysockets/baileys')

const Pino = require('pino')
const qrcode = require('qrcode-terminal')
const { handleMessage } = require('./lib/handler')

/* =============================
   🛡️ ANTI BAD MAC GUARD
   ============================= */
process.on('uncaughtException', err => {
  if (err.message?.includes('Bad MAC')) return
  console.error(err)
})

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')
  const { version } = await fetchLatestBaileysVersion()

  const sock = makeWASocket({
    auth: state,
    version,
    logger: Pino({ level: 'silent' }),
    browser: ['Nix-Bot', 'Chrome', '1.0.0'],
    printQRInTerminal: false
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update

    if (qr) {
      console.log('\n📱 SCAN QR DI BAWAH INI:\n')
      qrcode.generate(qr, { small: true })
    }

    if (connection === 'open') {
      console.log('✅ Bot aktif & terhubung')
    }

    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode
      console.log('⚠️ Koneksi terputus. Reason:', reason)

      if (reason === DisconnectReason.loggedOut) {
        console.log('❌ Logout terdeteksi. Hapus folder session & scan ulang.')
      } else {
        console.log('⏳ Reconnect dalam 5 detik...')
        setTimeout(startBot, 5000)
      }
    }
  })

  sock.ev.on('messages.upsert', async (m) => {
    try {
      await handleMessage(sock, m)
    } catch (e) {
      if (e.message?.includes('Bad MAC')) return
      console.log('❌ Error handler:', e)
    }
  })
}

startBot()
