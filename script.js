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
    ctaTitle: "Contact",
    ctaText: "Pour un stage ou une question, écrivez-moi par email.",
    ctaButton: "Écrire un email",
    copy: "Copier",
    copied: "Adresse copiée",
    toastContact: "Fiche contact téléchargée",
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
    ctaTitle: "Contact",
    ctaText: "For an internship or a question, send me an email.",
    ctaButton: "Send an email",
    copy: "Copy",
    copied: "Address copied",
    toastContact: "Contact card downloaded",
    mailSubject: (ev) => `We met at ${ev}`,
    mailBody: (name, ev) => `Hi ${name},\n\nWe met at ${ev}. `,
  },
};

const P = PROFILE;
const $ = (id) => document.getElementById(id);
const fullName = `${P.firstName} ${P.lastName}`;
let lang = "fr";

// Accepte soit une chaîne, soit un objet { fr, en }
const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.fr : v);

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function mailto() {
  const ui = UI[lang];
  const subject = encodeURIComponent(ui.mailSubject(t(P.event)));
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

  $("projects-list").innerHTML = P.projects
    .map(
      (x) => `<article class="entry">
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

  const groups = P.skills.map((g) => ({ k: t(g.group), v: t(g.items).join(", ") }));
  groups.push({ k: ui.languages, v: P.languages.map((l) => `${t(l.name)} (${t(l.level)})`).join(", ") });
  groups.push({ k: ui.interests, v: t(P.interests).join(", ") });
  $("skills-list").innerHTML = groups.map((g) => `<div><dt>${esc(g.k)}</dt><dd>${esc(g.v)}</dd></div>`).join("");
}

function setLang(l) {
  lang = l === "en" ? "en" : "fr";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
}

// ---------- Carte de contact (vCard) ----------
// Photo chargée à l'avance pour que le clic reste instantané (exigé par iOS)
let contactPhoto = "";
function loadContactPhoto() {
  fetch(P.contactPhoto || P.photo)
    .then((r) => (r.ok ? r.blob() : Promise.reject()))
    .then((b) => new Promise((res) => {
      const fr = new FileReader();
      fr.onload = () => res(String(fr.result).split(",")[1] || "");
      fr.readAsDataURL(b);
    }))
    .then((b64) => { contactPhoto = b64; })
    .catch(() => {});
}

// Les lignes vCard longues sont repliées à 75 caractères
function fold(line) {
  return line.match(/.{1,74}/g).join("\r\n ");
}

function vcard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${P.lastName};${P.firstName};;;`,
    `FN:${fullName}`,
    `TITLE:${t(P.title)}`,
    `EMAIL;TYPE=INTERNET:${P.email}`,
    P.phone ? `TEL;TYPE=CELL:${P.phone}` : "",
    P.linkedin ? `URL;TYPE=LinkedIn:${P.linkedin}` : "",
    P.github ? `URL;TYPE=GitHub:${P.github}` : "",
    `URL:${location.href.split(/[?#]/)[0]}`,
    "ORG:Mines Alès, Mines Saint-Étienne",
    `NOTE:${t(P.lookingFor)}`,
    contactPhoto ? fold(`PHOTO;ENCODING=b;TYPE=JPEG:${contactPhoto}`) : "",
    "END:VCARD",
  ];
  return lines.filter(Boolean).join("\r\n");
}

function downloadContact(e) {
  e.preventDefault();
  const blob = new Blob([vcard()], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${P.firstName}-${P.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  toast(UI[lang].toastContact);
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

// ---------- Initialisation ----------
(function init() {
  // Langue : ?lang=en dans l'URL > choix précédent > langue du téléphone
  const params = new URLSearchParams(location.search);
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const nav = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  setLang(params.get("lang") || saved || nav);

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  // Photo ou initiales
  const portrait = document.querySelector(".portrait");
  $("initials").textContent = (P.firstName[0] || "") + (P.lastName[0] || "");
  $("photo").onerror = () => portrait.classList.add("no-photo");
  $("photo").src = P.photo;

  if (P.linkedin) $("lnk-linkedin").href = P.linkedin; else $("lnk-linkedin").hidden = true;
  if (P.github) $("lnk-github").href = P.github; else $("lnk-github").hidden = true;

  $("btn-contact").addEventListener("click", downloadContact);
  loadContactPhoto();
  $("btn-copy").addEventListener("click", copyEmail);
  watchSections();
})();
