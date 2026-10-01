# 🎂 AKSHAY VERMA v17.0 — Developer Birthday Website

A custom, high-performance, interactive cyberpunk developer portfolio birthday experience built by an elder brother (**Sonu**) for his younger brother (**Akshay Verma / Andua**) on turning **17**.

---

## 🚀 Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion** (smooth layout animations & transitions)
- **Lucide React** (developer UI icons)
- **Canvas Confetti** (custom confetti particle cannons & fireworks)
- **Web Audio API** (built-in keystroke clicks, candle blow sound, and sound effects)

---

## 📁 Project Structure

```text
c:/AkshayBday/
├── public/
│   ├── images/             <-- Put your photo files here (akshay-01.jpg ... akshay-08.jpg)
│   │   └── README.md
│   └── audio/              <-- Put optional birthday.mp3 here
│       └── README.md
├── src/
│   ├── components/
│   │   ├── Cake3D.jsx      <-- Interactive CSS Birthday Cake & candle blowout
│   │   ├── CyberCard.jsx   <-- Glowing tech cards with neon corner accents
│   │   ├── ImageModal.jsx  <-- Lightbox gallery modal with photo preview
│   │   ├── Navbar.jsx      <-- Fixed top navigation bar & music toggle
│   │   └── TerminalWindow.jsx <-- Reusable macOS/Linux terminal frame
│   ├── data/
│   │   └── config.js       <-- CENTRAL CONFIG: Edit text, profile specs, journey, commands & letter
│   ├── sections/
│   │   ├── BootScreen.jsx  <-- Screen 1: Terminal boot sequence
│   │   ├── HeroReveal.jsx  <-- Screen 2: Birthday reveal & confetti
│   │   ├── ProfileSection.jsx <-- Screen 3: Brother spec v17.0
│   │   ├── JourneySection.jsx <-- Screen 4: Timeline & "Pet dard ho raha hai" excuse
│   │   ├── GallerySection.jsx <-- Screen 5: Photo memory gallery & placeholders
│   │   ├── CodeSection.jsx    <-- Screen 6: brother.js VS Code window
│   │   ├── InteractiveTerminalSection.jsx <-- Screen 7: CLI with easter eggs
│   │   ├── MessageSection.jsx <-- Screen 8: Personal letter from older brother
│   │   ├── CakeSection.jsx    <-- Screen 9: Candle blowout ceremony
│   │   └── FinalSection.jsx   <-- Screen 10: Cinematic night-sky final launch
│   ├── utils/
│   │   ├── confetti.js     <-- Confetti & fireworks engine
│   │   └── soundEffects.js <-- Web Audio synthesizer & sound engine
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
└── package.json
```

---

## 💻 How to Run Locally

1. Open your terminal in `c:\AkshayBday`:
   ```bash
   cd c:\AkshayBday
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL (usually `http://localhost:5173`) in your browser.

---

## 📸 How to Add Real Photos

1. Navigate to `public/images/`.
2. Add your photos and name them:
   - `akshay-01.jpg`
   - `akshay-02.jpg`
   - `akshay-03.jpg`
   - `akshay-04.jpg`
   - `akshay-05.jpg`
   - `akshay-06.jpg`
   - `akshay-07.jpg`
   - `akshay-08.jpg`
3. Refresh the website — your photos will automatically appear in the gallery!

---

## 🎵 How to Add Background Music (Optional)

1. Drop any MP3 track into `public/audio/`.
2. Name it `birthday.mp3`.
3. Use the `🔊 AUDIO` button on the top right navigation bar to play/pause.

---

## 🛠️ How to Customize Content

All personal text, timeline events, Easter eggs, code snippets, and brother specs are stored in **`src/data/config.js`**.

- To edit the **name**, **nickname**, **age**, or **inside joke**: edit `BROTHER_CONFIG.name`, `BROTHER_CONFIG.nickname`, etc.
- To edit the **emotional letter**: edit `BROTHER_CONFIG.personalMessage`.
- To add custom **terminal commands**: edit `BROTHER_CONFIG.terminalCommands`.

---

## 🌐 How to Deploy to Vercel (Free & Instant)

### Option 1: Vercel CLI (Fastest)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root directory.
3. Follow the prompts. Your live link (e.g. `akshay-birthday.vercel.app`) will be ready in 30 seconds!

### Option 2: Vercel Dashboard (GitHub)
1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository — Vercel will auto-detect Vite.
4. Click **Deploy**!
