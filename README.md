# Operator Portfolio

> A brutalist-editorial developer portfolio template. Built by [Akshay Sharma](https://akshaysharma.dev) out of curiosity — then made open source so everyone can benefit.

**Live demo:** [akshaysharma.dev](https://akshaysharma.dev)

[![Sponsor](https://img.shields.io/badge/♥_Sponsor-LucidAkshay-lime?style=flat&labelColor=111)](https://github.com/sponsors/LucidAkshay)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Why this template?

Most portfolio templates are either over-engineered (Three.js, GSAP plugins, complex build steps) or boring. This one is different:

- **Zero frameworks** — plain HTML, CSS, and JavaScript
- **Zero paid plugins** — no GSAP Club, no licensed assets
- **Sub-400ms load** — no canvas, no WebGL, pure DOM
- **Live AI chat** powered by NVIDIA Nemotron (backend-proxied, API key never in browser)
- **Terminal easter egg** — `Ctrl+`` opens a full command-line interface
- **One config file** — change `config.js` to make it yours in under 30 minutes
- **Deploy in 5 minutes** — Vercel or Cloudflare Pages, free tier

---

## Quick Start

### 1. Fork this repository
Click **Fork** on GitHub. Then clone your fork:
```bash
git clone https://github.com/YOUR-USERNAME/operator-portfolio.git
cd operator-portfolio
```

### 2. Personalize — edit `config.js`
Open `config.js`. This is the **only file you need to edit** to make this portfolio yours. Change your name, links, stats, and SEO details. Full instructions are inside the file.

### 3. Add your photo
Place your photo at `./assets/akshay-photo.jpg` (440×520px recommended), then in `config.js` set `photoEnabled: true`.

### 4. Add your resume
Place your resume PDF at `./assets/akshay-sharma-resume.pdf`.

### 5. Set up the AI chat backend
The AI chat requires a free NVIDIA NIM API key:
1. Get a free API key at [build.nvidia.com](https://build.nvidia.com)
2. You'll add this to your deployment environment (never in the code)

### 6. Deploy

**Option A: Cloudflare Pages (recommended)**
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=your-portfolio-name
```
Then in Cloudflare Dashboard → Pages → your project → Settings → Environment Variables, add:
- `NVIDIA_API_KEY` = your key from build.nvidia.com
- `ALLOWED_ORIGIN` = `https://yourdomain.com`

**Option B: Vercel**
```bash
npm install -g vercel
vercel --prod
```
Then in Vercel Dashboard → Settings → Environment Variables, add:
- `NVIDIA_API_KEY`
- `ALLOWED_ORIGIN`

### 7. Connect your domain
- Buy your domain on [Cloudflare Registrar](https://cloudflare.com/products/registrar)
- In your hosting dashboard, add a custom domain

---

## Project Structure

```
operator-portfolio/
├── index.html          ← Main portfolio (all HTML/CSS/JS)
├── config.js           ← ⭐ Edit this to personalize the site
├── api/
│   └── chat.js         ← AI chat backend (Nemotron proxy)
├── assets/
│   ├── your-photo.jpg  ← Add your photo here (440×520px)
│   ├── resume.pdf      ← Add your resume here
│   └── og-image.png    ← Add OG image here (1200×630px)
├── vercel.json         ← Vercel deployment config
├── _routes.json        ← Cloudflare Pages routing
├── README.md
├── CUSTOMIZE.md        ← Full customization guide
└── .gitignore
```

---

## Setting Up GA4 (Google Analytics)

1. Go to [analytics.google.com](https://analytics.google.com) → Create Property
2. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)
3. In `index.html`, find the `GA4 PLACEHOLDER` comment block
4. Uncomment the two `<script>` tags
5. Replace both instances of `G-XXXXXXXXXX` with your Measurement ID

---

## Switching the AI Model

The template uses NVIDIA Nemotron by default. To switch, edit `api/chat.js`:

```js
// NVIDIA Nemotron (default)
const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', ...);
model: 'nvidia/nemotron-3-super-49b-v1'

// To use Anthropic Claude instead:
// 1. Change URL to: https://api.anthropic.com/v1/messages
// 2. Change auth header to: 'x-api-key': process.env.ANTHROPIC_API_KEY
// 3. Change env var name to ANTHROPIC_API_KEY

// To use OpenAI instead:
// 1. Change URL to: https://api.openai.com/v1/chat/completions
// 2. Change auth header to: 'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
// 3. model: 'gpt-4o-mini'
```

---

## Git Setup (VS Code — for beginners)

If you're new to Git, here's how to set this up:

### First time setup
1. Install [VS Code](https://code.visualstudio.com)
2. Install [Git](https://git-scm.com/downloads)
3. Open VS Code → Terminal → New Terminal

### Initialize your repository
```bash
# Navigate to your project folder
cd path/to/operator-portfolio

# Initialize git (if you cloned, skip this step)
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio setup"

# Create a repo on GitHub.com, then push:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### Daily workflow (updating your portfolio)
```bash
# After making changes:
git add .
git commit -m "Update bio and add new project"
git push
```
Cloudflare Pages and Vercel automatically redeploy when you push to main.

---

## Customization Reference

| What to change | Where to change it |
|---|---|
| Your name, location, links | `config.js` |
| Google Analytics ID | `config.js` → `gaId` + uncomment block in `index.html` |
| Hero headline | `index.html` → search `hero-hl` |
| Bio text | `index.html` → `about-body` section |
| Project descriptions | `index.html` → `#work` section |
| Experience/timeline | `index.html` → `#exp` section |
| Terminal commands | `index.html` → `const CMDS = {...}` |
| AI context (what the AI knows about you) | `api/chat.js` → `const CONTEXT` |
| Color scheme | `index.html` → `:root` CSS variables |
| Photo | `assets/akshay-photo.jpg` + `photoEnabled: true` in config.js |

See [CUSTOMIZE.md](CUSTOMIZE.md) for the complete guide.

---

## License

MIT — use it, fork it, make it yours. Credit appreciated but not required.

If this template helped you, consider [sponsoring](https://github.com/sponsors/LucidAkshay) to keep the work going.

---

*Built by [Akshay Sharma](https://akshaysharma.dev) — Senior BI Analyst & AI Application Builder*
