// Textes fixes de l'interface (tes infos à toi sont dans data.js)
const UI = {
  fr: {
    hello: "> Merci de m'avoir scanné 👋",
    addContact: "Ajouter le contact",
    downloadCv: "CV (EN)",
    tabProfile: "Profil",
    tabExperience: "Expérience",
    tabEducation: "Études",
    tabSkills: "Skills",
    funFact: "Le saviez-vous ?",
    about: "À propos",
    experience: "Expériences",
    education: "Formation",
    projects: "Projets",
    skills: "Compétences",
    languages: "Langues",
    interests: "Centres d'intérêt",
    viewCode: "Voir le code",
    ctaTitle: "On garde contact ?",
    ctaText: "Un stage, une question ou simplement envie d'échanger : écrivez-moi, je réponds vite.",
    ctaButton: "M'envoyer un message",
    footer: "Partagé via NFC · ",
    toastContact: "Contact prêt à être enregistré ✓",
    toastPrint: "Choisissez « Enregistrer en PDF »",
    mailSubject: (ev) => `Rencontre à ${ev}`,
    mailBody: (name) => `Bonjour ${name},\n\nNous nous sommes rencontrés au forum. `,
  },
  en: {
    hello: "> Thanks for scanning me 👋",
    addContact: "Save contact",
    downloadCv: "Résumé",
    tabProfile: "Profile",
    tabExperience: "Experience",
    tabEducation: "Education",
    tabSkills: "Skills",
    funFact: "Fun fact",
    about: "About me",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    languages: "Languages",
    interests: "Interests",
    viewCode: "View code",
    ctaTitle: "Let's stay in touch",
    ctaText: "An internship, a question or just a chat: drop me a line, I reply fast.",
    ctaButton: "Send me a message",
    footer: "Shared via NFC · ",
    toastContact: "Contact ready to save ✓",
    toastPrint: "Choose “Save as PDF”",
    mailSubject: (ev) => `We met at ${ev}`,
    mailBody: (name) => `Hi ${name},\n\nWe met at the career fair. `,
  },
};

const P = PROFILE;
const $ = (id) => document.getElementById(id);
const fullName = `${P.firstName} ${P.lastName}`;
const pdfAvailable = { fr: false, en: false };
let lang = "fr";
let tab = "profile";

// Accepte soit une chaîne, soit un objet { fr, en }
const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.fr : v);

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function tags(list) {
  return (list || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("");
}

function mailto() {
  const ui = UI[lang];
  const subject = encodeURIComponent(ui.mailSubject(t(P.event)));
  const body = encodeURIComponent(ui.mailBody(P.firstName));
  return `mailto:${P.email}?subject=${subject}&body=${body}`;
}

const GITHUB_ICON = document.querySelector("#lnk-github svg").outerHTML;

function render() {
  const ui = UI[lang];
  document.documentElement.lang = lang;
  document.title = `${fullName} — ${t(P.title)}`;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = ui[el.dataset.i18n];
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", b.dataset.lang === lang);
  });

  $("hello").textContent = ui.hello;
  $("name").textContent = fullName;
  $("title").textContent = t(P.title);
  $("looking").textContent = t(P.lookingFor);
  $("funfact").textContent = t(P.funFact);
  $("about").textContent = t(P.about);
  $("location").textContent = t(P.location);
  $("photo").alt = fullName;

  $("btn-mail-cta").href = mailto();
  $("lnk-mail").href = mailto();
  $("footer").textContent = ui.footer + fullName;

  $("highlights").innerHTML = (P.highlights || [])
    .map((h) => `<div class="stat"><strong data-value="${esc(t(h.value))}">${esc(t(h.value))}</strong><span>${esc(t(h.label))}</span></div>`)
    .join("");

  $("experience").innerHTML = P.experience
    .map(
      (x) => `<li>
        <span class="dates">${esc(t(x.dates))}</span>
        <strong>${esc(t(x.role))}</strong>
        <div class="org">${esc(x.company)}</div>
        ${(t(x.details) || []).length ? `<ul>${t(x.details).map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
      </li>`
    )
    .join("");

  $("education").innerHTML = P.education
    .map(
      (x) => `<li>
        <span class="dates">${esc(t(x.dates))}</span>
        <strong>${esc(t(x.degree))}</strong>
        <div class="org">${esc(x.school)}</div>
        ${t(x.details) ? `<p>${esc(t(x.details))}</p>` : ""}
      </li>`
    )
    .join("");

  $("projects").innerHTML = P.projects
    .map(
      (x) => `<article class="card project">
        <div class="head"><h3>${esc(t(x.name))}</h3><span class="dates">${esc(t(x.dates))}</span></div>
        <p>${esc(t(x.description))}</p>
        ${x.metrics ? `<dl class="metrics">${x.metrics.map((m) => `<div><dt>${esc(t(m.k))}</dt><dd>${esc(t(m.v))}</dd></div>`).join("")}</dl>` : ""}
        ${x.note ? `<p class="note">${esc(t(x.note))}</p>` : ""}
        <div class="tags">${tags(x.tags)}</div>
        ${x.link ? `<a class="repo" href="${esc(x.link)}" target="_blank" rel="noopener">${GITHUB_ICON}${esc(ui.viewCode)} ↗</a>` : ""}
      </article>`
    )
    .join("");

  $("skills").innerHTML = P.skills
    .map((g) => `<div class="skill-group"><h3>${esc(t(g.group))}</h3><div class="tags">${tags(t(g.items))}</div></div>`)
    .join("");

  $("languages").innerHTML = P.languages
    .map((l) => `<li><strong>${esc(t(l.name))}</strong> <span>${esc(t(l.level))}</span></li>`)
    .join("");

  $("interests").innerHTML = tags(t(P.interests));
}

function setLang(l) {
  lang = l === "en" ? "en" : "fr";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
  countUp();
}

function setTab(name) {
  tab = name;
  document.querySelectorAll(".tabs button").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
  document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.dataset.panel === tab));
}

// ---------- Animation des chiffres clés ----------
function countUp() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".stat strong").forEach((el) => {
    const m = el.dataset.value.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m;
    const sep = num.includes(",") ? "," : ".";
    const decimals = (num.split(/[.,]/)[1] || "").length;
    const target = parseFloat(num.replace(",", "."));
    const start = performance.now();
    const dur = 1100;
    const step = (now) => {
      const k = Math.min(1, (now - start) / dur);
      const v = target * (1 - Math.pow(1 - k, 3));
      el.textContent = pre + v.toFixed(decimals).replace(".", sep) + post;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

// ---------- Bandeau défilant ----------
function renderTicker() {
  const items = (P.ticker || [])
    .map((x) => `<span class="tick"><b>${esc(x.sym)}</b><span class="${x.up ? "up" : ""}">${esc(x.val)}</span></span>`)
    .join("");
  $("ticker").innerHTML = items + items; // dupliqué pour une boucle continue
}

// ---------- Carte de contact (vCard) ----------
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
    `NOTE:${t(P.lookingFor)}`,
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

// ---------- CV PDF (repli : impression de la page) ----------
function downloadCv(e) {
  e.preventDefault();
  if (pdfAvailable[lang]) {
    window.open(P.cvPdf[lang], "_blank", "noopener");
  } else {
    toast(UI[lang].toastPrint);
    setTimeout(() => window.print(), 600);
  }
}

async function checkPdfs() {
  for (const l of ["fr", "en"]) {
    try {
      const r = await fetch(P.cvPdf[l], { method: "HEAD", cache: "no-store" });
      pdfAvailable[l] = r.ok;
    } catch (err) {
      pdfAvailable[l] = false;
    }
  }
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
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

// ---------- Initialisation ----------
(function init() {
  // Langue : ?lang=en dans l'URL > choix précédent > langue du téléphone
  const params = new URLSearchParams(location.search);
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const nav = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";

  $("brand").textContent = (P.firstName[0] + P.lastName[0]).toUpperCase() + ".CV";
  renderTicker();
  setLang(params.get("lang") || saved || nav);
  setTab(params.get("tab") || "profile");

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  document.querySelectorAll(".tabs button").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));

  // Photo ou initiales
  const avatar = document.querySelector(".avatar");
  $("initials").textContent = (P.firstName[0] || "") + (P.lastName[0] || "");
  $("photo").onerror = () => avatar.classList.add("no-photo");
  $("photo").src = P.photo;

  // Liens
  if (P.linkedin) $("lnk-linkedin").href = P.linkedin; else $("lnk-linkedin").hidden = true;
  if (P.github) $("lnk-github").href = P.github; else $("lnk-github").hidden = true;

  $("btn-contact").addEventListener("click", downloadContact);
  $("btn-cv").addEventListener("click", downloadCv);
  checkPdfs();
})();
