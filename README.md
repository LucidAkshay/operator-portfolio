# Operator Portfolio

> A brutalist editorial developer portfolio template. Built by [Akshay Sharma](https://lucidakshay.dev) out of curiosity, then made open source so everyone can benefit.

**Live demo:** [lucidakshay.dev](https://lucidakshay.dev)

[![Sponsor](https://img.shields.io/badge/♥_Sponsor-LucidAkshay-ea4aaa?style=flat&labelColor=111)](https://github.com/sponsors/LucidAkshay)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=flat&logo=reddit&logoColor=white)](https://www.reddit.com/user/AkshayCodes/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](#)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](#)

## Why this template?

Most portfolio templates are either over engineered with heavy WebGL and complex build steps, or they look like basic corporate brochures. This template takes a different path:

* **Zero frameworks:** plain HTML, CSS, and JavaScript
* **Zero paid plugins:** no GSAP Club, no licensed assets required
* **Sub 400ms load times:** no canvas rendering, pure DOM execution
* **Live AI chat:** serverless backend integration keeps your API keys secure
* **Terminal easter egg:** pressing `Ctrl + \`` opens a fully functional command line interface
* **One config file:** edit `config.js` to completely personalize the site in 10 minutes
* **Instant Deployment:** optimized for Vercel serverless edge networks

## Quick Start

### 1. Fork and Clone
Click **Fork** on GitHub to copy the repository to your account. Then clone your fork to your local machine:
```bash
git clone https://github.com/YOUR_USERNAME/operator-portfolio.git
cd operator-portfolio
```

### 2. Personalize Your Data
Open the `config.js` file. This is the central brain of the portfolio. You do not need to touch the HTML to update your resume, projects, or bio. Update your name, links, project details, and SEO metadata directly inside this file.

### 3. Add Your Assets
* Place your profile photo at `./assets/photo.jpg` (440×520px recommended)
* Place your resume PDF at `./assets/resume.pdf`
* Replace the Open Graph preview image at `./assets/og-preview.png`

### 4. Deploy to Vercel
This project uses a serverless backend for the AI chat, making Vercel the optimal deployment platform.
```bash
npm install -g vercel
vercel --prod
```

### 5. Configure the AI Engine
The AI chat requires a completion endpoint. You can use NVIDIA NIM, OpenAI, Anthropic, or any provider. Go to your Vercel Dashboard, select your project, navigate to Settings, and add these Environment Variables:

* `AI_API_KEY` : Your secret provider API key
* `AI_API_URL` : The completion endpoint URL (example: `https://integrate.api.nvidia.com/v1/chat/completions`)
* `AI_MODEL_ID` : The specific model you are calling (example: `nvidia/nemotron-3-super-49b-v1`)
* `ALLOWED_ORIGIN` : Your live domain name to prevent CORS abuse

**Important:** After adding these variables, you must click **Redeploy** in Vercel so the backend can access them.

## Native Google Analytics 4

Tracking is built directly into the configuration. You do not need to copy and paste script tags into the HTML document.

1. Go to [analytics.google.com](https://analytics.google.com) and create a new Web Data Stream.
2. Copy your **Measurement ID** (it looks like `G-XXXXXXXXXX`).
3. Open `config.js` and paste the ID into the `googleAnalyticsId` variable. The site will handle the rest dynamically.

## Project Structure

```text
operator-portfolio/
├── index.html          ← Main portfolio interface structure
├── style.css           ← Core styling and theme tokens
├── script.js           ← Interactivity, terminal, and render logic
├── config.js           ← ⭐ Edit this file to completely personalize the site
├── api/
│   └── chat.js         ← Serverless backend proxy for the AI chat
├── assets/
│   ├── photo.jpg       ← Your profile picture
│   ├── resume.pdf      ← Your downloadable resume
│   └── og-preview.png  ← Social media preview graphic
├── vercel.json         ← Vercel deployment configuration
├── README.md
└── LICENSE
```

## Git Setup for Beginners

If you are new to version control and using VS Code, follow this workflow to update your live site.

**First time initialization:**
```bash
cd path/to/operator-portfolio
git init
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**Daily update workflow:**

Whenever you change your `config.js` to add a new project or update your resume, run these commands to push the updates. Vercel will automatically detect the push and redeploy your site.
```bash
git add .
git commit -m "update: added new project to config"
git push
```

## Customization Reference Map

| What you want to change | Where to change it |
| :--- | :--- |
| Your name, location, and social links | `config.js` |
| Google Analytics Measurement ID | `config.js` |
| Projects, Experience, Certs, and Prompts | `config.js` |
| AI system prompt and context | `api/chat.js` |
| Color scheme tokens | `style.css` (inside `:root`) |
| Core structural layout | `index.html` |
| Terminal commands and interactivity | `script.js` (search for `CMDS`) |

## License

MIT License. You are free to use, modify, and deploy this code for your personal brand.

If this architecture helped you stand out or land a role, consider sponsoring the project to support future open source development.

Built by **Akshay Sharma** • Senior BI Analyst & AI Application Builder based in Jalandhar, Punjab.