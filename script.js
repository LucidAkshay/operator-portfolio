if (typeof CONFIG !== 'undefined' && CONFIG.colors) {
      const r = document.documentElement.style;
      Object.entries(CONFIG.colors).forEach(([k, v]) => r.setProperty('--' + k, v));
    }

    function applyConfig() {
      if (typeof CONFIG === 'undefined') return;
      const C = CONFIG;
      const set = (id, attr, val) => { const el = document.getElementById(id); if (el) el[attr] = val; };
      const setMeta = (sel, val) => { const el = document.querySelector(sel); if (el) el.setAttribute('content', val); };

      document.title = C.siteTitle;
      setMeta('meta[name="description"]', C.siteDesc);
      set('meta-canonical', 'href', C.siteUrl);
      setMeta('meta[property="og:url"]', C.siteUrl);
      setMeta('meta[property="og:title"]', C.siteTitle);
      setMeta('meta[property="og:description"]', C.siteDesc);
      setMeta('meta[property="og:image"]', C.siteUrl + '/assets/og-preview.png');
      setMeta('meta[name="twitter:site"]', C.twitterHandle);
      setMeta('meta[name="twitter:creator"]', C.twitterHandle);
      setMeta('meta[name="twitter:title"]', C.siteTitle);
      setMeta('meta[name="twitter:description"]', C.siteDesc);

      const jld = document.getElementById('jsonld-person');
      if (jld) {
        const schema = JSON.parse(jld.textContent);
        schema.name = C.name;
        schema.url = C.siteUrl;
        schema.email = C.email;
        schema.image = C.siteUrl + '/assets/photo.jpg';
        schema.description = C.siteDesc;
        schema.sameAs = [C.linkedin, C.github, C.amrutya];
        schema.address.addressLocality = (C.locationFull || '').split(',')[0];
        schema.address.addressCountry = C.country;
        jld.textContent = JSON.stringify(schema, null, 2);
      }

      // Google Analytics Injection
      if (C.googleAnalyticsId) {
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${C.googleAnalyticsId}`;
        document.head.appendChild(gtagScript);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', C.googleAnalyticsId);
      }
    }
    applyConfig();

    function renderPageSections() {
      if (!CONFIG.pageSections) return;
      const main = document.getElementById('main-content');
      if (!main) return;
      
      main.innerHTML = CONFIG.pageSections.map(s => {
        let inner = '';
        if (s.tmpl) {
          const t = document.getElementById(s.tmpl);
          if (t) inner = t.innerHTML;
        } else {
          inner = `<div id="${s.containerId}" class="${s.containerClass}"></div>`;
          if (s.extraHtml) inner += s.extraHtml;
        }
        
        return `<section id="${s.id}" class="sec" aria-labelledby="${s.id}-heading" ${s.bg ? `style="background:${s.bg}"` : ''}>
    <div class="sec-head">
      <span class="sn" aria-hidden="true">${s.num}</span>
      <h2 class="st" id="${s.id}-heading">${s.title}</h2>
      <div class="sl" aria-hidden="true"></div>
    </div>
    ${inner}
  </section>`;
      }).join('');
    }

    function renderSection(containerId, dataArray, mappingFn) {
      const el = document.getElementById(containerId);
      if (!el || !dataArray) return;
      el.innerHTML = dataArray.map(mappingFn).join('');
    }

    function renderHeroTags() {
      const el = document.getElementById('hero-tags');
      if (!el || !CONFIG.heroTags) return;
      el.innerHTML = CONFIG.heroTags.map(t => `<span class="htag">${t}</span>`).join('');
    }

    function renderHeroStats() {
      const el = document.getElementById('hero-stats');
      if (!el || !CONFIG.stats) return;
      el.innerHTML = Object.values(CONFIG.stats).map(s =>
        `<div class="hstat"><div class="n">${s.value.replace(/[+%]/g, m => `<span class="sup">${m}</span>`)}</div><div class="l">${s.label}</div></div>`
      ).join('');
    }

    function renderNavLinks() {
      if (!CONFIG.navLinks) return;
      const dNav = document.getElementById('desktop-nav');
      if (dNav) dNav.innerHTML = CONFIG.navLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
      
      const mNav = document.getElementById('mob-nav-links');
      if (mNav) mNav.innerHTML = CONFIG.navLinks.map(l => `<a class="mob-link" href="${l.href}">${l.label}</a>`).join('');
    }

    function renderAiChips() {
      if (!CONFIG.aiChips) return;
      const askChips = document.getElementById('ask-chips');
      if (askChips) askChips.innerHTML = CONFIG.aiChips.map(c => 
        `<button class="chip" data-ai-query="${c.replace(/"/g, '&quot;')}">${c}</button>`
      ).join('');
    }

    function renderBootSequence() {
      const bootSeq = document.getElementById('boot-sequence');
      if (bootSeq && CONFIG.bootSequence) {
        bootSeq.innerHTML = CONFIG.bootSequence.map((item, i) => 
          `<div class="bl" id="b${i}">${item}</div>`
        ).join('');
      }

      document.querySelectorAll('.bl').forEach((b, i) => setTimeout(() => b.classList.add('s'), 180 + i * 230));
      let p = 0; const bf = document.getElementById('bfill');
      if (!bf) return;
      const bi = setInterval(() => {
        p = Math.min(100, p + Math.random() * 13 + 5); bf.style.width = p + '%';
        if (p >= 100) { clearInterval(bi); setTimeout(() => document.getElementById('boot').classList.add('done'), 360); }
      }, 105);
    }

    function renderTicker() {
      const el = document.getElementById('ticker-inner');
      if (!el || !CONFIG.ticker) return;
      const items = CONFIG.ticker.map(t => {
        const parts = t.split('◆');
        if (parts.length === 2) return `<span class="t-item">${parts[0].trim()} <span class="t-sep">◆</span> ${parts[1].trim()}</span>`;
        return `<span class="t-item">${t}</span>`;
      }).join('');
      el.innerHTML = items + items;
    }

    function renderServices() {
      renderSection('persona-grid', CONFIG.services, (s, i) => {
        const delay = i > 0 ? ` d${Math.min(i, 5)}` : '';
        const isExternal = s.ctaExternal || s.ctaLink.startsWith('http');
        const target = isExternal ? ' target="_blank" rel="noopener"' : '';
        return `<article class="pcard ${s.cardClass} reveal${delay}" role="listitem">
        <span class="p-icon" aria-hidden="true">${s.icon}</span>
        <div class="p-who">${s.audience}</div>
        <h3 class="p-ttl">${s.title}</h3>
        <p class="p-desc">${s.desc}</p>
        <ul class="p-offers" aria-label="Services offered">
          ${s.offers.map(o => `<li>${o}</li>`).join('')}
        </ul>
        <a href="${s.ctaLink}" class="p-cta"${target}>${s.ctaText}</a>
      </article>`;
      });
    }

    function renderTerminalHints() {
      const el = document.getElementById('term-cmds');
      if (!el || !CONFIG.terminalHints) return;
      el.innerHTML = CONFIG.terminalHints.map(cmd => `<button class="th-cmd" data-term-cmd="${cmd}">${cmd}</button>`).join('');
    }

    function projectCardFeatured(p, badgeClass, linkTarget, linkClass) {
      return `<article class="proj${p.cardClass ? ' ' + p.cardClass : ''} pfeat reveal" aria-label="${p.name} project">
        <div class="pfeat-body">
          <div class="ptyp">${p.type}</div>
          <h3 class="pname">${p.name} <span class="sbadge ${badgeClass}">${p.statusLabel}</span></h3>
          <p class="pdesc" style="margin:12px 0 16px">${p.desc}</p>
          <div class="ptags">${(p.tags || []).map(t => `<span class="ptag">${t}</span>`).join('')}</div>
          <a href="${p.link}" target="${linkTarget}" rel="noopener" class="plink${linkClass}" style="margin-top:20px">${p.linkText}</a>
        </div>
        <div class="pvis" aria-hidden="true"><div class="hexgrid"></div></div>
      </article>`;
    }

    function projectCardCandle(p, delay, badgeClass, linkTarget, linkClass) {
      return `<article class="proj${p.cardClass ? ' ' + p.cardClass : ''} reveal${delay}" aria-label="${p.name} project">
        <div class="amrutya-inner">
          <div class="amrutya-content">
            <div class="ptyp">${p.type}</div>
            <h3 class="pname">${p.name} <span class="sbadge ${badgeClass}">${p.statusLabel}</span></h3>
            <p class="pdesc">${p.desc}</p>
            <div class="ptags">${(p.tags || []).map(t => `<span class="ptag">${t}</span>`).join('')}</div>
            <a href="${p.link}" target="${linkTarget}" rel="noopener" class="plink${linkClass}">${p.linkText}</a>
          </div>
          <div class="amrutya-vis" aria-hidden="true">
            <div class="candle-mini">
              <div class="cm-flame"></div>
              <div class="cm-wick"></div>
              <div class="cm-body"><span class="cm-lbl">AE</span></div>
              <div class="cm-glow"></div>
            </div>
            <span class="cm-name">Amrutya Essence™</span>
          </div>
        </div>
      </article>`;
    }

    function projectCardTerminal(p, delay, badgeClass, linkTarget, linkClass) {
      return `<article class="proj${p.cardClass ? ' ' + p.cardClass : ''} reveal${delay}" aria-label="${p.name} project">
        <div class="ptyp">${p.type}</div>
        <h3 class="pname">${p.name} <span class="sbadge ${badgeClass}">${p.statusLabel}</span></h3>
        <div class="port-terminal" aria-hidden="true">
          <span class="pt-line"><span class="pt-prompt">$</span> <span class="pt-cmd">git clone operator-portfolio</span></span>
          <span class="pt-line"><span class="pt-prompt">$</span> <span class="pt-cmd">vercel --prod</span></span>
          <span class="pt-line pt-out">✓ <span class="pt-ok">Deployed to lucidakshay.dev</span></span>
          <span class="pt-cursor">█</span>
        </div>
        <p class="pdesc">${p.desc}</p>
        <div class="ptags">${(p.tags || []).map(t => `<span class="ptag">${t}</span>`).join('')}</div>
        <a href="${p.link}" target="${linkTarget}" rel="noopener" class="plink${linkClass}">${p.linkText}</a>
      </article>`;
    }

    function projectCardDefault(p, delay, badgeClass, linkTarget, linkClass) {
      return `<article class="proj${p.cardClass ? ' ' + p.cardClass : ''} reveal${delay}" aria-label="${p.name} project">
      <div class="ptyp">${p.type}</div>
      <h3 class="pname">${p.name} <span class="sbadge ${badgeClass}">${p.statusLabel}</span></h3>
      <p class="pdesc">${p.desc}</p>
      <div class="ptags">${(p.tags || []).map(t => `<span class="ptag">${t}</span>`).join('')}</div>
      <a href="${p.link}" target="${linkTarget}" rel="noopener" class="plink${linkClass}">${p.linkText}</a>
    </article>`;
    }

    function initHexgrids() {
      document.querySelectorAll('.hexgrid').forEach(hg => {
        if (hg._hexInterval) clearInterval(hg._hexInterval);
        hg.innerHTML = '';
        for (let i = 0; i < 36; i++) { const c = document.createElement('div'); c.className = 'hcell'; hg.appendChild(c); }
        const cells = [...hg.querySelectorAll('.hcell')]; let sp = 0;
        hg._hexInterval = setInterval(() => {
          cells.forEach(c => c.classList.remove('on', 'err'));
          for (let i = 0; i < Math.floor(Math.random() * 5) + 2; i++)cells[(sp + Math.floor(Math.random() * 10)) % 36].classList.add('on');
          if (Math.random() > .72) cells[Math.floor(Math.random() * 36)].classList.add('err');
          sp = (sp + 3) % 36;
        }, 300);
      });
    }

    function renderProjects() {
      const TEMPLATES = { featured: projectCardFeatured, candle: projectCardCandle, terminal: projectCardTerminal };
      renderSection('projects-grid', CONFIG.projects, (p, i) => {
        const delays = ['', 'd1', 'd2', 'd3', 'd4', 'd5'];
        const delay = i > 0 ? ` ${delays[Math.min(i, 5)]}` : '';
        const badgeClass = p.status === 'live' ? 'live' : p.status === 'dev' ? 'dev' : 'tm';
        const linkTarget = p.link.startsWith('http') ? '_blank' : '_self';
        const linkClass = p.linkStyle && p.linkStyle !== 'default' ? ` ${p.linkStyle}` : '';

        const templateFn = TEMPLATES[p.template];
        if (templateFn) return p.template === 'featured' ? templateFn(p, badgeClass, linkTarget, linkClass) : templateFn(p, delay, badgeClass, linkTarget, linkClass);
        return projectCardDefault(p, delay, badgeClass, linkTarget, linkClass);
      });

      initHexgrids();

      const cur = document.querySelector('.pt-cursor');
      if (cur) setInterval(() => cur.style.opacity = cur.style.opacity === '0' ? '1' : '0', 600);
    }

    function renderAbout() {
      const body = document.getElementById('about-body');
      if (body && CONFIG.bio) {
        body.innerHTML = CONFIG.bio.map(p => `<p>${p}</p>`).join('');
      }
      const awards = document.getElementById('about-awards');
      if (awards && CONFIG.awardChips) {
        awards.innerHTML = CONFIG.awardChips.map(a =>
          `<span class="aw-chip${a.hot ? ' hot' : ''}">${a.text}</span>`
        ).join('');
      }
      const stats = document.getElementById('about-stats');
      if (stats && CONFIG.aboutStats) {
        stats.innerHTML = CONFIG.aboutStats.map(s =>
          `<div class="stat-cell"><div class="stat-n">${s.value.replace(/[+%]/g, m => `<sup>${m}</sup>`)}</div><div class="stat-l">${s.label}</div></div>`
        ).join('');
      }
      
      renderSection('about-sidecards', CONFIG.aboutCards, (c, i) => `
        <div class="sc reveal d${i + 3}">
          <div class="sc-lbl">${c.label}</div>
          <div class="sc-ttl">${c.title}</div>
          <div class="sc-desc">${c.desc}</div>
          <span class="sc-tag">${c.tag}</span>
        </div>`);

      const intl = document.getElementById('intl-targets');
      if (intl && CONFIG.relocationTargets) {
        intl.innerHTML = CONFIG.relocationTargets.map(t =>
          `<span class="sc-tag intl-tag">${t.flag} ${t.country}</span>`
        ).join('');
      }
    }

    function renderCerts() {
      renderSection('certs-grid', CONFIG.certifications, (c, i) => {
        const delay = i > 0 ? ` d${i > 5 ? 5 : i}` : '';
        return `
      <div class="cert ${c.type} reveal${delay}" itemscope itemtype="https://schema.org/EducationalOccupationalCredential">
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-name" itemprop="name">${c.name}</div>
        <div class="cert-date">${c.date}${c.active ? ' — <span class="live">● Active</span>' : ''}</div>
      </div>`;
      });
      
      renderSection('awards-row', CONFIG.awards, (a, i) => {
        const delay = i > 0 ? ` d${i}` : '';
        return `
      <div class="aw-card reveal${delay}">
        <span class="aw-icon" aria-hidden="true">${a.icon}</span>
        <div class="aw-name">${a.name}</div>
        <div class="aw-by">${a.by}<br>${a.note}</div>
      </div>`;
      });
    }

    function renderExperience() {
      renderSection('timeline', CONFIG.experience, (e, i) => {
        const delay = i > 0 ? ` d${i}` : '';
        return `
    <div class="tl-item${e.current ? ' cur' : ''} reveal${delay}" itemscope itemtype="https://schema.org/OrganizationRole">
      <div class="tl-date">
        <strong>${e.current ? 'Current' : e.period}</strong>
        ${e.period}<br>${e.duration}<br><br>${e.location}
      </div>
      <div>
        <div class="tl-co" itemprop="roleName">${e.company}</div>
        <h3 class="tl-role" itemprop="hasOccupation">${e.role}</h3>
        <div class="tl-sub">${e.sub}</div>
        <ul class="tl-ul">
          ${(e.bullets || []).map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div class="tl-tags">
          ${(e.tags || []).map(t => `<span class="ttag">${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
      });
    }

    function renderContact() {
      const el = document.getElementById('contact-links');
      if (!el || !CONFIG) return;
      const C = CONFIG;
      el.innerHTML = `
    <a href="mailto:${C.email}" class="clink">
      <span class="cl-lbl">Email — General</span>
      <span class="cl-val">${C.email}</span>
      <span class="cl-arr">→</span>
    </a>
    <a href="mailto:${C.emailHire || 'hire@lucidakshay.dev'}" class="clink" style="border-color:rgba(79,142,247,.15)">
      <span class="cl-lbl">Email — Hiring & Roles</span>
      <span class="cl-val">${C.emailHire || 'hire@lucidakshay.dev'}</span>
      <span class="cl-arr" style="color:var(--blue)">→</span>
    </a>
    <a href="${C.linkedin}" target="_blank" rel="noopener" class="clink">
      <span class="cl-lbl">LinkedIn</span>
      <span class="cl-val">Akshay Sharma — Ensono</span>
      <span class="cl-arr">→</span>
    </a>
    <a href="${C.github}" target="_blank" rel="noopener" class="clink">
      <span class="cl-lbl">GitHub</span>
      <span class="cl-val">@${C.handle} — Kavach & projects</span>
      <span class="cl-arr">→</span>
    </a>
    <a href="${C.sponsor}" target="_blank" rel="noopener" class="clink spl">
      <span class="cl-lbl">♥ Sponsor</span>
      <span class="cl-val">Support open source work on GitHub</span>
      <span class="cl-arr" style="color:var(--lime)">→</span>
    </a>
    <a href="${C.amrutya}" target="_blank" rel="noopener" class="clink" style="border-color:rgba(244,199,62,.12)">
      <span class="cl-lbl">🕯 Candles</span>
      <span class="cl-val">Shop Amrutya Essence™</span>
      <span class="cl-arr" style="color:var(--gold)">→</span>
    </a>`;

      const intlAvail = document.getElementById('intl-avail');
      if (intlAvail && CONFIG.relocationTargets) {
        intlAvail.innerHTML = CONFIG.relocationTargets.map(t =>
          `<span class="av-t intl">${t.flag} ${t.country}</span>`
        ).join('');
      }
    }

    renderNavLinks();
    renderTicker();
    renderPageSections();
    renderServices();
    renderTerminalHints();
    renderHeroTags();
    renderHeroStats();
    renderProjects();
    renderAbout();
    renderCerts();
    renderExperience();
    renderContact();
    renderAiChips();
    renderBootSequence();

    const CR = document.getElementById('cr'), CD = document.getElementById('cd');
    let mx = -99, my = -99, rx = -99, ry = -99;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function l() { rx += (mx - rx) * .12; ry += (my - ry) * .12; CR.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`; CD.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`; requestAnimationFrame(l); })();
    function bindHover(sel, cls) {
      document.querySelectorAll(sel).forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add(cls));
        el.addEventListener('mouseleave', () => document.body.classList.remove(cls));
      });
    }
    setTimeout(() => {
      bindHover('a,button,.proj,.pcard,.clink,.chip,.cert,.aw-card,.mob-link', 'ch');
    }, 200);

    function toggleMobNav() {
      const btn = document.getElementById('mob-btn');
      const mnav = document.getElementById('mob-nav');
      const open = mnav.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
    function closeMobNav() {
      const btn = document.getElementById('mob-btn');
      const mnav = document.getElementById('mob-nav');
      mnav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', scrollY > 40);
      if (scrollY > 80 && document.getElementById('mob-nav')?.classList.contains('open')) closeMobNav();
    });

    function navScrollTo(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const navH = document.getElementById('nav')?.offsetHeight || 60;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        navScrollTo(id);
        if (document.getElementById('mob-nav')?.classList.contains('open')) closeMobNav();
        return;
      }
      
      if (e.target.closest('#btn-hire-nav')) {
        navScrollTo('contact');
        if (document.getElementById('mob-nav')?.classList.contains('open')) closeMobNav();
        return;
      }

      const thCmd = e.target.closest('.th-cmd');
      if (thCmd && thCmd.dataset.termCmd) {
        if (typeof openTermWith === 'function') openTermWith(thCmd.dataset.termCmd);
        return;
      }
      
      if (e.target.closest('#csend')) {
        if (typeof sendAI === 'function') sendAI();
        return;
      }
      
      const chip = e.target.closest('.chip');
      if (chip && chip.dataset.aiQuery) {
        if (typeof sendAI === 'function') sendAI(chip.dataset.aiQuery);
        return;
      }
    });

    const ro = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); ro.unobserve(e.target); }
    }), { threshold: .08 });
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
    }, 100);

    const termEl = document.getElementById('term'), tout = document.getElementById('tout'), tinput = document.getElementById('tinput');
    let th = [], hi = -1;
    const C = typeof CONFIG !== 'undefined' ? CONFIG : {};
    const CMDS = {
      help: `<span class="l">╔══════════════════════════════════════╗</span>
<span class="l">║   Akshay Operator Shell — Commands   ║</span>
<span class="l">╚══════════════════════════════════════╝</span>

<span class="w">ABOUT:</span>       <span class="d">whoami · stack · certs · awards · stats</span>
<span class="w">WORK WITH ME:</span><span class="b"> enterprise</span> · <span class="a">hire</span> · <span class="g">mentor</span> · <span class="l">collaborate</span> · <span class="d">developer</span>
<span class="w">PROJECTS:</span>    <span class="d">kavach · sarathi · kamya · amrutya · portfolio</span>
<span class="w">NAVIGATE:</span>    <span class="d">open [services|work|about|certs|ask|exp|contact]</span>
<span class="w">OTHER:</span>       <span class="d">download · sponsor · clear · exit</span>`,
      whoami: `<span class="w">${C.name || 'Akshay Sharma'}</span> / ${C.pronouns || 'He/Him'} / ${C.handle || 'LucidAkshay'}
<span class="d">Role:      </span><span class="w">${C.tagline || 'Senior BI Analyst & AI Application Builder'}</span>
<span class="d">Company:   </span><span class="l">Ensono</span> <span class="d">(Pune, Maharashtra · Hybrid)</span>
<span class="d">Location:  </span>${C.location || 'Jalandhar, Punjab, India'}
<span class="d">Experience:</span><span class="l"> ${C.stats?.years?.value || '14+'}  years</span> <span class="d">professional (since Oct 2011)</span>
<span class="d">LinkedIn:  </span><span class="l">${C.linkedin || ''}</span>`,
      enterprise: `<span class="b">══ For Enterprises ══</span>
<span class="w">Power BI CoE · Power Apps · Salesforce governance · Copilot integration</span>
<span class="l">40%</span> <span class="d">productivity gain · </span><span class="l">20+</span><span class="d"> dashboards · </span><span class="l">35%</span><span class="d"> query reduction</span>
<span class="a">→ akshay@lucidakshay.dev</span>`,
      hire: `<span class="a">══ Hiring Akshay ══</span>
<span class="l">BI Manager · Analytics Manager · AI Product · Technical PM</span>
<span class="d">International: 🇩🇪 🇳🇱 🇨🇦 🇸🇬 🇦🇪  — open to full relocation</span>
<span class="d">Also: freelance BI · AI app dev · founding team</span>
<span class="w">→ For hiring:</span>   <span class="a">hire@lucidakshay.dev</span>
<span class="w">→ For general:</span>  <span class="a">akshay@lucidakshay.dev</span>`,
      mentor: `<span class="g">══ Mentoring ══</span>
<span class="d">BI career planning · Power BI roadmaps · LinkedIn reviews</span>
<span class="d">Interview prep · Breaking into AI as an analyst</span>
<span class="d">14+ years experience navigated across domains</span>
<span class="g">→ akshay@lucidakshay.dev</span>`,
      collaborate: `<span class="l">══ Collaborate ══</span>
<span class="d">AI product concepts · BI for startups · workflow automation</span>
<span class="d">Start with a conversation. No commitment needed.</span>
<span class="l">→ akshay@lucidakshay.dev</span>`,
      developer: `<span class="l">Kavach — open source AI EDR</span>
<span class="d">${C.kavachRepo || 'https://github.com/LucidAkshay/kavach'}</span>
<span class="d">Contributions welcome: issues, PRs, discussions.</span>`,
      kavach: `<span class="w">Kavach — Tactical AI Workspace Monitor & EDR</span>
<span class="l">Status: ● Active · Open Source</span>
<span class="d">Watches AI agents for rogue behavior, unauthorized access, anomalous activity.</span>
<span class="l">${C.kavachRepo || 'https://github.com/LucidAkshay/kavach'}</span>`,
      sarathi: `<span class="w">Sarathi — Local AI Agent</span>
<span class="g">Status: ⚙ In Development</span>
<span class="d">On device agent. No cloud. No API calls. Your data stays yours.</span>`,
      kamya: `<span class="w">Kamya — AI Image Generation Platform</span>
<span class="g">Status: ⚙ In Development</span>
<span class="d">ComfyUI workflows + LoRA training. Custom fine tuning, monetization layer.</span>`,
      amrutya: `<span class="w">Amrutya Essence™ — Luxury Candle Brand</span>
<span class="l">Status: ● Live · Trade Mark Registered</span>
<span class="d">Hand poured scented candles · Concrete jar vessels</span>
<span class="l">${C.amrutya || 'https://amrutyaessence.com'}</span>`,
      stack: `<span class="w">Technical Stack</span>
<span class="b">BI:    </span><span class="d">Power BI · Power Apps · Power Automate · DAX · Salesforce · SQL · VBA</span>
<span class="l">AI:    </span><span class="d">n8n · Local LLMs · ComfyUI · LoRA · LangChain · Prompt Engineering</span>
<span class="w">Code:  </span><span class="d">Python · VBA · SQL · JavaScript</span>
<span class="g">Infra: </span><span class="d">Microsoft 365 · Azure · SharePoint · GitHub · Vercel</span>`,
      stats: `<span class="w">Career Numbers</span>
<span class="l">14+</span>  <span class="d">years professional (since Oct 2011)</span>
<span class="l">40%</span>  <span class="d">productivity gain · 2,900+ associates</span>
<span class="l">20+</span>  <span class="d">real time Power BI dashboards</span>
<span class="l">50K+</span> <span class="d">Salesforce records cleaned → 98% accuracy</span>
<span class="l">35%</span>  <span class="d">support query reduction via Copilot chatbot</span>
<span class="l">40+</span>  <span class="d">BRDs/FRDs authored at Oracle</span>
<span class="l">9+</span>   <span class="d">awards and recognitions</span>`,
      certs: `<span class="w">Certifications</span>
<span class="l">[Dec 2025]</span> <span class="d">Generative AI for Educators — </span><span class="b">Google</span>
<span class="l">[Dec 2025]</span> <span class="d">Gemini Certified Educator — </span><span class="b">Google</span>
<span class="l">[Dec 2025]</span> <span class="d">Prompt Design in Vertex AI — </span><span class="b">Google</span>
<span class="l">[Jun 2025]</span> <span class="d">AI for Techies — </span><span class="a">Be10x</span>
<span class="g">[Jan 2020]</span> <span class="d">Excel Expert MOS — </span><span class="b">Microsoft</span>`,
      awards: `<span class="w">Awards & Recognition</span>
<span class="g">🏆  India Spotlight Award</span>    <span class="d">Ensono · 2024</span>
<span class="g">🔥  Passion Award × 2</span>        <span class="d">VP + Director, Ensono · 2023</span>
<span class="g">💡  Innovator Award</span>           <span class="d">JAPAC VP, Oracle · 2021</span>
<span class="g">🚀  Rookie of the Quarter</span>     <span class="d">Oracle · 2020</span>`,
      sponsor: `<span class="w">Sponsor Akshay's Work</span>
<span class="d">Kavach and this portfolio template are free and open source.</span>
<span class="l">→ ${C.sponsor || 'https://github.com/sponsors/LucidAkshay'}</span>`,
      portfolio: `<span class="w">Operator Portfolio — Open Source Template</span>
<span class="l">Status: ● Live · MIT License</span>
<span class="d">The portfolio you're looking at — open sourced for everyone.</span>
<span class="d">No frameworks. No paid plugins. Config driven. Sub 400ms load.</span>
<span class="d">Edit config.js → deploy to Vercel → done in 10 minutes.</span>
<span class="l">→ github.com/LucidAkshay/operator-portfolio</span>`,
      download: `<span class="w">Get This Portfolio Template</span>
<span class="d">Built out of curiosity — I thought everyone should benefit from it.</span>
<span class="d">No frameworks. No paid plugins. One HTML file + one serverless function.</span>
<span class="d">Edit config.js → deploy to Vercel → done.</span>
<span class="l">→ ${C.templateRepo || 'https://github.com/LucidAkshay/operator-portfolio'}</span>
<span class="d">Star it if it helps. That is the only payment I need.</span>`,
      clear: '__clear__', exit: '__exit__'
    };

    function openTerm() {
      termEl.classList.add('open');
      if (!tout.innerHTML.trim()) {
        addTLine(`<span class="l">Akshay Operator Shell</span>\n<span class="d">Type </span><span class="l">help</span><span class="d"> to see all commands. </span><span class="l">Esc</span><span class="d"> or </span><span class="l">Ctrl+\`</span><span class="d"> to close.\n</span>`);
      }
      setTimeout(() => tinput.focus(), 80);
    }
    function closeTerm() { termEl.classList.remove('open') }
    function escapeHTML(s) { const d = document.createElement('div'); d.appendChild(document.createTextNode(s)); return d.innerHTML; }
    function addTLine(h) { tout.innerHTML += h + '\n'; termEl.querySelector('.tbody').scrollTop = 99999; }
    function openTermWith(cmd) {
      openTerm();
      setTimeout(() => {
        addTLine(`<span class="d">akshay@dev:~$</span> <span class="w">${escapeHTML(cmd)}</span>`);
        const r = CMDS[cmd];
        if (r) addTLine(r);
        else addTLine(`<span class="a">command not found: ${escapeHTML(cmd)}</span>`);
      }, 120);
    }

    tinput.addEventListener('keydown', e => {
      if (e.key === 'ArrowUp') { hi = Math.min(hi + 1, th.length - 1); tinput.value = th[hi] || ''; return; }
      if (e.key === 'ArrowDown') { hi = Math.max(hi - 1, -1); tinput.value = hi === -1 ? '' : th[hi]; return; }
      if (e.key !== 'Enter') return;
      const raw = tinput.value.trim(); if (!raw) return;
      const parts = raw.toLowerCase().split(/\s+/);
      const cmd = parts[0]; const arg = parts[1];
      th.unshift(raw); hi = -1;
      addTLine(`<span class="d">akshay@dev:~$</span> <span class="w">${escapeHTML(raw)}</span>`);
      tinput.value = '';
      if (cmd === 'exit') { closeTerm(); return; }
      if (cmd === 'clear') { tout.innerHTML = ''; return; }
      if (cmd === 'open' && arg) {
        const map = { services: 'services', help: 'services', work: 'work', about: 'about', certs: 'certs', ask: 'ask', exp: 'exp', experience: 'exp', contact: 'contact' };
        const target = map[arg];
        if (target) { closeTerm(); setTimeout(() => navScrollTo(target), 300); addTLine(`<span class="l">→ navigating to ${escapeHTML(arg)}...</span>`); return; }
        else { addTLine(`<span class="a">unknown section: ${escapeHTML(arg)}</span>\n<span class="d">options: services work about certs ask exp contact</span>`); return; }
      }
      const r = CMDS[cmd];
      if (r) addTLine(r);
      else addTLine(`<span class="a">command not found: ${escapeHTML(cmd)}</span>\n<span class="d">Type </span><span class="l">help</span><span class="d"> to see available commands.</span>`);
    });

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === '`') { e.preventDefault(); termEl.classList.contains('open') ? closeTerm() : openTerm(); }
      if (e.key === 'Escape') {
        if (termEl.classList.contains('open')) closeTerm();
        closeMobNav();
      }
    });

    const cmsgs = document.getElementById('cmsgs'), cin = document.getElementById('cin'), csend = document.getElementById('csend');
    let chatHist = [];
    function addMsg(role, text) {
      const m = document.createElement('div'); m.className = 'cmsg ' + role;
      const lbl = document.createElement('span'); lbl.className = 'cmsg-lbl'; lbl.textContent = role === 'ai' ? 'Akshay AI' : 'You';
      const c = document.createElement('div'); c.className = 'cmsg-c'; c.textContent = text;
      m.appendChild(lbl); m.appendChild(c); cmsgs.appendChild(m); cmsgs.scrollTop = 99999;
      c.setAttribute('aria-label', role === 'ai' ? 'AI response: ' + text : 'Your message: ' + text);
    }
    function showTyping() {
      const t = document.createElement('div'); t.className = 'cmsg ai'; t.id = 'typing';
      const lbl = document.createElement('span'); lbl.className = 'cmsg-lbl'; lbl.textContent = 'Akshay AI';
      const c = document.createElement('div'); c.className = 'cmsg-c';
      c.innerHTML = '<div class="typing" aria-label="Thinking"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div>';
      t.appendChild(lbl); t.appendChild(c); cmsgs.appendChild(t); cmsgs.scrollTop = 99999;
    }
    function hideTyping() { const t = document.getElementById('typing'); if (t) t.remove(); }
    async function sendAI(preset) {
      const q = preset || cin.value.trim(); if (!q) return;
      cin.value = ''; csend.disabled = true;
      addMsg('user', q); chatHist.push({ role: 'user', content: q }); showTyping();
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: chatHist.slice(-8) })
        });
        const data = await res.json();
        const ans = data.answer || data.error || 'Something went wrong — please try again.';
        chatHist.push({ role: 'assistant', content: ans });
        hideTyping(); addMsg('ai', ans);
      } catch (err) {
        hideTyping(); addMsg('ai', 'Connection issue — the AI backend may not be deployed yet. Check /api/chat.');
      }
      csend.disabled = false;
    }
    cin.addEventListener('keydown', e => { if (e.key === 'Enter') sendAI(); });