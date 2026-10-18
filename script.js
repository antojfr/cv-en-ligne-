// Textes fixes de l'interface (tes infos à toi sont dans data.js)
const UI = {
  fr: {
    available: "Disponible",
    addContact: "Ajouter à mes contacts",
    downloadCv: "CV PDF",
    navFigures: "Profil",
    keyFigures: "Chiffres clés",
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    skills: "Compétences",
    languages: "Langues",
    interests: "Centres d'intérêt",
    viewCode: "Voir le code sur GitHub",
    forTo: "Pour",
    forLink: "Voir le projet",
    mailSubjectFor: (co) => `Suite au Forum Perspectives : ${co}`,
    current: "En cours",
    navChallenge: "Défi",
    chTitle: "Pas convaincu ?",
    chLead: "Soumettez-moi un problème, je vous rends une solution.",
    chText: "Un exercice de probas, un petit jeu de données à modéliser, une question de pricing : décrivez le défi et le délai qui vous convient. Je vous renvoie mon travail par email.",
    chName: "Nom",
    chCompany: "Entreprise",
    chEmail: "Email",
    chTask: "Le défi",
    chSend: "Envoyer le défi",
    chSending: "Envoi…",
    chMissing: "Merci de remplir le nom, l'email et le défi.",
    chBadEmail: "Cette adresse email ne semble pas valide.",
    chFail: "L'envoi n'a pas marché. Votre email s'ouvre avec le défi déjà rédigé.",
    chDone: (name) => `Merci ${name}, défi bien reçu. Je reviens vers vous par email.`,
    ctaTitle: "Contact",
    ctaText: "Pour un stage ou une question, écrivez-moi par email.",
    ctaButton: "Écrire un email",
    copy: "Copier",
    copied: "Adresse copiée",
    mailSubject: (ev) => `Rencontre au ${ev}`,
    mailBody: (name, ev) => `Bonjour ${name},\n\nNous nous sommes rencontrés au ${ev}. `,
  },
  en: {
    available: "Available",
    addContact: "Save to contacts",
    downloadCv: "Résumé",
    navFigures: "Profile",
    keyFigures: "Key figures",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    languages: "Languages",
    interests: "Interests",
    viewCode: "View code on GitHub",
    forTo: "For",
    forLink: "See the project",
    mailSubjectFor: (co) => `Following Forum Perspectives: ${co}`,
    current: "In progress",
    navChallenge: "Challenge",
    chTitle: "Not convinced?",
    chLead: "Send me a problem, I'll send you back a solution.",
    chText: "A probability puzzle, a small dataset to model, a pricing question: describe the challenge and the deadline that suits you. I'll email you my work.",
    chName: "Name",
    chCompany: "Company",
    chEmail: "Email",
    chTask: "The challenge",
    chSend: "Send the challenge",
    chSending: "Sending…",
    chMissing: "Please fill in your name, email and the challenge.",
    chBadEmail: "This email address doesn't look valid.",
    chFail: "Sending failed. Your email app opens with the challenge already written.",
    chDone: (name) => `Thanks ${name}, challenge received. I'll get back to you by email.`,
    ctaTitle: "Contact",
    ctaText: "For an internship or a question, send me an email.",
    ctaButton: "Send an email",
    copy: "Copy",
    copied: "Address copied",
    mailSubject: (ev) => `We met at ${ev}`,
    mailBody: (name, ev) => `Hi ${name},\n\nWe met at ${ev}. `,
  },
};

const P = PROFILE;
const $ = (id) => document.getElementById(id);
const fullName = `${P.firstName} ${P.lastName}`;
let lang = "fr";

// Entreprise ciblée par le lien (?for=abc), sinon null
const TARGET = (() => {
  const id = (new URLSearchParams(location.search).get("for") || "").toLowerCase();
  return (typeof TARGETS !== "undefined" && TARGETS.find((x) => x.id === id)) || null;
})();

// Accepte soit une chaîne, soit un objet { fr, en }
const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.fr : v);

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function mailto() {
  const ui = UI[lang];
  const subject = encodeURIComponent(TARGET ? ui.mailSubjectFor(TARGET.name) : ui.mailSubject(t(P.event)));
  const body = encodeURIComponent(ui.mailBody(P.firstName, t(P.event)));
  return `mailto:${P.email}?subject=${subject}&body=${body}`;
}

function entry({ when, title, org, details, desc }) {
  const list = (details || []).length ? `<ul>${details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : "";
  return `<li class="entry">
    <span class="when">${esc(when)}</span>
    <h3>${esc(title)}</h3>
    <span class="org">${esc(org)}</span>
    ${desc ? `<p class="desc">${esc(desc)}</p>` : ""}
    ${list}
  </li>`;
}

// ---------- Courbe de performance (SVG, données réelles du backtest) ----------
function equityChart(c) {
  const W = 340, H = 190, L = 30, R = 8, T = 10, B = 22;
  const n = c.dates.length;
  const all = [...c.top20, ...c.sp500, ...c.ew];
  const lo = Math.min(0.75, ...all), hi = Math.max(...all) * 1.04;
  const x = (i) => L + (i / (n - 1)) * (W - L - R);
  const y = (v) => T + (1 - (v - lo) / (hi - lo)) * (H - T - B);
  const path = (s) => s.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join("");
  const dec = lang === "fr" ? "," : ".";
  const fmt = (v) => v.toFixed(2).replace(".", dec);

  let grid = "";
  for (let v = 1; v <= hi; v += 1) {
    grid += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" class="g"/><text x="${L - 6}" y="${y(v) + 3}" class="ax" text-anchor="end">${v}x</text>`;
  }
  c.dates.forEach((d, i) => {
    if (d.endsWith("-01")) grid += `<text x="${x(i)}" y="${H - 6}" class="ax" text-anchor="middle">${d.slice(0, 4)}</text>`;
  });
  const end = (s, cls) => `<circle cx="${x(n - 1)}" cy="${y(s[n - 1])}" r="2.6" class="${cls}"/>`;
  const ui = lang === "fr"
    ? { title: "Performance hors échantillon", top: "Top 20 % (modèle)", sp: "S&P 500", ew: "Univers équipondéré", note: "Base 1 début 2019, avant frais. Courbes reprises de la figure du dépôt GitHub." }
    : { title: "Out-of-sample performance", top: "Top 20% (model)", sp: "S&P 500", ew: "Equal-weight universe", note: "Base 1 at the start of 2019, gross of costs. Curves taken from the GitHub repository's figure." };

  return `<figure class="chart">
    <figcaption>${esc(ui.title)}, ${esc(c.dates[0].slice(0, 4))}-${esc(c.dates[n - 1].slice(0, 4))}</figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(ui.title)}">
      ${grid}
      <path d="${path(c.ew)}" class="s-ew"/>
      <path d="${path(c.sp500)}" class="s-sp"/>
      <path d="${path(c.top20)}" class="s-top"/>
      ${end(c.ew, "d-ew")}${end(c.sp500, "d-sp")}${end(c.top20, "d-top")}
    </svg>
    <ul class="legend">
      <li class="k-top">${esc(ui.top)} <b>${fmt(c.top20[n - 1])}x</b></li>
      <li class="k-sp">${esc(ui.sp)} <b>${fmt(c.sp500[n - 1])}x</b></li>
      <li class="k-ew">${esc(ui.ew)} <b>${fmt(c.ew[n - 1])}x</b></li>
    </ul>
    <p class="chart-note">${esc(ui.note)}</p>
  </figure>`;
}

function render() {
  const ui = UI[lang];
  document.documentElement.lang = lang;
  document.title = `CV ${fullName}`;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = ui[el.dataset.i18n];
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", b.dataset.lang === lang);
  });

  $("ref").textContent = t(P.eventFull);
  $("name").innerHTML = `<span>${esc(P.firstName)}</span><span>${esc(P.lastName)}</span>`;
  $("title").textContent = t(P.title);
  $("looking").textContent = t(P.lookingFor);
  $("photo").alt = fullName;
  $("about").textContent = t(P.about);

  if (TARGET) {
    $("for-box").hidden = false;
    $("for-to").textContent = `${ui.forTo} ${TARGET.name}`;
    $("for-msg").textContent = t(TARGET.msg);
    showLogo(TARGET);
    document.title = `CV ${fullName}, ${TARGET.name}`;
  }

  $("btn-contact").href = t(P.vcard);
  $("btn-cv").href = t(P.cvPdf);
  $("btn-cv").target = "_blank";
  $("btn-mail-cta").href = mailto();
  $("lnk-mail").href = mailto();
  $("mail-text").textContent = P.email;
  $("footer").textContent = `${fullName}, ${new Date().getFullYear()}`;

  $("key-figures").innerHTML = (P.keyFigures || [])
    .map(
      (f) => `<div class="fig">
        <dt>${esc(t(f.k))}</dt><span class="lead" aria-hidden="true"></span>
        <dd>${esc(t(f.v))}${f.ref ? `<small>${esc(t(f.ref))}</small>` : ""}</dd>
      </div>`
    )
    .join("");

  $("experience-list").innerHTML = P.experience
    .map((x) => entry({ when: t(x.dates), title: t(x.role), org: x.company, details: t(x.details) }))
    .join("");

  $("education-list").innerHTML = P.education
    .map((x) => entry({ when: t(x.dates), title: t(x.degree), org: x.school, desc: t(x.details) }))
    .join("");

  // Le projet le plus pertinent pour l'entreprise ciblée passe en premier
  const projects = TARGET
    ? [...P.projects].sort((a, b) => (b.id === TARGET.focus) - (a.id === TARGET.focus))
    : P.projects;
  $("projects-list").innerHTML = projects
    .map(
      (x) => `<article class="entry${TARGET && x.id === TARGET.focus ? " focus" : ""}">
        <span class="when">${esc(t(x.dates))}</span>
        <h3>${esc(t(x.name))}</h3>
        <p class="desc">${esc(t(x.description))}</p>
        ${x.chart ? equityChart(x.chart) : ""}
        ${x.metrics ? `<dl class="metrics">${x.metrics.map((m) => `<div><dt>${esc(t(m.k))}</dt><dd>${esc(t(m.v))}</dd></div>`).join("")}</dl>` : ""}
        ${x.note ? `<p class="fine">${esc(t(x.note))}</p>` : ""}
        <p class="stack">${(x.tags || []).map(esc).join(", ")}</p>
        ${x.link ? `<a class="repo" href="${esc(x.link)}" target="_blank" rel="noopener">${esc(ui.viewCode)}</a>` : ""}
      </article>`
    )
    .join("");

  $("current-list").innerHTML = (P.current || [])
    .map(
      (x) => `<li class="entry">
        <span class="when">${esc(t(x.status))}</span>
        <h3>${esc(t(x.title))}</h3>
        <p class="desc">${esc(t(x.desc))}</p>
        ${x.link ? `<a class="repo" href="${esc(x.link)}" target="_blank" rel="noopener">${esc(ui.viewCode)}</a>` : ""}
      </li>`
    )
    .join("");
  $("current").hidden = !(P.current || []).length;

  const groups = P.skills.map((g) => ({ k: t(g.group), v: t(g.items).join(", ") }));
  groups.push({ k: ui.languages, v: P.languages.map((l) => `${t(l.name)} (${t(l.level)})`).join(", ") });
  groups.push({ k: ui.interests, v: t(P.interests).join(", ") });
  $("skills-list").innerHTML = groups.map((g) => `<div><dt>${esc(g.k)}</dt><dd>${esc(g.v)}</dd></div>`).join("");
}

// ---------- Bandeau défilant ----------
function renderTicker() {
  const items = (P.ticker || [])
    .map((x) => `<span class="tick"><b>${esc(x.sym)}</b> <span class="${/^[-−]/.test(x.val) ? "down" : "up"}">${esc(x.val)}</span></span>`)
    .join("");
  // Deux moitiés identiques (boucle continue), chacune assez longue pour un grand écran
  const half = items.repeat(3);
  $("ticker").innerHTML = half + half;
}

function setLang(l) {
  lang = l === "en" ? "en" : "fr";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
}

function copyEmail() {
  const done = () => toast(UI[lang].copied);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(P.email).then(done, selectEmail);
  } else {
    selectEmail();
  }
}

function selectEmail() {
  const range = document.createRange();
  range.selectNodeContents($("mail-text"));
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

let toastTimer;
function toast(msg) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

// Surligne la section visible dans la navigation
function watchSections() {
  if (!("IntersectionObserver" in window)) return;
  const nav = document.querySelector(".sections");
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => {
        const on = a.getAttribute("href") === `#${en.target.id}`;
        a.classList.toggle("active", on);
        // Fait défiler le menu horizontalement seulement, jamais la page
        if (on) nav.scrollTo({ left: a.offsetLeft - nav.offsetLeft - 16, behavior: "smooth" });
      });
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  links.forEach((a) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) io.observe(target);
  });
}

// ---------- Logo de l'entreprise ciblée ----------
// Fichier local si fourni, sinon icône du site via le service de Google.
// Si l'image manque ou est trop petite (icône générique), on garde les initiales.
function showLogo(target) {
  const box = $("for-logo");
  if (box.dataset.done) return;
  box.dataset.done = "1";
  const words = target.name.split(/\s+/).filter((w) => /^[A-ZÉ]/.test(w));
  const acronym = words.find((w) => /^[A-Z]{2,4}$/.test(w));
  $("for-initials").textContent = acronym || words.slice(0, 2).map((w) => w[0]).join("");
  // Sources essayées dans l'ordre : fichier local, icône haute résolution du site,
  // puis services d'icônes de Google et DuckDuckGo
  const d = target.domain;
  const sources = [
    target.logo,
    d && `https://www.${d}/apple-touch-icon.png`,
    d && `https://${d}/apple-touch-icon.png`,
    d && `https://www.google.com/s2/favicons?domain=${d}&sz=128`,
    d && `https://icons.duckduckgo.com/ip3/${d}.ico`,
  ].filter(Boolean);
  tryLogo(box, target, sources);
}

function tryLogo(box, target, sources) {
  const src = sources.shift();
  if (!src) return; // aucune source n'a marché : on garde les initiales
  const img = new Image();
  img.alt = target.name;
  img.referrerPolicy = "no-referrer";
  img.onload = () => {
    // Les icônes génériques (globe 16 px) sont trop petites : source suivante
    if (src !== target.logo && img.naturalWidth < 32) return tryLogo(box, target, sources);
    box.classList.add("has-img");
    box.prepend(img);
  };
  img.onerror = () => tryLogo(box, target, sources);
  img.src = src;
}

// ---------- Compteur de visites (GoatCounter, sans cookies) ----------
// Chaque lien d'entreprise est compté sur sa propre page : /for/abc, /for/sg…
function countPath() {
  return TARGET ? `/for/${TARGET.id}` : "/";
}

function loadCounter() {
  if (!P.goatcounter || /^(localhost|127\.)/.test(location.hostname)) return;
  window.goatcounter = { path: countPath() };
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = `https://${P.goatcounter}.goatcounter.com/count`;
  document.head.appendChild(s);
}

// Actions importantes : contact enregistré, CV ouvert, lien GitHub ou LinkedIn
function track(action) {
  try {
    window.goatcounter?.count?.({ path: `${action}${countPath() === "/" ? "" : countPath()}`, title: action, event: true });
  } catch (e) {}
}

// ---------- Formulaire « Pas convaincu ? » ----------
// Envoi par FormSubmit (sans serveur) vers l'adresse de data.js ; si ça échoue, l'app mail prend le relais.
function setupChallenge() {
  const form = $("ch-form");
  if (TARGET) $("ch-company").value = TARGET.name;
  form.addEventListener("input", () => { $("ch-error").hidden = true; });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ui = UI[lang];
    const v = (id) => $(id).value.trim();
    const err = $("ch-error");
    err.hidden = true;
    if ($("ch-honey").value) return; // robot
    if (!v("ch-name") || !v("ch-email") || !v("ch-task")) {
      err.textContent = ui.chMissing; err.hidden = false; return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("ch-email"))) {
      err.textContent = ui.chBadEmail; err.hidden = false; $("ch-email").focus(); return;
    }

    const payload = {
      nom: v("ch-name"),
      entreprise: v("ch-company"),
      email: v("ch-email"),
      defi: v("ch-task"),
      lien: TARGET ? `?for=${TARGET.id}` : "(page normale)",
      _subject: `Défi CV : ${v("ch-company") || v("ch-name")}`,
      _replyto: v("ch-email"),
      _template: "table",
    };
    const btn = $("ch-submit");
    btn.disabled = true;
    btn.textContent = ui.chSending;
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${P.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const res = await r.json().catch(() => ({}));
      if (!r.ok || String(res.success) === "false") throw new Error(res.message || r.status);
      form.hidden = true;
      $("ch-done").textContent = ui.chDone(payload.nom);
      $("ch-done").hidden = false;
      track("defi");
    } catch (ex) {
      err.textContent = ui.chFail; err.hidden = false;
      const body = `${payload.nom}${payload.entreprise ? ` (${payload.entreprise})` : ""}\n${payload.email}\n\n${payload.defi}`;
      location.href = `mailto:${P.email}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<span>${esc(ui.chSend)}</span>`;
    }
  });
}

// ---------- Initialisation ----------
(function init() {
  // Langue : ?lang=en dans l'URL > choix précédent > langue du téléphone
  const params = new URLSearchParams(location.search);
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const nav = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  renderTicker();
  setLang(params.get("lang") || saved || nav);

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  // Photo ou initiales
  const portrait = document.querySelector(".portrait");
  $("initials").textContent = (P.firstName[0] || "") + (P.lastName[0] || "");
  $("photo").onerror = () => portrait.classList.add("no-photo");
  $("photo").src = P.photo;

  if (P.linkedin) $("lnk-linkedin").href = P.linkedin; else $("lnk-linkedin").hidden = true;
  if (P.github) $("lnk-github").href = P.github; else $("lnk-github").hidden = true;

  $("btn-contact").addEventListener("click", () => track("contact"));
  $("btn-cv").addEventListener("click", () => track("cv"));
  $("lnk-github").addEventListener("click", () => track("github"));
  $("lnk-linkedin").addEventListener("click", () => track("linkedin"));
  $("lnk-mail").addEventListener("click", () => track("email"));
  loadCounter();
  $("btn-copy").addEventListener("click", copyEmail);
  setupChallenge();
  watchSections();
})();
