# 🤖 NixBOT Bot (WhatsApp Bot)

Akane Bot adalah bot WhatsApp berbasis **Node.js** menggunakan library  
**@whiskeysockets/baileys**.  
Project ini cocok untuk belajar maupun dikembangkan lebih lanjut.

---

## 📦 Fitur Dasar
- Koneksi WhatsApp via QR Code
- Handler command terpisah
- Database JSON sederhana
- Logging terminal rapi
- Support timezone

---

## 📂 Struktur Project
```
nixbot-base/
├── index.js
├── package.json
├── lib/
│   └── handler.js
└── database/
    └── users.json
```

---

# 🛠️ Persyaratan Umum
- **Node.js v16 atau Yang lebih baru**
- **npm**
- Koneksi internet stabil

Cek versi:
```bash
node -v
npm -v
```

---

# 📱 Instalasi di TERMUX (Android)

### 1. Update & Install Package Dasar
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
```

Cek:
```bash
node -v
npm -v
```

---

### 2. Clone / Extract Project
```bash
git clone https://github.com/RhastaKroco/nixbot-base.git
cd nixbot-base
```

Atau jika dari zip:
```bash
unzip nixbot-base.zip
cd nixbot-base
```

---

### 3. Install Dependency Bot
```bash
npm install
```

Jika error:
```bash
npm install --force
```

---

### 4. Jalankan Bot
```bash
npm start
```
atau
```bash
node index.js
```

---

### 5. Scan QR Code
- QR muncul di terminal
- Scan dengan WhatsApp
- Bot aktif ✅

---

# 🖥️ Instalasi di VPS / Ubuntu / Linux

### 1. Update Sistem
```bash
sudo apt update && sudo apt upgrade -y
```

---

### 2. Install Dependency Sistem
```bash
sudo apt install git curl ffmpeg -y
```

---

### 3. Install Node.js (Disarankan v18)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y
```

Cek:
```bash
node -v
npm -v
```

---

### 4. Clone Project
```bash
git clone <repo-kamu>
cd nixbot-base
```

---

### 5. Install Dependency Bot
```bash
npm install
```

---

### 6. Jalankan Bot
```bash
npm start
```

---

### 7. Jalankan di Background (Opsional)
```bash
npm install -g pm2
pm2 start index.js --name akane-bot
pm2 save
pm2 startup
```

---

## 📚 Dependency yang Digunakan
- **@whiskeysockets/baileys** → koneksi WhatsApp
- **axios** → HTTP request
- **chalk** → warna terminal
- **qrcode-terminal** → QR login
- **pino** → logger
- **fs-extra** → file system
- **moment-timezone** → waktu
- **node-fetch** → fetch API
- **lodash** → helper
- **fluent-ffmpeg** → media
- **sharp** → image processing

---

## 🧪 Development Mode
```bash
npm install -g nodemon
nodemon index.js
```

---

## ❗ Troubleshooting

**QR tidak muncul**
- Hapus folder session/auth (jika ada)
- Jalankan ulang bot

**Error sharp / ffmpeg**
- Pastikan ffmpeg sudah terinstall
- Gunakan Node.js versi LTS

**Module not found**
```bash
npm install
```

---

## ⚠️ Catatan Penting
- Gunakan bot dengan bijak
- Jangan spam
- Risiko banned ditanggung pengguna

---

## 👤 Author
**RhastaKroco**

---
⭐ Silakan dikembangkan & dimodifikasi sesuai kebutuhan
    └── users.json
```

---

# 🛠️ Persyaratan Umum
- **Node.js v16 atau v18**
- **npm**
- Koneksi internet stabil

Cek versi:
```bash
node -v
npm -v
```

---

# 📱 Instalasi di TERMUX (Android)

### 1. Update & Install Package Dasar
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
```

Cek:
```bash
node -v
npm -v
```

---

### 2. Clone / Extract Project
```bash
git clone <repo-kamu>
cd nixbot-base
```

Atau jika dari zip:
```bash
unzip nixbot-base.zip
cd nixbot-base
```

---

### 3. Install Dependency Bot
```bash
npm install
```

Jika error:
```bash
npm install --force
```

---

### 4. Jalankan Bot
```bash
npm start
```
atau
```bash
node index.js
```

---

### 5. Scan QR Code
- QR muncul di terminal
- Scan dengan WhatsApp
- Bot aktif ✅

---

# 🖥️ Instalasi di VPS / Ubuntu / Linux

### 1. Update Sistem
```bash
sudo apt update && sudo apt upgrade -y
```

---

### 2. Install Dependency Sistem
```bash
sudo apt install git curl ffmpeg -y
```

---

### 3. Install Node.js (Disarankan v18)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y
```

Cek:
```bash
node -v
npm -v
```

---

### 4. Clone Project
```bash
git clone <repo-kamu>
cd nixbot-base
```

---

### 5. Install Dependency Bot
```bash
npm install
```

---

### 6. Jalankan Bot
```bash
npm start
```

---

### 7. Jalankan di Background (Opsional)
```bash
npm install -g pm2
pm2 start index.js --name akane-bot
pm2 save
pm2 startup
```

---

## 📚 Dependency yang Digunakan
- **@whiskeysockets/baileys** → koneksi WhatsApp
- **axios** → HTTP request
- **chalk** → warna terminal
- **qrcode-terminal** → QR login
- **pino** → logger
- **fs-extra** → file system
- **moment-timezone** → waktu
- **node-fetch** → fetch API
- **lodash** → helper
- **fluent-ffmpeg** → media
- **sharp** → image processing

---

## 🧪 Development Mode
```bash
npm install -g nodemon
nodemon index.js
```

---

## ❗ Troubleshooting

**QR tidak muncul**
- Hapus folder session/auth (jika ada)
- Jalankan ulang bot

**Error sharp / ffmpeg**
- Pastikan ffmpeg sudah terinstall
- Gunakan Node.js versi LTS

**Module not found**
```bash
npm install
```

---

## ⚠️ Catatan Penting
- Gunakan bot dengan bijak
- Jangan spam
- Risiko banned ditanggung pengguna

---

## 👤 Author
**rhast kroco**

---
⭐ Silakan dikembangkan & dimodifikasi sesuai kebutuhan
