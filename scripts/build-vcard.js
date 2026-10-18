// Génère les fiches contact (.vcf) à partir de data.js.
// À relancer après avoir modifié nom, email, téléphone, titre ou photo :
//   node scripts/build-vcard.js
// Les fichiers sont des liens directs : sur iPhone, ils ouvrent la fiche « Nouveau contact ».
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const P = new Function(fs.readFileSync(path.join(root, "data.js"), "utf8") + "; return PROFILE;")();
const SITE = "https://antojfr.github.io/cv-en-ligne-/";

const t = (v, lang) => (v && typeof v === "object" ? v[lang] ?? v.fr : v);

// Échappement des valeurs texte (RFC 6350) : antislash, virgule, point-virgule, retour à la ligne
const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");

// Repli des lignes à 75 octets sans couper un caractère UTF-8
function fold(line) {
  const out = [];
  let cur = "";
  for (const ch of line) {
    const limit = out.length ? 74 : 75; // les lignes de continuation commencent par une espace
    if (Buffer.byteLength(cur + ch) > limit) {
      out.push(cur);
      cur = "";
    }
    cur += ch;
  }
  out.push(cur);
  return out.join("\r\n ");
}

const photo = fs.readFileSync(path.join(root, P.contactPhoto || P.photo)).toString("base64");

for (const lang of ["fr", "en"]) {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(P.lastName)};${esc(P.firstName)};;;`,
    `FN:${esc(`${P.firstName} ${P.lastName}`)}`,
    `TITLE:${esc(t(P.title, lang))}`,
    "ORG:Mines Alès / Mines Saint-Étienne",
    `EMAIL;TYPE=INTERNET:${P.email}`,
    P.phone ? `TEL;TYPE=CELL:${P.phone}` : "",
    `URL:${SITE}`,
    P.linkedin ? `URL;TYPE=LinkedIn:${P.linkedin}` : "",
    P.github ? `URL;TYPE=GitHub:${P.github}` : "",
    `NOTE:${esc(t(P.lookingFor, lang))}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${photo}`,
    "END:VCARD",
  ].filter(Boolean);

  const dir = path.join(root, "contact", lang);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${P.firstName}-${P.lastName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.vcf`);
  fs.writeFileSync(file, lines.map(fold).join("\r\n") + "\r\n");
  console.log("écrit", path.relative(root, file));
}
