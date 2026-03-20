/**
 * ╔═══════════════════════════════════════════════════════════╗
 * ║           OPERATOR PORTFOLIO — CONFIG FILE               ║
 * ║   This is the ONLY file you need to edit to              ║
 * ║   customize this portfolio for yourself.                 ║
 * ║                                                          ║
 * ║   Instructions:                                          ║
 * ║   1. Replace every value below with your own info        ║
 * ║   2. Save the file                                       ║
 * ║   3. Open index.html in a browser — done.                ║
 * ║                                                          ║
 * ║   Full guide: CUSTOMIZE.md                               ║
 * ╚═══════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  /* ─────────────────────────────
     PERSONAL INFO
  ───────────────────────────── */
  name: "Akshay Sharma",
  handle: "LucidAkshay",             // GitHub username
  tagline: "Senior BI Analyst & AI Application Builder",
  headline: "Senior BI Analyst & AI Application Builder | Power Platform, n8n, GenAI",
  pronouns: "He/Him",
  location: "Jalandhar, Punjab — India",
  locationFull: "Jalandhar, Punjab, India",
  country: "IN",

  /* ─────────────────────────────
     CONTACT & LINKS
  ───────────────────────────── */
  email: "akshay@lucidakshay.dev",     // primary — personal outreach
  emailHire: "hire@lucidakshay.dev",        // alias — recruiters & job leads
  linkedin: "https://www.linkedin.com/in/LucidAkshay/",
  github: "https://github.com/LucidAkshay",
  sponsor: "https://github.com/sponsors/LucidAkshay",
  kavachRepo: "https://github.com/LucidAkshay/kavach",
  templateRepo: "https://github.com/LucidAkshay/operator-portfolio",
  amrutya: "https://amrutyaessence.com",

  /* ─────────────────────────────
     ASSETS
     Place files in ./assets/ folder
  ───────────────────────────── */
  photo: "./assets/photo.jpg",    // 440×520px portrait recommended
  resume: "./assets/resume.pdf",
  ogImage: "./assets/og-preview.png",

  /* ─────────────────────────────
     SEO & SITE
  ───────────────────────────── */
  siteUrl: "https://lucidakshay.dev",
  siteTitle: "Akshay Sharma — Senior BI Analyst & AI Application Builder",
  siteDesc: "Akshay Sharma — 14+ years experience. Senior BI Analyst at Ensono. Creator of Kavach AI EDR, Sarathi, Kamya. Power Platform, n8n, GenAI. Available for enterprise consulting, mentoring, and collaboration.",
  twitterHandle: "@Akshay_Dvlpr",              // ← UPDATE if you have Twitter/X

  /* ─────────────────────────────
     HERO STATS
  ───────────────────────────── */
  stats: {
    years: { value: "14+", label: "Years Experience" },
    gain: { value: "40%", label: "Productivity Gain" },
    associates: { value: "2900+", label: "Associates Served" },
    products: { value: "4", label: "Products Built" },
  },

  /* ─────────────────────────────
     HERO TAGS (shown below description)
  ───────────────────────────── */
  heroTags: ["Power Platform", "n8n", "GenAI", "AI Agents", "Founder"],

  /* ─────────────────────────────
     HERO DESCRIPTION
  ───────────────────────────── */
  heroDesc: `<strong>Senior BI Analyst at Ensono</strong> — architecting Power Platform solutions for C-suite Finance, delivering <strong>40% productivity gains</strong> across 2,900+ global associates. On the side: building <strong>Kavach</strong> (AI agent EDR), <strong>Sarathi</strong> (local AI), <strong>Kamya</strong> (AI image generation), and running <strong>Amrutya Essence™</strong> (luxury candles).`,

  /* ─────────────────────────────
     PROJECTS
     status: "live" | "dev" | "tm"
  ───────────────────────────── */
  projects: [
    {
      id: "kavach",
      type: "AI Security — Open Source",
      name: "Kavach",
      status: "live",
      statusLabel: "● Live",
      featured: true,
      desc: "Tactical AI Workspace Monitor and Endpoint Detection & Response system. Kavach watches your AI agents — detecting rogue behavior, unauthorized access, and anomalous tool usage before they become incidents. Because if you're building AI agents, you also need to contain them.",
      tags: ["AI Agents", "EDR", "Security", "Python", "Open Source"],
      link: "https://github.com/LucidAkshay/kavach",
      linkText: "View on GitHub",
      linkStyle: "lime",
    },
    {
      id: "sarathi",
      type: "Local AI Agent — Personal Project",
      name: "Sarathi",
      status: "dev",
      statusLabel: "⚙ In Dev",
      featured: false,
      desc: "A customized local AI agent — running entirely on-device, no cloud dependency, no data leaving your machine. Complex multi-step tasks with genuine context awareness.",
      tags: ["Local LLM", "n8n", "Python", "Agents"],
      link: "#",
      linkText: "Coming Soon",
      linkStyle: "default",
    },
    {
      id: "kamya",
      type: "AI Image Generation — Platform",
      name: "Kamya",
      status: "dev",
      statusLabel: "⚙ In Dev",
      featured: false,
      desc: "AI image generation platform built on ComfyUI workflows and LoRA training. Custom model fine-tuning, workflow automation, and a monetization layer — from PRD to production.",
      tags: ["ComfyUI", "LoRA", "Python", "Product"],
      link: "#",
      linkText: "Coming Soon",
      linkStyle: "default",
    },
    {
      id: "amrutya",
      type: "Premium Brand — E-Commerce",
      name: "Amrutya Essence™",
      status: "tm",
      statusLabel: "® TM",
      featured: false,
      desc: "Pure. Elegant. Timeless. A Trade Mark registered luxury candle brand — hand-poured scented candles, concrete jar vessels, Valentine Collection, Arabian Oudh. Built end to end.",
      tags: ["Brand Design", "E-Commerce", "Candles", "Trademark"],
      link: "https://amrutyaessence.com",
      linkText: "Visit Store",
      linkStyle: "gold",
    },
  ],

  /* ─────────────────────────────
     EXPERIENCE
     Only show the 2–3 most relevant roles
  ───────────────────────────── */
  experience: [
    {
      company: "Ensono",
      role: "Senior Business Intelligence Analyst",
      sub: "Data & Strategy → FP&A → Finance",
      period: "Jan 2024 — Present",
      duration: "2+ years",
      location: "Pune, Maharashtra · Hybrid",
      current: true,
      bullets: [
        "Architected Power Apps + Power BI + Power Automate for C-suite Finance — <strong>40% productivity gains</strong> across 2,900+ global associates",
        "Developed <strong>20+ real-time Power BI dashboards</strong> transforming FP&A decision-making",
        "Led Salesforce data governance: <strong>cleaned 50K+ records</strong> → 98% accuracy",
        "Established Power BI Center of Excellence — trained 50+ employees",
        "Built Finance SharePoint + Copilot chatbot → <strong>35% reduction</strong> in support queries",
      ],
      tags: ["Power BI", "Power Apps", "Power Automate", "DAX", "SharePoint", "Salesforce", "Copilot"],
    },
    {
      company: "Oracle",
      role: "Business Analyst — COE",
      sub: "Processes, Systems & Tools, Policies · GTM",
      period: "Oct 2019 — Dec 2022",
      duration: "3 yrs 3 mos",
      location: "New Delhi · Remote",
      current: false,
      bullets: [
        "Led JAPAC-wide process analysis — mapped 25+ workflows with global adoption",
        "Authored 40+ BRDs/FRDs for Sales Technology deployments across the region",
        "Achieved <strong>90%+ user adoption</strong> through strategic change management",
        "Delivered C-level presentations influencing strategic roadmaps",
      ],
      tags: ["BRD/FRD", "JAPAC", "Change Management", "Salesforce", "Process Mapping"],
    },
  ],

  /* ─────────────────────────────
     CERTIFICATIONS
     type: "google" | "microsoft" | "ensono" | "be10x" | "default"
  ───────────────────────────── */
  certifications: [
    { type: "google", issuer: "Google", name: "Generative AI for Educators Certificate", date: "Dec 2025", active: true },
    { type: "google", issuer: "Google", name: "Gemini Certified Educator", date: "Dec 2025 · Expires Dec 2028", active: true },
    { type: "google", issuer: "Google", name: "Prompt Design in Vertex AI Skill Badge", date: "Dec 2025", active: true },
    { type: "be10x", issuer: "Be10x", name: "AI for Techies — Python Using AI Workshop", date: "Jun 2025", active: false },
    { type: "ensono", issuer: "Ensono", name: "India Spotlight Award — July 2024", date: "Aug 2024", active: false },
    { type: "microsoft", issuer: "Microsoft", name: "MOS: Excel Expert (Excel and Excel 2019)", date: "Jan 2020", active: false },
  ],

  /* ─────────────────────────────
     AWARDS
  ───────────────────────────── */
  awards: [
    { icon: "🏆", name: "India Spotlight Award", by: "Ensono · Jul 2024", note: "Going Above & Beyond" },
    { icon: "🔥", name: "Passion Award × 2", by: "VP + Director FP&A, Ensono", note: "Aug + Sep 2023" },
    { icon: "💡", name: "Innovator Award", by: "JAPAC VP, Oracle", note: "Mar 2021" },
    { icon: "🚀", name: "Rookie of the Quarter", by: "Oracle · Jan 2020", note: "\"Quick learner, keen on ideas\"" },
  ],

  /* ─────────────────────────────
     ABOUT BIO
     Use <em> for highlighted text
  ───────────────────────────── */
  bio: [
    `At <em>Ensono</em>, I architect Power Platform solutions for C-suite Finance — 20+ Power BI dashboards, automated workflows, a Power BI Center of Excellence serving 50+ employees, and a Copilot-powered chatbot that cut support queries by 35%. Before Ensono, three years at <em>Oracle</em> leading JAPAC-wide process analysis, authoring 40+ BRDs, and getting named <em>Innovator of the Year</em> by the JAPAC VP.`,
    `Outside the day job: I build things. <em>Kavach</em> started because I was building AI agents and realized nobody had built a proper EDR for them. <em>Sarathi</em> is my local agent — running entirely on-device, no API calls, no cloud. <em>Kamya</em> explores AI image generation at the boundary of ComfyUI and custom LoRA training.`,
    `And then there's <em>Amrutya Essence™</em> — a Trade Mark registered luxury candle brand built from the ground up. Because product development, supply chain thinking, and brand identity are the same mental model in a different medium.`,
  ],

  /* ─────────────────────────────
     ABOUT STATS
  ───────────────────────────── */
  aboutStats: [
    { value: "14+", label: "Years Experience" },
    { value: "20+", label: "BI Dashboards" },
    { value: "50K+", label: "Records Cleaned" },
    { value: "98%", label: "Data Accuracy" },
  ],

  /* ─────────────────────────────
     AWARD CHIPS (shown in About section)
  ───────────────────────────── */
  awardChips: [
    { text: "🏆 India Spotlight Award 2024", hot: true },
    { text: "✨ Spotlight of Month, Sep 2023", hot: false },
    { text: "🔥 Passion Award × 2 (VP + Director)", hot: false },
    { text: "💡 Innovator — Oracle JAPAC VP", hot: false },
    { text: "🚀 Rookie of the Quarter — Oracle", hot: false },
    { text: "🤝 Collaboration Award × 2", hot: false },
    { text: "🎯 Reliability Award", hot: false },
  ],

  /* ─────────────────────────────
     INTERNATIONAL TARGETS
  ───────────────────────────── */
  relocationTargets: [
    { flag: "🇩🇪", country: "Germany" },
    { flag: "🇳🇱", country: "Netherlands" },
    { flag: "🇨🇦", country: "Canada" },
    { flag: "🇸🇬", country: "Singapore" },
    { flag: "🇦🇪", country: "UAE" },
  ],

  /* ─────────────────────────────
     THEME COLORS
     Only change these if you want a different color scheme
  ───────────────────────────── */
  colors: {
    accent: "#FF3B1F",   // red — primary CTAs
    lime: "#B8FF26",   // green — active/live/sponsor
    gold: "#F4C73E",   // gold — awards/certifications
    blue: "#4F8EF7",   // blue — enterprise/Microsoft
  },

  /* ─────────────────────────────
     AI CHAT
     Context is auto-generated from the data above.
     Only change this if you want to add custom instructions.
  ───────────────────────────── */
  aiCustomInstructions: `Respond in 2–4 sentences, concisely and confidently. Speak in first person where natural. Be technically accurate, not corporate-speak. If asked about early career (logistics, Zee Media), briefly acknowledge but redirect to BI/AI focus. Highlight the dual identity: enterprise BI professional AND independent AI product builder.`,

};

// Export for use in Node.js (api/chat.js) and browser (index.html)
if (typeof module !== "undefined") module.exports = CONFIG;
