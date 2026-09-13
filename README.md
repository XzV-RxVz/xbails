<div align="center">

<img src="https://files.catbox.moe/h81roe.jpg" width="500">

<br><br>

# @XzV-RxVz/xbails

**Library WhatsApp ringan berbasis Baileys**

baileys yang dikembangkan dengan fokus pada pengelolaan pesan,
raw message relay, dan beberapa utilitas tambahan.

<br>

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-7C3AED?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Baileys](https://img.shields.io/badge/Baileys-Based-A78BFA?style=for-the-badge)](https://github.com/WhiskeySockets/Baileys)
[![License](https://img.shields.io/badge/License-MIT-9333EA?style=for-the-badge)](LICENSE)

<br>

**XzV-RxVz**

</div>

---

> [!NOTE]
> **Tidak berafiliasi dengan WhatsApp atau Meta.**
> Gunakan library ini secara bertanggung jawab dan ikuti Terms of Service WhatsApp.

## <\> Fitur

**Connection**
- WhatsApp Web connection
- QR authentication
- Pairing code
- Multi-device authentication

**Messaging**
- `sendMessage`
- `relayMessage`
- `noSelfSync`
- Raw message support
- Custom message structure
- Event handling

---

## Installation

### NPM

```bash
npm install @XzV-RxVz/xbails
```

### GitHub

```bash
npm install github:XzV-RxVz/xbails
```

### Import

```js
const makeWASocket =
  require('@XzV-RxVz/xbails').default

const {
  useMultiFileAuthState
} = require('@XzV-RxVz/xbails')
```

---

## Quick Start

```js
const makeWASocket =
  require('@XzV-RxVz/xbails').default

const {
  useMultiFileAuthState
} = require('@XzV-RxVz/xbails')

async function start() {
  const { state, saveCreds } =
    await useMultiFileAuthState('./session')

  const sock = makeWASocket({
    auth: state
  })

  sock.ev.on(
    'creds.update',
    saveCreds
  )

  sock.ev.on(
    'connection.update',
    ({ connection }) => {
      console.log(
        'Connection:',
        connection
      )
    }
  )
}

start()
```

---

## Mengirim Pesan

### Text Message

```js
await sock.sendMessage(
  '628xxxxxxxxxx@s.whatsapp.net',
  {
    text: 'Hello from xbails'
  }
)
```

### Image Message

```js
await sock.sendMessage(
  '628xxxxxxxxxx@s.whatsapp.net',
  {
    image: {
      url: './image.jpg'
    },
    caption: 'Hello from xbails'
  }
)
```

### Video Message

```js
await sock.sendMessage(
  '628xxxxxxxxxx@s.whatsapp.net',
  {
    video: {
      url: './video.mp4'
    },
    caption: 'Hello from xbails'
  }
)
```

---

## Raw Message Relay

`relayMessage()` digunakan untuk mengirim raw message object secara langsung.

```js
await sock.relayMessage(
  target,
  message,
  {
    messageId: message.key.id
  }
)
```

### `noSelfSync`

Untuk mencegah pesan yang di-relay tersinkronisasi kembali sebagai pesan sendiri:

```js
await sock.relayMessage(
  target,
  message,
  {
    messageId: message.key.id,
    noSelfSync: true
  }
)
```

> `noSelfSync: true` digunakan agar pesan yang di-relay tidak disinkronkan kembali ke perangkat pengirim.

---

## Contoh Relay

### Conversation

```js
await sock.relayMessage(
  jid,
  {
    conversation: 'Hello from xbails'
  },
  {
    noSelfSync: true
  }
)
```

### Extended Text

```js
await sock.relayMessage(
  jid,
  {
    extendedTextMessage: {
      text: 'Hello from XzV-RxVz'
    }
  },
  {
    noSelfSync: true
  }
)
```

---

## Events

Semua event tersedia melalui `sock.ev`.

### Connection

```js
sock.ev.on(
  'connection.update',
  ({ connection }) => {
    console.log(
      'Connection:',
      connection
    )
  }
)
```

### Incoming Message

```js
sock.ev.on(
  'messages.upsert',
  ({ messages }) => {
    for (const message of messages) {
      console.log(
        'Incoming:',
        message.message
      )
    }
  }
)
```

### Credentials

```js
sock.ev.on(
  'creds.update',
  saveCreds
)
```

---

## Authentication

Session disimpan secara lokal:

```text
session/
├── creds.json
├── app-state-sync-key-*.json
└── ...
```

Jangan upload folder `session` ke GitHub.

Tambahkan ke `.gitignore`:

```gitignore
session/
node_modules/
.env
```

---

## Contoh Lengkap

```js
const makeWASocket =
  require('@XzV-RxVz/xbails').default

const {
  useMultiFileAuthState
} = require('@XzV-RxVz/xbails')

async function start() {
  const { state, saveCreds } =
    await useMultiFileAuthState('./session')

  const sock = makeWASocket({
    auth: state
  })

  sock.ev.on(
    'creds.update',
    saveCreds
  )

  sock.ev.on(
    'connection.update',
    ({ connection }) => {
      console.log(
        '[ CONNECTION ]',
        connection
      )
    }
  )

  async function sendText(jid, text) {
    return sock.sendMessage(
      jid,
      { text }
    )
  }

  async function relay(jid, message) {
    return sock.relayMessage(
      jid,
      message,
      {
        messageId: message.key.id,
        noSelfSync: true
      }
    )
  }
}

start()
```

---

---

## Credits

<div align="center">

**@JustRxVz**

Main Developer & Maintainer

<br>

Based on:

**Baileys**

</div>

---

## Disclaimer

Project ini dibuat untuk keperluan **development dan educational**.

Developer tidak bertanggung jawab atas penyalahgunaan library,
pembatasan akun, atau pelanggaran Terms of Service WhatsApp.

Gunakan secara bertanggung jawab.

---

## License

Project ini menggunakan **MIT License**.

Lihat [`LICENSE`](LICENSE) untuk informasi lebih lanjut.

---

<div align="center">

<img src="https://img.shields.io/badge/XzV--RxVz-7C3AED?style=for-the-badge">

<br><br>

**@XzV-RxVz/xbails**

<br>

<sub>Built with Baileys · Maintained by @JustRxVz</sub>

</div>
