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

  googleAnalyticsId: "G-QL4VSSBNZ5", // TODO: Replace with your own Google Analytics ID

  name: "Akshay Sharma",
  handle: "LucidAkshay",
  tagline: "Senior BI Analyst & AI Application Builder",
  headline: "Senior BI Analyst & AI Application Builder | Power Platform, n8n, GenAI",
  pronouns: "He/Him",
  location: "Jalandhar, Punjab — India",
  locationFull: "Jalandhar, Punjab, India",
  country: "IN",

  email: "akshay@lucidakshay.dev",
  emailHire: "hire@lucidakshay.dev",
  linkedin: "https://www.linkedin.com/in/akshaysharmaensono/",
  github: "https://github.com/LucidAkshay",
  sponsor: "https://github.com/sponsors/LucidAkshay",
  kavachRepo: "https://github.com/LucidAkshay/kavach",
  templateRepo: "https://github.com/LucidAkshay/operator-portfolio",
  amrutya: "https://amrutyaessence.com",

  photo: "./assets/photo.jpg",
  ogImage: "./assets/og-preview.png",

  siteUrl: "https://lucidakshay.dev",
  siteTitle: "Akshay Sharma — Senior BI Analyst & AI Application Builder",
  siteDesc: "Akshay Sharma — 14+ years experience. Senior BI Analyst at Ensono. Creator of Kavach AI EDR, Sarathi, Kamya. Power Platform, n8n, GenAI. Available for enterprise consulting, mentoring, and collaboration.",
  twitterHandle: "@Akshay_Dvlpr",

  stats: {
    years: { value: "14+", label: "Years Experience" },
    gain: { value: "40%", label: "Productivity Gain" },
    associates: { value: "2900+", label: "Associates Served" },
    products: { value: "5", label: "Products Built" },
  },

  heroTags: ["Power Platform", "n8n", "GenAI", "AI Agents", "Founder"],

  heroDesc: `<strong>Senior BI Analyst at Ensono</strong> — architecting Power Platform solutions for executive Finance teams, delivering <strong>40% productivity gains</strong> across 2,900+ global associates. On the side: building <strong>Kavach</strong> (AI agent EDR), <strong>Sarathi</strong> (local AI), <strong>Kamya</strong> (AI image generation), running <strong>Amrutya Essence™</strong> (luxury candles), and open sourcing <strong>Operator Portfolio</strong> (this site).`,

  pageSections: [
    { id: "services", num: "01", title: "Work With Me", tmpl: "tmpl-services" },
    { id: "work", num: "02", title: "Projects", containerId: "projects-grid", containerClass: "pgrid" },
    { id: "about", num: "03", title: "About", tmpl: "tmpl-about", bg: "var(--s1)" },
    { id: "certs", num: "04", title: "Certifications & Recognition", containerId: "certs-grid", containerClass: "certs-grid", extraHtml: '<div class="awards-row" id="awards-row" style="margin-top:2px"></div>' },
    { id: "ask", num: "05", title: "Ask Akshay — AI", tmpl: "tmpl-ask", bg: "var(--s1)" },
    { id: "exp", num: "06", title: "Experience", containerId: "timeline", containerClass: "tl" },
    { id: "contact", num: "07", title: "Let us Work Together", tmpl: "tmpl-contact", bg: "var(--s1)" }
  ],

  navLinks: [
    { href: "#work", label: "WORK" },
    { href: "#about", label: "ABOUT" },
    { href: "#certs", label: "CERTS" },
    { href: "#ask", label: "ASK AI" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#contact", label: "CONTACT" }
  ],

  bootSequence: [
    "$ initializing akshay.dev <span class=\"inf\">v3.0</span>",
    "&gt; identity verified: 14+ years professional experience <span class=\"ok\">[✓]</span>",
    "&gt; kavach edr — ai workspace monitor <span class=\"ok\">[ACTIVE]</span>",
    "&gt; sarathi + kamya <span class=\"warn\">[IN DEVELOPMENT]</span>",
    "&gt; amrutya essence™ storefront <span class=\"ok\">[LIVE]</span>",
    "&gt; power platform · n8n · genai <span class=\"ok\">[READY]</span>",
    "&gt; rendering operator interface <span class=\"inf\">standby...</span>"
  ],

  aiChips: [
    "What is your tech stack?",
    "Tell me about Kavach.",
    "Are you open to relocation?",
    "Summarize your Power BI experience."
  ],

  terminalHints: [
    "hire", "mentor", "enterprise", "collaborate", "kavach", "download"
  ],

  ticker: [
    "14+ years experience ◆ senior bi analyst at ensono",
    "kavach ◆ ai workspace edr · open source",
    "sarathi ◆ local ai agent · in development",
    "kamya ◆ ai image platform · in development",
    "amrutya essence™ ◆ premium luxury candles",
    "power bi · power apps · power automate ◆ microsoft power platform",
    "available for enterprise · mentoring · collaboration ◆ international roles",
  ],

  services: [
    {
      cardClass: "enterprise",
      icon: "🏢",
      audience: "For Enterprises",
      title: "BI & Analytics",
      desc: "You need data systems that actually change decisions — not dashboards nobody opens. I build Power Platform solutions for Finance, Operations, and executive leadership.",
      offers: [
        "Power BI dashboards & Centers of Excellence",
        "Power Apps + Automate workflow systems",
        "Salesforce data governance",
        "Copilot & AI chatbot integration",
      ],
      ctaText: "Start a Project →",
      ctaLink: "#contact",
    },
    {
      cardClass: "founders",
      icon: "🚀",
      audience: "For Founders",
      title: "AI Product Build",
      desc: "You have an idea for an AI product. I can help you go from PRD to production — architecture, automation, monetization strategy. I have done it with Kavach, Sarathi, and Kamya.",
      offers: [
        "AI agent architecture & automation (n8n)",
        "Product strategy & monetization",
        "Backend automation pipelines",
        "GenAI integration & prompt engineering",
      ],
      ctaText: "Let us Build →",
      ctaLink: "#contact",
    },
    {
      cardClass: "developers",
      icon: "👨‍💻",
      audience: "For Developers",
      title: "Open Source + Pair",
      desc: "Kavach is open source and actively developed. Contribute, fork, or just use it. Open to pairing on AI security tooling, EDR concepts, or data pipeline architecture.",
      offers: [
        "Contribute to Kavach (AI EDR)",
        "Pair on AI agent monitoring",
        "Code review & architecture feedback",
      ],
      ctaText: "GitHub →",
      ctaLink: "https://github.com/LucidAkshay/kavach",
      ctaExternal: true,
    },
    {
      cardClass: "mentees",
      icon: "🎓",
      audience: "For Career Seekers",
      title: "Mentoring & Guidance",
      desc: "Transitioning into BI, data analytics, or AI? I have been where you are — from logistics to Oracle to Ensono, building skills across domains. Let me help you navigate it.",
      offers: [
        "BI career path planning & guidance",
        "Resume and LinkedIn profile reviews",
        "Power Platform learning roadmaps",
        "Breaking into AI / GenAI as an analyst",
        "Interview prep for data & BI roles",
      ],
      ctaText: "Book a Session →",
      ctaLink: "#contact",
    },
    {
      cardClass: "collab",
      icon: "🧠",
      audience: "For Collaborators & Ideators",
      title: "Brainstorm & Build",
      desc: "Have an idea that spans data + AI + product? Let us think through it together. Cross domain conversations, new product concepts, business problems, fresh perspective.",
      offers: [
        "Product concept validation & refinement",
        "Data strategy for new ventures",
        "AI product roadmap collaborative development",
        "Joint exploration of AI use cases",
      ],
      ctaText: "Start a Conversation →",
      ctaLink: "#contact",
    },
  ],

  aboutCards: [
    {
      label: "Primary Stack",
      title: "Microsoft Power Platform",
      desc: "Power BI · Power Apps · Power Automate · SharePoint · Copilot · DAX · VBA · Salesforce",
      tag: "Enterprise"
    },
    {
      label: "AI & Automation",
      title: "GenAI Application Builder",
      desc: "n8n · Local LLMs · ComfyUI · LoRA · LangChain · Prompt Engineering · AI Agents",
      tag: "Independent Projects"
    }
  ],

  projects: [
    {
      id: "kavach",
      type: "AI Security — Open Source",
      name: "Kavach",
      status: "live",
      statusLabel: "● Live",
      template: "featured",
      cardClass: "kavach",
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
      desc: "A customized local AI agent — running entirely locally, no cloud dependency, no data leaving your machine. Complex tasks with genuine context awareness.",
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
      desc: "AI image generation platform built on ComfyUI workflows and LoRA training. Custom model tuning, workflow automation, and a monetization layer.",
      tags: ["ComfyUI", "LoRA", "Python", "Product"],
      link: "#",
      linkText: "Coming Soon",
      linkStyle: "default",
    },
    {
      id: "amrutya",
      type: "Premium Brand — ECommerce",
      name: "Amrutya Essence™",
      status: "tm",
      statusLabel: "® TM",
      template: "candle",
      cardClass: "amrutya-card",
      desc: "Pure. Elegant. Timeless. A registered luxury candle brand — hand poured scented candles, concrete jar vessels, Valentine Collection, Arabian Oudh. Built entirely by me.",
      tags: ["Brand Design", "ECommerce", "Candles", "Trademark"],
      link: "https://amrutyaessence.com",
      linkText: "Visit Store",
      linkStyle: "gold",
    },
    {
      id: "portfolio",
      type: "Open Source Template — Portfolio",
      name: "Operator Portfolio",
      status: "live",
      statusLabel: "● Open Source",
      template: "terminal",
      cardClass: "portfolio-card",
      desc: "The portfolio you're looking at — built from curiosity, open sourced for everyone. Config driven, AI chat, built in terminal easter egg. No frameworks, no build tools, no paid plugins. Loads instantly. Deploy to Vercel in 10 minutes.",
      tags: ["HTML/CSS/JS", "Open Source", "Template", "Vercel", "MIT"],
      link: "https://github.com/LucidAkshay/operator-portfolio",
      linkText: "Get This Template",
      linkStyle: "lime",
    },
  ],

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
        "Architected Power Apps + Power BI + Power Automate for executive Finance teams — <strong>40% productivity gains</strong> across 2,900+ global associates",
        "Developed <strong>20+ real time Power BI dashboards</strong> transforming FP&A decision making",
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
        "Led JAPAC wide process analysis — mapped 25+ workflows with global adoption",
        "Authored 40+ BRDs/FRDs for Sales Technology deployments across the region",
        "Achieved <strong>90%+ user adoption</strong> through strategic change management",
        "Delivered executive presentations influencing strategic roadmaps",
      ],
      tags: ["BRD/FRD", "JAPAC", "Change Management", "Salesforce", "Process Mapping"],
    },
  ],

  certifications: [
    { type: "google", issuer: "Google", name: "Generative AI for Educators Certificate", date: "Dec 2025", active: true },
    { type: "google", issuer: "Google", name: "Gemini Certified Educator", date: "Dec 2025 · Expires Dec 2028", active: true },
    { type: "google", issuer: "Google", name: "Prompt Design in Vertex AI Skill Badge", date: "Dec 2025", active: true },
    { type: "be10x", issuer: "Be10x", name: "AI for Techies — Python Using AI Workshop", date: "Jun 2025", active: false },
    { type: "ensono", issuer: "Ensono", name: "India Spotlight Award — July 2024", date: "Aug 2024", active: false },
    { type: "microsoft", issuer: "Microsoft", name: "MOS: Excel Expert (Excel and Excel 2019)", date: "Jan 2020", active: false },
  ],

  awards: [
    { icon: "🏆", name: "India Spotlight Award", by: "Ensono · Jul 2024", note: "Going Above & Beyond" },
    { icon: "🔥", name: "Passion Award × 2", by: "VP + Director FP&A, Ensono", note: "Aug + Sep 2023" },
    { icon: "💡", name: "Innovator Award", by: "JAPAC VP, Oracle", note: "Mar 2021" },
    { icon: "🚀", name: "Rookie of the Quarter", by: "Oracle · Jan 2020", note: "Quick learner, keen on ideas" },
  ],

  bio: [
    `At <em>Ensono</em>, I architect Power Platform solutions for executive Finance teams — 20+ Power BI dashboards, automated workflows, a Power BI Center of Excellence serving 50+ employees, and a Copilot powered chatbot that cut support queries by 35%. Before Ensono, three years at <em>Oracle</em> leading regional process analysis, authoring 40+ BRDs, and getting named <em>Innovator of the Year</em> by the JAPAC VP.`,
    `Outside the day job: I build things. <em>Kavach</em> started because I was building AI agents and realized nobody had built a proper EDR for them. <em>Sarathi</em> is my local agent — running entirely locally, no API calls, no cloud. <em>Kamya</em> explores AI image generation at the boundary of ComfyUI and custom LoRA training.`,
    `And then there is <em>Amrutya Essence™</em> — a registered luxury candle brand built from the ground up. Because product development, supply chain thinking, and brand identity are the same mental model in a different medium.`,
  ],

  aboutStats: [
    { value: "14+", label: "Years Experience" },
    { value: "20+", label: "BI Dashboards" },
    { value: "50K+", label: "Records Cleaned" },
    { value: "98%", label: "Data Accuracy" },
  ],

  awardChips: [
    { text: "🏆 India Spotlight Award 2024", hot: true },
    { text: "✨ Spotlight of Month, Sep 2023", hot: false },
    { text: "🔥 Passion Award × 2 (VP + Director)", hot: false },
    { text: "💡 Innovator — Oracle JAPAC VP", hot: false },
    { text: "🚀 Rookie of the Quarter — Oracle", hot: false },
    { text: "🤝 Collaboration Award × 2", hot: false },
    { text: "🎯 Reliability Award", hot: false },
  ],

  relocationTargets: [
    { flag: "🇩🇪", country: "Germany" },
    { flag: "🇳🇱", country: "Netherlands" },
    { flag: "🇨🇦", country: "Canada" },
    { flag: "🇸🇬", country: "Singapore" },
    { flag: "🇦🇪", country: "UAE" },
  ],

  colors: {
    accent: "#FF3B1F",
    lime: "#B8FF26",
    gold: "#F4C73E",
    blue: "#4F8EF7",
  },
};

if (typeof module !== "undefined") module.exports = CONFIG;